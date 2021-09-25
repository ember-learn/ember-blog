---
title: The Ember Times - Issue No. 189
authors:
  - chris-ng
  - anne-greeth-schot-van-herwijnen
  - jared-galanis
  - amy-lam
date: 2021-09-24T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

RFC: Asset Import Spec ✍️
✨ ember-element-query v4
🏛️ EmberFest 2021 - best of both worlds
⚡️ Glimmer cheatsheet
📈 Glimmer Apollo v0.4.0

---

## [✍️ RFC: Asset Import Spec](https://github.com/emberjs/rfcs/pull/763)

[Edward Faulkner (@ef4)](https://github.com/ef4) proposed a new [RFC](https://github.com/emberjs/rfcs/pull/763) which defines the standard semantics for what it means to depend on files that are not JavaScript or CSS, like images, fonts, and other media. The ecosystem today mostly relies on [broccoli-asset-rev](https://github.com/ember-cli/broccoli-asset-rev) which is a Broccoli plugin that adds fingerprint checksums and CDN URLs to your assets. The RFC argues that the broccoli-asset-rev plugin does not take advantage of the newer capabilities we have in [ember-auto-import](https://github.com/ef4/ember-auto-import) and [embroider](https://github.com/embroider-build/embroider). The proposed pull-based design lets code declare what assets it needs and then not worry about how those assets will get delivered is safer and easier to change in the future.

```js
import myImage from './hello.png';

class extends Component {
  myImage = myImage
}
```

```handlebars
<img src={{this.myImage}} />
```

If this is something you are interested in, please read and discuss the [Asset Import Spec RFC on GitHub](https://github.com/emberjs/rfcs/pull/763)!

---

## [✨ ember-element-query v4](https://github.com/lolmaus/ember-element-query/)

[Andrey Mikhaylov (@lolmaus)](https://github.com/lolmaus) announced the [release](https://twitter.com/lolmaus_en/status/1424083417591914499) of [ember-element-query](https://github.com/lolmaus/ember-element-query/) v4, a **complete rewrite for Octane** with a new convenient API.

Element queries are a technique to do responsive transformations based on the element's own size, rather than the viewport size. You can implement reusable responsive components with encapsulated styles, that are decoupled from their parent context. Such components will realign their content depending on how much space is available to them.

For example, if you put a responsive component into a tight sidebar, it will align its content vertically. When the sidebar expands, the component will realign horizontally, in order to efficiently use available space. Check out [Element Queries, And How You Can Use Them Today](https://www.smashingmagazine.com/2016/07/how-i-ended-up-with-element-queries-and-how-you-can-use-them-today/) on Smashing Magazine to learn more.

Historically, `ember-element-query` was the first Ember addon to offer element queries out of the box, but back then it used an inefficient implementation and was written in the now-outdated Classic Ember paradigm. It served as one of inspirations for [Chad Carbert's (@chadian)](https://github.com/chadian) [ember-fill-up](https://github.com/chadian/ember-fill-up). [Announced](https://www.youtube.com/watch?v=RIdjk9_RSBY) at EmberFest 2019 as a proof-of-concept, `ember-fill-up` saw no updates and was discontinued.

The first element query addon to be released with feature completeness, full test coverage and lasting support was [Isaac Lee's (@ijlee2)](https://github.com/ijlee2/) `ember-container-query`, featured in [The Ember Times #153](https://blog.emberjs.com/the-ember-times-issue-153/). The re-release of `ember-element-query` followed suit with a subjectively more convenient, opinionated API, backed by modern, efficient `ResizeObserver` under the hood. [@ijlee2](https://github.com/ijlee2/) provided kind support, criticism and generously shared the demo app with [@lolmaus](https://github.com/lolmaus)'s `ember-element-query`.

Check out the detailed [README](https://github.com/lolmaus/ember-element-query/) and give the addon a spin!

---

## [🏛️ EmberFest 2021 - best of both worlds](https://emberfest.eu)

Next week, after a year of absence because of COVID, [EmberFest](https://emberfest.eu) is back. On the 30th of September and the 1st of October, Emberistas will gather **digitally** and **on-site** in Rome to hear awesome Ember talks.

There will be well-known EmberConf/Fest speakers like [Melanie Sumner (@MelSumner)](https://github.com/MelSumner) and [Edward Faulkner (@ef4)](https://github.com/ef4), as well as first-time speakers like [Bartlomiej Dudzik (@BobrImperator)](https://github.com/BobrImperator), [Jenny Judova (@JennyJudova)](https://github.com/JennyJudova), and [Zoë Bijl (@ZoeBijl)](https://github.com/ZoeBijl). The [line-up](https://emberfest.eu/schedule/) is super diverse and interesting for all Ember enthusiasts.

Remote tickets are still available. A few on-site tickets too, if you plan on arriving at the last minute. We hope you enjoy EmberFest wherever you decide to join.

---

## [⚡️ Glimmer Cheatsheet](https://twitter.com/nullvoxpopuli/status/1439652161625985037)

If you've ever found the Ember Octane vs Ember Classic Cheat Sheet cheatsheet helpful, and you're also interested in Glimmer.js, you might want to check out the in-progress and exciting, but **unofficial**, [Glimmer Cheatsheet](https://cheatsheet.glimmer.nullvoxpopuli.com/docs) that [NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) recently started to put together.

So far only part of the [templates page](https://cheatsheet.glimmer.nullvoxpopuli.com/docs/templates) has been written, but if you're interested in contributing there is a rough outline and placeholder i18n to help get you started.

Take a look at the [GitHub repo](https://github.com/nullvoxpopuli/ember-cheat-sheet) or the [deployed app](https://cheatsheet.glimmer.nullvoxpopuli.com/docs) for more!

---

## [📈 Glimmer Apollo v0.4.0](https://twitter.com/josemarluedke/status/1441532888072142859)

[Josemar Luedke (@josemarluedke)](https://github.com/josemarluedke) recently released a new [v0.4.0](https://github.com/josemarluedke/glimmer-apollo/releases/tag/v0.4.0) of Glimmer Apollo that includes support for [subscriptions](https://glimmer-apollo.com/docs/fetching/subscriptions/)! 🔥

If you haven't checked out Glimmer Apollo and you would like to make use of Apollo to access GraphQL data in your Glimmer or Ember app, you should take a look at this [exciting project](https://github.com/josemarluedke/glimmer-apollo) and give [the docs](https://glimmer-apollo.com/docs) a read.

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/davideferre" rel="noopener noreferrer" target="_blank">Davide Ferrero (@davideferre)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/lifeart" rel="noopener noreferrer" target="_blank">Alex Kanunnikov (@lifeart)</a>, <a href="https://github.com/tben" rel="noopener noreferrer" target="_blank">Ben Tidy (@tben)</a>, <a href="https://github.com/enspandi" rel="noopener noreferrer" target="_blank">Andreas Minnich (@enspandi)</a>, <a href="https://github.com/StephanH90" rel="noopener noreferrer" target="_blank">@StephanH90</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/jkeen" rel="noopener noreferrer" target="_blank">Jeff Keen (@jkeen)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/ro0gr" rel="noopener noreferrer" target="_blank">Ruslan Hrabovyi (@ro0gr)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/colenso" rel="noopener noreferrer" target="_blank">@colenso</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/Baltazore" rel="noopener noreferrer" target="_blank">Kirill Shaplyko (@Baltazore)</a>, <a href="https://github.com/charlesfries" rel="noopener noreferrer" target="_blank">Charles Fries (@charlesfries)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/jfdnc" rel="noopener noreferrer" target="_blank">Jacob (@jfdnc)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/maxfierke" rel="noopener noreferrer" target="_blank">Max Fierke (@maxfierke)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/sly7-7" rel="noopener noreferrer" target="_blank">Sylvain Mina (@sly7-7)</a>, <a href="https://github.com/ddzz" rel="noopener noreferrer" target="_blank">Darius Dzien (@ddzz)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, and <a href="https://github.com/ndekeister-us" rel="noopener noreferrer" target="_blank">Nathanaël Dekeister (@ndekeister-us)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [🤓 Connect with us](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Anne-Greeth Schot-van Herwijnen, Jared Galanis Amy Lam, and the Learning Team
