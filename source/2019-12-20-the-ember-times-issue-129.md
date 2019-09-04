---
title: The Ember Times - Issue No. 129
author: Chris Ng, Amy Lam, Isaac Lee, Godfrey Chan, Jessica Jordan
tags: Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/12/20-the-ember-times-issue-129.html"
responsive: true
---

Happy Holidays, Emberistas! 🐹🌲⛄️

Ember Octane is here 🐹🎉,
new ember-autofocus-modifier 💡,
3 new RFCs for template helpers 3️⃣,
ember-apollo-client v2 released 🎉
and join us for the last 11 days of DecEmber 1️⃣1️⃣!

READMORE

---

## [Octane Is Here 🎉](https://blog.emberjs.com/2019/12/20/octane-is-here.html)

[Ember 3.15](https://blog.emberjs.com/2019/12/20/ember-3-15-released.html) was released this week. In addition to the usual new features, improvements and bug fixes, this release also marks the official release of Ember's first edition - **Ember Octane**!

But what is Ember Octane? Ember Octane is the **new, recommended way** for developers **to build Ember applications** and **addons**.

<!--alex ignore easy-->
Octane features a new reactivity model, a renewed practice of building components and a stronger focus on HTML driven web development than ever before. It aims to make the development of performant Ember apps not only more easy and productive, but also **more fun** right from the start. And on top of that, Ember Octane is **fully opt-in** and **interoperable** for existing Ember apps - which means you can try out the new way of building modern Ember Octane apps gradually, without having to rewrite your entire app today.

Want to know all about Ember Octane? Learn more about what's new in Octane and how to get started [in the official Ember Octane release announcement](https://blog.emberjs.com/2019/12/20/octane-is-here.html) by [Yehuda Katz (@wycats)](https://github.com/wycats)! Need help? Check out the **#topic-octane-migration** channel on the [Ember Discord](https://discordapp.com/invite/emberjs)!

---

## [New ember-autofocus-modifier 💡](https://medium.com/qonto-engineering/autofocus-modifier-improving-our-component-apis-fd589b98f4e)

While building an autofocus feature for their components, Qonto engineers were also able to improve their APIs. [Cyrille David (@dcyriller)](https://github.com/dcyriller) and team wanted to add autofocus to several components across two apps. For example, both their one-time-password input and their email input component needed autofocus. Since mixins are no longer recommended in the Ember ecosystem, Cyrille went with modifiers. [And they blogged about their experience here!](https://medium.com/qonto-engineering/autofocus-modifier-improving-our-component-apis-fd589b98f4e)

Modifiers are a new feature in [the recently released Ember Octane edition](https://blog.emberjs.com/2019/12/20/octane-is-here.html). They allow for **sharing code between components**, similar to directives in Vue or Angular. We revisited [Chris Garrett (@pzuraq)](https://github.com/pzuraq)'s blog [Coming Soon in Ember Octane - Part 4: Modifiers](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html) and the [new Octane Guides: Out-of-Component-Modifications](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_out-of-component-modifications) to learn more!

Qonto wrapped up the code in a small addon, [`ember-autofocus-modifier`](https://github.com/qonto/ember-autofocus-modifier). You can use the code as-is, or copy the [snippet code](https://github.com/qonto/ember-autofocus-modifier/blob/v0.0.1/addon/modifiers/autofocus.js) and experiment with creating your own modifier.

---

## [Three New RFCs to Add New Template Helpers 3️⃣](https://github.com/emberjs/rfcs/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Acibernox+templates)

[Miguel Camba @cibernox](https://github.com/cibernox) opened a slew of RFCs around adding new built-in operators to Ember templates. The idea comes from functionality provided in [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers) and is a subset of his [other RFC](https://github.com/emberjs/rfcs/pull/388) to add basic helpers to Ember templates.

The three template helper RFCs Miguel proposed are the following:

- [Adding Equality Operators](https://github.com/emberjs/rfcs/pull/560) such as the `{{eq}}` and `{{neq}}` helpers
- [Adding Numeric Comparison Operators](https://github.com/emberjs/rfcs/pull/561), specifically the `{{lt}}` and `{{gt}}` helpers
- [Adding Logical Operators](https://github.com/emberjs/rfcs/pull/562) which are the `{{and}}`, `{{or}}` and `{{not}}` helpers

Help get this off the ground by adding your input to these changes today!

---

## [ember-apollo-client v2 Released 🎉](https://twitter.com/josemarluedke/status/1204908862676975617)

After a year in beta cycle, [ember-apollo-client](https://github.com/ember-graphql/ember-apollo-client/) celebrates a new major release! Version 2 comes with several enhanced features and follows modern practices in Ember and the JavaScript ecosystem. To learn more about v2, please see the [changelog](https://github.com/ember-graphql/ember-apollo-client/releases/tag/v2.0.0).

We extend our thanks to all contributors: [@FabHof](https://github.com/FabHof), [@brunoocasali](https://github.com/brunoocasali), [@buschtoens](https://github.com/buschtoens), [@dmzza](https://github.com/dmzza), [@vsergiu93](https://github.com/vsergiu93), [@lstrzebinczyk](https://github.com/lstrzebinczyk), [@jasonmit](https://github.com/jasonmit), [@coladarci](https://github.com/coladarci), [@jgwhite](https://github.com/jgwhite), [@christophermlne](https://github.com/christophermlne), [@bgentry](https://github.com/bgentry), and [@josemarluedke](https://github.com/josemarluedke).

If you would like to build an Ember + GraphQL app, we encourage you to try out [ember-apollo-client](https://github.com/ember-graphql/ember-apollo-client) today!

---

## [The Final Countdown with DecEmber 📆](https://blog.emberjs.com/tags/december.html)

With the series **DecEmber series "Countdown to the New Year: 31 Days of Ember addons"** the community is featuring their favorite
Ember addons on a daily basis until the end of 2019 - which means, there are **only 11 more days** to go! Follow the DecEmber series [on the Ember blog](https://blog.emberjs.com/tags/december.html)!

This week, community members wrote about [their love ❤️ for powerful select UIs](https://blog.emberjs.com/2019/12/14/countdown-to-the-new-year-ember-power-select.html), the [beauty of well-formatted templates](https://blog.emberjs.com/2019/12/19/countdown-to-the-new-year-ember-template-lint.html), the [joy of sharing your app beyond language barriers](https://blog.emberjs.com/2019/12/16/countdown-to-the-new-year-2019-ember-intl.html) and how amazing Ember addons help them with writing amazing web applications!

Do you want to share your joy for a particular addon yourself? [Sign up for any of the open issues with the DecEmber label](https://github.com/ember-learn/ember-blog/labels/decEmber) and take a look [at our contribution guide](https://github.com/ember-learn/ember-blog/blob/master/source/december-2019-instructions.md) to get started. For questions or feedback, reach out to us on the **#dev-ember-learning** channel on the [Ember Discord](https://discordapp.com/invite/emberjs) or ping [Melanie Sumner (@MelSumner)](https://github.com/MelSumner), [Jen Weber (@jenweber)](https://github.com/jenweber) or [Jessica Jordan (@jessica-jordan)](https://github.com/jessica-jordan).

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/hjdivad" target="gh-user">@hjdivad</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/pichfl" target="gh-user">@pichfl</a>, <a href="https://github.com/jessica-jordan" target="gh-user">@jessica-jordan</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/acorncom" target="gh-user">@acorncom</a>, <a href="https://github.com/bartocc" target="gh-user">@bartocc</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/patricklx" target="gh-user">@patricklx</a> and <a href="https://github.com/craigteegarden" target="gh-user">@craigteegarden</a>  for their contributions to Ember and related repositories! 💖</p>

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


## [Happy Holidays from The Ember Times Team 🐹](https://blog.emberjs.com/tags/newsletter)

The Ember Times team wishes you a pleasant, joyful holiday season (and if you don't celebrate any big holidays this month, we wish you a pleasant and joyful time!) with your loved ones, family, friends and animal companions!🌲⛄️🎆

<!--alex ignore special-->
Since most us writers at The Ember Times are looking forward to the holiday season as well, we will be away for a short winter break; on **January 10, 2020** we are back with the next Ember Times and an **exclusive special edition**!

---

Enjoy the rest of the year and see you over in the new one! ✨

Be kind,

Chris Ng, Amy Lam, Isaac Lee, Godfrey Chan, Jessica Jordan and the Learning Team
