---
title: Ember 4.0 released
authors:
  - matthew-beale
  - jen-weber
date: 2021-09-20T00:00:00.000Z
tags:
  - releases
  - '2021'
  - version-4-x
---


Today the Ember project is releasing version 4.0.0 of Ember.js, Ember Data, and
Ember CLI. Ember 4.0 doesn't introduce any new functionality, instead it focuses
the framework by removing long-deprecated APIs and support for legacy platforms.
Our plans for Ember 4.0 were announced in July 2021 in 
[The Road to Ember 4.0](https://blog.emberjs.com/the-road-to-ember-4-0/).

This blog post will help you understand what is being removed in 4.0 and what
migration strategies are available. If you're interested in trying Ember for the
first time today, get started by running:

```bash
npx ember-cli new my-project
cd my-project
npx ember serve # Then visit http://localhost:4200
```

Additionally, today the 4.1 beta cycle begins for these same projects.

Finally, today we're also promoting Ember 3.28 to LTS ([3.28 release
post](https://blog.emberjs.com/ember-3-28-released)).

### Browser Support in 4.0

This release completes the work described in Ember 3.x's browser support policy. Ember 4.0 will support two classes of browsers: Evergreen (those on a weeks-long, auto-upgrade release cycle) and non-evergreen. This classification system allows us to create a rolling minimum version for evergreen browsers, while using a more traditional, pinned minimum version for non-evergreen browsers.

Specifically, the Ember 4.x release policy includes support for Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari on desktop and mobile. It does not include support for any version of Internet Explorer.

Read more about this change in the [deprecation guide](https://deprecations.emberjs.com/v3.x/#toc_3-0-browser-support-policy) and at Ember's [browser support policy page](https://emberjs.com/browser-support/).


## Changes in Ember.js 4.0

---

Ember.js is the core of the Ember framework. It provides routing, rendering, and
dependency injection features.

Ember.js 4.0 introduces no new public API or deprecations. Instead, it is
comprised of bug fixes and the removal of previously deprecated public API from
the 3.x cycle.

### APIs Removed in 4.0

Below we've listed some of the most significant API removals in Ember.js 4.0.
and for an exhaustive list of removals, see the [Ember.js 3.x deprecation
guide](https://deprecations.emberjs.com/v3.x).

TODO - list out key removals

For more details on the changes in Ember.js 4.0, please review the
[Ember.js 4.0.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.0.0).

### Deprecations added in 4.0

TODO - list deprecations

## Changes in Ember Data 4.0

---

Ember Data is the official data persistence library for Ember.js applications.

TODO

For more details on the changes in Ember Data 4.0, please review the
[Ember Data 4.0.0 release page](https://github.com/emberjs/data/releases/tag/v4.0.0).

## Changes in Ember CLI 4.0

---

Ember CLI is the command line interface for managing and packaging Ember.js
applications.

TODO

For more details on the changes in Ember CLI 4.0 and detailed upgrade
instructions, please review the [Ember CLI 4.0.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.0.0).

## Migrating to Ember 4.0

---

TODO

<!-- 
Is there a legacy addon for Ember 4??? See blurb below from Ember 3.

To ensure as many applications as possible make the transition from 2.x to
3.x, all public APIs removed in Ember.js 3.0 have been extracted into the
[ember-2-legacy](https://github.com/emberjs/ember-2-legacy) addon. This addon
will be supported through Ember.js 3.4, the first LTS of the 3.x series.

The addon maintains support for all APIs in the [Ember.js 2.x deprecations
guide](https://www.emberjs.com/deprecations/v2.x/). Please note that these are
only APIs from Ember.js itself, and there is no extended support addon for
features removed from Ember Data or Ember CLI. -->

Applications that need to upgrade through several versions may want to consider
the
[ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow)
addon to isolate individual deprecations.

### Thank You!

TODO
