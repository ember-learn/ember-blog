---
title: The Ember Times - Issue No. 111
author: Chris Ng, Amy Lam, Jessica Jordan, Isaac Lee
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/08/16-the-ember-times-issue-111.html"
responsive: true
---

Здраво Emberistas! 🐹

<!--alex ignore crash-->
This week:
learn how to write async-aware tests 🕰️,
there's a new Zoey on the block 📷,
outer HTML semantics on the Crash Log Podcast 🎙,
and last, but not least,
the release of Ember Table 2.0 🎉!

---

## [Settle Down; Ember's Test Framework Has Your Async Covered 🕰️](https://www.linkedin.com/pulse/settle-down-embers-test-framework-has-your-async-covered-calvert/)

"The Ember community has spent a lot of time thinking about how to make your tests easy to write, dependable, and most importantly, **async aware**." It's easy in Ember to ensure that your synchronous tests wait for asynchronous actions to complete. 💎

[@scalvert](https://github.com/scalvert) gives a great overview of how the [`settled`](https://github.com/emberjs/ember-test-helpers/blob/master/addon-test-support/@ember/test-helpers/settled.ts) helper plays a pivotal role. Thanks to `settled`, the test helpers that we use every day⁠—`render`, `click`, `visit`, and `triggerEvent`⁠—know when async operations have completed. We can also use `settled` directly to complete an async operation that [`@ember/test-helpers`](https://github.com/emberjs/ember-test-helpers) doesn't manage.

The author also covers 2 additional tools that help us write async-aware tests:

- [ember-test-waiters](https://github.com/rwjblue/ember-test-waiters), to mark the start and end of an async operation that `@ember/test-helpers` doesn't manage
- [test isolation validation](https://github.com/emberjs/ember-qunit/blob/master/docs/TEST_ISOLATION_VALIDATION.md), to detect async leakage in tests

So what are you *waiting* for? Learn how you can write async-aware tests in Ember today!

---

<!--alex disable king-queen-->
## [New Empress Zoey 📷](https://twitter.com/melaniersumner/status/1156652744092069888)

<div class="blog-row">
  <img class="float-right extra-small transparent padded" alt="Empress Zoey" title="Empress Zoey" src="/images/tomsters/empress.png" />

  <p>You might recall that we wrote about <a href="https://github.com/mansona">@mansona</a>'s talk on <a href="https://www.youtube.com/watch?v=WL66D0bR0RQ&feature=youtu.be&t=780">Empress</a>,
  Ember's static site/JAMStack product, <a href="https://the-emberjs-times.ongoodbits.com/2019/08/09/issue-110">last week</a>.
  Hopefully, you'll be inspired to build your own <a href="https://github.com/empress/empress-blog">empress-blog</a> template even if you only know HTML and CSS.
  <strong>But wait, there's more!</strong></p>

  <p>Empress now has a <a href="https://emberjs.com/mascots/">Zoey mascot</a> of its own, joining a fabulous crowd of Zoeys and Tomsters. Check out <a href="https://github.com/empress">Empress on GitHub</a>.</p>
  <!--alex enable king-queen-->  
</div>

---

## [Ember Table 2.0 Release 🎉](https://medium.com/build-addepar/ember-table-2-0-release-5b91903f3e34)

[Ember Table 2.0](https://github.com/Addepar/ember-table) (“ET2”) has been rewritten from the ground up to be even more performant and flexible to use cases and was officially launched! [Ember Table 1.0](https://github.com/Addepar/ember-table-legacy) has been renamed to “ember-table-legacy” to avoid confusion.

Some key features that ET2 provides:

- fixed headers, footers, and columns
- column resizing and reordering
- ability to render thousands of rows performantly via occlusion rendering (leveraging [vertical-collection](https://github.com/html-next/vertical-collection))
- compatibility with Ember versions 1.13 through 3.10, with a progressively improved API

Questions or comments? Read the [Ember Table docs](https://opensource.addepar.com/ember-table/docs/), file an issue on [GitHub](https://github.com/Addepar/ember-table), or join us in the #topic-tables channel in the [community Discord](https://discordapp.com/invite/zT3asNS)!

---

<!-- alex ignore crash -->
## [Learn about HTML Scopes and Fastboot Complexity with the Crash Log Podcast 🎙](https://crashlog.transistor.fm/episodes/episode-6)

One of Ember Octane's most prominent and exciting features - [Glimmer Components](https://emberjs.github.io/rfcs/0416-glimmer-components.html) - approaches HTML semantics of components in a new way: In contrast to traditional components, Glimmer components default to **outer HTML semantics**, meaning, whichever root HTML element you see declared in your component's template file, is what you're going to get rendered in the DOM.

<!-- alex ignore crash -->
In the latest [episode on the Crash Log Podcast](https://crashlog.transistor.fm/episodes/episode-6) you can now tune into an interesting discussion about the meaning of outer HTML semantics in Glimmer Components and how it affects developer ergonomics. Your podcast presenters [@knownasilya](https://twitter.com/knownasilya) and [@davewasmer](https://twitter.com/davewasmer) will also chat about [Splatattributes](https://emberjs.github.io/rfcs/0435-modifier-splattributes.html) and how you can measure and investigate your app's performance when using **Fasboot**.

<!-- alex ignore crash -->
Listen to the full episode on [the Crash Log Podcast website](https://crashlog.transistor.fm/episodes/episode-6)!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/jrowlingson" target="gh-user">@jrowlingson</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/NullVoxPopuli" target="gh-user">@NullVoxPopuli</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/llunn" target="gh-user">@llunn</a>, <a href="https://github.com/dnalagatla" target="gh-user">@dnalagatla</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/ryanolsonx" target="gh-user">@ryanolsonx</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/simonihmig" target="gh-user">@simonihmig</a>, <a href="https://github.com/sdebarros" target="gh-user">@sdebarros</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/CvX" target="gh-user">@CvX</a>, <a href="https://github.com/dgeb" target="gh-user">@dgeb</a>, <a href="https://github.com/makepanic" target="gh-user">@makepanic</a>, <a href="https://github.com/tomdale" target="gh-user">@tomdale</a>, <a href="https://github.com/chiragpat" target="gh-user">@chiragpat</a> and <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Amy Lam, Jessica Jordan, Isaac Lee and the Learning Team
