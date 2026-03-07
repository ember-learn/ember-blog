---
title: Ember 6.11 Released
authors:
  - jared-galanis
  - chris-manson
date: 2026-03-06T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-6-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v6.11. This is a standard minor release as part of the [standard Ember Release Train process](https://emberjs.com/releases/). This release is relatively light, considering the big things that we have released recently, but contains some very useful bugfixes and enhancements 💪

## Ember.js 6.11

Ember.js 6.11 introduces no new features, fixes one bug related to using the new `@ember/reactive` namespace in Classic builds (for those not yet using the default Embroider+Vite build), and ships one minor enhancement that improves the developer experience of people using auto-complete in an IDE.

### Adding `@ember/reactive` to the AMD bundles.

If you are already using the new default Vite-based build system you can skip this one because it only affects people still on the Classic ember-cli-based build system.

`@ember/reactive` was [released in Ember@6.8](/ember-released-6-8/#toc_emberreactivecollections) and provides built-in tracking utilities for common collection types (you can read more about it in the [Built in tracking utilities for common collections RFC](https://rfcs.emberjs.com/id/1068-tracked-collections/)). For anyone already building their apps on Vite, or on Embroider@3 with Webpack and the `staticEmberSource: true` setting turned on, they would have been able to import from `@ember/reactive` without any problem.

Ember apps still using ember-cli for their build system don't use the sub-packages from the `ember-source` npm package directly, but instead rely on a pre-compiled vendor asset that defines all the "packages" available to import using AMD. This bugfix makes sure that `@ember/reactive` is included in those pre-compiled AMD bundles. To understand more about the AMD bundles you can check out the [Deprecate Ember Vendor Bundles RFC](https://rfcs.emberjs.com/id/1101-deprecate-ember-vendor-bundles/) that explains more of the context.

Fixed in [emberjs/ember.js PR#21024](https://github.com/emberjs/ember.js/pull/21024)

### Rename default export GlimmerComponent to Component for autocomplete DX

This is a very minor enhancement to the internals of the Ember codebase that helps give better hints to TypeScript autocomplete. You can read more about it in the [description of PR #21014 that added this enhancement](https://github.com/emberjs/ember.js/pull/21014) but the short summary is that when you are typing "Component" in your editor (such as VSCode), you would never get an autocomplete suggestion to add the import statement:

```import Component from '@glimmer/component'```

This is because the internal name for the default export from `@glimmer/component` was actually called "GlimmerComponent". Now when you write "Component" in your editor you will be given a choice between `@glimmer/component` or `@ember/component`.

Introduced in [emberjs/ember.js PR#21014](https://github.com/emberjs/ember.js/pull/21014)

## Ember CLI v6.11

Ember CLI had no new features, but fixed one bug in the configuration of babel for newly generated apps.

### Fix decorator-transforms runtime path in babel.config.mjs

In the `@ember/app-blueprint@6.10.0` the `babel.config.cjs` was moved to `babel.config.mjs`. For most cases this doesn't make any difference. The one thing that can change when moving from CommonJS to ESM is how you resolve other modules. In CommonJS, in Node, you can use `require.resolve()` to get the **path** to another module using Node resolution rules. We used this in the default babel config to resolve the path to the runtime module you need for [decorator-transforms](https://github.com/ef4/decorator-transforms). When swapping to ESM, you need to update any `require.resolve()` to use the newer `import.meta.resolve()` function to locate that module. This can cause a subtle problem because `import.meta.resolve()` does not return a **path** but instead it returns a **fileURL**. The parts of babel that need to read the path to the runtime module for `decorator-transforms` don't understand fileURLs so we needed to pass the fileURL returned from `import.meta.resolve()` through the `fileURLToPath()` function.

This change has also been backported to `@ember/app-blueprint@6.10.5`

Fixed in [ember-cli/ember-app-blueprint PR#226](https://github.com/ember-cli/ember-app-blueprint/pull/226)

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
