---
title: Ember 6.0 Released
image:
imageMeta:
  attribution:
  attributionLink:
featured: true
authors:
  - jared-galanis
date: 2024-11-20T00:00:00.000Z
tags:
  - releases
  - '2024'
  - version-6-x
---

EmberJS 6.0 embodies the commitment to stability and reliability that developers have come to expect from the Ember ecosystem. The Ember team has worked hard to remove all the deprecations and make us move towards Polaris. Get up-to-date with the latest in Ember and enjoy!

This post will cover our release strategy, how to upgrade, what to expect, and deprecated APIs that were removed.

This release follows the release strategy and goals proposed in [RFC 830, Evolving Ember's Major Version Process](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process).
To summarize, every 12 minor releases, Ember will ship a new major release, which removes any
deprecated code targeted for that major version.

When it comes to introducing new features, Ember generally aims to ship new features in minor releases, offering backwards compatibility for existing code at the same time as giving developers the chance to try out new capabilities.
This approach reduces the challenges that teams face for major upgrades, compared to producing big, breaking, splashy major versions with lots of new features.

<!-- alex ignore retext-equality -->

In Ember 5.x minor releases, we landed a bunch of features (along with various bug fixes, of course):

- In [Ember 5.1]()
- In [Ember 5.2]()
- In [Ember 5.3]()
- In [Ember 5.4]()
- In [Ember 5.5]()
- In [Ember 5.6]()
- In [Ember 5.7]()
- In [Ember 5.8]()
- In [Ember 5.9]()
- In [Ember 5.10]()
- In [Ember 5.11]()
- In [Ember 5.12]()

We also made significant strides in key parts of the ecosystem outside the core framework itself over the past 18 months:

[list strides here]

Ember 6.0 has no new features, because we did all that work in minor releases instead.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

## Beta cycle

This release kicks off the 6.1 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

## How to upgrade to Ember 6

The most common approach for upgrading to 6.0 is to upgrade your app to the last
version of Ember 5, which is 5.12, resolve all deprecation warnings, and then upgrade to 6.0. If your app or addon runs with no deprecations in the latest release of 5.12,
you should be able to upgrade to Ember 6 with no additional changes. Step by step directions are below.

If your app is at a much earlier version in the 5.x series, we
recommend upgrading in steps across the LTS versions: 5.4, 5.8, and then 5.12.

Follow these steps in order:

1. Consider [upgrading addons used in your app](https://cli.emberjs.com/release/basic-use/upgrading/#upgradingaddondependencies)
   to the latest version that you can. This will reduce the uses of deprecated APIs in your dependencies.
2. Upgrade your project to the latest patch version of Ember 5.12.
   Many developers can do this by running
   `npx ember-cli-update --to 5.12`. The
   [general Ember upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself)
   has more details about how to upgrade your Ember app/addon.
3. Make sure your app builds successfully.
4. Resolve all deprecation warnings. These Deprecated APIs are removed in Ember 6.0. You may need to upgrade some of your addon dependencies if they are using deprecated APIs.
   See the [Ember Deprecation Guide](https://deprecations.emberjs.com/)
   for more details about specific deprecations and how to resolve them.
   Applications that need to upgrade through several versions may want to
   consider isolating individual deprecations by using
   [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow).
5. Make sure your app builds successfully and your test suite passes with no
   deprecations.
6. Upgrade your app to Ember 6.0. Again,
   many developers can do this by running
   `npx ember-cli-update --to 6.0`. Refer to the
   [general Ember upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself)
   for more details about how to upgrade your Ember app/addon.

For help or advice along the way, visit [Ember's forums or chat groups](https://emberjs.com/community/).

## The journey towards Ember Polaris

Polaris is the name of an upcoming edition of Ember, first announced at EmberConf 2021. Over the course of 6.x, new features will be added to Ember that will eventually make up the new edition.

Since our major versions tend to be uneventful, Editions are the moment where the Ember community comes together to learn and build in new ways.
An edition is a set of features, corresponding documentation, and tools that create a cohesive programming model.
An edition marks a shift and step forward in the framework, beyond what individual features would accomplish.
Ember Octane was the first new edition that was added to Ember.

Stay tuned for future blog posts with more details and calls for contributors!

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.0

Ember.js 6.0 introduces no new public API. Instead, it is comprised of bug fixes and the removal of previously deprecated public API from the 5.x cycle.

#### Bug Fixes

- [#20731](https://github.com/emberjs/ember.js/pull/20731) - Bump barrel file deprecations until 7.0.0

#### Features

Ember.js 6.0 introduced no new features.

#### Deprecations

Ember.js 6.0 introduced 0 deprecations. It removed all deprecations that were
introduced before 5.10 and slated for removal in 6.0.

Ember 6.0 removes the following features deprecated during 5.x:

- [Removing](https://deprecations.emberjs.com/id/deprecate-implicit-route-model) the implicit route model hook behavior where if no `Route#model` hook was specified and a `_id` parameter was present, Ember would attempt to figure out how to load that model for you.
- [Removing](https://deprecations.emberjs.com/id/template-action) the `(action)` template helper and `{{action}}` modifier now that we have native classes and the `{{on}}` modifier.
- [Removing](https://deprecations.emberjs.com/id/component-template-resolving) the runtime resolution of component templates, so if there is an import involved, there is no runtime resolution.
- [Removing](https://deprecations.emberjs.com/id/deprecate-array-prototype-extensions) the extension of the prototypes of native Javascript arrays to implement `Ember.Enumerable`, `Ember.MutableEnumerable`, `Ember.MutableArray`, `Ember.Array`. For convenient functions like `filterBy` or `compact`, you can directly convert to use native array methods.

[list deprecation removals]

For more details on how to resolve these deprecations in your app, see [the deprecations guide](https://deprecations.emberjs.com/v5.x).

<!-- Block start: If there were no deprecations, remove this block -->

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/ember-cli/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

<!-- Block end -->

For more details on changes in Ember.js 6.0, please review the [Ember.js 6.0.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.0.0).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData 5.12 will remain an actively supported LTS for the entire duration of the 5.x cycle, extending until the first 6.x LTS is released. This is in addition to our regular LTS support policy, and only applies to the EmberData project.

This support extends beyond bug-fixes. If minor enhancements can be made to better support new presentation class implementations that support the 5.x series we will willingly accept them. Our goal is that we want no one left behind.

To learn about the motivation and goals for upcoming changes to EmberData in 5.x,
read the [blog post, EmberData 5.X Update](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15/).

<!-- alex ignore retext-equality -->

This will help you form the mental model of what to expect across the 5.x series,
and understand deprecation removals in the context of the upcoming goals.

The sections below will provide a high-level summary of what has changed between
EmberData 5.12 and 6.0.

### Changes in EmberData

#### Bug Fixes

EmberData is the official data persistence library for Ember.js applications.

This release cycle EmberData is again electing to not release a new minor.

Work in the library continues to be focused primarily on aligning 4.12 and 5.3 to enable as many folks in the community to seamlessly upgrade as possible.

<!-- alex ignore easy -->

We continue to take our time with 5.4 as we intend to introduce a major new paradigm with it (the replacement for @ember-data/model) and believe releasing this new feature at once on the heels of two very robust LTSs (4.12 and 5.3) is the best approach for users looking to navigate upgrades easily.

Please see the [blog post](https://blog.emberjs.com/updates-to-ember-data-versioning-strategy) addressing EmberData's new versioning strategy for more information.

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

### Changes in Ember CLI 6.0

#### Bug Fixes

[list bug fixes]

#### Features

Ember CLI 6.0 introduced 0 features.

#### Deprecations

Ember CLI 6.0 introduced 0 deprecations.
Ember CLI 6.0 removed features and APIs that were deprecated in 5.x or earlier, please see the [Deprecation guide](https://deprecations.emberjs.com/ember-cli/v5.x) for more information:

[list deprecation removals]

<!-- alex ignore retext-equality -->

For more details on the changes in Ember CLI 6.0 and detailed upgrade
instructions, please review the [Ember CLI 6.0.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.0.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
