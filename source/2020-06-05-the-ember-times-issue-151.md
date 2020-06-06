---
title: The Ember Times - Issue No. 151
author: Chris Ng, Abhilash LR, Isaac Lee, Jared Galanis, Amy Lam
tags: Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/06/05-the-ember-times-issue-151.html"
responsive: true
---

👋 Emberistas! 🐹

Ember.js for #BlackLivesMatter 🤝,
participate in the `ember new --lang` RFC 🌐,
change the way you load your data with `ember-await` ⌚,
beta release of ember-data-model-fragments 🚢,
connect an Ember App to an OAuth2 Python Flask Server 🔐,
and last, but not least, integrate Netlify with empress-blog 🚀!
 
READMORE

---

## [Ember.js for #BlackLivesMatter 🤝](https://twitter.com/emberjs/status/1267574075674812416)

You may have noticed that [emberjs.com](https://emberjs.com/) is currently offline, as a small mark of respect, and expression of solidarity for [#BlackLivesMatter](https://blacklivesmatter.com/). The [Ember.js guides](https://guides.emberjs.com/), [community code of conduct](https://emberjs.com/guidelines), and [legal information](https://emberjs.com/about/legal) remain available.

---

## [`ember new --lang` RFC 🌐](https://github.com/emberjs/rfcs/pull/635)

There is an [RFC](https://github.com/emberjs/rfcs/pull/635) to introduce the `--lang` flag to Ember CLI and help brand new Ember apps meet a [Level A guideline for WCAG](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html). (Level A is the minimum level of conformance.) If the flag is used with a valid language code, the CLI will assign the `lang` attribute to the root `<html>` element in `app/index.html`.

How will the `lang` attribute help your end users?

> "Both assistive technologies and conventional user agents can render text more accurately when the language of the Web page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities will be better able to understand the content."
>
> [WCAG Success Criterion 3.1.1: Intent](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html#intent)

<!-- alex ignore just -->
Please note that <span style="font-style: italic;">everyone</span> benefits from having a valid page language specified, not just users with disabilities. To learn more about the importance of `lang` attribute and provide feedback, we encourage you to [check out the RFC](https://github.com/emberjs/rfcs/pull/635).

<!-- alex ignore White -->
We extend our thanks to [Ava Wroten (@hergaiety)](https://github.com/hergaiety), [Joseph Sumner (@josephdsumner)](https://github.com/josephdsumner), [Jamie White (@jgwhite)](http://github.com/jgwhite), and [Melanie Sumner (@MelSumner)](https://github.com/MelSumner) for their work!

---

## [Change the way you load data with `ember-await` ⌚](https://exelord.gitbook.io/ember-await/)

In case you may have missed [the announcement](https://twitter.com/TheExelord/status/1257674588256903177), [Maciej Kwaśniak (@Exelord)](https://github.com/Exelord) released [`ember-await`](https://exelord.gitbook.io/ember-await/) to provide a **data-loading component** with **declarative promise resolution**. The addon, inspired by `react-async`, uses Octane and `ember-concurrency` to manage promise state. 🔥

Try out [`ember-await`](https://exelord.gitbook.io/ember-await/) today!

---

## [Beta release of ember-data-model-fragments 🚢](https://github.com/lytics/ember-data-model-fragments/releases/tag/5.0.0-beta.0)

New beta alert! 🚨 Version 5.0.0-beta.0 of `ember-data-model-fragments` has recently been released!  
 
This beta provides support for Ember Data 3.13+ and includes a pretty serious rewrite to accommodate `RecordData`. Big shout out to the team behind it, and [Igor Terzic
(@igorT)](https://github.com/igorT) for all the help! 😃

If you use model fragments, please try it out in your app and let [Rich Glazerman (@richgt)](https://github.com/richgt) know if things are working. 

---

## [Connecting an Ember app to an OAuth2 Python Flask server 🔐](https://blog.softwarebyrichard.com/2020/05/26/connecting-an-ember-app-to-oauth2-python-flask-server/)

[Richard Bezemer (@rbezemer)](https://github.com/rbezemer) wrote a [couple](https://blog.softwarebyrichard.com/2020/05/19/using-oauth2-with-flask-rest-jsonapi/) of [blog posts](https://blog.softwarebyrichard.com/2020/05/26/connecting-an-ember-app-to-oauth2-python-flask-server/) on adding Oauth2 support to a basic web project using Flask and Ember.

The blog post goes through adding a custom authenticator (called `custom-oauth2` in our example), using the `ember g` command to tell [ember-simple-auth](https://ember-simple-auth.com/) how to connect and authenticate with our authentication server.

```sh
ember g authenticator custom-oauth2
```

It also discusses custom data such as `serverTokenEndpoint`, `clientId`, and `serverTokenRevocationEndpoint` which our custom authenticator can use to implement its `authenticate()` method.

Now we can use [ember-simple-auth](https://ember-simple-auth.com/) as a session management tool to handle querying for the current state of the user through the `session` Ember Service it provides.

```js
this.session.authenticate(
  'authenticator:custom-oauth2', 'password', this.username, this.password
);
```

Read more on the full the blog posts on [using Oauth2 with Flask-REST-JSONAPI](https://blog.softwarebyrichard.com/2020/05/19/using-oauth2-with-flask-rest-jsonapi/) and on [connecting your Ember app to that Flask server](https://blog.softwarebyrichard.com/2020/05/26/connecting-an-ember-app-to-oauth2-python-flask-server/)!

---

## [How to integrate Netlify-CMS with Empress-blog 🚀](https://www.mylittletechlife.com/integrate-netlify-cms-with-empress-blog)

[Robin Philip Thomas](https://github.com/MalayaliRobz) wrote a blog on integrating empress-blog and Netlify CMS.

What is [empress-blog](https://github.com/empress/empress-blog)?

- A fully-functional, static site implementation of a blog system
- Built on Ember
- Fully working out of the box
- SEO friendly output based on Markdown

[Netlify CMS](https://www.netlifycms.org/) is based on client-side JavaScript, reusable APIs and prebuilt markup.

He explains how to integrate them both in a step-by-step approach. He also details on how to write your blog's content in Netlify CMS with the power of publishing workflows.

Check out [the blog post](https://www.mylittletechlife.com/integrate-netlify-cms-with-empress-blog)! Happy blogging 😄

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/nickschot" target="gh-user">@nickschot</a>, <a href="https://github.com/flexoid" target="gh-user">@flexoid</a>, <a href="https://github.com/jaredgalanis" target="gh-user">@jaredgalanis</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/spruce" target="gh-user">@spruce</a>, <a href="https://github.com/lukemelia" target="gh-user">@lukemelia</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/chriskrycho" target="gh-user">@chriskrycho</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/igorT" target="gh-user">@igorT</a>, <a href="https://github.com/scalvert" target="gh-user">@scalvert</a>, <a href="https://github.com/Mikek2252" target="gh-user">@Mikek2252</a>, <a href="https://github.com/lyubarskiy" target="gh-user">@lyubarskiy</a>, and <a href="https://github.com/amyrlam" target="gh-user">@amyrlam</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask readers' questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Abhilash LR, Isaac Lee, Jared Galanis, Amy Lam and the Learning Team
