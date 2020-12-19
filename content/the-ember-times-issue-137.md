---
title: The Ember Times - Issue No. 137
authors:
  - chris-ng
  - isaac-lee
  - jared-galanis
  - jessica-jordan
date: 2020-02-28T00:00:00.000Z
tags:
  - newsletter
  - '2020'
---


Bonjou Emberistas! 🐹

Learn about how autotracking works 👣,
try out the latest ember-template-lint v2 ✅,
Ember website redesign 🔥,
2020 Ember Community Survey reminder 📝, and
beta test ember-cli 3.17 🧪!

<!-- READMORE -->

---

## [How autotracking works 👣](https://www.pzuraq.com/how-autotracking-works/)

[Chris Garrett (@pzuraq)](https://github.com/pzuraq) wrote a new blog post in his **autotracking blog series**, previously he wrote on [what is reactivity](https://www.pzuraq.com/what-is-reactivity/) and on [what makes a good reactive system](https://www.pzuraq.com/what-makes-a-good-reactive-system/).

In [How Autotracking Works](https://www.pzuraq.com/how-autotracking-works/), Chris discusses how autotracking fulfils the **reactivity design principles** exploring how it's implemented and why. In the blog, we go through memoization, referential equality, revisions, tags, and how they all work together to provide autotracking for Ember.

Memoization, a technique where we cache the previous arguments that a function was called with along with the result they produced in order to minimize excess work, is the foundation of autotracking. However, due to how equality works in JavaScript, we need to make use of referential equality to perform a faster deep-equal where we assume that if we're passed the same object as before then nothing has changed.

Autotracking revolves around a single number, the global revision number. This number keeps track of the version of state that the application was in. However, we don't want our memoized functions to rerun whenever the state changes, because it could have changed for a completely unrelated state. We only want to rerun whenever the tracked state within the function has changed. For that, we need tags which represent state within the application so our function only reruns when it should and unrelated changes will not affect it.

Autotracking is one of the **core mechanisms** that powers **Ember.js** and the **Glimmer VM**. It’s one of the most exciting [features to come out of Ember Octane](https://guides.emberjs.com/release/in-depth-topics/autotracking-in-depth/) so try it out today in your Ember app and see if it helps you write faster, less error prone, and easier to understand code. Read more about [autotracking in the full blog post](https://www.pzuraq.com/how-autotracking-works/)!

---

## [Ember website redesign 🔥](https://emberjs.com/)

Maybe you haven't noticed, but the **primary website for Ember** has been **redesigned** and it is **now live**! The redesign brings a fresh new look to the main piece of real estate for Ember on the internet and features a clean and modern look that all of us in the community can be proud of.

This redesign has been a long time in the making and has involved a lot of work from the people from the Ember Core teams and the Ember community. Big shout outs to everyone involved in the effort, especially [Mel Sumner (@MelSumner)](https://github.com/MelSumner) and [Chris Manson (@mansona)](https://github.com/mansona)! 🎉🎉🎉 It's super exciting to see this modern vision of the website come to life.

If you are enjoying the new website and would like to help with making all the Ember web properties have a consistent design, please let the Ember Learning Team know in the **#dev-ember-learning** channel on [the Discord chat](https://discordapp.com/invite/emberjs).

If you notice anything wrong with the website, please also feel free to open an issue in either the [main website repository on Github](https://github.com/ember-learn/ember-website/) or the [styleguide repo](https://github.com/ember-learn/ember-styleguide) where the components live.

---

## [ember-template-lint v2 released ✅](https://twitter.com/rwjblue/status/1231372429286608902)

In case you weren't aware, you can **lint templates** to follow **Ember's recommended practices**, avoid making common accessibility mistakes, and collaborate with your team more effectively. 💯

```bash
# Install (or upgrade to v2)
ember install ember-cli-template-lint

# Profit!
npm run lint:hbs
```

The v2 release was [recently announced](https://twitter.com/rwjblue/status/1231372429286608902). The most notable change may be that you can start following recommended rules for Ember Octane:

```javascript
// .template-lintrc.js
'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    /* Add custom rules here */
  }
};
```

You can find the full list of updates in the [changelog](https://github.com/ember-template-lint/ember-template-lint/releases/tag/v2.0.0). Please extend your thanks to [@lifeart](https://github.com/lifeart), [@bmish](https://github.com/bmish), [@dcyriller](https://github.com/dcyriller), [@rwjblue](https://github.com/rwjblue), [@akashdsouza](https://github.com/akashdsouza), [@alexlafroscia](https://github.com/alexlafroscia), [@buschtoens](https://github.com/buschtoens), [@gojefferson](https://github.com/gojefferson), and [@initram](https://github.com/initram) for helping with the v2 release!

---

## [2020 Ember Community Survey 📝](https://tilde.wufoo.com/forms/2020-emberjs-community-survey/)

Here's another friendly reminder that it’s that time of year again 😀, the **6th annual official 2020 Ember Community Survey** is here! Once again we would love your help to learn about who is in the Ember community and how they work with the framework.

Last year over 1200 people participated in the survey. All that participation and your participation over the years has resulted in enough input to make the process more efficient. This year the survey has been considerably slimmed down from previous years! So it should be easier than ever to make a **contribution** to our community by filling out the survey – let’s keep that participation going! 🎉

This year we’d also like to emphasize that contributions from non-Ember users are valuable as well. So if you have co-workers or friends who you think might be interested in filling out the survey, please share it with them.

Submissions will be accepted **until March 8th**, but there’s no need to wait! Go ahead and fill out the [survey here now](https://tilde.wufoo.com/forms/2020-emberjs-community-survey/). 🔥🔥🔥

We look forward to your participation! If you have any immediate questions, feel free to email the survey team via survey@emberjs.com, or ping them in #dev-ember-learning on the [Discord chat](https://discordapp.com/invite/emberjs).

But please, don't forget to help us spread the word by sharing the survey landing page on your social network feeds, at meetups and around your office and other communities.

---

## [Can't wait until Ember 3.17 is out? Become a beta tester today 🧪](https://github.com/ember-cli/ember-cli/releases/tag/v3.17.0-beta.1)

It's not too long until [Ember 3.17 is out](https://emberjs.com/releases/) and until you can upgrade your favourite
Ember app to the latest version of the framework. If you want to have an extra head start, you can even **try out** some of
**the 3.17 Ember experience** today!

A few days ago, [ember-cli@3.17.0-beta.1](https://github.com/ember-cli/ember-cli/releases/tag/v3.17.0-beta.1) was published with lots of awesome goodies, including the removal of [RSVP in favour of native promises](https://github.com/ember-cli/ember-cli/pull/9041), lots of great updates to test scenarios and a linter level up with [the now direct usage of eslint and ember-template-lint](https://github.com/ember-cli/ember-cli/pull/9009). Your feedback from testing the ember-cli beta is greatly appreciated. Share your thoughts either on [the project repository on Github](https://github.com/ember-cli/ember-cli/) or in the [#ember-cli channel on the Ember Discord](https://discordapp.com/invite/emberjs).

But why is **beta testing important** in the first place? A distributed community project such as Ember not only lives from the code contributions of developers from all over the world, but also from their feedback about current releases. Early adopters and ambitious testers of releases in the beta and canary channels can provide the insight that is necessary to cut the upcoming release of Ember efficiently: with the best possible developer experience for the entire Ember community in mind.

If you want to learn more about the motivation behind the release management of Ember, make sure to read the [official post-1.0 release cycle blog post](https://blog.emberjs.com/2013/09/06/new-ember-release-process.html) and the [the LTS (Long-Term Support) release process announcement](https://blog.emberjs.com/2016/02/25/announcing-embers-first-lts.html).

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/krisselden" target="gh-user">@krisselden</a>, <a href="https://github.com/mehulkar" target="gh-user">@mehulkar</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/GCheung55" target="gh-user">@GCheung55</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/hjdivad" target="gh-user">@hjdivad</a>, <a href="https://github.com/Windvis" target="gh-user">@Windvis</a>, <a href="https://github.com/patricklx" target="gh-user">@patricklx</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/knownasilya" target="gh-user">@knownasilya</a>, <a href="https://github.com/hakilebara" target="gh-user">@hakilebara</a>, <a href="https://github.com/void-mAlex" target="gh-user">@void-mAlex</a>, <a href="https://github.com/mistahenry" target="gh-user">@mistahenry</a>, <a href="https://github.com/ivandotv" target="gh-user">@ivandotv</a>, <a href="https://github.com/entendu" target="gh-user">@entendu</a>, <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a>, <a href="https://github.com/bartocc" target="gh-user">@bartocc</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/chriseppstein" target="gh-user">@chriseppstein</a>, <a href="https://github.com/gokatz" target="gh-user">@gokatz</a> and <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>  for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Isaac Lee, Jared Galanis, Jessica Jordan and the Learning Team
