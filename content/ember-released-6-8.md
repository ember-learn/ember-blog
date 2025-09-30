---
title: Ember 6.8 Released
authors:
  - jared-galanis
date: 2025-10-15T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

Today the Ember project is releasing version 6.8 of Ember.js and Ember CLI. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

A release of Ember is comprised of many projects: ember-source, ember-cli, and all the learning team projects. We follow a [6-week release train](http://emberjs.com/releases/) that includes alpha and beta cycles to ensure changes are well-tested. We encourage our community (especially addon authors) to help test the beta builds and report any bugs before they are published as a final release. The `ember-try` addon is a great way to continuously test your projects against the latest Ember releases. While we only consider the release to be complete upon publication of the blog post, the 6-week cycle is anchored by the release of the ember-source package at the beginning of the process. Releases x.4, x.8 and x.12 will become an LTS candidate, so checkout [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/) if you want to know more.

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.8

Ember.js 6.8 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.8 introduced <insert number here> bug fixes.

#### Features

Ember.js 6.8 introduces <insert number here> new features.

#### Deprecations

Ember.js 6.8 introduces <insert number here> new deprecations.

For more details on changes in Ember.js 6.8, please review the [Ember.js 6.8.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.8.0-ember-source).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData 5.7 has been released, and along with EmberData 5.6, 5.5 and 5.4, there are many updates that will be more extensively covered in a full stand alone blog post.

EmberData is also in the process of rebranding to WarpDrive. Stay tuned for more info!

To learn about the motivation and goals for upcoming changes to EmberData in 5.x,
read the [blog post, EmberData 5.X Update](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15/).

<!-- alex ignore retext-equality -->

This will help you form the mental model of what to expect across the 5.x series,
and understand deprecation removals in the context of the upcoming goals.

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

It is not required to keep Ember CLI versions in sync with Ember and EmberData. After updating ember-cli, you can keep your current version(s) of Ember or EmberData by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 6.8

#### Bug fixes

Ember CLI 6.8 introduced <insert number here> bug fixes.

#### Features

Ember CLI 6.8 introduces <insert number here> new features.

#### Deprecations

Ember CLI 6.8 introduces <insert number here> new deprecations.

For more details on the changes in Ember CLI 6.8 and detailed upgrade
instructions, please review the [Ember CLI 6.8.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.8.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
