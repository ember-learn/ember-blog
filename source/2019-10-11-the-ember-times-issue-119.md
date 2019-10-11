---
title: The Ember Times - Issue No. 119
author: Chris Ng, Isaac Lee, Jessica Jordan, Jared Galanis, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/10/11-the-ember-times-issue-119.html"
responsive: true
---

✌️ Emberistas! 🐹

Read the blog post on handling Promises and UI states with Ember.js 🔄,
learn how Ember has helped Intercom evolve since 2014 📖,
a mutable future with Ember Octane 🐹🏎,
and Ember and GraphQL: a quick example 📹.
READMORE

---

## [Promises and UI States in Ember.js 🔄](https://embersteps.com/promises-and-ui-states-in-ember-js/)

[Sabin Hertanu @herzzanu](https://github.com/herzzanu) wrote a [blog post](https://embersteps.com/promises-and-ui-states-in-ember-js/) on handling promises and UI states with Ember. Examples of this range from providing loading states when sending a post request to enabling complicated behaviour such as a backoff period before being able to interact with the UI again.

The idea was to write promise-based operations as [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) using the provided [ember-concurrency](http://ember-concurrency.com) APIs.

Read the [full blog post](https://embersteps.com/promises-and-ui-states-in-ember-js/) for more details!

---

## [Ember and GraphQL: A Quick Example 📹](https://www.youtube.com/watch?v=YxRvXgDIHW8)

Watch an introduction to using **GraphQL with Ember.js** in [Rocky Neurock @jneurock](https://github.com/jneurock)'s new video! The YouTube video ⚡️quickly ⚡️ demonstrates how to get up and running with Ember.js, GraphQL, Apollo and EmberCLI Mirage.

<!--alex ignore just-->
If you've been interested in learning how to set up an application with GraphQL and Ember.js, or are just looking to learn a little more about GraphQL and Apollo and the relevant syntax, this video is a super nice resource. Plus, you get to see how EmberCLI Mirage can handle GraphQL queries! ✨

You can [watch the video in full here](https://www.youtube.com/watch?v=YxRvXgDIHW8).

---

## [The Evolution of Ember.js at Intercom 📖](https://www.youtube.com/watch?v=NoCxHTxpmSQ)

At [JSDayIE 2019](https://www.jsday.org/), [Gavin Joyce (@GavinJoyce)](https://github.com/GavinJoyce) presented a talk on how the adoption of Ember has helped [Intercom](https://www.intercom.com/) grow over the years since 2014.

In particular, Gavin attributed these four keys to success:

- Shared core values with Ember
- Ability to empower new devs to ship soon meaningful features
- Confidence in upgrades thanks to Ember's stability without stagnation
- Ember's commitment to continuous improvement (case study in rendering engine)

He closed the talk by giving a preview of [Ember Octane](https://emberjs.com/editions/octane)'s native JS approach: "I don't know what you would remove from that. [...] Everything has a purpose, and it's beautifully minimal and clean." 💙

Please [have a look at Gavin's talk](https://www.youtube.com/watch?v=NoCxHTxpmSQ) and share!

---

## [A Mutable, Octane Powered Future 🐹🏎](https://www.pzuraq.com/on-mut-and-2-way-binding/)

A handy **helper** has existed in the framework's API since the early days of Ember 1.13. It allows to specify that a certain value - which was passed down by a parent component or controller - **may be mutated** by a child component. This is [the so-called `{{mut}}` helper](https://api.emberjs.com/ember/release/classes/Ember.Templates.helpers/methods/mut?anchor=mut).

Most Ember developers are familiar with the usage of `{{mut}}` from scenarios as the following one:

```handlebars
<!-- app/templates/components/my-component.hbs -->
<input
  value={{@passedDownValue}}
  oninput={{action (mut @passedDownValue) value="target.value"}}
/>
```

In combination with the `{{action}}` helper, `{{mut}}` allows developers to create a useful, implicit and template-only **shorthand** for a setter function, that otherwise would require an explicit definition in the component class itself:


```js
// app/components/my-component.js
import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateValue(newValue) {
      this.set('passedDownValue', newValue);
    },
  },
});
```

```handlebars
<!-- app/templates/components/my-component.hbs -->
<input
  value={{@passedDownValue}}
  oninput={{action "updateValue" value="target.value"}}
/>
```

With [Ember Octane coming soon](https://blog.emberjs.com/2019/08/15/octane-release-plan.html) and the new Glimmer Component API [enforcing unidirectional data flow](https://blog.emberjs.com/2019/03/14/coming-soon-in-ember-octane-part-5.html), many developers might wonder how the `{{mut}}` helper still fits into the overall picture. Are there any issues with using `{{mut}}` in future Octane apps? And are there still plans to [deprecate the helper](https://github.com/emberjs/rfcs/issues/538) or 2-way-binding APIs from the framework in general?

<!--alex ignore remain-->
You will find answers to all of these questions in an [excellent deep-dive into `mut` and 2-way-bindings](https://www.pzuraq.com/on-mut-and-2-way-binding/) by [Chris Garrett (@pzuraq)](https://github.com/pzuraq). This blog post will clarify which data-binding framework APIs will remain for the foreseeable future (including Ember Octane) and which questions are still open in regards to 2-way binding components commonly used in Ember apps today.

Be sure to check out [the article](https://www.pzuraq.com/on-mut-and-2-way-binding/), share it with your colleagues and Ember friends and join the discussion on [the Ember Discord](https://discordapp.com/invite/zT3asNS)!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/jacojoubert" target="gh-user">@jacojoubert</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/ghislaineguerin" target="gh-user">@ghislaineguerin</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/Frozenfire92" target="gh-user">@Frozenfire92</a>, <a href="https://github.com/Alonski" target="gh-user">@Alonski</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/richard-viney" target="gh-user">@richard-viney</a>, <a href="https://github.com/tomdale" target="gh-user">@tomdale</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/Panman8201" target="gh-user">@Panman8201</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a> and <a href="https://github.com/wongpeiyi" target="gh-user">@wongpeiyi</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jessica Jordan, Jared Galanis, Amy Lam and the Learning Team
