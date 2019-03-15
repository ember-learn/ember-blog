---
title: 'Coming Soon in Ember Octane - Part 5: Glimmer Components'
author: Chris Garrett
tags: Recent Posts, 2019, Ember Octane, Glimmer Components
alias: 'blog/2019/03/14-coming-soon-in-ember-octane-part-5-glimmer-components.html'
responsive: true
---

(This post was originally published on [www.pzuraq.com](https://www.pzuraq.com/coming-soon-in-ember-octane-part-5-glimmer-components/))

Hello again, and welcome back! This is the fifth and final entry in the multipart _Coming Soon in Ember Octane_ series, where we're previewing some of the various features that are landing in Ember's upcoming Octane edition, including:

* [Native Classes (+Decorators)](https://www.pzuraq.com/coming-soon-in-ember-octane-part-1-native-classes/)
* [Angle Brackets & Named Arguments](https://www.pzuraq.com/coming-soon-in-ember-octane-part-2-angle-brackets-and-named-arguments/)
* [Tracked Properties](https://www.pzuraq.com/coming-soon-in-ember-octane-part-3-tracked-properties/)
* [Modifiers](https://www.pzuraq.com/coming-soon-in-ember-octane-part-4-modifiers/)
* Glimmer Components _← this post_

These aren't _all_ of the new features that will be part of Octane, just the ones that I'm most familiar with personally. This series is aimed at existing Ember users, but if you're new to Ember or tried Ember a while ago and want to see how things are changing, I'll be providing context on the existing features as we go along. These posts won't be doing deep dives on all the edge cases of the functionality, they are moreso meant as an overview of what's coming. If you're curious about what an _edition_ is exactly, you can check out a quick break down in [the first post in the series](https://www.pzuraq.com/coming-soon-in-ember-octane-part-1-native-classes/#whatareeditions).

Now, let's move onto Glimmer Components!

## A Better Component API
Near the end of the Ember@v1 cycle, the community started noticing some pain points around Ember's component API. While components were a big hit overall, and quickly overtook views to become the default rendering primitive in Ember, there were a few paper cuts here and there that made them feel more difficult to use than they should have. In particular:

1. **Syntax**: The fact that components required the same `{{double-curly}}` syntax as helpers and bindings in templates could sometimes make them hard to parse out. There was a lot of visual clutter, and it could be hard to figure out what was being invoked where:

```handlebars
{{#modal-dialog}}
  {{#power-select
    options=names
    onchange=(action "foo")
    as |name|}}
    {{capitalize name}}
  {{/power-select}}
{{/modal-dialog}}
```

2. **Wrapper Element**: Components had an implicit wrapper element that always wrapped the template, and required creating a class to customize:

```js
import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['btn'],
});
```

This meant that the template was not the only source-of-truth for the final output of the component - users had to read the component class to know if it had customized the template in some way. It also meant users would oftentimes have to create a class just to customize this element, in what would otherwise be a Template-Only component.
3. **Arguments**: Arguments to a component were assigned directly as properties on the component's instance. This would often lead to conflicts between arguments and properties or methods on a component, and make it difficult to tell the two apart:

```js
import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    // You may wonder where this magic `filter`
    // value came from. Is it a method on the
    // superclass? Actually, it's an argument
    // that was passed to the component, a callback.
    this.filter('').then((results) => {
      return this.set('results', results);
    });
  },
});
```

4. **Two-Way Bindings**: Ember started off at a time when two-way data binding was the standard in frontend frameworks, but as time went on it became clear, both from a performance standpoint, and from a code organization standpoint, that one-way data flow made the most sense. Ember components can still currently modify values bound in the parent class's template, but this behavior tends to be buggy and error prone.

These, along with many  other small paper cuts along the way, led the core team to a rethink of the component API. Along the way, parts of that rethink were broken out into individual pieces that we've already covered in this series, such as `<AngleBracket>` syntax, and the infrastructure was put in place to rationalize Ember's component API internally so that an entirely new API could be added, side-by-side to the original. Components are foundational to an Ember app, usually containing by and large the most code in the app, so being able to upgrade one component at a time rather than through a massive rewrite was incredibly important.

Glimmer Components are the final result of all that hard work. They're lighter, simpler, more ergonomic, and address all of these issues and more.

## Less is More
More than anything, Glimmer Components are a dramatic simplification of Ember's component API, which is now being referred to as Classic Components in the community. Classic Components have built up a lot of cruft over the years, including:

* **13** Standard lifecycle hooks, such as
`didInsertElement`/`willDestroyElement` and `didUpdate`.
* **29** Event handlers, such as `click`, `mouseEnter`, and `dragStart`.
* **9** element/element customization properties, such as `element` and
`tagName`.
* **21** standard framework functions, such as `get`/`set`,
`addObserver`/`removeObserver` and `toggleProperty`.

By comparison, Glimmer Components have just **2** lifecycle hooks and **3** properties. They don't have any element or DOM based properties, hooks, or event handler functions, whose responsibilities have been passed on to element modifiers. This _dramatically_ simplifies what you need to learn in order to start using the bread-and-butter class of Ember, allowing you to focus on productivity out of the box.

The other major differences include:

* **Outer HTML Semantics**
* **Namespaced Arguments**
* **Unidirectional Dataflow**
* **Stateless Template-Only Components**

And last, but certainly not least, the namesake of Glimmer Components - compatibility with _Glimmer.js_, the minimal component framework that complements Ember.

### Lifecycle Hooks & Modifiers

As mentioned above, Glimmer Components have just two lifecycle hooks - the `constructor` function for setting up the component, and the `willDestroy` function for tearing it down. It also has just 3 properties: `isDestroying`, `isDestroyed`, and `args` (which we'll go over later on).

```ts
interface GlimmerComponent<T = object> {
  args: T;

  isDestroying: boolean;
  isDestroyed: boolean;

  constructor(owner: Opaque, args: T): void;
  willDestroy(): void;
}
```

You may be wondering how you can replace hooks like `didInsertElement` and `didUpdateAttrs`, or properties like `this.element`. After all, there were _13_ hooks, and that has to cover a lot of functionality right? In actuality, our case studies showed that many of these hooks had significant overlap with each other, and that most of their functionality could either be replaced by _getters_ and derived state, or by [Modifiers](https://www.pzuraq.com/coming-soon-in-ember-octane-part-4-modifiers/). I discussed Modifiers in depth in my last post, but the gist is that they're the new primitive for DOM manipulation, and with Glimmer Components they'll be the _only_ method for accessing the DOM.

Reducing the number of lifecycle hooks makes designing a component that much simpler. There's no longer debating about which hooks to use, the benefits and tradeoffs and timing differences between `didRender` and `didReceiveAttrs`, when to use `willDestroyElement` and `didDestroyElement`. Instead, as much business logic should be pushed into getters and tracked properties as possible, with modifiers being used for any advanced side-effecting DOM logic.

### Outer HTML

In Glimmer Components, what you see in the template is what you get in the output. There is no wrapping element around the template - the template represents the "outer edge" of the component, instead of being just the "inside". This means that you don't have to use APIs like `tagName`, `classNames`, or `attributeBindings` to customize your template, ever. This component:

```js
// app/templates/hello-button.js
import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  attributeBindings: ['role'],
  role: 'button',
});
```
```handlebars
<!-- app/templates/components/hello-button.hbs -->
Hello, world!
```

Can be rewritten as:

```handlebars
<!-- app/templates/components/hello-button.hbs -->
<button class="btn" role="button">
	Hello, world!
</button>
```

This makes templates much easier to reason about, since the full definition is no longer split between two different files. You no longer have to remember that there is an outer element of some kind, and that it _may-or-may-not-be-but-usually-is_ a `div`.

This does bring up the question of attribute reflection though. As we learned about in the post on [Angle Bracket syntax](https://www.pzuraq.com/coming-soon-in-ember-octane-part-2-angle-brackets-and-named-arguments/), attributes that are added to a component when used with angle brackets will be reflected onto the main element:

```hbs
<MyButton class="custom-btn" aria-labelledby="my-label"/>
```

With Classic Components, the main component _is_ the wrapper element. In Glimmer Components, there is no clear main element - there could be multiple top level elements, or there could be _no_ elements, just text. This is what the special `...attributes` syntax is used for:

```hbs
<!-- app/templates/components/hello-button.hbs -->
<button ...attributes class="btn" role="button">
	Hello, world!
</button>
```

This syntax allows you to choose which element(s) the attributes get applied to. It can be applied multiple times, or not at all, in which case using attributes on the component will throw an error. This allows us to see clearly where element attributes are getting applied, and also to control it more easily. You could, for instance, use it on a _nested_ element instead of a top level one.

Another cool feature of this syntax is that the _order_ it is applied in can be used to determine how it overrides attributes. Attributes that come _before_ `...attributes` will be overridden, but attributes that come _after_ will not. For example, given these two possibilities:

```hbs
<div data-foo="inner" ...attributes></div>
<div ...attributes data-foo="inner"></div>
```

With this invocation:

```hbs
<Foo data-foo="outer" />
```

We would get this result:

```hbs
<div data-foo="outer"></div>
<div data-foo="inner"></div>
```

This system is much more flexible overall, and means we can write easier to understand components with cleaner, more readable and self-explanatory templates!

### Namespaced Arguments

Arguments in Glimmer Components are placed on the `args` property, instead of directly on component properties. This makes it much more clear what values are _arguments_ that are passed to the component, and which are properties that the component uses itself internally. Revisiting our example from the introduction, this:

```js
import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.filter('').then((results) => {
      return this.set('results', results);
    });
  },
});
```

Becomes this:

```js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FilterComponent extends Component {
	@tracked results;

  constructor() {
    super(...arguments);

    this.args.filter('').then((results) => {
      this.results = results;
    });
  }
}
```

And we can now clearly see that `filter` is an argument, and not some API function that came out of nowhere.

The `args` object is also immutable (though the arguments _themselves_ are not). This enforces **unidirectional dataflow**, from parent components to child components, and prevents two-way data binding in general. It also means that when you see an argument, you _know_ that it is a value passed down by the parent, and not something managed internally by the component. This distinction also helps with reasoning about component code.

### Stateless Template-Only Components

Template-Only components are useful for extracting bits and pieces of functionality from other components quickly, without bringing along business logic. They keep things simpler by only having one file, and by keeping it focussed on presentation. However, with Classic Components they had two major issues:

1. There was no way to control the wrapping element, and oftentimes a class would have to be made just for that. Glimmer Components solve this with Outer HTML semantics, like we discussed above.
2. Even though Template-Only components didn't have any logic, with Classic Components they _did_ have state. They needed an instance to hold their argument values, and it was _possible_, albeit somewhat difficult, to assign values to that instance and make them stateful using built-in helpers.

With Template-Only Glimmer Components, components are _completely_ stateless. They have no backing instance at all, making them much faster, and they have no way to set or access any state except for their arguments, making them much easier to reason about in general.

### Glimmer.js Compatibility

Glimmer.js has been the proving ground for a lot of the ideas that have made it into Ember over the past few years. It is a thin wrapper on top of the Glimmer VM, the rendering engine that both Glimmer.js and Ember share. While Ember is an all in solution for ambitious applications, Glimmer.js seeks to be a minimal, component-only framework that allows users to build up functionality as they need it. Eventually, the idea is that we'll be able to install our way to Ember, one package at a time.

Glimmer Components being cross-compatible means that Ember users can share code with a more minimal framework, that can better serve targeted use cases. In time, it'll mean that the ecosystem can work with both, and we'll be able to unify the two as we split apart the monolith one piece at a time.

## Putting It All Together
Like always, I'd like to end on a high note. Here's an example from the popular [ember-toggle](https://github.com/knownasilya/ember-toggle) addon, which provides a nice toggle component, the `x-toggle-label` component:

```js
import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'label',
  attributeBindings: ['for'],
  classNames: ['toggle-text', 'toggle-prefix'],
  classNameBindings: ['labelType'],
  for: readOnly('switchId'),
  isVisible: readOnly('show'),

  labelType: computed('type', function() {
    let type = this.get('type');

    return `${type}-label`;
  }),

  type: computed('value', {
    get() {
      return this.get('value') ? 'on' : 'off';
    }
  }),

  click(e) {
    e.stopPropagation();
    e.preventDefault();
    this.sendToggle(this.get('value'));
  }
});
```
```handlebars
{{#if hasBlock}}
  {{yield label}}
{{else}}
  {{label}}
{{/if}}
```

As you can see, the component code is really heavy, and most of that is customization of the element. Converting it over to a Glimmer component, along with all the other improvements from Octane, we have:

```js
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class XToggleLabel extends Component {
  get type() {
    return this.args.value ? 'on' : 'off';
  }

  @action
  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.args.sendToggle(this.args.value);
  }
}
```
```handlebars
<label
  for="{{@switchId}}"
  onclick={{this.handleClick}}

  class="
    toggle-text
    toggle-prefix
    {{this.type}}-label
    {{if @show 'is-visible' 'is-hidden'}}
  "
>
  {{#if hasBlock}}
    {{yield label}}
  {{else}}
    {{label}}
  {{/if}}
</label>
```

The class definition here is much smaller overall because we're able to strip out all of the logic for setting up the _template_, and we're able to put that where it really belongs: the template! This is much easier to read overall,  since we don't have to jump back and forth between the template and the class definition to understand what the final HTML will look like. It's all in one place.

## Conclusion
Glimmer Components are a long-overdue refinement of Ember's component system, and I'm really excited to see how they clean up our code. The design process for this API took a very long time, but in the end I think we came up with the best possible component API for Ember, and I think it'll serve us well for years to come. I'm also very excited to see how Glimmer.js evolves now that users will be able to write components for both!

This wraps up this blog series! I hope you've enjoyed these posts, and look forward to the preview launching in the coming weeks! Ember in 2019 is going to be a very different framework 😄
