---
title: Ember 6.10 Released
authors:
  - jared-galanis
date: 2026-01-09T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-6-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v6.10. This is a standard minor release as part of the [standard Ember Release Train process](https://emberjs.com/releases/). This release release takes a big swing at cleaning up the blueprint for newly generated Ember apps by updating deprecated dependencies and upgrading the use of WarpDrive and Glint 🎉 Keep reading to find out more!

## Ember.js 6.10


Ember.js 6.10 does not introduce any new features, but we have added one deprecation related to how the `ember-source` package will be published going forward.

### Deprecating Ember Vendor Bundles

Today, the published `ember-source` package contains several AMD-specific bundled builds of Ember that are appended to vendor.js in the classic build system. This used to be the main way that people got the Ember framework code into their apps before we started [generating new apps with Vite and Embroider in Ember 6.8](/ember-released-6-8/#toc_embroider-and-vite-by-default). Since then, for newly generated apps, the Vite build system would access the ESM sources in the published `ember-source` package directly.

For anyone who has not yet upgraded their build system to Vite, they will still be getting the old build behaviour where the pre-built AMD bundles will be added to vendor.js. The newly added deprecation will mean that after Ember 7.0 we will no longer publish `ember-source` with these pre-built AMD bundles and apps that are on the classic build system will start to consume `ember-source` via `ember-auto-import`, just like any other v2 addon (`ember-source` has been published as a v2 addon since [Ember 6.1](/ember-released-6-1)).

For more information and motivation you can check out the [Deprecate Ember Vendor Bundles RFC](https://rfcs.emberjs.com/id/1101-deprecate-ember-vendor-bundles/)

#### Deprecations

Ember.js 6.10 introduces 1 new deprecation in accordance with [RFC #1101](https://rfcs.emberjs.com/id/1101-deprecate-ember-vendor-bundles/) and a related optional feature change to accomodate the deprecation.

- [21013](https://github.com/emberjs/ember.js/pull/21013) - deprecates use of AMD bundles in favor of ES Modules.
- [21009](https://github.com/emberjs/ember.js/pull/21009) - creates an optional feature that makes classic builds consume ember the same way Embroider does (using `dist/packages` instead of `dist/ember.debug.js`, etc).

For more details on changes in Ember.js 6.10, please review the [Ember.js 6.10.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.10.0-ember-source).

---

### Changes in Ember CLI 6.10

#### Bug fixes

Ember CLI 6.10 introduced 3 bug fixes.

<!-- alex ignore watchman -->

- [10888](https://github.com/ember-cli/ember-cli/pull/10888) Backport the upgrade of Broccoli. API is fully compatible but now requires Node > 20.19, which is aligned with our policy.
- [10886] Update required Node version to v20.19.0, which supports requiring ESM.
- [10860](https://github.com/ember-cli/ember-cli/pull/10860) A port of [10859](https://github.com/ember-cli/ember-cli/pull/10859), which re-adds the --watcher flag to build, so that when using vite, we don't run out of watchers on macOS, and allow watchman usage.

#### Features

Ember CLI 6.10 introduces no new features, but several internal dependency updates.

#### Deprecations

Ember CLI 6.10 introduces no new deprecations.

For more details on the changes in Ember CLI 6.10 and detailed upgrade
instructions, please review the [Ember CLI 6.10.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.10.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
