---
title: The Ember Times - Issue No. 131
author: Chris Ng, Amy Lam, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2020/01/17-the-ember-times-issue-131.html"
responsive: true
---

<!--alex ignore waiters-waitresses-->
Привет, Эмберисты! <span style="font-style: italic;">Hello, Emberistas!</span> 🐹

Help improve Ember's autotracking and reactivity system 💬,

Read the New Test Waiters RFC ⏳,
Optimize your app with Ember Data 📈,
Russian Ember community 🇷🇺

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

---

## [4 RFCs on improving Ember's autotracking and reactivity system 💬](https://github.com/emberjs/rfcs/blob/use-and-resources/text/0567-use-and-resources.md#introducing-use-and-resources)

Ember Octane features a **new reactivity system**. In particular, **tracked properties** simplify syncing the DOM with JavaScript changes. (Find out how autotracking works from the [Ember Guides](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/).)

To help address some shortcomings, [Chris Garrett (@pzuraq)](https://github.com/pzuraq) proposed introducing the decorators and classes listed below. We encourage you to participate in RFCs and provide feedback!

### [566. `@memo` decorator](https://github.com/emberjs/rfcs/pull/566)

Unlike computed properties, autotracked getters don't cache their values. `@memo` will let you opt in to memoization.

### [567. `@use` decorator](https://github.com/emberjs/rfcs/pull/567)

The `@use` API will leverage autotracking to solve two issues:

- Allow Glimmer components to define a behavior with its own lifecycle, independently of the template
- Provide a standard way to mix declarative and imperative code

### [569. `TrackedList` class](https://github.com/emberjs/rfcs/pull/569)

`TrackedList` will autotrack changes to arrays. This class, designed to replace `EmberArray`, will follow the native array API closely and be performant.

### [577. `TrackedMap` and `TrackedSet` classes](https://github.com/emberjs/rfcs/pull/577)

`TrackedMap` and `TrackedSet`, along with their weak analogs, will autotrack changes to maps and sets (dynamic collections of values). These classes will follow the native APIs exactly.

---

<!--alex ignore waiters-waitresses-->
## [New Test Waiters RFC ⏳](https://github.com/emberjs/rfcs/pull/581)

<!--alex ignore waiters-waitresses-->
[Steve Calvert (@scalvert)](https://github.com/scalvert) proposed replacing the existing test waiters with the [ember-test-waiters](https://github.com/rwjblue/ember-test-waiters) in the [New Test Waiters RFC](https://github.com/emberjs/rfcs/pull/581).


<!--alex ignore waiter-waitress-->
The new test waiter system will provide a few benefits:

<!--alex ignore waiter-waitress waiters-waitresses-->
- A **new API that removes the existing foot guns** given we will be more explicit when declaring the start and end of the waiter through the waiter `beginAsync` and `endAsync` methods
- A more robust way to gather **debugging information** for the test waiter since the waiter is identifiable by the name provided
- Default test waiters with the **ability to author your own, more complex test waiters** through annotating the asynchronous operations in your code base that are not tracked by an `await settled()` check

<!--alex ignore waiters-waitresses-->
Share your thoughts, feedback, and requests on the [New Test Waiters RFC](https://github.com/emberjs/rfcs/pull/581)!

---

## [Optimizing your app with Ember Data 📈](https://runspired.com/2019/12/15/optimizing-your-app-with-ember-data/)

[Chris Thoburn (@runspired)](https://github.com/runspired) is blogging about how to build and optimize an app with Ember Data. You'll start by building an app, Listicle. Listicle starts as a small app shell with rich content lists, but balloons in size over time. Build times slow to a crawl as a result. 

At the beginning of the series, Listicle builds and renders in greater than 5 seconds. But as the posts progress, you'll end with an app with builds and renders in **less than 1 second** by optimizing only the app's data management! Then for fun, you'll optimize the render. 

You can check out [Part 1](https://runspired.com/2019/12/15/optimizing-your-app-with-ember-data/) and [Part 2](https://runspired.com/2019/12/18/optimizing-your-app-with-ember-data-part-2/) now, with more posts to come! And you can follow along with the code for the series by watching the [Listicle repository](https://github.com/runspired/listicle).

For some Ember Data context, check out the [Guides](https://guides.emberjs.com/release/models/). You can learn about the architecture and history in Chris's EmberFest [Ember Data 2019](https://www.youtube.com/watch?v=zbqbsOyLM30&list=PLN4SpDLOSVkT0e094BZhGkUnf2WBF09xx&index=23&t=0s) conference talk. 

---

## [Russian Ember community 🇷🇺](https://habr.com/ru/post/483630/)

[Habr.com](habr.com) is a popular geek media site among Russian developers. It's somewhat similar to Hacker News, except that it's populated by user-submitted articles instead of links. [Iaroslav Popov (@chilicoder)](https://github.com/chilicoder) recognized a shortage of Ember articles on Habr.com and recently started translating our very own Ember Times ([Issue #129](https://habr.com/ru/post/482988/), [Issue #130](https://habr.com/ru/post/483630/)) on Habr.com, as well as [Octane is Here](https://habr.com/ru/post/482158/) and [Super Rentals tutorial - Part 1](https://habr.com/ru/post/482296/)!

@chilicoder also mentioned to check out the [Ember telegram channel](https://t.me/ember_js), moderated by [Alex Kanunnikov (@lifeart)](https://github.com/lifeart). It's one of the best ways to get help with **Ember in Russian**, and they welcome everyone to join! Thank you both for your help in fostering the Russian Ember community! 

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

Chris Ng, Amy Lam, Isaac Lee, the crowd and the Learning Team
