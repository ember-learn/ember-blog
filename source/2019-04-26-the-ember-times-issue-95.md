---
title: The Ember Times - Issue No. 95
author: Chris Ng, Isaac Lee, Jessica Jordan, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/04/26-the-ember-times-issue-95.html"
responsive: true
---

What's up Emberistas! 🐹

This week you can read about the Component Templates Co-location RFC 🖇️, the story behind ember-model-select 📔, the launch of ember-intl-analyzer 🚀, and EmberFest 2019 announced 🇩🇰!

READMORE

---

## [Component Templates Co-location RFC 🖇️](https://github.com/emberjs/rfcs/pull/481)

[@chancancode](https://github.com/chancancode) opened an RFC around placing the component’s class and template in the same directory on the file system. The proposed change is to move the templates from being located at `app/templates/components` into the `app/components` directory, co-locating it with the component’s JavaScript file.

This change provides component class/template coupling, a single source of truth for components, resolves deviations from route template conventions, and the lack of a single import. If you'd like to learn more, please take a look at [RFC #481](https://github.com/emberjs/rfcs/pull/481). Read, comment, and spread the word about it! 🖊️

---

## [The Story Behind ember-model-select 📔](https://nickschot.nl/blog/creating-ember-model-select)

Often, inspiration for a new idea comes from combining the best of existing ideas.

For his [first blog post](https://nickschot.nl/blog/creating-ember-model-select), [@nickschot](https://github.com/nickschot) shared how he was inspired to create the addon [ember-model-select](https://nickschot.github.io/ember-model-select/). 🎉

We can use ember-model-select to create a `select` dropdown that lets users (1) **search for a model in Ember Data** and (2) **see an unlimited amount of data**. @nickschot combined three popular addons to solve this problem: [ember-power-select](https://ember-power-select.com/), [ember-concurrency](http://ember-concurrency.com), and [ember-infinity](https://github.com/ember-infinity/ember-infinity).

To learn more about @nickschot's motivation and solution behind ember-model-select, [please check out his blog post](https://nickschot.nl/blog/creating-ember-model-select). 🙏

---

## [ember-intl-analyzer Launched! 🚀](https://github.com/simplabs/ember-intl-analyzer)

[ember-intl-analyzer](https://github.com/simplabs/ember-intl-analyzer) is the newest addition to our [i18n toolset](https://github.com/ember-intl/ember-intl), thanks to collaboration between [Simplabs](https://simplabs.com/) and [Qonto](https://qonto.eu/).

This CLI tool can **find unused translations** in your component files. Soon, it will be able to **find broken and missing translations** too!

[Try ember-intl-analyzer on your app today. 💛](https://github.com/simplabs/ember-intl-analyzer)

---

## [EmberFest 2019 Announced 🇩🇰](https://emberfest.eu/)

EmberFest will be held in **Copenhagen** this year, October 17-18! EmberFest is the **European Community Ember Conference**. Looking for updates on the latest and greatest in Ember and Glimmer? This is the place to be!

Check out the videos from [EmberFest 2018](https://www.youtube.com/playlist?list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9) or follow [@EmberFest](https://twitter.com/EmberFest/) on Twitter. Tickets are on sale now, and you can take advantage of early-bird pricing (limited availability). Hope to see you there!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/kiwiupover" target="gh-user">@kiwiupover</a>, <a href="https://github.com/MonsieurDart" target="gh-user">@MonsieurDart</a>, <a href="https://github.com/step2yeung" target="gh-user">@step2yeung</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/RichardOtvos" target="gh-user">@RichardOtvos</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/mbinet" target="gh-user">@mbinet</a>, <a href="https://github.com/btecu" target="gh-user">@btecu</a>, <a href="https://github.com/romgere" target="gh-user">@romgere</a>, <a href="https://github.com/JonForest" target="gh-user">@JonForest</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/alexhancock" target="gh-user">@alexhancock</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/KamiKillertO" target="gh-user">@KamiKillertO</a>, <a href="https://github.com/scalvert" target="gh-user">@scalvert</a>, <a href="https://github.com/kgautreaux" target="gh-user">@kgautreaux</a>, <a href="https://github.com/wycats" target="gh-user">@wycats</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/dbendaou" target="gh-user">@dbendaou</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/mikias10" target="gh-user">@mikias10</a>, <a href="https://github.com/zion" target="gh-user">@zion</a>, <a href="https://github.com/hakilebara" target="gh-user">@hakilebara</a>, <a href="https://github.com/dougbanville" target="gh-user">@dougbanville</a>, <a href="https://github.com/meanking" target="gh-user">@meanking</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jessica Jordan, Amy Lam, and the Learning Team
