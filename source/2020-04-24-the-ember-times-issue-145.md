---
title: The Ember Times - Issue No. 145
author: Chris Ng, Matthew Roderick, Jared Galanis, Isaac Lee, Jessica Jordan, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/04/24-the-ember-times-issue-145.html"
responsive: true
---

👋 Emberistas! 🐹

Ember Styleguide 4.0.0 release 🔥,
autotracking case study with TrackedMap 🐾🗺,
simple drag and drop in Ember Octane 🐺,
meet 2 developers who became Ember developers 🎉,
and last, but not least, watch the new EmberMap video on the `{{fn}}` helper 📺!

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

---

## [Ember Styleguide 4.0.0 release 🔥](https://github.com/ember-learn/ember-styleguide/releases/tag/v4.0.0)

A new Ember Styleguide release was cut today 🛳 and it represents a massive amount of work by a number of contributors over the last year: 372 commits, 719 files and 13 contributors to be exact! 😱 Check out the app [here on the web](https://ember-styleguide.netlify.app/) as well.

To see any of the individual changes, please look at the pre-release versions in the [changelog](https://github.com/ember-learn/ember-styleguide/blob/master/CHANGELOG.md). The changes are too many to capture here, but here are a few of the high level overviews:

- Remove ember-cli-addon docs in favor of field-guide for better SEO
- Remove components that are not actively being used in any project
- Implement base styles that are common across all of the Ember websites
- Implement common CSS helpers for things that don't need a dedicated component
- Upgrade most of the remaining components to Glimmer components
- Streamline the CSS build pipeline to remove duplicate CSS and improve its Lighthouse score

[Chris Manson (@mansona)](https://github.com/mansona), [Mel Sumner (@MelSumner)](https://github.com/MelSumner),  [Florian Pichler (@pichfl)](https://github.com/pichfl) and so many more deserve huge props 🙌🙌🙌 for this milestone release that will support development in all the Ember web properties! 🎉

---

## [Autotracking case study with TrackedMap 🐹](https://www.pzuraq.com/autotracking-case-study-trackedmap/)

In the latest edition of his [blog post series on autotracking in Ember Octane](https://twitter.com/pzuraq/status/1221950391782240256), Ember Core team member [Chris Garrett (@pzuraq)](https://github.com/pzuraq) gives us insight into an [interesting case study](https://www.pzuraq.com/autotracking-case-study-trackedmap/) to explore the **new reactivity model** in **Ember Octane** even further. He outlines how to build a `TrackedMap` - an autotracked version of JavaScript's built-in `Map` class - and why building and using such a class will improve the developer ergonomics and performance of our Ember apps.

Curious to learn more? Read the full post on [@pzuraq's blog](https://www.pzuraq.com/autotracking-case-study-trackedmap/)!

And by the way: Even though the case study is also a detailed guide on how to develop your own `TrackedMap`, you don't have to build it yourself, to be able to use this awesome feature in your Ember app. Check out @pzuraq's community addons [tracked-built-ins](https://github.com/pzuraq/tracked-built-ins) or [tracked-maps-and-sets](https://github.com/pzuraq/tracked-maps-and-sets) to autotrack `Map`s today!

---

## [Simple drag and drop in Ember Octane 🐺](https://dev.to/dgavey/simple-drag-and-drop-in-ember-octane-466i)

In his [tutorial "Simple Drag and Drop in Ember Octane"](https://dev.to/dgavey/simple-drag-and-drop-in-ember-octane-466i), Ember developer [Derek Gavey (@dgavey)](https://github.com/dgavey) gives you a straightforward [Ember Octane](https://emberjs.com/editions/octane/) way of making an **HTML drag and drop interface** for your site. The code is minimal and you can extend it to meet your needs.

The secret? You can use [modifiers](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_event-handlers) to simplify adding drag events. Derek breaks everything down for you and explains each step.

I think articles like this will help you build your developer skillset. There is a lot of useful info in Derek Gavey's piece. We look forward to reading his next article on how to make a sortable list!

---

## [Migré de Svelte a EmberJS y fue para bien 🎉](https://otroespacioblog.wordpress.com/2020/04/17/migre-de-svelte-a-emberjs-y-fue-para-bien/)

Say hello to [Francisco Quintero (@cesc1989)](https://github.com/cesc1989). Francisco is a software engineer who recently [migrated his app Intrati from Svelte to Ember Octane](https://otroespacioblog.wordpress.com/2020/04/17/migre-de-svelte-a-emberjs-y-fue-para-bien/) in **16 days**! In both cases, a friend recommended the framework and he learned by reading documentation, writing tests, and coding by trial-and-error.

In the [blog post](https://otroespacioblog.wordpress.com/2020/04/17/migre-de-svelte-a-emberjs-y-fue-para-bien/), Francisco shares what he liked and what he found to be difficult to do in Svelte and Ember. He also shares [the notes that he compiled while learning Ember](https://paper.dropbox.com/doc/Aprendizaje-Migrando-a-EmberJS--AyOEl5onXX29iRjnY_mtdqygAQ-Gj5CGvslVsQcrmGMKvWtR). We encourage you to read them to understand more what using Ember can be like for a new developer.

(Both Francisco's blog post and notes are written in Spanish. If you're not familiar with the language, you can use Google Translate or another translation software.)

---

## [Todo app tutorial in Ember Octane for those who know React 🎉](https://dev.to/jennyjudova/todo-app-tutorial-in-ember-octane-for-those-who-know-react-1741)

Next, please welcome [Jenny Judova (@JennyJudova)](https://github.com/JennyJudova). Jenny is a UI engineer who has experience with React and began to learn Ember for her current job.

In the [blog post](https://dev.to/jennyjudova/todo-app-tutorial-in-ember-octane-for-those-who-know-react-1741), Jenny explains step-by-step how to create a Todo app and relates Ember Octane code to what you might see done in React. She finds that it's easier to learn a new language when it's compared to something you already know, even if the comparisons may not be perfect.

If you are interested in learning more about solving the Todo problem in Ember and React, please [check out the blog post](https://dev.to/jennyjudova/todo-app-tutorial-in-ember-octane-for-those-who-know-react-1741)!

---

## [EmberMap: The {{fn}} Helper 📺](https://embermap.com/topics/what-s-new-in-ember/the-fn-helper-3-11)

This edition of EmberMap’s [What’s New in Ember](https://embermap.com/topics/what-s-new-in-ember) series discusses the `fn` or [function helper](https://github.com/emberjs/rfcs/pull/470) – Ember's conceptual shift in binding actions at the source, rather than at the invocation site.

The [`fn` helper](http://api.emberjs.com/ember/release/classes/Ember.Templates.helpers/methods/fn?anchor=fn) which has been available since [Ember 3.11](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html), provides a way to pass arguments to actions. While this may be something Ember already provided for a long time, the EmberMap video goes through the nuisance of how the `fn` helper provides added functionality by binding the `this` context and currying the arguments passed. For example, it allows you to [pass parameters along to functions](https://guides.emberjs.com/release/upgrading/current-edition/action-on-and-fn/) in your templates:

```hbs
<!-- Before -->
<button {{action 'handleClick' 123}}>Click Me!</button>
<MyComponent @onClick={{action 'handleClick' 123}} />

<!-- After -->
<button {{on "click" (fn this.handleClick 123)}}>Click Me!</button>
<MyComponent @onClick={{fn this.handleClick 123}} />
```

Check out the full [EmberMap video](https://embermap.com/topics/what-s-new-in-ember/the-fn-helper-3-11) and try using the `fn` helper in your app today!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/alexeykostevich" target="gh-user">@alexeykostevich</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/sandstrom" target="gh-user">@sandstrom</a>, <a href="https://github.com/rajasegar" target="gh-user">@rajasegar</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/bantic" target="gh-user">@bantic</a>, <a href="https://github.com/RajaSK05" target="gh-user">@RajaSK05</a>, <a href="https://github.com/chiragpat" target="gh-user">@chiragpat</a> and <a href="https://github.com/rahilvora" target="gh-user">@rahilvora</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Matthew Roderick, Jared Galanis, Isaac Lee, Jessica Jordan, Amy Lam and the Learning Team
