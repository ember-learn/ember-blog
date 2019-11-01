---
title: The Ember Times - Issue No. 122
author: Chris Ng, Isaac Lee, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/11/01-the-ember-times-issue-122.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Release of qunit-assertions-extra 🎉,
Fine-tune validations with Ember Model Validator 3.10 🔍,
Better builds for the Guides 🏗,
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

## [Speedy Builds for the Ember Guides 🏎🏗](https://github.com/ember-learn/guides-source/pull/1051)

The official [Ember Guides](https://guides.emberjs.com/release/) are a fundamental learning resource for those who are new to Ember and those who are more familiar with the framework alike. Anytime a new [version release of Ember](https://emberjs.com/releases/) lands, a new version of the [Guides' source](https://github.com/ember-learn/guides-source) will be cut and made ready for release. This ensures that Ember developers can work with the most up-to-date version of documentation that matches the latest APIs that are available in their upgraded app.

Recently, issues in regards to the build process for the Guides bubbled up. New versions which were added to the Guides increased build and overall deploy times significantly, and ultimately led to timeouts which prevented the successful release. To unlock the release process, Ember Learning Core team member and Devops specialist [Sivakumar Kailasam (@sivakumar-kailasam)](https://github.com/sivakumar-kailasam) refactored the entire build configuration for `guides-source`. This [work](https://github.com/ember-learn/guides-source/pull/1051) ensured that total build times decreased and that deploys via Netlify succeed as expected without running into timeouts.

Curious to learn more or even contribute to build processes for Ember learning materials? [Join the community chat](https://discord.gg/emberjs) and join the discussion on the [#dev-ember-learning channel](https://discordapp.com/channels/480462759797063690/480777444203429888)!

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

<p>This week we'd like to thank <a href="https://github.com/dnalagatla" target="gh-user">@dnalagatla</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/dmuneras" target="gh-user">@dmuneras</a>, <a href="https://github.com/ghislaineguerin" target="gh-user">@ghislaineguerin</a>, <a href="https://github.com/pichfl" target="gh-user">@pichfl</a>, <a href="https://github.com/esbanarango" target="gh-user">@esbanarango</a>, <a href="https://github.com/Mikek2252" target="gh-user">@Mikek2252</a> and <a href="https://github.com/runspired" target="gh-user">@runspired</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jessica Jordan, the crowd and the Learning Team
