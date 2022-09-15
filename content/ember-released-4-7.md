---
title: Ember 4.7 Released
authors:
  - the-ember-learning-team
date: 2022-09-5T00:00:00.000Z
tags:
  - releases
  - '2022'
  - version-4-x
---

Today the Ember project is releasing version 4.7 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.8 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.7

Ember.js 4.7 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.7 introduced 1 bug fix.

- [Replacing Firefox detection that used a deprecated browser API](https://github.com/emberjs/ember.js/pull/20126)

#### Features

Ember.js 4.7 introduced 0 features.

#### Deprecations

Ember.js 4.7 introduced 0 deprecations.

<!-- Block end -->

For more details on changes in Ember.js 4.7, please review the [Ember.js 4.7.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.7.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.7

Version 4.7 implements a "2.1" cache spec while deprecating the v1 cache spec. This spec differs somewhat from the [original 2.0 RFC](https://rfcs.emberjs.com/id/0461-ember-data-singleton-record-data), an updated RFC specifying the modifications will be published soon. Users looking to migrate to the 2.1 cache should expect that the finalized version of 2.1 enforces that the cache is always a singleton (vs merely allowed to be a singleton), and that data provided to the store and queries to the store from the cache should always contain identifiers in their stable form. This latter point is enforced in 4.7, the former is not yet enforced.

<!-- markdownlint-disable MD036 -->
**Performance Improvements**
> Note: many performance improvements are gated by deprecation removal, meaning that you need to resolve all deprecations for EmberData 4.7 and mark your app as compatible with that version in order to opt in to the fastest codepaths.
All applications should observe significant speed improvements when using EmberData 4.7. The below call-outs are in relation to EmberData 4.6.

- Pushing new data into the cache is now ~33% faster
- Accessing the LiveArray (peekAll / findAll) for the first time is now 97% faster
- Initial Access of Related Records is now ~80% faster
- Destroying all records (e.g. also sending an API request) in a loop is 62% faster
- Unloading all records (of all types) is ~98% faster

Read more in the [release notes](https://github.com/emberjs/data/releases/tag/v4.7.1).

#### Bug Fixes

Ember Data 4.7 introduced 8 bug fixes and some tests and documentation improvements. Additional details are in the [release notes](https://github.com/emberjs/data/releases/tag/v4.7.1).

- [#8089](https://github.com/emberjs/data/pull/8089) Unpin yarn for consumers
- [#8108](https://github.com/emberjs/data/pull/8108) Fix earlier versions of node-14
- [#8118](https://github.com/emberjs/data/pull/8118) Reopen deprecation should properly pass original arguments
- [#8113](https://github.com/emberjs/data/pull/8113) Account for multi-options-per-identifer possibility
- [#8109](https://github.com/emberjs/data/pull/8109) Add optional polyfill for crypto.randomUUID
- [#8116](https://github.com/emberjs/data/pull/8116) Clear subscriptions once unsubscribed, don't unnecessarily churn on subscriptions
- [#8128](https://github.com/emberjs/data/pull/8128) `backgroundReloads` should not affect `recordIsLoaded`
- [#8159](https://github.com/emberjs/data/pull/8159) uuid polyfill logic (@runspired)

#### Features

Ember Data 4.7 introduced 2 features.

- [#7955](https://github.com/emberjs/data/pull/7955) Explicit Polymorphic Relationship Support [emberjs/rfcs#793](https://rfcs.emberjs.com/id/0793-polymporphic-relations-without-inheritance)
- [#8134](https://github.com/emberjs/data/pull/8134) The return values of hasMany relationships, peekAll, findAll and query are now proxies to native arrays and as such all native array APIs are now usable. These objects will act fully as if they are native arrays. Restrictions on immutability of the result of peekAll and query still apply ([RFC 846](https://rfcs.emberjs.com/id/0846-ember-data-deprecate-proxies)).

#### Deprecations

Ember Data 4.7 introduced 13 deprecations. Additional details are in the [release notes](https://github.com/emberjs/data/releases/tag/v4.7.1).

- [#8093](https://github.com/emberjs/data/pull/8093) Implement helper deprecations ([RFC 742](https://rfcs.emberjs.com/id/0742-ember-data-deprecate-helper-functions)).
- [#8092](https://github.com/emberjs/data/pull/8092) Deprecate `Model.reopen`/`reopenClass` and eager static fields lookups (implements [RFC 738](https://rfcs.emberjs.com/id/0738-ember-data-deprecate-model-reopen) and [RFC 741](https://rfcs.emberjs.com/id/0741-ember-data-deprecate-model-static-field-access-without-lookup)).
- [#8084](https://github.com/emberjs/data/pull/8084) Eliminate InternalModel, nearly all private API's have undergone significant change, if your app previously used these APIs the most likely refactor is to use a custom model or a custom cache.
- [#8115](https://github.com/emberjs/data/pull/8115) Implement strict relationships ([RFC 739](https://rfcs.emberjs.com/id/0739-ember-data-deprecate-non-strict-relationships)).

For more details on changes in Ember Data 4.7, please review the
[Ember Data 4.7.1 commits](https://github.com/emberjs/data/compare/v4.1.0...v4.7.1).

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

### Changes in Ember CLI 4.7

#### Bug Fixes

Ember CLI 4.7 introduced 1 bug fix.

- [Rebuild failures no longer make the ember-cli process exit.](https://github.com/ember-cli/ember-cli/pull/9987)

#### Features

Ember CLI 4.7 introduced 0 features.

#### Deprecations

Ember CLI 4.7 introduced 0 deprecations.

For more details on the changes in Ember CLI 4.7 and detailed upgrade
instructions, please review the [Ember CLI 4.7.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.7.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
