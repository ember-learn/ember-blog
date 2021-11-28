---
title: The Ember Times - Issue No. 192
authors:
  - chris-ng
  - bryan-mishkin
  - isaac-lee
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
date: 2021-11-28T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹
Release of ember-functions-as-helper-polyfill 🎉,
First pre-release of ember-template-lint v4 🧹,
Phorest Interview of Balint Erdi 🎙️,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [Release of ember-functions-as-helper-polyfill 🎉](https://twitter.com/nullvoxpopuli/status/1460052313624784899)

[NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) released the [ember-functions-as-helper-polyfill](https://github.com/NullVoxPopuli/ember-functions-as-helper-polyfill) addon which implements [RFC 756: Default Helper Manager](https://github.com/emberjs/rfcs/pull/756). The addon lets you use plain functions as helpers, check out the example below:

```javascript
import Component  from '@glimmer/component';

export default class MyComponent extends Component {
  myHelper = x => x * 2;
}
```

```handlebars
{{this.myHelper 3}}
```

This reduces the need to create [traditional helpers](https://guides.emberjs.com/release/components/helper-functions/) especially when a helper is only really used within the same component. This addon reduces the amount of boilerplate code written and is a more representational model of how template and JS interact.

Try out this functionality today with the [polyfill](https://github.com/NullVoxPopuli/ember-functions-as-helper-polyfill)!

---

## [First pre-release of ember-template-lint v4 🧹](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v4.0.0-alpha.0)

[Bryan Mishkin (@bmish)](https://github.com/bmish) has kicked off the release cycle for [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) v4 with the first pre-release version [v4.0.0-alpha.0](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v4.0.0-alpha.0)!

The key changes so far include:

* Adding over a dozen rules to the `recommended` config
* Removing deprecated rules, options, and behaviors
* Dropping support for old versions of Node
* Enforcing stricter default behavior for a few rules
* Enforcing stricter validation of configuration files and rule tests
* Enforcing a strictly-defined public Node API

Please test it out and provide feedback about the current changes or changes you would like to see by commenting in the [tracking issue](https://github.com/ember-template-lint/ember-template-lint/issues/1908).

---

## [Phorest Interview of Balint Erdi 🎙️](https://nothingventured.rocks/ember-phorest-with-balint-erdi-7e90126975ee)

[Balint Erdi (@balinterdi)](https://github.com/balinterdi), author of [Rock & Roll with Ember.js](https://balinterdi.com/rock-and-roll-with-emberjs/) and co-organizer of [EmberFest](https://emberfest.eu/), recently got to share his thoughts of working with Ember. In addition to the [full video](https://www.youtube.com/watch?v=BQ46w3PGw7s), you can find a summary of the interview on [Phorest's blog](https://nothingventured.rocks/ember-phorest-with-balint-erdi-7e90126975ee).

What is it like to transition a legacy desktop application to an Ember app? To develop a brand new app that runs on Embroider? How can I hire developers and provide a good culture to help with retention? And what was EmberFest 2021 like for Balint?

Check out the interview to find out the answers to these questions!

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

Chris Ng, Bryan Mishkin, Isaac Lee, the crowd and the Learning Team
