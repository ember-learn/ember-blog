---
title: Ember 5.5 Released
authors:
  - jared-galanis
date: 2023-12-15T00:00:00.000Z
tags:
  - releases
  - '2023'
  - version-5-x
---

Today the Ember project is releasing version 5.5 of Ember.js and Ember CLI.

Version 5.4 of Ember.js and version 5.3 of EmberData are now promoted to LTS (Long Term Support). An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS version of Ember.js was 4.12 and the previous LTS version of EmberData was also 4.12.

This release kicks off the 5.6 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.5

Ember.js 5.5 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 5.5 introduced 2 bug fixes.

- [#20575](https://github.com/emberjs/ember.js/pull/20575) Update backburner.js to 2.4.2 to ensure scheduleOnce works correctly following a cancelled job
- [#20578](https://github.com/emberjs/ember.js/pull/20578) Deprecate outlet TemplateFactory support

For more details on changes in Ember.js 5.5, please review the [Ember.js 5.5.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.5.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

This release cycle EmberData is again electing to not release a new minor.

Currently work in the library is focused primarily on continuing to align 4.12 and 5.3 to enable as many folks in the community to seamlessly upgrade as possible.

<!-- alex ignore easy -->
We also want to take our time with 5.4 as we intend to introduce a major new paradigm with it (the replacement for @ember-data/model) and believe releasing this new feature at once on the heels of two very robust LTSs (4.12 and 5.3) is the best approach for users looking to navigate upgrades easily.

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

### Changes in Ember CLI 5.5

#### Features

Ember CLI 5.5 introduced 3 new features.

- [#10332](https://github.com/ember-cli/ember-cli/pull/10332) Support converting gts to gjs files in blueprint
- [#10370](https://github.com/ember-cli/ember-cli/pull/10370) When generating a new app with --embroider use all optimisation flags
- [#10393](https://github.com/ember-cli/ember-cli/pull/10393) feat: add skip-install alias to skip-npm

#### Bug Fixes

Ember CLI 5.5 introduced 1 bug fix.

- [#10403](https://github.com/ember-cli/ember-cli/pull/10403) Fix some docs that were showing up weirdly in generated api docs

#### Deprecations

Ember CLI 5.5 introduced 1 deprecation.

- [#10350](https://github.com/ember-cli/ember-cli/pull/10350) Deprecate Travis CI support


For more details on the changes in Ember CLI 5.5 and detailed upgrade
instructions, please review the [Ember CLI 5.5.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.5.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
