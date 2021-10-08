---
title: The Ember Times - Issue No. 190
authors:
  - jen-weber
  - chris-ng
  - isaac-lee
date: 2021-10-08T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹

It's October, and that means its time for Hacktoberfest!
Release of ember-popperjs 🎉
Try out the first beta release of Ember 4.0 today!

---

## [🎃 1. Hacktoberfest](https://hacktoberfest.digitalocean.com/)

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is an annual, worldwide celebration organized by DigitalOcean and sponsored by many companies that use open source software.
Many Ember projects are participating this year! If you complete the challenge,
you can get a prize!

To participate:

- Sign up anytime between October 1 and October 31.
- Make 4 approved Pull Requests to public repositories on GitHub that have the `hacktoberfest` topic.
Take a moment to learn about what goes into an ["approved" Pull request](https://hacktoberfest.digitalocean.com/resources/participation).
- If you are among the first 50,000 developers who complete the challenge, you get a prize. This year, you can select between a T-shirt and a tree planted in your name.
- Join the [`#hacktoberfest`](https://discord.com/channels/480462759797063690/496453502298750988) channel in the [Ember Community Discord](https://discord.gg/emberjs)
to collaborate with other participants!

### Ember projects you can help out with

Are you wondering what to work on?

There are [81 Ember projects participating](https://github.com/search?q=topic%3Aember+topic%3Ahacktoberfest)!
Here's a list of [recently updated issues](https://github.com/search?o=desc&q=topic%3Aember+topic%3Ahacktoberfest&s=updated&type=Repositories) in those repositories.

Ember 4.0 is coming up, and so one area of need is to help addon maintainers
upgrade to version 3.28 and [resolve deprecations](https://deprecations.emberjs.com/). Even if addon authors
do not have issues open for this work, you can open one and offer to help.

You can also visit [Ember's Help Wanted](https://help-wanted.emberjs.com/) to find good issues to work on. The Ember Learning Team and others are curating some super beginner-friendly issues. In Help Wanted, you can find these issues, along with more intermediate and advanced issues. If you want to help, comment on an issue to let others know that you are working on it. If the issue you want to work on is taken, try asking if the other volunteers would like to collaborate!

### Connect with other participants

Join the `#hacktoberfest` channel in the [Ember Community Discord](https://discord.gg/emberjs) to connect with other developers. You can find a buddy to pair with, a mentor to guide you, or toss around ideas.

If you are someone who is willing to help mentor new contributors, please let us know in `#hacktoberfest` on Discord. Addon maintainers are welcome to post issues they need help with too!

<!--alex ignore gal-guy -->
Additionally, there are several more groups within the Ember Community Discord where you can find others to collaborate with. There are Discord channels for women, LGBTQ+, and people of color. If you belong to one of those groups, you can ask to join in the `#discord-server-admin` channel.

---

## [Release of ember-popperjs 🎉](https://twitter.com/nullvoxpopuli/status/1444713887220240400)

[NullVoxPopuli (@NullVoxPopuli)](https://github.com/NullVoxPopuli) released v1.0.0 of [ember-popperjs](https://github.com/NullVoxPopuli/ember-popperjs) which provides a single `<PopperJS>` component with with APIs to create popover, tooltips, and more!

The addon provides 2 modifiers: `{{trigger}}` which sets up the target element for the popover element to position itself to – and `{{popover}}` which attaches to the element that is the container of the popover content. There are also `placement` and `options` attributes which can be applied to [customize](https://popper.js.org/docs/v2/constructors/#options) the `<PopperJS>` behaviour.

```hbs
<PopperJS as |trigger popover|>
  <button {{trigger}} {{on "click" this.yourClickHandler}}>
    {{yield to="trigger"}}
  </button>

  {{#if this.yourVisibilityIndicator}}
    <div {{popover}}>
      This is a popover!
      {{yield to="default"}}
    </div>
  {{/if}}
</PopperJS>
```

Note that PopperJS does not provide styles for making a popover nor does it provide click handlers for showing and hiding the popover. Try it out today, it’s available on [GitHub](https://github.com/NullVoxPopuli/ember-popperjs)!

## [Ember 4.0.0-beta.1 released ✨](https://github.com/ember-cli/ember-cli/releases/tag/v4.0.0-beta.1)

On October 4, the first beta of Ember 4.0 has been released. It contains improvements to documentation as well as a few new features:

- Add `addons.exclude` and `addons.include` options (implements [RFC #639](https://github.com/emberjs/rfcs/pull/639))
- Add `pnpm` support to `ember install` command
- Default `ember new` and `ember addon` to use GitHub Actions (implements [RFC #696](https://github.com/emberjs/rfcs/pull/696))
- Update app and addon blueprints to use `ember-auto-import@v2`

For more information about the 4.0.0-beta.1 release, you can visit the [release page on GitHub](https://github.com/ember-cli/ember-cli/releases/tag/v4.0.0-beta.1). We encourage you try it out and provide feedback.

---

## [🐹 3. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 4. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 5. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 6. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 7. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [🐹 8. Section title in sentence case](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<add the contributor in the post in format "FirstName LastName (@githubUserName)" linked to their GitHub account>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add short title to "SOME-INTRO-HERE">

---

## [👏 Contributors' corner](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/ef4" rel="noopener noreferrer" target="_blank">Edward Faulkner (@ef4)</a>, <a href="https://github.com/lfrost" rel="noopener noreferrer" target="_blank">Lyle Frost (@lfrost)</a>, <a href="https://github.com/jherdman" rel="noopener noreferrer" target="_blank">James Herdman (@jherdman)</a>, <a href="https://github.com/jfdnc" rel="noopener noreferrer" target="_blank">Jacob (@jfdnc)</a>, <a href="https://github.com/ddzz" rel="noopener noreferrer" target="_blank">Darius Dzien (@ddzz)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/SergeAstapov" rel="noopener noreferrer" target="_blank">Sergey Astapov (@SergeAstapov)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/bertdeblock" rel="noopener noreferrer" target="_blank">Bert De Block (@bertdeblock)</a>, <a href="https://github.com/aoifehannigan" rel="noopener noreferrer" target="_blank">Aoife Hannigan (@aoifehannigan)</a>, <a href="https://github.com/patocallaghan" rel="noopener noreferrer" target="_blank">Pat O'Callaghan (@patocallaghan)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/fozy81" rel="noopener noreferrer" target="_blank">Tim (@fozy81)</a>, <a href="https://github.com/dcyriller" rel="noopener noreferrer" target="_blank">Cyrille (@dcyriller)</a>, <a href="https://github.com/NullVoxPopuli" rel="noopener noreferrer" target="_blank">@NullVoxPopuli</a>, <a href="https://github.com/nlepage" rel="noopener noreferrer" target="_blank">Nicolas Lepage (@nlepage)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/Turbo87" rel="noopener noreferrer" target="_blank">Tobias Bieniek (@Turbo87)</a>, <a href="https://github.com/chriskrycho" rel="noopener noreferrer" target="_blank">Chris Krycho (@chriskrycho)</a>, and <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [🤓 Connect with us](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Jen Weber, Isaac Lee, Chris Ng, the crowd and the Learning Team
