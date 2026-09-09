---
title: Ember 7.3 Released
authors:
  - jared-galanis
date: 2026-09-25T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-7-x
---

<!--
DRAFT NOTES (remove before publishing)

This post was drafted against v7.3.0-beta.1 of ember-source (2026-08-09) and
ember-cli (2026-09-01). Before publishing, re-check:

- The `date` above targets the Friday of release week (week of 2026-09-21). Adjust if the release slips.
- Compare the final v7.3.0 release notes against the beta.1 changelogs. Later
  betas can add entries, and anything merged to ember.js `main` after the beta
  cut (e.g. mixin / Evented / Proxy deprecations) goes to 7.4 unless backported.
- The Ember CLI section is empty as of beta.1. Fill it in or trim it to a
  sentence once the stable release is out.
- Confirm the hello-world bundle numbers with the final release.
-->

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v7.3. This is a standard minor release as part of the [Ember Release Train process](https://emberjs.com/releases/).

This release brings a new way to create reactive state that doesn't need a class, makes a serious dent in the size of the JavaScript bundle for apps that are on the modern build system, and fixes a handful of long-standing bugs in the router 🎉

## Ember.js 7.3

Ember.js 7.3 introduces one new feature, `tracked()` being usable outside of classes per [RFC #1071](https://rfcs.emberjs.com/id/1071-overload-tracked-for-non-class-use/), includes some internal restructuring that lets bundlers drop a lot more unused code from `ember-source`, and ships seven bugfixes. There are no new deprecations.

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

Ember 7.3 implements [RFC #1071](https://rfcs.emberjs.com/id/1071-overload-tracked-for-non-class-use/), which overloads the existing `tracked` import so that when you call it as a function with an initial value it returns a standalone reactive value:

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

**A note on equality.** The standalone form takes an optional second argument with an `equals` function that decides whether a write should notify consumers, and it defaults to `Object.is`. That means `count.value = count.value` will *not* cause a re-render. This is a deliberate difference from the `@tracked` decorator, which (for historical reasons) always notifies consumers when you set it, even to the same value. If you want that behaviour on a standalone value you can pass `{ equals: () => false }`. And going the other direction, the `@tracked` decorator now accepts the same options object, so you can opt a class property into equality-based notification:

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

`ember-source` now declares `"sideEffects": false` in its `package.json`. That is a hint to bundlers like Vite and Rollup that importing one of Ember's internal modules never has side effects on any other module, which means the bundler is free to drop any module that your app never actually uses. Along with that, some of Ember's internals have been restructured so that a small app no longer accidentally pulls in the old rendering pipeline and a number of classic-era pieces that it will never call.

The effect is significant. In our smoke tests, the compressed JavaScript for a "hello world" app built with the default Vite blueprint went from around 64.5 kB before this work started to about 37 kB with these changes, or roughly 42% smaller. A real application that uses routing, services, and a handful of addons won't see anything like that number because it is using a lot more of the framework, but every app should see *some* reduction, and the internal refactoring that made this possible is continuing. If you are curious about the details, the numbers are tracked in [PR #21456](https://github.com/emberjs/ember.js/pull/21456).

This only affects apps that consume the ESM sources of `ember-source` directly, which is every app on the [Embroider and Vite build system that has been the default since Ember 6.8](/ember-released-6-8#toc_embroider-and-vite-by-default). If you are still on the classic ember-cli build you won't see any change, which is one more reason to look at the [Vite codemod](https://github.com/mainmatter/ember-vite-codemod) if you haven't yet.

Introduced in [emberjs/ember.js PR #21456](https://github.com/emberjs/ember.js/pull/21456) and [PR #21462](https://github.com/emberjs/ember.js/pull/21462)

### Bug Fixes

Ember.js 7.3 introduces 7 bugfixes:

- [#21203](https://github.com/emberjs/ember.js/pull/21203) Fix `@model` becomes `undefined` or changes to the wrong route's model during Glimmer component `willDestroy`
- [#21409](https://github.com/emberjs/ember.js/pull/21409) Fix query params trigger model refresh unnecessarily
- [#21410](https://github.com/emberjs/ember.js/pull/21410) Fix query param redirects during active transitions
- [#21521](https://github.com/emberjs/ember.js/pull/21521) Treat nullish `<LinkTo>` `@query` as an empty query object
- [#21524](https://github.com/emberjs/ember.js/pull/21524) Allow `CoreObject#init` to be called with no arguments
- [#21406](https://github.com/emberjs/ember.js/pull/21406) Add a helpful assertion when `{{component}}` is given an unsupported argument
- [#21407](https://github.com/emberjs/ember.js/pull/21407) Improve `{{debugger}}` message for template-only components

A couple of these deserve a special mention. The first one fixes a bug that has been [open since 2019](https://github.com/emberjs/ember.js/issues/18987) and, from the git history, has probably existed since `@model` was introduced in Ember 3.14. If a component in a route template read `@model` in its `willDestroy` hook while you were transitioning to a different route, it could see `undefined` or, worse, the *other* route's model. This mostly showed up as confusing bugs in cleanup code, and it is now fixed for every kind of transition.

The query param fixes are part of a [larger effort to improve the router's test coverage](https://github.com/emberjs/ember.js/issues/19609), and each of them closes an issue that people have been hitting for years: parent routes no longer re-run their `model` hook when you transition to a child route with unchanged query params, and redirecting from `beforeModel` back to the same route with different query params no longer loses those params or crashes on a direct visit. And if you have ever had a `<LinkTo>` blow up because you passed `@query={{this.maybeParams}}` and it happened to be `null`, that now works as expected.

Finally, a small security hardening that is not in the list above: the guard that stops `set()` from `@ember/object` walking through `__proto__` and `constructor` in a path now also blocks `prototype`, closing a prototype pollution edge case. See [PR #21451](https://github.com/emberjs/ember.js/pull/21451).

### Documentation

The API docs for `{{each}}` and `{{each-in}}` now document that they support native `Set` and `Map` respectively, which they have done since the iterable refactor but never said so. See [PR #21523](https://github.com/emberjs/ember.js/pull/21523).

## Ember CLI 7.3

Ember CLI 7.3 is a maintenance release. It updates the dependencies for `ember-cli` and both classic blueprints in line with the release train, but introduces no new features, deprecations, or bugfixes. Most of the tooling team's attention this cycle has been on the [blueprint model that was extracted in 7.2](/ember-released-7-2#toc_blueprint-model-extracted-into-its-own-package) and on the new v2 addon blueprint, so watch this space.

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
