---
title: The Ember Times - Issue No. 206
authors:
  - anne-greeth-schot-van-herwijnen
  - isaac-lee
  - chris-ng
  - melanie-sumner
  - jared-galanis
date: 2023-08-04T00:00:00.000Z
tags:
  - newsletter
  - '2023'
---

👋 Emberistas! 🐹

Polaris Update 🚀,
EmberConf 2023 🎙️,
EmberFest 2023 🇪🇸,
Open Core Team Meetings 💻 ,
a modern way to write codemods 🤖,
a codemod to help introduce Glint ✨,
Ember Inspector in Safari 🔎,
release of prettier-plugin-ember-template-tag 🔥,
make VS Code ready for EmberJS 📦,
Europe Ember.js Video 🇪🇺,
start contributing today 🐹

---

## [🚀 Update: The Polaris Edition of Ember](https://github.com/orgs/emberjs/projects/9)

We’re trying something new with this edition of Ember-- using a GitHub Project! [The Polaris Project](https://github.com/orgs/emberjs/projects/9) is not only a great way to keep track of the active updates to the work being done for this edition, but also look for ways that you can participate!

While we are still working to define success for this edition (stay tuned for that!), using standard project management has been an improved way to give more transparency to our work and our hypothesis is that it will also increase community member participation as a result.

The Polaris edition intends not only to continue deprecating Ember features that now have native web equivalents, but also re-work the router to better suit the needs of the modern web application. We’ll also see a new, long-requested framework feature come to life: a CSS solution! Yet one more thing you won’t have to worry about (unless you want to!).

Anyway, check out the [Polaris Project](https://github.com/orgs/emberjs/projects/9) board for yourself, and join the open meetings (look for the [EmberJS Spec Meeting](https://discord.gg/VzKEzH8Q?event=1137029571976372284) event on Discord) if you want to get involved! If we all participate, we can make these ideas happen.

---

## [🎙️ EmberConf 2023](https://www.emberconf.com)

Two weeks ago, on the 20th and 21st of July about **150 Emberistas** met in Portland (OR) for the first in-person EmberConf since COVID-19. It was amazing to see so many people getting to know each other and sharing knowledge about our framework, EmberJS. Hopefully, you’ve enjoyed the live stream with the [great line-up of speakers](https://www.emberconf.com/speakers). If you have missed it or want to watch something back, the [playlist with all talks is released on YouTube](https://www.youtube.com/playlist?list=PL4eq2DPpyBbn9eFgZIxo23_q9sAtqGtvt). On the [Discord server](https://discord.gg/wks7HMrG), each talk got its own channel, in case you want to get in contact about that talk specifically. Let's get **inspired**!

---

## [🇪🇸 EmberFest 2023](https://emberfest.eu)

After a great EmberConf, next up is [EmberFest](https://emberfest.eu) on the 21st and 22nd of September in **Madrid, Spain**. EmberFest is the European Community Ember Conference. If you’re looking for updates on the latest and greatest in Ember and Glimmer this is the place to be. Do you want to get an impression of EmberFest, check out the [Paris highlight video of last year's EmberFest](https://youtu.be/hvg35gS1Xjo). You can attend this conference in person and remotely, so get your [tickets](https://emberfest.eu/?tito=%2Femberfest%2Femberfest-2023%2Fen%2Fregistrations%2Fnew%3Fprefill%3D%257B%257D) **now**! Ed Faulkner ([@ef4](https://github.com/ef4)) and Mel Sumner ([@melsumner](https://github.com/melsumner)) are already confirmed speakers.

---

## 💻 Open Core Team Meetings

<!--alex ignore easy-->

Starting last week, the EmberJS team meetings are open to the public on our [Discord server](https://discord.gg/emberjs). This will increase the **visibility** and **transparency** around the process and progress within the framework and community. It will also allow you to work together more easily, provide input and get up to date. Check out the events in the [Discord server](https://discord.gg/emberjs) for the time (in your timezone) and dates.

- Monday - [Learning team](https://discord.gg/jRGtH96JfS?event=1135596295210410024)
- Tuesday - [Tooling team (combination of CLI & Embroider)](https://discord.gg/jRGtH96JfS?event=1136304805673971793)
- Thursday - [Spec meeting](https://discord.gg/jRGtH96JfS?event=1137029571976372284)
- Friday - [RFC review](https://discord.gg/jRGtH96JfS?event=1134855271823441960), [EmberData meeting](https://discord.gg/jRGtH96JfS?event=1134855268480602113)

---

## [🤖 A modern way to write codemods](https://github.com/ijlee2/codemod-utils)

A few EmberConf talks brought up the need for more codemods. Isaac Lee ([@ijlee2](https://github.com/ijlee2)) has been working on [`@codemod-utils`](https://github.com/ijlee2/codemod-utils), a set of tools and conventions for writing codemods, and a CLI (command-line interface) to help you get started:

```sh
npx @codemod-utils/cli --name <your-codemod-name>
```

<!-- alex ignore simple -->

`@codemod-utils` encourages taking small and simple steps, as they are key to writing codemods that can be maintained and extended. Isaac, in the talk "[In 1 Year](https://crunchingnumbers.live/2023/07/20/in-1-year)," explained:

> My hope is, we can lower the [entry] barrier enough that, if a person can write a function in Node.js, then they can start writing a codemod.

To learn how to write a codemod, check out [the main tutorial](https://github.com/ijlee2/codemod-utils#tutorials) and [the codemods written with `@codemod-utils`](https://github.com/ijlee2/codemod-utils#codemods-written-with-codemod-utils). If you want to learn from Isaac on how to utilize codemods to bring your projects up to date, check out Isaac's [amazing talk at EmberConf 2023](https://www.youtube.com/watch?v=qXq67sQxdCU&list=PL4eq2DPpyBbn9eFgZIxo23_q9sAtqGtvt&index=10)!

---

## [✨ Codemod to help introduce Glint](https://github.com/ijlee2/ember-codemod-args-to-signature)

To introduce Glint, you will need to write the [signature](https://typed-ember.gitbook.io/glint/environments/ember/component-signatures) and [template registry](https://typed-ember.gitbook.io/glint/environments/ember/template-registry) for each component. This can be an error-prone, onerous task for large projects.

You can automate the required change by running [`ember-codemod-args-to-signature`](https://github.com/ijlee2/ember-codemod-args-to-signature).

```sh
# Apps
npx ember-codemod-args-to-signature --src app/components

# V1 addons
npx ember-codemod-args-to-signature --src addon/components

# V2 addons
npx ember-codemod-args-to-signature --src src/components
```

The codemod will partially fill out signatures and template registries. It will also fix related code so that your project is consistent in syntax and follows Ember's naming conventions. If you've previously taken the effort to add `Args` to your components (the former way of defining the signature), the codemod will use what you already know to create `Signature`.

---

## [🔎 EmberJS Inspector in Safari](https://apps.apple.com/us/app/emberjs-inspector/id6451499514?mt=12)

[Robbie Wagner (@RobbieTheWagner)](https://github.com/robbiethewagner) released our trusted EmberJS inspector to the [Mac App Store](https://apps.apple.com/us/app/emberjs-inspector/id6451499514?mt=12), so you can now also use it in **Safari**. If you run into bugs or have improvements, please reach out on [GitHub](https://github.com/emberjs/ember-inspector). You can contribute to the [Ember Inspector](https://github.com/emberjs/ember-inspector) because it's an Ember app!

---

## [🔥 1.0.0 Release of prettier-plugin-ember-template-tag](https://github.com/gitKrystan/prettier-plugin-ember-template-tag/releases/tag/v1.0.0)

[Krystan HuffMenne (@gitKrystan)](https://github.com/gitKrystan) released 1.0.0 of [prettier-plugin-ember-template-tag](https://github.com/gitKrystan/prettier-plugin-ember-template-tag) which supports [Prettier 3.0.0](https://prettier.io/blog/2023/07/05/3.0.0.html). The project, prettier-plugin-ember-template-tag, is a prettier plugin for formatting [Ember template tags](https://rfcs.emberjs.com/id/0779-first-class-component-templates/) for both `.gjs` and `.gts` files.

If you are interested in contributing please check out the [GitHub of this project](https://github.com/gitKrystan/prettier-plugin-ember-template-tag/issues)!

---

## [📦 VS Code EmberJS Extension Pack](https://marketplace.visualstudio.com/items?itemName=EmberTooling.emberjs)

Is Visual Studio Code your editor of choice, [Liam Potter (@evoactivity)](https://github.com/evoactivity) released a new version of the EmberJS Extension Pack.

This Extension Pack includes the following extensions:

- [Glimmer Syntax for VS Code](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-glimmer-syntax)
- [Stable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

You can checkout the [extension pack on GitHub](https://github.com/ember-tooling/vscode-ember-pack). Time to make VS Code ready for EmberJS with one extension!

---

## [🇪🇺 Ember Europe Video](https://www.youtube.com/watch?v=0kzm3ahGK84&list=PLD-8Z0-VnQIAIU6hJoE4H27DjzpcWkMks)

If you didn't get a chance to watch the live-streamed Europe Ember.js meetup event from June 2023, you can now watch the ✨ awesome ✨ [recorded video](https://www.youtube.com/watch?v=0kzm3ahGK84&list=PLD-8Z0-VnQIAIU6hJoE4H27DjzpcWkMks).

The talk features a really cool talk by [Richard Livsey (@rlivsey)](https://github.com/rlivsey) who shares the journey of building Intercom's Inbox! 🚀

Many thanks to the organizers and members of Europe Ember.js meetup for continuing to bring great Ember content!

---

## 🐹 Contributing to the Framework and the Community

If you are looking for a way to start contributing to EmberJS, check out the new [#new-contributors channel on Discord](https://discord.com/channels/480462759797063690/1131610462207873025). This channel is made for everyone who is looking for something to contribute to, and some guidance on how to get started. Does working on code feel a bit too overwhelming you can always reach out to the [EmberTimes editors](https://discord.com/channels/480462759797063690/485450546887786506) to start writing for the [EmberTimes on GitHub](https://github.com/ember-learn/ember-blog/).

> Ember works best when we **all** participate - Mel Sumner

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank  <a href="https://github.com/halfbyte" rel="noopener noreferrer" target="_blank">Jan Krutisch (@halfbyte)</a>, <a href="https://github.com/leepfrog" rel="noopener noreferrer" target="_blank">Andy Tran (@leepfrog)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/robinborst95" rel="noopener noreferrer" target="_blank">Robin Borst (@robinborst95)</a>, <a href="https://github.com/patricklx" rel="noopener noreferrer" target="_blank">Patrick Pircher (@patricklx)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/RobbieTheWagner" rel="noopener noreferrer" target="_blank">Robbie Wagner (@RobbieTheWagner)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/boris-petrov" rel="noopener noreferrer" target="_blank">Boris Petrov (@boris-petrov)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/VincentMolinie" rel="noopener noreferrer" target="_blank">Vincent Molinié (@VincentMolinie)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/gitKrystan" rel="noopener noreferrer" target="_blank">Krystan HuffMenne (@gitKrystan)</a>, <a href="https://github.com/lifeart" rel="noopener noreferrer" target="_blank">Alex Kanunnikov (@lifeart)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/a13o" rel="noopener noreferrer" target="_blank">Andrew Pellerano (@a13o)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/jrjohnson" rel="noopener noreferrer" target="_blank">Jon Johnson (@jrjohnson)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/deanmarano" rel="noopener noreferrer" target="_blank">Dean Marano (@deanmarano)</a>, <a href="https://github.com/gabrielcsapo" rel="noopener noreferrer" target="_blank">Gabriel Csapo (@gabrielcsapo)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/survesh-vrl" rel="noopener noreferrer" target="_blank">Survesh (@survesh-vrl)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/wycats" rel="noopener noreferrer" target="_blank">Yehuda Katz (@wycats)</a>, <a href="https://github.com/dhochbaum-dcp" rel="noopener noreferrer" target="_blank">@dhochbaum-dcp</a>, and <a href="https://github.com/nickschot" rel="noopener noreferrer" target="_blank">Nick Schot (@nickschot)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [🤓 Connect with us](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Anne-Greeth Schot-van Herwijnen, Isaac Lee, Melanie Sumner, Chris Ng, Jared Galanis and the Learning Team
