---
title: Countdown to The New Year - Ember Code Snippet
author: Isaac Lee
tags: 2019, Addons, DecEmber
alias: 2019-12-29-countdown-to-the-new-year-ember-code-snippet.md
responsive: true
---

**This is the twenty-ninth in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 29

Before I took on this assignment, I didn't know anything about [ember-code-snippet](https://emberobserver.com/addons/ember-code-snippet). Now, I'm glad that I did. This addon surfaced in 2015, has received regular updates, and powers many of my favorite addons. (Can you guess how?)

READMORE

### What It Does

[ember-code-snippet](https://github.com/ef4/ember-code-snippet) lets you render code snippets in your app (or addon). Quite handy if you want to create a technical blog or **document your components**.

It provides a helper called `get-code-snippet` so that (1) you can save code snippets in a dedicated folder and (2) create your own component to customize their look.

To illustrate the use, we'll consider a code snippet from [Ember.js Octane vs Classic Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/):

```javascript
// my-app-name/snippets/make-your-own-elementId.js

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class InputTextComponent extends Component {
  inputId = 'textInput-' + guidFor(this);
}
```

### Why I Like It

<!--alex ignore just-->
ember-code-snippet is designed with **composability** in mind. It outputs just the right amount of useful data so that you can consume them to build more powerful things.

Starting version 3.0, you can [decide what library to use for syntax highlighting](https://github.com/ef4/ember-code-snippet#syntax-highlighting). For example, you might like to try out [Prism.js](https://github.com/shipshapecode/ember-prism):

```handlebars
{{!-- my-app-name/app/components/code-snippet.hbs --}}

{{#let (get-code-snippet @fileName) as |snippet|}}
  <CodeBlock
    @code={{snippet.source}}
    @language={{snippet.language}}
  />
{{/let}}
```

Or you might want [Highlight.js](https://highlightjs.org/) instead:

```handlebars
{{!-- my-app-name/app/components/code-snippet.hbs --}}

{{#let (get-code-snippet @fileName) as |snippet|}}
  <pre {{did-insert this.highlightCode}}><code class="language-{{snippet.language}}">{{snippet.source}}</code></pre>
{{/let}}
```

No matter the styling approach, the invocation remains the same:

```handlebars
{{!-- my-app-name/templates/application.hbs --}}

<CodeSnippet
  @fileName="make-your-own-elementId.js"
/>
```

I think the fact that [many of the top addons](https://emberobserver.com/lists/top-addons) use ember-code-snippet for their documentation is a testament to its well-designed API.


### Conclusion



Do you use ember-code-snippet? Or one like it? We'd love to hear about Ember addons that bring you joy!
