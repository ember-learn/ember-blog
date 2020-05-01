---
title: The Ember Times - Issue No. 146
author: Abhilash LR, Amy Lam, Jessica Jordan, Isaac Lee, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/05/01-the-ember-times-issue-146.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Yehuda's Octane tutorial continued 🔥,
Contribute to the Global Accessibility Awareness Day blog series ✍️,
Ember website(s) redesign call for contributors 🎨🐹,
ember-bootstrap 4 Release Candidate 🛳,
Strict mode templates RFC accepted 💖,

READMORE

---

## [Yehuda's Octane tutorial continued 🔥](https://yehudakatz.com/2020/03/25/ember-octane-lets-go/)

Our very own [Yehuda Katz (@wycats)](https://github.com/wycats) wrote a blog series for an [Octane tutorial](https://yehudakatz.com/2020/03/25/ember-octane-lets-go/), and there are two new posts added to it.

The third part of the tutorial, [Pulling Out Data](https://yehudakatz.com/2020/03/30/ember-octane-a-data-file/), talks about moving data from HTML into a separate file. This is the part in the series that introduces you to writing Javascript for the first time. You'll also learn how to build your helpers and write unit tests for them.

The fourth part of the tutorial, [Airtable Time](https://yehudakatz.com/2020/04/06/ember-octane-airtable-time/), talks about moving the JSON into Airtable. It is a great approach that will reduce the need for an application build for changing only data.

So far there are seven posts planned:

- [Let's Go](https://yehudakatz.com/2020/03/25/ember-octane-lets-go/)
- [Components](https://yehudakatz.com/2020/03/26/ember-octane-components/)
- [Pulling Out Data](https://yehudakatz.com/2020/03/30/ember-octane-a-data-file/)
- [Airtable Time](https://yehudakatz.com/2020/04/06/ember-octane-airtable-time/)
- Cleaning Things Up
- Adding More Pages
- Polishing: Server-Side Rendering, Prerendering and Code Splitting

So be on the look out 👀 for more in this very helpful new series!

---

## [Contribute to the Global Accessibility Awareness Day blog series ✍️](https://github.com/ember-learn/ember-blog/issues/628)

The Ember Accessibility strike team is organizing a blog post series for [Global Accessibility Awareness Day (GAAD)](https://globalaccessibilityawarenessday.org/)! This May 21st will mark the ninth annual Global Accessibility Awareness Day. The purpose of GAAD is to get everyone **talking, thinking and learning** about digital (web, software, mobile, etc.) access/inclusion and people with different disabilities.

Interested in writing a post about an a11y topic such as screenreaders, WCAG, or the POUR model? Coordinate with the team on the [GitHub issue](https://github.com/ember-learn/ember-blog/issues/628) and the [#st-a11y channel](https://discordapp.com/channels/480462759797063690/680503382036840496) on the [Ember Discord](https://discord.gg/emberjs).

---

## [Call for contributors: Shipping the Ember website(s) redesign 🎨🐹](https://twitter.com/melaniersumner/status/1254497875062673411)

Early last year, the community came together to [discuss the future of the design strategy of official Ember sites](https://github.com/emberjs/rfcs/pull/425). After plenty of time and work investments from individual contributors, companies and the Ember Core team, the redesign for the main site [emberjs.com](https://emberjs.com) [shipped successfully](https://twitter.com/emberjs/status/1230912205631213569)!

Many other official resources for the Ember community, such as the [Blog](https://blog.emberjs.com/), [API Docs](https://api.emberjs.com/), and [CLI Guides](https://cli.emberjs.com/), are looking forward to get a new look & feel as well - and you can help with that! A [call for contributors](https://twitter.com/melaniersumner/status/1254497875062673411?s=21) is looking for those who have experience with JavaScript, HTML and CSS and who want to help shipping the website redesign.

Want to get started? Be sure to read the [official status update for the Ember Website](https://blog.emberjs.com/2020/04/26/update-ember-website.html) on the blog for more details on how to contribute. And feel free to reach out to the folks on the **#st-website** channel on the [Ember Discord](https://discordapp.com/invite/zT3asNS) for any questions. We're looking forward to your contributions!

---

## [ember-bootstrap 4 Release Candidate 🛳](https://twitter.com/simonihmig/status/1255099221415510016)

The folks at [kaliber5 @kaliber5](https://github.com/kaliber5) have put out a new 4.0.0-rc.0 release candidate for [ember-bootstrap](https://github.com/kaliber5/ember-bootstrap)! 🎉

This release candidate:

- refactors to using tag-less components everywhere in preparation for a Glimmer rewrite.
- drops Ember < 3.16, node 8 Package.
- drops deprecated arguments for HTML attributes
- overhauls of the build setup, using embroider macros!!!

Go ahead and check out the [release notes](https://github.com/kaliber5/ember-bootstrap/releases/tag/v4.0.0-rc.0) for a full set of changes. Shout out to the contributors of this RC [Jacob Jewell (@jakesjews)](https://github.com/jakesjews), [Jeldrik Hanschke (@jelhan)](https://github.com/jelhan) and [Simon Ihmig (@simonihmig)](https://github.com/simonihmig) for getting this done!

---

## [Strict mode templates RFC accepted 💖](https://github.com/emberjs/rfcs/pull/496)

Strict mode templates RFC, for which the community discussion began in June 2019, was recently accepted by the Ember core teams. 🎉 You can read the RFC to [learn more about the proposed changes and motivations](https://github.com/emberjs/rfcs/blob/master/text/0496-handlebars-strict-mode.md).

At a high level, the "strict mode" (the terminology may change) is opt-in but intended to become the main way Ember users write templates. Once the strict mode is implemented (this may take time), the core teams and addon developers can start experimenting with **better ways to support your development workflow**. Experimental features such as **template imports** and **single-file components**, which build on top of the strict mode, will still need further design and iterations before they can be proposed and recommended to you.

In short, you don't need to worry about an immediate change. It is an exciting change to look forward to, because Ember has been using Handlebars for more than 8 years and we have learned how we can improve its language since. In the meantime, we encourage you to take a look at the [strict mode templates RFC](https://github.com/emberjs/rfcs/blob/master/text/0496-handlebars-strict-mode.md)!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/krisselden" target="gh-user">@krisselden</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/jayjayjpg" target="gh-user">@jayjayjpg</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/alexeykostevich" target="gh-user">@alexeykostevich</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/maxwondercorn" target="gh-user">@maxwondercorn</a>, <a href="https://github.com/eramod" target="gh-user">@eramod</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/ansmonjol" target="gh-user">@ansmonjol</a>, <a href="https://github.com/SYU15" target="gh-user">@SYU15</a> and <a href="https://github.com/patricklx" target="gh-user">@patricklx</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask readers' questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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


Abhilash LR, Amy Lam, Jessica Jordan, Isaac Lee, Jared Galanis the crowd and the Learning Team
