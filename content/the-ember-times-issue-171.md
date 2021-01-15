---
title: The Ember Times - Issue No. 171
author:
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
  - chris-ng
  - jen-weber
date: 2021-01-15T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Ember 3.24 Release 🐹,
Read the blog on Understanding args in Glimmer Components ✍️,
Announcing the launch of the redesigned Ember Blog 🐹,
...
  
---

## [Ember 3.24 Release 🐹](https://blog.emberjs.com/ember-3-24-released/)

Version 3.24  of Ember.js, Ember Data, and Ember CLI was released on January 7, 2021! Please use the [ember-try](https://github.com/ember-cli/ember-try) addon to continuously test your projects against the latest Ember releases.

Ember.js 3.24 included [blueprint changes](https://github.com/emberjs/ember.js/pull/19224) when [ember-page-title](https://github.com/ember-cli/ember-page-title) is installed, interface changes to `DeprecationOptions` requiring the keys `for` and `since` when using `deprecate()`, and updated the Glimmer VM to version 0.65.0.

The function `tryInvoke` from `@ember/utils` module has been deprecated in favor of JavaScript's optional chaining `?.` There have also been various deprecations for `Ember.String` methods including the `Ember.String.loc` function. Please check the [Deprecations guide](https://deprecations.emberjs.com/v3.x/) for the full information.

Ember Data 3.24 included a fix where an attempt to set something on a deleted record no longer shows the value in the error message in a production environment. This was [done](https://github.com/emberjs/data/pull/7370) to prevent leaking sensitive data.

Ember CLI 3.24 upgraded the packages that are present in the package.json blueprint to their latest version which included a major version changes for [ember-qunit to v5](https://github.com/emberjs/ember-qunit/releases/tag/v5.0.0) and [eslint-plugin-ember to v10](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v10.0.0). The addon [ember-page-title](https://github.com/ember-cli/ember-page-title) was also added to the blueprint. Finally prettier (along with eslint-config-prettier and eslint-plugin-prettier) was also added to the blueprint from [RFC #628](https://github.com/emberjs/rfcs/blob/master/text/0628-prettier.md).

Read the full [Ember 3.24 release notes](https://blog.emberjs.com/ember-3-24-released/) for the complete information.

---

## [Blog: Understanding args in Glimmer Components ✍️](https://v5.chriskrycho.com/journal/understanding-args-in-glimmer-components/)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) wrote a blog post on [understanding `args` in Glimmer components](https://v5.chriskrycho.com/journal/understanding-args-in-glimmer-components/) with a focus on what happens when there are _updates_ to `args`.

Chris explains how a Glimmer component works if you strip away all the reactivity and only do a single pass. The [Glimmer component API](https://api.emberjs.com/ember/3.23/modules/@glimmer%2Fcomponent) sets the `args` object on to the class in the `constructor`. The `args` object in a Glimmer component is also **read-only** since it is a [private class field](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) while exposed with a getter.

```javascript
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

The blog recommends to never assign from a property on `args` to a local class field in a Glimmer component because changes to the parent will never be reflected in the component. You should instead use getters that are re-computed when invoked.

Read the full blog post on [Chris’s blog](https://v5.chriskrycho.com/journal/understanding-args-in-glimmer-components/).

---

## [Announcing the launch of the redesigned Ember Blog 🐹](https://blog.emberjs.com)

<!--alex ignore king-queen-->
[The Ember Blog](https://blog.emberjs.com/) has a new look and a new codebase!
The Ember Blog was started 8 years ago, in 2012. For many years, it was a custom Ruby app
that was mainly used for release blog posts.
Today, the blog is the home for The Ember Times,
release announcements, guest-written learning articles, and more,
so a group of dedicated contributors set out to make some improvements.
The blog is now an Ember app, and under the hood, it uses the same tech
that powers the Ember Guides, [Empress](https://github.com/empress).
Empress tools help turn markdown into HTML within an Ember app,
meaning that articles are quick to write using Markdown, and contributors
can use all the great tools that Ember has to offer.

Please check out [the blog](https://blog.emberjs.com/) today!

<!--alex ignore king-queen-->
Did you spot any issues? Want to help build future features?
You can find the main repository at
[ember-learn/ember-blog](https://github.com/ember-learn/ember-blog) on GitHub.
Most styles and components come from the shared component library that all Ember's public sites use,
[ember-styleguide](https://github.com/ember-learn/ember-styleguide).
The [empress-blog-ember-template](https://github.com/ember-learn/empress-blog-ember-template)
has a lot of the layout logic that is specific to this blog,
and [empress-blog](https://github.com/empress/empress-blog) handles the general application code for routing and data requests for blogs in general.

<!--alex ignore king-queen-->
If you like what you see, you can [make your own blog using Empress](https://github.com/empress/empress-blog#super-quick-start) in about 10 minutes!

Many thanks to the contributors who worked on this project: <TODO>

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

Chris Ng, Jen Weber and the Learning Team
