---
title: Ember 4.5 Released
authors:
  - jen-weber
date: 2022-06-20T00:00:00.000Z
tags:
  - releases
  - '2022'
  - version-4-x
---

Today the Ember project is releasing version 4.5 of Ember.js, Ember Data, and Ember CLI.

This release kicks off the 4.5 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](https://blog.emberjs.com/new-ember-release-process/)
- [The Ember Project](https://blog.emberjs.com/ember-project-at-2-0/)
- [Ember LTS Releases](https://blog.emberjs.com/announcing-embers-first-lts/)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 4.5

Ember.js 4.5 is an incremental, backwards compatible release of Ember with bug fixes, performance improvements, and minor deprecations.

#### Bug Fixes

Ember.js 4.5 introduced 0 bug fixes.

#### Features

Ember.js 4.5 introduced 2 new features.

1. Plain function as helpers
2. `renderSettled` is now public API

##### 1. Plain functions as helpers

You can now use plain functions as helpers in your component templates. This helps make the relationship between Ember component templates and their JavaScript class more intuitive.
The full documentation can be found in [TODO link to guides]()

For example, here we create a method `double` and use it directly in a template:

```js
// my-component.js

import Component from '@glimmer/component';

export default class MyComponent extends Component {
  double = num => num * 2;
}
```

```hbs
// my-component.hbs

{{this.double 2}}

<SomeComponent @foo={{this.double 2}} />
```

Previously, you would need to [write a separate helper](https://guides.emberjs.com/release/components/helper-functions/#toc_writing-a-helper-function) in order to accomplish this.

This feature was made possible when [RFC 756](https://rfcs.emberjs.com/id/0756-helper-default-manager) was implemented.

##### 2. `renderSettled` is now public API

`renderSettled` is a method you can use in your application tests. For example, in a test, you might want to update some tracked state and then run some assertions after rendering has completed. The `renderSettled` method returns a promise which fulfills when rendering has completed.

```
import { renderSettled } from '@ember/renderer';
```

`renderSettled` is one chapter in some upcoming improvements to Ember's testing story. The ongoing work and goals are described in [RFC 785](https://rfcs.emberjs.com/id/0785-remove-set-get-in-tests).

#### Deprecations

Ember.js 4.5 introduced 0 deprecations.


For more details on changes in Ember.js 4.5, please review the [Ember.js 4.5.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.5.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 4.5

#### Bug Fixes

Ember Data 4.5 introduced TODO bug fixes.

#### Features

Ember Data 4.5 introduced TODO features.

#### Deprecations

Ember Data 4.5 introduced TODO deprecations.

For more details on changes in Ember Data 4.5, please review the
[Ember Data 4.5.0 release page](https://github.com/emberjs/data/releases/tag/v4.5.0).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

You may upgrade Ember CLI using the `ember-cli-update` project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 4.5

This Ember CLI release drops support for Node 12. Node 12 reached "end of life"status (it no longer receives security updates) in April 2022.

#### Bug Fixes

Ember CLI 4.5 introduced TODO bug fixes.

#### Features

Ember CLI 4.5 introduced TODO features.

#### Deprecations

Ember CLI 4.5 introduced TODO deprecations.

For more details on the changes in Ember CLI 4.5 and detailed upgrade
instructions, please review the [Ember CLI 4.5.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v4.5.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
