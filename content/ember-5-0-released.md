---
title: Ember 5.0 Released
image:
imageMeta:
  attribution:
  attributionLink:
featured: true
authors:
  - jen-weber
  - chris-krycho
  - katie-gengler
  - jared-galanis
date: Mon May 15 2023 14:29:48 GMT-0400 (Eastern Daylight Time)
tags:
  - releases
  - '2023'
  - version-5-x
---

Today the Ember project is releasing version 5.0 of Ember.js, EmberData, and Ember CLI. This post will cover our release strategy, how to upgrade, what to expect, and deprecated APIs that were removed.

<!-- TODO - need a nice catchy intro that newsletters can copy paste -->

This is the first major release under the new release strategy and goals proposed in [RFC 830, Evolving Ember's Major Version Process](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process).
To summarize, every 12 minor releases, Ember will ship a new major release, which removes any
deprecated code targeted for that major version.
When it comes to introducing new features, Ember generally aims to ship new features in minor releases, offering backwards compatibility for existing code at the same time as giving developers the chance to try out new capabilities.
This approach reduces the challenges that teams face for major upgrades, compared to producing big, breaking, splashy major versions with lots of new features.

<!-- alex ignore retext-equality -->
In Ember 4.x minor releases, we landed a bunch of features (along with various bug fixes, of course):

- In [Ember 4.1](https://blog.emberjs.com/ember-4-1-released/), we shipped a bunch of quality-of-life improvements:
    - the `@cached` decorator for caching expensive getters
    - the `@service` decorator so you don't have to `import { inject as service }` anymore
    - the `refresh` method on the Ember router, making it easier to refresh the data for the whole current route tree

- In [Ember 4.4](https://blog.emberjs.com/ember-released-4-4/), we shipped a `{{unique-id}}` helper to make it easier to write accessible forms and made it easier to customize tests with improved blueprints for `setupTest`.

- In [Ember 4.5](https://blog.emberjs.com/ember-4-5-released/), we made it possible to use plain old JavaScript functions as helpers: no need to wrap them with `helper()` any more!
    <!-- alex ignore retext-equality -->
    We also shipped a new testing primitive, `renderSettled`, which lets you wait for when Ember has re-rendered but *other* promises are still in flight—handy for testing your loading spinners, for example.

- In [Ember 4.8](https://blog.emberjs.com/ember-4-8-released/), we shipped a preview of our native TypeScript support, starting out with hand-authored types.

- In [Ember 4.9](https://blog.emberjs.com/ember-4-9-released/), we did a *ton* of internal polish work on our types and started testing Ember itself against our supported range of TypeScript versions.

- In [Ember 4.10](https://blog.emberjs.com/ember-released-4-10/), we introduced a new, carefully-designed API for Ember's Dependency Injection system: `Owner` is a subset of the `ApplicationInstance` type which covers all of its APIs with less duplication and confusion about what to use.

- In [Ember 4.11](https://blog.emberjs.com/ember-released-4-11/), we published the first TypeScript types in Ember generated from Ember's own source code.

- In [Ember 4.12](https://blog.emberjs.com/ember-released-4-12/), we enabled generating TypeScript blueprints with `ember generate`.

We also made significant strides in key parts of the ecosystem outside the core framework itself over the past 18 months:

- We committed to shipping a new component format using `<template>` tags to get the best parts of “single-file components” and formats like JSX, while keeping the best parts of Ember’s declarative Handlebars templates.
    We shipped support for `<template>` tags in `.gjs` and `.gts` files over the course of 2022.
    That includes [ESLint integration](https://github.com/ember-cli/eslint-plugin-ember) and [a Prettier plugin](https://github.com/gitKrystan/prettier-plugin-ember-template-tag), as well as [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) support!
    We expect to recommend `<template>` as the default authoring format during Ember 5.x.

- We [shipped Glint 1.0](https://blog.emberjs.com/glint-1-0-released/), providing top-notch editor tooling for Ember's Handlebars templates in both JavaScript and TypeScript code bases, powered by TypeScript under the hood.

- EmberData [massively improved performance](https://blog.emberjs.com/ember-released-4-7/) and [laid a foundation](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15/) for a total overhaul in the 5.x series.

Ember 5.0 has no new features, because we did all that work in minor releases instead.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

## Beta cycle

This release kicks off the 5.1 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

## How to upgrade to Ember 5

The most common approach for upgrading to 5.0 is to upgrade your app to the last
version of Ember 4, which is 4.12, resolve all deprecation warnings, and then upgrade to 5.0. If your app or addon runs with no deprecations in the latest release of 4.12,
you should be able to upgrade to Ember 5 with no additional changes. Step by step directions are below.

If your app is at a much earlier version in the 4.x series, we
recommend upgrading in steps across the LTS versions: 4.4, 4.8, and then 4.12.

Follow these steps in order:

1. Upgrade your project to the latest patch version of Ember 4.12.
   Many developers can do this by running
   `npx ember-cli-update --to 4.12`. The
   [general Ember upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself)
   has more details about how to upgrade your Ember app/addon.
2. Make sure your app builds successfully.
3. Resolve all deprecation warnings. These Deprecated APIs are removed in Ember 5.0. You may need to upgrade some of your addon dependencies if they are using deprecated APIs.
See the [Ember Deprecation Guide](https://deprecations.emberjs.com/)
for more details about specific deprecations and how to resolve them.
Applications that need to upgrade through several versions may want to
consider isolating individual deprecations by using
[ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow).
    - *Note:* If you see a deprecation for `@ember/string`, please review the
[deprecation guide for importing from @ember/string without @ember/string as a dependency](https://deprecations.emberjs.com/v4.x#toc_ember-string-add-package) for instructions.
There is a known bug in the implementation of this deprecation.
4. Make sure your app builds successfully and your test suite passes with no
   deprecations.
5. Upgrade your app to Ember 5.0. Again,
   many developers can do this by running
   `npx ember-cli-update --to 5.0`. Refer to the
   [general Ember upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself)
   for more details about how to upgrade your Ember app/addon.

For help or advice along the way, visit [Ember's forums or chat groups](https://emberjs.com/community/).

<!-- TODO - do we need to mention anything here about htmlbars, fastboot, embroider, or ember-auto-import? -->

## The journey towards Ember Polaris

Polaris is the name of an upcoming edition of Ember, first announced at EmberConf 2021. Over the course of 5.x, new features will be added to Ember that will eventually make up the new edition.

Since our major versions tend to be uneventful, Editions are the moment where the Ember community comes together to learn and build in new ways.
An edition is a set of features, corresponding documentation, and tools that create a cohesive programming model.
An edition marks a shift and step forward in the framework, beyond what individual features would accomplish.
Ember Octane was the first new edition that was added to Ember.

Stay tuned for future blog posts with more details and calls for contributors!

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.0

Ember.js 5.0 introduces no new public API. Instead, it is comprised of bug fixes and the removal of previously deprecated public API from the 4.x cycle.

This release drops support for Node 14. Node 14 became end of life (it no longer receives security updates) as of April 2023.

#### Bug Fixes

Ember.js 5.0 introduced 4 bug fixes in the preview types.

#### Features

Ember.js 5.0 introduced no new features.


#### Deprecations

Ember.js 5.0 introduced 0 deprecations. It removed all deprecations that were
introduced before 4.10 and slated for removal in 5.0.

Ember 5.0 removes five features deprecated during 4.x:

- Removing Ember's `assign`, a polyfill for [the `Object.assign` static function](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), since the built-in is supported by all major browsers in Ember's support matrix.
- Removing the API for implicit injections. These were deprecated in Ember 3.26, and became no-ops in Ember 4.0; 5.0 removes them.
- Removing the `AutoLocation` class in favor of having apps explicitly choose to use one of the built-in `HistoryLocation`, `HashLocation`, `NoneLocation` classes, or to supply their own.
- Removing the `@ember/error` package, which for many years has only re-exported the `Error` built-in type.
- Removing support for `Ember.String`: developers who are using its utilities should explicitly install the `@ember/string` package and use it instead of the `Ember.String` namespace. We also encourage users to use other tools than the `@ember/string` package, including [browser builtins like `Intl.PluralRules`](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) or other libraries from the JavaScript ecosystem, but the package is still supported. Note! There is currently a [bug](https://github.com/emberjs/ember.js/issues/20377) in the implementation of the `@ember/string` deprecation. Adding `@ember/string` to your project may not be enough to silence the deprecation. However, so long as the `@ember/string` package has been installed to your project you can upgrade to `5.0` without worrying about the deprecation. Please see the [deprecation guide](https://deprecations.emberjs.com/v4.x#toc_ember-string-add-package) for more information.

For more details on how to resolve these deprecations in your app, see [the deprecations guide](https://deprecations.emberjs.com/v4.x).
<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 5.0, please review the [Ember.js 5.0.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.0.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData 4.12 will remain an actively supported LTS for the entire duration of the 5.x cycle, extending until the first 6.x LTS is released. This is in addition to our regular LTS support policy, and only applies to the EmberData project.

This support extends beyond bug-fixes. If minor enhancements can be made to better support new presentation class implementations that support the 4.x series we will willingly accept them. Our goal is that we want no one left behind.

To learn about the motivation and goals for upcoming changes to EmberData in 5.x,
read the [blog post, EmberData 5.X Update](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15/).
<!-- alex ignore retext-equality -->
This will help you form the mental model of what to expect across the 5.x series,
and understand deprecation removals in the context of the upcoming goals.

The sections below will provide a high-level summary of what has changed between
EmberData 4.12 and 5.0.

### Changes in EmberData 5.0

#### Bug Fixes

EmberData 5.0 introduced 7 bug fixes:

- [#8621](https://github.com/emberjs/data/pull/8621) - `normalizeErrorResponse` will provide serialized JSON instead of `[object Object]` if an object is part of the return.
- [#8598](https://github.com/emberjs/data/pull/8598) - api docs generation should maintain a stable relative path, fixing `Edit on Github` and `Defined in:` links.
- [#8566](https://github.com/emberjs/data/pull/8566) - previously, an identity notification was being triggered unnecessarily every time a record was saved.
- [#8597](https://github.com/emberjs/data/pull/8597) - this fix ensures that promise caches are not shared among different fields.
- [#8594](https://github.com/emberjs/data/pull/8594) - regression that caused the Store class to no longer extend from EmberObject has been fixed.
- [#8570](https://github.com/emberjs/data/pull/8570) - fixes an issue where the entire RecordArray was being cleared, even if the remaining record did not match the record that was removed.
- [#8555](https://github.com/emberjs/data/pull/8555) - fixes polymorphic assertions when deprecated code is removed and improves polymorphic developer experience.

#### Features

EmberData 5.0 introduced 0 features.

#### Deprecations

EmberData 5.0 introduced 0 deprecations. It removed all deprecations that were
introduced before 4.12 and slated for removal in 5.0.

Below we've listed some of the most significant API removals in EmberData 5.0.
For an exhaustive list of removals, see the [EmberData 4.x deprecation guide](https://deprecations.emberjs.com/ember-data/v4.x) and [#8550](https://github.com/emberjs/data/pull/8550).

<!-- Pare down this
list to show only the highlights -->

- `relationshipsDefinitionFor` - Use `wrapper.getSchemaDefinitionService().relationshipsDefinitionFor()`
  instead.
- `attributesDefinitionFor` - Use `wrapper.getSchemaDefinitionService().attributesDefinitionFor()`
  instead.
- `isRecordInUse` - Use `hasRecord` instead.
- `notifyPropertyChange`, `notifyHasManyChange`, `notifyBelongsToChange`,
`notifyErrorsChange`, and `notifyStateChange` - Use `notifyChange` instead.
- `recordDataFor` - `RecordData` has become `Cache`, and `Cache` is always
a singleton. This method is no longer needed, as the caller is its own cache reference.
- `errorsHashToArray`
- `errorsArrayToHash`
- If a Promise did not resolve by the time the store was destroyed, EmberData did
not error. In 5.0, this situation will now error.
- Using `SnapshotRecordArray.type` and `Snapshot.type` to access the ModelClass for a record is removed.
Use `store.modelFor(<modelName>)` instead.
- Accessing schema information on Models without looking up the model via the store is disallowed. Use `store.modelFor`, `Snapshots`, or the `store.getSchemaDefinitionService()` apis instead.
- `Model.reopen`- Use `MyCustomClassName extends Model` to extend your class instead.
- Using `A()` on an EmberData `PromiseManyArray`
- Promise proxies have been removed. That means that a variety of helper methods on `PromiseManyArray` are removed as well in favor of using native Promises and array methods. Await the Promise and work with the `ManyArray` directly instead.
    - `createRecord`
    - `firstObject`
    - `lastObject`
    - `addObserver`
    - `cacheFor`
    - `decrementProperty`
    - `get`
    - `getProperties`
    - ...and more
- `normalizeModelName` - use model names that are already normalized, or use string helpers of your own.
- Providing a string to `attributesDefinitionFor` or `relationshipsDefinitionFor` - provide a record identifier or an argument of shape `{ type: string }` instead
- `getResourceIdentifier` for v1 caches
- `pushData` for v1 caches - use `upsert` instead
- `clientDidCreate`
- `setDirtyAttribute` - use `setAttr` instead
- `Cache.changedAttributes` - use `changedAttrs` instead
- `hasChangedAttributes` - use `hasChangedAttrs`
- `rollbackAttributes`- use `rollbackAttrs`
- `getBelongsTo` and `getHasMany` - use `getRelationship`
- `setDirtyBelongsTo`, `addToHasMany`, `removeFromHasMany` - use `update`
- `setDirtyHasMany` - use `setHasMany`
- `DEPRECATE_V1_RECORD_DATA` - Instantiating a non-singleton cache via `store.createRecordDataFor` is deprecated in favor of a singleton-cache via `store.createCache`
- `DEPRECATE_RELATIONSHIPS_WITHOUT_TYPE` - Deprecates when belongsTo and hasMany relationships are defined without specifying the inverse record's type.
- `DEPRECATE_RELATIONSHIPS_WITHOUT_ASYNC` - Deprecates when belongsTo and hasMany relationships are defined without specifying whether the relationship is asynchronous.
- `DEPRECATE_RELATIONSHIPS_WITHOUT_INVERSE` - Deprecates when belongsTo and hasMany relationships are defined without specifying the inverse field on the related type.
- `DEPRECATE_SAVE_PROMISE_ACCESS` - Deprecates the promise-proxy returned by these methods in favor of a Promise return value. To resolve this deprecation, await or .then the return value before doing work with the result instead of accessing values via the proxy.
-
- `DEPRECATE_PROMISE_PROXIES` - Deprecates using the proxy object/proxy array capabilities of values returned from the following methods. These methods will now return a native Promise that resolves with the value:
  - store.findRecord
  - store.findAll
  - store.query
  - store.queryRecord
  - record.save
  - recordArray.save
  - recordArray.update
- `DEPRECATE_ARRAY_LIKE` - Use of Ember "Array-like" methods on `RecordArray` and `ManyArray` is deprecated. These are the arrays returned respectively by `store.peekAll()`, `store.findAll()` and `hasMany` relationships on instance of `Model` or `record.hasMany('relationshipName').value()`. The appropriate refactor is to treat these arrays as native arrays and to use native array methods.

For more details on changes in EmberData 5.0, please review the
[EmberData 5.0.0 release page](https://github.com/emberjs/data/releases/tag/v5.0.0).

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

### Changes in Ember CLI 5.0

#### Bug Fixes

- `minifyCSS` behavior was extracted to an addon, `ember-cli-clean-css`, that is now included in the default blueprint. This addon version currently uses an old version of `clean-css` so as to exactly match the previous built-in behavior. If you upgrade the addon (and thus `clean-css`) be aware that your built CSS may change.

#### Features

Ember CLI 5.0 introduced 0 features.

#### Deprecations

Ember CLI 5.0 introduced 0 deprecations.
Ember CLI 5.0 removed features and APIs that were deprecated in 4.x or earlier, please see the [Deprecation guide](https://deprecations.emberjs.com/ember-cli/v4.x) for more information:

- Removed the `blacklist` and `whitelist` build options, they have been renamed to `exclude` and `include`.
- Removed various `bower` related APIs
- Removed support for `ember-cli-jshint`
- Removed the `vendor-shim` blueprint in favor of `ember-auto-import`
- Removed support for `baseURL` environment option ([deprecated way back in v2.7](https://deprecations.emberjs.com/ember-cli/v2.x#toc_base-url))

<!-- alex ignore retext-equality -->
A special thanks to Bert De Block for [singlehandedly cleaning up `ember-cli` for v5.0](https://github.com/ember-cli/ember-cli/issues/10163)
For more details on the changes in Ember CLI 5.0 and detailed upgrade
instructions, please review the [Ember CLI 5.0.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.0.0).

### Changes for TypeScript

There are no specific changes to Ember's TypeScript support for Ember 5.0. However, Ember now ships a [preview](https://blog.emberjs.com/announcing-official-typescript-types-public-preview) of its own types, and will be shipping a stable version early in the 5.x series. Accordingly, the Ember TypeScript team does not plan to update the `@types` packages on DefinitelyTyped for Ember 5.0. We will publish a dedicated blog post covering more details on the plan for stabilizing Ember's types in the next few weeks.

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.

