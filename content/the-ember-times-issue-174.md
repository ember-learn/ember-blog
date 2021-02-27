---
title: The Ember Times - Issue No. 174
authors:
  - anne-greeth-van-herwijnen
  - ava-wroten
  - chris-ng
  - amy-lam
date: 2021-02-26T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

Podcast on native apps and Ember, keep up with the latest in template linting with the tailwindcss linter, release of ember-browser-services, and real-world Ember roundup.

---

## [Building native apps with Ember.js 🎙️](https://audio.ember.report)

The first [Ember Report](ember.report) [podcast](https://audio.ember.report/1680877/7875391-001-building-native-apps-with-ember-js) is **live**! You can find it on all the podcast platforms, like [Spotify](https://open.spotify.com/show/58CczXeudOxy4cCdQ0CJUi) and [Apple Podcasts](https://podcasts.apple.com/podcast/the-ember-report/id1554053161). [Kenneth Larsen (@kennethlarsen)](https://github.com/kennethlarsen) and [Jan Butschen (@buschtoens)](https://github.com/buschtoens) tell you all about the ins and outs of building native apps with Ember.js. Kenneth asks all the critical questions, you as a listener might have, and Jan shares his expertise on how they embedded their Ember.js app in [Capacitor](https://capacitorjs.com/docs), the successor to [Cordova](https://cordova.apache.org).

With practical examples and a ton of show notes, this podcast will get you started in the world of native apps as an Ember developer. From discussing the technology and the developer experience to discussing the future of native apps vs PWA’s, they’ve got you covered.

---

## [Rediscover class sanity with Tailwind CSS linter for Ember templates v2.x 🌬](https://gitlab.com/michal-bryxi/open-source/ember-template-lint-plugin-tailwindcss)

Know what's cool? Respectful, emotionally responsible pull request reviews! A great way to do that is with linting tools to let the computer gently push collaborators towards codebase consistency instead of having to enforce standards through comments and suggestions.

Ember has a wonderful suite of linting tools and hot off the presses is the chill plugin for [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) for all of those [Tailwind CSS](https://tailwindcss.com/) users out there, v2.x of [ember-template-lint-plugin-tailwindcss](https://gitlab.com/michal-bryxi/open-source/ember-template-lint-plugin-tailwindcss)!

<video controls width="100%">
    <source src="https://gitlab.com/michal-bryxi/open-source/ember-template-lint-plugin-tailwindcss/-/raw/master/docs/rule/class-order.webm"
            type="video/webm" alt='Example of class-order rule'>

    Sorry, your browser doesn't support embedded videos.
</video>
<br>

_Tailwind classes can become quite verbose_ so it can be nice to encourage some standards for how so many classes can be cleanly added to the DOM. This latest version of the linter gives maintainers full control of **class ordering and when line breaks should occur** (both for _classes per line_ and optionally by _class grouping_).

---

## [Release of ember-browser-services ⚙️](https://github.com/CrowdStrike/ember-browser-services)

The [ember-browser-services](https://github.com/CrowdStrike/ember-browser-services) addon is officially released! The addon provides a collection of [Ember Services](https://guides.emberjs.com/release/services/) that allow for consistent interaction with browser APIs. This provides consistent interaction with browser APIs and easier testing.

For tests, you can stub out the Ember Service from ember-browser-services with your own implementation in order to verify the behavior you were testing. Any changes to a service's implementation during a test are discarded after the test finishes, there’s even a shorthand way of doing so using the `setupBrowserFakes` export.

Try out [ember-browser-services](https://github.com/CrowdStrike/ember-browser-services) today by checking out their code on GitHub!

---

## Real-world Ember roundup 🙌

* The blog post [Track performance of your web application with JavaScript](https://blog.forestadmin.com/track-performance-of-your-web-application-with-javascript-2/) discusses how [Forest Admin](https://www.forestadmin.com/) used JavaScript's **Performance API** to implement tracking of app load time in their Ember web app. They're also monitoring the time of requests made by customers on their admin backend. They've implemented the functionality of *react-addons-perf* (now deprecated in React 16) in Ember. Check out the article for implementation details to track performance, with the goal of improving the user experience.
* Have you been missing meetups since the pandemic? Looking for some pre-EmberConf talks for learning and inspiration? Mark your calendar's for [Ember LA's **Virtual** March Meetup](https://www.meetup.com/Ember-LA/events/276336494/). This month, [Ava Gaiety Wroten (@hergaiety)](https://github.com/hergaiety) will be giving a presentation called **Achieving A11y Automation Testing**, about an Ember success story with lessons that can be applied to any framework or project. Folks from anywhere are encouraged to attend! P.S. Feel free to submit a talk 📜, anything from a five minute lightning talk to a full-length presentation is welcome.

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/hergaiety" rel="noopener noreferrer" target="_blank">Ava Gaiety Wroten (@hergaiety)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/lolmaus" rel="noopener noreferrer" target="_blank">Andrey Mikhaylov (lolmaus) (@lolmaus)</a>, <a href="https://github.com/wondersloth" rel="noopener noreferrer" target="_blank">Matthew Edwards (@wondersloth)</a>, <a href="https://github.com/cnocon" rel="noopener noreferrer" target="_blank">Cristin O'Connor (@cnocon)</a>, <a href="https://github.com/charlespierce" rel="noopener noreferrer" target="_blank">Charles Pierce (@charlespierce)</a>, <a href="https://github.com/mixonic" rel="noopener noreferrer" target="_blank">Matthew Beale (@mixonic)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a>, <a href="https://github.com/Windvis" rel="noopener noreferrer" target="_blank">Sam Van Campenhout (@Windvis)</a>, <a href="https://github.com/herzzanu" rel="noopener noreferrer" target="_blank">Sabin Hertanu (@herzzanu)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/kellyselden" rel="noopener noreferrer" target="_blank">Kelly Selden (@kellyselden)</a>, <a href="https://github.com/jeffdaley" rel="noopener noreferrer" target="_blank">Jeff Daley (@jeffdaley)</a>, <a href="https://github.com/jamescdavis" rel="noopener noreferrer" target="_blank">James C. Davis (@jamescdavis)</a>, <a href="https://github.com/zhanwang626" rel="noopener noreferrer" target="_blank">Zhan Wang (@zhanwang626)</a>, <a href="https://github.com/lindyhopchris" rel="noopener noreferrer" target="_blank">Christopher Gammie (@lindyhopchris)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/thoov" rel="noopener noreferrer" target="_blank">Travis Hoover (@thoov)</a>, <a href="https://github.com/drewlee" rel="noopener noreferrer" target="_blank">Andrew A Lee (@drewlee)</a>, <a href="https://github.com/yads" rel="noopener noreferrer" target="_blank">Vadim Kazakov (@yads)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/wagenet" rel="noopener noreferrer" target="_blank">Peter Wagenet (@wagenet)</a>, <a href="https://github.com/Bouke" rel="noopener noreferrer" target="_blank">Bouke Haarsma (@Bouke)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">Jared Galanis (@jaredgalanis)</a>, <a href="https://github.com/nickschot" rel="noopener noreferrer" target="_blank">Nick Schot (@nickschot)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, and <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Anne-Greeth van Herwijnen, Ava Wroten, Chris Ng, Amy Lam, and the Learning Team
