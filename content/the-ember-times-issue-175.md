---
title: The Ember Times - Issue No. 175
authors:
  - isaac-lee
  - amy-lam
  - chris-ng
  - jared-galanis
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
date: 2021-03-12T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Ember Community Survey 2021 📆,
Read the RFC on official TypeScript support on Ember ✅,
Ember Conf Contributors Workshop 🐹,
`ember-responsive-image` v2 released 🖼️,
Use Mirage JS to test non-trivial user flows ⬆️,
New Podcast Episodes 🎙,
Ember a Beacon of Productivity Blog Post 📖,
...
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [Ember Community Survey 2021 📆](https://emberjs.com/ember-community-survey-2021/)

The annual community survey is up - please take the survey **today** and let us know what you think about Ember! 
* Totally Anonymous: No personal identification is attached to survey responses. Last year, over 1000 participants shared information about themselves, their businesses, and applications.
* At [EmberConf](https://emberconf.com/), the results to the 2021 survey will be shared with a comparison to the 2020 results. Detailed aggregate and individual responses will also be made public.

<p><a class="es-button" href="https://emberjs.com/ember-community-survey-2021/">Take the 2021 Ember Community Survey</a></p>

Questions? Feedback? Please join us in the [#dev-ember-learning](https://discord.com/channels/480462759797063690/480777444203429888) channel on the [Discord community chat](https://discord.gg/emberjs), or email the survey team via [survey@emberjs.com](mailto:survey@emberjs.com).

P.S. Please spread the word about the survey, ask your friends and coworkers to fill it out today!

---

## [RFC: Official TypeScript support ✅](https://github.com/emberjs/rfcs/pull/724)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) put up an [RFC for Official TypeScript support](https://github.com/emberjs/rfcs/pull/724) in Ember. The goal of the RFC is to determine if we should support [TypeScript](https://www.typescriptlang.org/) as a first-class citizen in Ember, and if yes, identify any gaps present today.

> Ember officially supporting TypeScript means: All libraries which are installed as part of the default blueprint must ship accurate and up-to-date type definitions for the current edition. These types will uphold a Semantic Versioning commitment which includes a definition of SemVer for TypeScript types as well as a specification of supported compiler versions and settings, so that TypeScript will receive the same stability commitments as the rest of Ember.

- Any addon that is part of the default blueprint must ship types.
- The RFC explicitly does not require support for “typed templates”
- Instead of opting into TypeScript using [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript) it should be done by default
- Define a policy on what constitutes a breaking change for consumers of a library which publishes types, including Ember’s core libraries

Read and comment on the [RFC on GitHub](https://github.com/emberjs/rfcs/pull/724)!

---

## [Ember Conf Contributors Workshop 🐹](https://emberconf.com/schedule/pre-conf_contributors-workshop)

We're certainly all excited about the upcoming (virtual) Ember Conf 2021, but don't forget that there's a Contributors Workshop too!

The Contributors Workshop, hosted by [Ricardo Mendes (@locks)](https://github.com/locks) and [Ava Gaiety Wroten (@hergaiety)](https://github.com/hergaiety), will bring our community together to share knowledge about how you can make your first contribution to Ember. There's not much more to it, all you need to bring is an eagerness to learn and contribute to the framework we know and love! 💜💛🧡❤️

You can register for the workshop [here](https://tilde.wufoo.com/forms/emberconf-2021-contributors-workshop-registration/).

---

## [`ember-responsive-image` v2 released 🖼️](https://twitter.com/simonihmig/status/1369316435621724163)

[ember-responsive-image](https://github.com/kaliber5/ember-responsive-image) is an addon created by [Simon Ihmig (@simonihmig)](https://github.com/simonihmig). At build time, the addon uses [sharp](https://github.com/lovell/sharp) to generate resized images that are optimized for web.

Simon [announced the v2 release](https://twitter.com/simonihmig/status/1369316435621724163), which provides the following features:

- `<ResponsiveImage>` rewritten as a Glimmer component
- Next-gen image formats WebP and AVIF
- Fixed and responsive layouts
- Lazy loading + LQIP (Low Quality Image Placeholders)
- FastBoot and Embroider support

To learn more how `ember-responsive-image` can help you optimize loading images, we encourage you to check out the following links:

- [README: Basic Usage](https://github.com/kaliber5/ember-responsive-image#basic-usage)
- [Maximally Optimizing Image Loading for the Web in 2021](https://www.industrialempathy.com/posts/image-optimizations/)
- [Implementation in `ember-website` repo](https://github.com/ember-learn/ember-website/pull/769)

---

## [How Qonto used Mirage JS for complex user flow testing ⬆️](https://medium.com/qonto-way/how-to-handle-uploading-and-parsing-files-in-your-frontend-app-tests-19bee8e7a61f)

[Sabin Hertanu (@herzzanu)](https://github.com/herzzanu) details a **testing challenge** he ran into at [Qonto](https://qonto.com/en) in the article [How to handle uploading and parsing files in your frontend app tests](https://medium.com/qonto-way/how-to-handle-uploading-and-parsing-files-in-your-frontend-app-tests-19bee8e7a61f). In Qonto's Ember app, users can upload a file to their servers for creating transfers in bulk. The server reads, parses, and processes the data before sending a list of transfers in response. Mocking the endpoints to accurately match this full process would take a lot of time and code, in addition to being challenging to maintain and scale.

[Mirage JS](https://miragejs.com/) is a library for mocking API endpoints as [route handlers](https://miragejs.com/docs/main-concepts/route-handlers/) to test JavaScript apps, without having to rely on any backend services. Sabin discusses how Qonto uses Mirage [Factories](https://miragejs.com/docs/main-concepts/factories/) to test this tricky user flow. Check out the walkthrough with test code samples in the [blog post](https://medium.com/qonto-way/how-to-handle-uploading-and-parsing-files-in-your-frontend-app-tests-19bee8e7a61f) to learn about how Qonto mocked the API to make sure it matches what they would expect from the real API in production. Effective testing can pay dividends in improving the developer experience and maintaining the quality of the user experience!

---

## New Podcast Episodes 🎙

There are fresh episodes of the new Ember-related podcasts available now! 🔥🔥🔥

<!-- alex ignore tang -->
The [Ember Report](https://twitter.com/EmberReport) has published a [great episode](https://twitter.com/EmberReport/status/1369010817518166020) that features [David Tang (@skaterdav85)](https://github.com/skaterdav85) who shares all about how he came to write his Ember Data books, Ember Data in the Wild and the more recently published [Pro Ember Data](https://www.apress.com/us/book/9781484265604). They cover a ton of good subjects, such as how David got into teaching web development and also dig into a variety of Ember Data subjects, so check out the podcast when you can!

<!-- alex ignore of-course -->
Also, the Whiskey, Web and Whatnot podcast has released a [cool new episode](https://twitter.com/shipshapecode/status/1369961936096538625) that features [Chris Garrett (@pzuraq)](https://github.com/pzuraq). They talk about whiskey, of course, but also cover some of the new exciting new things that Chris has been working on for Glimmer and Ember - strict mode and template imports amongst other things. Great stuff!

---

## [Ember a Beacon of Productivity Blog Post 📖](https://simplabs.com/blog/2021/03/12/Ember.js-in-2021---a-beacon-of-productivity/)

[Marco Otte-Witte (@marcoow)](https://github.com/marcoow) has written an excellent new [blog post](https://simplabs.com/blog/2021/03/12/Ember.js-in-2021---a-beacon-of-productivity/) for the Simplabs blog about why Ember is still a beacon of productivty in a sea of complexity, even after 10 years.

Marco covers how Ember's approach can avoid accidental complexity and all the other things that makes it such a great tool. Even if you know and love Ember, it's well worth a read, so please check out the post if you get a chance.

---

## [8. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Isaac Lee, Amy Lam, Chris Ng, Jared Galanis the crowd and the Learning Team
