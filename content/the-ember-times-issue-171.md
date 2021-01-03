---
title: The Ember Times - Issue No. 171
author:
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
  - chris-ng
date: 2021-01-15T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Read the blog on Understanding args in Glimmer Components ✍️,

---

## [Blog: Understanding args in Glimmer Components ✍️](https://v5.chriskrycho.com/journal/understanding-args-in-glimmer-components/)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) wrote a blog post on [understanding `args` in Glimmer components](https://v5.chriskrycho.com/journal/understanding-args-in-glimmer-components/) with a focus on what happens when there are _updates_ to `args`.

Chris explains how a Glimmer component works if you strip away all the reactivity and only do a single pass. The [Glimmer component API](https://api.emberjs.com/ember/3.23/modules/@glimmer%2Fcomponent) sets the `args` object on to the class in the `constructor`. The `args` object in a Glimmer component is also **read-only** since it is a [private class field](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) while exposed with a getter.

```js
class Component {
  #args: object;
  get args() {
    return this.#args;
  }

  constructor(args: object) {
    this.#args = args;
  }
}
```

The blog recommends to never assign from a property on `args` to a local class field in a Glimmer component because changes to the parent will never be reflected in the component. You should instead use getters which are re-executed when invoked unlike a class field which only has whatever value it has originally.

Read the full blog post on [Chris’s blog](https://v5.chriskrycho.com/journal/understanding-args-in-glimmer-components/).

---

## [2. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [3. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [4. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [5. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [6. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [7. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [8. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

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

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter/">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, and the Learning Team
