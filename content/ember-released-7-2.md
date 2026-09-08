---
title: Ember 7.2 Released
authors:
  - jared-galanis
date: 2026-09-08T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-7-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v7.2. This is a standard minor release as part of the [Ember Release Train process](https://emberjs.com/releases/).

This release takes two important steps towards making Ember apps look and feel like plain JavaScript: a new built-in Strict Resolver that does away with `modulePrefix`, and `ember-source` finally being published as a fully ESM package. It also fixes a couple of bugs in the rendering engine and continues the work of untangling the blueprint system from ember-cli 💪

## Ember.js 7.2

Ember.js 7.2 introduces one new feature, the built-in Strict Resolver proposed in [RFC #1132](https://rfcs.emberjs.com/id/1132-default-strict-resolver), sets `type: "module"` on the `ember-source` package, and ships two bugfixes. There are no new deprecations.

### Built-in Strict Resolver

If you have ever opened the `app/app.js` file in an Ember application you will have seen something like this:

```js
import Application from '@ember/application';
import compatModules from '@embroider/virtual/compat-modules';
import Resolver from 'ember-resolver';
import config from 'my-app/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver.withModules(compatModules);
}
```

The Resolver is the part of Ember that takes a string like `service:current-user` and finds the right JavaScript module to back it. Historically that has meant looking up a module named `my-app/services/current-user`, where `my-app` is the `modulePrefix`. The concept of a `modulePrefix` (and its even weirder sibling `podModulePrefix`) has been with us since the very early days of ember-cli, and it has always been a little bit odd. It's not a concept that exists in any other JavaScript application. Modules are simply modules, and you import them by their path.

Ember 7.2 includes a new **Strict Resolver** that is built into Ember.js itself. Rather than relying on a `modulePrefix` and dynamic string-based lookups, you give your `Application` an explicit map of modules using the new `modules` property, and the Strict Resolver will only ever resolve things out of that map. Since Vite gives us `import.meta.glob()` you don't even need to write the map out by hand:

```js
import Application from '@ember/application';
import Router from './router';

export default class App extends Application {
  modules = {
    './router': { default: Router },
    ...import.meta.glob('./services/**/*', { eager: true }),
    ...import.meta.glob('./routes/**/*', { eager: true }),
    ...import.meta.glob('./controllers/**/*', { eager: true }),
    ...import.meta.glob('./templates/**/*', { eager: true }),
  };
}
```

No `modulePrefix`, no `podModulePrefix`, no `ember-resolver` dependency, and everything the resolver could possibly return is statically visible in one file. This is great for tree-shaking and build-time optimisation, and it is a lot easier to explain to someone who is new to Ember. Before this release you could get the same behaviour by installing the [ember-strict-application-resolver](https://github.com/NullVoxPopuli/ember-strict-application-resolver) polyfill, and Ember 7.2 is the first version where you can use it without installing anything extra.

Now for the honest part 😅 This is an important step on the road to removing `modulePrefix` from Ember apps altogether, but it is not the end of that road. While `import.meta.glob()` is perfect for picking up the files in your own app, it doesn't know anything about the services, components, or templates that are provided by the addons you have installed. Today those come from `@embroider/virtual/compat-modules`, and Embroider still prefixes every one of those module names with your `modulePrefix`. Until Embroider learns to detect when you are using `modules` on your `Application` and omit that prefix, a real-world app that uses addons still needs `ember-resolver` and `compatModules`.

Because of that, the default app blueprint has **not** changed to use the Strict Resolver yet, and `ember-resolver` is **not** deprecated. When the rest of the pieces are in place we will update the blueprint and let you know in a future release blog. In the meantime, if you are building something small (for example a test app or a minimal app that doesn't depend on addons) you can start using the Strict Resolver today. You can read more about the motivation in the [Default Strict Resolver RFC](https://rfcs.emberjs.com/id/1132-default-strict-resolver).

Introduced in [emberjs/ember.js PR #21303](https://github.com/emberjs/ember.js/pull/21303)

### `ember-source` is now `type: "module"`

If you have ever wondered why some files in an Ember project end in `.mjs` or `.cjs`, this section is for you.

Node.js has two module systems: the older CommonJS format (the `module.exports = {}` and `require()` that you will see in a lot of older Node code) and the standard ECMAScript Modules format, or ESM (the `import` and `export` syntax that you use in your app code every day). When Node.js looks at a `.js` file, it needs to decide which of the two formats it is dealing with, and it uses the `type` field in the nearest `package.json` to make that decision. If a package doesn't have a `type` field it is assumed to be CommonJS, and any file that wants to use `import` and `export` has to be renamed to `.mjs` so that Node.js can tell it apart.

Setting `"type": "module"` inverts that. Every `.js` file in the package is now assumed to be ESM, with no exceptions, and if you have any leftover CommonJS files you have to rename them to `.cjs` instead. In Ember 7.2 we have set `"type": "module"` on the `ember-source` package. That doesn't sound like much on its own, but it is a flag in the sand: it tells every tool that consumes `ember-source` that every file in there is an ES module, which lets bundlers make much better assumptions about what they can safely drop from your bundle. It isn't enough by itself to shrink your bundle (there is more work coming on that front), but it is a necessary step that we have been working towards for a long time.

If you have been reading these release blogs you will have seen us gradually converting individual files to ESM over the past few releases, from [converting `ember-cli-build.js` to an ESM file in Ember 6.12](/ember-released-6-12#toc_convert-ember-cli-build-js-to-an-esm-file) to [adding support for blueprints written in ESM in ember-cli 7.1](/ember-released-7-1#toc_backported-support-for-blueprints-written-in-esm). We could have flipped this switch a year or two ago, but we would have had to rename every remaining CommonJS file in the package to `.cjs`, which would have been messy for no good reason. Instead, we did the conversion work first so that flipping the switch was the last thing left to do. As part of this release all of the blueprints that ship with `ember-source` (the ones that back `ember generate component`, `ember generate route`, and so on) have been rewritten as real ESM modules. The only file that had to be renamed to `.cjs` was the Prettier config.

Also, the wider ecosystem has been moving in the same direction. Since [Node.js added the ability to `require()` an ESM module](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require), and that capability is now in the oldest version of Node.js that we support, there is very little reason left for anyone to publish CommonJS. Everybody gets the benefits once most packages have moved to ESM, and we are happy to be doing our part.

**What does this mean for you?** If you are an app developer the one thing to be aware of is that Ember 7.2 requires **ember-cli 7.0.1 or newer**. The fix that ember-cli needed in order to load ESM blueprints was [backported to ember-cli 7.0.1](/ember-released-7-1#toc_backported-support-for-blueprints-written-in-esm) so you should already have it if you are on Ember 7. If you maintain custom blueprints, nothing about them needs to change, but you are now free to write them as ESM if you like.

Introduced in [emberjs/ember.js PR #21371](https://github.com/emberjs/ember.js/pull/21371), with the blueprint conversion in [PR #21427](https://github.com/emberjs/ember.js/pull/21427)

### Bug Fixes

Ember.js 7.2 introduces 2 bugfixes:

- [#21458](https://github.com/emberjs/ember.js/pull/21458) Sanitization improvements for uppercase source, svg hrefs with `javascript:`, `<iframe>` src with `data:` urls, and `<object>` data attributes with `data:` and `javascript:` urls.
- [#21470](https://github.com/emberjs/ember.js/pull/21470) Re-render dynamic components in append position when the definition changes.

The first fix closes a number of gaps in Ember's built-in URL sanitizer, the thing that stops a user-provided value like `javascript:alert(1)` from ending up in an `href`. If you were intentionally relying on any of the previous behaviour you can opt back in with `trustHTML` from `@ember/template`.

The second fix is for a subtle reactivity bug in strict mode templates. If you rendered a component in "append position" using the inline `{{if}}` helper, for example `{{if @isOk Ok Ko}}`, the template would not update when the argument changed, even though the block form `{{#if @isOk}}<Ok />{{else}}<Ko />{{/if}}` worked fine. Both forms now behave the same.

### Documentation

Now that the `{{element}}`, `{{and}}`, `{{or}}`, `{{eq}}` and friends have been [built into Ember.js as of 7.1](/ember-released-7-1#toc_built-in-modifiers-and-helpers), all of the template helpers have been organised into one list in the API documentation under `@ember/helper`, and the newly added keywords are displayed. See [emberjs/ember.js PR #21547](https://github.com/emberjs/ember.js/pull/21547) for the details.

## Ember CLI 7.2

Ember CLI 7.2 continues the work of pulling the blueprint system out of ember-cli so that it can be used by more modern tooling, improves an error message for blueprint authors, and adds a small nudge for addon authors to document their public API.

### Blueprint model extracted into its own package

Every `ember generate` command is powered by a Blueprint, and the code that knows how to read a blueprint, process its templates, and write the results into your project has lived deep inside ember-cli since the beginning. That has worked fine for a long time, but ember-cli carries a lot of old, clunky machinery along with it, and we don't want every tool that needs to run a blueprint to have to depend on all of ember-cli to do it.

The most immediate motivation is the new [ember-addon-blueprint](https://github.com/ember-cli/ember-addon-blueprint). Modern v2 addons generated with that blueprint don't depend on ember-cli at all, which is great for install size and simplicity, but it also means that if you `cd` into a freshly generated addon and run `ember generate component` there is nothing there to generate it for you. In ember-cli 7.2 the core Blueprint model has been moved into a separate package, `@ember-tooling/blueprint-model`, that can be consumed on its own. This is the first step towards giving v2 addons their generators back without needing to drag ember-cli along for the ride.

This is not something that most people will interact with directly, and ember-cli itself is now consuming the new package, so `ember generate` should behave exactly as it did before. If you do notice anything different please [open an issue](https://github.com/ember-cli/ember-cli/issues).

Introduced in [ember-cli/ember-cli PR #10672](https://github.com/ember-cli/ember-cli/pull/10672)

### Better error when a blueprint package is missing the keyword

For a package to be usable as a blueprint by `ember new` or `ember install`, its `package.json` needs to include `ember-blueprint` in its `keywords` list. Previously, if you forgot to add that keyword, ember-cli would tell you that the package "is not a valid Ember CLI blueprint" and leave you to figure out why. The error message now tells you exactly what is missing. Not many people are writing custom blueprints, but for the ones who are this is a nice little quality of life improvement.

Fixed in [ember-cli/ember-cli PR #11027](https://github.com/ember-cli/ember-cli/pull/11027)

### Placeholder for documenting an addon's public API

More and more addons are providing a top-level `index.js` so that consumers can write `import { MyComponent } from 'my-addon'` rather than needing to know the internal path to every file. To encourage this, the README generated by the classic addon blueprint now includes a `TODO` section prompting you to document each of your public exports: the import path, what it does, its parameters, and an example of how to use it.

Introduced in [ember-cli/ember-cli PR #11035](https://github.com/ember-cli/ember-cli/pull/11035)

### Internal improvements

A large chunk of this release was spent cleaning up ember-cli's own test suite, including [updating `fixturify-project` across five major versions](https://github.com/ember-cli/ember-cli/pull/11048) and [fixing the help tests to stop relying on private APIs](https://github.com/ember-cli/ember-cli/pull/11049). None of that changes anything for people using ember-cli, but it makes the project much healthier for the next set of changes to the blueprint system.

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
