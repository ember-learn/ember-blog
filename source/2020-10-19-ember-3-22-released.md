---
title: Ember 3.22 Released
author: Jared Galanis, Isaac Lee, Ricardo Mendes
tags: Releases, 2020, 3, 3.22, Version 3.x
responsive: true
---

<!-- alex disable retext-equality -->

Today the Ember project is releasing version 3.22 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 3.23 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.22

Ember.js 3.22 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations.

Ember.js 3.22 introduced several bug fixes, including:

- [#19094](https://github.com/emberjs/ember.js/pull/19094) `RouterService#isActive` now updates tracked properties correctly by consuming `currentURL` and `currentRouteName`;
- [#19170](https://github.com/emberjs/ember.js/pull/19170) modifier manager 3.22 now accepts the resolved value of `owner.factoryFor` directly, which is in keeping with the way helpers and component managers work; and
- [#19124](https://github.com/emberjs/ember.js/pull/19124) `protocolForUrl` now works in fastboot `fastboot@3.1.0` environment by leveraging the native JavaScript `URL` global

#### New Features

Ember.js 3.22 introduced 3 features.

1. Enabled `@ember/destroyable` API, which allows you to create and manage your own destroyables. For more information, please see the [Destroyables RFC](https://emberjs.github.io/rfcs/0580-destroyables.html).
2. Enabled Cache API, a low-level primitive for memoizing the result of a function based on autotracking. (You can install a [polyfill](https://github.com/ember-polyfills/ember-cache-primitive-polyfill) for apps between versions 3.13 and 3.21.) For more information, please check the [Ember Guides](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/#toc_caching-of-tracked-properties) and [Autotracking Memoization RFC](https://emberjs.github.io/rfcs/0615-autotracking-memoization.html).
3. Allowed passing the `transition` object to 2 route hooks, `activate` and `deactivate`.

#### Deprecations

Ember.js 3.22 introduced 0 deprecations.


---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications. 

### Changes in Ember Data 3.22

Ember Data 3.22 included several bug fixes of note, including:

- several fixes ensuring that the `Errors.errorsFor` array and subarray are properly updated and that autotracking works [#7273](https://github.com/emberjs/data/pull/7273), [#7330](https://github.com/emberjs/data/pull/7330), and [#7331](https://github.com/emberjs/data/pull/7331);
- [#7322](https://github.com/emberjs/data/pull/7322) disables the esm cache to solve build time errors some applications were experiencing; and
- [#7126](https://github.com/emberjs/data/pull/7126) addresses relationship state when sideposting with `lid`.

#### New Features

Ember Data 3.22 introduced 0 features.

#### Deprecations

Ember Data 3.22 introduced 1 deprecation.

1. Use of `najax` has been [deprecated](https://github.com/emberjs/data/pull/7230) in favor of `ember-fetch` when fastboot is installed.

For more details on changes in Ember Data 3.22, please review the
[Ember Data 3.22.0 release page](https://github.com/emberjs/data/releases/tag/v3.22.0).

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

### Changes in Ember CLI 3.22

Ember CLI 3.22 includes only internal changes. However, please note that [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember) released a new major version, `v9.x`. The new version introduces 6 recommended rules and removes support of Node `v13`.

New Ember apps will install `v9` or higher of `eslint-plugin-ember`, which may limit the version of Node that you use. To learn more, please [check out the changelog for `eslint-plugin-ember`](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v9.0.0).

#### New Features

Ember CLI 3.22 introduced 0 features.

#### Deprecations

Ember CLI 3.22 introduced 0 deprecations.

---

For more details on the changes in Ember CLI 3.22 and detailed upgrade
instructions, please review the [Ember CLI 3.22.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.22.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
