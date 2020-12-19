---
title: Ember 3.21 Released
authors:
  - kenneth-larsen
  - isaac-lee
date: 2020-09-02T00:00:00.000Z
tags:
  - releases
  - '2020'
  - version-3-x
---


Today the Ember project is releasing version 3.21 of Ember.js, Ember Data, and Ember CLI.

Version 3.20 of Ember is now promoted to LTS (Long Term Support). An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS version of Ember was 3.16.

This release kicks off the 3.22 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.21

Ember.js 3.21 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations.

#### New Features

Ember.js 3.21 introduced no new features.

#### Deprecations

Ember.js 3.21 introduced 1 deprecation.

1. `getWithDefault` (both the function and class method) has been [deprecated](https://github.com/emberjs/ember.js/pull/18993) per [RFC #554](https://github.com/emberjs/rfcs/blob/master/text/0554-deprecate-getwithdefault.md).

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.21, please review the [Ember.js 3.21.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.21.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.21

Ember Data 3.21 release saw a few improvements to documentation and continuous integration.

#### New Features

Ember Data 3.21 introduced no new features.

#### Deprecations

Ember Data 3.21 introduced no deprecations.

For more details on changes in Ember Data 3.21, please review the
[Ember Data 3.21.0 release page](https://github.com/emberjs/data/releases/tag/v3.21.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

<!--alex ignore easy-->
You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.21

#### New Features

Ember CLI 3.21 introduced 2 new features.

1. `ember new --lang` support has [landed](https://github.com/ember-cli/ember-cli/pull/9259) per [RFC #635](https://github.com/emberjs/rfcs/blob/master/text/0635-ember-new-lang.md).

1. [ember-try](https://github.com/ember-cli/ember-try) configuration for addons has been updated. [`ember-lts-3.12` has been dropped](https://github.com/ember-cli/ember-cli/pull/9310) from the default testing matrix. (Existing addons should consider this as a breaking change.) In addition, [`ember-lts-3.20` has been added](https://github.com/ember-cli/ember-cli/pull/9308) to the default testing matrix.

#### Deprecations

Ember CLI 3.21 introduced no deprecations.

---

For more details on the changes in Ember CLI 3.21 and detailed upgrade
instructions, please review the [Ember CLI 3.21.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.21.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
