---
title: The Ember Times - Issue No. 192
authors:
  - chris-ng
  - bryan-mishkin
  - isaac-lee
  - jessica-justice
  - jared-galanis
date: 2021-11-28T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹
Release of ember-functions-as-helper-polyfill 🎉,
First pre-release of ember-template-lint v4 🧹,
Phorest Interview of Balint Erdi 🎙️,
Paired Programming 👭,
Ember.js Template Imports Blog Series Finale 📚,
Deprecate Bower Support RFC ⏰

---

## [Release of ember-functions-as-helper-polyfill 🎉](https://twitter.com/nullvoxpopuli/status/1460052313624784899)

[NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) released the [ember-functions-as-helper-polyfill](https://github.com/NullVoxPopuli/ember-functions-as-helper-polyfill) addon which implements [RFC 756: Default Helper Manager](https://github.com/emberjs/rfcs/pull/756). The addon lets you use plain functions as helpers, check out the example below:

```javascript
import Component  from '@glimmer/component';

export default class MyComponent extends Component {
  myHelper = x => x * 2;
}
```

```handlebars
{{this.myHelper 3}}
```

This reduces the need to create [traditional helpers](https://guides.emberjs.com/release/components/helper-functions/) especially when a helper is only really used within the same component. This addon reduces the amount of boilerplate code written and is a more representational model of how template and JS interact.

Try out this functionality today with the [polyfill](https://github.com/NullVoxPopuli/ember-functions-as-helper-polyfill)!

---

## [First pre-release of ember-template-lint v4 🧹](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v4.0.0-alpha.0)

[Bryan Mishkin (@bmish)](https://github.com/bmish) has kicked off the release cycle for [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) v4 with the first pre-release version [v4.0.0-alpha.0](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v4.0.0-alpha.0)!

The key changes so far include:

* Adding over a dozen rules to the `recommended` config
* Removing deprecated rules, options, and behaviors
* Dropping support for old versions of Node
* Enforcing stricter default behavior for a few rules
* Enforcing stricter validation of configuration files and rule tests
* Enforcing a strictly-defined public Node API

Please test it out and provide feedback about the current changes or changes you would like to see by commenting in the [tracking issue](https://github.com/ember-template-lint/ember-template-lint/issues/1908).

---

## [Phorest Interview of Balint Erdi 🎙️](https://nothingventured.rocks/ember-phorest-with-balint-erdi-7e90126975ee)

[Balint Erdi (@balinterdi)](https://github.com/balinterdi), author of [Rock & Roll with Ember.js](https://balinterdi.com/rock-and-roll-with-emberjs/) and co-organizer of [EmberFest](https://emberfest.eu/), recently got to share his thoughts of working with Ember. In addition to the [full video](https://www.youtube.com/watch?v=BQ46w3PGw7s), you can find a summary of the interview on [Phorest's blog](https://nothingventured.rocks/ember-phorest-with-balint-erdi-7e90126975ee).

What is it like to transition a legacy desktop application to an Ember app? To develop a brand new app that runs on Embroider? How can I hire developers and provide a good culture to help with retention? And what was EmberFest 2021 like for Balint?

Check out the interview to find out the answers to these questions!

---

## [Paired Programming 👭](https://nothingventured.rocks/the-perfect-pair-8d72db3d8a8b)

[Aoife (@aoifehannigan)](https://github.com/aoifehannigan) and [Mo (@mofiebiger)](https://github.com/mofiebiger), a senior and junior pair of engineers at Phorest, recently presented a lightning talk at Ember{{fest}} that addressed the topic of paired programming. They [documented their recent experiences with the activity](https://nothingventured.rocks/the-perfect-pair-8d72db3d8a8b) after electing to pair up to tackle learning Ember, the framework we know and love, and the one that they would be using to build a new application feature together.

Not only did the two find this practice ideal for avoiding unnecessary code complexity, but it also helped with feelings of isolation that arose during the pandemic-induced shift to remote work. While one drawback this pair found was a difficulty in context switching, the positive takeaways they discovered in regard to paired programming exercises include:

* The opportunity to get to know one's colleagues on a personal level
* A chance to grow one's programming and communication skills by observing, teaching, and asking questions
* The strategic advantage that comes with discussing a plan of action in advance and breaking problems down into smaller chunks
* An opportunity to build up a rapport with colleagues that led to more interaction overall and less time spent struggling alone

---

## [Ember.js Template Imports Blog Series Finale 📚](https://v5.chriskrycho.com/journal/ember-template-imports/)

You may remember from our last issue that there has been a great new 5+ part series from [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) on template imports. Well, part 5 of the series of posts is now out and there's also a bonus 6th post! 🔥

The [5th post](https://v5.chriskrycho.com/journal/ember-template-imports/part-5/) covers approaches to styling concerns in the context of template imports and the [6th post](https://v5.chriskrycho.com/journal/ember-template-imports/part-6/) provides a nice summary of all that's been discussed thus far in the series and what sorts of recommendations that Chris makes.

If you have not had a chance to read the series, do yourself a favor and check it out [here](https://v5.chriskrycho.com/journal/ember-template-imports/).

---

## [Deprecate Bower Support RFC ⏰](https://github.com/emberjs/rfcs/pull/772)

[Bert De Block (@bertdeblock)](https://github.com/bertdeblock) recently published a much-needed RFC that proposes how we might go about deprecating support for building Bower packages and the use of Bower-related APIs. ✨

If you are interested and would like to participate in / comment on the RFC, go ahead and give it a read and leave a comment, [here](https://github.com/emberjs/rfcs/pull/772).

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/ddzz" rel="noopener noreferrer" target="_blank">Darius D. (@ddzz)</a>, <a href="https://github.com/jaswilli" rel="noopener noreferrer" target="_blank">Jason Williams (@jaswilli)</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/lolmaus" rel="noopener noreferrer" target="_blank">Andrey Mikhaylov (lolmaus) (@lolmaus)</a>, <a href="https://github.com/Windvis" rel="noopener noreferrer" target="_blank">Sam Van Campenhout (@Windvis)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/michaelbdai" rel="noopener noreferrer" target="_blank">Bing Dai (@michaelbdai)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/m1073496" rel="noopener noreferrer" target="_blank">Jessica Justice (@m1073496)</a>, <a href="https://github.com/SOUMOJIT-CHAKRABORTY" rel="noopener noreferrer" target="_blank">Soumojit Chakraborty (@SOUMOJIT-CHAKRABORTY)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/jfdnc" rel="noopener noreferrer" target="_blank">Jacob (@jfdnc)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/pbernery" rel="noopener noreferrer" target="_blank">Philippe Bernery (@pbernery)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/Turbo87" rel="noopener noreferrer" target="_blank">Tobias Bieniek (@Turbo87)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/adrigzr" rel="noopener noreferrer" target="_blank">Adrián González Rus (@adrigzr)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/mixonic" rel="noopener noreferrer" target="_blank">Matthew Beale (@mixonic)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, and <a href="https://github.com/kdagnan" rel="noopener noreferrer" target="_blank">Kyle D. (@kdagnan)</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Bryan Mishkin, Isaac Lee, Jessica Justice, Jared Galanis and the Learning Team
