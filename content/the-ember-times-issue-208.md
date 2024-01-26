---
title: The Ember Times - Issue No. 208
authors:
  - anne-greeth-schot-van-herwijnen
date: 2024-01-26T00:00:00.000Z
tags:
  - newsletter
  - '2024'
---

👋 Welcome to 2024, Emberistas! 🐹

EmberFest 2023 videos 🇪🇸, Ember Europe meet-up video 🇪🇺, Glint Deep Dives 🤿,  Practicle Blogposts 📝, Addons since 1st of January
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## Welcome to 2024!

It's been an irregular year when it comes to this amazing blog/newsletter. This edition does its best to wrap up some of the important resources released in the last quarter of 2023. It will not cover all the releases of the addons we usually cover. Starting this February we'll try to send out the Ember Times bi-weekly again and we could use your help. If you are interested in writing for the Ember Times, please reach out on [Discord (#support-ember-times)](https://discord.com/channels/480462759797063690/485450546887786506)!

If you are interested in keeping up with all that is going on within the Ember Core teams, you can join the meetings on our [Discord server](https://discord.gg/emberjs). Since the last time we published this list, two things changed. The RFC meeting happens twice on Friday to make it more accessible for people in/around the EU timezone. With [Polaris](https://emberjs.com/editions/polaris/) coming up, on Monday you can join this meeting to see how you can contribute to making Polaris a reality.
- Monday - Learning team, **Polaris shepperding meeting**
- Tuesday - Tooling team (combination of CLI & Embroider)
- Thursday - Spec meeting
- Friday - RFC review **(twice)**, EmberData meeting

---

## [🇪🇸 EmberFest 2023 videos](https://www.youtube.com/@emberfest)

On the 21st and 22nd of September about 150 Emberistas got together for [EmberFest 2023](https://emberfest.eu) in Madrid. A great variety of talks is now available on [YouTube](https://www.youtube.com/@emberfest). Check out all the amazing speakers, both those on the [schedule](https://emberfest.eu/schedule/day/1/), as well as a surprise [Q&A](https://www.youtube.com/watch?v=oY289Gk6NcY) with [Ed Faulkner (@ef4)](https://github.com/ef4) and the [lightning talks](https://www.youtube.com/watch?v=VVvRxAOBCVQ).

---

## [🇪🇺 Ember Europe: Update on Embroider initiative](https://www.youtube.com/watch?v=gPMzrQzryZI)

[Chris Manson (@mansona)](https://github.com/mansona) provided an update on the [Embroider Initiative](https://mainmatter.com/embroider-initiative/)'s progress during his talk at Ember Europe’s final 2023 Meetup.

He addressed the [Vite](https://vitejs.dev) support and demonstrated an Ember app on Vite, explaining the importance of using ESM-compatible dependencies. He also discussed the challenges faced during the integration process, such as add-ons not being fully converted to ESM.

Chris introduced what will be in the [next major release of Embroider](https://github.com/embroider-build/embroider/pull/1701) and encouraged users to remain optimistic despite encountering issues due to cache busting by showcasing debugging techniques and the advantages of Vite's network tab.

---

## [🤿 Glint Deep Dives](https://www.youtube.com/playlist?list=PLelyiwKWHHApkoeXQjwKPHPAHgKXZyl3t)

Time to start binging, [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) and [Dan Freeman (@dfreeman)](https://github.com/dfreeman) have released their 6th, and final, screencast on Glint. The last three episodes cover [how to turn Handlebars into TypeScript](https://www.youtube.com/watch?v=9RjaREOmFAA&list=PLelyiwKWHHApkoeXQjwKPHPAHgKXZyl3t&index=4&pp=iAQB), [actually invoking TypeScript in the Glint pipeline](https://www.youtube.com/watch?v=oqIAyLbp6Rc&list=PLelyiwKWHHApkoeXQjwKPHPAHgKXZyl3t&index=5&pp=iAQB), and [language server shenanigans](https://www.youtube.com/watch?v=VUXROd82Ljk&list=PLelyiwKWHHApkoeXQjwKPHPAHgKXZyl3t&index=6&pp=iAQB). Enjoy the dynamic duo, while they cover all you need to know and more about Glint.

---

## 📝 Crispy blog posts to help you along

- [Context leaking in EmberJS tests](https://dev.to/michalbryxi/context-leaking-in-emberjs-tests-52nm) by [Michal Bryxí (MichalBryxi)](https://github.com/MichalBryxi) explains why tests might be floppy when it comes to state and what you can do about it.
- [What to use instead of `@ember/string`](https://dev.to/nullvoxpopuli/what-to-use-instead-of-emberstring-34mo) by [Preston Sego (@NullVoxPopuli)](https://github.com/NullVoxPopuli) shows you how to migrate from `@ember/string` to [`change-case`](https://www.npmjs.com/package/change-case)
- [Setting up Tailwind, the easy way](https://dev.to/nullvoxpopuli/setting-up-tailwind-the-easy-way-5843) by [Preston Sego (@NullVoxPopuli)](https://github.com/NullVoxPopuli) helps you to set up Tailwind in 8 steps, or if you are on node 18 with `npx ember-apply tailwind`.
- [Troubleshooting CI test failures with Jenkins](https://hackernoon.com/troubleshooting-ci-test-failures-in-ember-js-with-jenkins-a-journey-of-discoveries) by [Vasanth Kumar (@vasind)](https://github.com/vasind) demystifies the problem where errors only show up in CI and how to learn from that.

---

## 🐹 Addon releases since the 1st of January

- [ember-style-modifier v4](https://github.com/jelhan/ember-style-modifier/releases/tag/v4.0.0). This addon provides a {{style}} element modifier to set the element's style. This allows to set custom CSS of an element without requiring a Content Security Policy style-src-attr: "unsafe-inline". The breaking changes for v4 are dropping support for node versions 14 and 16 and all Ember versions below 4.12.
- [ember-eui v8.0.1](https://github.com/prysmex/ember-eui/releases/tag/v8.0.1) is now a v2 addon with glint signatures, single file components, and pnpm. This addon provides Ember JS components for the Elastic design system.
- [ember-page-title v8.2.0](https://github.com/ember-cli/ember-page-title/releases/tag/v8.2.0) now ships its own types! This addon provides a helper for changing the title of the page you're on.
- [pretty-ts-errors v0.5.3](https://github.com/yoavbls/pretty-ts-errors/releases/tag/v0.5.3). This VSCode extension makes TypeScript errors prettier and human-readable. The latest version added support for Ember template tag components in `.gjs` and `.gts` files reported by Glint.
- [vsc-ember-syntax v1.0.27]( https://github.com/lifeart/vsc-ember-syntax/releases/tag/v1.0.27) The latest release of the "Glimmer Templates Syntax for VS Code" extension added support for template tags in markdown files. This means you can now use `gjs` and `gts` for code fence blocks and get proper syntax highlighting in your editor.

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/ellnix" rel="noopener noreferrer" target="_blank">ellnix (@ellnix)</a>, <a href="https://github.com/emberjs-rfcs-bot" rel="noopener noreferrer" target="_blank">@emberjs-rfcs-bot</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/wycats" rel="noopener noreferrer" target="_blank">Yehuda Katz (@wycats)</a>, <a href="https://github.com/achambers" rel="noopener noreferrer" target="_blank">Aaron Chambers (@achambers)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/patricklx" rel="noopener noreferrer" target="_blank">Patrick Pircher (@patricklx)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/Gaurav0" rel="noopener noreferrer" target="_blank">Gaurav Munjal (@Gaurav0)</a>, <a href="https://github.com/awesomerobot" rel="noopener noreferrer" target="_blank">Kris (@awesomerobot)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/IgnaceMaes" rel="noopener noreferrer" target="_blank">Ignace Maes (@IgnaceMaes)</a>, <a href="https://github.com/gitKrystan" rel="noopener noreferrer" target="_blank">Krystan HuffMenne (@gitKrystan)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/bartocc" rel="noopener noreferrer" target="_blank">Julien Palmas (@bartocc)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/jelhan" rel="noopener noreferrer" target="_blank">Jeldrik Hanschke (@jelhan)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/lolmaus" rel="noopener noreferrer" target="_blank">Andrey Mikhaylov (lolmaus) (@lolmaus)</a>, <a href="https://github.com/aklkv" rel="noopener noreferrer" target="_blank">Alexey Kulakov (@aklkv)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/andreyfel" rel="noopener noreferrer" target="_blank">Andrey Fel (@andreyfel)</a>, <a href="https://github.com/evoactivity" rel="noopener noreferrer" target="_blank">Liam Potter (@evoactivity)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Kristen (@pzuraq)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/callpri" rel="noopener noreferrer" target="_blank">@callpri</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, <a href="https://github.com/AmauryD" rel="noopener noreferrer" target="_blank">Amaury (@AmauryD)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/jahrock" rel="noopener noreferrer" target="_blank">Jah Rock (@jahrock)</a>, <a href="https://github.com/lifeart" rel="noopener noreferrer" target="_blank">Alex Kanunnikov (@lifeart)</a>, <a href="https://github.com/Mikek2252" rel="noopener noreferrer" target="_blank">Michael Kerr (@Mikek2252)</a>, and <a href="https://github.com/RobbieTheWagner" rel="noopener noreferrer" target="_blank">Robbie Wagner (@RobbieTheWagner)</a> for their contributions to Ember and related repositories! 💖</p>

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

Anne-Greeth Schot-van Herwijnen, and the Learning Team
