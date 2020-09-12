---
title: The Ember Times - Issue No. 163
author: Isaac Lee, Jared Galanis, Abhilash LR, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/09/11-the-ember-times-issue-163.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

Learn what's new in Ember 3.21 release 🎉,
Celebrate 3 addon major releases 🌟,
Get ready for Hacktoberfest 2020 👩🏽‍💻🧑🏽‍💻,
Embroider preparation blog post 📖,
EmberJS with REST API 💪,
CI with GitHub Actions for Ember Apps: Part 2 🎥,

READMORE

---

## [Learn what's new in Ember 3.21 release 🎉](https://blog.emberjs.com/2020/09/02/ember-3-21-released.html)

The Ember Blog [announced the v3.21 releases](https://blog.emberjs.com/2020/09/02/ember-3-21-released.html) of Ember.js, Ember Data, and Ember CLI. The occasion also marked the **LTS release of Ember v3.20**. It will receive [bug fixes until May 2021 and security patches until September 2021](https://emberjs.com/releases/lts).

The release of version 3.21 may affect your development workflow in a few ways:

- `getWithDefault` (both the function and class method) has been deprecated per [RFC #554](https://github.com/emberjs/rfcs/blob/master/text/0554-deprecate-getwithdefault.md)
- `ember new --lang` support has landed per [RFC #635](https://github.com/emberjs/rfcs/blob/master/text/0635-ember-new-lang.md)
- [ember-try](https://github.com/ember-cli/ember-try) configuration for addons has been updated to include `ember-lts-3.20` and exclude `ember-lts-3.12`.

The release also kicked off the 3.22 beta cycle. If you can, please help with testing beta builds and reporting bugs before version 3.22.0 is published. 💜

---

## [Embroider preparation blog post 📖](https://medium.com/@kiwiupover/embroider-preparation-14d59edafc0b)

Have you been thinking about giving Embroider a try in your addon? Well, the community could use your help in landing Embroider and you may want to consider trying it out! 

If you are inclined to give this a go there's an ✨**awesome**✨ new [blog post](https://medium.com/@kiwiupover/embroider-preparation-14d59edafc0b) on this subject by [Dave Laird (@kiwiupover)](https://github.com/kiwiupover) that introduces some ideas about testing your addon against Embroider that may help you get started.

The blog post talks about how you can integrate Embroider into your build pipeline and how you can run your tests against it with `ember-try`. If you are at all curious about Embroider and/or you help maintain an addon, you should go give the fantastic and timely post a read.

---

## Celebrate 3 addon major releases 🌟

Three Ember addons recently published a major release:

- [ember-cli-typescript v4.0.0](https://github.com/typed-ember/ember-cli-typescript/releases/tag/v4.0.0), in addition to introducing internal tests, enables the use of the [`declare` property modifier](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#the-usedefineforclassfields-flag-and-the-declare-property-modifier). Please check that `ember-cli-babel >= v7.17.0` and `ember-auto-import >= v1.6.0` (the latter if you use it).
- [empress-blog v2.0.0](https://github.com/empress/empress-blog/releases/tag/v2.0.0) [significantly reduces the bundle size](https://twitter.com/real_ate/status/1301536390845534208) of most sites built with `empress-blog`. 
- [eslint-plugin-ember v9.0.0](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v9.0.0) recommends 6 rules and provides an option to 3 existing rules.

We thank all contributors who made these major releases possible: [Bouke Haarsma (@Bouke)](https://github.com/Bouke), [Bryan Mishkin (@bmish)](https://github.com/bmish), [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho), [Chris Mansona (@mansona)](https://github.com/mansona), [Dan Freeman (@dfreeman)](https://github.com/dfreeman), [David Hamilton (@hjdivad)](https://github.com/hjdivad), [Ewan McDougall (@mrloop)](https://github.com/mrloop), [James Davis (@jamescdavis)](https://github.com/jamescdavis), and [Nick Schot (@nickschot)](https://github.com/nickschot).

---

## [CI with GitHub Actions for Ember Apps: Part 2 🎥](https://crunchingnumbers.live/2020/08/31/ci-with-github-actions-for-ember-apps-part-2/)

In continuation of a blog post on [CI with GitHub Actions for Ember Apps](https://crunchingnumbers.live/2020/03/17/ci-with-github-actions-for-ember-apps/), [Isaac Lee (@ijlee2)](https://github.com/ijlee2) wrote another [blog post](https://crunchingnumbers.live/2020/08/31/ci-with-github-actions-for-ember-apps-part-2/) about how Github Actions saved time on his projects. He talks about how to migrate to v2 actions, lower the runtime costs, and set up continuous deployment for your Ember apps.

If you are looking to setup Github Actions for your Ember apps, you should give [this blog post a read here](https://crunchingnumbers.live/2020/03/17/ci-with-github-actions-for-ember-apps/).

---

## [EmberJS with REST API 💪](https://github.com/ember-learn/ember-blog/pull/768)

[John Costanzo (@jrock2004)](https://twitter.com/jrock2004) wrote a blog titled [EmberJS with REST API](https://github.com/ember-learn/ember-blog/pull/768). The blog details about how to get your APIs to work well with Ember Data out of the box if it follows REST API conventions. If in case your APIs don't follow the REST conventions, the post details about how to modify your Ember App' serializer to make them work.

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

## [Get ready for Hacktoberfest 2020 👩🏽‍💻🧑🏽‍💻](https://hacktoberfest.digitalocean.com/)

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is a month-long celebration of open source software. Between October 1 and October 31, you are encouraged to submit **4 quality pull requests to public GitHub repos**. In return, you'll get a limited edition Hacktoberfest T-shirt and stickers (plus knowledge and fun).

If you are an addon maintainer, we encourage you to create issues with a well-defined scope for contributors to jump in and help. Be sure to label the issues with `Hacktoberfest` so that they're easier to discover. You can also tweet issues or repos with the hashtag `#Hacktoberfest`. Last but not least, please follow the [Ember Community Guidelines](https://emberjs.com/guidelines) and provide a welcoming experience to all contributors.

If you are new to open source contribution, we encourage you to be curious and proactive in asking for help. (There is a [`#hacktoberfest`](https://discord.com/channels/480462759797063690/496453502298750988) channel on [Ember Discord](https://discord.gg/emberjs).) A repo may provide directions in `CONTRIBUTING` or `README` file to help you get started. An Ember addon that you have used before may be a good place to start; the Ember teams will also provide issues that may interest you.

- [https://help-wanted.emberjs.com](https://help-wanted.emberjs.com)
- [https://github.com/emberjs](https://github.com/emberjs)
- [https://github.com/ember-cli](https://github.com/ember-cli)
- [https://github.com/ember-data](https://github.com/ember-data)
- [https://github.com/ember-learn](https://github.com/ember-learn)

For more information, you can visit [Hacktoberfest Details](https://hacktoberfest.digitalocean.com/details) and [Hacktoberfest FAQ](https://hacktoberfest.digitalocean.com/faq).

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/andreyfel" rel="noopener noreferrer" target="_blank">Andrey Fel (@andreyfel)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/chrisvdp" rel="noopener noreferrer" target="_blank">Chris van der Ploeg (@chrisvdp)</a>, <a href="https://github.com/ckarlbe" rel="noopener noreferrer" target="_blank">Kalle (@ckarlbe)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/knownasilya" rel="noopener noreferrer" target="_blank">Ilya Radchenko (@knownasilya)</a>, <a href="https://github.com/krisselden" rel="noopener noreferrer" target="_blank">Kris Selden (@krisselden)</a>, <a href="https://github.com/lifeart" rel="noopener noreferrer" target="_blank">Alex Kanunnikov (@lifeart)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/theenadayalank" rel="noopener noreferrer" target="_blank">Theenadayalan (@theenadayalank)</a>, <a href="https://github.com/toh995" rel="noopener noreferrer" target="_blank">@toh995</a>, and <a href="https://github.com/wycats" rel="noopener noreferrer" target="_blank">Yehuda Katz (@wycats)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Isaac Lee, Jared Galanis, Abhilash LR, the crowd and the Learning Team
