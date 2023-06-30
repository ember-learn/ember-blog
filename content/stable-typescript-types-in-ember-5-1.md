---
title: Stable TypeScript Types in Ember 5.1 
authors:
  - chris-krycho
  - the-ember-typescript-team
date: 2023-06-26T00:00:00.000Z
tags:
  - '2023'
  - typescript
  - announcement
  - version-5-x
---

The headlining feature of Ember 5.1 is stable [TypeScript](https://www.typescriptlang.org) support! 🎉 The framework now publishes TypeScript types built from Ember's own source code, with Ember's [strong Semantic Versioning commitment](https://emberjs.com/releases/) baked in—bringing benefits for both TypeScript and JavaScript users. This dedicated blog post walks through all the details.

- [Getting started](#toc_getting-started)
    - [JavaScript](#toc_javascript)
    - [TypeScript](#toc_typescript)
- [Caveats](#toc_caveats)
- [Stability](#toc_stability)
- [Migration Guide](#toc_migration-guide)
    - [From the preview types](#toc_from-the-preview-types)
    - [From DefinitelyTyped](#toc_from-definitelytyped)
- [Background](#toc_background)
- [Onward](#toc_onward)


## Getting started

Both JavaScript and TypeScript developers can benefit from using these new type definitions. If you are JavaScript developer, this will make automatic imports, in-editor framework documentation, and other features work much better for you in your Ember app or addon. If you are a TypeScript user, you will get all of those benefits as well as the strong type safety guarantees and refactoring capabilities you are used to.

### JavaScript

In your `app/app.js`, add this single doc comment to the bottom of the file:

```js
/**
 * @typedef {import('ember-source/types')} EmberTypes
 */
```

<!-- alex ignore just-->
This is all that is necessary to unlock autocomplete and in-editor documentation for all the `@ember/*` packages which ship with Ember with no other adjustment required! Any editor configured to use the TypeScript language server for JavaScript support will "just work" once you make this change—including VS Code, where this works in a default installation.

### TypeScript

Using the stable types in a new TypeScript projects is similar to setting it up for JavaScript, but has a few additional steps. To provide maximum backward compatibility with the rest of the Ember ecosystem, the default TypeScript blueprint still uses the `@types` packages, and configures those packages to use Array prototype extensions. Both of these are incompatible with the stable types, so we need to remove them! In the future, once we can switch to defaulting to using the stable types in the default blueprint, these extra steps will not be necessary.

(For details on migrating *existing* Ember TypeScript projects, see the [Migration Guide](#toc_migration-guide) below as well.)


First, in `types/<your-app>/index.d.ts`, you will likely have something like this:

```ts
import Ember from 'ember';

declare global {
  // Prevents ESLint from "fixing" this via its auto-fix to turn it into a type
  // alias (e.g. after running any Ember CLI generator)
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};
```

<!-- alex ignore just-->
You can replace that whole gnarly mess with just this:

```ts
import 'ember-source/types';
```

Second, you may need to update to recent versions of `ember-qunit`, `ember-resolver`, and `@ember/test-helpers`, which have themselves been updated to use Ember's native types.

Finally, you will need to remove the following packages from your `package.json` file and reinstall your package manager's installation command to update your `node_modules`:

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

That's all you need to do to enjoy the new TypeScript support! However, there are a couple important caveats you should know about.


## Caveats

**First, and most importantly, these new types are not compatible with the existing `@types` definitions for Ember Data.** Unfortunately, Ember Data's hand-written type definitions rely in a number of key areas on some of the mistakes in the `@types` packages for Ember—mistakes that are fixed by using types published from Ember's own source code. So far, the Ember Data team has had too few contributors to make fixing this a top priority. We made the choice to go ahead and publish these stable types from Ember anyway for two reasons:

- While many Ember users *do* rely on Ember Data, not all do, and this makes the best possible types for Ember available to anyone who is not blocked in this way.

- Ember Data itself can now take advantage of the Ember types! This was a long-standing chicken-or-egg problem: Ember Data could not really publish its own stable types while relying on the hand-written `@types` packages for Ember!

Happily, the two newest members of the Ember TypeScript team, Peter Wagenet and Krystan HuffMenne, are both actively interested in tackling this problem, so there will hopefully be good progress in this space in the rest of 2023. (This is a great place to chip in and help, by the way!)

**Second, Ember's stable types do not have full support for the Ember Classic programming model.** If you rely heavily on the Ember Classic programming model, we encourage you to update your code to the Ember Octane programming model—for *many* reasons! For details on absorbing these changes in particular, see the [Migration Guide](#toc_migration-guide) below.


## Stability

Because of the interop challenge with Ember Data, our TypeScript support is *Released* but not yet *Recommended*. This is one of the first major features to land in Ember which leans on this distinction in a way that matters to end users, so here is a quick explainer. Since [RFC 0617: RFC Stages][rfc-0617], features go through up to six stages on the way to being “done”:

0. **Proposed:** A proposal for a change to Ember or its processes that is offered for community and team evaluation.
1. **Exploring:** An RFC deemed worth pursuing but in need of refinement.
2. **Accepted:** A fully specified RFC. Waiting for or in the process of implementation.
3. **Ready for Release:** The implementation of the RFC is complete, including learning materials.
4. **Released:** The work is published. If it is codebase-related work, it is in a stable version of the relevant package(s).
5. **Recommended:** The feature/resource is recommended for general use.

Since TypeScript is *Released*, you can rely on all of our normal SemVer guarantees. Ember's types are now part of our public contract with you as a user, and they have to be maintained with the exact same care as any other part of the framework. Additionally, Chris Krycho and the rest of the Ember TypeScript team developed [a spec for Semantic Versioning for TypeScript Types][semver-ts], which allows Ember (and any other framework or library) to define how it manages supported TypeScript versions and absorb breaking changes from TypeScript. That means it is totally safe for you to rely on these types if you are not impacted by the caveats described above!

One specific point: as described on our [Releases](https://emberjs.com/releases/) page, the Ember framework itself uses a “rolling window” support policy for TypeScript versions. This means Ember can bump its minimum supported TypeScript version in an Ember minor release, the same as it can for Node.js versions—but the supported range of TypeScript versions across two Ember LTS releases must always overlap. So if Ember 5.4 LTS supports TypeScript 4.9–5.3, Ember 5.8 LTS *could* drop support for TypeScript versions earlier than TypeScript 5.3, but must include at least TypeScript 5.3. That guarantees that users can always upgrade their TypeScript and Ember versions separately. In practice, we expect to maintain a fairly wide TypeScript version support window to minimize the impact on the ecosystem—likely (though not guaranteed to be) 4 to 6 recent TypeScript versions at any given time.

Ember's initial supported TypeScript version range is TypeScript 4.9, 5.0, and 5.1.

The only other things that will change once Ember Data publishes types which are compatible with these and we can thus move to “Recommended” are:

- We will include the relevant doc comments or type imports automatically when creating new projects so everyone is opted into getting these types by default, whereas today you must opt in explicitly.

- We will eventually *remove* the `@types` packages entirely, to avoid any possible confusion about what should be installed.


## Migration Guide

For existing Ember TypeScript users, there are a few additional changes you should make for adopting the stable types.


### From the preview types

If you are using the preview types we published starting in Ember 4.8, there is nothing you *have* to do! Everything should keep working. However, you can feel free to delete the preview type import from your `types/<your-app>/index.d.ts` file:

```diff
 import 'ember-source/types';
-import 'ember-source/types/preview';
```


### From DefinitelyTyped

***Note:** this section is very similar to the migration guide for the preview period, but has been updated to account for the changes and improvements we made throughout that period. Thank you to everyone who contributed bug reports and fixes to help make this final product as good as it could be!*

If you are switching to the stable types from the `@types` packages from DefinitelyTyped, and you have *not* already been using the preview types, you may have additional work to do to account for the differences between the preview types and the definitions on DefinitelyTyped. These differences all fall into one of these broad categories:

- Fixes to problems in the existing definitions.
- Removal of our (poor!) support for Ember Classic class features in favor of native classes.
- Changes to type registry handling
- Removal of legacy (private) routing APIs


#### Fixes to problems in the existing definitions

<!-- alex ignore simply -->
During the preview period, we identified and fixed a number of type errors in Ember's internals, as well as many places the `@types` packages were simply wrong. As a result, you may find some differences when you switch over. In every case, these represent *bug fixes*, but we recognize they may involve some work!


#### Removing support for `Array` prototype extensions

This work also exposed a number of errors in the existing types, especially around `Array` prototype extensions. As a result, these types *do not support* `Array` prototype extensions, and it is unlikely that future work will be able to add that support. (The support provided via the types on DefinitelyTyped only worked because the types were defined incorrectly, resulting in a variety of kinds of unsafety.)

Notably, Array prototype extensions are [deprecated and slated for removal][rfc-0848], so moving off of them is work you will need to do *anyway*.


#### Ember Classic support

As specified in [RFC 0800][rfc-0800], there are also a number of breaking changes from the types in DefinitelyTyped regarding support for Ember Classic features:

> Per the edition support policy, we will provide minimal support for Ember Classic features:
>
> - **Ember's classic class system**: we will provide minimal definitions for the `.create()`, `.extend()`, `.reopen()`, `.reopenClass()`, methods, which make no attempt to use them to actually update the types of the items they modify.…
>
> - **Ember’s `get` and `set` helpers:** we will not provide types to make `get` and `set` type-safe beyond property lookups on objects—i.e. no support for nested path lookups.…
>
> - **Classic computed property handling:** we will not provide “safe” types for the classic form of computed properties.


The definitions on DefinitelyTyped attempted to make `.create()` and `.extend()` actually create updated types, and tried to make `.create()`, `.extend()`, `.reopen()`, and `.reopenClass()` have the correct type for `this` within their bodies. These were always extremely fragile and mostly did not work. Since Ember 3.6, Ember users have been able to use native classes instead of Ember’s classic class system, and this has been the recommended way of writing Ember code since the release of the Octane edition in Ember 3.15.

In the preview types, these methods are present and are safe to use since they are still part of Ember’s public API. However, `.create()` and `.extend()` do not create new types. The `.create()` method *does* still check that the values you pass match those defined on the class body, but the types do not attempt to make `this` have the right type within the bodies of `.create()`, `.extend()`, `.reopen()`, or `.reopenClass()`.

To migrate, you should:

- Convert all your own classic classes to native classes.
- Eliminate your use of mixins.

(Most Ember TypeScript users have already done this, because these worked so poorly with TypeScript.)

The `.create()` call can always be replaced with a normal `class` definition in JavaScript. For each of the others, you can also use [declaration merging][merging] to represent the *behavior* of the method in question.


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


#### Legacy routing type locations

In line with [RFC 0821: Public API for Type-Only Imports][0821], this PR also removes support for importing the types for `Transition`, `RouteInfo`, and `RouteInfoWithMetadata` from the private locations that DefinitelyTyped presently supports for backwards compatibility. Users will need to migrate to using the correct import paths when switching to use these imports.

- `import Transition from '@ember/routing/-private/transition'` → `import Transition from '@ember/routing/transition'`
- `import RouteInfo from '@ember/routing/-private/route-info'` → `import RouteInfo from '@ember/routing/route-info'`
- `import { RouteInfoWithMetadata } from '@ember/routing/-private/route-info-with-metadata'` → `import { RouteInfoWithMetadata } from '@ember/routing/route-info'`


## Background

Since 2017, Ember has had TypeScript support via the `@types` packages published from DefinitelyTyped. In Ember 4.8, we began publishing [a preview][preview] of types published with Ember itself. Those type definitions were written by hand, so they were sometimes wrong. We always did our best to match them up to the reality of Ember’s source code, but it was never perfect. With this release, we no longer publish *any* hand-authored types for Ember itself. Instead, the type come straight from Ember’s own TypeScript source. This means they are *always* in sync with Ember itself—they *cannot* be accidentally wrong.

Given that Ember’s source has been written in TypeScript for years, why did it take us so long to get here? For one thing, we needed to [decide to make TypeScript a first-class language][rfc-0724] and [come up with a plan for shipping it][rfc-0800]. For another, Ember’s internals needed a *lot* of polish to be ready to publish. Like many TypeScript code bases, Ember started off as a JavaScript-only code base, and its conversion happend in fits and starts over many years. Some parts of it were still entirely in JavaScript even only a year ago. Finally, we needed to build some custom build infrastructure to make the types usable, since you depend on `ember-source` in your `package.json` file, but import from packages like `@ember/owner`.

If you're curious about the nitty-gritty details, you can check out [the build script][build-script] used to generate types from Ember's source. Additionally, this YouTube video includes a detailed walkthrough of the mechanics of publishing our types:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VuF3GY-Ho-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Onward

This is a huge step for Ember’s TypeScript support. Along with [Glint 1.0][glint-1.0], Ember CLI 4.12's `--typescript` support, improvements to our testing story, and making `<template>` viable, we now have completed all the key work required for Ember itself to have top-notch TypeScript support. Up next: getting Ember Data across the line!

Thank you to everyone who has contributed to this enormous milestone, and to AuditBoard, LinkedIn, Salsify, and Tilde for sponsoring engineering time to get this mammoth task done.


[build-script]: https://github.com/emberjs/ember.js/blob/3fa9068831b1e3cf8e594647a880adc0809861f3/types/publish.mjs
[glint-1.0]: https://blog.emberjs.com/glint-1-0-released
[merging]: http://www.typescriptlang.org/docs/handbook/declaration-merging.html
[preview]: https://blog.emberjs.com/announcing-official-typescript-types-public-preview
[rfc-0617]: https://rfcs.emberjs.com/id/0617-rfc-stages
[rfc-0724]: https://rfcs.emberjs.com/id/0724-road-to-typescript
[rfc-0800]: https://rfcs.emberjs.com/id/0800-ts-adoption-plan
[rfc-0848]: https://github.com/emberjs/rfcs/pull/848
[semver-ts]: https://www.semver-ts.org
