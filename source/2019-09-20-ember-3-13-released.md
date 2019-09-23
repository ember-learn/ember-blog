---
title: Ember 3.13 Released (Octane Preview)
author: Kenneth Larsen, Tom Dale, Yehuda Katz
tags: Releases, 2019, 3, 3.13, Version 3.x
responsive: true
---

Today, the Ember project is releasing version 3.13 of Ember.js, Ember Data, and Ember CLI.

Ember 3.13 is the final release of Ember before Octane. Ember 3.13 is also the Octane preview. The preview allows adventurous community members to help us put the final round of polish on the edition before Octane becomes official in 3.14.

Additionally, version 3.12 of Ember is now promoted to LTS (Long Term Support). An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS version of Ember was 3.8.

## The Octane Preview

The Octane features in 3.13 are stable public APIs with our normal SemVer guarantees. If you build an app using APIs in the Octane preview, it will continue to work in future versions.

So why is this a preview and not the final Octane release?

While these APIs are stable, not all Octane features are compatible with popular addons yet. We are also still updating documentation, and important tools like the Ember Inspector do not yet work with some Octane features.

In Ember 3.14, Octane will be the recommended way to use Ember and new apps will have Octane's optional features enabled by default. The [guides](https://octane-guides-preview.emberjs.com/release/) and [tutorial](https://octane-guides-preview.emberjs.com/release/tutorial/00-part-1/) will show Octane examples, and codemods will be available to help users migrate to Octane.

---

You can try out the Octane preview by disabling legacy behavior and specifying the Octane edition in `.ember-cli.js`.

```bash
ember feature:disable jquery-integration
ember feature:enable template-only-glimmer-components
ember feature:disable application-template-wrapper
```

If you need more information on how to migrate away from these legacy features, check out the [Octane release plan](https://blog.emberjs.com/2019/08/15/octane-release-plan.html) blog post.

To opt in to the Octane preview, add the following lines to the beginning of `.ember-cli.js`.

```js
// .ember-cli.js
const { setEdition } = require('@ember/edition-utils');

setEdition('octane');
```

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.13

Ember.js 3.13 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There are five (5) new features, one (1) deprecation, and several bugfixes in this version.

#### New Features (5)

**Tracked Properties and Tracked Property Updates (1 of 5)**

Tracked properties introduce a simpler and more ergonomic system for tracking state change in Ember applications. Tracked properties allow Ember to reduce its API surface area while producing code that is both more intuitive and less error-prone.

Have a look at the [guides] to learn more about tracked properties. For design details, check out [RFC 410](https://github.com/emberjs/rfcs/blob/master/text/0410-tracked-properties.md) and [RFC 478](https://github.com/emberjs/rfcs/blob/master/text/0478-tracked-properties-updates.md).

**Component Templates Co-location: Part One (2 of 5)**

Component co-location is available in Ember 3.13 when the Octane preview is enabled. This feature allows you to group a component's template and JavaScript files together in the file system. For example, a component named `user-profile` would be made up of the following files:

```bash
app
└── components
    ├── user-profile.hbs
    └── user-profile.js
```

In 3.13, this feature is not available unless you enable the Octane preview. However, we expect to enable it for all apps in the next release once a [performance issue](https://github.com/ember-cli/ember-cli-htmlbars/issues/290) is addressed.

[The RFC](https://github.com/emberjs/rfcs/blob/master/text/0481-component-templates-co-location.md) contains a detailed explanation of the design of this feature.

**`component-class` generator (3 of 5)**

With the Octane preview enabled, a component generated using `ember generate component <component name>` will no longer include a component class by default.

In cases where you need a component class file, you can either pass the `--with-component-class` flag to the `component` generator, or add one after the fact with the new `ember generate component-class <component name>` generator.

**Detect the edition that is in use (4 of 5)**

For addon authors, it is now possible to detect which edition is in use at build-time with `@ember/edition-utils`.

```js
import { has } from '@ember/edition-utils';

let isOctane = has('octane');
```

**Add `updateHook` component-manager capability (5 of 5)**

There is a new capability for component managers which allows you to opt-in or opt-out of whether to have an `updateComponent` hook on your component manager.

If you're not an addon author or maintain a component manager, then you are unlikely to need use this new feature.

#### Deprecations (1)

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.13, please review the [Ember.js 3.13.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.13.0).

**Deprecate support for mouseEnter/Leave/Move Ember events (1 of 1)**

Ember.js 3.13 deprecates support for `mouseEnter`, `mouseLeave` and `mouseMove` Ember events. [The deprecation guide](https://deprecations.emberjs.com/v3.x#toc_action-mouseenter-leave-move) contains guidance on how to migrate away from these events.

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.13

#### New Features (0)

No new features introduced in Ember Data 3.13.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.13.

For more details on changes in Ember Data 3.13, please review the
[Ember Data 3.13.0 release page](https://github.com/emberjs/data/releases/tag/v3.13.0).

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

### Changes in Ember CLI 3.13

No new features in Ember CLI 3.13.

---

For more details on the changes in Ember CLI 3.13 and detailed upgrade
instructions, please review the [Ember CLI  3.13.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.13.0).

## Ember 3.12 is an LTS Release

If you are upgrading from the previous LTS version (3.8) to 3.12 then you are getting access to these features:

* `router` service 
* Support for native classes
* The `array` helper
* Element Modifier Manager (and modifiers in general)
* Nested angle bracket component invocation
* Angle bracket invocation for built-in components
* Support for native decorators
* The `{{fn}}` and `{{on}}` modifiers

## 3.14 Beta

This release kicks off the 3.14 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

Among other things, the [`@model` named argument](https://github.com/emberjs/rfcs/blob/master/text/0523-model-argument-for-route-templates.md) will be available to route templates. While not officially an "Octane feature", this feature will available for the first time in the 3.14 release, which coincides with the Octane release. Since the Octane guides and documentation are targeting the same version, you will see them using this feature, but please not that the feature is not available in the 3.13 Octane preview.

This beta release also included a new [debug render tree API](https://github.com/emberjs/ember.js/pull/18372), which will be integrated into the Ember Inspector sometime during the beta cycle to give it full Octane support.
You can read more about our general release process here:

* [Release Dashboard](http://emberjs.com/builds/)
* [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
* [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
* [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without the continued efforts of everyone in the community. We are extremely grateful to our contributors for their efforts.
