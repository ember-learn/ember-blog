---
title: The Ember Times - Issue No. 149
author: Matthew Roderick, Chris Ng, Amy Lam, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/05/22-the-ember-times-issue-149.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
"My Experience with Ember.js" video series 🎥,
Ember Engines acceptance testing guides 📝,
Check out the new EmberMap video on Tracked Properties 👣,
Polyfills for in-element and named blocks 🚀,

READMORE

---

## ["My Experience with Ember.js" video series 🎥](https://www.youtube.com/watch?v=jkb1At1pk2E)

[Cal Woolgar (@calWoolgar)](https://github.com/calWoolgar) has kicked off a new video series "My Experience with Ember.js", where he breaks down the basics of Ember. 

<!--alex ignore easy-->
The first video [What is Ember.js?](https://www.youtube.com/watch?v=jkb1At1pk2E) explains the [Handlebars templating language](https://handlebarsjs.com/) and how it separates your JavaScript from HTML. Cal also touches on [ember-cli](https://ember-cli.com/), and how it enabled you to create a new application easily.

Cal aims to make his videos **short and sweet** 🍭 so that someone learning can reference something in bite-sized pieces. Look forward to what's next from Cal! 👏

---


## [Ember Engines acceptance testing guides & Octane 📝](https://ember-engines.com/docs/testing-acceptance)

[Michael Villander (@villander)](https://github.com/villander) and team have fleshed out docs about the **acceptance test story** in the Ember Engines ecosystem, touching on some bleeding-edge cases. Also, the entire doc examples were migrated to Ember Octane! Visit the official site to see [Ember Engines' new acceptance testing guides](https://ember-engines.com/docs/testing-acceptance). Many thanks to [Dan Gebhardt (@dgeb)](https://github.com/dgeb), [Gabriel Csapo (@gabrielcsapo)](https://github.com/gabrielcsapo) and [Thomas Gossmann (@gossi)](https://github.com/gossi) for their reviews and tips!

Using Ember Engines? Pop into the [#ember-engines channel](https://discord.com/channels/480462759797063690/487221820638887947) on the [Ember Discord](https://discord.gg/emberjs).

---

## [EmberMap: Tracked Properties 👣](https://embermap.com/topics/what-s-new-in-ember/tracked-properties-3-13)

A new EmberMap video covers [Tracked Properties](https://guides.emberjs.com/release/upgrading/current-edition/tracked-properties/) – new way to access and mutate state in Ember with vanilla JavaScript.

While we have been able to use [native ES5 getters](https://blog.emberjs.com/2018/04/13/ember-3-1-released.html) for accessing properties (`this.isOpen`), we still had to rely on calling `this.set` to mutate state. Tracked properties allow us to drop using `this.set` and instead use native setters (`this.isOpen = true;`) by annotating the properties we want to track.

Classic syntax:

```js
import { tracked } from "@glimmer/tracking";

export default Component.extend({
  isOpen: tracked({ value: false }),
});
```

Octane syntax:

```js
import { tracked } from '@glimmer/tracking';

class Person {
  @tracked firstName;
  @tracked lastName;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

Tracked properties also allow us to use [native JavaScript getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) as a replacement for computed properties by having dependent keys tracked. So try it out today in your app and vastly simplify the programming model by moving closer to native JavaScript language constructs.

Check out the [full video on EmberMap](https://embermap.com/topics/what-s-new-in-ember/tracked-properties-3-13)!

---

## [Polyfills for in-element and named blocks 🚀](https://github.com/ember-polyfills)

Right now you can get a **sneak peek** in [canary](https://emberjs.com/releases/canary/) of [public API {{in-element}}](https://github.com/emberjs/rfcs/blob/master/text/0287-promote-in-element-to-public-api.md) and [yieldable named blocks](https://github.com/emberjs/rfcs/blob/master/text/0460-yieldable-named-blocks.md).

What is `{{in-element}}`? Sometimes developers need to render content outside of the regular HTML flow. This concept is also called "portals". Components like dropdowns and modals use this technique to render stuff close to the root of the page, so as to bypass CSS overflow rules. (Some apps that are embedded into static pages even use this technique to update parts of the page outside the app itself.)

Since it was a common use case, Glimmer baked `{{-in-element}}` into the VM, but as part of the private (or intimate) API. With the passing of the [RFC]((https://github.com/emberjs/rfcs/blob/master/text/0287-promote-in-element-to-public-api.md)), it's going public, perhaps in Ember 3.20. So if you've been using `{{-in-element}}`, you should switch to the [`{{in-element}}` polyfill](https://github.com/ember-polyfills/ember-in-element-polyfill) instead!

The [yieldable named blocks RFC](https://github.com/emberjs/rfcs/blob/master/text/0460-yieldable-named-blocks.md) makes it possible to pass any number of blocks to a component with angle bracket syntax. Check out the new [ember-named-blocks-polyfill](https://github.com/ember-polyfills/ember-named-blocks-polyfill) to take advantage of this feature now. 

---

## [Section title in sentence case 🐹](section-url)

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

## [Section title in sentence case 🐹](section-url)

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

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Matthew Roderick, Chris Ng, Amy Lam, the crowd and the Learning Team
