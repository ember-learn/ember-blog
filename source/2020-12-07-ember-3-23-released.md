---
title: Ember 3.23 Released
author: Ricardo Mendes, Isaac Lee
tags: Releases, 2020, 3, 3.23, Version 3.x
responsive: true
---

Today the Ember project is releasing version 3.23 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 3.24 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.23

Ember.js 3.23 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations.

Ember.js 3.23 introduced several bug fixes, including:

- Updated Glimmer (rendering engine) to improve developer experience with debugging ([#19213](https://github.com/emberjs/ember.js/pull/19213))
- Ensured that `(fn (mut ...))` works with falsy values ([#19221](https://github.com/emberjs/ember.js/pull/19221))
- Fixed bugs in query parameters with intermediate transitions ([#19249](https://github.com/emberjs/ember.js/pull/19249))
- Prevented multiple serialization of query parameters on `activeTransition` ([#19236](https://github.com/emberjs/ember.js/pull/19236))
- Prevented dynamic invocation of string value when referenced directly in angle brackets ([#19122](https://github.com/emberjs/ember.js/pull/19122))
- Issued a deprecation for tracked mutation in `constructor` during rendering ([#19282](https://github.com/emberjs/ember.js/pull/19282)) ⚠️

#### New Features

<!--alex disable savage-->
Ember.js 3.23 introduced 2 features.

1. Implemented and enabled `invokeHelper` from [JavaScript Helper Invocation API RFC](https://github.com/emberjs/rfcs/blob/master/text/0626-invoke-helper.md). The `invokeHelper` can be used to create and call an instance of the helper in a component. ([#19171](https://github.com/emberjs/ember.js/pull/19171), [#19182](https://github.com/emberjs/ember.js/pull/19182))
2. Implemented and enabled helper manager from [Helper Managers RFC](https://github.com/emberjs/rfcs/blob/master/text/0625-helper-managers.md). It provides a low-level primitive for defining helpers. ([#19160](https://github.com/emberjs/ember.js/pull/19160), [#19182](https://github.com/emberjs/ember.js/pull/19182))

#### Deprecations

Ember.js 3.23 introduced 0 deprecations.

For more details on changes in Ember.js 3.23, please review the [Ember.js 3.23.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.23.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.23

This release included several bug fixes and improvements, such as:

- Improved debug message ([#7337](https://github.com/emberjs/data/pull/7337)).
- Polymorphic relation type changes on first load ([#7363](https://github.com/emberjs/data/pull/7363/files)).

#### Deprecations (1)

**najax when ember-fetch is also a dependency**

Building on the deprecation of the previous minor version, [#7230](https://github.com/emberjs/data/pull/7230) also triggers a deprecation warning when `ember-fetch` is installed to better guide users on how to update their app.
You can consult the [Deprecate `najax` request](https://deprecations.emberjs.com/ember-data/v3.x/#toc_ember-data-najax-fallback) deprecation guide for more information.

For more details on changes in Ember Data 3.23, please review the
[Ember Data 3.23.0 release page](https://github.com/emberjs/data/releases/tag/v3.23.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

<!--alex ignore easy-->
You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.23

Blueprints for new applications were updated for the new testing setup ([#9340](https://github.com/ember-cli/ember-cli/pull/9340), [#9371](https://github.com/ember-cli/ember-cli/pull/9371/files)).

---

For more details on the changes in Ember CLI 3.23 and detailed upgrade
instructions, please review the [Ember CLI 3.23.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.23.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
