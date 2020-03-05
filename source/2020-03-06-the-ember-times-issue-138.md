---
title: The Ember Times - Issue No. 138
author: Abhilash, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/03/06-the-ember-times-issue-138.html"
responsive: true
---

<!--alex ignore womens-->
Happy International Women's Day, Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Splitting & migrating your Ember project to a Monorepo 🐘,
the possible future of app hooks and testing directories in Ember 📂,
READMORE

---

## [Splitting & migrating your Ember project to a Monorepo 🐘](https://www.mylittletechlife.com/ember-monorepo)

[Robin Philip Thomas (@MalayaliRobz)](https://github.com/MalayaliRobz) details his experience having worked with a huge codebase and the difficulties he and his team had faced with a massive monolith and how they split their codebase to multiple engines and add-ons. While that wasn't enough, he goes on to explain how dependencies caused problems related to version upgrades in each repository. As a result, he talks about how he arrived at using Yarn workspaces and how [Lerna](https://lerna.js.org/) solves those problems.

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Discuss the future of app hooks and testing directories in Ember 📂](https://github.com/emberjs/rfcs/pulls?q=is%3Aopen+is%3Apr+author%3Amehulkar+575+578)

Since the early days of the framework, [the Ember CLI](https://ember-cli.com/) has been a major factor for productivity and great developer ergonomics when developing Ember apps. And a while ago [Mehul Kar (@mehulkar)](https://github.com/mehulkar) submitted **two new Requests for Comments (RFCs)** to suggest even more improvements for the favorite productivity tool of any Emberista!

In [RFC#575: Test Directories](https://github.com/emberjs/rfcs/pull/575) a new directory structure for testing is proposed. The change of test type names in the [official Ember testing guides](https://guides.emberjs.com/release/testing/test-types/) that followed the implementation of [RFC#232: Simplify QUnit Testing API](https://emberjs.github.io/rfcs/0232-simplify-qunit-testing-api.html) inspires the new directory format: f.e. files for testing component functionality used to be called `integration` tests in the former Ember QUnit testing API, and have been renamed to `rendering` tests. To reflect this change in the documentation, the new RFC suggests to move DOM-focused component tests from `tests/integration/**-test.js` to `tests/rendering/**-test.js` accordingly. You can learn more about the detailed design [by reading the original proposal](https://github.com/emberjs/rfcs/pull/575).

With [RFC#578: Ability to hook into build process without addons](https://github.com/emberjs/rfcs/pull/578) a suggestion for more developer flexibility for an app's build process is made. The proposal suggests, that `treeFor` hooks provided by [BroccoliJS](https://broccoli.build/) - a core library for powering the Ember CLI build pipeline - should be available via the `options` parameter of an Ember app instance. This would allow future Ember developers to leverage `treeFor` hooks in an app itself without developing a supplementary addon (which is currently the only way to use these build pipeline APIs directly). To learn more about the motivation behind this RFC, be sure to check out the [pull request on Github](https://github.com/emberjs/rfcs/pull/578) and feel free to leave your thoughts and questions in the comments below.

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Abhilash, Jessica Jordan, the crowd and the Learning Team
