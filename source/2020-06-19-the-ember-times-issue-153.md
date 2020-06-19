---
title: The Ember Times - Issue No. 153
author: Abhilash LR, Matthew Roderick, Chris Ng, Aseem Taneja, Isaac Lee, Jessica Jordan, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/06/12-the-ember-times-issue-153.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
Set up fast with `ember-new-plus` ⚡️,
Read through the RFC to add Type Stability to Ember Addons 💠,
Stories of becoming a developer 📖,
New LinkedIn group EmberJS developers 🐹,
Practice responsive design in Octane with `ember-container-query` ✨,
Farewell Ember A11y Strike Team, hello Working Group for Digital Accessibility 🚀,
Handle asset urls with confidence in Ember & Cordova 📱🐹,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

---

## [Set up fast with `ember-new-plus` ⚡️](https://github.com/atej/ember-new-plus)

[Aseem Taneja (@atej)](https://github.com/atej) has created a bash script that automates the setup of some often-used tools in an Ember project. To further enhance your DX, it also recommends [VS Code](https://code.visualstudio.com/) extensions and generates settings to integrate with them.

Based on your selections, you get:

- Linting and formatting with [ESLint](https://eslint.org) + [Prettier](https://prettier.io),
- Utility-first CSS with [Tailwind CSS](https://tailwindcss.com) + [PostCSS](https://postcss.org)
- git hooks with [Husky](https://github.com/typicode/husky)
- Pre-commit linting of staged files with [lint-staged](https://github.com/okonet/lint-staged)
- Adherance to [conventional commit messages](https://conventionalcommits.org) with [commitlint](https://github.com/conventional-changelog/commitlint)
- A launch configuration for in-editor debugging with VS Code's [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

The configuration files generated when you first [run the script](https://github.com/atej/ember-new-plus#quickstart-) can be tuned to your preference later. If you are about to make a new Ember project, give [ember-new-plus](https://github.com/atej/ember-new-plus) a try!

---

## [RFC: Type Stability for Addons 💠](https://github.com/typed-ember/ember-cli-typescript/pull/1158)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) proposed a set of guidelines and tooling recommendations for managing changes as addons adopt [TypeScript](https://www.typescriptlang.org/) throughout the Ember ecosystem, as part of the path to making TypeScript a first-class citizen in Ember as a whole.

In the [RFC](https://github.com/typed-ember/ember-cli-typescript/pull/1158), it proposes to align with [Ember’s SemVer and LTS commitments](https://emberjs.com/releases/) and design workflows to support that policy, so that consumers of Ember addons which publish types are insulated from breaking changes in TypeScript whenever possible. The RFC outlines what needs to happen when we encounter:

- Breaking changes to type definitions
- Non-breaking changes to type definitions
- Bug fixes to type definitions
- Dropping support for previously-supported versions

Read through the full [RFC on Type Stability for Addons](https://github.com/typed-ember/ember-cli-typescript/pull/1158) and leave some feedback!

---

## [Stories of becoming a developer 📖](https://dev.to/agathebadia/share-your-dev-story-51dg)

[Agathe Badia (@honeypotio)](https://github.com/Agathebadia) has written a blog post called **Share your Dev story**. This blog post introduces her new website 🎉 that was built with [Ember.js](https://emberjs.com/). It is called [Becoming a Developer](https://becoming-a-developer.netlify.app/).

On Becoming a Developer, you can share your background, the story of how you started, interest in coding, studies, first developer role, and some recommendations for anyone starting or continuing to dive into development. 💻

In her [Share your Dev story](https://dev.to/agathebadia/share-your-dev-story-51dg) post, Agathe talks about how meaningful her new website is to her. You can see her passion as a developer shine. 🌟

Each developer's story is **unique** and **insightful** and can inspire _you_ to do something you never thought possible. [Check it out](https://becoming-a-developer.netlify.app/) and be sure to share your own! 😃

---

## [Farewell Ember A11y Strike Team, hello Working Group for Digital Accessibility 🚀](https://github.com/ember-a11y/core-notes/blob/ember-a11y/ember-a11y/2020-06/june-17.md)

In case you didn't know, the Ember A11y Strike Team, formed to address the [issue that outlined the technical accessibility issues in new Ember apps](https://github.com/emberjs/rfcs/issues/595) will have its final meeting next week 😢 ... but fear not, some of the ✨ amazing ✨ work that the Strike Team did will be continued in the Working Group for Digital Accessibility! 🔥 

The Working Group will be formed with some of the initial members who were also involved in the Strike Team. 

You can read up on some of the work they've been planning for the Working Group [here](https://github.com/ember-a11y/core-notes/blob/ember-a11y/ember-a11y/2020-06/june-17.md#discussion-notes), but you can rest assured that the great work the Strike Team did will be advanced even further!

<!--alex ignore special -->
A huge shout out to everyone who was involved in the Ember A11y Strike Team with a special thank you to the following members who worked so hard to make Ember even more accessible:

<!--alex ignore white -->
- [Joseph Sumner (@josephdsumner)](https://github.com/josephdsumner),
- [Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar),
- [Abhilash (@abhilashlr)](https://github.com/abhilashlr),
- [Jamie White (@jgwhite)](https://github.com/jgwhite),
- [Ava Gaiety Wroten (@hergaiety)](https://github.com/hergaiety),
- [Frédéric Soumaré (@hakilebara)](https://github.com/hakilebara),
- [Benjamin JEGARD (@KamiKillertO)](https://github.com/KamiKillertO),
- [Lenora Porter (@lenoraporter)](https://github.com/lenoraporter),
- [Ricardo Mendes (@locks)](https://github.com/locks) and
- [Mel Sumner (@MelSumner)](https://github.com/MelSumner)
- [Rob Jackson (@rwjblue )](https://github.com/rwjblue)

💖💖💖💖💖💖

---

## [Practice responsive design in Octane with `ember-container-query` ✨](https://github.com/ijlee2/ember-container-query)

Container queries allow you to practice **responsive design at the component level**. A component only needs to know how much space it has to figure out how to best present data.

Inspired by Chad Carbert's [`ember-fill-up`](https://github.com/chadian/ember-fill-up), Isaac Lee created [`ember-container-query`](https://github.com/ijlee2/ember-container-query) that works best with Octane apps that target modern browsers. (IE 11 was excluded due to its lack of support for [`Resize Observer API`](https://developer.mozilla.org/docs/Web/API/Resize_Observer_API), a possible future direction.)

In addition to responsive design, container queries can also help you learn a few other techniques. We encourage you to check out Isaac's blog posts for more details:

- [Use modifiers to practice code composition](https://crunchingnumbers.live/2020/06/01/container-queries-reimagined/)
- [Decide the optimal image to load](https://crunchingnumbers.live/2020/06/03/container-queries-adaptive-images/)
- [Test apps and addons at multiple resolutions](https://crunchingnumbers.live/2020/06/07/container-queries-cross-resolution-testing/)

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [New LinkedIn group EmberJS developers 🐹](https://www.linkedin.com/posts/shibulijack_ember-community-strongertogether-activity-6673898303190654976-BgRg/)

[Shibu Lijack (@shibulijack)](https://github.com/shibulijack) created a LinkedIn **group for EmberJS enthusiasts**. It is a group that welcomes anyone who wants to share the latest and greatest of EmberJS that is shared on [EmberJS blogs](https://blog.emberjs.com/) and the [EmberJS Discord](https://discord.com/invite/emberjs) channels.

[Join the group](https://www.linkedin.com/groups/13863318/) today and start sharing your blog posts!

---

## [Confident asset handling for Ember & Cordova 📱🐹](https://dev.to/betocantu93/understanding-ember-js-public-assets-path-jj8)

If you ever wanted to write native mobile applications using [Corber](http://corber.io/),
you might have had questions on how url paths for your **assets** should look like. Especially if they are supposed to work both **natively and in the browser**.

But fear not! You can now learn all about it in [Beto Cantú's (@betocantu93)](https://github.com/betocantu93) recent blog post ["Understanding Ember.js Public Assets Path for Browser and Cordova"](https://dev.to/betocantu93/understanding-ember-js-public-assets-path-jj8). The post not only explains how asset urls are managed in different version of Ember applications,
but also shows you how to write your own handy helper to make url handling a breeze in your next Corber project.

Read the full post [on Beto Cantú's blog](https://dev.to/betocantu93/understanding-ember-js-public-assets-path-jj8)!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/nbibler" target="gh-user">@nbibler</a>, <a href="https://github.com/SergeAstapov" target="gh-user">@SergeAstapov</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/pieter-v" target="gh-user">@pieter-v</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/kategengler" target="gh-user">@kategengler</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/jayjayjpg" target="gh-user">@jayjayjpg</a>, <a href="https://github.com/lenoraporter" target="gh-user">@lenoraporter</a>, <a href="https://github.com/jaredgalanis" target="gh-user">@jaredgalanis</a>, <a href="https://github.com/ijlee2" target="gh-user">@ijlee2</a>, <a href="https://github.com/nvdk" target="gh-user">@nvdk</a> and <a href="https://github.com/jdberrocal1" target="gh-user">@jdberrocal1</a>  for their contributions to Ember and related repositories! 💖</p>

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

Abhilash LR, Matthew Roderick, Chris Ng, Aseem Taneja, Isaac Lee, Jessica Jordan, Jared Galanis the crowd and the Learning Team
