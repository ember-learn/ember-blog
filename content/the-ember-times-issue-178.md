---
title: The Ember Times - Issue No. 178
authors:
  - amy-lam
  - isaac-lee
date: 2021-04-23T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Find out about Ember 3.26 release 🥳,
Addon roundup 🙌,

---

## [Ember 3.26 Released 🥳](https://blog.emberjs.com/ember-3-26-released)

[Ember 3.26 release was announced](https://blog.emberjs.com/ember-3-26-released) on April 12, 2021. The release patched a few bug fixes in `ember-source` and `ember-cli`. It also introduced several deprecations in `ember-source` in preparation of the **upcoming Ember 4.0 release**.

We encourage you to make time to address deprecated patterns in your apps and addons. The [Deprecations Guide](https://deprecations.emberjs.com/) provides examples of how you might update your code.

Here are 3 quick tips for what you can do for Ember 3.26:

1. To make a route transition in a controller or route, inject the `router` service and use its `transitionTo` or `replaceWith` method. You can check the [API Guides](https://api.emberjs.com/ember/release/classes/RouterService) to learn more about the `router` service.

    For new code, using the `router` service shouldn't cause an issue. When you update existing code, however, your app may behave differently when the route transition occurs. Before any update, write tests that cover the intended behavior.

2. When you invoke the `<LinkTo>` component with angle brackets, use named arguments to improve code readability. The arguments include `@route`, `@model`, `@models`, and `@query`.

3. If you use Ember Data in a controller or route, inject the `store` service.

Need help with upgrading your app? You can ask questions in the [Ember Discussion Form](https://discuss.emberjs.com/) or the `#help` channel on [Ember Discord](https://discord.gg/emberjs).

---

## Addon roundup 🙌

We wanted to highlight some recent happenings around the web! Check them out and give them a try! 😎

<!-- alex ignore easy -->
* Do you want to use OAuth in your Ember app? [Sinan Keskin (@sinankeskin)](https://github.com/sinankeskin) wrote a new addon, [ember-oauther](https://github.com/sinankeskin/ember-oauther), which allows you to sign in and register a user with OAuth easily! OAuth is an open standard for **access delegation**, commonly used as a way to register or log into a web app via their Facebook, Google, Microsoft, etc. login.
* [ember-resize-monitor](https://github.com/elwayman02/ember-resize-modifier) provides a [did-resize](https://ember-resize-modifier.jhawk.co/modifiers/did-resize/) modifier for detecting **resize events** on the element or component it's attached to. These events could include window resizing CSS changes, content updates, and more. [Jordan Hawker (@elwayman02)](https://github.com/elwayman02) published a v0.2.0 and gave a shoutout to [Tamas Sule (@xjmdoo)](https://github.com/xjmdoo) for improving the addon's performance by 10x!
* [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing) v4.0.4 is here! ember-a11y-testing is a wrapper around Deque Labs' [axe-core](https://github.com/dequelabs/axe-core) **accessibility testing engine**. The addon can be integrated in your testing environment either as a one-time setup, or in individual tests using an `a11yAudit()` test helper. Raise your Lighthouse score *and* improve the web at the same time! Thank you to the team that made this happen, including these recent contributors: [Andrew A Lee (@drewlee)](https://github.com/drewlee), [Dan Wenzel (@danwenzel)](https://github.com/danwenzel), [Melanie Sumner (@MelSumner)](https://github.com/MelSumner), [Steve Calvert (@scalvert)](https://github.com/scalvert), [Robert Jackson (@rwjblue)](https://github.com/rwjblue), [Travis Hoover (@thoov)](https://github.com/thoov), and [
Steve Zelaznik (@zelaznik)](https://github.com/zelaznik).

---

## [3. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Amy Lam, Isaac Lee, the crowd and the Learning Team
