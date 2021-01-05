---
title: Ember 3.24 Released
author:
  - ricardo-mendes
  - isaac-lee
date: 2021-01-07T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-3-x
---

Today the Ember project is releasing version 3.24 of Ember.js, Ember Data, and Ember CLI. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

This release kicks off the 3.25 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.24

Ember.js 3.24 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 3.24 introduced 4 bug fixes.

1. When the `router` service is injected (e.g. into a component), the `router` service can automatically work in non-application tests. In other words, we no longer need to call `this.owner.setupRouter()`. ([#19080](https://github.com/emberjs/ember.js/pull/19080))
2. When there is no template associated with a component class, the low-level API `getComponentTemplate()` now returns `undefined` instead of `null`. The return value of `undefined` is what had been specified in the [Component Templates Colocation RFC](https://github.com/emberjs/rfcs/blob/master/text/0481-component-templates-co-location.md#low-level-primitives). ([#19253](https://github.com/emberjs/ember.js/pull/19253))
3. In an Ember Engines app, the `<LinkTo>` component once again supports [linking within an engine](https://ember-engines.com/docs/links#linking-within-an-engine). Please note, a fix was made possible through a breaking change in the private implementation of `<LinkTo>`. When you upgrade your app to v3.24 or above, you will want to upgrade Ember Engines too. You can [track the release status of Ember Engines on GitHub](https://github.com/ember-engines/ember-engines/issues/740). ([#19223](https://github.com/emberjs/ember.js/pull/19223)) ⚠️
4. When a computed property has a dependent key that includes `@each`, followed by an aliased property, the computed property recomputes when the aliased property's value changes. ([#19280](https://github.com/emberjs/ember.js/pull/19280))

#### Features

Ember.js 3.24 introduced 3 features.

1. When `ember-page-title` is installed, the blueprint for a route template creates a `{{page-title}}` helper invocation in addition to `{{outlet}}`. For more information, please see [RFC #645](https://github.com/emberjs/rfcs/blob/master/text/0645-add-ember-page-title-addon.md) and [`ember-page-title` documentation](https://ember-cli.github.io/ember-page-title/). ([#19224](https://github.com/emberjs/ember.js/pull/19224))
2. The interface of `DeprecationOptions`, which can be passed to the `deprecate()` function, requires the keys `for` and `since` to exist. For more information, please see the [Deprecation Staging RFC](https://github.com/emberjs/rfcs/blob/master/text/0649-deprecation-staging.md#deprecate). ([#19133](https://github.com/emberjs/ember.js/pull/19133))
3. Glimmer VM, the rendering engine, has been upgraded to version 0.65.0. The upgrade includes a bug fix and a few upstreams. ([#19258](https://github.com/emberjs/ember.js/pull/19258), [#19261](https://github.com/emberjs/ember.js/pull/19261), [#19267](https://github.com/emberjs/ember.js/pull/19267))

#### Deprecations

Ember.js 3.24 introduced 4 deprecations.

1. Going back to the interface of `DeprecationOptions` (see Features above), forgetting to pass `for` or `since` will trigger a deprecation message. ([#19133](https://github.com/emberjs/ember.js/pull/19133))
2. `Ember.String.loc` function, `@ember/string#loc` function, and `{{loc}}` helper have been deprecated in favor of a dedicated localization solution like [ember-intl](https://github.com/ember-intl/ember-intl). For more information, please see the [Deprecations Guide](https://deprecations.emberjs.com/v3.x/#toc_ember-string-loc). ([#19211](https://github.com/emberjs/ember.js/pull/19211))
3. Calling an [`Ember.String` method](https://api.emberjs.com/ember/3.23/classes/String)—`camelize`, `capitalize`, `classify`, `dasherize`, `decamelize`, `underscore`, or `w`—directly on a string is deprecated. Instead of calling the method on the string, you can import the function from `@ember/string`:

    ```javascript
    // Before
    let mascot = 'Empress Zoey';
    console.log(mascot.camelize());  // empressZoey

    // After
    import { camelize } from '@ember/string';

    let mascot = 'Empress Zoey';
    console.log(camelize(mascot));  // empressZoey
    ```

    For more information, please see the [Deprecations Guide](https://deprecations.emberjs.com/v3.x/#toc_ember-string-prototype-extensions). ([#19234](https://github.com/emberjs/ember.js/pull/19234))
4. Use of `tryInvoke` from `@ember/utils` module has been deprecated in favor of using JavaScript's optional chaining `?.`. For more information, please see the [Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_ember-utils-try-invoke).

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js VER, please review the [Ember.js VER.0 release page](https://github.com/emberjs/ember.js/releases/tag/vVER.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data VER

#### Features

Ember Data VER introduced 0 features.

#### Deprecations

Ember Data VER introduced 0 deprecations.

For more details on changes in Ember Data VER, please review the
[Ember Data VER.0 release page](https://github.com/emberjs/data/releases/tag/vVER.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

<!--alex ignore easy-->
You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npm install -g ember-cli-update
ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI VER

#### Features

Ember CLI VER introduced 0 features.

#### Deprecations

Ember CLI VER introduced 0 deprecations.

For more details on the changes in Ember CLI VER and detailed upgrade
instructions, please review the [Ember CLI VER.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/vVER.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
