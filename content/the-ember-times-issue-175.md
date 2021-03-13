---
title: The Ember Times - Issue No. 175
authors:
  - isaac-lee
  - amy-lam
  - chris-ng
  - jared-galanis
date: 2021-03-12T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Ember Community Survey 2021, official TypeScript support RFC, EmberConf Contributors Workshop, Ember - a beacon of productivity, `ember-responsive-image` v2 released, Mirage JS for complex testing, and new podcast episodes!

---

## [Ember Community Survey 2021 📆](https://emberjs.com/ember-community-survey-2021/)

The annual community survey is up - please take the survey **today** and let us know what you think about Ember!

* Totally Anonymous: No personal identification is attached to survey responses. Last year, over 1000 participants shared information about themselves, their businesses, and applications.
* At [EmberConf](https://emberconf.com/), the results to the 2021 survey will be shared with a comparison to the 2020 results. Detailed aggregate and individual responses will also be made public.

<center>
<a class="es-button centered" href="https://emberjs.com/ember-community-survey-2021/">Take the 2021 Ember Community Survey</a>
</center>

Questions? Feedback? Please join us in the [#dev-ember-learning](https://discord.com/channels/480462759797063690/480777444203429888) channel on the [Discord community chat](https://discord.gg/emberjs), or email the survey team via [survey@emberjs.com](mailto:survey@emberjs.com).

P.S. Please spread the word about the survey, ask your friends and coworkers to fill it out today!

---

## [RFC: Official TypeScript support ✅](https://github.com/emberjs/rfcs/pull/724)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) put up an [RFC for Official TypeScript support](https://github.com/emberjs/rfcs/pull/724) in Ember. The goal of the RFC is to determine if we should support [TypeScript](https://www.typescriptlang.org/) as a first-class citizen in Ember, and if yes, identify any gaps present today.

> Ember officially supporting TypeScript means: All libraries which are installed as part of the default blueprint must ship accurate and up-to-date type definitions for the current edition. These types will uphold a Semantic Versioning commitment which includes a definition of SemVer for TypeScript types as well as a specification of supported compiler versions and settings, so that TypeScript will receive the same stability commitments as the rest of Ember.

* Any addon that is part of the default blueprint must ship types
* Define a policy on what constitutes a breaking change for consumers of a library which publishes types, including Ember’s core libraries
* New Ember apps and addons should support TypeScript by default, though the details of what that means (for example how it will use [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript) or not) will be resolved in future RFCs
* The RFC explicitly does not require support for “typed templates” (though the community is working on this and thinks it’s key to the long-term TypeScript story)

Read and comment on the [RFC on GitHub](https://github.com/emberjs/rfcs/pull/724)!

---

## [EmberConf Contributors Workshop 🐹](https://emberconf.com/schedule/pre-conf_contributors-workshop)

We're certainly all excited about the upcoming (virtual) EmberConf 2021, but don't forget that there's a Contributors Workshop too!

The Contributors Workshop, hosted by [Ricardo Mendes (@locks)](https://github.com/locks) and [Ava Gaiety Wroten (@hergaiety)](https://github.com/hergaiety), will bring our community together to share knowledge about how you can make your first contribution to Ember. There's not much more to it, all you need to bring is an eagerness to learn and contribute to the framework we know and love! 💜💛🧡❤️

You can register for the workshop [here](https://tilde.wufoo.com/forms/emberconf-2021-contributors-workshop-registration/).

---

## [Ember - a beacon of productivity 📖](https://simplabs.com/blog/2021/03/12/Ember.js-in-2021---a-beacon-of-productivity/)

[Marco Otte-Witte (@marcoow)](https://github.com/marcoow) has written an excellent new [blog post](https://simplabs.com/blog/2021/03/12/Ember.js-in-2021---a-beacon-of-productivity/) for the Simplabs blog about why Ember is still a beacon of productivty in a sea of complexity, even after 10 years.

Marco covers how Ember's approach can avoid accidental complexity and all the other things that makes it such a great tool. Even if you know and love Ember, it's well worth a read, so please check out the post if you get a chance.

---

## [`ember-responsive-image` v2 released 🖼️](https://twitter.com/simonihmig/status/1369316435621724163)

[ember-responsive-image](https://github.com/kaliber5/ember-responsive-image) is an addon created by [Simon Ihmig (@simonihmig)](https://github.com/simonihmig). At build time, the addon uses [sharp](https://github.com/lovell/sharp) to generate resized images that are optimized for web.

Simon [announced the v2 release](https://twitter.com/simonihmig/status/1369316435621724163), which provides the following features:

* `<ResponsiveImage>` rewritten as a Glimmer component
* Next-gen image formats WebP and AVIF
* Fixed and responsive layouts
* Lazy loading + LQIP (Low Quality Image Placeholders)
* FastBoot and Embroider support

To learn more how `ember-responsive-image` can help you optimize loading images, we encourage you to check out the following links:

* [README: Basic Usage](https://github.com/kaliber5/ember-responsive-image#basic-usage)
* [Maximally Optimizing Image Loading for the Web in 2021](https://www.industrialempathy.com/posts/image-optimizations/)
* [Implementation in `ember-website` repo](https://github.com/ember-learn/ember-website/pull/769)

---

## [How Qonto used Mirage JS for complex user flow testing ⬆️](https://medium.com/qonto-way/how-to-handle-uploading-and-parsing-files-in-your-frontend-app-tests-19bee8e7a61f)

[Sabin Hertanu (@herzzanu)](https://github.com/herzzanu) details a **testing challenge** he ran into at [Qonto](https://qonto.com/en) in the article [How to handle uploading and parsing files in your frontend app tests](https://medium.com/qonto-way/how-to-handle-uploading-and-parsing-files-in-your-frontend-app-tests-19bee8e7a61f). In Qonto's Ember app, users can upload a file to their servers for creating transfers in bulk. The server reads, parses, and processes the data before sending a list of transfers in response. Mocking the endpoints to accurately match this full process would take a lot of time and code, in addition to being challenging to maintain and scale.

[Mirage JS](https://miragejs.com/) is a library for mocking API endpoints as [route handlers](https://miragejs.com/docs/main-concepts/route-handlers/) to test JavaScript apps, without having to rely on any backend services. Sabin discusses how Qonto uses Mirage [Factories](https://miragejs.com/docs/main-concepts/factories/) to test this tricky user flow. Check out the walkthrough with test code samples in the [blog post](https://medium.com/qonto-way/how-to-handle-uploading-and-parsing-files-in-your-frontend-app-tests-19bee8e7a61f) to learn about how Qonto mocked the API to make sure it matches what they would expect from the real API in production. Effective testing can pay dividends in improving the developer experience and maintaining the quality of the user experience!

---

## New Podcast Episodes 🎙

There are fresh episodes of the new Ember-related podcasts available now! 🔥🔥🔥

<!-- alex ignore tang -->
The [Ember Report](https://twitter.com/EmberReport) has published a [great episode](https://twitter.com/EmberReport/status/1369010817518166020) that features [David Tang (@skaterdav85)](https://github.com/skaterdav85) who shares all about how he came to write his Ember Data books, "Ember Data in the Wild" and the more recently published [Pro Ember Data](https://www.apress.com/us/book/9781484265604). They cover a ton of good subjects, such as how David got into teaching web development and also dig into a variety of Ember Data subjects, so check out the podcast when you can!

<!-- alex ignore of-course -->
Also, the Whiskey, Web and Whatnot podcast has released a [cool new episode](https://twitter.com/shipshapecode/status/1369961936096538625) that features [Chris Garrett (@pzuraq)](https://github.com/pzuraq). They talk about whiskey, of course, but also cover some of the new exciting new things that Chris has been working on for Glimmer and Ember - strict mode and template imports amongst other things. Great stuff!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/evoactivity" rel="noopener noreferrer" target="_blank">Liam Potter (@evoactivity)</a>, <a href="https://github.com/jeffdaley" rel="noopener noreferrer" target="_blank">Jeff Daley (@jeffdaley)</a>, <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a>, <a href="https://github.com/Cartmanishere" rel="noopener noreferrer" target="_blank">Pranav Gajjewar (@Cartmanishere)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/smfoote" rel="noopener noreferrer" target="_blank">Steven (@smfoote)</a>, <a href="https://github.com/stefanpenner" rel="noopener noreferrer" target="_blank">Stefan Penner (@stefanpenner)</a>, <a href="https://github.com/alexlafroscia" rel="noopener noreferrer" target="_blank">Alex LaFroscia (@alexlafroscia)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/steventsao" rel="noopener noreferrer" target="_blank">Steven Tsao (@steventsao)</a>, <a href="https://github.com/sly7-7" rel="noopener noreferrer" target="_blank">Sylvain MINA (@sly7-7)</a>, <a href="https://github.com/arenoir" rel="noopener noreferrer" target="_blank">Aaron Renoir (@arenoir)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/lifeart" rel="noopener noreferrer" target="_blank">Alex Kanunnikov (@lifeart)</a>, <a href="https://github.com/dfreeman" rel="noopener noreferrer" target="_blank">Dan Freeman (@dfreeman)</a>, <a href="https://github.com/kaermorchen" rel="noopener noreferrer" target="_blank">Stanislav Romanov (@kaermorchen)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/thoov" rel="noopener noreferrer" target="_blank">Travis Hoover (@thoov)</a>, <a href="https://github.com/esquith" rel="noopener noreferrer" target="_blank">Esquith Allen (@esquith)</a>, <a href="https://github.com/Windvis" rel="noopener noreferrer" target="_blank">Sam Van Campenhout (@Windvis)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/zhanwang626" rel="noopener noreferrer" target="_blank">Zhan Wang (@zhanwang626)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/loganrosen" rel="noopener noreferrer" target="_blank">Logan Rosen (@loganrosen)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/rpemberton" rel="noopener noreferrer" target="_blank">Rob Pemberton (@rpemberton)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, and <a href="https://github.com/fdrobidoux" rel="noopener noreferrer" target="_blank">Félix Dion-Robidoux (@fdrobidoux)</a> for their contributions to Ember and related repositories! 💖</p>

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

Isaac Lee, Amy Lam, Chris Ng, Jared Galanis, and the Learning Team
