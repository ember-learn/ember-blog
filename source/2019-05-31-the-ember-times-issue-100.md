---
title: The Ember Times - Issue No. 100
author: Chris Ng, Isaac Lee, Jared Galanis, Jessica Jordan, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/05/31-the-ember-times-issue-100.html"
responsive: true
---

Happy 🎉 100th 🥳 Ember Times, Emberistas! 🐹

This week:
how to conditionally wrap components 💝,
check out the Ember Sinon 4.0.0 release 💯,
Ember CLI Mirage 1.0.0 release 🎉,
Ember File Upload 2.7.0 release 🆙,
ES6 Class Syntax Codemod 🤖,
and last, but not least, 
mythical `null` and error handling with True Myth 3.0 🔮!

---

## [Conditionally Wrapping Components with Ember.js 💝](https://dockyard.com/blog/2019/05/21/conditionally-wrapping-components-with-ember-js)

Last year, we learned [how to yield an Ember component in multiple places](https://dockyard.com/blog/2018/11/26/how-to-yield-an-ember-component-in-multiple-places).

This month, [@baroquon](https://github.com/baroquon) shares **step-by-step instructions** on how to extend this work so that [we can conditionally wrap components](https://dockyard.com/blog/2019/05/21/conditionally-wrapping-components-with-ember-js).

The best news? With [angle bracket syntax](https://guides.emberjs.com/release/reference/syntax-conversion-guide/#toc_angle-bracket-syntax), we can dramatically simplify our template! 💯

[Find out how today](https://dockyard.com/blog/2019/05/21/conditionally-wrapping-components-with-ember-js)!

---

## [Ember Sinon 4.0.0 Release! 💯](https://twitter.com/JordanHawker/status/1131293493492457472)

Ember Sinon, an Ember CLI addon adding support for Sinon.JS, released a breaking change in [version 4.0.0](https://github.com/csantero/ember-sinon/releases/tag/4.0.0) which includes the latest Sinon.JS release – [Sinon 7.3.2](https://github.com/sinonjs/sinon/releases/tag/v7.3.2), [EmberJS 3.10](https://blog.emberjs.com/2019/05/21/ember-3-10-released.html), and drops Node 6 support to match the latest [Ember CLI blueprints](https://github.com/ember-cli/ember-cli/pull/8563).

[Sinon.JS](https://sinonjs.org/) provides standalone test spies, stubs, and mocks for JavaScript. It works for any unit testing framework, with [Ember Sinon](https://github.com/csantero/ember-sinon) providing an easy to integration with Sinon.JS.

Try out [Ember Sinon](https://github.com/csantero/ember-sinon) today with `ember install ember-sinon`!

---

## [Ember CLI Mirage 1.0.0 Release 🎉](https://twitter.com/samselikoff/status/1131306153764380673)

After over four years and 1,442 commits from 174 contributors, [Ember CLI Mirage](https://www.ember-cli-mirage.com/) has met its milestone 1.0.0 release! Big congratulations to [@samselikoff](https://github.com/samselikoff) and everyone who helped create one of our favorite addons. 🙌

With 1.0.0 (or should we say 💯?), you will find updated documentation and [instructions on how to upgrade](https://www.ember-cli-mirage.com/docs/getting-started/upgrade-guide). If you haven't tried out Mirage to mock your backend APIs, we encourage you to today!

---

## [Ember File Upload 2.7.0 Release 🆙](https://twitter.com/Alonski/status/1128582603894923264)

[Ember File Upload](https://github.com/adopted-ember-addons/ember-file-upload), which allows **file uploads that continue over a route transition**, announced its 2.7.0 release! You will see updated README (examples using angle bracket) and stability from updated dependencies and bug fixes. 🧡

Please thank [@Alonski](https://github.com/Alonski), [@maxwondercorn](https://github.com/maxwondercorn), [@raido](https://github.com/raido), [@bendemboski](https://github.com/bendemboski), [@hakilebara](https://github.com/hakilebara), and [@andreyfel](https://github.com/andreyfel) for their work on this version! In addition, a big thanks to [@tim-evans](https://github.com/tim-evans) for the original authoring of the addon before it was [adopted](https://github.com/adopted-ember-addons/program-guidelines)! 💯

---

## [Codemod for ES6 Class Syntax Including Decorators 🤖](https://github.com/ember-codemods/ember-es6-class-codemod)
Excited about the chance to try out the ✨**native decorator support**✨ announced as part of the [release of Ember.js 3.10](https://blog.emberjs.com/2019/05/21/ember-3-10-released.html)? The good news is there's a [codemod](https://github.com/ember-codemods/ember-es6-class-codemod) to help you out with that!

Note that this part of the codemod is a configurable option in the transforms. If set to true, it will transform an object's properties to decorators wherever required. Also note that, unless turned off, this codemod will by default handle transforming object properties to class fields.

If you're interested in learning more about the motivation for this adoption of native decorator support in **Ember.js** **3.10** [check out the RFC](https://emberjs.github.io/rfcs/0440-decorator-support.html#motivation).

---

## [More Robust Null and Error Handling with True Myth 3.0 🔮](https://twitter.com/chriskrycho/status/1129485575621230592)

[**True Myth**](https://true-myth.js.org/) - your go-to library for handling `null` values and errors in your app in a type-safe fashion - is out with the brand-new **3.0.0 release**!

Check out which helper functions and methods are new in the latest release, by reviewing the [3.0 release page](https://github.com/true-myth/true-myth/releases/tag/v3.0.0) and **maybe.ify today**!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a>, <a href="https://github.com/josemarluedke" target="gh-user">@josemarluedke</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/ghislaineguerin" target="gh-user">@ghislaineguerin</a>, <a href="https://github.com/vasind" target="gh-user">@vasind</a>, <a href="https://github.com/shakirjames" target="gh-user">@shakirjames</a>, <a href="https://github.com/maxwondercorn" target="gh-user">@maxwondercorn</a>, <a href="https://github.com/villander" target="gh-user">@villander</a>, <a href="https://github.com/tendermario" target="gh-user">@tendermario</a> and <a href="https://github.com/konstankinollc" target="gh-user">@konstankinollc</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jared Galanis, Jessica Jordan, Amy Lam and the Learning Team
