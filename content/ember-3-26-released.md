---
title: Ember 3.26 Released
authors:
  - isaac-lee
  - jared-galanis
date: 2021-04-12T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-3-x
---

Today the Ember project is releasing version 3.26 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 3.27 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.26

Ember.js 3.26 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 3.26 introduced 5 bug fixes. Here are a few notable ones:

1. The Ember router and the `router` service have been updated so that an infinite recursion does not occur when the `router` service is injected into `app/router.js`. ([#19405](https://github.com/emberjs/ember.js/pull/19405))
2. You can pass to an observer a dependent key whose name includes a colon. ([#19343](https://github.com/emberjs/ember.js/issues/19343))
3. The Glimmer VM has been updated to prevent eagerly consuming arguments during modifier destruction. ([#19469](https://github.com/emberjs/ember.js/pull/19469))

#### Features

Ember.js 3.26 introduced 0 features.

#### Deprecations

Ember.js 3.26 introduced several deprecations in preparation for v4.0 release. To learn more how to update your code, please check the provided link to the Deprecations Guide.

1. Transition methods of controllers and routes have been deprecated. Inject the `router` service and use the service's methods instead. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_routing-transition-methods), [#19255](https://github.com/emberjs/ember.js/pull/19255))
1. Invoking the `<LinkTo>` component with positional arguments has been deprecated. Please provide named arguments such as `@route`, `@model`, `@models`, and `@query`. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_ember-glimmer-link-to-positional-arguments), [#19345](https://github.com/emberjs/ember.js/pull/19345))
1. The `{{with}}` helper has been deprecated, in favor of using `{{let}}`. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_ember-glimmer-with-syntax), [#19346](https://github.com/emberjs/ember.js/pull/19346))
1. Implicit injection has been deprecated. In particular, the `store` service from Ember Data must be explicitly injected into controllers and routes if they refer to `this.store`. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_implicit-injections), [#19358](https://github.com/emberjs/ember.js/pull/19358))
1. Browser support of Internet Explorer 11 has been deprecated. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_3-0-browser-support-policy), [#19359](https://github.com/emberjs/ember.js/pull/19359))
1. Property fallback for implicit `this` has been deprecated. Please review the templates in your app and write `this.` when it is appropriate, e.g. change `{{localProperty}}` to `{{this.localProperty}}`. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_this-property-fallback), [#19371](https://github.com/emberjs/ember.js/pull/19371))
1. **Ember Classic has been deprecated.** ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_editions-classic), [#19372](https://github.com/emberjs/ember.js/pull/19372))

    In preparation for v4.0 release, developers are encouraged to update their app to Ember Octane by following these steps:

    - In `config/optional-features.json`, update the feature flags for Octane.

        ```json
        {
          "application-template-wrapper": false,
          "jquery-integration": false,
          "template-only-glimmer-components": true
        }
        ```

    - Specify the Octane edition in `package.json`.

        ```json
        {
          "ember": {
            "edition": "octane"
          }
        }
        ```

    - Check the [official upgrade guide](https://guides.emberjs.com/release/upgrading/current-edition/) and seek help in the `#help` channel on [Ember Discord](https://discord.gg/emberjs).

1. Component managers that use the `v3.4` capabilities should update to the most recent component capabilities available, which is currently `v3.13`. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_manager-capabilities-components-3-4), [#19373](https://github.com/emberjs/ember.js/pull/19373))
1. Modifier managers that use the `v3.13` capabilities should update to the most recent modifier capabilities available, which is currently `v3.22`. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_manager-capabilities-modifiers-3-13), [#19373](https://github.com/emberjs/ember.js/pull/19373))
1. The `{{hasBlock}}` and `{{hasBlockParams}}` properties have been deprecated. Use `{{has-block}}` and `{{has-block-params}}` helpers instead. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_has-block-and-has-block-params), [#19374](https://github.com/emberjs/ember.js/pull/19374))
1. Passing `classBinding` and `classNameBindings` as arguments has been deprecated. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_class-binding-and-class-name-bindings-in-templates), [#19375](https://github.com/emberjs/ember.js/pull/19375))
1. Accessing named arguments via `{{attrs}}` has been deprecated. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_attrs-arg-access), [#19375](https://github.com/emberjs/ember.js/pull/19375))
1. Array observers have been deprecated. ([Deprecations Guide](https://deprecations.emberjs.com/v3.x#toc_array-observers), [#19381](https://github.com/emberjs/ember.js/pull/19381))

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.26, please review the [Ember.js 3.26.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.26.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.26

#### Bug Fixes

Ember Data 3.26 introduced 0 bug fixes.

#### Features

Ember Data 3.26 introduced 0 features.

#### Deprecations

Ember Data 3.26 introduced 0 deprecations.

For more details on changes in Ember Data 3.26, please review the
[Ember Data 3.26.0 release page](https://github.com/emberjs/data/releases/tag/v3.26.0).

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

### Changes in Ember CLI 3.26

#### Bug Fixes

Ember CLI 3.26 introduced 2 bug fixes.

1. Issue a better error message for add-on's missing an entry point. ([#9473](https://github.com/ember-cli/ember-cli/pull/9473)); and
2. Add Prettier files to `.npmignore` file in addon blueprint ([#9437](https://github.com/ember-cli/ember-cli/pull/9437)).

#### Features

Ember CLI 3.26 introduced 1 feature.

1. `ember-try` test scenarios for `embroider-safe` and `embroider-optimized` for addons are now enabled using [@embroider/test-setup](https://github.com/embroider-build/embroider/tree/master/packages/test-setup) allowing Embroider compatibility testing for addons test matrix ([#9436](https://github.com/ember-cli/ember-cli/pull/9436)).

#### Deprecations

Ember CLI 3.26 introduced 0 deprecations.

For more details on the changes in Ember CLI 3.26 and detailed upgrade
instructions, please review the [Ember CLI 3.26.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.26.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
