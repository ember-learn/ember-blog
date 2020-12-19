---
title: Countdown to The New Year - Ember Angle Brackets Codemod
authors:
  - ryan-mark
date: 2019-12-09T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the ninth in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 9

Until recently, converting Ember templates to use Angle Bracket invocation was a tiresome and manual task. With the latest version of [ember-angle-brackets-codemod](https://www.emberobserver.com/addons/ember-angle-brackets-codemod), you get a smarter, more complete codemod to change your templates in a flash!

<!-- READMORE -->

### What It Does

Before Angle Bracket invocation, nearly every template construct in Ember was invoked using Handlebars `{{doubleCurly}}` syntax. This made differentiating between components, helpers, and plain values incredibly difficult.  Angle Brackets alleviate most of this ambiguity.  But what if you wanted to change every double curly component invocation to Angle Brackets?  That task could take forever (especially if you cant reliably tell the difference between everything in your templates)!  The Angle Bracket Codemod eases the transition in a few simple steps:

1. It visits a URL of your app that is supplied as a command line argument
2. A small bit of code is injected into the context of the app.
3. The code identifies the app's components and their properties, as well as all the helpers. This includes those in addons!
4. Given all this information, the codemod quickly changes all the apps templates preserving most of the whitespace and indentation.

Here is an example of typical conversion:

#### Before

```hbs
{{site-header user=this.user class=(if this.user.isAdmin "admin")}}

{{#super-select selected=this.user.country as |s|}}
  {{#each this.availableCountries as |country|}}
    {{#s.option value=country}}{{country.name}}{{/s.option}}
  {{/each}}
{{/super-select}}

{{ui/button text="Click me"}}
```

#### After

```hbs
<SiteHeader @user={{this.user}} class={{if this.user.isAdmin "admin"}} />
<SuperSelect @selected={{this.user.country}} as |s|>
  {{#each this.availableCountries as |country|}}
    <s.option @value={{country}}>
      {{country.name}}
    </s.option>
  {{/each}}
</SuperSelect>

<Ui::Button @text="Click me" />
```

Additionally, the codemod has a number of options that can be configured. The codemod can be adjusted to skip certain helpers, avoid changing built-in components `{{link-to}}`, `{{input}}` and `{{textarea}}`, or skipping files for conversion altogether.

### Why I Like It

Codemods are the best, especially if they are smart! They save a significant amount of time and they are typically better than manual intervention. Until a few months ago, running this codemod and the changes it made were entirely based on a set of heuristics. The codemod was good but it often made mistakes, requiring an exhaustive amount of human input.  Today the codemod can intelligently convert templates to Angle Bracket invocation with exceptional precision, often with few to no errors.  This allows teams to opt-in to the future in an instant instead of wasting precious cycles.

Do you use this codemod? Or one like it? We'd love to hear about Ember codemods that bring you joy!
