---
title: Ember 3.14 Released (Octane Preview Cont.)
author: Kenneth Larsen, Dan Gebhardt
tags: Releases, 2019, 3, 3.14, Version 3.x
responsive: true
---

Today the Ember project is releasing version 3.14 of Ember.js, Ember Data, and Ember CLI. This release kicks off the 3.15 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/builds/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## The Octane Preview, Continued

As described in yesterday's post, [Octane Release Update](/2019/10/31/octane-release-update.html), Octane will continue to be opt-in in Ember 3.14. By continuing the Octane preview period in 3.14, we are allowing more time for Octane to be polished before it becomes the default Ember experience.

Although Octane is still opt-in in 3.14, all Octane features are stable public APIs with our normal SemVer guarantees. If you build an app using APIs in the Octane preview, it will continue to work in future versions.

---

With the exception of an updated release of `@glimmer/component`, the steps to try out the Octane preview remain the same as they were in 3.13. You can try out the Octane preview by performing a few steps:

Add the following packages if they aren't already present at this version:

```js
npm install --save-dev @ember/edition-utils@^1.1.1
npm install --save-dev @glimmer/component@^1.0.0-beta.1
```

Disable legacy behavior by setting the following feature flags:

```bash
ember feature:disable jquery-integration
ember feature:enable template-only-glimmer-components
ember feature:disable application-template-wrapper
```

Specify the Octane edition in `.ember-cli.js` by adding the following lines to the beginning of the file:

```js
// .ember-cli.js
const { setEdition } = require("@ember/edition-utils");

setEdition("octane");
```

If you have an `.ember-cli` file instead of an `.ember-cli.js` file, you can convert it by renaming it to `.ember-cli.js`, then taking the existing JSON object and assigning it to `module.exports`. For example, if you have an `.ember-cli` file with:

```json
// .ember-cli
{
  "disableAnalytics": false
}
```

The equivalent `.ember-cli.js` file would be:

```js
// .ember-cli.js
module.exports = {
  disableAnalytics: false
};
```

If you need more information on how to migrate away from these legacy features, check out the [Octane release plan](https://blog.emberjs.com/2019/08/15/octane-release-plan.html) blog post.

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.14

Ember.js 3.14 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There is one (1) new feature, 0 (0) deprecations, and several bugfixes in this version.

#### New Features (1)

`@model` (1 of 2)

#### Deprecations (0)

There are no new deprecations in Ember.js 3.14.

For more details on changes in Ember.js 3.14, please review the [Ember.js 3.14.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.14.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.14

#### New Features (0)

No new features introduced in Ember Data 3.14.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.14.

For more details on changes in Ember Data 3.14, please review the
[Ember Data 3.14.0 release page](https://github.com/emberjs/data/releases/tag/v3.14.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npm install -g ember-cli-update
ember-cli-update
```

This utility will help you to update your app or add-on to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the github README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.14

#### New Features (0)

There are no new features in Ember CLI 3.14.

#### Deprecations (0)

There are no new deprecations in Ember CLI 3.14.

---

For more details on the changes in Ember CLI 3.14 and detailed upgrade
instructions, please review the [Ember CLI 3.14.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.14.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
