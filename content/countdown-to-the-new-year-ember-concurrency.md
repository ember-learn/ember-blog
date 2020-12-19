---
title: Countdown to The New Year - Ember Concurrency
authors:
  - jen-weber
date: 2019-12-05T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the fifth in our DecEmber series–Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 5

Let's talk about [ember-concurrency](https://emberobserver.com/addons/ember-concurrency).
The experience is part joy, part tragedy.

<!-- READMORE -->

The joy comes from having elegant, straightforward solutions for things like debouncing.
The tragedy is that I have to write this code myself when I am working in a non-Ember setting, but I suppose absence makes the heart grow fonder.

### What It Does

The `ember-concurrency` addon helps you "write concise, robust, and beautiful asynchronous code." For example, think about what should happen if a user rapidly clicks a "submit" button. With this addon, there's a nice way to prevent 30 form submissions.
Or, what if an API request takes a long time, and you want to be able to cancel it? Promises won't help you, but `ember-concurrency` tasks will.

### Why I Like It

Without `ember-concurrency`, it would take a lot of effort to manage starting, interrupting, cancelling, restarting, debouncing, queueing, and checking the status of async operations.
Yet in a complex, data-rich application, these things often emerge as necessities.
It's a relief to have a concise and readable way of handling these behaviors.

Another thing I like about `ember-concurrency` is that when I read the documentation, it helps me to evaluate whether the code I have written can withstand deviations from the happy path - impatient users, slow API requests, and interrupted animations.

The joy it brings me is that it keeps my code tidy and resilient. I can spend more of my time working on interfaces and interactions, without littering my code with things like an array of promises and booleans to track their resolved states.

This addon is Octane-ready. For developers who are using Ember Octane or Native Classes, [ember-concurrency-decorators](https://github.com/machty/ember-concurrency-decorators) provides decorator syntax for tasks, which isn't strictly necessary, but it looks nicer.

Do you use this addon? Or one like it? We'd love to hear about Ember addons that bring you joy! 
