---
title: The Ember Times - Issue No. 109
author: Chris Ng, Amy Lam, Isaac Lee, Jessica Jordan, Anne-Greeth van Herwijnen, Jared Galanis
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/08/02-the-ember-times-issue-109.html"
responsive: true
---

🙌 Emberistas!

Read the newly published Ember 2019-2020 Roadmap RFC 🐹,
tune in to learn about GraphQL and Ember 👨‍💻,
join EmberCamp Chicago (Sept 16) 🍕,
learn why you shouldn't use observers 🙋‍♀️🙋‍♂️,
small things matter ✏️,
and Super Rentals tutorial in Octane 🚀!

---

## [Ember 2019-2020 Roadmap RFC 🐹](https://twitter.com/tomdale/status/1155909868907311110)

[@tomdale](https://github.com/tomdale) posted the first draft of the [Ember 2019-2020 Roadmap RFC](https://github.com/emberjs/rfcs/pull/519). This document is a distillation of multiple sources ranging from the blogs from the [Call For Blog Posts](https://blog.emberjs.com/2019/05/20/ember-2019-roadmap-call-for-posts.html), the [Community Survey](https://emberjs.com/ember-community-survey-2019/), discussions on [Discord](https://discordapp.com/invite/emberjs), [Twitter](https://twitter.com/hashtag/emberjs2019), [Ember Discuss](https://discuss.emberjs.com/), and more!

The **high level goals** for 2019-2020 are:

* Reducing the size and conceptual complexity of Ember.
* Improving ease of adoption.

This will be done by continuing to simplify Ember, modernizing our build system, enabling better accessibility (a11y) by default, and optimizing for growth by sharing how Ember Octane is modern, productive, and _fun_.

Check out the [full RFC on GitHub](https://github.com/emberjs/rfcs/pull/519)!

---

## [Tune in for This.JavaScript: GraphQL👨‍💻](https://www.thisdot.co/events/graphql-contributor-days-frameworks-edition)

 Mark your calendars! In partnership with Hasura, This.JavaScript is gathering the GraphQL community to discuss current advanced problems in GraphQL in frontend frameworks on **Thursday, August 8th**. [RSVP](https://www.thisdot.co/events/graphql-contributor-days-frameworks-edition) to attend the event online or check out the recording afterward.

 [@jneurock](https://github.com/jneurock) and [@chadian](https://github.com/chadian) will be representing the Ember community as a part of the event! You may remember their [talk from EmberFest](https://www.youtube.com/watch?v=kgfBexYbM68).

---

## [Get Ready for EmberCamp Chicago 🍕](http://embercamp.com/)

This year's edition of [EmberCamp Chicago](http://embercamp.com/) is taking place on **September 16th**, and you should **not miss it**!

You can already check out the [full talk schedule](http://embercamp.com/speakers), which includes insights into Ember and modern best practices presented by [Jen Weber](https://twitter.com/jwwweber), [Edward Faulkner](https://twitter.com/eaf4), [Olivia Liddell](https://twitter.com/oliravi), [Dan Gebhardt](https://twitter.com/dgeb), and many other amazing speakers! ✨

[Get your ticket today](https://www.eventbrite.com/e/embercamp-chicago-2019-registration-63595006376) before they run out! If you or your company would be interested in being a sponsor of EmberCamp Chicago, please reach out via [embercamp.chicago@gmail.com](mailto:embercamp.chicago@gmail.com).

See you all in Chicago, Emberistas!

---

## [Why Should I Not Use Observers in My Ember Application? 🙋‍♀️🙋‍♂️](https://discuss.emberjs.com/t/why-should-i-not-use-observers-in-my-ember-application/16868/3)

In case you missed it on [Ember Discuss](https://discuss.emberjs.com/), [@ef4](https://github.com/ef4) gave a [beginner-friendly, comprehensive answer](https://discuss.emberjs.com/t/why-should-i-not-use-observers-in-my-ember-application/16868/3) to why we discourage the use of observers. (Thank you for asking, [@efx](https://github.com/efx)!)

As your application grows, a change to data can trigger your observers in unexpected ways. The chain of dependencies grows and can form a cycle — a circular dependency — without your knowing. Observer A calls observer B, which calls A again, which then... 😨

What we need is a **rule that we can enforce locally** to prevent cycles from forming at the global level. You've likely heard of this rule already: **Data Down, Action Up (DDAU)**. 💡

To learn more about exactly how DDAU prevents circular dependencies, we encourage you to [check out the answer on Ember Discuss](https://discuss.emberjs.com/t/why-should-i-not-use-observers-in-my-ember-application/16868/3). If you have questions about Ember at any point, please feel free to ask them on [Discord](https://discordapp.com/invite/zT3asNS), [Ember Discuss](https://discuss.emberjs.com/), and our very own [Readers' Questions](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)!

---

## [Together we make EmberJS a better place ✏️](https://github.com/ember-learn/ember-website/pull/373)

We often feature awesome blogposts, intricate RFCs and helpful addons in the Times. But in such a large ecosystem and community, the **small things** also matter. [@backspace](https://github.com/backspace) and [@Imon-Haque](https://github.com/Imon-Haque) both contributed by just changing one file on the Ember website. [Fixing a typo](https://github.com/ember-learn/guides-source/pull/919) or a [broken link](https://github.com/ember-learn/ember-website/pull/373) that you stumble upon might seem really small, but it is valuable because it makes everyone's Ember experience better. So if you find something small, feel free to fix it by clicking the ✏️ on GitHub and creating a PR.

---

## [Super Rentals in Octane 🚀](https://github.com/ember-learn/super-rentals/pull/127)

If you've been looking for an example of what an app written in **Ember Octane** looks like, look no further than the rewrite of the Super Rentals Tutorial that's been a part of the Ember.js guides for quite a while now.

The original rewrite PR was opened by [@vaidehijoshi](https://github.com/vaidehijoshi), author of the amazing ✨ [basecs](https://github.com/vaidehijoshi/basecs-series) and [baseds](https://github.com/vaidehijoshi/baseds-series) series. 

[@tomdale](https://github.com/tomdale) also followed up with contributions to get the Octane vesion of Super Rentals over the line.

The new Super Rentals tutorial will become a part of the guides when Ember Octane is released. For a sneak preview, you can check out the PR's [here](https://github.com/ember-learn/super-rentals/pull/127) and [here](https://github.com/ember-learn/super-rentals/pull/129).

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/bantic" target="gh-user">@bantic</a>, <a href="https://github.com/alexmaingot-sf" target="gh-user">@alexmaingot-sf</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/mixonic" target="gh-user">@mixonic</a>, <a href="https://github.com/simonihmig" target="gh-user">@simonihmig</a>, <a href="https://github.com/stopfstedt" target="gh-user">@stopfstedt</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/scalvert" target="gh-user">@scalvert</a>, <a href="https://github.com/dgeb" target="gh-user">@dgeb</a>, <a href="https://github.com/josemarluedke" target="gh-user">@josemarluedke</a>, <a href="https://github.com/backspace" target="gh-user">@backspace</a>, <a href="https://github.com/stefanpenner" target="gh-user">@stefanpenner</a> and <a href="https://github.com/aspala" target="gh-user">@aspala</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Amy Lam, Isaac Lee, Jessica Jordan, Anne-Greeth van Herwijnen, Jared Galanis, and the Learning Team
