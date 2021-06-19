---
title: The Ember Times - Issue No. 182
authors:
  - tim-foster
  - anne-greeth-van-herwijnen
  - chris-ng
  - isaac-lee
  - jared-galanis
  - amy-lam
date: 2021-06-18T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Controllers in Top-level Components,
Ember development on Twitch.tv 📺,
Read the blog post on using the in-element helper ⛳,
Plan sprints to upgrade Ember 🆕,
Remodeling an Ember App Part 2 🐹,

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

## [Ember Upgrade Sprints 🆕](https://blog.centrica.dev/ember/2021/04/08/ember-upgrade-sprints.html)

A key ingredient of app development is maintenance. Without refactoring code and upgrading dependencies often, our development cycle can slow down and we may fail to meet compliance. When you have a couple of apps to maintain, upgrading Ember may not be a big problem. What can you do when you have many apps to maintain and work with many other people?

In [Ember Upgrade Sprints](https://blog.centrica.dev/ember/2021/04/08/ember-upgrade-sprints.html), [Steve Tyler (@stevetyler)](https://github.com/stevetyler) provides a few tips for upgrading apps with every LTS release ([Long-Term Support](https://emberjs.com/releases/lts/)). In addition, Steve shares some challenges that you may face and how you can orient your teams' sprints.

For more information, we encourage you to check out the blog post. What are some of your insights and resources for upgrading Ember apps and addons? Please share them with the community!

---

## [Ember development on Twitch.tv 📺](https://www.twitch.tv/real_ate/)
  
[Chris Manson @mansona](https://github.com/mansona) has started to stream Ember development on Twitch. In engaging [Twitch streams](https://www.twitch.tv/real_ate/videos) Chris shows how he does maintenance and development in the Ember ecosystem. Every stream has a nice table of contents and time boxed periods where Chris works on a certain topic.

[Every Thursday at 10:30 - 13:00 (GMT+2)](https://www.twitch.tv/real_ate/schedule), you can join Chris on an adventure through contributing in Open Source, chat with other Ember enthusiasts and get **inspired** to contribute yourself.

---

## [Remodeling an Ember App Part 2 🐹](https://www.jenweber.dev/remodeling-an-ember-app---testing/)

Part 2 of [Jen Weber's (@jenweber)](https://github.com/jenweber) ✨fantastic✨ new series on bringing an older Ember app up-to-date with Octane and a modern Ember Data strategy is out now!

In [part 2](https://www.jenweber.dev/remodeling-an-ember-app---testing/), Jen covers some testing and debugging strategies that [Chris Thoburn (@runspired)](https://github.com/runspired) shared and are particularly helpful when upgrading an Ember application.

From approaches to how to optimize running the tests suite to approaches on how to deal with linting errors to better understanding application test failures, there is a ton of great content in the post that developers of any experience level could learn from.

Be sure to continue to watch for additional posts with more great content as this series continues!

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>

  <p>We ran into some technical difficulties at Ember Times HQ and we'll be back with the **Contributors' corner** next issue!</p>
</div>

---

That's another wrap! ✨

Be kind,

Tim Foster, Anne-Greeth van Herwijnen, Chris Ng, Isaac Lee, Jared Galanis, Amy Lam, and the Learning Team
