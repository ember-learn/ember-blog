---
title: The Ember Times - Issue No. 126
author: Chris Ng, Isaac Lee, Jared Galanis, Alon Bukai, Jessica Jordan, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/11/29-the-ember-times-issue-126.html"
responsive: true
---

👋 Emberistas! 🐹

More Improvements Coming to Ember Inspector Soon 🚀,
represent Ember in the State of JavaScript 2019 survey 📃,
give thanks to Octane Guides contributors 🙏,
Ember got more real with RealWorld 🌟,
the EmberConf CfP closing on Dec 1st 📆,
and Ember + Tailwind CSS tips and tricks 🎨!

READMORE

---

## [More Improvements Coming to Ember Inspector Soon 🚀](https://github.com/emberjs/ember-inspector/pull/1088)

A huge shoutout and thank you are owed to [Godfrey Chan (@chancancode)](https://github.com/chancancode) and [Robert Wagner (@rwwagner90)](https://github.com/rwwagner90), the maintainers of the Ember Inspector, and everyone else involved for all their amazing work in getting the new and improved **Ember Inspector** ready for Octane! 🔥🔥🔥

With the release of Octane coming it is welcomed news that Octane's Glimmer components work in Ember Inspector now, in both the component tree and the object inspector. Other improvements include revamping the component hover inspection tool to match Chrome's inspection style, many bug fixes and a complete rewrite of the component tree logic that is more future proof.

[Godfrey Chan (@chancancode)](https://github.com/chancancode), in particular, is owed a big thanks for helping design the `captureRenderTree` API in Ember that was needed to provide the Inspector with the information it needs and for providing a polyfill, so it works seamlessly across versions.

Also many thanks to [Patrick (@patricklx)](https://github.com/patricklx) for a lot of recent work in getting inspector ready for Octane, including compatibility with Octane's tracked properties.

If you'd like to help test out all the new functionality, there is an open [PR with the changes](https://github.com/emberjs/ember-inspector/pull/1088). Please let [Robert Wagner (@rwwagner90)](https://github.com/rwwagner90) and the Inspector team know if you encounter any issues!

<img src="/images/blog/emberjstimes/inspector.gif">

---

## [State of JavaScript 2019 Survey 📃](https://stateofjs.com/)

It’s that time of year again! Please make sure to fill out the [State of JavaScript Survey](https://stateofjs.com/) and represent **Ember**!

In 2018 the survey collected over 20,000 responses from developers to identify current and upcoming trends. This year, the survey is once again looking for how developers use JavaScript with regards to syntax, browser APIs, and mobile vs desktop web.

All questions are optional and reaching 100% completion is not required so give it a try and answer the [State of JavaScript Survey](https://stateofjs.com/) today! Hint: The survey asks about **Ember** under "Front-end Frameworks."

---

## [Latest Updates to Octane Guides 🙏](https://octane-guides-preview.emberjs.com/)

Documentation is integral to helping us understand how to use open source projects like Ember and its addons. Documentation is so common in our lives that we tend to overlook how much work is involved in creating and maintaining one.

Today, we extend our hearty thanks to [@sly7-7](https://github.com/sly7-7) and [@venusang](https://github.com/venusang). @sly7-7 proofread and updated several code examples in the [Octane Guides](https://octane-guides-preview.emberjs.com/), while @venusang added instructions for using element modifiers in the [Ember.js Octane vs. Classic Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/) (we highly recommend bookmarking this page!).

If you can contribute to everyone's learning today, we ask that you help **update the readme of your favorite addon** to provide code examples in Octane.

---

## [Ember RealWorld App is Feature Complete 🌠](https://github.com/gothinkster/ember-realworld)

[RealWorld](https://github.com/gothinkster/realworld), "the mother of all demo apps", is an open source initiative to showcase a full stack app build using any frontend or backend framework/library. It provides a spec for both the API and the frontend. The idea is to show how a "real world" app can be built using different frameworks/libraries.

The Ember RealWorld implementation is finally complete! It was started over two years ago by [Alon Bukai (@Alonski)](https://github.com/Alonski) and after all this time is finally feature complete. A large number of contributors helped out along the way: [Jonathan Goldman (@jonnii)](https://github.com/jonnii), [Alex LaFroscia (@alexlafroscia)](https://github.com/alexlafroscia), [Laura Kajpust (@delusioninabox)](https://github.com/delusioninabox), [Pat O'Callaghan (@patocallaghan)](https://github.com/patocallaghan), [Garrick Cheung (@GCheung55)](https://github.com/GCheung55), [Chris Manson (@mansona)](https://github.com/mansona), and [John (@johpol)](https://github.com/johpol).

The implementation showcases a classic Ember.js app using the most idiomatic Ember patterns to serve as an example for the wider community. Feel free to look through the codebase and even offer suggestions, PRs or comments regarding how the app is built. There is always room for improvements. We are, for example, looking for performance improvements, so if that's your cup of tea ☕, please contribute.

The RealWorld project has a rating system based on GitHub stars. Currently Ember RealWorld has been starred by community members 60 times, but we believe there could be so many more! To make the repo reflect the real world usage of Ember on the web, [go and vote with your stars](https://github.com/gothinkster/ember-realworld) 🌟!

P.S. Look out for an Octane implementation coming soon to a GitHub repo near you 🍿.

---

## [Get Your Talk Proposals Ready for EmberConf by Dec 1st 🎙](https://emberconf.com/#/become-a-speaker)

EmberConf, the biggest, annual conference about Ember taking place in Portland, US from March 16 - 18, 2020, is accepting talk proposals from the community - but only until **Dec 1st, 12am MST** (= Dec 1st, 7am UTC). This means, in case you haven't done so already, it's about time to [get your amazing conference proposal submitted](https://emberconf.com/#/become-a-speaker)!

The EmberConf Call for Papers (CfP) is public, starts out anonymous, and features a collaborative process to help applicants improve their proposals.

Why should you become a speaker? Because this is a unique opportunity to share your knowledge, opinion and experience with the wider community! No matter if you are a first time speaker or an experienced presenter, this is your chance to present your ideas in the form of a **30 min** session or a **15min** mini talk.

[Be sure to submit your talk idea this weekend](https://emberconf.com/#/become-a-speaker) and in case you still need some inspiration: be sure to checkout [this year's EmberConf CfP brainstorm](https://emberconf.com/#/cfp-brainstorm) for feedback from the programme committee! Fingers crossed!

---

## [All Things Ember and Tailwind 🎨](https://www.balinterdi.com/blog/purging-css-in-ember-postcss-purgecss/)

Are you on the functional CSS train 🚂? Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. [Balint Erdi (@balinterdi)](https://github.com/balinterdi) recently blogged about Ember, Tailwind and PostCSS. In [his first post](https://www.balinterdi.com/blog/ember-tailwind-css-postcss-import/), Balint explains how with [ember-auto-import](https://github.com/ef4/ember-auto-import), you can use [Tailwind](https://tailwindcss.com/) directly versus relying on the Ember-specific integrator package. (ember-cli-tailwind was deprecated, because this worked so well!) However, to make your Ember app integrate nicely with Post CSS, Balint suggests sticking with the integrator add-on [ember-cli-postcss](https://github.com/jeffjewiss/ember-cli-postcss). Check out [post-css-import](https://github.com/postcss/postcss-import) to be able to import styles from other files.

In his [second post](https://www.balinterdi.com/blog/purging-css-in-ember-postcss-purgecss/), Balint details how he added Purgecss to the mix. [Purgecss](https://www.purgecss.com/) is a library that removes unused CSS, thus reducing the bundle size. Be sure to check out [Chris Masters (@chrism)](https://github.com/chrism)'s working example in his detailed **[emberjs-tailwind-purgecss README](https://github.com/chrism/emberjs-tailwind-purgecss)**. Balint also touches on using Purgecss only in production, which has its pros and cons. We definitely enjoyed the discussion about these blog posts on the [Twitter thread](https://twitter.com/baaz/status/1198982126860935168). Happy Tailwind-ing!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a>, <a href="https://github.com/tniezurawski" target="gh-user">@tniezurawski</a>, <a href="https://github.com/pichfl" target="gh-user">@pichfl</a>, <a href="https://github.com/kanongil" target="gh-user">@kanongil</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/MarcoUmpierrez" target="gh-user">@MarcoUmpierrez</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a> and <a href="https://github.com/dmuneras" target="gh-user">@dmuneras</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jared Galanis, Alon Bukai, Jessica Jordan, Amy Lam and the Learning Team
