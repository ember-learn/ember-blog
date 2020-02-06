---
title: The Ember Times - Issue No. XXS
author: Chris Ng, Anne-Greeth van Herwijnen, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/xx/xx-the-ember-times-issue-XXX.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

How structuring your Figma can make your developer life easier 🎨,
QUnit DOM announces v1.0 release 🎂,
Check out the ember-changeset 3.0.0 Release 🎉,

READMORE

---

## [From Figma to Ember to Storybook … with 2 Clicks 🎨](https://gos.si/blog/from-figma-to-ember-to-storybook-with-2-clicks/)

[Thomas Gossmann @gossi](https://github.com/gossi) has started a blog post series on Figma, Ember and Storybook. It is a 3 part series. [Part 1](https://gos.si/blog/full-featured-themes-in-figma/) has been published and will tell you all about how to organise your design in Figma. So if you want to learn something about themes and design tokens, go ahead and read  [Part 1: Full Featured Themes in Figma](https://gos.si/blog/full-featured-themes-in-figma/) .

Part 2 on design tokens in Ember and part 3 on documentation within the Ember Ecosystem are on their way. Follow [@unistyler](https://twitter.com/unistyler) on Twitter to be notified when they are published. 

You can find the design system and code on [GitHub](https://github.com/gossi/hokulea).

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [QUnit DOM celebrates v1.0 release! 🎂](https://twitter.com/TobiasBieniek/status/1223998561605627904)

[QUnit DOM](https://github.com/simplabs/qunit-dom) provides **readable assertions for QUnit** and has been shipped with Ember since v3.1. If you haven't tried QUnit DOM yet, we recommend [checking out its API](https://github.com/simplabs/qunit-dom/blob/master/API.md) to see how you can simplify your tests.

Last week, QUnit DOM [announced its v1.0 release](https://twitter.com/TobiasBieniek/status/1223998561605627904) to mark the project's stability. One of the new features is **assertion chaining**:

```javascript
assert.dom('[data-test-input="Email"]')
  .isRequired()
  .hasAttribute('type', 'email')
  .hasValue('zoey@ember.js');
```

We extend our thanks to everyone who have contributed to the project!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [ember-changeset 3.0.0 Release 🎉](https://twitter.com/puekey/status/1224340431644708864)

The [ember-changeset](https://github.com/poteto/ember-changeset) addon officially released [version 3.0.0](https://github.com/poteto/ember-changeset/blob/master/CHANGELOG.md#300-2020-02-02). The addon provides a Changeset class that represents a set of valid changes for any Object (`Ember.Object`, `DS.Model`, POJOs, etc). The idea is only the changeset's internal values are updated until we invoke the save method which would set and save the valid changes onto the provided object.

This release requires Ember 3.13 and above and the use of @tracked will help ember-changeset monitor and propagate changes to the UI layer. If your app is < 3.13 or you need to support IE11, then you can install the 2.0 series. Watch a [free video intro](https://www.emberscreencasts.com/posts/168-introduction-to-ember-changeset) presented by EmberScreencasts and use ember-changeset today!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Anne-Greeth van Herwijnen, Isaac Lee, the crowd and the Learning Team
