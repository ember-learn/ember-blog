---
title: Countdown to The New Year - Ember Exam
authors:
  - jessica-jordan
date: 2019-12-30T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
  - testing
---


**This is already the second to last edition of our December series-"Countdown to The New Year: 31 Days of Ember Addons". In this series we are highlighting a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 30

On the 30th day of our **Countdown to The New Year** we want to feature an exciting Ember addon to make your **test suite** fun to work with: **ember-exam**!

Learn more about [ember-exam on Ember Observer](https://emberobserver.com/addons/ember-exam).

<!-- READMORE -->

### What It Does

ember-exam is an addon that allows to have more control over running your ember-qunit (Ember's default testing framework) and ember-mocha test suite. It extends from the default Ember CLI `test` command, allowing you run it as you would `ember test`.

### Why I Like It

ember-exam allows us to run tests in parallel which can greatly reduce the overall run time of our test suite. Using the `--random` option of this addon, we are able to run tests in random order; this helps us to uncover interdependencies between test cases which would be hard to spot otherwise. And the `exam:iterate` option allows us to iterate over parts of our test suite repeatedly when tracking down brittle tests.

ember-exam is our side-kick for developing a fast, robust and reliable test suite - which makes our testing workflow in Ember more predictable, more relaxed and therefore also more fun! [Check it out for yourself!](https://emberobserver.com/addons/ember-exam)

And if you already use this addon, we'd love to hear about it or similar addons that bring you joy in the comments section below!
