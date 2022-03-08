---
title: The Ember Times - Issue No. 197
authors:
  - jared-galanis
  - chris-ng
  - anne-greeth-schot-van-herwijnen
date: 2022-03-07T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹

Ember Annual Community Survey is here 🙋‍♀️,
First-Class Component Templates RFC is merged 🎉,
Official TypeScript Support in Ember RFC is merged 🥳,
TypeScript Adoption Plan RFC is open 📓,
Add Ember Cookbook RFC is in FCP ⌛️,
State of Frontend calls for you ❓,
Ember 4.2 Released 🔥,
Mocks with MSW Demo 🤖,
Whiskey Web and Whatnot Episodes 🎙,
EmberFest 2021 Videos 📹,
Component Architecture Talk Slides 📽,
ember-eui releases 🚀

---

## [Ember Annual Community Survey is here 🙋‍♀️](https://twitter.com/emberjs/status/1500855711311478786)

It’s that time of year again 😀, the **annual official 2022 Ember Community Survey** is here! Once again we would love your help to learn about who is in the Ember community and how they work with the framework.

Last year over 1000 people participated in the survey. As always, your participation is invaluable so please do consider participating.

If you're ready, you can go ahead and fill out the [survey here now](https://emberjs.com/survey/2022/). 🔥🔥🔥

If you have any questions, feel free to email the survey team via survey@emberjs.com, or ping us in #dev-ember-learning on the [Discord chat](https://discordapp.com/invite/emberjs).

Please share with your friends and colleagues! We want to hear from everyone who uses Ember!

---

## [First-Class Component Templates RFC is merged 🎉](https://github.com/emberjs/rfcs/pull/779)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) who [recently joined](https://twitter.com/chriskrycho/status/1493295356368470019) the Ember Framework Core Team has been hard at work authoring many RFC's, including the [RFC on First-Class Component Templates](https://github.com/emberjs/rfcs/pull/779). We're happy to report this RFC is now merged! This follows Chris' detailed blog series on [Ember Template Imports](https://v5.chriskrycho.com/journal/ember-template-imports/).

The RFC proposed that we adopt `<template>` tags as a format for making component templates first-class participants in JavaScript and TypeScript with strict mode template semantics. As Chris mentions, doing so would help provide a number of new capabilities to Ember and Glimmer users:

<!--alex ignore just-->
- accessing local JavaScript values with no ceremony and no backing class, enabling much easier use of existing JavaScript ecosystem tools, including especially styling libraries—standard CSS Modules will “just work,” for example
- authoring more than one component in a single file, where colocation makes sense—and thereby providing more control over a component’s public API
- likewise authoring locally-scoped helpers, modifiers, and other JavaScript functionality

Go ahead and check out [the merged RFC](https://github.com/emberjs/rfcs/pull/779) on GitHub.

---

## [Official TypeScript Support in Ember RFC is merged 🥳](https://github.com/emberjs/rfcs/pull/724)

As if one merged RFC weren't exciting enough, [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) is also the author of a second recently merged [RFC on Official TypeScript Support in Ember](https://github.com/emberjs/rfcs/pull/724)!

This RFC declares the intent to officially support TypeScript as a peer to JavaScript, in a way which makes the developer experience better for all Ember developers.

The RFC says that:

>Ember officially supporting TypeScript means: All libraries which are installed as part of the default blueprint must ship accurate and up-to-date type definitions for the current edition. These types will uphold a Semantic Versioning commitment which includes a definition of SemVer for TypeScript types as well as a specification of supported compiler versions and settings, so that TypeScript will receive the same stability commitments as the rest of Ember.

This is a really exciting development for the support of TypeScript in Ember and you can read up on [the merged RFC](https://github.com/emberjs/rfcs/pull/724) on Github.

---

## [TypeScript Adoption Plan RFC is open 📓](https://github.com/emberjs/rfcs/pull/800)

And that's not all, [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) has also opened the [TypeScript Adoption Plan RFC](https://github.com/emberjs/rfcs/pull/800) which offers a detailed implementation plan for officially supporting TypeScript in Ember (which is in follow up to the aforementioned Official TypeScript Support RFC and covers the overall philosophy for what official support means).

The RFC covers a lot, but a short-list includes:

- the SemVer policies Ember packages should adopt
- how we will migrate users from depending on the `@types` definitions on DefinitelyTyped to Ember packages
- test infrastructure to catch regressions early
- updates to Ember CLI to support TypeScript
- release "channel" testing analogous to Ember's existing feature flag system for runtime code
- a basic communication plan for the rollout
- updates to our guides, API docs, and even the version release blog post announcement

Please head on over to [the RFC](https://github.com/emberjs/rfcs/pull/800) and give it a read or participate in the comments!

---

## [Add Ember Cookbook RFC is in FCP ⌛️](https://twitter.com/emberjs/status/1496897870762553346)

If you have not had the time to checkout the exciting [Add Ember Cookbook RFC](https://github.com/emberjs/rfcs/pull/786) by [Ketaki Deo (@ketakideo)](https://github.com/ketakideo), now is the time do so because it's well into the FCP and time is running out!

The RFC proposes adding a cookbook section to our learning resources that will help Ember developers to learn maintainable, accessible patterns for common tasks.

These types of content exist today in the form of blogs, stackoverflow answers and efforts like [Ember Atlas](https://www.notion.so/emberatlas/The-Ember-Atlas-4094f81c86c34badb4a562ed29414ae1) but they are not discoverable and can sometimes be incorrect. The proposed Ember Cookbook will be managed and curated by the Ember Learning team which will work closely with the Ember Core team on upgrades to add, modify or delete information as needed.

Read, comment, and discuss this proposal in the [RFC on Github](https://github.com/emberjs/rfcs/pull/786)!

---

## [State of Frontend survey calls for you❓](https://tsh.io/state-of-frontend/)

The [State of Frontend 2022 survey](https://tsh.io/state-of-frontend/) hosted by [The Software House](https://tsh.io) is open. There is no known deadline. It actually takes 8 minutes to fill in as they claim and you can select EmberJS from the options. So show the world some EmberJS representation and fill in the survey.

The survey asks about the tools, processes and solutions you use, like your editor and libraries. It also asks for your opinion on the future of certain topics like accessibility and technical concepts. Their call to you is: “We want to hear as many voices of the frontend people as possible. Too much happened over the last two years, and we want to talk about it. **No matter how your frontend experience looks like, your voice is exactly what we’re looking for**.”

---

## [Ember 4.2 Released 🔥](https://blog.emberjs.com/ember-4-2-released)

In case you missed it, Ember 4.2 was released last week! There were several bug fixes for different parts of the framework and 1 new feature in Ember CLI. Head on over to [the blog post](https://blog.emberjs.com/ember-4-2-released) to check out the details.

---

## [Mocks with MSW Demo 🤖](https://twitter.com/nullvoxpopuli/status/1494427319552905216)

Been curious about how to test against a fake API? Are you looking for a new library to do this? And do want to use the network tab for debugging? And do you also want a straightforward way to define mock data that doesn't get shipped to customers?

[NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) created a nice demo of how to get started using the [Mock Service Worker (MSW)](https://mswjs.io/) library with Ember.

Go ahead and check out [the demo repo](https://github.com/NullVoxPopuli/ember-msw-development/commits/main) today!

---

## [Whiskey Web and Whatnot Episodes 🎙](https://www.whiskeywebandwhatnot.fm/)

There are two new awesome episodes of the Whiskey Web and Whatnot podcast featuring several Ember core team members! 🔥

<!--alex ignore of-course-->
First, creators [Robert Wagner (@rwwagner90)](https://github.com/rwwagner90) and [Chuck Carpenter (@chuckcarpenter)](https://github.com/chuckcarpenter) of Ship Shape sit down with [Melanie Sumner (@melsumner)](https://github.com/melsumner) and they discuss work-life balance, Ember vs React, and of course #a11y! 💖 Check out the episode [here](https://www.whiskeywebandwhatnot.fm/work-life-balance-react-and-why-accessibility-is-everything-with-melanie-sumner/).

Next up is an episode with **both** [Chris Manson (@mansona)](https://github.com/mansona) and [Chris Thoburn (@runspired)](https://github.com/runspired) chatting with Robbie and Chuck about how to best get contributors on opensource projects and how TypeScript fits into that process! Check out the episode [here](https://www.whiskeywebandwhatnot.fm/runspired-vs-chris-manson-on-solving-the-number-one-ember-issue/).

---

## [EmberFest 2021 Videos 📹](https://twitter.com/EmberFest/status/1499747403846586372)

The EmberFest 2021 videos of talks are now available for your ✨viewing pleasure✨!

<!--alex ignore just-->
If you did not have a chance to attend EmberFest 2021, and want to catch up on what happened last fall, or if you just want to re-live some of the moments, head on over and check out [the videos](https://www.youtube.com/playlist?list=PLN4SpDLOSVkR_vDs4_gKbYlzb5fFMMRex) today!

---

## [Component Architecture Talk Slides 📽](https://twitter.com/unistyler/status/1500064502607491076)

[Thomas Gossmann (@gossi)](https://github.com/gossi) recently released slides about Component Architecture from a recent talk at Ember Ignite!

The slides discuss the basics for component invocation and get into blocks, including named blocks, and yielded components as well. If you're looking for a nice overview of component architecture then [look no further](https://component-architecture-slides.netlify.app/).

---

## [ember-eui releases 🚀](https://twitter.com/betocantu93/status/1500187028524343309)

[Beto Cantú (@betocantu93)](https://github.com/betocantu93) has released several new versions of `ember-eui` (elastic's ui styleguide for ember). The releases include support for `staticComponents` and `splitAtRoutes` from embroider, meaning "tree shaking" or not bundling unused code out of the box is now possible!

Go ahead and check out [the latest releases](https://github.com/prysmex/ember-eui/releases)!

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/jaswilli" rel="noopener noreferrer" target="_blank">Jason Williams (@jaswilli)</a>, <a href="https://github.com/Weismann9" rel="noopener noreferrer" target="_blank">Vyacheslav Karpovych (@Weismann9)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/jeffdaley" rel="noopener noreferrer" target="_blank">Jeff Daley (@jeffdaley)</a>, <a href="https://github.com/duyngle" rel="noopener noreferrer" target="_blank">Duy Le (@duyngle)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/jelhan" rel="noopener noreferrer" target="_blank">Jeldrik Hanschke (@jelhan)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/gnclmorais" rel="noopener noreferrer" target="_blank">Gonçalo Morais (@gnclmorais)</a>, <a href="https://github.com/nwhittaker" rel="noopener noreferrer" target="_blank">Nathan Whittaker (@nwhittaker)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/nruth" rel="noopener noreferrer" target="_blank">Nicholas Rutherford (@nruth)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/esbanarango" rel="noopener noreferrer" target="_blank">Esteban Arango Medina (@esbanarango)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/josephdsumner" rel="noopener noreferrer" target="_blank">Joseph D. Sumner (@josephdsumner)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, and <a href="https://github.com/cafreeman" rel="noopener noreferrer" target="_blank">Chris Freeman (@cafreeman)</a> for their contributions to Ember and related repositories! 💖</p>

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

Jared Galanis, Chris Ng, Anne-Greeth Schot-van Herwijnen and the Learning Team
