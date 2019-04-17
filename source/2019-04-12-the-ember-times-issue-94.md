---
title: The Ember Times - Issue No. 94
author: Bradley Leftley, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/04/12-the-ember-times-issue-94.html"
responsive: true
---

<change date in alias and filename on day of send>

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

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

## [User Impersonation in SaaS with Ember.js and Ruby on Rails 🐹](https://codeandtechno.com/posts/user-impersonation-ember-simple-auth-doorkeeper/)

When developing applications it is important to be able to log in as one of your users and see exactly what they see. This can help debugging issues and aid your support team in assisting users. 

[@matixmatix](https://github.com/matixmatix) has created a awesome tutorial on how this can be done using Ember.js ([Ember Simple Auth](https://ember-simple-auth.com/) with Ruby on Rails (with [Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper) gem FOR 0Auth2). 

Achieving this is fairly simple process. Once the client is exchanging username and password for an access token we then call this 0Auth 2.0 Password grant flow. Then to impersonate a user we then create a new token by bypassing the part where the password is used. Then by asking DoorKeeper to issue a new token for the provided user directly. Now we have a token we then create a new authenticator by extending the existing 0Auth2 authorizer, so we can pass the tokenData directly to our Ember app. 

Read [@matixmatix](https://github.com/matixmatix) full [tutorial](https://codeandtechno.com/posts/user-impersonation-ember-simple-auth-doorkeeper/) to get started! 

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

Bradley Leftley, the crowd and the Learning Team
