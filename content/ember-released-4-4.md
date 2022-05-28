---
title: Ember 4.4 Released
authors:
  - the-ember-learning-team
date: 2022-05-27T00:00:00.000Z
tags:
  - releases
  - '2022'
  - version-4-x
---

Today the Ember project is releasing version 4.4 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.4 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.4

Ember.js 4.4 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.4 introduced 1 bug fix.

- Calling isEmpty on instances of ObjectProxy wrapping ArrayProxy was not working, this is fixed in [#16879](https://github.com/emberjs/ember.js/pull/16879/files).

#### Features

Ember.js 4.4 introduced 4 features.

- The `{{unique-id}}` helper will be included by default in new Ember apps. Developers can use this helper to generate a unique ID string suitable for use as an ID attribute in the DOM. Notably, this removes the need for a backing class since it can be directly used in template-only components. ([#19882](https://github.com/emberjs/ember.js/pull/19882)/[#20005](https://github.com/emberjs/ember.js/pull/20005))
- When a deprecation has the  `until`  field set, it will now be logged with the other information. ([#20014](https://github.com/emberjs/ember.js/pull/20014))
- The customization of `setupTest*` functions is now available. The app and addon blueprints will create a file at `tests/helpers/index.js` where these functions will be wrapped and exported, creating a local place to edit for each type of test setup. Tests generated using `ember generate` will import the setup functions from that file. ([#19981](https://github.com/emberjs/ember.js/pull/19981))
- The `hasListeners` function is now public, so you can call this before calling `removeListeners`. ([#17978](https://github.com/emberjs/ember.js/pull/17978))

#### Deprecations

Ember.js 4.4 introduced 0 deprecations.
For more details on changes in Ember.js 4.4, please review the  [Ember.js 4.4.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.4.0) .
<!-- Block end -->

For more details on changes in Ember.js 4.4, please review the [Ember.js 4.4.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.4.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.4

#### Bug Fixes

Ember Data 4.4 introduced 0 bug fixes and some tests and documentation improvements.

#### Features

Ember Data 4.4 introduced 0 features.

#### Deprecations

Ember Data 4.4 introduced 1 deprecations.

- `Model.save()` will return a Promise instead of a `PromiseProxyMixin`. To return a `Promise`, you can [set your `compatWith` to 4.4](https://api.emberjs.com/ember-data/4.4/modules/@ember-data%2Fdeprecations). ([#7868](https://github.com/emberjs/data/pull/7868)

Support for the `toJSON` method on Ember Data records has been removed. It was deprecated in `3.x` and slated for removal in `4.x`.
If your app uses this method, follow the [deprecation guide](https://deprecations.emberjs.com/ember-data/v3.x/#toc_record-toJSON).

For more details on changes in Ember Data 4.4, please review the
[Ember Data 4.4.0 commits](https://github.com/emberjs/data/compare/v4.1.0...v4.4.0).

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

### Changes in Ember CLI 4.4

#### Bug Fixes

Ember CLI 4.4 introduced 3 bug fixes.

- Update `since.available` and `since.enabled` versions for Bower deprecations. ([#9822](https://github.com/ember-cli/ember-cli/pull/9822))
- The addon `.gitignore` file blueprinted contained `/DEBUG/` when it should not, fixed in [#9850](https://github.com/ember-cli/ember-cli/pull/9850).
- The add-on README will now use more standard markdown for the headers. ([#9611](https://github.com/ember-cli/ember-cli/pull/9611)).

#### Features

Ember CLI 4.4 introduced 0 features.

#### Deprecations

Ember CLI 4.4 introduced 0 deprecations.

For more details on the changes in Ember CLI 4.4 and detailed upgrade
instructions, please review the [Ember CLI 4.4.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.4.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
