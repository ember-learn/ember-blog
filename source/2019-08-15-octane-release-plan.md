---
title: Octane is coming in v3.14
author: Yehuda Katz, Jen Weber
tags: 2019, Announcement, Recent Posts
responsive: true
---

The Ember community is wrapping up the work for [Octane](https://emberjs.com/editions/), and we expect to get it over the finish line over the next three releases!
Ember Octane updates Ember with modern, streamlined components and stage management that makes it fun to build components. It has seamless interoperability with existing apps, letting teams migrate at their own pace.

This article will cover the release plan and how your team can prepare.

## Release plan

- The next release of Ember is 3.12, which is an LTS (long term support) candidate. Check out the [release blog posts](https://blog.emberjs.com) to learn which of Octane's features are already available in stable releases like this one.
- Ember 3.13 will be feature-complete for Octane, and apps using stable Ember can opt in. At this point, we're still wrapping up polish, especially in the codemods, inspector and guides.
- In Ember 3.14, Octane will be the primary, recommended way to use Ember. In Ember 3.14, new apps will have Octane's optional features enabled by default. The guides and tutorials will show Octane examples, and codemods will be available to help users migrate to Octane idioms.

**Octane features are opt-in**, and this will continue to be true for the rest of the 3.x series. As [SemVer](https://semver.org/) would suggest, all releases until 4.0 are backwards-compatible with 3.x.

If there are any major changes to these plans, we will update this post.

## The work that remains

Since Octane was first announced, over a hundred contributors have been hard at work to test it and ship it in a stable release. Work continues at full speed on codemods, learning resources, the Ember Inspector, and our public website. Anyone who is interested in helping with these final steps is invited to join the #st-octane channel on [Ember Discord](https://emberjs.com/community).

## Preparing your apps for Octane

Ember Octane is a collection of existing features, many of which have already shipped in stable releases. If your team is excited to use Octane, there are some things you can do today to prepare.

### Visit the Octane Migration channel on Discord

[Ember Discord](https://emberjs.com/community) has a new channel called `#topic-octane-migration` where you can ask any questions you have or get help along the way. If you are new to Discord, post in `#discord-server-admin` to request permissions to post.

### Update your app to 3.12

Update your app to 3.12 after it is released. [ember-cli-update](https://github.com/ember-cli/ember-cli-update) will help you out!

### Brush up on classes

Octane uses [Native JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), so we recommend that developers try them out with regular JavaScript examples to learn the basics, if they are not already familiar. Without some background knowledge of classes, it will be hard for developers to tell which pieces are specific to Ember versus native JavaScript syntax.

### Consider trying Octane features that have already landed

The rest of the sections below cover optional features in Octane that you can consider using now. These features are independent of each other. You can opt into them one at a time, in any order.

You will be able to migrate to many of Octane's idioms automatically using codemods that we will finalize with Ember 3.14. We do not recommend trying to mass-migrate older code (like `@ember/component` Components) without those codemods.

Even then, many teams may want to not convert older code at all, and just start using Octane idioms moving forward. **This is a valid, fully supported approach.** We will have a guide to upgrading describing the options and strategy that we will finalize with Ember 3.14. At the same time, all of the Ember Guides and Tutorials will be fully migrated to Octane idioms. You can get a sneak peek of those work-in-progress learning resources [here](https://emberjs.com/editions/octane)!

### application-template-wrapper

In classic Ember, your entire application is automatically wrapped in a `<div>` with the class `ember-application`. Octane applications do not automatically insert this unneccessary `<div>`.

If your CSS (or JavaScript) relies on this `<div>`, you can explicitly add it to your `application.hbs` or refactor your code to no longer rely on it.

You opt in to this change by

```sh
ember feature:disable application-template-wrapper
```

### jquery-integration

In classic Ember, jQuery is automatically included, and `this.$` inside of component classes uses jQuery to select from the DOM. Ember Octane does not include jQuery automatically, nor does it include any direct jQuery integration in the component API.

Ember's internals no longer depend on jQuery. If your app still uses jQuery directly and you want to continue using it, you can add `@ember/jquery` to your `package.json` and disable this classic feature. You will still be able to use all the other features of Octane.

Alternatively, you could migrate away from using jQuery in your application, but it is not necessary. Octane's other features work just fine either way.

You opt in to this change by:

```sh
ember feature:disable jquery-integration
```

If you still want to use jQuery in your application, make sure to add `@ember/jquery` to your `package.json`.

### template-only-glimmer-components

In classic Ember, components that have a template but no JavaScript file get assigned a default component (`EmberComponent.extend()`). This means that you can refer to properties on this implicit component using two-way bindings, and those properties will be implicitly created for you.

Octane does not implicitly create a component class for you, and the `this` context inside the template is `undefined`. You can still refer to passed-in arguments using `@name` and yield to blocks using `yield`, but references to properties on the component like `{{someProp}}` or `{{this.someProp}}` will not work.

Enabling `template-only-glimmer-components` will opt you in to the new behavior. The easiest way to migrate existing applications to this flag is to create an explicit JavaScript file for each template-only component that refers to properties on the implicit component.

Alternatively, you could eliminate any references to the implicit component by renaming arguments from `{{someArg}}` to `{{@someArg}}` and removing any reliance on two-way bindings on the implicit component.

When done, you can opt in to the new behavior:

```sh
ember feature:enable template-only-glimmer-component
```

## Using Octane idioms today

Because many of Octane's features have already landed, you can start trying out these new features today.

We do not recommend attempting to mass-migrate your code to new idioms until the codemods have been finalized in Ember 3.14. The best way to use Octane idioms is in new components.

## Glimmer Component Base Class

One of the biggest changes to Ember's idioms in Octane is the recommended component base class.

In classic Ember, the component base class is `@ember/component` and you idiomatically extend from it using `Component.extend()`.

```javascript
// Classic Idiom. NOT OCTANE
import Component from "@ember/component";

export default Component.extend({
  // class definition here
})
```

In Ember Octane, it is idiomatic to extend from a new base class: `@glimmer/component` and to extend it using native class syntax.

```js
import Component from '@glimmer/component';

export default class extends Component {

}
```

Glimmer components are a streamlined component base class that doesn't depend on `Ember.Object`. It also doesn't have the proliferation of APIs for configuring the root element, like `classNameBindings`, `this.element` and attaching event handlers to the root element. This is because components that inherit from `@glimmer/component` don't have a root element at all.

Glimmer components are fully compatible with classic components and other custom components. You can invoke Glimmer components from classic templates and vice versa. You can use Glimmer components inside of the block passed to a classic component, and you can use classic components inside of the block passed to a Glimmer component. It's completely mix and match.

### Attach lifecycle events where they belong

The `@ember/component` base class has life-cycle hooks like `didInsertElement` and `didUpdateElement`. Ember fires these hooks at appropriate times, and you can use them to manage the DOM for your component.

Ember Octane introduces a new way to manage the DOM directly in the template that works everywhere in combination with classic Ember idioms and Octane idioms.

```handlebars
<h1>{{@title}}</h1>
<div {{did-insert this.fadeIn}} class="alert">
  {{yield}}
</div>
```

```javascript
export default Component.extend({
  fadeIn(element) {
    element.classList.add('fade-in');
  }
});
```

This syntax is called a "modifier" because you use it to modify an element. It cuts down on bookkeeping because Ember will automatically run `did-insert` whenever the element is added into the DOM.

```handlebars
{{#if this.shouldShow}}
  <div {{did-insert this.fadeIn}} class="alert">
    {{yield}}
  </div>
{{/if}}
```

In classic Ember, it would have been tricky to make sure that the `fadeIn` method was invoked whenever a div was inserted, even if `this.shouldShow` was toggled over and over again. Because modifiers are attached to a DOM element and not a component, Ember can invoke it at exactly the right time.

This is especially useful when dealing with loops.

```handlebars
{{#each @todos as |todo|}}
  <li {{did-insert this.inlineEditor}}>{{todo.name}}</li>
{{/each}}
```

In this example, we run a little bit of JavaScript code whenever a new `li` is inserted into the list, no matter how many times that happens.

There is also `did-update` and `will-destroy`, which behave as you'd expect.

**Modifiers work everywhere**. They work inside of classic components, inside of a route's templates, and inside of template-only components.

One final thing: if you find yourself writing the same `did-insert` code in multiple places, you can extract the code into a *custom modifier*, which can even be packaged into addons. One cool example of a *custom modifier* that's already on npm is `[ember-did-resize-modifer](https://github.com/gmurphey/ember-did-resize-modifier)`, which allows you to attach custom logic to an element, whenever it changes size.

```handlebars
<div {{did-resize this.onResize}}>
  Resize the window to see the modifier in action
</div>
```

Custom modifiers provide a much more compositional way to package up DOM behavior than mixins, which is the idiomatic approach in classic Ember.

### The `{{on}}` Modifier

In classic Ember, you can add event handlers to the root element of your component by adding methods to your class. For example, to handle clicks on your component's root element, you would add a `click` method to your class. To handle events on other methods you would use the `{{action}}` modifier where you want to handle the event, and nest the method inside of an `actions` hash.

When using Glimmer components, you can handle events on any element using a new `{{on}}` modifier. Since Glimmer components do not have a root element, `{{on}}` works anywhere.

```handlebars
<h1 {{on "click" this.toggleBody}}>Hello world</h1>

{{#if this.showingBody}}
  <div>{{yield}}</div>
{{/if}}
```

For more details, see the [API docs for on](https://api.emberjs.com/ember/3.12/classes/Ember.Templates.helpers/methods/on?anchor=on).

### Required `{{this}}` in Templates

In classic Ember, you can refer to properties on a component as `{{propertyName}}`. This was ambiguous with helpers and components, and was deprecated in [RFC 308](https://emberjs.github.io/rfcs/0308-deprecate-property-lookup-fallback.html).

No matter what kind of component you're using, you should start using `this` to refer to component properties in new code. The `[no-implicit-this](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-implicit-this.md)` template lint can help you avoid using this deprecated pattern by accident.

Ember 3.14 will finalize a codemod that uses dynamic information from booting up your app to automatically insert `this` where needed. We recommend waiting for this codemod to be finalized before attempting to mass-migrate your codebase. 

### Angle Bracket Invocation

This one landed a while ago, and many people have already started to use it in their apps. In classic Ember, you would idiomatically invoke components using curly bracket syntax:

```handlebars
{{input value=this.name}}
{{#link-to route=this.routeName}}Some content{{/link-to}}
```

Octane introduces a new way of idiomatically invoking components using curly braces and `@names`.

```handlebars
<Input @value={{this.name}} />
<LinkTo @route={{this.routeName}}>Some content</LinkTo>
```

In addition to being easier to read, this syntax makes it possible to pass HTML attributes directly to components. This means no more having to maintain a list of `attributeBindings` in your components. It also makes it easier to attach ARIA attributes to components, including components from addons.

You can invoke any kind of component using angle brackets, including components that inherit from `@ember/component`.

See the [Angle Bracket Syntax Conversion Guide](https://guides.emberjs.com/release/reference/) for more details!

### Native Class Syntax

You can use native class syntax to subclass from any framework base class. This means that you can migrate your components that inherit from `@ember/component` to native class syntax.

### Mitigating Gotchas

There are a handful of gotchas when using native class syntax to subclass from `@ember/component` (many of which involve the `init` method). To help alleviate those issues, you can attach the `@classic` decorator to classes that inherit from `Ember.Object` (directly or indirectly), and use Ember lints to help catch potential problems.

```javascript
import Component from "@ember/component";

@classic
export default class extends Component {
  init() {
    // potential problem -- switch to using the constructor instead
  }
}
```

To help catch these bugs using the `@classic` decorator now, install `[ember-classic-decorator](https://github.com/pzuraq/ember-classic-decorator)` and enable [`classic-decorator-hooks`](https://github.com/pzuraq/ember-classic-decorator#installation) and `classic-decorator-no-classic-methods` in `.eslintrc.js`

## Thanks for reading!

If you have more questions, please visit [Ember Discord](https://emberjs.com/community) and the `#topic-octane-migration` channel!
