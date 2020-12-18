---
title: The Ember Times - Issue No. 170
author: Ava Wroten, Amy Lam, Anne-Greeth van Herwijne, Chris Ng, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Performance, Ember Octane, Ember.js Times, Ember Times, 2020
alias : "blog/2020/12/18-the-ember-times-issue-170.html"
responsive: true
---

👏 Emberistas! 🐹
Ember 3.23 is Released! 🐹,
Explore Ember/Glimmer component performance 🚅,
<!--alex ignore nuts-->
Read the blog post on the Ember Octane mental model ✍️,
Ember + Tailwind 2.0 🎨,
Learn how to use WebSockets with Ember Data 📟,
Glimmer apps with Snowpack 🔥️⛄,

READMORE

---

## [Ember 3.23 Released 🐹](https://blog.emberjs.com/2020/12/14/ember-3-23-released.html)

Version 3.23 of Ember.js, Ember Data, and Ember CLI was released on December 14, 2020! Please use the [ember-try](https://github.com/ember-cli/ember-try) addon to continuously test your projects against the latest Ember releases.

Ember.js 3.23 included [improved error ergonomics](https://github.com/emberjs/ember.js/pull/19213), the `invokeHelper` from [JavaScript Helper Invocation API RFC](https://github.com/emberjs/rfcs/blob/master/text/0626-invoke-helper.md), and the helper manager from [Helper Managers RFC](https://github.com/emberjs/rfcs/blob/master/text/0625-helper-managers.md). There were no deprecations in Ember 3.23.

Ember Data 3.23 [deprecates](https://deprecations.emberjs.com/ember-data/v3.x/#toc_ember-data-najax-fallback) `najax` requests when `ember-fetch` is installed to better guide users on how to update their app. If you do not have jQuery [enabled](https://guides.emberjs.com/release/configuring-ember/optional-features/), this deprecation does not apply to you.

There were [no significant changes](https://github.com/ember-cli/ember-cli/releases/tag/v3.23.0) in Ember CLI 3.23.

Read the full [Ember 3.23 release notes](https://blog.emberjs.com/2020/12/14/ember-3-23-released.html) for the complete information.

---

## [Glimmer and Ember component performance playground 🚅](https://nullvoxpopuli.github.io/ember-three-boxes-demo/)

> Using @glimmer/component instead of @ember/component can get you up to 2x speed boosts at almost half the memory consumption.
> [@nullvoxpopuli](https://twitter.com/nullvoxpopuli) ([source](https://twitter.com/nullvoxpopuli/status/1335616011744251907))

Play with [the interactive browser demo](https://nullvoxpopuli.github.io/ember-three-boxes-demo/) or [explore the source](https://github.com/NullVoxPopuli/ember-three-boxes-demo) behind a performance comparison of Native JS, Ember Components and Glimmer Components. Feel the performance improvements the core team has achieved for yourself! 🔥

![Glimmer rendering thousands of three.js elements with fast performance](/images/blog/emberjstimes/nullvoxpopuli-glimmer-performance.png)

Within [the source README.md](https://github.com/NullVoxPopuli/ember-three-boxes-demo/blob/master/README.md) are links to Twitter conversations happening across frameworks as well including similar projects for [React (demo)](https://twitter.com/0xca0a/status/1199997552466288641) and [Svelte (demo)](https://twitter.com/Rich_Harris/status/1200807952522842112). 🌐

---

<!--alex ignore nuts-->
## [Blog: Ember Octane is a New Mental Model ✍️](https://v5.chriskrycho.com/journal/ember-octane-is-a-new-mental-model/)

<!--alex ignore easy-->
[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) wrote a [blog post](https://v5.chriskrycho.com/journal/ember-octane-is-a-new-mental-model/) on how Ember Octane is not a 1:1 translation from Ember Classic but rather a whole new way of thinking and designing your code. This new programming model means that some patterns that you’re used to using in the Classic paradigm simply do not work in the new paradigm.

Chris goes through a couple examples of code that was fundamentally coupled to Ember Classic idioms such as the [Evented API](https://api.emberjs.com/ember/release/classes/Evented) and usage of `didReceiveAttrs`. The blog argues that although these cases were rare, it’s possible the abstraction would benefit from being reworked substantially towards the Octane idioms.

Read the full blog post on [Chris’s blog](https://v5.chriskrycho.com/journal/ember-octane-is-a-new-mental-model/) or follow the [discussion on GitHub](https://github.com/emberjs/rfcs/pull/669#issuecomment-739320902)!

---

## [Ember + Tailwind CSS 2.0 🎨](https://twitter.com/alexlafroscia/status/1330557883566739456)

On the functional CSS train? Now that Tailwind 2.0 is out, you may be looking for guidance on setting it up in your Ember app, as there are some slight differences from Tailwind 1.x. [Ray Tiley (@raytiley)](https://github.com/raytiley/tailwind-ember-example) put together [tailwind-ember-example](https://github.com/raytiley/tailwind-ember-example) to demonstrate how to get things configured in Ember. Check out the conversation on [Twitter](https://twitter.com/raytiley/status/1330493161848905730) or chime in on [GitHub](https://github.com/raytiley/tailwind-ember-example) if you have more to add or run into any gotchas!

What's new in Tailwind 2.0? A new color palette, dark mode support, an extra wide 2XL breakpoint, and more. (Note that Tailwind 2.0 is not compatible with IE11, but IE11's end of life is set for 2021.) Check out Tailwind's fancy [release trailer video](https://www.youtube.com/watch?v=3u_vIdnJYLc&feature=emb_logo) or the [blog post](https://blog.tailwindcss.com/tailwindcss-v2) for more details.

---

## [Live updates with WebSockets in Ember Data 📟](https://codingitwrong.com/2020/10/02/ember-data-live-updates-with-rails.html)

If you want to learn how to update your Ember app with live data provided by others, [Josh Justice @CodingItWrong](https://github.com/codingitwrong) wrote a [blog](https://codingitwrong.com/2020/10/02/ember-data-live-updates-with-rails.html) about how to use **WebSockets** in combination with JSON:API to get live updates in your app. 

The blog post is a step-by-step explanation with extensive code examples of using WebSockets with Ember Data. At the end of the blog post you will have a ToDo list that will update information of all users to each other. Live updates are a new way of thinking about the data flow in your app, but the libraries that you probably are already using allow you to add them without adding too much code. This blog will give you a nice place to start experimenting with this cool technology.


<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Glimmer apps with Snowpack 🔥️⛄](https://dev.to/rajasegar/building-glimmer-apps-with-snowpack-igc)

There's an awesome new [blog post](https://dev.to/rajasegar/building-glimmer-apps-with-snowpack-igc) from [Rajasegar Chandran @rajasegar](https://github.com/rajasegar) about how to build your Glimmer app with Snowpack 🔥️⛄!

The Glimmer VM runs the components we know and 💜 in Ember, and it is designed to run them super fast 🔥. Snowpack ⛄️ is a new, lightning-fast frontend build tool designed for the modern web. Snowpack leverages JavaScript's native module system [(ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

The post explains how to create a Snowpack app, add dependencies such as Glimmer, and how to configure Snowpack.

It's an exciting foray into new technologies that are built to optimize our experience as developers and users of web technologies.

But that is not all. Rajasegar has also created a `create-snowpack-app` [template](https://github.com/rajasegar/snowpack-app-template-glimmer) to bootstrap your Glimmer app and use Snowpack. 

There's also a sample Todo List app built using these exciting new technologies if you want to [check it out](https://todolist-glimmer-snowpack.surge.sh/).

Still not enough cool frontend bundler technology for you? Well, Rajasegar has written a follow-up post about [how to use Rollup with a Glimmer app](https://dev.to/rajasegar/building-glimmer-apps-with-rollup-3jcj) as well!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

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

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Ava Wroten, Amy Lam, Anne-Greeth van Herwijnen, Chris Ng, Jared Galanis the crowd and the Learning Team
