---
title: The Ember Times - Issue No. 173
authors:
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
  - chris-ng
  - isaac-lee
  - jared-galanis
  - amy-lam
date: 2021-02-12T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹
Beta release of ember-template-lint v3 ✅,
Prettier for .hbs 😀
Learn more Ember.js in 2021 💡,
New Ember-related podcasts 🎙,
Pro Ember Data Book 📖,

---

## [Beta release of ember-template-lint v3 ✅](https://twitter.com/melaniersumner/status/1349820518216708096)

[ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) which is a linter for template files in Ember has released a [beta version of 3.0.0](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v3.0.0-beta.0). This release will include the TODO feature which will help teams adopt the latest version of ember-template-lint and immediately apply linting rules to new code while allowing time to resolve existing issues.

As part of the 3.0.0 beta release, a lot of rules have also been [turned on in the default recommended config](https://github.com/ember-template-lint/ember-template-lint/pull/1643). This version will also [promote the octane config](https://github.com/ember-template-lint/ember-template-lint/pull/1639) into the default recommended config.

Check out the full [plan for the 3.0.0 release](https://github.com/ember-template-lint/ember-template-lint/issues/1315) on GitHub.

---

## [Prettier for .hbs 😀](https://dev.to/jelhan/format-glimmer-templates-with-prettier-ipa)

Prettier is coming to an Ember `.hbs` file near you! [Prettier](https://prettier.io/) is a popular opinionated code formatter. New Ember projects get Prettier out of the box for `.js` files, and existing projects can adopt Prettier with [`ember-cli-update`](https://cli.emberjs.com/release/basic-use/upgrading/).

<!-- alex ignore whitespaces -->
Check out [Jeldrik Hanschke (@jelhan)'s](https://github.com/jelhan) post [Format Glimmer templates with Prettier](https://dev.to/jelhan/format-glimmer-templates-with-prettier-ipa) and [tweet](https://twitter.com/jelhan1/status/1358537538932248576) to learn how to configure Prettier for Ember `.hbs` files, with specific tips to Prettier `.hbs` on save in VS Code. Note: Prettier for Glimmer templates does not (yet) respect meaningful whitespaces, which will be problematic if your application is not internationalized (i18n'd). Give it a try in your app to see if there are any gotchas.

There is a PR from [Cyrille David (@dcyriller)](https://github.com/dcyriller) to [Move Handlebars support out of alpha to release](https://github.com/prettier/prettier/pull/10290) on Prettier as well.

<for substack: <https://dev.to/jelhan/format-glimmer-templates-with-prettier-ipa>>

---

## Learn more Ember.js in 2021 💡

If you are new to Ember.js in 2021—first of all, on behalf of the broader community, a warm welcome from The Ember Times! We're lucky to have you and hope that you will say hello and ask questions. 👋🏼

Over the past couple of months, several people have helped out with your learning experience by publishing blog posts and videos. We'd like to list them here for your convenience (apologies if we missed something; please let us know on the [`#support-ember-times`](https://discord.com/channels/480462759797063690/485450546887786506) channel on [Discord](https://discord.gg/emberjs)):

- [Ember.js Octane Basics](https://www.youtube.com/playlist?list=PLfQwL10yab39JgxX5PaVyqUkPs_0sT790) by Ilya Radchenko
- [Ember.js Tutorial for Beginners in 2020](https://www.youtube.com/playlist?list=PLk51HrKSBQ88wDXgPF-QLMfPFlLwcjTlo) by Shawn Chen
- [Ember & TypeScript series](https://www.youtube.com/playlist?list=PLfQwL10yab3_MLihiat-r9l8qt8x1RD7J) by Ilya Radchenko
- [I ❤ Ember.js — Introduction](https://medium.com/search?q=I%20%E2%9D%A4%20Ember.js%20Evan%20Martinez) by Evan Martinez
- [UI Automation Testing with Ember.js](https://www.youtube.com/watch?v=DoWdWxW1Sk0) by Palak Goel

Please check them out to learn more about Ember.js. You can provide the authors support and encouragement by giving a thumbs up and sharing the link with others!

---

## New Ember-related podcasts 🎙

There are a few new interesting podcasts on the block that either were recently released or will be released soon that will cover Ember-related, and other, subjects:

- For a more fully Ember-focused podcast, check out [The Ember Report](https://twitter.com/kennethlarsen/status/1359568838401097729) by [Kenneth Larsen (@kennethlarsen)](https://github.com/kennethlarsen) and [Jan Buschtöns (@buschtoens)](https://github.com/buschtoens). The first episode was recently recorded and should hopefully be out soon!
- If you are interested in listening to conversations that are not exclusively tech-related and don't mind hearing a bit about whiskey, but also would like to hear about some web and Ember topics, [Whiskey Web and Whatnot](https://twitter.com/shipshapecode/status/1358853436486393865), by [Robert Wagner (@rwwagner90](https://github.com/rwwagner90) and [Chuck Carpenter (@chuckcarpenter)](https://github.com/chuckcarpenter) of Ship Shape released its first episode this week, give it a listen and follow on [Spotify](https://open.spotify.com/show/19jiuHAqzeKnkleQUpZxDf)!

---

## [Pro Ember Data Book 📖](https://twitter.com/iamdtang/status/1347253677438889985)

<!-- alex ignore tang -->
[David Tang (@skaterdav85)](https://github.com/skaterdav85) has recently published a new book about Ember Data 🔥🔥🔥! If you were a fan of David's previous book, Ember Data in the Wild, you'll love the new book, [Pro Ember Data](https://www.apress.com/us/book/9781484265604)!

Pro Ember Data covers a variety of topics that come up when working with Ember Data, including everything from adapters and serializers to polymorphic relationships and Pro Ember Data will teach you how to adapt Ember Data to fit your custom API.

If you've been looking to deepen your knowledge about Ember Data, definitely consider getting yourself a copy.

Bonus! David has also recently released a [blog post](https://davidtang.io/trapping-focus-in-a-modal-in-ember/) on how to make modal's more accessible.

---

## [6. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [7. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [8. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/dfreeman" rel="noopener noreferrer" target="_blank">Dan Freeman (@dfreeman)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/urbany" rel="noopener noreferrer" target="_blank">João Teixeira (@urbany)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/alexlafroscia" rel="noopener noreferrer" target="_blank">Alex LaFroscia (@alexlafroscia)</a>, <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/chiragpat" rel="noopener noreferrer" target="_blank">Chirag Patel (@chiragpat)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/jaydgruber" rel="noopener noreferrer" target="_blank">@jaydgruber</a>, <a href="https://github.com/jamescdavis" rel="noopener noreferrer" target="_blank">James C. Davis (@jamescdavis)</a>, <a href="https://github.com/whanchong" rel="noopener noreferrer" target="_blank">whanchong (@whanchong)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/krisselden" rel="noopener noreferrer" target="_blank">Kris Selden (@krisselden)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/yads" rel="noopener noreferrer" target="_blank">Vadim Kazakov (@yads)</a>, <a href="https://github.com/davecombs" rel="noopener noreferrer" target="_blank">Dave Combs (@davecombs)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/josephdsumner" rel="noopener noreferrer" target="_blank">Joseph D. Sumner (@josephdsumner)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/Turbo87" rel="noopener noreferrer" target="_blank">Tobias Bieniek (@Turbo87)</a>, <a href="https://github.com/hjdivad" rel="noopener noreferrer" target="_blank">David J. Hamilton (@hjdivad)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/kobsy" rel="noopener noreferrer" target="_blank">Matt Kobs (@kobsy)</a>, <a href="https://github.com/sandstrom" rel="noopener noreferrer" target="_blank">@sandstrom</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/eramod" rel="noopener noreferrer" target="_blank">Dianne Eramo (@eramod)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/charlespierce" rel="noopener noreferrer" target="_blank">Charles Pierce (@charlespierce)</a>, <a href="https://github.com/thoov" rel="noopener noreferrer" target="_blank">Travis Hoover (@thoov)</a>, <a href="https://github.com/azhiv" rel="noopener noreferrer" target="_blank">Artem Zhivoderov (@azhiv)</a>, and <a href="https://github.com/wondersloth" rel="noopener noreferrer" target="_blank">Matthew Edwards (@wondersloth)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>, now on Substack! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Isaac Lee, Jared Galanis, Amy Lam, and the Learning Team
