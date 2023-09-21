---
title: Ember 5.3 Released
authors:
  - jen-weber
  - katie-gengler
date: 2023-09-23T00:00:00.000Z
tags:
  - releases
  - '2023'
  - version-5-x
---

Today the Ember project is releasing version 5.3 of Ember.js, Ember Data, and Ember CLI. <!-- Block start: Uncomment if an LTS candidate --><!--This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.--><!-- Block end -->

This release kicks off the 5.4 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.3

Ember.js 5.3 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Deprecations

Ember.js 5.3 introduced 1 deprecation.

1. Deprecate implicit record loading in Ember Route per [RFC #774](https://rfcs.emberjs.com/id/0774-implicit-record-route-loading). Please see [the deprecation guide](https://deprecations.emberjs.com/v5.x#toc_deprecate-implicit-route-model) for more information.
<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 5.3, please review the [Ember.js 5.3.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.3.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 5.3

#### Bug Fixes

Ember Data 5.3 introduced 0 bug fixes.

#### Features

Ember Data 5.3 introduced 0 features.

#### Deprecations

Ember Data 5.3 introduced 0 deprecations.

For more details on changes in Ember Data 5.3, please review the
[Ember Data 5.3.0 release page](https://github.com/emberjs/data/releases/tag/v5.3.0).

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

### Changes in Ember CLI 5.3

#### Bug Fixes

Ember CLI 5.3 introduced 0 bug fixes.

#### Features

Ember CLI 5.3 introduced 0 features.

#### Deprecations

Ember CLI 5.3 introduced 0 deprecations.

For more details on the changes in Ember CLI 5.3 and detailed upgrade
instructions, please review the [Ember CLI 5.3.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.3.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
