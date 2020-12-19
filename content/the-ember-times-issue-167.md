---
title: The Ember Times - Issue No. 167
authors:
  - ava-wroten
  - chris-ng
  - isaac-lee
  - amy-lam
date: 2020-11-06T00:00:00.000Z
tags:
  - newsletter
  - ember-a11y
  - accessibility
  - '2020'
---


👋 Emberistas! 🐹

New Release and APIs for ember-a11y-testing 🎉,
two deprecation RFCs merged 🙌,
new Octane ready release of the a11y focused ember-select-light 🔦,
and last, but not least, ember-key-manager v1.0.0 ⌨️!

<!-- READMORE -->

---

## [Release 4.0.0 of ember-a11y-testing 🎉](https://github.com/ember-a11y/ember-a11y-testing/releases/tag/v4.0.0)

[Steve Calvert (@scalvert)](https://github.com/scalvert) released 4.0.0 of [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing) which included changes to the API to make it hands off in terms of running accessibility audits. The `ember-a11y-testing` library is a wrapper around [Deque Labs'](https://github.com/dequelabs) [axe-core](https://github.com/dequelabs/axe-core) accessibility testing engine. It integrates into your testing environment using either a one-time setup, or in individual tests using an `a11yAudit()` test helper.

With the new 4.0.0 release, you can do audit of your code using the regular test helper APIs by importing the [`setupGlobalA11yHooks` function](https://github.com/ember-a11y/ember-a11y-testing#setupglobala11yhooks-usage) and invoking it in `tests/test-helper.js`. The `setupGlobalA11yHooks` function lets you write your own strategy on when to invoke the audit using the `shouldAudit` argument so you can run it all the time, for all the configured helpers, every n tests, for specific modules or test names, by route, etc.

Read more about the new changes to [ember-a11y-testing on GitHub](https://github.com/ember-a11y/ember-a11y-testing#setupglobala11yhooks-usage)!

---

## [Two deprecation RFCs merged 🙌](https://github.com/emberjs/rfcs)

On November 6th, the Ember framework team met to discuss [RFC 673: Deprecate `tryInvoke`](https://github.com/emberjs/rfcs/pull/673) and [RFC 674: Deprecate transition methods of controller and route](https://github.com/emberjs/rfcs/pull/674). The team decided to move both RFCs forward to the **Accepted stage**, which will allow the author and others to work on implementation.

We'd like to extend our thanks to [Bach Vo (@bachvo)](https://github.com/bachvo) and [Jeldrik Hanschke (@jelhan)](https://github.com/jelhan) for designing their RFCs and addressing the community's feedback. For more information, please visit the links to the RFCs above.

---

## [Release 2.0.x of ember-select-light 🔦](https://github.com/ember-a11y/ember-select-light/releases/tag/v2.0.0)

[Ava Wroten (@hergaiety)](https://www.wroten.me/) released 2.0.0 of [ember-select-light](https://github.com/ember-a11y/ember-select-light/). You will find that the addon has moved to the [ember-a11y org](https://github.com/ember-a11y) (join us on [Discord in #dev-ember-a11y](https://discord.com/invite/emberjs)) and is **Octane ready**.

<!--alex ignore simple-->
**ember-select-light is a simple and accessible `<select>` dropdown component** ✨. With its API, you can pass in a flat or nested array of options, or yield out to your template code that handles options. The component pairs nicely with the latest [ember-component-patterns for Select Elements](https://emberjs-1.gitbook.io/ember-component-patterns/form-components/select-element).

The 2.0.0 release drops support for older versions of Node and Ember. At minimum, Node v10 LTS and Ember.js v3.16 LTS are suggested. It also introduces some breaking syntax changes (see the [upgrade guide](https://github.com/ember-a11y/ember-select-light/blob/main/UPGRADE.md)). Lastly, documentation has been updated.

Read more about the new changes to [ember-select-light on GitHub](https://github.com/ember-a11y/ember-select-light/releases/tag/v2.0.0)!

---

## [ember-key-manager v1.0.0 ⌨️](https://github.com/IcarusWorks/ember-key-manager)

ember-key-manager is a service for un(binding) key up and down events. [Bryan Crotaz (@BryanCrotaz)](https://github.com/BryanCrotaz) submitted a PR that brought [IcarusWorks/ember-key-manager](https://github.com/IcarusWorks/ember-key-manager) up to v1.0.0! With the major release, ember-key-manager now fully supports Octane, including template modifiers that can hook key presses to run component code. Learn more about ember-key-manager and similar addons under the [Keyboard Events tag on Ember Observer](https://emberobserver.com/categories/keyboard-events). 

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/bobisjan" rel="noopener noreferrer" target="_blank">Jan Bobisud (@bobisjan)</a>, <a href="https://github.com/mehulkar" rel="noopener noreferrer" target="_blank">Mehul Kar (@mehulkar)</a>, <a href="https://github.com/raido" rel="noopener noreferrer" target="_blank">Raido Kuli (@raido)</a>, <a href="https://github.com/Leooo" rel="noopener noreferrer" target="_blank">Lionel Viet (@Leooo)</a>, <a href="https://github.com/hergaiety" rel="noopener noreferrer" target="_blank">Ava Gaiety Wroten (@hergaiety)</a>, <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/Ian-Yy" rel="noopener noreferrer" target="_blank">Yyee (@Ian-Yy)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/rreckonerr" rel="noopener noreferrer" target="_blank">Volodymyr Radchenko (@rreckonerr)</a>, <a href="https://github.com/sclaxton" rel="noopener noreferrer" target="_blank">Spencer Claxton (@sclaxton)</a>, <a href="https://github.com/jwlawrence" rel="noopener noreferrer" target="_blank">Joshua Lawrence (@jwlawrence)</a>, <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/mk2" rel="noopener noreferrer" target="_blank">Haruka Asakura (@mk2)</a>, <a href="https://github.com/lukemelia" rel="noopener noreferrer" target="_blank">Luke Melia (@lukemelia)</a>, <a href="https://github.com/marcoow" rel="noopener noreferrer" target="_blank">Marco Otte-Witte (@marcoow)</a>, <a href="https://github.com/neojp" rel="noopener noreferrer" target="_blank">Joan Piedra (@neojp)</a>, <a href="https://github.com/chiragpat" rel="noopener noreferrer" target="_blank">Chirag Patel (@chiragpat)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/esbanarango" rel="noopener noreferrer" target="_blank">Esteban Arango Medina (@esbanarango)</a>, <a href="https://github.com/ratatatCat" rel="noopener noreferrer" target="_blank">@ratatatCat</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/jamescdavis" rel="noopener noreferrer" target="_blank">James C. Davis (@jamescdavis)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/boris-petrov" rel="noopener noreferrer" target="_blank">Boris Petrov (@boris-petrov)</a>, <a href="https://github.com/vvkpd" rel="noopener noreferrer" target="_blank">Vivek Pandey (@vvkpd)</a>, <a href="https://github.com/xg-wang" rel="noopener noreferrer" target="_blank">Thomas Wang (@xg-wang)</a>, <a href="https://github.com/aguynamedryan" rel="noopener noreferrer" target="_blank">Ryan Duryea (@aguynamedryan)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/JamesS-M" rel="noopener noreferrer" target="_blank">@JamesS-M</a>, <a href="https://github.com/bendemboski" rel="noopener noreferrer" target="_blank">Ben Demboski (@bendemboski)</a>, <a href="https://github.com/tylerturdenpants" rel="noopener noreferrer" target="_blank">Ryan Mark (@tylerturdenpants)</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/jbryson3" rel="noopener noreferrer" target="_blank">John Bryson (@jbryson3)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/drewlee" rel="noopener noreferrer" target="_blank">Andrew A Lee (@drewlee)</a>, <a href="https://github.com/kategengler" rel="noopener noreferrer" target="_blank">Katie Gengler (@kategengler)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, and <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a> for their contributions to Ember and related repositories! 💖</p>

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

Ava Wroten, Chris Ng, Isaac Lee, Amy Lam and the Learning Team
