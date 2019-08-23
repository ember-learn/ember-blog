---
title: The Ember Times - Issue No. 112
author: Chris Ng, Isaac Lee, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/08/23-the-ember-times-issue-112.html"
responsive: true
---

Gi suilon Emberistas! 🐹

This week:
announcing the official Ember Octane release plan 🏎🐹,
watch talks from 1st Chennai EmberJS Meetup 🇮🇳,
read up on the fun state management blog post using Microstates 💡,
help improve the `EmberArray` documentation 👩‍💻👨‍💻,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [Ember Octane Is Coming 🏎🐹](https://blog.emberjs.com/2019/08/15/octane-release-plan.html)

The time has come: [Ember Octane](https://emberjs.com/editions/) is coming to your Ember application very soon!
As [recently announced in the official Ember Octane release plan](https://blog.emberjs.com/2019/08/15/octane-release-plan.html), the very first edition of Ember is going to be released at the same time as the planned release date of Ember v3.14.

But what does it mean? By the time Ember 3.14 is published, the framework will include all Octane-related features and enable them by default. Additionally, the "Octane way" will be the primary and recommended way to build Ember apps. This will also be reflected in Ember's official documentation ([API Docs](https://api.emberjs.com/ember/release) and [Guides](https://octane-guides-preview.emberjs.com/release/upgrading/editions/)) and migration tools.

Wanna learn more about what is going to happen between now and the time Ember Octane lands? Looking for support for migrating and testing your apps with the Octane feature set? Be sure to give the [official release plan a read](https://blog.emberjs.com/2019/08/15/octane-release-plan.html), join the discussion on the [#topic-octane-migration](https://discordapp.com/channels/480462759797063690/608346628163633192) channel on the [Ember Discord](https://discordapp.com/invite/zT3asNS) and **get ready for Octane**!


---

## [Watch Talks from 1st Chennai EmberJS Meetup 🇮🇳](https://www.youtube.com/playlist?list=PLh_rF0Qob_sx79YDqa4945EbOuly3AXX1)

On August 3, Chennai EmberJS featured 6 speakers at their inaugural Meetup: [@gokatz](https://github.com/gokatz), [@g13n](https://github.com/g13n), [@kandhavivekraj](https://github.com/kandhavivekraj), [@astronomersiva](https://github.com/astronomersiva), [@pranith024](https://twitter.com/pranith024), and [@rajasegar](https://github.com/rajasegar)! They covered various topics, including Ember Octane, tuning web performance, accessibility, differential bundling, JAM stack, and how ASTs (abstract syntax trees) fuel codemods and help us [auto-document Ember components](https://github.com/rajasegar/ember-docgen). 💖

You can [watch all six talks today on YouTube](https://www.youtube.com/playlist?list=PLh_rF0Qob_sx79YDqa4945EbOuly3AXX1). To learn more about Chennai EmberJS, you can visit their [website](https://chennaiemberjs.in/) and follow them on [Twitter](https://twitter.com/EmberChennai), [Meetup](https://www.meetup.com/Chennai-EmberJS/), and the [`#as-india`](https://discordapp.com/channels/480462759797063690/562648585980739616) channel on [Discord](https://discordapp.com/invite/zT3asNS)!

---

## [Fun State Management With Ember and Microstates 💡](https://medium.com/@brandynlbennett/fun-state-management-with-ember-and-microstates-e6027a9dedb9)

[@brandynbennett](https://github.com/brandynbennett) details his experience using [Microstates.js](https://github.com/microstates/microstates.js) as an alternative to [DDAU](https://discuss.emberjs.com/t/readers-questions-what-is-meant-by-the-term-data-down-actions-up/15311). He describes how him and his team created complex tables in their app's UI that requires a lot of state to be passed around. The DDAU strategy, in this scenario, was unwieldy due to the number of arguments needed to set and difficult to keep in sync as they had to refetch the data for each event such as a sort happens.

[Microstates.js](https://github.com/microstates/microstates.js) provided immutability so that any change to the state will make all the `didReceiveAttrs` hooks and computed properties update while also guarding it from being changed by child components. It also provided helpers and macros that would automatically update the component properties when the state has changed, eliminating the need to pass an action for each piece of state.

Read the [full blog post](https://medium.com/@brandynlbennett/fun-state-management-with-ember-and-microstates-e6027a9dedb9) to see the tradeoffs and potential pitfalls when state management is done with Ember and Microstates.

---

## [Help Improve the `EmberArray` documentation 👩‍💻👨‍💻](https://github.com/emberjs/ember.js/issues/18228)

[@locks](https://github.com/locks) asks for your help with improving the documentation for [`EmberArray`](https://api.emberjs.com/ember/release/classes/EmberArray). The goal is to review each method and property of `EmberArray` and see if we can provide a better explanation and code sample.

If you have time to help, please [visit the GitHub issue and create a pull request](https://github.com/emberjs/ember.js/issues/18228)!

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/hellomattio" target="gh-user">@hellomattio</a>, <a href="https://github.com/mukilane" target="gh-user">@mukilane</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/SYU15" target="gh-user">@SYU15</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/snewcomer" target="gh-user">@snewcomer</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/ansmonjol" target="gh-user">@ansmonjol</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/patricklx" target="gh-user">@patricklx</a>, <a href="https://github.com/pete-the-pete" target="gh-user">@pete-the-pete</a> and <a href="https://github.com/jenweber" target="gh-user">@jenweber</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jessica Jordan, the crowd and the Learning Team
