---
title: Countdown to The New Year- Ember A11Y Testing
authors:
  - sivakumar-kailasam
date: 2019-12-10T00:00:00.000Z
tags:
  - '2019'
  - accessibility
  - addons
  - december
  - testing
---


**This is the tenth in our DecEmber series-"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 10

Let's talk about [ember-a11y-testing](https://emberobserver.com/addons/ember-a11y-testing).

<!-- READMORE -->

### What It Does

The `ember-a11y-testing` addon is a wrapper around [Deque Labs'](https://github.com/dequelabs)
[axe-core](https://github.com/dequelabs/axe-core) accessibility(a11y) testing engine that helps you identify accessibility issues in your Ember app & provides useful information on how to solve them.

### Why I Like It

Like many of you out there, I too developed webapps without realizing the impact that accessible apps can have on users. In fact, I 
started learning about a11y problems through this addon when I added it to a few apps that I was working on when this addon got
released back in 2015. 

While there's more to building accessible apps than automated tools (like this addon) can help with, it does help ensure that 
common a11y violations are captured before they can make their way to users.

The best part about this addon is that it lets you conditionally turn off parts or the entire violation report so that you don't have
to feel overwhelmed when you add this to an existing app. In the teams I've worked with, we usually add an environment variable to control
that setting so that we can work on addressing those violations whenever we can & run a variation of the nightly test run on CI with the flag enabled to check if the violation count hasn't increased since the previous run.

This addon is Octane-ready. Give it a try today & begin your a11y journey with it.

Do you use this addon? Or one like it? We'd love to hear about Ember addons that bring you joy! 
