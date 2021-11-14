---
title: The Ember Times - Issue No. 191
authors:
  - the-crowd
  - chris-ng
  - jared-galanis # replace with real authors from the author folder (add yourself if you're not there)
date: 2021-10-22T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Ember.js Template Imports Blog Series 📚,
Release of uELS 3.0.8 published to VSCode ✅,
tracked-built-ins v2.0.0 🔥,
Announcing Checkup v1.0.0 🩺
Addon roundup 🙌,
Glimmerx Workshop Resources ✨,

---

## [🐹 1. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Ember.js Template Imports Blog Series 📚](https://v5.chriskrycho.com/journal/ember-template-imports/)

There's a fantastic new 5 part series from [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) on template imports that goes into great detail comparing the various options for template imports that are on the table for the Ember and Glimmer community while we are experimenting with designs for components being available in the same file (you may have heard to this referred to as single-file components).

So far, 4 parts of the 5 part series have been published and the posts cover an introduction on the formats, comparisons on teaching and understanding, tooling considerations and integrated testing.

As is typical of the content Chris puts out, the discussion in this series is precise, thoughtful and complex. It will teach you a lot about single file components and what is involved in the decision making behind making such an important choice for our community.

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

## [Release of uELS 3.0.8 published to VSCode ✅](https://discord.com/channels/480462759797063690/480499624663056390/896699510888226826)

[Unstable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) is a fully featured fork of Ember Language Server. While the name says _unstable_, it actually is **stable** and recently [published v3.0.8 to VSCode](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable)!

Thank you to [Alex Kanunnikov (@lifeart)](https://github.com/lifeart) for the updates such as: async file system access, improved startup performance, fixed found issues, and multiple file system providers support.

As part of the release, it added experimental [VSCode web-version support](https://code.visualstudio.com/api/extension-guides/web-extensions). This allows uELS to be integrated into any browser environment.

---

## [tracked-built-ins v2.0.0 🔥](https://github.com/tracked-tools/tracked-built-ins/releases/tag/v2.0.0)

v2 of `tracked-built-ins` was released and it now supports Ember v4.x, has better internal implementations, includes a lot of dependency updates and provides fewer deprecation warnings!

---

## [Announcing Checkup v1.0.0 🩺](https://www.linkedin.com/pulse/announcing-checkup-10-steve-calvert/)

The Checkup team has released version 1.0.0 of the Checkup framework, which, if you did not know, provides a nice way to gather static analysis insights for your front-end projects.

Checkup can be used in Ember and can make things like tracking progress in certain efforts, like Octane migrations, easier. There is a custom plugin system and it outputs to standard formats for integration with other common tooling like VS Code.

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

## [🐹 5. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 6. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 7. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 8. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jared Galanis, the crowd and the Learning Team
