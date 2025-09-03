---
title: Ember 6.7 Released
authors:
  - jared-galanis
date: 2025-09-03T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

Today the Ember project is releasing version 6.7 of Ember.js and Ember CLI.

This release kicks off the 6.8 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.7

Ember.js 6.7 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.7 introduced no unreleased bug fixes.

#### Features

Ember.js 6.7 introduces no new features, but includes 1 enhancement:

- [#20939](https://github.com/emberjs/ember.js/pull/20939) Adds `import { trustHTML } from '@ember/template';` as an alias of `import { htmlSafe } from '@ember/template', for naming that better matches the behavior.


#### Deprecations

Ember.js 6.7 introduces no new deprecations.

For more details on changes in Ember.js 6.7, please review the [Ember.js 6.7.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.7.0-ember-source).

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

### Changes in Ember CLI 6.7

#### Bug fixes

Ember CLI 6.7 introduced <insert> bug fixes.

#### Features

Ember CLI 6.7 introduces <insert> new features.

#### Deprecations

Ember CLI 6.7 introduces <insert> new deprecations.

For more details on the changes in Ember CLI 6.7 and detailed upgrade
instructions, please review the [Ember CLI 6.7.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.7.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
