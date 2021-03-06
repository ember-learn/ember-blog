---
title: Ember 1.0 RC6
authors:
  - michael-madrid
date: 2013-06-23T00:00:00.000Z
tags:
  - releases
  - '2013'
  - version-1-x
---


Ember.js 1.0 RC6 has been released and is available from the
main website and at [builds.emberjs.com](http://builds.emberjs.com).  This
release features two big changes: 1) router update 2) Ember Components.

***Router Update***

The biggest change is router update (aka "router facelift"), which addresses
two major issues. The first was inconsistent semantics between URL-based transitions
and `transitionTo`. The second was spotty async support which made it difficult to
prevent or delay route entry in cases such as authentication and async code-loading.

We have now harmonized URL changes and `transitionTo` semantics and more fully embraced
asynchrony using promises.

Additionally, router transitions have become first-class citizens and there are
new hooks to prevent or decorate transitions:

 `willTransition`: fires on current routes whenever a transition is about to take place
 `beforeModel`/`model`/`afterModel`: hooks fired during the async validation phase

Finally there is an `error` event which fires whenever there is a rejected promise or
error thrown in any of the `beforeModel`/`model`/`afterModel` hooks.

For more on new router features, see:

* [New router overview given by Alex Matchneer's at the June Ember NYC Meetup](https://machty.s3.amazonaws.com/ember-facelift-presentation/index.html#/1)
* [Usage Examples](https://gist.github.com/machty/5647589)
* [Client-side Authentication Part 2 Embercast](http://www.embercasts.com/episodes/client-side-authentication-part-2)

<!-- alex ignore special -->
Special thanks to Alex Matchneer for his work on this!

***Ember Components***

The other major change is the introduction of Ember Components, which shares Web
Components' goal of facilitating creation of reusable higher-level page elements.

Ember Components will generally consist of a `template` and a `view` which encapsulate the `template`'s
property access and actions.  Any reference to outside constructs is handled through context
info passed into the `view`.  Components can be customized through subclassing.

Ember Components naming conventions are: 1) the `template`'s name begins with 'components/', and 2) the
Component's name must include a '-' (this latter convention is consistent with Web Components standards,
and prevents name collisions with built-in controls that wrap HTML elements). As an example, a component
might be named `'radio-button'`.  Its `template` would be `'components/radio-button'` and you would call
it as `{{radio-button}}` in other `templates`.

Stay tuned for more docs and examples of this exciting new feature.
