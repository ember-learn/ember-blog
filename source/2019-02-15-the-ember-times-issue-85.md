---
title: The Ember Times - Issue No. 85
author: Chris Ng, Jessica Jordan, Jared Galanis, Kenneth Larsen, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/02/15-the-ember-times-issue-85.html"
responsive: true
---

こんにちは Emberistas! 🐹

In this week's issue: watch the Ember.js Documentary 🍿, check out the Ember.js core team panel 📹, there's a big update to the guides 📐, a new RFC to deprecate computed().meta() 🚀, and we have an exclusive interview with Ember contributor Lisa Backer! 🎉

READMORE

---

## [Ember.js: The Documentary is Now Released! 🍿](https://twitter.com/honeypotio/status/1094974913725849606)

<!--alex ignore spa-->
JavaScript was not always the dominant force in the web. Today a lot of SPA features we see around the web were pioneered by Ember. Explore the story of why and how Ember.js came to be in [Ember.js: The Documentary](http://videos.honeypot.io/emberjs-documentary-2019/)!

Here are some quick snippets from the film:

> “JavaScript frameworks don’t have to be disposable software. Web applications don’t have to be disposable software. You don’t need to tell your manager we need to stop writing any new features for the next 6 months because it’s been 2 years and we need to rewrite – Ember is a symbol of the fact that that is a false dichotomy.” - Tom Dale

> “I really hope the best of Ember is ahead because I think front end engineering needs it … needs an example of something that is not trying to tell people that when something goes wrong it’s their own fault. So like something that tells you if you’re a beginner like this is for you.” - Yehuda Katz

Check out the [full documentary](https://www.youtube.com/watch?v=Cvz-9ccflKQ) featuring [@wycats](https://github.com/wycats), [@tomdale](https://github.com/tomdale), [@wifelette](https://github.com/wifelette), [@GavinJoyce](https://github.com/GavinJoyce), [@balinterdi](https://github.com/balinterdi), [@MelSumner](https://github.com/MelSumner), [@jessica-jordan](https://github.com/jessica-jordan) and other members of the community on [YouTube](https://www.youtube.com/watch?v=Cvz-9ccflKQ)!

---

## [Ember.js Core Panel, Boston Meetup 📹](https://www.youtube.com/watch?v=Jp4jrwz4zV8&feature=youtu.be&t=105)

At the January [Boston Ember.js Meetup](https://www.meetup.com/Boston-Ember-js/) members of the Ember.js core team got together for a panel on the future of JavaScript.

Team members Tom Dale, Robert Jackson, Edward Faulkner, Dan Gebhardt and Jen Weber discussed their picks for the most exciting future developments in JavaScript and their impact on the web and the Ember.js ecosystem, followed by a super interesting Q&A. Topics included web assembly and it's effect on mobile web application performance, web workers, decorators, learning stories and more! ✨

Check out the entire [archived live stream](https://www.youtube.com/watch?v=Jp4jrwz4zV8&feature=youtu.be&t=105) featuring [@tomdale](https://github.com/tomdale), [@rwjblue](https://github.com/rwjblue), [@ef4](https://github.com/ef4), [@dgeb](https://github.com/dgeb) and [@jenweber](https://github.com/jenweber).

---

## [Guides From a Different Angle 📐](https://guides.emberjs.com/release/)

A new version of the [Ember guides](https://guides.emberjs.com/release/) has been deployed, and it contains some exciting surprises. First of all, the `guides-source` and `guides-app` repositories have become **one repository**. This makes it so much more convenient to maintain and contribute. It also now uses the [Guidemaker](https://github.com/empress/guidemaker) technology which means that CLI-guides and the Ember guides are using the same tech.

And now for the big surprise: **The newly deployed guides now contains angle bracket invocation syntax**. So, if you're looking to use angle bracket invocation syntax in your Ember application, the guides are the place to look for help.

---

## [Farewell, computed().meta() 👋](https://github.com/emberjs/rfcs/pull/441)

Following the **deprecation** of other **modifier functions** of **computed properties** in the past ([1](https://emberjs.github.io/rfcs/0375-deprecate-computed-property-modifier.html), [2](https://emberjs.github.io/rfcs/0370-deprecate-computed-volatile.html)),
a new Request for Comments (RFC) proposes the [deprecation of the `meta()` modifier](https://github.com/emberjs/rfcs/pull/441).

The once useful function for sharing and looking up meta information through a cp, can now be easily substituted by using `WeakMap`s - making the deprecation of `computed().meta()` possible as proposed in the RFC.

You can read more about the suggested transition path in the [full proposal](https://github.com/emberjs/rfcs/blob/51b57a865a3c58393c44d73f1c4931878c994eef/text/0000-deprecate-computed-meta.md). And as always, don't forget to [comment, too](https://github.com/emberjs/rfcs/pull/441)!

---

## ["I contribute to Ember" with Lisa Backer ✍️](https://discuss.emberjs.com/t/i-contribute-to-ember-with-lisa-backer/16168)

<div class="float-right padded portrait-frame">
  <img alt="Lisa Backer" title="Lisa Backer - Contributor to Ember" src="/images/blog/emberjstimes/lisabacker.jpeg" />
</div>

In our 6th edition of the contributor interview series community member **Lisa Backer**, also known as [@eshtadc](https://github.com/eshtadc) talks about her work on `ember-service-worker`, public speaking, the things that make open-source so valuable and why anyone in the community can be an expert who has important insights to share.

You can read the full interview on [the Ember Forum](https://discuss.emberjs.com/t/i-contribute-to-ember-with-lisa-backer/16168).

<a class="ember-button ember-button--centered" href="https://discuss.emberjs.com/t/i-contribute-to-ember-with-lisa-backer/16168">Read more</a>

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/optikalefx" target="gh-user">@optikalefx</a>, <a href="https://github.com/prasannavijayan" target="gh-user">@prasannavijayan</a>, <a href="https://github.com/samselikoff" target="gh-user">@samselikoff</a>, <a href="https://github.com/patocallaghan" target="gh-user">@patocallaghan</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/jaredgalanis" target="gh-user">@jaredgalanis</a>, <a href="https://github.com/ppcano" target="gh-user">@ppcano</a>, <a href="https://github.com/jrjohnson" target="gh-user">@jrjohnson</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/simonihmig" target="gh-user">@simonihmig</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/kennethlarsen" target="gh-user">@kennethlarsen</a>, <a href="https://github.com/MinThaMie" target="gh-user">@MinThaMie</a>, <a href="https://github.com/jessica-jordan" target="gh-user">@jessica-jordan</a>, <a href="https://github.com/chrisrng" target="gh-user">@chrisrng</a>, <a href="https://github.com/acorncom" target="gh-user">@acorncom</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/bbarkley" target="gh-user">@bbarkley</a> and <a href="https://github.com/tomdale" target="gh-user">@tomdale</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

<p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

</div>

---

## [#embertimes](https://emberjs.com/blog/tags/newsletter.html) 📰

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---


That's another wrap! ✨

Be kind,

Chris Ng, Jessica Jordan, Jared Galanis, Kenneth Larsen, Amy Lam and the Learning Team
