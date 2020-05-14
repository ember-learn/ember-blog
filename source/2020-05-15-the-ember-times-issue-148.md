---
title: The Ember Times - Issue No. 148
author: Chris Ng, Amy Lam, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/05/15-the-ember-times-issue-148.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Watch the new EmberMap video on the `{{on}}` modifier,
Ember performance tweaks 🏎,  
See helpers spawn from JavaScript files ✨,

READMORE

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

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

## [Learn about JavaScript invoked helpers with the invokeHelper RFC ✨](https://github.com/emberjs/rfcs/pull/626)

Never seen a helper spawn from a JavaScript file before? Then you should check out [the latest RFC about the `invokeHelper` API](https://github.com/emberjs/rfcs/pull/626)!

The proposal suggests the creation of a new API, that allows you to invoke [helper functions](https://guides.emberjs.com/release/components/helper-functions/) via JavaScript and not only via templates (the only way how helpers can invoked in Ember apps today).
This would extend Ember's reactive model by an API that

* allows a transparent reuse of common code and patterns
* is, similarly to components, owning a lifecycle
* is, unlike components, JavaScript class _and_ template compatible

If you want to learn more about the API design of `invokeHelper`, be sure to read the [full RFC](https://github.com/emberjs/rfcs/blob/invoke-helper/text/0626-invoke-helper.md) and post your questions and ideas in the [comments below](https://github.com/emberjs/rfcs/pull/626)!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

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

Chris Ng, Amy Lam, Jessica Jordan, the crowd and the Learning Team
