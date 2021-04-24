---
title: The Ember Times - Issue No. 178
authors:
  - amy-lam
  - isaac-lee
  - chris-ng
date: 2021-04-23T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Find out about Ember 3.26 release 🥳,
Updated Release of Unstable Ember Language Server ✨,
and Addon roundup 🙌.

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

## [Updated Release of Unstable Ember Language Server ✨](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable)

A new version of [Unstable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) has been published thanks to [Suchita Doshi (@suchitadoshi1987)](https://github.com/suchitadoshi1987) and [Alex Kanunnikov (@lifeart)](https://github.com/lifeart).

The Unstable Ember Language Server is a VSCode extension that provides VSCode users features like auto complete, goto definition and diagnostics for Ember projects. While the name contains the word “unstable,” it is very **stable** and is actually a fork of the [original Ember Language Server project](https://github.com/ember-tooling/ember-language-server).

This recent release adds [batman syntax](https://github.com/rwjblue/ember-holy-futuristic-template-namespacing-batman) support (namespaces) to [Unstable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) so try it out today on your VSCode!

---


## Addon roundup 🙌

We wanted to highlight some recent happenings around the web! Check them out and give them a try! 😎

<!-- alex ignore easy -->
* Do you want to use OAuth in your Ember app? [Sinan Keskin (@sinankeskin)](https://github.com/sinankeskin) wrote a new addon, [ember-oauther](https://github.com/sinankeskin/ember-oauther), which allows you to sign in and register a user with OAuth easily! OAuth is an open standard for **access delegation**, commonly used to help a user register or log in to a web app via their login for Facebook, Google, Microsoft, etc.
* [ember-resize-monitor](https://github.com/elwayman02/ember-resize-modifier) provides a [did-resize](https://ember-resize-modifier.jhawk.co/modifiers/did-resize/) modifier for detecting **resize events** on the element or component it's attached to. These events could include window resizing CSS changes, content updates, and more. [Jordan Hawker (@elwayman02)](https://github.com/elwayman02) published a v0.2.0 and gave a shoutout to [Tamas Sule (@xjmdoo)](https://github.com/xjmdoo) for improving the addon's performance by 10x!
* [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing) v4.0.4 is here! ember-a11y-testing is a wrapper around Deque Labs' [axe-core](https://github.com/dequelabs/axe-core) **accessibility testing engine**. The addon can be integrated in your testing environment either as a one-time setup, or in individual tests using an `a11yAudit()` test helper. Raise your Lighthouse score *and* improve the web at the same time! Thank you to the team that made this happen, including these recent contributors: [Andrew A Lee (@drewlee)](https://github.com/drewlee), [Dan Wenzel (@danwenzel)](https://github.com/danwenzel), [Melanie Sumner (@MelSumner)](https://github.com/MelSumner), [Steve Calvert (@scalvert)](https://github.com/scalvert), [Robert Jackson (@rwjblue)](https://github.com/rwjblue), [Travis Hoover (@thoov)](https://github.com/thoov), and [
Steve Zelaznik (@zelaznik)](https://github.com/zelaznik).
* [els-addon-import-specifiers](https://github.com/suchitadoshi1987/els-addon-import-specifiers) is a new **experimental** language server addon from [Suchita Doshi (@suchitadoshi1987)](https://github.com/suchitadoshi1987/els-addon-import-specifiers) that allows jumping to the line of an import specifiers directly. A nice improvement over jumping to the file! 

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/hannakim91" rel="noopener noreferrer" target="_blank">Hanna (@hannakim91)</a>, <a href="https://github.com/btecu" rel="noopener noreferrer" target="_blank">Bj Tecu (@btecu)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/rinoldsimon" rel="noopener noreferrer" target="_blank">Rinold Simon (@rinoldsimon)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/esquith" rel="noopener noreferrer" target="_blank">Esquith Allen (@esquith)</a>, <a href="https://github.com/rajasegar" rel="noopener noreferrer" target="_blank">Rajasegar Chandran (@rajasegar)</a>, <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/stephencweiss" rel="noopener noreferrer" target="_blank">Stephen Weiss (@stephencweiss)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/nickschot" rel="noopener noreferrer" target="_blank">Nick Schot (@nickschot)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/lin-ll" rel="noopener noreferrer" target="_blank">Lucy Lin (@lin-ll)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/jayjayjpg" rel="noopener noreferrer" target="_blank">Jesse Jordan (@jayjayjpg)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/afzal273" rel="noopener noreferrer" target="_blank">Afzal Syed (@afzal273)</a>, <a href="https://github.com/davecombs" rel="noopener noreferrer" target="_blank">Dave Combs (@davecombs)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/josemarluedke" rel="noopener noreferrer" target="_blank">Josemar Luedke (@josemarluedke)</a>, <a href="https://github.com/tylerbecks" rel="noopener noreferrer" target="_blank">Tyler Becks (@tylerbecks)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/spham92" rel="noopener noreferrer" target="_blank">Steven Pham (@spham92)</a>, and <a href="https://github.com/broxsonl" rel="noopener noreferrer" target="_blank">Lee Broxson (@broxsonl)</a> for their contributions to Ember and related repositories! 💖</p>

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

Amy Lam, Isaac Lee, Chris Ng, and the Learning Team
