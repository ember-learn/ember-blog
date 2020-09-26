---
title: The Ember Times - Issue No. 164
author: Abhilash LR, Chris Ng, Jared Galanis, Isaac Lee, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/09/25-the-ember-times-issue-164.html"
responsive: true
---

👋 Emberistas! 🐹

A new reference page for Ember CLI commands 🔖,
Hacktoberfest + The Ember Times ✍️,
migrating off of mixins in Ember Octane 👋,
async data and autotracking in Ember Octane ✨,
autotracking developer experience 🔥,
ember-concurrency 2.0.0.beta-1 🎉,
and last, but not least, EmberJS with REST API 💪!

READMORE

---

## [A new reference page for Ember CLI commands 🔖](https://cli.emberjs.com/release/advanced-use/cli-commands-reference/)

The Ember CLI Guides has a new webpage that lists [all Ember CLI commands](https://cli.emberjs.com/release/advanced-use/cli-commands-reference/). Please bookmark it for reference and onboarding new developers.

As you can imagine, the list of commands and command options grew over time so documenting it for the CLI Guides wasn't a trivial task. We'd like to recognize [Tim (@fozy81)](https://github.com/fozy81) for their amazing contribution. 💯

As always, you can check commands and command options in your terminal by running `ember --help`. Please feel free to provide feedback for the new webpage. If you see incorrect or missing information, you can open an issue in the [cli-guides](https://github.com/ember-learn/cli-guides) repo.

---

## [Hacktoberfest + The Ember Times ✍️](https://github.com/ember-learn/ember-blog/blob/master/CONTRIBUTING.md#writing-for-the-ember-times)

<!--alex ignore host-->
[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is a celebration of open source open to everyone in the global GitHub community. Whether you’re a developer, student learning to code, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge!

Need ideas for Hacktoberfest contributions? Or looking to get started in open source? We suggest working with us on the next Ember Times issue! As you may know, the Ember Times is the newsletter for the official [Ember Blog](https://blog.emberjs.com/). As writer, you will take on an active role in the Ember community and keep up with the latest events and discoveries. Prior experience in technical writing isn't required, as we will be happy to mentor and pair with you. We also encourage everyone around the globe to join; don't worry if English is your second language (or third, etc.).

Are you interested? You can reach out to the team in a few different ways:

- Chat on Discord in [#support-ember-times channel](https://discord.com/channels/480462759797063690/485450546887786506)
- Leave a comment in the [ember-blog](https://github.com/ember-learn/ember-blog/pulls) repo, next issue here (TO BE ADDED)
- Tweet us [`@embertimes` on Twitter](https://twitter.com/embertimes)

We look forward to hear from you soon! 🥰

---

## [Migrating off of mixins in Ember Octane 👋](https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/)

Greetings from Ember Times HQ! We had a **Readers' Question** come in: 

> What's the recommended alternative for `Ember.Mixin` in Octane?

In Classic Ember, if you wanted to define a piece of DOM behavior that you could reuse across your application, you would define a component `Mixin` that implemented the appropriate lifecycle hooks. As of Ember 3.15, the Ember project recommends Ember Octane for new applications and addons. And idiomatic Octane recommends that you avoid mixins. Going back to [Octane is Here](https://blog.emberjs.com/2019/12/20/octane-is-here.html), [Yehuda Katz (@wycats)'s](https://github.com/wycats) gives a migration example. Element modifiers provide a new way to reuse DOM behavior, without some of the drawbacks that mixins have.

**Before (Classic Ember): Mixins**

```js
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didInsertElement() {
    this._super();
    activateTabs(this.element);
  }

  willDestroyElement() {
    this._super();
    deactivateTabs(this.element);
  }
})
```

And then you would use the `Mixin` in a component like this:

```js
import Component from '@ember/component';

export default Component.extend(Tabs, {
  // ...
});
```

**After (Ember Octane): Element Modifiers**

This is what our `Tabs` mixin looks like when reimplemented as a modifier.

```js
import { modifier } from 'ember-modifier';

export default modifier(element => {
  activateTabs(element);

  return () => deactivateTabs(element);
});
```

Since element modifiers work on any element, you don't need to create a whole component to create reusable DOM behavior. You can use a modifier on any element with this element modifier syntax.

```hbs
<div {{tabs}}></div>
```

Continuing further on mixins, [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) recently blogged about [Migrating Off of PromiseProxyMixin in Ember Octane](https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/). A common pattern in many Classic Ember apps and addons was to use `PromiseProxyObject` mixin with `ObjectProxy` to expose the state of a promise to end users, and to make accessing the resolved data more convenient. Be sure to read the [blog post](https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/) for a deeper dive into a few suggested ways to rewrite code into a lightweight, auto-tracke and Octane-ready solution. 

P.S. Looking to future-proof no mixins in your codebase? We suggest enabling the [no-mixins rule on eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-mixins.md).

---

## [Blog Post: Async Data and Autotracking in Ember Octane ✨](https://v5.chriskrycho.com/journal/async-data-and-autotracking-in-ember-octane/)

A new blog post from [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) talks about [Async Data and Autotracking in Ember Octane](https://v5.chriskrycho.com/journal/async-data-and-autotracking-in-ember-octane/). This blog post is a continuation of our previous writeup on [Migrating Off of PromiseProxyMixin in Ember Octane](https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/), which describes a way to divest mixin and inheritance in favor of composition. Chris does this by using a [load helper](https://gist.github.com/chriskrycho/306a82990dd82203073272e055df5cd1) and a new `AsyncData` structure.

The new blog goes through treating that `AsyncData` as ordinary data, but making sure to handle all states (loading, loaded, error). By integrating with tracked properties, the `AsyncData` class reacts to its modeled states and internals, handling this transition for us. This enables us to access the data returned from the load helper as normal data and react based on its state.

```js
import Component from '@glimmer/component';
import { load } from 'my-app/helpers/load';
import { fetchSomeData } from 'my-app/data/fetchers';

export default class Neato extends Component {
  get data() {
    return load(fetchSomeData(this.args.userId));
  }

  get displayData() {
    switch (this.data.state) {
      case 'LOADING':
        return 'loading...';
      case 'LOADED':
        return this.data.value;
      case 'ERROR':
        return `Whoops! Something went wrong! ${this.data.error.message}`;
    }
  }
}
```

Read more on the [full blog post on Chris’s blog](https://v5.chriskrycho.com/journal/async-data-and-autotracking-in-ember-octane/).

---

## [Autotracking Developer Experience 🔥](https://v5.chriskrycho.com/journal/autotracking-elegant-dx-via-cutting-edge-cs/)

If you couldn't get enough [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho), we have good news! 😄  Chris has released a follow-up blog post to the one referenced above. 

How does autotracking in Ember or Glimmer work? How does it improve developer experience? Which computer science concepts make it possible? (Answer: Lamport clocks 🤯)

If you're ready to learn a bit more about how efficient the autotracking system in Ember or Glimmer apps can be, you should head on over to the [post](https://v5.chriskrycho.com/journal/autotracking-elegant-dx-via-cutting-edge-cs/). 

Rest assured, it's a pretty approachable explanation of some complex topics that we as Ember users benefit from in an Octane world. All are encouraged to go check it out!

---

## [ember-concurrency 2.0.0.beta-1 🎉](https://twitter.com/m4xm4n/status/1308945677800681473)

There's a [new beta release](https://github.com/machty/ember-concurrency/releases/tag/2.0.0-beta.1) of `ember-concurrency`! Thanks to the hard work of [Max Fierke (@maxfierke)](https://github.com/maxfierke) 2.0.0.beta-1 introduces `@tracked` on Ember 3.16+, removes the ability to directly use the `{{action}}` helper, and removes the `get` and `set` compatibility methods from `Task`, `TaskGroup`, and `TaskInstance`.

As Max mentions in his tweet, 2.x is largely compatible with 1.x. For users that maintain addons that depend on `ember-concurrency`, it would be very helpful if you can use a wider version range so that some folks can try the 2.x betas and others can upgrade when they're able to. 

More information about this and about upgrading to 2.0.0-beta.1 and other future 2.x releases in
general can be found in the [upgrade document](https://github.com/machty/ember-concurrency/blob/v2/UPGRADING-2.x.md).

Go ahead and give the [release](https://github.com/machty/ember-concurrency/releases/tag/2.0.0-beta.1) notes a read.

---

## [EmberJS with REST API 💪](https://jcwebconcepts.net/emberjs-with-rest-api/)

[John Costanzo (@jrock2004)](https://twitter.com/jrock2004) wrote a blog titled [EmberJS with REST API](https://jcwebconcepts.net/emberjs-with-rest-api/). The blog explains how to get your APIs to work well with Ember Data out of the box, if it follows REST API conventions. If your APIs don't follow REST conventions, the post gives details about how to modify your Ember app serializer to make it work with Ember Data. 

The blog also discusses using [`keyForAttribute`](https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer/methods/keyForAttribute?anchor=keyForAttribute) to make some of the manual work a little easier, so that you do not have to map each API property to the Ember model property. Head over to [the blog post](https://jcwebconcepts.net/emberjs-with-rest-api/) today and give it a read.

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/bobisjan" rel="noopener noreferrer" target="_blank">Jan Bobisud (@bobisjan)</a>, <a href="https://github.com/chadhietala" rel="noopener noreferrer" target="_blank">Chad Hietala (@chadhietala)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/cloke" rel="noopener noreferrer" target="_blank">Cory Loken (@cloke)</a>, <a href="https://github.com/dmytro-krekota" rel="noopener noreferrer" target="_blank">Dmytro Krekota (@dmytro-krekota)</a>, <a href="https://github.com/fozy81" rel="noopener noreferrer" target="_blank">Tim (@fozy81)</a>, <a href="https://github.com/hergaiety" rel="noopener noreferrer" target="_blank">Ava Gaiety Wroten (@hergaiety)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/JamesS-M" rel="noopener noreferrer" target="_blank">@JamesS-M</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/jfdnc" rel="noopener noreferrer" target="_blank">Jacob (@jfdnc)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">Dave Laird (@kiwiupover)</a>, <a href="https://github.com/knownasilya" rel="noopener noreferrer" target="_blank">Ilya Radchenko (@knownasilya)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/patricklx" rel="noopener noreferrer" target="_blank">@patricklx</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/ro0gr" rel="noopener noreferrer" target="_blank">Ruslan Hrabovyi (@ro0gr)</a>, <a href="https://github.com/rreckonerr" rel="noopener noreferrer" target="_blank">Volodymyr Radchenko (@rreckonerr)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/tempo22" rel="noopener noreferrer" target="_blank">Nicolas Fléron (@tempo22)</a>, and <a href="https://github.com/wycats" rel="noopener noreferrer" target="_blank">Yehuda Katz (@wycats)</a> for their contributions to Ember and related repositories! 💖</p>

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

Abhilash LR, Chris Ng, Jared Galanis, Isaac Lee, Amy Lam and the Learning Team
