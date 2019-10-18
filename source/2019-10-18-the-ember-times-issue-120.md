---
title: The Ember Times - Issue No. 120
author: Isaac Lee, Jeldrik Hanschke, Anne-Greeth van Herwijnen, Pat O'Callaghan, Jessica Jordan, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/10/18-the-ember-times-issue-120.html"
responsive: true
---

🏄‍♀️ Emberistas! 🐹

Ember Bootstrap 3.0.0 Released 🎉,
dive into Octane features with EmberMap 📚, 
learn about ember-engines 📝 ,
help wanted for Ember Octane linting rules 🤖,

READMORE

---

## [Ember Bootstrap 3.0.0 Released 🎉](https://www.ember-bootstrap.com)

<!--alex ignore just-->
Just a few days ago, [Ember Bootstrap 3.0.0 was released](https://twitter.com/simonihmig/status/1182661298464739330). [Ember Bootstrap](https://www.ember-bootstrap.com) brings the Bootstrap library to Ember without requiring any of the Bootstrap JavaScript. Instead, it rebuilds the dynamic features of Bootstrap with native Ember Components.

The UI library enters the Octane-era with this new major version: It introduces full support of angle bracket component invocation syntax and an updated documentation. All components have been refactored to native classes.

Ember Bootstrap v3 drops support for some very old versions of Ember, but still supports 2.18+ to ease the migration path. The commitment to backwards compatibility introduced some technical challenges because Ember 2.18 isn't supported by [native class polyfill](https://github.com/pzuraq/ember-native-class-polyfill).

In addition, consumers should be able to extend components provided by the addon to customize them for their specific needs. This introduced another challenge since [a class field cannot be overwritten by a computed property](https://discordapp.com/channels/480462759797063690/486553598436573206/618527893009465349). A [`defaultValue` decorator](https://github.com/kaliber5/ember-bootstrap/blob/v3.0.0/addon/utils/default-decorator.js) was used to prevent a `Cannot set property foo ... which has only a getter` error.

In the end, Ember Bootstrap saw six release candidates and three and a half months until its new major release has been proven to be stable.

Besides dropping support for Ember <= 2.17 and Node 6, Ember Bootstrap v3 comes with some minor breaking changes affecting defaults. Please refer to [the changelog](https://www.ember-bootstrap.com/#/changelog) for a full list of all changes.

---

## [A New EmberMap Series: What's New in Ember 📚](https://embermap.com/topics/what-s-new-in-ember/)

This year, Ember released many new features that will all be a part of Ember Octane. While the [release notes](https://blog.emberjs.com/tags/releases.html) summarize the features well, you may have wondered still how to use them in your app.

To help you understand better, EmberMap started a series called [What's New in Ember](https://embermap.com/topics/what-s-new-in-ember/). Each episode will cover 1 new feature, starting with Ember 3.8.

In the first episode, [Sam Selikoff (@samselikoff)](https://github.com/samselikoff) shows how you can write a **modifier**. In particular, you will learn how to use Ember's **modifier manager** (this provides low-level, public APIs for customization) and dedicated **addons** (for high-level abstraction).

Be sure to check out the future episodes as they are released!

---

## [Ember Engines: The What, What Not and Why? – Part 1 📝](https://medium.com/developer-paradise/ember-engines-the-what-what-not-and-when-part-1-49187c949db5)
  
If you have ever heard something about **ember-engines** but you need to refresh your knowledge, or they are completely new to you, [@abhilashlr](https://github.com/abhilashlr) wrote a [blog post](https://medium.com/developer-paradise/ember-engines-the-what-what-not-and-when-part-1-49187c949db5) about them. Engines allow multiple logical applications to be composed together into a single application from the user's perspective, while satisfying the separation of concerns convention for the developer. This first [post](https://medium.com/developer-paradise/ember-engines-the-what-what-not-and-when-part-1-49187c949db5) nicely establishes what an ember-engine is, and emphasizes what it is not. 

Stay tuned for part two on how [@abhilashlr](https://github.com/abhilashlr) used ember-engines in his app.

---

## [Help Wanted For Ember Octane Linting Rules 🤖](https://github.com/ember-cli/eslint-plugin-ember/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22Help+Wanted%22+Octane+Rule)

With Ember Octane's official release imminent, there's an effort to create new and improve existing Octane-specific linting rules. These will be used to help educate the community about the new APIs as well as help make migrating existing "Classic" code easier. A number of improvements have been proposed and issues have been cut for each of them on the [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22Help+Wanted%22+Octane+Rule) and [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint/issues?utf8=%E2%9C%93&q=+project%3Aember-template-lint%2F1+label%3A%22help+wanted%22++sort%3Aupdated-desc) repos.

If you're interested in helping out, comment on the issue you'd like to take and submit a PR.

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

## [#embertimes 📰](https://blog.emberjs.com/tags/newsletter.html)

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Isaac Lee, Jeldrik Hanschke, Anne-Greeth van Herwijnen, Pat O'Callaghan, Jessica Jordan, Amy Lam and the Learning Team
