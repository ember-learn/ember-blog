---
title: Octane Release Update
authors:
  - yehuda-katz
  - matthew-beale
date: 2019-10-31T00:00:00.000Z
tags:
  - '2019'
  - announcement
  - ember-octane
---


The short version: We're still learning from the community as they adopt Octane,
and won't be recommending Octane as the default Ember mode in the Ember's 3.14
release. You can continue to opt-in to Octane in Ember 3.14, and the developer
experience of doing so is continuing to improve.

### Octane Feedback has been positive

Ember developers have been able to opt-in to Octane since Ember 3.13. By their
own estimation, some developers have been [shipping Octane apps to
production](https://twitter.com/mixonic/status/1180494661938552832)!
This has, as expected, resulted in substantial feedback from the community.

The feedback about the new programming model has largely been positive.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Not a
new app, but <a
href="https://twitter.com/intercom?ref_src=twsrc%5Etfw">@intercom</a> has been
incrementally moving to Octane for the past few months. As of this week,
we&#39;re running Glimmer components in production. I spent this week pairing
with lots of colleagues, most coming from <a
href="https://twitter.com/reactjs?ref_src=twsrc%5Etfw">@reactjs</a>. There is
universal excitement with Octane!</p>&mdash; Gavin Joyce (@gavinjoyce) <a
href="https://twitter.com/gavinjoyce/status/1180505184524476416?ref_src=twsrc%5Etfw">October
5, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js"
charset="utf-8"></script>

### Polish

Ember 3.13 is feature-complete for Octane in the core framework. 3.13 contains
all the features applications need in order to use the Octane programming model.
Most developers working with Octane can safely be crowned early adopters.

We expected to be ready to *recommend* Octane to *all* users by Ember 3.14,
after squashing bugs, wrapping up work on the Ember inspector, focusing a lot of
effort on documentation, finalizing codemods, and helping the addon ecosystem
provide a good experience to Octane users.

And Ember contributors took up the call and substantially improved the level of
polish for Octane.

However, there are a handful of remaining issues that mean 3.14 will fall short
of what we expect from an Octane MVP.

### Decoupling jQuery Removal

One of the most consistent pieces of feedback we got from users since 3.13 is
that disabling jQuery integration was an unexpectedly hard part of their
migration.

Originally, we thought that the migration process would be straight forward.
Developers should have been able to adopt the `@ember/jquery` addon as a
transitioning tool.

For various reasons, the truth is a little bit more subtle than that, and
removing jQuery dominated the transition process for a number of users.

Because there is no *technical* reason to couple the removal of jQuery
integration with Octane, **we decided not to require Octane apps to disable
jQuery integration.** This requirement change is implemented as of the 3.14.0
release.

### Finishing the Inspector Work

Ember 3.13 shipped new debugging APIs that allow the [Ember
Inspector](https://github.com/emberjs/ember-inspector) to show
Glimmer components (and any components using a custom component manager) in the
component pane.

However existing code in the inspector ended up being more difficult to work
with than anticipated, and the integration work for these new debugger APIs
remains uncompleted. The inspector is a key tool for new Ember developers
learning the framework, and we consider this part of the Octane story
incomplete.

### Documentation

Documentation is probably the most important part of Octane. If we don't have
clear documentation about the Octane programming model developers will struggle
as they build their own way to think about the framework.

Since before EmberConf (last March), we've been working on updating the
documentation with new Octane idioms. The Learning Team has led this effort,
with a lot of additional work provided by folks on the Framework Team. Both the
guides and API docs are up to date with the new idioms, from top to bottom.

That said, we still have a handful of things left to do.

First, the current API docs don't yet include the documentation for
`@glimmer/component`. The Learning Team is working on that actively, and it
should be done soon.

Second, while the template and component guides are updated with the latest
Octane idioms (thanks [Chris H. Garrett](https://twitter.com/pzuraq)!), the current preview version of guides
don't fully embrace the pedagogy of the new programming model. There is an
active effort to provide a starting point that is more aligned with Octane, but
it's not quite ready yet. That, too, should be done soon.

### What's Next

If you tried out Octane in Ember 3.13, keep on using it. The features that make
up Octane are now stable, which means they come with the Semantic Versioning
guarantees any Ember feature has.

If you were waiting until Ember 3.14 to try out Octane, only do so if you're
willing to accept a version of Octane that the Ember team doesn't feel is
polished enough to *recommend* to all users quite yet. Ember 3.14 is a great time
for adventurous users to try updating their production apps to Octane, and
report back any problems that you find.

### Swing and a Miss

We said we expected to recommend Octane for all users with 3.14.

Missing this goal is disappointing, **but getting Octane right is the most
important thing**. Had we decided to recommend Octane at Ember 3.14, or delayed
the release and committed to shipping it in a few weeks, we would have risked
having Octane be an experience somewhat less than what we aspire for it to be.
**And that would have defeated the whole effort.**

Onward! Let's make the shipping version of Octane as amazing as we all know it
can be.
