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

The Ember project is excited to announce the release of Ember v6.10. This is a standard minor release as part of the [standard Ember Release Train process](https://emberjs.com/releases/).

### Changes in Ember.js 6.10

Ember.js 6.10 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.10 introduced no new bug fixes.

#### Features

Ember.js 6.10 introduces no new features.

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
