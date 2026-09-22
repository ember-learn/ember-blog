---
title: Ember 7.3 Released
authors:
  - jared-galanis
date: 2026-09-18T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-7-x
---

<!--
DRAFT NOTES (remove before publishing)

This post was drafted against v7.3.0-beta.1 of ember-source (2026-08-09) and
ember-cli (2026-09-01). Before publishing, re-check:

- The `date` above targets the Friday of release week (week of 2026-09-14, per the handbook rule: six weeks from the planned Monday, regardless of slips). Adjust if the release slips.
- ember-source v7.3.0 stable (tagged 2026-09-14) checked on 2026-09-15: identical to
  beta.1 plus #21591 (modifier leak) and #21573 (docs link), both folded in above.
  ember-cli v7.3.0 stable (tagged 2026-09-21) checked on 2026-09-22: only #11060 (prepare beta)
  and #11064 (promote + dependency updates, no major bumps). Blueprint pins ember-source ~7.3.0
  and @warp-drive/core ~5.8.2, so no WarpDrive section.
  Mixin / Evented / Proxy deprecations are 7.4 unless backported.
- Confirm the hello-world bundle numbers with the final release.
-->

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v7.3. This is a standard minor release as part of the [Ember Release Train process](https://emberjs.com/releases/).

This release brings a new way to create reactive state that doesn't need a class, makes a serious dent in the size of the JavaScript bundle for apps that are on the modern build system, and fixes a handful of long-standing bugs in the router 🎉

## Ember.js 7.3

Ember.js 7.3 introduces one new feature per [RFC #1071](https://rfcs.emberjs.com/id/1071-overload-tracked-for-non-class-use/): `tracked` can now be used outside of classes, and, arguably more importantly, both forms of `tracked` let you configure equality so that setting a value to what it already was no longer triggers a re-render. The release also includes some internal restructuring that lets bundlers drop a lot more unused code from `ember-source`, and ships eight bugfixes. There are no new deprecations.

### `tracked()` outside of classes

Since Ember Octane, the way you create reactive state in Ember has been to put a `@tracked` property on a class:

```js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Counter extends Component {
  @tracked count = 0;

  increment = () => this.count++;
}
```

This works great and is still what we recommend for the vast majority of app code, but it does mean that if you want a single reactive value you first need a class to put it on. That gets in the way in a few places: helpers, modifiers, and resources that are written as plain functions, tests that want a bit of state to poke at, and demos where every extra line of boilerplate is a distraction from the thing you are actually trying to show.

Ember 7.3 implements [RFC #1071](https://rfcs.emberjs.com/id/1071-overload-tracked-for-non-class-use/), which does two things to the existing `tracked` import. First, when you call it as a function with an initial value it returns a standalone reactive value:

```gjs
import { tracked } from '@glimmer/tracking';

const count = tracked(0);
const increment = () => count.value++;

<template>
  Count is: {{count.value}}

  <button {{on "click" increment}}>add one</button>
</template>
```

Reading `count.value` in a template (or in a getter that a template uses) entangles with the render exactly like reading a `@tracked` property would, and writing to it causes a re-render. Alongside `.value` there are a few function short-hands that are handy when you want to partially apply things in a template with `{{fn}}`:

```js
count.get();                // same as reading count.value
count.set(2);               // same as assigning count.value
count.update((n) => n + 1); // write based on the current value, without consuming it
count.freeze();             // prevent any further writes
```

One nice pattern that this unlocks is keeping mutable state private to a class while exposing a read-only view of it, without having to reach for a second property:

```js
import { tracked } from '@glimmer/tracking';

export class Session {
  #user = tracked(null);

  get user() {
    return this.#user.value;
  }

  async login() {
    this.#user.value = await fetchCurrentUser();
  }
}
```

If any of this looks familiar it's because the idea has been floating around the ecosystem for a while. It was prototyped as `Cell` in [Starbeam](https://starbeamjs.com/guides/fundamentals/cells.html) and has been available to Ember developers as `cell` from [ember-resources](https://github.com/NullVoxPopuli/ember-resources). Now it's built in, with no extra import, and it gives us a much better tool for teaching. Rather than `@tracked` being "magic" that only works with decorators, we can now describe it as syntactic sugar on top of a reactive value that you could build yourself.

### Configurable equality

The second thing RFC #1071 does may matter more to existing apps than the standalone form. Until now, setting a `@tracked` property always notified consumers, even when you set it to the exact value it already held, so `this.count = this.count` re-rendered everything that read `count`. That was a historical choice and there was no way to change it. Both forms of `tracked` now accept an options object with an `equals` function that decides whether a write counts as a change.

The standalone form defaults to `Object.is`, so `count.value = count.value` does *not* re-render, and you can pass `{ equals: () => false }` to get the old always-notify behaviour. The `@tracked` decorator keeps its always-notify default for backwards compatibility, and you can now opt a property into equality-based notification:

```js
class Counter {
  @tracked({ equals: (a, b) => a === b }) count = 0;

  // this no longer causes a re-render
  noop = () => (this.count = this.count);
}
```

You can read more, including a couple of edge cases around passing plain objects as the initial value, in the [API docs for `tracked`](https://api.emberjs.com/ember/release/functions/@glimmer%2Ftracking/tracked).

Introduced in [emberjs/ember.js PR #21471](https://github.com/emberjs/ember.js/pull/21471)

### Smaller bundles for Vite apps

In the [Ember 7.2 release blog](/ember-released-7-2#toc_ember-source-is-now-type-module) we talked about setting `type: "module"` on `ember-source` and said that it wasn't enough on its own to shrink your bundle. This release is where that starts to pay off.

`ember-source` now declares `"sideEffects": false` in its `package.json`. That is a hint to bundlers like Vite and Rollup that importing one of Ember's internal modules never has side effects on any other module, which means the bundler is free to drop any module that your app never actually uses. Along with that, some of Ember's internals have been restructured so that a small app no longer pulls in the old rendering pipeline and some classic-era pieces.

The effect is significant. The compressed JavaScript for the hello-world app in Ember's own smoke tests went from around 64.5 kB before this work started to about 37 kB with these changes, or roughly 42% smaller. If you are curious about the details, the numbers are tracked in [PR #21456](https://github.com/emberjs/ember.js/pull/21456).

This only affects apps that consume the ESM sources of `ember-source` directly, which is every app on the [Embroider and Vite build system that has been the default since Ember 6.8](/ember-released-6-8#toc_embroider-and-vite-by-default). If you are still on the classic ember-cli build you won't see any change, which is one more reason to look at the [Vite codemod](https://github.com/mainmatter/ember-vite-codemod) if you haven't yet.

Introduced in [emberjs/ember.js PR #21456](https://github.com/emberjs/ember.js/pull/21456) and [PR #21462](https://github.com/emberjs/ember.js/pull/21462)

### Bug Fixes

Ember.js 7.3 introduces 8 bugfixes:

- [#21203](https://github.com/emberjs/ember.js/pull/21203) Fix `@model` becomes `undefined` or changes to the wrong route's model during Glimmer component `willDestroy`
- [#21591](https://github.com/emberjs/ember.js/pull/21591) Destroy dynamic modifiers that were set after the initial render, fixing a memory leak
- [#21409](https://github.com/emberjs/ember.js/pull/21409) Fix query params trigger model refresh unnecessarily
- [#21410](https://github.com/emberjs/ember.js/pull/21410) Fix query param redirects during active transitions
- [#21521](https://github.com/emberjs/ember.js/pull/21521) Treat nullish `<LinkTo>` `@query` as an empty query object
- [#21524](https://github.com/emberjs/ember.js/pull/21524) Allow `CoreObject#init` to be called with no arguments
- [#21406](https://github.com/emberjs/ember.js/pull/21406) Add a helpful assertion when `{{component}}` is given an unsupported argument
- [#21407](https://github.com/emberjs/ember.js/pull/21407) Improve `{{debugger}}` message for template-only components

A couple of these deserve a special mention. The first one fixes a bug that was [reported in 2020](https://github.com/emberjs/ember.js/issues/18987) and, from the git history, has probably existed since `@model` was introduced in Ember 3.14. If a component in a route template read `@model` in its `willDestroy` hook while you were transitioning to a different route, it could see `undefined` or, worse, the *other* route's model. The fix adds a check on the controller's identity so the outlet cannot be redirected mid-teardown, and the new smoke test covers transitions to sibling, parent, cousin, and unrelated routes.

The second one is a memory leak that has been with us since Ember 3.25. If a dynamic modifier like `{{this.mod}}` started out as `undefined` and was set to a real modifier after the first render (or was swapped for a different modifier later), its destructor never ran when the element went away, so anything the modifier had set up, such as the floating-ui observers in ember-primitives, leaked. The fix registers the updating opcode with its block so teardown reaches it. The PR is tagged for backport to the LTS release, so watch for it in a 6.12 patch.

The query param fixes are part of a [larger effort to improve the router's test coverage](https://github.com/emberjs/ember.js/issues/19609), and each of them closes an issue that people have been hitting for years: parent routes no longer re-run their `model` hook when you transition to a child route with unchanged query params, and redirecting from `beforeModel` back to the same route with different query params no longer loses those params or crashes on a direct visit. And if you have ever had a `<LinkTo>` blow up because you passed `@query={{this.maybeParams}}` and it happened to be `null`, that now works as expected.

Finally, a small security hardening that is not in the list above: the guard that stops `set()` from `@ember/object` walking through `__proto__` and `constructor` in a path now also blocks `prototype`, closing a prototype pollution edge case. See [PR #21451](https://github.com/emberjs/ember.js/pull/21451).

### Documentation

The API docs for `{{each}}` and `{{each-in}}` now document that they support native `Set` and `Map` respectively, which they have done since the iterable refactor but never said so. See [PR #21523](https://github.com/emberjs/ember.js/pull/21523). The `Ember.Templates.helpers` docs also link to `@ember/helper` correctly again ([PR #21573](https://github.com/emberjs/ember.js/pull/21573)).

## Ember CLI 7.3

Ember CLI 7.3 is a maintenance release for `ember-cli` itself: no new features, no deprecations, and no bugfixes. The only changes there are the routine dependency updates that happen as part of the release train: `ember-cli` itself picked up small updates to things like `testem` and `morgan`, and the default app blueprint now generates apps on `ember-source` 7.3 with the current `@embroider/macros`, `@glint/template`, and `eslint-plugin-warp-drive` versions. None of those updates crossed a major version boundary, so there is nothing to do when you upgrade. As with 7.2, newly generated apps still get WarpDrive 5.8.

### Tests run through testem directly

The [`@ember/app-blueprint`](https://github.com/ember-cli/ember-app-blueprint) that `ember new` uses did get one change worth knowing about. Since Ember 6.8, `pnpm test` in a new app has built the app with Vite and then handed the built output to `ember test --path dist`. In 7.3 that second step calls [testem](https://github.com/testem/testem) directly:

```json
"test": "vite build --mode development && testem ci --port 0"
```

with a `cwd: 'dist'` line added to `testem.cjs` so testem serves the built app. Nothing changes about how your tests are written or which browser runs them. `ember test` was only ever a thin wrapper around testem for Vite apps, and calling testem directly removes a layer that could make it unclear which tool owned the flags you were passing. If you already have an app you do not need to change anything, but if you want the same setup you can copy the script and the one config line.

Introduced in [ember-cli/ember-app-blueprint PR #307](https://github.com/ember-cli/ember-app-blueprint/pull/307)


Most of the tooling team's attention this cycle has been on the [blueprint model that was extracted in 7.2](/ember-released-7-2#toc_blueprint-model-extracted-into-its-own-package) and on the new v2 addon blueprint, so watch this space.

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
