---
title: The Ember Times - Issue No. 132
author: Anne-Greeth van Herwijnen, Chris Ng, Jessica Jordan, Isaac Lee, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/01/24-the-ember-times-issue-132.html"
responsive: true
---

👋 Emberistas! 🐹

Get together at EmberConf meetups 🍦, learn how to use `RouteInfo.metadata` from EmberMap 🧩, try an Octane & JAM sandwich at EmberConf 🏎🥪🍓, monitor Ember app performance with Tracerbench ⏱, and try out the Related Files Hopper VSCode extension 🤸!

READMORE

---

## [Get together at EmberConf meetups 🍦🎲🗻](https://emberconf.com/#/schedule/meetups)

Besides learning a lot from the talks at [EmberConf](https://emberconf.com/), it is also an amazing place to meet people and get to know them. One of the easiest places to do that is at the meetups that can be organised by **you**.

Last year there were a lot of [different meetups](https://2019.emberconf.com/meetups.html), from delicious food and drink gatherings, to a nerve-racking chess tournament, and bouldering.

If you have a great idea for a meetup, you can [sign up here](https://emberconf.com/#/schedule/meetups). Keep an eye on this page as well if you want to know about all the meetups and when they will happen.

---

## [Learn how to use `RouteInfo.metadata` from EmberMap 🧩](https://embermap.com/topics/what-s-new-in-ember/routeinfo-metadata-3-10)

Ember uses the `RouteInfo` object to send route information. These include route name, query parameters, and parent route. Since [Ember 3.10](https://blog.emberjs.com/2019/05/21/ember-3-10-released.html), `RouteInfo` carried an extra attribute called `metadata`, where you can store and retrieve anything you want in a route.

How would you use this feature then? In the latest [What's New in Ember](https://embermap.com/topics/what-s-new-in-ember/routeinfo-metadata-3-10) video, [Sam Selikoff (@samselikoff)](https://github.com/samselikoff) shows how you can **create dynamic breadcrumbs**. Along the way, you will see how you can inspect a `RouteInfo` object too.

We encourage you to watch the video and share your own applications of `metadata`. You can find a couple of more examples in the [RouteInfo Metadata RFC](https://github.com/emberjs/rfcs/blob/master/text/0398-RouteInfo-Metadata.md).

---

## [Try your first Octane & JAM sandwich at EmberConf 🏎🥪🍓](https://emberconf.com/#/speakers/chris-manson)

Surely, you remember him as [the Emberista who built a blog site with Ember & Node in 15 min](https://www.youtube.com/watch?v=GHbjdesHhPA), you heard him talk about [his work on an Ember-powered blog engine](https://www.youtube.com/watch?v=OnDUp2AhuNo) or you
recall him [say JAM 46 times](https://twitter.com/real_ate/status/1207683401446313984) in his [jammiest introduction to the JAM (JavaScript, APIs and Markup) stack for humans](https://www.youtube.com/watch?v=eQULGb10MbQ)!
This year, [Chris Manson (@mansona)](https://github.com/mansona) has even more insights into the modern JAM stack to share with you!

<!--alex disable king-queen-->
At [this year's EmberConf](https://emberconf.com/) he's going to teach us about [**An Octane-Powered JAM Stack**](https://emberconf.com/#/schedule/day-1_an-octane-powered-jam-stack); why the JAM Stack has become so popular and how Ember Octane blends in well with this approach of web development. But that's not all: you can learn hands-on how to build your first JAM Stack site with Octane and Empress at his EmberConf workshop [**Build and Publish Your Own empress-blog Template**](https://emberconf.com/#/schedule/pre-conf_build-and-publish-your-own-%60empress-blog%60-template).

In an exclusive interview with The Ember Times, Chris shares with us, how popular the JAM stack is and why it is so useful for building modern websites in 2020:

> […] My belief is that most Ember developers are already using JAM Stack concepts. It’s not a binary thing, it’s not “you use the JAM stack” or “you don’t”. Instead you can make your apps more JAM and the question of when you want to do it is answered by when you need it. If you need good SEO, or if you need faster start times, you might want to look at some of the JAM technologies.

What will our experience building JAM stack websites with Octane be like? Chris shares from his experience as a JAM stack developer and as a workshop mentor:

<!--alex ignore just-->
> The thing that most people like when using JAM Stack with Ember, is the fact that you can get so much by just installing 1 or 2 addons. If you had to teach somebody everything from the ground all the way up to getting it deployed, it would take much longer and it would be much more difficult. But leveraging the power of Ember, leveraging the power of Ember addons makes people experience quick wins and gets a lot done very quickly.

Besides learning about the theory and practice of JAM stack, what makes EmberConf your go-to conference in 2020? Chris shares his perspective on what makes the event so worth being part of:

> The thing I most like about EmberConf is meeting people, chatting in the hallway and the wild plans for the future of Ember that always seem to happen late night over dinner or between two talks.

If you want to learn more about Ember Octane, Empress and JAM, join more than 800 other Ember developers at [EmberConf in Portland, OR, from March 16 - 18, 2020](https://emberconf.com/). Prices for regular attendee tickets start from $449. Get your tickets, before they are sold out, [on the EmberConf website](https://emberconf.com/#/register)!

---

## [Monitor Ember app performance with Tracerbench ⏱](https://github.com/ember-performance-monitoring/tracerbench-compare-action)

What is Tracerbench? Think "Lighthouse CI" but with **statistical rigor** and **more meaningful data**. With [ember-performance-monitoring/tracerbench-compare-action](https://github.com/ember-performance-monitoring/tracerbench-compare-action), you can monitor your web app's performance in CI. Although the library is general enough for any web app, Tracerbench comes finely tuned for benchmarking Ember apps and addons via GitHub Actions.  

Tracerbench's motivation to provide clear, actionable and usable insights into performance deltas is thoroughly explained in [Tracerbench/tracerbench](https://github.com/TracerBench/tracerbench). There's currently a gap in performance analysis tooling for Ember apps. Developers today struggle to quickly find and analyze performance regressions which would empower them to make quick, iterative changes **within their local development environment**. The current approach for performance analysis is for developers to run a single trace using Chrome Developer Tools. Unfortunately, a single trace varies too much to detect regressions to a web app...unless the regression is quite large. 

We found out about Tracerbrench from Chris Thoburn (@runspired)'s [tweet](https://twitter.com/Runspired/status/1218669365182074885) where he gives a shoutout to [Kris Selden (@krisselden)](https://github.com/krisselden) and LinkedIn for their work on Tracerbench! We look forward to giving it a spin! 

---

## [Related Files Hopper VSCode Extension 🤸](https://twitter.com/suchita009/status/1218310260592496641)

Ever needed to keep finding related files in your Ember repo using [VSCode](https://code.visualstudio.com/)? [Suchita Doshi (@suchitadoshi1987)](https://github.com/suchitadoshi1987) created an extension to make that leap easier!

The [Related Files Hopper extension](https://marketplace.visualstudio.com/items?itemName=suchitadoshi1987.file-hopper) helps developers navigate through the multiple files that are touched when working on a feature. Within Ember for example, a person adding or removing something in `components/foo.js` would likely also touch `templates/foo.hbs` and related tests `integration/foo-test.js` or `acceptance/foo-test.js`. This extension provides hot keys for related files when you're working in `components/foo.js`.

Try it out today and be sure to [leave some feedback](https://twitter.com/suchita009/status/1218310260592496641) or [contribute new features](https://github.com/suchitadoshi1987/related-files-hopper)!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/bobisjan" target="gh-user">@bobisjan</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/chriskrycho" target="gh-user">@chriskrycho</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/jamescdavis" target="gh-user">@jamescdavis</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a> and <a href="https://github.com/jrjohnson" target="gh-user">@jrjohnson</a> for their contributions to Ember and related repositories! 💖</p>

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

Anne-Greeth van Herwijnen, Chris Ng, Jessica Jordan, Isaac Lee, Amy Lam and the Learning Team
