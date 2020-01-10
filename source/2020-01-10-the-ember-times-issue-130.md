---
title: The Ember Times - Issue No. 130
author: Chris Ng, Jessica Jordan, Anne-Greeth van Herwijnen, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/xx/xx-the-ember-times-issue-XXX.html"
responsive: true
---

Happy New Year, Emberistas! 🐹

<!--alex ignore special-->
This week, we have an **Ember Octane Special Edition** for you!

READMORE
How to migrate to Ember Octane 🐹🏗️,

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Community Feedback 👏](https://www.outdoorsy.com)

Wondering about who has been using Ember Octane features in production? 

We’ll spend some time over the next several issues focusing on projects and teams who are using Ember Octane in their apps.

Today’s focus is on [**Outdoorsy**](https://www.outdoorsy.com), a peer-to-peer marketplace that connects RV and camper van owners with campers encouraging them to get into the great outdoors. Outdoorsy maintains three large-scale Ember apps for their flagship web product.

The developers at Outdoorsy have been using Octane features in production since September and have reportedly had a super enjoyable experience. On the subject [Jaco Joubert @jacojoubert](https://github.com/jacojoubert), a Front-end Engineer at Outdoorsy, says "Octane has allowed us to build highly interactive experiences that are well tested in an unbelievably short time. Leveraging Octane we rebuilt out entire [search experience](https://www.outdoorsy.com/rv-search) from the ground up in less than five weeks, something which would have taken orders of magnitude longer before."

Outdoorsy's Ember app is a particularly nice highlight of what's possible in an Ember Octane upgrade experience given that the app was written over the last 4 years or so in classic Ember style, and it is large enough that it has a team of 26 developers working on it (about half of whom are focused on the frontend). The app is actually a monorepo of several Ember apps and addons and employs a rehydrated Ember Fastboot app for its public facing pages for SEO purposes.

As with any upgrade of an app this size, there were pain points, but the Outdoorsy team took advantage of the opportunity of being together at their fall engineering summit (the team is distributed, and many work remotely) to tackle the upgrade over the course of a week.

The new Octane syntax took a bit of getting used to, particularly around how to make use of tracked properties in place of computed properties, but the team is enjoying using the new auto-tracking system and class based components in many places throughout the application, and plans on incrementally updating all of their components over time.

Almost all new work that gets done on the application is written with Glimmer components and in a clean and idiomatic Ember Octane way.

One of the biggest benefits the Outdoorsy team has experienced as a result of the Ember Octane upgrade is a simplified mental model of how Ember works and improved code readability and easier reasoning about what context state is derived from. Not having to reference several files just to determine where a property is initially defined is definitely a boon to developer productivity.

It’s great to hear that Octane is working really well in a production application at the scale and complexity of Outdoorsy’s.

We know there are lots of other great examples of Octane being used in the wild. If you’d like to share your experiences, please feel to reach out to the Ember Times team.

---

## [How to migrate to Octane 🐹🏗️](https://guides.emberjs.com/release/upgrading/current-edition/)

<!--alex ignore nuts-->
Ember Octane represents a big shift in Ember's syntax, features, and mental models. There is, however, no need for a stop-the-world migration, Octane provides an opt-in method of migration where you can apply each core feature enhancement incrementally.

If you are migrating an existing Ember application to Octane we have an excellent list of resources to help you out:

- [The Ember Guides: Octane Update Guide](https://guides.emberjs.com/release/upgrading/current-edition/)
- [The Ember Octane vs. Classic Ember Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)
- [Ember Atlas Recommended Migration Order](https://www.notion.so/Atlas-Recommended-Migration-Order-a22f948a7cce4e01896d674f727bee74)

Whatever you end up doing, you won’t have to do it alone as members of the community have generously contributed [numerous codemods](https://github.com/ember-codemods) to help us to migrate efficiently.

- [Angle Brackets Codemod](https://github.com/ember-codemods/ember-angle-brackets-codemod)
- [Tracked Properties Codemod](https://github.com/ember-codemods/ember-tracked-properties-codemod)
- [Native Class Codemod](https://github.com/ember-codemods/ember-native-class-codemod)
- [No Implicit This or {{foo}} to {{this.foo}} Codemod](https://github.com/ember-codemods/ember-no-implicit-this-codemod)
- [ES5 Getter Setter Codemod](https://github.com/ember-codemods/es5-getter-ember-codemod)
- [Template Colocation Migrator](https://github.com/ember-codemods/ember-component-template-colocation-migrator)

If you need help along the way, visit the [Ember Community chat and forums](https://emberjs.com/community/).

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Octane at EmberConf 2020 📢](https://emberconf.com)

With [Ember Octane](https://blog.emberjs.com/2019/12/20/octane-is-here.html) released it is not a surprise that it’s also a hot topic for [EmberConf 2020](https://emberconf.com/#/speakers). 

If you want to [listen and talk to people](https://emberconf.com/#/speakers) about Octane, EmberConf in Portland, OR is the place to be. The 16th till 18th of March will be filled with awesome talks by [Godfrey Chan](https://github.com/chancancode), [Suchita Doshi](https://github.com/suchitadoshi1987), [DanMonroe](https://github.com/DanMonroe) and many others. 

It’s also a nice place to meet up with your Ember-friends and learn about many more topics. For more information, check the [EmberConf website](https://emberconf.com) and join the #ember-conf channel on Discord.

---

## [Where Can I Learn More? 🤓](https://guides.emberjs.com/release/)

If you want to try out Ember Octane, you might want to learn more about the new APIs and best practices for
building modern Ember apps. In this regard we highly recommend the following learning resources to you.

### Getting Started

- [The official documentation - Ember.js Guides](https://guides.emberjs.com/release/)
- [The official beginner's tutorial - Build the Super Rentals app](https://guides.emberjs.com/release/tutorial/part-1/)
- [The official API reference - Ember.js API Docs](https://api.emberjs.com/ember/release)

### Octane Core Concepts

- Octane Core Concepts Blog Series by [Chris Garrett (@pzuraq)](https://github.com/pzuraq)
  - [Part 1: Native Classes](https://blog.emberjs.com/2019/02/11/coming-soon-in-ember-octane-part-1.html)
  - [Part 2: Angle Brackets & Named Arguments](https://blog.emberjs.com/2019/02/19/coming-soon-in-ember-octane-part-2.html)
  - [Part 3: Tracked Properties](https://blog.emberjs.com/2019/02/26/coming-soon-in-ember-octane-part-3.html)
  - [Part 4: Modifiers](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html)
  - [Part 5: Glimmer Components](https://blog.emberjs.com/2019/03/14/coming-soon-in-ember-octane-part-5.html)
- [Most Common Mistakes Using Octane and How to Avoid Them](https://medium.com/ember-ish/the-most-common-ember-js-octane-mistakes-and-how-to-avoid-them-c6420e1b0423) by [Jen Weber (@jenweber)](https://github.com/jenweber)
- [Bringing Clarity to Templates through Ember Octane](https://simplabs.com/blog/2019/12/20/clarity-in-templates/) by [Ricardo Mendes (@locks)](https://github.com/locks)
- [Ember Octane Fundamentals Course on Frontend Masters (paid subscription)](https://frontendmasters.com/courses/ember-octane/)

### Migrating Ember Apps

- [Rewriting Apps in Ember Octane](https://crunchingnumbers.live/2019/12/23/rewriting-apps-in-ember-octane/) by [Isaac Lee (@ijlee2)](https://github.com/ijlee2)
- [The Ember Octane vs. Classic Ember Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Jessica Jordan, Anne-Greeth van Herwijnen, the crowd and the Learning Team
