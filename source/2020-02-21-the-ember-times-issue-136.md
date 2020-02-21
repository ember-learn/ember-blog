---
title: The Ember Times - Issue No. 136
author: Chris Ng, Amy Lam, Isaac Lee, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/02/21-the-ember-times-issue-136.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
...
Ember 3.16 released 🚀,
Minesweeper meets Ember Octane 💣,
Check out the journey to your first published addon 📅,
2020 Ember Community Survey 📝,
...

READMORE

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Ember 3.16 released 🚀](https://blog.emberjs.com/2020/02/12/ember-3-16-released.html)

A **new** version of Ember is here! [Ember 3.16](https://blog.emberjs.com/2020/02/12/ember-3-16-released.html) is an incremental, backwards compatible release with bugfixes, performance improvements, and minor deprecations. Whether you're on the bleeding edge or 1.x, be sure to refer to the official [Ember blog](https://blog.emberjs.com/tags/releases.html) when looking for release details!

---

## [2020 Ember Community Survey 📝](https://tilde.wufoo.com/forms/2020-emberjs-community-survey/)

It’s that time of year again 😀, the 6th annual official 2020 Ember Community Survey is here! Once again we would love your help to learn about who is in the Ember community and how they work with the framework.

And there's good news! This year the survey has been considerably slimmed down from previous years. So it should be easier than ever to make a contribution to our community by filling out the survey.

Last year over 1200 people participated, and thankfully all that participation and your participation over the years has resulted in enough input to make the process more efficient. So let’s keep that participation going! 🎉

This year we’d like to emphasize that contribution from non-Ember users is valuable as well. So if you have co-workers or friends who you think might be interested in filling out the survey, please share it with them. 

Submissions will be accepted until March 8th, but there’s no need to wait! Go ahead and fill out the [survey here now](https://tilde.wufoo.com/forms/2020-emberjs-community-survey/). 🔥🔥🔥

We look forward to your participation! If you have any immediate questions, feel free to email the survey team via survey@emberjs.com, or ping us in #dev-ember-learning in Discord chat. 

But please, don't forget to help us spread the word by sharing the survey landing page on your social network feeds, at meetups and around your office and other communities. 🙌

---

## [Tomsweeper: Minesweeper meets Ember Octane 💣](https://tomsweeper.scud.co/)

Minesweeper is a classic logic game, probably most known through Microsoft Windows. You use the number clues to clear the mines and race against time to [become the world champion](https://www.youtube.com/watch?v=GrZCWx0fnfc).

[@scudco](https://github.com/scudco) issues a new challenge: Find all Tomsters in the game [Tomsweeper](https://tomsweeper.scud.co/)! It's a great example of how you can [build something in Ember Octane](https://github.com/scudco/tomsweeper) with ease and fun.

<img alt="Tomsweeper" src="/images/blog/2020-02-21/tomsweeper.png">

Give Tomsweeper a try and leave your feedback in the [#games channel](https://discordapp.com/channels/480462759797063690/487382592841187328) on Discord! PRs are welcome too.

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

## [First published addon: ember-fullcalendar 📅](https://dev.to/xiwcx/i-published-my-first-ember-addon-138c)

[i. welch canavan (@xiwcx)](https://github.com/xiwcx) shares the journey of building your very first Ember addon in [this dev.to post](https://dev.to/xiwcx/i-published-my-first-ember-addon-138c). The addon [@mariana-tek/ember-fullcalendar](https://github.com/Mariana-Tek/ember-fullcalendar) wraps [Fullcalendar (v4)](https://fullcalendar.io/) – a tool that provides a fully-featured scheduling calendar with minimal code – into an Ember component. 

The process started with checking [Ember Observer](https://emberobserver.com/) to see if there is already an addon that provides a similar service as well as checking the general addon structure that packages follow. Next, [fullcalendar-react](https://github.com/fullcalendar/fullcalendar-react) was inspected which provided the idea to avoid explicit bindings for each property or attribute and simply batch updates and pass them along to Fullcalendar.

<!-- alex ignore easy -->
Following that, it was easy enough to use Ember component lifecycle hooks to replace the React ones such as `componentDidMount()` becoming `didInsertElement()`, while `componentDidUpdate()` became `didUpdateAttrs()`. Similarly to the other implementation, [Data Down, Actions Up](https://dockyard.com/blog/2015/10/14/best-practices-data-down-actions-up) was followed so that was easily transferrable.

Try out [@mariana-tek/ember-fullcalendar](https://github.com/Mariana-Tek/ember-fullcalendar) in your app today!

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

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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


Chris Ng, Amy Lam, Isaac Lee, Jared Galanis the crowd and the Learning Team
