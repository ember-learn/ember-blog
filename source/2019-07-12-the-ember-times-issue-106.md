---
title: The Ember Times - Issue No. 106
author: Isaac Lee, Chris Ng, Jessica Jordan, Jared Galanis, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/07/12-the-ember-times-issue-106.html"
responsive: true
---

👋 Emberistas! 🐹

This week: find out how Ember Data has been repackaged in 3.11 📦,
a tutorial to learn how to build an Ember Octane PWA from scratch 👨‍💻,
see EmberJS powered blogging in action at DublinJS 🎥,
checkout updated Ember Igniter articles 🔥,
and last, but not least, an exclusive **"I contribute to Ember"** interview with @st-h 🎙!

READMORE

---

## [Ember Data Repackaged in 3.11 📦](https://emberjs.github.io/rfcs/0395-ember-data-packages.html)

Starting with Ember 3.11, Ember Data will be shipped as a **collection of small packages** under the namespace `@ember-data`. This helps you import only the packages that you need, identify the API that you can replace, and know where to start if you want to contribute to Ember Data. 🎉

Say hello to the new import syntax:

```js
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
```

Previous styles of import will be deprecated in a future release. Don't worry. Before that happens, a codemod and lint rules will be available to help you migrate your code.

We encourage you to learn today about [Ember Data packages in 3.11](https://emberjs.github.io/rfcs/0395-ember-data-packages.html) and the exciting plan to [use Embroider to tree-shake Ember Data](https://github.com/emberjs/data/issues/6166).

---

## [Tutorial: Ember Octane Fundamentals 🐹](https://twitter.com/michaellnorth/status/1148631049141751813)

[@mike-north](https://github.com/mike-north) published a [new training video series on Frontend Masters](https://frontendmasters.com/courses/ember-octane/) on **Ember Octane Fundamentals**. If you are not a subscriber to Frontend Masters or prefer written instructions, there are [detailed written instructions hosted in GitHub](https://github.com/mike-north/ember-octane-workshop/tree/master/notes)!

Starting with regular HTML and CSS and going through hands-on experience working with glimmer components, tracked properties, actions, and modifiers – the Ember Octane Fundamentals training provides detailed steps in creating your own server-rendered chat application.

What’s even better is that since this is licensed under the BSD-2-Clause, you can feel free to use this material to conduct workshops in your own groups! Just make sure to give some feedback to [@mike-north](https://github.com/mike-north)!

---

## [Updates To Ember Igniter Articles 🔥](https://emberigniter.com/articles/)

[@frank06](https://github.com/frank06) has recently been updating his **awesome series of articles** regarding a variety of Ember.js subjects on his blog, **Ember Igniter**.

Many of the updates are aimed at brining the articles inline with newer versions of Ember.js. The articles are now applicable to Ember 3, and in many cases they even apply to Ember Octane!

If you haven't had a chance to checkout Ember Igniter before, be sure to checkout all the articles [here](https://emberigniter.com/articles/).

---

## [See EmberJS Powered Blogging in Action at DublinJS 📝](https://www.youtube.com/watch?v=4-31AP3p1os)

<!-- alex ignore king-queen -->
Wanna start blogging? Not sure which platform to use to get started? Why not try [Empress Blog](https://github.com/empress/empress-blog) - a SEO-friendly, **EmberJS powered blog system**. Using this system, you can benefit from the themes and styles that are used for the [Ghost CMS](https://ghost.org/) right from the start.

<!-- alex ignore king-queen -->
In his **[recent talk](https://www.youtube.com/watch?v=4-31AP3p1os)** at [DublinJS](https://www.meetup.com/DublinJS/), Ember Learning Core team member [@mansona](https://github.com/mansona) highlights how you get started writing posts, easily switch themes and publish your blog to the World Wide Web using Empress Blog. Check out the prezzi over on [Youtube](https://www.youtube.com/watch?v=4-31AP3p1os). 🎥

---

## ["I contribute to Ember" with Stefan Huber 🎙](https://discuss.emberjs.com/t/i-contribute-to-ember-with-stefan-huber/16821)

<div class="float-right padded portrait-frame">
  <img alt="Stefan Huber" title="Stefan Huber - Contributor to Ember" src="/images/blog/emberjstimes/stefanhuber.jpeg" />
</div>

<!-- alex ignore dads-moms -->
In our eleventh edition of the contributor interview series, community member **Stefan Huber**, also known as **[@st-h](https://github.com/st-h)**, talks about his web app for musicians 🎸, building a recording studio when he was 20 in the basement of his mother's house 🎧, maintaining various Ember addons 👨‍💻, and more!

You can read the full interview on [the Ember Forum](https://discuss.emberjs.com/t/i-contribute-to-ember-with-stefan-huber/16821).

<a class="ember-button ember-button--centered" href="https://discuss.emberjs.com/t/i-contribute-to-ember-with-stefan-huber/16821">Read more</a>

<p style="font-style: italic;">The idea behind these interviews is to provide community members with more information and insight into open source contributions, learning resources and community events. Contributors to the community gain a platform to share their thoughts on their own experiences and learnings as they were contributing to Ember. Our hope is that it gives first-time and advancing contributors a better sense of the fact that everyone starts out small, and that anyone can have a big impact on the community.</p>

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/josemarluedke" target="gh-user">@josemarluedke</a>, <a href="https://github.com/SinS3i" target="gh-user">@SinS3i</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/ghislaineguerin" target="gh-user">@ghislaineguerin</a>, <a href="https://github.com/knownasilya" target="gh-user">@knownasilya</a>, <a href="https://github.com/newyork-anthonyng" target="gh-user">@newyork-anthonyng</a>, <a href="https://github.com/krainboltgreene" target="gh-user">@krainboltgreene</a>, <a href="https://github.com/backspace" target="gh-user">@backspace</a>, <a href="https://github.com/zubeir68" target="gh-user">@zubeir68</a>, <a href="https://github.com/tzellman" target="gh-user">@tzellman</a>, <a href="https://github.com/Prady220" target="gh-user">@Prady220</a> and <a href="https://github.com/locks" target="gh-user">@locks</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Isaac Lee, Chris Ng, Jessica Jordan, Jared Galanis, Amy Lam and the Learning Team
