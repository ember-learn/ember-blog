---
title: The Ember Times - Issue No. 97
author: Chris Ng, Isaac Lee, Amy Lam, Jessica Jordan
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/05/10-the-ember-times-issue-97.html"
responsive: true
---

Kaltxì Emberistas! 🐹

This week: the **EmberFest** 2019 CFP is now open 📝, build a GitHub Gist clone in **Octane** ⛽️,
RFC proposing **deprecation** of `mouseenter` + `mouseleave` **Ember Events** 🐁, and last, but not least, an interview with **Yehuda Katz** 🎙️!

---

## [EmberFest 2019 CFP is now open! 📝](https://cfp.emberfest.eu)

[EmberFest](https://emberfest.eu/) – the European Community Ember Conference – will be held at [Mogens Dahl](https://mogensdahl.dk) in Copenhagen this year from October 17-18, 2019. They have recently [announced](https://twitter.com/EmberFest/status/1125441719921717251) that the CFP is **now open** with a deadline at August 1, 2019.

EmberFest is looking for a wide range of talks, from in-depth technical talks to broader talks covering other aspects of software development. While Ember-related is best, EmberFest is open to considering talks that cover more general software / tech related topics that would be of interest to Ember developers.

[Submit your talk today!](https://cfp.emberfest.eu/events/emberfest-2019)

---

## [Build a GitHub Gist Clone in Octane ⛽️](https://www.youtube.com/watch?v=_JfNuppX1n8)

In this free video tutorial, [Program with Erik](https://www.youtube.com/channel/UCshZ3rdoCLjDYuTR_RBubzw) and [Jeffrey Biles](https://courses.happyprogrammer.net/) pair program on building a simplified GitHub Gist clone in Octane. Jeffrey explains how Octane is a set of features bundled together to create a **new programming experience**. This video is geared toward beginners, folks coming from other frameworks, or people who are coming back to Ember after awhile! Share it with a friend?

In addition to using the Octane blueprint, the tutorial makes use of [ember-prism](https://github.com/shipshapecode/ember-prism) and [ember-animated](https://github.com/ember-animation/ember-animated). Check out the recording and use the [GitHub repo](https://github.com/ErikCH/octane-example) as a reference to code along at home.

---

## [Ember Event Dispatcher Clean Up for Several Mouse Events 🐁💥](https://github.com/emberjs/rfcs/pull/486)

Since the early beginnings of Ember, the **Ember Event Dispatcher** handled the delegation of browser events in an application.
But some events are harder to delegate to the Dispatcher than others. In particular, the `mouseenter`🕳 ⬅️🐁 and the `mouseleave` 🕳🐁➡️ events need to be handled differently because they do not bubble up - a characteristic that Ember's Event Dispatcher usually relies on for event delegation.

In a [new RFC](https://github.com/simonihmig/rfcs/blob/deprecate-mouseenter/text/0486-deprecate-mouseenter.md), the writer of [RFC#386](https://emberjs.github.io/rfcs/0386-remove-jquery.html) is back with a proposal to reduce the overhead of event handling for these rarely used event types.
In his proposal, [@simonihmig](https://github.com/simonihmig) suggests the deprecation of `mouseleave` and `mouseenter` events in Ember's Event Dispatcher in favor of using native event listeners.

Read more about the **motivation** and the **transition path** for the proposed change [in the original RFC](https://github.com/emberjs/rfcs/pull/486) and be sure to leave your questions, thoughts or suggestions in the comments below! ✍️

---

## [Yehuda Katz on Copy, Paste, Repeat 🎙️](https://copypasterepeat.simplecast.fm/4460c8fc)

[Episode 15 of Copy, Paste, Repeat](https://copypasterepeat.simplecast.fm/4460c8fc) introduces us to [Yehuda Katz](https://github.com/wycats), the co-creator of Ember.

Some of the highlights are:

- How Yehuda started his career as a developer
- Lessons learned from early Ember
- Where the web may be in 5 years

To learn more, we encourage you to [listen to this podcast episode](https://copypasterepeat.simplecast.fm/4460c8fc)!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank<a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/dgeb" target="gh-user">@dgeb</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/zinyando" target="gh-user">@zinyando</a>, <a href="https://github.com/pete-the-pete" target="gh-user">@pete-the-pete</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/kategengler" target="gh-user">@kategengler</a>, <a href="https://github.com/chadhietala" target="gh-user">@chadhietala</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/tchak" target="gh-user">@tchak</a> and <a href="https://github.com/RichardOtvos" target="gh-user">@RichardOtvos</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Amy Lam, Jessica Jordan and the Learning Team
