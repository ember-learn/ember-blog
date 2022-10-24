---
title: Ember 4.8 Released
authors:
  - jared-galanis
date: 2022-10-21T00:00:00.000Z
tags:
  - releases
  - '2022'
  - version-4-x
---

Today the Ember project is releasing version 4.8 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.9 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.8

Ember.js 4.8 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.8 introduced 1 bug fix.

- [#20166](https://github.com/emberjs/ember.js/pull/20166) - fixed a bug where calling RouteInfo.find() method executes callback with undefined object since 4.3.0.

#### Features

Ember.js 4.8 introduced 1 feature.

- [#20180](https://github.com/emberjs/ember.js/pull/20180) - an opt-in preview of Ember's official TypeScript types. This is the latest step in implementing [RFC 0800: TypeScript Adoption Plan](https://rfcs.emberjs.com/id/0800-ts-adoption-plan). These types serve as a way to get early feedback, in line with Ember's normal path to stabilizing features. You can opt into the types now, but won't be opted in automatically until they're stable. Check out [the announcement blog post](https://blog.emberjs.com/announcing-official-typescript-types-public-preview) for details on how you can try out the preview, and see the [pull request](https://github.com/emberjs/ember.js/pull/2018) for more detail on the implementation and mechanics involved.

#### Deprecations

Ember.js 4.8 introduced 0 deprecations.

<!-- Block end -->

For more details on changes in Ember.js 4.8, please review the [Ember.js 4.8.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.8.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.8


#### Bug Fixes


#### Features


#### Deprecations


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

### Changes in Ember CLI 4.8

#### Bug Fixes

Ember CLI 4.8 introduced 4 bug fixes.

- [#10014](https://github.com/ember-cli/ember-cli/pull/10014) - a fix that makes sure newly installed addons are discovered when running ember install.
- [#9920](https://github.com/ember-cli/ember-cli/pull/9920) - a fix that makes sure a blueprint’s options object and project instance are always available for all public hooks.
- [#9987](https://github.com/ember-cli/ember-cli/pull/9987) - a fix that makes sure we handle rebuild failures without exiting.
- [#9988](https://github.com/ember-cli/ember-cli/pull/9988) - a fix for a glob matching issue when npm-run-all and Yarn 2+ are used together.

#### Features

Ember CLI 4.8 introduced 2 features.

- [#9945](https://github.com/ember-cli/ember-cli/pull/9945) - Added Node v18 to engines in the app and addon blueprints (removes support for Node v17, which is a breaking change).
- [#9975](https://github.com/ember-cli/ember-cli/pull/9975) - Updated the app and addon blueprints to use const to avoid unnecessary linting errors.

#### Deprecations

Ember CLI 4.8 introduced 0 deprecations.

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
