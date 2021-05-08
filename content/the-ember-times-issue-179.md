---
title: The Ember Times - Issue No. 179
authors:
  - amy-lam
  - chris-ng
  - isaac-lee
date: 2021-05-07T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

May 20th is Global Accessibility Awareness Day 💟,
Readers' Question: What’s the current status of the Embroider project? 🧵
Try out `@use` with Ember Apollo Client 💡,
Learn how JS frameworks solved the problem of rendering fast 🌐,

---

## [May 20th is Global Accessibility Awareness Day 💟](https://twitter.com/melaniersumner/status/1389703699241578502?s=20)

[Global Accessibility Awareness Day](https://en.wikipedia.org/wiki/Global_Accessibility_Awareness_Day), an awareness day focusing on digital access and inclusion for the more than one billion people with disabilities and impairments, will be celebrated on May 20, 2021. Here are some suggestions from [Melanie Sumner (@MelSumner)](https://github.com/MelSumner) on how you can get involved in some accessibility (a11y) related open source projects!

1. Help convert [ember-component-patterns](https://github.com/ember-components/ember-component-patterns) from Gitbook to an Ember app
2. Help with [a11y-automation.dev](https://github.com/MelSumner/a11y-automation) which is a project to track a11y automation
3. Check out the [help wanted page](https://help-wanted.emberjs.com/ember-a11y) for issues in the [ember-a11y GitHub organization](https://github.com/ember-a11y)
4. Help write some [a11y-related linting rules](https://github.com/ember-template-lint/ember-template-lint/issues?q=is%3Aopen+is%3Aissue+label%3Aa11y) for ember-template-lint

For more ideas please check out the [Global Accessibility Awareness Day (GAAD) website](https://globalaccessibilityawarenessday.org/)!

---

## Readers' Question: What’s the current status of the Embroider project? 🧵

What's the current status of the Embroider project? [Embroider](https://github.com/embroider-build/embroider) is nearing a 1.0 release. Embroider has been a long time coming, and the future is looking bright. Several large, heavily-tested Ember apps are already shipping to production with Embroider! The official cutover point will be when Ember CLI starts generating new apps with Embroider by default. 🙌 **Embroider won't be turned on in the next Ember CLI 3.27 release**, but the [Enable Embroider Request for Comments (RFC)](https://github.com/emberjs/rfcs/pull/746) was opened up today by [Travis Hoover (@thoov)](https://github.com/thoov). Check it out!

If you're not familiar with Embroider, Embroider is a new build pipeline that will provide a way to compile Ember apps into spec-compliant, modern JavaScript. Using Embroider will make it easier to take advantage of code splitting and tree shaking in your app.

There are some risks if you choose to use Embroider in production today. You're likely to discover that some Ember addons don't work or will break your build. Right now, Embroider's own configuration options are subject to change, so you'll need to read the [CHANGELOG.md](https://github.com/embroider-build/embroider/blob/master/CHANGELOG.md) to check for any gotchas when updating Embroider packages in your app. 

The [Community Adoption](https://github.com/emberjs/rfcs/blob/dbb7a7c5dc7a6698368f078aa66f97c4bddd4bcb/text/0000-enable-embroider.md#community-adoption) section of the RFC highlights that Embroider has created a testing package for addon authors to consume in their ember-try scenarios to verify their addons work under Embroider. A meta issue will be created tracking the Top 100 addons according to [Ember Observer](https://emberobserver.com/).

In case you missed it, Embroider was mentioned at virtual EmberConf 2021:

- [Keynote Part 2 AKA "Platform State of the Union"](https://www.youtube.com/watch?v=1Z6cLV2licU) by [Godfrey Chan (@chancancode)](https://github.com/chancancode) had an Embroider highlight, [starting here](https://youtu.be/1Z6cLV2licU?t=555).
- In the [Fun Fast Tools for Serious Work](https://www.youtube.com/watch?v=09USvAy7w9g) talk, [Edward Faulkner (@ef4)](https://github.com/ef4) describes the Embroider vision and what it can unlock!

---

## [Ember Apollo Client + `@use` 💡](https://dev.to/chrismllr/ember-apollo-client-use-5h3o)

In a new app, [Chris Miller (@chrismllr)](https://github.com/chrismllr) got to try out [ember-apollo-client](https://github.com/ember-graphql/ember-apollo-client), a GraphQL client for Ember apps. 🧡

Chris summarized his learning in the article [Ember Apollo Client + `@use`](https://dev.to/chrismllr/ember-apollo-client-use-5h3o). The article concerns the following question:

- Ember provides a few possible ways to fetch data. Which way do we follow with `ember-apollo-client` in the equation?

Towards the end, Chris shows how to use the `@use` API (from [ember-could-get-used-to-this](https://github.com/pzuraq/ember-could-get-used-to-this)) to wrap `ember-apollo-client` methods. This solution may apply to other data-fetching APIs, such as Ember Data.

Interested in learning more? Check out [Ember Apollo Client + `@use`](https://dev.to/chrismllr/ember-apollo-client-use-5h3o) today!

---

## [A Comparison of Rendering Engines of React, Angular, and Ember 🌐](https://www.heise.de/select/ix/2021/5/2018311514916341034)

[Eine große Überraschung](https://twitter.com/jelhan1/status/1384931700036222981) from [Jeldrik Hanschke (@jelhan)](https://github.com/jelhan): The May issue of iX, a computer magazine from Germany, features the article [Die Rendering-Engines von React, Angular und Ember im Vergleich](https://www.heise.de/select/ix/2021/5/2018311514916341034).

The article is written for developers at all levels. Jeldrik provides a naive rendering engine to motivate the performance problems that it will encounter. Afterwards, you will get to learn how computer science helped create rendering engines that are performant.

How do React, Angular, and Ember turn your single-page application code into what the user sees? What are the strengths and weaknesses in their approach? If you want to learn more about rendering engines, we encourage you to check out [Jeldrik's article in iX](https://www.heise.de/select/ix/2021/5/2018311514916341034)! *(Note: This article is in German, but can be translated by a browser such as Google Chrome. You'll need to sign up on Heise.de to read, but there is a free trial period.)*

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/basz" rel="noopener noreferrer" target="_blank">Bas Kamer (@basz)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/chadhietala" rel="noopener noreferrer" target="_blank">Chad Hietala (@chadhietala)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/esquith" rel="noopener noreferrer" target="_blank">Esquith Allen (@esquith)</a>, <a href="https://github.com/spham92" rel="noopener noreferrer" target="_blank">Steven Pham (@spham92)</a>, <a href="https://github.com/btecu" rel="noopener noreferrer" target="_blank">Bj Tecu (@btecu)</a>, <a href="https://github.com/tylerturdenpants" rel="noopener noreferrer" target="_blank">Ryan Mark (@tylerturdenpants)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/srih4ri" rel="noopener noreferrer" target="_blank">Srihari (@srih4ri)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/amk221" rel="noopener noreferrer" target="_blank">Andrew Kirwin (@amk221)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, and <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Isaac Lee, Amy Lam, and the Learning Team
