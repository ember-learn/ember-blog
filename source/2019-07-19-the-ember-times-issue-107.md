---
title: The Ember Times - Issue No. 107
author: Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/07/19-the-ember-times-issue-107.html"
responsive: true
---

What's happening, Emberistas? 🐹

This week:
flexible imports with **Ember Auto Import** ⏬,

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

## [Custom Configuration of Ember Auto Import for Your Project 🐹](https://github.com/ef4/ember-auto-import/tree/v1.3.0#customizing-build-behavior)

The useful addon [Ember Auto Import](https://emberobserver.com/addons/ember-auto-import) helps you to use third-party JavaScript libraries in your Ember app easily by providing a **zero-config import** mechanism for **npm** modules.

You can [configure the addon to fit your project's specific needs](https://github.com/ef4/ember-auto-import#customizing-build-behavior). By providing the `autoImport` configuration object in your app options defined in `ember-cli-build.js`, you can, f.e., change the name of the packages to import from or exclude packages to be imported with Ember Auto Import, which you might have already provided to your app in another way.

If you're already an avid user of Ember Auto Import (or plan to become one), be aware that from version 1.4.0+ the addon will **no longer include** Webpack's polyfills for a set of Node.js globals and modules automatically. [When upgrading to a version of the addon beyond 1.4.0](https://github.com/ef4/ember-auto-import#i-upgraded-my-ember-auto-import-version-and-now-things-dont-import-what-changed) you might see errors such as `global is not defined` popping up in your app or test suite. This might indicate that some of the packages included in your app may - even though they're run in a browser environment - still rely on globals that are usually only available in a Node environment and that these might require a polyfill to work correctly. See also [this issue on the Ember Auto Import repo](https://github.com/ef4/ember-auto-import/issues/218) for more context.


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

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/kratiahuja" target="gh-user">@kratiahuja</a>, <a href="https://github.com/dnalagatla" target="gh-user">@dnalagatla</a>, <a href="https://github.com/kiwiupover" target="gh-user">@kiwiupover</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/apps/dependabot-preview" target="gh-user">@dependabot-preview[bot]</a>, <a href="https://github.com/elwayman02" target="gh-user">@elwayman02</a>, <a href="https://github.com/ursm" target="gh-user">@ursm</a>, <a href="https://github.com/pete-the-pete" target="gh-user">@pete-the-pete</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/loganrosen" target="gh-user">@loganrosen</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/choheekim" target="gh-user">@choheekim</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a> and <a href="https://github.com/toddjordan" target="gh-user">@toddjordan</a> for their contributions to Ember and related repositories! 💖</p>

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

Jessica Jordan, the crowd and the Learning Team
