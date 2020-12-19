---
title: Ember 3.20 Released
authors:
  - jen-weber
  - jared-galanis
date: 2020-07-29T00:00:00.000Z
tags:
  - releases
  - '2020'
  - version-3-x
---


Today the Ember project is releasing version 3.20 of Ember.js, Ember Data, and Ember CLI. This release of Ember.js is an LTS (Long Term Support) candidate. LTS candidates prioritize stability over the addition of new features, and have an extended support schedule.

This release kicks off the 3.21 beta cycle for all sub-projects. We encourage our community (especially addon authors) to help test these beta builds and report any bugs before they are published as a final release in six weeks' time. The [ember-try](https://github.com/ember-cli/ember-try) addon is a great way to continuously test your projects against the latest Ember releases.

You can read more about our general release process here:

- [Release Dashboard](http://emberjs.com/releases/)
- [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
- [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
- [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core framework for building ambitious web applications.

### Changes in Ember.js 3.20

Ember.js 3.20 is an incremental, backwards compatible release of Ember with bugfixes, performance improvements, and minor deprecations.

Developers who upgrade their Ember apps to `v3.20` should also update `@glimmer/component` to `v1.0.1` to avoid a deprecation warning that comes from the `@glimmer/component` package's use of a private API.

#### New Features (1)

##### `{{in-element}}`

Have you ever wished you could render a component somewhere outside of the usual HTML flow? To help with this, Ember.js now provides the `{{in-element}}` helper as public API. If you have used community addons like [ember-wormhole](https://github.com/yapplabs/ember-wormhole) or [ember-elsewhere](https://github.com/ef4/ember-elsewhere), you are probably familiar with the challenge that `{{in-element}}` aims to solve.

To use the helper, pass in a DOM element to target (`this.myDestinationElement` in the example below) and a block to render:

```handlebars
{{#in-element this.myDestinationElement}}
  <div>Some content</div>
{{/in-element}}
```

This new public API behaves a little differently from the private API:

- For the public API `{{in-element}}`, by default, the rendered content will replace all the content of the destination, effectively becoming its `innerHTML`. If you want it to be appended instead of replacing the content, you can pass in `insertBefore=null`.
- In the private API `{{-in-element}}`, the rendered content was appended to any existing content in the destination.

Developers should use the public API, `{{in-element}}`, and discontinue using `{{-in-element}}`.

See [RFC 287](https://emberjs.github.io/rfcs/0287-promote-in-element-to-public-api.html) for more information about the motivation for this new feature.

#### Deprecations (1)

##### `Meta.prototype.setSourceDestroyed` and `Meta.prototype.setSourceDestroying`

Previous versions of the `@glimmer/component` package relied on this intimate API, which is now deprecated.
To resolve deprecation warnings in your own apps and addons, update your version of `@glimmer/component` to at least [`v1.0.1`](https://github.com/glimmerjs/glimmer.js/releases/tag/v1.0.1).

Deprecations are added to Ember.js when an API will be removed at a later date. Each public API deprecation has an entry in the deprecation guide describing the migration path to a more stable API. Deprecated public APIs are not removed until a major release of the framework.

Consider using the [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) addon if you would like to upgrade your application without immediately addressing deprecations.

For more details on changes in Ember.js 3.20, please review the [Ember.js 3.20.0 release page](https://github.com/emberjs/ember.js/releases/tag/v3.20.0).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 3.20

In addition to a new feature, this release also includes some performance optimizations for visiting relating records and updating has-many relationships.

#### New Features (1)

##### `isEmbeddedRecordsMixinCompatible`

Previously, if you used the `EmbeddedRecordsMixin` and `JSONAPISerializer` together, the app would show a warning that this combination did not work.
However, some developers may have APIs that would have theoretically been compatible.
For those use cases, you can now set `this.isEmbeddedRecordsMixinCompatible = true` in the serializer, and you will no longer see the warning.

For apps that mistakenly use the `EmbeddedRecordsMixin` and `JSONAPISerializer` together, without setting the boolean, the app will now assert instead of warn.

#### Deprecations (0)

No new deprecations introduced in Ember Data 3.20.

For more details on changes in Ember Data 3.20, please review the
[Ember Data 3.20.0 release page](https://github.com/emberjs/data/blob/v3.20.0/CHANGELOG.md#release-3200-july-16-2020).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js applications.

### Upgrading Ember CLI

<!--alex ignore easy-->
You may upgrade Ember CLI easily using the ember-cli-update project:

```bash
npx ember-cli-update
```

This utility will help you to update your app or addon to the latest Ember CLI version. You will probably encounter merge conflicts, in which the default behavior is to let you resolve conflicts on your own. For more information on the `ember-cli-update` project, see [the GitHub README](https://github.com/ember-cli/ember-cli-update).

While it is recommended to keep Ember CLI versions in sync with Ember and Ember Data, this is not required. After updating ember-cli, you can keep your current version(s) of Ember or Ember Data by editing `package.json` to revert the changes to the lines containing `ember-source` and `ember-data`.

### Changes in Ember CLI 3.20

#### New Features (1)

##### Syncing Blueprints

Apps and addons can update the `ember-cli` version in their app without impacting future [`ember-cli-update`](https://github.com/ember-cli/ember-cli-update) runs. 

Before this new feature, `ember-cli-update` used the current version of `ember-cli` in the `package.json` to determine which version to attempt to update from. Unfortunately, that meant that if you were to update your `ember-cli` version without also running the full blueprint update, you would have a much harder time updating your general project structure in the future.

See the [Syncing Blueprints RFC](https://emberjs.github.io/rfcs/0477-blueprints-update.html) to learn more about the motivation and design of this feature!

#### Deprecations (2)

- Usage on Node 13 will now issue a warning 
- Usage of the `PACKAGER` experiment is deprecated. This only affects apps that opted into setting the `EMBER_CLI_PACKAGER` environment variable.


---

For more details on the changes in Ember CLI 3.20 and detailed upgrade
instructions, please review the [Ember CLI 3.20.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.20.0).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
