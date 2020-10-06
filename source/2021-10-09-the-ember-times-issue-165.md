---
title: The Ember Times - Issue No. 165
author: Isaac Lee, Chris Ng, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2021/10/09-the-ember-times-issue-165.html"
responsive: true
---

🎃 NOTE: THIS ISSUE IS ACTUALLY FOR 2020, BUT COMMITTING PR'S FOR ISSUE #165 TO MASTER FOR HACKTOBERFEST! 🎃

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

Read the blog post on Autotracking: Elegant DX Via Cutting-Edge CS 👣,
Tips for switching from Ember Data to Ember Orbit 💡,

READMORE

---

## [Blog Post: Autotracking - Elegant DX Via Cutting-Edge CS 👣](https://v5.chriskrycho.com/journal/autotracking-elegant-dx-via-cutting-edge-cs/)

<!-- alex ignore just-->
[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) wrote a blog post on how the developer experience working with Ember’s [autotracking system](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/) work as if it was “just JavaScript”. Particularly he goes through:

- There is no need to mark dependent keys on the getters
- There is no need for a dedicated utility like `setState` or `this.set`
- How it does not use two-way binding to achieve this

<!-- alex ignore just-->
The blog goes through Native Getters, how they are lazy evaluated when we need it and assessed without having to invoke it as a function. Next, Chris goes through Autotracking which is a lightweight reactivity system that uses a global clock which is connected to tracked state to know when to recompute the values in templates. Together these two concepts enables most of our code to be “just JavaScript” and gives us a very low-cost reactivity.

Read the whole blog post at [Chris’s blog](https://v5.chriskrycho.com/journal/autotracking-elegant-dx-via-cutting-edge-cs/)!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Switching from ember-data to ember-orbit 💡](https://medium.com/swlh/switching-from-ember-data-to-ember-orbit-82e202248f1c)

[Derek Gray (@derekwsgray)](https://github.com/derekwsgray) encountered a business requirement to provide an Undo/Redo feature in a large Ember app. While gradually updating the app to rely on [ember-orbit](https://github.com/orbitjs/ember-orbit), Derek recorded [tips and changes that you will want to consider](https://medium.com/swlh/switching-from-ember-data-to-ember-orbit-82e202248f1c) when you are in a similar situation. Perhaps you will want to leverage other Orbit features (offline cache, transaction logs, background sync strategies).

The blog post provides:

- A list of introductory reference materials
- How to allow `ember-data` and `ember-orbit` to coexist during migration
- How to convert `ember-data` syntax to `ember-orbit`

We encourage you to check it out and bookmark the link for future reference!

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

Isaac Lee, Chris Ng, the crowd and the Learning Team
