---
title: The Ember Times - Issue No. 91
author: Anne-Greeth van Herwijnen, Chris Ng, Jessica Jordan, Bradley Leftley, Kenneth Larsen, Jared Galanis, Katie Gengler
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/03/30-the-ember-times-issue-91.html"
responsive: true
---

හෙලෝ Emberistas! 🐹

<!--alex ignore hangman-hangwoman-->
Read some RFCs around **Record Data Errors** 📇 and extending `EmberObject` 💡, learn how to build Hangman with **Ember Octane** 🎬, check out the "e"mpressive EmberWeekend podcast with **@mansona**, the Singleton Record Data RFC for Ember Data 💾 and read the exclusive interview with Ember contributor **@kategengler**.

---

## [Record Data Errors RFC 📇](https://github.com/emberjs/rfcs/pull/465)

<!--alex ignore invalid-->
[@igorT](https://github.com/igorT) created a RFC to expose the content of **Invalid Errors** on Record Data. This RFC suggests **exposing** the **errors** provided by the server if it returns a `422`. `InvalidError` payload follows the JSON API error object spec, and if the error payload contains pointers those get mapped to attributes on a record.

For more information about the getter for the errors and the `RecordDataStoreWrapper` and an opportunity to give feedback, see the [Record Data Errors RFC](https://github.com/emberjs/rfcs/pull/465).

---

## [RFCs around EmberObject Base Class 💡](https://github.com/emberjs/rfcs/pulls)

[@pzuraq](https://github.com/pzuraq) opened 2 new RFCs around using the `EmberObject` **base class**.

The [@classic Decorator RFC](https://github.com/emberjs/rfcs/pull/468) adds a **set of warnings** for users who adopt **native class syntax** with `EmberObject` base classes. By using the `@classic` decorator, the warnings around edge cases such as `init` vs `constructor` or use of `Mixins` are turned off. These warnings are used as a guide for components to slowly migrate away from extending from `EmberObject` to more standalone such as `GlimmerComponent`.

The [Injection Hook Normalization RFC](https://github.com/emberjs/rfcs/pull/467) supersedes the submitted [Classic Class Owner Tunnel RFC](https://github.com/emberjs/rfcs/pull/451). This RFC looks to answer **how** we should **handle dependency injection (DI)** when we are not extending from the `EmberObject` base class. It proposes to assign values during construction by normalising the assignment of the `owner`, access to injected properties, and follow the same conventions as other popular DI frameworks.

Read more about [@classic Decorator RFC](https://github.com/emberjs/rfcs/pull/468) and [Injection Hook Normalization RFC](https://github.com/emberjs/rfcs/pull/467) on GitHub!

---

<!--alex ignore hangman-hangwoman-->
## [Building a Hangman Game with Ember Octane](https://www.twitch.tv/videos/400723351) 🎬

<!--alex ignore hangman-hangwoman-->
Husband and wife team [@mike-north](https://github.com/mike-north) and [@lisaychuang](https://github.com/lisaychuang) did a [live stream](https://www.twitch.tv/videos/400723351) on **how to build** a simple **hangman game**. They used [the Ember Octane preview](https://emberjs.com/editions/octane/) and the Glimmer components that come with it.

This video is a nice introduction into the world of **Ember Octane** and **Glimmer components** and definitely shows the benefits of doing pair programming 😊.

---

## [Episode 129 of the EmberWeekend podcast](https://emberweekend.com/episodes/empress-the-ember-press)

<!--alex ignore middleman-middlewoman-->
Episode 129 of the **EmberWeekend podcast** featured [@mansona](https://github.com/mansona) the creator of Authmaker. This episode included a range of topics including the **migration** of moving the **Ember Guides** from Middleman to be powered by Ember. Other areas include Middleman shortcomings and the rework of the Guides.

[@mansona](https://github.com/mansona) also talks about his journey using Broccoli Static JSON to **convert markdown** into **JSON API**. The ultimate goal was to use the Broccoli pipeline markdown to convert to JSON API and use static files!

[@mansona](https://github.com/mansona) also introduced **Guidemaker**:  A fully functional, static site implementation of a documentation site and EmberJS with fully out of the box SEO friendly output! With support to be hosted on S3 or any other site hosting solution. Check out the [github](https://github.com/empress/guidemaker) repo here.

Listen to the full [podcast]( https://emberweekend.com/episodes/empress-the-ember-press).

---

## [Singleton Record Data RFC](https://github.com/emberjs/rfcs/pull/461) 💾
Want to learn more about how some of Ember Data's APIs are developing? Take a peek at the Singleton Record Data RFC recently opened by [@runspired](https://github.com/runspired).

This RFC focuses on ensuring that Record Data can be implemented as a singleton, eliminates some redundant APIs and simplifies method signatures. This plan for Record Data offers opportunities for performance optimizations ⚡️ and improved feature sets! ✨

For these proposed changes and a detailed design, including changes to many of the methods involved, checkout the [Singleton Record Data RFC](https://github.com/emberjs/rfcs/pull/461).

---

## [SECTION TITLE](#section-url)

---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## ["I contribute to Ember" with Katie Gengler ✍️](https://discuss.emberjs.com/t/i-contribute-to-ember-with-katie-gengler/16374)

<div class="float-right padded portrait-frame">
  <img alt="Katie Gengler" title="Katie Gengler - Contributor to Ember" src="/images/blog/emberjstimes/kategengler.jpeg" />
</div>

In our 8th edition of the contributor interview series, community member **Katie Gengler**, also known as [@kategengler](https://github.com/kategengler) talks about her work on **Ember Observer**, **Ember Try** and **RFC tracking** and why all kinds of contributions to Ember really matter.

You can read the full interview on [the Ember Forum](https://discuss.emberjs.com/t/i-contribute-to-ember-with-katie-gengler/16374).

<a class="ember-button ember-button--centered" href="https://discuss.emberjs.com/t/i-contribute-to-ember-with-katie-gengler/16374">Read more</a>

---


## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/toddjordan" target="gh-user">@toddjordan</a>, <a href="https://github.com/zachgarwood" target="gh-user">@zachgarwood</a>, <a href="https://github.com/alexpark90" target="gh-user">@alexpark90</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/xjmdoo" target="gh-user">@xjmdoo</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/stefanpenner" target="gh-user">@stefanpenner</a>, <a href="https://github.com/step2yeung" target="gh-user">@step2yeung</a>, <a href="https://github.com/mike-north" target="gh-user">@mike-north</a>, <a href="https://github.com/tomdale" target="gh-user">@tomdale</a>, <a href="https://github.com/tansongyang" target="gh-user">@tansongyang</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a>, <a href="https://github.com/mwpastore" target="gh-user">@mwpastore</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a> and <a href="https://github.com/jessica-jordan" target="gh-user">@jessica-jordan</a>  for their contributions to Ember and related repositories! 💖</p>

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


Anne-Greeth van Herwijnen, Chris Ng, Jessica Jordan, Bradley Leftley, Kenneth Larsen, Jared Galanis, Katie Gengler, and the Learning Team
