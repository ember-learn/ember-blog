---
title: Ember 3.23 Released
author: Ricardo Mendes, Isaac Lee
tags: Releases, 2020, 3, 3.23, Version 3.x
responsive: true
---

Today the Ember project is releasing version 3.23 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 3.24 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.23

Ember.js 3.23 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There are COUNT (#) features, COUNT (#) deprecations, and COUNT (#) bugfixes in this version.

#### New Features (2)

First new feature (1 of 2)

Second new feature (2 of 2)

#### Deprecations (0)

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.23, please review the [Ember.js 3.23.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.23.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.23

This release included several bug fixes and improvements, such as:

- Improved debug message ([#7337](https://github.com/emberjs/data/pull/7337)).
- Polymorphic relation type changes on first load ([#7363](https://github.com/emberjs/data/pull/7363/files)).

#### Deprecations (1)

**najax when ember-fetch is also a dependency**

[#7230](https://github.com/emberjs/data/pull/7230).
_editor note_ will fill out once the pending deprecation guide is out.


No new deprecations introduced in Ember Data VER.

For more details on changes in Ember Data 3.23, please review the
[Ember Data 3.23.0 release page](https://github.com/emberjs/data/releases/tag/v3.23.0).

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

### Changes in Ember CLI 3.23

Blueprints for new applications were updated for the new testing setup ([#9340](https://github.com/ember-cli/ember-cli/pull/9340), [#9371](https://github.com/ember-cli/ember-cli/pull/9371/files)).

---

For more details on the changes in Ember CLI 3.23 and detailed upgrade
instructions, please review the [Ember CLI 3.23.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.23.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.