---
title: Ember 6.8 Released
authors:
  - jared-galanis
  - nullvoxpopuli
date: 2025-10-15T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

Today the Ember project is releasing version 6.8 of Ember.js and Ember CLI. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

A release of Ember is comprised of many projects: ember-source, ember-cli, and all the learning team projects. We follow a [6-week release train](http://emberjs.com/releases/) that includes alpha and beta cycles to ensure changes are well-tested. We encourage our community (especially addon authors) to help test the beta builds and report any bugs before they are published as a final release. The `ember-try` addon is a great way to continuously test your projects against the latest Ember releases. While we only consider the release to be complete upon publication of the blog post, the 6-week cycle is anchored by the release of the ember-source package at the beginning of the process. Releases x.4, x.8 and x.12 will become an LTS candidate, so checkout [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/) if you want to know more.

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 6.8

Ember.js 6.8 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

v6.8.0 of `ember-source` is the first minor version of the package to be published to `npm` with [Trusted Publishing](https://docs.npmjs.com/trusted-publishers). We will be implementing this across all our packages. 

At the bottom of the [npm package page](https://www.npmjs.com/package/ember-source), you'll find a section labeled 'Provenance' that provides verification that the package contents were published from the source repository.  

#### Bug fixes

Ember.js 6.8 introduced <insert number here> bug fixes.

#### Features

Ember.js 6.8 introduces 2 new features.

##### `renderComponent`

The new `renderComponent` API provides a powerful way to render components into any DOM element, making it easier to integrate components in other environments like d3, ag-grid, WYSIWYG editors, and more! This feature is particularly useful for micro applications, REPLs, and "islands"-based tools.

`renderComponent` can be imported from `@ember/renderer` and accepts a component definition along with configuration options:

```gjs
import { renderComponent } from '@ember/renderer';

const Greeting = <template>Hello {{@name}}!</template>;

const result = renderComponent(Greeting, {
  into: document.querySelector('#my-element'),
  args: { name: 'World' }
});

// Clean up when done
result.destroy();
```

The API supports several configuration options including:

- `into`: The DOM element to render into
- `args`: Arguments to pass to the component - these can be a `trackedObject`
- `owner`: Optional owner object for service access, (or minimal partial implementation of what your component needs)

[Live Demo](https://limber.glimdown.com/edit?c=JYWwDg9gTgLgBAbzlApgOwCYqgYQuCNdeAXzgDMp84ByAARRACNsB6VTbbGgbgChQkWIjgwoAQwDGAaxQYA8kwBWKSaQpUQtBszaopMYADcUrSRAA2F1YcIBnXnz7m0d%2BG-EwUcALyiJMnKKKmoAFEh8cHDmAK5oMABccAAMADRwkXDAaJKhAJQiHl4AdLHxANTlcGR8JHn8zvbwAGIQEL5wADxe4BaeKAB8mZ3kwCgWGHYoMAOd1gDm6BgDrRCdrAtLQ1FRCAhFKKUQcTAkJJlRnUwxMDCEcISSFsAyPnsHxdmSZyttlevXW6EbZdVijcaTaZDdY9MB9LwDBrkOJqYD3DhYKD5RCZazwcaMYgdDAQSQxEDEUr6LwAUWsFPioRoGGMNHqmQx2DwBCIjNW6SQ2TuSQJDNI7KiqBgMSgaDgouI-HOfG6jDh-RBAGUYP04OJMMgUAZjMAYABPPWoOB2AAW4lQGASTku4ImUxmcxQi0wAwASm0YOtNj6Loh9jqSmVTucdl1AXc5Y9nq93hHDl8fqt-qx48DhmCxm6oZlMntQpyoHkzirWLD4YMgA&format=gjs&shadowdom=on)

You can read more about this on the page for [RFC #1068](https://rfcs.emberjs.com/id/1099-rendercomponent/)


##### `@ember/reactive/collections`

Ember 6.8 introduces a new package `@ember/reactive/collections` that provides built-in tracking utilities for common collections. This package includes tracked versions of JavaScript's native collection types: `trackedArray`, `trackedObject`, `trackedMap`, `trackedSet`, `trackedWeakMap`, and `trackedWeakSet`.

These utilities offer performance and ergonomics improvements over what has been used via public APIs.

```gjs
import { trackedArray } from '@ember/reactive/collections';

const items = ['apple', 'banana'];
const addItem = (arr, item) => arr.push(item);

<template>
  {{#let (trackedArray items) as |list|}}
    {{#each list as |item|}}
      <div>{{item}}</div>
    {{/each}}
    
    <button {{on 'click' (fn addItem list 'cherry')}}>
      Add Item
    </button>
  {{/let}}
</template>
```

[Live Demo](https://limber.glimdown.com/edit?c=JYWwDg9gTgLgBAbzjKBDAxgawKYBMCCUaAnnAL5wBmUEIcA5AALYgBG2UA9FNhjMADdsndBAA2Y7On4QAdgGd6AbgBQoSLERw55KjTpMW7LiAi5glYB2Vrw0eEkqzd1Wg2ZsOnABbYxYa1UVUQV4YBgWeTgAXjgAbXpUMDBJegAaBlZUWWzUegBdVRD5eFRcXABJCLpYgApUIgzwlgBKGIA%2BOAaoADowAFd5b1rmkBaggB5qlNQI9pU4RAQAYkl4WpQMHAIiVFJR%2BTbUKIAfMWASk7IyBcWl5d50bzhzkq7T0aubu7uJ8wF2ggEKNrhNOP95j8gZxHt5rrdFgi4BNWP0YDAdECdPR0OcsPQ4LUnF1ylUWC8LvAcb4iMR6C1rpCfnB8OU4GSQEiwaj0XImdC1vCwdMxLNsO0gA&format=gjs)

You can read more about this on the page for [RFC #1068](https://rfcs.emberjs.com/id/1068-tracked-collections/)

This feature was inspired by `tracked-built-ins` and brings these essential reactivity primitives directly into the framework core.


#### Deprecations

Ember.js 6.8 introduces <insert number here> new deprecations.

For more details on changes in Ember.js 6.8, please review the [Ember.js 6.8.0 release page](https://github.com/emberjs/ember.js/releases/tag/v6.8.0-ember-source).

---

## EmberData

EmberData is the official data persistence library for Ember.js applications.

EmberData 5.7 has been released, and along with EmberData 5.6, 5.5 and 5.4, there are many updates that will be more extensively covered in a full stand alone blog post.

EmberData is also in the process of rebranding to WarpDrive. Stay tuned for more info!

To learn about the motivation and goals for upcoming changes to EmberData in 5.x,
read the [blog post, EmberData 5.X Update](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15/).

<!-- alex ignore retext-equality -->

This will help you form the mental model of what to expect across the 5.x series,
and understand deprecation removals in the context of the upcoming goals.

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

It is not required to keep Ember CLI versions in sync with Ember and EmberData. After updating ember-cli, you can keep your current version(s) of Ember or EmberData by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 6.8

#### Bug fixes

Ember CLI 6.8 introduced <insert number here> bug fixes.

#### Features

Ember CLI 6.8 introduces <insert number here> new features.

#### Deprecations

Ember CLI 6.8 introduces <insert number here> new deprecations.

For more details on the changes in Ember CLI 6.8 and detailed upgrade
instructions, please review the [Ember CLI 6.8.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v6.8.0-ember-cli).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
