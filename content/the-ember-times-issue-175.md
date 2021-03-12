---
title: The Ember Times - Issue No. 175
authors:
  - isaac-lee
  - amy-lam
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
date: 2021-03-12T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

`ember-responsive-image` v2 released 🖼️,
Use Mirage JS to test non-trivial user flows ⬆️,
...
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [1. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [2. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

## [5. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [6. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [7. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

Isaac Lee, Amy Lam, the crowd and the Learning Team
