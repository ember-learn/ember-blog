---
title: The Ember Times - Issue No. 149
author: Matthew Roderick, Chris Ng, Amy Lam, Abhilash LR, Jared Galanis, Jessica Jordan
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/05/22-the-ember-times-issue-149.html"
responsive: true
---

🏄‍♂️ Emberistas! 🐹

Ember Engines acceptance testing guides 📝,
check out the new EmberMap video on Tracked Properties 👣,
polyfills for in-element and named blocks 🚀,
setting up Coveralls for your Ember addons 💪,
Ember in COVID-19 research 🔬📖🐹,
Global Accessibility Awareness Day Ember blog post 📖🐹,
"My Experience with Ember.js" video series 🎥,
and last, but not least, read the prettiest RFC in Emberland 💅!

READMORE

---

## [Ember Engines acceptance testing guides & Octane 📝](https://ember-engines.com/docs/testing-acceptance)

[Michael Villander (@villander)](https://github.com/villander) and team have fleshed out docs about the **acceptance test story** in the Ember Engines ecosystem, touching on some bleeding-edge cases. Also, the entire doc examples were migrated to Ember Octane! Visit the official site to see [Ember Engines' new acceptance testing guides](https://ember-engines.com/docs/testing-acceptance). Many thanks to [Dan Gebhardt (@dgeb)](https://github.com/dgeb), [Gabriel Csapo (@gabrielcsapo)](https://github.com/gabrielcsapo) and [Thomas Gossmann (@gossi)](https://github.com/gossi) for their reviews and tips!

Using Ember Engines? Chat about it in the [#ember-engines channel](https://discord.com/channels/480462759797063690/487221820638887947) on the [Ember Discord](https://discord.gg/emberjs).

---

## [EmberMap: Tracked Properties 👣](https://embermap.com/topics/what-s-new-in-ember/tracked-properties-3-13)

A new EmberMap video covers [Tracked Properties](https://guides.emberjs.com/release/upgrading/current-edition/tracked-properties/) – a new way to access and mutate state in Ember with vanilla JavaScript.

While we have been able to use [native ES5 getters](https://blog.emberjs.com/2018/04/13/ember-3-1-released.html) for accessing properties (`this.isOpen`), we still had to rely on calling `this.set` to mutate state. Tracked properties allow us to drop using `this.set` and instead use native setters (`this.isOpen = true;`) by annotating the properties we want to track.

Classic syntax:

```js
import { tracked } from "@glimmer/tracking";

export default Component.extend({
  isOpen: tracked({ value: false }),
});
```

Octane syntax:

```js
import { tracked } from '@glimmer/tracking';

class Person {
  @tracked firstName;
  @tracked lastName;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

Tracked properties also allow us to use [native JavaScript getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) as a replacement for computed properties by having dependent keys tracked. So try it out today in your app and vastly simplify the programming model by moving closer to native JavaScript language constructs.

Check out the [full video on EmberMap](https://embermap.com/topics/what-s-new-in-ember/tracked-properties-3-13)!

---

## [Polyfills for in-element and named blocks 🚀](https://github.com/ember-polyfills)

Right now you can get a **sneak peek** in [canary](https://emberjs.com/releases/canary/) of [public API {{in-element}}](https://github.com/emberjs/rfcs/blob/master/text/0287-promote-in-element-to-public-api.md) and [yieldable named blocks](https://github.com/emberjs/rfcs/blob/master/text/0460-yieldable-named-blocks.md).

What is `{{in-element}}`? Sometimes developers need to render content outside of the regular HTML flow. This concept is also called "portals". Components like dropdowns and modals use this technique to render stuff close to the root of the page, so as to bypass CSS overflow rules. (Some apps that are embedded into static pages even use this technique to update parts of the page outside the app itself.)

Since it was a common use case, Glimmer baked `{{-in-element}}` into the VM, but as part of the private (or intimate) API. With the passing of the [RFC](https://github.com/emberjs/rfcs/blob/master/text/0287-promote-in-element-to-public-api.md), it's going public, perhaps in Ember 3.20. So if you've been using `{{-in-element}}`, you should switch to the [`{{in-element}}` polyfill](https://github.com/ember-polyfills/ember-in-element-polyfill) instead, like [Krystan HuffMenne (@gitKrystan)](https://github.com/gitKrystan) did for these couple of addons: [ember-cli-head](https://github.com/ronco/ember-cli-head/pull/71) and [ember-maybe-in-element]( https://github.com/DockYard/ember-maybe-in-element/pull/25).

The [yieldable named blocks RFC](https://github.com/emberjs/rfcs/blob/master/text/0460-yieldable-named-blocks.md) makes it possible to pass one block or more to a component for customization. Check out the new [ember-named-blocks-polyfill](https://github.com/ember-polyfills/ember-named-blocks-polyfill) to take advantage of this feature now!

---

## [Setting up Coveralls for your Ember addons 💪](http://hangaroundtheweb.com/2020/05/setting-up-coveralls-for-your-ember-addons/)

[Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar/) blogs about setting up Coveralls for your Ember addons. He explains how to setup [ember-cli-code-coverage](https://github.com/kategengler/ember-cli-code-coverage) and [Coveralls](https://coveralls.io/) for your repositories. Coveralls help you deliver code confidently by showing which parts of your code aren’t covered by your test suite. You can also learn how to use these techniques and make it part of your workflow using Github Actions.

Check out the [blog post](http://hangaroundtheweb.com/2020/05/setting-up-coveralls-for-your-ember-addons/)!

---

## [Ember in COVID-19 research 🔬📖🐹](https://hub.jhu.edu/novel-coronavirus-information/research-preparedness/coronavirus-research-publications-resources/)

Johns Hopkins University (JHU) has announced new COVID-19 related features available in their [Public Access Submission System (PASS)](https://pass.jhu.edu/).

PASS (which is built using Ember.js on the frontend!), is a platform to assist researchers  🔬🧪📖 in complying with the access policies of their funders and institutions and is created by the Sheridan Libraries at JHU, in collaboration with the Harvard University Office for Scholarly Communication and the MIT Libraries.

As a [recent article](https://hub.jhu.edu/novel-coronavirus-information/research-preparedness/coronavirus-research-publications-resources/) at JHU's news center the Hub has pointed out, "Through modifications to the Public Access Submission System (PASS), faculty or their proxies can now submit articles flagged specifically for [the] JHU COVID-19 collection."

It is so encouraging to see yet another example of Ember being used in applications that support important research for public good. 😍🐹

---

## [Global Accessibility Awareness Day Ember blog post 📖🐹](https://blog.emberjs.com/2020/05/21/global-accessibility-awareness-day.html)

Did you know that May 21st was [Global Accessibility Awareness Day](https://globalaccessibilityawarenessday.org/)? Well now you know 😃!

You may not have seen the recent [blog post commemorating the occasion](https://blog.emberjs.com/2020/05/21/global-accessibility-awareness-day.html) and discussing accessibility in Ember. 🎉 The post includes lots of great information about how the community, the Ember core team and Ember's A11y Strike Team are working to support an accessible web. 💙💚💛💜

You should head on over to the blog post for more details on what you can do to get involved or how to make your Ember applications more accessible.

If you have accessibility related questions you can head on over to [the community Discord chat](https://discordapp.com/invite/emberjs) in the #topic-a11y channel, and get answers and help right away.

Or, if you're interested in getting involved in Ember's A11y Strike Team, checkout the #st-a11y channel on Discord, and let us know! The meetings are also open to anyone who wants to attend.

Big shout out to [Mel Sumner (@MelSumner)](https://github.com/MelSumner) for putting all that valuable accessiblity-related information together!

---

## ["My Experience with Ember.js" video series 🎥](https://www.youtube.com/watch?v=jkb1At1pk2E)

[Cal Woolgar (@calWoolgar)](https://github.com/calWoolgar) has kicked off a new video series "My Experience with Ember.js", where he breaks down the basics of Ember.

<!--alex ignore easy-->
The first video [What is Ember.js?](https://www.youtube.com/watch?v=jkb1At1pk2E) explains the [Handlebars templating language](https://handlebarsjs.com/) and how it separates your JavaScript from HTML. Cal also touches on [ember-cli](https://ember-cli.com/), and how it enabled you to create a new application easily.

Cal aims to make his videos **short and sweet** 🍭 so that someone learning can reference something in bite-sized pieces. Look forward to what's next from Cal! 👏

---

## [The prettiest Ember RFC 💅](https://github.com/emberjs/rfcs/pull/628)

By default, [ember-cli](https://cli.emberjs.com/release/) already provides developers with plenty of tools and settings for linting and formatting of app code via **eslint** and [**ember-template-lint**](https://github.com/ember-template-lint/ember-template-lint). But what if you could come to an agreement on some of the most significant bike-shedding disputes in your team once and for all, including discussions about tabs vs. spaces or the need for the newline at the end of a file?

In the [Request for Comments (RFC)](https://github.com/emberjs/rfcs/pull/628) we get to have a peek into the possible, **even prettier future for Ember codebases** already! The proposal suggests to add [Prettier - a multi-language, opiniated code-formatter -](https://prettier.io/) to Ember apps generated from ember-cli's `app` and `addon` blueprints.

<!--alex ignore period-->
Want to learn more about how this could help you and your team to collaborate on your code even better? Then be sure to [give the original RFC a read](https://github.com/emberjs/rfcs/blob/pretty-please!/text/0628-prettier.md) soon, as it entered the Final Comment Period (FCP) recently. And don't forget to post your questions and suggestions in [the comments below the RFC PR](https://github.com/emberjs/rfcs/pull/628), <span style="font-style: italic;">pretty please</span>!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/allthesignals" target="gh-user">@allthesignals</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/alexeykostevich" target="gh-user">@alexeykostevich</a>, <a href="https://github.com/sandstrom" target="gh-user">@sandstrom</a>, <a href="https://github.com/ansmonjol" target="gh-user">@ansmonjol</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/fivetanley" target="gh-user">@fivetanley</a> and <a href="https://github.com/CodingItWrong" target="gh-user">@CodingItWrong</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask readers' questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Matthew Roderick, Chris Ng, Amy Lam, Abhilash LR, Jared Galanis, Jessica Jordan and the Learning Team
