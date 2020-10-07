---
title: The Ember Times - Issue No. 165
author: Isaac Lee, Chris Ng, Jen Weber, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2021/10/09-the-ember-times-issue-165.html"
responsive: true
---

🎃 NOTE: THIS ISSUE IS ACTUALLY FOR 2020, BUT COMMITTING PR'S FOR ISSUE #165 TO MASTER FOR HACKTOBERFEST! 🎃

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
Read the new RFC to deprecate `tryInvoke` 📜,
Tips for switching from Ember Data to Ember Orbit 💡,

READMORE

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [RFC: Deprecate tryInvoke 📜](https://github.com/emberjs/rfcs/pull/673)

[Bach Vo (@bachvo)](https://github.com/bachvo) created a new RFC to [deprecate tryInvoke](https://github.com/emberjs/rfcs/pull/673). It builds on top of the previous [RFC to deprecate getWithDefault](https://emberjs.github.io/rfcs/0554-deprecate-getwithdefault.html).

The author explains that, in most cases, function arguments should not be optional. In the rare occasion that it is optional, the Javascript language has [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) so we can deprecate the usage of `tryInvoke`.

Before:

```js
import { tryInvoke } from '@ember/utils';
 
foo() {
 tryInvoke(this.args, 'bar', ['baz']);
}
```

After:

```js
foo() {
 this.args.bar?.('baz');
}
```

Read the full [RFC on Github](https://github.com/emberjs/rfcs/pull/673)!

---

## [Switching from ember-data to ember-orbit 💡](https://medium.com/swlh/switching-from-ember-data-to-ember-orbit-82e202248f1c)

[Derek Gray (@derekwsgray)](https://github.com/derekwsgray) encountered a business requirement to provide an Undo/Redo feature in a large Ember app. While gradually updating the app to rely on [ember-orbit](https://github.com/orbitjs/ember-orbit), Derek recorded [tips and changes that you will want to consider](https://medium.com/swlh/switching-from-ember-data-to-ember-orbit-82e202248f1c) when you are in a similar situation. Perhaps you will want to leverage other Orbit features (offline cache, transaction logs, background sync strategies).

The blog post provides:

- A list of introductory reference materials
- How to allow `ember-data` and `ember-orbit` to coexist during migration
- How to convert `ember-data` syntax to `ember-orbit`

We encourage you to check it out and bookmark the link for future reference!

---

## [Hacktoberfest 2020 events and info 🐹](https://blog.emberjs.com/2020/10/01/hacktoberfest.html)

Have you always wanted to contribute to open source, but don't know where to start?
The month of October is the perfect time to give it a try!
[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is an annual celebration of open source happens around the world, in thousands of projects on GitHub.
Here in Ember land, have lined up special events, mentoring, pairing, and more. You can read the full details in the [Ember blog](https://blog.emberjs.com/2020/10/01/hacktoberfest.html), but here are the highlights:

- On **Saturday, October 10th**, drop into a pairing session! You can join voice chat on [Ember Discord](https://emberjs.com/community/), where mentors are available to to take your questions, give some advice, and do pair programming during two sessions. Just jump into the "General" voice channel on Discord, all the way at the bottom of the channels list. **Mentors are available [9am-10am ET](https://meetingzone.app/utc/saturday/1300), and [9pm-10pm ET](https://meetingzone.app/utc/sunday/0100)**. Click the links to see times in your own time zone.
- You can **join the "hacktoberfest" chat channel** that is open all day, every day. Volunteers are also keeping an eye there for questions or help reviewing pull requests.
- On Octber 16th, there is a **sold out** Contributors Workshop. If you are registered and can't make it, please let the organizers know so that someone else can join!
- If you are a **parent, person of color, LGBTQ+, or woman,** check out our channels for these groups! They are another great place to connect with others and maybe find a pairing buddy.
If you belong to one of those groups but have not joined the channel yet, you can ask in the Discord server admin channel or send a direct message to Melanie Sumner.

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

Isaac Lee, Chris Ng, the crowd and the Learning Team
