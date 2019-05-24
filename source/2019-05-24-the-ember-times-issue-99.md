---
title: The Ember Times - Issue No. 99
author: Chris Ng, Jessica Jordan, Isaac Lee, Kenneth Larsen, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/05/24-the-ember-times-issue-99.html"
responsive: true
---

你好 Emberistas! 🐹

Submit your input for Ember's 2019 Roadmap ✍️,
Ember 3.10 Released 🔟,
new ways for you to **mock requests** in **Fastboot** tests 👢💨,
faster builds on Windows with Docker 🐳,
new addon ember-did-resize-modifier released 📐,
and last, but not least, Crash Log: a new Ember and more podcast 🎙!  

---

## [Ember's 2019 Roadmap: Call for Blog Posts ✍️](https://blog.emberjs.com/2019/05/20/ember-2019-roadmap-call-for-posts.html)

It’s that time of the year again! With the [2018 Roadmap](https://github.com/emberjs/rfcs/blob/master/text/0364-roadmap-2018.md) underway, it’s time to think about what Ember will look like in 2019! The Roadmap process is part of Ember’s ongoing effort to have collaborative, clear, and published project-wide goals each year.

We want your input on what the priorities are for Ember in 2019. You can talk about Ember Data, Ember CLI, learning, tooling, the community, addons, and anything else Ember-related. To start you off, we have early 2019 blog posts from [@MelSumner](http://www.melsumner.com/blog/ember/the-road-goes-data-way/), [@wycats](https://yehudakatz.com/2019/05/20/ember-2019/), and [@NullVoxPopuli](https://nullvoxpopuli.com/2019-05-14-ember-2019-roadmap/)! Make sure you get yours in before the **June 17th deadline** (it can be anything from a company blog post to a [GitHub gist](https://gist.github.com/))!

To contribute a post: **Tweet a link** to the post with the hashtag [#EmberJS2019](https://twitter.com/hashtag/emberjs2019) or **email a link** to [roadmap@emberjs.com](mailto:roadmap@emberjs.com). These posts will be collected and categorized, and each one will be read by those working to draft the Roadmap RFC.

---

## [Ember 3.10 Released 🔟](https://blog.emberjs.com/2019/05/21/ember-3-10-released.html)

Ember 3.10 is here! This release has a whole bunch of new features: Angle Bracket Invocation for Nested Components, Angle Bracket Invocation for Built-In Components, RouteInfo Metadata, and Native Decorator Support. Addon authors will want to read about support for Node 6 being dropped before running their next release. 

Note: Releases are **considered done** when the [blog post](https://blog.emberjs.com/2019/05/21/ember-3-10-released.html) goes out. Upgrading your Ember app? Check out the official blog post for pointers. Sometimes, there are small bugs that get patched between when the version shows up on npm and the blog post. For example, Ember CLI version 3.10.1 fixes a small issue with Node versions in CI. 

---

## [Network Mocking for Your Fastboot App with Ember CLI Fastboot Testing 👢💨](https://twitter.com/samselikoff/status/1126510237723193345)

Building a [Fastboot](https://ember-fastboot.com/) powered Ember application? Struggling with **writing meaningful tests** for it, that take into account outgoing network requests?

Imagine if you could **mock network requests** for your Fastboot test suite with ease, just as you already do using [Ember CLI Mirage](https://www.ember-cli-mirage.com/) when testing the client-side of your app.

Your testing dreams have just come true! [Ember CLI Fastboot Testing](https://embermap.github.io/ember-cli-fastboot-testing/) provides you with useful test helpers and a mock server for intercepting requests from your Fastboot app while testing. Learn how to mock network requests with it by checking out this [amazing introduction](https://embermap.com/video/fastboot-network-mocking) by [our friends at EmberMap](https://embermap.com) and test away! ✨

---

## [Faster Ember Builds with Docker on Windows 🐳](https://dev.to/dustinsoftware/build-hacks-faster-ember-builds-with-docker-on-windows-7e1)

Ember builds, which make use of temporary files, have traditionally been slow on Windows due to its file system. [@dustinsoftware](https://github.com/dustinsoftware), who wanted to empower Windows developers on his team, investigated using [Docker](https://docs.docker.com/docker-for-windows/) to speed up and simplify their builds.

The results? About **70% faster first build time** and **785% faster rebuild time**! 🙌

Please check out [Dustin's blog post](https://dev.to/dustinsoftware/build-hacks-faster-ember-builds-with-docker-on-windows-7e1) and [GitHub repo](https://github.com/dustinsoftware/ember-docker-starter) to learn how you can set up Docker (with CI) for your Ember app!

---

## [Resizing Like a Pro 📐](https://github.com/gmurphey/ember-did-resize-modifier)

Have you ever found yourself trying to implement changes to your application based on element resizing? Well, then we have good news for you: [ember-did-resize-modifier](https://github.com/gmurphey/ember-did-resize-modifier) is a great new addon that helps you by calling a callback whenever a given element is resized.

Check out the [README](https://github.com/gmurphey/ember-did-resize-modifier#readme) for more information on what you can do with this addon.

---

## [New Podcast: Crash Log 🎙](https://crashlog.transistor.fm/)

[@davewasmer](https://github.com/davewasmer) and [@kwownasilya](https://github.com/knownasilya) silently launched **Crash Log**, a weekly podcast with the Crash Engineering team covering the journey of building an Ember and Node web app. Tune in to hear about development, startup life, Ember.js, GraphQL, functional CSS frameworks, EmberConf, data fetching in realtime, and more! Check out the first three episodes at [TransistorFM](https://crashlog.transistor.fm/), [iTunes](https://podcasts.apple.com/us/podcast/crash-log/id1462819338) or [Spotify](https://open.spotify.com/show/2gKJbmJCvCKJV0KfnUNI0b).

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/villander" target="gh-user">@villander</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/makepanic" target="gh-user">@makepanic</a>, <a href="https://github.com/chriskrycho" target="gh-user">@chriskrycho</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/mixonic" target="gh-user">@mixonic</a>, <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a>, <a href="https://github.com/abhilashlr" target="gh-user">@abhilashlr</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/jrowlingson" target="gh-user">@jrowlingson</a>, <a href="https://github.com/ryanto" target="gh-user">@ryanto</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/rnegron" target="gh-user">@rnegron</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/NullVoxPopuli" target="gh-user">@NullVoxPopuli</a>, <a href="https://github.com/konstankinollc" target="gh-user">@konstankinollc</a>, <a href="https://github.com/tendermario" target="gh-user">@tendermario</a>, and <a href="https://github.com/maurodibert" target="gh-user">@maurodibert</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jessica Jordan, Isaac Lee, Kenneth Larsen, Amy Lam and the Learning Team
