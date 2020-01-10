---
title: Octane is Here
author: Yehuda Katz
tags: Recent Posts, 2019, Announcement, Featured Announcement
alias: 2019-12-20-octane-is-here.md
responsive: true
date: "2019-12-20 16:31:00 -0500"
---

Ember 3.15 is Octane! Curious what Octane means for web development? This blog post will get you oriented.

For a write up of the technical details (upgrade strategies, deprecations, new Ember Data features) see the [Ember 3.15 Release blog post](https://blog.emberjs.com/2019/12/20/ember-3-15-released.html).

READMORE

## What is Ember Octane?

Ember Octane is the best way for teams to build ambitious web applications.

<!--alex ignore just-->
Ember has always focused on building the best framework that people with different levels of skill can use together to build web applications. Octane updates Ember's components and reactivity system to make them more modern, easier to use, and just more fun.

## The Ember Project Recommends Octane

As of Ember 3.15, the Ember project recommends Octane for new applications and addons. If you create a new app using `ember new` with 3.15 or later, you will get a new Octane application.

## Octane is More Fun

The Ember Octane edition is, first and foremost, about making it easier and more *fun* to build Ember applications.

The centerpiece of Octane's ergonomic improvements are two big changes to the core of Ember: a new component model and a new reactivity system.

> For existing Ember users, both the new component model and the new reactivity system are fully opt-in and fully interoperable with existing code. Upgrading an Ember 3.14 app to Ember 3.15 is a compatible change, as the version number would suggest.

## Glimmer Components

The first big improvement in Ember Octane is Glimmer Components. Ember has had a single component system since Ember 1.0, based on JavaScript syntax that was available at the time.

### Before: Classic Components

The thing that jumps out at you when you look at classic components is that you configure a "root element" using a JavaScript microsyntax.

```js
import Component from '@ember/component';

export default Component.extend({
  tagName: 'p',
  classNames: ["tooltip"],
  classNameBindings: ["isEnabled:enabled", "isActive:active"],
})
```

### After: Glimmer Components

<!--alex ignore special just-->
In contrast, Glimmer components allow you to treat the root element like any other element. This substantially simplifies the component model, eliminating the special cases that come from having a second API just for working with the root element of a component.

```handlebars
<p class="tooltip {{if @isEnabled 'enabled'}} {{if @isActive 'active'}}">
  {{yield}}
</p>
```

<!--alex ignore just-->
It also means that you can create a component with no root element at all, and things like this just work.

```handlebars
<p>{{yield}}</p>
<hr>
```

## Reusable DOM Behavior With Modifiers

The second big improvement to the Ember component model is element modifiers, a feature that allows you to build reusable DOM behavior that isn't connected to any specific component.

### Before: Mixins

In Classic Ember, if you wanted to define a piece of DOM behavior that you could reuse across your application, you would define a component mixin that implemented the appropriate lifecycle hooks.

For example, let's say we have a third-party library that exposes `activateTabs` and `deactivateTabs` functions, both of which take an element. In Classic Ember, you could write a mixin like this:

```js
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didInsertElement() {
    this._super();
    activateTabs(this.element);
  }

  willDestroyElement() {
    this._super();
    deactivateTabs(this.element);
  }
})
```

And then you would use it in a component like this:

```js
import Component from '@ember/component';

export default Component.extend(Tabs, {
  // ...
});
```

The drawbacks of using mixins for UI composition are well-described [across](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html) [the](https://blog.logrocket.com/hooks-are-coming-to-vue/) [JavaScript](https://github.com/sveltejs/svelte/issues/1041#issuecomment-353660981) [ecosystem](https://github.com/emberjs/rfcs/issues/534). The most glaring issue is naming conflicts. Any method on a mixin might conflict with a method on any other mixin, with no good way to resolve the conflicts.

In the context of Ember, there's another issue with using Ember Component mixins for reusable DOM behavior. If you want to use the `Tabs` mixin on an element, you need to turn that element into a component with a JavaScript class, which is pretty awkward.

> While we do recommend you avoid mixins, you can still use them in Ember 3.15. Addons may also still provide mixins for you to use.

### After: Element Modifiers

Ember Octane provides a new way to reuse DOM behavior: element modifiers. The simplest way to write an element modifier is to write a function that takes the element and does something with it. The function can optionally return a destructor function that should run when Ember tears down the element.

This is what our `Tabs` mixin looks like when reimplemented as a modifier.

```js
import { modifier } from 'ember-modifier';

export default modifier(element => {
  activateTabs(element);

  return () => deactivateTabs(element);
});
```

Really straightforward!

You can use a modifier on any element using element modifier syntax.

```handlebars
<div {{tabs}}></div>
```

Element modifiers work on any element, meaning that you don't need to create a whole component simply to create reusable DOM behavior.

This way of writing modifiers assumes that when the arguments to a modifier change, it's fine to run the destructor and run the modifier from scratch. If you need more granular control, the `ember-modifier` package also provides a more advanced API.

## Glimmer Reactivity

The hallmark of a modern front-end framework is its "reactivity model". A reactivity model tells you how to define and manipulate data in your program so that the output DOM will update correctly when you make changes.

Ember Octane exposes a drastically simpler reactivity model called "tracked properties."

> The tracked properties reactivity model is compatible and interoperable with the classic reactivity model. This is because both APIs are implemented in terms of Ember's internal reactivity model, based on [References](https://github.com/glimmerjs/glimmer-vm/blob/master/guides/04-references.md) and [Validators](https://github.com/glimmerjs/glimmer-vm/blob/master/guides/05-validators.md).

### Before: Computed Properties and Restrictions

In Classic Ember, you mutate reactive properties by using `set`, and any computations have to be described as computed properties. Computed properties must fully enumerate all dependencies.

Here's the computed properties example from Ember 3.14's guides:

```js
import EmberObject, { computed } from '@ember/object';

const Person = EmberObject.extend({
  firstName: null,
  lastName: null,
  age: null,
  country: null,

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),

  description: computed('fullName', 'age', 'country', function() {
    return `${this.fullName}; Age: ${this.age}; Country: ${this.country}`;
  })
});

let captainAmerica = Person.create({
  firstName: 'Steve',
  lastName: 'Rogers',
  age: 80,
  country: 'USA'
});

captainAmerica.description; // "Steve Rogers; Age: 80; Country: USA"
captainAmerica.set('firstName', 'Christopher');
captainAmerica.description; // "Christopher Rogers; Age: 80; Country: USA"
```

This design makes it harder to break up a computed property into smaller functions, because the computed property still needs to enumerate all properties that it used, no matter where they're used. In practice, this means that, in Classic Ember, you break up computed properties into more computed properties, which works well but is somewhat restrictive.

### After: Tracked Properties

Octane's reactivity model, tracked properties, have a much lighter footprint.

```js
class Person {
  @tracked firstName;
  @tracked lastName;
  @tracked age;
  @tracked country;

  constructor({ firstName, lastName, age, country }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }),

  get description() {
    return `${this.fullName}; Age: ${this.age}; Country: ${this.country}`;
  })
}

let captainAmerica = new Person({
  firstName: 'Steve',
  lastName: 'Rogers',
  age: 80,
  country: 'USA'
});

captainAmerica.description; // "Steve Rogers; Age: 80; Country: USA"
captainAmerica.firstName = "Christopher";
captainAmerica.description; // "Christopher Rogers; Age: 80; Country: USA"
```

You start with a normal JavaScript class and annotate any fields that could affect the DOM with `@tracked`. You don't need to annotate getters or functions, so you can break up your code however you want.

> A neat thing about the tracked properties reactivity model is that if you remove the `@tracked` annotation, the code works exactly the same. The only thing that changes if you add `@tracked` is that if you make changes to the property, any part of the DOM that used that property as part of its computation will correctly update.

## A Focus on Documentation

<!--alex ignore just-->
Octane is more than just new features. It's also a focus on refreshing the documentation to show users how to build applications in the Octane way.

### Fully Refreshed Tutorial and Component Guides

The tutorial is the first way that people learn how to build Ember applications. Ember 3.15 fully refreshed the [Super Rentals Tutorial](https://guides.emberjs.com/v3.15.0/tutorial/) so that it's written in Octane style.

The structure of the tutorial is also clarified and refreshed.

<div>
  <span style="width=50%;float:left">
    <h4>Before</h4>
    <img alt="Tutorial before Octane" src="/images/octane-is-here/Untitled.png">
  </span>
  <span style="width=50%;float:left">
    <h4>After</h4>
    <img alt="Tutorial after Octane" src="/images/octane-is-here/Untitled%201.png">
  </span>
  <div style="display: block; clear: both;"></div>
</div>

The guides also underwent a major refresh, elevating components and eliminating confusing organization (like the separation between templates and components). The new guides de-emphasize controllers, which are less important in Octane. The classic object model section is now included in a section on migrating to Octane rather than as a first-class section.

<div>
  <span style="width=50%;float:left">
    <h4>Before</h4>
    <img alt="Guides before Octane" src="/images/octane-is-here/Untitled%202.png">
  </span>
  <span style="width=50%;float:left">
    <h4>After</h4>
    <img alt="Guides after Octane" src="/images/octane-is-here/Untitled%203.png">
  </span>
  <div style="display: block; clear: both;"></div>
</div>

## Great Tooling

The Ember inspector is a very important part of the way that Ember developers build Ember apps.

We're very proud that we've maintained a solid five-star rating on the Chrome Web Store over the years.

![Ember Inspector](/images/octane-is-here/Untitled%204.png)

For Octane, the Ember inspector has been updated to support Octane features in a first-class way, including tracked properties and Glimmer components.

The refreshed inspector eliminates duplicate concepts and outdated language (like "View Tree"). It also has numerous visual improvements, including a new component tooltip that better reflects Octane idioms. It also updates the component tooltip, which fixes a long-standing issue with physically small components.

![Ember Inspector view tree](/images/octane-is-here/Untitled%205.png)

## Getting Started

Whether you're a new Ember developer, coming back to Ember after many years, or an existing Ember developer, the fastest and easiest way to get learn how to build applications the Octane way is to run through [the refreshed tutorial](https://guides.emberjs.com/release/tutorial/).

Once you get through the tutorial, it's time to build something real for fun. The Ember addon ecosystem is a great part of Ember, so you'll want to reach for addons to speed up the process of building your project.

[Ember Observer](https://emberobserver.com/) is a directory for the Ember addon ecosystem. Each addon gets a quality score based on a human review of formal criteria like the existence of a meaningful README, whether the addon has an automated build, and whether the addon is maintained by more than one person. This week, it will also indicate whether an addon is Octane Ready.

> Because of the details of Octane's compatibility story, most addons should be Octane Ready without any changes. Ember Observer will help the community proactively identify and fix Octane problems in maintained packages.

## A Closer Look at Seamless Interop

<!--alex ignore special-->
In addition to the elimination of computed properties, the Glimmer reactivity model also doesn't include special Ember proxies or observers. The Octane reactivity model is more powerful than the classic one, but it's much easier to use.

The Octane reactivity model wouldn't be very useful for existing Ember users if it was hard to use objects implemented using the classic reactivity model from objects implemented using the Octane model. For that reason, we worked hard to ensure that existing Ember applications can freely use classic objects in classes built using tracked properties.

```js
class Contact {
  @tracked person;

  constructor(person) {
    this.person = person;
  }

  get description() {
    return this.person.description;
  }
}

import EmberObject, { computed } from '@ember/object';

const Person = EmberObject.extend({
  firstName: null,
  lastName: null,
  age: null,
  country: null,

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),

  description: computed('fullName', 'age', 'country', function() {
    return `${this.fullName}; Age: ${this.age}; Country: ${this.country}`;
  })
});

let captainAmerica = new Person({
  firstName: 'Steve',
  lastName: 'Rogers',
  age: 80,
  country: 'USA'
});

let contact = new Contact(captainAmerica);
contact.description; // "Steve Rogers; Age: 80; Country: USA"
captainAmerica.set('firstName', 'Christopher');
contact.description; // "Christopher Rogers; Age: 80; Country: USA"
```

Because these two systems are interoperable, libraries can adopt the Octane reactivity system without a breaking change to their API.

This work also allows existing Ember codebases to adopt Octane patterns module-by-module.

## Thanks for checking out Octane!

Octane is a project the Ember community is excited to share with developers
both new and experienced. Octane is a modern, productive way to build web applications, and makes it possible to have both fun and stability in our work.

The polished, across the board refresh of Ember's APIs and help content could not have accomplished this without the effort of the community and every member of the [Ember Core Teams](https://emberjs.com/team/). Thank you for being a part of our community, contributing to this project, and continuing to help Ember be a great choice for building on the web.
