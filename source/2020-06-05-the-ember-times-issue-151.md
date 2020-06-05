---
title: The Ember Times - Issue No. 151
author: Chris Ng, Abhilash LR, Isaac Lee, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/06/05-the-ember-times-issue-151.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Read the blog post on connecting an Ember App to an OAuth2 Python Flask Server 🔐,
Read the blog post on how to integrate Netlify CMS with empress-blog 🚀,
Change the way you load your data with `ember-await` ⌚,
Beta release of ember-data-model-fragments 🚢,
READMORE

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

## [Change the way you load data with `ember-await` ⌚](https://exelord.gitbook.io/ember-await/)

In case you may have missed [the announcement](https://twitter.com/TheExelord/status/1257674588256903177), [Maciej Kwaśniak (@Exelord)](https://github.com/Exelord) released [`ember-await`](https://exelord.gitbook.io/ember-await/) to provide a **data-loading component** with **declarative promise resolution**. The addon, inspired by `react-async`, uses Octane and `ember-concurrency` to manage promise state. 🔥

Try out [`ember-await`](https://exelord.gitbook.io/ember-await/) today!

---

## [Beta release of ember-data-model-fragments 🚢](https://github.com/lytics/ember-data-model-fragments/releases/tag/5.0.0-beta.0)

 New beta alert! 🚨 Version 5.0.0-beta.0 of `ember-data-model-fragments` has recently been released!  
 
 This beta provides support for Ember Data 3.13 + and includes a pretty serious rewrite to accommodate RecordData. Big shout out to the team behind it, and [Igor Terzic
(@igorT)](https://github.com/igorT) for all the help! 😃

If you use model fragments, please try it out in your app and let [Rich Glazerman (@richgt)](https://github.com/richgt) know if things are working. 

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

## [Blog post: Connecting an Ember app to an OAuth2 Python Flask server 🔐](https://blog.softwarebyrichard.com/2020/05/26/connecting-an-ember-app-to-oauth2-python-flask-server/)

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

## [Blog post: How to integrate Netlify-CMS with Empress-blog 🚀](https://www.mylittletechlife.com/integrate-netlify-cms-with-empress-blog)

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

Chris Ng, Abhilash LR, Isaac Lee, Jared Galanis the crowd and the Learning Team
