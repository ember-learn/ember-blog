---
title: The Ember Times - Issue No. 107
author: Chris Ng, Jessica Jordan, Kenneth Larsen, Isaac Lee, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/07/19-the-ember-times-issue-107.html"
responsive: true
---

What's happening, Emberistas? 🐹

This week:
read the new **RFC on Deprecation Removal Policies** 📋,
**Ember 3.11** is out! 🚀
flexible imports with **Ember Auto Import** ⏬,
learn how to make an **Electron** app with Ember 🖥️,
and last, but not least, improving your **DX** on Ember 💯! 

---

## [RFC: Major Version Release for All Deprecation Removal 📋](https://github.com/emberjs/rfcs/pull/512)

An RFC was proposed by [@kerrick](https://github.com/Kerrick) to have a major version release for all deprecation removals. The main issue revolves around the [Intimate API](https://twitter.com/wycats/status/918644693759488005) policy which can catch some developers off guard when upgrading Ember versions.

Certain private APIs are considered "Intimate API" because there are addons and consumers who use them despite being private. We sometimes have issues when deprecating these private APIs. This is because not all private APIs would warrant a deprecation warning (and therefore a major version change). The RFC proposes to have a major version release for all deprecation removals.

Read, comment, and discuss the [full RFC on GitHub](https://github.com/emberjs/rfcs/pull/512)!

---

## [Ember 3.11 is Out 🚀](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html)

A lot of **cool new features** have been released as part of Ember 3.11. With Ember.js 3.11 you now have access to features like the `on` modifier, the `fn` helper and much more. With 3.11 there's also a deprecation of `Function.prototype.observes`.

Furthermore, Ember Data 3.11 contains the [much awaited `Packages feature`](https://emberjs.github.io/rfcs/0395-ember-data-packages.html) which allows you to use a new import syntax.

If you decide to upgrade then please have a look at [the release post](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html) since Ember Data 3.11 **currently contains a known bug** with the `model` blueprint.

---

## [Custom Configuration of Ember Auto Import for Your Project ⏬](https://github.com/ef4/ember-auto-import/tree/v1.3.0#customizing-build-behavior)

[Ember Auto Import](https://emberobserver.com/addons/ember-auto-import), a very useful addon, helps you easily **import** and use third-party JavaScript libraries from **npm** in your Ember app.

You can [configure the addon to fit your project's specific needs](https://github.com/ef4/ember-auto-import#customizing-build-behavior). By providing the `autoImport` configuration object in your app options defined in `ember-cli-build.js`, you can, for example, change the name of the packages to import from or exclude packages to be imported with Ember Auto Import, which you might have already provided to your app in another way.

If you're already an avid user of Ember Auto Import (or plan to become one), be aware that from version 1.4.0+ the addon will **no longer include** Webpack's polyfills for a set of Node.js globals and modules automatically.

[When upgrading to a version of the addon beyond 1.4.0](https://github.com/ef4/ember-auto-import#i-upgraded-my-ember-auto-import-version-and-now-things-dont-import-what-changed), you might see errors such as `global is not defined` in your app or test suite. This might indicate that some of your packages—even though they run in a browser environment—still rely on globals (these are usually only available in a Node environment) and may require a polyfill to work correctly. You can check [this issue on the Ember Auto Import repo](https://github.com/ef4/ember-auto-import/issues/218) for more context.


If you want to opt-in to these Node polyfills using Ember Auto Import, you can [configure them accordingly](https://github.com/ef4/ember-auto-import/issues/224#issuecomment-503400386) via the `autoImport` options in your `ember-cli-build.js`:

```
// ember-cli-build.js
let app = new EmberApp(defaults, {
  autoImport: {
    webpack: {
      node: {
        Buffer: false,
        global: true,
        process: true,
      },
    }
  }
});
```

You can review the configuration defaults for the Node.js polyfill over at [the documentation for Webpack itself](https://webpack.js.org/configuration/node/#node).

---

## [Making an Electron App with Ember JS 🖥️](https://dev.to/mitchartemis/making-an-electron-app-with-ember-js-part-1-initial-setup-11c0)

[Ember Electron](https://ember-electron.js.org/) is an addon that helps you create **ambitious cross-platform desktop apps**. Currently, its documentation resides in [the GitHub repo](https://github.com/adopted-ember-addons/ember-electron/tree/master/docs).

To help you understand how to use the addon—in particular, **how to configure the addon for Mac, Linux, and Windows**—[@mitchartemis](https://dev.to/mitchartemis) published 2 blog posts, with a few more to come. 🎉

We encourage you to [read them today](https://dev.to/mitchartemis/making-an-electron-app-with-ember-js-part-1-initial-setup-11c0)! You can also find Mitch's [demo app and configuration files on GitHub](https://github.com/snipline/shopper).

---

## [Improving Your DX on Ember 💯](https://dockyard.com/blog/2019/06/10/improving-your-dx-on-ember-part-i-quick-wins)

[@Serabe](https://github.com/Serabe) has a series on the Dockyard blog about how to improve your **Developer Experience (DX)**. Check it out for happier Ember-ing! 

* [Part 1: Quick Wins](https://dockyard.com/blog/2019/06/10/improving-your-dx-on-ember-part-i-quick-wins): tips and tricks
* [Part 2: Changing Our Toolbelt](https://dockyard.com/blog/2019/06/18/improving-the-ember-dx-part-2-changing-our-toolbelt): goes through some major changes to their project that brought bigger improvements 
* [Part 3: Ember Suave 2.0](https://dockyard.com/blog/2019/06/25/improving-dx-in-ember-part-3-ember-suave-2-0): announcing the new and improved [eslint-plugin-ember-suave](https://github.com/DockYard/eslint-plugin-ember-suave)

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/kratiahuja" target="gh-user">@kratiahuja</a>, <a href="https://github.com/dnalagatla" target="gh-user">@dnalagatla</a>, <a href="https://github.com/kiwiupover" target="gh-user">@kiwiupover</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/elwayman02" target="gh-user">@elwayman02</a>, <a href="https://github.com/ursm" target="gh-user">@ursm</a>, <a href="https://github.com/pete-the-pete" target="gh-user">@pete-the-pete</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/loganrosen" target="gh-user">@loganrosen</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/choheekim" target="gh-user">@choheekim</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a> and <a href="https://github.com/toddjordan" target="gh-user">@toddjordan</a> for their contributions to Ember and related repositories! 💖</p>

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

Chris Ng, Jessica Jordan, Kenneth Larsen, Isaac Lee, Amy Lam and the Learning Team
