---
title: The Ember Times - Issue No. 200
authors:
  - jared-galanis
  - chris-ng
  - NullVoxPopuli
  - anne-greeth-schot-van-herwijnen
  - chris-manson
date: 2022-04-17T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹
TypeScript in Ember 🤝,
Addon Roundup 🌐,
Time to watch some movies 🍿,
Using Ember in 2022 🏙,
Embroider is legit.
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [TypeScript in Ember 🤝](https://2022.emberconf.com/talks/the-road-to-typescript)

As you might have noticed during [EmberConf 2022](https://2022.emberconf.com/talks) TypeScript and Ember are becoming more and more a thing. [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) gave [a talk about Ember's road towards TypeScript](https://2022.emberconf.com/talks/the-road-to-typescript). He wrote multiple interesting blogposts about TypeScript: [Misusing TypeScript Assertion Functions for Fun and Profit](https://v5.chriskrycho.com/journal/misusing-typescript-assertion-functions-for-fun-and-profit/) and [SemVer for TS in Practice](https://v5.chriskrycho.com/journal/semver-for-ts-in-practice/). [Krystan Huffmeme (@gitKrystan)](https://github.com/gitKrystan) updated her [blogpost about TypeScript](https://blog.skylight.io/ts-extends-confidence-2-2022/) with the latest and greatest Ember + TypeScript practices. Not only in the realm of blogposts is TypeScript hot and happening, [ember-responsive-image latest update (v3.4.0)](https://github.com/kaliber5/ember-responsive-image/releases/tag/v3.4.0) adds Glint support to the add-on.

---

## Addon Roundup 🌐

- [NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) released several minor versions of  [ember-resources](https://github.com/NullVoxPopuli/ember-resources), an addon that implements the [Resource pattern](https://www.pzuraq.com/blog/introducing-use), which added a [simplified API](https://ember-resources.pages.dev/modules/util_function_resource) (in v4.7) for creating inline, one-off, resources -- using "plain functions". Additionally a couple sample utilities have been added  to demonstrate how folks might want to use ember-resources in their own projects: [`RemoteData`](https://ember-resources.pages.dev/modules/util_remote_data) (in v4.8) for performing vastly simplified, yet reactive, `fetch` requests -- using the function-based `resource`. And lastly, a [`debounce`](https://ember-resources.pages.dev/modules/util_debounce) (in v4.9) utility which aims to demonstrate a minimal/low-effort situation in which the function-based `resource` can be used.
- [Tobias Bieniek (@Turbo87)](https://github.com/Turbo87) published a new version of [intellij-emberjs](https://github.com/Turbo87/intellij-emberjs) which is a plugin that provides basic Ember.js support to all JetBrains IDEs that support JavaScript. This release fixes the annoying `LineMarkerInfo` deprecation warning that was introduced in 2021.3.
- [Tobias Bieniek (@Turbo87)](https://github.com/Turbo87) also released v1.0.0 of [ember-hbs-minifier](https://github.com/simplabs/ember-hbs-minifier) which shrinks your templates by removing unnecessary text nodes and collapsing into single space characters.
- [Alberto Cantú Gómez (@betocantu93)](https://github.com/betocantu93) released [ember-eui](https://github.com/prysmex/ember-eui) which provides Ember components for the [Elastic design system](https://github.com/elastic/eui). Check out the [demo](https://ember-eui.netlify.app/docs/introduction) to try it out!
- [Isaac Lee (@ijlee2)](https://github.com/ijlee2) released [ember-container-query](https://github.com/ijlee2/ember-container-query) which is an addon that provides a component and several helpers to leverage container queries in your Ember app. Open the [demo](https://ember-container-query.netlify.app/) app to see it in action!
- [Isaac Lee (@ijlee2)](https://github.com/ijlee2) also released [ember-workshop](https://github.com/ijlee2/ember-workshop) which is a demo app to illustrate core and latest concepts in Ember. Try it out today at the [demo](https://ember-workshop.netlify.app/) page!
- [Karel Bousson (@BoussonKarel)](https://github.com/BoussonKarel) release a ✨ new ✨ add-on [`ember-promise-worker`](https://github.com/BoussonKarel/ember-promise-worker) to leverage the power of web workers in your Ember app.
- [Joe Gaudet (@joegaudet)](https://github.com/joegaudet) released v2.28.0 of [`ember-foxy-forms`](https://github.com/Foodee/ember-foxy-forms/releases/tag/v2.28.0) with two new features.
    - `#willSubmit` and `#willReset` are now asynchronous allowing for back end calls or dialogs to be popped up.
    - `#confirmSubmit` and `#confirmReset` which allow for explicitly confirming submission and resetting of the form, will eventually add hooks into this process by default that allow for swapping out confirmation services from your own application.
- Version 4.0.0 and 4.1.0 of [Ember-Scroll-Modifiers](https://ember-scroll-modifiers.jhawk.co) have been released including the breaking change to Ember 4. Version 4.1.0 brings you offset support for `scroll-into-view`.
- With the release of v.6.0.0 of [Ember-File-Upload](https://github.com/adopted-ember-addons/ember-file-upload)  `File.upload` will now resolve with a `Response` object, for more breaking changes checkout [the release guide](https://github.com/adopted-ember-addons/ember-file-upload/releases/tag/v6.0.0).
- [Chris Manson (@mansona)](https://github.com/mansona) added a section to the [Lint to the Future](https://github.com/mansona/lint-to-the-future) documentation that describes how to build a plugin. Lint to the future is something that [Chris talked about at EmberConf](https://www.youtube.com/watch?v=Nl8gHDdkI0Y) and if you want to learn how to write your own plugin for Lint to the Future you can [now check out the Plugin Development Guide](https://github.com/mansona/lint-to-the-future/blob/main/docs/plugin-development.md).

---

## [Ember videos 🎞️](https://2022.emberconf.com/talks)

EmberConf 2022 was remote, so all [the videos](https://2022.emberconf.com/talks) are already available, including the [AMA with Robert Jackson (@rwjblue)](https://www.youtube.com/watch?v=huGc98lrLRk) that happend the week after the conference. The [Ember Ingnite videos are also on Youtube](https://www.youtube.com/channel/UCyloIQk1MS_kWEZOvUz8deg), including that talk by [Thomas Gossmann (@gossi)](https://github.com/gossi) about [Component Architecture](https://gos.si/blog/frontend-component-architecture/). **Have fun** watching all these amazing speakers 🍿!

---

<<<<<<< HEAD
## Why use Ember at your company? 🏙
||||||| parent of bae0c25c (Blurb about embroider)
## [🐹 4. Section title in sentence case](section-url)
=======
>>>>>>> bae0c25c (Blurb about embroider)

[Kenny De Pauw from OTA insight](https://dev.to/otainsight) and [Frédéric Soumaré (@hakilebara)](https://github.com/hakilebara) from Qonto both wrote a blogpost about the benefits and relevance of EmberJS to their companies.

[According to Kenny](https://dev.to/otainsight/why-we-use-emberjs-at-ota-insight-4oai) they are able to create new features quickly, have a codebase that’s scalable and have a good developer experience.

[Frédéric says](https://medium.com/qonto-way/stability-without-stagnation-using-ember-at-qonto-b221b52b917b): “Convention over configuration, Stability over stagnation, Climbing the mountain together, these are cardinal principles of the Ember framework. Beyond the tech, these principles are the reason we chose Ember and decided to stick with it.”

If you want to know more, check out the following blogposts:

- [Why we use Ember.js at OTA Insight](https://dev.to/otainsight/why-we-use-emberjs-at-ota-insight-4oai)
- [Stability without stagnation — Using Ember at Qonto](https://medium.com/qonto-way/stability-without-stagnation-using-ember-at-qonto-b221b52b917b)

## [🧵 5. Embroider is legit](https://github.com/embroider-build/embroider)

Embroider has been _declared_ stable since v1.0.0, or around 6 months ago (released mid January 2021).
Since even before v1.0.0, addon-authors have been adding **two** embroider-centric tests in C.I. for both "maximum compatibility" and "maximum strictness" to their ember-try configs.
`ember-cli` has even added an `--embroider` flag out of the box for starting new projects with embroider.
Try embroider out today in a new app!,

```bash
ember new my-app --embroider
```

Or, add embroider to an existing app via this codemod,

```bash
npx ember-apply embroider
```

This [`ember-apply`](https://github.com/NullVoxPopuli/ember-apply/) command automates the setup instructions in the [embroider README](https://github.com/embroider-build/embroider#how-to-try-it).

And speaking of the README, it has a section of if _you_ should use embroider or not, today.

> Several large, heavily-tested Ember apps are shipping to production with Embroider. So if you are excited to adopt Embroider, it is a reasonable choice. The main risks to be aware of if you choose to use Embroider in production are:
>
> - you're likely to discover some Ember addons don't work or break your build
> - Embroider's own configuration options are subject to change, so you'll need to read the CHANGELOG.md when updating the Embroider packages.
>
> Alternatively, it is totally safe to stick with the traditional build pipeline and wait for the official cutover point when EmberCLI starts generating new apps with Embroider by default.

Note that while some addons may break your build, this may be for the greater good. For example, instead of relying on ember-specific solutions to certain build-time behaviors, you may now follow heavily documented, and asked about, and iterated on webpack plugins. Additionally, removing addons with build-time behavior will speed up your overall dev-server start time.

---

## [🐹 5. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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


Jared Galanis, Anne-Greeth Schot-van Herwijnen, Chris Ng, NullVoxPopuli, Chris Manson, and the Learning Team
