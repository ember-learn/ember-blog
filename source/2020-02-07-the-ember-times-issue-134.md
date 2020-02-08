---
title: The Ember Times - Issue No. 134
author: Chris Ng, Anne-Greeth van Herwijnen, Isaac Lee, Jessica Jordan, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/02/07-the-ember-times-issue-134.html"
responsive: true
---

👋 Emberistas! 🐹

This week: Polyfilled ember-data packages syntax for all Ember apps 📦,
use Figma with Storybook to make your developer life easier 🎨,
QUnit DOM announces v1.0 release 🎂,
and check out the ember-changeset 3.0.0 release 🎉!

READMORE

---

## [Back to the future with ember-data packages polyfill 📦🚀](https://github.com/ember-data/babel-plugin-ember-data-packages-polyfill)

The [ember-data packages API](https://emberjs.github.io/rfcs/0395-ember-data-packages.html) allows you to import objects and methods from smaller packages in the ember-data module following guidelines similar to the ones established in the [Ember Modules RFC#176](https://github.com/emberjs/rfcs/pull/176). With real and resolvable package paths, many developers can directly benefit from them with improved code reference information in their IDE. The ember-data packages API is available [since ember-data 3.11](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html).

There's nothing like a new, shiny API that makes your developer life easier. Even better if you can already use that API in your application without any upgrading! Users of ember-data with **version 3.10 and below** get to benefit
from the new way of importing with the help of the [ember-data packages polyfill](https://github.com/ember-data/babel-plugin-ember-data-packages-polyfill)!

The polyfill ensures that any instances of the Packages API import statements are transformed back to the legacy "DS" EmberData import syntax. You can opt-in to using the polyfill in your app, by upgrading your ember-cli-babel dependency to [version 7.14](https://github.com/babel/ember-cli-babel/releases/tag/v7.14.0) or higher for this [new feature](https://github.com/babel/ember-cli-babel/pull/318).

Wanna learn more about how to use the new packages import syntax for ember-data? Be sure to give the [Ember 3.11 release post](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html) another read
for practical code examples on how to use it and pop by the [#ember-data channel on the Ember Discord](https://discordapp.com/invite/emberjs) for more questions and discussions.

---

## [From Figma to Ember to Storybook…with two clicks 🎨](https://gos.si/blog/from-figma-to-ember-to-storybook-with-2-clicks/)

[Thomas Gossmann (@gossi)](https://github.com/gossi) has started a blog post series on Figma, Ember and Storybook. [Part 1: Full Featured Themes in Figma](https://gos.si/blog/full-featured-themes-in-figma/) has been published and will tell you all about how to organise your design in Figma. 

Stay tuned for Part 2 on design tokens and Part 3 on documentation within the Ember Ecosystem. Follow [@unistyler](https://twitter.com/unistyler) on Twitter to be notified when they are published.

You can find the design system and code on [GitHub](https://github.com/gossi/hokulea).

---

## [QUnit DOM celebrates v1.0 release! 🎂](https://twitter.com/TobiasBieniek/status/1223998561605627904)

[QUnit DOM](https://github.com/simplabs/qunit-dom) provides **readable assertions for QUnit** and has been shipped with Ember since v3.1. If you haven't tried QUnit DOM yet, we recommend [checking out its API](https://github.com/simplabs/qunit-dom/blob/master/API.md) to see how you can simplify your tests.

Last week, QUnit DOM [announced its v1.0 release](https://twitter.com/TobiasBieniek/status/1223998561605627904) to mark the project's stability. We extend our thanks to [Tobias Bieniek (@Turbo87)](https://github.com/Turbo87) and everyone who have helped with the project!

With version 1.0, you can use **assertion chaining**:

```javascript
assert.dom('[data-test-input="Email"]')
  .isRequired()
  .hasAttribute('type', 'email')
  .hasValue('zoey@ember.js');
```

You can also try out a new assertion, `hasProperty`, to check for DOM properties. There can be subtle differences between `hasAttribute` (to check for HTML attributes) and `hasProperty` (for DOM properties):

```javascript
// These two assertions are equivalent.
assert.dom('[data-test-input="I Agree"]')
  .hasAttribute('checked', '')
  .hasProperty('checked', true);

// These three assertions are equivalent.
assert.dom('[data-test-button="Delete"]')
  .hasClass('btn').hasClass('btn-red')
  .hasAttribute('class', 'btn btn-red')
  .hasProperty('className', 'btn btn-red');
```

To learn more about when you might use `hasAttribute` or `hasProperty`, please visit [the tutorial by JavaScript.info](https://javascript.info/dom-attributes-and-properties).

---

## [ember-changeset 3.0.0 Release 🎉](https://twitter.com/puekey/status/1224340431644708864)

The [ember-changeset](https://github.com/poteto/ember-changeset) addon officially released [version 3.0.0](https://github.com/poteto/ember-changeset/blob/master/CHANGELOG.md#300-2020-02-02). The addon provides a Changeset class that represents a set of valid changes for any Object (`Ember.Object`, `DS.Model`, POJOs, etc). The idea is only the changeset's internal values are updated until we invoke the save method which would set and save the valid changes onto the provided object.

This release requires Ember 3.13 and above and the use of @tracked will help ember-changeset monitor and propagate changes to the UI layer. If your app is < 3.13 or you need to support IE11, then you can install the 2.0 series. Watch a [free video intro](https://www.emberscreencasts.com/posts/168-introduction-to-ember-changeset) presented by EmberScreencasts and use ember-changeset today!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/bobisjan" target="gh-user">@bobisjan</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/lifeart" target="gh-user">@lifeart</a>, <a href="https://github.com/chadhietala" target="gh-user">@chadhietala</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a> and <a href="https://github.com/pichfl" target="gh-user">@pichfl</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Anne-Greeth van Herwijnen, Isaac Lee, Jessica Jordan, Amy Lam and the Learning Team
