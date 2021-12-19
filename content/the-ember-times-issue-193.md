---
title: The Ember Times - Issue No. 193
authors:
  - the-crowd
  - chris-ng
  - jared-galanis
date: 2021-12-19T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Happy 10th Birthday Ember 🐹,
Ember Addon Roundup 🌎,
First-Class Component Templates RFC 📖,
Author Built-In Blueprints in TypeScript RFC in FCP ⌛️,
Defaults & Initial Values in Octane 🔥,
Uploading images to S3 in Ember 📸

---

## [Happy 10th Birthday Ember 🐹](https://twitter.com/wycats/status/1468774795529515008)

On December 8th Ember.js completed another trip around the 🌞 and turned 10 years old! 🥳

[Yehuda Katz (@wycats)](https://github.com/wycats) recently [tweeted about the milestone for Ember](https://twitter.com/wycats/status/1468774795529515008) and called out some of the most notable things that been achieved in Ember's history:

- we adopted promises and made them the primary way to do async in Ember (2013)
- we added first-class support for JS modules via ember-cli (2014)
- we adopted React-style one-way data flow via Glimmer (2015)
- we landed the VM architecture (Glimmer 2) as a drop-in, backwards-compatible change (2016). This change was cited by React as one of the technical motivations for Hooks.
- Moved the primary Ember API from Ember.* (global) to an intentionally designed JS module API (2016)
- Landed support for native JS classes (2017)
- Landed support for ES getters and setters, eliminating the need for manual get/set (2018)
- Eliminated mandatory dependency on jQuery (2018)
- Tracked Properties and Autotracking (2019)
- Landed the Octane Edition in a minor release as a backwards-compatible change (2019). This came with a revamped component system based on native JS features (no longer inheriting from the classic Ember.Object superclass), more composable DOM (modifiers), autotracking by default
- Landed the primitives needed to support putting templates and JS in the same file, as well as multiple components in one file (2020). Also shipped a library that works with stable Ember that lets you use it today.
- Landed Embroider, Ember's next generation, drop-in build system that natively supports npm packages, template imports (see above) and webpack bundling (2021). It also (already) supports route-based code-splitting for Ember apps that opt into slightly stricter (idiomatic) code
- Large, real-world apps have been able to make the migration to route-based code splitting in a matter of a few weeks.
- All of that doesn't include massive improvements to a11y, very strong TypeScript support (soon maintained officially by the framework team, once the relevant RFCs are approved), migration from a bespoke transpiler to Babel -> 6 -> 7 (transparently to users)
<!-- alex ignore basically -->
- SSR with rehydration with only mild strictness restrictions like not using real DOM at the top level of your module (also idiomatic, basically necessary for tests to function well)

All of this has been achieved, and more! 🤯 And as Yehuda points out, all of this doesn't even include our amazing progress on governance and release cadence.

What's more, in honor of the occasion [Mel Sumner (@MelSumner)](https://github.com/MelSumner) created an amazing website tribute to the framework we know and 💛💙💜💚🧡 l️ove 💛💙💜💚🧡. The [Why Ember](https://whyember.com/) site is now live! The site contains a ton of information about what makes Ember such a great choice, including resources for those new to the framework or considering migrating and a list of some of awesome addons.

There have been many, many achievements over the last decade, and our core teams and community members alike deserve to be proud of what we have accomplished - congratulations to all and we can't wait to see what's next! 🎉🚀

---

## Ember Addon Roundup 🌎

We’ve had several addons across the Ember ecosystem release updates recently, here’s what you may have missed and reasons to upgrade!

- [Jon Kilroy (@jkusa)](https://github.com/jkusa) released [ember-arg-types v0.4.0](https://twitter.com/jonkilroy/status/1461089358338039815) which provides the **forbidExtraArgs** decorator for checking that only arguments with the `arg` decorator are provided to a component (useful for incorrect invocations).
- [Luke Miela (@lukemiela)](https://github.com/lukemelia) and [Sergey Astapov (@SergeAstapov)](https://github.com/SergeAstapov) released [ember-keyboard 7.0.0-beta.0](https://github.com/adopted-ember-addons/ember-keyboard/releases/tag/v7.0.0-beta.0) which dropped deprecated features in the 6.x series.
- [Chris Manson (@mansona)](https://github.com/mansona) released the [first version of the ember-cli-addon-docs migrator](https://twitter.com/real_ate/status/1464596213781704713) named [ecad-migrator](https://github.com/empress/ecad-migrator) which helps move your documentation to [Field Guide](https://github.com/empress/field-guide).
- [Scott Newcomer (@snewcomer)](https://github.com/snewcomer) released [ember-sortable v3.0](https://github.com/adopted-ember-addons/ember-sortable/blob/master/CHANGELOG.md#v300-2021-11-29) which removes the component version of the addon (only allows using the modifier version).
- [Isaac Lee (@ijlee2)](https://github.com/ijlee2) released [ember-container-query v2.0.0-alpha.0](https://github.com/ijlee2/ember-container-query/releases/tag/2.0.0-alpha.0) which drops support for Node v10 and Ember v3.16 LTS, replaces ember-did-resize-modifier with ember-on-resize-modifier and upgrades to be an Embroider v2 addon. If you've been using this addon, please provide any feedback you might have to the maintainer.
- [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) released [tracked-built-ins v2.0.1](https://github.com/tracked-tools/tracked-built-ins/releases/tag/v2.0.1) which updates to the latest ember-cli-babel.

---

## [First-Class Component Templates RFC 📖](https://github.com/emberjs/rfcs/pull/779)

Following his fanatastic [blog series on Ember Template Imports](https://v5.chriskrycho.com/journal/ember-template-imports/), [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) has opened a [RFC covering First-Class Component Templates](https://github.com/emberjs/rfcs/pull/779).

The RFC proposes that we adopt `<template>` tags as a format for making component templates first-class participants in JavaScript and TypeScript with strict mode template semantics. As Chris mentions, doing so would help provide a number of new capabilities to Ember and Glimmer users:

- accessing local JavaScript values with no ceremony and no backing class, enabling much easier use of existing JavaScript ecosystem tools, including especially styling libraries—standard CSS Modules will “just work,” for example
- authoring more than one component in a single file, where colocation makes sense—and thereby providing more control over a component’s public API
- likewise authoring locally-scoped helpers, modifiers, and other JavaScript functionality

Go ahead and check out [the RFC](https://github.com/emberjs/rfcs/pull/779) today.

---

## [Author Built-In Blueprints in TypeScript RFC in FCP ⌛️](https://github.com/emberjs/rfcs/pull/776)

There's another ✨ awesome ✨ RFC that's recently entered its final comment period. This one is on enabling blueprints to be written in TypeScript and was written by [Chris Freeman (@cafreeman)](https://github.com/cafreeman).

So if you are interested in contributing please head on over and comment on [the RFC](https://github.com/emberjs/rfcs/pull/776) before time runs out!

---

## [Defaults & Initial Values in Octane 🔥](https://twitter.com/knownasilya/status/1465902331753644041)

There's a cool new video on Defaults & Initial Values in Octane by [Ilya Radchenko (@knownasilya)](https://github.com/knownasilya
)! 😎

This video continues [the series](https://www.youtube.com/user/knownasilya/featured) that Ilya has been producing on features and patterns in developing with Ember Octane. In this episode Ilya checks out use of the `localCopy` decorator from [tracked-toolbox](https://github.com/tracked-tools/tracked-toolbox) to define class properties.

If you have haven't seen the video you can find it [here](https://www.youtube.com/watch?v=lLQ7r1w1Ud4).

---

## [Uploading images to S3 in Ember 📸](https://balinterdi.com/blog/image-uploads-to-s3-in-ember-js/)

Ever wanted to learn more about what it takes to upload files to a service like AWS S3 with Ember? Fortunately there's a great new article by [Balint Erdi (@balinterdi)](https://github.com/balinterdi) on exactly that!

Balint walks us through the high-level architecture, setting up AWS for direct uploads, how to make a request for a pre-signed url and implementing things in Ember (and a backend).

Take a look at [the article](https://balinterdi.com/blog/image-uploads-to-s3-in-ember-js/) when you get a chance!

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [🤓 Connect with us](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Jared Galanis and the Learning Team
