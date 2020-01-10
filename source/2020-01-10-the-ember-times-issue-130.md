---
title: The Ember Times - Issue No. 130
author: Chris Ng, Alon Bukai, Jessica Jordan, Anne-Greeth van Herwijnen, Isaac Lee, Jared Galanis, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/01/10-the-ember-times-issue-130.html"
responsive: true
---

Happy New Year, Emberistas! 🐹

<!--alex ignore special-->
This week, we have an **Ember Octane Special Edition** for you! 

We've collected as much info as possible about this new Ember edition. So throughout this post, you will find useful information to help you get the most out of Ember Octane.

> Octane is modern Ember, and I’m psyched that we got it over the finish line. Have fun building apps! ~ _Yehuda Katz [(@wycats)](https://github.com/wycats)_

This week: What is the Octane Edition? 🙋‍♀️🙋‍♂️,
where can I learn more 🤓,
how to migrate to Octane 🐹🏗️,
community feedback from Outdoorsy 👏,
conquer Octane with Ember Atlas 🗺🌍,
and Octane at EmberConf 2020 📢!

READMORE

---

## [What is the Octane Edition? 🙋‍♀️🙋‍♂️](https://blog.emberjs.com/2019/12/20/octane-is-here.html)

Ember Octane introduces the idea of editions. Let's look at what an edition means in Ember and what features you can find in the Octane edition.

### What is an Edition?

In Ember, an [edition](https://emberjs.com/editions/) represents a **cohesive programming model** and can focus on a particular theme. For example, the Octane edition is focused on productivity and performance!

Having editions helps you and the Ember teams in many ways:

<!--alex ignore easy-->
1. You can see the big picture of how features work together. Before editions were introduced, you might have had to stay on top of RFCs and release notes to understand why a feature was added or removed.

1. For people who don't follow Ember closely—that may be you, or people in the wider JavaScript world—it was easy to miss the significant improvements that happen over time. Editions help us market *tour de force* in Ember.

1. Editions mark an opportunity to update Ember documentation, idioms, addons, and tooling (Ember Inspector, blueprints, codemods, and error messages). The end result is a cohesive, polished experience for you!

### What features are in the Octane Edition?

Many new features cohere to form **a new component model and a new reactivity system** for Ember. These two big changes are keystone to Octane's ergonomic improvements.

You can find the full list of features in the [Ember Guides](https://guides.emberjs.com/release/upgrading/current-edition/#toc_what-is-ember-octane). We'll highlight a few major ones below.

1. **Glimmer components** offer a greatly simplified API, for both template and backing class. Say hi to outer HTML semantics and namespaced arguments!

2. **Modifiers** let you interact with the DOM—animate this element, scroll to that element, autofocus on the first form input, etc. Modifiers work on *any* element.

3. **Tracked properties** simplify syncing the DOM with JavaScript changes. You no longer need to write and maintain dependency lists.

---

> I'm excited because I think Octane is easier to teach. That's great for both companies who hire non-Ember developers and for self-motivated beginners. With ember-auto-import in the app by default, Ember also plays nice with the broader JavaScript ecosystem. You can npm install the libraries you like, and they work without extra effort. ~ _Jen Weber [(@jenweber)](https://github.com/jenweber)_

## [Where can I learn more? 🤓](https://guides.emberjs.com/release/)

If you want to try out Ember Octane, you might want to learn more about the new APIs and best practices for
building modern Ember apps. We highly recommend the following learning resources to you:

### Getting Started

The Ember community worked hard to make the official Ember documentation consisting of the Guides, the Tutorial and the
API Docs ready for the release of Octane. Be sure to make use these learning materials your first stop for getting started with
Ember Octane.

- [The official documentation - Ember.js Guides](https://guides.emberjs.com/release/)
- [The official beginner's tutorial - Build the Super Rentals app](https://guides.emberjs.com/release/tutorial/part-1/)
- [The official API reference - Ember.js API Docs](https://api.emberjs.com/ember/release)

> Octane provides a very gentle on-ramp and lets you learn and grow into the framework as the needs arise in your app. You start with HTML templates, then extract pieces into template-only components for clarity, add arguments for reusability, add a js class to add behavior,  add a service for shared functionalities, install an addon for more cool stuff, etc. I’m excited to see all of theses pieces coming together and finally ready to teach the version of ember we had envisioned. Check out the new tutorial to see the difference for yourself! ~ _Godfrey Chan [(@chancancode)](https://github.com/chancancode)_

### Octane Core Concepts

Especially in the beginning you might want to get familiar with the core concepts behind Octane,
and how these tie in with what you already learned about JavaScript in general! Give some of these selected blog posts a read,
to learn about the principles of Ember's first edition in more detail.

- Octane Core Concepts Blog Series by [Chris Garrett (@pzuraq)](https://github.com/pzuraq)
  - [Part 1: Native Classes](https://blog.emberjs.com/2019/02/11/coming-soon-in-ember-octane-part-1.html)
  - [Part 2: Angle Brackets & Named Arguments](https://blog.emberjs.com/2019/02/19/coming-soon-in-ember-octane-part-2.html)
  - [Part 3: Tracked Properties](https://blog.emberjs.com/2019/02/26/coming-soon-in-ember-octane-part-3.html)
  - [Part 4: Modifiers](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html)
  - [Part 5: Glimmer Components](https://blog.emberjs.com/2019/03/14/coming-soon-in-ember-octane-part-5.html)
- [Most Common Mistakes Using Octane and How to Avoid Them](https://medium.com/ember-ish/the-most-common-ember-js-octane-mistakes-and-how-to-avoid-them-c6420e1b0423) by [Jen Weber (@jenweber)](https://github.com/jenweber)
- [Bringing Clarity to Templates through Ember Octane](https://simplabs.com/blog/2019/12/20/clarity-in-templates/) by [Ricardo Mendes (@locks)](https://github.com/locks)
- [Ember Octane Fundamentals Course on Frontend Masters (paid subscription)](https://frontendmasters.com/courses/ember-octane/) by [Michael North @mike-north](https://github.com/mike-north)

> Since the beginning, Ember has evolved alongside the JavaScript language. Ember has served as a testbed for features such as classes and modules, and for years has pushed more upstream than it has received back. With Octane, this tide has turned. Ember now feels as modern as any JavaScript framework, making the most of language features that it has helped shape. And its commitment to stable evolution means that this trend will continue for years to come. ~ _Dan Gebhardt [(@dgeb)](https://github.com/dgeb)_

### Migrating Ember Apps

Start migrating your existing Ember applications and benefit from Octane's interoperability with classic Ember with these useful reads:

- [Rewriting Apps in Ember Octane](https://crunchingnumbers.live/2019/12/23/rewriting-apps-in-ember-octane/) by [Isaac Lee (@ijlee2)](https://github.com/ijlee2)
- [The Ember Octane vs. Classic Ember Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)
- [Step-by-Step Migration Guide in the Ember Atlas](https://www.notion.so/Atlas-Recommended-Migration-Order-a22f948a7cce4e01896d674f727bee74)

---

<!--alex ignore just special-->
> When we started working on Ember early in the 2010s, we knew we would have to adapt to ecosystem changes, but we couldn’t have predicted how big the changes to the JavaScript language and distribution would be. The thing that’s really special about Ember is that when we adapt to features like JavaScript classes or modern component syntax, we work really hard to bring along existing applications. And it’s not just that you can use old and new features side-by-side. Old syntax and framework classes freely interoperate with new syntax and framework classes. Developers of Ember applications can spend more time on innovative features for their users, and less time on the constant churn that defines the JavaScript community. Ember Octane is modern Ember, and I’m psyched that we got it over the finish line. Have fun building apps! ~ _Yehuda Katz [(@wycats)](https://github.com/wycats)_

## [How to migrate to Octane 🐹🏗️](https://guides.emberjs.com/release/upgrading/current-edition/)

<!--alex ignore nuts-->
Ember Octane represents a big shift in Ember's syntax, features, and mental models. There is, however, no need for a stop-the-world migration, Octane provides an opt-in method of migration where you can apply each core feature enhancement incrementally.

If you are migrating an existing Ember application to Octane we have an excellent list of resources to help you out:

- [Ember Guides: Octane Update Guide](https://guides.emberjs.com/release/upgrading/current-edition/)
- [The Ember Octane vs. Classic Ember Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/)
- [Ember Atlas: Recommended Migration Order](https://www.notion.so/Atlas-Recommended-Migration-Order-a22f948a7cce4e01896d674f727bee74)

Whatever you end up doing, you won’t have to do it alone as members of the community have generously contributed [numerous codemods](https://github.com/ember-codemods) to help us to migrate efficiently.

- [Angle Brackets Codemod](https://github.com/ember-codemods/ember-angle-brackets-codemod)
- [Tracked Properties Codemod](https://github.com/ember-codemods/ember-tracked-properties-codemod)
- [Native Class Codemod](https://github.com/ember-codemods/ember-native-class-codemod)
- [No Implicit This or {{foo}} to {{this.foo}} Codemod](https://github.com/ember-codemods/ember-no-implicit-this-codemod)
- [ES5 Getter Codemod](https://github.com/ember-codemods/es5-getter-ember-codemod)
- [Template Colocation Migrator](https://github.com/ember-codemods/ember-component-template-colocation-migrator)

If you need help along the way, visit the [Ember Community chat and forums](https://emberjs.com/community/).

---

## [Community feedback from Outdoorsy 👏](https://www.outdoorsy.com)

Wondering about who has been using Ember Octane features in production?

We’ll spend some time over the next several issues focusing on projects and teams who are using Ember Octane in their apps.

Today’s focus is on [**Outdoorsy**](https://www.outdoorsy.com), a peer-to-peer marketplace that connects RV and camper van owners with campers encouraging them to get into the great outdoors. Outdoorsy maintains three large-scale Ember apps for their flagship web product.

The developers at Outdoorsy have been using Octane features in production since September and have reportedly had a super enjoyable experience. [Jaco Joubert @jacojoubert](https://github.com/jacojoubert), a Front-End Engineer at Outdoorsy, says "Octane has allowed us to build highly interactive experiences that are well tested in an unbelievably short time. Leveraging Octane we rebuilt our entire [search experience](https://www.outdoorsy.com/rv-search) from the ground up in less than five weeks, something which would have taken orders of magnitude longer before."

Outdoorsy's Ember app is a particularly nice highlight of what's possible in an Ember Octane upgrade experience. The app was written in classic Ember style over the last 4 years or so, and is large enough that a team of 26 developers works on it (about half of whom are focused on the frontend). The app is actually a monorepo of several Ember apps and addons and employs a rehydrated Ember Fastboot app for its public facing pages for SEO purposes.

As with any upgrade of an app this size, there were pain points, but the Outdoorsy team took advantage of the opportunity of being together at their fall engineering summit (the team is distributed, and many work remotely) to tackle the upgrade over the course of a week.

The new Octane syntax took a bit of getting used to, particularly around how to make use of tracked properties in place of computed properties, but the team is enjoying using the new auto-tracking system and class based components in many places throughout the application, and plans on incrementally updating all of their components over time.

Almost all new work that gets done on the application is written with Glimmer components and in a clean and idiomatic Ember Octane way.

<!-- alex ignore mental -->
Some of the big benefits that the Outdoorsy team experienced from Octane are a simplified mental model of how Ember works, improved code readability, and easier reasoning about what context a state is derived from. Not having to reference several files to determine where a property is initially defined was definitely a boon to developer productivity.

It’s great to hear that Octane is working really well in a production application at the scale and complexity of Outdoorsy’s.

We know there are lots of other great examples of Octane being used in the wild. If you’d like to share your experiences, please feel to reach out to the Ember Times team.

---

> Ember’s staying power comes from the energy and dedication of our community, and the Octane release is a great example of how the community can come together, agree on a plan, and execute to a high-level of polish. ~ _Edward Faulkner [(@ef4)](https://github.com/ef4)_

## [The Ember Atlas 🗺](http://emberatlas.com)

The Ember Atlas is an unofficial resource for Ember curated by various people in the Ember Community. It includes best practices, upgrade guides and more! The Ember Atlas is built to be a Wiki for Ember for various content that isn't in the guides yet or won't ever make it in.

To get started it is recommended to read the [Introduction](https://www.notion.so/Introduction-d11ec02706d74eab960b3e2b11494bc7) which explains what The Ember Atlas is.

Of particular interest today is the [Ember Octane Upgrade Guide](https://www.notion.so/Ember-Octane-b8ad64b7adf74218942fc69ead7b6892). This section includes information to help Ember developers upgrade from Classic apps/addons to Octane ones.

Some notable parts of the upgrade guide:

- .... Need to finish


---

## [Octane at EmberConf 2020 📢](https://emberconf.com)

With [Ember Octane](https://blog.emberjs.com/2019/12/20/octane-is-here.html) released it is not a surprise that it’s also a hot topic for [EmberConf 2020](https://emberconf.com/#/speakers).

If you want to [listen and talk to people](https://emberconf.com/#/speakers) about Octane, EmberConf in Portland, OR is the place to be. The 16th till 18th of March will be filled with awesome talks by [Godfrey Chan](https://github.com/chancancode), [Suchita Doshi](https://github.com/suchitadoshi1987), [DanMonroe](https://github.com/DanMonroe) and many others.

It’s also a nice place to meet up with your Ember-friends and learn about many more topics. For more information, check the [EmberConf website](https://emberconf.com) and join the #ember-conf channel on Discord.

---

> Ember has stability and staying power, and it has for a long while. That makes it super great to work with, and a great choice for companies and teams, but it also means our time in the hype-cycle spotlight happened a while back. Octane is an amazing improvement, and it’s also a great opportunity to get folks who are overly focused on the hype to give it another look. I hope our community members use the little buzz-bump to nudge Ember even further into their companies and projects. ~ _Leah Silber [(@wifelette)](https://github.com/wifelette)_

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/the-bionic" target="gh-user">@the-bionic</a>, <a href="https://github.com/bf4" target="gh-user">@bf4</a>, <a href="https://github.com/mixonic" target="gh-user">@mixonic</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/bobisjan" target="gh-user">@bobisjan</a>, <a href="https://github.com/dmzza" target="gh-user">@dmzza</a>, <a href="https://github.com/efx" target="gh-user">@efx</a> and <a href="https://github.com/SYU15" target="gh-user">@SYU15</a> for their contributions to Ember and related repositories! 💖</p>

---

## [#embertimes 📰](https://blog.emberjs.com/tags/newsletter.html)

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Chris Ng, Alon Bukai, Jessica Jordan, Anne-Greeth van Herwijnen, Isaac Lee, Jared Galanis, Amy Lam and the Learning Team
