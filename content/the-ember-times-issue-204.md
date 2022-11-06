---
title: The Ember Times - Issue No. 204
authors:
  - jared-galanis
  - anne-greeth-schot-van-herwijnen
  - bryan-mishkin
  - chris-ng
date: 2022-11-06T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹

Ember Security Releases Blog Post 🔒,
Ember 4.8 released 🐹,
prettier-plugin-ember-template-tag released 🙌,
more-confetti-addon released 🥳,
Dive into modern `@ember-data` 🏗️,
Learn how to overwrite the default transition after authentication 🗝️,
Deprecation of Ember array prototype extensions 🧹,
Watch the movies 🎞,
Evolving Ember’s Major Version Process ⭕,
Announcing the Official TypeScript Types Public Preview 🔥,
Ember Resources Release 🎉

---

## [Ember Security Releases Blog Post 🔒](https://blog.emberjs.com/ember-4-8-1-released)

Ember.js 3.24.7, 3.28.10, 4.4.4, 4.8.1, and 4.9.0-beta.3 were recently released to patch a security vulnerability for apps that pass untrusted input as paths to `EmberObject.setProperties` or `EmberObject.set`, or the corresponding standalone functions `setProperties` or `set` and may get surprising results that, in combination with other application bugs, could lead to cross-site scripting vulnerabilities.

Head on over to the [blog post](https://blog.emberjs.com/ember-4-8-1-released) to read more about the security patch.

---

## [Ember 4.8 released 🐹](https://blog.emberjs.com/ember-4-8-released)

Ember 4.8 was recently released!

This release included 1 new feature for Ember.js that provides an opt-in preview of Ember's official TypesScript types, one bug fix for Ember.js, adds a few new features for EmberCLI and 4 bug fixes for Ember CLI.

Ember Data 4.8 was also recently released and includes a number of bug fixes and several new features including preventing backtracking render errors, adding `identifier` data to the `Reference` public API, and enhanced logging options for debugging. The release details can be found [here](https://github.com/emberjs/data/releases/tag/v4.8.2).

Head on over to the [4.8 release blog post](https://blog.emberjs.com/ember-4-8-released) and give it a read today!

---

## [prettier-plugin-ember-template-tag released 🙌](https://twitter.com/HM_Krystan/status/1588313200919216129)

<!-- alex ignore just-->

[Krystan HuffMenne (@gitKrystan)](https://github.com/gitKrystan) just released `prettier-plugin-ember-template-tag` for prettifying your `<template>` tags in both `.gjs` and `.gts` files!

Go check out the [repo](https://github.com/gitKrystan/prettier-plugin-ember-template-tag) today.

---

## [more-confetti-addon released 🥳](https://twitter.com/agvanherwijnen/status/1588260038107226112?s=46&t=2KcBfrqJichoraVvI3uWSA)

[Anne-Greeth Schot-van Herwijnen (@MinThaMie)](https://github.com/MinThaMie) announced the release of `more-confetti-addon`, an addon that provides a helper to call the [canvas-confetti package](https://www.npmjs.com/package/canvas-confetti) in your Ember templates!

Check out the [repo](https://github.com/MinThaMie/more-confetti-addon#readme) and the [docs page](https://more-ember-confetti.netlify.app/) today!

---

## [🏗️ Dive into modern `@ember-data` - part 1](https://blog.lux.name/2-dive-into-ember-data-1/)

In a series of blog posts, [Lukas Kohler (@luxferrsum)](https://github.com/luxferresum) talks about the future of `@ember-data` and how to use it from the perspective of someone that didn’t develop it. In the [first blog post](https://blog.lux.name/2-dive-into-ember-data-1/), [Lukas](https://github.com/luxferresum) explains how to build your **own** `@ember-data/model` and use the new `@ember-data` APIs: `Schema` and `RecordData`.

---

<!-- alex ignore simple -->

## [🗝️ Ember Simple Auth - how to overwrite the default transition after authentication](https://sabin.dev/ember-simple-auth-how-to-overwrite-the-default-transition-after-authentication)

<!-- alex ignore simple -->

This blog post by [Sabin Hertanu (@herzzanu)](https://github.com/herzzanu) will cover how to protect your routes, get rid of Ember Simple Auth mixins and how you can overwrite the default transitions defined in Ember Simple Auth. If you are still using the Ember Simple Auth mixins follow the steps in the [blog post](https://sabin.dev/ember-simple-auth-how-to-overwrite-the-default-transition-after-authentication) to migrate away from them and get rid of **all** deprecation warnings.

---

## [Deprecation of Ember array prototype extensions 🧹](https://rfcs.emberjs.com/id/0848-deprecate-array-prototype-extensions/)

<!-- alex ignore Hang -->

A long-awaited [RFC](https://rfcs.emberjs.com/id/0848-deprecate-array-prototype-extensions/) written by [Hang Li (@smilland)](https://github.com/smilland) to deprecate Ember array prototype extensions was recently [merged](https://github.com/emberjs/rfcs/pull/848). Prototype extensions now come [disabled](https://github.com/ember-cli/ember-cli/pull/10017) by default as of ember-cli [v4.9.0-beta.0](https://github.com/ember-cli/ember-cli/releases/tag/v4.9.0-beta.0).

[Santhosh Venkata Rama Siva Thanakala Gani (@tgvrssanthosh)](https://github.com/tgvrssanthosh) has implemented an auto-fixer for the [ember/no-array-prototype-extensions](https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-array-prototype-extensions.md) lint rule which works for all Ember array prototype extensions that do not involve reactivity in [v11.1.0](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v11.1.0) of [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember). Try enabling the rule in your codebase and running the autofixer. There's also an auto-fixable [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) version of [no-array-prototype-extensions](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-array-prototype-extensions.md) to try out.

---

## [🎞 EmberFest videos are live!](https://youtube.com/playlist?list=PLN4SpDLOSVkTA8pYgcgKlo5AsQnZ0fiWV)

Last September a group of Emberistas gathered in Paris to enjoy the [latest edition of EmberFest](https://emberfest.eu). The talks of this awesome hybrid event are now live on [YouTube](https://youtube.com/playlist?list=PLN4SpDLOSVkTA8pYgcgKlo5AsQnZ0fiWV). So if you missed a talk because of timezone struggles, want to watch your own amazing performance or are interested in the talks in general, go check [**them**](https://youtube.com/playlist?list=PLN4SpDLOSVkTA8pYgcgKlo5AsQnZ0fiWV) out right now!

---

## [Evolving Ember’s Major Version Process ⭕](https://blog.emberjs.com/evolving-embers-major-version-process)

Starting in the current 4.0 cycle, Ember major versions will be 18 months long, running from the `.0` release up to the `.12` release, and then starting a new major version as outlined in [RFC 0830](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process/). This means that you can expect 5.0 in May 2023, 6.0 in November 2024, 7.0 in May 2026, and so on.

While this is a significant shift in how we think about _major_ versions in Ember, there are a lot of things which remain unchanged:

- **Our approach to minor releases is not changing.** We will keep releasing on the same steady cadence. Features will be in, or not, based on whether they’re ready.
- **Our approach to Long Term Support releases is not changing.** That means that every major version will have 3 LTS releases over its life: the `.4`, `.8`, and `.12` releases.
- **Our approach to Editions is not changing.** Similar to what we did with Octane, we will release Polaris and any future edition in a minor release, when it is fully ready.
- **Our approach to breaking changes is not changing.** We will not be making more breaking changes because of this policy, and we will not make breaking changes without clear migration paths. We have also committed not to introduce new deprecations targeting the next major after the `.10` release of the current major.

This change enables Ember to have a predictable cadence for major versions similar to what we have had for minor versions. Read more about this change in the full [blog post](https://blog.emberjs.com/evolving-embers-major-version-process).

---

## [Announcing the Official TypeScript Types Public Preview 🔥](https://blog.emberjs.com/announcing-official-typescript-types-public-preview/)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) wrote a [post](https://blog.emberjs.com/announcing-official-typescript-types-public-preview/) on how Ember is shipping a public preview of the official TypeScript support for the framework itself. Anyone using TypeScript with Ember 4.8.0 Beta 2 or later can opt into using these preview types by removing the corresponding `@types` packages and adding the following import in your `types/<your app>/index.d.ts` file:

```js
import 'ember-source/types';
import 'ember-source/types/preview';
```

Note there is a known issue when using the `@types/ember-data` packages which are not compatible with these types because they assume the presence of many of the Ember Classic types that were removed in this migration. If you are using Ember Data with TypeScript, you will need to wait for a future update. The key difference between the stable and preview types is: our stable types must be generated from Ember's own TypeScript source code, while the preview types are hand-written type definitions. All public API remains supported however there will only be minimal support for Ember Classic APIs around class definitions (see [RFC 800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan/) for more details).

---

## [Ember Resources Release 🎉](https://twitter.com/nullvoxpopuli/status/1568694246521319424)

[Thomas Gossmann (@gossi)](https://github.com/gossi) together with [NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) released a new version of [ember-resources](https://github.com/NullVoxPopuli/ember-resources), an addon that implements the [Resource pattern](https://ember-resources.pages.dev/#what-is-a-resource). The new release starting in [v5.4.0](https://github.com/NullVoxPopuli/ember-resources/releases/tag/v5.4.0) adds the "owner" (app/engine instance) to function-based resources so now resources can access services, or whatever else is in the registry.

```js
const myResource = resource(({ on, owner }) => {
  let foo = owner.lookup('service:foo');

  return () => foo.someValue;
});
```

Try it out today by [installing](https://ember-resources.pages.dev/#installation) it in your app!

---

## [Ember QUnit 6.0.0 Release 🚀](https://github.com/emberjs/ember-qunit/releases/tag/v6.0.0)

[Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) along with [Bert De Block (@bertdeblock)](https://github.com/bertdeblock) and [Francesco Novy (@mydea)](https://github.com/mydea) released ember-qunit v6.0.0, which adds full support for Ember v4, including [ember-auto-import](https://github.com/ef4/ember-auto-import) v2, and drops support for Ember versions before v3.24, and fixes bugs around focus related tests.

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Jared Galanis, Anne-Greeth Schot-van Herwijnen, Bryan Mishkin, Chris Ng and the Learning Team
