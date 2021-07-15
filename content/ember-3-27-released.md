---
title: Ember 3.27 Released
authors:
  - matthew-beale
  - ricardo-mendes
date: 2021-07-03T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-3-x
---

Today the Ember project is announcing release 3.27 of Ember.js, Ember Data, and Ember CLI. This is a minor version, stable release.

We're also announcing the start of the 3.28 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test beta builds and report any bugs before they are published as a stable release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

Ember.js 3.28 (again, starting **beta** today) is the final planned version of the 3.x release cycle, and will
become an LTS release. As of the 3.28-beta being released, the main development
branch of all Ember projects will become 4.0. Look for more information on Ember
4.0 here on the blog this coming week.

<!-- READMORE -->

You can read more about our general release process with these resources:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.27

Ember.js 3.27 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and deprecations.
For a full set of changes see [`CHANGELOG.md`](https://github.com/emberjs/ember.js/blob/master/CHANGELOG.md#v3275-june-10-2021).

### Notable Bug Fixes

- Prior to 3.27 `<:inverse>` would not always alias else blocks. This is
corrected in [glimmerjs/glimmer-vm#1296](https://github.com/glimmerjs/glimmer-vm/pull/1296).
- Ember.js 3.27.0 was released in early May and included several regressions.
These were largely related to the changes in the glimmer VM and and the
implementation of several deprecations, and have been corrected in patch
releases leading up to 3.27.5.

### Feature Additions

#### Contextual Helpers & Modifiers

For several years Ember has provided a mechanism called "contextual components".
This API allows a developer to yield a component, optionally with arguments
to apply, into a block.

In [RFC #432](https://github.com/emberjs/rfcs/blob/master/text/0432-contextual-helpers.md)
additional APIs were proposed which allow helpers and modifiers to be used in
the same way.

For example the layout for a `SuperForm` component might be implemented as:

```handlebars
// app/components/super-form.hbs
<form>
  {{yield (hash

    Input=(component "super-input" form=this model=this.model)
    Textarea=(component "super-textarea" form=this model=this.model)
    Submit=(component "super-submit" form=this model=this.model)

    is-valid=(helper "super-is-valid" form=this model=this.model)
    error-for=(helper "super-error-for" form=this model=this.model)

    auto-resize=(modifier "super-auto-resize")

  )}}
</form>
```

And be used as:

```handlebars
// app/templates/index.hbs
<SuperForm @model={{this.post}} as |f|>

  {{! Invoke a contextual component }}
  <f.Input @name="title" />

  {{! Invoke contextual helpers }}
  {{#unless (f.is-valid "title")}}
    <div class="error">This field {{f.error-for "title"}}</div>
  {{/unless}}

  {{! Invoke a contextual modifier on a contextual component invocation }}
  <f.Textarea @name="body" {{f.auto-resize maxHeight="500"}} />

  <f.Submit />
</SuperForm>
```

These APIs open the doors for the creation of new, more powerful UI abstractions.

### Deprecations

Ember 3.27 introduces the final set of deprecations targeting Ember 4.0. The
newly introduced deprecations primarily impact uncommonly used APIs. As always,
deprecated APIs are documented with a transition path in the [deprecation
guides](https://deprecations.emberjs.com/v3.x).

Several notable deprecations added in 3.27 are:

#### Invoking Helpers Without Arguments and Parentheses in Named Argument Positions

In some templates, a helper passed as an argument can be treated as an
invocation instead of passing the uninvoked helper as a value. For example:

```handlebars
{{! is someHelper invoked, or passed as a reference? }}
<SomeComponent @arg={{someHelper}} />
```

To better align helpers with how component and modifiers behave in the same
setting, parenthesis are now required to cause an invocation:

```handlebars
{{! (someHelper) is clearly an invocation with no arguments }}
<SomeComponent @arg={{(someHelper)}} />
```

The non-param version of helper passing will pass a reference to the helper
in Ember 4.0. See the [deprecation guide
entry](https://deprecations.emberjs.com/v3.x#toc_argument-less-helper-paren-less-invocation)
for more details.

#### Importing Legacy Built-in Components

Historically, Ember applications have been able to import the base classes which
define `<Input>`, `<Textarea>`, and `<LinkTo>` for reopening or subclassing. In
Ember 4.0, we intend to improve the internal implementation of those built-ins.
To allow this, we've been steadily deprecating parts of the built-in APIs
throughout the 3.x release series.

In 3.27, importing a the base classes of Ember built-ins is deprecated. In Ember
4.0 these modules will be unavailable. The specific deprecated imports are:

```js
import Checkbox from '@ember/component/checkbox';
import Textarea from '@ember/component/text-area';
import TextField from '@ember/component/text-field';
import LinkToComponent from '@ember/routing/link-component';
```

Accessing these classes through other paths, like the owner interface, is also
deprecated.

See the [deprecation guide
entry](https://deprecations.emberjs.com/v3.x#toc_ember-built-in-components-import)
for more details and guidance on migrating away from these APIs.

Additionally, reopening these classes (for example to change the `tagName` on a
`<LinkTo>`) has been deprecated and will be unsupported in 4.0. See [the
deprecation guide for migration strategies](https://deprecations.emberjs.com/v3.x/#toc_ember-built-in-components-reopen).

#### Deprecate Legacy Arguments to Built-ins

Ember's built-in components had a public interface largely defined by their
implementation as classic Ember components. In order to refactor these built-ins
to more modern implementations and improve their interfaces, large parts of
their API is deprecated in 3.27.

These deprecations break down into two sections. First, there are arguments
which are essentially setting HTML attributes or dealing with events. See [this
guide entry on legacy attribute
arguments](https://deprecations.emberjs.com/v3.x/#toc_ember-built-in-components-legacy-attribute-arguments)
for a detailed list of deprecated arguments and migration paths.

Second, there is a set of arguments which were effectively leaks of the private
implementation, or which no longer have a clear meaning (or usefulness) in modern
application development. See [this guide entry on legacy arguments](https://deprecations.emberjs.com/v3.x/#toc_ember-built-in-components-legacy-arguments) for a detailed list and migration paths.

#### Deprecate the Ember Global

Ember has long set a property on the `window` or `globalThis` global so that
it can be accessed via `window.Ember`, for example. This approach to using Ember
is incompatible with static analysis tools that can result in more optimized
application payloads.

In Ember 3.27, accessing the `Ember` object via a non-module-import is
deprecated. Support for using Ember this way will be removed in Ember 4.0.

Instead, applications should adopt the Ember module API. This means importing
either the `Ember` object or a specific API from the module API:

```js
// Bad, deprecated
export default Ember.Component.extend({});
```

```js
// Better
import Ember from 'ember';
export default Ember.Component.extend({});
```

```js
// Best
import Component from '@ember/component';
export default Component.extend({});
```

See [the deprecation
guide](https://deprecations.emberjs.com/v3.x/#toc_ember-global) and [RFC 706](https://github.com/emberjs/rfcs/blob/master/text/0706-deprecate-ember-global.md)
for more details and transition paths for other use cases.

### Further Information On Upgrade Timelines

For application maintainers who want to upgrade apps to Ember.js 4.0 on its release date, the list of
deprecations in this release means their challenge is now well defined.
Application maintainers should consider using the
[ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow)
addon to address deprecations incrementally after upgrading to 3.27.
ember-cli-deprecation-workflow 2.0 was released *today* in preperation for
applications addressing Ember 3.x deprecations. Give us feedback in the issues
on that repo.

For app maintainers who are in less of a hurry, **please note that the upcoming
release of Ember.js 3.28
will contain no new deprecations targeting Ember.js 4.0**. Additionally, Ember.js
3.28 will be promoted to LTS on the same day Ember.js 4.0 is released.

We recommend that applications using LTS releases wait for the first LTS of
Ember.js 4.x to upgrade, which will be Ember.js 4.4. Ember's 6 week release
cycle means we expect there is about 44 weeks (from today) for apps upgrading from LTS-to-LTS
to address 4.0-targeted deprecations before Ember.js 4.4-LTS is made available.

For more details on changes in Ember.js 3.27, please review the [Ember.js 3.27.5 release page](https://github.com/emberjs/ember.js/blob/master/CHANGELOG.md#v3275-june-10-2021).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.
Ember Data's 3.27 release largely consists of compatability work with Ember.js.

For more details on changes in Ember Data 3.27, please review the
[Ember Data 3.27.0 release page](https://github.com/emberjs/data/releases/tag/v3.27.0).

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

### Changes in Ember CLI 3.27

Ember CLI 3.27 introduces a flag for enabling Embroider (Ember CLI's new build
pipeline) for new applications and addons. For example:

```bash
ember new my-app --embroider
```

Learn more about what Embroider offers and how to best configure it on the
[embroider-build/embroider](https://github.com/embroider-build/embroider) repo.

For more details on changes and bugfixes in Ember CLI 3.27, see the [Ember 3.27.0
changelog](https://github.com/ember-cli/ember-cli/blob/v3.27.0/CHANGELOG.md#v3270)
and [Ember CLI 3.27.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.27.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
