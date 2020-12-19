---
title: Ember 3.17 Released
authors:
  - kenneth-larsen
  - isaac-lee
date: 2020-03-16T00:00:00.000Z
tags:
  - releases
  - '2020'
  - version-3-x
---


Today the Ember project is releasing version 3.17 of Ember.js, Ember Data, and Ember CLI.

Version 3.16 of Ember is now promoted to LTS (Long Term Support). An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS version of Ember was 3.12.

This release also kicks off the 3.18 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.17

Ember.js 3.17 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There are no new features, zero (0) deprecations, and several bugfixes in this version.

#### New Features (0)

No new features in Ember.js 3.17, but it is worth noting that the Glimmer rendering engine has been updated significantly.

#### Deprecations (0)

No new deprecations are added in Ember.js 3.17.

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.17

#### New Features (0)

No new features introduced in Ember Data 3.17.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.17.

For more details on changes in Ember Data 3.17, please review the
[Ember Data 3.17.0 release page](https://github.com/emberjs/data/releases/tag/v3.17.0).

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

This utility will help you to update your app or add-on to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the github README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.17

#### New Features (0)

There are no new features in Ember CLI 3.17. However, there are some other changes worth celebrating:

- The internal usage of `RSVP` has been removed and migrated to use native promises`
- Drop `ember-cli-eslint/ember-cli-template-lint` in favor of using `eslint` and `ember-template-lint` directly
- Ensure `npm test` / `yarn test` fail when `lint:js` or `lint:hbs fail`
- Ensure `npm test` / `yarn test` in an addon fails if ember-try scenarios fail
- Remove a number of older experiments (module unification and delayed transpilation)


#### Deprecations (0)

There are no new deprecations in Ember CLI 3.17.

---

For more details on the changes in Ember CLI 3.17 and detailed upgrade
instructions, please review the [Ember CLI 3.17.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.17.0).

## Ember 3.16 is an LTS Release

If you are upgrading from the previous LTS version (3.12) to 3.16 then you are getting access to these features:

- Tracked properties (3.13)
- Component templates co-location (3.13)
- `component-class` generator (3.13)
- `@model` in route templates (3.14)
- Improved performance in fetching relationship (3.14)
- "Classier" blueprints (3.14)
- Octane preset for `ember-template-lint` (3.15)

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
