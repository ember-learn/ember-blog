---
title: Ember 6.8 Released
authors:
  - jared-galanis
  - nullvoxpopuli
  - katie-gengler
  - chris-manson
date: 2025-10-17T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

// TODO add some overally summary here of all the awesome stuff in this blogpost

Today the Ember project is releasing version 6.8 of Ember.js and Ember CLI. This release of Ember.js is an LTS (Long Term Support) **candidate**. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

## Ember.js v6.8 

Ember.js 6.8 introduces 3 key features, 2 new things for Ember developers to use today and a new way to publish the `ember-source` package. 

### Key Features

#### Trusted publishing

v6.8.0 of `ember-source` is the first minor version of the package to be published to `npm` with [Trusted Publishing](https://docs.npmjs.com/trusted-publishers). We will be implementing this across all our packages.

At the bottom of the [npm package page](https://www.npmjs.com/package/ember-source), you'll find a section labeled 'Provenance' that provides verification that the package contents were published from the source repository.

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

You can read more about this on the page for [RFC #1068](https://rfcs.emberjs.com/id/1099-rendercomponent/)

#### `@ember/reactive/collections`

Ember 6.8 introduces a new package `@ember/reactive/collections` that provides built-in tracking utilities for common collections. This package includes tracked versions of JavaScript's native collection types: `trackedArray`, `trackedObject`, `trackedMap`, `trackedSet`, `trackedWeakMap`, and `trackedWeakSet`.

These utilities offer performance and ergonomics improvements over what has been used via public APIs.

```gjs
import { trackedArray } from '@ember/reactive/collections';
import { on } from '@ember/modifier';

const items = trackedArray(['apple', 'banana']);

// usually you would have the pushed item be dynamic but this is just a demo
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

You can read more about this on the page for [RFC #1068](https://rfcs.emberjs.com/id/1068-tracked-collections/)

This feature was inspired by `tracked-built-ins` and brings these essential reactivity primitives directly into the framework core.

### Bug fixes

Ember.js 6.8 introduces 1 bug fix.

- [#20988](https://github.com/emberjs/ember.js/pull/20988) Removes unnecessary package ember-cli-htmlbars-inline-precompile from component-test blueprint

#### Deprecations

Ember.js 6.8 introduces no new deprecations.

---

## Ember CLI v6.8

Ember CLI v6.8 introduces Ember CLI 6.8 introduces 5 new features.

### Key Features


#### Embroider and Vite by default

This is the first release that enables Embroider by default 🎉 This has been a monumental effort by the whole community over many years and it represents a new era for Ember developers. The improvements to the developer experience and new capabilities are so numerous that they deserve their own blog post but here are some of the highlights

- Lightning-fast rebuild speeds thanks to using [Vite](https://vite.dev/) in development
- Smaller and faster production builds because we no longer use AMD in production
- You can now use any rollup-plugin or vite plugin to augment your build - no more need for ember-cli specific addons
- More explicit build tooling - e.g. your Babel config is part of your app and no-longer managed by ember-cli, hidden away from you

These are just some of the highlights, but one key theme that has been true throughout the effort to make Vite the default build system for Ember apps is that we now have an oportunity to integrate much more seemlessly with the wider JS ecosystem. Ember is no longer working in a walled garden, forced to re-implement every good idea that the JS community comes up with. If someone comes up with a Vite plugin that does something cool, chances are that adding it to your Vite config in your Ember app will just work!



// new blueprint - enabled by default for ember new

// ember-cli-update won't update you - use ember-vite-codemod

// generate a classic app - please don't - but if you need to

// look at the RFC for more details about the new bluerpint

 
* [#10802](https://github.com/ember-cli/ember-cli/pull/10802) enable Vite blueprint by default for `ember new`

#### Component and Route `--strict` by default



* [#10831](https://github.com/ember-cli/ember-cli/pull/10831) enable `--strict` by default in classic blueprints to match new Vite app blueprint

### Other Features

- [#10844](https://github.com/ember-cli/ember-cli/pull/10844) throw an error when `ember (generate|destroy) (http-proxy|http-mock|server)` is used in a Vite-based project
- [#10804](https://github.com/ember-cli/ember-cli/pull/10804) Support a `--ts` alias for the `addon`, `init` and `new` commands
- [#10791](https://github.com/ember-cli/ember-cli/pull/10791) update the format of the ember-cli-update.json to directly target the blueprint used to generate

### Bug fixes

Ember CLI 6.8 introduced 5 bug fixes.

- [#10826](https://github.com/ember-cli/ember-cli/pull/10826) move resolution of @ember/app-blueprint to prevent loading latest and always load the direct dependency of ember-cli
- [#10782](https://github.com/ember-cli/ember-cli/pull/10782) update heimdall-fs-monitor to fix error in Node 24
- [#10803](https://github.com/ember-cli/ember-cli/pull/10803) Add "ember-blueprint" to keywords in `package.json` for the classic blueprints `@ember-tooling/classic-build-addon-blueprint` and `@ember-tooling/classic-build-app-blueprint`
- [#10798](https://github.com/ember-cli/ember-cli/pull/10798) Add `@warp-drive/ember/install` to remove deprecation when generateing a classic app import from ember-data breakage/deprecation
- [#10707](https://github.com/ember-cli/ember-cli/pull/10707) Enabled recommended configs from eslint-plugin-n and eslint-plugin-qunit in the classic app blueprint

### Deprecations

Ember CLI 6.8 introduces 2 new deprecations.

#### `ember init` with file names or globs

`ember init` is a little known (and under documented) functionality of the `ember-cli` blueprint system. An even less known functionality was the ability to filter the files that get reinitilised by a path or a glob when running `ember init`. We know that this was a mostly unknown feature because it was never added to the `ember init --help` documentation and it has been broken for some time. Instead of trying to fix it for all the new blueprints we opted to deprecate the functionality. You can read more about the deprecation on the [deprecation guide for `init-no-file-names`](https://deprecations.emberjs.com/id/init-no-file-names/)

#### `ember new --embroider`

Generating an ember app with `ember new --embroider` generated an app using Embroider@v3 with Webpack. Since Embroider@v4 and Vite is now the default for newly generated apps and provides a significantly better developer experience, nobody should be generating new apps with Embroider@v3 any more. To support people who haven't yet upgraded from Embroider@v3 to Embroider@v4 yet, we have opted not to make this argument generate a new Vite app and instead deprecated it. You can read more about the deprecation on the [deprecation guide for `dont-use-embroider-option`](https://deprecations.emberjs.com/id/dont-use-embroider-option/)


## The Ember Release process

For more details on changes in Ember.js 6.8, please review the [Ember.js 6.8.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.8.0-ember-source).

Ember.js is the core framework for building ambitious web applications.

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

It is not required to keep Ember CLI versions in sync with Ember and EmberData. After updating ember-cli, you can keep your current version(s) of Ember or EmberData by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

A release of Ember is comprised of many projects: ember-source, ember-cli, and all the learning team projects. We follow a [6-week release train](http://emberjs.com/releases/) that includes alpha and beta cycles to ensure changes are well-tested. We encourage our community (especially addon authors) to help test the beta builds and report any bugs before they are published as a final release. The `ember-try` addon is a great way to continuously test your projects against the latest Ember releases. While we only consider the release to be complete upon publication of the blog post, the 6-week cycle is anchored by the release of the ember-source package at the beginning of the process. Releases x.4, x.8 and x.12 will become an LTS candidate, so checkout [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/) if you want to know more.

Ember.js 6.8 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

For more details on the changes in Ember CLI 6.8 and detailed upgrade
instructions, please review the [Ember CLI 6.8.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.8.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
