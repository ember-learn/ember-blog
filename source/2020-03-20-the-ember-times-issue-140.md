---
title: The Ember Times - Issue No. 140
author: Chris Ng, Jessica Jordan, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/03/20-the-ember-times-issue-140.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Read about testing best practices on the Ember Testing Guide 📗,
comment on the co-located test RFC ⛓,
embrace easier release management for your apps 📦🙌,
Learn how to add CI with GitHub Actions ✅,
Respect the underscore 🙇,
tell us about your EmberConf experience ❤️,

READMORE

---

## [Ember Testing Guide v1 📗](https://twitter.com/PoslinskiNet/status/1239503392386568192)

[Dawid Pośliński (@PoslinskiNet)](https://github.com/PoslinskiNet/) wrote about testing best practices and which addons to use in the newly released [Ember Testing Guide v1](https://selleo.com/ebook/ember). The testing guide goes through why we need tests to begin with. What benefits does testing give us and what gaps are still present.

Following that, the testing guide discusses best practices in how we architect our testing code. It also goes through how to use the right kind of test. Should the test be unit, integration, acceptance, visual regression, or even manual? These principles are the building blocks to constructing effective tests.

Finally the guide goes through all the best addons available today and how to use them in testing your application with examples from [qunit-dom](https://github.com/simplabs/qunit-dom), [ember-test-selectors](https://github.com/simplabs/ember-test-selectors), [ember-cli-timecop](https://github.com/matteodepalo/ember-cli-timecop), [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing), [ember-percy](https://github.com/percy/ember-percy) and many more!

Check it out as a [free eBook](https://selleo.com/ebook/ember), on [GitHub](https://github.com/PoslinskiNet/ember-testing-guide), or as a [PDF](https://selleo.com/uploads/ebooks/ember/ember_testing_guide.pdf)!

---

## [Coupling concerns with co-located tests ⛓](https://github.com/emberjs/rfcs/pull/599)

The conventional file layout of Ember apps has undergone a few changes throughout the years.
Besides the [classic file layout](https://cli.emberjs.com/release/advanced-use/project-layouts/#classiclayout), users have also been able to opt-in to the [pods layout](https://cli.emberjs.com/release/advanced-use/project-layouts/#podslayout) for a while. And while pre-v3.13 Ember users were modifying component templates and `.js` files in two different directories, they recently got the chance to work on [component files side-by-side](https://blog.emberjs.com/2019/09/25/ember-3-13-released.html) after the implementation of the [component template co-location RFC](https://emberjs.github.io/rfcs/0481-component-templates-co-location.html).

Another, [recent RFC](https://github.com/emberjs/rfcs/pull/599) wants to take the principle of co-location even a step further: it proposes that **test files**, e.g. those for rendering tests of a component, should be co-located right next to the respective component class and template files. Beyond that, the proposal suggests a similar co-location pattern for unit tests of related routes and controllers, too - with the [motivation to improve the discoverability of tests](https://github.com/NullVoxPopuli/rfcs/blob/colocated-tests/text/0000-colocated-tests.md#motivation) for application developers.

Ready to learn more about how this could be implemented? Be sure to read the [full proposal](https://github.com/NullVoxPopuli/rfcs/blob/colocated-tests/text/0000-colocated-tests.md) and to leave your thoughts or questions in the [comments below](https://github.com/emberjs/rfcs/pull/599)!

---

## [Make your dream of smooth releases come true 📦🙌](https://github.com/rwjblue/create-rwjblue-release-it-setup/releases/tag/v2.0.0)

Who doesn't dream of easy-peasy releases? Let straightforward publishing workflows become your new reality with [**create-rwjblue-release-it-setup**](https://github.com/rwjblue/create-rwjblue-release-it-setup). Leveraging the tools from the popular library [release-it](https://github.com/release-it/release-it), it allows you to setup your project swiftly for automated versioning and package publishing.

Make your dream of easier release management come true with one single npm command:

```bash
npm init rwjblue-release-it-setup
```

...or a yarn command for that matter:

```bash
yarn create rwjblue-release-it-setup
```

Check out the [v2 release page](https://github.com/rwjblue/create-rwjblue-release-it-setup/releases/tag/v2.0.0) to learn more about all the latest features and improvements and happy publishing!

---

## [CI with GitHub Actions for Ember Apps ✅](https://crunchingnumbers.live/2020/03/17/ci-with-github-actions-for-ember-apps/)

Continuous integration (CI) and continuous deployment may be skills that you get to practice maybe once on a production app, depending on your job title. But the truth is, you can practice them (_ahem_) continuously at an early stage for any app, no matter who you are. 💗

You might then ask, where can I learn how to add CI to my Ember app? Are there cool things that I can do _because_ I have an Ember app?

In his [blog post](https://crunchingnumbers.live/2020/03/17/ci-with-github-actions-for-ember-apps/), [Isaac Lee (@ijlee2)](https://github.com/ijlee2/) shows **step-by-step how you can write a GitHub Actions workflow**. Thanks to Ember's addon ecosystem, you can:

- Cache dependencies (avoid `yarn/npm install`)
- Lint files and dependencies
- Run tests separately from linting
- Split tests and run in parallel
- Take Percy snapshots in parallel

If you wanted to solve these problems or needed a reference code, [look no further](https://crunchingnumbers.live/2020/03/17/ci-with-github-actions-for-ember-apps/)! Feedback is always welcome (you can DM `@ijlee2` on Discord).

---

## [Respect the Underscore 🙇](https://medium.com/@ritual_steven/respect-the-underscore-331fa23e1595)

[Steven Elberger (@StevenElberger)](https://github.com/StevenElberger)'s blog post, "[Respect the Underscore](https://medium.com/@ritual_steven/respect-the-underscore-331fa23e1595)," is a fantastic example of what you can practice as a developer: **Document your bug for posterity**, especially if it failed your app or test suite in a catastrophic manner.

Here are some questions that you and your team can address:

- When did you first notice the bug?
- Which features or upgrades were recently worked on?
- What did you think caused the bug?
- How did you eliminate some of the possibilities?
- What did you do to fix the bug?

Because Steven's writing excellently builds suspense, we won't dare spoil the twists and ending here. Instead, we encourage you to [check out the post](https://medium.com/@ritual_steven/respect-the-underscore-331fa23e1595)!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [We want to hear from your EmberConf experience ❤️](https://emberconf.com/)

This year's [EmberConf](https://emberconf.com/) featured **25+ remote presentations** about the latest and greatest in JavaScript and Ember with Emberistas from all around the world - and the event was a huge success! In case you haven't had a chance to tune into the livestream this week already, be sure to catch up on the recordings for **day 1** ([part 1](https://www.youtube.com/watch?v=1vZGPJHYcOA) + [part 2](https://www.youtube.com/watch?v=D-avY3dG2Zk)) and **day 2** ([part 1](https://www.youtube.com/watch?v=kwbaPS6pIpY) + [part 2](https://www.youtube.com/watch?v=vObogyci7m8)) of the conference.

Check out all the related resources for the talks in [the conference notes](https://twitter.com/alex_diliberto/status/1240449629612892161) by [Alex DiLiberto (@alexdiliberto)](https://github.com/alexdiliberto). Also, stay tuned and follow [the EmberConf Twitter account](https://twitter.com/emberconf) to not miss out on the exclusive BonusConf sessions, which will be released over the next couple of days!

Last, but not least, we have one request for those of you who attended **EmberConf 2020**:

> Tell us about someone new that you got to chat with at the virtual conf!

Let us know about your answer to this question either by [tweeting us via Twitter](https://twitter.com/embertimes) using the **hashtag #EmberConFriends** or as a message on the [Ember Discord](https://discordapp.com/invite/emberjs) in the **#support-ember-times** channel. We will raffle an exclusive **EmberConf retro sticker set** among all story writers by April 6, 2020. We're looking forward to hear from you and happy catching up on virtual EmberConf!


---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/kratiahuja" target="gh-user">@kratiahuja</a>, <a href="https://github.com/bobisjan" target="gh-user">@bobisjan</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/Aswathprabhu" target="gh-user">@Aswathprabhu</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a> and <a href="https://github.com/laurmurclar" target="gh-user">@laurmurclar</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jessica Jordan, Isaac Lee, the crowd and the Learning Team
