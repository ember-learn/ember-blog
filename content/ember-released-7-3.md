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
- WarpDrive section: confirm with Chris Thoburn (a) whether the 7.3 blueprint
  will bump to 5.9 (changes the second paragraph), and (b) the import path for
  `<Paginate />`, since the README examples still import it from
  `@warp-drive/ember/experiments` even though PR #10945 tagged the APIs public.
-->

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v7.3. This is a standard minor release as part of the [Ember Release Train process](https://emberjs.com/releases/).

This release brings a new way to create reactive state that doesn't need a class, makes a serious dent in the size of the JavaScript bundle for apps that are on the modern build system, and fixes a handful of long-standing bugs in the router 🎉 We also have a lot to say about EmberData (WarpDrive) 5.9, which shipped a few days before this release.

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

## EmberData (WarpDrive) 5.9

WarpDrive, the data library that still ships the `ember-data` and `@ember-data/*` packages as its legacy layer, has not been on the six-week release train for a while now, so it doesn't always get a section in these posts. Every package, old name and new, is published together at the same version. This time it earns one. Version 5.9.0 shipped on the 5th of September and it rolls up about five months of work since 5.8.2, including the first ergonomic way to author schemas, a codemod to get you there from your existing models, a set of pagination utilities, and a very large documentation push.

One thing to be clear about up front: the Ember 7.3 app blueprint still pins the WarpDrive packages at 5.8.2. If you want 5.9 in a new or existing app you will need to bump the `@warp-drive/*` (and, if you still have them, `@ember-data/*`) dependencies yourself. Nothing in 5.9 requires Ember 7.3, and nothing in Ember 7.3 requires WarpDrive 5.9.

### Schema DSL

If you have looked at WarpDrive's "Polaris" mode you will know that the modern way to describe your data is with schemas, plain objects that describe a resource's fields, rather than with `Model` classes and `@attr` decorators. Schemas are great for the runtime, because they are cheap to create and easy to ship over the wire, but writing them out by hand as JSON-ish objects is not a lot of fun, and you lose all the editor support that you get from writing a class.

The new `@warp-drive/schema-dsl` package lets you write a schema as a decorated TypeScript class:

```ts
// app/schemas/user.ts
import { Resource, field, id } from '@warp-drive/schema-dsl';

@Resource
class User {
  @id declare id: string;
  @field declare firstName: string;
  @field declare lastName: string;
  @field declare email: string;
}
```

The trick is that these decorators do nothing at runtime. A Vite plugin (`schemaDSL()` from `@warp-drive/schema-dsl/vite`) compiles the classes into schema objects at build time and exposes them through a `virtual:warp-drive-schemas` module that you register with your store, so the class itself never ships to the browser. This release includes the full set of field and class decorators along with `schemaObject` and `schemaArray` for nested structures, and supports both the modern and legacy schema output formats. You can read more in the [Schema DSL guide](https://warp-drive.io/guide/schemas/dsl).

Introduced in [warp-drive PR #10508](https://github.com/warp-drive-data/warp-drive/pull/10508), [PR #10904](https://github.com/warp-drive-data/warp-drive/pull/10904), and [PR #10994](https://github.com/warp-drive-data/warp-drive/pull/10994)

### Model to schema codemod

Going along with the Schema DSL, there is now a codemod that will migrate your existing `Model` classes (and mixins) to WarpDrive schemas:

```bash
pnpx @ember-data/codemods apply migrate-to-schema
```

This is an early release. The codemod already works well for simpler applications, but it does not yet generate TypeScript imports or register the schemas on the store for you, so expect to do some cleanup after running it. The codemods CLI is also now distributed as a portable Node bundle so it should work the same on every platform.

Introduced in [warp-drive PR #10466](https://github.com/warp-drive-data/warp-drive/pull/10466)

### Pagination utilities

`@warp-drive/ember` has had `<Request />` and `<Await />` for a while now as layout-less components that manage the state of a request for you. This release adds a matching set of tools for paginated collections: a `PaginationState` (and `getPaginationState()` for use in JavaScript), a `<Paginate />` component that mirrors the `<Request />` API, an `<EachLink />` component for rendering page links, and a new `<:idle>` block. `<Paginate />` has a `@mode` argument to choose between classic paged navigation and an infinite, accumulating list, and page caches are shared between every component paginating the same collection.

```gjs
<Paginate @request={{@request}} @mode="infinite">
  <:content as |pages features|>
    {{#each pages.data as |item|}}{{item.title}}{{/each}}
    {{#if pages.hasNext}}
      <button {{on "click" features.loadNext}}>Load more</button>
    {{/if}}
  </:content>
</Paginate>
```

It all works because WarpDrive understands pagination links in response documents, so if your API doesn't provide them you will want a request handler that adds them. See the [`@warp-drive/ember` documentation](https://warp-drive.io/api/@warp-drive/ember/) for the details.

Introduced in [warp-drive PR #10014](https://github.com/warp-drive-data/warp-drive/pull/10014)

### Generators without ember-cli

If you read the [Ember CLI section of the 7.2 release blog](/ember-released-7-2#toc_blueprint-model-extracted-into-its-own-package) you will remember that we are working towards being able to run generators without depending on all of ember-cli. WarpDrive has taken a similar step from the other direction: the `model`, `adapter`, `serializer`, and `transform` blueprints (and their test counterparts) are now backed by plain generation functions in the `warp-drive` CLI package, and you can run them directly with `warp-drive generate model <name>`. The `ember generate` versions still work exactly as before, they are now thin shims over the same code. Two legacy behaviours were dropped from the generators as part of this: classic `Model.extend()` output and pods layout.

Introduced in [warp-drive PR #10866](https://github.com/warp-drive-data/warp-drive/pull/10866)

### Other changes

A few smaller things that are worth knowing about:

- [#10560](https://github.com/warp-drive-data/warp-drive/pull/10560) Cache notifications now have a `'local' | 'remote'` channel. This fixes a class of bugs where Polaris-mode immutable records could miss updates, and it is fully backwards compatible. If you write a custom cache you may want to read the PR.
- [#10614](https://github.com/warp-drive-data/warp-drive/pull/10614) Attribute notifications are batched, which removes a significant amount of overhead when many records update at once.
- [#10551](https://github.com/warp-drive-data/warp-drive/pull/10551) `useLegacyStore()` and `useRecommendedStore()` accept a callback for defining handlers, which makes stateful handlers much easier to set up.
- [#10463](https://github.com/warp-drive-data/warp-drive/pull/10463) The `Fetch` handler supports `HEAD` requests.
- [#10613](https://github.com/warp-drive-data/warp-drive/pull/10613) `eslint-plugin-warp-drive` gained a `template-always-use-request-content` rule that flags `<Request />` usages that never use their result, with a new `recommended-templates` config for `.gjs` and `.gts` files.
- [#10528](https://github.com/warp-drive-data/warp-drive/pull/10528) A new `ReactiveStorage` experiment for reactive local data.

### Documentation

Well over a hundred of the entries in the 5.9 changelog are documentation, the result of a concerted effort to document the entire public API surface of every WarpDrive package, from the request pipeline types through to the legacy adapter and serializer classes. That documentation lives on the [WarpDrive API docs](https://warp-drive.io/api/), which is where you should be looking for anything WarpDrive related. The ember-data section of the Ember API docs is no longer the best source.

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
