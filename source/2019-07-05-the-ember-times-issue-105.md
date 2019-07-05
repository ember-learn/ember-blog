---
title: The Ember Times - Issue No. 105
author: Jessica Jordan, Isaac Lee, Kenneth Larsen, Robert Wagner, Chris Ng, Jared Galanis, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/07/05-the-ember-times-issue-105.html"
responsive: true
---

Hoi Emberistas! 🐹

This week:
help design the Ember skill tree 🌱,
observers going async ⏱,
RFC to support populating head tag ⛑️,
RFC to add `load` hook to Route 🎣,
an update on Ember Inspector 🕵️‍♀️,
submit your EmberFest 2019 talk today 🎤, and an
EmberWeekend episode featuring Luke Melia 🔈!

---

## [Help Design the Ember Skill Tree 🌱](https://discuss.emberjs.com/t/learning-ember-ember-skill-tree/16725)

Recall your first day as an Ember developer (or mentor). Did you feel overwhelmed by the sheer amount of things that you felt you needed to learn (teach)?

- What skills do I need to learn now? 😕
- What skills do I learn next? 🤯
- What resources are available to me? 🥺

Enter **Ember skill tree**. It helps you visualize important skills and the steps to acquire them. It aligns with the [Ember guides](https://guides.emberjs.com/release/) too.

The only problem? [The tree doesn't exist yet](https://discuss.emberjs.com/t/learning-ember-ember-skill-tree/16725).

[@gossi](https://github.com/gossi) and the Ember Learning Team would like your [help with creating the Ember skill tree](https://discuss.emberjs.com/t/learning-ember-ember-skill-tree/16725). We encourage you to participate today! Please share your experiences of learning and teaching Ember. 💞

---

## [RFC to Add `load` Hook to Route 🎣](https://github.com/emberjs/rfcs/pull/510)

A new RFC has been created by [@michaelrkn](https://github.com/michaelrkn) to get feedback on the idea of **adding a `load` hook to the Route**. The motivation for this is that the term `model()` can be confusing "because it implies that only one piece of data will be fetched, and it uses the term `model` that is more typically associated with backend development".

Feel free to [read the RFC](https://github.com/michaelrkn/rfcs/blob/route-data/text/0000-route-data-loading.md) and share your thoughts in the comment section.

---

## [To Sync or Not to Sync: Observers 2.0 ⏱](https://emberjs.github.io/rfcs/0494-async-observers.html)

In an effort to remove legacy code from Ember, promote better programming practices in apps and lay the foundation for clearer code paths, a [recently accepted RFC (Request for Comments)](https://github.com/emberjs/rfcs/pull/494) proposes an important change to the **observer** APIs: the [`addObserver`](http://api.emberjs.com/ember/release/functions/@ember%2Fobject%2Fobservers/addObserver), [`removeObserver`](http://api.emberjs.com/ember/release/functions/@ember%2Fobject%2Fobservers/removeObserver) and the [`observer`](http://api.emberjs.com/ember/release/functions/@ember%2Fobject/observer) functions shall be configurable to operate either synchronously (the way observers always used to work in Ember apps since the pre-v1.0 days) or asynchronously.

In Ember apps today, observers will be called immediately after any of the properties they are tracking have changed. Async observers as proposed in the RFC would instead be scheduled for the next runloop.

The RFC highlights how we can use the `sync` option (a Boolean) to make our observers asynchronous, one by one. After the community has had sufficient time to migrate their code, the RFC argues that Ember would be able to deprecate synchronous observers.

Find out more about the how and why behind **async observers** by giving the [full proposal a read!](https://emberjs.github.io/rfcs/0494-async-observers.html)

---

## [RFC to Support Populating Head Tag ⛑️](https://github.com/emberjs/rfcs/pull/506)

The `<head>` tag does more than setting the title and favicon of a page. It also plays an **integral role in SEO and unfurling links**. Currently, we can use the [ember-cli-head](https://github.com/ronco/ember-cli-head) addon to modify the `<head>` tag. 💛

In the RFC, [@rwwagner90](https://github.com/rwwagner90) proposed that Ember gives developers the ability to modify the tag, using a **route hook** or **service**.

What are your thoughts? Please [take a look at the RFC](https://github.com/emberjs/rfcs/pull/506) and share your ideas and use cases of `<head>` tag!

---

## [Ember Inspector Update 🕵️‍♀️](https://github.com/emberjs/ember-inspector)

**Ember Inspector** recently dropped support for Ember versions < 3.4. This has freed us up to
remove a lot of cruft that has existed for supporting older Ember versions, and start to clean
up and modernize the code. We are continuing to design the features for the future and work
towards delivering the features we promised in the past.

[Ember Octane](https://emberjs.com/editions/octane/) is still not currently supported, but we are working closely with the framework team to
get the APIs we need to map components to DOM elements and enable us to show the arguments
passed to the component, and manipulate them inline. This will allow Inspector users to **debug** component behavior **even better**.

We are always looking for more people to **help out** with the considerable efforts required to keep
Ember Inspector running, so if you would be interested in helping out, please reach out in the
[`dev-ember-inspector` channel](https://discordapp.com/channels/480462759797063690/486243207072710656) on [Discord](https://discordapp.com/invite/emberjs), we would love to have you!

---

## [Reminder: EmberFest CFP Deadline August 1st 🎤](https://cfp.emberfest.eu/events/emberfest-2019)

A quick reminder that the [EmberFest](https://emberfest.eu/) **CFP deadline** is fast approaching. We are just short of a month away from the **August 1st** deadline, so get your talk in today!

Talks are **30 minutes long** and can range from in-depth technical talks to broader talks covering other aspects of software development.

If you’re looking for some inspiration, here are the [2018 EmberFest Talks on YouTube](https://www.youtube.com/watch?v=oRzmDobMZ_Q&list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9)!

---

## [EmberWeekend Episode With Luke Melia 🔈](https://twitter.com/emberweekend/status/1134498179544702977)

A few episodes back the EmberWeekend podcast featured a **great interview** with long-time Ember contributor and former organizer of the Ember NYC Meetup, [@lukemelia](https://github.com/lukemelia). The episode covers the origin story of the NYC meetup and some detail on the origins of Ember.js itself.

Luke has transitioned out of his role as organizer of the NYC Meetup, and he will be missed, but the well-attended and organized meetup is in good hands and is now being organized by [@mixonic](https://github.com/mixonic).

Bonus topics of the episode include Luke's experience using Ember Cordova for building mobile applications and Orbit.js!

Checkout the full episode
[here](https://emberweekend.com/episodes/out-of-memory).

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/tomdale" target="gh-user">@tomdale</a>, <a href="https://github.com/vaidehijoshi" target="gh-user">@vaidehijoshi</a>, <a href="https://github.com/kennethlarsen" target="gh-user">@kennethlarsen</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/ijlee2" target="gh-user">@ijlee2</a>, <a href="https://github.com/jaredgalanis" target="gh-user">@jaredgalanis</a>, <a href="https://github.com/astronomersiva" target="gh-user">@astronomersiva</a>, <a href="https://github.com/CvX" target="gh-user">@CvX</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a> and <a href="https://github.com/Draggha" target="gh-user">@Draggha</a> for their contributions to Ember and related repositories! 💖</p>

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

Jessica Jordan, Isaac Lee, Kenneth Larsen, Robert Wagner, Chris Ng, Jared Galanis, Amy Lam and the Learning Team
