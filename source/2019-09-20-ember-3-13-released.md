---
title: Ember 3.13 Released
author: Kenneth Larsen
tags: Releases, 2019, 3, 3.13
responsive: true
---

Today the Ember project is releasing version 3.13 of Ember.js, Ember Data, and Ember CLI. 

Additionally, versions 3.12 of Ember and Ember Data are now promoted to LTS, which stands for Long Term Support. An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS versions for Ember and Ember Data were 3.4.

If you are upgrading from the previous LTS version to 3.12 then you are getting access to these features:

[3.6](https://blog.emberjs.com/2018/12/13/ember-3-6-released.html)
* `router` service 
* Support for native classes

[3.8](https://blog.emberjs.com/2019/02/27/ember-3-8-released.html)
* The array helper
* Element Modifier Manager

[3.10](https://blog.emberjs.com/2019/05/21/ember-3-10-released.html)
* Nested angle bracket component invocation
* Angle bracket invocation for built-in components
* Support for native decorators

[3.11](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html)
* Forwarding Element Modifiers with `...attributes`
* The `{{fn}}` and `{{on}}` modifiers

This release kicks off the 3.14 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/builds/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.13

Ember.js 3.13 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There is five (5) new features, one (1) deprecation, and several bugfixes in this version.

#### New Features (5)

**Tracked Properties and Tracked Property Updates (1 of 5)**

Tracked properties introduce a simpler and more ergonomic system for tracking state change in Ember applications. By taking advantage of new JavaScript features, tracked properties allow Ember to reduce its API surface area while producing code that is both more intuitive and less error-prone.

During the Ember Octane preview period we encountered some issues with the current design for Tracked Properties that was proposed and accepted in [RFC 410](https://github.com/emberjs/rfcs/blob/master/text/0410-tracked-properties.md). The primary issues were specifically around interop between tracked properties, computed properties, and autotracking, with a few extra issues and inconsistencies surrounding these.

With Ember.js 3.13 you now use this improved version of tracked properties. Have a look at the [guides] or [RFC 410](https://github.com/emberjs/rfcs/blob/master/text/0410-tracked-properties.md) to learn more about tracked properties. You can also have a look at [RFC 478](https://github.com/emberjs/rfcs/blob/master/text/0478-tracked-properties-updates.md) to see what the tracked properties update is about.

**Component Templates Co-location (2 of 5)**

With component templates co-location it is now possible to place a component's JavaScript file and it's template in the same directory on the file system.

[The RFC](https://github.com/emberjs/rfcs/blob/master/text/0481-component-templates-co-location.md) contains a detailed explanaition for this feature.

**Add `updateHook` component-manager capability (3 of 5)**

There is a new capability for component managers which allows you to opt-in or opt-out of whether to have an `updateComponent` hook on your component manager.

If you're not an addon author or maintain a component manager then chances are that you will not need use this new feature.

**Component-class generator (4 of 5)**

When generating a component using `ember generate component modal` it will now by default use the `--no-component-class` flag. This means that when you generate a component it will only generate the template file and the test file.

If you want a component class file when generating the component you can use the `--with-component-class` flag.

**Detect the edition that is in use (5 of 5)**

It is now possible to use `@ember/edition-utils` to detect which edition is currently in use.

```js
import { has } from '@ember/edition-utils'

let isOctane = has('octane');
```

#### Deprecations (1)

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.13, please review the [Ember.js 3.13.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.13.0).

**Deprecate support for mouseEnter/Leave/Move Ember events (1 of 1)**

Ember.js 3.13 deprecates support for `mouseEnter`, `mouseLeave` and `mouseMove` Ember events. [The deprecation guide](https://deprecations.emberjs.com/v3.x#toc_action-mouseenter-leave-move) contains guidance on how to migrate away from this.

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

#### New Features (X)

#### Deprecations (X)

---

For more details on the changes in Ember CLI 3.13 and detailed upgrade
instructions, please review the [Ember CLI  3.13.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.13.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
