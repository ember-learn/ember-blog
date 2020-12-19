---
title: Countdown to The New Year - Ember In Viewport
authors:
  - scott-newcomer
date: 2019-12-27T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the 27th in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 27

For the 27th edition of **Countdown to The New Year** we're going to take a
look at [`ember-in-viewport`](https://emberobserver.com/addons/ember-in-viewport).

### What It Does

Does your app use scroll event listeners or `getBoundingClientRect` to determine if an element on your page is in the user's viewport?  If so, you have come across the perfect addon for you to observe DOM elements!

Common use cases for `ember-in-viewport` include lazy loading images, infinite scrolling (see [`ember-infinity`](https://github.com/ember-infinity/ember-infinity)) and/or tracking advertisement impressions.  This is a flexible and performant library to give your users the performance they need when visiting your site.

Recent additions have added our own `{{in-viewport}}` modifier, allowing you to "observe" elements in template only components! See the [Modifiers](https://github.com/DockYard/ember-in-viewport#modifiers) section for more examples.

### Why I Like It

`ember-in-viewport` supports browsers back to IE11 by using either [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) or [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (fallback case) to monitor the elements on your page.  Compared to traditional methods of manually observing DOM elements, this addon encapsulates functionality in a much more performant manner.  For example, `IntersectionObserver` happens off the main thread, giving you Observability without the cost.  Moreover, by reusing instances of these JavaScript APIs across similar elements on your page, you are free to use this addon for as many elements on your page as you want!


If you are looking for a good example to use this addon with, we have included a somewhat robust, responsive, lazy loaded [artwork](https://github.com/DockYard/ember-in-viewport/blob/master/tests/dummy/app/components/dummy-artwork.js) component for your enjoyment!

Do you use `ember-in-viewport` or something similar? We'd love to hear about Ember addons you love for DecEmber in the comments below!
