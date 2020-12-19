---
title: Ember 3.18 Released
authors:
  - ricardo-mendes
date: 2020-05-05T00:00:00.000Z
tags:
  - releases
  - '2020'
  - version-3-x
---


Today the Ember project is releasing version 3.18 of Ember.js, Ember Data, and Ember CLI.

This release also kicks off the 3.19 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.18

Ember.js 3.18 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There are no new features, zero (0) deprecations, and several bugfixes in this version.

#### New Features (0)

No new features in Ember.js 3.18, but it is worth noting support for Node 8 has been dropped for Ember.js as specified in [Ember Node LTS Support](https://blog.emberjs.com/2016/09/07/ember-node-lts-support.html).

#### Deprecations (0)

No new deprecations are added in Ember.js 3.18.

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.18

#### New Features (0)

No new features introduced in Ember Data 3.18.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.18.

For more details on changes in Ember Data 3.18, please review the
[Ember Data 3.18.0 release page](https://github.com/emberjs/data/releases/tag/v3.18.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

<!--alex ignore easy-->
You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npm install -g ember-cli-update
ember-cli-update
```

This utility will help you to update your app or add-on to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.18

#### New Features (0)

There are no new features in Ember CLI 3.18. However, there are some other changes worth celebrating:

- Ensure errors during build are properly reported to the console.
- Ensure processed addon styles are not doubly-included in `vendor.css`.


#### Deprecations (0)

There are no new deprecations in Ember CLI 3.18.

---

For more details on the changes in Ember CLI 3.18 and detailed upgrade
instructions, please review the [Ember CLI 3.18.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.18.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
