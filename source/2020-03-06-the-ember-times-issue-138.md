---
title: The Ember Times - Issue No. 138
author: Chris Ng, Abhilash, Jessica Jordan, Isaac Lee, Jared Galanis, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/03/06-the-ember-times-issue-138.html"
responsive: true
---

<!--alex ignore womens-->
Happy International Women's Day, Emberistas! 🐹

2020 Ember Community Survey due this Sunday 📈, the possible future of app hooks and testing directories 📂, the evolution of Ember and Intercom 🚀🐹, splitting & migrating your project to a monorepo 🐘, read the blog post on modifiers 🦄, and find out how to use Ember with WebAssembly (Rust) 💡!
  
READMORE

---

## [2020 Ember Community Survey due March 8th! 📈](https://tilde.wufoo.com/forms/2020-emberjs-community-survey/)

If you haven't yet, please take a brief moment of your day to [fill out the annual survey](https://tilde.wufoo.com/forms/2020-emberjs-community-survey/)! Your feedback can help everyone shape Ember better. 💞

---

## [Discuss the future of app hooks and testing directories in Ember 📂](https://github.com/emberjs/rfcs/pulls?q=is%3Aopen+is%3Apr+author%3Amehulkar+575+578)

Since the early days of the framework, [the Ember CLI](https://ember-cli.com/) has been a major factor for productivity and great developer ergonomics when developing Ember apps. And a while ago [Mehul Kar (@mehulkar)](https://github.com/mehulkar) submitted **two new Requests for Comments (RFCs)** to suggest even more improvements for the favorite productivity tool of any Emberista!

In [RFC#575: Test Directories](https://github.com/emberjs/rfcs/pull/575) a new directory structure for testing is proposed. The change of test type names in the [official Ember testing guides](https://guides.emberjs.com/release/testing/test-types/) that followed the implementation of [RFC#232: Simplify QUnit Testing API](https://emberjs.github.io/rfcs/0232-simplify-qunit-testing-api.html) inspires the new directory format: f.e. files for testing component functionality used to be called `integration` tests in the former Ember QUnit testing API, and have been renamed to `rendering` tests. To reflect this change in the documentation, the new RFC suggests to move DOM-focused component tests from `tests/integration/**-test.js` to `tests/rendering/**-test.js` accordingly. You can learn more about the detailed design [by reading the original proposal](https://github.com/emberjs/rfcs/pull/575).

With [RFC#578: Ability to hook into build process without addons](https://github.com/emberjs/rfcs/pull/578), a suggestion for more developer flexibility for an app's build process is made. The proposal suggests that `treeFor` hooks provided by [BroccoliJS](https://broccoli.build/) - a core library for powering the Ember CLI build pipeline - should be available via the `options` parameter of an Ember app instance. This would allow future Ember developers to leverage `treeFor` hooks in an app itself without developing a supplementary addon (which is currently the only way to use these build pipeline APIs directly). To learn more about the motivation behind this RFC, be sure to check out the [pull request on Github](https://github.com/emberjs/rfcs/pull/578) and feel free to leave your thoughts and questions in the comments below.

---

## [The evolution of Ember and Intercom 🚀🐹](https://www.intercom.com/blog/videos/evolution-of-ember-at-intercom/)

If you have not had a chance to check out [Gavin Joyce's (@GavinJoyce)](https://github.com/GavinJoyce) blog post on the evolution of Ember and Intercom, and the accompanying talk, you might want to give it a read / watch!

The [blog post](https://www.intercom.com/blog/videos/evolution-of-ember-at-intercom/) covers the **massive growth of Intercom over 6 years**, how the company came to choose Ember and how Intercom's growth tracks with the growth of Ember over time. 

Interestingly, many of the principles of R&D, design and Engineering overlap with Ember's conventions and release cycles. 

The blog post also provides some nice detail on the technical evolution in Ember's rendering engine and it provides a look at how Ember Octane can let us write beautiful, minimal and clean components in mostly native JavaScript. 

It's a fascinating and encouraging read, and it's very cool to see how the stability and innovation of Ember has allowed Intercom to build the amazing product it is today! 

---

## [Splitting & migrating your Ember project to a monorepo 🐘](https://www.mylittletechlife.com/ember-monorepo)

[Robin Philip Thomas (@MalayaliRobz)](https://github.com/MalayaliRobz) details his experience having worked with a huge codebase and the difficulties he and his team had faced with a massive monolith and how they split their codebase to multiple engines and add-ons. While that wasn't enough, he goes on to explain how dependencies caused problems related to version upgrades in each repository. As a result, he talks about how he arrived at using Yarn workspaces and how [Lerna](https://lerna.js.org/) solves those problems. Check out the [blog post](https://www.mylittletechlife.com/ember-monorepo)!

---

## [Blog post: Introducing Ember modifiers 🦄](https://gaiety.life/introducing-ember-modifiers)

[Ava Gaiety Wroten (@sharpshark28)](https://github.com/sharpshark28) wrote a blog post on the [ember-modifier](https://github.com/ember-modifier/ember-modifier) addon which provides an API for authoring [element modifiers](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html) in Ember.

We learn how to use the [`{{on}}` modifier](https://github.com/emberjs/rfcs/blob/master/text/0471-on-modifier.md) to track the focus state of a DOM element. The blog then describes how to handle key presses by creating our very own modifier such as the example `{{key-down}}` below:

```handlebars
{{!-- my-component.hbs --}}
<button
  {{key-down this.handleEnter key='Enter'}}
  My Button
</button>
```

Unlike attributes, element modifiers [do not run on the server-side](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_event-handlers), because there is no general-purpose and complete way to serialize the results of an element modifier into HTML.

Be sure to check out [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers) and [ember-focus-trap](https://github.com/josemarluedke/ember-focus-trap) as well and read the [full article](https://gaiety.life/introducing-ember-modifiers) on Ember modifiers!

---

## [Using WebAssembly in Ember.js 💡](https://mfeckie.dev/wasm-in-ember/)

[WebAssembly (wasm)](https://developer.mozilla.org/en-US/docs/WebAssembly) is a technology that enables **high-performance computing** (traditionally achieved with C or C++) on the web.

[Martin Feckie (@mfeckie)](https://github.com/mfeckie) published [a guide on how you can integrate your Ember app with a Rust program](https://mfeckie.dev/wasm-in-ember/). Martin walks you through how to generate UUIDs and plot Mandelbrot sets. These examples represent a complex calculation that you might do in a production app.

We encourage you to check out the article! Along the way, you can also pick up a little bit of **TypeScript + Octane**, **dynamic import**, and **`{{ref}}` modifier**. 🎶

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/kratiahuja" target="gh-user">@kratiahuja</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/venusang" target="gh-user">@venusang</a>, <a href="https://github.com/mehulkar" target="gh-user">@mehulkar</a>, <a href="https://github.com/mwpastore" target="gh-user">@mwpastore</a>, <a href="https://github.com/MichalBryxi" target="gh-user">@MichalBryxi</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, and <a href="https://github.com/knownasilya" target="gh-user">@knownasilya</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Abhilash, Jessica Jordan, Isaac Lee, Jared Galanis, Amy Lam and the Learning Team
