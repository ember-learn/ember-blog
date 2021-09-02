---
title: Ember 3.28 and 4.0 Beta Released
authors:
  - matthew-beale
  - isaac-lee
  - jen-weber
date: 2021-09-02T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-3-x
---

After 3.5 years and 28 minor releases, Ember 3.28 marks the end of the project's 3.x series.
To ensure a smooth upgrade path going into the 4.x series, 3.28 has been declared an LTS (Long Term Support) candidate. In six weeks
the latest patch version of 3.28 will be promoted to be the latest LTS release
replacing 3.24-LTS.

**We're also announcing the start of the Ember 4.0 beta cycle for all sub-projects.** Following the process set in previous major versions, Ember 4.0 introduces no new features. Instead, it removes support for deprecated public APIs. We encourage our community (especially addon authors) to help test beta builds and report any bugs before they are published as a stable release in six weeks' time. We also encourage everyone to help maintainers resolve deprecations in their favorite addons. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

Developers who want to prepare for the upcoming 4.0 version of Ember should work to resolve all deprecation warnings in their apps and addons.
An app or addon with no deprecation warnings should be able to upgrade from Ember 3.28 to 4.0 without making significant changes outside of the
dependency versions.

You can read more about Ember's plans for 4.0 in [The Road to Ember 4.0](https://blog.emberjs.com/the-road-to-ember-4-0/).

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.28

Ember.js 3.28 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations. 3.28 is light on changes because we want the final release of the 2.x cycle to be as stable and battle-tested as possible, so it does not have new features.

#### Bug Fixes

Ember.js 3.28 introduced 7 bug fixes. For the full set of changes, see the [Release notes changelog](https://github.com/emberjs/ember.js/releases/tag/v3.28.0).

#### Deprecations

Ember.js 3.28 introduced 0 deprecations. However, there is one bugfix relevant to deprecations. In Ember 3.24, various string methods added to the `String.prototype` were deprecated for removal in Ember 4.0. `htmlSafe` (the version available via string prototype) was supposed to be included in those deprecations, however it was missed. This omission can be understood as a bug.

For more details on changes in Ember.js 3.28, please review the [Ember.js 3.28.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.28.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications. The changes introduced in Ember Data 2.18 mostly focus on bug fixes and refactors in preparation for 4.0.

### Changes in Ember Data 3.28

#### Bug Fixes

Ember Data 3.28 introduced 12 bug fixes and some internal refactors. For the full set of changes, see the [CHANGELOG.md](https://github.com/emberjs/data/blob/v3.28.0/CHANGELOG.md#release-3280-aug-20-2021).

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

### Changes in Ember CLI 3.28

#### Drop Node 10 support

Ember CLI 3.28 drops support for Node 10. Node 10 became end of life (it no longer received security updates) as of April 2021.

#### Bug Fixes

Ember CLI 3.28 introduced 0 bug fixes.

#### Features

Ember CLI 3.28 introduced 1 feature.

##### `ember-addon.projectRoot`

This config allows you to have a nested project, supporting running `ember s` from outside of the project's directory. For example, if you're using yarn workspace or a monorepo and still want to allow `ember serve` from the root of the repo, update the top-level `package.json` to include the following config:

```json
{
  "ember-addon": {
    "projectRoot": "./packages/path-to-ember-project"
  }
}
```

#### Deprecations

Ember CLI 3.28 introduced 0 deprecations.

For more details on the changes in Ember CLI 3.28 and detailed upgrade
instructions, please review the [Ember CLI 3.28.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.28.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
