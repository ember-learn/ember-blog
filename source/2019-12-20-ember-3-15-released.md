---
title: Ember 3.15 "Octane" Released
author: Kenneth Larsen, Matthew Beale, Melanie Sumner
tags: Releases, 2019, 3, 3.15, Version 3.x
alias: 2019-12-20-ember-3-15-released.md
responsive: true
date: "2019-12-20 16:30:00 -0500"
---

Today the Ember project is releasing version 3.15 of Ember.js, Ember Data, and
Ember CLI. In addition to brining new features and bug fixes, Ember 3.15 also marks the official release of the [Octane edition](TODO://link-to-octane-blog-post), which is Ember's first [edition release](https://emberjs.com/editions/).

<!--alex ignore just-->
Ember developers using the Octane edition can exercise modern features like native ES
classes, decorators, the new Glimmer component API, and a new approach to state
management called tracked properties. Combined, these innovative changes to
Ember are more than just new tools and APIs. Octane's features, together,
sum up to a paradigm shift in how Ember applications are built.

READMORE

<!--alex ignore nuts-->
**Read more about how Octane makes web application development fun and
productive in 
[Octane is Here](https://blog.emberjs.com/2019/12/20/octane-is-here.html), a blog post from Yehuda.**

...and then explore our completely updated and refreshed guide and API
documentation:

* Check out the completely rewritten [core concepts section](https://guides.emberjs.com/release/components/) in the guides.
* Read the [completely updated Super Rentals tutorial](https://guides.emberjs.com/release/tutorial/).
* Already using Ember and want to adopt Octane? See the [Octane Upgrade
  Guide](https://guides.emberjs.com/release/upgrading/current-edition/) for the most complete
  documentation.

In addition to the Octane release, today you can also find version 3.16-beta.1
released for Ember.js, Ember Data, and Ember CLI. As always we encourage our
community (especially addon authors) to help test these beta builds and report
any bugs before they are published as a final release in six weeks' time.

You can read more about Ember's general release process at the [Release Dashboard](http://emberjs.com/builds/).

---

## Other Changes in Ember.js 3.15

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

There were three deprecations in ember.js v3.15.0.

### Deprecate `Component#isVisible` (1 of 3)

Classic Ember components support using the `isVisible` property to toggle the
visibility of a component's root element. This API was very common in early
Ember 1.x applications but is rare today. In practice use of template bindings
has supplanted use of the `isVisible` API.

`isVisible` is deprecated as of Ember 3.15. 

To transition away from this, we recommend using conditionals in a template:

```handlebars
{{#if this.showComponent}}
  <MyComponent />
{{/if}}

{{! or }}
<div hidden={{this.isHidden}}></div>

```

See the [deprecation guide for
`isVisible`](https://deprecations.emberjs.com/v3.x#toc_ember-component-is-visible)
for more information.

### Deprecate `{{partial}}` (2 of 3)

As of the introduction of [template-only
components](https://api.emberjs.com/ember/3.15/classes/Component)
and [Glimmer
components](https://api.emberjs.com/ember/3.15/modules/@glimmer%2Fcomponent),
as well as of the
[template-only-glimmer-components](https://guides.emberjs.com/release/configuring-ember/optional-features/#toc_template-only-glimmer-components)
optional feature the `{{partial}}` API in Ember no longer provides any unique
benefits. Instead it has several downsides including difficult to teach scoping 
rules and poor performance.

See the [deprecation guide for
`{{partial}}`](https://deprecations.emberjs.com/v3.x#toc_ember-partial) for
an example of how to migration existing use to component APIs.

### Deprecate intimate `window.ENV` API (3 of 3)

Ember applications long ago shifted to using `window.EmberENV` as the home of
various configuration options. As of 3.15 application code which uses `window.ENV`
for Ember configuration values will cause a deprecation warning to be issued.
Support for this intimate API will be removed in 3.17.0.

See [emberjs/ember.js#18441](https://github.com/emberjs/ember.js/pull/18441)
for more details about this deprecation.

For more details on changes in Ember.js 3.15, please review the [Ember.js 3.15.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.15.0).

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

There were two new features and no deprecations for EmberData v.3.15.0.

### Identifiers (1 of 2)

Identifiers provides infrastructure for handling identity within ember-data to satisfy
requirements around improved caching, serializability, replication, and handling of
remote data.

For more information read [RFC-403 Identifiers](https://github.com/emberjs/rfcs/blob/master/text/0403-ember-data-identifiers.md).

### Inspector Support is now optional in production (2 of 2)

EmberData ships with a `DataAdapter` which provides the necessary support for
the data panel in the [Ember Inspector](https://github.com/emberjs/ember-inspector).

This package adds roughly .6 KB when minified and compressed to your application
in production; however, you can now opt out of shipping this addon in production
via options in `ember-cli-build.js`
  
```js
let app = new EmberApp(defaults, {
  emberData: {
    includeDataAdapterInProduction: false
  }
});
```

When using `ember-data` as a dependency of your app, the default is to ship the
inspector support to production.

When not using `ember-data` as a dependency but instead using EmberData via
declaring specific `@ember-data/<package>` dependencies the default is to not
ship to production.

For additional details on changes in Ember Data 3.15.0, please review the full
[Ember Data 3.15.0 change log](https://github.com/emberjs/data/blob/release/CHANGELOG.md#release-3150-december-18-2019).

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

There were some noteworthy changes in `ember-cli` to support the release of the Octane edition of Ember. The `@glimmer/component@1.0.0` package was added as a dev dependency for both apps and addons, Octane-related optional features were enabled, `ember-template-lint` was updated to use the `octane` edition preset, and all packages were updated to their latest version in the application blueprint! 

The new addon blueprint also dropped the Ember 3.4 ember-try scenario, but dropping support for existing addons should be considered a breaking change. Existing addons should either keep the scenario, or do a major version bump if they drop support for older Ember versions.

For additional details on the changes in Ember CLI 3.15.0 and detailed upgrade
instructions, please review the [Ember CLI 3.15.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.15.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
