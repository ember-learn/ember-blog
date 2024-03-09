---
title: Ember 5.7 Released
authors:
  - jared-galanis
date: 2024-03-09T00:00:00.000Z
tags:
  - releases
  - '2024'
  - version-5-x
---

Today the Ember project is releasing version 5.7 of Ember.js and Ember CLI.

This release kicks off the 5.8 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.7

Ember.js 5.7 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Features

Ember.js 5.7 introduced 2 features.

- [#20639](https://github.com/emberjs/ember.js/pull/20639) - Add an optional feature `no-implicit-route-model` to opt-in to the removal of the implicit loading of a model per [RFC #774](https://rfcs.emberjs.com/id/0774-implicit-record-route-loading) and facilitated by [`ember-optional-features`](https://github.com/emberjs/ember-optional-features/pull/334). Enabling this feature can be used to clear the [deprecation of the implicit route model behavior](https://deprecations.emberjs.com/v5.x#toc_deprecate-implicit-route-model) once you ensure your project is not relying on that behavior.
- [#20597](https://github.com/emberjs/ember.js/pull/20597) - Add explicit support for TypeScript versions 5.1, 5.2, and 5.3.

#### Bug fixes

Ember.js 5.7 introduced 2 bug fixes.

- [#20645](https://github.com/emberjs/ember.js/pull/20645) - Make sure the component-class blueprint generates a component signature in a TypeScript project
- [#20579](https://github.com/emberjs/ember.js/pull/20579/files) - Type `cached` as a `MethodDecorator` instead of `PropertyDecorator`.

For more details on changes in Ember.js 5.7, please review the [Ember.js 5.7.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.7.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

This release cycle EmberData is again electing to not release a new minor.

Work in the library continues to be focused primarily on aligning 4.12 and 5.3 to enable as many folks in the community to seamlessly upgrade as possible. Further patch releases of 5.3 will be forthcoming.

<!-- alex ignore easy -->

We continue to take our time with 5.4 as we intend to introduce a major new paradigm with it (the replacement for @ember-data/model) and believe releasing this new feature at once on the heels of two very robust LTSs (4.12 and 5.3) is the best approach for users looking to navigate upgrades easily.

Please see the [blog post](https://blog.emberjs.com/updates-to-ember-data-versioning-strategy) addressing EmberData's new versioning strategy for more information.

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

### Changes in Ember CLI 5.7

#### Features

Ember CLI 5.7 introduced 1 new features.

- [#10440](https://github.com/ember-cli/ember-cli/pull/10440) - Add an optional feature `no-implicit-route-model` to allow the removal of the implicit loading of a model per [RFC #774](https://rfcs.emberjs.com/id/0774-implicit-record-route-loading) and facilitated by [`ember-optional-features`](https://github.com/emberjs/ember-optional-features/pull/334) and the [related](https://github.com/emberjs/ember.js/pull/20639) Ember.js pull request.

For more details on the changes in Ember CLI 5.7 and detailed upgrade
instructions, please review the [Ember CLI 5.7.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.7.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
