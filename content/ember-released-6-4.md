---
title: Ember 6.4 Released
authors:
  - jared-galanis
date: 2025-05-02T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

Today the Ember project is releasing version 6.4 of Ember.js and Ember CLI. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

This release kicks off the 6.5 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.4

Ember.js 6.4 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.4 includes [insert number here] bug fixes:

#### Features

Ember.js 6.4 introduces [insert number here] new features:

#### Deprecations

Ember.js 6.4 introduces [insert number here] new deprecations:

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

[NOTING HERE THAT Data 5.4 is released and we need to update this in some fashion. There is so much that was released it may make sene to cover that comprehensively in a stand alone blog post. Will discuss with Data team].

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

### Changes in Ember CLI 6.4

#### Bug fixes

Ember CLI 6.4 includes [insert number here] bug fixes:

#### Features

Ember CLI 6.4 introduces [insert number here] new feature:

#### Deprecations

Ember CLI 6.4 introduces [insert number here] new deprecations:

For more details on the changes in Ember CLI 6.4 and detailed upgrade
instructions, please review the [Ember CLI 6.4.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.4.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
