---
title: Ember 5.3 Released
authors:
  - jen-weber
  - katie-gengler
  - jared-galanis
date: 2023-09-21T00:00:00.000Z
tags:
  - releases
  - '2023'
  - version-5-x
---

Today the Ember project is releasing version 5.3 of Ember.js, EmberData, and Ember CLI. <!-- Block start: Uncomment if an LTS candidate --><!--This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.--><!-- Block end -->

This release kicks off the 5.4 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.3

Ember.js 5.3 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Deprecations

Ember.js 5.3 introduced 1 deprecation.

1. Deprecate implicit record loading in Ember Route per [RFC #774](https://rfcs.emberjs.com/id/0774-implicit-record-route-loading). Please see [the deprecation guide](https://deprecations.emberjs.com/v5.x#toc_deprecate-implicit-route-model) for more information.
<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 5.3, please review the [Ember.js 5.3.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.3.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

### Changes in EmberData 5.3

#### Bug Fixes

EmberData 5.3 introduced 10 bug fixes. Details are in the
[EmberData 5.3.0 release page](https://github.com/emberjs/data/releases/tag/v5.3.0).

#### Features

EmberData 5.3 introduced several new features.

This release primarily focused on polish for the `RequestManager` story, introducing builder utils, builders for `REST` `ActiveRecord` and `JSON:API` requests as well as serialization utils for `JSON:API` requests.

As part of shipping serialization utils, we implemented several long-awaited cache features to support them:

- `cache.changedRelationships` retrieves a diff of what has been added or removed from each relationship for a resource
- `cache.hasChangedRelationships` answers whether any relationships have changed for a resource
- `cache.rollbackRelationships` will reset all relationships for that resource to their "remote" state, removing any local changes.

#### Deprecations

EmberData 5.3 introduced 5 deprecations.

As part of our ongoing efforts to modernize the library and to support the above changes, we implemented several new deprecations.

- Deprecate legacy import paths (`ember-data/`) except for `ember-data/store`
- Deprecate non-strict-type (e.g. "users" or "myType" instead of "user" and "my-type")
- Deprecate non-strict-id (e.g . `1` instead of `"1"`)

And in relationships specifically:

- deprecate fixing non-unique relationship payloads (when the same record is referenced multiple times in a related collection)
- deprecate remote updates clearing local changes (an upcoming blog post will explain the new behavior here in detail)

For more details on changes in EmberData 5.3, please review the
[EmberData 5.3.0 release page](https://github.com/emberjs/data/releases/tag/v5.3.0).

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

### Changes in Ember CLI 5.3

#### Features

Ember CLI 5.3 introduced 1 new feature:

- [#10337](https://github.com/ember-cli/ember-cli/pull/10337) - the feature flag for pnpm support was removed, officially allowing using of the `--pnpm` flag.

#### Bug Fixes

Ember CLI 5.3 introduced 3 bug fixes.

#### Deprecations

Ember CLI 5.3 introduced 1 deprecation.

- Deprecate outputPaths build option, as output paths will no longer be predetermined under Embroider

For more details on the changes in Ember CLI 5.3 and detailed upgrade
instructions, please review the [Ember CLI 5.3.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.3.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
