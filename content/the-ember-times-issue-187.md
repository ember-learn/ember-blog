---
title: The Ember Times - Issue No. 187
authors:
  - anne-greeth-schot-van-herwijnen
  - chris-ng
  - amy-lam
date: 2021-08-27T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Release: ember-engines-router-service, ember-scroll-modifier and ember-user-activity updates, and Coding with the Dead on Twitch.

---

## [⚙️ Release: ember-engines-router-service](https://twitter.com/MVillander/status/1423659543427522560)

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

## [🚀 Ember-scroll-modifier and ember-user-activity updates](https://twitter.com/AxleHellfire/status/1424825542767874052)

[Jordan Hawker (@elwayman02)](https://github.com/elwayman02) announced updates to two of his add-ons.

[ember-scroll-modifiers](https://ember-scroll-modifiers.jhawk.co) got a minor update to add an amazing test helper to **make it easier** to test usage of the **scroll-into-view** modifier in your code.

[ember-user-activity](https://ember-user-activity.jhawk.co/) got a major update, with the release over version 6.0.0. This version drops support for Ember 3.16 and IE11. Not only does it drop support, but it enables the **use** in **Ember 4.0** 🥳!

---

## [📺 Coding with the Dead on Twitch](https://twitter.com/muziejus/status/1427725501112717319)

<!--alex ignore host-hostess-->
**[Studio Remote: Coding with the Dead](https://www.twitch.tv/videos/1121252669)** is a Twitch series from Columbia University Libraries. [Moacir P. de Sá Pereira (@muziejus)](https://github.com/muziejus) is your host, live streaming coding in Ember! In the most recent episode, Moacir works on [wandertext](https://github.com/wandertext/wandertext), an open source app to create and share semantically rich geospatial datasets. The app is currently under heavy development! It's neat that viewers can follow along with the code, project management via GitHub issues, debugging, spelunking through addons, and more!

Moacir is typically scheduled for Tuesday afternoons at 3pm ET on Twitch. Follow [CULStudio](https://www.twitch.tv/culstudio) on Twitch and check out the [schedule](https://www.twitch.tv/culstudio/schedule) to tune in live or async!

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/ChrisCarini" rel="noopener noreferrer" target="_blank">Chris Carini (@ChrisCarini)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/suchitadoshi1987" rel="noopener noreferrer" target="_blank">Suchita Doshi (@suchitadoshi1987)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/aniketh-deepsource" rel="noopener noreferrer" target="_blank">@aniketh-deepsource</a>, <a href="https://github.com/raycohen" rel="noopener noreferrer" target="_blank">Ray Cohen (@raycohen)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/hermionethebrightone" rel="noopener noreferrer" target="_blank">Hermione Granger (@hermionethebrightone)</a>, <a href="https://github.com/stefanpenner" rel="noopener noreferrer" target="_blank">Stefan Penner (@stefanpenner)</a>, <a href="https://github.com/btecu" rel="noopener noreferrer" target="_blank">Bj Tecu (@btecu)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/Oluwadamilareolusakin" rel="noopener noreferrer" target="_blank">Tolulope Oluwadamilare Olusakin (@Oluwadamilareolusakin)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/rajakvk" rel="noopener noreferrer" target="_blank">@rajakvk</a>, <a href="https://github.com/harshith-venkatesh" rel="noopener noreferrer" target="_blank">Harshith Venkatesh (@harshith-venkatesh)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/basz" rel="noopener noreferrer" target="_blank">Bas Kamer (@basz)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, and <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a> for their contributions to Ember and related repositories! 💖</p>

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

Anne-Greeth Schot-van Herwijnen, Chris Ng, Amy Lam, and the Learning Team
