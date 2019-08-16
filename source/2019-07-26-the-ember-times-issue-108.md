---
title: The Ember Times - Issue No. 108
author: Anne-Greeth van Herwijnen, Chris Ng, Isaac Lee, Jessica Jordan, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/07/26-the-ember-times-issue-108.html"
responsive: true
---

🤙 Emberistas! 🐹

This week:
learn how to use Sentry to track production errors 📈,
get your new hires off to the best start 📚,
learn about the newest – and hopefully last! – way to handle events in Ember with the {{on}} Modifier 🔛,
a cheat sheet for modern Ember components ✨, and last, but not least,
find out how to create static sites with Prember and Ember Data 🔥!

---

## [Sentry Error Reporting for Ember.js 📈](https://simplabs.com/blog/2019/07/15/sentry-and-ember/)

[Sentry](https://sentry.io/for/ember/) is an open-source error tracking tool that helps you monitor and fix production errors in your Ember app. In 2018, Sentry announced a new SDK for browsers, called `@sentry/browser`.

To help you get started, [@Turbo87](https://github.com/Turbo87) published a blog post. 🧡 In particular, you can learn how to:

- migrate from `ember-cli-sentry` addon to the official `@sentry/browser`
- report messages and exceptions to Sentry at will
- filter out errors that aren't critical
- add metadata to errors

We encourage you to [deliver high-quality Ember apps today](https://simplabs.com/blog/2019/07/15/sentry-and-ember/)!

---

## [How to Hire and Train Developers when You Don’t Use React 📚](https://medium.com/front-end-weekly/how-to-hire-and-train-developers-when-you-dont-use-react-42762e6b1a57)

[@jenweber](https://github.com/jenweber) wrote an awesome [blog post](https://medium.com/front-end-weekly/how-to-hire-and-train-developers-when-you-dont-use-react-42762e6b1a57) on how to hire and train new developers.
She provided 10 great tips on how you can help solve the pain points of hiring and training for your company.
If you are in charge of hiring new people or if you have a new colleague in your team, this is definitely a nice piece to get some new ideas about your onboarding process.

If you have started a new job, this post is also for you! We encourage you to think about how you want to be trained and how you can contribute to your team's onboarding process.

---

## [EmberMap: {{on}} Modifier Tutorial 🔛](https://embermap.com/video/on-modifier-a-first-look)

The [action modifier](https://guides.emberjs.com/release/templates/actions/) is the original way events were handled in Ember. The new `{{on}}` modifier that was [introduced this year](https://github.com/emberjs/rfcs/pull/471) to address some shortcomings of the action modifier such as being explicit, working consistently for all events, and works well in SSR.

One way the `{{on}}` modifier deviates from the action helper is that it will only be responsible for adding (and removing) event listeners using the addEventListener API. The action helper is still needed to bind context, see below.

```handlebars
<button {{on 'click' (action 'addOne')}}>
  Add one!
</button>
```

Check out this [free](https://twitter.com/ember_map/status/1152260614452142081) tutorial video on the `{{on}}` modifier on [EmberMap](https://embermap.com/video/on-modifier-a-first-look)!

---

## [A Cheat Sheet for Modern Ember Components ✨](https://twitter.com/CodingItWrong/status/1153625389627072513)

On the road to the [release of Ember Octane](https://emberjs.com/editions/octane/), lots of **modern
component features** are already available with recent Ember releases.
If you want to keep track of which features are already available with a particular 3.x version of Ember,
check out the [ultimate Ember Component Cheat Sheet](https://codingitwrong.com/2019/07/23/ember-component-cheat-sheet.html).

Also if you want to learn more about how these new component API's work, be sure to check out [the Ember Component Museum](https://jenweber.github.io/the-ember-components-museum/versions/master/) by [@jenweber](https://github.com/jenweber). ✨

Kudos to [@CodingItWrong](https://github.com/CodingItWrong) who created the cheat sheet and thank you for sharing it with the community!

---

## [Using Prember for a Static Site with Ember Data 🔥](https://medium.com/@gauravmunjal_86037/using-prember-for-a-static-site-with-ember-data-780344e34c47)

[Prember](https://github.com/ef4/prember) is an addon that works in tandem with [Fastboot](https://ember-fastboot.com/). It allows you to serve your app statically and reap the benefits of fast first-paint and SEO!

[@Gaurav0](https://github.com/Gaurav0) recently published his [notes on using Prember with Ember Data](https://medium.com/@gauravmunjal_86037/using-prember-for-a-static-site-with-ember-data-780344e34c47). You will find how to set up Prember and Fastboot shoebox, as well as some data challenges that you may encounter along the way. See how Prember can help you today!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/sdhull" target="gh-user">@sdhull</a>, <a href="https://github.com/josemarluedke" target="gh-user">@josemarluedke</a>, <a href="https://github.com/bantic" target="gh-user">@bantic</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/toddjordan" target="gh-user">@toddjordan</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a> and <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Anne-Greeth van Herwijnen, Chris Ng, Isaac Lee, Jessica Jordan, Amy Lam and the Learning Team
