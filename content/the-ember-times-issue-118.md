---
title: The Ember Times - Issue No. 118
authors:
  - chris-ng
  - isaac-lee
  - jared-galanis
  - jessica-jordan
  - amy-lam
date: 2019-10-04T00:00:00.000Z
tags:
  - newsletter
  - '2019'
---


Happy fall 🍂, Emberistas! 🐹

This week:
Podcast: The New Ember with Mike North 🎙️,
listen to 2 podcast episodes with Leah Silber 🎧,
celebrate Ember Madrid on stage at Codemotion 2019 🇪🇸,
EmberMap 🎥 on animating across routes with Ember Animated ✨,
ember-cli-typescript 3.0.0 release 💚, and
watch EmberCamp 2019 🍿🎥!

<!-- READMORE -->

---

## [Podcast: The New Ember with Mike North 🎙️](https://devchat.tv/js-jabber/jsj-395-the-new-ember-with-mike-north/)

A recent [JavaScript Jabber](https://devchat.tv/js-jabber/) podcast had [Mike North @mike-north](https://github.com/mike-north) discussing the “New Ember” and how it is a lot more approachable now. This “New Ember”, or [Ember Octane](https://emberjs.com/editions/octane/), brings Ember from having the steepest learning curve of the popular JavaScript frameworks to hardly having to learn anything at all.

<!-- alex disable masters -->
Mike also talks about how Ember provides stability for developers using them by having a long track record for providing tools and education to make the upgrade seamless and even have old components living next to brand new ones with updated syntax. As a testament to this, Mike mentions that his original Frontend Masters course – Intro to Ember – that was recorded in 2015 only required very minor changes to update it to the [version we have today](https://frontendmasters.com/courses/ember-octane/).
<!-- alex enable masters -->

Listen to the full podcast on [JavaScript Jabber](https://devchat.tv/js-jabber/jsj-395-the-new-ember-with-mike-north/)!

---

## [Leah Silber on Open Source Projects and Tech Conferences 🎧](https://www.heroku.com/podcasts/codeish/35-bringing-open-source-to-work)

[Leah Silber (@wifelette)](https://github.com/wifelette), the CEO of Tilde and organizer of [EmberConf](https://emberconf.com/) and RustConf, appeared on [Code[ish]](https://www.heroku.com/podcasts/codeish) to share her experiences with [bringing open source to work](https://www.heroku.com/podcasts/codeish/35-bringing-open-source-to-work) and [organizing a memorable tech conference](https://www.heroku.com/podcasts/codeish/37-bonus-organizing-a-memorable-tech-conference). 💖

<!--alex ignore just-->
We highly encourage you to check out both episodes (written transcripts are available)! In just 45 minutes, you will learn about:

- The value of having a diverse team for open source projects
- How to lead a team by showing respect, creating opportunities for them to meet their goals, and actively scouting for new talents
- How to encourage a company to recognize the value of and contribute to open source projects
- The advances made in accessibility and inclusivity in tech conferences, and how EmberConf addressed both over the past few years

---

## [Ember Madrid Takes Stage at Codemotion 2019 🇪🇸](https://events.codemotion.com/conferences/madrid/2019/wp-content/themes/event/detail-talk.php?detail=14984)

Much thanks to [Juan Antonio Gómez (@shokmaster)](https://github.com/shokmaster), [Adrián González Rus (@adrigzr)](https://github.com/adrigzr), and [Sergio del Valle Salvador (@svsalvador)](https://github.com/svsalvador) from [Ember Madrid](https://twitter.com/embermadrid), developers who attended [Codemotion Madrid](https://events.codemotion.com/conferences/madrid/2019/) had the chance to learn Ember and possibly hear about it for the first time.

Their talk, "[Lo que Ember ha hecho por el desarollo web, y tú sin saberlo](https://events.codemotion.com/conferences/madrid/2019/wp-content/themes/event/detail-talk.php?detail=14984)," covered Ember's contributions to web development and your developer experience. While the recording of their talk isn't available yet, Juan was happy to share a summary with us.

### 1. Pasado

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Juan Antonio Gómez on stage at Codemotion 2019" title="Juan Antonio Gómez" src="/images/blog/2019-10-04/juan_antonio.jpg" />
  <p>I talked about what Ember is—a framework for creating ambitious web applications—and analysed the status of JS frameworks in 2013. I recounted the hard things about Ember at the time like poor documentation, a lot of elements (<code>View</code>, <code>ArrayController</code>, <code>ObjectController</code>), complicated templates (<code>render</code>, <code>bind-attr</code>), and two elements in the router (<code>route</code>, <code>resource</code>). I remembered the brilliant things too, such as implicit generation of code (e.g. empty controllers), a lot of power with less code, Ember CLI, arrival of Glimmer VM in Ember 2.0, and the great 6-week release cycle.</p>
</div>

### 2. Presente

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Adrián González Rus on stage at Codemotion 2019" title="Adrián González Rus" src="/images/blog/2019-10-04/adrian_gonzalez.jpg" />
  <p>Adrián talked about the changes happening in the JavaScript world, the exciting features that Ember 3.x brought (native classes, angle brackets, no jQuery, etc.), and key differentiators between Ember and other JS frameworks (release management and deprecation policy).</p>
</div>

### 3. Futuro

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Sergio del Valle Salvador on stage at Codemotion 2019" title="Sergio del Valle Salvador" src="/images/blog/2019-10-04/sergio_del_valle.jpg" />
  <p>Sergio talked about the need to reduce the Ember skills tree, explained <a href="https://emberjs.com/editions/octane/" target="_blank" rel="noopener noreferrer">Ember Octane</a> and its new awesome features (Glimmer components, tracked properties, decorators, etc.), and shared the community's next goals (continue to <a href="https://github.com/emberjs/rfcs/pull/519" target="_blank" rel="noopener noreferrer">simplify Ember</a>, modernize the build pipeline with <a href="https://github.com/embroider-build/embroider" target="_blank" rel="noopener noreferrer">Embroider</a>, improve accessibility through <a href="https://github.com/ember-a11y" target="_blank" rel="noopener noreferrer">Ember A11y</a>, bring <a href="https://github.com/orbitjs/orbit" target="_blank" rel="noopener noreferrer">Orbit.js</a> to Ember Data, increase productivity and optimize Ember for growth).</p>
</div>

Please be on the lookout for the recording online. In the meantime, you can get involved with Ember Madrid on [Twitter](https://twitter.com/embermadrid?lang=en), [Meetup](https://www.meetup.com/Ember-js-Madrid/), and [Discord](https://discord.gg/emberjs)!

---

## [EmberMap Video on Animating Across Routes with Ember Animated ✨](https://twitter.com/samselikoff/status/1175143786852364289)

If you're interested in learning more about how to ✨**animate across routes** ✨ using the fantastic [Ember Animated addon](https://github.com/ember-animation/ember-animated), you may want to check out a new video by **EmberMap**, in which [Sam Selikoff @samselikoff](https://github.com/samselikoff/) provides a great intro to the subject.

<!--alex ignore easy-->
While animation across routes is a somewhat advanced topic, even if you have not previously worked with **Ember Animated**, the explanations are clear and easy to follow, making the video a decent starting place. So if you have been waiting to check out Ember Animated, this might be a good time to do so!

The video is available on both [YouTube](https://www.youtube.com/watch?v=O4Mt-dDqkk0) and the [EmberMap site](https://embermap.com/video/animating-across-routes-with-ember-animated).

---

## [Release of ember-cli-typescript 3.0.0 💚](https://github.com/typed-ember/ember-cli-typescript/releases/tag/v3.0.0)

[Chris Krycho @chriskrycho](https://www.github.com/chriskrycho) released [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript) 3.0.0 which is dropping support for both Node 6 and [Module Unification](https://blog.emberjs.com/2019/03/11/update-on-module-unification-and-octane.html), and eliminating a lot of noise about Babel from people's consoles!

Check out the [release notes on GitHub!](https://github.com/typed-ember/ember-cli-typescript/releases/tag/v3.0.0)

---

## [(Re)Watch All of EmberCamp 2019 🍿](https://twitter.com/embercamp/status/1179758083150626816)

No matter if you have been able to make it to this year's [camping trip to Chicago](http://embercamp.com/) or not -
now's your time to catch up on [**11 excellent sessions**](https://twitter.com/embercamp/status/1179758083150626816) about modern Ember and best practices;
**watch** (or re-watch) the conference's entire programme from the comfort of your home cinema 🍿🎥.
And be sure to share the [list of talk recordings](https://www.youtube.com/playlist?list=PL4eq2DPpyBbmSKZLCqzMqdtpedlGrDQuc) with your colleagues and Ember friends!

Don't forget to make use of [Jordan Hawker's (@elwayman02)](https://github.com/elwayman02) full summary of [talk slides and summaries](https://github.com/elwayman02/embercamp/blob/master/2019.md) to learn even more. And if you enjoyed the content,
be sure to let the team behind EmberCamp know via [Twitter (@EmberCamp)](https://twitter.com/embercamp) or via [retro DM](mailto:embercamp.chicago@gmail.com).

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/GreatWizard" target="gh-user">@GreatWizard</a>, <a href="https://github.com/ijlee2" target="gh-user">@ijlee2</a>, <a href="https://github.com/muziejus" target="gh-user">@muziejus</a>, <a href="https://github.com/chiangs" target="gh-user">@chiangs</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/pzuraq" target="gh-user">@pzuraq</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/beegan" target="gh-user">@beegan</a>, <a href="https://github.com/astronomersiva" target="gh-user">@astronomersiva</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/HeroicEric" target="gh-user">@HeroicEric</a>, <a href="https://github.com/pete-the-pete" target="gh-user">@pete-the-pete</a>, <a href="https://github.com/camerondubas" target="gh-user">@camerondubas</a> and <a href="https://github.com/nummi" target="gh-user">@nummi</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are meant for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>
</div>

---

## [#embertimes 📰](https://blog.emberjs.com/tags/newsletter.html)

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Chris Ng, Isaac Lee, Jared Galanis, Jessica Jordan, Amy Lam and the Learning Team
