---
title: Ember 6.4 Released
authors:
  - jared-galanis
date: 2025-05-26T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

Today the Ember project is releasing version 6.4 of Ember.js and Ember CLI. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

This release kicks off the 6.5 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.4

Ember.js 6.4 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.4 includes 4 noteworthy bug fixes:

- [#20842](https://github.com/emberjs/ember.js/pull/20842) / [#20864](https://github.com/emberjs/ember.js/pull/20864) Upgrade glimmer-vm.
- [#20872](https://github.com/emberjs/ember.js/pull/20872) `{{debugger}}` will now work again in templates
- [#20850](https://github.com/emberjs/ember.js/pull/20850) Correct publication of source maps for ember-source
- [#20867](https://github.com/emberjs/ember.js/pull/20867) Fix LOG_VERSIONS.

#### Potentially Breaking

- [#20842](https://github.com/emberjs/ember.js/pull/20842) [BREAKING] Drop support for TypeScript 4.9 to allow for glimmer-vm upgrade.
    - Ember now tests against TypeScript 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7.
    Per the rolling support window, following [Semantic Versioning for TypeScript Types](https://www.semver-ts.org/), the supported range of TypeScript versions across two Ember LTS releases must always overlap.
    For more examples, see the [Stability heading in this blog post](https://blog.emberjs.com/stable-typescript-types-in-ember-5-1/).
    - We now require consumers use `verbatimModuleSyntax`.

#### Features

Ember.js 6.4 introduces no new features.

#### Deprecations

Ember.js 6.4 introduces no new deprecations.

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData 5.4 has been released with many updates that will be more extensively covered in a full stand alone blog post.

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

It is not required to keep Ember CLI versions in sync with Ember and EmberData. After updating ember-cli, you can keep your current version(s) of Ember or EmberData by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 6.4

#### Bug fixes

Ember CLI 6.4 includes 4 bug fixes:

- [#10685](https://github.com/ember-cli/ember-cli/pull/10685) Add configuration to opt new projects out of the deprecated behavior of the Store class extending EmberObject. If upgrading you may need to alter this configuration when updating with `ember-cli-update` or otherwise applying the blueprint.
- [#10620](https://github.com/ember-cli/ember-cli/pull/10620) Handle errors gracefully when proxy target is down.
- [#10641](https://github.com/ember-cli/ember-cli/pull/10641) Fix eslint parser for js when using --typescript flag.
- [#10659](https://github.com/ember-cli/ember-cli/pull/10659/files) Improve de-typing .gts files.

#### Features

Ember CLI 6.4 introduces 1 new feature:

- [#10661](https://github.com/ember-cli/ember-cli/pull/10661) Update ember-try to v4 in blueprints.

#### Deprecations

Ember CLI 6.4 introduces no new deprecations.

For more details on the changes in Ember CLI 6.4 and detailed upgrade
instructions, please review the [Ember CLI 6.4.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.4.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
