---
title: Plain Old Functions as Helpers
authors:
  - chris-krycho
date: 2022-08-08T14:30:00.000Z
tags:
  - '2022'
  - announcement
  - ember-polaris

---

Ember 4.5 introduced a long-awaited feature: the ability to use normal JavaScript functions as helpers.

*Today,* this means two things:

1. You can use (bound) methods on your backing class as helpers directly.
2. You can define function-based helpers without importing and using `helper()`.

In the future, it will also work extra nicely with the upcoming `<template>` feature!

Let's see what each of those looks like.

## Using methods as helpers

Ember developers have often wanted to be able to call methods on a backing class as helpers. This often comes up in an `{{#each}}` loop where you want to calculate some value using state in the backing class for each item. You could work around this by introducing some other intermediate object via a getter, or by extracting a helper you could call with the state *and* the item from the loop… but now you can call a method exactly like you would in JS code!

Here's a simplified example with a component which can choose to hide items from a list passed in.

Backing class:

```js
import Component from '@glimmer/component';
import { TrackedSet } from 'tracked-built-ins';

export default class HideableList extends Component {
  hiddenItems = new TrackedSet();

  shouldShow = (item) => !this.hiddenItems.has(item);

  hide = (item) => {
    this.hiddenItems.add(item);
  };
}
```

Template:

```hbs
<ul>
  {{#each @items as |item|}}
    {{#if (this.shouldShow item)}}
      <li>
        {{item.details}}

        <button type='button' {{on "click" (fn this.hide item)}}>
          Hide
        </button>
      </li>
    {{/if}}
  {{/each}}
</ul>
```

Notice here that you can do what people have always felt like you *should* be able to do: `{{#if (this.shouldShow item)}}`!

In this example I've used arrow functions to bind the methods. Methods *do* have to be bound, or this won't work! You could also use `@action` here, and that will do the trick—but it feels a bit weird to put `@action` on `shouldShow()`. The Ember Framework team has discussed this little corner, and I expect we will update our teaching and approach here as part of the road to Polaris. There are a lot of options here, including:

<!-- alex ignore just -->
- using arrow functions like this example shows
- introducing a `@bound` decorator to replace `@action`
- introducing *other* decorators, to distinguish between “actions” and things which “read” tracked state
- making direct `this.someMethod` access “just work”
- combinations of some or all of the above

We’ll have more to say on that in the future!

## Standalone functions as helpers

Instead of writing `helper(function(pos, named) { ... })` you can define a function normally and make it the default export from a file in your app or addon's `helpers` directory. For example, here’s how you might have defined a `parse-int` helper before:

```js
import { helper } from '@ember/component/helper';

export default helper(function parseInt([numberToParse], { radix = 10 }) {
  return Number.parseInt(numberToParse, radix);
});
```

Here's how we would define that now that we have the ability to use normal functions as helpers:

```js
export default function parseInt(numberToParse, { radix = 10 }) {
  // ...
}
```

Using that in the template is exactly the same either way:

```hbs
{{parse-int "1234" radix=4}}
```


### Rules for helpers

A helper defined as a plain-old function takes all positional arguments as normal arguments, with a final named argument as its last argument:

```js
function exampleHelper(positional1, positional2, named) {
  if (named.someNamedArg) {
    // ...
  }
}
```

*Note for migrating:* In traditional Ember helpers, the positional and named arguments are *always* passed to the function—if the caller did not pass them, they are present but empty. By contrast, plain-old function helpers work exactly like JavaScript functions: if you want a default value, you need to supply it in the JavaScript.


### Helpers with only positional args

For a helper with only positional args, define it like you would a normal JavaScript function with a list of parameters:

```js
export default function add(a, b) {
  return a + b;
}
```


### Helpers with only named args

For a helper with only named args, define your function with an options object as its first argument, the same way you would in normal JavaScript:

```js
export default function onlyNamed({ someOption, anotherOption }) {
  // ...
}
```


## Coming soon

When we land the `<template>` tag feature (check out [First-Class Component Templates](https://rfcs.emberjs.com/id/0779-first-class-component-templates) for details), you'll also be able to define helpers locally to a module:

```js
const add = (a, b) => a + b;

<template>
  <ul>
    {{#each @numbers as |number index|}}
      <li>{{add number index}}</li>
    {{/each}}
  </ul>
</template>
```

You can try that out today by installing [ember-template-imports](https://github.com/ember-template-imports/ember-template-imports), and we’re working on getting that into a stable version of Ember itself soon!


## Questions you might have

### How do I get started with this?

If you’re on Ember 4.5 or later, you can start using this feature as shown above, no other steps required. If you’re on Ember 3.25 or higher, you can install and use the official polyfill by running `ember install ember-functions-as-helper-polyfill`. Once you’re on 4.5 or later, the polyfill uses the native implementation instead, so you can remove it separately from doing an upgrade.

Thanks to [@nullvoxpopuli][nvp] for doing the work of getting the polyfill implemented, and to both [@nullvoxpopuli][nvp] and [Godfrey Chan (@chancancode)](https://github.com/chancancode) for helping get the feature landed in Ember itself!

[nvp]: https://github.com/nullvoxpopuli/


### Is there a codemod?

Not yet! This one would be pretty straightforward to write, though, so if you’re interested, let us know in [#topic-codemods](https://discord.com/channels/480462759797063690/597043084588613642) on [the Ember Discord](https://discord.gg/emberjs). This would be a great place to dip your toes into contributing!


### Can I use built-in methods automatically?

In the method example above, I showed using `this.shouldShow` as a helper. In normal JS you could call `this.hiddenItems.has(item)`, the way `shouldShow()` does. It seems like this should work in templates too:

```hbs
{{#each @items as |item|}}
  {{#if (this.hiddenItems.has item)}}
    ...
  {{/if}}
{{/each}}
```

Unfortunately, this does not work yet, even though it feels like it should. The template language does not *yet* make sure that the binding through `this.hiddenItems` is preserved the way it would be in a JavaScript context. The Framework Core team has started exploring how to make that work, and we are *hoping* to have a good solution in place for Polaris!


### Are traditional helpers going away?

No, helpers defined using the `helper()` function will continue to work exactly like they always have. We expect that over time, most of the community will move to using normal JavaScript functions this way. If or when it makes sense, we may deprecate and remove `helper()`—but *only* when it makes sense, and following Ember’s standard SemVer policies as always.
