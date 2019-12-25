---
title: Countdown to The New Year - Ember Code Snippet
author: Isaac Lee
tags: 2019, Addons, DecEmber
alias: 2019-12-29-countdown-to-the-new-year-ember-code-snippet.md
responsive: true
---

**This is the twenty-ninth in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 29

Before I took on this assignment, I didn't know anything about [ember-code-snippet](https://emberobserver.com/addons/ember-code-snippet). Now, I'm glad that I did. This addon surfaced in 2015, has received regular updates since, and powers one of the most used addons. (Can you guess which one?)

READMORE

### What It Does

[ember-code-snippet](https://github.com/ef4/ember-code-snippet) lets you render code snippets in your app (or addon). Quite handy if you want to create a technical blog or a component style guide.

It provides a helper called `get-code-snippet` so that (1) you can save code snippets in a dedicated folder and (2) create your own component to customize the look.

```handlebars
{{!-- /app/components/code-snippet/template.hbs --}}

{{#let (get-code-snippet @fileName) as |snippet|}}
    <!-- No syntax highlighting -->
    <pre><code>{{snippet.source}}</code></pre>
{{/let}}
```

```handlebars
{{!-- /app/templates/application.hbs --}}

<CodeSnippet @fileName="make-your-own-elementId.hbs" />
```

### Why I Like It



### Conclusion



Do you use ember-code-snippet? Or one like it? We'd love to hear about Ember addons that bring you joy!
