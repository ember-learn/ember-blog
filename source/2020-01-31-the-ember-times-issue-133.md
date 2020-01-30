---
title: The Ember Times - Issue No. 133
author: Chris Ng, Sean Massa, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/01/31-the-ember-times-issue-133.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
  
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Community feedback from FlashRecruit 👏,
Check out the RFC for Improved Ember Registry APIs 🗒️®️,
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

<!--alex ignore mental-->
Tracked Properties and Glimmer Components provide a wonderful mental model to work from. They also simplify our code by bringing it closer to JavaScript and HTML. We had a new hire that only had to learn the Octane way, which ended up far smoother than the classic-style onboarding.

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

<p>This week we'd like to thank ... for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Sean Massa, the crowd and the Learning Team