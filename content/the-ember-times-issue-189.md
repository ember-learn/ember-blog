---
title: The Ember Times - Issue No. 189
authors:
  - amy-lam
  - chris-ng
  - anne-greeth-schot-van-herwijnen
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
date: 2021-09-24T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
✨ ember-element-query v4
RFC: Asset Import Spec ✍️
🏛️ EmberFest 2021 - best of both worlds

---

## [🐹 1. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [✨ ember-element-query v4](https://github.com/lolmaus/ember-element-query/)

[Andrey Mikhaylov (@lolmaus)](https://github.com/lolmaus) announced the [release](https://twitter.com/lolmaus_en/status/1424083417591914499) of [ember-element-query](https://github.com/lolmaus/ember-element-query/) v4, a **complete rewrite for Octane** with a new convenient API.

Element queries are a technique to do responsive transformations based on the element's own size, rather than the viewport size. You can implement reusable responsive components with encapsulated styles, that are decoupled from their parent context. Such components will realign their content depending on how much space is available to them.

For example, if you put a responsive component into a tight sidebar, it will align its content vertically. When the sidebar expands, the component will realign horizontally, in order to efficiently use available space. Check out [Element Queries, And How You Can Use Them Today](https://www.smashingmagazine.com/2016/07/how-i-ended-up-with-element-queries-and-how-you-can-use-them-today/) on Smashing Magazine to learn more.

Historically, `ember-element-query` was the first Ember addon to offer element queries out of the box, but back then it used an inefficient implementation and was written in the now-outdated Classic Ember paradigm. It served as one of inspirations for [Chad Carbert's (@chadian)](https://github.com/chadian) [ember-fill-up](https://github.com/chadian/ember-fill-up). [Announced](https://www.youtube.com/watch?v=RIdjk9_RSBY) on EmberFest 2019 as a proof-of-concept, `ember-fill-up` saw no updates and was discontinued.

The first element query addon to be released with feature completeness, full test coverage and lasting support was [Isaac Lee's (@ijlee2)](https://github.com/ijlee2/) `ember-container-query`, featured in [The Ember Times #153](https://blog.emberjs.com/the-ember-times-issue-153/). The re-release of `ember-element-query` followed suit with a subjectively more convenient, opinionated API, backed by modern, efficient `ResizeObserver` under the hood. [@ijlee2](https://github.com/ijlee2/) provided kind support, criticism and generously shared the demo app with [@lolmaus](https://github.com/lolmaus)'s `ember-element-query`.

Check out the detailed [README](https://github.com/lolmaus/ember-element-query/) and give the addon a spin!

---

## [RFC: Asset Import Spec ✍️](https://github.com/emberjs/rfcs/pull/763)

[Edward Faulkner (@ef4)](https://github.com/ef4) proposed a new [RFC](https://github.com/emberjs/rfcs/pull/763) which defines the standard semantics for what it means to depend on files that are not JavaScript or CSS, like images, fonts, and other media. The ecosystem today mostly relies on [broccoli-asset-rev](https://github.com/ember-cli/broccoli-asset-rev) which is a Broccoli plugin that adds fingerprint checksums and CDN URLs to your assets. The RFC argues that the broccoli-asset-rev plugin does not take advantage of the newer capabilities we have in [ember-auto-import](https://github.com/ef4/ember-auto-import) and [embroider](https://github.com/embroider-build/embroider). The proposed pull-based design lets code declare what assets it needs and then not worry about how those assets will get delivered is safer and easier to change in the future.

```js
import myImage from './hello.png';

class extends Component {
  myImage = myImage
}
```

```hbs
<img src={{this.myImage}} />
```

If this is something you are interested in, please read and discuss the [Asset Import Spec RFC on GitHub](https://github.com/emberjs/rfcs/pull/763)!

---

## [🏛️ EmberFest 2021 - best of both worlds](https://emberfest.eu)
Next week after a year of absence because of COVID [EmberFest](https://emberfest.eu) is back. On the 30th of September and the 1st of October Emberistas will gather **digitally** and **analogue** in Rome to hear awesome Ember-talks.

With well-known EmberConf/Fest speakers like [Melanie Sumner (@MelSumner)](https://github.com/MelSumner) and [Edward Faulkner (@ef4)](https://github.com/ef4) and first time speakers like [Bartlomiej Dudzik (@BobrImperator)](https://github.com/BobrImperator), [Jenny Judova (@JennyJudova)](https://github.com/JennyJudova) and [Zoë Bijl (@ZoeBijl)](https://github.com/ZoeBijl) the [line up](https://emberfest.eu/schedule/) is super diverse and interesting for all Ember enthousiasts.

There are still remote tickets available and even if you plan on coming last minute to Rome a few on-site tickets remain. We hope you enjoy this conference wherever you decide to join.

---

## [🐹 5. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 6. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 7. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 8. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Amy Lam, Chris Ng, Anne-Greeth Schot-van Herwijnen, the crowd and the Learning Team
