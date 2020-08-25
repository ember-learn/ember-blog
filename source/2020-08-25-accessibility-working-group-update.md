---
title: Accessibility Working Group Update
author: Melanie Sumner
tags: Recent Posts, A11y, Accessibility, 2020
responsive: true
---

Back in March, an Accessibility (A11y) Strike Team was formed to address the issues outlined in [Ember RFC Issue 595 - Technical Accessibility Issues in New Ember Apps](https://github.com/emberjs/rfcs/issues/595). This blog post is to update the community on that group's work.

The Strike Team met weekly between [March 25](https://github.com/ember-a11y/core-notes/blob/ember-a11y/ember-a11y/2020-03/march-25.md) and [June 24](https://github.com/ember-a11y/core-notes/blob/ember-a11y/ember-a11y/2020-06/june-24.md). We even managed to celebrate [Global Accessibility Awareness Day](https://blog.emberjs.com/2020/05/21/global-accessibility-awareness-day.html)!

READMORE

There were five items listed in [Issue 595](https://github.com/emberjs/rfcs/issues/595): 

1. Application Language Support
2. Label/Input Support
3. Page Title Support
4. Support for `...attributes`
5. Accessible Routing Support

## Active Work 

### Application Language Support

<!-- alex ignore easy -->

The goal of application language support was to provide a mechanism for new Ember apps to pass [WCAG Success Criteria 3.1.1 - Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page). To meet that goal, [Joseph Sumner](https://github.com/josephdsumner), [Jamie White](https://github.com/jgwhite), [Ava Wroten](https://github.com/hergaiety) and [Melanie Sumner](https://github.com/melsumner) authored [RFC 635](https://emberjs.github.io/rfcs/0635-ember-new-lang.html), which proposed a `--lang` flag for `ember-cli`. This flag would enable developers to declare the application's language while they were creating the app, allowing them to more easily meet this particular success criteria. This RFC was merged on June 12th; the feature itself, authored by [Joseph Sumner](https://github.com/josephdsumner) with help from [Rob Jackson](https://github.com/rwjblue), was merged on August 24th.

To add another layer of support and enhance the overall developer experience, the team also decided that it would be useful to have an interactive way to create new Ember apps. After some discussion, [Melanie Sumner](https://github.com/melsumner) authored [RFC 638](https://emberjs.github.io/rfcs/0638-interactive-app-creation.html). The RFC was accepted and merged on August 10th. Implementation is still pending.

Additional support came from [update to the Ember Guides](https://guides.emberjs.com/release/accessibility/application-considerations/#toc_lang-attribute), in both prose and art, thanks to team members [Ava Wroten](https://github.com/hergaiety) and [Lenora Porter](https://github.com/lenoraporter). [Melanie Sumner](https://github.com/melsumner) also [added a new rule](https://github.com/ember-template-lint/ember-template-lint/pull/1386) to the [Ember Template Lint addon](https://github.com/ember-template-lint/ember-template-lint) called `require-lang`. It checks to make sure that the `lang` attribute is present on the `<html>` attribute. This rule will be effective in v3.0 of the addon, thanks to [Alex Kanunnikov](https://github.com/lifeart) adding the ability to lint `.html` files in [PR 1232](https://github.com/ember-template-lint/ember-template-lint/pull/1232).

### Label and Input Support

There were 3 things the team decided to do in this area:

- Update the guides to provide more explicit guidance
- Provide an addon that would help provide `id`s within a specific context
- Write an RFC to propose a more permanent solution

[Benjamin Jegard](https://github.com/kamikillerto) created the [Ember Context Id Helper addon](https://github.com/KamiKillertO/ember-context-id-helper). The `{{context-id}}` generates a unique `id` for a given context. Because it uses Ember's `guidFor` function under the hood, it will always return the same `id` for the same context. A use case for `context-id` helper is to programmatically associate `<label>`s and `<input>` element using the `<label>` `for` attribute and the `<input>`s `id` attribute. 

This addon took inspiration from the pre-RFC for the (guid-for) helper, which resulted in [RFC 659, which proposes a new built-in template helper](https://github.com/emberjs/rfcs/pull/659), authored by [Steve Szczecina](https://github.com/steveszc). 

[Rajasegar Chandran](https://github.com/rajasegar) and [Jen Weber](https://github.com/jenweber) updated the [Official Ember Guides](https://guides.emberjs.com/release/components/built-in-components/#toc_ways-to-associate-labels-and-inputs) with more explicit information for how to associate `<label>` and `<input>` elements. [Melanie Sumner](https://github.com/melsumner) also authored [ember-component-patterns](https://emberjs-1.gitbook.io/ember-component-patterns/form-components/input) that reflect best practices for `<input>` fields.

Finally, support has been added to the [Ember Template Lint addon](https://github.com/ember-template-lint/ember-template-lint) with rules that require `<input>` elements to have [valid labels](https://github.com/ember-template-lint/ember-template-lint/pull/1105) and that there are [no duplicate labels](https://github.com/ember-template-lint/ember-template-lint/pull/1439). Additional work is now being done to check that there are [no duplicate ids](https://github.com/ember-template-lint/ember-template-lint/pull/1187) as well as [valid use of form groups](https://github.com/ember-template-lint/ember-template-lint/pull/1367).

### Page Title Support

In our [April 8th meeting](https://github.com/ember-a11y/core-notes/blob/ember-a11y/ember-a11y/2020-04/april-08.md), the team discussed how we thought we should approach page title support. More discussion throughout the month led us to support the template-driven support for page titles in Ember apps.

[Benjamin Jegard](https://github.com/kamikillerto), [Melanie Sumner](https://github.com/melsumner) and [Ricardo Mendes](https://github.com/locks) authored [RFC 645](https://github.com/emberjs/rfcs/pull/645), which proposes that the Ember Page Title addon be added to the blueprints for new Ember apps. After Framework Core Team discussion, it was decided that the addon needed some work before the RFC could be accepted. That work was outlined [in an issue](https://github.com/adopted-ember-addons/ember-page-title/issues/167) and is [currently underway](https://github.com/adopted-ember-addons/ember-page-title/pull/168), thanks to community member [Raido Kuli](https://github.com/raido)!

## Planning and Design Stage

After discussion and some analysis, it was determined that some issues required the attention of the [Framework Core Team](https://emberjs.com/teams/) to resolve. 

### Support for `...attributes`

As outlined in [Ember Issue 19026](https://github.com/emberjs/ember.js/issues/19026), `...attributes` does not have a guaranteed merge order, which is problematic for five ARIA attributes that can have multiple values in the form of an ID reference list and the order of these values matters.

### Accessible Routing

There is an ongoing discussion for how to best resolve this issue in a permanent way. Despite a significant amount of [research into the issue](https://github.com/MelSumner/ember-a11y-roadmap/tree/master/rfc-research/router) and [an RFC](https://github.com/emberjs/rfcs/pull/433) that attempts to solve the issue, no known resolution has been agreed upon. 

Until then, developers are encouraged to review the [accessibility section of the Ember guides](https://guides.emberjs.com/release/accessibility/application-considerations/), and consider one of the routing-related addons for use. Options include [ember-self-focused](https://github.com/linkedin/self-focused/tree/master/packages/ember-self-focused), [a11y-announcer](https://github.com/ember-a11y/a11y-announcer), [ember-a11y](https://github.com/ember-a11y/ember-a11y), and [ember-a11y-refocus](https://github.com/ember-a11y/ember-a11y-refocus).

## Ongoing Work

At the final Strike Team meeting, we decided to continue the accessibility work in Ember and became the Ember A11y Working Group. We coordinate in the #dev-ember-a11y channel on [Ember's Discord server](https://discord.gg/emberjs) and meet as needed. Anyone who is interested is welcome to join in!

Work is also underway to upscale the addons in the [Ember-A11y GitHub org](https://github.com/ember-a11y)! We are also continuing to add first-class accessibility support to ember-template-lint; coming soon is support for users to be able to [specifically only run the accessibility-related linting rules](https://github.com/ember-template-lint/ember-template-lint/pull/1443) on a codebase.

## Thank You

A huge thank you to all of the community members who participated in the Ember A11y Strike Team: [Abhilash Ramesh](https://github.com/abhilashlr), [Amy Lam](https://github.com/amyrlam), [Ava Wroten](https://github.com/hergaiety), [Benjamin Jegard](https://github.com/kamikillerto), [Emmanuel Patrick](https://github.com/the-bionic), [Eric Kelly](https://github.com/HeroicEric), [Frédéric Soumaré](https://github.com/hakilebara), [Jamie White](https://github.com/jgwhite), [Jen Weber](https://github.com/jenweber), [John Costanzo](https://github.com/jrock2004), [Joseph Sumner](https://github.com/josephdsumner), [Lennex Zinyando](https://github.com/zinyando), [Lenora Porter](https://github.com/lenoraporter), [Melanie Sumner](https://github.com/melsumner), [Praskovia Root](https://github.com/praskovia-root), [Rajasegar Chandran](https://github.com/rajasegar), [Robert Jackson](https://github.com/rwjblue), [Steve Szczecina](https://github.com/steveszc), and [Seema Shariat](https://github.com/seemajune). 
