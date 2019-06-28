---
title: Ember 3.11 Released
author: Kenneth Larsen
tags: Releases, 2019, 3, 3.11
responsive: true
---

Today the Ember project is releasing version 3.11 of Ember.js, Ember Data, and Ember CLI. This release kicks off the 3.5 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/builds/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.11
Ember.js 3.11 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations. There is COUNT (#) new feature, COUNT (#) deprecations, and COUNT (#) bugfixes in this version.

#### New Features (4)

Forwarding Element Modifiers with "Splattributes" (1 of 4)

Angle bracket component invocation was introduced in Ember.js 3.7. Aside from the syntatic differences, the angle bracket invocation syntax enabled passing HTML attributes to components, which can then be applied the underlying HTML element(s) in the component's layout using the ...attributes "splattributes" syntax.

For example, given the following invocation:

```hbs
<FooBar class="foo-bar" />
```

...and the following layout for the `FooBar` component:


```hbs
<div ...attributes>foo bar!</div>
```

Ember will render the following HTML content:

```html
<div class="foo-bar">foo bar!</div>

The {{fn}} helper (2 of 4)

This new helper aims to remove some of the complexity of the current `action` helper. Some of these complex behaviors are:

1. Argument partial application (currying)
2. `this` context binding
3. `send` checks for Component and Controllers

The `fn` helper will take in a function and then the set of arguments that will be partially applied to the function.

Here's a simple case on argument curry:

```hbs
{{fn this.log 1}}
```

```js
return function() {
  this.log.call(this, 1);
}
```

To see even more examples please refer to [the RFC](https://github.com/emberjs/rfcs/blob/master/text/0470-fn-helper.md#detailed-design). 


The {{on}} modifier (3 of 4)

Currently, there are two ways to bind event listeners to elements in Ember templates with built-in, official Ember APIs:

  - Use the `{{action}}` element modifier
  - Use the `on*=` property bindings

Both of these solutions are problematic for a number of reasons. 

The `{{on}}` modifier will recieve:

  - The event name as a string as the first positional parameter
  - The event listener function as the second positional parameter
    Named parameters as options

The following usages are equivalent:

```hbs
<div {{on "click" this.handleClick passive=true}}></div>
````

```js
element.addEventListener('click', this.handleClick, { passive: true });
```

For more examlpes please refer to [the RFC](https://github.com/emberjs/rfcs/blob/master/text/0471-on-modifier.md#detailed-design).

Inject Parameter Normalization (4 of 4)

Inject Parameter Normalization normalizes this contract for all Ember base classes - that is, framework classes that are provided by Ember:

  - `GlimmerComponent`
  - `EmberComponent`
  - `Service`
  - `Route`
  - `Controller`
  - `Helper`

Along with framework clases provided by Ember Data:

  - `Model`
  - `Adapter`
  - `Serializer`
  - `Transform`

For more info please refer to [the RFC](https://github.com/emberjs/rfcs/blob/master/text/0451-injection-parameter-normalization.md).

#### Deprecations (1)

Deprecations are added to Ember.js when an API will be removed at a later date. Each deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.11, please review the [Ember.js 3.11.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.11.0).


Deprecate Function.prototype.observes (1 of 1)

Historically, Ember has extended the `Function.prototype` with a few functions (`on`, `observes`, `property`), over time we have moved away from using these prototype extended functions in favor of using the official ES modules based API.

Please refer to [the deprecation guides](https://deprecations.emberjs.com/v3.x/#toc_function-prototype-extensions-observes) for information on how to migrate away from `Function.prototype`.


---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.11

#### New Features (0)

No new features introduced in Ember Data 3.11.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.11.


For more details on changes in Ember Data 3.11, please review the
[Ember Data 3.11.0 release page](https://github.com/emberjs/data/releases/tag/v3.11.0).

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

### Changes in Ember CLI 3.11

#### New Features (X)


#### Deprecations (X)

---

For more details on the changes in Ember CLI 3.11 and detailed upgrade
instructions, please review the [Ember CLI  3.11.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.11.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serve as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
