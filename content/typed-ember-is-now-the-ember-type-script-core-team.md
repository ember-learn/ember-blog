---
title: Typed Ember is now the Ember TypeScript Core Team!
authors:
  - chris-krycho
date: 2023-03-09T18:40:00.000Z
tags:
  - '2022'
  - typescript
  - announcement
  - community

---

Last Friday, the Ember project merged [RFC #0724: Official TypeScript Support](https://emberjs.github.io/rfcs/0724-road-to-typescript.html), committing to make TypeScript an officially-supported language for Ember.js. To make that a reality, we also need to have a team dedicated to maintaining Ember’s types and its TypeScript compiler integrations.

Happily, we already have a group of people who do that! For the last five years, Ember has had community-driven TypeScript support, led by the past and present members of the Typed Ember team. 

The Typed Ember team joins the Framework, Learning, CLI, and Data Core teams as a new Core sub-team: the **Ember TypeScript Core Team**. Its initial members are the current Typed Ember team: [James Davis (@jamescdavis)](https://github.com/jamescdavis), [Dan Freeman (@dfreeman)](https://github.com/dfreeman), and [Chris Krycho (@chriskrycho)](https://github.com/chriskrycho).

The team will continue to do all the things they have been doing:

- maintaining TypeScript build integration with `ember-cli-typescript` and `ember-cli-babel`
- investing in type-checked templates via Glint
- sustaining the community types on DefinitelyTyped (until they are sunset!)
- providing input on TypeScript implications for RFCs
- advising the community about best patterns with TypeScript and Ember

They will also lead and support the effort to enable Ember to publish types natively, advise and collaborate with the Learning team on the work to document TypeScript as a supported language for Ember, and collaborate on key design questions with the Framework team.

From one angle, you could see this as nothing much changing, and you’d be right: the same people who have led this effort for years will keep doing what they have been. From another, though, this is a huge deal: we have never added a new officially-supported language before, and adding new Core teams is rare! This marks a significant shift for Ember. We haven’t made a formal change to our governance in three and a half years, and we have only made a handful of these changes over the whole history of the project. *Getting TypeScript right really matters to us, and we’re investing accordingly.*

We’d also like to take this opportunity to say thanks to the many contributors who have helped get us here, and *especially* to emeritus team members Derek Wickern and Mike North, who did an enormous amount of work to make Ember’s TypeScript story viable and sustainable.

<!-- alex ignore just-->
We’re incredibly excited about the future of TypeScript in Ember—and we’re just getting started.
