---
title: The Ember Times - Issue No. 108
author: Anne-Greeth van Herwijnen, Chris Ng, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/07/26-the-ember-times-issue-108.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

This week:

learn how to use Sentry to track production errors 📈, 
get your new hires off to the best start 📚,
learn about the newest – and hopefully last! – way to handle events in Ember with the {{on}} Modifier 🔛,

---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

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
  
[@jenweber](https://github.com/jenweber) wrote an awesome [blogpost](https://medium.com/front-end-weekly/how-to-hire-and-train-developers-when-you-dont-use-react-42762e6b1a57) on how to hire and train new developers.
She provided 10 great tips on how you can help solve the pain points of hiring and training for your company.
If you are in charge of hiring new people or if you have a new colleague in your team, this is definitely a nice piece to get some new ideas about your onboarding process.

If you have started a new job, this post is also for you! We encourage you to think about how you want to be trained and how you can contribute to your team's onboarding process.

---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">
  
---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">
  
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

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">
  
---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">
  
---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">
  
---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Anne-Greeth van Herwijnen, Chris Ng, Isaac Lee, the crowd and the Learning Team
