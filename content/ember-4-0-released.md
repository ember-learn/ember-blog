---
title: Ember 4.0 released
authors:
  - jen-weber
  - matthew-beale
date: 2021-11-22T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-4-x
---

Today the Ember project is releasing version 4.0 of Ember.js, Ember Data, and
Ember CLI. This major version bump focuses
the framework by removing long-deprecated APIs and support for legacy platforms.

Although [Ember "Octane"](https://emberjs.com/editions/octane/) APIs have been
the default for new applications since Ember 3.15, the framework has continued
to support "Classic" framework features in accordance with our semantic
versioning commitment. Ember 4.0 takes a step forward and drops
already-deprecated classic APIs, however the foundational `EmberComponent` and
`EmberObject`/`computed` APIs are not removed in this release.

This blog post will help you understand how to upgrade and navigate any breaking
changes.

Additionally, today we're promoting Ember 3.28 to become Ember's latest
Long-Term Support (LTS) release. Ember's LTS release process provides bugfix
support for about 36 weeks, and security patches for about 54 weeks. See the
[3.28 release post](https://blog.emberjs.com/ember-3-28-released) and [LTS
documentation](https://emberjs.com/releases/lts/) for more details.

For applications using LTS releases, upgrading directly to 4.0 is not
encouraged. Best practice for those applications is to upgrade to Ember 3.28 LTS
as soon as possible, then wait for the first LTS of the 4.0 series to be
released. Ember 4.4 will be the first candidate.

## Major Releases in Ember

Why are there no new features in this release?
This has been the tradition for all major Ember releases since v2.
We believe that major versions should be rare, and that when they happen,
they should not introduce new features.

This strategy aims to give Ember developers the time and space to upgrade
dependencies and navigate any breaking changes, without needing to learn lots of
new things at the same time. In many libraries, including Ember, a major
release means that there are breaking changes. And while it would be exciting
for major releases to be splashy and full of new features, we think it is more
important to reduce risks for our developers and the users that depend on them.

Our hope is that that library maintainers across the JavaScript ecosystem
will follow this pattern, which makes it easier for developers to keep up
with security patches and bugfixes in their project's dependencies.

Our plans for Ember 4.0 were originally announced in July 2021 in
[The Road to Ember 4.0](https://blog.emberjs.com/the-road-to-ember-4-0/).

## Trying Ember for the first time

If you're interested in trying Ember for the
first time today, get started by running:

```bash
npx ember-cli new my-project
cd my-project
npx ember serve # Then visit http://localhost:4200
```

## How to upgrade your project to Ember 4

If your app or addon runs with no deprecations in the latest release of `v3.28`
and you have `v2` of `ember-auto-import` installed, you should be able to
upgrade to Ember 4 with no additional changes.

Follow these steps in order:

1. Upgrade your project to the latest patch version of `v3.28`.
   Many developers can do this by running
   `npx ember-cli-update --to 3.28`. More details about how to upgrade your Ember
   app/addon are in the
   [general upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself).
2. Resolve all deprecation warnings. Deprecated APIs are removed in Ember 4. You
   may need to upgrade some of your dependencies if they are using deprecated
   APIs. See the [Ember Deprecation Guide](https://deprecations.emberjs.com/)
   for more details about specific deprecations and how to resolve them.
   Applications that need to upgrade through several versions may want to
   consider the
   [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow)
   addon to isolate individual deprecations.
3. Make sure your app builds successfully.
4. Install `ember-auto-import` if your app does not already have it follow the
   [`ember-auto-import` installation
   documentation](https://github.com/ef4/ember-auto-import#installation). The
   short version is: `npm i --save-dev ember-auto-import webpack`.
5. If you are already using `ember-auto-import`, make sure you are using `v2`.
   You can follow
   [this upgrade guide](https://github.com/ef4/ember-auto-import/blob/main/docs/upgrade-guide-2.0.md)
   if you are on an earlier version.
6. Make sure your app builds successfully and your test suite passes with no
   deprecations.
7. Upgrade your app to Ember 4. Again,
   many developers can do this by running
   `npx ember-cli-update --to 4.0`. More details about how to upgrade your Ember
   app/addon are in the
   [general upgrade guide](https://cli.emberjs.com/release/basic-use/upgrading/#upgradinganemberappitself).

## What is in Ember 4?

### Browser Support in 4.0

Ember 4.0 supports two classes of browsers: Evergreen (those on a weeks-long, auto-upgrade release cycle) and non-evergreen. This classification system allows us to create a rolling minimum version for evergreen browsers, while using a more traditional, pinned minimum version for non-evergreen browsers.

Specifically, the Ember 4.x release policy includes support for Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari on desktop and mobile. **It does not include support for any version of Internet Explorer.**

Read more about this change in the [deprecation guide](https://deprecations.emberjs.com/v3.x/#toc_3-0-browser-support-policy) and at Ember's [browser support policy page](https://emberjs.com/browser-support/).

### `ember-auto-import` is now required

Using Ember 4 or higher requires that the project has version `2.0.0` or later
of `ember-auto-import` installed. Follow the "How to upgrade" steps above to
learn what you need to do.

Why is this change required? `ember-auto-import` supports something we call the
[v2 addon
format](https://emberjs.github.io/rfcs/0507-embroider-v2-package-format.html).
This specification describes how to publish an Ember CLI addon which has minimal
build overhead and better compatibility with modern build and analysis tooling
(think [Webpack](https://webpack.js.org/)). Later in Ember's 4.x release cycle,
we intend to release framework libraries as v2 addons to take advantage of those
improvements.

## Changes in Ember.js 4.0

Ember.js is the core of the Ember framework. It provides routing, rendering, and
dependency injection features.

Ember.js 4.0 introduces no new public API. Instead, it is comprised of bug fixes
and the removal of previously deprecated public API from the 3.x cycle.

Ember 4.0 does _not_ remove the `EmberComponent` API or the core parts of the
`EmberObject` system. These APIs are widely used, even after the release of
Octane, by existing application and addon code.

### APIs Removed in 4.0

Below we've listed some of the most significant API removals in Ember.js 4.0.
and for an full list of removals, see the [Ember.js 3.x deprecation
guide](https://deprecations.emberjs.com/v3.x).

- `Ember.Logger` is removed in favor of native `console` APIs. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_ember-console-deprecate-logger).
- `Copyable` mixin is removed in favor of the [ember-copy addon](https://github.com/emberjs/ember-copy). [Guide here](https://deprecations.emberjs.com/v3.x/#toc_ember-runtime-deprecate-copy-copyable).
- `sendAction` is removed in favor of calling closure actions like any other callback. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_ember-component-send-action).
- `willTransition` and `didTransition` are removed in favor of router service events. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_deprecate-router-events).
- Computed Property `volatile()` calls are removed in favor of native getters. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_computed-property-volatile).
- `this.$()` and other jQuery APIs are deprecated in favor of native browser equivalents. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_jquery-apis). An optional feature which restored this and other jQuery-specific features is also removed. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_optional-feature-jquery-integration).
- `{{partial}}` is removed in favor of template-only components. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_ember-partial).
- Using the built-in global resolver (`App.FooController` anyone?) is deprecated in favor of using [ember-resolver](https://github.com/ember-cli/ember-resolver), already the default for Ember CLI generated apps. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_ember-deprecate-globals-resolver).
- Ambiguous references to a component's properties are removed. You must now write `{{this.someProp}}`. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_this-property-fallback).
- `renderTemplate` is removed in favor of `{{in-element}}` or other rendering target redirection like [ember-wormhole](https://github.com/yapplabs/ember-wormhole). [Guide here](https://deprecations.emberjs.com/v3.x/#toc_route-render-template).
- Support for the `Ember` global on `window` is removed in favor of importing the `Ember` object or using the module-based API. [Guide here](https://deprecations.emberjs.com/v3.x/#toc_ember-global).
- Support for certain features of the `<LinkTo>`, `<Input>`, and `<Textarea>` components are removed. See guides on [positional arguments](https://deprecations.emberjs.com/v3.x/#toc_ember-glimmer-link-to-positional-arguments), [legacy arguments](https://deprecations.emberjs.com/v3.x/#toc_ember-built-in-components-legacy-arguments), [legacy HTML attributes](https://deprecations.emberjs.com/v3.x/#toc_ember-built-in-components-legacy-attribute-arguments), and [importing legacy built-in components](https://deprecations.emberjs.com/v3.x/#toc_ember-built-in-components-import).
- The internal APIs of `<LinkTo>`, `<Input>`, `<Checkbox>`, and `<Textarea>` are now private,
  and subclassing them is no longer supported.
  An example of subclassing looks like this: `export class MyLinkComponent extends LinkTo`.
  Apps or addons that subclass can install
  the library [`@ember/legacy-built-in-components`](https://github.com/emberjs/ember-legacy-built-in-components)
  as a stepping stone, following [this deprecation guide](https://deprecations.emberjs.com/v3.x#toc_ember-built-in-components-import).
- ...and additional uncommon deprecations found in the [Ember.js 3.x deprecation
  guide](https://deprecations.emberjs.com/v3.x)

Many of these removed APIs date back to Ember 1.x, and are rarely used now (or should be rarely used).

For more details on the changes in Ember.js 4.0, please review the
[Ember.js 4.0.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.0.0).

### Deprecations added in 4.0

Public API deprecations added in Ember 4.0 target removal in Ember 5.0. One
such deprecation was introduced:

- Use of `Ember.assign` is deprecated. You should replace any calls to `Ember.assign` with `Object.assign` or use the object spread operator. See the [deprecation guide](https://deprecations.emberjs.com/v4.x#toc_ember-polyfills-deprecate-assign) for examples.

## Changes in Ember Data 4.0

---

Ember Data is the official data persistence library for Ember.js applications.

This release removes APIs that were [deprecated in the 3.x cycle](https://deprecations.emberjs.com/ember-data/v3.x). They include:

- The API `store.defaultAdapter` is removed - [deprecation guide](https://deprecations.emberjs.com/ember-data/v3.x#toc_ember-data-default-adapter)
- Support for relying on fallback behavior for adapter type is removed.
  You should [specify adapter types explicitly](https://deprecations.emberjs.com/ember-data/v3.x#toc_ember-data-default-adapter).
- Similarly, `adapter.defaultSerializer` and support for relying on fallback behavior for the
  serializer type [is removed](https://deprecations.emberjs.com/ember-data/v3.x#toc_ember-data-default-serializers)
- The [Evented API is removed](https://deprecations.emberjs.com/ember-data/v3.x#toc_evented-api-usage)
- ...and other APIs listed in the [deprecation guide](https://deprecations.emberjs.com/ember-data/v3.x)

For more details on the changes in Ember Data 4.0, please review the
[Ember Data 4.0.0 release page](https://github.com/emberjs/data/releases/tag/v4.0.0).

## Changes in Ember CLI 4.0

---

Ember CLI is the command line interface for managing and packaging Ember.js
applications.

There are no deprecations, removals, or new features in Ember CLI v4.

For more details on the changes in Ember CLI 4.0 and detailed upgrade
instructions, please review the [Ember CLI 4.0.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.0.0).

---

## Need help?

Are you stuck on something? Do you have questions?
Visit one of our [community chat groups](https://emberjs.com/community).

## What next?

Want to help make Ember 4 a success? Here are some things you can do!

- Blog about your experience
- If someone helps you with a question, consider positing both the question
  and answer to a public place like Stack Overflow or the Ember Discourse forums,
  so that others can learn from it
- Help your favorite addons to upgrade to Ember 4
- Stay tuned via the Ember Times for new features and requests for help
  implementing them.

### Thank You!

Thank you to all the amazing Ember 4.0 contributors. This
release was a wide-ranging effort with over 50 API removals in
the `ember-source` package alone, and required coordination of timelines and
execution across all Ember's core libraries and teams. Ember is a project
maintained largely by volunteers, and this release is the result of sustained
contribution across many codebases, timezones, and interests.

We deeply appreciate the support of our contributors and user community. Thank
you.
