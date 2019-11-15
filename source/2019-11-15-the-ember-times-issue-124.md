---
title: The Ember Times - Issue No. 124
author: Chris Ng, Isaac Lee, Jessica Jordan, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/11/15-the-ember-times-issue-124.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
400 Releases on the Ember.js Repo 🎉,
share your thoughts for RFCs #549 and #554 💬,
learn how to use telemetry helpers to power up your codemods 📡,
release of Octane Super Rentals Tutorial Part 2 🚀,
enjoy the new and shiny Ember-powered Apple TV 🍏📺,
check out a new accessibility-focused ember-bootstrap release ✨,

READMORE

---

## 400 Releases on the Ember.js Repo 🎉

The [ember.js repo](https://github.com/emberjs/ember.js) hit 400 releases on GitHub this week! We’ve had over [770 contributors](https://github.com/emberjs/ember.js/graphs/contributors) between May 2011 to November 2019. A big thank you ❤️ to the numerous efforts of all all these community members!

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [RFC #549: Ember Dev for Other Platforms 💬](https://github.com/emberjs/rfcs/pull/549)

[Adam Baker (@bakerac4)](https://github.com/bakerac4) has proposed the need to better advertise Ember as a cross-platform solution: Use 1 framework to create web, mobile, *and* desktop apps! The possibility of marketing Ember as cross-platform exists already, thanks to projects like [Corber](http://corber.io/pages/frameworks/ember) and [Glimmer Native](https://github.com/bakerac4/glimmer-native).

How can we market Ember as cross-platform and support developing for other platforms? Be sure to [share your ideas with everyone](https://github.com/emberjs/rfcs/pull/549) today!

---

## [RFC #554: Deprecate `getWithDefault` 💬](https://github.com/emberjs/rfcs/pull/554)

[Chris Ng (@chrisng)](https://github.com/chrisrng) has proposed deprecating support for `getWithDefault`. This method, which has [existed since Ember 1.0](https://api.emberjs.com/ember/1.0/classes/Ember.Object/methods/getWithDefault?anchor=getWithDefault), is intended to help an Ember object return a default value.

The problem with `getWithDefault` lies in its behavior. It returns the default value *only* when the retrieved value of the property is `undefined`. Other falsey values, such as `null` or `''`, don't result in the default value. This behavior may or may not be what you intended.

To help you write code explicitly, TC39 has come up with the [nullish coalescing operator](https://github.com/tc39/proposal-nullish-coalescing), `??`, now in Stage 3 proposal. RFC 554 explains that it'd be better to rely on the native implementation.

What are your thoughts on deprecating `getWithDefault`? We encourage you to [read the RFC and participate](https://github.com/emberjs/rfcs/pull/554) today!

---

## [Creating Runtime Assisted Codemods Using Telemetry Helpers 📡](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/)

Thanks to [Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar) and [Ryan Mark (@tylerturdenpants)](https://github.com/tylerturdenpants), the [ember-codemods-telemetry-helpers](https://github.com/ember-codemods/ember-codemods-telemetry-helpers) addon features a [detailed readme](https://github.com/ember-codemods/ember-codemods-telemetry-helpers#ember-codemods-telemetry-helpers) and [companion blog post](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/). 💞

Traditionally, Ember codemods have relied on **static code analysis** to help you (a codemod author) convert files from one version to the next. In contrast, telemetry-powered codemods can **run the app** to help you gather data on components, services, routes, controllers, etc.

To learn more about telemetry helpers, we encourage you to visit [Rajasegar's blog](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/). You can also check out [ember-native-class-codemod](https://github.com/ember-codemods/ember-native-class-codemod) and [ember-no-implicit-this-codemod](https://github.com/ember-codemods/ember-no-implicit-this-codemod) to learn how codemods use telemetry helpers today!

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Octane Super Rentals Tutorial Part 2🚀](https://octane-guides-preview.emberjs.com/release/tutorial/10-part-2/)

[Godfrey Chan @chancancode](https://github.com/chancancode) and [Vaidehi Joshi @vaidehijoshi](https://github.com/vaidehijoshi) further expanded the Super Rentals Tutorial for Ember Octane by releasing part 2 of the tutorial!

This **automatically generated** tutorial now [supports decorators](https://github.com/cibernox/ember-cli-yuidoc/pull/52) thanks to [Chris Garrett](https://github.com/pzuraq) who had a fix to replace all `@` symbols within code blocks with a placeholder, processes them, and then switches them back after processing.

If you are looking to contribute check out the [super-rentals-tutorial repo on GitHub](https://github.com/ember-learn/super-rentals-tutorial)!

---

## [Brand-New Product Release Powered by Ember: Apple TV 🍏📺](https://twitter.com/mehulkar/status/1190318959955857408)

**Plenty of companies** and acclaimed brands **bet on Ember** when building digital products for thousands or even millions of users. Heroku, Netflix, TED, Tilde, Intercom and BetterUp are a few examples of [well-known businesses](https://emberjs.com/ember-users) who have benefitted from using Ember for years.

Did you also know that Apple's web platform **Apple TV** is [built with Ember](https://twitter.com/mehulkar/status/1190318959955857408)? Apple TV is now based on a modern 3.12 Ember tech stack which evolved its way up from a 3.4 app earlier this year. Furthermore, the app is increasingly adopting all the latest and sparkliest ✨ from the [new Ember Octane programming model](https://emberjs.com/editions/octane/), making it a great showcase for modern Ember apps in the wild!

Do you have any feedback? Feel free to reach out to [Mehul Kar (@mehulkar)](https://github.com/mehulkar) for any questions, suggestions or bug reports.

---

## [Accessibility-Focused Ember Bootstrap Release ✨](https://twitter.com/simonihmig/status/1190740590377472001)

A few weeks ago, [@simonihmig](https://github.com/simonihmig) and the folks at [kaliber5](https://github.com/kaliber5) released version 3.1.0 of the fantastic Ember addon [ember-bootstrap](https://github.com/kaliber5/ember-bootstrap). 

This version focuses on **improving accessibility** related concerns such as using [ember-focus-trap](https://github.com/josemarluedke/ember-focus-trap) to implement focus trap inside of modals and keyboard navigational control of drop downs. The updates also add [ember a11y tests](https://github.com/ember-a11y/ember-a11y-testing) to the test suite! 🔥🔥🔥

Many thanks to all those that contributed to this release and the accessiblity concerns addressed by it 😄, including [@simonihmig](https://github.com/simonihmig), [@techn1x](https://github.com/Techn1x), [@rwachtler](https://github.com/rwachtler) and [@jelhan](https://github.com/jelhan). 

You can find the release notes [here](https://github.com/kaliber5/ember-bootstrap/blob/master/CHANGELOG.md#310-2019-11-02).


---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/pichfl" target="gh-user">@pichfl</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/kategengler" target="gh-user">@kategengler</a>, <a href="https://github.com/thejonrichmond" target="gh-user">@thejonrichmond</a>, <a href="https://github.com/rictic" target="gh-user">@rictic</a>, <a href="https://github.com/raycohen" target="gh-user">@raycohen</a>, <a href="https://github.com/lolmaus" target="gh-user">@lolmaus</a>, <a href="https://github.com/vladucu" target="gh-user">@vladucu</a>, <a href="https://github.com/kennethlarsen" target="gh-user">@kennethlarsen</a>, <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/bertdeblock" target="gh-user">@bertdeblock</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/ursm" target="gh-user">@ursm</a>, <a href="https://github.com/Mikek2252" target="gh-user">@Mikek2252</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/dmuneras" target="gh-user">@dmuneras</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/bendemboski" target="gh-user">@bendemboski</a> and <a href="https://github.com/patricklx" target="gh-user">@patricklx</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jessica Jordan, Jared Galanis the crowd and the Learning Team
