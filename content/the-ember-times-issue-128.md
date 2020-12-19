---
title: The Ember Times - Issue No. 128
authors:
  - chris-ng
  - isaac-lee
  - jessica-jordan
  - amy-lam
date: 2019-12-13T00:00:00.000Z
tags:
  - newsletter
  - '2019'
---


Happy Friday the 13th 👻, Emberistas! 🐹

Updates for the Octane/Classic Ember Cheat Sheet 🎮,
check out the new accessible controls for ember-sortable 🎛️,
introduce adaptive loading to your app with Ember Device 📶,
a new testing codemod from Freshworks 🎉,
and more DecEmber 📆 updates! 

<!-- READMORE -->

---

## [New Release of the Octane vs Classic Cheat Sheet 🎮](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)

Ember's first edition, [Ember Octane](https://emberjs.com/editions/octane/), is around the corner. And did you already know that you can find all the cheat codes you will ever need to master your move from classic Ember apps to Octane ones in [this official cheat sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)? It compares many of the APIs, patterns and best practices that you might already be familiar with from the classic Ember world to the new paradigms used in Octane applications.

In the past weeks plenty of community members worked on getting the cheat sheet ready for the upcoming launch of Ember Octane. Recently, they added information on how [the Data Down, Actions Up pattern](https://discuss.emberjs.com/t/readers-questions-what-is-meant-by-the-term-data-down-actions-up/15311) compares between classic and Octane apps, [template co-location](https://emberjs.github.io/rfcs/0481-component-templates-co-location.html), how to migrate [when using Mixins](https://api.emberjs.com/ember/3.14/classes/Mixin) and much more. [Check out the cheat sheet today](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)!

Last, but not least, we would like to not only thank those who worked [on the latest update of the Ember Octane vs Classic Cheat Sheet](https://github.com/ember-learn/ember-octane-vs-classic-cheat-sheet/pull/19), but also everyone else who made this valuable learning resource a reality previously: a huge thank you 💖 goes to the contributors [Jen Weber (@jenweber)](https://github.com/jenweber), [Melanie Sumner (@MelSumner)](https://github.com/MelSumner), [Venus Ang (@venusang)](https://github.com/venusang), [Rajasegar Chandran (@rajasegar-c)](https://github.com/rajasegar-c), [David Baker (@acorncom)](https://github.com/acorncom), [Peter Wagenet (@wagenet)](https://github.com/wagenet), [Robert Wagner (@rwwagner90)](https://github.com/rwwagner90), [Chris Garrett (@pzuraq)](https://github.com/pzuraq), [Eli Flanagan (@efx)](https://github.com/efx) and [L. Preston Sego III (@NullVoxPopuli)](https://github.com/NullVoxPopuli)!

Want to contribute to the cheat sheet yourself? Check out [the project on Github](https://github.com/ember-learn/ember-octane-vs-classic-cheat-sheet) and chat with other contributors on the **#dev-ember-learning** channel on [the Ember Discord](https://discordapp.com/invite/emberjs)!

---

## [Accessible Controls for ember-sortable 🎛️](https://www.linkedin.com/pulse/open-source-a11y-deep-dive-ember-sortable-yicheng-jerry-gong/)

[Yicheng (Jerry) Gong (@ygongdev)](https://github.com/ygongdev) wrote a [blog post](https://www.linkedin.com/pulse/open-source-a11y-deep-dive-ember-sortable-yicheng-jerry-gong/) that documented the process on how we now have [accessible controls](https://github.com/adopted-ember-addons/ember-sortable/issues/269) for [ember-sortable](https://github.com/adopted-ember-addons/ember-sortable), an open source drag and drop list sort Ember addon.

Unfortunately there was not a well-defined standard for making accessible drag and drop controls from organizations such as the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/). He turned to [Andrew A Lee (@drewlee)](https://github.com/drewlee) who created a comprehensive list on what accessible features should be expected on a drag and drop utility and even a [CodePen demo](https://codepen.io/drewlee/project/full/XWNLeE). These accessible controls have now landed as part of the [2.0.0 release](https://github.com/adopted-ember-addons/ember-sortable/releases/tag/v2.0.0) of the [ember-sortable](https://github.com/adopted-ember-addons/ember-sortable) addon. Check out the accessible controls at the [demo page](https://adopted-ember-addons.github.io/ember-sortable/demo/) today!

As part of this work, [ember-sortable](https://github.com/adopted-ember-addons/ember-sortable) is now part of [adopted-ember-addons](https://github.com/adopted-ember-addons), which is a GitHub org where community members can find a [new home](https://github.com/adopted-ember-addons/program-guidelines/blob/master/README.md) for their Ember addon. Moreover, ember-sortable was also highlighted on [DecEmber Day 1](https://blog.emberjs.com/2019/12/01/countdown-to-the-new-year-ember-sortable.html)!

---

## [Introduce Adaptive Loading to Your App with Ember Device 📶](https://twitter.com/_gokatz/status/1201534724696494081)

With [Ember Device](https://github.com/gokatz/ember-device), you can **progressively deliver rich content and powerful web experiences**. Thanks to [Gokul Kathirvel (@gokatz)](https://github.com/gokatz), you can **provide as much value to users with low-end devices** as to users with high-end devices. 💯

Ember Device provides a `device` service so that you can gauge a user's device and network to decide what content to show.

```handlebars
{{#let this.device.networkStatus.effectiveConnectionType as |effectiveType|}}
  {{#if (eq effectiveType "slow-2g")}}
    <ImageLoader @resolution="low" />

  {{else if (eq effectiveType "2g")}}
    <ImageLoader @resolution="mid" />

  {{else if (eq effectiveType "3g")}}
    <ImageLoader @resolution="high" />

  {{else if (eq effectiveType "4g")}}
    <VideoLoader />

  <!-- Fallback -->
  {{else}}
    <ImageLoader @resolution="mid" />

  {{/if}}
{{/let}}
```

To learn more about **adaptive loading**, we encourage you to check out [Ember Device's documentation](https://ember-device.netlify.com/) and [Sivasubramanyam A (@astronomersiva)'s blog post](https://siva.dev/adaptive-fetching/)!

---

## [A New Testing Codemod from Freshworks 🎉](https://twitter.com/shibulijack/status/1202280332663214080)

[`mocha-to-qunit`](https://github.com/freshdesk/ember-freshdesk-codemods/blob/master/transforms/mocha-to-qunit/README.md), the latest codemod from Freshworks, helps you migrate a production test suite from Mocha to QUnit. We encourage you to try it out and contribute back to the project!

You can find all codemods by Freshworks on their [GitHub repo](https://github.com/freshdesk/ember-freshdesk-codemods).

---

## [DecEmber: An Addon a Day 📆](https://blog.emberjs.com/tags/december.html)

DecEmber is going strong, highlighting a new addon each day until the calendar turns! Check out the [latest DecEmber posts](https://blog.emberjs.com/tags/december.html), covering addons such as [`ember-auto-import`](https://blog.emberjs.com/2019/12/06/countdown-to-the-new-year-ember-auto-import.html), [`ember-cli-sass`](https://blog.emberjs.com/2019/12/08/countdown-to-the-new-year-ember-cli-sass.html), and [`ember-simple-auth`](https://blog.emberjs.com/2019/12/13/countdown-to-the-new-year-ember-simple-auth.html). 

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/dmuneras" target="gh-user">@dmuneras</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/psbanka" target="gh-user">@psbanka</a>, <a href="https://github.com/ctjhoa" target="gh-user">@ctjhoa</a>, <a href="https://github.com/samselikoff" target="gh-user">@samselikoff</a>, <a href="https://github.com/abel-n" target="gh-user">@abel-n</a>, <a href="https://github.com/lolmaus" target="gh-user">@lolmaus</a>, <a href="https://github.com/acorncom" target="gh-user">@acorncom</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/stefanpenner" target="gh-user">@stefanpenner</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>
</div>

---

## [#embertimes 📰](https://blog.emberjs.com/tags/newsletter.html)

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Chris Ng, Isaac Lee, Jessica Jordan, Amy Lam and the Learning Team
