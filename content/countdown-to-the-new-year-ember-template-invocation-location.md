---
title: Countdown to The New Year - Ember Template Invocation Location
authors:
  - melanie-sumner
date: 2019-12-25T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the 25th in our December series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 25

I'm not sure there is anyone who knows the ins and outs of Ember **and** its ecosystem quite as well as Robert Jackson, aka [rwjblue](https://emberobserver.com/maintainers/rwjblue). Today, we look at a useful addon he wrote to help make debugging a little simpler - [ember-template-invocation-location](https://emberobserver.com/addons/ember-template-invocation-location).

<!-- READMORE -->

### What It Does

The `ember-template-invocation-location` addon will allow you to debug things such as the location in a template that a given helper, component, or modifier was invoked from; the invocation site of the thing that invoked that template, and so on up to the root most template (generally a route template). Since this is primarily done in development and test builds, it will not work in production by default.

The general goal of this addon is to enable significantly easier debugging. As a result of this, it is expected that the majority of usages of this will not want to modify the source component/helper/modifier but instead be able to gather this info while debugging in the devtools. When you look at the [API reference for the addon](https://github.com/rwjblue/ember-template-invocation-location#api), you will see that an `ember-template-invocation-location` module is provided for import, as well as a `window._templateInvocationInfo` global namespace that you can use in the middle of a debugging session.

### Why I Like It

We don't always get to work in a tidy codebase, and sometimes it can be difficult to tell exactly where a helper or component came from. I like this addon because it is yet another way our community members (especially [rwjblue](https://github.com/rwjblue)) provide solutions to make the developer experience really great.

Do you have another debugging addon that you enjoy using? We'd love to hear about it!
