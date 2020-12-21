---
title: The Ember Times - Issue No. 158
authors:
  - chris-ng
  - abhilash-lr
  - isaac-lee
  - jared-galanis
  - amy-lam
date: 2020-07-31T00:00:00.000Z
tags:
  - newsletter
  - '2020'
---


👋 Emberistas! 🐹

Ember 3.20 Released 🚀,
a series of blog posts on ember-modifer and its internals 🎉,
detect when Ember components enter or leave the viewport 🔍,
a blog post and RFC on Ember.Component 📖,
and last, but not least, document Ember apps with Docfy 📗!

<!-- READMORE -->

---

## [Ember 3.20 Released 🚀](https://blog.emberjs.com/2020/07/29/ember-3-20-released.html)

A new [Ember.js blog post](https://blog.emberjs.com/2020/07/29/ember-3-20-released.html) is up to announce the release of version 3.20 of Ember.js, Ember Data and Ember CLI!

3.20 includes several new features for the ecosystem.

- In Ember.js, the `{{in-element}}` helper is available as public API. This helper solves rendering challenges similarly to `ember-wormhole` and `ember-elsewhere`. It allows rendering content into a destination elsewhere on a page.
- Ember Data explicitly supports the combined use of `EmbeddedRecordsMixin` and `JSONAPISerializer` through the `isEmbeddedRecordsMixinCompatible` property.
- Ember CLI allows syncing Blueprints when running `npx ember-cli-update`, which avoids some potential issues that previously existed when running this flow. Check out the [related RFC](https://emberjs.github.io/rfcs/0477-blueprints-update.html) to learn more.

In Ember.js, `Meta.prototype.setSourceDestroyed` and `Meta.prototype.setSourceDestroying` are now deprecated. There were no deprecations for Ember Data. Ember CLI issues a warning for using Node 13 and deprecates the use of the `PACKAGER` experiment.

For more information, give the [Ember.js blog post](https://blog.emberjs.com/2020/07/29/ember-3-20-released.html) a read.

---

## [A series of blog posts on ember-modifer and its internals 🎉](https://dev.to/_raja_sk_/how-do-ember-modifiers-get-to-be-managed-internally-1i40)

Have you been looking to get started with ember-modifier in your Ember.js applications?

[Raja SK (@RajaSK05)](https://github.com/RajaSK05) wrote a series of blog posts on **Ember modifiers**.

### [How do Ember Modifiers get to be managed internally? 🥼](https://dev.to/_raja_sk_/how-do-ember-modifiers-get-to-be-managed-internally-1i40)

In continuation of his first blog post [reusable DOM behavior in React vs Ember](https://dev.to/rajask05/reusable-dom-behavior-in-react-vs-ember-4p04), Raja wrote a second post detailing the ember-modifier internals and what an **element modifier manager** is. He begins by talking about the modifier lifecycle methods. A modifier lifecycle consists of:

- createModifier()
- installModifier()
- updateModifier()
- destroyModifier()

In the process of explaining the lifecycle methods, Raja details each step with code snippets that help the reader understand what each of them means.

Read more about the element modifier manager and its internals [on dev.to](https://dev.to/_raja_sk_/how-do-ember-modifiers-get-to-be-managed-internally-1i40) today!

### [The magic behind Ember modifiers ✨](https://dev.to/_raja_sk_/the-magic-behind-the-ember-modifiers-164c)

Raja SK's third blog post on Ember modifiers is titled [the magic behind the ember modifiers](https://twitter.com/_raja_sk_/status/1285631182697369601?s=20), where he talks about the internal workings of an Ember modifier - a feature that is offered by Ember Octane.

In the process of explaining how a modifier works, he showcases its use by writing a simple autofocus modifier using the functional modifier approach.

For more details on the blog, check it out [on dev.to](https://dev.to/_raja_sk_/the-magic-behind-the-ember-modifiers-164c).

### [Demystifying ember-render-modifiers 😎](https://dev.to/_raja_sk_/demystifying-ember-render-modifiers-3j57)

Finally, Raja SK's fourth blog post talks about [demystifying ember-render-modifiers](https://dev.to/_raja_sk_/demystifying-ember-render-modifiers-3j57).

He talks about [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers), which provide element modifiers that can be used to hook into specific portions of the rendering lifecycle of a component.

<!--alex ignore easy-->
There are several addons based on ember-modifier, but **ember-render-modifiers** makes it easy to understand its implementation. If you are looking to write your own custom modifiers, then ember-render-modifiers is a good place to start with. Read more on the [blog post on dev.to](https://dev.to/_raja_sk_/demystifying-ember-render-modifiers-3j57) today!

P.S. [Robert Jackson (@rwjblue)](https://github.com/rwjblue) recently published a major version bump of [ember-modifier](https://github.com/ember-modifier/ember-modifier/) to v2.x, check out the [Changelog](https://github.com/ember-modifier/ember-modifier/blob/master/CHANGELOG.md)!

---

## [Detecting Ember.js components entering or leaving the viewport 🔍](https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf)

[Koushik Radhakrishnan (@Koushikrad)](https://github.com/Koushikrad) wrote a blog post on [detecting when Ember components are entering or leaving the viewport](https://twitter.com/koushikrad/status/1287419970121379840).

Consider a dashboard with 10 widget components, each of which makes an API request. When a user lands on the dashboard page, do we need all the widgets to fetch their data at the same time, even if the user's viewport shows only 5 widgets at a time?

A solution is to use the [ember-in-viewport](https://github.com/DockYard/ember-in-viewport) addon, which detects if an Ember component has entered the browser's viewport. The addon tries a few different approaches (`IntersectionObserver` API, then `requestAnimationFrame`, then the Ember run loop and event listeners) to detect if a DOM element is in the user's browser.

By hooking up with the addon’s provided `inViewport` service, we are able to request data once the component is within the viewport.

```javascript
const { onEnter } = this.inViewport.watchElement(this.element, { viewportTolerance });  
onEnter(this._renderInView.bind(this));
```

The components that are not in view will not make a request for API data, unlike the route’s model hook using a `Promise.all`.

Read more about detecting components from the [blog post](https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf)!

---

## [Blog post and RFC on Ember.Component 📖](https://mehulkar.com/blog/2020/07/stop-extending-embers-built-in-components/)

There's an interesting perspective about how your team might handle usage of Ember's built-in components in a `GlimmerComponent` world presented in [Mehul Kar's (@mehulkar)](https://github.com/mehulkar) recent [blog post](https://mehulkar.com/blog/2020/07/stop-extending-embers-built-in-components/).

The post indicates that in order to avoid introducing breaking changes you may want to consider not extending `Ember.Component` since `GlimmerComponent` does not have the same methods to support such extension.

This blog post continues the conversation Mehul started in [an RFC](https://github.com/emberjs/rfcs/issues/587) on the subject earlier this year that proposes making `@ember/component` an optional feature. Conversations like these are vital to the health of Ember's ecosystem! So if you're interested in participating in this conversation and have opinions, head on over to the RFC and provide some feedback.

---

## [Document Ember apps with Docfy 📗](https://docfy.dev/)

Hope you didn't miss an [exciting announcement](https://twitter.com/josemarluedke/status/1281252101406855169) earlier in July. [Josemar Luedke (@josemarluedke)](https://github.com/josemarluedke) released [Docfy](https://docfy.dev/), a cross-framework tool to help you build documentation sites from Markdown files.

The best part? Docfy provides official support for Ember.js! You can style the Docfy components and leverage existing [remark](https://remark.js.org/) plugins too.

Check out [Getting Started](https://docfy.dev/docs/ember) to learn more about adding Docfy to your Ember apps.

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/abhilashlr" rel="noopener noreferrer" target="_blank">@abhilashlr</a>, <a href="https://github.com/Alonski" rel="noopener noreferrer" target="_blank">@Alonski</a>, <a href="https://github.com/arthirm" rel="noopener noreferrer" target="_blank">@arthirm</a>, <a href="https://github.com/bekzod" rel="noopener noreferrer" target="_blank">@bekzod</a>, <a href="https://github.com/cah-briangantzler" rel="noopener noreferrer" target="_blank">@cah-briangantzler</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">@chancancode</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">@chrisrng</a>, <a href="https://github.com/CodingItWrong" rel="noopener noreferrer" target="_blank">@CodingItWrong</a>, <a href="https://github.com/dfreeman" rel="noopener noreferrer" target="_blank">@dfreeman</a>, <a href="https://github.com/emonroy" rel="noopener noreferrer" target="_blank">@emonroy</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">@ijlee2</a>, <a href="https://github.com/IzzatN" rel="noopener noreferrer" target="_blank">@IzzatN</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">@jaredgalanis</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">@jenweber</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">@kategengler</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">@kiwiupover</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">@locks</a>, <a href="https://github.com/loganrosen" rel="noopener noreferrer" target="_blank">@loganrosen</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">@MelSumner</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/ppegusii" rel="noopener noreferrer" target="_blank">@ppegusii</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">@pzuraq</a>, <a href="https://github.com/RichardOtvos" rel="noopener noreferrer" target="_blank">@RichardOtvos</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">@rwjblue</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">@scalvert</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">@snewcomer</a>, <a href="https://github.com/SYU15" rel="noopener noreferrer" target="_blank">@SYU15</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Abhilash LR, Isaac Lee, Jared Galanis, Amy Lam and the Learning Team
