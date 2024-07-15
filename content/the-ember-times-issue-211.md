---
title: The Ember Times - Issue No. 211
authors:
  - anne-greeth-schot-van-herwijnen # replace with real authors from the author folder (add yourself if you're not there)
date: 2024-07-04T00:00:00.000Z
tags:
  - newsletter
  - '2024'
---

👋 Emberistas! 🐹

EmberConf 2024 videos 🗽, Ember Europe Q2 🇪🇺, Games with Ember 👾, New addons & libraries 🎊, Updated addons 🌟, Security fix for ember-cli-polyfill-io 🔓, read up on template tag & named blocks in the guides 🧱
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

---

## [🗽 EmberConf 2024 videos](https://youtube.com/playlist?list=PL4eq2DPpyBbljzNStMjnoDA0NZM61yCEq&si=cWNIFAnxg_Z9pbYW)

We enjoyed an energizing EmberConf on the 31st of May in New York City. If you missed the conference or want to watch specific talks back, you can check out the [playlist on YouTube](https://youtube.com/playlist?list=PL4eq2DPpyBbljzNStMjnoDA0NZM61yCEq&si=cWNIFAnxg_Z9pbYW).

---

## [Live Coding at EmberConf 2024: WarpDrive Legacy Relationships Support](https://www.youtube.com/watch?v=YagBVhaq_NM)

Join us as we dive into the exciting world of[WarpDrive previously known as EmberData live](https://www.youtube.com/watch?v=YagBVhaq_NM) from New York City! Despite the hustle and bustle, we're tackling some critical updates and sharing our progress with you. Apologies for the background noise, we couldn't find a quiet spot, but the energy of the city is all part of the experience. Stay tuned for insights, discussions, and a peek into our development process in this vibrant atmosphere!

---

## [🇪🇺 Ember Europe remote event - 18th of July](https://www.meetup.com/ember-europe/events/301437560/)

Join a group of enthousiastic Emberistas for an informative and inspiring fully remote [meet-up](https://www.meetup.com/ember-europe/events/301437560/). On the 18th of July, Ember Europe will host their [Q2 event](https://www.meetup.com/ember-europe/events/301437560/). On the program are [Chris Manson (@mansona)](https://github.com/mansona) & [Marco Otte-Witte](https://github.com/marcoow) to inform you about the Embroider Initiative and what's next, after that [Alex (@void-mAlex)](https://github.com/void-mAlex) will tell us about `<template>template</template>🪞`s and to close it off there is the mingling part of the event!

---

## [👾 Games built with Ember](https://www.linkedin.com/games/)

Are you looking for a few minutes to distract yourself from all work challenges, check out the [LinkedIn games](https://www.linkedin.com/games/). They are built with Ember and are fun to solve!

---

## 🎊 New addons & libraries

- [ember-flash-notifications](https://ember-flash-notifications.vercel.app/) is a new addon that brings flash messages using the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API). This means it works across all latest browsers, but might not work for older devices or browsers.
- [ember-awesome-icons] is just like the previous addon created by [Alexei Panov (@alexeipanov)](https://github.com/alexeipanov) and allows you to easily create components for free FontAwesome icons. This way you don't need to include all the icons in your bundle. Just the icons you need, fast as HTML and highly customizable with CSS, and SVG powers!
- [ember-phosphor-icons](https://github.com/IgnaceMaes/ember-phosphor-icons) created by [Ignace Maes (@IgnaceMaes)](https://github.com/IgnaceMaes) to give you access to the [phosphor icon set](https://phosphoricons.com). The addon has TypeScript & Glint support. When used with Embroider it gives you all the benefits of tree shaking to keep your bundle size small.
- [form-data-utils](https://github.com/NullVoxPopuli/form-data-utils) is now its own thing and has been extracted from `ember-primitives`. It's a utility function for extracting the FormData as an object from the native `<form>` element, allowing more ergonomic usage of default forms and fields. You can check out the example in the [documentation](https://ember-primitives.pages.dev/6-utils/data-from-event.md).
- [ember-codemod-remove-inject-as-service](https://github.com/ijlee2/ember-codemod-remove-inject-as-service) created by [Isaac Lee (@ijlee2)](https://github.com/ijlee2) helps you to standardize how you inject service. Replace `inject` with `service`, `!` with `declare` in TS files, and remove `private` and `readonly` keywords in TS files. You can use `service` since Ember 4.1 and `inject` is planned to be deprecated in Ember v6.
- [ember-engines-router-service](https://github.com/villander/ember-engines-router-service) created by [Michael Villander (@villander)](https://github.com/villander) provides an API for authoring a Router service when using `ember-engines`. You will have the full `RouterService` API inside each engine. That means you can use APIs such as `transitionTo` and `isActive`, plus the new "external routing" APIs such as `transitionToExternal` and `isActiveExternal` which help link `externalRoutes` together.
- [ember-addon-v2-scanner](https://github.com/IgnaceMaes/ember-addon-v2-scanner) created by [Ignace Maes (@IgnaceMaes)](https://github.com/IgnaceMaes) is a CLI tool to scan your Ember project for addons that have a v2 version available. Just run `npx ember-addon-v2-scanner@latest` and check out the results!

---

## 🌟 Addon updates

- [ember-qunit v8.1.0](https://github.com/emberjs/ember-qunit/releases/tag/v8.1.0) now ships with a `theme` config option that allows you to use the `qunit-theme-ember` to give your tests a real EmberJS look.
- [ember-a11y-refocus v4.1.0](https://github.com/ember-a11y/ember-a11y-refocus) provides some dependency updates, updated documentation (in the README), and a new flag called `excludeAllQueryParams`, an optional flag that will allow you to opt completely out of route evaluation (for transition announcements or focus management) if query params are involved. The new feature will allow some older apps to use the addon while they refactor code to allow them to simply use the addon w/o any customizations.
- [ember-can v5](https://github.com/minutebase/ember-can/releases/tag/v5.0.0) converts the addon to v2 and it now supports TypeScript!
- [ember-string v4](https://github.com/emberjs/ember-string/releases/tag/v4.0.0-%40ember%2Fstring) converts the addon to v2.
- [ember-intl v7.x](https://github.com/ember-intl/ember-intl/releases/tag/v7.0.0) has entered a new era with its 7.x series. This new major brings you a minimized API (to improve onboarding and project maintainability), provides native types for improved TS and Glint support and adds better documentation. To upgrade check out the [migration guide](https://ember-intl.github.io/ember-intl/docs/migration/v7).
- To support your developer experience you can use the `Ember Language Server` VSCode extention. The latest update supports template-lint configs in `mjs` format. Are you still using `lifeart.vscode-ember-unstable` then you can migrate to `embertooling.vscode-ember`.
- [NullVoxPopuli/eslint-configs v4](https://github.com/NullVoxPopuli/eslint-configs) are [Preston Sego (@NullVoxPopuli)](https://github.com/NullVoxPopuli)'s preferred ESLint configs for all their projects. They use only overrides so that they're easy to maintain and update. Version 4 now supports `gjs` and `gts` out of the box.
- [ember-sortable v5.1.0](https://github.com/adopted-ember-addons/ember-sortable/releases/tag/v5.1.0-ember-sortable) adds the feature that allows you to create a sortable list that works with a grid. Items can be moved up, down, right, or left within the same list.

---

## [📦 EmberData v5.3.x](https://github.com/emberjs/data/releases/tag/v5.3.4)

We are happy to inform you about this massive improvement that shipped to EmberData. Since v5.3.4:

- It ships fully as v2-addons,
- All packages ship native types,
- Mirror packages are now available for 5.3,
- A new cli tool has been added to help you quickly configure your 4.x project for typescript,
- `ember-inflector` and `@ember/string` are no longer project dependencies.

Dive into the details of the [latest release](https://github.com/emberjs/data/releases/tag/v5.3.4) now.

---

## [🔓 Security fix for ember-cli-polyfill-io](https://github.com/alexlafroscia/ember-cli-polyfill-io/pull/10)

Delivering polyfills from `polyfill.io` has turned into a service provider attack against users of your apps. An update to [ember-cli-polyfill](https://github.com/alexlafroscia/ember-cli-polyfill-io) will be released to fix this. You can also right now change your config by changing the `src` for `polyfill-io config` in `ember-cli-build.js` to `https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js`. Also make sure you need this dependency, removing it removes the risk completely!

---

## [📚 Documentation on Template Tag Format](https://guides.emberjs.com/release/components/template-tag-format/)

The [Ember guides](https://guides.emberjs.com/) now include extensive information about our [`<template>` tag format](https://guides.emberjs.com/release/components/template-tag-format/). The template tag format is a powerful, new way to write components in Ember. It's a single-file format that combines the component's JavaScript and Glimmer template code. The `<template>` tag keeps a clear separation between the template language and the JavaScript around it. If you want to know more about this, check out the [documentation](https://guides.emberjs.com/release/components/template-tag-format/).

---

## [🧱 Documentation on Named Blocks](https://guides.emberjs.com/release/components/block-content/#toc_named-blocks)

If you want to yield content to different spots in the same component, you can use named blocks. However, our guides were lacking information on how to do this. Thanks to [Shirin Boomi (@Shishouille)](https://github.com/Shishouille) you can now learn how to use it and make the most of `yield`ing information throughout your components.

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/achambers" rel="noopener noreferrer" target="_blank">Aaron Chambers (@achambers)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/scotttball" rel="noopener noreferrer" target="_blank">Scott Ball (@scotttball)</a>, <a href="https://github.com/davidtaylorhq" rel="noopener noreferrer" target="_blank">David Taylor (@davidtaylorhq)</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/gitKrystan" rel="noopener noreferrer" target="_blank">Krystan HuffMenne (@gitKrystan)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/IgnaceMaes" rel="noopener noreferrer" target="_blank">Ignace Maes (@IgnaceMaes)</a>, <a href="https://github.com/Techn1x" rel="noopener noreferrer" target="_blank">Brad Overton (@Techn1x)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/richgt" rel="noopener noreferrer" target="_blank">Rich Glazerman (@richgt)</a>, <a href="https://github.com/Herover" rel="noopener noreferrer" target="_blank">Leonora (@Herover)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/raspberri05" rel="noopener noreferrer" target="_blank">Vedant Singhania (@raspberri05)</a>, <a href="https://github.com/Rashmi-N-Sahoo" rel="noopener noreferrer" target="_blank">@Rashmi-N-Sahoo</a>, <a href="https://github.com/ArunPragadeeswar007" rel="noopener noreferrer" target="_blank">Arun Pragadeeswar (@ArunPragadeeswar007)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/wozny1989" rel="noopener noreferrer" target="_blank">Adam Woźny (@wozny1989)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/MehulKChaudhari" rel="noopener noreferrer" target="_blank">Mehul Kiran Chaudhari (@MehulKChaudhari)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth Schot-van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/Baltazore" rel="noopener noreferrer" target="_blank">Kirill Shaplyko (@Baltazore)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/cabarney" rel="noopener noreferrer" target="_blank">Adam Barney (@cabarney)</a>, <a href="https://github.com/patricklx" rel="noopener noreferrer" target="_blank">Patrick Pircher (@patricklx)</a>, <a href="https://github.com/deanylev" rel="noopener noreferrer" target="_blank">Dean Levinson (@deanylev)</a>, <a href="https://github.com/mkszepp" rel="noopener noreferrer" target="_blank">Markus Sanin (@mkszepp)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/LucasHill" rel="noopener noreferrer" target="_blank">Lucas Hill (@LucasHill)</a>, <a href="https://github.com/BlueCutOfficial" rel="noopener noreferrer" target="_blank">Marine Dunstetter (@BlueCutOfficial)</a>, and <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a> for their contributions to Ember and related repositories! 💖</p>

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

the crowd and the Learning Team
