---
title: The Ember Times - Issue No. 166
author: Chris Ng, Amy Lam, Jared Galanis
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2021/10/23-the-ember-times-issue-166.html"
responsive: true
---

👋 Emberistas! 🐹

New RFC to Deprecate transition methods of Controller and Route ✍️,
learn what's new in the Ember 3.22 release 🎉
read the blog post on React component patterns in Ember ⚛️,
Glimmer VM Tracking Video 📹,
RFC: Deprecate tryInvoke Enters Final Comment Period 📜,
EmberMap Octane Conversion Video 📼,
  
READMORE

---

## [RFC: Deprecate transition methods of Controller and Route ✍️](https://github.com/emberjs/rfcs/pull/674)

[Jeldrik Hanschke (@jelhan)](https://github.com/jelhan) proposed a new RFC to [Deprecate transition methods of Controller and Route](https://github.com/emberjs/rfcs/pull/674) in order to reduce public API exposed related to routing.

The RFC aims to deprecate the methods `transitionTo` and `replaceWith` of the Route object and the methods `transitionToRoute` and `replaceRoute` of the Controller object. The existing methods `transitionTo` and `replaceWith` of the RouterService object should be used instead.

The RFC proposes that the existing methods are today not documented properly so there are likely timing differences between the different routing calls even if from the outside they function the same. Supporting different ways to do the same increases complexity without providing much value and limiting options will make learning the framework easier for new developers.

Read and comment on the [full RFC on GitHub](https://github.com/emberjs/rfcs/pull/674)!

---

## [Learn what's new in the Ember 3.22 release 🎉](https://blog.emberjs.com/2020/10/20/ember-3-22-released.html)

<!--alex ignore host-hostess-->
The Ember Blog [announced the v3.22 releases](https://blog.emberjs.com/2020/10/20/ember-3-22-released.html) of Ember.js, Ember Data, and Ember CLI. There were a host of bug fixes across the board, one deprecation for Ember Data and several new features for Ember.js.

The release of version 3.22 introduced some new features you may want to be aware of in Ember.js:

<!--alex ignore savage-->
1. Enabled `@ember/destroyable` API, which allows you to create and manage your own destroyables. For more information, please see the [Destroyables RFC](https://emberjs.github.io/rfcs/0580-destroyables.html).
2. Enabled Cache API, a low-level primitive for memoizing the result of a function based on autotracking. (You can install a [polyfill](https://github.com/ember-polyfills/ember-cache-primitive-polyfill) for apps between versions 3.13 and 3.21.) For more information, please check the [Ember Guides](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/#toc_caching-of-tracked-properties) and [Autotracking Memoization RFC](https://emberjs.github.io/rfcs/0615-autotracking-memoization.html).
3. Allowed passing the `transition` object to 2 route hooks, `activate` and `deactivate`.

Additionally, Ember Data 3.22 introduced a deprecation for use of `najax` in favor of `ember-fetch` when fastboot is installed. And for new apps, Ember CLI 3.22 will install v9 or higher of `eslint-plugin-ember`, which may limit the version of Node that you use.

The release also kicked off the 3.23 beta cycle. If you can, please help with testing beta builds and reporting bugs before version 3.23.0 is published!

---

## [React component patterns in Ember.js ⚛️](https://www.effective-ember.com/blog/react-component-patterns/)

[Michael Klein (@LevelbossMike)](https://github.com/LevelbossMike) wrote a blog post comparing modern Ember with React. While not an expert on React, Michael goes through how [React tackles challenges](https://dev.to/alexi_be3/react-component-patterns-49ho) when implementing SPAs. The blog goes through 3 different component patterns: Compound Component Pattern, Flexible Compound Component Pattern, and Provider Pattern - to see how each one is implemented in React and Ember.

<!--alex ignore obvious-->
The blog argues that the [Octane Edition](https://emberjs.com/editions/octane/) of Ember provides conventions that help you fall into the pit of success instead of only giving you low-level primitives to solve common challenges in a multitude of ways with different tradeoffs that only seem to be obvious to people that are experts in React.

Read the full blog post where Michael compares each pattern with code samples in the [Effective Ember blog](https://www.effective-ember.com/blog/react-component-patterns/)!

---

## [Glimmer VM Tracking Video 📹](https://www.youtube.com/watch?v=BjKERSRpPeI)

We've had some nice blog posts on the subject of tracking in Octane recently, but if you've been wondering about how tracking works in the ✨✨Glimmer VM✨✨ and you learn better by audio visual 🔊📼 methods, you may want to check out the [video on YouTube](https://www.youtube.com/watch?v=BjKERSRpPeI) that [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) and [Chris Garrett (@pzuraq)](https://github.com/pzuraq) put out at the beginning of September on the subject.

It's a very nice opportunity to watch and listen to two framework contributors discuss the internals of tracking in the Glimmer VM - we hope they put out another one soon!

---

## [RFC: Deprecate tryInvoke Enters Final Comment Period 📜](https://twitter.com/emberjs/status/1319720127320018944)

[Bach Vo (@bachvo)](https://github.com/bachvo) created a new RFC to [deprecate tryInvoke](https://github.com/emberjs/rfcs/pull/673), and we covered this a few weeks back. 

You may recall that this RFC builds on top of the previous [RFC to deprecate getWithDefault](https://emberjs.github.io/rfcs/0554-deprecate-getwithdefault.html).

<!--alex ignore just-->
Well this newer RFC has just entered Final Comment Period, so you should head on over to the [RFC](https://github.com/emberjs/rfcs/pull/673) and provide your thoughts while you still can.

---

## [EmberMap Octane conversion video 📼](https://twitter.com/ember_map/status/1319715247423369216)

The good folks over at EmberMap are kicking off a new video series lead by [Lindsay Cade (@cadeParade)](https://github.com/cadeParade) on converting to Octane and the [first look video](https://embermap.com/topics/converting-to-octane-first-look/converting-a-model) is out now 🎉!

The video covers how to convert an Ember Model to native class syntax and it is 💸 free 💸, so go watch the first in what is sure to be an awesome series of videos on Octane conversions!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/34Johnny69" rel="noopener noreferrer" target="_blank">@34Johnny69</a>, <a href="https://github.com/69LaudaLassan69" rel="noopener noreferrer" target="_blank">@69LaudaLassan69</a>, <a href="https://github.com/ackzell" rel="noopener noreferrer" target="_blank">Axel Uriel Martínez Castillo (@ackzell)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/andreisebastianc" rel="noopener noreferrer" target="_blank">Andrei Sebastian Cîmpean (@andreisebastianc)</a>, <a href="https://github.com/AndriyTykhan" rel="noopener noreferrer" target="_blank">Andrii Tykhan (@AndriyTykhan)</a>, <a href="https://github.com/aredshaw" rel="noopener noreferrer" target="_blank">Aaron K Redshaw (@aredshaw)</a>, <a href="https://github.com/BarryThePenguin" rel="noopener noreferrer" target="_blank">Jonathan Haines (@BarryThePenguin)</a>, <a href="https://github.com/bobisjan" rel="noopener noreferrer" target="_blank">Jan Bobisud (@bobisjan)</a>, <a href="https://github.com/BradenLawrence" rel="noopener noreferrer" target="_blank">Braden Lawrence (@BradenLawrence)</a>, <a href="https://github.com/cah-johnryan" rel="noopener noreferrer" target="_blank">John Ryan (@cah-johnryan)</a>, <a href="https://github.com/cechus" rel="noopener noreferrer" target="_blank">Oscar Choque (@cechus)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/chiragpat" rel="noopener noreferrer" target="_blank">Chirag Patel (@chiragpat)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/chrisvdp" rel="noopener noreferrer" target="_blank">Chris van der Ploeg (@chrisvdp)</a>, <a href="https://github.com/DeepakPanda02" rel="noopener noreferrer" target="_blank">Deepak Panda (@DeepakPanda02)</a>, <a href="https://github.com/elwayman02" rel="noopener noreferrer" target="_blank">Jordan Hawker (@elwayman02)</a>, <a href="https://github.com/fabriciotav" rel="noopener noreferrer" target="_blank">Fabrício Tavares (@fabriciotav)</a>, <a href="https://github.com/fletcherrippon" rel="noopener noreferrer" target="_blank">Fletcher Rippon (@fletcherrippon)</a>, <a href="https://github.com/fozy81" rel="noopener noreferrer" target="_blank">Tim (@fozy81)</a>, <a href="https://github.com/gnclmorais" rel="noopener noreferrer" target="_blank">Gonçalo Morais (@gnclmorais)</a>, <a href="https://github.com/hbutau" rel="noopener noreferrer" target="_blank">Humphrey Butau (@hbutau)</a>, <a href="https://github.com/hverma73" rel="noopener noreferrer" target="_blank">Harsh Verma (@hverma73)</a>, <a href="https://github.com/Ian-Yy" rel="noopener noreferrer" target="_blank">Yyee (@Ian-Yy)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/JamesS-M" rel="noopener noreferrer" target="_blank">@JamesS-M</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/jbryson3" rel="noopener noreferrer" target="_blank">John Bryson (@jbryson3)</a>, <a href="https://github.com/jivthesh" rel="noopener noreferrer" target="_blank">Jivthesh M R (@jivthesh)</a>, <a href="https://github.com/Jogius" rel="noopener noreferrer" target="_blank">@Jogius</a>, <a href="https://github.com/jpsanantonio" rel="noopener noreferrer" target="_blank">Jayvic San Antonio (@jpsanantonio)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/lvegerano" rel="noopener noreferrer" target="_blank">Luis Vegerano (@lvegerano)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/manurampandit" rel="noopener noreferrer" target="_blank">Manu Ram Pandit (@manurampandit)</a>, <a href="https://github.com/mateusalexandre" rel="noopener noreferrer" target="_blank">Mateus Alexandre (@mateusalexandre)</a>, <a href="https://github.com/maxwondercorn" rel="noopener noreferrer" target="_blank">maxwondercorn (@maxwondercorn)</a>, <a href="https://github.com/mgoetzke" rel="noopener noreferrer" target="_blank">Marie Goetzke (@mgoetzke)</a>, <a href="https://github.com/mikoscz" rel="noopener noreferrer" target="_blank">Michał Staśkiewicz (@mikoscz)</a>, <a href="https://github.com/mo3taz1705" rel="noopener noreferrer" target="_blank">mo3taz1705 (@mo3taz1705)</a>, <a href="https://github.com/nag5000" rel="noopener noreferrer" target="_blank">Aleksey Nagovitsyn (@nag5000)</a>, <a href="https://github.com/Nelias" rel="noopener noreferrer" target="_blank">Michał Antropik (@Nelias)</a>, <a href="https://github.com/neojp" rel="noopener noreferrer" target="_blank">Joan Piedra (@neojp)</a>, <a href="https://github.com/NoneOfMaster" rel="noopener noreferrer" target="_blank">Russell Tepper (@NoneOfMaster)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/richgt" rel="noopener noreferrer" target="_blank">@richgt</a>, <a href="https://github.com/Rockin4Life33" rel="noopener noreferrer" target="_blank">Wayne Ritchie (@Rockin4Life33)</a>, <a href="https://github.com/rohitpaulk" rel="noopener noreferrer" target="_blank">Paul Kuruvilla (@rohitpaulk)</a>, <a href="https://github.com/rreckonerr" rel="noopener noreferrer" target="_blank">Volodymyr Radchenko (@rreckonerr)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/Rxbsxn" rel="noopener noreferrer" target="_blank">Robert Harężlak (@Rxbsxn)</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/sdahlbac" rel="noopener noreferrer" target="_blank">Simon Dahlbacka (@sdahlbac)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/takshch" rel="noopener noreferrer" target="_blank">Taksh Chanana (@takshch)</a>, <a href="https://github.com/tmdtahir21" rel="noopener noreferrer" target="_blank">Mohammed Tahir (@tmdtahir21)</a>, <a href="https://github.com/Vedant-S" rel="noopener noreferrer" target="_blank">Vedant Shrivastava (@Vedant-S)</a>, <a href="https://github.com/wifelette" rel="noopener noreferrer" target="_blank">Leah Silber (@wifelette)</a>, and <a href="https://github.com/zinovik" rel="noopener noreferrer" target="_blank">@zinovik</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>
</div>

> P.S. Did we miss your past Readers' Question? We've added a new optional field to include your contact info, in case we need some clarification to answer your question in an upcoming issue. Please chat with us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter. As always, join us on Discord if you want want to write for the Ember Times or have a suggestion for next week's issue!</p>

<div>
  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Amy Lam, Jared Galanis and the Learning Team
