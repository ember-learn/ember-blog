---
title: Ember 7.1 Released
authors:
  - jared-galanis
  - chris-manson
  - katie-gengler
date: 2026-07-17T00:00:00.000Z
tags:
  - releases
  - '2026'
  - version-7-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v7.1. This is a standard minor release as part of the [standard Ember Release Train process](https://emberjs.com/releases/). 

This release contains some serious improvlement to the Developer Experience of people using GJS files, adds some new built-in helpers, and furthers our commitement to reduce the number of deprecated npm package warnings you see when generating a new application.

## Ember.js 7.1

Ember 7.1 introduces a number of long-awaited new built-in helpers (`{{element}}`, `{{and}}`, `{{or}}`, `{{lt}}` `{{lte}}`, `{{gt}}`, `{{gte}}`, `{{eq}}`, and `{{neq}}`) and a significant improvement to the Developer Experience of using some often used helpers and modifiers in GJS files. The template examples in the API documentation app have all been updated to use `<template />` tag format.


### Element Helper

This release is the first time that the `{{element}}` helper has been included in Ember.js itself. This helper was originally proposed in [RFC #389](https://rfcs.emberjs.com/id/0389-dynamic-tag-names/) - back in 2018! The element helper is a useful tool when you need to generate a specific DOM element based on dynamic data. For example, if you had a component that needed to chose to render a `<div>` or a `<span>` based on some data passed to your component, you could do something like this: 

```gjs
{{#if (eq @renderTag 'div')}} 
  <div ...attributes>{{@text}}</div>
{{else if (eq @renderTag 'span')}}
  <span ...attributes>{{@text}}</span>
{{/if}}
```

As you can imagine this can get a bit hard to manage when needing to cater for many different tag types. But now you can use the `{{element}}` helper to dynamically generate the tag and use it directly in your code: 

```gjs
{{#let (element @renderTag) as |Tag|}}
  <Tag ...attributes>
    {{@text}}
  </Tag>
{{/let}}
```

Since the RFC was proposed teams have been directly consuming the reference implementation for the RFC that was [published as an addon](https://github.com/emberjs/ember-element-helper), so with this release that addon is no longer needed. With it being available from Ember.js directly that means that it can be included in the set of "Built-in helpers" which you will learn more about if you keep reading 😉

### Logical, Equality, and Numeric Comparison Operators

[`ember-truth-helpers`](https://github.com/jmurphyau/ember-truth-helpers) is one of the most popular Ember Addons in the wider ecosystem, and most apps have installed it either directly or indirectly through other Ember Addons depending on it. It is so popular that [RFC #562](https://rfcs.emberjs.com/id/0562-add-logical-operators/) proposed that the `{{and}}`, `{{or}}`, and `{{not}}` helpers provided by `ember-truth-helpers` should be included in Ember.js by default. Also, [RFC #561](https://rfcs.emberjs.com/id/0561-add-numeric-comparison-operators/) proposed the inclusion of the `{{lt}}`, `{{lte}}`, `{{gt}}`, and `{{gte}}` helpers into Ember.js and [RFC #560](https://rfcs.emberjs.com/id/0560-add-equality-operators/) proposed the inclusion of the `{{eq}}` and `{{neq}}` helpers. 

Because `ember-truth-helpers` was such a popular (and useful) addon, there was little motivation to do the work and include these helpers in Ember.js by default. But just like the `{{element}}` helper above, now that we have the ability to provide "Built-in helpers" for templates we can significantly improve the ergonomics for Ember developers by finally implementing these RFCs and making the helpers a part of Ember.js by default. I guess it's time to explain what I mean by "Built-in helpers".

### Built-in Modifiers and Helpers

In the blueprints shipped with Ember 6.8 we made the [new GJS template format the default experience for the generators in apps](/ember-released-6-8#toc_component-and-route---strict-by-default), so when you generate a component or a route template you will get a `.gjs` file instead of what was previously a `.hbs` file. You can go and read more about the benefits of GJS files in [RFC #779](https://rfcs.emberjs.com/id/0779-first-class-component-templates/), but a very short summary of the biggest difference is that you need to import everything that use use before you use it. This is achieved by compiling GJS files with "strict mode", which means that templates no longer realy on the Ember Resolver to look up Invokables (Components, Helpers, and Modifiers) by name but instead just check local scope of the file to find the Invokable before adding it to the template. 

This one simple change has helped Ember templates feel a lot less "magical" for developers who are new to Ember, no longer haiving to guess which (potentially nested) addon a random `<FancyButton />` component is coming from, but this change did come with a slight cost. Now that you need to import everything that you are using in template, you suddenly need to start importing things that Ember.js automatically provides for you such as the `{{on}}` modifier, the `{{fn}}` helper, or the `<LinkTo />` component. And to make it even more challenging each of these Invokables are imported from different places: `@ember/modifier`, `@ember/helper`, and `@ember/routing` respectively. While there has been some efforts to improve tooling so that when you use one of these Invokables in a template your editor would help you to auto-complete the import statement for you, this doesn't represent a full fix for the problem and can't help anyone developing in an environment that can't make use of the modern [Glint](https://github.com/typed-ember/glint) toolchain. 

In [RFC #997](https://rfcs.emberjs.com/id/0997-make-on-built-in/) it was proposed that the `{{on}}` helper would be **automatically imported** for you when you use it in a strict template (e.g. GTS) and Ember.js 7.1 is the first version where this RFC has been implemented. This release also includes the implementation for [RFC #998](https://rfcs.emberjs.com/id/0998-make-fn-built-in/) to make the `{{fn}}` helper be automatically imported into strict templates, [RFC #999](https://rfcs.emberjs.com/id/0999-make-hash-built-in/) for the `{{hash}}` helper, and [RFC #1000](https://rfcs.emberjs.com/id/1000-make-array-built-in/) for the `{{array}}` helper. What's more since the Element helper and the Logical, Equality, and Numeric Comparison Operators described above were added in the Ember.js version that introduced the concept of auto-importing Invokables, they have also been added to the list 🎉

This means that if you had the following (slightly contrived) example of a GJS component template in Ember.js 7.0: 

```gjs
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

function say(message) { alert(message); }

<template>
  <button {{on "click" (fn say "hello there")}}>Say hello</button>
</template>
```

can be updated to: 

```gjs
function say(message) { alert(message); }

<template>
  <button {{on "click" (fn say "hello there")}}>Say hello</button>
</template>
```

which I think we can all agree is a lot better 😍.

### Updating API documentation to GJS

Since the new [RFC Stages RFC](https://rfcs.emberjs.com/id/0617-rfc-stages) was adopted, we have had a very clear definition of when an RFC is considered done, and the necessary code to implement a new feature being written is only step 3 of 5! Once something is released (Stage 4) we continue to track the work until it becomes Recommended (Stage 5). The precice definition of Recommended is different for every RFC, but it is safe to assume that updating the all of the documentation around changes proposed in an RFC will be a prerequsite before an RFC can be marked as Recommended i.e. fully and completely done.

This release includes one of the last changes necessary before [RFC #779](https://rfcs.emberjs.com/id/0779-first-class-component-templates/) (the RFC that introduced GJS files) could be marked as Recommended. All of the API documentation embedded in the Ember.js source code (and that gets extracted into the [Ember API Docs](https://api.emberjs.com/ember/release) app) has been updated to use `<template>` tag syntax rather than "bare templates" that rely on the resolver to find Invokables. 

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

### Changes in Ember CLI 7.1

Ember CLI changes for 7.1 were mostly dependency updates to both the blueprints and to the main package.

#### Bug fixes

- [#11028](https://github.com/ember-cli/ember-cli/pull/11028) A fix that allows blueprints to be authored in esm. This fix was backported to 7.0.1 as well. As of version 7.2, running blueprints from `ember-source` will require Ember CLI v7.0.1 or higher.

For more details on the changes in Ember CLI 7.1 and detailed upgrade
instructions, please review the [Ember CLI 7.1.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v7.1.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
