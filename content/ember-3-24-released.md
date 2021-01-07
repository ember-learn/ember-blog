---
title: Ember 3.24 Released
authors:
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

Ember.js 3.24 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

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
3. Calling `camelize`, `capitalize`, `classify`, `dasherize`, `decamelize`, `underscore`, or `w`—these are [`Ember.String` methods](https://api.emberjs.com/ember/3.23/classes/String)—on a string is deprecated. Instead of calling the method on the string, you can import the function from `@ember/string`:

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
4. `tryInvoke` from `@ember/utils` module has been deprecated in favor of JavaScript's optional chaining `?.`.

    ```javascript
    // Before
    import { tryInvoke } from '@ember/utils';

    let today = new Date('01/07/2021');

    tryInvoke(today, 'getTime');              // 1609974000000
    tryInvoke(today, 'setFullYear', [2014]);  // 1389049200000
    tryInvoke(today, 'noSuchMethod', [2014]); // undefined

    // After
    let today = new Date('01/07/2021');

    today.getTime?.();          // 1609974000000
    today.setFullYear?.(2014);  // 1389049200000
    today.noSuchMethod?.(2014); // undefined

    /*
      Note, `today` is used in the context of `tryInvoke`.
      As a result, we can assume that `today` is an object
      and write `today.getTime` instead of `today?.getTime`.

      The examples exist only to illustrate how to refactor
      `tryInvoke`. Please don't write `today.getTime?.()`
      in practice. :)
    */
    ```

    For more information, please see the [Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_ember-utils-try-invoke).

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

Last but not least, Ember.js 3.24 removed a few feature flags and an experimental API called `expandLocalLookup`. For more details on changes in Ember.js 3.24, please review the [Ember.js 3.24.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.24.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.24

#### Bug Fixes

Ember Data 3.24 introduced 1 bug fix.

1. In a production environment, an attempt to set something on a deleted record no longer shows the value in the error message. This was done to prevent leaking sensitive data. ([#7370](https://github.com/emberjs/data/pull/7370))

#### Features

Ember Data 3.24 introduced 0 features.

#### Deprecations

Ember Data 3.24 introduced 0 deprecations.

For more details on changes in Ember Data 3.24, please review the
[Ember Data 3.24.0 release page](https://github.com/emberjs/data/releases/tag/v3.24.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npm install -g ember-cli-update
ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.24

#### Bug Fixes

Ember CLI 3.24 introduced 1 bug fix.

1. When Embroider v2 addons are present, prevent forming a cycle in the build process. ([#9402](https://github.com/ember-cli/ember-cli/pull/9402))

#### Features

Ember CLI 3.24 upgraded the packages that are present in the `package.json` blueprint to their latest version. There are 4 notable changes to the `package.json` blueprint:

1. `ember-page-title` has been added to the blueprint. For more information, please see [RFC #645](https://github.com/emberjs/rfcs/blob/master/text/0645-add-ember-page-title-addon.md) and [`ember-page-title` documentation](https://ember-cli.github.io/ember-page-title/). ([#9372](https://github.com/ember-cli/ember-cli/pull/9372), [#9382](https://github.com/ember-cli/ember-cli/pull/9382))
2. `ember-qunit` has been upgraded to [v5](https://github.com/emberjs/ember-qunit/releases/tag/v5.0.0) (a major version change). Following the [migration guide](https://github.com/emberjs/ember-qunit/blob/master/docs/migration.md), the `package.json` blueprint includes `@ember/test-helpers` and `qunit`. The blueprints for `tests/index.html` and `tests/test-helper.js` have been updated as well. ([#9340](https://github.com/ember-cli/ember-cli/pull/9340), [#9371](https://github.com/ember-cli/ember-cli/pull/9371))
3. `eslint-plugin-ember` has been upgraded to [v10](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v10.0.0) (a major version change), which promoted `octane` rules to `recommended` and enabled several additional rules as `recommended`. To learn more about these linting rules, please check the [`eslint-plugin-ember` documentation](https://github.com/ember-cli/eslint-plugin-ember/tree/v10.0.0#-rules). ([#9403](https://github.com/ember-cli/ember-cli/pull/9403))
4. `prettier` (along with `eslint-config-prettier` and `eslint-plugin-prettier`) has been added to the blueprint. To learn more, please see [RFC #628](https://github.com/emberjs/rfcs/blob/master/text/0628-prettier.md) and [Prettier documentation](https://prettier.io/docs/en/index.html). ([#9391](https://github.com/ember-cli/ember-cli/pull/9391), [#9407](https://github.com/ember-cli/ember-cli/pull/9407), [#9410](https://github.com/ember-cli/ember-cli/pull/9410))

#### Deprecations

Ember CLI 3.24 introduced 0 deprecations.

For more details on the changes in Ember CLI 3.24 and detailed upgrade
instructions, please review the [Ember CLI 3.24.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.24.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
