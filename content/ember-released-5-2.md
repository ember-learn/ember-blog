---
title: Ember 5.2 Released
authors:
  - jared-galanis
date: 2023-08-15T00:00:00.000Z
tags:
  - releases
  - '2023'
  - version-5-x
---

Today the Ember project is releasing version 5.2 of Ember.js, EmberData, and Ember CLI.

This release kicks off the 5.3 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.2

Ember.js 5.2 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 5.2 introduced 2 bug fixes:

- [#20505](https://github.com/emberjs/ember.js/pull/20505) Remove use of this.element in component-test and helper-test blueprints. d
- [#20501](https://github.com/emberjs/ember.js/pull/20501) Fix the types for the mutation-methods of NativeArray.

#### Features

Ember.js 5.2 introduced 1 feature:

- [#20464](https://github.com/emberjs/ember.js/pull/20464) Create public import for uniqueId helper per [RFC #659](https://rfcs.emberjs.com/id/0659-unique-id-helper).

#### Deprecations

Ember.js 5.2 introduced 0 deprecations.

For more details on changes in Ember.js 5.2, please review the [Ember.js 5.2.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.2.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

### Changes in EmberData 5.2

EmberData 5.2 was a re-release of EmberData 5.1.2 and contains no new work.

EmberData 5.1.2 included [#8750](https://github.com/emberjs/data/pull/8750) which ported several bug fixes:

- fix: @ember-data/debug should declare its peer-dependency on @ember-data/store [#8703](https://github.com/emberjs/data/pull/8703)
- fix: de-dupe coalescing when includes or adapterOptions is present but still use findRecord [#8704](https://github.com/emberjs/data/pull/8704)
- fix: make implicit relationship teardown following delete of related record safe [#8705](https://github.com/emberjs/data/pull/8705)
- fix: catch errors during didCommit in DEBUG [#8708](https://github.com/emberjs/data/pull/8708)

For more details on changes in EmberData 5.2, please review the
[EmberData 5.2.0 release page](https://github.com/emberjs/data/releases/tag/v5.2.0) and for future planning please refer to the new 🔥 [EmberData Roadmap](https://github.com/emberjs/data/blob/main/ROADMAP.md), which did change as a result of 5.2 being a re-release.

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

### Changes in Ember CLI 5.2

#### Bug Fixes

Ember CLI 5.2 introduced <replace here> bug fixes:

#### Features

Ember CLI 5.2 introduced <replace here> features:

#### Deprecations

Ember CLI 5.2 introduced <replace here> deprecations.

For more details on the changes in Ember CLI 5.2 and detailed upgrade
instructions, please review the [Ember CLI 5.2.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.2.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
