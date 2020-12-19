---
title: The Ember Times - Issue No. 141
authors:
  - anne-greeth-van-herwijnen
  - preston-sego
  - jared-galanis
  - isaac-lee
  - chris-ng
  - jessica-jordan
  - erik-rothoff
  - amy-lam
date: 2020-03-27T00:00:00.000Z
tags:
  - newsletter
  - '2020'
---


👋 Emberistas! 🐹

Yehuda's Octane Tutorial 🔥,
a quick tip for refactoring your templates 📑,
dive into angle and curly bracket invocations 🔍,
easier porting of websites with Percy ✨,
Feeder Corona Dashboard 📰,
track JavaScript's built-in classes 💯,
Ember autostash modifier 💾,
read about how to use a ember-template-lint rule from an addon ✅,
decorator positioning now enforceable ↕️,
and last, but not least, stand alone EmberConf 2020 videos are out 🎥!

<!-- READMORE -->

---

## [Yehuda's Octane tutorial 🔥](https://yehudakatz.com/2020/03/25/ember-octane-lets-go/)

There's an awesome new Octane tutorial in town 🤠 and it's written by none other than our very own [Yehuda Katz (@wycats)](https://github.com/wycats)!!!

<!-- alex ignore just-->
In the tutorial you'll build the schedule page for a conference like EmberConf. It feels like just the right thing to build after our amazing virtual EmberConf 💙💚💛💜🧡.

The first part in this tutorial, [Let's Go](https://yehudakatz.com/2020/03/25/ember-octane-lets-go/), begins with something that not all JavaScript tutorials cover, HTML and CSS, using CSS Grid and Flex. You'll learn how to go from mocks to a deployed app in very little time.

The second part of the tutorial, [Components](https://yehudakatz.com/2020/03/26/ember-octane-components/), is also out and it covers refactoring out some of the HTML duplication. It's a great introduction to how you can use components and lists to reduce repetition.

So far there are 7 posts planned:

- [Let's Go](https://yehudakatz.com/2020/03/25/ember-octane-lets-go/)
- [Components](https://yehudakatz.com/2020/03/26/ember-octane-components/)
- Pulling Out Data
- Airtable Time
- Cleaning Things Up
- Adding More Pages
- Polishing: Server-Side Rendering, Prerendering and Code Splitting

So be on the look out 👀 for more in this very helpful new series!

---

## [A quick tip for refactoring your templates 📑](https://abhilashlr.in/ember-refactor-templates)

[Abhilash L Ramesh (@abhilashlr)](https://github.com/abhilashlr) wrote a small and clear [blog post](https://abhilashlr.in/ember-refactor-templates) with actionable tips to make your Ember templates cleaner. So if you have complex `if-else` logic in your template that you would like to make clearer, this blog post could help you out.

He also added some extra bonus tips, but no **spoilers** here, head to the [blog post](https://abhilashlr.in/ember-refactor-templates) to check them out!

---

## [Ember templates: classic vs. angle bracket syntaxes 🔍](https://0xadada.pub/2020/03/20/ember-emplates-classic-vs-angle-bracket-syntaxes/)

From Yehuda and Abhilash's blog posts, you got to see a bit of how templates work. But we've got one additional resource for you!

[@0xADADA](https://github.com/0xadada) and [Dan Freeman (@dfreeman)](https://github.com/dfreeman) did a [deep-dive into classic and angle bracket invocations](https://0xadada.pub/2020/03/20/ember-emplates-classic-vs-angle-bracket-syntaxes/). Please have a look to learn how these invocations handle attributes and arguments differently.

---

## [Tech stack modernisation without breaking things with Percy ✨](https://simplabs.com/blog/2020/03/27/porting-a-site-to-ember-with-percy/)

<!--alex ignore middleman-middlewoman-->
You might already be a regular visitor of the [Ember Guides](https://guides.emberjs.com/release/).
But did you know, that the **#1 learning site for Ember developers** used to be powered [with Ruby and Middleman](https://github.com/emberjs/guides)? After plenty of contributions by many different community members, the app [has been modernised with an Ember tech stack](https://blog.emberjs.com/2018/05/25/the-emberjs-times-issue-48.html) to make it much easier for new contributors to work on the [project](https://github.com/ember-learn/guides-source)!

You might not have noticed the switch of tech stacks under the hood of the Ember Guides, and this is exactly how it should be! Want to learn more about how this was done? Be sure to read [Chris Manson's (@mansona)](https://github.com/mansona) latest [blog post](https://simplabs.com/blog/2020/03/27/porting-a-site-to-ember-with-percy/) about the process behind the seamless **Emberification of the Guides** (and the Ember website): it highlights how the visual regression testing tool [Percy](https://percy.io/) can help developers to bootstrap their efforts of porting a website to a new tech stack without breaking it.

You can read the full blog post [on the simplabs blog](https://simplabs.com/blog/2020/03/27/porting-a-site-to-ember-with-percy/).

---

## [Feeder Corona Dashboard 📰](https://feeder.co/reader/corona)

[Feeder](https://feeder.co/) built a COVID-19 aka **Corona Dashboard** in Ember, but for incoming news on the subject such as news media, government updates, research, social media, and travel advice. Check it out here: [feeder.co/reader/corona](https://feeder.co/reader/corona). 

Feeder is a news manager that tracks any online source you choose and bundles it into an easy-to-digest reading experience. The Corona Dashboard is built using Feeder's regular stack that ingests public RSS feeds and filters on a set of keywords. 

[Erik Rothoff Andersson (@erkie)](https://github.com/erkie) shares Feeder's experience with Ember with the Times:

> We started at Ember 2.10 and are now at Ember 3.14 and counting. It's so cool that the upgrades help to educate us how to become better developers. One striking thing is the a11y template linting rules that promote best practices. I had no idea about those things, but now I do! So thanks Ember.
>
> We've used pods since the start, but I got tripped up by all the tabs in Atom being called `component.js`, or `template.hbs`, which is why I developed the [Atom addon Ember tabs](https://atom.io/packages/ember-tabs). Was really happy when scrolling through ember-cli docs one day and found it mentioned [here](https://ember-cli.com/user-guide/#atom). So far I haven't kept up to date with the module unification, but it seems promising!
>
> TypeScript is the single biggest innovation in many years, and the ember-cli-typescript addon has been an amazing bridge. It's great to see that a lot of [Ember internal packages](https://github.com/emberjs/ember.js/tree/master/packages/@ember/-internals/glimmer) are now written entirely with TypeScript. 
>
> We render a lot of components on screen, so performance has been something we've invested a lot of time in. Switching to Glimmer components for high volume components we were able to reduce render times on hotspots by ~20%.

We enjoyed learning about Ember at Feeder and hope that you find the Corona Dashboard useful in these hectic times! 💛

---

## [tracked-built-ins v1 released! 💯](https://twitter.com/pzuraq/status/1240069037364633600)

At his EmberConf talk, "[Autotracking: Reactivity and State in Modern Ember](https://www.youtube.com/watch?v=HDBSU2HCLbU&list=PL4eq2DPpyBbkC03mdzlyej6tcbEqrZK8N)," [Chris Garrett (@pzuraq)](https://github.com/pzuraq) announced a new addon to help you track JavaScript's built-in classes.

With [tracked-built-ins](https://github.com/pzuraq/tracked-built-ins), your app can automatically react to changes in Objects, Arrays, Maps, Sets, WeakMaps, and WeakSets.

```javascript
import { tracked } from 'tracked-built-ins';

class Foo {
  @tracked value = 123;

  obj = tracked({});
  arr = tracked([]);
  map = tracked(Map);
  set = tracked(Set);
  weakMap = tracked(WeakMap);
  weakSet = tracked(WeakSet);
}
```

[Give it a try today](https://github.com/pzuraq/tracked-built-ins)! Your feedback will help improve autotracking in Ember. 💞

---

## [Ember autostash modifier 💾](https://twitter.com/nullvoxpopuli/status/1239325059656933376)

New modifier alert 🚨! [Preston Sego (@NullVoxPopuli)](https://github.com/NullVoxPopuli) has created [`ember-autostash-modifier`](https://github.com/NullVoxPopuli/ember-autostash-modifier) that stashes changes, binds those changes to a key, and restores those changes based on that key!

This modifier is useful for chat apps, where you'd want to persist incomplete messages on a contact's page while the user navigates between other contacts before finishing and submitting a message, or where you want to bind component data based on the URL. Check out this [demo](https://nullvoxpopuli.github.io/ember-autostash-modifier/1) of the modifier in action.

It's so nice to see the eco-system of Ember modifiers continue to grow 😀, we can't wait to see what the awesome folks in the Ember community come up with next!

---

## [Blog post: ember-template-lint rule from addon ✅](https://mehulkar.com/blog/2020/03/ember-template-lint-rule-from-addon/)

[Mehul Kar (@mehulkar)](https://github.com/mehulkar) wrote a [blog post](https://mehulkar.com/blog/2020/03/ember-template-lint-rule-from-addon/) on how to ship and use an [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) rule from an addon.

First up, the [Plugin API](https://github.com/ember-template-lint/ember-template-lint/blob/v2.4.1/docs/plugins.md) provides an overview on the `ember-template-lint` plugin system including where to add them or it can be the root of the repo as the blog shows. In order to test your template lint rule, the blog post outlines how to use [Jest](https://jestjs.io/) and configure it to run tests in the `node-tests` directory. Finally, in order to use the plugin in an app we would need to add the plugin and enable the lint rule in `.template-lintrc.js` (like the example below).

```js
module.exports = {
  plugins: ['my-addon-name/template-lint-plugin'],
  rules: {
    'the-rule-name': true
  }
}
```

To follow the detailed steps please read the [full blog post](https://mehulkar.com/blog/2020/03/ember-template-lint-rule-from-addon/) and have a [powerful way to encourage a certain way of programing](https://twitter.com/mehulkar/status/1240020900960825345) today!

---

## [Achieve consistent decorator positioning with a new eslint plugin ↕️](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position)

Ever had to **put up with** inconsistent decorator positions in pull requests, because there wasn't a lint rule for that?
<span style="font-style: italic;">Now</span> there is! 🎉 [eslint-plugin-decorator-position](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position)
provides some configuration with some recommended defaults to help your project achieve that last bit of consistency.

---

## [Stand alone EmberConf 2020 videos are out 🎥](https://www.youtube.com/playlist?list=PL4eq2DPpyBbkC03mdzlyej6tcbEqrZK8N)

If you missed part or all of the ✨✨**amazing EmberConf 2020** ✨✨, now's your chance to catch up on all the great talks à la carte! While the live streams have been available since the days they were streamed, now you can watch them as stand alone talks.

If you want to re-live some of the best moments, or watch them for the first time, you can find the complete library of videos 📼 available for your viewing pleasure on [YouTube](https://www.youtube.com/playlist?list=PL4eq2DPpyBbkC03mdzlyej6tcbEqrZK8N). Be sure not to miss the BonusConf sessions which are included in this list!

Again, don't forget to check out all the related resources for the talks in [the conference notes](https://twitter.com/alex_diliberto/status/1240449629612892161) by [Alex DiLiberto (@alexdiliberto)](https://github.com/alexdiliberto).

Also one more reminder! We have a request for those of you who attended **EmberConf 2020**:

> Tell us about someone new that you got to chat with at the virtual conf!

Let us know about your answer to this question either by [tweeting us via Twitter](https://twitter.com/embertimes) using the **hashtag #EmberConFriends** or as a message on the [Ember Discord](https://discordapp.com/invite/emberjs) in the **#support-ember-times** channel. We will raffle an exclusive **EmberConf retro sticker set** among all story writers by April 6, 2020. We're looking forward to hear from you and happy catching up on virtual EmberConf!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/btecu" target="gh-user">@btecu</a>, <a href="https://github.com/kratiahuja" target="gh-user">@kratiahuja</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/kturney" target="gh-user">@kturney</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/leondmello" target="gh-user">@leondmello</a>, <a href="https://github.com/zapalagrzegorz" target="gh-user">@zapalagrzegorz</a>, <a href="https://github.com/monitron" target="gh-user">@monitron</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/jtappa" target="gh-user">@jtappa</a>, <a href="https://github.com/brentzc" target="gh-user">@brentzc</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/NullVoxPopuli" target="gh-user">@NullVoxPopuli</a>, <a href="https://github.com/rajasegar" target="gh-user">@rajasegar</a> and <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a> for their contributions to Ember and related repositories! 💖</p>

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

Anne-Greeth van Herwijnen, Preston Sego, Jared Galanis, Isaac Lee, Chris Ng, Jessica Jordan, Erik Rothoff, Amy Lam and the Learning Team
