---
title: Countdown to The New Year - Ember Changeset
authors:
  - scott-newcomer
date: 2019-12-28T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the 28th in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 28

For the 28th edition of **Countdown to The New Year** we're going to take a
look at [`ember-changeset`](https://emberobserver.com/addons/ember-changeset).

<!-- READMORE -->

### What It Does

Managing data associated with forms can sometimes be unwieldy. As a result, we have borrowed concepts from the Elixir [community](https://hexdocs.pm/ecto/Ecto.Changeset.html#content) to give you the ability to prevent mutating the underlying object until the last possible moment when you have decided to apply the changes and the data is valid. This functional approach to validations has proved to be quite useful.

This addon works in conjunction with [`ember-changeset-validations`](https://github.com/poteto/ember-changeset-validations/) to provide you with out of the box validations to validate the format of a certain input, ensure passwords pass a minimum security threshold or even let you build your own custom validator!

### Why I Like It

Recently I [rewrote](https://github.com/poteto/ember-changeset/pull/379) `ember-changeset` to fix long outstanding bugs, support Octane patterns and utilize `@tracked`. As a result, not only can you validate and apply changes to top level keys (`person`), nested keys such as `person.firstName` may also be used.  In addition, at the same time `@pzuraq`'s blog post [Do You Need EmberObject?](https://www.pzuraq.com/do-you-need-ember-object/) came out, we removed `EmberObject`, giving you a simpler base class to work with. The base functionality has been extracted to [`validated-changeset`](https://github.com/validated-changeset/validated-changeset) for use outside of Ember applications as well! Currently this addon is still in `v3` beta. We plan to exit the beta period and do a proper `3.0.0` release in the near future for apps supporting `ember-source` >= 3.13. .

Ember has further memorialized itself with the OOP community. As a result, a functional approach to mutating state is a good tool to have in your toolbelt!

Do you use `ember-changeset` or something similar? We'd love to hear about Ember addons you love for DecEmber in the comments below!
