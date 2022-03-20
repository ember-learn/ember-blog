---
title: The Ember Times - Issue No. 198
authors:
  - jared-galanis
  - jen-weber
  - chris-ng
  - sergeastapov
date: 2022-03-20T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Blog post: Making your dynamic Ember components work with Embroider 💥,

---

## [🗳️ 1. Fill out the Ember Community Survey by April 7th!](https://emberjs.com/survey/2022/)
  
The annual [Ember Community Survey](https://emberjs.com/survey/2022/) helps guide direction in the Ember ecosystem.
Data informs project prioritization, it sparks new ideas, and reveals opportunities for growth.
The Ember core teams would love to hear from you!
  
The survey is primarily intended for developers who use the Ember JavaScript framework, either for work or personal use, although any developer is welcome to fill out this survey. The survey should take approximately 15 minutes to complete in full, though all questions are optional.
  
[Learn more about the survey and fill it out](https://emberjs.com/survey/2022/) by April 7th!

---

## [📽️ 2. Hybrid Ember.js Europe Meetup, featuring Ember Data](https://twitter.com/embereurope)

March 31st is the first Ember.js Meetup event!
There will be an AMA (ask-me-anything) with Chris Thoburn and Scott Newcomer from the Ember Data Core team
  

For more details, visit [Ember Europe on Twitter](https://twitter.com/embereurope)
or [RSVP on Meetup](https://www.meetup.com/de-DE/ember-europe/events/283625821/).

---

## [📝 3. Upcoming free technical writing workshop](https://forms.gle/AvQFjjrJjozHBr529)

What are the elements of great technical articles or examples? What are some tips for writing for a global audience? How do you find a place to begin when there are so many different directions you could go? How should your writing style change depending on where it will be published? Join the Ember Learning team for this workshop! It will be half instruction, half hands-on activities.
  
If there is enough interest, the workshop will be offered in two sessions:

- April 23rd - aimed at Western Hemisphere time zone participants
- April 30th - aimed at Eastern Hemisphere time zone participants
  
To receive announcements about specific times and event details, please [fill out this form](https://forms.gle/AvQFjjrJjozHBr529).

---

## [🐹 4. EmberConf on April 19th](https://2022.emberconf.com/)

EmberConf registration is open! Join the community remotely on April 19th for an [amazing lineup of talks](https://2022.emberconf.com/).
  
---

## [Blog post: Making your dynamic Ember components work with Embroider 💥](https://simplabs.com/blog/2022/03/17/dynamic-components-embroider/)

[Nick Schot (@nickschot)](https://github.com/nickschot) wrote a blog post on [making your dynamic Ember components work with Embroider](https://simplabs.com/blog/2022/03/17/dynamic-components-embroider/). [Embroider](https://github.com/embroider-build/embroider) is the future build system for Ember apps which unlocks features like splitting code per route by statically analyzing your codebase and dependencies. Dynamic components are components that are resolved at run-time rather than hardcoding the component to use using the [component helper](https://api.emberjs.com/ember/release/classes/Ember.Templates.helpers/methods/component?anchor=component) (e.g. `{{component "my-component"}}`).

Dynamic components are not by default compatible with Embroider's route-splitting feature since Embroider needs to be able to statically resolve components at build time. In the blog Nick discusses how they migrated [ember-promise-modals](https://github.com/simplabs/ember-promise-modals), an addon that relies on dynamic components, to be compatible with Embroider. They first used the `packageRules` as a compatibility feature to tell Embroider that an argument in the addon represents a component name.

To fully leverage Embroider’s code splitting, they used the `ensure-safe-component` helper that [Embroider provides](https://github.com/embroider-build/embroider/blob/main/REPLACING-COMPONENT-HELPER.md) to turn a component class into a component definition that can be invoked in the template. This way the app code can be updated to actually import the component class so that Embroider can statically resolve this component.

---

## Ember Addon Roundup 🌎

We’ve had several addons across the Ember ecosystem converted to v2 format recently!

- [Luke Melia (@lukemelia)](https://github.com/lukemelia) released `ember-keyboard` [8.0.0](https://github.com/adopted-ember-addons/ember-keyboard/releases/tag/v8.0.0)
- [Miguel Andrade (@miguelcobain)](https://github.com/miguelcobain) released `ember-css-transitions` [4.0.0](https://github.com/peec/ember-css-transitions/releases/tag/v4.0.0)
- [Edward Faulkner (@ef4)](https://github.com/ef4) released [ember-animated v1.0.0](https://github.com/ember-animation/ember-animated/releases/tag/v1.0.0)
- [Edward Faulkner (@ef4)](https://github.com/ef4) released [ember-animated-tools v1.0.0](https://github.com/ember-animation/ember-animated-tools/releases/tag/v1.0.0)

There is number of benefits to users of addons published in v2 format, some of which include:

- faster builds and faster NPM installs
- "zero-config import from NPM — both static and dynamic" as a first-class feature that works for both third-party libraries and Ember addons
- support for arbitrary code splitting
- tree-shaking of unused modules, components, helpers, etc. from the app and all addons

To read more about v2 Addon Format, please check out [RFC 507](https://github.com/emberjs/rfcs/blob/master/text/0507-embroider-v2-package-format.md).

If you'd like to help ecosystem move forward and convert more addons to v2 format, you may follow great guide [Porting an Addon to V2](https://github.com/embroider-build/embroider/blob/main/PORTING-ADDONS-TO-V2.md) made by [Edward Faulkner (@ef4)](https://github.com/ef4) or try [ember-addon-migrator](https://github.com/NullVoxPopuli/ember-addon-migrator) by [NullVoxPopuli](https://github.com/NullVoxPopuli).

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

Jared Galanis, Jen Weber, Chris Ng, Sergey Astapov and the Learning Team
