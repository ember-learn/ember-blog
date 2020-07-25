---
title: The Ember Times - Issue No. 157
author: Chris Ng, Michael Donaldson, Mehul Kar, Isaac Lee, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/07/24-the-ember-times-issue-157.html"
responsive: true
---

👋 Emberistas! 🐹

LexasCMS releases official support for JSON:API and more 🎉,
Deprecation Stages RFC is out 🚀,
tweaking UI behavior with Ember Data queries 📝,
learn what reactivity means with an example 💡,
read the blog post series of lessons learned working with Ember 📔,
and last, but not least, "Ember Data in the Wild" Octane edition is here 📣!

READMORE

---

## [LexasCMS releases official support for JSON:API and more 🎉](https://www.lexascms.com/blog/introducing-the-jsonapi-content-delivery-api/)

Have you been looking to integrate a headless CMS with your Ember.js application?

LexasCMS recently shipped a new **JSON:API compliant content delivery API** which aims to make this integration easier than ever before.

Read the [release blog post](https://www.lexascms.com/blog/introducing-the-jsonapi-content-delivery-api/) for more information.

### [New Ember Data addon for LexasCMS released](https://github.com/LexasCMS/ember-data-lexascms)

<!--alex ignore easy-->
[Michael Donaldson (@mike183)](https://www.github.com/mike183) has published the new **ember-data-lexascms** addon for easily integrating LexasCMS with any Ember.js application.

Simply install the addon, configure your space ID and application adapters/serializers, and begin pulling content directly from LexasCMS using Ember Data.

You can visit the addon's [GitHub repo](https://github.com/LexasCMS/ember-data-lexascms) for more details.

### [Ember.js integration guide for LexasCMS](https://www.lexascms.com/docs/integrations/ember-js/)

A new integration guide for Ember.js has been published in the LexasCMS documentation.

This guide will show you how simple it is to begin **pulling content from LexasCMS** into your Ember.js application.

Check out the [full integration guide](https://www.lexascms.com/docs/integrations/ember-js/) on the LexasCMS website.

### [Simple blog website using Ember.js and LexasCMS](https://github.com/LexasCMS/example-ember-blog)

[Michael Donaldson (@mike183)](https://www.github.com/mike183) has created an example of a simple blog website which has been **developed using Ember.js and LexasCMS**.

You can view the source code in the [GitHub repo](https://github.com/LexasCMS/example-ember-blog), and even use the project to quickly deploy your very own blog using the 'Deploy to Netlify' button in the repo's README.

---

## [Deprecation Stages RFC is out 🚀](https://github.com/emberjs/rfcs/pull/649)

A new RFC takes Ember's promise of **stability without stagnation** to the next level
by introducing "Deprecation Stages". After multiple months of weekly discussions,
the [Deprecation Process strike team](https://discord.com/channels/480462759797063690/690649313457602651) details a process to introduce deprecations
that will both allow early adopters to move <span style="font-style: italic;">faster</span> and larger apps to wait for the
dust to settle. [Check out the RFC and weigh in!](https://github.com/emberjs/rfcs/pull/649)

---

## [Tweaking UI behavior with Ember Data queries 📝](https://codingitwrong.com/2020/06/23/ember-list.html)

[Josh Justice (@CodingItWrong)](https://github.com/codingitwrong) has a new [blog post](https://codingitwrong.com/2020/06/23/ember-list.html) about Ember Data, his <span style="font-style: italic;">favorite</span> part of Ember.js. Josh writes about building a todo list application, [Surely](https://github.com/CodingItWrong/surely-ember). He touches on querying with JSON:API, the basics of working with the model, sorting with Ember Data, the nuances of reloading, and more. Check out [Tweaking UI behavior with Ember Data queries] and the accompanying [GitHub repo](https://github.com/CodingItWrong/surely-ember) to learn more about putting Ember Data to use! 

---

## [What is reactivity? 💡](https://dev.to/theaswathprabhu/what-is-reactivity-116f)

<!-- alex ignore just -->
A key feature of Ember Octane is the new **reactivity** model. In essence, reactivity is **deciding what to rerender and when**. A good reactivity model can help us focus on business logic because the rerender _just works_.

To illustrate this point, [Aswathprabhu R.](https://dev.to/theaswathprabhu) shared [What is Reactivity?](https://dev.to/theaswathprabhu/what-is-reactivity-116f) on his blog. You will learn what updating the DOM manually may look like in vanilla JavaScript, then how frameworks like React and [Ember](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/) help separate the rerender logic.

We encourage you to check out Aswathprabhu's [explanation of reactivity](https://dev.to/theaswathprabhu/what-is-reactivity-116f) today!

---

## [Blog post series of lessons learned working with Ember 📔](https://mono.company/frontend/getting-to-grips-with-ember/)

[Johan Ronsse (@Wolfr)](https://github.com/Wolfr) wrote a series of blog posts on working with Ember especially coming from a [designer’s point of view](https://mono.company/frontend/working-within-ember-designer-point-of-view/). The blog explains how [angle bracket and other Octane features](https://mono.company/frontend/getting-to-grips-with-ember/) make invoking components feel like writing HTML for designers.

The blog also showcases a [button component](https://mono.company/frontend/doing-more-with-a-smaller-team-an-ember-octane-example/) to illustrate how a good public interface helps end users be effective. The code that they have to write is simpler, which prevents them from introducing errors.

Finally, the last blog post covers [nifty tools](https://mono.company/frontend/working-within-ember-designer-point-of-view/) that the Ember ecosystem provides. Addons make the complicated understandable and codemods help everyone move to the latest Ember release as soon as it becomes available.

Read all three blogs in the series below:

- [Getting to grips with Ember](https://mono.company/frontend/getting-to-grips-with-ember/)
- [Doing more with a smaller team: a button component example](https://mono.company/frontend/doing-more-with-a-smaller-team-an-ember-octane-example/)
- [Working in an Ember codebase from a designer point of view](https://mono.company/frontend/working-within-ember-designer-point-of-view/)

---

## ["Ember Data in the Wild" Octane edition is here 📣](https://twitter.com/iamdtang/status/1286705740019716097)

<!-- alex ignore tang -->
Hot off the press is the 2nd edition of [David Tang (@skaterdav85)](https://github.com/skaterdav85)'s [Ember Data in the Wild](https://leanpub.com/emberdatainthewild/c/octane-edition). 🎊

The 2nd edition presents new and updated content that is tailored to Ember Octane. If you are interested in learning more about Ember Data, be sure to check out [David's book](https://leanpub.com/emberdatainthewild/c/octane-edition)! You can find the complete Table of Contents on the purchase website.

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/jordpo" target="gh-user">@jordpo</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/kiwiupover" target="gh-user">@kiwiupover</a>, <a href="https://github.com/jad359" target="gh-user">@jad359</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/bmish" target="gh-user">@bmish</a>, <a href="https://github.com/lindyhopchris" target="gh-user">@lindyhopchris</a>, <a href="https://github.com/gibso" target="gh-user">@gibso</a>, <a href="https://github.com/mehulkar" target="gh-user">@mehulkar</a>, <a href="https://github.com/simonc" target="gh-user">@simonc</a>, <a href="https://github.com/ijlee2" target="gh-user">@ijlee2</a>, <a href="https://github.com/chrisrng" target="gh-user">@chrisrng</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/mike183" target="gh-user">@mike183</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/knownasilya" target="gh-user">@knownasilya</a>, <a href="https://github.com/amessinger" target="gh-user">@amessinger</a>, <a href="https://github.com/roncodes" target="gh-user">@roncodes</a>, <a href="https://github.com/lenoraporter" target="gh-user">@lenoraporter</a>, <a href="https://github.com/jaredgalanis" target="gh-user">@jaredgalanis</a>, <a href="https://github.com/kategengler" target="gh-user">@kategengler</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/JoaoDsv" target="gh-user">@JoaoDsv</a>, <a href="https://github.com/akankshadharkar" target="gh-user">@akankshadharkar</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/richgt" target="gh-user">@richgt</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/SYU15" target="gh-user">@SYU15</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Michael Donaldson, Mehul Kar, Isaac Lee, Amy Lam, and the Learning Team
