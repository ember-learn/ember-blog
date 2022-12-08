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

[#20274](https://github.com/emberjs/ember.js/pull/20274) - Adds some missing type tests and APIs to preview types.
[#20256](https://github.com/emberjs/ember.js/pull/20256) - Improve types for Ember Arrays unifying internal array types with external preview types and don't override methods from native JS arrays.
[#20257](https://github.com/emberjs/ember.js/pull/20257) - Fix types for `getOwner` and `GlimmerComponent`.
[#20233](https://github.com/emberjs/ember.js/pull/20233/files) - Include package name in deprecation error message rather than hardcoding Ember.
[#20235](https://github.com/emberjs/ember.js/pull/20235) - Update @types/node and TypeScript to address a TypeScript 4.9 issue.
[#20238](https://github.com/emberjs/ember.js/pull/20238) - Update Node.js versions to match support policy as support for Node 12 was dropped in Ember 4.6.
[#20227](https://github.com/emberjs/ember.js/pull/20227) - Fix unsafe internal cast for `NativeArray` making casting from `EmberArray` to `NativeArray` even more explicitly unsafe and for handling a proxy getter flagging the type of `this` may not be exactly `CoreObject`.
[#20228](https://github.com/emberjs/ember.js/pull/20228) - Remove type export for `ControllerMixin` as the type does not exist to be imported from the location it existed at in the definitions.

#### Features

Ember.js 4.9 introduced 1 feature.

[#20203](https://github.com/emberjs/ember.js/pull/20203) - upgrades TypeScript dependency to use version 4.8.
[#20204](https://github.com/emberjs/ember.js/pull/20204) - introduces support for testing all supported versions of TypeScript against our types and removes type checking from lint scripts.

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
