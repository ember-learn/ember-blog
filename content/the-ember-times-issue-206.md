---
title: The Ember Times - Issue No. 206
authors:
  - anne-greeth-schot-vanherwijnen
  - isaac-lee
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
date: 2023-08-04T00:00:00.000Z
tags:
  - newsletter
  - '2023'
---

👋 Emberistas! 🐹

EmberConf 2023 🎙️, EmberFest 2023 🇪🇸,
a modern way to write codemods,
a codemod to help introduce Glint,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [🐹 1. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🎙️ EmberConf 2023](https://www.emberconf.com)

Two weeks ago, on the 20th and 21st of July about **150 Emberistas** met in Portland (OR) for the first in-person EmberConf since COVID-19. It was amazing to see so many people getting to know each other and sharing knowledge about our framework, EmberJS. Hopefully, you’ve enjoyed the live stream with the [great line-up of speakers](https://www.emberconf.com/speakers). If you have missed it or want to watch something back, the live streams of [day 1](https://www.youtube.com/watch?v=LvrpUrdq5Gc) and [day 2](https://www.youtube.com/watch?v=cDT_WPgK3xI) are already available (but hidden on YouTube). The separate videos will follow later. On the [Discord server](https://discord.gg/wks7HMrG), each talk got its own channel, in case you want to get in contact about that talk specifically. Let's get **inspired**!

---

## [🇪🇸 EmberFest 2023](https://emberfest.eu)

After a great EmberConf, next up is [EmberFest](https://emberfest.eu) on the 21st and 22nd of September in **Madrid, Spain**. EmberFest is the European Community Ember Conference. If you’re looking for updates on the latest and greatest in Ember and Glimmer this is the place to be. Do you want to get an impression of EmberFest, check out the [Paris highlight video of last year's EmberFest](https://youtu.be/hvg35gS1Xjo). You can attend this conference in person and remotely, so get your [tickets](https://emberfest.eu/?tito=%2Femberfest%2Femberfest-2023%2Fen%2Fregistrations%2Fnew%3Fprefill%3D%257B%257D) **now**! Ed Faulkner ([@ef4](https://github.com/ef4)) and Mel Sumner ([@melsumner](https://github.com/melsumner)) are already confirmed speakers.

---

## [🤖 A modern way to write codemods](https://github.com/ijlee2/codemod-utils)

A few EmberConf talks brought up the need for more codemods. Isaac Lee ([@ijlee2](https://github.com/ijlee2)) has been working on [`@codemod-utils`](https://github.com/ijlee2/codemod-utils), a set of tools and conventions for writing codemods, and a CLI (command-line interface) to help you get started:

```sh
npx @codemod-utils/cli --name <your-codemod-name>
```

<!-- alex ignore simple -->
`@codemod-utils` encourages taking small and simple steps, as they are key to writing codemods that can be maintained and extended. Isaac, in the talk "[In 1 Year](https://crunchingnumbers.live/2023/07/20/in-1-year)," explained:

> My hope is, we can lower the [entry] barrier enough that, if a person can write a function in Node.js, then they can start writing a codemod.

To learn how to write a codemod, check out [the main tutorial](https://github.com/ijlee2/codemod-utils#tutorials) and [the codemods written with `@codemod-utils`](https://github.com/ijlee2/codemod-utils#codemods-written-with-codemod-utils).

---

## [✨ Codemod to help introduce Glint](https://github.com/ijlee2/ember-codemod-args-to-signature)

To introduce Glint, you will need to write the [signature](https://typed-ember.gitbook.io/glint/environments/ember/component-signatures) and [template registry](https://typed-ember.gitbook.io/glint/environments/ember/template-registry) for each component. This can be an error-prone, onerous task for large projects.

You can automate the required change by running [`ember-codemod-args-to-signature`](https://github.com/ijlee2/ember-codemod-args-to-signature).

```sh
# Apps
ember-codemod-args-to-signature --src app/components

# V1 addons
ember-codemod-args-to-signature --src addon/components

# V2 addons
ember-codemod-args-to-signature --src src/components
```

The codemod will partially fill out signatures and template registries. It will also fix related code, so that your project is consistent in syntax and follows Ember's naming conventions. If you've previously taken the effort to add  `Args` to your components (the former way of defining the signature), the codemod will use what you already know to create `Signature`.

---

## [🐹 6. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 7. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 8. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

Anne-Greeth Schot-van Herwijnen, Isaac Lee, the crowd and the Learning Team
