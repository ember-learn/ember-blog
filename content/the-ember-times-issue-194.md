---
title: The Ember Times - Issue No. 194
authors:
  - chris-ng
  - bryan-mishkin
  - jen-weber
  - jared-galanis
date: 2022-01-09T00:00:00.000Z
tags:
  - newsletter
  - '2022'
---

👋 Emberistas! 🐹

Ember 4.0 and 4.1 released 🐹,
Ember Ignite virtual mini conference 🔥,
Ember at LinkedIn Eng 2022 🎉,
Why Ember at Gavant 💛,
ember-template-lint 4.0 released 🧹,
ember-focus-trap 1.0 released 🛳,
New Polyfill for Plain Functions as Modifiers ✨,
Ember Templates in Glimmer Cheatsheet 📚,
New Episodes of Whiskey, Web and Whatnot 🎙

---

## [Ember 4.0 and 4.1 released 🐹](https://blog.emberjs.com/ember-4-0-released)

Ember released version 4.0 of Ember.js, Ember Data, and Ember CLI. Ember's 4.0 release focuses the framework by removing long-deprecated APIs and support for legacy platforms.

While [Ember Octane](https://emberjs.com/editions/octane/) APIs have been the default for new applications since Ember 3.15, the framework has continued to support "Classic" framework features in accordance with its semantic versioning commitment. Ember 4.0 takes a step forward and drops already-deprecated classic APIs, however the foundational [EmberComponent](https://api.emberjs.com/ember/release/classes/Component) and [EmberObject](https://api.emberjs.com/ember/release/classes/EmberObject)/[computed](https://api.emberjs.com/ember/release/classes/@ember%2Fobject%2Fcomputed/methods) APIs are not removed in this release.

Notable changes in the Ember 4.0 release includes:

- Dropping Internet Explorer (IE) [browser support](https://emberjs.com/browser-support/)
- [ember-auto-import](https://github.com/ef4/ember-auto-import) is a required dependency
- `Ember.assign` is deprecated in Ember 4.0 and will be removed in Ember 5.0
- No new public APIs, only bug fixes and removal of previously [deprecated public APIs](https://deprecations.emberjs.com/v3.x/)
- Ember Data also removed previously [deprecated public APIs](https://deprecations.emberjs.com/ember-data/v3.x/)

For more details on the changes in Ember.js 4.0, please review the [Ember.js 4.0.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.0.0).

Want to hear about an added bonus? Hot 🔥 on the heels of 4.0, Ember 4.1 was also released this week and it introduced 3 features `service` export, `refresh` method from `RouterService`, and a `cached` decorator. It also introduced the deprecation of `AutoLocation`. Ember Data and Ember CLI did not introduce notable changes. See more about the 4.1 release [at](https://blog.emberjs.com/ember-4-1-released/).

---

## [Ember Ignite virtual mini conference 🔥](https://www.eventbrite.com/e/ember-ignite-tickets-232969998537)

Ember Ignite is an international virtual mini conference scheduled for Wednesday, February 23rd!

Many teams talk about the challenges of hiring and training Ember developers, and this conference tackles those challenges directly.
Attendees will level up their training and teaching skills in order to build strong teams.

Tickets are donation-based with a suggested amount of $30 USD. Proceeds will go towards creating an open source curriculum for teaching Ember to junior developers and taking a live cohort of 10 junior engineers (with no experience) and teaching them Ember so well, that they'll go toe-to-toe against mid-level UI engineer candidates. This effort is led by [Jai Bhagat](https://twitter.com/ChaiWithJai).

[Register here](https://www.eventbrite.com/e/ember-ignite-tickets-232969998537) today!

---

## [Ember at LinkedIn Eng 2022 🎉](https://twitter.com/AxleHellfire/status/1478186542954733568)

If you're interested in hearing about how Ember is being used at LinkedIn in the LTS UI Infra team, you should check out the recent tweet thread 🧵 by [Jordan Hawker (@elwayman02)](https://github.com/elwayman02).

Jordan calls out many of the impressive achievements that the team has been able to deliver thus far, in part due to the power of Ember 🔥, and what is in store for 2022, including Embroider builds in production, completing Octane migrations, leveraging yarn workspaces and rolling out SSR!

You may want to check out [the thread](https://twitter.com/AxleHellfire/status/1478186542954733568) for all of these reasons, but an added bonus is that this team at LinkedIn is hiring so take a look if you're in the market for a new position!

---

[Why Ember at Gavant 💛](https://www.gavant.com/library/ember-as-a-frontend-framework/)

There's a nice article by [Bill Dami (@billdami)](https://github.com/billdami) at Gavant describing why they chose Ember for their project and how it has benefited them! 👏

Topics covered are the benefits of using a "batteries included" framework like Ember, how Ember contributes to developer happiness and some great detail on what made Ember the right fit for their project.

It's always inspiring to read about how Ember benefits teams around the world and this article does provide some detailed and excellent points on the matter that really demonstrate how joyful it can be to develop with the right tools.

Check out the post [here](https://www.gavant.com/library/ember-as-a-frontend-framework/) today!

---

## [ember-template-lint 4.0.0 released 🧹](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v4.0.0)

[Version 4.0](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v4.0.0) has been released for [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint), the linter for best practices with Ember handlebars templates. Check out the [migration guide](https://github.com/ember-template-lint/ember-template-lint/blob/v4.0.0/docs/migration/v4.md).

The key changes include:

- Converting the entire package to ESM
- Adding over a dozen rules to the `recommended` config
- Removing deprecated rules, options, and behaviors
- Dropping support for old versions of Node
- Enforcing stricter default behavior for a few rules
- Enforcing stricter validation of configuration files and rule tests
- Enforcing a strictly-defined public Node API

---

## [ember-focus-trap 1.0 released 🛳,](https://github.com/josemarluedke/ember-focus-trap/releases/tag/v1.0.0)

[Version v1.0.0](https://github.com/josemarluedke/ember-focus-trap/releases/tag/v1.0.0) of `ember-focus-trap` was released recently by [Josemar Luedke (@josemarluedke)](https://github.com/josemarluedke) bringing some upgrades (to Ember 4!), enhancements (moving to v2 addon format and a monorepo setup) and bug fixes (removal of redundant code for return focus node).

---

[New Polyfill for Plain Functions as Modifiers ✨](https://twitter.com/nullvoxpopuli/status/1479971937707245568?s=20)

There's a cool 😎 new polyfill for [plain functions as modifiers](https://github.com/NullVoxPopuli/ember-functions-as-modifiers-polyfill) by [NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) you might want to check out!


---

## [Ember Templates in Glimmer Cheatsheet 📚](https://twitter.com/nullvoxpopuli/status/1474037335583080449)

There's more content available at the great ✨ Glimmer Cheatsheet ✨ [NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) has put together!

The cheatsheet has expanded its coverage of how templates work in Ember.js along with some super nice examples of the syntax and notation.

If you haven't had a chance to check it out yet, go ahead and have a look, [here](https://cheatsheet.glimmer.nullvoxpopuli.com/docs/templates)!

---

## [New Episodes of Whiskey, Web and Whatnot 🎙](https://twitter.com/shipshapecode/status/1468948885104115725)

There's a few new episodes of the Whiskey, Web and Whatnot that cover Ember related topics and include Ember Learning Core Team members! 🔥

First up is an [awesome episode](https://www.whiskeywebandwhatnot.fm/ember-vs-react-jamstack-and-holes-in-the-hiring-process-with-chris-manson/) that features [Chris Manson (@mansona)](https://github.com/mansona). Creators [Robert Wagner (@rwwagner90)](https://github.com/rwwagner90) and [Chuck Carpenter (@chuckcarpenter)](https://github.com/chuckcarpenter) of Ship Shape sat down with Chris and discussed a wide range of topics, including how Chris was introduced to Ember, Husky in open source, what Chris is working on now, `ember-cli-addon-docs`, the complexities of hiring developers and more.

In [another episode](https://www.whiskeywebandwhatnot.fm/robbies-origin-story-learning-to-code-learning-to-hire-and-taking-the-entrepreneurial-leap/), the gang behind Whiskey Web and Whatnot also had a chance to chat with each other and talk about the trajectory of Robert's career and how he was introduced to Ember.js, how Robert's fondness for Ember has grown over time through the strength of the community 💛🧡💜💚💙, how he got involved with the Ember Learning Team and a whole lot more!

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a>, <a href="https://github.com/ddzz" rel="noopener noreferrer" target="_blank">Darius D. (@ddzz)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/lolmaus" rel="noopener noreferrer" target="_blank">Andrey Mikhaylov (lolmaus) (@lolmaus)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, and <a href="https://github.com/AmilKey" rel="noopener noreferrer" target="_blank">Ivan (@AmilKey)</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Bryan Mishkin, Jen Weber, Jared Galanis and the Learning Team
