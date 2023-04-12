---
title: Ember 4.12 Released
authors:
  - jared-galanis
date: 2023-04-12T12:00:00.000Z
tags:
  - releases
  - '2023'
  - version-4-x
---

Today the Ember project is releasing version 4.12 of Ember.js, EmberData, and Ember CLI. <!-- Block start: Uncomment if an LTS candidate --><!--This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.--><!-- Block end -->

This release kicks off the 5.0 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.12

Ember.js 4.12 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.12 introduced 3 bug fixes.

- [#20388](https://github.com/emberjs/ember.js/pull/20388) - Don't run getters while applying mixins, ensuring that getters are never evaluated while applying
  mixins.
- [#20398](https://github.com/emberjs/ember.js/pull/20398) - Fix runloop types on TypeScript 5.0+ where types aroudn `bind` were flagged with an assignability error.
- [#20385](https://github.com/emberjs/ember.js/pull/20385) - Improve the error for owner methods called after destroy where the error message did not indicate what was being looked up.

#### Features

Ember.js 4.12 introduced 3 features.

- [#20352](https://github.com/emberjs/ember.js/releases/tag/v4.12.0) - Enable generating Typescript blueprints when `isTypeScriptProject` is `true` without additional environment variables per [RFC #800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan).
- [#20355](https://github.com/emberjs/ember.js/pull/20355) - Enhance the Typescript blueprint for generated services per [RFC #800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan).
- [#20356](https://github.com/emberjs/ember.js/pull/20356) - Generate signature in TypeScript Glimmer Component blueprints per [RFC #800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan).

#### Deprecations

Ember.js 4.12 introduced 0 deprecations.

<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework. No new deprecations are allowed after the `.10` release, to minimize churn before the next major release.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 4.12, please review the [Ember.js 4.12.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.12.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

There were many significant changes to EmberData in 4.12, including:

- some big steps towards Embroider support with improved build times and addons that are close to v2 addons - full embroider support is the flip of a switch away once a few issues are resolved;
- lots of improved documentation, including the docs around Cache, Notifications, Identity Management, and Record Lifecycle, also includes inline deprecation docs and granular stripping;
- introducing `@ember-data/request` and the `RequestManager`, a package that can be used independently (but also comes bundled with `ember-data`) that re-envisions how data fetching is managed for both EmberData and applications more broadly - see the [docs](https://github.com/emberjs/data/tree/v4.12.0/packages/request#readme) and [related RFC](https://github.com/emberjs/rfcs/pull/860);
- Cache Spec 2.1 implementation - using the power of `store.request`, requests are now capable of providing a cache-key or being cached by URL, with full lifecycle control and notification subscriptions. Documents are a first-class citizen of the Cache and EmberData more broadly. To go with this, the `JSON:API` cache previously provided by `@ember-data/record-data` is now upgraded to the 2.1 spec and available as the `@ember-data/json-api` package. While this cache does not yet implement the full suite of cache 2.1 APIs, support for all Cache 2.1 APIs has been added to the store. Read more about Cache 2.1 in the [related RFC](https://github.com/emberjs/rfcs/pull/854).

We are not listing all the work done here, and it is significant, so for more context on the EmberData 4.12 please read the detailed [release notes](https://github.com/emberjs/data/releases/tag/v4.12.0).

### Changes in EmberData 4.12

#### Bug Fixes

EmberData 4.12 introduced 20 bug fixes.

#### Features

EmberData 4.12 introduced 24 features.

#### Deprecations

EmberData 4.12 introduced 2 deprecation removals.

For more details on changes in EmberData 4.12 please review the
[EmberData 4.12.0 release page](https://github.com/emberjs/data/releases/tag/v4.12.0) and the [EmberData changelog](https://github.com/emberjs/data/blob/master/CHANGELOG.md).

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

### Changes in Ember CLI 4.12

Ember CLI

Ember CLI did not introduce new bug fixes, features or deprecations, but there were a few updates that added [`ember-modifier`](https://github.com/ember-cli/ember-cli/pull/10103) and [`tracked-built-ins`](https://github.com/ember-cli/ember-cli/pull/10109) to the app blueprint and there was [one update](https://github.com/ember-cli/ember-cli/pull/10110) addressing a dependency vulnerability.

#### Bug Fixes

Ember CLI 4.12 introduced 2 bug fixes.

- [#10091](https://github.com/ember-cli/ember-cli/pull/10091) - Fix looking up the default blueprint for scoped addons
- [#10192](https://github.com/ember-cli/ember-cli/pull/10192) - The `addon` command should throw when no addon name is provided

#### Features

Ember CLI 4.12 introduced 11 features.

- [#10122](https://github.com/ember-cli/ember-cli/pull/10122) - Add Stylelint setup to `app` and `addon` blueprints
- [#10142](https://github.com/ember-cli/ember-cli/pull/10142) - Update ESLint to v8 in `app` and `addon` blueprints
- [#10157](https://github.com/ember-cli/ember-cli/pull/10157) - Exclude `ember-cli-terser` when generating apps using the `--embroider` option
- [#10159](https://github.com/ember-cli/ember-cli/pull/10159) - Exclude `ember-cli-sri` when generating apps using the `--embroider` option
- [#10161](https://github.com/ember-cli/ember-cli/pull/10161) - Remove NPM version checking
- [#10169](https://github.com/ember-cli/ember-cli/pull/10169) - Remove `app.import` comment in `app` blueprint
- [#10172](https://github.com/ember-cli/ember-cli/pull/10172) - Lazy require heavier packages
- [#10173](https://github.com/ember-cli/ember-cli/pull/10173) - Don't delete the newly-generated app directory when an error occurs
- [#10180](https://github.com/ember-cli/ember-cli/pull/10180) - Update `ember-welcome-page` to v7 in `app` blueprint
- [#10188](https://github.com/ember-cli/ember-cli/pull/10188) - Update ESLint parser `ecmaVersion` to `latest` in `app` blueprint
- [#10189](https://github.com/ember-cli/ember-cli/pull/10189) - Add v4.8 LTS to `addon` blueprint - Remove v3.28 LTS and `ember-classic` scenario

#### Deprecations

Ember CLI 4.12 introduced 0 deprecations.

For more details on the changes in Ember CLI 4.12 and detailed upgrade
instructions, please review the [Ember CLI 4.12.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.12.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
