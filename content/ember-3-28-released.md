---
title: Ember 3.28 Released
authors:
  - matthew-beale
  - isaac-lee
date: 2021-09-02T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-3-x
---

Today the Ember project is announcing version 3.28 of Ember.js, Ember Data, and Ember CLI. This is a minor version, stable release.

Ember 3.28 is also an LTS (Long Term Support) release candidate. In six weeks
the latest patch version of 3.28 will be promoted to be the latest LTS release
replacing 3.24-LTS.

**We're also announcing the start of the Ember 4.0 beta cycle for all sub-projects.** We encourage our community (especially addon authors) to help test beta builds and report any bugs before they are published as a stable release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about Ember's plans for 4.0 in [The Road to Ember
4.0](https://blog.emberjs.com/the-road-to-ember-4-0/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.28

Ember.js 3.28 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 3.28 introduced 0 bug fixes.

#### Features

Ember.js 3.28 introduced 2 features.

1. Feature description
2. Feature description

#### Deprecations

Ember.js 3.28 introduced 0 deprecations.

<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 3.28, please review the [Ember.js 3.28.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.28.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.28

#### Bug Fixes

Ember Data 3.28 introduced 0 bug fixes.

#### Features

Ember Data 3.28 introduced 0 features.

#### Deprecations

Ember Data 3.28 introduced 0 deprecations.

For more details on changes in Ember Data 3.28, please review the
[Ember Data 3.28.0 release page](https://github.com/emberjs/data/releases/tag/v3.28.0).

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

### Changes in Ember CLI 3.28

#### Bug Fixes

Ember CLI 3.28 introduced 0 bug fixes.

#### Features

Ember CLI 3.28 introduced 0 features.

#### Deprecations

Ember CLI 3.28 introduced 0 deprecations.

For more details on the changes in Ember CLI 3.28 and detailed upgrade
instructions, please review the [Ember CLI 3.28.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.28.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
