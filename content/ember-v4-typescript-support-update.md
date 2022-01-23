---
title: Ember v4 TypeScript Support Update
authors:
  - chris-krycho
date: 2022-01-25T00:00:00.000Z
tags:
  - '2022'
  - typescript

---

The [Typed Ember](https://github.com/typed-ember) team—[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho), [Dan Freeman (@dfreeman)](https://github.com/dfreeman), and [James Davis (@jamescdavis)](https://github.com/jamescdavis)—is happy to announce that the `@types` type definition packages, maintained on [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped), now have full support for Ember 4.x! This is *two major changes* with *two big benefits*.

The two major changes:

* **All APIs which were deprecated during the 3.x cycle and removed in Ember v4.0.0 have been dropped from the types.** (Amusingly, this includes a number of things which were deprecated in 2.x and removed at 3.0, and even a few which were deprecated the 1.x era and removed at 2.0!) Additionally, a number of types representing private API have been removed, in line with our standing policy of providing types for *only* public APIs.

* **The minimum supported TypeScript version is 4.4.** This aligns with the direction we expect to propose for Ember’s own TypeScript support policy, where major releases will generally adopt a recent TypeScript version as their minimum supported version, and with a support policy similar to that for browsers and Node LTS releases. (Keep your eyes open for a forthcoming RFC tackling those details!)

[e-typescript]: https://discord.com/channels/480462759797063690/484421406659182603

The two big benefits:

1. **If you’re a JavaScript Ember user**, your editor tooling may get a bit smarter and better invisibly: VS Code (and maybe other editors, too) can take advantage of these types to provide you with better autocomplete, docs, etc. and those will all correctly reflect Ember v4 APIs.

2. **If you’re a TypeScript Ember user**, you can now use v4 in your `@types` dependencies. That will give you the same benefits as JavaScript users get via the up-to-date definitions for Ember itself, but it will also provide *much* better feedback and errors in many cases, because we are now using the latest and greatest features of TypeScript for these types.

Note that we have *not* yet removed the v3 deprecations or updated the strictness of the Ember Data v4 types, but we *have* updated Ember Data’s types to use the same minimum TypeScript version and to be compatible with the changes made in Ember’s types. (Unfortunately, none of the Typed Ember maintainers has deep familiarity with Ember Data!) If you’d like to help get those up to date, reach out to us in [#e-typescript on the Ember Discord][e-typescript]!


## Notable changes

* The types now use `"strict": true` in their compiler options. *In general*, this will not cause you any work; instead, it means that internally the types have to be more robust, which should cause you *fewer* issues when working in strict mode yourself. However, in a few cases, it meant we caught type safety bugs during the upgrade, which may show up in changes like those listed below.

* **Breaking:** Throughout, the types use `unknown` in many places where they previously used `any`.

* **Breaking:** many of the API types have been improved and many bugs fixed. This means that they are likely to reject a number of invocations which were allowed previously, but which would produce bugs at runtime, were misleading or confusing, etc.

    A few notable examples:

    * The `beforeModel` and `afterModel` hooks on `Route`s have been updated to require that you return either a `Promise` or *nothing*, since return values are otherwise ignored. If you were returning non-`Promise` values previously, you should remove those `return` statements.

    <!-- alex ignore invalid -->
    * The `@ember/runloop` functions all now robustly check their arguments. If you were passing invalid arguments for the callbacks, the compiler will  now catch that.

<!-- alex ignore just -->
* **Breaking:** The `TestContext` for the callbacks used in `module`, `beforeEach`, `afterEach`, `test`, etc. has moved from `ember-test-helpers` to `@ember/test-helpers`. Having nearly everything be in `@ember/test-helpers` but *not* `TestContext` has been a persistent source of confusion over the years, and was just a bit of historical baggage left over from before `@ember/test-helpers` existed. (If [RFC #0785](https://github.com/emberjs/rfcs/pull/785) is merged, we will also be able to move away from using the `TestContext` at all!)


## Upgrading

To upgrade to using these types:

1. **Update your project to use TypeScript 4.4 or later.** Fix any type errors this identifies (especially if you are using the recommended `"strict": true` settings).

2. **Update to Ember 4.0 or later.** This *itself* will require removing all the deprecated code paths, which will be the major effort.

3. **Update to Ember Data 4.0 or later.**

4. **Update the core Ember and Ember Data types.** This may mean doing a fair bit of cleanup across your code base to bring things in line with the stricter and more robust types we now supply.

    * Upgrade `@types/ember` to `"~4.0"`.

    * Upgrade all `@types/ember__*` *except* `@types/ember__string` and `@types/ember__test-helpers` to `"~4.0"`.

    * Upgrade `@types/ember-data__*` to `"~4.0"`.

5. **Update related types packages.** Some `@ember/*` packages are versioned separately from the packages in `ember-source` and so need their own updates:

    * Update `@types/ember__string` to `"~3.0"`.

    * Update `@ember/test-helpers` to `"~2.6"`. **This will not compile until you complete step 6 below.**

6. **Update testing infrastructure.** While these packages are technically independent of the Ember major version, coordinating this particular upgrade required updating them in parallel.

    * Upgrade to `ember-qunit@^5` and `@types/ember-qunit@^5`.

    * Anywhere you have imported `TestContext` from `ember-test-helpers`, replace it with `import { type TestContext } from '@ember/test-helpers';`. You will likely be able to merge this with existing imports from `@ember/test-helpers`.

    * Remove all references to `ember-test-helpers` from your project, and remove `@types/ember-test-helpers` from your dependencies.

Once everything is compiling again, you will be good to go!

**Note:** you *must* generate a new lockfile, use yarn `resolutions`, or manually delete all of these `@types` package versions from your existing lock file when doing the upgrade, or you will certainly see conflicts between existing (transitive) dependencies on these types and your updated versions. This is the result of two things which are reasonable on their own but do not work together well:

* TypeScript can only type check successfully if there is only a single representation of a given type (for example, `EmberObject`). If it ends up with conflicting definitions of the same type, it has to give up because it does not know what it should choose.

* npm and Yarn both try to preserve existing transitive dependencies and installing new copies when you bump a version. This is the safest behavior for runtime dependencies! It means that if you update a top-level dependency, if some other package is depending on a different version of it transitively, that other package does not break.


## What if I get stuck?

You may hit interesting challenges in dealing with the improved type strictness in places where your code relied on the loose types (or the erroneous types!) before. If you are having a hard time, please reach out in [#e-typescript on Discord][e-typescript] or [start a Discussion on the ember-cli-typescript-repo](https://github.com/typed-ember/ember-cli-typescript/discussions). The Typed Ember team is happy to help, and many other people in the community are as well.

Also, while we’ve done our very best to make this totally bug-free , it’s entirely possible that we missed something or made a mistake! Please feel free to check in with us [on Discord][e-typescript] or to [file a bug](https://github.com/typed-ember/ember-cli-typescript/issues). We encourage you to check with us first, though: in many cases things which seem like bugs are actually the type system catching errors the previous types couldn’t catch!


## The future

We hope (and fully expect!) this to be the last major release of Ember’s types on DefinitelyTyped. During the 4.x series, we aim to finish the work to [officially support TypeScript](https://github.com/emberjs/rfcs/pull/724). That will make it much easier for TypeScript users (and maintainers!) to deal with both major and minor updates:

* Deprecations will automatically be present in both types and run-time code, and they will be removed right alongside runtime changes when prepping for a major release.

* The design of deprecations or changes will include smooth migration paths for types as well as for the runtime behavior of the app.

* More generally, having types as first-class parts of every design discussion means that new APIs will be TypeScript-friendly automatically. (Many older Ember APIs are *very* unfriendly to TypeScript!)

* <!-- alex ignore just --> The supported TypeScript versions will be documented clearly, just like with Node and browsers, making it easier for you to know what you should do to stay up to date.

* Breaking changes in one package will not necessarily cause breaking changes in other packages. The updates to the test infrastructure types, for example, will not breaking in the future!

And as always, those benefits will extend to *even more* of our just-JavaScript users, because many more editors take advantage of types which ship natively with packages than implicitly take advantage of the types from DefinitelyTyped.

Keep your eyes open for an RFC in the next few weeks tackling all of these kinds of things and more. Happy TypeScripting!
