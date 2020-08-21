---
title: The Ember Times - Issue No. 161
author: Chris Ng, Amy Lam, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/08/21-the-ember-times-issue-161.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Built with Ember.js: 10001 virtual art exhibit 🎨,
ember-component-template-colocation-migrator now supports addons 🎉,
READMORE

---

## [Release of ember-component-template-colocation-migrator 1.1.0 🎉](https://github.com/ember-codemods/ember-component-template-colocation-migrator/releases/tag/v1.1.0)

The [ember-component-template-colocation-migrator](https://github.com/ember-codemods/ember-component-template-colocation-migrator) codemod co-locates component JS and HBS files as described in the [Component Templates Co-location RFC](https://emberjs.github.io/rfcs/0481-component-templates-co-location.html). The v1.1.0 release adds [support for migrating addons](https://github.com/ember-codemods/ember-component-template-colocation-migrator/pull/14), but templates shared by multiple components are excluded. In this case, it is up to end users how to list those; they are reported in the same way other skipped templates (like partials) are. Similarly, mixins that use layout are not migrated.

When running the codemod, instead of:


```sh
your-addon/
  addon/
    components/
      some-component.js
    templates/
      components/
        some-component.hbs
```

You will get:

```sh
your-addon/
  addon/
    components/
      some-component.js
      some-component.hbs
```

Try it out today by running the migrator in your app or addon: `npx github:ember-codemods/ember-component-template-colocation-migrator`

---

## [Built with Ember.js: 10001 virtual art exhibit 🎨](https://10001.undercurrent.nyc/exhibit/teams)

[Moacir P. de Sá Pereira (@muziejus)](http://github.com/muziejus) announced in a [tweet](https://twitter.com/muziejus/status/1291818497895477248) that while on vacation 🏝, he's been helping an art gallery put together a website for a virtual exhibition: [10001.undercurrent.nyc](https://10001.undercurrent.nyc/).

> On August 5, [Undercurrent](https://undercurrent.nyc/) launched “10001,” a collaborative virtual project that continues through September 12. This project is co-organized by the [European Union National Institutes of Culture](https://eunicglobal.eu/)’s New York Cluster. Borrowing the zip code from both the Empire State Building and New York City’s Central Post Office, “10001” focuses on the collaboration of strangers and the narrative of their collective creative process using New York City as the linchpin. Coming from a variety of disciplines, twelve European Union artists who have never met each other will be randomly paired, making up a total of six teams. Through a series of Zoom sessions, each team will spend a six-week period developing a single project that will reimagine NYC post March 20, 2020.

The 10001 website is built with Ember 3.18! It's fantastic to see Ember.js being used **in the wild**, and we think that the site design is pretty rad too. Look forward to checking out the content as the artists continue their work on this pandemic-friendly exhibition. 

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Amy Lam, the crowd and the Learning Team
