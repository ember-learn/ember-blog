---
title: The Ember Times - Issue No. 177
authors:
  - jared-galanis
  - amy-lam
date: 2021-04-09T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

EmberConf videos, virtual Ember Meetups, achieving a11y automation testing, and serverless functions in Ember and Glimmer.

---

## [Virtual EmberConf 2021 🔥 📼](https://www.youtube.com/playlist?list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK)

Heyo! Did you miss out on Virtual EmberConf 2021? Did you see some talks, but missed others? Did you watch all of the content, but want to re-watch things!? 👀 Fear not, the suite of full conference talks can now be found online now as [individual videos](https://www.youtube.com/playlist?list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK).

If you didn't get a chance to see them, you shouldn't miss the [Keynote Part 1](https://www.youtube.com/watch?v=pJPUQQQ9QDg&list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK&index=10) and [Keynote Part 2](https://www.youtube.com/watch?v=1Z6cLV2licU&list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK&index=11) by none other than our own [Yehuda Katz (@wycats)](https://github.com/wycats) and [Godfrey Chan (@chancancode)](https://github.com/chancancode).

Also not to be missed are talks by [Chris Garrett (@pzuraq)](https://github.com/pzuraq) on [template imports](https://www.youtube.com/watch?v=oQZJU7WDCZE&list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK&index=5), and a stunning talk on [building robust and reliable software](https://www.youtube.com/watch?v=Mt7v-VbFjxk&list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK&index=15) by [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho).

There was also a beautiful and inspiring 💖 talk about [Learning Ember in 2021](https://www.youtube.com/watch?v=MJ1t1K5r_gQ&list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK&index=16) by [Lenora Porter (@lenoraporter)](https://github.com/lenoraporter).

For sure, whatever you do, do not miss the absolutely mind blowing 🤯 closing keynote by [Edward Faulkner (@ef4)](https://github.com/ef4) about the future of build tooling, [Mho](https://www.youtube.com/watch?v=09USvAy7w9g&list=PL4eq2DPpyBbkc3vz8_N4xkeboowQcPQbK&index=23).

Really, all of the talks were quite ✨✨ amazing ✨✨ and if you have not seen them you should go check them out when you can. A big **thank you** to all the speakers at Virtual Ember Conf 2021!!! 🧡💛💜💙💚

If you're interested in some great notes about the talks you can find [Alex DiLiberto's (@alexdiliberto)](https://github.com/alexdiliberto) notes [here](https://alexdiliberto.com/posts/emberconf-2021-notes/).

There's also plenty of official and unofficial bonus content out there, including:

- An [unofficial TypeScript AMA](https://www.youtube.com/watch?v=CXv55zFcJdI) with [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) and  [David Baker (@acorncom)](https://github.com/acorncom)
- Another [look at Mho](https://twitter.com/courajs/status/1379477838420713474) with [Edward Faulkner (@ef4)](https://github.com/ef4) and [Aaron Sikes (@courajs)](https://github.com/courajs)
- Typed Ember extends Confidence blog series, which translates the talk to prose, plus some bonus content that couldn't fit in the conference talk! Be sure to check out all three posts by [Krystan HuffMenne](https://github.com/gitKrystan): [Part 1: What is TypeScript?](https://blog.skylight.io/ts-extends-confidence-1/), [Part 2: Converting Your Ember App to TypeScript](https://blog.skylight.io/ts-extends-confidence-2/), and [Part 3: The Real Benefits of TypeScript](https://blog.skylight.io/ts-extends-confidence-3/)

Don't miss it, friends!

---

## Virtual Ember meetups 🧑‍💻

Have you been missing attending your local Ember meetup during the pandemic? Well you're in luck, there are a couple of virtual Ember meetups happening next week that you can attend!

If you've been wanting to learn more about what the **Fastboot** team is up to, you may want to check out the [online event](https://www.eventbrite.com/e/ember-fastboot-ssr-beyond-tickets-144468965565?aff=ebdssbonlinesearch) occurring on April 14th. There will be some great talks by members of Fastboot team, including appearances by [Dave Laird (@kiwiupover)](https://github.com/kiwiupover), [Suchita Doshi
 (@suchitadoshi1987)](https://github.com/suchitadoshi1987), [Thomas Wang
 (@xg-wang)](https://github.com/xg-wang) and [Scott Newcomer (@snewcomer)](https://github.com/snewcomer).

Haven't had your fill yet? The next day, April 15th, you can come visit with Emberistas and Embereños from Los Angeles, and far and wide, for some more good Fastboot content, as well as discussions on **modifiers and components** at the [Ember LA Meetup](https://www.meetup.com/Ember-LA/events/277245874)!

---

## [Achieving a11y automation testing 🎥](https://twitter.com/TestJSSummit/status/1369241608944762883)

If you're looking for some content in the wider JavaScript community beyond EmberConf, you can checkout the fantastic talk by [Ava Gaiety Wroten (@hergaiety)](https://github.com/hergaiety) at TestJS Summit covering [a11y automated testing](https://twitter.com/TestJSSummit/status/1369241608944762883)! 🔥🔥🔥

The talk covers not only what Ember does for accessibility in testing, but also highlights some approaches and tools you can use for making automation a11y focused in other frameworks.

---

## [Serverless functions in Ember and Glimmer 💯](https://shipshape.io/blog/serverless-functions-ember-glimmer/)

After using [API Routes](https://nextjs.org/docs/api-routes/introduction) in Next.js, [Jared Galanis (@jaredgalanis)](https://github.com/jaredgalanis) explored bringing the same functionality to Ember and Glimmer. Next's API routes are essentially node functions that deploy as serverless lambdas. They can provide a place to write a GraphQL endpoint, serve as a gateway to other APIs, or serve as a full-fledged backend that talks to a persistence layer.

The article walks through the setup of serverless functions in both Ember and Glimmer, using Netlify or Vercel. Check out Jared's blog post for [Ship Shape](https://shipshape.io/), [Serverless Functions in Ember and Glimmer](https://shipshape.io/blog/serverless-functions-ember-glimmer/) and try it out yourself for some developer experience gains on the frontend!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/hergaiety" rel="noopener noreferrer" target="_blank">Ava Gaiety Wroten (@hergaiety)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/lupestro" rel="noopener noreferrer" target="_blank">Ralph Mack (@lupestro)</a>, <a href="https://github.com/acorncom" rel="noopener noreferrer" target="_blank">David Baker (@acorncom)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/nickeidler" rel="noopener noreferrer" target="_blank">Nicholas Eidler (@nickeidler)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/pernambucano" rel="noopener noreferrer" target="_blank">Paulo Fernandes (@pernambucano)</a>, <a href="https://github.com/afzal273" rel="noopener noreferrer" target="_blank">Afzal Syed (@afzal273)</a>, <a href="https://github.com/chadhietala" rel="noopener noreferrer" target="_blank">Chad Hietala (@chadhietala)</a>, <a href="https://github.com/Valgueiro" rel="noopener noreferrer" target="_blank">Mateus Valgueiro (@Valgueiro)</a>, <a href="https://github.com/theklr" rel="noopener noreferrer" target="_blank">Kevin R (@theklr)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/Krashaune" rel="noopener noreferrer" target="_blank">Kiera Thomasson (@Krashaune)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/Angel-gc" rel="noopener noreferrer" target="_blank">Angel Concepcion (@Angel-gc)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/ejfian-2020" rel="noopener noreferrer" target="_blank">@ejfian-2020</a>, <a href="https://github.com/sandstrom" rel="noopener noreferrer" target="_blank">@sandstrom</a>, <a href="https://github.com/milindalvares" rel="noopener noreferrer" target="_blank">Milind Alvares (@milindalvares)</a>, <a href="https://github.com/piotrekbator" rel="noopener noreferrer" target="_blank">Piotrek Bator (@piotrekbator)</a>, <a href="https://github.com/barelyknown" rel="noopener noreferrer" target="_blank">Sean Devine (@barelyknown)</a>, <a href="https://github.com/DanaKirsh" rel="noopener noreferrer" target="_blank">@DanaKirsh</a>, <a href="https://github.com/MarissaWood" rel="noopener noreferrer" target="_blank">Marissa Wood (@MarissaWood)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/hmajoros" rel="noopener noreferrer" target="_blank">Hank Majoros (@hmajoros)</a>, <a href="https://github.com/tricknotes" rel="noopener noreferrer" target="_blank">Ryunosuke Sato (@tricknotes)</a>, <a href="https://github.com/ziw" rel="noopener noreferrer" target="_blank">@ziw</a>, <a href="https://github.com/vivasconcelos" rel="noopener noreferrer" target="_blank">@vivasconcelos</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/esquith" rel="noopener noreferrer" target="_blank">Esquith Allen (@esquith)</a>, <a href="https://github.com/benjahur" rel="noopener noreferrer" target="_blank">@benjahur</a>, <a href="https://github.com/mamiller93" rel="noopener noreferrer" target="_blank">Matthew Miller (@mamiller93)</a>, and <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Jared Galanis, Amy Lam, and the Learning Team
