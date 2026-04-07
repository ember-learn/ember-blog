---
title: Ember 6.12 Released
authors:
  - jared-galanis
date: 2026-03-30T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-6-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v6.12. Following [Ember's Major Version Policy](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process), version 6.12 will be the final release of the 6.x series. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

## Ember.js 6.12

- [#20908](https://github.com/emberjs/ember.js/pull/20908) / [#21020](https://github.com/emberjs/ember.js/pull/21020) We have merged [glimmerjs/glimmer-vm](https://github.com/glimmerjs/glimmer-vm) into the `emberjs/ember.js` monorepo.
  - All `@glimmer/*` packages that were formerly dependencies of `ember-source` are now included in the monorepo. This enables us to more easily iterate
    on the Glimmer VM and related packages, avoid an integration step with `ember.js` and to more easily share code between them and `ember-source`.
  - Only a few of the packages from the `glimmer-vm` repo will continue to be published as separate packages, for example, `@glimmer/syntax` and `@glimmer/component` will be published.
  - The `glimmer-vm` repo has been archived and relevant issues have been moved to the `emberjs/ember.js` repo. If you have an issue that was not moved, please reopen it on ember.js, after a search.
- [#20995](https://github.com/emberjs/ember.js/pull/20995) [BUGFIX] `renderComponent` error: 'attempted to close a tracking frame, but one was not open'
- [#20996](https://github.com/emberjs/ember.js/pull/20996) [BUGFIX] `renderComponent` error: 'Cannot read property of undefined: reading syscall'
- [#21091](https://github.com/emberjs/ember.js/pull/21091) [BUGFIX] Fix 'on' modifier error message regression

## Ember CLI v6.12

<!-- Ember CLI features, bug fixes, and deprecations content here -->

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
