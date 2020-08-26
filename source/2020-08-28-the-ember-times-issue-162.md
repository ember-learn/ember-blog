---
title: The Ember Times - Issue No. 162
author: Anne-Greeth van Herwijnen, Chris Ng, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/08/28-the-ember-times-issue-162.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
  
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Syntax highlighting in markdown with ember-showdown-prism 🔦,
Read the proposed `{{id}}` helper RFC 🆔,

READMORE

---

## [A new way to add syntax highlighting to your code blocks, with `ember-showdown-prism` 🔦](https://twitter.com/real_ate/status/1297892167181099010)

[Chris Manson (@mansona)](https://github.com/mansona) released the first working version of `ember-showdown-prism` this week. This drop-in addon automatically adds [Prism](https://prismjs.com/) syntax highlighting to Markdown code blocks if you are using [showdown](https://github.com/showdownjs/showdown). 

This addon adds **two unique** features on top of the `prism`  and `showdown` features. Firstly, if you provide a `data-filename` attribute, it will add this name to your code block including the file type. You’ve probably seen this before in the Ember Guides.  Secondly, line numbers are added to the code block and are also clickable which give you sharable links if you are using Fastboot or prember. 

[Chris](https://github.com/mansona) extracted the code from the guides, and with the help of [Nick Schot (@nickschot)](https://github.com/nickschot) managed to give you this cool addon with these awesome features.

Check out the [demo](https://ember-showdown-prism.netlify.app) and the [GitHub repo](https://github.com/empress/ember-showdown-prism) and add some cool code blocks to your blog or documentation!

---

## [RFC: {{id}} Helper 🆔](https://github.com/emberjs/rfcs/pull/659)

[Steve Szczecina (@steveszc)](https://github.com/steveszc) proposed adding a new built-in template helper `{{id}}` for generating unique IDs. This helper will function as a replacement for the `elementId` used within classical Ember components, which is not available in glimmer components or route templates. Furthermore it powers common use cases such as:

- Associating label and input elements using the label's for attribute and the input's id attribute.
- Using WAI-ARIA attributes to improve accessibility (eg. aria-labelledby, aria-controls)
- Integrating 3rd party libraries that attach themselves to DOM elements using DOM IDs (eg. maps, datepickers, jquery plugins, etc)

The proposed `{{id}}` helper can be invoked with either no arguments or with the `for` argument. When no arguments are passed, it will return a new unique id string for every invocation. This invocation style would usually be paired with a `let` block.

```hbs
{{#let (id) as |emailId|}}
  <label for={{emailId}}>Email address</label>
  <input id={{emailId}} type="email" />
{{/let}}
```

<!--alex ignore savage-->
The named argument `for` accepts any object, string, number, Element, or primitive, which will be treated as a stable reference for an id, allowing the helper to return the same id value for every invocation using the same for value.

```hbs
<label for="{{id for=this}}-email">Email address</label>
<input id="{{id for=this}}-email" type="email" />
```

For more information on why we need the `{{id}}` helper [read the pre-RFC issue](https://github.com/emberjs/rfcs/issues/612) or [comment on the RFC](https://github.com/emberjs/rfcs/pull/659) on GitHub!

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
  
  <p>P.S. Our next issue will be in two weeks. See you then!</p>
</div>

---

That's another wrap! ✨

Be kind,

Anne-Greeth van Herwijnen, Chris Ng, the crowd and the Learning Team
