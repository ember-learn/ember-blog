---
title: EmberData 4.12 Special LTS Update
authors:
  - chris-thoburn
  - the-ember-data-team
date: 2023-09-22T00:00:00.000Z
tags:
  - '2023'
  - ember-data
  - ember-polaris
---

## EmberData 4.12 Special LTS Update

In our [5.0 Announcement](https://blog.emberjs.com/ember-data-5-x-update-2023-04-15) we promised extended support for 4.12 LTS **beyond** *just bug fixes*.

> This support extends beyond simple bug-fixes. If minor enhancements can be made to better support new presentation class implementations that support the 4.x series we will willingly accept them. Our goal is simple: we want no one left behind.

To this end, here are the changes we currently plan to make for 4.12 to ensure our users can both upgrade to 4.12 from 4.6 and 4.11 more seamlessly *and* to provide additional tools for users on 4.12 to begin shifting to the RequestManager paradigm as early as possible for their app.

## Builders and Build utils

1. The first LTS release of `@ember-data/rest` and `@ember-data/active-record` will have their peer-dependency supported versions set to include `~4.12.3` of `@ember-data/store`.

Once apps have updated from 4.12 to the 5.x LTS they should use the associated release's version to ensure maximum inter-compatibility.

2. `@ember-data/request-utils` has no dependencies or peer-dependencies on other EmberData packages, and thus can be used with any version immediately. However, when using it with `4.12` we suggest pinning to a 5.x LTS version once it is available.

Once apps have updated from 4.12 to the 5.x LTS they should use the associated release's version to ensure maximum inter-compatibility.

3. `@ember-data/json-api/request` will be backported

- we are unsure we will be able to backport support for `serializePatch` or the new cache relationships diffing APIs. More likely than not these will not be backported. If any portion of them is, they are likely to operate somewhat differently due to a different underlying graph implementation.

- we may investigate whether `@ember-data/json-api` and `@ember-data/graph` could have their peer-dependencies loosened to allow 4.x store as an alternative path to support diffing. Many apps may find this a feasible approach as the deprecations that affect them in 4.x were relatively minor. Similarly 4.12 packages would have theirs loosened to allow their 5.x counterparts.

## RequestManager

4. Improvements to the CacheHandler made in 5.x leading up to the first 5.x LTS will be backported. We anticipate this part being relatively straightfoward.

5. 4.12 LTS will have its peer-deps loosened to allow `@ember-data/request` 5.x

## Removal of ember runloop to support upgrading from 4.x to 4.12

We've seen that the small amount of runloop usage remaining in EmberData can cause unintended timing issues with interleaved renders when attempting to upgrade to 4.12. We're going to attempt to backport the work that fully removed this from EmberData. That work was primarily changes to the test suite.

## Additional Suggestions for 4.12 Applications

We suggest 4.12 applications experiment with removing the behavior of RSVP Promises flushing in Ember's runloop. This may cause subtle timing issues in tests that make some tests appear to newly leak (in reality if this happens those tests already leaked but the leak was resolved before the afterEach began destroying the test container), but should be safe for application code in production.

To experiment with this fix, add the following to your `app.js`

```ts
import RSVP from 'rsvp';

// fix RSVP
RSVP.configure('async', (callback, arg) => queueMicrotask(() => callback(arg)));
```

This change will make RSVP promises behave almost identically to real promises. The reason
this could help is because we have noticed that many of the most difficult aspects of upgrading to 4.12 and beyond were due to accidental interleaved renders. RSVP Promises without this fix are one source of such renders.

## SchemaRecord Update

We are in the early phases of building the replacement for `@ember-data/model`. As we've said before, we believe this replacement will provide an improved migration path from 4.12 to 5.x for many applications. We also believe it will replace the need for ModelFragments entirely for those users.

A few of the things we're currently working on to support this migration path:

- [Native Class Codemod for models](https://github.com/emberjs/data/issues/8884)
- [Strict Relationships Codemod](https://github.com/emberjs/data/issues/8893)
- [Replacement decorators for attr|belongsTo|hasMany](https://github.com/emberjs/data/issues/8887)

You can use the [v4-to-v5 label](https://github.com/emberjs/data/issues?q=is%3Aissue+is%3Aopen+label%3Av4-to-v5) to see a full list of the things we're currently tracking to help with the v4 to v5 migration.

## A Parting Request

If your app is currently stuck on a 4.x version of EmberData for reasons beyond needing to resolve deprecations or usage of ModelFragments (we're coming for you still), we'd like to hear from you!
 
For those users we see still downloading 3.x versions, we'd like to hear more about where you got stuck as well. Was it a particular deprecation in EmberData? In ember-source? Please open a ticket on https://github.com/emberjs/data or start a discusion in the #ember-data channel on [Discord](https://discord.gg/emberjs) to discuss.
