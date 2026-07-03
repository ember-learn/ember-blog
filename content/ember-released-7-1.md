---
title: Ember 7.1 Released
authors:
  - jared-galanis
  - chris-manson
date: 2026-07-03T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-7-x
---

<!-- alex ignore just -->

Today the Ember project is releasing version 7.1 of Ember.js and Ember CLI.

This release kicks off the 7.2 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time.

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 7.1

Ember.js 7.1 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

- [#21068](https://github.com/emberjs/ember.js/pull/21068) [FEATURE] Build in the `{{on}}` modifier as a keyword in strict-mode templates per [RFC# 997](https://rfcs.emberjs.com/id/0997-make-on-built-in).
- [#21299](https://github.com/emberjs/ember.js/pull/21299) [FEATURE] Build in the `{{fn}}` helper as a keyword in strict-mode templates per [RFC #998](https://rfcs.emberjs.com/id/0998-make-fn-built-in).
- [#21230](https://github.com/emberjs/ember.js/pull/21230) / [#21343](https://github.com/emberjs/ember.js/pull/21343) [FEATURE] Add a built-in `(element)`/ `{{element}}` helper for dynamic tag names in strict-mode templates per [RFC #389](https://rfcs.emberjs.com/id/0389-dynamic-tag-names).
- [#21334](https://github.com/emberjs/ember.js/pull/21334) [FEATURE] Build in the `{{hash}}` helper as a keyword in strict-mode templates per [RFC# 999](https://rfcs.emberjs.com/id/0999-make-hash-built-in).
- [#21336](https://github.com/emberjs/ember.js/pull/21336) [FEATURE] Build in the `{{array}}` helper as a keyword in strict-mode templates per [RFC#1000](https://rfcs.emberjs.com/id/1000-make-array-built-in).
- [#21337](https://github.com/emberjs/ember.js/pull/21337) [FEATURE] Build in `{{and}}`, `{{or}}`, `{{not}}` helpers as keywords in strict-mode templates per [RFC #562](https://rfcs.emberjs.com/id/0562-add-logical-operators/).
- [#21339](https://github.com/emberjs/ember.js/pull/21339) [FEATURE] Build in `{{eq}}` and `{{neq}}` helpers as keywords in strict-mode templates per [RFC #560](https://rfcs.emberjs.com/id/0560-add-equality-operators/).
- [#21342](https://github.com/emberjs/ember.js/pull/21342) [FEATURE] Build in the `{{lt}}`, `{{lte}}`, `{{gt}}`, `{{gte}}` helpers as keywords in strict-mode templates per [RFC# 561](https://rfcs.emberjs.com/id/0561-add-numeric-comparison-operators).
- [#21373](https://github.com/emberjs/ember.js/pull/21373) [BUGFIX] Fix newly added keywords polluting the JS namespace
- [#21232](https://github.com/emberjs/ember.js/pull/21232) [INTERNAL] Clean up scope bag, wire format, and debug render tree
- [#21350](https://github.com/emberjs/ember.js/pull/21350) [INTERNAL] Remove barrel file imports from internal code f
or better tree-shaking
- [#21402](https://github.com/emberjs/ember.js/pull/21402) [INTERNAL] Do not use any caches on release and lock publi
shing of `ember-source` to `npm` to require approval from select persons.
- [#21379](https://github.com/emberjs/ember.js/pull/21379) [CLEANUP] Remove old Component Lookup
- [#21468](https://github.com/emberjs/ember.js/pull/21468) [DOC] Update API docs to use template tag where appropriat
e

#### Bug fixes

#### Features

#### Deprecations

For more details on changes in Ember.js 7.1, please review the [Ember.js 7.1.0 release page](https://github.com/emberjs/ember.js/releases/tag/v7.1.0-ember-source).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

### Changes in Ember CLI 7.1

#### :rocket: Enhancement
* `ember-cli`, `@ember-tooling/classic-build-addon-blueprint`, `@ember-tooling/classic-build-app-blueprint`
  * [#11040](https://github.com/ember-cli/ember-cli/pull/11040) Promote Beta and update all dependencies for 7.1 release ([@mansona](https://github.com/mansona))
* `ember-cli`
  * [#10610](https://github.com/ember-cli/ember-cli/pull/10610) use semver-deprecate instead of internal code ([@mansona](https://github.com/mansona))
  * [#11008](https://github.com/ember-cli/ember-cli/pull/11008) update babel-remove-types to v2 ([@mansona](https://github.com/mansona))
  * [#11009](https://github.com/ember-cli/ember-cli/pull/11009) update configstore to v8 ([@mansona](https://github.com/mansona))
* `@ember-tooling/classic-build-app-blueprint`, `ember-cli`
  * [#11006](https://github.com/ember-cli/ember-cli/pull/11006) update ember-welcome-page to v8 in app blueprint ([@mansona](https://github.com/mansona))
  * [#11005](https://github.com/ember-cli/ember-cli/pull/11005) update ember-cli-deprecation-workflow to v4 ([@mansona](https://github.com/mansona))
  * [#11003](https://github.com/ember-cli/ember-cli/pull/11003) update @ember/optional-features to v3 ([@mansona](https://github.com/mansona))

#### :bug: Bug Fix
* `ember-cli`
  * [#11020](https://github.com/ember-cli/ember-cli/pull/11020) Update diff to latest v8.x ([@mkszepp](https://github
.com/mkszepp))

#### :house: Internal
* `ember-cli`
  * [#11033](https://github.com/ember-cli/ember-cli/pull/11033) Merge release into beta ([@mansona](https://github.co
m/mansona))
  * [#11017](https://github.com/ember-cli/ember-cli/pull/11017) Add Sync Output Repos check to release instructions (
[@kategengler](https://github.com/kategengler))
  * [#11016](https://github.com/ember-cli/ember-cli/pull/11016) fix: sync-output-repos workflow failing on tag pushes
 ([@Copilot](https://github.com/apps/copilot-swe-agent))
  * [#10999](https://github.com/ember-cli/ember-cli/pull/10999) update RELEASE with update-blueprint-deps commands ([
@mansona](https://github.com/mansona))
* `ember-cli`, `@ember-tooling/classic-build-addon-blueprint`, `@ember-tooling/classic-build-app-blueprint`
  * [#11029](https://github.com/ember-cli/ember-cli/pull/11029) Prepare Beta Release ([@mansona](https://github.com/m
ansona))

* @ember/app-blueprint 7.1.0 (minor)

#### :rocket: Enhancement
* `@ember/app-blueprint`
  * [#295](https://github.com/ember-cli/ember-app-blueprint/pull/295) Promote Beta and update all dependencies for 7.1 release ([@mansona](https://github.com/mansona))
  * [#266](https://github.com/ember-cli/ember-app-blueprint/pull/266) remove chalk in favour of native styleText ([@mansona](https://github.com/mansona))
  * [#267](https://github.com/ember-cli/ember-app-blueprint/pull/267) update walk-sync to v4 ([@mansona](https://github.com/mansona))
  * [#260](https://github.com/ember-cli/ember-app-blueprint/pull/260) update stylelint to v17 ([@mansona](https://github.com/mansona))
  * [#264](https://github.com/ember-cli/ember-app-blueprint/pull/264) update ember-cli-deprecation-workflow to v4 ([@mansona](https://github.com/mansona))
  * [#263](https://github.com/ember-cli/ember-app-blueprint/pull/263) update vite to v8 ([@mansona](https://github.com/mansona))
  * [#262](https://github.com/ember-cli/ember-app-blueprint/pull/262) update babel-plugin-ember-template-compilation to v4 ([@mansona](https://github.com/mansona))
  * [#261](https://github.com/ember-cli/ember-app-blueprint/pull/261) update @rollup/plugin-babel to v7 ([@mansona](https://github.com/mansona))
  * [#258](https://github.com/ember-cli/ember-app-blueprint/pull/258) update typescript to v6 ([@mansona](https://github.com/mansona))

#### :bug: Bug Fix
* `@ember/app-blueprint`
  * [#272](https://github.com/ember-cli/ember-app-blueprint/pull/272) Fix an issue with the `--no-warp-drive` option ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* `@ember/app-blueprint`
  * [#298](https://github.com/ember-cli/ember-app-blueprint/pull/298) fix plan release for beta and stable ([@mansona](https://github.com/mansona))
  * [#297](https://github.com/ember-cli/ember-app-blueprint/pull/297) fix release-plan plan CI ([@mansona](https://github.com/mansona))
  * [#253](https://github.com/ember-cli/ember-app-blueprint/pull/253) Update RELEASE.md with notes from the latest release ([@mansona](https://github.com/mansona))




#### Bug fixes

#### Features

#### Deprecations

For more details on the changes in Ember CLI 7.1 and detailed upgrade
instructions, please review the [Ember CLI 7.1.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v7.1.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
