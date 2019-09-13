---
title: The Ember Times - Issue No. 115
author: Chris Ng, Isaac Lee, Jessica Jordan, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/09/13-the-ember-times-issue-115.html"
responsive: true
---

👋 Embereños! This week: Meet `@model` for route templates 🆕,
share your thoughts on Apple Music being an Ember app 🍎,
contribute to Octanify allthethings 📝,
a designer's & developer's story of transitioning to Ember ⚛️➡️🐹,
and celebrate the 4.0 release of Ember Sinon QUnit 🎉!

---

## [Meet `@model` for Route Templates 🆕](https://github.com/emberjs/rfcs/blob/ac27abbd1729cd61b67465eee4c8096bb47501da/text/0523-model-argument-for-route-templates.md)

Starting with Ember Octane (3.14), you can use a **named argument**, `@model`, in the route template to refer to your data from the `model()` hook. The [Ember Octane Guides](https://octane-guides-preview.emberjs.com/) have been [updated](https://github.com/ember-learn/guides-source/pull/1044) to show uses of `@model`.

```handlebars
<h2>List of Scientists</h2>

<ul>
  {{#each @model as |scientist|}}
    <li>{{scientist}}</li>
  {{/each}}
</ul>
```

[`@model` was introduced](https://github.com/emberjs/rfcs/blob/ac27abbd1729cd61b67465eee4c8096bb47501da/text/0523-model-argument-for-route-templates.md) to help new developers quickly learn templates. By avoiding `this.model`, they would not need to understand another concept—the controller—to build their first Octane app. By using a named argument, we can also reinforce the idea that `@` is used to denote things that are "passed as arguments" to the template.

You can [try out `@model` now on canary](https://github.com/emberjs/ember.js/pull/18363/files), or wait for 3.14 beta next week!

---

## [Apple Music Launches an Ember App 🍎](https://discuss.emberjs.com/t/apple-music-beta-is-an-ember-app/17026)

The Apple Music web application [was launched](https://www.theverge.com/2019/9/5/20851576/apple-music-web-player-interface-beta-browser-streaming) for public beta for subscribers at [beta.music.apple.com](https://beta.music.apple.com). [Through](https://www.reddit.com/r/webdev/comments/d0hdeo/the_new_official_apple_music_app_for_the_web_is/?utm_source=ifttt) [several](https://www.reddit.com/r/emberjs/comments/d06pcn/new_apple_music_web_app_built_in_ember/) [reports](https://www.linkedin.com/feed/update/urn:li:activity:6575525024327884800/), it was [confirmed](https://www.linkedin.com/feed/update/urn:li:activity:6575756074194993152/) that the new Apple Music website is an Ember application. Furthermore, the new [tv.apple.com](https://tv.apple.com) landing and content pages are also [built with Ember](https://twitter.com/mehulkar/status/1171579484115353605)!

[Share your thoughts](https://discuss.emberjs.com/t/apple-music-beta-is-an-ember-app/17026) on having more high profile examples of Ember applications!

---

## [API Doc Updates 📝](https://github.com/emberjs/ember.js/pulls?utf8=✓&q=is%3Apr+is%3Aclosed+%5BDOC%5D)

Thanks to [@locks](https://github.com/locks) and team for working on [Octanify-ing the API docs](https://github.com/emberjs/ember.js/pulls?utf8=✓&q=is%3Apr+is%3Aclosed+%5BDOC%5D)! These documentation upgrades are part of the [Quest Issue](https://github.com/emberjs/ember.js/issues/18250) to update the API docs to show Octane and Native Classes. [@jenweber](https://github.com/jenweber) has provided **detailed step-by-step instructions**, a YUIDoc styleguide, and some examples on the [Quest Issue](https://github.com/emberjs/ember.js/issues/18250), encouraging interested contributors to post in [#dev-ember-learning](https://discordapp.com/channels/480462759797063690/480777444203429888) on the [Ember Discord](https://discordapp.com/invite/zT3asNS) with any questions. 

Another API docs issue that is gaining steam is [Improve documentation of EmberArray](https://github.com/emberjs/ember.js/issues/18228). Going through [http://api.emberjs.com/ember/release/classes/EmberArray](http://api.emberjs.com/ember/release/classes/EmberArray), you will notice that some of the entries have minimal documentation and no code sample. The goal is to review each entry, add code samples where missing, and optionally improve the prose. Comment on the thread in the [EmberArray issue](https://github.com/emberjs/ember.js/issues/18228) to contribute. 

For even more ways to get involved in the open source community, check out the [Ember Help Wanted App](https://help-wanted.emberjs.com/)!
  
---

## [What Makes the Transition to Ember Worthwhile: A New Community Member's Perspective 🐹](https://twitter.com/lenoraporter_/status/1170145563549061122)

In a recent [tweet](https://twitter.com/lenoraporter_/status/1170145563549061122), Senior Product Designer [Lenora Porter (@lenoraporter_)](https://twitter.com/lenoraporter_)
shared a [video](https://www.instagram.com/tv/B2CCM60AOZG/?igshid=12ivaiobj1y8h) to pitch the **most interesting learnings** about Ember to those transitioning from other tech stacks.

Lenora, who has prior experience in React, talks about useful learning resources for those starting out Ember and what makes the transition worthwhile. In addition to Convention over Configuration and integrated tooling, she highlights how a supportive community makes learning Ember very straightforward.

Be sure to check out [the full video](https://www.instagram.com/tv/B2CCM60AOZG/?igshid=12ivaiobj1y8h) and share with your JavaScript friends!

---

## [Ember Sinon QUnit 4.0 Released 🎉](https://twitter.com/JordanHawker/status/1170107247118053376)

[Jordan Hawker (@elwayman02)](https://github.com/elwayman02) and [Steve Calvert (@scalvert)](https://github.com/scalvert) teamed up to bring us the best [Sinon.js](https://sinonjs.org/) experience possible. 💞

Thanks to their work, [ember-sinon-qunit v4](https://github.com/elwayman02/ember-sinon-qunit) allows us to do a one-time setup, use the `sinon` object directly in our tests, and never worry about cleaning up mocks after the tests are run. To learn more about the motivation for change and the new syntax, you can check out [Jordan's blog post](https://www.jordanhawker.com/p/187541610821) and the [addon's README file](https://github.com/elwayman02/ember-sinon-qunit#usage).

If you have been using Steve's [ember-sinon-sandbox](https://github.com/scalvert/ember-sinon-sandbox) or [ember-sinon-sinoff](https://github.com/scalvert/ember-sinon-sinoff), please check the [README file](https://github.com/elwayman02/ember-sinon-qunit#migrating-to-ember-sinon-qunit) to choose your migration path.

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/stefanpenner" target="gh-user">@stefanpenner</a>, <a href="https://github.com/happyvig" target="gh-user">@happyvig</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/imkathir" target="gh-user">@imkathir</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/wycats" target="gh-user">@wycats</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/bertdeblock" target="gh-user">@bertdeblock</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jessica Jordan, Amy Lam and the Learning Team
