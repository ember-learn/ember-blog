---
title: Ember 4.6 Released
authors:
  - jen-weber
  - chris-thoburn
  - katie-gengler
date: 2022-07-29T21:00:00.000Z
tags:
  - releases
  - '2022'
  - version-4-x
---

Today the Ember project is releasing version 4.6 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.7 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.6

Ember.js 4.6 is an incremental, backwards compatible release of Ember with bug fixes.

#### Bug Fixes

Ember.js 4.6 introduced 2 bug fixes.

- [Replace deprecated `substr()` method](https://github.com/emberjs/ember.js/pull/20125) with `substring()` method
- [Adjust `uniqueId()` implementation](https://github.com/emberjs/ember.js/pull/20120) to only generate valid selectors. [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) does not work if the first character is a number, so
now we ensure that the first character is a letter.

#### Features

Ember.js 4.6 introduced 0 features.

#### Deprecations

Ember.js 4.6 introduced 0 deprecations.

For more details on changes in Ember.js 4.6, please review the [Ember.js 4.6.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.6.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data

The Ember Data team has multiple releases to announce! We will go through them
one by one in the section below.

Firstly, Ember CLI's blueprints for creating new apps and upgrading existing apps
still point to v4.4 of Ember Data. If you want to take advantage of the progress
described below, update the version number in your `package.json` after completing
your upgrade.

Now let's cover what is in v4.5 and v4.6. These two versions are identical.
The aim is to catch up to the versioning number of Ember CLI and Ember.js.

Version 4.5 includes a number of new deprecations, a significant internal refactoring of the store architecture and several bug fixes described below. 

#### Node support

v4.5 of Ember Data drops support for Node 12. Node 12 became end of life (it no longer receives security updates) in April 2022.

#### Bug Fixes

Ember Data 4.5 introduced 9 bug fixes. Additional Details are in the [release notes](https://github.com/emberjs/data/releases/tag/v4.5.0).

* [#8083](https://github.com/emberjs/data/pull/8083) [BUGFIX] Serialize null array items as empty strings 
* [#7901](https://github.com/emberjs/data/pull/7901) <!-- alex ignore waiter -->`waiter` should be always on
* [#8042](https://github.com/emberjs/data/pull/8042) `RecordState` cleanup 
* [#8008](https://github.com/emberjs/data/pull/8008) schedule `watchTypeIfUnseen` to prevent loop
* [#8013](https://github.com/emberjs/data/pull/8013) Fix generated import paths for test setup functions in addons
* [#8025](https://github.com/emberjs/data/pull/8025) Fix `PromiseProxy` Deprecation for Save ([@runspired](https://github.com/runspired))
* [#7902](https://github.com/emberjs/data/pull/7902) test for async hasMany does not trigger relationship fetch
* Pass correct args to `keyFor<Attribute|Relationship>` when normalizing
* [#7945](https://github.com/emberjs/data/pull/7945) fix for an issue with computed chains not updated for async hasMany loading

#### Features

Ember Data 4.5 introduced improvements to build size.

Users of solely the core of Ember Data, namely the `store` and `ember-inflector` packages, may expect the builds of those dependencies to be 35-50% smaller. This is due to most of the legacy support for `@ember-data/model` having now found its final location at home in that package instead of within the `@ember-data/store package`. The size of `@ember-data/store` is reduced from ~16kb compressed to ~9.5kb compressed, potentially a little less depending on what deprecations are resolved and what other packages are present. We expect the core to continue to shrink as we complete the final stages of removing `InternalModel`, complete implementations for recently accepted deprecation RFCs, and introduce `RecordDataV2`.

#### Deprecations

Ember Data 4.5 introduced 8 deprecations. Some private APIs have also
been deprecated or removed, and some methods deprecated during v3 of Ember are
now removed. For the full list of removed APIs, visit the [release notes](https://github.com/emberjs/data/releases/tag/v4.5.0).

The new deprecations are below, and support for the deprecated APIs will be removed
in the next major version of Ember:

- deprecating some internal usage of `RSVP.Promise` that applications may have become dependent on if their tests are leaky. This was
proposed in [RFC 796](https://rfcs.emberjs.com/id/0796-ember-data-deprecate-rsvp)
- deprecating the `type` property on snapshots (which would lookup the model class).
- deprecating `store.find`, a private method that has been maintained in case users accidentally fell into using ember's hidden autofetch behavior in routes
- deprecating `store.hasRecordForId`, as `peekRecord` is generally more useful and provides the same information (and more).
- deprecating `store.recordWasInvalid`, an unused internal api that `ember-model-validations` appears to be using.
- deprecating passing strings to the schema lookup functions `attributesDefinitionFor` and `relationshipsDefinitionFor`, these APIs now expect an object with at least a `type` property representing the model name.
- deprecating the `-json-api` fallback adapter, a hidden behavior that provided an adapter if the application failed to define one.

As always, deprecated code can be eliminated from the build output by specifying the `compatWith` arg on the [emberData configuration in your app](https://api.emberjs.com/ember-data/release/modules/@ember-data%2Fdeprecations).

##### Private API removals

Users of private store APIs may find these APIs have now been deprecated or removed. Internal restructuring will be high the next 6 months as we polish off the removal of `InternalModel` and continue to simplify codepaths which that removal allows us to do. All but a few private methods have been entirely eliminated from the store.

For more details on changes in Ember Data 4.6, please review the
[Ember Data 4.6.0 release page](https://github.com/emberjs/data/releases/tag/v4.6.0).

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

### Changes in Ember CLI 4.6

This version included some changes to Node support, a new deprecation,
some removals of previously deprecated code, and a
[variety of internal cleanup and refactor efforts](https://github.com/ember-cli/ember-cli/blob/master/CHANGELOG.md).

#### Node support

v4.5 of Ember CLI drops support for Node 12 and adds support for Node 18. Node 12 became end of life (it no longer receives security updates) in April 2022.

#### Bug Fixes

Ember CLI 4.6 introduced 0 bug fixes.

#### Features

Ember CLI 4.6 introduced 0 features.

#### Deprecations

Ember CLI 4.6 introduced 1 deprecation.

[The `vendor-shim` blueprint is deprecated](https://github.com/ember-cli/ember-cli/pull/9903). Please use `ember-auto-import` instead.

In addition, some deprecations introduced in earlier major versions of
Ember have now been removed, including [support for `ember-cli-inject-live-reload`](https://github.com/ember-cli/ember-cli/pull/9902), [`silent` error](https://github.com/ember-cli/ember-cli/pull/9899), and [`addonJsFiles`](https://github.com/ember-cli/ember-cli/pull/9898).

For more details on the changes in Ember CLI 4.6 and detailed upgrade
instructions, please review the [Ember CLI 4.6.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.6.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
