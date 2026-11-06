---
title: Ember 7.4 Released
authors:
  - jared-galanis
date: 2026-11-06T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-7-x
---

<!--
DRAFT NOTES (delete before publishing)

Drafted 2026-11-06 from ember-source v7.4.0 (stable, 2026-10-26) and ember-cli v7.4.0-beta.1.
ember-cli 7.4.0 stable was not published when this was written.

Re-check when ember-cli 7.4.0 ships:
- The whole "Ember CLI 7.4" section. Read the stable release notes and the
  "Promote Beta and update all dependencies" PR for ember-cli and @ember/app-blueprint.
- The WarpDrive pin in both blueprints (5.8.2 at beta.1).

Ask a core team member:
- Desktop Safari minimum. The changelog and emberjs.com/browser-support say 16.6.
  lib/browsers.cjs at the v7.4.0 tag says 'Safari >= 18.5' and 'iOS >= 16.6'.
  The table below follows the website.
- Mobile Chrome and Firefox. The website says 109 and 121, the changelog and
  lib/browsers.cjs say ChromeAndroid >= 151 and FirefoxAndroid >= 153.
  The post links to the website for mobile and gives no numbers.
- Whether to keep the paragraph about deprecations coming in 7.5.
-->

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v7.4. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

As you would hope from an LTS candidate, this is a quiet release. There are no new features. Instead we have updated the list of browsers that Ember supports for the first time since Ember 6.0, made rendering a little faster, and fixed four bugs, three of which make `renderComponent` (and the test helpers that are now built on top of it) more dependable 💪

## Ember.js 7.4

Ember.js 7.4 does not introduce any new features. It updates the minimum browser versions that Ember supports, includes one performance improvement in the rendering engine, and ships four bugfixes. There are no new deprecations.

If LTS releases are new to you: a release has to spend at least six weeks as the stable release before it can be promoted to LTS, and once it is promoted it receives bugfixes for 36 weeks and security updates for 54 weeks. You can read more on the [LTS page](https://emberjs.com/releases/lts/).

One thing to plan for if you are going to settle on 7.4 for a while: the [changelog for the 7.5 beta](https://github.com/emberjs/ember.js/releases/tag/v7.5.0-beta.1-ember-source) lists a batch of deprecations for classic-era APIs such as mixins, `Evented`, and the proxy classes. None of them fire in 7.4, but that is the list to read next.

### Updated browser support

Ember's browser support policy was set out in [RFC #685](https://rfcs.emberjs.com/id/0685-new-browser-support-policy) for Ember 4.0, and [RFC #984](https://rfcs.emberjs.com/id/0984-update-browser-support-policy) added Safari to the list of evergreen browsers for Ember 6.0. Under that policy we don't pick browser versions by hand. For each browser the minimum is the oldest version that is either the latest release, the latest extended support release (such as Firefox ESR), or still has at least 0.25% of global usage, and the minimum is never allowed to go backwards.

The policy allows the list to be recalculated at every minor release, but it had not changed since Ember 6.0. In 7.4 we have run the numbers again:

| Browser | Ember 6.0 to 7.3 | Ember 7.4 |
| --- | --- | --- |
| Google Chrome | 109 | 109 |
| Mozilla Firefox | 115 | 121 |
| Microsoft Edge | 128 | 149 |
| Safari | 15.6 | 16.6 |

Chrome stays where it was because version 109 still clears the usage threshold. The full list, including mobile browsers, is on the [browser support page](https://emberjs.com/browser-support/).

**What does this mean for you?** "Supported" covers two things in the policy: which browser features Ember itself is allowed to rely on, and which browsers we will work to fix bugs for. The PR only changes the list and the test configuration, and the size report on it shows the published build is the same size before and after, so we don't expect you to notice anything when you upgrade. What has changed is the baseline: Ember's own test suite now runs against Safari 16 and Edge 149 rather than Safari 15 and Edge 128, and a later minor release may start relying on features that only the versions in the right-hand column have. Older browsers may continue to work, but they are no longer explicitly supported.

This list describes `ember-source` itself. Which browsers your own application code is compiled for is still configured in your app.

Updated in [emberjs/ember.js PR #21586](https://github.com/emberjs/ember.js/pull/21586)

### A rendering speed-up

While Glimmer renders your templates it creates a lot of internal objects that it will later need to tear down, such as the blocks that make up a template and the result of a render. The bookkeeping for that teardown (the parent, the children, and the destructors to run) is stored as metadata by the same system that sits behind the public [`@ember/destroyable`](https://api.emberjs.com/ember/release/modules/@ember%2Fdestroyable) API. Until now that metadata always lived in a `WeakMap` keyed by the object, so creating and destroying each of those objects meant asking the `WeakMap` for it.

In Ember 7.4 the objects that Glimmer constructs itself carry their metadata directly on a private property instead, because reading a property from an object is cheaper than a `WeakMap` lookup. Anything that you hand to Ember, such as your components, your modifiers, or any object you pass to `registerDestructor`, is left untouched and still goes through the `WeakMap`, so the only thing you should be able to observe is the speed.

The benchmark results posted on the PR come from Ember's own benchmark app, which renders, updates, and clears a large table of rows. They show the total run about 4% faster. Eight of the individual phases improved by between 3% and 15%, with clearing and appending rows among the biggest wins, and the other fourteen phases showed no difference.

This is one step and not the end of the road. The PR says that the same technique will be tried in other places, and the changelog for the 7.5 beta already lists more performance work.

Improved in [emberjs/ember.js PR #21571](https://github.com/emberjs/ember.js/pull/21571)

### Bug Fixes

Ember.js 7.4 introduces 4 bugfixes:

- [#21623](https://github.com/emberjs/ember.js/pull/21623) Include `renderComponent` roots in `captureRenderTree`
- [#21719](https://github.com/emberjs/ember.js/pull/21719) Release `renderComponent` roots (and renderers) when the result is destroyed
- [#21685](https://github.com/emberjs/ember.js/pull/21685) Reset tracking when the cleanup of a render error throws
- [#21619](https://github.com/emberjs/ember.js/pull/21619) Fix the types for `@tracked` so that the decorator form accepts the `equals` option

The first three have a common thread. [`renderComponent`](/ember-released-6-8#toc_rendercomponent) arrived in Ember 6.8 as a way to render a component into any DOM element, and it has recently started to get a lot more use: `@ember/test-helpers` began rendering through `renderComponent` in version 5.5.0, and since 5.6.0 it does so on `ember-source` 6.12.1 and newer. When your rendering tests go through a code path, the bugs in it get found.

The first fix is for `captureRenderTree`, the debug API that the Ember Inspector uses to build its component tree. It only looked at the application's main renderer, and `renderComponent` renders with a renderer of its own, so anything rendered that way was missing from the tree. Ember's own nightly test runs started failing the day after the test helpers release, which is how this one was caught.

The second fix is a memory leak. Destroying the result of a `renderComponent` call tore down what had been rendered, but never removed the root from its renderer, so the renderer, the root, its arguments, and the element it had rendered into all stayed in memory. This was most visible when `renderComponent` was called without an owner, for example from a modifier, because each of those calls creates a new renderer.

The third fix only affects development builds, but it has the most dramatic symptoms. If a render threw an error, and the cleanup that follows also threw because the DOM it was trying to close had already gone, Ember never reset its tracking state. From then on every write to tracked state failed with a backtracking assertion, including in tests that had nothing to do with the original error. The [issue that reported it](https://github.com/emberjs/ember.js/issues/21681) describes one failing test turning roughly 1,000 later tests red 😅 A render error now stays in its own test.

The last fix is a follow-up to [configurable equality in Ember 7.3](/ember-released-7-3#toc_configurable-equality). Writing `@tracked({ equals: Object.is }) count = 0` on a class field worked at runtime but was rejected by TypeScript. The types now match the behaviour.

You may already have these. All four fixes were also released in `ember-source` 7.3.1, and the three `renderComponent` and tracking fixes are in 6.12.1 for those of you on the current LTS. That patch also carries the dynamic modifier memory leak fix that we [covered in the Ember 7.3 release blog](/ember-released-7-3#toc_bug-fixes).

### Documentation

`{{#each-in}}` accepts a `key` option in the same way that `{{#each}}` does, but because you are iterating over entries rather than items the special values mean something different. That had never been written down, and the [issue asking for it](https://github.com/emberjs/ember.js/issues/16719) was opened in 2018. The API docs for `{{#each-in}}` now describe it:

| `key=` | Keys on |
| --- | --- |
| `@key` | the property name, or the key of a `Map` |
| omitted, or `@identity` | the value of the entry, so a changed value replaces the DOM for that entry |
| any other string | a path that is looked up on the value |

See [emberjs/ember.js PR #21536](https://github.com/emberjs/ember.js/pull/21536) for the details.

## Ember CLI 7.4

Ember CLI 7.4 is a maintenance release: no new features, no deprecations, and no bugfixes. The only changes are the routine version bumps that happen as part of the release train, which means that newly generated apps are on `ember-source` 7.4. The [`@ember/app-blueprint`](https://github.com/ember-cli/ember-app-blueprint) that `ember new` uses has no functional changes in this release either. As with 7.3, newly generated apps still get WarpDrive 5.8.

## Thank You!

A final note: this post was drafted with the help of artificial intelligence, and a human reviewed it in its entirety.

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
