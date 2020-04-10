---
title: The Ember Times - Issue No. 143
author: Chris Ng, Dean Papastrat, Amy Lam, Isaac Lee, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/04/10-the-ember-times-issue-143.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Ember Engines Documentation Rewrite ⚙️,
Ember at Square 💻,
Check out new Ember CLI documentations 📚,
Introducing qunit-wait-for ⏰,

READMORE

---

## [Ember Engines Documentation Rewrite ⚙️](https://twitter.com/MVillander/status/1246162676176355335)

[Michael Villander (@villander)](https://github.com/villander) announced a rewrite to the documentation for the Ember Engines Guides to improve the user experience for the community!

Updates include detailed explanations that range from what Ember Engines are and why should you use them, to differentiating the behaviour between _standard_ and _in-repo_ addons for Engines. The guide also goes through routable vs route-less Engines as well as how to “mount” them into your application. Finally, it also covers how to test code within Engines.

Huge thanks to [Dan Gebhardt (@dgeb)](https://github.com/dgeb) and [Gabriel Csapo (@gabrielcsapo)](https://github.com/gabrielcsapo)! Check out the [new Ember Engines docs](https://ember-engines.com/docs) today and [help contribute](https://github.com/ember-engines/ember-engines.com) to make them better!

---

## [Ember at Square 💻](https://developer.squareup.com)

<!--alex disable just-->
Here at The Ember Times, we've been highlighting projects and teams who are using Ember Octane in their apps. This week, [Dean Papastrat (@deanpapastrat)](https://github.com/deanpapastrat) shares his experience as an engineer at [Square](https://squareup.com/us/en)! Dean writes:

> Square enables businesses of all shapes and sizes to manage almost every aspect of their business - from payments to inventory to payroll - in one place. The Developers Experience team at Square builds products and tooling for external developers that build on Square's APIs, such as our [Developer Dashboard](https://developer.squareup.com/apps), [Developer Documentation site](https://developer.squareup.com/docs), [API Reference](https://developer.squareup.com/reference), and [API Explorer](https://developer.squareup.com/explorer).
> 
> Our team recently released a new API Reference and API Explorer built on the Octane beta and Fastboot (don't worry, we're running production-grade Ember 3.17 now!). Despite being in beta, the choice to pick Octane was a no-brainer for us due to 3 major factors: performance, accessibility, and learning curve.
>
> Since our team’s primary customers are developers, we knew we'd need the site to be snappy. In Octane, we're able to render much larger lists without virtualization because of the performance gains from Glimmer components, which spares us a lot of complexity and accessibility issues that come with virtual lists. The biggest example of this is our objects index page and enum lists for properties, which render hundreds of list items with markdown and other rich content.
>
> The new API Reference is a completely accessible site, much in thanks to the improvements in Octane. It made it much easier for us to add ARIA attributes than past versions of Ember, where we had to bind lots of attributes explicitly or manually forward properties to elements inside of components. Specifically, the ability to apply "splattributes" to a given element in a component meant we could work with the HTML properties we were familiar with instead of working around the framework. The way angle bracket components use "@" symbols to delineate arguments on a component from HTML attributes made this easier for us as well, since it disambiguated how arguments and attributes would be handled on the component.
>
> Lastly, the lower learning curve of Octane became the strongest selling point for our team. With half our team being engineers that had never touched Ember before, we were wary of how long it would take people to pick up the concepts in Octane that weren't well-documented at the time. Instead, we were blown away at how quickly people were able to pick it up. The engineers new to Ember picked up Glimmer components with tracked properties in under a day, because they "just worked like classes". Using modifiers directly within the templates themselves felt much more straightforward for new engineers. In fact, there were no "Emberisms" they needed to learn to be productive. Angle bracket components felt more natural to our engineers coming from a React background, and the disambiguation of arguments / component state / attributes made it much easier to understand how data flowed from one component to another.
>
> The only regret we have is that we haven't been able to port the rest of our apps to Octane yet, and going back to computed properties feels like such a massive step backward, that it makes you realize how important Octane is for improving the Ember developer experience long term. We're excited to see how the Ember community approaches the challenge of modernizing the build system with Embroider, and can't wait to adopt it later this year.
<!-- alex enable just -->

---

## [Check out new Ember CLI documentations 📚](https://cli.emberjs.com/release/)

In case you might not have known, the Ember.js website has [documentation dedicated to Ember CLI](https://cli.emberjs.com/release/). It covers both everyday and advanced uses that you will encounter when you write Ember apps or addons.

In the past two weeks, [Mehul Kar (@mehulkar)](https://github.com/mehulkar) dedicated his time to [keep the documentation up to date](https://github.com/ember-learn/cli-guides/pulls?q=is%3Apr+is%3Aclosed+author%3Amehulkar+created%3A%3E%3D2020-03-15+) and introduced 2 new sections: how to [debug when CLI commands fail](https://cli.emberjs.com/release/advanced-use/debugging/) and how to [create custom CLI commands](https://cli.emberjs.com/release/writing-addons/custom-commands/).

We encourage you to check out the Ember CLI documentation to understand your toolset better. Don't forget to thank Mehul for his work!

---

## [Introducing qunit-wait-for ⏰](https://twitter.com/alexlafroscia/status/1246102930475962368)

There's an awesome new test helper by [Alex LaFroscia (@alexlafroscia)](https://github.com/alexlafroscia) that rethinks the approach on how we wait for asynchronous behavior to resolve in our tests! 🎉

Typically in Ember tests you'd use one of the several available test helpers that wait until a promise resolves before making some kind of assertion against the state of your application. However, using wait test helpers in this way can add complexity to your tests and couple ⛓ your tests to your implementation code. 

With [`qunit-wait-for`](https://github.com/alexlafroscia/qunit-wait-for) the idea is to let assertions run immediately and fail gracefully until they pass or a timeout is reached. This allows you to wait ⏳ for async behavior to complete without your test code knowing any more than it needs to know about your app code. All you have to do is wrap your assertion with a `waitFor` assertion provided by `qunit-wait-for`, it's very cool!

`qunit-wait-for` can be used not only in Ember.js, but in JavaScript applications more generally that use Qunit. Give it a spin today!

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

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Dean Papastrat, Amy Lam, Isaac Lee, Jared Galanis, the crowd and the Learning Team
