---
title: The Ember Times - Issue No. 91
author: Chris Ng, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/03/30-the-ember-times-issue-91.html"
responsive: true
---

හෙලෝ Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
read some RFCs around extending `EmberObject`💡

---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## RFCs Around EmberObject Base Class 💡

[@pzuraq](https://github.com/pzuraq) opened 2 new RFCs around using the `EmberObject` base class.

The [@classic Decorator RFC](https://github.com/emberjs/rfcs/pull/468) adds a set of warnings for users who adopt native class syntax with `EmberObject` base classes. By using the `@classic` decorator, the warnings around edge cases such as `init` vs `constructor` or use of `Mixins` are turned off. These warnings are used as a guide for components to slowly migrate away from extending from `EmberObject` to more standalone such as `GlimmerComponent`.

The [Injection Hook Normalization RFC](https://github.com/emberjs/rfcs/pull/467) supercedes the submitted [Classic Class Owner Tunnel RFC](https://github.com/emberjs/rfcs/pull/451). This RFC looks to answer how we should handle dependency injection (DI) when we are not extending from the `EmberObject` base class. It proposes to assign values during construction by normalising the assignment of the `owner`, access to injected properties, and follow the same conventions as other popular DI frameworks.

Read more about [@classic Decorator RFC](https://github.com/emberjs/rfcs/pull/468) and [Injection Hook Normalization RFC](https://github.com/emberjs/rfcs/pull/467) on GitHub!

---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---


## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, the crowd and the Learning Team
