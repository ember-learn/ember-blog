---
title: Announcing Glint 1.0
authors:
  - dan-freeman
  - the-ember-typescript-team
date: 2023-04-27T15:00:00.000Z
tags:
  - '2023'
  - typescript
  - announcement
---

After two years in public preview and contributions from dozens of community members, the Ember
TypeScript team is excited to announce the release of [Glint 1.0][glint-repo]!

While Glint has been available as an unstable prerelease for some time, the project has now
reached a level of stability and functionality that we're comfortable recommending it even for
large applications with a low tolerance for churn.

## What is Glint?

In an Ember application, templates are the connective glue that bind together all the different
pieces of your codebase. On its own, however, TypeScript can't see what's happening in your
templates, so any typechecking or other helpful aids it provides can only ever operate upon
small islands of disconnected code, and all of your connections are completely opaque to the
tooling.

[Glint][glint-docs] enables TypeScript to understand your templates as well, meaning you get
end-to-end type safety for your entire application. You also get editor support for things like
documentation and type info on hover, jumping to definitions, and automated codefixes and
refactorings.

![A component argument is renamed in a TS file and propagated to templates that reference it, then vice versa.](/images/blog/2023-04-27-glint-1-0/rename.gif)

<!-- alex ignore just -->

And, just like your editor can use TypeScript under the covers to provide many of those features
even in vanilla JavaScript files, Glint can do the same! For example, here Glint is showing info in a template with a JS backing class:

![Type info and documentation prose displayed on hover in a template with a plain JavaScript backing class.](/images/blog/2023-04-27-glint-1-0/js-info.png)

Glint also works even better with the `<template>` tag feature which enables Glimmer and Ember apps
to put their component templates right next to their JavaScript or TypeScript code.

## Get Started

If you've been holding off on Glint due to its experimental status or stability disclaimers, now is
a great time to explore [setting it up in your application][setup] or [adding Glint types to addons
you maintain][authoring-addons]. And again, Glint can be useful even in [apps with no TypeScript at
all][js-apps]!

## What's Next?

As both Ember and TypeScript continue to evolve, we'll be working in Glint to keep pace with those
changes. There are also plenty of opportunities still to add further bells and whistles to the
language server to reach full parity with native TypeScript.

We’d like to take this opportunity to say thanks to the many contributors who have helped get us
here, trying out early versions of Glint in their projects, reporting issues and opening PRs.
Reaching this point would not have been possible without the community and those contributors—thank
you!

[glint-repo]: https://github.com/typed-ember/glint
[glint-docs]: https://typed-ember.gitbook.io/glint
[setup]: https://typed-ember.gitbook.io/glint/environments/ember/installation
[authoring-addons]: https://typed-ember.gitbook.io/glint/environments/ember/authoring-addons
[js-apps]: https://typed-ember.gitbook.io/glint/using-glint/with-js
