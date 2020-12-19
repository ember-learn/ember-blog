---
title: Ember 3.14 Released (Octane Preview Cont.)
authors:
  - kenneth-larsen
  - dan-gebhardt
date: 2019-11-18T00:00:00.000Z
tags:
  - releases
  - '2019'
  - version-3-x
---


The Ember project has recently released version 3.14 of Ember.js, Ember Data, and Ember CLI. This kicks off the 3.15 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/builds/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## The Octane Preview, Continued

As described in the [Octane Release Update](/2019/10/31/octane-release-update.html), Octane will continue to be opt-in in Ember 3.14. By continuing the Octane preview period in 3.14, we are allowing more time for Octane to be polished before it becomes the default Ember experience.

Although Octane is still opt-in in 3.14, all Octane features are stable public APIs with our normal SemVer guarantees. If you build an app using APIs in the Octane preview, it will continue to work in future versions.

---

With the exception of an updated release of `@glimmer/component`, the steps to try out the Octane preview remain the same in 3.14 as they were in 3.13:

Add the following packages if they aren't already present at this version:

```js
npm install --save-dev @ember/edition-utils@^1.1.1
npm install --save-dev @glimmer/component@^1.0.0-beta.1
```

Disable legacy behavior by setting the following feature flags:

```bash
ember feature:enable template-only-glimmer-components
ember feature:disable application-template-wrapper
```

Specify the Octane edition in `.ember-cli.js` by adding the following lines to the beginning of the file:

```js
// .ember-cli.js
const { setEdition } = require("@ember/edition-utils");

setEdition("octane");
```

If you have an `.ember-cli` file instead of an `.ember-cli.js` file, you can convert it by renaming it to `.ember-cli.js`, then taking the existing JSON object and assigning it to `module.exports`. For example, if you have an `.ember-cli` file with:

```json
// .ember-cli
{
  "disableAnalytics": false
}
```

The equivalent `.ember-cli.js` file would be:

```js
// .ember-cli.js
module.exports = {
  disableAnalytics: false
};
```

If you need more information on how to migrate away from these legacy features, check out the [Octane release plan](/2019/08/15/octane-release-plan.html) blog post.

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.14

Ember.js 3.14 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There is one new feature, no deprecations, and several bugfixes in this version.

#### New Features (1)

**`@model` in Route Templates (1 of 1)**

Route templates can now access the route's model with `@model` in addition to `this.model`. By treating `@model` as an argument, route templates better parallel component templates. Furthermore, the concept of teaching a `this` context for templates can be delayed.

These motivations as well as the detailed design of this feature are described in [RFC 523](https://github.com/emberjs/rfcs/blob/master/text/0523-model-argument-for-route-templates.md).

A template such as the following can now be refactored from using `this.model`:

```hbs
{{!-- The model for this route is the current user --}}

<div>
  Hi <img src="{{this.model.profileImage}}" alt="{{this.model.name}}'s profile picture"> {{this.model.name}},
  this is a valid Ember template!
</div>

{{#if this.model.isAdmin}}
  <div>Remember, with great power comes great responsibility!</div>
{{/if}}
```

To use `@model`:

```hbs
{{!-- The model for this route is the current user --}}

<div>
  Hi <img src="{{@model.profileImage}}" alt="{{@model.name}}'s profile picture"> {{@model.name}},
  this is a valid Ember template!
</div>

{{#if @model.isAdmin}}
  <div>Remember, with great power comes great responsibility!</div>
{{/if}}
```

The guides will soon be updated to teach the `@model` form first-and-foremost.

#### Deprecations (0)

There are no new deprecations in Ember.js 3.14.

For more details on changes in Ember.js 3.14, please review the [Ember.js 3.14.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.14.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.14

Ember Data 3.14 contains a number of bugfixes, as well as some documentation
cleanup, performance improvements, and deprecations. Notable changes are
described below.

#### Relationship Fetching Performance

Releases of Ember Data since 3.4 contain significant performance regressions for
fetching relationship via `links`. Ember Data 3.14 addresses many of those
regressions, with performance improvements of roughly 3.5X in some cases as
compared with v3.13.

#### Deprecations (1)

**Default Adapters and Serializers (1 of 1)**

Ember Data 3.14 introduces deprecations for the default adapters and
serializers. The motivation for these deprecations is described in [RFC
522](https://github.com/emberjs/rfcs/pull/522):

> The adapter and serializer packages provide reference implementations and base
> classes that are not required for applications that implement their own
> following the required interfaces for adapters and serializers as defined in
> their respective base classes.  Deprecating them allows us to simplify the
> lookup pattern and remove automatic injection and registration of potentially
> unused classes.
>
> In addition to removing use of initializer injection, this takes a significant
> step toward simplifying the conceptual model for how to determine what
> adapter/serializer is in use. Removing the defaults forces app developers to
> be more cognizant about the type of application level concerns vs
> model-specific concerns; they will now need to explicitly define and use
> specific adapters/serializers.

For more details on changes in Ember Data 3.14, please review the
[Ember Data 3.14.0 release page](https://github.com/emberjs/data/releases/tag/v3.14.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI with ease by using the ember-cli-update project:

```bash
npm install -g ember-cli-update
ember-cli-update
```

This utility will help you to update your app or add-on to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the github README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.14

Ember CLI 3.14 contain some bugfixes, updates to blueprints, and one new deprecation.

#### "Classier" Blueprints

The blueprints for `ember new` and `ember addon` have been modernized to define an application's `Application` and `Router` as native ES classes (i.e. `class App extends Application { ... }` instead of `const App = Application.extend({ ... })`). Although both approaches are still valid and `EmberObject` is far from deprecated, this change improves the consistency and approachability of modern Ember applications.

#### Deprecations (1)

**`MODULE_UNIFICATION` flag (1 of 1)**

Ember CLI 3.14 contains a new deprecation for projects that use the `MODULE_UNIFICATION` flag. This flag has always required using canary versions of Ember and Ember CLI. Now that `ember-source` has turned off the feature completely, apps can no longer enable the feature at all.

---

For more details on the changes in Ember CLI 3.14 and detailed upgrade
instructions, please review the [Ember CLI 3.14.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.14.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
