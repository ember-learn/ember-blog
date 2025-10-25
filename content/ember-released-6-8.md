---
title: Ember 6.8 Released
authors:
  - jared-galanis
  - nullvoxpopuli
  - katie-gengler
  - chris-manson
date: 2025-10-25T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v6.8. This is a standard minor release as part of the [standard Ember Release Train process](https://emberjs.com/releases/), but this release isn't just like every other release! We have some exciting new framework features that unlock a new world of experimentation and our build system is now using [Vite](https://vite.dev) by default when you generate a new app! 🎉 Keep reading to find out all the details!

## Ember.js v6.8

Ember.js 6.8 introduces 3 key features, 2 new things for Ember developers to use today and a new way to publish the `ember-source` package. We have also included one bugfix and there are no new deprecations.

### Key Features

#### `renderComponent`

The new `renderComponent` API provides a way to render components directly into any DOM element, making it easier to integrate components in other environments like `d3`, `ag-grid`, WYSIWYG editors, etc. This feature is particularly useful for micro applications, REPLs, and "islands"-based tools.

`renderComponent` can be imported from `@ember/renderer` and accepts a component definition along with configuration options:

```gjs
import { renderComponent } from '@ember/renderer';

const Greeting = <template>Hello {{@name}}!</template>;

const result = renderComponent(Greeting, {
  into: document.querySelector('#my-element'),
  args: { name: 'World' }
});

// Clean up when done
result.destroy();
```

The API supports several configuration options including:

- `into`: The DOM element to render into
- `args`: Arguments to pass to the component - these can be a `trackedObject`
- `owner`: Optional owner object for service access, (or minimal partial implementation of what your component needs)

You can read more about this on in [`renderComponent()` RFC #1068](https://rfcs.emberjs.com/id/1099-rendercomponent/)

#### `@ember/reactive/collections`

Ember 6.8 introduces a new package `@ember/reactive/collections` that provides built-in tracking utilities for common collections. This package includes tracked versions of JavaScript's native collection types: `trackedArray`, `trackedObject`, `trackedMap`, `trackedSet`, `trackedWeakMap`, and `trackedWeakSet`.

These utilities offer performance and ergonomics improvements over what has been used via public APIs.

```gjs
import { trackedArray } from '@ember/reactive/collections';
import { on } from '@ember/modifier';

const items = trackedArray(['apple', 'banana']);

// usually you would have the pushed item be dynamic but this is only a demo
const addItem = (item) => items.push('cherry');

<template>
  {{#each items as |item|}}
    <div>{{item}}</div>
  {{/each}}

  <button type="button" {{on "click" addItem}}>
    Add Item
  </button>
</template>
```

You can read more about this in the [Built in tracking utilities for common collections RFC #1068](https://rfcs.emberjs.com/id/1068-tracked-collections/).

This feature was inspired by `tracked-built-ins` and brings these essential reactivity primitives directly into the framework core.

#### Trusted publishing

v6.8.0 of `ember-source` is the first minor version of the package to be published to `npm` with [Trusted Publishing](https://docs.npmjs.com/trusted-publishers). We will be implementing this across all our packages.

At the bottom of the [npm package page](https://www.npmjs.com/package/ember-source), you'll find a section labeled 'Provenance' that provides verification that the package contents were published from the source repository.

### Bug fixes

Ember.js 6.8 introduces 1 bug fix.

- [#20988](https://github.com/emberjs/ember.js/pull/20988) Removes unnecessary package ember-cli-htmlbars-inline-precompile from component-test blueprint

---

## Ember CLI v6.8

Ember CLI 6.8 introduces 2 key features, a brand-new default app blueprint and a new default for generated templates. There are also 3 minor features, 5 bugfixes, and 2 new deprecations introduced.

### Key Features

#### Embroider and Vite by default

This is the first release that enables Embroider by default! 🎉 This has been a monumental effort by the whole community over many years and it represents a new era for Ember developers. The improvements to the developer experience and new capabilities are so numerous that they deserve their own blog post, but here are some of the highlights

- Lightning-fast rebuild speeds thanks to using [Vite](https://vite.dev/) in development
- Smaller and faster production builds because we no longer use AMD in production
- You can now use any rollup-plugin or vite plugin to augment your build - no more need for ember-cli specific addons
- More explicit build tooling - e.g. your Babel config is part of your app and no-longer managed by ember-cli, hidden away from you

<!-- alex ignore just -->

These are just some of the highlights, but one key theme that has been true throughout the effort to make Vite the default build system for Ember apps is that we now have an opportunity to integrate much more seamlessly with the wider JS ecosystem. Ember is no longer working in a walled garden, forced to re-implement every good idea that the JS community comes up with. If someone comes up with a Vite plugin that does something cool, chances are that adding it to your Vite config in your Ember app will just work!

Anyone generating a new app using `ember new` after Ember CLI v6.8 will get an app generated with the new `@ember/app-blueprint` by default. The new app blueprint has a lot of changes, but each change is explained in great detail in the [V2 App Format RFC](https://rfcs.emberjs.com/id/0977-v2-app-format) so it's worth taking a look to understand all the changes.

If you have the need to generate a new app with the classic blueprint after Ember CLI v6.8, we have provided a new blueprint `@ember-tooling/classic-build-app-blueprint`. You can opt into this blueprint with the `-b` argument:

```bash
ember new -b @ember-tooling/classic-build-app-blueprint
```

This is not intended to be used long term, for most teams the new default Vite-based blueprint will be the right choice and it represents the intended future direction of the Ember project. Providing the legacy classic-build blueprint is in keeping with Ember's dedication to backwards compatibility and will give teams that can't yet upgrade to Vite some breathing space to upgrade at their own pace.

This also means that any team relying on [`ember-cli-update`](https://github.com/ember-cli/ember-cli-update) can still have an update path without being automatically upgraded to Vite. If you have an existing application and you do want to upgrade to vite you should check out the [`ember-vite-codemod`](https://github.com/mainmatter/ember-vite-codemod) which will guide you through the upgrade process.

#### Component and Route `--strict` by default

Now that the default blueprint is using Vite by default it makes sense for newly generated Components and Route templates to use template-tag format (a.k.a GJS). This means that all of the templates in your app will be in "strict mode" and not look up any of the Invokables (Components, Helpers, or Modifiers) on the global resolver, but instead use local scoping to know what Invokable to use in your templates. In practice, for most people, this would mean importing any components that you are using at the top of the file that you are using them (this is why this feature is sometimes referred to as template-imports). This allows build systems to have a better understanding of where your code is coming from and can significantly improve tree-shaking and developer tooling performance.

With the Vite blueprint it makes sense to enable the strict-mode template generation by default, and to keep the new app blueprint and the classic app blueprint in sync we also decided to make it the default for new apps generated with the classic app blueprint. In practice this only sets the required setting in the `.ember-cli` settings file in your repo to the new default values.

You can read more about the specifics of this feature in the [First-Class Component Templates RFC #779](https://rfcs.emberjs.com/id/0779-first-class-component-templates).

### Other Features

- [#10844](https://github.com/ember-cli/ember-cli/pull/10844) throw an error when `ember (generate|destroy) (http-proxy|http-mock|server)` is used in a Vite-based project
- [#10804](https://github.com/ember-cli/ember-cli/pull/10804) Support a `--ts` alias for the `addon`, `init` and `new` commands
- [#10791](https://github.com/ember-cli/ember-cli/pull/10791) update the format of the ember-cli-update.json to directly target the blueprint used to generate

### Bug fixes

Ember CLI 6.8 introduced 5 bug fixes.

- [#10826](https://github.com/ember-cli/ember-cli/pull/10826) move resolution of @ember/app-blueprint to prevent loading latest and always load the direct dependency of ember-cli
- [#10782](https://github.com/ember-cli/ember-cli/pull/10782) update heimdall-fs-monitor to fix error in Node 24
- [#10803](https://github.com/ember-cli/ember-cli/pull/10803) Add "ember-blueprint" to keywords in `package.json` for the classic blueprints `@ember-tooling/classic-build-addon-blueprint` and `@ember-tooling/classic-build-app-blueprint`
- [#10798](https://github.com/ember-cli/ember-cli/pull/10798) Add `@warp-drive/ember/install` to remove deprecation when generating a classic app import from ember-data breakage/deprecation
- [#10707](https://github.com/ember-cli/ember-cli/pull/10707) Enabled recommended configs from eslint-plugin-n and eslint-plugin-qunit in the classic app blueprint

### Deprecations

Ember CLI 6.8 introduces 2 new deprecations.

#### `ember init` with file names or globs

`ember init` is a little known (and under documented) functionality of the `ember-cli` blueprint system. An even less known functionality was the ability to filter the files that get reinitialized by a path or a glob when running `ember init`. We know that this was a mostly unknown feature because it was never added to the `ember init --help` documentation and it has been broken for some time. Instead of trying to fix it for all the new blueprints we opted to deprecate the functionality. You can read more about the deprecation on the [deprecation guide for `init-no-file-names`](https://deprecations.emberjs.com/id/init-no-file-names/)

#### `ember new --embroider`

Generating an ember app with `ember new --embroider` generated an app using Embroider@v3 with Webpack. Since Embroider@v4 and Vite is now the default for newly generated apps and provides a significantly better developer experience, nobody should be generating new apps with Embroider@v3 any more. To support people who haven't yet upgraded from Embroider@v3 to Embroider@v4 yet, we have opted not to make this argument generate a new Vite app and instead deprecated it. You can read more about the deprecation on the [deprecation guide for `dont-use-embroider-option`](https://deprecations.emberjs.com/id/dont-use-embroider-option/)

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
