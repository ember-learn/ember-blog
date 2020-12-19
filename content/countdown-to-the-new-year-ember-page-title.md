---
title: Countdown to The New Year - Ember Page Title
authors:
  - venus-ang
date: 2019-12-11T00:00:00.000Z
tags:
  - '2019'
  - accessibility
  - addons
  - december
---


**This is the eleventh in our DecEmber series-"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 11

This addon [ember-page-title](https://emberobserver.com/addons/ember-page-title) provides a helper for changing the browser tab title of the page within your application.

<!-- READMORE -->

### What It Does

The `ember-page-title` addon is helpful for many reasons, but an important reason is that it is a [WCAG success criteria (2.4.2)](https://www.w3.org/WAI/WCAG21/Understanding/page-titled) to provide a page title.
A quick tip about page titles! The title of each Web page should:

- Identify the subject of the Web page
- Make sense when read out of context, for example by a screen reader or in a site map or list of search results
- Be short

### Why I Like It

Thanks to `ember-page-title`, you can provide users with a simple HTML browser title tag so they know where they are within your single-page application (SPA).

How to use it:

1. Run `ember install ember-page-title`
2. Add `{{head-layout}}` to your `application.hbs` file
3. Include the title helper to each page's template. For example, if you had an "About" route, add `{{title "About Us"}}` to that template. This helper _also_ gives you the ability to add custom separators, for example `{{title "About" separator=">"}}`.
   More information can be found at the [Ember Page Title Docs Site](https://adopted-ember-addons.github.io/ember-page-title/).

This addon is Octane-ready!

Do you use this addon? Or one like it? We'd love to hear about Ember addons that bring you joy!
