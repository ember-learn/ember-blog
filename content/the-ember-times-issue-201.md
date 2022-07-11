---
title: The Ember Times - Issue No. 201
authors:
  - anne-greeth-schot-van-herwijnen
  - nullvoxpopuli
  - patricklx
  - dhanush-kumar
  - jared-galanis
date: 2022-07-10T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹

EmberFest 2022 🇫🇷,
Starbeam 🤩,
Embroider is legit 🧵,
Testing Tasks and Flexible Components Posts 📖,
Advanced template support in Intellij Idea 💻,
ember-statechart-component 6.0.0 📊,
Whiskey, Web and Whatnot Episodes 🔊

---

## [EmberFest 2022 🇫🇷](https://emberfest.eu/)

EmberFest 2022 is happening on September 22-23 in Paris 🇫🇷, and tickets are now on sale! 😊

If you’re looking for updates on the latest and greatest in Ember and Glimmer this is the place to be. EmberFest is also a great opportunity to get in touch with the European Ember Community (and friends from abroad) and hiring Ember talent.

Don't wait too long to book your ticket and travel as September will be here before we know it!

---

## [Starbeam 🤩](https://twitter.com/wycats/status/1538888835064442880)

If you haven't had a chance to checkout [Starbeam](https://github.com/starbeamjs/starbeam) from [Yehuda Katz (@wycats)](https://github.com/wycats), you're going to want to give it a look!

The TL;DR on Starbeam is that it's the best parts of the Ember auto-tracking system cleaned up and extracted into a standalone library optimized for universality. This means you can use the 🔥 Ember reactivity system 🔥 in frameworks like React, Vue and Svelte. Note, Starbeam should be available in Ember.js as well.

An [in-progress docs site](https://starbeamjs.com/) is up now, go check it out!

---

## [Embroider is legit 🧵](https://github.com/embroider-build/embroider)

Embroider has been _declared_ stable since v1.0.0, or around 6 months ago (released mid January 2021). Embroider is the 2nd generation build pipeline to Ember Apps that enables the usage of “Standard JavaScript” and leverages standard JavaScript packagers such as Webpack.

Since even before v1.0.0, addon-authors have been adding **two** embroider-centric tests in C.I. for both "maximum compatibility" and "maximum strictness" to their ember-try configs.
`ember-cli` has even added an `--embroider` flag out of the box for starting new projects with embroider.
Try embroider out today in a new app!

```bash
ember new my-app --embroider
```

Or, add embroider to an existing app via this codemod:

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

Note that while some addons may break your build, this may be for the greater good. For example, instead of relying on ember-specific solutions to certain build-time behaviors, you may now follow heavily documented, and asked about, and iterated on Webpack plugins. Additionally, removing addons with build-time behavior will speed up your overall dev-server start time.

---

## [Testing Tasks and Flexible Components Posts 📖](https://mfeckie.dev/)

[Martin Feckie (@mfeckie)](https://github.com/mfeckie) has written two great new blog posts. One is on [testing ember-concurrency tasks](https://mfeckie.dev/testing-tasks/) and the other is about how to write [flexible components](https://mfeckie.dev/flexible-components/)! ✨

For testing tasks, Martin shows you how to write a fake task helper to support writing tests that test tasks in the happy path. For flexible components, Martin makes the case for an alternative approach to flexible components.

Go ahead and give the posts a ready today!

---

## [Advanced template support in Intellij Idea 💻](https://github.com/patricklx/intellij-emberjs-experimental)

In Intellij Idea the support for Ember.js templates has been quite lacking, Especially compared to vscode [(Un)Stable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable). With [intellij-emberjs-experimental](https://github.com/patricklx/intellij-emberjs-experimental), [@patricklx](https://github.com/patricklx) added many features to the [original plugin](https://github.com/Turbo87/intellij-emberjs) to improve the UX of working/coding with templates. Search for the addon named `Ember Experimental.js` and give it a try. Note, you will need to disable or remove the other Ember.js plugin to prevent conflicts.

This plugin adds:

- **Smart** Handlebars references for tags/mustache paths and tag attributes. This means that it handles ember helpers such as `let`, `hash`, `or`, `each`, `yield`. References to javascript/typescript and its able to resolve array item type in `each`.
- Handlebars **autocompletion** for tags (coming from blocks), tag attributes, mustache paths (js/ts) and named blocks. Also validates if atttribtues are valid and if requeried ones are missing.
- Handlebars **parameter hints** for helpers/modifiers and components.
- Handlebars **renaming** for mustache ids and html tags.
- Includes support for Ember.js internal Components and Helpers with documentation and support for attributes and parameter hints.
- It also resolves `{{or x y z}}` to the first resolvable option, this makes `{{component (or x y)}}` work, e.g in `power-select`.
- Support for inline templates.
- Some initial support for [.gjs]((https://github.com/ember-template-imports/ember-template-imports)) files.

---

## [ember-statechart-component 6.0.0 📊](https://twitter.com/nullvoxpopuli/status/1543449217351442438)

`ember-statechart-component` 6.0.0 has been [released](https://github.com/NullVoxPopuli/ember-statechart-component/releases/tag/v6.0.0) by [@NullVoxPopuli](https://github.com/NullVoxPopuli) and now includes support for Glint! There are also some breaking changes around the required versions of Ember involved so be sure to checkout the release notes.

There's also been several patch and minor releases of the library since 6.0.0 was released so the latest is actually now v6.1.1. Those releases includes a few bug fixes and one new feature (automatic glint registration).

---

## [Whiskey Web and Whatnot Episodes 🔊](https://www.whiskeywebandwhatnot.fm/)

There are two new awesome episodes of the Whiskey Web and Whatnot podcast featuring two Ember core team members! 🔥

First, [Robert Wagner (@rwwagner90)](https://github.com/rwwagner90) and [Chuck Carpenter (@chuckcarpenter)](https://github.com/chuckcarpenter) of Ship Shape sit down with [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) of the Ember Framework and Typescript Core Teams in this episode of [Whiskey, Web and Whatnot](https://www.whiskeywebandwhatnot.fm/bringing-types-to-ember-with-chris-krycho/). Chris shares his initial work on getting TypeScript into Ember, how Typed-Ember got established, further on explaining the need and long term benefits.

They also discuss the enthusiasm of newbies to use TypeScript and the complexities that might arise. If you want to know factors to consider when deciding to use TypeScript, they discuss a few. Chris suggests developers to learn Rust programming because learning functional programming helps broadening your horizon.

Next up is an episode with Ember Framework Core Team member [Godfrey Chan @chancancode](https://github.com/chancancode) who chats with Robbie and Chuck about StarBeam and the Polaris Edition and the future of Ember.js! Check out the episode [here](https://www.whiskeywebandwhatnot.fm/polaris-starbeam-and-the-future-of-ember-with-godfrey-chan/).

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

Anne-Greeth Schot-van Herwijnen, NullVoxPopuli, patricklx, Dhanush Kumar, Jared Galanis and the Learning Team
