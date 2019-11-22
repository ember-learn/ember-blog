---
title: Countdown to The New Year: Ember Exam
author: Jessica Jordan
tags: 2019, Recent Posts, Testing
alias: 2019/12/30/countdown-to-the-new-year-2019-ember-exam
responsive: true
---

On the 30th day of our **Countdown to The New Year** we want to feature an exciting Ember addon to make your **test suite** fun to work with: **Ember Exam**!

Learn more about Ember Exam on [Ember Observer](https://emberobserver.com/addons/ember-exam).

## What is Ember Exam?

Ember Exam is an addon that allows to have more control over running your Ember QUnit (Ember's default testing framework) and Ember Mocha test suite. It extends from the default Ember CLI `test` command, allowing you run it just as you would `ember test`.

## Why do we like Ember Exam so much?

Ember Exam allows us to run tests in parallel which can greatly reduce the overall run time of our test suite. Using the `--random` option of this addons, we may run tests in random order uncovering interdependencies between test cases which would be hard to spot otherwise. And the `exam:iterate` allows us to iterate over parts of our test suite repeatedly to track down brittle tests easily.

Ember Exam helps us to develop a more robust, reliable and faster test suite - which makes our testing workflow in Ember more predictable, more relaxed and therefore also more fun! [Check it out](https://emberobserver.com/addons/ember-exam)!
