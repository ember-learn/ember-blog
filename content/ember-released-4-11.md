---
title: Ember 4.11 Released
authors:
  - jen-weber
date: 2023-02-25T12:00:00.000Z
tags:
  - releases
  - '2023'
  - version-4-x
---

Today the Ember project is releasing version 4.11 of Ember.js, Ember Data, and Ember CLI. <!-- Block start: Uncomment if an LTS candidate --><!--This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.--><!-- Block end -->

This release kicks off the 4.11.1 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.11

Ember.js 4.11 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.11 introduced 0 bug fixes.

#### Features

Ember.js 4.11 introduced 2 features.

1. Stable TypeScript types for the `@ember/owner` package (first released in 4.10).
2. Stable TypeScript types for the `@ember/error` package.

Both of these packages already had tyeps available as part of [the public preview types](https://blog.emberjs.com/announcing-official-typescript-types-public-preview/), so you might wonder: _What is new here?_ The answer is: these are the first type definitions generated from Ember's own TypeScript source code, instead of written by hand. This means that these type are _guaranteed_ to match Ember's own behavior: they literally cannot get out of sync.

If you are already using the public preview types, as documented in [the announcement post](https://blog.emberjs.com/announcing-official-typescript-types-public-preview/), you don't have to do anything. If you would like to opt into using the new stable and preview types, you can add this to your project (e.g. in `app.ts`):

```ts
import 'ember-source/types';
import 'ember-source/types/preview';
```

**Reminder:** while these two packages are now stable, much of Ember's types are still in preview, and subject to change between minor releases. We expect to finish getting the rest of Ember's types stable, and therefore following Ember's normal stability rules, early in the upcoming 5.x releases!

#### Deprecations

Ember.js 4.11 introduced 0 deprecations.

<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework. No new deprecations are allowed after the `.10` release, to minimize churn before the next major release.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 4.11, please review the [Ember.js 4.11.0 release page](https://github.com/emberjs/ember.js/releases/tag/vVER.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.11

#### Bug Fixes

Ember Data 4.11 introduced 0 bug fixes.

#### Features

Ember Data 4.11 introduced 0 features.

#### Deprecations

Ember Data 4.11 introduced 0 deprecations.

For more details on changes in Ember Data 4.11, please review the
[Ember Data 4.11.0 release page](https://github.com/emberjs/data/releases/tag/vVER.0).

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

### Changes in Ember CLI 4.11

#### Bug Fixes

Ember CLI 4.11 introduced 0 bug fixes.

#### Features

Ember CLI 4.11 introduced 0 features.

#### Deprecations

Ember CLI 4.11 introduced 0 deprecations.

For more details on the changes in Ember CLI 4.11 and detailed upgrade
instructions, please review the [Ember CLI 4.11.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/vVER.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
