---
title: Template Tag has reached Recommended Stage
authors:
  - edward-faulkner
  - katie-gengler
date: 2026-06-23T00:00:00.000Z
tags:
  - ember-polaris
  - '2026'
  - template-tag
  - embroider
---

[Template Tag](https://guides.emberjs.com/release/components/template-tag-format/) is
a component authoring format that combines the component's JavaScript and Glimmer
template code in to a single file.

<small>You may also hear this referred to as `GJS` or `GTS` after the file extensions.</small>

This format has been the default for newly generated projects and components
since [Ember's 6.8 release](https://blog.emberjs.com/ember-released-6-8/) and the
[RFC for Template Tag](https://rfcs.emberjs.com/id/0779-first-class-component-templates/)
has now reached the [Recommended stage](https://github.com/emberjs/rfcs#recommended).

An RFC reaching the Recommended stage means that the team
believes the feature to be complete, polished, incorporated by the ecosystem, into the docs,
and is ready for widespread adoption.

## "Done Done" aka Polish and Completeness

Template Tag reaching this stage is the culmination of a many-year effort by the
Ember team to improve the ergonomics of component authoring. While many of you may
have been using Template Tag for some time, the team now considers the feature to be
**complete**.

This required much work beyond the implementation of the format itself:

- Edits to the [guides](https://guides.emberjs.com/release/components/template-tag-format/), tutorials, and API docs to use the new format in examples.
- Support for the new file extensions with syntax highlighting in editors, GitHub, and our documentation.
- Creation of new lint rules and implementation of the existing rules for the new format.
- Updates to blueprints to generate using the new format.
- Production of a codemod to make it easier to migrate existing projects to Template Tag.
- Support of [Template Tag in Routes](https://rfcs.emberjs.com/id/1046-template-tag-in-routes).
- [Support for authoring component tests in Template Tag](https://rfcs.emberjs.com/id/0785-remove-set-get-in-tests).
- Updates to the Ember Inspector to support the new format.
- TypeScript support for the new format via the creation of [Glint](https://github.com/typed-ember/glint).


## Examples

The simplest example of this format is template-only:

<template>
  <aside>
    <div class="avatar" title={{@title}}>{{@initial}}</div>
  </aside>
</template>
```

With Template Tag you can also wrap `<template>` with the JavaScript class for
a component:

import Component from '@glimmer/component';

export default class Avatar extends Component {
  get titleWithDefault() {
    return this.args.title ?? 'No avatar title provided';
  }

  <template>
    <aside>
      <div class="avatar" title={{this.titleWithDefault}}>{{@initial}}</div>
    </aside>
  </template>
}
```


### Import Everything

Template Tag is the user-visible format for ["strict-mode handlebars"](https://rfcs.emberjs.com/id/0496-handlebars-strict-mode/)
which is described in an earlier RFC, for those that are interested in the details.

Because of that, Components, helpers, modifiers ("invokables") must be imported
to be used in the Template Tag format:

import Avatar from './avatar';

<template>
  <Avatar
    @title={{@avatarTitle}}
    @initial={{@avatarInitial}}
  />
  <section>
    {{@message}}
  </section>
</template>
```

Where necessary, the API docs have been updated to include the import path for
things you will use in templates (ex: [`LinkTo`](https://api.emberjs.com/ember/release/classes/Ember.Templates.components?anchor=LinkTo#LinkTo).)

Several commonly used helpers are now (as of v7.1.0) built-in as keywords in
when used within `<template>`:

- [`on` modifier]()
- [`element` helper and modifier]()
- [`fn` helper]()
- [`hash` helper]()
- [`array` helper]()
- [`and` helper]()
- [`or` helper]()
- [`not` helper]()
- [`eq` helper]()
- [`neq` helper]()
- [`gt` helper]()
- [`gte` helper]()
- [`lt` helper]()
- [`lte` helper]()

These are all available within the `<template>` tag without importing them. Any
imports with the same name will take precedence over the built-in helpers.

## Migration

To make it easier for all teams to adopt Template Tag, we created
`@embroider/template-tag-codemod`. The goal of the codemod is fully-reliable
conversion to the new format.

The super-short version of the instructions:

1. Make sure you don't have any uncommitted changes, because we're about to start mutating all your files!
2. Run `npx @embroider/template-tag-codemod`.
3. (Optional but highly recommended) Use `prettier` (with GJS support enabled) to make the results pretty.
4. (Optional but highly recommended) use `npx @embroider/template-tag-codemod merge-history --help`

The default behavior will attempt to convert _everything_ in your app, and it will target the most forward-looking output format.

Read the `--help` and the complete instructions [in the README](https://github.com/embroider-build/embroider/tree/main/packages/template-tag-codemod).
