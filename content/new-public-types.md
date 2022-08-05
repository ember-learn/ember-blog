---
title: New Public APIs for Type-only Imports
authors:
  - chris-krycho
date: 2022-08-09T13:30:00.000Z
tags:
  - '2022'
  - announcement
  - typescript

---

As of late last week, there are finally public import locations for a couple key type-only imports in Ember.js:

- `Owner` and a family of types directly related to it:
    - `RegisterOptions`
    - `Factory`
    - `FactoryManager`
    - `FullName`
- `Transition`
- `RouteInfo` and `RouteInfoWithMetadata`

These are not coupled to a specific Ember release, because they represent types whose *runtime* existence has long been public API, but for which there was no public path to import the types and name them in TypeScript. They are available on the most recent versions of the `@types/ember__owner` and `@types/ember__routing` packages, which can be used with any version of Ember v3 or v4 (as long as you are not using features removed in Ember v4).

This post covers the new types in two parts: some background on why, and coverage of the deisgn of the new public types and how to migrate to them. If you already know (or are not interested in) the background, feel free to skip straight to [**The new types**](#the-new-types) below.

## Background

When a group of us started building good TypeScript support for Ember all the way back in 2017, we had to make a decision about what we would and would not put in the types. The right idea overall was obvious: we would only create types for Ember’s public <abbr title="application programming interface">API</abbr>s. Writing types for *private* APIs would be misleading to our users, and would increase our maintenance burden as well. So that’s what we did!

We eventually ran into a problem with this simple policy, though. *What about types which are part of Ember’s public API, but which are not things Ember users can import?* There are a number of these, and they’re pretty important. The big three are `Owner`, `Transition`, and `RouteInfo`. All three of these, as well as some supporting types associated with them, show up in a lot of places in Ember, and there has never been a public API way to import them.

The reason there has never been a public import for those is that you’re not allowed to create them yourself. The only way to get one of them is for Ember itself to provide it to you via a function or method. You’re also not allowed to subclass them, but providing an import location would make it much too easy for users to do just that. (Technically you could figure out how to subclass them by manually walking their prototype chain, but at that point you are clearly doing things which are not public API!)

This limitation is not a big deal in JavaScript. You just get the objects when using Ember’s functions or methods, and use them normally. In TypeScript, though, it becomes a significant issue, because you need to be able to write down the types.

To make this more concrete, let's look at `Transition`. Ember has had the idea of `Transition` objects as part of its routing layer for a very long time! When you write the definition of a route with a `beforeModel` hook, it might looks something like this:

```ts
import Route from '@ember/routing/route';

export default class SomeRoute extends Route {
  beforeModel(transition: /* what goes here? */) {
    // use the transition
  }
}
```

We need to provide a type for users to be able to name the type of the `transition` there. Internally, the types for the `Route` subclass and many other things had to *define* a `Transition`, and the associated `RouteInfo` and so on. But since Ember did not expose them, we did not provide a public API for them. Among other things, the Typed Ember team (which was not an official Ember team until earlier this year!) wanted to be good members of the community and avoid ending up tying the hands of the Framework team about these imports.

As a result, Ember developers using TypeScript had to import the types from a private location:

```ts
import Route from '@ember/routing/route';
import Transition from '@ember/routing/-private/transition';

export default class SomeRoute extends Route {
  beforeModel(transition: Transition) {
    // use the transition
  }
}
```

Or use TypeScript type tricks to get the type from something which *is* public API:

```ts
import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';

type Transition = ReturnType<RouterService['transitionTo']>;

export default class SomeRoute extends Route {
  beforeModel(transition: Transition) {
    // use the transition
  }
}
```

This was obviously undesirable, so when the Ember community [committed to making TypeScript a first-class supported language][rfc-0724], we knew these were critical to support. And so, as of [RFC 0821][rfc-0821], we have public types for all the key pieces of Ember’s public API which have not historically had public imports:

- the `Owner` type which defines the core of Ember’s dependency injection system and on which the `EngineInstance` and `ApplicationInstance` are build
- the `Transition` and `RouteInfo` types, as well as the specialized `RouteInfoWithMetadata` variant

Let's dig into these and see both what the new exports are and how you should migrate to them if

[rfc-0724]: https://rfcs.emberjs.com/id/0724-road-to-typescript
[rfc-0821]: https://rfcs.emberjs.com/id/0821-public-types

## The new types

### `Owner` and related types

The `Owner` type is the core of Ember’s dependency injection system. An `Owner` looks like this:

```ts
export default interface Owner {
  lookup(fullName: FullName): unknown;

  register(
    fullName: FullName,
    factory: Factory<unknown> | object,
    options?: RegisterOptions
  ): void;

  factoryFor(fullName: FullName): FactoryManager<unknown> | undefined;
}
```

(Each of these types will be explained below!)

If this looks familiar to you—like the shape of `ApplicationInstance`—you’re right. The `ApplicationInstance` (and the `EngineInstance` class it extends from) is the concrete class which implements the `Owner` interface in Ember.

You can use an `Owner` instance to look up items registered with the DI system as well as to register new items with it. For example, you could use an `Owner` instance retrieved with [the `getOwner()` function][getOwner] to write a class-based helper which provides a service instance in a template:

[getOwner]: https://api.emberjs.com/ember/4.6/functions/@ember%2Fapplication/getOwner

```ts
import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

export default class LookupService extends Helper {
  compute([name]: [string]): unknown {
    return getOwner(this).lookup(`service:{name}`);
  }
}
```

`Owner` is also available as `this.owner` in tests, where you often use it in a similar way:

```ts
import { module, test } from 'qunit';
import { setupRenderingTests } from 'ember-qunit';

module('demonstrate owner lookup', function (hooks) {
  setupRenderingTests(hooks);

  test('', async function (assert) {
    const someService = this.owner.lookup('service:some-service');
    // ...
  });
});
```

(Since we now have an `@ember/owner` package, `getOwner` and `setOwner` will be exported from that package in an upcoming release of Ember itself, and their existing imports will be deprecated sometime later. Don’t worry, though, we’ll cover that when it happens!)


#### Related types

As you saw in the definition, the `Owner` type has a few supporting friends. Like `Owner`, those were missing public API import locations until this change, but they are now all available as named imports from `@ember/owner`.

A `Factory` represents the way Ember knows how to create instances of framework classes. End users (like you!) can create their own factories as long as it conforms to a simple interface. For

```ts
import { type Factory } from '@ember/owner';

class Person {
  name: string;
  age: 

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface PersonManager implements Factory<Person> {
  create(initialValues: { name: string, age: number }): Person {
    let name = initialValues.name ?? "";
    let age = initialValues.age ?? 0;

    return new Person(name, age);
  }
}
```

This is not something most users should do: you can normally just use a normal JS constructor instead:

```js
let person = new Person("Chris", 35);
```

However, it *can* be useful when you have a reason to create a class which will be managed by Ember’s DI system using the `Owner.register` API:

```ts
anApplicationInstance.register('util:person', Person);
```

When registering a new type, there are two options available to it, and you can name the type of those options by importing the named `RegisterOptions` type from `@ember/owner`.

A `FactoryManager` is one level higher up than a `Factory`: it represents the way Ember knows how to *find* the `Factory` to create when you look something up. These are *not* things end users can create. The only legal way to get one is with the `Owner.factoryFor` API. Once you have one, you can use it to create a new instance of the class itself.

(Note that `FactoryManager` is not quite like the other “manager” types introduced in the past few years for components, modifiers, and helpers—but we intend to update it to have `capabilities` like those do at some point in the future.)

Finally, there is a `FullName` utility type. As shown in the examples above, when you look up any item in Ember’s dependency injection system, it has a two-part name: `type:name`. For example, [the Router service](https://api.emberjs.com/ember/4.6/classes/RouterService) is registered as `'service:router'`, and the application [Route](https://api.emberjs.com/ember/4.6/classes/Route) which exists in every app is registered as `'route:application'`. TypeScript allows us to represent this with a template string literal *as a type*:

```ts
type FullName = `${string}:${string};
```

By using this, we can provide at least a basic guarantee that you are looking up something Ember *might* recognize. It also provides a foundation for an interesting opportunity we want to leave the community to explore in the months ahead.


#### Experimenting with `Owner` and registries

Today, `Owner.lookup` always just hands back `unknown`. However, since TypeScript has these template literal types, we can use it to construct a version of `Owner.lookup` which hands back the correct type if TypeScript knows about it. This might be particularly useful for looking up services (say, in tests).

<!-- TODO: code sample -->


### `Transition` and `RouteInfo` types

The `RouteInfo` type was historically available as the default export from the private `@ember/routing/-private/route-info` module. The `RouteInfoWithMetadata` type, which extended from `RouteInfo`, was historically available as the default export from the private `@ember/routing/-private/route-info-with-metadata` module. Both are now available as 

**_Note:_ none of `Transition`, `RouteInfo`, or `RouteInfoWithMetadata` will be available at the old `-private` imports when these types are published natively from Ember in the future.**
