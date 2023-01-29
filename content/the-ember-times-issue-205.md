---
title: The Ember Times - Issue No. 205
authors:
  - jared-galanis
  - bryan-mishkin
  - anne-greeth-schot-van-herwijnen
  - chris-ng
  - isaac-lee
date: 2023-01-29T00:00:00.000Z
tags:
  - newsletter
  - '2023'
---

👋 Emberistas! 🐹

Ember 4.8 released 🐹,
ember-template-lint 5.0 released 🧹,
EmberConf News 🎤,
new addons ✨,
Ember 4.0+ upgrade survey 🐹,
call for support with TS support in Ember 📦,
updated addons 📬,
Wacky Tricks We Use in Publishing TypeScript Types ▶️,
a new codemod to migrate addons to v2 format 📣

---

## [Ember 4.10 released 🐹](https://blog.emberjs.com/ember-released-4-10)

Ember 4.10 was recently released!

This release included several new features for Ember.js including the introduction of the `@ember/owner` package as specified in the [API for Type-Only Imports RFC](https://rfcs.emberjs.com/id/0821-public-types/), 2 bug fixes for Ember.js and several deprecations. The release also includes 5 new features for Ember CLI.

Head on over to the [4.10 release blog post](https://blog.emberjs.com/ember-released-4-10) and give it a read today!

---

## [ember-template-lint 5.0.0 released 🧹](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v5.0.0)

[Version 5.0](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v5.0.0) has been released for [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint), the linter for best practices with Ember handlebars templates.

The key changes include:

- Linting embedded templates by default
- Adding nearly a dozen rules to the `recommended` config
- Changing a few rule names and option defaults
- Dropping support for old versions of Node

---

## 🎤 EmberConf News

We know folks are getting excited about EmberConf and might be wondering when it's happening. Currently, we're still getting our ducks in a row. After three years of virtual EmberConf, we're working out a way to match everybody's expectations around a possible hybrid conference. In the meantime, you can definitely keep working on those proposals and we’ll release more details as soon as we can. Historically, EmberConf has happened in March, but this time it will be later in the year. Hope to see you there!

---

## ✨ The new addons on the block

- [ember-blur](https://ember-blur.netlify.app/) - [Geordan Neukum (@geneukum)](https://github.com/geneukum) provides us an Ember modifier that allows you to blur an element dynamically.
- [ember-tsparticles](https://github.com/IgnaceMaes/ember-tsparticles) - [Ignace Maes (@IgnaceMaes)](https://github.com/IgnaceMaes) made this addon that creates an Ember.js component for using tsParticles. This allows you to create highly customizable JavaScript particles effects, confetti explosions and fireworks animations and use them as animated backgrounds for your website.
<!-- alex ignore simple -->
- [ember-metrics-simple-analytics](https://github.com/mrloop/ember-metrics-simple-analytics) - [Ewan McDougall (@mrloop)](https://github.com/mrloop) released the first version of this ember-metrics adapter for [Simple Analytics](https://simpleanalytics.com/).

---

## 📬 Addon updates

- [ember-model-validator v4.4.0](https://github.com/esbanarango/ember-model-validator/releases/tag/v4.4.0) is now fully compatible with EmberJS 4.0+, the latest ember-data and adds Typescript support.
- [ember-container-query v3.2.0](https://github.com/ijlee2/ember-container-query/releases) now supports Glint users. The PR commits ([#140](https://github.com/ijlee2/ember-container-query/pull/140/commits) & [#141](https://github.com/ijlee2/ember-container-query/pull/141/commits)) serve as a learning material along the [offical documentation](https://typed-ember.gitbook.io/glint/).
- [ember-test-helpers v2.9.3](https://github.com/emberjs/ember-test-helpers/releases/tag/v2.9.3) brings you TS support, performance improvements, bug fixes and documentation improvements.
- [ember-user-activity v7.0.0](https://github.com/elwayman02/ember-user-activity) adds EmberJS 4.0+ support thanks to [Ewan McDougall (@mrloop)](https://github.com/mrloop) helping with the maintainance.
- [ember-scroll-modifiers v5.0.0](https://github.com/elwayman02/ember-scroll-modifiers) supports Ember 4.9, is fully migrated to the [ember-modifier v4 API](https://github.com/ember-modifier/ember-modifier), and adds a new feature for specifying a nested scroll container target for the scroll-into-view modifier.

---

## [🐹 Ember 4.0: What is blocking you?](https://docs.google.com/forms/d/e/1FAIpQLSd6EB519gLpH_bpDRrOUQkHH1kJcqqdbRA6c_-vGTUq6L7QHQ/viewform)

Ember 4.0 has been around for a bit now and we would love to know what is keeping you from upgrading. Fill in this [short survey](https://docs.google.com/forms/d/e/1FAIpQLSd6EB519gLpH_bpDRrOUQkHH1kJcqqdbRA6c_-vGTUq6L7QHQ/viewform) so that we might be able to improve the experience.

---

## [📦 We need you for TypeScript support!](https://github.com/emberjs/ember.js/issues/20162 )

Want to help get Ember’s official TS support out the door? [RFC 800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan) describes the Typescript adoption plan and you can [sign up](https://github.com/emberjs/ember.js/issues/20162) to help with issues all across our codebase! You can always check the [`#topic-typescript` channel](https://discord.com/channels/480462759797063690/484421406659182603) on our [Discord server](https://discord.gg/emberjs).

---

## [🚀 Accelerating Code Delivery By 97% With Yarn Workspaces](https://engineering.linkedin.com/blog/2022/accelerating-code-delivery-by-97--with-yarn-workspaces)

[Jordan Hawker (@elwayman02)](https://github.com/elwayman02) details in this [blogpost](https://engineering.linkedin.com/blog/2022/accelerating-code-delivery-by-97--with-yarn-workspaces) how they moved to Yarn Workspaces and how it improved the lead time for delivering commits to their deployment pipeline, from 39 hours to 125 mins. Yarn workspaces enabled the evolution of the application architecture without sacrificing the benefits of their previous multi-repo strategy. This [post](https://engineering.linkedin.com/blog/2022/accelerating-code-delivery-by-97--with-yarn-workspaces) will give you insight to see if this solution might benefit you.
> "While one approach may serve well at a given point in time, there is no one-size-fits-all solution."

---

## [▶️ Wacky Tricks We Use in Publishing TypeScript Types](https://www.youtube.com/watch?v=VuF3GY-Ho-s)

In this [YouTube video](https://www.youtube.com/watch?v=VuF3GY-Ho-s), [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) and [Asa Kusuma (@asakusuma)](https://github.com/asakusuma) discussed how we are publishing TypeScript types for Ember. Chris discusses how it is difficult for TypeScript to resolve types for [ember-source](https://www.npmjs.com/package/ember-source) given the public API for Ember is usually not imported directly from `ember-source` but from packages such as `@ember/utils` or `@ember/object`. Learn more by watching the full video on [YouTube](https://www.youtube.com/watch?v=VuF3GY-Ho-s) where “despite all the shenanigans” we are able to get Ember’s type to be “stable” and publish from Ember’s own TS source code.

Do you want to contribute to help get Ember’s [official TypeScript support](https://rfcs.emberjs.com/id/0800-ts-adoption-plan/) out the door? Check out this [quest issue](https://github.com/emberjs/ember.js/issues/20162) on GitHub and sign up for a task!

---

## [📣 A new codemod to migrate addons to v2 format](https://github.com/ijlee2/ember-codemod-v1-to-v2)

With one command, you can get started with migrating Ember addons to v2 format:

```sh
npx ember-codemod-v1-to-v2
```

[ember-codemod-v1-to-v2](https://github.com/ijlee2/ember-codemod-v1-to-v2) helps you meet the latest standards set by [@embroider/addon-blueprint](https://github.com/embroider-build/addon-blueprint). The codemod takes care of moving files and updating references to the moved files, while you remain in charge of re-configuring the packages.

[Isaac Lee (@ijlee2)](https://github.com/ijlee2) hopes that `ember-codemod-v1-to-v2`, along with [ember-addon-migrator](https://github.com/NullVoxPopuli/ember-addon-migrator), can help you push Embroider forward. Check out [ember-container-query](https://github.com/ijlee2/ember-container-query/pull/151) for a real-life example.

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/SkoebaSteve" rel="noopener noreferrer" target="_blank">Steef Janssen (@SkoebaSteve)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/jiangzj1008" rel="noopener noreferrer" target="_blank">@jiangzj1008</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/Windvis" rel="noopener noreferrer" target="_blank">Sam Van Campenhout (@Windvis)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/geneukum" rel="noopener noreferrer" target="_blank">Geordan Neukum (@geneukum)</a>, <a href="https://github.com/arafatiqbal" rel="noopener noreferrer" target="_blank">Arafat Iqbal (@arafatiqbal)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/hjdivad" rel="noopener noreferrer" target="_blank">David J. Hamilton (@hjdivad)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/mikrostew" rel="noopener noreferrer" target="_blank">Michael Stewart (@mikrostew)</a>, <a href="https://github.com/emberjs-rfcs-bot" rel="noopener noreferrer" target="_blank">@emberjs-rfcs-bot</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/dknutsen" rel="noopener noreferrer" target="_blank">Dan Knutsen (@dknutsen)</a>, <a href="https://github.com/candunaj" rel="noopener noreferrer" target="_blank">Stanislav Dunajcan (@candunaj)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/gitKrystan" rel="noopener noreferrer" target="_blank">Krystan HuffMenne (@gitKrystan)</a>, <a href="https://github.com/tniezurawski" rel="noopener noreferrer" target="_blank">Tomek Nieżurawski (@tniezurawski)</a>, <a href="https://github.com/rpemberton" rel="noopener noreferrer" target="_blank">rpemberton (@rpemberton)</a>, <a href="https://github.com/BoussonKarel" rel="noopener noreferrer" target="_blank">@BoussonKarel</a>, <a href="https://github.com/olenderhub" rel="noopener noreferrer" target="_blank">Hubert Olender (@olenderhub)</a>, <a href="https://github.com/joancc" rel="noopener noreferrer" target="_blank">Joan Cejudo (@joancc)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/canrozanes" rel="noopener noreferrer" target="_blank">Can Rozanes (@canrozanes)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/mkszepp" rel="noopener noreferrer" target="_blank">@mkszepp</a>, <a href="https://github.com/leoeuclids" rel="noopener noreferrer" target="_blank">Leo Euclides (@leoeuclids)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/boris-petrov" rel="noopener noreferrer" target="_blank">Boris Petrov (@boris-petrov)</a>, <a href="https://github.com/fivetanley" rel="noopener noreferrer" target="_blank">Stanley Stuart (@fivetanley)</a>, <a href="https://github.com/jelhan" rel="noopener noreferrer" target="_blank">Jeldrik Hanschke (@jelhan)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/charlesfries" rel="noopener noreferrer" target="_blank">Charles Fries (@charlesfries)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, and <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [🤓 Connect with us](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Jared Galanis, Bryan Mishkin, Anne-Greeth Schot-van Herwijnen, Chris Ng, Isaac Lee and the Learning Team
