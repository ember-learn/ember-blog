---
title: Ember 4.5 Released
authors:
  - jen-weber
  - chris-krycho
date: 2022-07-12T00:00:00.000Z
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
2. A new `renderSettled` test helper

##### 1. Plain functions as helpers

You can now use plain functions as helpers in your component templates. This helps make the relationship between Ember component templates and their JavaScript class more intuitive.

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

We're working on updating the Guides to cover this pattern.
For background, check out [RFC 756](https://rfcs.emberjs.com/id/0756-helper-default-manager), which designed this feature.
Also, keep your eyes on this blog: we will have a dedicated blog post with a deep dive on this new capability in the next week or two!

##### 2. A new `renderSettled` test helper

Under the hood, Ember's tests use a "test waiters" system to allow you to control the flow of your tests in terms of the actual framework behavior.
That way that your tests match exactly what the app does at runtime.
However, making this work depends on Ember providing all the necessary hooks for test helpers to use, and there was one significant missing public API.
You could wait for *all* of the test waiters to finish with `settled`, but there was no public way to wait for *just rendering* to finish.
For example, you might want to wait for rendering to finish but *not* for an Ember Data `save` operation to finish, as part of testing a loading screen.

Ember 4.5 introduces a new function, `renderSettled`, as a public way for test helpers to interact with the rendering phase of the application.
`renderSettled` returns returns a promise which fulfills as soon as rendering has completed.
It can be used in any rendering or application test.
(It also works in other tests where you set up the rendering hooks manually, but this is unusual!)

```
import { renderSettled } from '@ember/renderer';
```

An upcoming release of `@ember/test-helpers` will take advantage of this to provide a new `await rerender()` helper.
For more details, and how this fits into improvements to Ember's testing story, see [RFC 785](https://rfcs.emberjs.com/id/0785-remove-set-get-in-tests).

#### Deprecations

Ember.js 4.5 introduced 0 deprecations.


For more details on changes in Ember.js 4.5, please review the [Ember.js 4.5.0 release page](https://github.com/emberjs/ember.js/releases/tag/v4.5.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js

Due to low availability for the Ember Data team this cycle, Ember Data does not have a new release, so it remains at 4.4.

Please see the [Ember 4.4 release blog post](https://blog.emberjs.com/ember-released-4-4) for details about `v4.4` of Ember Data.

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
