---
title: The Ember Times - Issue No. 136
author: Chris Ng, Amy Lam, Yehuda Katz, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/02/21-the-ember-times-issue-136.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
"Why Ember" videos wanted 📼,
Ember 3.16 released 🚀,
Check out the journey to your first published addon 📅,
...

READMORE

---

## ["Why Ember" videos wanted 📼](https://airtable.com/shrYpEeT3xtyst5G)

Hi, Embereños! It's me Yehuda.

I'm collecting some videos of people's Ember stories for possible use in this year's EmberConf keynote.

You can make the video as long or as short as you want, but if you're not sure, 2 minutes is probably a good target length.

Here are some topics you could cover to help flesh out your story:

1. What were you doing before you were a web developer or before you became a member of the Ember community?
2. What made you try Ember?
3. Have you enjoyed your experience as a member of the Ember community?

Don't feel restricted to details about Ember features. Feel free to talk about intangible details, like how it feels to be part of a community that works together, your experiences with Ember's evolution, or experiences about your own evolution as a developer.

<!--alex ignore host-hostess-->
To participate, create your video, upload it to YouTube or whatever host you prefer, and tell me about it at [https://airtable.com/shrYpEeT3xtyst5Gq](https://airtable.com/shrYpEeT3xtyst5Gq) by the end of March 1 (your time). You can find more detail at that link.

Thanks so much for helping out!

---

## [Ember 3.16 released 🚀](https://blog.emberjs.com/2020/02/12/ember-3-16-released.html)

A **new** version of Ember is here! [Ember 3.16](https://blog.emberjs.com/2020/02/12/ember-3-16-released.html) is an incremental, backwards compatible release with bugfixes, performance improvements, and minor deprecations. Whether you're on the bleeding edge or 1.x, be sure to refer to the official [Ember blog](https://blog.emberjs.com/tags/releases.html) when looking for release details!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [First published addon: ember-fullcalendar 📅](https://dev.to/xiwcx/i-published-my-first-ember-addon-138c)

[i. welch canavan (@xiwcx)](https://github.com/xiwcx) shares the journey of building your very first Ember addon in [this dev.to post](https://dev.to/xiwcx/i-published-my-first-ember-addon-138c). The addon [@mariana-tek/ember-fullcalendar](https://github.com/Mariana-Tek/ember-fullcalendar) wraps [Fullcalendar (v4)](https://fullcalendar.io/) – a tool that provides a fully-featured scheduling calendar with minimal code – into an Ember component. 

The process started with checking [Ember Observer](https://emberobserver.com/) to see if there is already an addon that provides a similar service as well as checking the general addon structure that packages follow. Next, [fullcalendar-react](https://github.com/fullcalendar/fullcalendar-react) was inspected which provided the idea to avoid explicit bindings for each property or attribute and simply batch updates and pass them along to Fullcalendar.

<!-- alex ignore easy -->
Following that, it was easy enough to use Ember component lifecycle hooks to replace the React ones such as `componentDidMount()` becoming `didInsertElement()`, while `componentDidUpdate()` became `didUpdateAttrs()`. Similarly to the other implementation, [Data Down, Actions Up](https://dockyard.com/blog/2015/10/14/best-practices-data-down-actions-up) was followed so that was easily transferrable.

Try out [@mariana-tek/ember-fullcalendar](https://github.com/Mariana-Tek/ember-fullcalendar) in your app today!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Amy Lam, Yehuda Katz, the crowd and the Learning Team
