---
title: The Ember Times - Issue No. 144
author: Chris Ng, Jessica Jordan, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/04/17-the-ember-times-issue-144.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Quest Issue: Drop Mixins from ember-simple-auth 🔐,
Call for a11y-focussed contributors ❤️,
Ember Conf 2020 Trainings 🚀,
State management with ember-statecharts 📈,
READMORE

---

## [Call for contributors: Join the strike team for accessibility in Ember](https://github.com/emberjs/rfcs/issues/595)

The Ember community put in lots of work into [framework features](https://guides.emberjs.com/release/accessibility/) and [addons](https://emberobserver.com/categories/accessibility) to allow us to build accessible and user-friendly applications. But still there is more work to be done to **address accessibility issues** in Ember.js and to improve the future of how we build JavaScript apps.

Do you want to be part of these efforts to help modern Ember apps become more accessible?

Then be sure to join the **#st-a11y strike team** on the [Ember Discord chat](https://discordapp.com/invite/emberjs)! The recently founded strike team for creating an **accessible JavaScript framework** has already put together a [detailed list of issues to work on](https://github.com/emberjs/rfcs/issues/595) and is counting on your support. On top of that, there are several accessibility-related issues in **ember-template-lint** that could use your help, so if tooling is your thing, please [check out the issues on Github](https://github.com/ember-template-lint/ember-template-lint/issues) and see if there's a rule you can help write!

For more ideas, questions and discussion around a11y-related work, [join the strike team in the #st-a11y channel today](https://discordapp.com/invite/emberjs)!

---

## [Quest Issue: Drop Mixins from ember-simple-auth 🔐](https://twitter.com/marcoow/status/1250411978339819522)

[Marco Otte-Witte (@marcoow)](https://github.com/marcoow) announced a [quest issue to Drop Mixins](https://github.com/simplabs/ember-simple-auth/issues/2185) in [ember-simple-auth](https://github.com/simplabs/ember-simple-auth).

The addon [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) is a lightweight library for implementing authentication and authorization with Ember.js applications. When it was originally designed, the addon was heavily leveraging [mixins](https://api.emberjs.com/ember/release/classes/Mixin) so it could be one-step integrated by developers into their applications. However, with [Native JavaScript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), mixins aren't really well supported and you have to fall back to constructs like:

```js
export default class ProtectedRoute extends Route.extend(AuthenticatedRouteMixin) { }
```

Furthermore, eventually mixins will likely be removed from Ember altogether and they already trigger [linter warnings](https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-mixins.md). The quest issue details several options to deal with this such as [Ember Decorators](https://github.com/emberjs/rfcs/blob/master/text/0408-decorators.md) or Mixins that [do not rely](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/) on the Ember Object model.

Try out [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) and take a look at the [quest issue](https://github.com/simplabs/ember-simple-auth/issues/2185) with any feedback or ideas you might have!

---

## [Ember Conf 2020 Trainings 🚀](https://emberconf.com/#/schedule/)

A heads up that some of the Ember Conf 2020 trainings are now available online at no additional cost! 💸 

You can check out [EmberMap's](https://embermap.com/) awesome trainings on [Domain Modeling for JavaScript Apps with Mirage JS](https://twitter.com/ember_map/status/1245011062417772548) and [Tailwind CSS Tips, Tricks & Best Practices](https://twitter.com/ember_map/status/1246071188394250240)!

Also now available is a super cool workshop from [simplabs](https://simplabs.com/) to teach you the basics about [Abstract Syntax Trees](https://github.com/simplabs/ast-workshop)!

Don't miss the bus 🚌 on this opportunity to level up your skills in these really cool topics. 😃

---

## [Enjoy managing state with ember-statecharts 📈](https://twitter.com/LevelbossMike/status/1248247002489425921)

**State charts** are a method to model complex program behavior as a set of states that react to events. And being able to manage and predict state in a growing Ember application can be very useful.

And this is where [**ember-statecharts**](https://github.com/LevelbossMike/ember-statecharts) comes in: This Ember addon provides us with a new abstraction layer to define state charts in our app, based on the conventions from the powerful [xstate library](https://xstate.js.org/).

Want to learn more? Be sure to [check out the sparkling new documentation](https://twitter.com/LevelbossMike/status/1248247002489425921) and try it [for yourself](https://emberobserver.com/addons/ember-statecharts)!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/wayne-o" target="gh-user">@wayne-o</a>, <a href="https://github.com/gabrielcsapo" target="gh-user">@gabrielcsapo</a>, <a href="https://github.com/elwayman02" target="gh-user">@elwayman02</a>, <a href="https://github.com/lifeart" target="gh-user">@lifeart</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/ondrejsevcik" target="gh-user">@ondrejsevcik</a>, <a href="https://github.com/Robdel12" target="gh-user">@Robdel12</a>, <a href="https://github.com/buschtoens" target="gh-user">@buschtoens</a>, <a href="https://github.com/alexeykostevich" target="gh-user">@alexeykostevich</a>, <a href="https://github.com/simonihmig" target="gh-user">@simonihmig</a>, <a href="https://github.com/dfreeman" target="gh-user">@dfreeman</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jessica Jordan, Jared Galanis the crowd and the Learning Team
