---
title: The Ember Times - Issue No. 187
authors:
  - anne-greeth-schot-van-herwijnen
  - chris-ng
  - amy-lam
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
date: 2021-08-27T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Ember-scroll-modifier and ember-user-activity updates 🚀,
Release: ember-engines-router-service ⚙️,
📺 Coding with the Dead on Twitch

---

## [🚀 Ember-scroll-modifier and ember-user-activity updates](https://twitter.com/AxleHellfire/status/1424825542767874052)

[Jordan Hawker (@elwayman02)](https://github.com/elwayman02) announced updates to two of his add-ons.

[ember-scroll-modifiers](https://ember-scroll-modifiers.jhawk.co) got a minor update to add an amazing test helper to **make it easier** to test usage of the **scroll-into-view** modifier in your code.

[ember-user-activity](ember-user-activity.jhawk.co) got a major update, with the release over version 6.0.0. This version drops support for Ember 3.16 and IE11. Not only does it drop support, but it enables the **use** in **Ember 4.0** 🥳!

---

## [Release: ember-engines-router-service ⚙️](https://twitter.com/MVillander/status/1423659543427522560)

[Michael Villander (@villander)](https://github.com/villander) released the [ember-engines-router-service](https://github.com/villander/ember-engines-router-service) addon which provides the Router service for [ember-engines](https://github.com/ember-engines/ember-engines).

The addon gives you access to the [RouterService API](https://api.emberjs.com/ember/release/classes/RouterService) inside each engine. This allows you to inject the router service as usual to your component within an engine and use APIs such as `transitionTo` and even `transitionToExternal` which help link `externalRoutes` together.

```js
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from ‘@ember/object’;

export default class SomeComponent extends Component {
  @service router;

  @action
  transitionToHome() {
    this.router.transitionToExternal('other.route');
  }

  @action
  transitionToAdmin() {
    this.router.transitionTo('admin.route');
  }
}
```

To learn more, [try it out today](https://github.com/villander/ember-engines-router-service) in your application or read the [Engine Linking RFC](https://github.com/emberjs/rfcs/pull/122) for more documentation.

---

## [📺 Coding with the Dead on Twitch](https://twitter.com/muziejus/status/1427725501112717319)

<!--alex ignore host-hostess-->
**[Studio Remote: Coding with the Dead](https://www.twitch.tv/videos/1121252669)** is a Twitch series from Columbia University Libraries. [Moacir P. de Sá Pereira (@muziejus)](https://github.com/muziejus) is your host, live streaming coding in Ember! In the most recent episode, Mocair works on [wandertext](https://github.com/wandertext/wandertext), an open source app to create and share semantically rich geospatial datasets. The app is currently under heavy development! It's neat that viewers can follow along with the code, project management via GitHub issues, debugging, spelunking through addons, and more!

<!-- embed on substack, screenshot for blog? couldn't get twitter embed to work. most online converters  https://twitter.com/muziejus/status/1427725501112717319 -->

Moacir is typically scheduled for Tuesday afternoons at 3pm ET on Twitch. Follow [CULStudio](https://www.twitch.tv/culstudio) on Twitch and check out the [schedule](https://www.twitch.tv/culstudio/schedule) to tune in live or async!

---

## [🐹 3. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 4. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

Anne-Greeth Schot-van Herwijnen, Chris Ng, Amy Lam, the crowd and the Learning Team
