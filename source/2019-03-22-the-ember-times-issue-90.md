---
title: The Ember Times - Issue No. 90
author: Chris Ng, Jessica Jordan, Kenneth Larsen, Amy Lam, Alon Bukai, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/03/22-the-ember-times-issue-90.html"
responsive: true
---

هيلو Emberistas! 🐹

This week has been super busy with The Ember Times team reporting from **EmberConf 2019** in Portland Oregon! We are sharing highlights from the conference and news on **Ember Octane** with you 🐹⛽️, read and comment on the new **Bind Helper** RFC 💖💪, Turn {{on}} the power with a new **{{On} Modifier** RFC 🔌...

---

## [Greetings from EmberConf 2019](https://emberconf.com)

This week [EmberConf - the biggest, annual Ember conference](https://emberconf.com) - took place in Portland, Oregon, United States. Ember developers from all around the world came together to learn more about the newest features of the framework, best practices, case studies and most importantly meet online Ember friends.

<img src="/images/blog/emberjstimes/embertimes-team-2019.jpg" class="centered" alt="The Ember Times Team 2019 and the Zoey mascot posing on stage behind the Ember logo and looking cool as ever 😎"/>

Pictured are Jared Galanis, Melanie Sumner, Kenneth Larsen, L. Preston Sego III, Anne-Greeth Van Herwijnen as Zoey(!), Jessica Jordan, Jen Weber, Ryan Mark, Chris Ng, Amy Lam, and Ricardo "locks" Mendes. Not pictured: Robert Wagner, Alon Bukai, Edward Faulkner, Gaurav Munjal, Migeul Braga Gomes, and Sivakumar Kailasam for contributing to three or more issues in the past year! 💛

This year's [keynote by Tom Dale and Yehuda Katz](https://youtu.be/O3RKLHvpUAI?t=369) featured lots of insight into the **present and future of Ember** and the official announcement for the [**Edition Preview** of **Ember Octane**](https://octane-guides-preview.emberjs.com/release/getting-started/quick-start/). Wanna learn more about Ember Octane and the original RFC (Request for Comments)? Be sure to check out the [Ember Octane Edition website](https://emberjs.com/editions/octane/) and read all about it!

Also The Ember Times will notify you, as soon as the full recordings of the conference sessions are online, so be sure to **stay tuned** and if you haven't done so, [subscribe today](https://the-emberjs-times.ongoodbits.com/)!

---

## [Bind Helper RFC 💖💪](https://github.com/emberjs/rfcs/pull/470)

Fresh off EmberConf, [@rtablada](https://github.com/rtablada) opened a new RFC that introduces a new helper `bind` to allow clear argument and context scope binding for functions passed in templates.

The idea is for the `bind` helper to take in a function and then the set of arguments that will be partially applied to the function, similar to the JavaScript bind method.

Check out the [full RFC](https://github.com/emberjs/rfcs/pull/470) on GitHub!

---

## [Power {{On}} your Ember App! 🔌](https://github.com/emberjs/rfcs/pull/471)

A new RFC has been proposed by [@pzuraq](https://github.com/pzuraq) that proposes adding a new `{{on}}` modifier to Ember. This modifier will allow adding event listeners to elements in your templates. 

You might be thinking, *"Hey Ember Times Writer, we already have those! We have the `{{action}}` element modifier and `on*=` property bindings."* However those have a [few downsides](https://github.com/emberjs/rfcs/blob/27ee4012b0bbf63d4d304e6942b91ce37107bd91/text/0000-on-modifier.md#motivation) that are fixed with the `{{on}}` modifier.

The `{{on}}` modifier will explicitly add event listeners using the `addEventListener` API. It is based on the addon [ember-on-modifier](https://github.com/buschtoens/ember-on-modifier) by [@buschtoens](https://github.com/buschtoens).

An example: The following usages are equivalent:

```handlebars
<div {{on "click" this.handleClick passive=true}}></div>
```
```js
element.addEventListener('click', this.handleClick, { passive: true });
```

So get your modify on today and **make your voice heard** on the [open RFC](https://github.com/emberjs/rfcs/pull/471) 


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---


## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/shawnren" target="gh-user">@shawnren</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/habdelra" target="gh-user">@habdelra</a>, <a href="https://github.com/DingoEatingFuzz" target="gh-user">@DingoEatingFuzz</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/mschinis" target="gh-user">@mschinis</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/gabz75" target="gh-user">@gabz75</a>, <a href="https://github.com/robustdj" target="gh-user">@robustdj</a>, <a href="https://github.com/GavinJoyce" target="gh-user">@GavinJoyce</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/NullVoxPopuli" target="gh-user">@NullVoxPopuli</a>, <a href="https://github.com/toddjordan" target="gh-user">@toddjordan</a>, <a href="https://github.com/wycats" target="gh-user">@wycats</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/dherault" target="gh-user">@dherault</a>, <a href="https://github.com/acorncom" target="gh-user">@acorncom</a>, <a href="https://github.com/courajs" target="gh-user">@courajs</a>, <a href="https://github.com/ultrasaurus" target="gh-user">@ultrasaurus</a>, <a href="https://github.com/Charizard" target="gh-user">@Charizard</a>, <a href="https://github.com/richard-viney" target="gh-user">@richard-viney</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/mixonic" target="gh-user">@mixonic</a>, <a href="https://github.com/mike-north" target="gh-user">@mike-north</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a> and <a href="https://github.com/rbarbey" target="gh-user">@rbarbey</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

<p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

</div>

---

## [#embertimes](https://emberjs.com/blog/tags/newsletter.html) 📰

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---


That's another wrap! ✨

Be kind,

Chris Ng, Jessica Jordan, Kenneth Larsen, Amy Lam, Alon Bukai, the crowd and the Learning Team
