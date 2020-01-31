---
title: The Ember Times - Issue No. 133
author: Chris Ng, Sean Massa, Isaac Lee, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/01/31-the-ember-times-issue-133.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Community feedback from FlashRecruit 👏,
contributing to OSS with confidence at EmberConf 💪,
Check out the RFC for Improved Ember Registry APIs 🗒️®️,
Meet two developers who write short Ember posts regularly ✏️,
...

READMORE

---

## [RFC: Improved Ember Registry APIs 🗒️®️](https://github.com/emberjs/rfcs/pull/585)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) proposed adding a new, object-based API for all registry APIs; deprecate the current string-based microsyntax registry APIs; and introduce a `capabilities` property to the resolver to safely support existing resolvers.

The [RFC: Improved Ember Registry APIs](https://github.com/emberjs/rfcs/pull/585) covers the problems with the [microsyntax](https://guides.emberjs.com/release/applications/dependency-injection/#toc_factory-registrations) and the lack of TypeScript support. The RFC recommends adding a new `Identifier` API which would contain the `name`, `type`, and optionally the `namespace` fields instead of the current microsyntax. For example:

From:

```js
getOwner(this).lookup('service:session');
```

To:

```js
getOwner(this).lookup({ type: 'service', name: 'session' })
```

From:

```js
class Example {
  @service('global@session')
  session;
}
```

To:

```js
class Example {
  @service({ namespace: 'global', name: 'session' })
  session;
}
```

If you would like to learn more or add your feedback please take a look at the [RFC on GitHub](https://github.com/emberjs/rfcs/pull/585)!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Confident contributing to open-source at EmberConf 💪💻](https://emberconf.com/#/speakers/anne-greeth-van-herwijnen)

After her [previous OSS pitch at Emberfest 2019](https://www.youtube.com/watch?v=GHbjdesHhPA),
Emberista and [Ember Times](https://blog.emberjs.com/tags/newsletter.html) editor [Anne-Greeth van Herwijnen (@MinThaMie)](https://github.com/MinThaMie) will guide you to your next (or maybe even first!) open-source contribution!

With plenty of research on what makes an open-source community successful in facilitating contributions, she will demonstrate how Ember empowers contributors to give back to the project in her talk [**Why Contributing Seems Scary**](https://emberconf.com/#/schedule/day-2_why-contributing-seems-scary) at [this year's EmberConf](https://emberconf.com/).

In an exclusive interview with The Ember Times, Anne-Greeth shares with us, who she thinks is qualified to contribute to Ember:

<!--alex ignore just-->
> […] I think everyone can contribute to Ember. It just matters on your opinion of what you think contributing means. So for me contributing goes from helping out at EmberConf, to writing, reading RFCs, and everything in between. And I think as long as you want to. you can always find something for you to contribute to.

What is something that surprises first-time contributors when working on a project like Ember? Anne-Greeth speaks from her previous experience when sharing her OSS journey with others:

> From the talk about contributing I gave at EmberFest last year and also one I gave at my work, I noticed that people were surprised how easy it is to contribute. And that contributing doesn’t mean that you necessarily have to fix the problem, but that also identifying a problem is contributing to it. At my company I got the response from somebody who just two hours after my talk already created their first pull request to an open-source repository (which wasn’t Ember), but still he was like “Hey, I did this!”  In general, the feedback has been really positive, because my examples are really low-key. People feel really encouraged and inspired, that they can do it, too!

Besides learning how to contribute with confidence, what makes EmberConf a must-visit experience this year? Anne-Greeth talks about what she is looking forward to the most:

> I think the people. It sounds really cheesy, but for me, meeting all the people that I met years before, but also meeting new people at different meetups, but also in between talks, is, I think, really cool. And discussing with them things about Ember, but also about culture and about different countries is, I think, one of the best things about EmberConf.

If you want to learn more about why contributing seems scary (but doesn't need to be), join more than 800 other Ember developers at [EmberConf in Portland, OR, from March 16 - 18, 2020](https://emberconf.com/). Prices for regular attendee tickets start from $449. Get your tickets, before they are sold out, [on the EmberConf website](https://emberconf.com/#/register)!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Getting into writing Ember posts ✏️](https://dev.to/t/ember/latest)

This week, we give a hearty shout-out to [Ilya Radchenko (@knownasilya)](https://github.com/knownasilya) and [Michal Bryxí (@MichalBryxi)](https://github.com/MichalBryxi). Since January, they have been regularly sharing their learnings of Ember through short blog posts.

Here are some of our favorites:

- [Ember Components at Their Simplest](https://ilyaradchenko.com/ember-components-at-their-simplest/)
- [When Components Aren't Enough](https://ilyaradchenko.com/when-components-aren't-enough/)
- [6 Tips for Transitioning to Ember CSS Modules](https://ilyaradchenko.com/6-tips-for-transitioning-to-ember-css-modules/)
- [Add Fulltext Filter Support to ember-cli-mirage](https://dev.to/michalbryxi/add-fulltext-filter-support-to-ember-cli-mirage-3nef)
- [Shining Some Light on Timing Out Tests](https://dev.to/michalbryxi/shining-some-light-on-timing-out-tests-35e6)
- [Component Arguments vs HTML Attributes Bug Hunt](https://dev.to/michalbryxi/component-arguments-vs-html-attributes-bug-hunt-1ke9)

We encourage you to have a read. You may be pleasantly surprised to see that, through small steps, one can end up teaching and helping others a lot. 💞

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Community feedback from FlashRecruit 👏](https://flashrecruit.com)

At [**FlashRecruit**](https://flashrecruit.com), we're building a conversational job marketplace. We've been using Ember Octane since before the official preview--don't tell anyone--to build the new version of our job board and dashboard.

Ember Octane allowed us to quickly prototype an application, move on to production with little tech debt, and feel well supported throughout the process.

<!--alex ignore nuts-->
Tracked Properties and Glimmer Components provide a wonderful mental model to work from. They also simplify our code by bringing it closer to JavaScript and HTML. We had a new hire that only had to learn the Octane way, which ended up far smoother than the classic-style onboarding.

<!--alex ignore period-->
We saw a few issues in the preview period, but the community was quick to help us figure out how to move past them. They were mostly fixed by the official release, as well.

<!--alex ignore just-->
We look forward to the enhanced tracking changes coming in RFCs like [#577](https://github.com/emberjs/rfcs/pull/577). Honestly, anything beyond this point is just gravy.

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/salbador" target="gh-user">@salbador</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/Nippius" target="gh-user">@Nippius</a>, <a href="https://github.com/maxwondercorn" target="gh-user">@maxwondercorn</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/NBallaney" target="gh-user">@NBallaney</a>, <a href="https://github.com/betocantu93" target="gh-user">@betocantu93</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a> and <a href="https://github.com/efx" target="gh-user">@efx</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Sean Massa, Isaac Lee, Jessica Jordan, the crowd and the Learning Team
