---
title: The Ember Times - Issue No. 122
authors:
  - chris-ng
  - isaac-lee
  - jessica-jordan
  - jared-galanis
date: 2019-11-01T00:00:00.000Z
tags:
  - newsletter
  - '2019'
---


हॅलो Emberistas! 🐹

<!-- alex disable simple -->
An important announcement about the Octane release 📝,
release of qunit-assertions-extra 🎉,
fine-tune validations with Ember Model Validator 3.10 🔍,
better builds for the Guides 🏗,
and the Ember Simple Auth 2.0.0 release 🛳!
<!-- alex enable simple -->

<!-- READMORE -->

---

## [Octane Release Update 📝](https://blog.emberjs.com/2019/10/31/octane-release-update.html)

Yesterday, the Ember team announced that [the upcoming 3.14 release will not include Octane as the default mode](https://blog.emberjs.com/2019/10/31/octane-release-update.html).

While [several developers are successfully using Octane in production already](https://twitter.com/mixonic/status/1180494661938552832), a few key ingredients are missing in order to make Octane **a success story for everyone**. The remaining tasks are:

- Make removal of jQuery optional to help with your migration (completed in 3.14 ✅)
- Finish updating [Ember Inspector](https://github.com/emberjs/ember-inspector) to support Glimmer components
- Document the Octane programming model in the [Ember Guides](https://octane-guides-preview.emberjs.com/release/)

What will this announcement mean for you?

1. If you tried out Octane in Ember 3.13, please keep on using it. The features that make up Octane are stable and backed by semantic versioning.
2. If you were waiting for Ember 3.14 to try out Octane, please only do so if you're willing to accept a version of Octane that the Ember team doesn't feel is polished enough to recommend to all users quite yet. Ember 3.14 is a great time for adventurous users to try updating their production apps to Octane, and report back any problems that they find.

Lastly, please lend encouragement and support to all contributors (that includes you!) as we make the shipping version of Octane as amazing as we all know it can be. To learn more about the announcement, [visit the Ember Blog today](https://blog.emberjs.com/2019/10/31/octane-release-update.html).

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

But recently, issues in regards to the build process for the Guides bubbled up. Frequent timeouts for the build pipeline prevented contributors from working smoothly on the Guides project. A recent [adjustment](https://github.com/ember-learn/guides-source/pull/1051) to the build configuration moved the deployment step away from Netlify and to Travis, solving the timeout issues. This code contribution also optimized the build pipeline in the process. Many thanks to Ember Learning Core team member and Devops specialist [Sivakumar Kailasam (@sivakumar-kailasam)](https://github.com/sivakumar-kailasam) for providing this fix!

Curious to learn more or even contribute to build processes for Ember learning materials? [Join the community chat](https://discord.gg/emberjs) and join the discussion on the [#dev-ember-learning channel](https://discordapp.com/channels/480462759797063690/480777444203429888)!ß

---

<!-- alex disable simple -->
## [Ember Simple Auth 2.0.0 release 🛳](https://twitter.com/simplabs/status/1189264438026747907)

This week, the good people over at [@simplabs](https://github.com/simplabs) released [version 2.0.0](https://github.com/simplabs/ember-simple-auth/releases/tag/2.0.0) of the excellent authentication/authorization library **Ember Simple Auth**. Many thanks to Simplabs and to the people who contributed to this release, including [@ExpDev07](https://github.com/ExpDev07), [@josemarluedke](http://github.com/josemarluedke), [@marcoow](https://github.com/marcoow), [@muziejus](https://github.com/muziejus), [@mcfiredrill](https://github.com/mcfiredrill) and [@trek](https://github.com/trek).

Version 2.0.0 drops support for Node 6 and introduces 2 new deprecations around the `rejectWithResponse` property and the DataAdapterMixin's `authorizer` property and `headersForRequest` method.

Version 3.0.0 of Ember Simple Auth should be released soon, so watch out for that as well!
<!-- alex enable simple -->

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

Chris Ng, Isaac Lee, Jessica Jordan, Jared Galanis and the Learning Team
