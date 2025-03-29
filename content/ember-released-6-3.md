---
title: Ember 6.3 Released
authors:
  - jared-galanis
  - katie-gengler
date: 2025-03-28T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

Today the Ember project is releasing version 6.3 of Ember.js and Ember CLI.

This release kicks off the 6.4 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.3

Ember.js 6.3 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug fixes

Ember.js 6.3 includes 1 noteworthy bug fix:

- [#20825](https://github.com/emberjs/ember.js/pull/20825) Remove the `helper` wrapper from the helper generator; [Plain functions as helpers](https://guides.emberjs.com/release/components/helper-functions/#toc_global-helper-functions) have been supported since v4.5.

#### Features

Ember.js 6.3 introduces 1 new feature.

##### [#20800](https://github.com/emberjs/ember.js/pull/20800) Template Tag support in Routes

Following [RFC #1046](https://rfcs.emberjs.com/id/1046-template-tag-in-routes/), Ember now supports the use of `<template>` authoring-format Glimmer components (gjs | gts) in place of route templates.

This is a replacement for the [ember-route-template](https://github.com/discourse/ember-route-template) addon.

#### Deprecations

Ember.js 6.3 introduces 1 new deprecation.

##### [#20526](https://github.com/emberjs/ember.js/pull/20526) Deprecates importing inject from @ember/service.

The export is renamed to service per [RFC #0752](https://rfcs.emberjs.com/id/0752-inject-service/). See the [deprecation guide](https://deprecations.emberjs.com/id/importing-inject-from-ember-service) for more information.

For more details on changes in Ember.js 6.3, please review the [Ember.js 6.3.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.3.0-ember-source).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData [broke from Lockstep versioning in November 2023](https://blog.emberjs.com/updates-to-ember-data-versioning-strategy). Under the new policy, EmberData 5.3 is an LTS that supports `ember-source` 5.12 and `ember-source` 6.0. More compatibility info is available in the [README](https://github.com/emberjs/data#compatibility).

EmberData is also in the process of rebranding to WarpDrive. Stay tuned for more info!

This support extends beyond bug-fixes. If minor enhancements can be made to better support new presentation class implementations that support the 5.x series we will willingly accept them. Our goal is that we want no one left behind.

To learn about the motivation and goals for upcoming changes to EmberData in 5.x,
read the [blog post, EmberData 5.X Update](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15/).

<!-- alex ignore retext-equality -->

This will help you form the mental model of what to expect across the 5.x series,
and understand deprecation removals in the context of the upcoming goals.

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

### Changes in Ember CLI 6.3

#### Bug fixes

Ember CLI 6.3 includes 4 noteworthy bug fixes:

- [#10612](https://github.com/ember-cli/ember-cli/pull/10612) Fix ember-data TS config in monorepo when using npm or yarn v1
- [#10592](https://github.com/ember-cli/ember-cli/pull/10592) Fix ESLint config for v1 addons
- [#10633](https://github.com/ember-cli/ember-cli/pull/10633) / [#10638](https://github.com/ember-cli/ember-cli/pull/10638) Fix Ember Data package versions in the blueprint
- [#10643](https://github.com/ember-cli/ember-cli/pull/10643) Remove unmaintained ember-cli-lodash-subset in favor of requiring functions directly from lodash

#### Features

Ember CLI 6.3 introduces 5 new feature and noteworthy enhancements:

##### Vanilla `Prettier` setup per [RFC #1055](https://rfcs.emberjs.com/id/1055-vanilla-prettier-setup-in-blueprints)

[#10596](https://github.com/ember-cli/ember-cli/pull/10596) moves the default [`Prettier`](https://prettier.io/) setup to no longer be run through linters (ESLint, Stylelint) but to be run directly.
The following scripts are adding to package.json via the blueprint:

- `npm run format` runs `prettier . --cache --write`. This will format all files with Prettier that are not ignored in the Prettier configuration. Previously this would only have applied to files configured in your linters. `npm run lint:fix` will run this command.
- `npm run lint:format` runs `prettier . --cache --check` This runs `prettier` as a linter and allows `npm run lint` to fail if prettier has not run.

As noted in the RFC: we use `format` instead of `lint:format:fix`, because we don't want to run Prettier parallel to ESLint and Stylelint when fixing lint errors. The `lint:fix` script will always run `format` last to avoid competing changes.

Prettier will now run over all files, not just JavaScript and TypeScript. Files can be excludde by adding globs to the [`.prettierignore` file](https://prettier.io/docs/ignore).

##### Add ember-cli-deprecation-workflow to app blueprint per [RFC #1009](https://rfcs.emberjs.com/id/1009-move-deprecation-workflow-to-apps)

[#10588](https://github.com/ember-cli/ember-cli/pull/10588) Adds the `ember-cli-deprecation-workflow` addon to the default blueprint for apps and generates the setup for the addon as well.

The addon enables collecting deprecations as they happen and creating a configuration so that you can silence deprecations or make them throw. See [the README](https://github.com/ember-cli/ember-cli-deprecation-workflow#ember-cli-deprecation-workflow) for more information.

For example, you may wish to silence a deprecation that is coming from an addon while you await an updated version, or you may wish to cause a deprecation to throw that you have already cleared and do not wish to allow to regress.

##### Other enhancements of note

- [#10613](https://github.com/ember-cli/ember-cli/pull/10613) Support --ember-data / --no-ember-data flags when creating a new app
- [#10617](https://github.com/ember-cli/ember-cli/pull/10617) Use `staticInvokables` in the app (embroider) blueprint
- [#10595](https://github.com/ember-cli/ember-cli/pull/10595) Update @glimmer/component to v2 in blueprints

#### Deprecations

Ember CLI 6.3 introduces 1 new deprecation:

##### Deprecate v1 addon `contentFor` types per [RFC #1029](https://rfcs.emberjs.com/id/1029-deprecate-app-prefix/)

[#10589](https://github.com/ember-cli/ember-cli/pull/10589) deprecates `contentFor` with the following types:

- app-prefix
- app-suffix
- tests-prefix
- tests-suffix
- vendor-prefix
- vendor-suffix

The deprecation guide is not yet published but the content can be read in the [RFC](https://rfcs.emberjs.com/id/1029-deprecate-app-prefix/).

For more details on the changes in Ember CLI 6.3 and detailed upgrade
instructions, please review the [Ember CLI 6.3.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.3.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
