---
title: The Ember Times - Issue No. 181
authors:
  - chris-ng
  - jared-galanis
  - amy-lam
date: 2021-06-04T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

EmberFest, remodeling an Ember app, Ember CLI history, ember-auto-import, web bundling, ember-concurrency release, Ember Data roundup, rwjblue podcast, and keeping a clean git history.

---

## [EmberFest 2021 is happening! 🏛️](https://twitter.com/EmberFest/status/1398291012489994241)

Mark your calendars for **September 30th – October 1st** of 2021 – [EmberFest](https://emberfest.eu/) will be back as a hybrid on-site/virtual event! EmberFest is the European Community Ember Conference. The location will be a secret until ticket sales are open so stay tuned.

The EmberFest team is confident that this year’s conference can happen in person. At the same time, they realize that some people can’t or might not want to travel yet, so for the first time, EmberFest is going hybrid: there will be both on-site and remote tickets for a livestream available. Early bird tickets will start on **June 11, 2021**.

If you’re interested in seeing what it’s like, check out the last [EmberFest conference in 2019](https://www.youtube.com/watch?v=8EyI_xyha6k), which was in Copenhagen!

---

## [Ember CLI history, ember-auto-import, web bundling & more 🌎](https://twitter.com/chriskrycho/status/1397991369231138817)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) recently got together with some LinkedIn colleagues, [Dave Combs (@davecombs)](https://github.com/davecombs) and [Richard Conrad (@grconrad)](https://github.com/grconrad), to chat about the history of Ember CLI, ember-auto-import, web bundling and more.

If you've been looking to learn more about how these things came into being and developed over time, including how they have had impact on the development of modern build tools like Embroider, then you may want to go check out the super interesting [video](https://www.youtube.com/watch?v=c5yV1HjGIK0).

If you haven't had enough Krycho 😄 and have some more time on your hands, you might also want to go checkout a package that Chris [recently published](https://twitter.com/chriskrycho/status/1397747097487613952) called `ember-simple-track-helper` which essentially provides an equivalence for React's `useState` hook for Ember and Glimmer template only components.

---

## Ember Data happenings 👀

In a prior issue, we mentioned that Ember.js celebrated it's 10th birthday! However, Ember Data's first commits in GitHub were ~15 years ago. The commit history started in SproutCore, which later morphed into Ember.js and Ember Data. Check out [Chris Thoburn (@runspired)'s](https://github.com/runspired)'s talk on [Ember Data](https://www.youtube.com/watch?v=zbqbsOyLM30) from Ember Fest 2019 for more background!

In more Ember Data news, v4.0 is coming! Open [Ember Data Request For Comments (RFCs)](https://github.com/emberjs/rfcs/pulls?q=is%3Apr+is%3Aopen+label%3AT-ember-data) will target 5.0, and approved RFC's will be enabled in 4.1 at the soonest.

[RFC #475](https://github.com/emberjs/rfcs/pull/745) calls for modernizing the `PromiseManyArray`. The RFC intends to deprecate reading, mutating or operating on an async `hasMany` relationship before resolving its value in the application's JavaScript code. Rendering an async `hasMany` in a template will continue to work as expected. Check out the [rendered RFC](https://github.com/runspired/rfcs/blob/ember-data/deprecate-methods-on-promise-many-array/text/0745-ember-data-deprecate-methods-on-promise-many-array.md) and comment if you have any feedback!

---

## [Remodeling an Ember app blog series 📖](https://twitter.com/jwwweber/status/1400455533627207681)

In an exciting new series of new blog posts Ember Learning core team member [Jen Weber (@jenweber)](https://github.com/jenweber) is covering the process of bringing an older Ember app up-to-date with Octane and a modern Ember Data strategy.

In the process of writing the posts Jen is pairing with Ember Data core team member, [Chris Thoburn (@runspired)](https://github.com/runspired), so there should be lots of great content to look forward to in the coming days.

The first post, which is available now, lays the ground work for what Jen and Chris will be working on, and includes lists of how to approach overhauling an Ember app, some debugging strategies you might take and more. You can find the first introductory blog post [here on Jen's blog](https://www.jenweber.dev/remodeling-an-ember-app---introduction/).

---

## [ember-concurrency 2.1.0 release 🐹](https://twitter.com/m4xm4n/status/1399769152953462790)

<!--alex ignore waiters-waitresses-->
In case you hadn't noticed, [Max Fierke (@maxfierke)](https://github.com/maxfierke) recently released version 2.1.0 of `ember-concurrency`! This release includes a public API for Yieldables. Yieldables let you hook into the low-level execution logic of an ember-concurrency task and provide a new way to instrument TaskInstances by providing a safe mechanism to implement custom waiters, hooks, introspection, and other operations from application code.

ember-concurrency 2.1.0 also fixes an important bug where task state updates could be applied out of order in some situations.

If you have been looking to access the internals of ember-concurrency that allow it to go beyond what Promises are capable of, [this release](https://github.com/machty/ember-concurrency/releases/tag/2.1.0) might be of interest to you.

---

## [A new episode of Web, Whiskey & Whatnot 🔈](https://twitter.com/shipshapecode/status/1397661771146698752)

There's a new episode of the Ember-related podcast Web, Whiskey & Whatnot out 🎉! This episode features none other than [Robert Jackson (@rwjblue)](https://github.com/rwjblue). The Ship Shape gang and rwjblue discuss a bit about how rwjblue got involved in contributing to Ember.js, a bit about the web and, yes, a bit about whiskey.

Go checkout the episode wherever you listen to podcasts!

---

## [Keeping a clean git history 🖋](https://simplabs.com/blog/2021/05/26/keeping-a-clean-git-history/)

Ember Learning core team member [Chris Manson (@mansona)](https://github.com/mansona) has published a super helpful new blog post about one of the developer fundamentals that we all should know about, how to keep a clean git history.

Chris talks about the importance of keeping a tidy git history and provides some excellent tips and workflows on how one might go about doing that. There is also an in-depth working example of some challenges that come up when managing your commits and how you can use visual tools like [Fork](https://git-fork.com/) to achieve a higher level of mastery over your git history.

Head on over to the Simplabs blog to check out the [post](https://simplabs.com/blog/2021/05/26/keeping-a-clean-git-history/) and learn how to clean up your git history!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/hannakim91" rel="noopener noreferrer" target="_blank">Hanna (she/her) (@hannakim91)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/Windvis" rel="noopener noreferrer" target="_blank">Sam Van Campenhout (@Windvis)</a>, <a href="https://github.com/btecu" rel="noopener noreferrer" target="_blank">Bj Tecu (@btecu)</a>, <a href="https://github.com/MichalBryxi" rel="noopener noreferrer" target="_blank">Michal Bryxí (@MichalBryxi)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/j000shDotCom" rel="noopener noreferrer" target="_blank">Josh Lindsay (@j000shDotCom)</a>, <a href="https://github.com/skaterdav85" rel="noopener noreferrer" target="_blank">David Tang (@skaterdav85)</a>, <a href="https://github.com/mixonic" rel="noopener noreferrer" target="_blank">Matthew Beale (@mixonic)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/stefanpenner" rel="noopener noreferrer" target="_blank">Stefan Penner (@stefanpenner)</a>, <a href="https://github.com/runnerboy22" rel="noopener noreferrer" target="_blank">Tyler (@runnerboy22)</a>, <a href="https://github.com/helgablazhkun" rel="noopener noreferrer" target="_blank">Olga Torkhanova (@helgablazhkun)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/aoumiri" rel="noopener noreferrer" target="_blank">Anass OUMIRI (@aoumiri)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/elwayman02" rel="noopener noreferrer" target="_blank">Jordan Hawker (@elwayman02)</a>, <a href="https://github.com/lukemelia" rel="noopener noreferrer" target="_blank">Luke Melia (@lukemelia)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, and <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Jared Galanis, Amy Lam, and the Learning Team
