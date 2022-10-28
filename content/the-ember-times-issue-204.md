---
title: The Ember Times - Issue No. 204
authors:
  - jared-galanis
  - anne-greeth-schot-van-herwijnen
  - bryan-mishkin
  - chris-ng
date: 2022-09-04T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹

Deprecation of Ember array prototype extensions 🧹,
Watch the movies 🎞,
Evolving Ember’s Major Version Process ⭕
Announcing the Official TypeScript Types Public Preview 🔥
Ember Resources Release 🎉

---

## [Deprecation of Ember array prototype extensions 🧹](https://rfcs.emberjs.com/id/0848-deprecate-array-prototype-extensions/)

<!-- alex ignore Hang -->
A long-awaited [RFC](https://rfcs.emberjs.com/id/0848-deprecate-array-prototype-extensions/) written by [Hang Li (@smilland)](https://github.com/smilland) to deprecate Ember array prototype extensions was recently [merged](https://github.com/emberjs/rfcs/pull/848). Prototype extensions now come [disabled](https://github.com/ember-cli/ember-cli/pull/10017) by default as of ember-cli [v4.9.0-beta.0](https://github.com/ember-cli/ember-cli/releases/tag/v4.9.0-beta.0).

[Santhosh Venkata Rama Siva Thanakala Gani (@tgvrssanthosh)](https://github.com/tgvrssanthosh) has implemented an auto-fixer for the [ember/no-array-prototype-extensions](https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-array-prototype-extensions.md) lint rule which works for all Ember array prototype extensions that do not involve reactivity in [v11.1.0](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v11.1.0) of [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember). Try enabling the rule in your codebase and running the autofixer. There's also an auto-fixable [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) version of [no-array-prototype-extensions](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-array-prototype-extensions.md) to try out.

---

## [🎞 EmberFest videos are live!](https://youtube.com/playlist?list=PLN4SpDLOSVkTA8pYgcgKlo5AsQnZ0fiWV)

Last September a group of Emberistas gathered in Paris to enjoy the [latest edition of EmberFest](https://emberfest.eu). The talks of this awesome hybrid event are now live on [YouTube](https://youtube.com/playlist?list=PLN4SpDLOSVkTA8pYgcgKlo5AsQnZ0fiWV). So if you missed a talk because of timezone struggles, want to watch back your own amazing performance or are interested in the talks in general, go check [**them**](https://youtube.com/playlist?list=PLN4SpDLOSVkTA8pYgcgKlo5AsQnZ0fiWV) out right now!

---

## [Evolving Ember’s Major Version Process ⭕](https://blog.emberjs.com/evolving-embers-major-version-process)

Starting in the current 4.0 cycle, Ember major versions will be 18 months long, running from the `.0` release up to the `.12` release, and then starting a new major version as outlined in [RFC 0830](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process/). This means that you can expect 5.0 in May 2023, 6.0 in November 2024, 7.0 in May 2026, and so on.

While this is a significant shift in how we think about *major* versions in Ember, there are a lot of things which remain unchanged:

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

## [🐹 4. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 5. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

## [🐹 7. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 8. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

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

Jared Galanis, Anne-Greeth Schot-van Herwijnen, Bryan Mishkin, Chris Ng, the crowd and the Learning Team
