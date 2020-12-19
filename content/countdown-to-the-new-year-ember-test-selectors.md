---
title: Countdown to The New Year - Ember Test Selectors
authors:
  - jessica-jordan
date: 2019-12-15T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
  - testing
---


**Our December series - "Countdown to The New Year: 31 Days of Ember Addons" aims to highlight a new addon each day until the new year, and we hope you enjoy hearing about addons that bring us joy as well!**

## Day 15

On the 15th day of our **Countdown to The New Year** we want to take a look at a helpful Ember addon which lets us write **redesign-proof tests**: [ember-test-selectors](https://emberobserver.com/addons/ember-test-selectors)!

<!-- READMORE -->

### What It Does

ember-test-selectors is an addon that allows us to use additional, test-specific markup in the form of `data-test` attributes in the dev and test environments of our app. This additional, test-specific markup allows us to select elements in our integration and application tests reliably - even if the HTML markup or CSS selectors change during a redesign of our app.

The addon takes care of removing `data-test` attributes from our production builds automatically, freeing us from the worry that our bundle size might increase as we build and test away.

### Why I Like It

If we only rely on CSS selectors or HTML markup to find elements in test cases, changing markup in our templates due to new design specifications can make our tests fail accidentally. Test selectors applied by ember-test-selectors outlive a redesign and make our test suite return fewer false positives.

When we don't have to worry about testing our app after a redesign, we also have more fun tweaking our app's design for a new look!

[Check it out for yourself](https://emberobserver.com/addons/ember-test-selectors)! Do you use this or other fun testing addons? Let us and the Ember community know in the comments below!
