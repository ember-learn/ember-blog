---
title: The Ember Times - Issue No. 89
author: Chris Ng, Jessica Jordan, Anne-Greeth van Herwijnen, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/03/15-the-ember-times-issue-89.html"
responsive: true
---

Talofa Emberistas! 🐹

Polish up the Guides preview for Octane ⛽️, invoke nested components with angle bracket syntax 📐, an update on module unification 📝, check out the new Yieldable Named Blocks RFC 📇,  ...

---

## [Copy Editors For the Octane Guides Needed 📝](https://github.com/ember-learn/guides-source/issues/588)

Do you have **a few minutes** to read a page of the [Work in Progress (WIP) of the new Octane Guides](https://github.com/ember-learn/guides-source/issues/588) and send a PR for any kind of **small fix**? It's all about **spelling, typos and factual accuracy** in this round of copy-editing for the Octane Guides, and your help - however big or small - is greatly appreciated! 🖤
Your work will contribute to a big initiative the Learning Core team and friends have been working on for a while and which will be highlighted at [EmberConf](https://emberconf.com) next week!

You can read more about how to contribute and what to look out for in the [description of the related Quest Issue](https://github.com/ember-learn/guides-source/issues/588) and thank you for your support - every little bit helps! ⭐️

---

## [Invoking Components From All the Directories With Angle Brackets 📂](https://github.com/emberjs/rfcs/pull/457)

Even though the [angle bracket syntax](https://guides.emberjs.com/release/reference/syntax-conversion-guide/) is the modern and already available way of invoking components in Ember, it is still not possible to invoke all your components in your Ember app this way (yet!).

In contrast to **curly invocation syntax**, or classic invocation syntax, **angle bracket syntax** does not allow you to invoke components from nested directories, e.g. `app/components/blog/post/comment.js`. A new [Request for Comments (RFC)](https://github.com/emberjs/rfcs/pull/457) aims to change exactly that. It paves a way for Ember developers to use angle bracket invocation syntax on components from all app directories - nested or not.

<!-- alex ignore period -->
Be sure to read the full proposal and [leave your comments below](https://github.com/emberjs/rfcs/pull/457) before the **Final Comment Period (FCP)** ends!


---

## [Module Unification Update 📝](https://blog.emberjs.com/2019/03/11/update-on-module-unification-and-octane.html) 
If you are interested in Module Unification (MU) and the plans surrounding that topic, the [blog](https://blog.emberjs.com/2019/03/11/update-on-module-unification-and-octane.html) that Tom Dale wrote will tell you all about it. 
The blog tells the story starting with the [Module Unification RFC](https://emberjs.github.io/rfcs/0143-module-unification.html) from 2016 and how the community worked really hard to make MU work. 
Unfortunately MU will not be shipped in Octane. The implementation of MU, in for example Glimmer, showed that there are challenges in making MU work intuitively and useable. 
With these challenges in mind and looking at the development of Angle bracket components there is a new path wide open. The first steps towards MU in Ember start with the [SFC & Template Imports RFC](https://github.com/emberjs/rfcs/pull/454) to make template imports possible. 
So if you have a good idea to help make MU a success Ember, join the discussion and read the [Blog on Module Unification](https://blog.emberjs.com/2019/03/11/update-on-module-unification-and-octane.html).

---

## [SECTION TITLE](#section-url)


---

## [Yieldable Named Blocks RFC 📇](https://github.com/emberjs/rfcs/pull/460)

[@wycats](https://github.com/wycats) opened an RFC around supporting [yieldable named blocks](https://github.com/emberjs/rfcs/pull/460). The proposed RFC amends the previously submitted [Named Blocks RFC](https://emberjs.github.io/rfcs/0226-named-blocks.html) to finalize the syntax of named blocks and reduce the scope of the feature in light of the [Angle Bracket Invocation](https://emberjs.github.io/rfcs/0311-angle-bracket-invocation.html) changes.

The RFC proposes an extension to the angle bracket invocation syntax, namely introducing a new syntax to handle named blocks as seen below using the `<:>` and `</:>` syntax.

```
AngleBracketWithBlock :
  "<" ComponentTag ComponentArgs? BlockParams? ">"
  BlockBody
  "</" ComponentTag ">"

AngleBracketWithBlocks :
  "<" ComponentTag ComponentArgs? BlockParams? ">"
  NamedBlock+
  "</" ComponentTag ">"

NamedBlock :
  | "<:" Identifier "/>"
  | "<:" Identifier BlockParams? ">" BlockBody "</:" Identifier ">"
```

The RFC does not propose an extension to curly syntax, although a future extension to curly syntax is expected. Read more at the full [Yieldable Named Blocks RFC](https://github.com/emberjs/rfcs/pull/460) on GitHub!

---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---

## [SECTION TITLE](#section-url)


---


## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

<p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

</div>

---

## [#embertimes](https://emberjs.com/blog/tags/newsletter.html) 📰

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---


That's another wrap! ✨

Be kind,

Chris Ng, Jessica Jordan, Anne-Greeth van Herwijnen, the crowd and the Learning Team
