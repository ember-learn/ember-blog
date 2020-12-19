---
title: Countdown to The New Year - Ember Template Lint
authors:
  - melanie-sumner
date: 2019-12-19T00:00:00.000Z
tags:
  - '2019'
  - accessibility
  - addons
  - december
---


**This is the 19th in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 19

Today we are going to look at an addon that is part of every new Ember app. The [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) addon has many new features added recently, and is worth a close look!

<!-- READMORE -->

### What It Does

As you may guess from the addon title, `ember-template-lint` is a linter for your template files!
It checks for mistakes and advises best practices for the markdown in your component and route templates.
Because we work in JavaScript, there are different ways something *could* be done, but often there is an ideal solution that avoids problems down the line. 
This is where `ember-template-lint` shines. It will throw warnings and/or errors when you try to break one of these rules.
It's extendable and customizable too, so you can get the right combination of rules for *your* project.

### Why I Like It

The `ember-template-lint` addon isn't actually an Ember addon, in terms of its file structure (which is why it's not on [Ember Observer](https://emberobserver.com/)) but it *is* an essential ingredient that helps provide accuracy, consistency and best practices in your application. 

Recently, I have been contributing to it myself, adding in extra ways that will help Ember developers avoid accessibility pitfalls.
Through that work, I have come to deeply appreciate this addon. The [linter's contributors](https://github.com/ember-template-lint/ember-template-lint/graphs/contributors) have really done an incredible job at helping all of us write better template code.

Recent [releases](https://github.com/ember-template-lint/ember-template-lint/releases) have brought additional linting rules that help avoid [common WCAG failures](https://www.w3.org/WAI/WCAG21/Techniques/#failures)- 16 of which are now preventable through use of `ember-template-lint`. 
More accessibility-specific work is planned in the coming months, so checking out the [issues](https://github.com/ember-template-lint/ember-template-lint/issues) in the repository is a great way to figure out how you can contribute!

Do you use this linter? Or one like it? We'd love to hear about Ember addons that bring you joy!
