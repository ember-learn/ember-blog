---
title: The Ember Times - Issue No. 94
author: Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/04/12-the-ember-times-issue-94.html"
responsive: true
---

<change date in alias and filename on day of send>

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

calling nested components in angle brackets, ...

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

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

The best news? You don't have to wait till your app is at 3.10. Thanks to @rwjblue[https://github.com/rwjblue], you can use a polyfill[https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill] to get the full feature set of angle brackets today! 😃

[Learn more about angle bracket components from EmberMap.](https://embermap.com/video/angle-bracket-components-a-first-look)

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

Isaac Lee, the crowd and the Learning Team
