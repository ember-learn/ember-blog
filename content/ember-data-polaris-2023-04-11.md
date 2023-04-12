---
title: EmberData Polaris Update
authors:
  - chris-thoburn
date: 2023-04-11T00:00:00.000Z
tags:
  - '2023'
  - ember-data
  - ember-polaris

---

This week, in coordination with the broader Ember project, EmberData released 4.12, its final
4.x version, and began iterating towards the first release of the 5.x series.

## A wrap on 4.x

This final release of the 4.x cycle introduced several new concepts to support a new paradigm for managing [Requests]() and new capabilities for [Caching Data]().

The primary focus of these changes was to support the concept of a [Document]() as a cache primitive and to complete the work to ensure that the [Resource]() concept is handled opaquely.

Collectively, these changes allow applications the capability of building highly advanced request and cache capabilities overtop of familiar EmberData paradigms. We suggest reading the respective RFCs for [RequestManager]() and [Cache]() to gain a fuller appreciation of the motivations and capabilities they bring.

While these new primitives may not at first feel like a substantial shift, over the course of 5.x as the new request story is polished we expect for the recommended experience when using EmberData to significantly evolve, with that evolution driven by these changes.

## Looking ahead to 5.x

Throughout the 5.x cycle we expect to introduce two important new defaults while deprecating an old stalwart.

For nearly 17 years, [Model](https://github.com/sproutcore/sproutcore/commit/f6248b1650a688a401cc6eea135fbe983e20cd12#diff-011979c89114a908391f35c2053dc2ba84da4d331cc97730039b2b2da623ffee) has been a foundational primitive around which EmberData was understood. Since those earliest days, the language and ecosystem have evolved, the kinds of applications we build has evolved, and the patterns by which we access and mutate data have evolved. While Model has undergone small amounts of evolution in syntax, its underlying patterns have remained unevolved.

In more recent years, various 3rd party attempts have been made to address some of the shortcomings of the Model paradigm. [ember-m3]() explored what it might mean to have schema-driven models. [ember-data-model-fragments]() offered a deep-tracking workaround. [ember-data-storefront]() offered alternative data access patterns to simplify the mental model of asyncronous edges in relational data. [ember-data-changetracker](), [ember-changesets](), and [ember-buffered-proxy]() offered mechanisms for streamlined mutation flows and more easily discardable changes.

While we appreciate each of these addons for taking on a challenging aspect of EmberData and solving real needs of our consumers, the nature of many of these features having been built overtop a shaky foundation and against a shifting target of private and intimate API contracts has meant that applications using these addons have faced unexpectedly large challenges when upgrading their version of EmberData.

So throughout the 3.x and 4.x cycles, we began evolving a new set up public APIs overtop which we could support these ideas without compromise, and plotting to bring ideas explored by each of these libraries into the core recommended experience of EmberData itself.

The importance of shipping RequestManager and Cache in 4.12 is that these are the APIs overtop of which these ideas can be implemented in a first-class manner.

**What does this mean?**

Today, Model serves two competing purposes: its static properties are used to declare schema information for attributes and relationships, while at runtime it is also the class we instantiate to present the data for a single resource out of the cache.

Importantly, both of these behaviors (schema and presentation) are just a *configuration* of public APIs (respectively, via `Store.registerSchemaDefinitionService` and the hook `Store.instantiateRecord`) done by the `@ember-data/model` package. Schema no longer *needs* to be sourced from a Model, and record instances no longer *need* to be instances of Model. While this has been true for some time, when paired with the new request and cache APIs the potential now exists for far more declarative schema sources and far more powerful presentation classes.

Over the course of 5.x, we expect to introduce new defaults for declaring schemas, and new experiences for working with cached data: especially around presenting asynchronous data, paginated data, and handling mutation flows.

From a features perspective:

 - an optional JS-like/Model-familiar schema syntax for build-time-compilation of schemas
   - by default these schemas would be imported as JSON by your application, though just-in-time fetching of schemas is also possible
 - immutable record state
 - deep tracking of dirty state on mutable copies of records
 - paginated relationships by default
 - always-sync access to current relationship state, with easy access request APIs that can be invoked from JS or templates. (This will be built overtop of the [Document Presentation Class](https://github.com/emberjs/data/blob/v4.12.0/packages/store/src/-private/document.ts) introduced in 4.12.

## Lifting all Tides

A significant motivation for shipping Request and Cache in the 4.x series, even if it took till the end (as it did) is that we believe the easiest migration path for most applications looking to resolve deprecations around promise-proxies, async relationships, computed chains, and array-like APIs will be to incrementally migrate from Model to its replacement.

By shipping the request and cache APIs in 4.12, we've ensured that powerful replacements can be built that are compatible with 4.x enabling this migration path to be created. While we expect many applications might choose to implement their own presentation class – as often a custom class is capable of doing powerful things derived from Schema that a more generic presentation class could not do – **we are additionally committing to making the official Model replacement compatible with EmberData 4.12**

This means (for instance) that the migration path for an application using [ember-data-model-fragments]() is to help that library become compatible with 4.12, update their application to 4.12, and begin incrementally migrating from Model+ModelFragments to the new presentation class which will offer deep-tracking out of the box.

For [ember-data-model-fragments]() specifically, we commit to providing extensive time to assist in adding support for 4.12 to the current 3.28+ branch that some teams have been using today. In this way, we hope to give even those teams facing hurdles in the jump to 4.0 a carrot and a mechanism to leap quickly to 5.x.

## 4.12 will become a Special LTS

In addition to the committments above, we are planning on declaring 4.12 as a special LTS release. 

4.12 will remain an actively supported LTS for the entire duration of the 5.x cycle, extending until the first 6.x LTS is released. This is in addition to our regular LTS support policy.

This support extends *beyond* simple bug-fixes. If minor enhancements can be made to better support new presentation class implementations that support the 4.x series we will willingly accept them. Our goal is simple: we want no one left behind.
