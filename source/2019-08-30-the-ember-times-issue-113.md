---
title: The Ember Times - Issue No. 113
author: Chris Ng, Jessica Jordan, Anne-Greeth van Herwijnen, Isaac Lee, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/08/30-the-ember-times-issue-113.html"
responsive: true
---

Tach Emberistas! 🐹

This week:
brand new content in the Ember Guides 🤓,
use Ember Engines and Yarn Workspaces to maximize happiness 🤗,
add visual regression testing to your Ember app using ember-backstop 🧪,
and last, but not least,
learn how Ember is organised and thrives 🌺!

---

## [Check Out New Content in the Official Ember Guides 🐹🤓](https://guides.emberjs.com/release/)

The most popular learning resource for early and advanced Ember developers,
the [Guides](https://guides.emberjs.com/release/), is waiting up for you with some **brand new content**!

The Guides now features a [new section](https://guides.emberjs.com/release/accessibility/) entirely dedicated to **accessibility**. It teaches you how to create your own accessibility strategy for your application, and how to implement keyboard accessible, screenreader accessible and overall barrier-free user interfaces with Ember. If you haven't done so, be sure to [check it out today](https://guides.emberjs.com/release/accessibility/) and leave either feedback or support for improving this section in the [#topic-a11y channel](https://discordapp.com/channels/480462759797063690/480523441082990612) on the [Ember Discord](https://discordapp.com/invite/zT3asNS)!

Additionally, a soon-to-be-released version of the Guides will shine with [a revamp of the testing guidelines](https://octane-guides-preview.emberjs.com/release/testing/). In particular, the introduction to testing has been updated and a new section explaining the different types of tests in Ember apps has been [added](https://octane-guides-preview.emberjs.com/release/testing/test-types/). Many thanks to both [@ijlee2](https://github.com/ijlee2) for working on the [update](https://github.com/ember-learn/guides-source/pull/964) and [@toddjordan](https://github.com/toddjordan) for the detailed review and suggestions!

---

## [How to Write a Really, Really Ambitious SPA in 2019 🤗](https://medium.com/@lukedeniston/how-to-write-a-really-really-ambitious-spa-in-2019-60fc38de89db)

When building enterprise applications with many routes, [Ember Engines](http://ember-engines.com/) can help you **lazy-load [engines](http://ember-engines.com/guide/what-are-engines) for better user experience** and **encapsulate code for better developer experience**.

Ember Engines, by itself, isn't perfect, however. [@luketheobscure](https://github.com/luketheobscure) shared his team's experiences of having to manually update versions (making pull requests across three different repos) to fix a single bug.

By introducing [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), Luke got to eliminate this step. Workspaces also allowed him to introduce live reload, share config files across packages, and ensure certain dependencies to be on the same version across packages.

To learn more about using Workspaces, please check out [his blog](https://medium.com/@lukedeniston/how-to-write-a-really-really-ambitious-spa-in-2019-60fc38de89db) today! 

---

## [Ember-Backstop Visual Regression Testing Tutorial 🧪](https://www.linkedin.com/pulse/ember-backstop-visual-regression-testing-tutorial-garris-shipon/)

[@garris](https://github.com/garris) published a [blog post](https://www.linkedin.com/pulse/ember-backstop-visual-regression-testing-tutorial-garris-shipon/) on how to add visual regression tests to your Ember application in 10 minutes with the [ember-backstop](https://github.com/garris/ember-backstop) test-helper addon.

You can import `ember-backstop` into your application test and await it at a point in time where you want to run the visual regression testing. It will then serialize the snapshot of your DOM at that moment in time and it will send it to the *Backstop-Remote* service. The tutorial goes through how to verify, fix, and approve visual regression tests using the Backstop commands.

Check out the full tutorial by following along with the [demo repository](https://github.com/garris/ember-backstop-tutorial/) or reading through the [BackstopJS website](http://backstopjs.org/) for more information.

---

## [Thriving through the hype cycle: an Ember.js story 🌺](https://www.youtube.com/watch?v=ECkbVa0iC4k)

In addition to amazing Ember conferences, a lot of people are promoting Ember and sharing Ember wisdom at other conferences. [@locks](https://github.com/locks) told about `Thriving through the hype cycle: an Ember.js story` at [CommitPorto '19](https://commitporto.com/). This [talk](https://www.youtube.com/watch?v=ECkbVa0iC4k) gives great insights into how Ember, as a framework, is organised. Nothing too technical, but a nice peak in the kitchen of Ember. 

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/jrjohnson" target="gh-user">@jrjohnson</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/jontonsoup4" target="gh-user">@jontonsoup4</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a>, <a href="https://github.com/snewcomer" target="gh-user">@snewcomer</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jessica Jordan, Anne-Greeth van Herwijnen, Isaac Lee, Amy Lam and the Learning Team
