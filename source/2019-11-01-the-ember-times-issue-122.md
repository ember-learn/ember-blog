---
title: The Ember Times - Issue No. 122
author: Chris Ng, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/11/01-the-ember-times-issue-122.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Release of qunit-assertions-extra 🎉,
Fine-tune validations with Ember Model Validator 3.10 🔍,
READMORE

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

## [Release of qunit-assertions-extra 🎉](https://twitter.com/nullvoxpopuli/status/1189308094972616706)

[@NullVoxPopuli](https://github.com/NullVoxPopuli) made a library to help out with [qunit](https://github.com/emberjs/ember-qunit) assertions. Inspired by the [qunit-dom](https://github.com/simplabs/qunit-dom) project, the library aims to eliminate `assert.ok` for non-boolean comparisons and the need for the custom message argument for assertions.

As of now, it provides the `assert.contains` and `assert.matches` APIs for simplifying routine tests around strings. Contribute and check out [qunit-assertions-extra](https://github.com/NullVoxPopuli/qunit-assertions-extra) on GitHub today!

---

## [Fine-Tune Validations with Ember Model Validator 3.10 🔍](https://twitter.com/esbanarango/status/1189759579493679106)

[Ember Model Validator](https://github.com/esbanarango/ember-model-validator), which lets you define validations for Ember Data models, recently celebrated its 3.10 release! 🎉

Thanks to [André Medeiros (@andsmedeiros)](https://github.com/andsmedeiros), you can now [pass the `except` or `only` option to Ember Model Validator](https://github.com/esbanarango/ember-model-validator#usage) to run a subset of validations.

```javascript
// Run all validations EXCEPT name's presence and length validations
// and any email validations
myModel.validate({
    except: ['name:presence,length', 'email']
});

// Run ONLY email's presence validation
myModel.validate({
    only: ['email:presence']
});
```

To learn more about how to use Ember Model Validator in your app, we encourage you to [visit its website today](https://esbanarango.github.io/ember-model-validator)!

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

Chris Ng, Isaac Lee, the crowd and the Learning Team
