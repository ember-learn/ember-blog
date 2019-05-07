---
title: Ember 3.10 Released
author: Kenneth Larsen, Jessica Jordan
tags: Releases, 2019, 3, 3.10
responsive: true
---

Today the Ember project is releasing version 3.10 of Ember.js, Ember Data, and Ember CLI. This release kicks off the 3.11 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/builds/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.10
Ember.js 3.10 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There are four (4) new features, COUNT (#) deprecations, and COUNT (#) bugfixes in this version.

#### New Features (2)

**Angle Bracket Invocation for Nested Components (1 of 4)**

From Ember 3.10 onwards you can use **angle bracket invocation syntax** for **nested** components. Nested components are components which are defined in a nested directory structure of your application.

For example, if you had a component nested in your `app/` directory as follows:

```bash
- app/
 |-- components/
    |-- blog/
        |-- post-item.js
 |-- templates/
    |-- components/
        |-- blog/
            |-- post-item.hbs
```

you had to invoke the component in your template using the classic curly invocation syntax up until Ember 3.9. You can do so as follows:


```hbs
{{! simple invocation }}
{{blog/post-item}}

{{! invocation with block }}
{{#blog/post-item}}
  <span>block example</span>
{{/blog/post-item}}
```

With Ember 3.10 you can alternatively invoke the same, nested component in your template with angle bracket invocation syntax:

```hbs
{{! simple invocation }}
<Blog::PostItem />

{{! invocation with block }}
<Blog::PostItem>
  <span>block example</span>
</Blog::PostItem>
```

Use the `::` separator in the component's tag name to separate directory names and component title as seen in the example above.

This feature has no impact on the way components are looked up on the container of your application. If e.g. you want to lookup the factory of a component using the [owner API](https://api.emberjs.com/ember/3.10/functions/@ember%2Fapplication/getOwner), you can continue using the traditional syntax (`component:blog/post-item`).

You can read more about this feature in the [original Request for Comments (RFC)](https://emberjs.github.io/rfcs/0457-nested-lookups.html).


**Angle Bracket Invocation for Built-In Components (2 of 4)**

With Ember 3.10+ you can use **angle bracket invocation syntax** for the **three built-in components** that Ember itself provides to your application automatically: `input`, `link-to` and `textarea`. This version of Ember aligns the API of these built-ins with the requirements of the angle bracket invocation syntax.

Previously, you were only able to invoke built-ins in your template using the classic, curly braces syntax:

```hbs
{{input type="text" value="Katie Gengler"}}

{{link-to "photos.edit" photo}}

{{textarea value=postComment cols="20" rows="6"}}
```

With Ember 3.10 and higher, you may alternatively use the angle bracket invocation syntax as follows:

```hbs
<Input @type="text" @value="Katie Gengler" />

{{! link-to with a single model }}
<LinkTo @route="photos.edit" @model={{photo}} />

{{! link-to with several models }}
<LinkTo @route="photos.edit" @models={{array photo anotherPhoto}} />

<Textarea @value={{this.postComment}} @cols="20" @rows="6" />
```

You can read more about the API of built-in components when used with angle bracket invocation syntax in [the original RFC](https://emberjs.github.io/rfcs/0459-angle-bracket-built-in-components.html).

Third new feature (3 of 4)

Fourth new feature (4 of 4)


#### Deprecations (1)

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.10, please review the [Ember.js 3.10.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.10.0).

Application Controller Router Properties (1 of 1)

`ApplicationController#currentPath` and `ApplicationController#currentRouteName` are deprecated in Ember.js 3.10. They are no longer needed since the `RouterService` now has `RouterService#currentPath` and `RouterService#currentRouteName`.

If you still rely on these deprecated APIs then please have a look at the [deprecation app](https://deprecations.emberjs.com/v3.x#toc_application-controller-router-properties) to see how you can get the same functionality from the `Router` service.

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.10

#### New Features (0)

No new features introduced in Ember Data 3.10.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.10.


For more details on changes in Ember Data 3.10, please review the
[Ember Data 3.10.0 release page](https://github.com/emberjs/data/releases/tag/v3.10.0).

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

### Changes in Ember CLI 3.10

#### New Features (X)


#### Deprecations (X)

---

For more details on the changes in Ember CLI 3.10 and detailed upgrade
instructions, please review the [Ember CLI  3.10.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.10.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
