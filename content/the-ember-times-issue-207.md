---
title: The Ember Times - Issue No. 207
authors:
  - ignace-maes
  - aaron-chambers
  - anne-greeth.schot-van-herwijnen
  - jared-galanis
date: 2023-09-24T00:00:00.000Z
tags:
  - newsletter
  - '2023'
---

👋 Emberistas! 🐹

EmberFest 2023 is a wrap 🐹, Ember 5.3 is released 🚀, ember-shiki 🌈, Ember videos 🎞️, Whiskey, Web and Whatnot 🎙️, Addon releases ✨, Embroider addon audits 🧀

---

## [🐹 EmberFest 2023 is a wrap!](https://emberfest.eu/)

EmberFest 2023 happened this past week and it was full of exciting talks that hopefully you were able to see in person or remotely. A huge thank you to all who were involved in cooridinating and presenting and otherwise helping in put EmberFest together. We are already excited for next year's event 🎉🐹🔥!

EmberFest videos should be forthcoming at some point in the not too distance future hopefully 🤞. We'll post here in the Times when they are, so keep an eye out!

---

## [🚀 Ember 5.3 is released](https://blog.emberjs.com/ember-released-5-3)

Ember 5.3 has been released. There were a few deprecations for Ember and Ember CLI. Ember CLI now officially supports `--pnpm`🔥. EmberData shipped quite a bit of work around `RequestManager`.  For EmberData, 5.3 introduced builder utils, builders for `REST`, `ActiveRecord` and `JSON:API` requests as well as serialization utils for `JSON:API` requests ✨✨✨. There were also several deprecations for EmberData. For more detailed information go check out the [release blog post](https://blog.emberjs.com/ember-released-5-3)!

---

## [🌈 New addon for syntax highlighting in Ember](https://github.com/IgnaceMaes/ember-shiki)

Have you ever wanted to show pretty code snippets in your Ember apps? Then today you're in luck. The new [ember-shiki](https://github.com/IgnaceMaes/ember-shiki) addon was just released by Ignace Maes ([@IgnaceMaes](https://github.com/IgnaceMaes)) which makes using the [Shiki](https://github.com/shikijs/shiki) syntax highlighter in Ember a breeze. It is a modern v2 addon with TypeScript and Glint interfaces and has support for Fastboot. On top of that it comes with theming options, code block grouping, and line highlighting. Ember's new `.gjs` and `.gts` file formats are also supported out of the box.

Give it a try, for all your syntax highlighting needs!

---

## 🎞️ Learn more about Ember with videos

When talking about the new things in Ember, Glint is a favourite topic. [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho), together with [Dan Freeman (@dfreeman)](https://github.com/dfreeman) are publishing a series of screencasts on this topic. Their first screencast has the amazing title: [You did WHAT with TypeScript?—Glint Architecture Overview](https://youtu.be/MLpP8D3cY7M?si=7ro6801LQZtkjaVT), and will explain the big picture of how the Glint project works. In their second screencast, [Vacuous Lies: How the Glint/TypeScript transform works](https://www.youtube.com/watch?v=Xhv1jAV5cZI), they dig into the details of how Glint transforms EmberJS and GlimmerJS templates into TypeScript and in the third installment, [Big Gamma Energy](https://www.youtube.com/watch?v=6-TWGx8j9RU), Chris and Dan go over components and the types that power themd.

If you like more short bits of information checkout [Preston](https://github.com/NullVoxPopuli)’s [TikTok videos](https://www.tiktok.com/@nullvoxpopuli) or [YouTube Shorts](https://www.youtube.com/channel/UCOZ7i6NiYjG0NyH9_fQ6xfg), on `template-tag`, OTP component and publishing to NPM and more.

---

## [🎙️ Whiskey, Web and Whatnot EmberConf podcasts](https://whiskeywebandwhatnot.fm)

<!-- alex ignore hosts -->

The [Whiskey, Web and Whatnot podcast](https://whiskeywebandwhatnot.fm) released two new episodes, recorded at EmberConf. The [first episode](https://whiskeywebandwhatnot.fm/polaris-vite-and-exploring-the-future-of-ember-with-jared-galanis-and-preston-sego) covers [Polaris (the upcoming Ember edition)](https://emberjs.com/editions/polaris/), [Vite](https://vitejs.dev) and the workings of learning team in these exciting times. [Preston Sego III (@NullVoxPopuli)](https://github.com/NullVoxPopuli) and [Jared Galanis (@jaredgalanis)](https://github.com/jaredgalanis) discussed all this and more with the hosts [Robbie Wagner (@RobbieTheWagner)](https://github.com/robbiethewagner) and [Chuck Carpenter (@chuckcarpenter)](https://github.com/chuckcarpenter). In the [second episode](https://whiskeywebandwhatnot.fm/vite-debugging-and-pnpm-with-ed-faulkner) dives [Ed Faulkner (@ef4)](https://github.com/ef4) into the depts of [Vite](https://vitejs.dev), a build tool known for its speed and user-friendliness. If you want to know more about what [PNPM (a package manager)](https://pnpm.io) and [Vite](https://vitejs.dev) can bring to your Ember experience, check it out!

---

## [🧀 Audit your addons for Embroider compatibility](https://github.com/achambers/xcheese)

Recently, [Aaron Chambers (@achambers)](https://github.com/achambers) published a [small package](https://github.com/achambers/xcheese) to help audit an app's addons to see which are V1 vs V2. When run from the terminal using `npx`, it will print a table showing which of the addons in your app are already V2, which are V1, and of those, which ones have a V2 version available. This should make it easier to keep track of which addons you have left to update to V2 on your journey to adopting [Embroider](https://github.com/embroider-build/embroider).

To try it out, run `npx github:achambers/xcheese -h` in your Ember app directory to for instructions on how to use it.

---

## [✨ Addon releases](section-url)

The Ember ecosystem is not standing still and below you can see some of the latest updates to addons.

- [`typed-ember/glint` v1.1.0](https://github.com/typed-ember/glint/releases/tag/1.1.0) updates the documentation, fixes a bug concerning the LinkTo component type and exposes the `loadConfig` function.
- [`ember-file-upload` v8.2.0](https://github.com/adopted-ember-addons/ember-file-upload/releases/tag/v8.2.0) adds Glint types to the addon and documentation for this.
- [`ember-scroll-modifiers` v7.1.0](https://github.com/elwayman02/ember-scroll-modifiers/releases/tag/v7.1.0) supports `Additional state` to be passed as the `IntersectionObserverEntry`.
- [`embroider-build/addon-blueprint` v2.5.0](https://github.com/embroider-build/addon-blueprint/releases/tag/v2.5.0) fixes a bug to now propely handle `.gts` files and more enhancements.
- [`ember-codemode-v1-to-v2` v1.0.0](https://github.com/ijlee2/ember-codemod-v1-to-v2/releases) downstreams changes from the `addon-blueprint` (in version 0.10.0) up to v2.2.0. In [v1.0.0](https://github.com/ijlee2/ember-codemod-v1-to-v2/releases/tag/1.0.0)] support for [Node 16] is dropped and the changes from `addon-blueprint` are downstreamed up to version 2.5.0.
- [`ember-truth-helpers` v4.0.3](https://github.com/jmurphyau/ember-truth-helpers/releases) converted to V2 Embroider native format, adds Glint types and provides imports for usage in `gts` or `gjs` files.

If you want your addon to be mentioned here, post about your releases in the [#news-and-announcement](https://discord.com/channels/480462759797063690/480499624663056390) channel on our [Discord server](https://discord.gg/emberjs).

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

Ignace Maes, Aaron Chambers, Anne-Greeth Schot-van Herwijnen, Jared Galanis and the Learning Team
