---
title: Ember 4.9 Released
authors:
  - jared-galanis
date: 2022-12-02T00:00:00.000Z
tags:
  - releases
  - '2022'
  - version-4-x
---

Today the Ember project is releasing version 4.9 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.10 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.9

Ember.js 4.9 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.9 introduced 8 bug fixes.

<!-- TODO write this content -->
#20274 [BUGFIX] Add some missing types to preview types
#20256 [BUGFIX] Correct types for Ember Arrays
#20257 [BUGFIX] Fix types for getOwner and GlimmerComponent
#20233 [BUGFIX] Include package name in deprecation error message
#20235 [BUGFIX] Update @types/node for TS 4.9 issue
#20238 [BUGFIX] Update Node.js versions to match support policy
#20227 [BUGFIX] Fix unsafe internal cast for NativeArray
#20228 [BUGFIX] Remove type export for ControllerMixin

#### Features

Ember.js 4.9 introduced 1 feature.

<!-- TODO write this content -->
#20203 / #20204 [FEATURE] Preview types: Update to Typescript 4.8

#### Deprecations

Ember.js 4.9 introduced 0 deprecations.

<!-- Block end -->

For more details on changes in Ember.js 4.9, please review the [Ember.js 4.9.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.9.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data

#### Bug Fixes

<!-- TODO write this content -->

#### Features

<!-- TODO write this content -->

#### Deprecations

<!-- TODO write this content -->


---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 4.9

#### Bug Fixes

<!-- TODO write this content -->

#### Features

<!-- TODO write this content -->

#### Deprecations

<!-- TODO write this content -->


## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
