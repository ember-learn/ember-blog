---
title: The Ember Times - Issue No. 165
author: Isaac Lee, Chris Ng, Jen Weber, Abhilash LR, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/10/09-the-ember-times-issue-165.html"
responsive: true
---

வணக்கம் Emberistas! 🐹

Hacktoberfest 2020 events and info 🎃,
read the new RFC to deprecate `tryInvoke` 📜,
tips for switching from Ember Data to Ember Orbit 💡,
read the blog post on Ember Octane with Glimmer Components ✨, 
and last, but not least, September EmberJS Chennai Meetup 🇮🇳 !

READMORE

---

## [Hacktoberfest 2020 events and info 🎃](https://blog.emberjs.com/2020/10/01/hacktoberfest.html)

Have you always wanted to contribute to open source, but don't know where to start? The month of October is the perfect time to give it a try!

<!-- alex disable special just gal-guy gals-men-->
[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is an annual celebration of open source happens around the world, in thousands of projects on GitHub. Here in Ember land, we have lined up special events, mentoring, pairing, and more. You can read the full details in the [Ember blog](https://blog.emberjs.com/2020/10/01/hacktoberfest.html), but here are the highlights:

- Tomorrow on **Saturday, October 10th**, drop into a pairing session! You can join voice chat on [Ember Discord](https://emberjs.com/community/), where mentors are available to to take your questions, give some advice, and do pair programming during two sessions. Just jump into the "General" voice channel on Discord, all the way at the bottom of the channels list. **Mentors are available [9am-10am ET](https://meetingzone.app/utc/saturday/1300), and [9pm-10pm ET](https://meetingzone.app/utc/sunday/0100)**. Click the links to see times in your own time zone.
- You can **join the [#hacktoberfest](https://discord.com/channels/480462759797063690/496453502298750988) chat channel** that is open all day, every day. Volunteers are also keeping an eye there for questions or help reviewing pull requests.
- On October 16th, there is a **sold out** Contributors Workshop. If you are registered and can't make it, please let the organizers know so that someone else can join!
- If you are a **parent, person of color, LGBTQ+, or woman,** check out our channels for these groups! They are another great place to connect with others and maybe find a pairing buddy. <span style="font-style: italic;">Please note we are welcoming and respectful of trans women and any others who identify as women in a way that is significant to them.</span>
- If you belong to one of those groups but have not joined the channel yet, you can ask in the [#discord-server-admin](https://discord.com/channels/480462759797063690/480499718330253342) channel or send a direct message to Melanie Sumner.

<!-- alex enable special just gal-guy gals-men-->

---

## [RFC: Deprecate tryInvoke 📜](https://github.com/emberjs/rfcs/pull/673)

[Bach Vo (@bachvo)](https://github.com/bachvo) created a new RFC to [deprecate tryInvoke](https://github.com/emberjs/rfcs/pull/673). It builds on top of the previous [RFC to deprecate getWithDefault](https://emberjs.github.io/rfcs/0554-deprecate-getwithdefault.html).

The author explains that, in most cases, function arguments should not be optional. In the rare occasion that it is optional, the Javascript language has [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) so we can deprecate the usage of `tryInvoke`.

Before:

```js
import { tryInvoke } from '@ember/utils';
 
foo() {
 tryInvoke(this.args, 'bar', ['baz']);
}
```

After:

```js
foo() {
 this.args.bar?.('baz');
}
```

Read the full [RFC on Github](https://github.com/emberjs/rfcs/pull/673)!

---

## [Switching from ember-data to ember-orbit 💡](https://medium.com/swlh/switching-from-ember-data-to-ember-orbit-82e202248f1c)

[Derek Gray (@derekwsgray)](https://github.com/derekwsgray) encountered a business requirement to provide an Undo/Redo feature in a large Ember app. While gradually updating the app to rely on [ember-orbit](https://github.com/orbitjs/ember-orbit), Derek recorded [tips and changes that you will want to consider](https://medium.com/swlh/switching-from-ember-data-to-ember-orbit-82e202248f1c) when you are in a similar situation. Perhaps you will want to leverage other Orbit features (offline cache, transaction logs, background sync strategies).

The blog post provides:

- A list of introductory reference materials
- How to allow `ember-data` and `ember-orbit` to coexist during migration
- How to convert `ember-data` syntax to `ember-orbit`

We encourage you to check it out and bookmark the link for future reference!

---

## [Blog Post: Ember Octane with Glimmer Components ✨](https://simplabs.com/blog/2020/10/05/simpler-and-more-powerful-components-in-ember-octane-with-glimmer-components/)

[Ricardo Mendes (@locks)](https://github.com/locks) in a blog post, goes through the challenges of building apps using classic Ember components and how Glimmer components address them in a modern, clean way. He goes through building Glimmer components from the viewpoint of classic Ember Components. Improvements include:

- Glimmer components use native class syntax and do not extend from EmberObject.
- Separation of internal state (properties) and external state (arguments).
- HTML-first approach makes for a much simpler API surface.

With improvements such as Native Class Syntax, reducing the API surface, and removing framework gotchas like components adding a default `<div>` around itself provide the ability to reason about the code locally instead of having to rely on the framework knowledge.

Read the full blog post on [Simpler and more powerful components in Ember Octane with Glimmer Components](https://simplabs.com/blog/2020/10/05/simpler-and-more-powerful-components-in-ember-octane-with-glimmer-components/) today!

---

## [September EmberJS Chennai Meetup 🇮🇳](https://www.youtube.com/playlist?list=PLh_rF0Qob_syXUFhvYFLg8XmXWymsfWKi)

On September 4th, 2020, EmberJS Chennai featured five speakers at their fourth Meetup and the first virtual one. Topics included:

- [Contextual component design](https://youtu.be/EvkRpoeikWI) by Bhuvaneshwari K
- [Progressive Web App using EmberJS](https://youtu.be/yp4PVKEjcqQ) by Monisha S
- [Sequential rendering with EmberJS](https://youtu.be/-IKEDqXTbdQ) by [Kanalveli RA (@kaelinralav)](https://twitter.com/kaelinralav)
- [Degrading Ember Apps gracefully when offline](https://youtu.be/1K712YagFE8) by Saravana Kumar V
- [Building Bridges to the DOM with Modifiers](https://youtu.be/GCneFvINPVc) by [Rajasegar Chandran (@rajasegar_c)](https://twitter.com/rajasegar_c)

You can watch all the five talks today on [YouTube playlist](https://www.youtube.com/playlist?list=PLh_rF0Qob_syXUFhvYFLg8XmXWymsfWKi). To learn more about EmberJS Chennai, you can visit their [website](https://chennaiemberjs.in/) and follow them on [Twitter](https://twitter.com/EmberChennai), [Meetup](https://www.meetup.com/EmberJS-Chennai/), and the [#as-india](https://discordapp.com/channels/480462759797063690/562648585980739616) channel on [Discord](https://discord.com/invite/zT3asNS)!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/34Johnny69" rel="noopener noreferrer" target="_blank">@34Johnny69</a>, <a href="https://github.com/abraaoduarte" rel="noopener noreferrer" target="_blank">Abraão Duarte (@abraaoduarte)</a>, <a href="https://github.com/allthesignals" rel="noopener noreferrer" target="_blank">Matt Gardner (@allthesignals)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/Anshu-jindal" rel="noopener noreferrer" target="_blank">@Anshu-jindal</a>, <a href="https://github.com/bachvo" rel="noopener noreferrer" target="_blank">bach vo (@bachvo)</a>, <a href="https://github.com/BarryThePenguin" rel="noopener noreferrer" target="_blank">Jonathan Haines (@BarryThePenguin)</a>, <a href="https://github.com/Benjy1979" rel="noopener noreferrer" target="_blank">Ben Glancy (@Benjy1979)</a>, <a href="https://github.com/betocantu93" rel="noopener noreferrer" target="_blank">Alberto Cantú Gómez (@betocantu93)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/BradLeftley" rel="noopener noreferrer" target="_blank">Bradley Leftley (@BradLeftley)</a>, <a href="https://github.com/chadhietala" rel="noopener noreferrer" target="_blank">Chad Hietala (@chadhietala)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/chiragpat" rel="noopener noreferrer" target="_blank">Chirag Patel (@chiragpat)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/chrisvdp" rel="noopener noreferrer" target="_blank">Chris van der Ploeg (@chrisvdp)</a>, <a href="https://github.com/hergaiety" rel="noopener noreferrer" target="_blank">Ava Gaiety Wroten (@hergaiety)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/JamesS-M" rel="noopener noreferrer" target="_blank">@JamesS-M</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/jcardali" rel="noopener noreferrer" target="_blank">Joe Cardali (@jcardali)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/jpsanantonio" rel="noopener noreferrer" target="_blank">Jayvic San Antonio (@jpsanantonio)</a>, <a href="https://github.com/jrowlingson" rel="noopener noreferrer" target="_blank">Jack Rowlingson (@jrowlingson)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/Kennie-create" rel="noopener noreferrer" target="_blank">@Kennie-create</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/KroneckerDeIta" rel="noopener noreferrer" target="_blank">@KroneckerDeIta</a>, <a href="https://github.com/lukemelia" rel="noopener noreferrer" target="_blank">Luke Melia (@lukemelia)</a>, <a href="https://github.com/mahmoodhosseini" rel="noopener noreferrer" target="_blank">Mahmood Hosseini (@mahmoodhosseini)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/maxfierke" rel="noopener noreferrer" target="_blank">Max Fierke (@maxfierke)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/mixonic" rel="noopener noreferrer" target="_blank">Matthew Beale (@mixonic)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/nwhittaker" rel="noopener noreferrer" target="_blank">Nathan Whittaker (@nwhittaker)</a>, <a href="https://github.com/parikhdhruv24791" rel="noopener noreferrer" target="_blank">Dhruv Parikh (@parikhdhruv24791)</a>, <a href="https://github.com/Pustur" rel="noopener noreferrer" target="_blank">Loris Bettazza (@Pustur)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/rishikesh7355" rel="noopener noreferrer" target="_blank">Rishikesh Yadav (@rishikesh7355)</a>, <a href="https://github.com/rohitpaulk" rel="noopener noreferrer" target="_blank">Paul Kuruvilla (@rohitpaulk)</a>, <a href="https://github.com/ronan-f" rel="noopener noreferrer" target="_blank">Ronan Fegan (@ronan-f)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/sdahlbac" rel="noopener noreferrer" target="_blank">Simon Dahlbacka (@sdahlbac)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/takshch" rel="noopener noreferrer" target="_blank">Taksh Chanana (@takshch)</a>, <a href="https://github.com/thisisgarv" rel="noopener noreferrer" target="_blank">@thisisgarv</a>, <a href="https://github.com/wycats" rel="noopener noreferrer" target="_blank">Yehuda Katz (@wycats)</a>, <a href="https://github.com/XenomShox" rel="noopener noreferrer" target="_blank">@XenomShox</a>, <a href="https://github.com/xuanluong" rel="noopener noreferrer" target="_blank">Sean Luong (@xuanluong)</a>, <a href="https://github.com/ygongdev" rel="noopener noreferrer" target="_blank">Yicheng (Jerry) Gong (@ygongdev)</a>, and <a href="https://github.com/zabrinatan" rel="noopener noreferrer" target="_blank">Zabrina (@zabrinatan)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Isaac Lee, Chris Ng, Jen Weber, Abhilash LR, Amy Lam and the Learning Team
