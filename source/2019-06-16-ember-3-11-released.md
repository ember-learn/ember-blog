---
title: Ember 3.11 Released
author: Kenneth Larsen
tags: Releases, 2019, 3, 3.11
responsive: true
---

Today the Ember project is releasing version 3.11 of Ember.js, Ember Data, and Ember CLI. This release kicks off the 3.12 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

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

**Forwarding Element Modifiers with "Splattributes" (1 of 4)**

Angle bracket component invocation was introduced in Ember.js 3.7. Aside from the syntatic differences, the angle bracket invocation syntax enabled passing HTML attributes to components, which can then be applied the underlying HTML element(s) in the component's layout using the ...attributes "splattributes" syntax.

This features clarifies how the "splattributes" feature interact with element modifiers.

For more information please refer to [the RFC](https://github.com/emberjs/rfcs/blob/master/text/0435-modifier-splattributes.md).

**The {{fn}} helper (2 of 4)**

The `{{fn}}` helper provides a way to pass arguments to actions, particularly with native classes and the `@action` decorator.

With the `@action` decorator, it is very straightforward to pass actions to other components ("data-down, actions-up"):

```js
import Component from "@ember/component";
import { action } from '@ember/object';

class CounterComponent extends Component {
  count = 0;
  
  @action
  countUp(increment = 1) {
    this.incrementProperty("count", increment);
  }
}
```
 
```hbs
Current count: {{this.count}}

<MyButton @click={{this.countUp}}>Add One</MyButton>
```

The `@action` decorator ensures that the `this` value in the `countUp` action will always be the component instance, which allows it to be freely passed to other components. Where this falls short is when we need to pass arguments to these actions.

The `{{fn}}` helper provides a way to pass arguments into actions and "bundle" them up, so that they can be passed around to other components and still retain the provided arguments when called:

```hbs
Current count: {{this.count}}

{{!-- when not passing arguments, these are equivalent --}}
<MyButton @click={{this.countUp}}>Add One</MyButton>
<MyButton @click={{fn this.countUp}}>Add One</MyButton>

{{!-- calls this.countUp(10) when clicked --}}
<MyButton @click={{fn this.countUp 10}}>Add Ten</MyButton>
```

In addition to the basic use case shown here, the `{{fn}}` helper supports other advanced use cases, such as adding more arguments to an existing function.

It should also be noted that the `{{action}}` helper can previously be used to accomplish similar functionalities, but due to some historical decisions, it may produce surprising results in some cases. Therefore, Ember users are encouraged to migrate to the `{{fn}}` helper along with the `@action` decorator where possible and appropriate. Refer to [the RFC](https://github.com/emberjs/rfcs/blob/master/text/0470-fn-helper.md#detailed-design) for more details and examples.


**The {{on}} modifier (3 of 4)**

The `{{on}}` modifier provides a straightforward way to listen to DOM events on arbitrary elements.

```js
import Component from "@ember/component";
import { action } from '@ember/object';

class CounterComponent extends Component {
  count = 0;
  
  @action
  countUp() {
    this.incrementProperty("count");
  }
}
```
```hbs
Current count: {{this.count}}

<button {{on "click" this.countUp passive=true}}>Add One</button>
```
 
The `{{on}}` modifier in this example attaches a passive "click" event listener on the button, such that when the button is clicked, the `countUp` action will be called. Again, the `@action` decorator ensures the `countUp` action will have the right `this` value at runtime.

By default, the action passed to the `{{on}}` modifier will receive the DOM event as an argument. The `fn` helper can be used in conjunction with the `{{on}}` modifier to alter this behavior. Along with the "Splattributes" feature mentioned above, the `{{on}}` modifier can also be applied to component elements as well.
 
Finally, it should be noted that the `{{action}}` modifier, and in some case, DOM properties like `onclick=` can previously be used to accomplish similar functionalities. However, both of these approaches have their own drawbacks. Therefore, Ember users are encouraged to migrate to the `{{on}}` modifier along with the `@action` decorator where possible and appropriate. See [the RFC](https://github.com/emberjs/rfcs/blob/master/text/0471-on-modifier.md) for more details and examples.

**Inject Parameter Normalization (4 of 4)**

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
