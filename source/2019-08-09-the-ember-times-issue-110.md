---
title: The Ember Times - Issue No. 110
author: Chris Ng, Jessica Jordan, Jared Galanis, Isaac Lee, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/08/09-the-ember-times-issue-110.html"
responsive: true
---

Aloha Emberistas! 🐹

This week:
{{on}} & {{fn}} in Octane Guides 🔥,
Foreign Key Attrs Blog Post 🔑,
watch This.JavaScript: State of Frameworks on Tuesday 📜
<!-- alex ignore king-queen -->
build JAMstack websites with Empress 🍓,
versioned Ember API links added to the Guides 🔢,
an Update for Co-Located Templates in the Guides ☝️,
...

---

## [{{on}} & {{fn}} in Octane Guides 🔥](https://github.com/ember-learn/guides-source/pull/912)

**Many thanks** 👏 to [@NullVoxPopuli](https://github.com/NullVoxPopuli) and all the other contributors that worked on the **awesome** [PR](https://github.com/ember-learn/guides-source/pull/912) updating the preview of the [Ember Octane Guides](https://octane-guides-preview.emberjs.com/release/templates/actions/) section dealing with `@action`, the `{{on}}` modifier & `{{fn}}` helper!

These updates to the Guides relate to event handling, binding of context and partial application of functions, and affect the way that actions are used in Ember Octane.

Check out the PR [here](https://github.com/ember-learn/guides-source/pull/912). For more context, see the [blog post](https://www.pzuraq.com/ember-octane-update-action/) from [@pzuraq](https://github.com/pzuraq).

---

## [Foreign Key Attrs Blog Post 🔑](https://davidtang.io/2019/08/02/handling-foreign-key-attributes-in-an-api-with-ember-data.html)

Ever have issues handling foreign key attributes in Ember Data?

Check out the **clear and concise** [blog post](https://davidtang.io/2019/08/02/handling-foreign-key-attributes-in-an-api-with-ember-data.html) by [@skaterdav85](https://github.com/skaterdav85) that continues his work on Ember Data.

The post includes good patterns that leverage the use of `belongsTo` in Ember Data and the necessary setups for serializers and adapters.

For a deeper dive you can also check out [@skaterdav85](https://github.com/skaterdav85)'s [book on Ember Data](https://leanpub.com/emberdatainthewild) and [other blog posts](https://davidtang.io/2019/07/21/embedded-records-in-ember-data-with-json-api.html).

---

## [This.JavasSript: State of Frameworks 📜](https://www.thisdot.co/events/this-javascript-state-of-frameworks-08-2019)

This.JavaScript is an online livestreamed event on **Tuesday, August 13th** - [RSVP to attend](https://www.thisdot.co/events/this-javascript-state-of-frameworks-08-2019) and watch it with your teams at work! 

The State of Frameworks event is an opportunity for folks in the JS community from different frameworks and libraries to learn from each other and connect. You'll learn about upcoming releases, latest improvements, and community initiatives. [@jenweber](https://github.com/jenweber) will be representing Ember and speaking about Octane! She'll be joined by [@yyx990803](https://github.com/yyx990803) of Vue, [@mhdawson](https://github.com/mhdawson) of Node.js, [@marvinhagemeister](https://github.com/marvinhagemeister) of Preact, [@mhartington](https://github.com/mhartington) of Ionic, and [@mgechev](https://github.com/mgechev) of Angular! 

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Learn All About JAM Stacks Powered By Ember 🍓](https://www.youtube.com/watch?v=WL66D0bR0RQ&feature=youtu.be&t=780)

There are many different roads that lead developers to building fast, secure and performant websites. And one of them is by the means of the **JAM Stack**.

A site built on the JAMstack is often consisting of a mix of **J**avaScript, reusable and/or third-party **A**PIs as well as static, ready-to-render **m**arkup. The one obligatory feature of a JAMstack site, is that it is can be run without a dedicated web server. Common examples of tools that allow you build JAMstack sites are static site generators like Jekyll, Hugo, GatsbyJS among many others.

<!-- alex ignore king-queen -->
In his talk **Empress - JAM Stack Templates for Human Beings** at [LeedsJS](https://leedsjs.com/) [@mansona](https://github.com/mansona) presents static site generation solutions that empower developers and designers alike to create fast and beautiful sites on the web. And surely enough: Empress' site generators are **powered by Ember**! 🐹

Be sure to check out the talk over on [Youtube](ttps://www.youtube.com/watch?v=WL66D0bR0RQ&feature=youtu.be&t=780), give a 👍 and your thoughts in the comments below!

---

## [Versioned Ember API Links Added to Ember Guides 🔢](https://github.com/ember-learn/guides-source/pull/952)

In the 3.x series, the [Ember Guides](https://guides.emberjs.com/) would send you to the `release` version of the Ember API documentation. Due to changes in Ember and Ember Data, often these redirects would lead you to nowhere.

To fix this issue, [@sivakumar-kailasam](https://github.com/sivakumar-kailasam) took on the massive task of updating the links so that **the version of Ember API matches that of Ember Guides when redirected**. (Thank you!) 💖

The next steps are to fix remaining issues with 3.11 links and introduce tests to check for broken links. We appreciate you for your patience. If you notice additional broken links, please let the Ember Learning Team know in the `#dev-ember-learning` channel on [Discord](https://discordapp.com/invite/emberjs).

---

## [Ember Guides Update for Co-Located Templates ☝️](https://github.com/ember-learn/guides-source/pull/977)

[@chancancode](https://github.com/chancancode) made an update for co-located templates in the [Quick Start](https://guides.emberjs.com/release/getting-started/quick-start/) and [Core Concepts](https://guides.emberjs.com/release/getting-started/core-concepts/) subsections of the [Getting Started](https://guides.emberjs.com/release/getting-started/) section of the [Ember Guides](https://guides.emberjs.com/).

These changes are part of the work for updating Octane documentation. If you are interested in helping out check out the [Quest Issue for Releasing the Octane Guides](https://github.com/ember-learn/guides-source/issues/669) on GitHub!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/ghislaineguerin" target="gh-user">@ghislaineguerin</a>, <a href="https://github.com/yohanmishkin" target="gh-user">@yohanmishkin</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/antydemant" target="gh-user">@antydemant</a>, <a href="https://github.com/muziejus" target="gh-user">@muziejus</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/Exelord" target="gh-user">@Exelord</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/lolmaus" target="gh-user">@lolmaus</a>, <a href="https://github.com/makepanic" target="gh-user">@makepanic</a> and <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Jessica Jordan, Jared Galanis, Isaac Lee, Amy Lam, and the Learning Team
