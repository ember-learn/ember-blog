---
title: The Ember Times - Issue No. 202
authors:
  - jared-galanis
  - chris-ng
date: 2022-07-24T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹
RFC: Evolving Ember's Major Version Process 🌲,
Ember Addon Roundup 🌐,
Whiskey Web and Whatnot Episode with Dan Gebhardt 🔊,
Modern CSS in an embroider enabled app 📖,
Ember Chessboard Videos 📼,
RFC: Standardize npm yarn use ✨,
RFC: public types for Owner, Transition, RouteInfo in FCP ⌛️,

---

## [RFC: Evolving Ember's Major Version Process 🌲](https://github.com/emberjs/rfcs/pull/830)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) published an RFC on [Evolving Ember’s Major Version Process](https://github.com/emberjs/rfcs/pull/830). The RFC proposes to put major versions on a predictable 60-week cadence, similar to the [6-week minor release cadence](https://emberjs.com/releases/).

The RFC argues that while [Ember mentions](https://emberjs.com/releases/) that it aims to "make major releases as rare as possible” since it forces development teams to spend time researching the changes and modifying their codebase before they can upgrade, it actually makes upgrades more painful rather than less painful. For Ember users while the major releases may be more rare, they actually become harder over time and for Ember maintainers the planning and coordination required for a major release happens on an ad hoc basis with no ability to plan for it in advance.

Chris presents an alternate way to use SemVer by clarifying how we use major releases and editions, namely: never couple the addition of new features to breaking changes, Ember major versions should only remove deprecated features, and Ember's big releases are labeled as "Editions” and lands as a minor release and is therefore always backwards compatible.

Read more about the RFC and add your comments on [GitHub](https://github.com/emberjs/rfcs/pull/830)!

---

## Ember Addon Roundup 🌐

We’ve had several addons across the Ember ecosystem release updates recently, here’s what you may have missed:

- [NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli)'s released [v5.0.0](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position/blob/main/CHANGELOG.md#500-2022-07-15) of `eslint-plugin-decorator-position` which [now supports es-lint 8](https://twitter.com/nullvoxpopuli/status/1547769958230155269).
- [Nick Schot (@nickschot)](https://github.com/nickschot) [announced the v3 release](https://twitter.com/nickschot/status/1550438922882371584) of `ember-mobile-menu` which includes support for PointerEvents so gestures for mouse or pen users can be enabled. Check the [release notes](https://github.com/nickschot/ember-mobile-menu/releases/tag/v3.0.0) for a bunch of other modernizations.
- Not a release, but [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) announced [a draft PR](https://github.com/emberjs/ember-test-helpers/pull/1234) that introduces public TypeScript support in `ember-test-helpers`. This is the first official library publishing types under the TypeScript support policy adopted earlier this year.
- [Isaac Lee (@ijlee2)](https://github.com/ijlee2/) introduced [`ember-codemod-pod-to-octane`](https://github.com/ijlee2/ember-codemod-pod-to-octane), a codemod to help you un-pod Ember apps, addons, and engines.

---

## [Whiskey Web and Whatnot Episode with Dan Gebhardt 🔊](https://twitter.com/shipshapecode/status/1547916152055091208)

<!--alex ignore alumnae-alumni-->
There's another new episode of Whiskey Web and Whatnot that you might want to check out and it features Ember core team alumni [Dan Gebhardt (@dgeb)](https://github.com/dgeb)! 🔥

[Robert Wagner (@rwwagner90)](https://github.com/rwwagner90) and [Chuck Carpenter (@chuckcarpenter)](https://github.com/chuckcarpenter) of Ship Shape chat with Dan about syncing data sources and handling spotty network connections, how Orbit.js helps to address these issues, and more!

Listen to [the episode](https://www.whiskeywebandwhatnot.fm/developing-orbit-and-the-future-of-cross-framework-solutions-with-dan-gebhardt/) today.

---

## [Modern CSS in an embroider enabled app 📖](https://twitter.com/evo1/status/1547312309185511426)

[Liam Potter (@evoactivity)](https://github.com/evoactivity) wrote a nice article about how to best use modern approaches to handling CSS in an embroider enabled Ember app! 🙌

The article covers setting up PostCSS and Tailwind configs, using Webpack, and more! Go checkout [the article](https://github.com/evoactivity/ember-modern-css/blob/main/README.md) today!

---

## [Ember Chessboard Videos 📼](https://twitter.com/knownasilya/status/1545585741073420288)

[Ilya Radchenko (@knownasilya)](https://github.com/knownasilya) released a couple of ✨ awesome new videos ✨ that run through building an Ember.js chessboard.js app using an exciting new (alpha) scaffolding library called [Engage](https://github.com/warp-drive-engineering/engage) that's authored by [Chris Thoburn (@runspired)](https://github.com/runspired)!

Head on over to YouTube and check out [part 1](https://www.youtube.com/watch?v=4Yt98vPyfv4) and [part 2](https://www.youtube.com/watch?v=WLGwOKD9PXo)!

---

## [RFC: Standardize npm yarn use ✨](https://github.com/emberjs/rfcs/pull/831)

[Mehul Chaudhari (@MehulKChaudhari)](https://github.com/MehulKChaudhari) and [Dhanush Kumar
 (@dhanush027)](https://github.com/dhanush027) have co-authored a 😎 new RFC that focuses on standardizing the use of yarn and npm scripts in the Ember experience rather than using Ember specific commands. This could better align Ember with norms in the larger JavaScript community.

 If you're interested in this subject please head over to [the RFC](https://github.com/emberjs/rfcs/pull/831), give it a read and participate by commenting!

---

## [RFC: public types for Owner, Transition, RouteInfo in FCP ⌛️](https://twitter.com/emberjs/status/1550796034049277953)

The RFC for introducting public types for Owner, Transition, RouteInfo is now in its final comment period so if you're interested in participating in that discussion hurry over to the [RFC](https://github.com/emberjs/rfcs/pull/821) and leave a comment!

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

Jared Galanis, Chris Ng, the crowd and the Learning Team
