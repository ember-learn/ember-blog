---
title: The Ember Times - Issue No. 142
author: Chris Ng, Abhilash, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/04/03-the-ember-times-issue-142.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Release of `ember-arg-types` 🍎🍊,
Ember CLI improvement tips 🚀,

READMORE

---

## [Release of ember-arg-types 🍎🍊](https://twitter.com/jonkilroy/status/1242639546749255681)

[Jon Kilroy (@jkusa)](https://github.com/jkusa) released the `ember-arg-types` library which provides a decorator (`@arg`) that maps [glimmer arguments](https://guides.emberjs.com/release/upgrading/current-edition/glimmer-components/) to local component properties. This allows default values and type checking to be declared and documented in your component JS file.

In this example, `sortBy` will return the string argument passed or will default to the string `’id’`:

```js
@arg(string)
sortBy = 'id';
```

Instead of writing something like this:

```js
get sortBy() {
  const { sortBy='id' } = this.args;
  assert('`sortBy` must be a string', typeof sortBy === 'string');
  return sortBy;
}
```

Furthermore `ember-arg-types` leverages the [facebook/prop-types](https://github.com/facebook/prop-types) library by importing type validators for runtime type checking. As an example, the `name` argument below is required to be a string.

```js
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { string } from 'prop-types';

export default class CharacterComponent extends Component {
  // `name` string arg that is required
  @arg(string.isRequired)
  name;
}
```

Try it out today by ember installing [ember-arg-types](https://github.com/jkusa/ember-arg-types)!

---

## [Ember CLI improvement tips 🚀](https://gist.github.com/vasind/22122632be15f3bc98a092ab012524e2)

[Vasanth (@vasind)](https://github.com/vasind) collated a list of all [**Ember CLI**](https://ember-cli.com/) improvements for Ember applications as a GitHub gist. He showcased improvements to the `ember-cli-build.js` that speed up build times for development and test environments, while retaining the right configurations in production. He also added tips on optimizing applications using [Mirage](https://www.ember-cli-mirage.com/). [Head out to his gist](https://gist.github.com/vasind/22122632be15f3bc98a092ab012524e2) to check them out!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Community support for the Ember API Docs 📓❤️](https://github.com/ember-learn/ember-api-docs)

The [Ember API Docs](https://api.emberjs.com/ember/release) have been one of the cornerstones of Ember's official learning resources since the early days of the project.

But did you already know that right now there are plenty of efforts underway to modernise the app? In this regard, we'd like to thank [Gaurav Munjal (@Gaurav0)](https://github.com/Gaurav0) in particular for bringing in [lots of new upgrades, awesome refactors and improvements to the API Docs](https://github.com/ember-learn/ember-api-docs/pulls?q=is%3Apr+is%3Aclosed+author%3AGaurav0) ❤️!

In case you are interested in **helping** with the modernisation efforts of the Ember API Docs, too - be it with code contributions, issue triaging or reviewing changes - be sure to chat with the Ember Learning team; either on  [an issue discussion on Github](https://github.com/ember-learn/ember-api-docs/issues) or on the **#dev-ember-learning** channel through the [Ember Discord](https://discordapp.com/invite/emberjs)!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/Robdel12" target="gh-user">@Robdel12</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/somasuna" target="gh-user">@somasuna</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/brendenpalmer" target="gh-user">@brendenpalmer</a>, <a href="https://github.com/sharpshark28" target="gh-user">@sharpshark28</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a> and <a href="https://github.com/SYU15" target="gh-user">@SYU15</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask readers' questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Abhilash, Jessica Jordan, the crowd and the Learning Team
