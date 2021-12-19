---
title: The Ember Times - Issue No. 193
authors:
  - the-crowd
  - chris-ng
  - jared-galanis
date: 2021-12-12T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Happy 10th Birthday Ember 🐹,
Ember Addon Roundup 🌎,

---

## [Happy 10th Birthday Ember 🐹](https://twitter.com/wycats/status/1468774795529515008)

On December 8th Ember.js completed another trip around the 🌞 and turned 10 years old! 🥳

[Yehuda Katz (@wycats)](https://github.com/wycats) recently [tweeted about the milestone for Ember](https://twitter.com/wycats/status/1468774795529515008) and noted some of the most notable things that been achieved in Ember's history:

- we adopted promises and made them the primary way to do async in Ember (2013)
- we added first-class support for JS modules via ember-cli (2014)
- we adopted React-style one-way data flow via Glimmer (2015)
- we landed the VM architecture (Glimmer 2) as a drop-in, backwards-compatible change (2016). This change was cited by React as one of the technical motivations for Hooks.
- Moved the primary Ember API from Ember.* (global) to an intentionally designed JS module API (2016)
- Landed support for native JS classes (2017)
- Landed support for ES getters and setters, eliminating the need for manual get/set (2018)
- Eliminated mandatory dependency on jQuery (2018)
- Tracked Properties and Autotracking (2019)
- Landed the Octane Edition in a minor release as a backwards-compatible change (2019). This came with a revamped component system based on native JS features (no longer inheriting from the classic Ember.Object superclass), more composable DOM (modifiers), autotracking by default
- Landed the primitives needed to support putting templates and JS in the same file, as well as multiple components in one file (2020). Also shipped a library that works with stable Ember that lets you use it today.
- Landed Embroider, Ember's next generation, drop-in build system that natively supports npm packages, template imports (see above) and webpack bundling (2021). It also (already) supports route-based code-splitting for Ember apps that opt into slightly stricter (idiomatic) code
- Large, real-world apps have been able to make the migration to route-based code splitting in a matter of a few weeks.
- All of that doesn't include massive improvements to a11y, very strong TypeScript support (soon maintained officially by the framework team, once the relevant RFCs are approved), migration from a bespoke transpiler to Babel -> 6 -> 7 (transparently to users)
<!-- alex ignore basically -->
- SSR with rehydration with only mild strictness restrictions like not using real DOM at the top level of your module (also idiomatic, basically necessary for tests to function well)

All of this has been achieved, and more! And as Yehuda points out, all of this doesn't even include our amazing progress on governance and release cadence.

What's more, in honor of the occasion [Mel Sumner (@MelSumner)](https://github.com/MelSumner) created an amazing tribute to the framework we know and 💛💙💜💚🧡 l️ove 💛💙💜💚. The [Why Ember](https://whyember.com/) site is now live! The site contains a ton of information about what makes Ember such a great choice, including resources for those new to the framework or considering migrating and a list of some of awesome addons.

There have been many, many achievements over the last decade, and our core teams and community alike deserve to be proud of what we have accomplished - congratulations to all! 🎉

---

## Ember Addon Roundup 🌎

We’ve had several addons across the Ember ecosystem release updates recently, here’s what you may have missed and reasons to upgrade!

- [Jon Kilroy (@jkusa)](https://github.com/jkusa) released [ember-arg-types v0.4.0](https://twitter.com/jonkilroy/status/1461089358338039815) which provides the **forbidExtraArgs** decorator for checking that only arguments with the `arg` decorator are provided to a component (useful for incorrect invocations).
- [Luke Miela (@lukemiela)](https://github.com/lukemelia) and [Sergey Astapov (@SergeAstapov)](https://github.com/SergeAstapov) released [ember-keyboard 7.0.0-beta.0](https://github.com/adopted-ember-addons/ember-keyboard/releases/tag/v7.0.0-beta.0) which dropped deprecated features in the 6.x series.
- [Chris Manson (@mansona)](https://github.com/mansona) released the [first version of the ember-cli-addon-docs migrator](https://twitter.com/real_ate/status/1464596213781704713) named [ecad-migrator](https://github.com/empress/ecad-migrator) which helps move your documentation to [Field Guide](https://github.com/empress/field-guide).
- [Scott Newcomer (@snewcomer)](https://github.com/snewcomer) released [ember-sortable v3.0](https://github.com/adopted-ember-addons/ember-sortable/blob/master/CHANGELOG.md#v300-2021-11-29) which removes the component version of the addon (only allows using the modifier version).

---

## [🐹 3. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 4. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 5. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 6. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 7. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 8. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jared Galanis and the Learning Team
