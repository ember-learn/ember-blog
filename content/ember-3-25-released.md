---
title: Ember 3.25 Released
authors:
  - ricardo-mendes # replace with real authors from the author folder (add yourself if you're not there)
date: 2021-02-25T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-3-x
---

Today the Ember project is releasing version 3.25 of Ember.js, Ember Data, and Ember CLI. <!-- Block start: Uncomment if an LTS candidate --><!--This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.--><!-- Block end -->

This release kicks off the 3.26 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.25

Ember.js 3.25 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 3.25 contains several bug fixes, including:

- Empty `hmtmlSafe` strings are now considered false. ([#18148](https://github.com/emberjs/ember.js/pull/18148))
- Template locals no longer clobber component invocations of the same name. ([#19351](https://github.com/emberjs/ember.js/pull/19351))
- Improved error message when invoking nested components, e.g. `<Foo:Bar />`. ([#19336](https://github.com/emberjs/ember.js/pull/19336))
- Improved error messages and stack traces for `<LinkTo />`. ([#19342](https://github.com/emberjs/ember.js/pull/19342))

#### Features

Ember.js 3.25 introduced 2 features.

1. Template strict mode ([#19302](https://github.com/emberjs/ember.js/pull/19302), [#19306](https://github.com/emberjs/ember.js/pull/19306), [#19319](https://github.com/emberjs/ember.js/pull/19319))

While this feature won't have an impact for Ember developers quite yet, it is an important step towards allowing more experimental work in templates, like template imports and single-file components.

If these topics interest you, keep an eye on our [RFCs](https://github.com/emberjs/rfcs) repository for activity and a chance to participate!

1. Named blocks ([#19318](https://github.com/emberjs/ember.js/pull/19318))

This feature enables developers to yield distinct blocks from a component, unlocking powerful composition patterns for components.

This feature is useful when you want to render different things depending on passed-in data.
Let us implement a shopping cart that lists the items in it, or shows a message says that it is empty.
We will be using `{{gt}}` from [`ember-truth-helpers`](https://emberobserver.com/addons/ember-truth-helpers) to help implement this.

First we write the component template:

```handlebars
// app/components/cart.hbs
{{#if (gt @list.length 0)}}
  <ul>
    {{#each @list as |item|}}
      <li>{{yield item}}</li>
    {{/each}}
  </ul>
{{else}}
  {{yield to="empty"}}
{{/if}}
```

Which can be used like so:

```handlebars
<Cart @list={{this.shoppingList}}>
  <:default as |listItem|>
    <p>You have a {{listItem}}.</p>
  </:default>
  <:empty>
    <p>Your cart is empty.</p>
  </:empty>
</Cart>
```

Then when `shoppingList` contains multiple elements, like `[ "apple", "pear", "banana" ]`, it renders the following:

```handlebars
<ul>
  <li><p>apple</p</li>
  <li><p>pear</p</li>
  <li><p>banana</p</li>
</ul>
```

But if `shoppingList` is empty, it renders the following instead:

```handlebars
<p>Your cart is empty.</p>
```

Named blocks are also useful if you want to ensure a certain structure to your HTML, but want to enable customization of the content.
An example of this would be an `<Article>` component, as shown in the yieldable named blocks RFC ([#460](https://emberjs.github.io/rfcs/0460-yieldable-named-blocks.html#detailed-design)).

You can find more information in the [Component API documentation](https://api.emberjs.com/ember/3.25/modules/@glimmer%2Fcomponent).

#### Deprecations

Ember.js 3.25 introduced 0 deprecations.

For more details on changes in Ember.js 3.25, please review the [Ember.js 3.25.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.25.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.25

Apart from documentation fixes and internal cleanup of feature flags, there were no changes.

For more details on changes in Ember Data 3.25, please review the
[Ember Data 3.25.0 release page](https://github.com/emberjs/data/releases/tag/v3.25.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.25

Apart from updated dependencies in the app and addon blueprints, there were no changes.

For more details on the changes in Ember CLI 3.25 and detailed upgrade
instructions, please review the [Ember CLI 3.25.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.25.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
