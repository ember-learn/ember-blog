---
title: The Ember Times - Issue No. 168
author: Chris Ng, Amy Lam, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/11/20-the-ember-times-issue-168.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Read the blog on yieldable named blocks 📛,
ember-bootstrap Octane updates 🏎,
Keep up to date on `@use` and Resources RFC 💡,

READMORE

---

## [Blog: Modal Dialog Using Yieldable Named Blocks 📛](https://balinterdi.com/blog/making-a-modal-dialog-using-yieldable-named-blocks/)

A blog post by [Balint Erdi (@balinterdi)](https://github.com/balinterdi) goes through how [Named Blocks](https://emberjs.github.io/rfcs/0226-named-blocks.html) allows us to have more than one block when invoking components using the angle-bracket syntax.

With the [Yieldable Named Blocks RFC](https://emberjs.github.io/rfcs/0460-yieldable-named-blocks.html) accepted and the [ember-named-blocks-polyfill](https://github.com/ember-polyfills/ember-named-blocks-polyfill) already implementing it, we can use yieldable named blocks in our Ember apps today. The blog goes through using the `{{yield to=""}}` syntax to implement multiple named blocks in a modal example.

Named blocks are useful anywhere where it makes sense to provide several "slots" that the user of the component can customize. Read the full post today on [Balint’s blog](https://balinterdi.com/blog/making-a-modal-dialog-using-yieldable-named-blocks/)!

---

## [ember-bootstrap Octane updates 🏎](https://github.com/kaliber5/ember-bootstrap)

[kaliber5/ember-bootstrap](https://github.com/kaliber5/ember-bootstrap) v4.4 was recently released, continuing their incremental Octane rewrite. Tooltips and popovers have been refactored to Glimmer components. 

For ember-bootstrap's 4.x cycle, the overarching goal is to incrementally rewrite all components to Glimmer components. The team is also aiming to replace all computed properties with tracked properties. These changes have been possible because **all components were first refactored to tagless components**. 🌟

Other highlights from ember-bootstrap 4.x include adding Embroider compatibility (including `staticComponents`) and dropping support for subclassing components. As a replacement, users can now build a component library on top of ember-bootstrap, in a change that improves the developer experience.

For more details, check out the [changelog](https://github.com/kaliber5/ember-bootstrap/blob/master/CHANGELOG.md). 

---

## [Introducing `@use` 💡](https://www.pzuraq.com/introducing-use/)

In October, [Chris Garrett (@pzuraq)](https://github.com/pzuraq) published a blog post and an addon to highlight updates regarding the [`@use` and Resources RFC](https://github.com/emberjs/rfcs/blob/use-and-resources/text/0567-use-and-resources.md).

In [Introducing `@use`](https://www.pzuraq.com/introducing-use/), Chris explains how [ember-could-get-used-to-this](https://github.com/pzuraq/ember-could-get-used-to-this) invites us to rethink template constructs. The addon proposes 4 top-level concepts:

- Functions, meant to replace Ember helpers defined with the `helper()` function
- Resources, to bridge a gap between imperative and declarative programming through `@use` decorator and `Resource` class
- Modifiers, to handle DOM modifications
- Effects, to pull a value out of the system and use it externally

Be sure to read the blog post and try out the addon. We think it will give you a preview of what's coming next to Ember!

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

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/chadhietala" rel="noopener noreferrer" target="_blank">Chad Hietala (@chadhietala)</a>, <a href="https://github.com/jamescdavis" rel="noopener noreferrer" target="_blank">James C. Davis (@jamescdavis)</a>, <a href="https://github.com/defraz" rel="noopener noreferrer" target="_blank">Christopher Fraser (@defraz)</a>, <a href="https://github.com/hergaiety" rel="noopener noreferrer" target="_blank">Ava Gaiety Wroten (@hergaiety)</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/cincodenada" rel="noopener noreferrer" target="_blank">Joel Bradshaw (@cincodenada)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/GuillaumeCisco" rel="noopener noreferrer" target="_blank">Cisco Guillaume (@GuillaumeCisco)</a>, <a href="https://github.com/chrismllr" rel="noopener noreferrer" target="_blank">Chris Miller (@chrismllr)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/eddiemm" rel="noopener noreferrer" target="_blank">Edgar Mancia (@eddiemm)</a>, <a href="https://github.com/achambers" rel="noopener noreferrer" target="_blank">Aaron Chambers (@achambers)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/KrishnaRPatel" rel="noopener noreferrer" target="_blank">Krishna Patel (@KrishnaRPatel)</a>, <a href="https://github.com/shivani2692" rel="noopener noreferrer" target="_blank">@shivani2692</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/pgengler" rel="noopener noreferrer" target="_blank">Phil Gengler (@pgengler)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/jwlawrence" rel="noopener noreferrer" target="_blank">Joshua Lawrence (@jwlawrence)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/jsturgis" rel="noopener noreferrer" target="_blank">Jeff Sturgis (@jsturgis)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/fozy81" rel="noopener noreferrer" target="_blank">Tim (@fozy81)</a>, <a href="https://github.com/nickschot" rel="noopener noreferrer" target="_blank">Nick Schot (@nickschot)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, and <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Amy Lam, Isaac Lee, the crowd and the Learning Team
