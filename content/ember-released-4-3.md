---
title: Ember 4.3 Released
authors:
  - anne-greeth-schot-van-herwijnen
  - jen-weber

date: 2022-04-20T00:00:00.000Z
tags:
  - releases
  - '2022'
  - version-4-x
---

Today the Ember project is releasing version 4.3 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.3 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.3

Ember.js 4.3 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.3 introduced 3 bug fixes.

- A memory leak in the Router Service class is fixed ([#20025](https://github.com/emberjs/ember.js/pull/20025)). It was affecting tests and FastBoot apps.
- Using `RouterService#transitionTo` no longer adds unspecified default query parameters to the URL ([#19971](https://github.com/emberjs/ember.js/pull/19971)).
- FactoryManager correctly associate props with factory and owner ([#20024](https://github.com/emberjs/ember.js/pull/20024))

#### Features

Ember.js 4.3 introduced 0 features.

#### Deprecations

Ember.js 4.3 introduced 0 deprecations.

<!-- Block end -->

For more details on changes in Ember.js 4.3, please review the [Ember.js 4.3.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.3.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.3

#### Bug Fixes

Ember Data 4.3 introduced many bug fixes! Contributors to the project
were hard at work to address things that were reported between `v3.28` and
`v4.2`.

Many of the bugfixes listed below have been backported to
`v3.28`. That means if you get the latest patch release of `v3.28-v4.2`,
you will get these benefits too.

The list below covers highlights only. See the [commit history](https://github.com/emberjs/data/compare/v4.2.0...v4.3.0) for a comprehensive list.

- Pushing records with duplicate identifiers does not cause duplicate records
[#7801](https://github.com/emberjs/data/pull/7801)
- Fix a bug with encoding space characters when serializing query params
[#7834](https://github.com/emberjs/data/pull/7834)
- Fix a regression where `createRecord` crashed when a setter which sets an
attribute is involved in the `createRecord`.
- Fix a regression to support `await` for loading relationships
[#7684](https://github.com/emberjs/data/issues/7684)
- [...and more!](https://github.com/emberjs/data/compare/v4.2.0...v4.3.0)

#### Features

Ember Data 4.3 introduced 4 features.

- [Better debuggability](https://github.com/emberjs/data/pull/7227)! When your
app is in `DEBUG` mode, you can now dig into `Store`, `Symbol`, and
`RecordReference` more easily.
- [Add support for Customizeable test setups](https://github.com/emberjs/data/pull/7887)
as described in [RFC 637](https://emberjs.github.io/rfcs/0637-customizable-test-setups.html)
- The Reference API is now [compatible with autotracking](https://github.com/emberjs/data/pull/7796).
- `attributesDefinitionFor` and `relationshipsDefinitionFor` have
[simpler TypeScript types](https://github.com/emberjs/data/pull/7867/files),
following [RFC 794](https://emberjs.github.io/rfcs/0794-ember-data-schema-definition-service-simplify.html)

#### Deprecations

Ember Data 4.3 introduced 0 deprecations.

Support for the `toJSON` method on Ember Data records has been removed. It was deprecated in `3.x` and slated for removal in `4.x`.
If your app uses this method, follow the [deprecation guide](https://deprecations.emberjs.com/ember-data/v3.x/#toc_record-toJSON).

Some more previously-deprecated APIs were slated for removal in the `4.x`
series, and have [now been removed](https://github.com/emberjs/data/pull/7861):

- evented
- lifecycle events like `didCreate`
- default adapter - adapter type must be specified now
- test registrations
- `belongs-to-push` of record
- `mismatched-inverse`

For more details on changes in Ember Data 4.3, please review the
[Ember Data 4.3.0 commits](https://github.com/emberjs/data/compare/v4.2.0...v4.3.0).

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

### Changes in Ember CLI 4.3

#### Bug Fixes

Ember CLI 4.3 introduced 1 bug fix.

- The broccoli debug folder is added to the `gitignore` file ([#9680](https://github.com/ember-cli/ember-cli/pull/9680)).

#### Features

Ember CLI 4.3 introduced 2 features.

- Customisation of setupTest\* functions ([#9803](https://github.com/ember-cli/ember-cli/pull/9803)). This adds a `tests/helpers/index.js` file where `setupApplicationTest`, `setupRenderingTest`, and `setupTest` functions will be wrapped and exported, creating a single place to edit for each type of test setup. Tests generated using `ember generate` will import the setup functions from that file.
- Add support for specifying a path for the `ember generate` command ([#9387](https://github.com/ember-cli/ember-cli/pull/9387)). This allows you to run `ember g ../../../node_modules/ember-source/blueprints/component` to generate a component.

#### Deprecations

Ember CLI 4.3 introduced 1 deprecation.

- Deprecate Bower support ([#9707](https://github.com/ember-cli/ember-cli/pull/9707)). This implements the deprecation messages from [RFC 772](https://github.com/bertdeblock/rfcs/blob/deprecate-bower-apis/text/0772-deprecate-bower-support.md).

For more details on the changes in Ember CLI 4.3 and detailed upgrade
instructions, please review the [Ember CLI 4.3.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.3.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
