---
title: Countdown to The New Year - Ember Auto Import
authors:
  - jen-weber
date: 2019-12-06T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the sixth in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 6

Once upon a time, if Ember developers wanted to use a regular npm package, they needed to jump through some hoops, but [ember-auto-import](https://emberobserver.com/addons/ember-auto-import) makes it a breeze!

<!-- READMORE -->

### What It Does

The `ember-auto-import` addon provides a zero-config way to use npm packages in your Ember app, and even lazy-load them.

### Why I Like It

One of my wishes for the web is that we can make it easier for new people to learn, participate, and build.
Whenever I see this trend happening in Ember, it makes me happy.

I love this addon because it eliminates the need for a beginner (and experienced developer) to understand the differences between AMD and CJS modules, and how they get into the app tree.
They don't need to read about how to configure their build.
They don't need to know how Ember's build pipeline differs from other build tools.
They import what they need, and it works.
That's awesome.

I think back to earlier in my career, when I was reliant on other people to make addons that wrapped popular libraries, or I used `ember-browserify`, which had some drawbacks.
Thanks to `ember-auto-import`, it is a joy to use new libraries directly and even contribute features or bugfixes upstream.
I also imagine that it has saved a ton of time across the Ember community, since developers do not need to write and maintain as many wrapper addons.

This addon is Octane-ready!

Do you use this addon? Or one like it? We'd love to hear about Ember addons that bring you joy! 
