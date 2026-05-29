---
title: Ember 7.0 Released
authors:
  - jared-galanis
  - chris-manson
  - katie-gengler
date: 2026-05-15T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-7-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v7.0. Following [Ember's Major Version Policy](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process), the major includes only the removal of features that were deprecated until 7.0 as well as other bugfixes. This release of Ember.js means the previous version, 6.12, is now an LTS (Long Term Support) version.

When it comes to introducing new features, Ember generally aims to ship new features in minor releases, offering backwards compatibility for existing code at the same time as giving developers the chance to try out new capabilities. This approach reduces the challenges that teams face for major upgrades, compared to producing big, breaking, splashy major versions with lots of new features.

## Looking back at improvements in the 6.x series

In Ember 6.x minor releases, we landed many notable features:

- [In Ember 6.1](/ember-released-6-1/) we began publishing `ember-source` as a v2 addon, which enabled `Embroider` to consume `ember-source` directly.
- [In Ember 6.3](/ember-released-6-3/) we added support for template-tag components as route templates per [RFC #1046](https://rfcs.emberjs.com/id/1046-template-tag-in-routes).
- [In Ember 6.8](/ember-released-6-8/#toc_embroider-and-vite-by-default) we landed a new app blueprint with `Embroider` and `Vite`-based build system as the default.
- [Also in Ember 6.8](/ember-released-6-8/#toc_component-and-route---strict-by-default) we moved to `strict-mode` (aka `template-tag`) component authoring format as the default.
- [Also in Ember 6.8](/ember-released-6-8/#toc_rendercomponent) we added the [`renderComponent` API](https://rfcs.emberjs.com/id/1099-rendercomponent/) that allows rendering individual components without a full project.
- [Also in Ember 6.8](/ember-released-6-8/#toc_emberreactivecollections) we built in tracked versions of JavaScript's native collection types: `trackedArray`, `trackedObject`, `trackedMap`, `trackedSet`, `trackedWeakMap`, and `trackedWeakSet`.

Ember 6.8 was the biggest change to how an Ember project is built in recent memory.
We flipped the defaults in v6.8 but both Embroider+Vite-based build-system and
the strict-mode (aka template-tag) component authoring format were literally many
years of effort.

Along with these features, countless bugfixes, deprecations that cleared the way
for future improvements, RFCs setting the stage for new features, in 6.x the community also:

- Merged the `glimmer-vm` monorepo into `ember.js` to faciliate faster iteration on the rendering engine and the integration with `ember.js`.
- Merged the `router.js` repo into the `ember.js` repo to prepare for experimentation with a new router architecture and the implementation of the [Route Manager RFC](https://rfcs.emberjs.com/id/1169-route-manager-api/)
- Updated our packages to publish via `OIDC`.
- Updated `broccoli` and other dependencies in an ongoing effort to reduce the number of security vulnerabilities. Current vulnerability warnings are only a concern in development mode and should not be exploitable but are annoying.
- Strived to [reduce the number of deprecation warnings when generating a new Ember App](https://github.com/ember-cli/ember-cli/issues/10943). This is an ongoing task.
- The [v2 of Glint](https://typed-ember.gitbook.io/glint/v2-upgrade) was released. This enabled us to make the template-tag component authoring format the default.
- Created the [template tag codemod](https://blog.emberjs.com/template-tag-codemod/) to help migration to the new authoring format.
- Created the [Vite codemod](https://github.com/mainmatter/ember-vite-codemod) to help migration to the new build system.
- Created a legacy Classic Blueprint (@ember-tooling/classic-build-app-blueprint) and supported it in [ember-cli-update](https://github.com/ember-cli/ember-cli-update) so that projects can update without moving to the new build system, if necessary.

Thank you to all the contributors that helped make this major-version cycle possible!

## How to upgrade to Ember 7.0

The most common approach for upgrading to 7.0 is to upgrade your app to the last
version of Ember 6, which is 6.12, resolve all deprecation warnings, and then upgrade to 7.0. If your app or addon runs with no deprecations in the latest release of 6.12,
you should be able to upgrade to Ember 7 with no additional changes. Step-by-step directions are below.

If your app is at a much earlier version in the 6.x series, we
recommend upgrading in steps across the LTS versions: [6.4](https://blog.emberjs.com/ember-released-6-4/), [6.8](https://blog.emberjs.com/ember-released-6-8), and then [6.12](https://blog.emberjs.com/ember-released-6-12/).

Follow these steps in order:

1. Consider upgrading addons used in your app to the latest version that you can. This will reduce the uses of deprecated APIs in your dependencies.
2. Upgrade your project to the latest patch version of Ember 6.12.
   Many projects can do this by running
   `npx ember-cli-update --to 6.12`.

   When upgrading across the 6.8 boundary, due to changes in the build system, you need to [adjust the configuration for ember-cli](https://github.com/ember-cli/ember-cli-update/blob/master/docs/upgrading-past-6-7-0.md).
3. Make sure your app builds successfully.
4. Resolve all deprecation warnings. These Deprecated APIs are removed in Ember 7.0. You may need to upgrade some of your addon dependencies if they are using deprecated APIs.
   See the [Ember Deprecation Guide](https://deprecations.emberjs.com/)
   for more details about specific deprecations and how to resolve them.
   Applications that need to upgrade through several versions may want to
   consider isolating individual deprecations by using
   [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow).
5. Make sure your app builds successfully and your test suite passes with no
   deprecations.
6. Upgrade your app to Ember 7.0. Again,
   many developers can do this by running
   `npx ember-cli-update --to 7.0`.

For help or advice along the way, visit [Ember's forums or chat groups](https://emberjs.com/community/).

## Ember.js 7.0

Ember.js 7.0 introduces no new public API. Instead, it comprises bug fixes and the breakage of previously deprecated public API from the 6.x cycle.

### Deprecations

Ember.js 7.0 introduced no new deprecations. It removed all deprecations that were
introduced before 6.10 and slated for removal in 7.0.

Ember 7.0 removes the following features deprecated during 6.x:

- [Removes](https://rfcs.emberjs.com/id/1003-deprecation-import-ember-from-ember/) `import Ember from 'ember'`. See the RFC or deprecations in your project for a guide on replacement APIs.
- [Removes](https://deprecations.emberjs.com/v6.x#toc_using-amd-bundles) the publication of AMD bundles by `ember-source`. This can be opted-into before 7.0 by using an optional feature: see the [deprecation guide](https://deprecations.emberjs.com/v6.x#toc_using-amd-bundles) for more details. This also requires certain dependency updates.
- [Removes](https://deprecations.emberjs.com/id/importing-inject-from-ember-service) importing `inject` from `@ember/service`. It is now `import { service } from '@ember/service'`.

For more details on how to resolve these deprecations in your app, see [the deprecations guide](https://deprecations.emberjs.com/v6.x).

### Bug Fixes

Ember.js 7.0 includes many bug fixes, the following are some of the more notable ones:

- [#21076](https://github.com/emberjs/ember.js/pull/21076) Support default globals for strict mode with the _runtime_ template compiler per [RFC #1070](https://rfcs.emberjs.com/id/1070-default-globals-for-strict-mode/).
- [#21098](https://github.com/emberjs/ember.js/pull/21098) Add support for `this` in explicit scope for the _runtime_ template compiler.
- [#21107](https://github.com/emberjs/ember.js/pull/21107) Fix `LinkTo` inside inline SVG reloads your application
- [#21109](https://github.com/emberjs/ember.js/pull/21109) Fix missing value attribute on radio/checkbox inputs bound to empty string
- [#21122](https://github.com/emberjs/ember.js/pull/21122) Fix tracked collections `delete()` returning true for non-existent entries
- [#21124](https://github.com/emberjs/ember.js/pull/21124) Fix `{{#each}}` runtime crash when array contains null/undefined items with key
- [#21125](https://github.com/emberjs/ember.js/pull/21125) Fix crash when accessing negative index of helper positional args
- [#21128](https://github.com/emberjs/ember.js/pull/21128) Fix `trackedMap` and `trackedWeakMap` reactivity for existing keys
- [#21139](https://github.com/emberjs/ember.js/pull/21139) Port `BrandedArray` fix for Array-as-parent bug in destroyables
- [#21168](https://github.com/emberjs/ember.js/pull/21168) Fix `EmberArray.reduce` to match native behavior
- [#21189](https://github.com/emberjs/ember.js/pull/21189) Clear stale metadata references after destruction to allow GC
- [#21202](https://github.com/emberjs/ember.js/pull/21202) Fix `<LinkTo>`'s `@current-when` argument with nested routes containing dynamic segments

## Ember CLI v7.0

Ember CLI 7.0 introduces no new public API, adds no new deprecations, and adds no new bugfixes. This release only adds an automatic breakage to previously deprecated public API from the 6.x cycle. This code will be cleaned up in future releases. You can read more about the [deprecations in the deprecation guide](https://deprecations.emberjs.com/ember-cli/v6.x)

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
