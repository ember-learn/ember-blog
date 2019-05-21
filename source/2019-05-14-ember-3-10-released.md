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
Ember.js 3.10 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There are four (4) new features, one (1) deprecations, and seventeen (17) bugfixes in this version.

#### New Features (4)

**Angle Bracket Invocation for Nested Components (1 of 4)**

From Ember 3.10 onwards you can use **angle bracket invocation syntax** for **nested** components. Nested components are components which are defined in a nested directory structure of your application.

For example, if you had a component nested in your `app/` directory as follows:

```bash
-- app/
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

This feature has no impact on the way components are looked up on the container of your application. If e.g. you want to lookup the factory of a component using the [owner API](https://api.emberjs.com/ember/release/functions/@ember%2Fapplication/getOwner), you can continue using the traditional syntax (`component:blog/post-item`).

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

**RouteInfo Metadata (3 of 4)**

An Ember application provides information about routes via the `RouteInfo` object. For example, the [`Transition`](https://api.emberjs.com/ember/release/classes/Transition) object that is provided to [event listeners for route changes](https://api.emberjs.com/ember/release/classes/RouterService/events/routeDidChange) provides a `from` and `to` property representing a `RouteInfo` object. These provide information about the former and the entry route.

<!--alex ignore savage-->
With the new `RouteInfo` Metadata feature released in Ember 3.10 you can bind **application-specific information** to `RouteInfo` objects. Despite being a low-level primitive, this new API is not only useful for addon authors, but also for Ember application developers in general.

The `RouteInfo` Metadata feature adds a `buildRouteInfoMetadata` method to the [Route API](https://api.emberjs.com/ember/release/classes/Route) whose return value will be added to the respective `RouteInfo` object as a `metadata` property.

If, for example, you wanted to track a user's details together with a tracking event for visiting the profile page, you could leverage the `RouteInfo`'s metadata as follows:

```js
// app/route/profile.js
import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  user: inject('user'),
  buildRouteInfoMetadata() {
    return {
      trackingKey: 'page_profile',
      user: {
        id: this.user.id,
        type: this.user.type
      }
    }
  }
  // ...
});
```

```js
// app/services/analytics.js
import Service, { inject } from '@ember/service';

export default Service.extend({
  router: inject('router'),
  init() {
    this._super(...arguments);
    this.router.on('routeDidUpdate', (transition) => {
      let { to, from } = transition;
      let fromMeta = from.metadata;
      let toMeta = to.metadata;
      ga.sendEvent('pageView', {
        from: fromMeta,
        to: toMeta,
        timestamp: Date.now(),
      })
    })
  },
  // ...
});
```

We encourage you to give [the original RFC a read](https://emberjs.github.io/rfcs/0398-RouteInfo-Metadata.html) for more details about the API and other interesting use cases for `RouteInfo` metadata in your application.

**Native Decorator Support (4 of 4)**

With Ember.js 3.10 you get the possibility to use native decorators in your application. To learn how to get started using native decorators, have a look at the [original RFC](https://emberjs.github.io/rfcs/0440-decorator-support.html).

#### Deprecations (1)

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.10, please review the [Ember.js 3.10.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.10.0).

**Application Controller Router Properties (1 of 1)**

`ApplicationController#currentPath` and `ApplicationController#currentRouteName` are deprecated in Ember.js 3.10. They are no longer needed since the `RouterService` now has `RouterService#currentPath` and `RouterService#currentRouteName`.

If you still rely on these deprecated APIs then please have a look at the [deprecation app](https://deprecations.emberjs.com/v3.x#toc_application-controller-router-properties) to see how you can get the same functionality from the `Router` service.

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

There are no changes in 3.10. It is a re-release of
[3.9.3](https://github.com/emberjs/data/releases/tag/v3.9.3)
to allow for an extended stabilization period for the
[Packages RFC](https://emberjs.github.io/rfcs/0395-ember-data-packages.html).
You can follow along with the remaining packages work
[here](https://github.com/emberjs/data/labels/TRACK-packages).

This information is also available on the
[Ember Data 3.10.0 release page](https://github.com/emberjs/data/releases/tag/v3.10.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.
3.10.0 had a small bug with blueprints that caused CI trouble for some platforms, which is fixed by a patch in version 3.10.1.

### Upgrading Ember CLI

You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npm install -g ember-cli-update
ember-cli-update
```

This utility will help you to update your app or add-on to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the github README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.10

#### New Features (2)

**Native Decorator Support (1 of 2)**

As with Ember.js, Ember CLI now supports native decorators.

**Drop Node 6 support (2 of 2)**

Ember CLI 3.10 officially drops support for Node 6. Ember.js still supports it until all the blueprints are updated.
Maintainers of addons are encouraged to make a _major version_ release of their addons when upgrading to 3.10, since dropping Node 6 support may be a breaking change for some of their library's users.

#### Deprecations (0)

There are no deprecations in Ember CLI 3.10.

---

For more details on the changes in Ember CLI 3.10 and detailed upgrade
instructions, please review the [Ember CLI  3.10.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.10.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
