---
title: Ember 4.10 Released
authors:
  - the-ember-learning-team
date: 2023-01-13T00:00:00.000Z
tags:
  - releases
  - '2023'
  - version-4-x
---

Today the Ember project is releasing version 4.10 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.11 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.10

Ember.js 4.10 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.10 introduced 2 bug fixes.

- [#20327](https://github.com/emberjs/ember.js/pull/20327) - Fix the types for the mutation-methods of `NativeArray`
- [#20283](https://github.com/emberjs/ember.js/pull/20283) - revert TS `compilerOptions.target` to ES2017

#### Features

Ember.js 4.10 introduced 3 features.

- [#20270](https://github.com/emberjs/ember.js/pull/20270) / [#20271](https://github.com/emberjs/ember.js/pull/20271) - Add new imports for `getOwner` and `setOwner` from `@ember/owner` and introduce new `@ember/routing` sub-modules
- [#20253](https://github.com/emberjs/ember.js/pull/20253) - Add the `Resolver` type to preview types
- [#20319](https://github.com/emberjs/ember.js/pull/20319) - resolve services with `Owner.lookup`

#### Deprecations

Ember.js 4.10 introduced 3 deprecations.

- [#20341](https://github.com/emberjs/ember.js/pull/20341) - Deprecations for importing `htmlSafe` and `isHTMLSafe` from `@ember/string`. They have moved to `@ember/template`
- [#20344](https://github.com/emberjs/ember.js/pull/20344) - Deprecate `@ember/string` when used from ember-source. You should use the `@ember/string`-addon
- [#20342](https://github.com/emberjs/ember.js/pull/20342) - Deprecate @ember/error
<!-- Block end -->

For more details on changes in Ember.js 4.10, please review the [Ember.js 4.10.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.10.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.10

#### Bug Fixes

Ember Data 4.10 introduced 0 bug fixes and some tests and documentation improvements.

#### Features

Ember Data 4.10 introduced 0 features.

#### Deprecations

Ember Data 4.10 introduced 0 deprecations.

Support for the `toJSON` method on Ember Data records has been removed. It was deprecated in `3.x` and slated for removal in `4.x`.
If your app uses this method, follow the [deprecation guide](https://deprecations.emberjs.com/ember-data/v3.x/#toc_record-toJSON).

For more details on changes in Ember Data 4.10, please review the
[Ember Data 4.10.0 commits](https://github.com/emberjs/data/compare/v4.1.0...v4.10.0).

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

### Changes in Ember CLI 4.10

#### Bug Fixes

Ember CLI 4.10 introduced 0 bug fixes.

#### Features

Ember CLI 4.10 introduced 5 features.

- [#10048](https://github.com/ember-cli/ember-cli/pull/10048) Make addAddonsToProject support creating a new project with custom target directory
- [#10054](https://github.com/ember-cli/ember-cli/pull/10054) Conditionally apply ESLint parser options in `app` and `addon` blueprints
- [#10060](https://github.com/ember-cli/ember-cli/pull/10060) Replace `eslint-plugin-node` with `eslint-plugin-n` in blueprints
- [#10062](https://github.com/ember-cli/ember-cli/pull/10062) Update Prettier config in blueprints to only use single quotes for `.js` and `.ts` files
- [#10132](https://github.com/ember-cli/ember-cli/pull/10132) Add @ember/string as a dependency of projects

#### Deprecations

Ember CLI 4.10 introduced 0 deprecations.

For more details on the changes in Ember CLI 4.10 and detailed upgrade
instructions, please review the [Ember CLI 4.10.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.10.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
