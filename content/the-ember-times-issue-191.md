---
title: The Ember Times - Issue No. 191
authors:
  - chris-ng
  - jared-galanis
date: 2021-11-14T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Ember 4 is approaching, checkout v4.0.0-beta.9 🐹,
Ember.js Template Imports Blog Series 📚,
New Releases of uELS published to VSCode ✅,
tracked-built-ins v2.0.0 🔥,
Announcing Checkup v1.0.0 🩺,
Addon roundup 🙌,
Glimmerx Workshop Resources ✨,
Migrating an Ember addon to the next-gen v2 format 🚀,

---

## [Ember 4 is approaching, checkout v4.0.0-beta.9 🐹](https://twitter.com/mixonic/status/1458594719093694466)

If you've been following along with the progress on Ember 4 you might know that the next major version of Ember is approaching.

If you are able to, you should check out [Ember v4.0.0-beta.9](https://github.com/emberjs/ember.js/releases/tag/v4.0.0-beta.9) in your cutting edge codebases now. A few minor API removals remain, but the vast bulk of planned changes from 3.28 are in this release.

For more details on the road to Ember 4.0 see this [blog post](https://blog.emberjs.com/the-road-to-ember-4-0/).

---

## [Ember.js Template Imports Blog Series 📚](https://v5.chriskrycho.com/journal/ember-template-imports/)

There's a fantastic new 5 part series from [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) on template imports that goes into great detail comparing the various options for template imports that are on the table for the Ember and Glimmer community while we are experimenting with designs for components being available in the same file (you may have heard to this referred to as single-file components).

So far, 4 parts of the 5 part series have been published and the posts cover an introduction on the formats, comparisons on teaching and understanding, tooling considerations and integrated testing.

As is typical of the content Chris puts out, the discussion in this series is precise, thoughtful and complex. It will teach you a lot about single file components and what is involved in the decision making behind such an important choice for our community.

Many thanks to Chris for putting the thought process out there for all of us to better understand the options.

You can find the 4 parts already published, here:

- [Part 1, an introduction](https://v5.chriskrycho.com/journal/ember-template-imports/part-1/)
- [Part 2, teaching and understanding components](https://v5.chriskrycho.com/journal/ember-template-imports/part-2/)
- [Part 3, tradeoffs on tooling](https://v5.chriskrycho.com/journal/ember-template-imports/part-3/)
- [Part 4, integrated testing](https://v5.chriskrycho.com/journal/ember-template-imports/part-4/)

---

## [Glimmerx Workshop Resources ✨](https://twitter.com/vaier/status/1456309739017707521)

Earlier this month [Alex Kanunnikov (@lifeart)](https://github.com/lifeart) hosted [a workshop](https://holyjs-moscow.ru/talks/workshop-glimmerx-declarative-ui-i-derived-reactivity-in-27kb/) at the [HolyJS](https://holyjs-moscow.ru/) conference regarding GlimmerX and how you can use it to build declarative UIs.

Recently Alex has shared the [materials for the workshop](https://github.com/lifeart/glimmerx-workshop) which provide an excellent set of resources if you have been wondering what it takes to build an application using Glimmer.

Check it out if you get a chance!

---

## [Migrating an Ember addon to the next-gen v2 format 🚀](https://twitter.com/simonihmig/status/1457797305608781826)

If you've seen the [v2 Addon Format RFC](https://emberjs.github.io/rfcs/0507-embroider-v2-package-format.html) for embroider compatability and wondered how you can upgrade your addon to this new format, you're in luck.

There's a new blog post on how to go about migrating an Ember addon to the next-gen v2 format by [Simon Ihmig (@simonihmig)](https://github.com/simonihmig).

The [post](https://www.kaliber5.de/en/blog/v2-addon_en) covers all the necessary information on why and how you can make these upgrades for your addon.

---

## [New Releases of uELS published to VSCode ✅](https://discord.com/channels/480462759797063690/480499624663056390/896699510888226826)

[Unstable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) is a fully featured fork of Ember Language Server. While the name says _unstable_, it actually is **stable** and recently several new versions [v3.0.8, v3.0.9 and v3.0.10](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) were published!

Thank you to [Alex Kanunnikov (@lifeart)](https://github.com/lifeart) for the updates such as: async file system access, improved startup performance, fixed found issues, and multiple file system providers support. Also, Internationalization tooling was improved.

As part of these releases, experimental [VSCode web-version support](https://code.visualstudio.com/api/extension-guides/web-extensions) was added. This allows uELS to be integrated into any browser environment.

---

## [tracked-built-ins v2.0.0 🔥](https://github.com/tracked-tools/tracked-built-ins/releases/tag/v2.0.0)

v2.0.0 of `tracked-built-ins` [was released](https://github.com/tracked-tools/tracked-built-ins/releases/tag/v2.0.0) and it now supports Ember v4.x, has better internal implementations, includes a lot of dependency updates and provides fewer deprecation warnings!

Many thanks to [NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli), [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) and [Sergey Astapov
 (@SergeAstapov)](https://github.com/SergeAstapov) for their work on this release.

---

## [Announcing Checkup v1.0.0 🩺](https://www.linkedin.com/pulse/announcing-checkup-10-steve-calvert/)

The Checkup team has released version 1.0 of [the Checkup framework](https://github.com/checkupjs/checkup), which, if you did not know, provides a nice way to gather static analysis insights for your front-end projects.

Checkup can be used in Ember and can make things like tracking progress in certain efforts, like Octane migrations, easier. There is a custom plugin system and it outputs to standard formats for integration with other common tooling like VS Code.

Checkout the [blog post](https://www.linkedin.com/pulse/announcing-checkup-10-steve-calvert/) on the release by [Steve Calvert (@scalvert)](https://github.com/scalvert).

---

## Addon roundup 🙌

There's been quite a few new releases of Ember addons since our last issue. Check them out and maybe give them a try! In no particular order:

- [ember-simple-auth v4.1.0](https://github.com/simplabs/ember-simple-auth/releases/tag/4.1.0) was released which adds implementation for explicit API and deprecates implicit use of initializers in ESA. There's also a migration path, [here](https://github.com/simplabs/ember-simple-auth/blob/master/guides/upgrade-to-v4.md).
- [ember-stateful-promise](https://github.com/snewcomer/ember-stateful-promise) is a new addon that helps with aysnc operations, including derived state for native promises and decorators to track promise state.
- [ember-autoresize-modifier v0.4.0](https://github.com/jelhan/ember-autoresize-modifier/releases/tag/v0.4.0) was released and now supports resizing textareas to fit content.
- [ember-concurrency v.2.2.0](https://github.com/machty/ember-concurrency/releases/tag/2.2.0) was released and introduces a public task modifiers api and an onError option for the perform helper.
- [ember-modifier v3.0.0](https://github.com/ember-modifier/ember-modifier/releases/tag/v3.0.0) was released and it fixes some bugs, adds Ember 4.x compatability and drops support for old versions of Node, Ember and TypeScript.
- [ember-exam v7.0.0](https://github.com/ember-cli/ember-exam/releases/tag/v7.0.0) was released, updating ember-auto-import to v2 for readiness for apps using ember-auto-import v2 and dropping support for node 10.
- [ember-try v2.0.0](https://github.com/ember-cli/ember-try/releases/tag/v2.0.0) was released and now deprecated bower support is removed and experimental support for [pnpmjs](https://twitter.com/pnpmjs) has been added.

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/amandakalk" rel="noopener noreferrer" target="_blank">Amanda Cahill (@amandakalk)</a>, <a href="https://github.com/step2yeung" rel="noopener noreferrer" target="_blank">Stephen Yeung (@step2yeung)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/balinterdi" rel="noopener noreferrer" target="_blank">Balint Erdi (@balinterdi)</a>, <a href="https://github.com/rajakvk" rel="noopener noreferrer" target="_blank">@rajakvk</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/VincentMolinie" rel="noopener noreferrer" target="_blank">Vincent Molinié (@VincentMolinie)</a>, <a href="https://github.com/brkn" rel="noopener noreferrer" target="_blank">Berkan Ünal (@brkn)</a>, <a href="https://github.com/Windvis" rel="noopener noreferrer" target="_blank">Sam Van Campenhout (@Windvis)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/ddzz" rel="noopener noreferrer" target="_blank">Darius D. (@ddzz)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/jamescdavis" rel="noopener noreferrer" target="_blank">James C. Davis (@jamescdavis)</a>, <a href="https://github.com/luxferresum" rel="noopener noreferrer" target="_blank">Lukas Kohler (@luxferresum)</a>, <a href="https://github.com/michaelbdai" rel="noopener noreferrer" target="_blank">Bing Dai (@michaelbdai)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/krisselden" rel="noopener noreferrer" target="_blank">Kris Selden (@krisselden)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/mixonic" rel="noopener noreferrer" target="_blank">Matthew Beale (@mixonic)</a>, <a href="https://github.com/Turbo87" rel="noopener noreferrer" target="_blank">Tobias Bieniek (@Turbo87)</a>, <a href="https://github.com/charlesfries" rel="noopener noreferrer" target="_blank">Charles Fries (@charlesfries)</a>, <a href="https://github.com/jfdnc" rel="noopener noreferrer" target="_blank">Jacob (@jfdnc)</a>, <a href="https://github.com/kdagnan" rel="noopener noreferrer" target="_blank">Kyle D. (@kdagnan)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/v-jiepeng" rel="noopener noreferrer" target="_blank">Jaydon Peng (@v-jiepeng)</a>, <a href="https://github.com/mehulkar" rel="noopener noreferrer" target="_blank">Mehul Kar (@mehulkar)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/thoov" rel="noopener noreferrer" target="_blank">Travis Hoover (@thoov)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/GreatWizard" rel="noopener noreferrer" target="_blank">Guillaume Gérard (@GreatWizard)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/ro0gr" rel="noopener noreferrer" target="_blank">Ruslan Hrabovyi (@ro0gr)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/square-brackets" rel="noopener noreferrer" target="_blank">Stjepan Petrusa (@square-brackets)</a>, and <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jared Galanis and the Learning Team
