---
title: The Ember Times - Issue No. 148
authors:
  - chris-ng
  - amy-lam
  - jessica-jordan
  - isaac-lee
  - jared-galanis
date: 2020-05-15T00:00:00.000Z
tags:
  - newsletter
  - '2020'
---


👋 Emberistas! 🐹

Watch the new EmberMap video on the `{{on}}` modifier 🔦,
mut and set autotracking in Octane 📖,
Ember Twiddle updates 🌟,
Ember performance tweaks 🏎,
preview deployments with ember-cli-deploy and GitHub Actions ✅,
and last, but not least, see helpers spawn from JavaScript files ✨!

<!-- READMORE -->

---

## [EmberMap: The `{{on}}` Modifier 🔦](https://embermap.com/topics/what-s-new-in-ember/the-on-modifier-3-11)

Check out the [new EmberMap video](https://twitter.com/ember_map/status/1255510563163197442) on the `{{on}}` modifier, a new way to attach events in Ember. It can be attached in either a plain HTML element or an Ember component.

```hbs
<Toggle
  @checked={{this.isAdmin}}
  @onChange={{this.toggleIsAdmin}}
  {{on 'mouseenter' this.showTip}}
  {{on 'mouseleave' this.hideTip}}
/>
```

The `{{on}}` modifier accepts two arguments: the event name and the function handler. The **event name** is actually the same argument that the vanilla JS API `element.addEventListener(eventName)` accepts. And the **function handler** is any action, meaning any properly bound function. It can either live on the component instance or be passed in as an argument.

```hbs
<span
  role='checkbox'
  aria-checked={{if this.isChecked 'true' 'false'}}
  {{on 'click' this.toggle}}
  {{on 'keydown' this.toggle}}
>
  {{! additional HTML }}
</span>
```

Check out the full video explaining the `{{on}}` modifier on [EmberMap](https://embermap.com/topics/what-s-new-in-ember/the-on-modifier-3-11)!

---

## [Mut and set autotracking in Octane 📖](https://v5.chriskrycho.com/journal/mut-and-set-and-auto-tracking-in-ember-octane/)

There's a new blog post 🎉 by [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) about some behavior that may surprise you involving auto-tracking when using `mut` or the `set` helper, and how they can differ from the use of actions in Ember Octane.

Read more about this at [Chris' blog](https://v5.chriskrycho.com/journal/mut-and-set-and-auto-tracking-in-ember-octane/). It's a quick read that may prevent you some refactoring pain if you're aware of the issues ahead of time. 😃 

---

## [Ember Twiddle updates 🌟](https://twitter.com/gaurav9576/status/1259933735442698242)

Ember Twiddle [0.17.1](https://github.com/ember-cli/ember-twiddle/releases/tag/v0.17.1) is here, now supporting **Ember 3.18** and template colocation! Need to share an Ember code reproduction? Ember Twiddle is a JSFiddle for Ember. 

Check out the updates at [ember-twiddle.com](https://t.co/PMkoyGsnSv?amp=1) and thank you to [Gaurav Munjal (@Gaurav0)](https://github.com/Gaurav0), [@RajaSK05](https://github.com/RajaSK05) and [Gokul Kathirvel
(@gokatz)](https://github.com/gokatz) for their contributions to the release! 👏

---

## [Ember performance tweaks 🏎](https://abhilashlr.in/ember-performance-tweaks-part-1)

[Abhilash LR (@abhilashlr)](https://github.com/abhilashlr) blogs about **optimizing build timelines & bundle size** in your Ember apps, the first in a series on getting started with performance optimizations! Check out his tips and tricks in the writeup [here](https://abhilashlr.in/ember-performance-tweaks-part-1). Highlights include:

* Speeding up development
    * Removing tests from the dev build
    * Removing Mirage from the dev build
    * Minification, gzip or brotli compression, and fingerprinting
* Asset size
    * Analyze bundle size and optimize asset size
    * Removing dependencies not needed on app boot

> The smaller the page assets, the faster it is for the user to view them. The faster it is for the user to view the page with text and UI, the greater trust they have on our apps/websites.

But wait, there's more! In Abhilash's [second part of the performance blog post series](https://abhilashlr.in/ember-performance-tweaks-part-2) it's all about **optimizing assets** for that perfect Lighthouse score. It teaches you how to reduce the number of requests for application assets to the absolute minimum, optimize your images efficiently and many other modern best practices related to asset handling.

If you want to make your own app load with the speed of light, be sure to [check out the writeup today](https://abhilashlr.in/ember-performance-tweaks-part-2)!

---

## [Learn about JavaScript invoked helpers with the invokeHelper RFC ✨](https://github.com/emberjs/rfcs/pull/626)

Never seen a helper spawn from a JavaScript file before? Then you should check out [the latest RFC about the `invokeHelper` API](https://github.com/emberjs/rfcs/pull/626)!

The proposal suggests the creation of a new API, that allows you to invoke [helper functions](https://guides.emberjs.com/release/components/helper-functions/) via JavaScript and not only via templates (the only way how helpers can invoked in Ember apps today).
This would extend Ember's reactive model by an API that:

* allows a transparent reuse of common code and patterns
* as, similarly to components, owning a lifecycle
* is, unlike components, JavaScript class _and_ template compatible.

If you want to learn more about the API design of `invokeHelper`, be sure to read the [full RFC](https://github.com/emberjs/rfcs/blob/invoke-helper/text/0626-invoke-helper.md) and post your questions and ideas in the [comments below](https://github.com/emberjs/rfcs/pull/626)!

---

## [Preview deployments with ember-cli-deploy and GitHub Actions ✅](https://www.kaliber5.de/en/blog/preview-deployments-with-ember-cli-deploy-and-github-actions/)

If you haven't had a chance, we encourage you to check out [Simon Ihmig (@simonihmig)](https://github.com/simonihmig)'s blog post today. You can learn how to use [ember-cli-deploy](http://ember-cli-deploy.com/) plugins and GitHub Actions to [preview deployments from pull requests](https://www.kaliber5.de/en/blog/preview-deployments-with-ember-cli-deploy-and-github-actions/)!

![PR is deployed and ready for preview!](https://www.kaliber5.de/assets/images/gh-deployment-comment.png)

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/allthesignals" target="gh-user">@allthesignals</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/lukemelia" target="gh-user">@lukemelia</a>, <a href="https://github.com/SYU15" target="gh-user">@SYU15</a>, <a href="https://github.com/mmun" target="gh-user">@mmun</a>, <a href="https://github.com/mrloop" target="gh-user">@mrloop</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a> and <a href="https://github.com/stefanpenner" target="gh-user">@stefanpenner</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask readers' questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Amy Lam, Jessica Jordan, Isaac Lee, Jared Galanis and the Learning Team
