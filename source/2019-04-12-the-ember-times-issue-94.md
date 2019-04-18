---
title: The Ember Times - Issue No. 94
author: Isaac Lee, Bradley Leftley, Amy Lam, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/04/12-the-ember-times-issue-94.html"
responsive: true
---

<change date in alias and filename on day of send>

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

This week:
calling nested components in angle brackets 🔍, 
2 RFCs for improving Ember Data 💬,
user impersonation with ember-simple-auth 👤, 
EmberCamp videos are live 🍿, ...

---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Nested Components in Angle Brackets: A First Look 🔍](https://embermap.com/video/angle-bracket-components-a-first-look)

Starting Ember 3.10 (currently in beta), we can call **nested components in angle brackets**! 🎉🎉🎉 Recall, we want to use angle brackets to **add clarity to code**.

EmberMap gave us [a first look](https://embermap.com/video/angle-bracket-components-a-first-look) at the new syntax and how to incrementally migrate our templates. For example, the template,

```handlebars
{{#ui-grid columns='md:2 lg:3' gutters='md:3' as |grid|}}
  {{#each sortedEpisodes as |episode|}}
    {{#grid.column}}
      {{podcast/components/podcast-card episode=episode}}
    {{/grid.column}}
  {{/each}}
{{/ui-grid}}
```

would become,

```handlebars
<Grid @columns='md:2 lg:3' @gutters='md:3' as |grid|>
  {{#each sortedEpisodes as |episode|}}
    <grid.Column>
      <Podcast::Components::PodcastCard @episode={{episode}} />
    </grid.Column>
  {{/each}}
</Grid>
```

The best news? You don't have to wait till your app is at 3.10. Thanks to [@rwjblue](https://github.com/rwjblue), you can use a [polyfill](https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill) to get the full feature set of angle brackets today! 😃

[Learn more about angle bracket components from EmberMap.](https://embermap.com/video/angle-bracket-components-a-first-look)

---

## [Section Title in Title Case 🐹](#section-url)
<change section title emoji>
<consider adding some bold to your paragraph>
  
<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">
  
---

## [Record Data RFC: Record State 💬](https://github.com/emberjs/rfcs/pull/463)

In [RFC #463](https://github.com/emberjs/rfcs/pull/463), [@igorT](https://github.com/igorT) asks for **your help with improving the Record Data interface** in Ember Data.

What is Record Data? [Introduced in Ember 3.5](https://blog.emberjs.com/2018/10/15/ember-3-5-released.html), Record Data was designed to ...

- Help addons **extend Ember Data without relying on private APIs**
- Help apps **manage relationships, dirty attributes, rollbacks, and specialized models** via these addons

In the RFC, [@igorT](https://github.com/igorT) proposes that we add methods that return the `created` and `deleted` states of a record. These methods would be consumed by the addons to make correct decisions.

If you'd like to learn more, please take a look at [RFC #463](https://github.com/emberjs/rfcs/pull/463). Please also leave your feedback! ✍️

---

## [Ember Data RFC: Request State Service 💬](https://github.com/emberjs/rfcs/pull/466)

On a related note, [@igorT](https://github.com/igorT) proposes in [RFC #466](https://github.com/emberjs/rfcs/pull/466) that we create a **Request State service**, which returns the `in-flight` and `completed` states of a request. The service would, not only simplify how we determine the state of a request, but also help us work with data from multiple sources.

You can read more about the proposal in [RFC #466](https://github.com/emberjs/rfcs/pull/466). As always, feedbacks are welcome! 🙂
  
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

## [User Impersonation in SaaS with Ember.js and Ruby on Rails 👤](https://codeandtechno.com/posts/user-impersonation-ember-simple-auth-doorkeeper/)

When developing SaaS (software as a service) applications, it is important to be able to log in as one of your users and see exactly what they see. This can help with debugging issues and aid your support team in assisting users. 

[@matixmatix](https://github.com/matixmatix) has created an awesome tutorial on how this can be done using Ember.js (with [Ember Simple Auth](https://ember-simple-auth.com/)) and Ruby on Rails (with [Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper) gem for OAuth2). 

Achieving this is a fairly simple process. Normally, a client exchanges their username and password for an access token. To impersonate that user, we would need to create the token without the user's password. We can ask DoorKeeper to issue a new token for the provided user directly. Lastly, we update our existing OAuth2 authorizer so that we can pass the token (instead of password) to log in as that user.

Read [@matixmatix](https://github.com/matixmatix)'s full [tutorial](https://codeandtechno.com/posts/user-impersonation-ember-simple-auth-doorkeeper/) to get started! 

---

## [EmberCamp Videos are Live! 🍿](https://www.youtube.com/playlist?list=PL4eq2DPpyBbm-vTgHMdBjUi1Qd5GiRIfW)

Looking for some more Ember content to watch? The first batch of EmberCamp 2018 videos are now available! 

We especially enjoyed [@toranb](https://github.com/toranb)'s talk [Fast Feedback, Forward Progress](https://www.youtube.com/watch?v=wX8PxE0BVjI&list=PL4eq2DPpyBbm-vTgHMdBjUi1Qd5GiRIfW&index=4) where he talks about ways to **work smarter, not harder** as developers. He shares ways to choose productivity with a few stories in Ember.

* Test driven development: Choose a feedback loop designed for experimentation and learning
* Hot reloading: Choose a feedback loop designed with layout in mind
* User experience: Choose a feedback loop your customers will love 

Stay tuned for future announcements by following [@embercamp](https://twitter.com/embercamp) on Twitter. And **save the date**, EmberCamp Chicago 2019 will be on August 23rd.
  
---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

<p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

</div>

---

## [#embertimes 📰](https://emberjs.com/blog/tags/newsletter.html) 

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Isaac Lee, Bradley Leftley, Amy Lam, the crowd and the Learning Team
