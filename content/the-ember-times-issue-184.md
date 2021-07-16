---
title: The Ember Times - Issue No. 184
authors:
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
  - chris-ng
  - tim-foster
  - amy-lam
  - jessica-jordan
date: 2021-07-16T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Introducing the a11y-disabled-modifier Modifier 💚, Emberliners Talks 📽,
The Road to Ember 4.0 Polaris 🛣,
Introducing the a11y-disabled-modifier Modifier 💚,
Get your update for ember-engines 0.8.18 🎉,

---

## [The Road to Ember 4.0 Polaris 🛣](https://blog.emberjs.com/the-road-to-ember-4-0/)

[Matthew Beale (@mixonic)](https://github.com/mixonic) from the Ember Core Framework and Steering Committee [teams](https://emberjs.com/teams/), writes about [The Road to Ember 4.0](https://blog.emberjs.com/the-road-to-ember-4-0/) on the official Ember blog.

- **Announcing Ember 4.0**: Ember 4.0 will be released around September 20th. Ember 4.4 will be the first LTS candidate of the 4.x series.
- **Whats in a 4.0?**: As a major version of Ember, there are no new features. This sections discusses the removal of deprecated APIs. For example, `Ember.Logger` is removed in favor of native console APIs. Also, `sendAction` is removed in favor of calling closure actions like any other callback.
- **Planning your upgrade to 4.0**: Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon as part of your upgrade process.
- **Contributing to Ember 4.0**: Join us on Discord in the #dev-ember-js, #dev-ember-data, #dev-ember-cli, or #dev-ember-learning channels to find out how you can contribute.

Please check out the [detailed post](https://blog.emberjs.com/the-road-to-ember-4-0/) in full for more details on how you can prepare for your upgrade!

> We're looking forward to working with the community on Ember 4.0 and on the opportunities beyond it. As always we appreciate your support, your trust, and our common partnership.

---

## [Introducing the a11y-disabled-modifier Modifier 💚](https://discord.com/channels/480462759797063690/480499624663056390/842592654696382474)

<!--alex disable invalid-->
Inspired by the [CSSTricks](https://css-tricks.com/) blog post on [Making Disabled Buttons More Inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/), [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho/) created the [a11y-disabled-modifier](https://github.com/chriskrycho/a11y-disabled-modifier) addon.

The blog post argues against the `disabled` attribute in `<button>` in favor of the `aria-disabled` attribute since it does not prevent clicking and focusing on the button which is useful when you are navigating the site using the Tab key.

This modifier implements accessible and usable button-disabling by adding `aria-disabled="true"` to the target element when the `when` named argument is truthy. It will also stop any clicks on the button from propagating and ensures form submission does not trigger.

```html
<form {{on "submit" this.submit}}>
  <label>some text: <input type='text' /></label>
  <button type='submit' {{disabled when=this.isInvalid}}>submit</button>
</form>
```

Try it out today by running `ember install a11y-disabled-modifier` on your Ember app!
<!--alex enable invalid-->

---

## [Ember Berlin Meetup with 4 talks 📽](https://www.youtube.com/watch?v=c-sWTZJ6nlM&ab_channel=Pusherl)

Four amazing talks from our friends at [Emberliners meetups](https://www.meetup.com/Ember-js-Berlin/) now available for binge watching!
  
1. First up, is '[Embroider: from zero to route splitting in 3.5 weeks](https://www.youtube.com/watch?v=c-sWTZJ6nlM&t=540s)' by [Ben Demboski](https://github.com/bendemboski) which explores what it takes to update a large desktop Ember app to use Embroider.
  
2. [Agathe Badia](https://github.com/Agathebadia) shows her fascinating work on creating a ['Colorblindness emulator with Ember, an A11y project'](https://www.youtube.com/watch?v=c-sWTZJ6nlM&t=2156s)
  
3. [Francesco Novy](https://github.com/mydea) presents ['You could get used to this: Managing GraphQL data'](https://www.youtube.com/watch?v=c-sWTZJ6nlM&t=3480s) - a great primer on GraphQL in Ember.

4. Lastly, [Michael Klein](https://github.com/levelbossmike) and [Clemens Mueller](https://github.com/pangratz) discuss '[On the development of reactive systems with Ember.js](https://www.youtube.com/watch?v=c-sWTZJ6nlM&t=5118s)' providing an insightful view on approaching Ember development as a reactive system using [ember-statecharts](https://ember-statecharts.com/) addon.

These talks give a great snapshot lots of exciting developments happening around the Ember community 💗.

---
  
## [ember-engines v0.8.18 is out! 🎉](https://twitter.com/MVillander/status/1406367740668092420)

If you're already using [ember-engines](https://ember-engines.com/) or plan on using it, be sure to [upgrade your dependency](https://twitter.com/MVillander/status/1406367740668092420)!

The **latest patch release** of ember-engines not only includes bug fixes for older Ember apps, but also several build fixes and new deprecation warnings to help up you keep your application up-to-date.

A huge thank you goes to [Travis Hoover (@thoov)](https://github.com/thoov), [Bert De Block (@bertdeblock)](https://github.com/bertdeblock), [Michael Villander (@villander)](https://github.com/villander) and [Robert Jackson (@rwjblue)](https://github.com/rwjblue) for their work on the project!

Check out the full list of recent updates in the following **changelogs**:

- [v0.8.16](https://github.com/ember-engines/ember-engines/releases/tag/v0.8.16)
- [v0.8.17](https://github.com/ember-engines/ember-engines/releases/tag/v0.8.17)
- [v0.8.18](https://github.com/ember-engines/ember-engines/releases/tag/v0.8.18)

---

## [3. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [4. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [5. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [6. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [7. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [8. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Amy Lam, Jesse Jordan, Tim Foster the crowd and the Learning Team
