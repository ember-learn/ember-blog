---
title: The Ember Times - Issue No. 169
author: Chris Ng, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/12/04-the-ember-times-issue-169.html"
responsive: true
---

👋 Emberistas! 🐹

Watch a deep dive on component primitives 📺, and
the "Rock & Roll with Ember band" interview series 🎸!

READMORE

---

## [Watch: Component primitives deep dive 📺](https://www.youtube.com/watch?v=O74WizsVAQU)

[Chris Garrett (@pzuraq)](https://github.com/pzuraq) and [Scott Newcomer (@snewcomer)](https://github.com/snewcomer) [deep dived](https://twitter.com/pzuraq/status/1331340528705671168) into Ember's component primitives such as the `setComponentTemplate`, `setComponentManager`, and `precompileTemplate` APIs.

Chris walks through the problem of formalizing relationships between the JavaScript component and its Handlebars template. This is done by preprocessing the template via the `precompileTemplate` API and then establishing that relationship to the JavaScript component using the `setComponentTemplate` API.

These [primitives](https://emberjs.github.io/rfcs/0481-component-templates-co-location.html#low-level-primitives) are actually public so anyone can make a transform or parser to build their own custom template import syntax. This flexibility means we can experiment using these primitives before finalizing the API. We can even iterate on it later on to find the best fit for our ecosystem.

Watch the [full video discussion](https://www.youtube.com/watch?v=O74WizsVAQU) on YouTube!

---

## [The "Rock & Roll with Ember band" interview series 🎸](https://balinterdi.com/blog/)

[Balint Erdi (@balinterdi)](https://github.com/balinterdi), author of the popular book, [Rock & Roll with Ember.js (RaRwE)](https://balinterdi.com/rock-and-roll-with-emberjs/), has started a ["Rock & Roll with Ember band" interview series](https://balinterdi.com/blog/) on his blog. We enjoyed reading these interviews about members from the beloved Ember community!

* 🎤 [Stuart Guthrie (@stuartg99)](https://github.com/stuartg99) of Freshwater, New South Wales, Australia talked about his experience since choosing Ember four years ago as the founder of [Polonious Pty Ltd](https://polonious-systems.com/). "We selected Emberjs as it was community driven, the community was well led and had a good 'vibe', still does."
* 🥁 [Serguei Cambour (@belgoros)](https://github.com/belgoros) of Belgium talked about using Ember on side projects, having discovered Ember as a framework from his background in Ruby on Rails. The RaRwE book helped with the Ember learning curve, and he uses the [Ember Discuss](https://discuss.emberjs.com/) or the relevant channel in the [Ember Discord chat](https://discord.com/invite/emberjs) to ask questions.
* 🎹 [Ben Borowski (@typeoneerror)](https://github.com/typeoneerror) of Canada used Ember on his side project, [Doki.io](https://doki.io/). Things he's jazzed about in the Ember world are code-splitting and the [@use RFC](https://www.pzuraq.com/introducing-use/), which we discussed in [Ember Times Issue #168](https://blog.emberjs.com/2020/11/20/the-ember-times-issue-168.html).
* 🎷 [Aad Versteden (@madnificent)](https://github.com/madnificent) of Belgium is the co-founder and CEO of [redpencil.io](https://redpencil.io/), a consultancy which tries to keep the web an open space. Most of their backend work is [semantic.works](https://semantic.works/), which heavily pushes for Ember on the frontend. Aad would like to see the community more involved in [ember-animated](https://github.com/ember-animation/ember-animated). He's also hopeful that [Embroider](https://github.com/embroider-build/embroider) will bring us tree shaking. Check out the [full post](https://balinterdi.com/blog/the-rock-roll-with-ember-band-aad-versteden/) to read about Aad's thoughts on the pros and cons of Ember Data.

Find all the interviews here: [balinterdi.com/blog](https://balinterdi.com/blog/).

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/Turbo87" rel="noopener noreferrer" target="_blank">Tobias Bieniek (@Turbo87)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/jl-cs" rel="noopener noreferrer" target="_blank">@jl-cs</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/stefanpenner" rel="noopener noreferrer" target="_blank">Stefan Penner (@stefanpenner)</a>, <a href="https://github.com/shivani2692" rel="noopener noreferrer" target="_blank">@shivani2692</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/achambers" rel="noopener noreferrer" target="_blank">Aaron Chambers (@achambers)</a>, <a href="https://github.com/nickschot" rel="noopener noreferrer" target="_blank">Nick Schot (@nickschot)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/KrishnaRPatel" rel="noopener noreferrer" target="_blank">Krishna Patel (@KrishnaRPatel)</a>, <a href="https://github.com/cincodenada" rel="noopener noreferrer" target="_blank">Joel Bradshaw (@cincodenada)</a>, <a href="https://github.com/tniezurawski" rel="noopener noreferrer" target="_blank">Tomek Nieżurawski (@tniezurawski)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, and <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, Amy Lam and the Learning Team
