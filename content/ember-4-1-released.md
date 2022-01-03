---
title: Ember 4.1 Released
authors:
  - jared-galanis
date: 2022-01-03T00:00:00.000Z
tags:
  - releases
  - '2022'
  - Version-4-1
---

Today the Ember project is releasing version 4.1 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.2 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.1

Ember.js 4.1 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.1 introduced 2 bug fixes.

1. passing an `ObjectProxy` to `isEmpty` with a property size now throws an assertion.
2. the router has been updated so that when query params are using a nested value a `Route` can determine if that nested query param is marked as `refreshModel`.

#### Features

Ember.js 4.1 introduced 2 features.

1. Feature description
2. Feature description

#### Deprecations

Ember.js 4.1 introduced 0 deprecations.

<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 4.1, please review the [Ember.js 4.1.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.1.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.1

#### Bug Fixes

Ember Data 4.1 introduced 0 bug fixes.

#### Features

Ember Data 4.1 introduced 0 features.

#### Deprecations

Ember Data 4.1 introduced 0 deprecations.

For more details on changes in Ember Data 4.1, please review the
[Ember Data 4.1.0 release page](https://github.com/emberjs/data/releases/tag/v4.1.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to re4.1t the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 4.1

#### Bug Fixes

Ember CLI 4.1 introduced 0 bug fixes.

#### Features

Ember CLI 4.1 introduced 0 features.

#### Deprecations

Ember CLI 4.1 introduced 0 deprecations.

For more details on the changes in Ember CLI 4.1 and detailed upgrade
instructions, please review the [Ember CLI 4.1.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.1.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
