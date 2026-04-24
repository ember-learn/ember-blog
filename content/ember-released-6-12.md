---
title: Ember 6.12 Released
authors:
  - jared-galanis
  - chris-manson
date: 2026-03-30T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-6-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v6.12. Following [Ember's Major Version Policy](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process), version 6.12 will be the final release of the 6.x series. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

## Ember.js 6.12

Ember.js 6.12 does not introduce any new features in this release, but we have done some major improvements to the internal structure of the repo in preparation for Ember 7.0! We have also introduced three bugfixes and there are no new deprecations.

### Merging the Glimmer and Ember monorepos

It has been over 9 years since we [announced the publication of Glimmer.js](/emberconf-2017-state-of-the-union/#toc_introducing-glimmerjs) as a separate repo with the intention that people could use Glimmer independently of Ember. The idea was that you could start any small app with just the reactivity layer that Glimmer gives you and "npm install your way to Ember"

![Diagram showing a spectrum from less complext to more complex. On the left side is Glimmer logo for less complex applications. On the right side is Ember, for ambitious applications. In the middle is a sequence of npm install commands that show how you can move incrementally up the scale, one package at a time: npm install @ember/router, npm install @ember/service, and npm install @ember data.](/images/blog/2017-04-05-emberconf-2017-state-of-the-union/spectrum-of-app-complexity.png)

A lot has changed in both Ember and the wider JavaScript ecosystem since 2017, and with those changes the need for having a separate repository for Glimmer, with separate releases, has just gone away. Since the introduction of [renderComponent()](/ember-released-6-8#toc_rendercomponent) and the [build system moving to Embroider and Vite by default](/ember-released-6-8#toc_embroider-and-vite-by-default) in Ember 6.8 we can mostly rely on our build systems to just not include the code you aren't using in your bundle. 

There are more improvements to be made, but merging the Ember and Glimmer monorepos will significantly improve stability of future releases (all the test harnesses are now integrated) and make it much easier to make big improvements to the architecture of the `ember-source` package.

The `glimmer-vm` repo has also been archived to communicate that there will be no more work merged to that repo. Any `@glimmer/*` packages that still need to be released (such as `@glimmer/syntax` and `@glimmer/component`) will be released from the Ember monorepo. Relevant issues have also been moved to the `emberjs/ember.js` repo, but if you find an issue that you think we should have moved please reopen it on [Ember.js](https://github.com/emberjs/ember.js/issues) (after doing a quick search 😉).

### Bug Fixes

Ember.js 6.12 introduces 3 bugfixes

- [#20995](https://github.com/emberjs/ember.js/pull/20995) `renderComponent` fix error: 'attempted to close a tracking frame, but one was not open'
- [#20996](https://github.com/emberjs/ember.js/pull/20996) `renderComponent` fix error: 'Cannot read property of undefined: reading syscall'
- [#21091](https://github.com/emberjs/ember.js/pull/21091) Fix `on` modifier error message regression

## Ember CLI v6.12

<!-- Ember CLI features, bug fixes, and deprecations content here -->

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
