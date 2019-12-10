---
title: Countdown to The New Year - Ember Page Title
author: Venus Ang
tags: 2019, Addons, DecEmber
alias: 2019-12-11-countdown-to-the-new-year-ember-page-title.md
responsive: true
---

**This is the eleventh in our DecEmber series- "Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 11

This addon [ember-page-title](https://emberobserver.com/addons/ember-page-title) provides a helper for changing the browser tab title of the page within your application.

### What It Does

The `ember-page-title` addon provides a zero-config way to use npm packages in your Ember app, and even lazy-load them.

### Why I Like It

Thanks to `ember-page-title`, you can easily provide users with a simple HTML browser title tag so they know where they are within your single-page application (SPA).

All you need to do is run <code>`ember install ember-page-title`</code>, add <code>{{head-layout}}</code> to your <code>application.hbs</code> file and finally include the title helper to each page section template, for example if you had an About section, <code>{{title "About"}}</code>. This helper also gives you the ability to add custom separators, for example <code>{{title "About" separator=">"}}</code>. More information can be found at the [Ember Page Title Docs Site](https://adopted-ember-addons.github.io/ember-page-title/).

This addon is Octane-ready! <check to make sure it is>

Do you use this addon? Or one like it? We'd love to hear about Ember addons that bring you joy!
