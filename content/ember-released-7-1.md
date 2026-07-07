---
title: Ember 7.1 Released
authors:
  - jared-galanis
  - chris-manson
  - katie-gengler
date: 2026-07-03T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-7-x
---

<!-- alex ignore just -->

Today the Ember project is releasing version 7.1 of Ember.js and Ember CLI.

This release kicks off the 7.2 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time.

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 7.1

Ember.js 7.1 is an incremental, backwards compatible release of Ember with some new features.

#### Bug fixes

There are no noteworthy bugfixes in 7.1

In [#21468](https://github.com/emberjs/ember.js/pull/21468) We updated the API docs to use the template tag authoring format, where appropriate. 

#### Features

In 7.1, the implementation of many RFCs to make some helpers and modifiers become "built in" and not need to be imported in strict-mode templates (aka Template Tag authoring format). The following no longer need
to be imported:

- [#21068](https://github.com/emberjs/ember.js/pull/21068) The `{{on}}` modifier per [RFC# 997](https://rfcs.emberjs.com/id/0997-make-on-built-in).
- [#21299](https://github.com/emberjs/ember.js/pull/21299) The `{{fn}}` helper per [RFC #998](https://rfcs.emberjs.com/id/0998-make-fn-built-in).
- [#21334](https://github.com/emberjs/ember.js/pull/21334) The `{{hash}}` helper per [RFC# 999](https://rfcs.emberjs.com/id/0999-make-hash-built-in).
- [#21336](https://github.com/emberjs/ember.js/pull/21336) The `{{array}}` helper per [RFC#1000](https://rfcs.emberjs.com/id/1000-make-array-built-in).


The following are also now built in for strict-mode, but previously came from addons or polyfills:

- [#21230](https://github.com/emberjs/ember.js/pull/21230) / [#21343](https://github.com/emberjs/ember.js/pull/21343) The built-in `(element)`/ `{{element}}` helper and modifier for dynamic tag names per [RFC #389](https://rfcs.emberjs.com/id/0389-dynamic-tag-names).
- [#21337](https://github.com/emberjs/ember.js/pull/21337) `{{and}}`, `{{or}}`, `{{not}}` helpers per [RFC #562](https://rfcs.emberjs.com/id/0562-add-logical-operators/).
- [#21339](https://github.com/emberjs/ember.js/pull/21339) `{{eq}}` and `{{neq}}` helpers per [RFC #560](https://rfcs.emberjs.com/id/0560-add-equality-operators/).
- [#21342](https://github.com/emberjs/ember.js/pull/21342) `{{lt}}`, `{{lte}}`, `{{gt}}`, `{{gte}}` helpers per [RFC# 561](https://rfcs.emberjs.com/id/0561-add-numeric-comparison-operators).


For more details on changes in Ember.js 7.1, please review the [Ember.js 7.1.0 release page](https://github.com/emberjs/ember.js/releases/tag/v7.1.0-ember-source).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

### Changes in Ember CLI 7.1

Ember CLI changes for 7.1 were mostly dependency updates to both the blueprints and to the main package.

#### Bug fixes

- [#11028](https://github.com/ember-cli/ember-cli/pull/11028) A fix that allows blueprints to be authored in esm. This fix was backported to 7.0.1 as well. As of version 7.2, running blueprints from `ember-source` will require Ember CLI v7.0.1 or higher. 

For more details on the changes in Ember CLI 7.1 and detailed upgrade
instructions, please review the [Ember CLI 7.1.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v7.1.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
