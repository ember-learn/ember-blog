---
title: The Ember Times - Issue No. 105
author: Jessica Jordan, Robert Wagner, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/07/05-the-ember-times-issue-105.html"
responsive: true
---

Hoi Emberistas! 🐹

This week:
**observers** going **async** ⏱,

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

## [To Sync or Not to Sync: Observers 2.0 ⏱](https://emberjs.github.io/rfcs/0494-async-observers.html)

In an effort to remove legacy code from Ember, promote better programming practices in apps and lay the foundation for clearer code paths, a [recently accepted RFC (Request for Comments)](https://github.com/emberjs/rfcs/pull/494) proposes an important change to the **observer** APIs: the [`addObserver`](http://api.emberjs.com/ember/release/functions/@ember%2Fobject%2Fobservers/addObserver), [`removeObserver`](http://api.emberjs.com/ember/release/functions/@ember%2Fobject%2Fobservers/removeObserver) and the [`observer`](http://api.emberjs.com/ember/release/functions/@ember%2Fobject/observer) functions shall be configurable to operate either synchronously (the way observers always used to work in Ember apps since the pre-v1.0 days) or asynchronously.

In Ember apps today, observers will be called immediately after any of the properties they are tracking have changed. Async observers as proposed in the RFC would instead be scheduled for the next runloop.

The RFC highlights how we can use the `sync` option (a Boolean) to make our observers asynchronous, one by one. After the community has had sufficient time to migrate their code, the RFC argues that Ember would be able to deprecate synchronous observers.

Find out more about the how and why behind **async observers** by giving the [full proposal a read!](https://emberjs.github.io/rfcs/0494-async-observers.html)

---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Ember Inspector Update](#ember-inspector-update)

Ember Inspector recently dropped support for Ember versions < 3.4. This has freed us up to 
remove a lot of cruft that has existed for supporting older Ember versions, and start to clean 
up and modernize the code. We are continuing to design the features for the future and work
towards delivering the features we promised in the past.

Octane is still not currently supported, but we are working closely with the framework team to
get the APIs we need to map components to DOM elements and enable us to show the arguments 
passed to the component, and manipulate them inline, to better debug component behavior.

We can always use more people to help out with the considerable efforts required to keep 
Ember Inspector running, so if you would be interested in helping out, please reach out in the
`dev-ember-inspector` channel on Discord, we would love to have you!


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

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Jessica Jordan, Robert Wagner, the crowd and the Learning Team
