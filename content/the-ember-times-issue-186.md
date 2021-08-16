---
title: The Ember Times - Issue No. 186
authors:
  - tim-foster # replace with real authors from the author folder (add yourself if you're not there)
  - chris-ng
date: 2021-08-16T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
New release for ember-responsive-image 🖼,
Read the blog post on Avoiding Lifecycle in Components ✍️,

---

## [`ember-responsive-image` v3 release 🖼](https://github.com/kaliber5/ember-responsive-image)

Optimising image size and formats to improve performance can get complicated, but the [`ember-responsive-image`](https://github.com/kaliber5/ember-responsive-image) addon has your back! Now you have even more reason to take advantage of its abilities following the annoucement by [Simon Ihmig (@simonihmig)](https://github.com/simonihmig) of [version 3](https://github.com/kaliber5/ember-responsive-image/releases/tag/v3.0.0). This release provides support for Cloudinary and imgix image CDNs, further enriching a full set of functionality for re-sizing images and optimizing image loading times across all browsers. Go check it out.

---

## [2. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Blog Post: Avoiding Lifecycle in Components ✍️](https://twitter.com/nullvoxpopuli/status/1421128258427490311)

[NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) published a blog post on [Avoiding Lifecycle in Components](https://nullvoxpopuli.com/avoiding-lifecycle), namely the lifecycle hooks that come with [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers).

For some context, ember-render-modifiers was created from [RFC 415: Render Element Modifiers](https://emberjs.github.io/rfcs/0415-render-element-modifiers.html) which introduced  three new generic element modifiers: `{{did-insert}}`, `{{did-update}}`, and `{{will-destroy}}`. The caveat however was that these modifiers were meant for quickly migrating away from classic Ember components to Glimmer components, because they largely allow you to use the same lifecycle hook methods you've already written while attaching them to these modifiers.

The blog outlines several possibilities to avoid using these modifiers:

- Creating your own custom modifier when behavior is tied to a particular DOM node or DOM tree
- Starting Ember 3.25, using a local modifier which is only referenced within your component
- Using `useFunction` from [ember-resources](https://github.com/NullVoxPopuli/ember-resources) to lazily load data instead of doing it in `did-insert` or `did-update` modifiers
- Handling destruction using `registerDestructor` from [@ember/destroyable](https://api.emberjs.com/ember/release/modules/@ember%2Fdestroyable) or using `willDestroy` directly from the [Glimmer lifecycle hook](https://api.emberjs.com/ember/release/modules/@glimmer%2Fcomponent#willdestroy)

Read more about the different strategies to avoiding lifecycle in components at the [Avoiding Lifecycle in Components blog post](https://nullvoxpopuli.com/avoiding-lifecycle)!

---

## [4. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [5. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [6. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [7. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [8. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/swarajpure" rel="noopener noreferrer" target="_blank">Swaraj Rajpure (@swarajpure)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/suchitadoshi1987" rel="noopener noreferrer" target="_blank">Suchita Doshi (@suchitadoshi1987)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/stefanpenner" rel="noopener noreferrer" target="_blank">Stefan Penner (@stefanpenner)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/dgeb" rel="noopener noreferrer" target="_blank">Dan Gebhardt (@dgeb)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, and <a href="https://github.com/jayjayjpg" rel="noopener noreferrer" target="_blank">Jessy Jordan (@jayjayjpg)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Tim Foster, Chris Ng, and the Learning Team
