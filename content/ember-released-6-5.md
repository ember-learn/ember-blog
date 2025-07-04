---
title: Ember 6.5 Released
authors:
  - jared-galanis
  - katie-gengler
  - chris-manson
  - anne-greeth-schot-van-herwijnen
date: 2025-07-04T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

Today the Ember project is releasing version 6.5 of Ember.js and Ember CLI.

Version 6.4 of Ember.js is now promoted to LTS (Long Term Support). The current LTS version of EmberData remains at version 5.3. An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS version of Ember.js was 5.8.

This release kicks off the 6.6 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.5

Ember.js 6.5 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.5 introduced no bug fixes.

#### Features

Ember.js 6.5 introduces 2 new features:

- A `--route-authoring-format=strict` option has been added to the route generator to generate template-tag components as route templates per [RFC #1046](https://rfcs.emberjs.com/id/1046-template-tag-in-routes).
- Options `--strict` or `--tt` were added to the Component blueprint to generate template-tag components per [RFC #0779](https://rfcs.emberjs.com/id/0779-first-class-component-templates).

#### Deprecations

Ember.js 6.5 introduces 1 new deprecation:

- `import Ember from 'ember'` has been deprecated per [RFC #1003](https://rfcs.emberjs.com/id/1003-deprecation-import-ember-from-ember). This deprecates many APIs that were available off of that Ember import. The deprecation guides for each of those APIs can be found [here](https://deprecations.emberjs.com/v6.x).

For more details on changes in Ember.js 6.5, please review the [Ember.js 6.5.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.5.0-ember-source).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData 5.5 has been released, and along with EmberData 5.4, there are many updates that will be more extensively covered in a full stand alone blog post.

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

### Changes in Ember CLI 6.5

#### Bug fixes

Ember CLI 6.5 introduced no bug fixes.

#### Features

Ember CLI 6.5 introduces 1 new feature:

- A `--strict` flag is now available for `ember new` and `ember addon` to generate components and routes as template-tag components per [RFC #1046](https://rfcs.emberjs.com/id/1046-template-tag-in-routes) and [RFC #0779](https://rfcs.emberjs.com/id/0779-first-class-component-templates).

#### Deprecations

Ember CLI 6.5 introduces no new deprecations.

For more details on the changes in Ember CLI 6.5 and detailed upgrade
instructions, please review the [Ember CLI 6.5.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.5.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
