---
title: The Ember Times - Issue No. 164
author: Abhilash LR, Chris Ng, Amy Lam, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/09/25-the-ember-times-issue-164.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
EmberJS with REST API 💪,
Readers' Question: Migrating off of mixins in Ember Octane 👋,
Async Data and Autotracking in Ember Octane ✨,
...

READMORE

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [EmberJS with REST API 💪](https://jcwebconcepts.net/emberjs-with-rest-api/)

[John Costanzo (@jrock2004)](https://twitter.com/jrock2004) wrote a blog titled [EmberJS with REST API](https://jcwebconcepts.net/emberjs-with-rest-api/). The blog explains how to get your APIs to work well with Ember Data out of the box, if it follows REST API conventions. If your APIs don't follow REST conventions, the post gives details about how to modify your Ember app serializer to make it work with Ember Data. 

The blog also discusses using [`keyForAttribute`](https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer/methods/keyForAttribute?anchor=keyForAttribute) to make some of the manual work a little easier, so that you do not have to map each API property to the Ember model property. Head over to [the blog post](https://jcwebconcepts.net/emberjs-with-rest-api/) today and give it a read.

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Readers' Question: Migrating off of mixins in Ember Octane 👋](https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/)

<please include link to external article/repo/etc in paragraph / body text, not just header title above>

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

Continuing further on mixins, [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) recently blogged about [Migrating Off of PromiseProxyMixin in Ember Octane](https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/). A common pattern in many Classic Ember apps and addons was to use `PromiseProxyObject` mixin with `ObjectProxy` to expose the state of a promise to end users, and to make accessing the resolved data more convenient. 

...add more here...

---

## [Blog Post: Async Data and Autotracking in Ember Octane ✨](https://v5.chriskrycho.com/journal/async-data-and-autotracking-in-ember-octane/)

A new blog post from [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho) talks about [Async Data and Autotracking in Ember Octane](https://v5.chriskrycho.com/journal/async-data-and-autotracking-in-ember-octane/). This blog post is a continuation of [Migrating Off of PromiseProxyMixin in Ember Octane](https://v5.chriskrycho.com/journal/migrating-off-of-promiseproxymixin-in-ember-octane/), which describes a way to divest mixin and inheritance in favor of composition. Chris does this by using a [load helper](https://gist.github.com/chriskrycho/306a82990dd82203073272e055df5cd1) and a new `AsyncData` structure.

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

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

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

Abhilash LR, Chris Ng, Amy Lam, the crowd and the Learning Team
