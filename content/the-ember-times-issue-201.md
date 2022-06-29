---
title: The Ember Times - Issue No. 201
authors:
  - anne-greeth-schot-van-herwijnen
  - NullVoxPopuli
  - patricklx
date: 2022-06-27T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹

Embroider is legit.
Advanced template support in Intellij Idea.
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [🧵 1. Embroider is legit](https://github.com/embroider-build/embroider)

Embroider has been _declared_ stable since v1.0.0, or around 6 months ago (released mid January 2021). Embroider is the 2nd generation build pipeline to Ember Apps that enables the usage of “Standard JavaScript” and leverages standard JavaScript packagers such as Webpack.

Since even before v1.0.0, addon-authors have been adding **two** embroider-centric tests in C.I. for both "maximum compatibility" and "maximum strictness" to their ember-try configs.
`ember-cli` has even added an `--embroider` flag out of the box for starting new projects with embroider.
Try embroider out today in a new app!

```bash
ember new my-app --embroider
```

Or, add embroider to an existing app via this codemod:

```bash
npx ember-apply embroider
```

This [`ember-apply`](https://github.com/NullVoxPopuli/ember-apply/) command automates the setup instructions in the [embroider README](https://github.com/embroider-build/embroider#how-to-try-it).

And speaking of the README, it has a section of if _you_ should use embroider or not, today.

> Several large, heavily-tested Ember apps are shipping to production with Embroider. So if you are excited to adopt Embroider, it is a reasonable choice. The main risks to be aware of if you choose to use Embroider in production are:
>
> - you're likely to discover some Ember addons don't work or break your build
> - Embroider's own configuration options are subject to change, so you'll need to read the CHANGELOG.md when updating the Embroider packages.
>
> Alternatively, it is totally safe to stick with the traditional build pipeline and wait for the official cutover point when EmberCLI starts generating new apps with Embroider by default.

Note that while some addons may break your build, this may be for the greater good. For example, instead of relying on ember-specific solutions to certain build-time behaviors, you may now follow heavily documented, and asked about, and iterated on Webpack plugins. Additionally, removing addons with build-time behavior will speed up your overall dev-server start time.

## [💻 1. Advanced template support in Intellij Idea](https://github.com/patricklx/intellij-emberjs-experimental)

In Intellij Idea the support for Emberjs templates has been quite lacking, Especially compared to vscode (Un)Stable Ember Language Server. With [intellij-emberjs-experimental](https://github.com/patricklx/intellij-emberjs-experimental) I added many features to the original plugin to improve the UX of working/coding with templates. Search for the addon named `Ember Experimental.js` and give it a try. **You will need to disable or remove the other Ember.js plugin to prevent conflicts.**

This plugin adds:
* **Smart** Handlebars references for tags/mustache paths and tag attributes. By smart i mean that in handles ember helpers such as `let`, `hash`, `or`, `each`, `yield`. References to javascript/typescript and its able to resolve array item type in `each`.
* Handlebars **autocompletion** for tags (coming from blocks), tag attributes, mustache paths (js/ts) and named blocks. Also validates if atttribtues are valid and if requeried ones are missing.
* Handlebars **parameter hints** for helpers/modifiers and components
* Handlebars **renaming** for mustache ids and html tags
* Includes Emberjs internal Components and Helpers with support for attributes and parameter hints.
* It also resolves {{or x y z}} to the first resolvable option, this makes {{component (or x y)}} work, e.g in **power-select**
* support for inline templates
* some initial support for [.gjs]((https://github.com/ember-template-imports/ember-template-imports)) files. Only with `hbs` tags.  <template> will conflict with the internal definition of react...

https://github.com/patricklx


---

## [🐹 2. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 3. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 4. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

Anne-Greeth Schot-van Herwijnen, NullVoxPopuli, patricklx and the Learning Team
