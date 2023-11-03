---
title: Ember 5.4 Released
authors:
  - jared-galanis
date: 2023-11-03T00:00:00.000Z
tags:
  - releases
  - '2023'
  - version-5-x
---

Today the Ember project is releasing version 5.4 of Ember.js, EmberData, and Ember CLI. <!-- Block start: Uncomment if an LTS candidate --><!--This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.--><!-- Block end -->

This release kicks off the 5.5 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.4

Ember.js 5.4 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Features

Ember.js 5.4 introduced 1 feature:

- [#20521](https://github.com/emberjs/ember.js/pull/20521) Add TypeScript support for looking up controllers in DI registry

#### Deprecations

Ember.js 5.4 introduced 2 deprecations.

- [#20529](https://github.com/emberjs/ember.js/pull/20529) - Don't rethrow string errors in handleTransitionReject
- [#20210](https://github.com/emberjs/ember.js/pull/20210) - Fix hanging tests caused by legacy rsvp code

<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 5.4, please review the [Ember.js 5.4.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.3.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData did not release a new minor version during this release cycle. Please see the [blog post](https://blog.emberjs.com/updates-to-ember-data-versioning-strategy) addressing EmberData's new versioning strategy for more information.

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and EmberData, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or EmberData by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 5.4

#### Features

Ember CLI 5.4 introduced 4 new features.

- [#10351](https://github.com/ember-cli/ember-cli/pull/10351) Remove ember-lts-4.4 scenario from addon blueprint
- [#10352](https://github.com/ember-cli/ember-cli/pull/10352) Add official support for Node.js v20
- [#10353](https://github.com/ember-cli/ember-cli/pull/10353) Remove all telemetry
- [#10368](https://github.com/ember-cli/ember-cli/pull/10368) Streamline package-manager CLI options

- [#10337](https://github.com/ember-cli/ember-cli/pull/10337) - the feature flag for pnpm support was removed, officially allowing using of the `--pnpm` flag.

#### Bug Fixes

Ember CLI 5.4 introduced 1 bug fix.

- [#10345](https://github.com/ember-cli/ember-cli/pull/10345) App blueprint may not have explicit-any in ember-data types @NullVoxPopuli

#### Deprecations

Ember CLI 5.4 introduced 0 deprecations.

For more details on the changes in Ember CLI 5.4 and detailed upgrade
instructions, please review the [Ember CLI 5.4.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.3.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
