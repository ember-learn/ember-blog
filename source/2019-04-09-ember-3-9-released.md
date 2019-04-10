---
title: Ember 3.9 Released
author: Kenneth Larsen
tags: Releases, 2019, 3, 3.9
responsive: true
---

Today the Ember project is releasing version 3.9 of Ember.js, Ember Data, and Ember CLI. This release kicks off the 3.10 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/builds/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

Additionally, versions 3.8 of Ember and Ember Data are now promoted to LTS, which stands for Long Term Support. An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS version for Ember was 3.4.

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.9
Ember.js 3.9 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There are zero (0) new features, four (4) deprecations, and eight (8) bugfixes in this version.

#### New Features (0)
No new features introduced in Ember.js 3.9.

#### Deprecations (4)

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.9, please review the [Ember.js 3.9.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.9.0).


**Computed Property Overridability (1 of 4)**

Ember's computed properties are overridable by default if no setter is defined. This behavior is bug prone and has been deprecated. `readOnly()`, the modifier that prevents this behavior, will be deprecated once overridability has been removed. Please have a look at [the deprecations app](https://emberjs.com/deprecations/v3.x#toc_computed-property-override) for more information on this deprecation.

**Computed Property `.property()` Modifier (2 of 4)**

`.property()` is a modifier that adds additional property dependencies to an existing computed property. To update, move the dependencies to the main computed property definition and you shouldn't see a deprecation warning any more. For more information please refer to [the deprecations app](https://emberjs.com/deprecations/v3.x#toc_computed-property-property).

**Computed Property Volatility (3 of 4)**

`.volatile()` is a computed property modifier which makes a computed property recalculate every time it is accessed, instead of caching. It also prevents property notifications from ever occuring on the property, which is generally not the behavior that developers are after. Volatile properties are usually used to simulate the behavior of native getters, which means that they would otherwise behave like normal properties.

To update, consider upgrading to native class syntax and using native getters directly instead. There's guide on how to do this in the [deprecations app](https://emberjs.com/deprecations/v3.x#toc_computed-property-volatile).

**Deprecate `@ember/object#aliasMethod` (4 of 4)**

`@ember/object#aliasMethod` is a little known and rarely used method that allows user's to add aliases to objects defined with EmberObject. The deprecation warning can be removed by refactoring it into having one function call the other directly. To see how to do this, please refer to the [deprecations app](https://emberjs.com/deprecations/v3.x#toc_object-alias-method)

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.9

#### New Features (1)

Replace jQuery with `fetch` (1 of 1)

As part of [the RFC for removing jQuery by default](https://github.com/emberjs/rfcs/pull/0386), Ember Data has now replaced all internal uses of jQuery and replaced it with `fetch` instead.

You can follow the [progress of the RFC](https://github.com/emberjs/rfc-tracking/issues/3) on the RFC-tracking page.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.9.


For more details on changes in Ember Data 3.9, please review the
[Ember Data 3.9.0 release page](https://github.com/emberjs/data/releases/tag/v3.9.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npm install -g ember-cli-update
ember-cli-update
```

This utility will help you to update your app or add-on to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the github README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.9

There are two (2) new features and one (1) bugfix.

#### New Features (2)

**`ember-welcome-page` updated to use angle bracket invocation syntax (1 of 2)**

The welcome page that is generated in new Ember apps is now converted to use the angle bracket invocation syntax. This means that instead of adding `{{welcome-page}}` to `application.hbs` we now add `<WelcomePage />`.

**Support for Node 11 (2 of 2)**

Ember CLI is now tested against Node 11. If developers use it for their apps and addons, the CLI will not show a warning anymore.

#### Bugfixes (1)

**Module unification blueprint updates (1 of 1)**

The MU blueprints were not enabling the `EMBER_MODULE_UNIFICATION` Ember Feature Flag due to flag capitalization variations. This has been fixed.

#### Deprecations (0)

No new deprecations introduced in Ember CLI 3.9.

---

For more details on the changes in Ember CLI 3.9 and detailed upgrade
instructions, please review the [Ember CLI  3.9.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.9.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
