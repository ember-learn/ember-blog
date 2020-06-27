---
title: The Ember Times - Issue No. 154
author: Chris Ng, Isaac Lee, Jessica Jordan, Jared Galanis, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/06/26-the-ember-times-issue-154.html"
responsive: true
---

👋 Emberistas! 🐹

Check out the new addon ember-stargate 🌟,
a new addon to integrate Netlify CMS with empress-blog 🎉
learn to SEOptimize your Ember app 💪 ✨!,
and last, but not least, a Readers' Question on how to become a writer for The Ember Times 📝!

READMORE

---

## [Get ready for ember-stargate 🌟](https://twitter.com/simonihmig/status/1274066847873273859)

[Simon Ihmig (@simonihmig)](https://github.com/simonihmig) announced a new addon called [ember-stargate](https://github.com/kaliber5/ember-stargate) – a modern and lightweight take on portals in Ember.

“Portals” are a way to render things in a different place of the DOM tree than they are logically defined in the app. There are a number of existing solutions in the Ember ecosystem for the same problem such as [ember-wormhole](https://github.com/yapplabs/ember-wormhole), [ember-elsewhere](https://github.com/ef4/ember-elsewhere), the native `{{in-element}}` (previously using the [ember-in-element-polyfill](https://github.com/ember-polyfills/ember-in-element-polyfill)).

The `ember-stargate` addon aims to solve this problem without using private APIs, Ember's `component` helper, or having to jump through hoops to implement. All you need to make a portal work is to define the content that should be sent through the portal using `<Portal @target="some-target">`, and the target - identified by its name - where it should be rendered to using `<PortalTarget @name="some-target">`.

For example, suppose you want to update the footer in `application.hbs` from a child route:

Route:

```hbs
<Portal @target="footer-title">Step 1</Portal>
```

Application:

```hbs
{{outlet}}

<footer class="sticky-footer">
  <PortalTarget @name="footer-title" class="sticky-footer__title" />
</footer>
```

Read more and try it out at [kaliber5/ember-stargate](https://github.com/kaliber5/ember-stargate)!

---

## [A new addon to integrate Netlify CMS with empress-blog 🎉](https://twitter.com/Robie577/status/1275728902854529025)

<!--alex ignore easy just-->
Integrating Netlify-CMS with Empress-blog is now super easy thanks to [Robin Philip Thomas (@MalayaliRobz)](https://github.com/MalayaliRobz)! ✨✨✨ Just install the `empress-blog-netlify-cms` addon to your empress-blog project and enable Identity in netlify - your CMS is now ready! 🎉

You can check out the details of this exciting new addon in the [GitHub repo](https://github.com/MalayaliRobz/empress-blog-netlify-cms). 

Be sure to give [`empress-blog-netlify-cms`](https://github.com/MalayaliRobz/empress-blog-netlify-cms) a spin if you're thinking about using Netlify-CMS and have been curious about [empress-blog](https://github.com/empress/empress-blog).

---

## [The ultimate guide for SEOptimizing your Ember app 💪 ✨](https://abhilashlr.in/ember-performance-tweaks-part-3)

Making sure that your application is **search engine optimized** (SEO) is crucial to improve the quanitity and the quality of its traffic derived from organic search engine results. And this week you can learn all about how to make your own Ember app **SEO-proof**, too!

In the [third installment](https://abhilashlr.in/ember-performance-tweaks-part-3) of his [blog series "Ember Performance Tweaks"](https://twitter.com/abhilashlr/status/1252602425598328833), Ember [Chennai](https://www.meetup.com/EmberJS-Chennai/) organizer and blogger [Abhilash L R (@abhilashlr)](https://github.com/abhilashlr) shows us how we can prepare our Ember apps for search engines using meta descriptions, title tags, Prember and much more!

Read the [full post on Abhilash's personal blog](https://abhilashlr.in/ember-performance-tweaks-part-3) today!

---

## [Readers' Questions: How can I become a writer for The Ember Times in the future? 📝](https://discuss.emberjs.com/t/readers-questions-how-can-i-become-a-writer-for-the-ember-times-in-the-future/18006)

The Ember Times is made up of volunteers. We're always looking for more help! 🙂 This week, we got to answer a question that may have been on your mind (or, hopefully, starting today):

> How can I become a writer for The Ember Times in the future?

[Isaac Lee (@ijlee2)](https://github.com/ijlee2), based on his experience, shared [3 steps to becoming a writer](https://discuss.emberjs.com/t/readers-questions-how-can-i-become-a-writer-for-the-ember-times-in-the-future/18006). Find out today how you can start contributing as an Ember Times writer!

<a class="ember-button ember-button--centered" href="https://discuss.emberjs.com/t/readers-questions-how-can-i-become-a-writer-for-the-ember-times-in-the-future/18006">Read more</a>

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/erinsinger93" target="gh-user">@erinsinger93</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/rajasegar" target="gh-user">@rajasegar</a>, <a href="https://github.com/bmish" target="gh-user">@bmish</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/jaydgruber" target="gh-user">@jaydgruber</a>, <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a>, <a href="https://github.com/richgt" target="gh-user">@richgt</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/chrc" target="gh-user">@chrc</a>, <a href="https://github.com/snewcomer" target="gh-user">@snewcomer</a>, <a href="https://github.com/ijlee2" target="gh-user">@ijlee2</a>, <a href="https://github.com/hergaiety" target="gh-user">@hergaiety</a>, <a href="https://github.com/chrisrng" target="gh-user">@chrisrng</a>, <a href="https://github.com/jaredgalanis" target="gh-user">@jaredgalanis</a>, <a href="https://github.com/nickschot" target="gh-user">@nickschot</a>, <a href="https://github.com/chancancode" target="gh-user">@chancancode</a>, <a href="https://github.com/ChazJensen" target="gh-user">@ChazJensen</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a> and <a href="https://github.com/roderickdevelopers" target="gh-user">@roderickdevelopers</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Isaac Lee, Jessica Jordan, Jared Galanis, Amy Lam and the Learning Team
