---
title: The Ember Times - Issue No. 185
authors:
  - the-crowd # replace with real authors from the author folder (add yourself if you're not there)
  - amy-lam
  - jessica-jordan
  - isaac-lee
  - chris-ng
date: 2021-07-30T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Ember course on Educative 🆕,
Using Ember with XState ❎,
Let codemods upgrade your app and deal with jQuery 🤖,
Testimony for Developing in Ember Octane 👍,
Try out the new release of ember-deep-tracked 🎉,

---

<img alt="Ember on Educative" src="/images/educative.avif" />

## [Developing Robust Ember.js Applications course on Educative 🆕](https://www.educative.io/courses/robust-ember-js-applications)

Based on the popular book, [Rock and Roll with Ember.js](https://balinterdi.com/rock-and-roll-with-emberjs/), Educative has a new (paid) course, [Developing Robust Ember.js Applications](https://www.educative.io/courses/robust-ember-js-applications) by [Balint Erdi (@balinterdi)](https://github.com/balinterdi). Balint chose to partner with Educative because their courses are **interactive**: there are quizzes and coding challenges at the end of most chapters, which will help reinforce understanding and learning.

Takeaway skills:

- Understand how Ember.js works in web applications
- Help the user understand how the different building blocks, including components, routing, and services, make everything work in Ember.js
- Learn how to use Ember CLI
- Learn how to completely develop and Ember.js application

We look forward to giving the course a spin!

---

## [Using Ember with XState ❎](https://emerson.github.io/posts/emberjs-with-xstate)

Over the past year, the frontend team at [iManage Closing Folders](https://www.closingfolders.com/) has been experimenting with state machines and Ember. What is a state machine? From [Understanding State Machines on freeCodeCamp](https://www.freecodecamp.org/news/state-machines-basics-of-computer-science-d42855debc66/), a state machine will read a series of inputs. When it reads an input, it will switch to a different state. Each state specifies which state to switch to, for a given input.

In the post [Using EmberJS with XState](https://emerson.github.io/posts/emberjs-with-xstate), [Emerson Lackey (@Emerson)](https://github.com/Emerson) discusses the benefits and drawbacks of state machines. For example, state machines provide a framework-agnostic way of defining presentational state. State machines eliminate emergent states in favor or explicit states. For example, if you have two boolean states on a component, `isSaving` and `isError`, you actually have four states to consider.

Emerson walks through an example of how to use [XState](https://xstate.js.org/) and Ember to implement a signup form. We appreciate the detailed code walkthrough, and agree that the state visualizations are definitely awesome! In addition to the writeup, check out the accompanying full source of [emberjs-state-example on GitHub](https://github.com/Emerson/emberjs-xstate-example).

---

## [Let codemods upgrade your app and deal with jQuery 🤖](https://twitter.com/jwwweber/status/1415062325149720578)

Another **must-read tutorial** for anyone who is **building and maintaining Ember applications** is coming your way:

In her article ["Remodeling an Ember App - Codemods and jQuery"](https://www.jenweber.dev/remodeling-an-ember-app---codemods) Ember core team member [Jen Weber (@jenweber)](https://github.com/jenweber) teaches you where to find **codemods** and how to use them for upgrades of your Ember app. Additionally, you will learn how you can make your app [exclude the jQuery dependency automatically](https://guides.emberjs.com/release/configuring-ember/optional-features/#toc_jquery-integration) to save a few extra kilobytes on your builds!

Read the full article [here](https://www.jenweber.dev/remodeling-an-ember-app---codemods) (or alternatively on [dev.to](https://dev.to/jenweber/remodeling-an-ember-app-codemods-and-jquery-3e8k)) and if this tutorial helped you with your own upgrade, be sure to [share your experience on the post announcement](https://twitter.com/jwwweber/status/1415062325149720578)!

---

## [Ember.js | The Good Parts 👍](https://medium.com/@sarbbottam/ember-js-the-good-parts-f80850414053)

[Sarbbottam Bandyopadhyay (@sarbbottam)](https://github.com/sarbbottam), who has been developing Ember apps since mid-2017, once shared [the challenges that he had faced with Ember.js](https://medium.com/@sarbbottam/challenges-i-face-with-ember-js-59bfba30416e).

This week, Sarbbottam gave an update to describe his **newfound developer productivity and happiness**, thanks to Ember Octane. Titled [Ember.js | The Good Parts](https://medium.com/@sarbbottam/ember-js-the-good-parts-f80850414053), the blog post provides several code examples of a before-and-after. It also describes how a change in syntax and new features (small adjustments) can mean a big improvement to developer experience.

We encourage you to check out [Sarbbottam's blog post](https://medium.com/@sarbbottam/ember-js-the-good-parts-f80850414053)!

---

## [Release of ember-deep-tracked 🎉](https://twitter.com/nullvoxpopuli/status/1406022013639135232)

[NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) published [ember-deep-tracked](https://github.com/NullVoxPopuli/ember-deep-tracked) which is a prototype of "deep tracking" for Ember.

To try it out, you need to annotate the object using a decorator similar to `tracked`.

```js
import { tracked } from 'ember-deep-tracked';
import Component from '@glimmer/component';

export default class Foo extends Component {
  @tracked obj = { bar: 2 };
}
```

In the example above when the object `obj,bar` updates using `{{this.obj.bar}}` will also update since it is deeply tracked.

Note the addon is not recommended for performance sensitive situations such as rendering a table from a large data set where updates to that data set are frequent. This is because without updates there will be an increase in initial render time.

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

<p>This week we'd like to thank <a href="https://github.com/mixonic" rel="noopener noreferrer" target="_blank">Matthew Beale (@mixonic)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/faith-or" rel="noopener noreferrer" target="_blank">Faith Or (@faith-or)</a>, <a href="https://github.com/hadenpf" rel="noopener noreferrer" target="_blank">Haden (@hadenpf)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/stefanpenner" rel="noopener noreferrer" target="_blank">Stefan Penner (@stefanpenner)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/elwayman02" rel="noopener noreferrer" target="_blank">Jordan Hawker (@elwayman02)</a>, <a href="https://github.com/simonihmig" rel="noopener noreferrer" target="_blank">Simon Ihmig (@simonihmig)</a>, <a href="https://github.com/mydea" rel="noopener noreferrer" target="_blank">Francesco Novy (@mydea)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/robertosequeira" rel="noopener noreferrer" target="_blank">Roberto Sequeira (@robertosequeira)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/hellomattio" rel="noopener noreferrer" target="_blank">Matt Doyle (@hellomattio)</a>, <a href="https://github.com/jayjayjpg" rel="noopener noreferrer" target="_blank">Jessy Jordan (@jayjayjpg)</a>, <a href="https://github.com/MrChocolatine" rel="noopener noreferrer" target="_blank">Max Z (@MrChocolatine)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/harshith-venkatesh" rel="noopener noreferrer" target="_blank">Harshith Venkatesh (@harshith-venkatesh)</a>, <a href="https://github.com/hmajoros" rel="noopener noreferrer" target="_blank">Hank Majoros (@hmajoros)</a>, and <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a> for their contributions to Ember and related repositories! 💖</p>

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

Amy Lam, Jesse Jordan, Isaac Lee, Chris Ng, the crowd and the Learning Team
