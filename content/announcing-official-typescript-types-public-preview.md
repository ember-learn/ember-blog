---
title: Announcing the Official TypeScript Types Public Preview
authors:
  - chris-krycho
date: 2022-09-16T22:00:00.000Z
tags:
  - '2022'
  - typescript

---

As of `ember-source@4.8.0-beta.2`, Ember is shipping a public preview of our official TypeScript support for the framework itself. This is the next step in implementing [RFC 0724: Official TypeScript Support][0724] and [RFC 0800: TypeScript Adoption Plan][0800]. Anyone using TypeScript with Ember 4.8.0 Beta 2 or later can opt into using these preview types by removing the corresponding `@types` packages and adding the following import in your `types/<your app>/index.d.ts` file:

```ts
import 'ember-source/types';
import 'ember-source/types/preview';
```

This will set your app up to start using Ember's preview types *now* and to automatically benefit as we stabilize our types incrementally over the releases ahead. You won't have to do anything except add these once and then upgrade your app on your normal upgrade cadence!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lHQB7DxgFbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[0724]: https://rfcs.emberjs.com/id/0724-road-to-typescript/
[0800]: https://rfcs.emberjs.com/id/0800-ts-adoption-plan/

Note that there are some significant changes to these types compared to the types as they exist on DefinitelyTyped today. **All public API remains supported, but in line with RFC 0800, we intentionally provide only minimal support for Ember Classic APIs around class definitions.** Accordingly, you should migrate to native classes *before* attempting to adopt these types if you have not already done so!

The rest of this post is broken into four sections:

- [How the preview period will work](#toc_how-the-preview-period-will-work)
- [Migrating from DefinitelyTyped](#toc_migrating-from-definitelytyped)
- [New TypeScript users](#toc_new-typescript-users)
- [What's next on Ember’s road to TypeScript?](#toc_whats-next-on-embers-road-to-typescript)

If you’re curious about the details of how this approach to publishing TypeScript types for Ember works, check out [the PR which introduced support](https://github.com/emberjs/ember.js/pull/20180)!

## How the preview period will work

There are two type-only modules you import: `'ember-source/types'` and `'ember-source/types/preview'`. These represent the stable and preview types respectively. At the start of the preview period, there is nothing at all in the stable module: *all* the types are in the preview module.

The key difference between the stable and preview types is: our stable types *must* be generated from Ember's own TypeScript source code, while the preview types are hand-written type definitions. The hand-written definitions match up closely to the actual code, but small gaps are inevitable. Types published directly from Ember's own source code will not have that problem!

Over the course of the preview period, we will be doing two things:

1. We will be fixing bugs in these types as they are identified, and releasing bug fix releases the same way we would for runtime errors. (This will be the new normal for Ember: fixes to types are exactly like fixes to runtime errors, because both are bugs!)

2. We will be working on Ember's build infrastructure and the structure of its internals to make it possible to publish types directly from the source, instead of using hand-authored types. These are the types which will be exposed via the `import 'ember-source/types';` statement.

Once we are fully cut over to publishing types from Ember's source code, we will declare them "stable" and therefore subject to Ember's normal SemVer policy. For details on how we are handling SemVer for TypeScript, check out [the relevant section of RFC 0800][0800-semver] and the [Semantic Versioning for TypeScript][semver-ts] spec we authored and follow. We’ll also be updating the website with those details in the next few weeks.

[0800-semver]: https://rfcs.emberjs.com/id/0800-ts-adoption-plan/#semantic-versioning
[website-semver]: https://emberjs.com/releases/
[semver-ts]: https://www.semver-ts.org

We will make a best effort to avoid breaking changes in the types during the preview period, but the transition to the stable types will inevitably involve many bug fixes which may *feel* like breaking changes!

Also, given that these are *preview* types, we will continue to maintain the types on DefinitelyTyped until we stabilize these. If you try them out and hit issues you cannot resolve, that’s totally fine! There are two things we think you should do in that case:

1. File an issue on [the ember.js repo][repo] with a report about the issue you had.
2. Switch back to the `@types` packages!

[repo]: https://github.com/emberjs/ember.js/issues

We will make sure there are no blocking bugs before stabilizing.


## Migrating from DefinitelyTyped

*This section only applies if you are an existing Ember TypeScript user who has been using the `@types` packages from [DefinitelyTyped][dt]. If you're trying out TypeScript for the first time now, you can skip it!*

[dt]: https://github.com/DefinitelyTyped/DefinitelyTyped

There are four steps involved in switching from the existing types published on DefinitelyTyped to these preview types.

1. Remove the following packages from your `package.json`:

    - `@types/ember`
    - `@types/ember__application`
    - `@types/ember__array`
    - `@types/ember__component`
    - `@types/ember__controller`
    - `@types/ember__debug`
    - `@types/ember__destroyable`
    - `@types/ember__engine`
    - `@types/ember__error`
    - `@types/ember__helper`
    - `@types/ember__modifier`
    - `@types/ember__object`
    - `@types/ember__owner`
    - `@types/ember__polyfills`
    - `@types/ember__routing`
    - `@types/ember__runloop`
    - `@types/ember__service`
    - `@types/ember__string`
    - `@types/ember__template`
    - `@types/ember__test`
    - `@types/ember__utils`

2. Install a version of `ember-source` greater than `4.8.0-beta.2`. You should pick the latest beta of 4.8 *or* any stable version starting with 4.8.0 once it's out!

3. In the `types/<your-app>/index.d.ts` file generated for you automatically by `ember-cli-typescript`, add the new imports as the first items in the file, and remove the array prototype extensions support from the file. With the defaults generated for you, the result would look like this:

    ```diff
    +import 'ember-source/types';
    +import 'ember-source/types/preview';
    -import Ember from 'ember';
    -
    -declare global {
    - // Prevents ESLint from "fixing" this via its auto-fix to turn it into a type
    - // alias (e.g. after running any Ember CLI generator)
    - // eslint-disable-next-line @typescript-eslint/no-empty-interface
    - interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
    - // interface Function extends Ember.FunctionPrototypeExtensions {}
    -}

    export {};
    ```

4. Account for the differences between the preview types and the definitions on DefinitelyTyped. These differences all fall into one of these broad categories:

    - Fixes to problems in the existing definitions.
    - Removal of our (poor!) support for Ember Classic class features in favor of native classes.
    - Changes to type registry handling
    - Removal of legacy (private) routing APIs

### Fixes to problems in the existing definitions

For the preview types, we started by copying over the community-maintained type definitions from DefinitelyTyped. We then updated them to use more robust type testing tools that DefinitelyTyped allows, which exposed a bunch of bugs to fix. We also did a basic comparison of the types we are publishing with the corresponding types in Ember's own code, which has been written in TypeScript for years and got a huge improvement from [@wagenet][peter] earlier this year.

As a result, you may find some differences when you switch over. In every case, these represent *bug fixes*, but we recognize they may involve some work!

[peter]: https://github.com/wagenet


#### Introducing a `Resolver` type

The types on DefinitelyTyped supply a definition of `Resolver` from `ember-resolver`, which is where most Ember users get their resolver. However, `ember-resolver` and other resolvers work because they implement *Ember’s* contract for what a resolver is. A future RFC will introduce a public type import for this. (It was missed during the work on [RFC 0821][0821] because the type presently does *not* come from Ember!)

[0821]: https://rfcs.emberjs.com/id/0821-public-types/

For now, the type exists at `@ember/-internals/resolver`, and is introduced to be type-compatible with the type for `ember-resolver` on DefinitelyTyped. (See [this issue][ember-resolver-795] for an issue tracking publishing types from `ember-resolver`, which is likely gated on a public type import from Ember, but until we ship stable types, can be managed via careful types work on DefinitelyTyped.)

[ember-resolver-795]: https://github.com/ember-cli/ember-resolver/issues/795


#### Removing support for `Array` prototype extensions

This work also exposed a number of errors in the existing types, especially around `Array` prototype extensions. As a result, these types *do not support* `Array` prototype extensions, and it is unlikely that future work will be able to add that support. (The support provided via the types on DefinitelyTyped only worked because the types were defined incorrectly, resulting in a variety of kinds of unsafety.)

Notably, Array prototype extensions are [being deprecated][0848], so moving off of them is work you will need to do *anyway*.

[0848]: https://github.com/emberjs/rfcs/pull/848


### Ember Classic support

As specified in [RFC 0800][0800], there are also a number of breaking changes from the types in DefinitelyTyped regarding support for Ember Classic features:

> Per the edition support policy, we will provide minimal support for Ember Classic features:
>
> - **Ember's classic class system**: we will provide minimal definitions for the `.create()`, `.extend()`, `.reopen()`, `.reopenClass()`, methods, which make no attempt to use them to actually update the types of the items they modify.…
>
> - **Ember’s `get` and `set` helpers:** we will not provide types to make `get` and `set` type-safe beyond property lookups on objects—i.e. no support for nested path lookups.…
>
> - **Classic computed property handling:** we will not provide “safe” types for the classic form of computed properties.


#### Ember's classic class system

The definitions on DefinitelyTyped attempted to make `.create()` and `.extend()` actually create updated types, and tried to make `.create()`, `.extend()`, `.reopen()`, and `.reopenClass()` have the correct type for `this` within their bodies. These were always extremely fragile and mostly did not work. Since Ember 3.6, Ember users have been able to use native classes instead of Ember’s classic class system, and this has been the recommended way of writing Ember code since the release of the Octane edition in Ember 3.15.

In the preview types, these methods are present and are safe to use since they are still part of Ember’s public API. However, `.create()` and `.extend()` do not create new types. The `.create()` method *does* still check that the values you pass match those defined on the class body, but the types do not attempt to make `this` have the right type within the bodies of `.create()`, `.extend()`, `.reopen()`, or `.reopenClass()`.

To migrate, you should:

- Convert all your own classic classes to native classes.
- Eliminate your use of mixins.

(Most Ember TypeScript users have already done this, because these worked so poorly with TypeScript.)

The `.create()` call can always be replaced with a normal `class` definition in JavaScript. For each of the others, you can also use [declaration merging][merging] to represent the *behavior* of the method in question.

[merging]: http://www.typescriptlang.org/docs/handbook/declaration-merging.html


##### `.extend()`

For the case where you are only defining a new class, convert to a native class instead. However, if you have code which still relies on mixins like `Evented`, you can represent it using interface merging like this:

```ts
import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';
import type Owner from '@ember/owner';

// A native class which still applies the Evented mixin
class ExtendsDemo extends EmberObject.extend(Evented) {
  moreStuff = true;

  constructor(owner: Owner) {
    super(owner);
    this.on('custom', this, 'boundMethod');
  }

  willDestroy(): void {
    this.off('custom', this, 'boundMethod');
  }

  boundMethod = () => {
    alert('do something');
  };
}

// Make that work for the *type* by merging the type of the class
// (`interface ExtendsDemo`) with the type of the mixin (`Evented`)
interface ExtendsDemo extends Evented {}

const instance = ExtendsDemo.create({
  moreStuff: false,
});

instance.trigger('custom');
```

Note: you will have to disable the `@typescript-eslint/no-empty-interface` ESLint rule for this.

You can do the same for your own mixins while transitioning by defining an interface which represents the type of the mixin:

```ts
import Mixin from '@ember/object/mixin';

// Creates the runtime mixin code
const Alertable = Mixin.create({
  alert(value: string) {
    alert(`The value is ${value}`);
  }
})

// Creates the type for TypeScript to see.
interface Alertable extends Mixin {
  alert(value: string): void;
}

// Exports them as a single name in both value and type space.
export default Alertable;
```


##### `.reopen()`

In general, `.reopen()` is an antipattern, because it makes it very hard to understand where a given part of a class’ state or behavior lives, and you should move away from it! You should prefer to *delegate* to a class instead of dynamically adding behavior to it, both for maintainability and for performance. However, for the transition, you can represent it using interface merging.

```ts
import EmberObject from '@ember/object';

class Foo extends EmberObject {
  someProp = 123;
}

// This is what makes the change work at runtime...
Foo.reopen({
  extra: 'hello',
});

// ...while this is what makes it visible to the type system.
interface Foo {
  extra: string;
}

// Now when calling `Foo.create`, or when working with an instance of the
// class, both `someProp` and `extra` will be checked.
const instance = Foo.create({
  someProp: 456,
  extra: 'goodbye',
});
```


##### `.reopenClass()`

As with `.reopen()`, the use of `.reopenClass()` is an antipattern you should move away from over time, preferring to use regular functions in module scope or normal static methods on native classes. In the meantime, you can use *namespace merging* to represent how it works:

```ts
import EmberObject from '@ember/object';

class Foo extends EmberObject {
  static someStatic = true;
}

// This adds the method to the Foo class at runtime...
Foo.reopenClass({
  anotherStatic(): string {
    return 'hello';
  },
});

// ...and this makes it visible to TypeScript as a static method.
declare namespace Foo {
  export function anotherStatic(): string;
}

if (Foo.someStatic) {
  Foo.anotherStatic().length;
}
```

Note: you will have to disable the `@typescript-eslint/no-namespace` ESLint rule for this.


### Type registries

These types, as a fairly direct extraction from DefinitelyTyped, currently maintain the service and controller type registries. Given the lack of support for classic computed properties, which are the main way to take advantage of those at present, **it is fairly likely some or all of these will be removed before stabilizing the types.** The major remaining use case is type-safe lookup using the `Owner.lookup` APIs, so if you have thoughts on that, please reach out in [`#dev-typescript`][discord].


### Legacy routing type locations

In line with [RFC 0821: Public API for Type-Only Imports][0821], this PR also removes support for importing the types for `Transition`, `RouteInfo`, and `RouteInfoWithMetadata` from the private locations that DefinitelyTyped presently supports for backwards compatibility. Users will need to migrate to using the correct import paths when switching to use these imports.


## New TypeScript users

*This section only applies if you are trying out the types for the first time!*

For the moment, the best way to get started with these types is to install `ember-cli-typescript` and use its generators, then *remove* a lot of what it does. We will be fixing this in the weeks ahead!

Here’s the process as of today:

1. Set up `ember-cli-typescript` by running `ember install ember-cli-typescript`.

2. Remove the following newly-added packages from your `package.json`:

    - `@types/ember`
    - `@types/ember__application`
    - `@types/ember__array`
    - `@types/ember__component`
    - `@types/ember__controller`
    - `@types/ember__debug`
    - `@types/ember__destroyable`
    - `@types/ember__engine`
    - `@types/ember__error`
    - `@types/ember__helper`
    - `@types/ember__modifier`
    - `@types/ember__object`
    - `@types/ember__owner`
    - `@types/ember__polyfills`
    - `@types/ember__routing`
    - `@types/ember__runloop`
    - `@types/ember__service`
    - `@types/ember__string`
    - `@types/ember__template`
    - `@types/ember__test`
    - `@types/ember__utils`

3. Install a version of `ember-source` greater than `4.8.0-beta.2`. You should pick the latest beta of 4.8 *or* any stable version starting with 4.8.0 once it's out!

4. In the `types/<your-app>/index.d.ts` file generated for you automatically by `ember-cli-typescript`, add the new imports as the first items in the file, and remove the array prototype extensions support from the file. With the defaults generated for you, the result would look like this:

    ```diff
    +import 'ember-source/types';
    +import 'ember-source/types/preview';
    -import Ember from 'ember';
    -
    -declare global {
    - // Prevents ESLint from "fixing" this via its auto-fix to turn it into a type
    - // alias (e.g. after running any Ember CLI generator)
    - // eslint-disable-next-line @typescript-eslint/no-empty-interface
    - interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
    - // interface Function extends Ember.FunctionPrototypeExtensions {}
    -}

    export {};
    ```


## Known issues

The first beta release has the following known issues (which we will fix during the beta period):

- The `@types/ember-data` packages are not compatible with these types, because they assume. If you are using Ember Data with TypeScript, you will need to wait for a future update.
- The import file for stable types does not exist yet, so TypeScript will warn you that there is no type for the module. We expect to fix this before releasing `4.8.0-beta.3`!


## What's next on Ember’s road to TypeScript?

Now that we have these preview types in place, we can begin publishing types in a stable way as soon as our build tooling for Ember itself supports it. As we do so, more and more the types will be provided by the `import 'ember-source/types';` import, and fewer from the `import 'ember-source/types/preview';` import. That will largely be transparent to you as an end user. Where there are be small differences, we will note them as it happens!

We *hope* to progressively switch over from these preview types to the stable types in the 4.9–4.11 time frame—that is, before the 4.12 LTS candidate release comes out. As always with software, and especially open source software, there are no guarantees, though!

We are also working on a “quest” issue for getting the rest of [RFC 0800][0800] implemented. There are a *lot* of other core packages which need to publish types for us to get all the way to our goal of having first-class TypeScript support for the ecosystem. We could use your help! If you’d like to pitch in, check out [the tracking issue][issue] and reach out [in `#dev-typescript` on Discord][discord]!

[issue]: https://github.com/emberjs/ember.js/issues/20162
[discord]: https://discord.com/channels/480462759797063690/786312479620726804

In parallel, there are two other big efforts in flight:

1. The Ember TypeScript team is making steady progress on getting [Glint][glint] to its 1.0 release.

    - We recently shipped basic support for TypeScript [project references][ts-pr], i.e. the `--build` command, and expect to finish that up by supporting `--build --watch` mode in the next month or two.

    - We supported Framework Core team member emeritus [@chadhietala][chad] in landing full support for [GlimmerX][glimmerx] in Glint.

    - We identified a significant refactor we can make which will let us give *much* better type errors and eliminate a number of tricky edge cases. (If you’ve hit the “Expected 3 arguments but got 2” error for an item which only *has* two arguments, this will fix that and a bunch of others as well!)

2. The Ember Learning team is working closely with the Ember TypeScript team and to build out support for TypeScript in our API docs and the Guides. The effort is being led by a community member, [@ttbach][thao]—and she could also use your help, too! Most of the work here does *not* require TypeScript expertise, only the ability to work on Node tools, so it’s another great spot to jump in. Reach out to `@thaobach` in [`#dev-ember-learning`][learning-discord] if you would like to contribute!

That’s it for now, but keep your eyes open for further blog posts about the TypeScript effort and other parts of Polaris!


[glint]: https://typed-ember.gitbook.io/glint
[ts-pr]: https://www.typescriptlang.org/docs/handbook/project-references.html
[chad]: https://github.com/chadhietala
[glimmerx]: https://github.com/glimmerjs/glimmer-experimental
[thao]: https://github.com/ttbach
[learning-discord]: https://discord.com/channels/480462759797063690/480777444203429888
