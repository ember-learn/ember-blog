---
title: Ember 6.10 Released
authors:
  - jared-galanis
  - chris-manson
date: 2026-01-09T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-6-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v6.10. This is a standard minor release as part of the [standard Ember Release Train process](https://emberjs.com/releases/). This release takes a big swing at cleaning up the blueprint for newly generated Ember apps by updating deprecated dependencies and upgrading the use of WarpDrive and Glint 🎉 Keep reading to find out more!

## Ember.js 6.10

Ember.js 6.10 does not introduce any new features, but we have added one deprecation related to how the `ember-source` package will be published going forward.

### Deprecating Ember Vendor Bundles

Today, the published `ember-source` package contains several AMD-specific bundled builds of Ember that are appended to vendor.js in the classic build system. This used to be the main way that people got the Ember framework code into their apps before we started [generating new apps with Vite and Embroider in Ember 6.8](/ember-released-6-8/#toc_embroider-and-vite-by-default). Since then, for newly generated apps, the Vite build system would access the ESM sources in the published `ember-source` package directly.

For anyone who has not yet upgraded their build system to Vite, they will still be getting the old build behaviour where the pre-built AMD bundles will be added to vendor.js. The newly added deprecation will mean that after Ember 7.0 we will no longer publish `ember-source` with these pre-built AMD bundles and apps that are on the classic build system will start to consume `ember-source` via `ember-auto-import` in the same way as any other v2 addon (`ember-source` has been published as a v2 addon since [Ember 6.1](/ember-released-6-1)). Most apps won't notice any differnce once this change happens, and if you want to opt-into the behaviour early (and silence the deprecation) you can enable the new `use-ember-modules` optional feature which is described in the [AMD bundles deprecation guide](https://deprecations.emberjs.com/id/using-amd-bundles).

For more information and motivation you can check out the [Deprecate Ember Vendor Bundles RFC](https://rfcs.emberjs.com/id/1101-deprecate-ember-vendor-bundles/)


## Ember CLI v6.10

Ember CLI has made a significant improvement to the number of reported package deprecations when installing a new application. There have also been some modernisations added to the default `@ember/app-blueprint` so that new apps are genrated using the `@warp-drive/*` packages and default WarpDrive setup (instead of the old `ember-data` pacakge), and Typescript apps are now generated with Glint 2. We have also stopped installing `tracked-built-ins` in newly generated ember apps because they are actually built-in now, and we have finally dropped `ember-auto-import` from the default blueprint.

Note: `ember-cli` has updated its required Node version to at least v20.19.0 because some of the dependency updates need [support for requiring ESM](https://nodejs.org/docs/latest-v20.x/api/modules.html#loading-ecmascript-modules-using-require)

### Package updates

Usually updating dependencies doesn't make it to the highlight reel of a release, but this has been a major effort by [Bert De Block](https://github.com/bertdeblock) who painstakingly went through all the dependencies of ember-cli and updated them all to the latest major and made any necessary changes as part of that upgrade. This `ember-cli` version also brings in the new major version of `broccoli`  which itself has had a bit of a package cleanup thanks to [Katie Gengler](https://github.com/kategengler). There is an ongoing effort to clean up all the remaining npm package deprecations when generating a new Ember app so watch this space for more updates!

### Modern WarpDrive Packages

In case you didn't know, `ember-data` is in the process of rebranding itself to [WarpDrive](https://warp-drive.io/). It's mosly the same `ember-data` that we know and love, but it's starting to feel a lot more modern and fits in a lot better with the increasingly modern-feeling Ember ecosystem. For the past few versions `ember-data` has already been powered by the new `@warp-drive/*` packages, but this version is the first time that we drop the old `ember-data` package and start using WarpDrive packages directly.

Everything you are used to in `ember-data` should still work because for now the WarpDrive setup is being installed with `legacyMode` turned on. We haven't yet updated the Ember Guides to start using the more modern WarpDrive features (like schemas) so that will be something we communicate more about in upcoming releases

### Glint v2

Glint is the system that Ember uses to allow type-checking of your Glimmer templates. When Glint was first created it did a number of weird and wonderful hacks on top of `tsc` to get things to work, but this was hard to manage and always a bit brittle. Glint v2 is built on top of the [Volar.js Embedded Language Tooling Framework](https://volarjs.dev/) and is specifically designed to work very well with GTS files. In this release we are generating new apps that use the `--typescript` flag with Glint v2 set up. If you are upgrading you can check out the [Glint v2 upgrade guide](https://typed-ember.gitbook.io/glint/v2-upgrade) for more information.

### tracked-built-ins actually built-in

`tracked-built-ins` is a very useful addon with a collection of utilities like `TrackedObject`, `TrackedArray`, `TrackedMap`, etc. that we have been installing by default in new Ember apps since Ember v5.2. These utilities have been [available in `ember-source` directly since v6.8](/ember-released-6-8#toc_emberreactivecollections) so in this release we have removed `tracked-built-ins` from the default addons in new applications.

### ember-auto-import removed

Since we moved to using the [Vite build system by default in v6.8](/ember-released-6-8#toc_embroider-and-vite-by-default) `ember-auto-import` has been completely inactive in new applications, but we weren't able to remove it from dependencies because of a bug. This may seem like a small thing to highlight in the release, but it has a decently large impact because even though we weren't actively using webpack for anything in the new build system, `ember-auto-import` was pulling in `webpack` as a peer dependency. So this change will stop you either installing unnecessary packages, remove missing peer warnings, or stop it being an error (depending on your package manager's approach to peers).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
