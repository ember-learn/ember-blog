---
title: The Ember Times - Issue No. 183
authors:
  - chris-ng
  - amy-lam
date: 2021-07-01T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Release of uELS v2.0.16 ✅,
Share code snippets on Twitter using Ember 🐦
The difference between ember serve and npm run start 🖥,
Addon roundup 🌐,

---

## [Release of uELS v2.0.16 ✅](https://discord.com/channels/480462759797063690/480499624663056390/845766724040523786)

[Unstable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) is a fully featured fork of Ember Language Server. While the name says _unstable_ it actually has been **stable** and ready to use for day-to-day development!

Thanks to both [Alex LaFroscia (@alexlafroscia)](https://github.com/alexlafroscia) and [Alex Kanunnikov (@lifeart)](https://github.com/lifeart) for new version release which provides:

* Support workspace/didChangeConfiguration event
* Improved startup speed by delaying template tokenization
* Autocomplete now use global registry and file change events, not fs lookup, but we still do fs lookup on project initialization
* Added template-lint severity support
* Improved template-linting speed

Try out uELS today by installing over [Open VSX](https://open-vsx.org/extension/lifeart/vscode-ember-unstable) or [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable)!

---

## [Share code snippets on Twitter using Ember 🐦](https://limber.glimdown.com/?)

Do you want to share demos, gifs, or code snippets on Twitter? Try [limber.glimdown.com](https://limber.glimdown.com/?) from [@NullVoxPopuli](https://github.com/nullvoxpopuli), built with Ember! Code snippets on [limber.glimdown.com](https://limber.glimdown.com/?) can be copied as text or images.

<img src="https://twitter.com/i/status/1402650042364829700" alt="limber.glimdown.com preview">

<embed [tweet](https://twitter.com/nullvoxpopuli/status/1402650042364829700) on Substack>

---

## [The difference between ember serve and npm run start 🖥](https://dev.to/jayjayjpg/the-difference-between-ember-serve-and-npm-run-start-2m5p)

[Jesse Jordan (@jayjayjpg)](https://github.com/jayjayjpg) blogged about some subtle differences between `npm run start` and `ember serve`, inspired by [this question on StackOverflow](https://stackoverflow.com/questions/63340251/is-there-a-difference-between-ember-serve-and-npm-start). Even when using [nvm](https://github.com/nvm-sh/nvm), there can be some dependency gotchas with globally installed packages. Check out Jesse's [dev.to post](https://dev.to/jayjayjpg/the-difference-between-ember-serve-and-npm-run-start-2m5p) for more info.

---

## Addon roundup 🌐

* Using [empress-blog](https://github.com/empress/empress-blog)? If you're not familiar with it, empress-blog is the fully-functional, SEO friendly static site implementation of a blog system built on Ember. Check out [Michal Bryxí (@MichalBryxi)](https://github.com/MichalBryxi)'s bite-sized dev.to posts on [how to set up Mixpanel tracking events in empress-blog](https://dev.to/michalbryxi/mixpanel-empress-blog-5fd2) and [how to add a tag page to your empress-blog main menu](https://dev.to/michalbryxi/tag-page-in-main-menu-for-empress-blog-31b9).
* Want to migrate your Ember projects to Tailwind CSS, but don't know where to start? [Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar) created the [ember-tailwind-codemod](https://github.com/rajasegar/ember-tailwind-codemod) addon to make your migrations less painful. Give it a spin on your repos and check out the README for contribution ideas.
* [Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar) created *another* new addon, [ember-plantuml](https://github.com/rajasegar/ember-plantuml), which allows you to visualize your Ember components and models via PlantUML. You can also download the UML diagrams as SVG files. Look forward to trying it out, seems promising for visual learners!

---

## [5. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [6. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [7. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [8. Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/fozy81" rel="noopener noreferrer" target="_blank">Tim (@fozy81)</a>, <a href="https://github.com/jacojoubert" rel="noopener noreferrer" target="_blank">Jaco Joubert (@jacojoubert)</a>, <a href="https://github.com/saracope" rel="noopener noreferrer" target="_blank">Sara Cope (@saracope)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/hannakim91" rel="noopener noreferrer" target="_blank">Hanna (she/her) (@hannakim91)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/prakashchoudhary07" rel="noopener noreferrer" target="_blank">Prakash Choudhary (@prakashchoudhary07)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/gilest" rel="noopener noreferrer" target="_blank">Giles Thompson (@gilest)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/esquith" rel="noopener noreferrer" target="_blank">Esquith Allen (@esquith)</a>, <a href="https://github.com/lukeingalls" rel="noopener noreferrer" target="_blank">Luke Ingalls (@lukeingalls)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/ankushdharkar" rel="noopener noreferrer" target="_blank">Ankush Dharkar (@ankushdharkar)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, <a href="https://github.com/chiragpat" rel="noopener noreferrer" target="_blank">Chirag Patel (@chiragpat)</a>, <a href="https://github.com/sumitd94" rel="noopener noreferrer" target="_blank">Sumit Dhanania (@sumitd94)</a>, and <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Amy Lam, and the Learning Team
