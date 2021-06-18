---
title: The Ember Times - Issue No. 182
authors:
  - tim-foster
  - anne-greeth-van-herwijnen
  - chris-ng
date: 2021-06-18T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹
Controllers in Top-level Components,
Ember development on Twitch.tv 📺,
Read the blog post on using the in-element helper ⛳,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [Using the in-element helper ⛳](https://www.linkedin.com/pulse/emberjs-using-in-element-helper-faith-or/)

[Faith Or (@faith-or)](https://github.com/faith-or) wrote a blog post on how they migrated from `ember-wormhole` to the built-in `in-element` helper introduced in Ember 3.20.

[Ember Wormhole](https://github.com/yapplabs/ember-wormhole) is an addon that renders a child view somewhere else in the DOM _outside_ of the component.

The [in-element helper](https://api.emberjs.com/ember/3.20/classes/Ember.Templates.helpers/methods/in-element?anchor=in-element) renders its block content outside of the regular flow, into a DOM element given by its `destinationElement` positional argument.

Common use cases for both include when a piece of UI is a logical child of a component but needs to render somewhere else such as a loading screen, a modal, tooltip or even a dropdown. The differences between the two are slight. Faith goes into more detail in the blog post.

There are 3 main takeaways.

1. `in-element` needs the destination to exist before we use it, while `ember-wormhole` does not.
2. With `in-element`, when the destination element changes, the content is re-rendered completely.
3. By default, the `in-element` helper will replace all the contents of the destination element. (You will need to configure it not to using `insertBefore=null`.)

Read the full [blog post on LinkedIn](https://www.linkedin.com/pulse/emberjs-using-in-element-helper-faith-or/) and check out the [demo on GitHub](https://github.com/faith-or/emberjs-inelement-vs-wormhole-demo)!

---

## [Migrating Controllers to top-level Components in Ember 📖](https://dev.to/juanazam/migrating-controllers-to-top-level-components-in-ember-ggc)

In this [blog post](https://dev.to/juanazam/migrating-controllers-to-top-level-components-in-ember-ggc), [Juan Manuel Azambuja (@juanazam)](https://github.com/juanazam) shows a real world example of how to replace your template contents with a single top-level component. The top-level component can then take on a similar role as the controller.

Juan presents a few tricks as well as a useful discussion of using [ember-modifiers](https://github.com/ember-modifier/ember-modifier) addon to solve updating issues. The blog sums up the advantages and disadvantages of the top-level approach, and cautions that the framework doesn't fully support this solution without some compromises.

---

## [2. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Ember development on Twitch.tv 📺](https://www.twitch.tv/real_ate/)
  
[Chris Manson @mansona](https://github.com/mansona) has started to stream Ember development on Twitch. In engaging [Twitch streams](https://www.twitch.tv/real_ate/videos) Chris shows how he does maintenance and development in the Ember ecosystem. Every stream has a nice table of contents and time boxed periods where Chris works on a certain topic.

[Every Thursday at 10:30 - 13:00 (GMT+2)](https://www.twitch.tv/real_ate/schedule), you can join Chris on an adventure through contributing in Open Source, chat with other Ember enthusiasts and get **inspired** to contribute yourself.

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

Tim Foster, Anne-Greeth van Herwijnen, Chris Ng, and the Learning Team
