---
title: Countdown to The New Year - Ember Modifier
authors:
  - melanie-sumner
date: 2019-12-03T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


## Day 3

**This is the third in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

Today we are going to look at a rising star in our addon ecosystem- [ember-modifier](https://emberobserver.com/addons/ember-modifier). 

<!-- READMORE -->

### What It Does

The `ember-modifier` addon provides an API for authoring element modifiers in Ember. It mirrors Ember's [helper API](https://api.emberjs.com/ember/3.14/classes/Ember.Templates.helpers), and has forms for writing both simple functional modifiers and more complicated class modifiers.

A modifier can add customized, automatic behavior to a DOM element, such as tracking scroll position or adding new event listeners. After you write a modifier, you can use it in a template like this:

```handlebars
<div {{my-modifier}}>
  Some more content
</div>
```

Developers who have tried out the Octane preview might already be familiar with [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers), which provide some modifiers like `{{did-insert}}` out of the box. With ember-modifiers, you can go beyond the box to build whatever your app needs! 

For an in-depth look at modifiers in Ember, check out [pzuraq's](https://github.com/pzuraq) blog post about [modifiers in Ember Octane](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html). 

### Why I Like It

I think this addon is a really great example of the Ember community coming together and gathering around a single solution that everyone can benefit from. 

This addon was originally a few different addons- ember-oo-modifiers, ember-functional-modifiers, and ember-class-based-modifier. The authors came together and worked to create a single approach - once again, giving the community the gift of strong conventions that are so well-loved and known in Ember. 

I especially loved [Spencer Price's](https://github.com/spencer516) talk about modifiers at EmberCamp Chicago this year- [Modifiers: the Good and the Camp](https://www.youtube.com/watch?v=Z6sHHYTz2cc). Check it out if you haven't seen it yet. It's an informative and entertaining talk!

Do you use this addon? Or one like it? We'd love to hear about the Ember addons that bring you joy!
