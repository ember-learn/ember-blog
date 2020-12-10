---
title: Countdown to The New Year - Ember Code Snippet
author: Isaac Lee
tags: 2019, Addons, DecEmber
alias: 2019-12-29-countdown-to-the-new-year-ember-code-snippet.md
responsive: true
---

**This is the twenty-ninth in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 29

Before I took this assignment, I didn't know anything about [ember-code-snippet](https://emberobserver.com/addons/ember-code-snippet). Now, I'm glad that I did. This addon surfaced in 2015, has received regular updates, and powers many of my favorite addons. (Can you guess how?)

READMORE

### What It Does

[ember-code-snippet](https://github.com/ef4/ember-code-snippet) lets you render code snippets in your app (or addon). Quite handy if you want to create a technical blog or **document your components**.

It provides a helper called `get-code-snippet` so that (1) you can save code snippets in a dedicated folder and (2) create your own component to customize their look.

To illustrate the use, we'll consider a code snippet from [the Ember.js Octane vs Classic Cheat Sheet](https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/):

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
{{!-- my-app-name/app/components/code-snippet/template.hbs --}}

{{#let (get-code-snippet @fileName) as |snippet|}}
  <CodeBlock
    @code={{snippet.source}}
    @language={{snippet.language}}
  />
{{/let}}
```

<figure class="mb-4">
  <img alt="Code snippet highlighted with Prism JS" src="/images/blog/2019-12-29/code-snippet-prism.png">
  <figcaption>Code snippet highlighted with Prism.js</figcaption>
</figure>

Maybe you want [Highlight.js](https://highlightjs.org/) instead:

```handlebars
{{!-- my-app-name/app/components/code-snippet/template.hbs --}}

{{#let (get-code-snippet @fileName) as |snippet|}}
  <pre {{did-insert this.highlightCode}}><code class="language-{{snippet.language}}">{{snippet.source}}</code></pre>
{{/let}}
```

<figure class="mb-4">
  <img alt="Code snippet highlighted with Highlight JS" src="/images/blog/2019-12-29/code-snippet-highlight.png">
  <figcaption>Code snippet highlighted with Highlight.js</figcaption>
</figure>

No matter the styling approach, the invocation remains the same:

```handlebars
{{!-- my-app-name/templates/application.hbs --}}

<CodeSnippet
  @fileName="make-your-own-elementId.js"
/>
```

I think the fact that [many top addons](https://emberobserver.com/lists/top-addons) use ember-code-snippet for documentation is a testament to its well-designed API. You may not have realized this (I didn't until today) because each doc has a unique style:

- [Ember Bootstrap](https://www.ember-bootstrap.com/#/components/alert)
- [Ember CLI Addon Docs](https://ember-learn.github.io/ember-cli-addon-docs/docs/components/docs-snippet)
- [Ember Concurrency](http://ember-concurrency.com/docs/tutorial/discussion)
- [Ember CP Validations](http://offirgolan.github.io/ember-cp-validations/)
- [Ember Power Select](https://ember-power-select.com/docs/how-to-use-it)
- [Liquid Fire](https://ember-animation.github.io/liquid-fire/helpers/liquid-outlet)
- and many more...

Do you use ember-code-snippet? Or one like it? We'd love to hear about Ember addons that bring you joy!
