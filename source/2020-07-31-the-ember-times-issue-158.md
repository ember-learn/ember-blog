---
title: The Ember Times - Issue No. 158
author: Chris Ng, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/07/31-the-ember-times-issue-158.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
Detect when Ember components enter or leave the viewport 🔍,
Document Ember apps with Docfy 📗,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

---

## [Detecting Ember.js Components Entering or Leaving the Viewport 🔍](https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf)

[Koushik Radhakrishnan (@Koushikrad)](https://github.com/Koushikrad) wrote a blog post on [detecting when Ember components are entering or leaving the viewport](https://twitter.com/koushikrad/status/1287419970121379840).

Consider a dashboard with 10 widget components, each of which makes an API request. When a user lands on the dashboard page, do we need all the widgets to fetch their data at the same time, even if the user's viewport shows only 5 widgets at a time?

A solution is to use the [ember-in-viewport](https://github.com/DockYard/ember-in-viewport) addon, which detects if an Ember component has entered the browser's viewport. The addon tries a few different approaches (`IntersectionObserver` API, then `requestAnimationFrame`, then the Ember run loop and event listeners) to detect if a DOM element is in the user's browser.

By hooking up with the addon’s provided `inViewport` service, we are able to request data once the component is within the viewport.

```javascript
const { onEnter } = this.inViewport.watchElement(this.element, { viewportTolerance });  
onEnter(this._renderInView.bind(this));
```

The components that are not in view will not make a request for API data, unlike the route’s model hook using a `Promise.all`.

Read more about detecting components from the [blog post](https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf)!

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

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Document Ember apps with Docfy 📗](https://docfy.dev/)

Hope you didn't miss an [exciting announcement](https://twitter.com/josemarluedke/status/1281252101406855169) earlier in July. [Josemar Luedke (@josemarluedke)](https://github.com/josemarluedke) released [Docfy](https://docfy.dev/), a cross-framework tool to help you build documentation sites from Markdown files.

The best part? Docfy provides official support for Ember.js! You can style the Docfy components and leverage existing [remark](https://remark.js.org/) plugins too.

Check out [Getting Started](https://docfy.dev/docs/ember) to learn more about adding Docfy to your Ember apps.

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

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Isaac Lee, the crowd and the Learning Team
