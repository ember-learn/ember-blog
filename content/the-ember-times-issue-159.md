---
title: The Ember Times - Issue No. 159
authors:
  - chris-ng
  - amy-lam
date: 2020-08-07T00:00:00.000Z
tags:
  - newsletter
  - '2020'
---


👋 Emberistas! 🐹

Community addon updates: stable version of ember-bootstrap v4 released 💥, and check out ember-dayjs-helpers 🕰️!

<!-- READMORE -->

---

<!--alex ignore just-->
## [Just released: stable version of ember-bootstrap v4 💥](https://twitter.com/simonihmig/status/1290710885070262275)

[Simon Ihmig (@simonihmig)](https://github.com/simonihmig) announced the **stable release** of ember-bootstrap v4, [tweeting](https://twitter.com/simonihmig/status/1290710885070262275) that it's another step toward a full Octane refactoring! Glimmer components are coming next.

Bootstrap users can check out the full list of changes in the [changelog](https://github.com/kaliber5/ember-bootstrap/blob/master/CHANGELOG.md). For breaking changes, give [ember-bootstrap-codemods](https://github.com/kaliber5/ember-bootstrap-codemods) a try. We are appreciative of all the codemods in the Ember community!

Not familiar with ember-bootstrap? It's an Ember CLI addon that provides a collection of Ember components that mimic the [original Bootstrap](https://getbootstrap.com/) plugins and components in an Ember-friendly way, replacing the need for `bootstrap.js`. For more info, check out the [website](https://www.ember-bootstrap.com/) and the corresponding [repo](https://github.com/kaliber5/ember-bootstrap).

---

## [Check out ember-dayjs-helpers 🕰️](https://github.com/rajasegar/ember-dayjs-helpers)

[Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar) created the [ember-dayjs-helpers](https://github.com/rajasegar/ember-dayjs-helpers) library which contains over 30+ template helpers based on [day.js](https://day.js.org/en), a fast 2kB alternative to Moment.js with the same modern API.

<!--alex ignore easy-->
In your templates, you can easily use day.js APIs using the provided helpers. For example, you can use the `{{day-js}}` helper to display the current date or format a date provided.

```hbs
{{day-js}} => Display today's date
{{day-js date='2019-01-25' format='DD-MM-YYYY'}} => 25-01-2019
{{day-js date='2019-01-25' format='DD MMMM YYYY'}} => 25 January 2019
```

Check out the full project with the list of helpers provided on [GitHub](https://github.com/rajasegar/ember-dayjs-helpers)!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="undefined" rel="noopener noreferrer" target="_blank">@amyrlam</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@bmish</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@chriskrycho</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@chrisrng</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@dcyriller</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@ghedamat</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@ijlee2</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@krisselden</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@locks</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@mehulkar</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@miguelverissimo</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@nickschot</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@pzuraq</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@rwjblue</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@snewcomer</a>, <a href="undefined" rel="noopener noreferrer" target="_blank">@tashvaqa</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Amy Lam, and the Learning Team
