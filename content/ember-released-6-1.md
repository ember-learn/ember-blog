---
title: Ember 6.1 Released
authors:
  - jared-galanis
date: 2024-12-28T00:00:00.000Z
tags:
  - releases
  - '2024'
  - version-6-x
---

Today the Ember project is releasing version 6.1 of Ember.js and Ember CLI.

This release kicks off the 6.2 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.1

Ember.js 6.1 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.1 introduced 1 bug fix.

- [#20782](https://github.com/emberjs/ember.js/pull/20782) - Fixes Ember keyword shadowing: keywords should always be superseded by in-scope lexical variables.

#### Features

Ember.js 6.1 introduced 1 new feature.

- [#20787](https://github.com/emberjs/ember.js/pull/20787) - Publish ember-source as v2 addon. The published contents of the package have already been compliant with the v2 addon spec for some time, but this actually flips the setting. Embroider builds will now be able to consume ember-source directly without ember-source going through any addon rewriting. Classic builds will continue to get all pre-existing ember modules via the vendor.js bundle, because otherwise it would introduce observable differences in when the ember modules become available in the AMD loader.

#### Deprecations

Ember.js 6.1 introduced no new deprecations.

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData [broke from Lockstep versioning in November 2023](https://blog.emberjs.com/updates-to-ember-data-versioning-strategy). Under the new policy, EmberData 5.3 is an LTS that supports `ember-source` 5.12 and `ember-source` 6.0. More compatibility info is available in the [README](https://github.com/emberjs/data#compatibility).

EmberData is also in the process of rebranding to WarpDrive. Stay tuned for more info!

This support extends beyond bug-fixes. If minor enhancements can be made to better support new presentation class implementations that support the 5.x series we will willingly accept them. Our goal is that we want no one left behind.

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

### Changes in Ember CLI 6.1

#### Bug fixes

Ember CLI 6.1 introduced 2 bug fixes and backported one of the fixes to 6.0.

- [#10564](https://github.com/ember-cli/ember-cli/pull/10564) - Add missing package for TS eslint config.
- [#10527](https://github.com/ember-cli/ember-cli/pull/10527) - Update @ember/test-helpers, which was causing problems for the cli@6.0.0 blueprints, since test-helpers 3.3.1 has a peer-dep on ember-source 4 || 5, while the blueprint has ember-source@~6.0.0.
- [#10563](https://github.com/ember-cli/ember-cli/pull/10563) - Backport of the above fix to 6.0.

#### Features

Ember CLI 6.1 introduced no new features, but there were several internal dependency updates you can find [here](https://github.com/ember-cli/ember-cli/blob/master/CHANGELOG.md#v610).

#### Deprecations

Ember CLI 6.1 introduced no new deprecations.

For more details on the changes in Ember CLI 6.1 and detailed upgrade
instructions, please review the [Ember CLI 6.1.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.1.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
