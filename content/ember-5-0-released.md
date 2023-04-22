---
title: Ember 5 0 Released
image:
imageMeta:
  attribution:
  attributionLink:
featured: true
authors:
  - jen-weber
date: Mon May 15 2023 14:29:48 GMT-0400 (Eastern Daylight Time)
tags:
  - releases
  - '2023'
  - version-5-x
---

Today the Ember project is releasing version 5.0 of Ember.js, Ember Data, and Ember CLI. This post will cover our release strategy, how to upgrade, what to expect, and deprecated APIs that were removed.

<!-- TODO - need a nice catchy intro that newsletters can copy paste -->

This is the first major release under the new release strategy and goals proposed in [RFC 830, Evolving Ember's Major Version Process](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process). 
To summarize, every 12 minor releases, Ember will ship a new major release, which removes any deprecated code targeted for that major version. 
When it comes to introducing new features, Ember generally aims to ship new features in minor releases, offering backwards compatibility for existing code at the same time as giving developers the chance to try out new capabilities.
This approach reduces the challenges that teams face for major upgrades, compared to producing big, breaking, splashy major versions with lots of new features.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

## Beta cycle

This release kicks off the 5.1 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

## How to upgrade to Ember 5

The most common approach for upgrading to 5.0 is to upgrade your app to the last
version of Ember 4, which is 4.12, resolve all deprecation warnings, and then upgrade to 5.0. If your app or addon runs with no deprecations in the latest release of 4.12,
you should be able to upgrade to Ember 5 with no additional changes. Step by step directions are below.

If your app is at a much earlier version in the 4.x series, we
recommend upgrading in steps across the LTS versions: 4.4, 4.8, and then 4.12.

Follow these steps in order:

1. Upgrade your project to the latest patch version of Ember 4.12.
   Many developers can do this by running
   `npx ember-cli-update --to 4.12`. The
   [general Ember upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself)
   has more details about how to upgrade your Ember app/addon.
2. Make sure your app builds successfully.
3. Resolve all deprecation warnings. These Deprecated APIs are removed in Ember 5.0. You may need to upgrade some of your addon dependencies if they are using deprecated APIs. 
See the [Ember Deprecation Guide](https://deprecations.emberjs.com/)
for more details about specific deprecations and how to resolve them.
Applications that need to upgrade through several versions may want to
consider isolating individual deprecations by using
[ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow).
4. Make sure your app builds successfully and your test suite passes with no
   deprecations.
5. Upgrade your app to Ember 5.0. Again,
   many developers can do this by running
   `npx ember-cli-update --to 5.0`. Refer to the
   [general Ember upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself)
   for more details about how to upgrade your Ember app/addon.

For help or advice along the way, visit [Ember's forums or chat groups](https://emberjs.com/community/).

<!-- TODO - do we need to mention anything here about htmlbars, fastboot, embroider, or ember-auto-import? -->

## The journey towards Ember Polaris

Polaris is the name of an upcoming edition of Ember, first announced at EmberConf 2021. Over the course of 5.x, new features will be added to Ember that will eventually make up the new edition.

Since our major versions tend to be uneventful, Editions are the moment where the Ember community comes together to learn and build in new ways.
An edition is a set of features, corresponding documentation, and tools that create a cohesive programming model.
An edition marks a shift and step forward in the framework, beyond what individual features would accomplish.
Ember Octane was the first new edition that was added to Ember.

Stay tuned for future blog posts with more details and calls for contributors!

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.0

Ember.js 5.0 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

This release drops support for Node 14. Node 14 became end of life (it no longer receives security updates) as of April 2023.

#### Bug Fixes

Ember.js 5.0 introduced 0 bug fixes.

#### Features

Ember.js 5.0 introduced 2 features.

1. Feature description
2. Feature description

#### Deprecations

Ember.js 5.0 introduced 0 deprecations. It removed all deprecations that were
introduced before 4.10 and slated for removal in 5.0.

<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 5.0, please review the [Ember.js 5.0.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.0.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

To learn about the motivation and goals for changes to Ember Data between 4.x and 5.x, check out the [blog post, EmberData 5.X Update](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15/).

### Changes in Ember Data 5.0

#### Bug Fixes

Ember Data 5.0 introduced 0 bug fixes.

#### Features

Ember Data 5.0 introduced 0 features.

#### Deprecations

Ember Data 5.0 introduced 0 deprecations.

For more details on changes in Ember Data 5.0, please review the
[Ember Data 5.0.0 release page](https://github.com/emberjs/data/releases/tag/v5.0.0).

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

### Changes in Ember CLI 5.0

#### Bug Fixes

Ember CLI 5.0 introduced 0 bug fixes.

#### Features

Ember CLI 5.0 introduced 0 features.

#### Deprecations

Ember CLI 5.0 introduced 0 deprecations.

For more details on the changes in Ember CLI 5.0 and detailed upgrade
instructions, please review the [Ember CLI 5.0.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.0.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.

