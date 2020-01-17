---
title: The Ember Times - Issue No. 131
author: Chris Ng, Amy Lam, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2020/01/17-the-ember-times-issue-131.html"
responsive: true
---

<!--alex ignore waiters-waitresses-->
Привет, Эмберисты! <span style="font-style: italic;">Hello, Emberistas!</span> 🐹

Read the New Test Waiters RFC ⏳,
Optimize your app with Ember Data 📈,
Russian Ember community 🇷🇺

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

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

## [Master powerful debugging strategies at EmberConf](https://emberconf.com/#/speakers/samanta-de-barros)

You've undoubtedly heard her talk about [creating progressive web applications with Ember](https://www.youtube.com/watch?v=OR1Tk_bwmZo)
and [bulletproof addon testing](https://www.youtube.com/watch?v=31kVznd-zys) before, but now [Samanta de Barros (@sdebarros)](https://github.com/sdebarros)
shares even more useful knowledge with you that is crucial for any professional JavaScript developer.

At [this year's EmberConf](https://emberconf.com/) she's going to teach us about [**The Power of Debugging**](https://emberconf.com/#/speakers/samanta-de-barros); which tools we can use to track down bugs swiftly both in development and production environments and how we find our way around Ember's architecture while doing so.

In an exclusive interview with The Ember Times, Samanta shares with us, what makes debugging tools and strategies so powerful when developing Ember applications:

<!--alex ignore fear-->
> I think it is important. Mostly, because it will help you to have a better time finding bugs and even how an app works. In part I think it’s necessary because it will help you on your job!
>
> I also think that when you start looking at other people’s code it is hard at first, but after a while you lose the fear of seeing these complex frameworks, you get a better idea of everything and you start to realise - it’s just JavaScript in the end. So I think debugging techniques are good for finding bugs and demystifying frameworks.

Many of us spend plenty of hours every work week to find the root cause of bugs which makes debugging a critical skill of almost every Ember developer.
But how will it impact our developer experience directly when we start to fully leverage the power of debugging?

> Mostly things that come up when you are pairing some or you’re trying to solve an issue, you often run into something and it makes people go like: “Oh, that’s interesting!” When I’ve seen other people’s talks or see them working, I see that they have some tips about things that I don’t know about yet and that’s cool! You realise that there are a lot of tools that make working with the frontend easier.
>
> People who learn more about debugging usually say: “Oh yeah, that’s cool, that really simplifies these tasks I need to do” or “Oh, I didn’t know you could find that information there in the app.”

EmberConf is a unique experience, that you and your team should definitely not miss out on. Samanta shares her perspective on what makes the conference
so outstanding:

> I think it’s a difference experience when you go to a conference as a speaker or as attendee. When you just go to listen to the talks, you get a lot of inspiration, you discover things that people are you doing that you might not do yet and it sparks something in you that makes you want to learn something new or improve something in your job. […]
>
> I would say both getting inspiration and connecting are the nicest things about EmberConf. If I had to recommend anything to an attendee, I’d say: “Just go and ask questions to the other attendees or speakers.” Just listening to the talks is good enough, but the chance to connect with others makes the conference really great.

If you want to learn more about successfully debugging Ember apps, join more than 800 other Ember developers at [EmberConf in Portland, OR from March 16 - 18, 2020](https://emberconf.com/). Prices for regular attendee tickets start from $449, so don't hesitate to [register today](https://emberconf.com/#/register)!

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

<p>This week we'd like to thank <a href="https://github.com/bobisjan" target="gh-user">@bobisjan</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/mjanjic01" target="gh-user">@mjanjic01</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/dmuneras" target="gh-user">@dmuneras</a>, <a href="https://github.com/mixonic" target="gh-user">@mixonic</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/josemarluedke" target="gh-user">@josemarluedke</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/pichfl" target="gh-user">@pichfl</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/mcfiredrill" target="gh-user">@mcfiredrill</a>, <a href="https://github.com/tomdale" target="gh-user">@tomdale</a>, <a href="https://github.com/conormag" target="gh-user">@conormag</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/stefanpenner" target="gh-user">@stefanpenner</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Amy Lam, Jessica Jordan, the crowd and the Learning Team
