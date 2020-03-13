---
title: The Ember Times - Issue No. 139
author: Abhilash LR, Anne-Greeth van Herwijnen, Preston Sego, Isaac Lee, Jared Galanis the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/03/13-the-ember-times-issue-139.html"
responsive: true
---

வணக்கம் Emberistas! 🐹

Videos of the EmberJS Chennai meetup 🇮🇳,
ember-models-table v3.0.0 🌟,
QR scanning without bundle size growing 📷,
Ember Twiddle supports Octane features up to Ember 3.17 💖,
Check out handy examples of tests in Ember 💡,
JHU COVID-19 Dashboard is Ember 🐹,

READMORE

<check all header links are also in the body, and add to template>

---

## [Feb 29th, 2020 - EmberJS Chennai Meetup 🇮🇳](https://www.youtube.com/playlist?list=PLh_rF0Qob_sxjhg9qPTlXn-6EZzmmTHoc)

On February 29th 2020, EmberJS Chennai featured seven speakers at their third Meetup. They covered various topics that included:

- [Web development - the past and the present](https://slides.com/jayakrishnanamburu/web-dev#/) by [@JayaKrishnaNamburu](https://github.com/JayaKrishnaNamburu)
- [Picking a framework: React vs Angular vs Vue vs Ember](https://youtu.be/DT75xo7VXn4) by [@michaeldinesh9](https://twitter.com/michaeldinesh9)
- [Ember runloop](https://youtu.be/CU1ffqXtoR0) by [@srajas02](https://twitter.com/srajas02)
- [Ember model & relationships](https://youtu.be/__yX29lr6og) by [@ahamedalthaf](https://github.com/ahamedalthaf)
- [Frame communication with Ember](https://youtu.be/OYePMoIajQI) by [@Kishore01kumar](https://twitter.com/Kishore01kumar)
- [Design systems using Storybook](https://youtu.be/vOhpdSP4Nr0) by [@prasanth_lpk](https://twitter.com/prasanth_lpk); and
- [Finite state machines and Ember](https://youtu.be/0lFNUybdWJs) by [@ansankarganesh](https://twitter.com/ansankarganesh)

You can [watch all six talks today on YouTube](https://www.youtube.com/playlist?list=PLh_rF0Qob_sxjhg9qPTlXn-6EZzmmTHoc). To learn more about EmberJS Chennai, you can visit their [website](https://chennaiemberjs.in/) and follow them on [Twitter](https://twitter.com/EmberChennai), [Meetup](https://www.meetup.com/EmberJS-Chennai/), and the [`#as-india`](https://discordapp.com/channels/480462759797063690/562648585980739616) channel on [Discord](https://discordapp.com/invite/zT3asNS)!

---

## [ember-models-table released version 3.0.0 🌟](https://twitter.com/oonechiporenko/status/1235571293530902531)

After nine months of hard work, version 3.0.0 of [`ember-models-table`](https://github.com/onechiporenko/ember-models-table) has been released from beta by [Oleg Nechiporenko (@onechiporenko)](https://github.com/onechiporenko). 

This major release includes some breaking changes, so please check the [release notes](https://github.com/onechiporenko/ember-models-table/releases/tag/v3.0.0) when you update. Complementing the release are also new demo's for version 3.x with [Bootstrap 3](http://onechiporenko.github.io/ember-models-table/v.3/bs3/#/examples), [Bootstrap 4](http://onechiporenko.github.io/ember-models-table/v.3/bs4/#/examples), [`ember-paper`](http://onechiporenko.github.io/ember-models-table/v.3/paper/#/examples) and [`plain-html`](http://onechiporenko.github.io/ember-models-table/v.3/plain-html/#/examples).

---

## [Fast QR Scanning library, ember-jsqr, released! 📷](https://nullvoxpopuli.github.io/ember-jsqr/)

Extracted from [@NullVoxPopuli's](https://twitter.com/nullvoxpopuli) [chat project](https://emberclear.io/),
[ember-jsqr](https://nullvoxpopuli.github.io/ember-jsqr/) is an integration with jsQR, a _fast_ QR code scanner that demonstrates how addon
developers may want to integrate with an external library using **dynamic `import`** to avoid adding to the
initial load cost of an app. The jsQR library itself is 45kb (after min+gzip), but this addon adds only _bytes_
to the initial vendor bundle (the cost of a single glimmer component, a private service, and modifiers).

---

## [Ember Twiddle supports Octane features up to Ember 3.17 💖](https://ember-twiddle.com/)

In March, [Gaurav Munjal (@Gaurav0)](https://github.com/Gaurav0) and [Ilya Radchenko (@knownasilya)](https://github.com/knownasilya) collaborated on [incremental updates to Ember Twiddle](https://github.com/ember-cli/ember-twiddle/releases/tag/v0.17.0-4). It now supports Octane features up to Ember 3.17 and sports a new collapsible sidebar!

<img src="/images/blog/2020-03-13/ember_twiddle_preview.gif" alt="Ember Twiddle preview">

If you haven't used [Ember Twiddle](https://ember-twiddle.com/) before, it allows you to share and demo Ember code with other developers. You can create a sample app when filing bug issues, for example. Give it a try today!

---

## [JHU COVID-19 Dashboard is Ember 🐹](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)

Did you know that the [popular dashboard](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6) made by the Johns Hopkins University [Center for Systems Science and Engineering](https://systems.jhu.edu/) being used to track cases of the Corona COVID-19 virus is built in part using Ember.js?

As reported by the [CSSE blog](https://systems.jhu.edu/research/public-health/ncov/), "the dashboard, first shared publicly on January 22, illustrates the location and number of confirmed COVID-19 cases, deaths and recoveries for all affected countries. It was developed to provide researchers, public health authorities and the general public with a user-friendly tool to track the outbreak as it unfolds. Further, all the data collected and displayed is made freely available, initially as google sheets, now in a GitHub repository, along with the feature layers of the dashboard, which are now included in the ESRI Living Atlas." The data layer Github repo can be found [here](https://github.com/CSSEGISandData/COVID-19).

While the spread of the virus is concerning and has impacted and will continue to impact many lives, it is inspiring to see Ember being used as a force for good and helping to inform health care providers, researchers, policy makers and the broader public about how cases are developing across the globe.

Thanks to [Rene Rubalcava @odoe](https://github.com/odoe) for the [tweet](https://twitter.com/odoenet/status/1233439467421065216) that made us aware.

A mobile friendly version of the dashboard can be found [here](https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61).

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Ember test case for a CRUD application with Mirage 💡](https://medium.com/@srajas02/ember-test-case-for-a-crud-application-with-mirage-d6d9836bfee2)

[Raja S (@srajas0)](https://github.com/srajas0), who has worked with Ember since 2018, recalls their experience of being unable to find many examples of how to write unit, rendering, and application tests. To help others and future Ember developers, Raja has created [a demo app](https://github.com/srajas0/ember-test-cases) that uses QUnit DOM, ember-cli-mirage, and ember-cli-code-coverage for testing.

We encourage you to [check out Raja's tutorial](https://medium.com/@srajas02/ember-test-case-for-a-crud-application-with-mirage-d6d9836bfee2) and see how you can improve your tests today!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

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

Abhilash LR, Anne-Greeth van Herwijnen, Preston Sego, Isaac Lee, Jared Galanis the crowd and the Learning Team
