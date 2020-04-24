---
title: The Ember Times - Issue No. 145
author: Chris Ng, Matthew Roderick, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/04/24-the-ember-times-issue-145.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
Simple drag and drop in Ember Octane 🐺,
Watch the new Ember Map video on the `{{fn}}` helper 📺,
Ember Styleguide 4.0.0 release 🔥,
  
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

---

## [Simple drag and drop in Ember Octane 🐺](https://dev.to/dgavey/simple-drag-and-drop-in-ember-octane-466i)

In his [tutorial "Simple Drag and Drop in Ember Octane"](https://dev.to/dgavey/simple-drag-and-drop-in-ember-octane-466i), Ember developer [Derek Gavey (@dgavey)](https://github.com/dgavey) gives you a straightforward [Ember Octane](https://emberjs.com/editions/octane/) way of making an **HTML drag and drop interface** for your site. The code is minimal and, you can extend it to meet your needs. 

The secret? You can use [modifiers](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_event-handlers) to simplify adding drag events. Derek breaks everything down for you and explains each step. 

I think articles like this will help you build your developer skillset. There is a lot of useful info in Derek Gavey's piece. Please look forward to reading his next article on how to make a sortable list!

---

## [Ember Styleguide 4.0.0 release 🔥](https://github.com/ember-learn/ember-styleguide/releases/tag/v4.0.0)

A new Ember Styleguide release was cut today 🛳 and it represents a massive amount of work by a number of contributors over the last year. 372 commits, 719 files and 13 contributors to be exact! 😱

To see any of the individual changes, please look at the pre-release versions in the [changelog](https://github.com/ember-learn/ember-styleguide/blob/master/CHANGELOG.md). The changes are too many to capture here, but here are a few of the high level overviews:

- remove ember-cli-addon docs in favour of field-guide for better SEO
- remove components that are not actively being used in any project
- implement base styles that are common across all of the Ember websites
- implement common CSS helpers for things that don't need a dedicated component
- upgrade most of the remaining components to Glimmer components
- streamline the CSS build pipeline to remove duplicate CSS and improve lighthouse score

[Chris Manson (@mansona)](https://github.com/mansona), [Mel Sumner (@MelSumner)](https://github.com/MelSumner),  [Florian Pichler (@pichfl)](https://github.com/pichfl) and so many more deserve huge props 🙌🙌🙌 for this milestone release that will support development in all the Ember web properties! 🎉

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

## [Ember Map: The {{fn}} Helper 📺](https://embermap.com/topics/what-s-new-in-ember/the-fn-helper-3-11)

This edition of Ember Map’s [What’s New in Ember](https://embermap.com/topics/what-s-new-in-ember) series discusses the `fn` or [function helper](https://github.com/emberjs/rfcs/pull/470) – Ember's conceptual shift in binding actions at the source, rather than at the invocation site. 

The [`fn` helper](http://api.emberjs.com/ember/release/classes/Ember.Templates.helpers/methods/fn?anchor=fn) which has been available since [Ember 3.11](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html), provides a way to pass arguments to actions. While this may be something Ember already provided for a long time, the Ember Map video goes through the nuisance of how the `fn` helper provides added functionality by binding the `this` context and currying the arguments passed. For example, it allows you to [pass parameters along to functions](https://guides.emberjs.com/release/upgrading/current-edition/action-on-and-fn/) in your templates:

```hbs
<!-- Before -->
<button {{action 'handleClick' 123}}>Click Me!</button>
<MyComponent @onClick={{action 'handleClick' 123}} />

<!-- After -->
<button {{on "click" (fn this.handleClick 123)}}>Click Me!</button>
<MyComponent @onClick={{fn this.handleClick 123}} />
```

Check out the full [Ember Map video](https://embermap.com/topics/what-s-new-in-ember/the-fn-helper-3-11) and try using the `fn` helper in your app today!

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

Chris Ng, Matthew Roderick, Jared Galanis the crowd and the Learning Team
