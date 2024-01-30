---
title: Ember 5.6 Released
authors:
  - jared-galanis
date: 2024-01-30T00:00:00.000Z
tags:
  - releases
  - '2024'
  - version-5-x
---

Today the Ember project is releasing version 5.6 of Ember.js and Ember CLI.

This release kicks off the 5.7 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 5.6

Ember.js 5.6 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 5.6 introduced 3 bug fixes.

- [#20595](https://github.com/emberjs/ember.js/pull/20595) - A blueprint-generated file for an addon re-export should always be a JavaScript file, not a TypeScript file.
- [#20603](https://github.com/emberjs/ember.js/pull/20603) - Internal templates should be strictMode and fix the declared types for `precompileTemplate`.
- [#20605](https://github.com/emberjs/ember.js/pull/20605) - Move babel-plugin-ember-template-compilation to dependencies from devDependencies.

For more details on changes in Ember.js 5.6, please review the [Ember.js 5.6.0 release page](https://github.com/emberjs/ember.js/releases/tag/v5.6.0).

---

## EmberData

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

It is not required to keep Ember CLI versions in sync with Ember and EmberData. After updating ember-cli, you can keep your current version(s) of Ember or EmberData by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 5.6

#### Features

Ember CLI 5.6 introduced 2 new features.

- [#10394](https://github.com/ember-cli/ember-cli/pull/10394) - `ember serve` will now automatically choose a port (starting with 4200), unless a port is explicitly set with the `--port flag` or the `$PORT` env variable.
- [#10404](https://github.com/ember-cli/ember-cli/pull/10404) - Adds a workflow to deploy api docs to ember-learn/ember-cli.github.io and [the website](https://cli.emberjs.com/release/).

For more details on the changes in Ember CLI 5.6 and detailed upgrade
instructions, please review the [Ember CLI 5.6.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v5.6.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
