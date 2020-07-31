---
title: The Ember Times - Issue No. 158
author: Chris Ng, Abhilash LR, Isaac Lee, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/07/31-the-ember-times-issue-158.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
Detect when Ember components enter or leave the viewport 🔍,,
How do Ember Modifiers get to be managed internally? 🥼,
The magic behind the ember modifiers ✨,
Demystifying ember-render-modifiers 😎,
Document Ember apps with Docfy 📗,
Blog post and RFC on Ember.Component 📖,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

---

## [Detecting Ember.js Components Entering or Leaving the Viewport 🔍](https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf)

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

## [How do Ember Modifiers get to be managed internally? 🥼](https://dev.to/_raja_sk_/how-do-ember-modifiers-get-to-be-managed-internally-1i40)

[Raja SK (@RajaSK05)](https://github.com/RajaSK05) wrote a blog post on [how do ember modifiers get to be managed internally?](https://twitter.com/_raja_sk_/status/1283054501029728264?s=20)

In continuation of his first blog post titled [reusable DOM behavior in React vs Ember](https://dev.to/rajask05/reusable-dom-behavior-in-react-vs-ember-4p04), Raja wrote a second blog post that details about the ember modifier internals and what an **element modifier manager** is. He begins by talking about the modifier lifecycle methods. A modifier lifecycle consists of:

- createModifier()
- installModifier()
- updateModifier()
- destroyModifier()

In the process of explaining the lifecycle methods, Raja details each step with code snippets that make us understand what each of them means.

Read more about the element modifier manager and its internals [on dev.to](https://dev.to/_raja_sk_/how-do-ember-modifiers-get-to-be-managed-internally-1i40) today!

---

## [The magic behind the ember modifiers ✨](https://dev.to/_raja_sk_/the-magic-behind-the-ember-modifiers-164c)

[Raja SK (@RajaSK05)](https://github.com/RajaSK05)'s third blog post on Ember modifiers is titled [the magic behind the ember modifiers](https://twitter.com/_raja_sk_/status/1285631182697369601?s=20) where he talks about the internal workings of an Ember modifier - a feature that is offered by Ember Octane.

In the process of explaining how a modifier works, he showcases by writing a simple autofocus modifier using the functional modifier approach.

For more details on the blog, read it today [on dev.to](https://dev.to/_raja_sk_/the-magic-behind-the-ember-modifiers-164c).

---

## [Blog post and RFC on Ember.Component 📖](https://mehulkar.com/blog/2020/07/stop-extending-embers-built-in-components/)

There's an interesting perspective about how your team might handle usage of Ember's built-in components in a `GlimmerComponent` world presented in [Mehul Kar's (@mehulkar)](https://github.com/mehulkar) recent [blog post](https://mehulkar.com/blog/2020/07/stop-extending-embers-built-in-components/).

The post indicates that in order to avoid introducing breaking changes you may want to consider not extending `Ember.Component` since `GlimmerComponent` does not have the same methods to support such extension.

This blog post continues the conversation Mehul started in [an RFC](https://github.com/emberjs/rfcs/issues/587) on the subject earlier this year that proposes making `@ember/component` an optional feature. Conversations like these are vital to the health of Ember's ecosystem so if you're interested in participating in this conversation and have opinions head on over to the RFC and provide some feedback. 

---

## [Demystifying ember-render-modifiers 😎](https://dev.to/_raja_sk_/demystifying-ember-render-modifiers-3j57)

As a succession to the previous three blog posts on Ember modifiers, [Raja SK (@RajaSK05)](https://github.com/RajaSK05) talks about [demystifying ember-render-modifiers](https://dev.to/_raja_sk_/demystifying-ember-render-modifiers-3j57) in his fourth blog post.

In this blog post, he talks about the [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers) that provides element modifiers that can be used to hook into specific portions of the rendering lifecycle of a component.

Among several addons that are based on ember modifier, **ember-render-modifiers** is one of its kind that is simple to follow and understand its implementation. If you are looking to write your own custom modifiers, then ember-render-modifiers is a good place to start with.

Read more on the [blog post on dev.to](https://dev.to/_raja_sk_/demystifying-ember-render-modifiers-3j57) today!

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

## [Document Ember apps with Docfy 📗](https://docfy.dev/)

Hope you didn't miss an [exciting announcement](https://twitter.com/josemarluedke/status/1281252101406855169) earlier in July. [Josemar Luedke (@josemarluedke)](https://github.com/josemarluedke) released [Docfy](https://docfy.dev/), a cross-framework tool to help you build documentation sites from Markdown files.

The best part? Docfy provides official support for Ember.js! You can style the Docfy components and leverage existing [remark](https://remark.js.org/) plugins too.

Check out [Getting Started](https://docfy.dev/docs/ember) to learn more about adding Docfy to your Ember apps.

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

Chris Ng, Abhilash LR, Isaac Lee, Jared Galanis, the crowd and the Learning Team
