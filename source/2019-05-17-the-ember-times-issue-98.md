---
title: The Ember Times - Issue No. 98
author: Chris Ng, Isaac Lee, Amy Lam, Alon Bukai, Jared Galanis, Jessica Jordan
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/05/17-the-ember-times-issue-98.html"
responsive: true
---

Goeie dag Emberistas! 🐹

<!--alex ignore king-queen-->
This week:
`model` hook illuminated in Ember.js Guides 💡,
EmberCamp CFP open 🏕,
Ember podcasts to keep us happy 📻🍩🎧,
a proposal to use Empress to render the Ember RFCs 📃,
a new release of the ember-shepherd addon 🚢,
the new EmberWork.com ✌️,
FAQs about Ember.js in 2019 🙋‍♀️🙋‍♂️, and last, but not least,
trapping focus 💥 for better **a11y** in your Ember apps!

---

## [`model` Hook, Illuminated in Ember.js Guides 💡](https://guides.emberjs.com/release/routing/specifying-a-routes-model/)

If you haven't yet, please revisit and share the latest Ember.js Guides on [Specifying a Route's Model](https://guides.emberjs.com/release/routing/specifying-a-routes-model/)! You will find **beginner-friendly, comprehensive explanation** of what you can do in a route's `model` hook. 💖

In particular, our guide now shows:

- Why we want to use the `model` hook
- How to use `model`, depending on your use case and knowledge of Ember
- How to use **dynamic segments** in `model`
- How to debug `model`

These updates are stepping stones to [@jenweber](https://github.com/jenweber)'s [major initiative to help developers learn Ember Data easily](https://github.com/ember-learn/guides-source/issues/20). Please thank Jen for her positive work, as well as [@acorncom](https://github.com/acorncom), [@lisaychuang](https://github.com/lisaychuang), [@mike-north](https://github.com/mike-north), and [@zachgarwood](https://github.com/zachgarwood) for their help with reviews!

---

## [EmberCamp CFP Open 🏕](http://embercamp.com/)

Join us on September 16th for the second annual [EmberCamp Chicago](http://embercamp.com/)! We’ll be hosting **150+ of the world’s top Ember developers** for a full day of Ember talks. Have a talk idea? The EmberCamp Call For Proposals (CFP) is open now through **June 15th**. If you submit early, you'll be able to receive feedback before the CFP closes!

Proposal types:

- 30 minute talks
- 10 minute talks
- 30-90 minute workshops
- 30-90 minute activities (new this year!)

Whether you want to come enjoy the breathtaking views, make new Ember friends, or get the scoop on what's coming next—EmberCamp Chicago is the place to be!

---

## [Jabber Away about Javascript 📻](https://twitter.com/samselikoff/status/1128351412881063937)

A new podcast episode of [Javascript Jabber](https://twitter.com/JSJabber) has been released in which [Sam Selikoff](https://twitter.com/samselikoff) is interviewed by [AJ ONeal](https://twitter.com/solderjs) about **Ember**. 🐹 They go into detail regarding how Sam got started working with Ember and they also talked a little bit about the **history of the Ember framework**.

From the [shownotes](https://devchat.tv/js-jabber/jsj-364-ember-octane-with-sam-selikoff/):

> Sam mentions some of the biggest advantages in using Ember, and what it should and should not be used for. He explains the architecture of Ember apps, addresses some of the performance concerns and then goes into Octane in detail.

So make sure to [give it a listen](https://devchat.tv/js-jabber/jsj-364-ember-octane-with-sam-selikoff/)! 🎧 You can tell us, and Sam, what you thought on the [#media channel](https://discordapp.com/channels/480462759797063690/486955806588403773/) on [Discord](https://discordapp.com/invite/zT3asNS).

---

## [Do or Donut, There is No Sizzlepie 🍩](https://twitter.com/emberweekend/status/1116022639015940096)

The [Ember Weekend Podcast](https://twitter.com/emberweekend) released an episode last month in which Chase, Robert, and Jonathan chat about various topics such as: an **EmberConf recap** (including *secret donut* info and *Sizzlepies*! 🥧), the **Octane preview** (including a [video](https://www.youtube.com/watch?v=BV09blWlc64) by [@gavinjoyce](https://twitter.com/gavinjoyce)), [Embroider](https://github.com/embroider-build/embroider), as well as an [EmberMap video "An Intro to Broccoli.js"](https://embermap.com/topics/intro-to-broccoli).

<!--alex ignore hostesses-hosts-->
[Check it out here](https://emberweekend.com/episodes/do-or-donut)! 🎙 And pop into [#media](https://discordapp.com/channels/480462759797063690/486955806588403773/) to share your thoughts with the community and the hosts!

---

<!--alex ignore king-queen-->
## [Use Empress to Render the Ember RFCs 📃](https://github.com/emberjs/rfcs/pull/489)

<!--alex ignore king-queen-->
[@mansona](https://github.com/mansona) proposed an implementation change to how we currently "render" our RFCs in the [website](https://emberjs.github.io/rfcs/). The proposed change is to move from using `mdbook`, which provides better formatting for markdown files, to employing [Empress](https://github.com/empress) techniques to render the RFC pages.

In the same proposal, the official URL of an RFC was proposed to move from `https://emberjs.github.io/rfcs/0425-website-redesign.html` to `https://rfcs.emberjs.com/0425-website-redesign/`. This would then be considered a stable URL and will require us to maintain redirects if we ever change them.

Read and comment more on [GitHub](https://github.com/emberjs/rfcs/pull/489) about the proposed change!

---

## [A New Version of the ember-shepherd Addon 🚀](https://twitter.com/shipshapecode/status/1124490696843583490)

[@rwwagner90](https://github.com/rwwagner90) and the crew at [Ship Shape](https://github.com/shipshapecode) have released 🚢 version 5.0.0 of the **ember-shepherd addon**, an awesome site tour library. The updated version includes improved loading speeds⚡️ due to lazy loading with ember-auto-import.

In related news, Shepherd, the JavaScript library that underlies the ember addon that **Ship Shape** also maintains, [has been trending 📈 on Github](https://twitter.com/shipshapecode/status/1122673639932014593)!

Check out the new release of ember-shepherd [here](https://github.com/shipshapecode/ember-shepherd).

---

## [EmberWork.com ✌️](https://emberwork.com/)

We often hear folks say they want to work in Ember, but they can't find an Ember role! There's a new community resource for that—[Ember Work](https://emberwork.com/). Ember Work was built to make things **a little easier** on you. No more scouring LinkedIn or other sources. And no more jobs that are not *quite* Ember.

Have an open role on your team? Share it on [Ember Work](https://emberwork.com/) for free. (While you're at it, post it on [#ember-jobs](https://discordapp.com/channels/480462759797063690/480523148102467623) on Discord too!) Thanks [@herzzanu](https://github.com/herzzanu) and [@Exelord](https://github.com/Exelord) for building this resource for the community. 💼

---

## [FAQs about Ember.js in 2019 🙋‍♀️🙋‍♂️](https://medium.com/ember-ish/faqs-about-ember-js-in-2019-64efabbf84e6)

As developers who have worked with Ember for years, we can sometimes forget that we had once approached Ember with a bit of curiosity 😋, a bit of caution 😧, and a bit of confusion 🤕. As Ember approaches its 8th birthday, we want to continue to reach out to the wider JavaScript community, welcome new developers, and help out with their questions.

This week, [@jenweber](https://github.com/jenweber) took her time to [engage a wide audience on Medium](https://medium.com/ember-ish/faqs-about-ember-js-in-2019-64efabbf84e6) and answer commonly asked questions about Ember. *What companies use Ember? What is Octane? How can I get started with learning Ember?*

We encourage you to [read and share the blog post](https://medium.com/ember-ish/faqs-about-ember-js-in-2019-64efabbf84e6)! If you have time, we encourage you to pen and share your Ember article as well. 🙏

---

## [Intentional Element Focus with Ember Focus Trap 💥](https://twitter.com/josemarluedke/status/1127967059415953408)

On May 16th, **Global Accessibility Awareness Day (GAAD)** inspired developers all around the world to reflect on the way they use and build applications for the web. In her [recent call-to-action for GAAD](https://blog.emberjs.com/2019/05/13/global-accessibility-awareness-day.html) 📣, [@MelSumner](https://github.com/MelSumner) encouraged the Ember community to take the time to browse the web using keyboard or an assistive technology, and to spend time to improve accessibility in their own projects.

Addon author [@josemarluedke](https://github.com/josemarluedke) followed this call-to-action and just published [Ember Focus Trap](https://github.com/josemarluedke/ember-focus-trap)! It's based on the JavaScript library [Focus Trap](https://github.com/davidtheclark/focus-trap) that helps you to intentionally trap focus in certain DOM nodes. This makes it easy for you to improve the keyboard accessibility of otherwise inaccessible elements such as modal dialogs.

With **Ember Focus Trap**, adding focus to interactive elements in your Ember app is only an `ember install` away. Check it [out today](https://josemarluedke.github.io/ember-focus-trap/)!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/tendermario" target="gh-user">@tendermario</a>, <a href="https://github.com/vasind" target="gh-user">@vasind</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/maurodibert" target="gh-user">@maurodibert</a>, <a href="https://github.com/2hu12" target="gh-user">@2hu12</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/NullVoxPopuli" target="gh-user">@NullVoxPopuli</a>, <a href="https://github.com/chiragpat" target="gh-user">@chiragpat</a>, <a href="https://github.com/pete-the-pete" target="gh-user">@pete-the-pete</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/scalvert" target="gh-user">@scalvert</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/maxfierke" target="gh-user">@maxfierke</a>, <a href="https://github.com/jessica-jordan" target="gh-user">@jessica-jordan</a>, <a href="https://github.com/jamescdavis" target="gh-user">@jamescdavis</a>, <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a> and <a href="https://github.com/ef4" target="gh-user">@ef4</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Amy Lam, Alon Bukai, Jared Galanis, Jessica Jordan and the Learning Team
