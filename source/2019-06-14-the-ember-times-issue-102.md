---
title: The Ember Times - Issue No. 102
author: Preston Sego, Isaac Lee, Chris Ng, Jessica Jordan, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/06/14-the-ember-times-issue-102.html"
responsive: true
---

добры дзень Emberistas! 🐹

This week: more **#EmberJS2019 posts** wanted! ✏️, RFC for an **alternative** to Controllers 🎛, and tips for adding **TypeScript** 🌟!

---

## [More #EmberJS2019 Posts Wanted! ✏️](https://blog.emberjs.com/2019/05/20/ember-2019-roadmap-call-for-posts.html)

Don't forget. This Monday, **June 17th** is the deadline for your #EmberJS2019 post to be a part of Roadmap RFC! Please write a blog post, GitHub Gist, or tweet, then share it with **[roadmap@emberjs.com](mailto:roadmap@emberjs.com)** and Discord community. 🧡

<a class="ember-button ember-button--centered" href="https://blog.emberjs.com/2019/05/20/ember-2019-roadmap-call-for-posts.html">Read the Roadmap RFC</a>

For ideas and inspiration, you can check out all #EmberJS2019 posts at our [community repo](https://github.com/abhilashlr/emberjs2019-posts). If time's not on your side, feel free to write and share your post even after the deadline.

Here are the highlights from this week's posts:

---

[@Turbo87](https://github.com/Turbo87) focused on Ember being able to [support existing technologies](https://twitter.com/TobiasBieniek/status/1135790015177469952):

> @yarnpkg PnP is a fantastic way to reclaim some/a lot of disk space. I started some work last year to support it in Ember CLI, but couldn't finish it in time. We should revisit this!

---

[@efx](https://github.com/efx) shared [thoughts on existing posts](https://www.typedspace.com/2019-ember-js-roadmap/).

> I think we should treat learning as important as the technical ideas that distinguish ember.js. [...] My fabulous colleagues have often asked spot-on, difficult questions about the guide's admonitions to do something a particular way. I too often resort to shallow "that is just the way it is" answers.

---

[@dgeb](https://github.com/dgeb) suggests to [focus on modularity and packaging, both at the framework and application levels](https://www.cerebris.com/blog/2019/06/04/emberjs-2019/).

> [With Ember Octane] it's time for us to focus on how we structure and bind and package those modules, both at the framework and application levels.

---

[@jacojoubert](https://github.com/jacojoubert) shared [four things Ember can improve for even better developer experience](https://gist.github.com/jacojoubert/abfb45bdc8c4a2a5efdab3b37ed0d060).

> Ember needs a way for a component to have direct knowledge of its children, [...] clearer about where they want to end up with the file system layout, [...] spread `...attributes` on multiple elements, [...] and public API and get a full suite of documentation (for AST transforms).

---

[@lifeart](https://github.com/lifeart) asks for a visible roadmap where features being worked on can be moved around ["backlog" or "need discussion" lists](https://gist.github.com/lifeart/71c4aa33fc85874d3cc9cdedd2a22684).

> I see a lot of work around but it's not written in roadmap anywhere. [...] it will be great to have kinda "likes" for non important features, to prioritize them.

---

[@gossi](https://github.com/gossi) covered [reducing complexity, making things explicit, and using Embroider to improve app performance](https://gos.si/blog/ember-2019-reduce-complexity/).

> My wishes for Ember (in 2019) is to slim down the framework is to throw old ballast over board to improve **learning, developer ergonomics** and **align more with the javascript ecosystem**.

---

In a follow-up post, [@melsumner](http://github.com/melsumner) encouraged the community to [examine areas of improvement with a sense of calmness](http://www.melsumner.com/blog/ember/emberjs2019-take-2/):

> The Community as a whole must remember that each and every single one of us are the only ones who will excite others about using Ember. We are the only ones who can pique curiosity of others.

---

[@mehulkar](https://github.com/mehulkar) explained [several reasons that make Ember difficult to learn](https://mehulkar.com/blog/2019/06/emberjs2019-roadmap-response/) and how we can address them.

> The Octane edition will be great for performance and developer ergonomics, but it doesn’t fundamentally bolster (or change) the selling points of Ember. I think we need to aggressively reduce the API surface area at every level from core classes to CLI tooling, converge into the JS ecosystem and “the platform”, and make the application’s inner workings more explicit by both providing low level primitives and using them in an obvious way.

---

[@chancancode](https://github.com/chancancode) examined a few ways to [modernize Ember's templating language](https://gist.github.com/chancancode/ec56a0addf45380853a385694ff0e52b).

> I would like us to address some of the long standing issues and missing features, as well as bring in some of the nice things from the JSX world, while staying true to what makes templates feel so productive in Ember today.

---

[@dfreeman](https://github.com/dfreeman) encourages us to make an [active effort to tear down the Us and Them mentality](https://www.salsify.com/blog/engineering/ember-in-2019-tearing-down-us-and-them).

> The Ember community makes up only a fraction of Web development as a whole, and that necessarily means a lot of the innovation going on is happening outside our figurative walls. [...] Conversely, if we do develop something novel and valuable but it's only possible to use it in the context of an Ember project, that's a missed opportunity for the rest of the world.

---

[@frank06](https://gist.github.com/frank06) is looking forward to increase efforts to [communicate the value of Ember in the wider tech community](https://gist.github.com/frank06/eda33de8858e02ea1bfa4ed8e49766af):

> Ember has fallen off the radar. Pretty much any article about front-end talks about React/Angular/Vue and that's the end of it. They are taking such a big market share that Ember will struggle despite its technical merits. [...] I noticed several Ember developers going out in the wild to talk about Ember. This is great. We need more and better marketing and PR.

---

In his post ["Ember Testing in 2019"](https://medium.com/@gauravmunjal_86037/ember-testing-in-2019-e5f5fac0c023) [@Gaurav0](https://github.com/Gaurav0) highlights the importance of making Ember's testing solution easier to adopt:

> Testing has always been a strength of Ember. [...] Yet, it is still too hard for some organizations to start testing. [...] It is important, that as we go forward as a community, we don’t give up our lead in this area and address these pain points that continue to make testing difficult.

---

[@jrjohnson](https://github.com/jrjohnson) on the other hand wishes for [an approachable guide for migrating classic to single page apps](https://www.jrjohnson.dev/posts/2019-05-26-ember-2019) to help with bringing new developers of JavaScript applications into the Ember community:

<!--alex ignore special-->
> A special section in the guides on integrating Ember.js into a classic app could help interested developers become comfortable with both the technical process and with the idea that the Ember.js community supported this use case.

---

Last but not least, [@abhilashlr](https://github.com/abhilashlr) covered [five areas that we can work on in 2019](https://medium.com/@abhilashlr/emberjs2019-my-wish-list-c64a99547bff):

> [O]n-boarding new and fresh minds from a different background of frameworks into teams that use Ember, has been quite a challenge. Not because the framework is difficult to learn, but the dots around the documentation need a bit more connectivity.

Many more #EmberJS2019 posts to be covered in the next issue! 💜

---

## [RFC for an alternative to Controllers 🎛](https://github.com/emberjs/rfcs/pull/499)
[@NullVoxPopuli](https://github.com/NullVoxPopuli) proposed **two** RFCs to outline how we can eventually remove controllers from Ember.
 - [RFC 499](https://github.com/emberjs/rfcs/pull/499) proposes an alternative way of rendering templates for a particular route. (if some of you remember routable components, this isn't that 😉)
 - [RFC 380](https://github.com/emberjs/rfcs/pull/380) proposes adding a `queryParams` property to the `RouterService` for accessing query parameters anywhere in your app: Routes, Components, etc. 🎉

With these two RFCs, we're heading in the right direction for eventually being able to deprecate Controllers. 🔥🔥🔥 Read, comment, and spread the word! 🖊️

---

## [Static Types in EmberJs? 🌟](https://dev.to/jamesbyrne/static-types-in-emberjs-26b7)

If you are new to adding TypeScript to your Ember project, [@James-Byrne](https://github.com/James-Byrne) has got you covered!

From [James' blog post]](https://dev.to/jamesbyrne/static-types-in-emberjs-26b7), you can learn how types help you catch errors at compile time and keep your documentation up-to-date. You can also find common problems to watch out for when you introduce types to your app.

Have a look and add types today!

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/sdebarros" target="gh-user">@sdebarros</a>, <a href="https://github.com/josemarluedke" target="gh-user">@josemarluedke</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/demersaj" target="gh-user">@demersaj</a>, <a href="https://github.com/runspired" target="gh-user">@runspired</a>, <a href="https://github.com/wycats" target="gh-user">@wycats</a>, <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a>, <a href="https://github.com/bmac" target="gh-user">@bmac</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/qpowell" target="gh-user">@qpowell</a>, <a href="https://github.com/locks" target="gh-user">@locks</a>, <a href="https://github.com/kennethlarsen" target="gh-user">@kennethlarsen</a>, <a href="https://github.com/dnalagatla" target="gh-user">@dnalagatla</a>, <a href="https://github.com/DPK101" target="gh-user">@DPK101</a>, <a href="https://github.com/samselikoff" target="gh-user">@samselikoff</a>, <a href="https://github.com/dcyriller" target="gh-user">@dcyriller</a>, <a href="https://github.com/MelSumner" target="gh-user">@MelSumner</a>, <a href="https://github.com/rajasegar" target="gh-user">@rajasegar</a>, <a href="https://github.com/haochuan" target="gh-user">@haochuan</a>, <a href="https://github.com/thoov" target="gh-user">@thoov</a>, <a href="https://github.com/lougreenwood" target="gh-user">@lougreenwood</a> and <a href="https://github.com/lifeart" target="gh-user">@lifeart</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Preston Sego, Isaac Lee, Chris Ng, Jessica Jordan, Amy Lam and the Learning Team
