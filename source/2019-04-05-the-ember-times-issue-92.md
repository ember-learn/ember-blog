---
title: The Ember Times - Issue No. 92
author: Chris Ng, Lisa Huang-North, Jessica Jordan, Isaac Lee, Danielle Adams, Amy Lam, Bradley Leftley, Jared Galanis
tags: Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/04/05-the-ember-times-issue-92.html"
responsive: true
---

હેલો Emberistas! 🐹

The **video** recordings of **EmberConf 2019** are now available! But first, read about the benefits of **volunteering at a tech conference** 💪, an RFC on **adding npm dependency lint** ✨, a new **`{{fn}}` Helper** RFC 🎉, **data loading** and **animation patterns** in your Ember app 🌟, and you don't wanna miss tips on **mentoring** Ember developers 👩‍🏫! Enjoy some ✨ fan art by **@delusioninabox** 👩‍🎨, and read the exclusive interview with Ember contributor **@pzuraq**! 💬

READMORE

---

## [3 Reasons to Volunteer at a Tech Conference 💪🏼](https://medium.com/@lisaychuang/3-reasons-why-you-should-volunteer-at-a-tech-conference-19a0c81d1d8)

[@lisaychuang](https://twitter.com/lisaychuang) shares her experience from this year’s EmberConf, and encourages newcomers in any tech community to **attend a tech conference** (and possibly **volunteer**!).

As a volunteer, you can get:
* A warm welcome to the community
* Behind the scene access
* A chill home base during the conference

Curious to learn more? Check out her post on Medium: [3 reasons why you should volunteer at a tech conference](https://medium.com/@lisaychuang/3-reasons-why-you-should-volunteer-at-a-tech-conference-19a0c81d1d8).

---

## [Dependency Lint RFC ✨](https://github.com/emberjs/rfcs/pull/464)

[@Alonski](https://github.com/Alonski) proposed that the addon `ember-cli-dependency-lint` should be added to the **default blueprint**.

This lint helps us detect early if our addons rely on the same package but use different versions. In such cases, Ember CLI merges all versions into one. This can cause our app to behave unexpectedly and become hard to debug. 😨😰😱

You can learn about `ember-cli-dependency-lint` addon and how to resolve dependency conflicts at [https://github.com/salsify/ember-cli-dependency-lint](https://github.com/salsify/ember-cli-dependency-lint). Be sure to leave your comments on [the current proposal](https://github.com/emberjs/rfcs/pull/464).

---

## [`{{fn}}` Helper RFC 🎉](https://github.com/emberjs/rfcs/pull/470)

Check out the `{{fn}}` Helper RFC opened by [@rtablada](https://github.com/rtablada) that introduces clear argument passing for functions in templates.

The `{{fn}}` RFC should solve for some of the complexity and confusion around the current action helper. The new `{{fn}}` helper will take in a function and set of arguments that are partially applied to the function (with no need for build time private APIs), and context binding will be done using the `@action` decorator in classes.

For more on the detailed design of the proposal, including comparisons to the action helper/modifier and some alternatives [see the full RFC](https://github.com/emberjs/rfcs/pull/470).

---

## [Animation and Predictable Data Loading in Ember 🐹](https://crunchingnumbers.live/2019/04/02/animation-and-predictable-data-loading-in-ember/)

[@ijlee2](https://github.com/ijlee2), a first time attendee at [EmberConf](https://emberconf.com/), shares a [tutorial](https://crunchingnumbers.live/2019/04/02/animation-and-predictable-data-loading-in-ember/) on how to load complex data in a predictable manner and how to **use animations** to liven up your Ember applications.

The **tutorial** covers how you can use simple animations using [Ember Animated](https://github.com/ember-animation/ember-animated) and [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) to help make your applications feel more dynamic and polished!

Another interesting area the tutorial explores is **predictable data loading**, overcoming bugs that you may encounter when having models and relationships and how you can use [Ember Data Storefront](https://github.com/embermap/ember-data-storefront) to aid tackling some of this issues! Definitely worth checking out!

Read the [full article](https://crunchingnumbers.live/2019/04/02/animation-and-predictable-data-loading-in-ember/) alongside some video previews or check out a preview of the [demo app](https://ember-animated.herokuapp.com/) from the tutorial.

---

## [Reflecting on Being a Former Noob 👶](https://medium.com/@adamzdanielle/reflecting-on-being-a-former-noob-d5e192907ae)

While realizing she's no longer a beginner, [@danielleadams](https://github.com/danielleadams) documents her thoughts on what **more experienced developers** can do to **help** those **newer** to the tech industry and working as developers. Check out her [blog post](https://medium.com/@adamzdanielle/reflecting-on-being-a-former-noob-d5e192907ae) on the subject, stemming from her experience being a **mentor** at EmberConf!

---

## [EmberConf 2019 Videos Out 🎦](https://www.youtube.com/playlist?list=PLE7tQUdRKcyYWLWrHgmWsvzsQBSWCLHYL)

If you missed the chance to see talks from [EmberConf 2019](https://emberconf.com/), worry no more! Starting today, you can **watch all of them** on [YouTube](https://www.youtube.com/playlist?list=PLE7tQUdRKcyYWLWrHgmWsvzsQBSWCLHYL). Please upvote the videos and **share them** with your teams, communities, family, and friends! 💜

---

## [Ember Makes Coding Feel So Good Comic 💥](https://twitter.com/delusioninabox/status/1111468497782091779)

[@delusioninabox](https://github.com/delusioninabox) created a **comic** about being able to work with Ember again after a long time away. Like, **retweet**, or comment on the [post on Twitter](https://twitter.com/delusioninabox/status/1111468497782091779)!

<div class="centered">
  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Daily 2,195! <a href="https://twitter.com/emberjs?ref_src=twsrc%5Etfw">@emberjs</a> just makes coding feel so good...so right. ❤😍 <a href="https://t.co/AJJ8UMIqY5">pic.twitter.com/AJJ8UMIqY5</a></p>&mdash; Laura Kajpust 👩‍💻🎨 (@delusioninabox) <a href="https://twitter.com/delusioninabox/status/1111468497782091779?ref_src=twsrc%5Etfw">March 29, 2019</a></blockquote>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

---

## ["I contribute to Ember" with Chris Garrett 💬](https://discuss.emberjs.com/t/i-contribute-to-ember-with-chris-garrett/16395)

<div class="float-right padded portrait-frame">
  <img alt="Chris Garrett" title="Chris Garrett - Contributor to Ember" src="/images/blog/emberjstimes/pzuraq.jpg" />
</div>

In the 9th edition of the contributor interview series, community member **Chris Garrett**, also known as [@pzuraq](https://github.com/pzuraq), talks about his story getting involved with **native classes** and **decorators** in Ember. Chris also explains why everyone in the community is eager to help **make your contribution** a real **success** as well ✨

You can read the full interview on [the Ember Forum](https://discuss.emberjs.com/t/i-contribute-to-ember-with-chris-garrett/16395).

<a class="ember-button ember-button--centered" href="https://discuss.emberjs.com/t/i-contribute-to-ember-with-chris-garrett/16395">Read more</a>

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/yohanmishkin" target="gh-user">@yohanmishkin</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/cibernox" target="gh-user">@cibernox</a>, <a href="https://github.com/bartocc" target="gh-user">@bartocc</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/krisselden" target="gh-user">@krisselden</a>, <a href="https://github.com/chadhietala" target="gh-user">@chadhietala</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/raulb" target="gh-user">@raulb</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/danwenzel" target="gh-user">@danwenzel</a>, <a href="https://github.com/toddjordan" target="gh-user">@toddjordan</a>, <a href="https://github.com/dayton-bobbitt" target="gh-user">@dayton-bobbitt</a>, <a href="https://github.com/kennethlarsen" target="gh-user">@kennethlarsen</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/dfreeman" target="gh-user">@dfreeman</a>, <a href="https://github.com/scalvert" target="gh-user">@scalvert</a>, <a href="https://github.com/czosel" target="gh-user">@czosel</a>, <a href="https://github.com/RichardOtvos" target="gh-user">@RichardOtvos</a>, <a href="https://github.com/dmzza" target="gh-user">@dmzza</a>, <a href="https://github.com/ClaytonTurner" target="gh-user">@ClaytonTurner</a>, <a href="https://github.com/mdbiscan" target="gh-user">@mdbiscan</a>, <a href="https://github.com/zachgarwood" target="gh-user">@zachgarwood</a> and <a href="https://github.com/Charizard" target="gh-user">@Charizard</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

<p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

</div>

---

## [#embertimes 📰](https://emberjs.com/blog/tags/newsletter.html)

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Chris Ng, Lisa Huang-North, Jessica Jordan, Isaac Lee, Danielle Adams, Amy Lam, Bradley Leftley, Jared Galanis and the Learning Team
