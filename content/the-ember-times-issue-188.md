---
title: The Ember Times - Issue No. 188
authors:
  - chris-ng
  - isaac-lee
  - amy-lam
date: 2021-09-10T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

🎉 Ember 3.28 and 4.0 Beta Released,
Reactively handle audio in Octane with `ember-stereo` 🎵,
Twitter Thread: Ember is Data First 🐦,

---

## [🎉 Ember 3.28 and 4.0 Beta Released](section-url)

After 3.5 years and 28 minor releases, Ember 3.28 marks the end of the project's 3.x series. To ensure a smooth upgrade path going into the 4.x series, 3.28 has been declared an LTS (Long Term Support) candidate. In six weeks, the latest patch version of 3.28 will be promoted to be the latest LTS release and replace 3.24-LTS.

**We're also announcing the start of the Ember 4.0 beta cycle for all sub-projects.** Following the process set in previous major versions, Ember 4.0's beta introduces no new features. Instead, it removes support for deprecated public APIs. We encourage our community (especially addon authors) to help test beta builds and report any bugs before they are published as a stable release in six weeks' time. We also encourage everyone to help maintainers resolve deprecations in their favorite addons. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

Developers who want to prepare for the upcoming 4.0 version of Ember should work to resolve all deprecation warnings in their apps and addons while using Ember 3.28. An app or addon with no deprecation warnings on Ember 3.28 should be able to upgrade from Ember 4.0 without making significant changes outside of the dependency versions.

You can read more about Ember's plans for 4.0 in [The Road to Ember 4.0](https://blog.emberjs.com/the-road-to-ember-4-0/). Please visit [Ember 3.28 and 4.0 Beta Released](https://blog.emberjs.com/ember-3-28-released/) for the rest of the post, including details on Ember.js, Ember Data, and Ember CLI. Many thanks to [Matthew Beale (@mixonic)](https://github.com/mixonic), [Jen Weber (@jenweber)](https://github.com/jenweber), and [Isaac Lee (@ijlee2)](https://github.com/ijlee2) for the excellent and informative writeup!

---

## [🐹 4. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🎵 Reactively handle audios in Octane with `ember-stereo`](https://github.com/jkeen/ember-stereo)

Since 2016, [Jeff Keen (@jkeen)](https://github.com/jkeen) helped develop the open-source [ember-hifi](https://github.com/nypublicradio/ember-hifi) for the New York Public Radio.

<!-- alex ignore retext-equality -->
Jeff recently released its modern, reactive successor [ember-stereo](https://github.com/jkeen/ember-stereo). He has worked hard on making audio manipulation simple and providing [extensive examples](https://ember-stereo.com/docs). We encourage you to have a look!

Out of the box, you will be provided with:

- `stereo` service: It manages loading and playing sounds, making sure that only one sound plays at a time, setting volume, and providing system-level events that your application can tie into.
- Template helpers, which can perform an action on, or retrieve information from, a sound or `url` string—something entirely new from how `ember-hifi` did things!
- A couple of modifiers, to help control volume and position
- `setupStereoTest()`, to help write tests

---

## [🐦 Twitter Thread: Ember is Data First](https://twitter.com/davert/status/1435372911452373000)

[Michael Bodnarchuk (@DavertMik)](https://github.com/DavertMik) wrote a [Twitter Thread](https://twitter.com/davert/status/1435372911452373000) on how tracked properties in Glimmer components help you build data-oriented components.

Michael mentions that in React you write hooks to update the component's state, while in Ember the component's state is tied to the data. This data first approach makes it so we can pass the reacting class to the root component and we do not need to change any child components to make it work.

Read the full [Twitter Thread](https://twitter.com/davert/status/1435372911452373000) and let us know if you have any thoughts about it too!

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/charlesfries" rel="noopener noreferrer" target="_blank">Charles Fries (@charlesfries)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/esquith" rel="noopener noreferrer" target="_blank">Esquith Allen (@esquith)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/ChrisCarini" rel="noopener noreferrer" target="_blank">Chris Carini (@ChrisCarini)</a>, <a href="https://github.com/sly7-7" rel="noopener noreferrer" target="_blank">Sylvain MINA (@sly7-7)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/lifeart" rel="noopener noreferrer" target="_blank">Alex Kanunnikov (@lifeart)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/Glarregle" rel="noopener noreferrer" target="_blank">Gabriela Larregle (@Glarregle)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/himynameisjonas" rel="noopener noreferrer" target="_blank">Jonas Brusman (@himynameisjonas)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/stefanpenner" rel="noopener noreferrer" target="_blank">Stefan Penner (@stefanpenner)</a>, <a href="https://github.com/ndekeister-us" rel="noopener noreferrer" target="_blank">Nathanaël Dekeister (@ndekeister-us)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, and <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [🤓 Connect with us](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Isaac Lee, Amy Lam, and the Learning Team
