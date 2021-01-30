---
title: The Ember Times - Issue No. 172
authors:
  - chris-ng
  - amy-lam
  - abhilash-lr
  - jen-weber
  - jared-galanis
date: 2021-01-29T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Get your EmberConf talk proposals in ASAP!
Then try TypeScript in your Ember app today with a video tutorial 🔤,
Storybook for Ember tutorial 🎨,
Building a Router component for Glimmer.js 🧭,
Building Prototypes with Ember 🐹
  
---

## [Remote EmberConf talk proposals due this Sunday! 🗣](https://emberconf.com/become-a-speaker)

Developers around the world are invited to [submit talk proposals for EmberConf 2021](https://emberconf.com/become-a-speaker)! The deadline for submissions is **Sunday, January 31st at 11:59pm ET**.

Is there something cool you learned recently that you would like to share? Do you want to build up your speaking and teaching skills? Did you build something you are proud of?

This is your chance to share it! Talks are pre-recorded and the conference is fully remote.

If you have questions or need some help, visit the [#emberconf](https://discord.com/channels/480462759797063690/480502413917421570) channel on the [Community Discord](https://emberjs.com/community/). Good luck!

---

## [Video tutorials: TypeScript basics with Ember.js 🔤](https://twitter.com/knownasilya/status/1349571457983127561)

[Ilya Radchenko (@knownasilya)](https://github.com/knownasilya) did a couple of videos on getting started with [TypeScript](https://www.typescriptlang.org/) for your Ember.js applications.

The [first video](https://www.youtube.com/watch?v=G7QWvhMXMSc) goes through setting up [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript) which installs a variety of addons which provides blueprints, types, and the TypeScript dependency itself. It also adds the `tsconfig.json` file which [provides compiler options](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) to TypeScript.

The [second video](https://www.youtube.com/watch?v=FOrCbXW223E) does an in-depth example of using TypeScript in Ember such as making a route, controller, and when using actions and decorators. We also briefly go through where to add global type declarations in your project and other tips for working with TypeScript in your Ember application today.

<insert youtube here? need to see if possible in substack>

---

## [Storybook for Ember tutorial 🎨](https://www.learnstorybook.com/intro-to-storybook/ember/en/get-started/)

[Storybook](https://storybook.js.org/) has taken the world of **design systems** by storm! What is Storybook? Storybook helps you build UI components that are isolated from business logic and context of your app. Sort of a "style guide as a service." Check out the new [Storybook for Ember tutorial](https://www.learnstorybook.com/intro-to-storybook/ember/en/get-started/) for guidance on setting up Storybook in your Ember app.

[Thomas Gossmann (@gossi)](https://github.com/gossi) spearheaded the Ember + Storybook effort and wrote a complementary blog post, [Ember with Storybook – Behind the Scenes](https://gos.si/blog/ember-with-storybook-behind-the-scenes/). The post touches on a few ideas:

- How Storybook and Ember are independent build pipelines
- Options for writing Storybook docs in Markdown
- Different strategies for Storybook setup depending on your app architecture (e.g. monorepo vs. multirepo).

But wait, there's more - you can use @gossi's open source Ember design system, hokulea, as a reference!

- [GitHub Repo](https://github.com/hokulea/hokulea)
- [Storybook](https://hokulea.netlify.app/)

Already using Storybook with Ember, or going to try it out in your application? Be sure to check out the [official Storybook docs](https://storybook.js.org/docs/ember/get-started/introduction) and contribute to the Ember section if you can to further flesh it out!

<insert tweet <https://twitter.com/unistyler/status/1343853626901590016> in substack>

---

## [Building a Router component for Glimmer.js 🧭](https://dev.to/rajasegar/building-a-router-component-for-glimmer-js-52bk)

[Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar) wrote a blog on building routing components for apps built using Glimmer.js. Unlike Ember, which has built-in routing, Glimmer is only a rendering engine. Rajasegar's blog walks through how routing can be achieved for Glimmer apps. He talks about this Routing system by building a Route Registry, Route component, Link component, and the Router Component.

As a bonus he also mentions about how you can achieve code-splitting JS bundles and lazy loading components.

Read more about [Building a Router component for Glimmer.js](https://dev.to/rajasegar/building-a-router-component-for-glimmer-js-52bk) if you have been looking for routers for your Glimmer apps!

---

## [Building prototypes with Ember 🐹](https://twitter.com/simplabs/status/1338871240342327296)

If you have not seen the recent [simplabs](https://github.com/simplabs) blog post by [Florian Pichler (@pichfl)](https://github.com/pichfl) on Building prototypes with Ember.js, you may want to give it a read.

Florian's post covers the approach they took in building [ember-hotspots](https://github.com/simplabs/ember-hotspots), an addon that can enable the experience of building prototypes that many design oriented software solutions provide, but in the framework we all know and love, Ember.js! 🔥

The post dives into the details of how to create hotspots and efficiently handle images with preloading, and even discusses a little bit of the Broccoli work involved.

If you're interested, head on over to the [simplabs blog](https://simplabs.com/blog/2020/12/15/building-prototypes-with-emberjs-and-ember-hotspots/) and check out more about `ember-hotspots`!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/genisd" rel="noopener noreferrer" target="_blank">Daniel (@genisd)</a>, <a href="https://github.com/dwickern" rel="noopener noreferrer" target="_blank">Derek Wickern (@dwickern)</a>, <a href="https://github.com/dcyriller" rel="noopener noreferrer" target="_blank">Cyrille David (@dcyriller)</a>, <a href="https://github.com/Alonski" rel="noopener noreferrer" target="_blank">Alon Bukai (@Alonski)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/smfoote" rel="noopener noreferrer" target="_blank">Steven (@smfoote)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/chadhietala" rel="noopener noreferrer" target="_blank">Chad Hietala (@chadhietala)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/abhilashlr" rel="noopener noreferrer" target="_blank">abhilashlr (@abhilashlr)</a>, <a href="https://github.com/lukemelia" rel="noopener noreferrer" target="_blank">Luke Melia (@lukemelia)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/BnitoBzh" rel="noopener noreferrer" target="_blank">@BnitoBzh</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/abadri" rel="noopener noreferrer" target="_blank">Abilash Badri (@abadri)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/chiragpat" rel="noopener noreferrer" target="_blank">Chirag Patel (@chiragpat)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/srsgores" rel="noopener noreferrer" target="_blank">Sean Goresht (@srsgores)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/lifeart" rel="noopener noreferrer" target="_blank">Alex Kanunnikov (@lifeart)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/jamescdavis" rel="noopener noreferrer" target="_blank">James C. Davis (@jamescdavis)</a>, <a href="https://github.com/czikarito" rel="noopener noreferrer" target="_blank">Pawel Kuwik (@czikarito)</a>, <a href="https://github.com/Turbo87" rel="noopener noreferrer" target="_blank">Tobias Bieniek (@Turbo87)</a>, <a href="https://github.com/jderr-mx" rel="noopener noreferrer" target="_blank">John Derr (@jderr-mx)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/davecombs" rel="noopener noreferrer" target="_blank">Dave Combs (@davecombs)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/sukima" rel="noopener noreferrer" target="_blank">Devin Weaver (@sukima)</a>, and <a href="https://github.com/jelhan" rel="noopener noreferrer" target="_blank">Jeldrik Hanschke (@jelhan)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>, now on Substack! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Amy Lam, Abhilash L R, Jen Weber, Jared Galanis and the Learning Team
