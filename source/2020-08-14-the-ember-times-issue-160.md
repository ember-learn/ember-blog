---
title: The Ember Times - Issue No. 160
author: Melanie Sumner, Chris Ng, Isaac Lee, Jared Galanis, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/08/14-the-ember-times-issue-160.html"
responsive: true
---

👋 Emberistas! 🐹

"I contribute to Ember" with Isaac Lee and Jared Galanis 🙌,
how to participate in the Ember RFC process 🚀,
EmberFest: Share your virtual Hello with us! 🐹,
learn how to use csz in your Ember app 🌟,
and last, but not least, ember-cli-next: An Experimental Terminal UI for `ember-cli` 🔥!

READMORE

---

## ["I contribute to Ember" with Isaac Lee and Jared Galanis 🙌](https://discuss.emberjs.com/t/i-contribute-to-ember-with-isaac-lee-and-jared-galanis/18127)

<div class="float-right padded portrait-frame">
  <img alt="Isaac Lee" title="Isaac Lee - Contributor to Ember" src="/images/blog/emberjstimes/isaac_lee.jpg" />
</div>

<div class="float-right padded portrait-frame">
  <img alt="Jared Galanis" title="Jared Galanis - Contributor to Ember" src="/images/blog/emberjstimes/jared_galanis.jpg" />
</div>

In the **15th edition** of our contributor interview series, we're highlighting The Ember Times' very own [Isaac Lee (@ijlee2)](https://github.com/ijlee2) and [Jared Galanis (@jaredgalanis)](https://github.com/jaredgalanis). We'd like to thank Isaac and Jared for their contributions to the Ember community, and congratulate them for joining the Ember Learning Core Team!

Check out the full interview on [the Ember Discuss forum](https://discuss.emberjs.com/t/i-contribute-to-ember-with-isaac-lee-and-jared-galanis/18127). They discuss their biggest motivations in contributing to Ember and how they got started in open source.

<a class="ember-button ember-button--centered" href="https://discuss.emberjs.com/t/i-contribute-to-ember-with-isaac-lee-and-jared-galanis/18127">Read more</a>

<p style="font-style: italic;">The idea behind these interviews is to provide community members with more information and insight into open source contributions, learning resources, and community events. Contributors to the community gain a platform to share their thoughts on their own experiences and learnings as they were contributing to Ember. Our hope is that it gives first-time and advancing contributors a better sense of the fact that everyone starts out small, and that anyone can have a big impact on the community.</p>

---

## [How to participate in the Ember RFC process 🚀](https://github.com/emberjs/rfcs/)

The Request For Comments (RFC) process is intended to provide a consistent and controlled path for new features to enter the Ember.js framework.

Many changes, including bug fixes and documentation improvements, can be implemented and reviewed via the normal GitHub pull request workflow on the appropriate repo. Some changes though are "substantial", and we ask that these be put through a bit of a design process and produce a consensus among the Ember core teams.

So, what's a good way to propose **your awesome idea**? Well, there are a few options: 

1. Chat with others about your idea in the [#dev-rfc channel](https://discord.com/channels/480462759797063690/500803406676492298) in [Discord](https://discord.gg/emberjs). This is a good way to get some initial feedback on your idea from folks in the community who have experience writing RFCs. They can also help you figure out if an RFC is already in the core team's backlog, and what next steps might look like. 
1. Submit an issue to the [RFC repo](https://github.com/emberjs/rfcs/). This is a great way to receive feedback <span style="font-style: italic;">before</span> you start writing the RFC, and will help you maintain efficiency.

Once you are ready to write the RFC for your awesome idea, there are a few important steps: 

1. Read through the entire [README](https://github.com/emberjs/rfcs/) so that you understand what your RFC needs to succeed. Sometimes folks will skip over the ["How we teach this"](https://github.com/emberjs/rfcs/blob/master/0000-template.md#how-we-teach-this) section or the ["Alternatives"](https://github.com/emberjs/rfcs/blob/master/0000-template.md#alternatives) section of the template, and both of those are important to include for the RFC to proceed. 
1. Find a core team member to champion the RFC! All RFCs need a core team champion, so review the [team list](https://emberjs.com/teams/) to see who you should approach about championing your issue. That core team member makes sure that your RFC is discussed in meetings, so it's essential to have one if you want your awesome idea to succeed! 

If you're interested in eventually writing RFCs but don't know where to start, here are some steps you can take on your own:

* Read through the [RFCs that have been accepted](https://emberjs.github.io/rfcs/introduction.html). Look for the patterns, what similarities do they have?
* Read through the [issues in the RFC repo](https://github.com/emberjs/rfcs/issues). Sometimes folks will know that an RFC needs to be written, but they don't have time to write it. That's a great place to start digging in.
* Read through [RFC pull requests](https://github.com/emberjs/rfcs/pulls) and read the questions and comments on the PRs. Look for patterns there too- can you anticipate questions and answer them in your RFC before they are asked?

All in all, the RFC process is important to the growth of our community, but it can definitely be a little bit intimidating to know where to start if you're not used to writing RFCs! Hopefully this quick guide gives you a good idea of where to start.

---

## [Learn how to use csz in your Ember app 🌟](https://dev.to/rajasegar/ember-csz-a-css-in-js-solution-for-styling-in-ember-2mpp)

Last month, [Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar) gave a [virtual talk](https://www.youtube.com/watch?v=uZrVHGEjLhs) at ESNextConf. 🎉 He talked about [csz](https://github.com/lukejacksonn/csz), a super tiny, framework-agnostic CSS-in-JS solution.

In addition, Rajasegar published an addon called [ember-csz](https://github.com/rajasegar/ember-csz). It provides a template helper so that we can try out `csz` in our Ember app.

```handlebars
{{!-- app/components/my-button.hbs --}}
<button class={{this.styleForButton}} type="button">
  {{@label}}
</button>
```

```javascript
// app/components/my-button.js
import Component from '@glimmer/component';
import csz from 'csz';

export default class MyButtonComponent extends Component {
  styleForButton = csz`
    background: ${this.args.primary ? 'palevioletred' : 'white'};
    color: ${this.args.primary ? 'white' : 'palevioletred'};
    padding: 0.25em 1em;
  `;
}
```

Be sure to check out Rajasegar's [talk](https://www.youtube.com/watch?v=uZrVHGEjLhs) and [blog post about ember-csz](https://dev.to/rajasegar/ember-csz-a-css-in-js-solution-for-styling-in-ember-2mpp) to learn more!

---

## [ember-cli-next: An Experimental Terminal UI for `ember-cli` 🔥](https://twitter.com/rajasegar_c/status/1292731035164188673)

If you haven't seen [Rajasegar Chandran's (@rajasegar)](https://github.com/rajasegar) fantastic new experimental terminal UI for `ember-cli`, [`ember-cli-next`](https://github.com/rajasegar/ember-cli-next), you may want to check it out.

There are some pretty compelling ideas being presented in `ember-cli-next` around what command line user interface tooling could look like in the future. `ember-cli-next` allows `ember-cli` commands and project tasks to be displayed within a single unified terminal window.

There is also a brief video demo to watch on [YouTube](https://www.youtube.com/watch?v=do9sRiOxenA&feature=youtu.be) that shows some of the things that `ember-cli-next` can do, and you can take a look at the repo [here](https://github.com/rajasegar/ember-cli-next).

---

## [EmberFest: Share your virtual Hello with us! 🐹](https://mailchi.mp/a241158d3c66/welcome-to-the-line-up-of-emberfest-6442608?e=7124c8fef8)

[EmberFest](http://emberfest.eu/), the European EmberJS conference, is [skipping](https://twitter.com/EmberFest/status/1263453851459497984) this year’s conference due to COVID-19. However, the organizers of the conference are [looking for people](https://mailchi.mp/a241158d3c66/welcome-to-the-line-up-of-emberfest-6442608?e=7124c8fef8) who are interested in sharing a personal message or a short Hello video virtually.

If this sounds right up your alley you can [upload your video on Dropbox](https://www.dropbox.com/request/4YAbKdJmvD9E0yqjVsz4).

Alternatively, if webcams aren’t your thing, maybe you have some fun video impressions from the past years that capture the spirit of the conference. Ember developers strolling through that year's city, at the dinner party, or while in transit. Anything that reflects the EmberFest vibe and builds anticipation for our next in-person gathering is great and much appreciated!

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/alexlafroscia" rel="noopener noreferrer" target="_blank">@alexlafroscia</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">@amyrlam</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">@bmish</a>, <a href="https://github.com/buschtoens" rel="noopener noreferrer" target="_blank">@buschtoens</a>, <a href="https://github.com/chadhietala" rel="noopener noreferrer" target="_blank">@chadhietala</a>, <a href="https://github.com/chrism" rel="noopener noreferrer" target="_blank">@chrism</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">@chrisrng</a>, <a href="https://github.com/davelindquist-egistix" rel="noopener noreferrer" target="_blank">@davelindquist-egistix</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">@ef4</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">@ijlee2</a>, <a href="https://github.com/jamescdavis" rel="noopener noreferrer" target="_blank">@jamescdavis</a>, <a href="https://github.com/jaredgalanis" rel="noopener noreferrer" target="_blank">@jaredgalanis</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">@jherdman</a>, <a href="https://github.com/kiwiupover" rel="noopener noreferrer" target="_blank">@kiwiupover</a>, <a href="https://github.com/lukemelia" rel="noopener noreferrer" target="_blank">@lukemelia</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">@mansona</a>, <a href="https://github.com/maxhq" rel="noopener noreferrer" target="_blank">@maxhq</a>, <a href="https://github.com/Mikek2252" rel="noopener noreferrer" target="_blank">@Mikek2252</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/ondrejsevcik" rel="noopener noreferrer" target="_blank">@ondrejsevcik</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">@pzuraq</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">@rwjblue</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">@rwwagner90</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">@snewcomer</a>, <a href="https://github.com/sourabhmandal" rel="noopener noreferrer" target="_blank">@sourabhmandal</a>, <a href="https://github.com/Turbo87" rel="noopener noreferrer" target="_blank">@Turbo87</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Melanie Sumner, Chris Ng, Isaac Lee, Jared Galanis, Amy Lam, and the Learning Team
