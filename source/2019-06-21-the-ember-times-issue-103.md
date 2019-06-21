---
title: The Ember Times - Issue No. 103
author: Chris Ng, Sean Massa, Amy Lam, Isaac Lee, Jessica Jordan
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/06/21-the-ember-times-issue-103.html"
responsive: true
---

हॅलो Emberistas! 🐹

This week:
submit to the Ember Camp Chicago CfP 🌭,
celebration of 55 posts for #EmberJS2019 🎉,
unravel the mystery of Ember testing syntax 💡,
examine alternatives to the input helper 🤔,
watch the Visual Regression Testing Made Easy talk video 📺,
more expressive dependency injection ⬅️,
and clean out unused components from your 🐹 app!

---

## [EmberCamp Chicago on September 16th! 🌭](http://embercamp.com/)

The [EmberCamp Chicago CfP](https://cfp.emberconf.com/events/embercamp-chicago-2019) is open until **June 30th**. If you are interested in doing a talk, mini-talk, activity, workshop, or keynote, please submit soon!

[Tickets are on sale now](https://www.eventbrite.com/e/embercamp-chicago-2019-registration-63595006376), with an **Early Bird sale of $99 until July 8**! If you want to receive announcements about EmberCamp, sign up on [embercamp.com](http://embercamp.com/).

Also, last year's sessions have all been published [as a playlist](https://www.youtube.com/playlist?list=PL4eq2DPpyBbm-vTgHMdBjUi1Qd5GiRIfW). If you only want to see Trek's awesome intros, there's a [separate playlist for that](https://www.youtube.com/playlist?list=PL4eq2DPpyBbmrQSORHoiTBNapQX2Hqu0C). 🥁

---

## [Thank You for Participating in #EmberJS2019! 🎉](https://blog.emberjs.com/2019/05/20/ember-2019-roadmap-call-for-posts.html)

Over the last few weeks, we saw [55 blog posts, GitHub Gists, and tweets](https://github.com/abhilashlr/emberjs2019-posts) that described how Ember can continue to innovate in 2019. We **thank everyone** for participating, by writing a post, replying to one, and discussing it online or on podcasts. Please feel free to continue to write your #EmberJS2019 post even after the deadline. 💖

This week's authors include [@ondrejsevcik](https://twitter.com/ondrejsevcik/status/1138778957178974209), [@michaelrkn](https://gist.github.com/michaelrkn/249666be12de3374d1f8e49af1ddfdc5), [@mansona](https://chris.manson.ie/ember-2019-sell-what-we-have-and-fix-papercuts/), [@machty](https://twitter.com/amatchneer/status/1139242398134018048), [@sarbbottam](https://medium.com/@sarbbottam/emberjs2019-wishlist-ba11a6a3e012), [@tschoartschi](https://dev.to/tschoartschi/send-ember-on-a-diet-and-thrive-innovation-2aef), [@dcyriller](https://dcyriller.github.io/ember-call-for-blog-posts/), [@rajasegar](http://hangaroundtheweb.com/2019/06/ember-into-futurity/), [@Alonski](https://alonbukaiblog.netlify.com/ember-2019-more-tooling/), [@josemarluedke](https://josemarluedke.com/blog/emberjs-2019-roadmap/), [@elwayman02](https://twitter.com/JordanHawker/status/1139811888953319424), [@acorncom](https://twitter.com/acorncom/status/1140456701318987776), [@kenigbolo](https://gist.github.com/kenigbolo/3503d158858660e2d90fbb6726db2caf), [@rwwagner90](https://shipshape.io/blog/ember-2019/), [@toddjordan](http://presentationtier.com/emberjs2019/), [@scalvert](https://www.linkedin.com/pulse/managing-migrations-ember-steve-calvert), [@dustinsoftware](https://dev.to/dustinsoftware/the-case-for-embeddable-ember-4120), [@knownasilya](https://ilyaradchenko.com/fragmentation-over-obsalecence/), [@runspired](https://runspired.com/2019/06/17/emberdata2019/), [@0xadada](https://0xadada.pub/2019/06/17/essential-ember-addons/), [@chriskrycho](https://www.chriskrycho.com/2019/emberjs2019-part-1.html), and [@neojp](https://gist.github.com/neojp/d7b2cdc38a04776cf3e41a6e698fb07e).

As always, you can find [all #EmberJS2019 posts at our community repo](https://github.com/abhilashlr/emberjs2019-posts). (Thanks again, [@abhilashlr](https://github.com/abhilashlr/)!)

---

## [The Ember.js Testing Guide, I Made for Myself 💡](https://medium.com/@sarbbottam/the-ember-js-testing-guide-i-made-for-myself-c9a073a0c718)

[@sarbbottam](https://github.com/sarbbottam) recalls how the [new testing syntax](https://guides.emberjs.com/release/testing/) had improved his productivity remarkably. Sarbbottam, who has been making notes on testing since, [graciously shared them with the whole community last week](https://medium.com/@sarbbottam/the-ember-js-testing-guide-i-made-for-myself-c9a073a0c718). 💯

Learn more today about:

- Writing different types of tests (unit, integration, and acceptance)
- Running tests
- Stubbing dependencies

We encourage you to **check out Sarbbottam's guide** and **share** it with developers that you know! 💛

---

## [Do We Still Need the Input Helper? 🤔](https://www.youtube.com/watch?v=c0Rl6o9wLX0)

As Ember aligns with native JavaScript more each day, we get to reexamine the framework choices that we had made. For example, how should we handle events for **input elements**? [@rwjblue](https://github.com/rwjblue) and [@stefanpenner](https://github.com/stefanpenner) met to **discuss** the historical context and alternatives to using the `{{input}}` helper.

You can learn more from their [recorded interview](https://www.youtube.com/watch?v=c0Rl6o9wLX0) and [@balinterdi](https://github.com/balinterdi)'s [notes and thoughts](http://www.balinterdi.com/blog/built-in-input-helpers-in-ember-js-when-and-whether-they-should-be-used/).

---

## [Talk Video: Visual Regression Testing Made Easy 📺](https://www.youtube.com/watch?v=d0ZCJNeybbs)

[@patocallaghan](https://github.com/patocallaghan) gave a lightning talk on **“Visual Regression Testing Made Easy”** at the April 2019 [DublinJS Meetup](https://www.meetup.com/DublinJS/). In his talk, Pat used [Percy](https://percy.io/) to scale visual regression testing from a manual to an automated workflow. You can catch potential CSS bugs, remove certain types of tests, and deal with large refactors and migrations. _“Styles can sometimes make bad things happen.”_ Percy gives you confidence when you make big changes.

Check out the [full lightning talk video](https://www.youtube.com/watch?v=d0ZCJNeybbs) just published this week!

---

## [More Explicit Dependency Injection in Your Ember Apps 🐹](https://github.com/emberjs/rfcs/pull/502)

The [**recent Request for Comments (RFC)**](https://github.com/emberjs/rfcs/pull/502), titled "Explicit Service Injection," proposes an update to the way **services and other dependencies** are registered, looked up and **injected** in Ember apps. The proposal argues that a class-based syntax for [dependency injection](https://guides.emberjs.com/v3.10.0/applications/dependency-injection/) is more explicit than the current string-based API and therefore preferable.

If you'd like to learn more about the **new API design** that is proposed in the RFC, be sure to [read the original proposal](https://github.com/nullvoxpopuli/rfcs/blob/explicit-dependency-injection/text/0000-explicit-dependency-injection.md) and do not forget to **join the discussion** in the comments!

---

## [Prune Your App with Ember Unused Components ♻️](https://github.com/vastec/ember-unused-components)

Finding **components** that aren't used in your application anymore can be tough. Due to different ways to invoke components (with curly braces or [angle brackets](https://guides.emberjs.com/release/reference/syntax-conversion-guide/)) and the syntactical ambiguity between invoking helpers and components, it takes some time to prune your app from redundant components manually.

But now you can use the brand-new addon [Ember Unused Components](https://github.com/vastec/ember-unused-components) to **clean up** your **codebase automatically**. Use the `--stats` flag to get **useful reports** on the impact of your app optimization efforts as you go. [Check it out today!](https://github.com/vastec/ember-unused-components)

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/loganrosen" target="gh-user">@loganrosen</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/sdebarros" target="gh-user">@sdebarros</a>, <a href="https://github.com/buschtoens" target="gh-user">@buschtoens</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/scalvert" target="gh-user">@scalvert</a> and <a href="https://github.com/muziejus" target="gh-user">@muziejus</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Sean Massa, Amy Lam, Isaac Lee, Jessica Jordan and the Learning Team
