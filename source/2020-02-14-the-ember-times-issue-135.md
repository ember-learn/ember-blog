---
title: The Ember Times - Issue No. 135
author: Chris Ng, Jessica Jordan, Jared Galanis, Anne-Greeth van Herwijnen, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/02/14-the-ember-times-issue-135.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Learn about Native Decorator Support from EmberMap 🐹🗺️,
review the RFC for splarguments 💖,
Autotracking! A Blog Series on Reactivity Systems 🤖,
JSParty podcast with Jen and Chris 📻,
READMORE

---

## [EmberMap: Learn About Native Decorator Support 🐹🗺️](https://twitter.com/ember_map/status/1225464396471787525)

Check out the latest EmberMap episode of "What's New in Ember." It talks about what the [Native Decorator Support](https://emberjs.github.io/rfcs/0440-decorator-support.html) feature from Ember 3.10 means for you and why [Decorators](https://emberjs.github.io/rfcs/0408-decorators.html) are important for Ember's adoption of ES Classes.

With Ember 3.10, all the core APIs and surrounding ecosystem libraries can start adopting decorators as per the [stage 1 implementation](https://github.com/tc39/proposal-decorators) which would pave the way for ES classes in Ember. However, the happy path is still to wait until [the Octane release or 3.15](https://blog.emberjs.com/2019/12/20/ember-3-15-released.html) to start using both ES classes and decorators together for all of your Ember app code.

To check out how to upgrade your app to 3.15, check out this [great Discord thread](https://discuss.emberjs.com/t/question-about-the-native-decorator-support-feature/17474) on the issue but also be sure to check out the full video on [Native Decorator Support on EmberMap](https://embermap.com/topics/what-s-new-in-ember/native-decorator-support-3-10).

---

## [Autotracking! A Blog Series on Reactivity Systems 🤖](https://www.pzuraq.com/thinking-with-autotracking-what-makes-a-good-reactive-system/)

Interested in learning more about autotracking, Ember Octane's new reactivity system? Well then, you're in luck 🍀. [Chris Garrett (@pzuraq)](https://github.com/pzuraq) is starting another super interesting new blog post series on that exact subject!

The [first post](https://www.pzuraq.com/thinking-with-autotracking-what-makes-a-good-reactive-system/), which came out at the end of last month, examines what reactivity means and how it relates to declarative and imperative programming models. Even experienced Ember developers will likely get a lot of value out of reading about what these often-used, but rarely fully understood, terms mean. 

In an approachable and conversational style, [@pzuraq](https://github.com/pzuraq) also explains how state is used in these programming models as well as functional programming models. It’s a great intro for anyone looking to learn a bit about reactivity systems.

Bonus 🎉 [@pzuraq’s](https://github.com/pzuraq) [second post](https://www.pzuraq.com/thinking-with-autotracking-what-makes-a-good-reactive-system/) about what makes a good reactivity system came out this week!

[@pzuraq](https://github.com/pzuraq) dives deeper and surveys several reactivity systems:

- HTML/CSS (did you know they are reactive!?)
- Push-based reactivity systems, which are often implemented with JavaScript (e.g. Ember Classic and other systems like the Observable model)
- Pull-based reactivity systems (e.g. React and the Virtual DOM, Vue and Elm)

There are helpful diagrams and clear explanations to help you better understand the finer points. If you’re looking to learn more about how these models of reactivity are similar and different, then this post is a great read for you.

Be sure to be on the lookout for more updates from the Ember Times team as more of these awesome blog posts are released!

---

## [There is no party like an Octane party 🎊](https://changelog.com/jsparty/114)

On the 6th of February [Jen Weber @jenweber](https://github.com/jenweber) and [Chris Manson @mansona
](https://github.com/mansona) were live on the [JS Party podcast](https://changelog.com/jsparty). This party describes themselves as: "A community celebration of JavaScript and the web.". They record on Thursdays at 1pm Eastern / 10am Pacific if you want to tune in live. 

[Jen](https://github.com/jenweber) and [Chris](https://github.com/mansona) talked with the hosts, [Kevin Ball @kball](https://github.com/kball) and [Nick Nisi](https://nicknisi.com/), about Ember Octane and the way Ember how as a framework work, and also about the role of the community within Ember. 
The [podcast](https://changelog.com/jsparty/114) got published today, so if you have missed it on the 6th or want to listen to it again, you can!

Since the audience for this podcast was not the Ember community this podcast is a nice showcase of what makes Ember special. One of the hosts even tried the Ember tutorial to get a grasp of what Ember is. 
All in all, a lovely podcast with two **awesome** representatives from the Ember core team. 

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Review the potential future of splarguments 💖](https://github.com/emberjs/rfcs/pull/593)


Two years ago the [Request for Comments (RFC) #311](https://emberjs.github.io/rfcs/0311-angle-bracket-invocation.html#html-attributes) made quite a splash: Besides an entirely new invocation syntax for Ember components, it suggested a novel feature that allowed Ember users to pass **HTML attributes**, such as _class_, _width_ or _tabindex_, from the invocation site of a component down to its content. There they can finally be accessed using the so-called **splattributes** syntax.

Here's a quick reminder of how that looks like - imagine the following markup:

```handlebars
<!-- app/templates/application.hbs -->
<!-- invoking a component with several attributes.... -->
<MyImageComponent width="320" height="64" alt="My favorite snack" />
```

```handlebars
<!-- app/components/my-image-component.hbs -->
<!-- ...allows access to the attributes in the component's template -->
<img ...attributes />
```

Which will render the component in your app as follows:

```html
<img width="320" height="64" alt="My favorite snacc" />
```

The efforts to allow Ember devs to write less verbose component templates and to manage deeply nested component invocations successfully continue. This week, [Alon Bukai (@Alonski)](https://github.com/Alonski), Ember developer, contributor and Ember Times editor, wrote down an RFC to promote the [idea of **spreadable arguments**](https://github.com/emberjs/rfcs/blob/1c90e48eeec9a990627a6ce1e9f70391ba95bbb7/text/0000-spreadable-arguments.md).

Similar to splattributes, these would allow the forwarding of component configuration with less verbosity, but in this instance via **arguments** rather than attributes. You can learn more about the motivation of this feature and how it is used, in the [RFC itself](https://github.com/emberjs/rfcs/pull/593). And as always: feel encouraged to leave your thoughts, questions and suggestions in the comments below!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/jgwhite" target="gh-user">@jgwhite</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/mehulkar" target="gh-user">@mehulkar</a>, <a href="https://github.com/efx" target="gh-user">@efx</a>, <a href="https://github.com/wycats" target="gh-user">@wycats</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/krisselden" target="gh-user">@krisselden</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/chadhietala" target="gh-user">@chadhietala</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a> and <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Jessica Jordan, Jared Galanis, Anne-Greeth van Herwijnen, the crowd and the Learning Team
