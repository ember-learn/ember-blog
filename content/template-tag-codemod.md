---
title: Try out the Template Tag Codemod
authors:
  - edward-faulkner
date: 2026-01-09T00:00:00.000Z
tags:
  - ember-polaris
  - '2026'
  - template-tag
  - embroider
---

One of the pillars of Ember's upcoming Polaris edition is [Template Tag](https://guides.emberjs.com/release/components/template-tag-format/). Many teams are already writing their components this way and enjoying the improved developer experience. The Template Tag RFC is currently in the "Released" status, and will reach "Recommended" [once we're satisfied that we have sufficient documentation and polish](https://github.com/emberjs/rfcs/pull/1059).

To make it easier for all teams to adopt Template Tag, we've created `@embroider/template-tag-codemod`. The goal of the codemod is fully-reliable conversion to the new format.

This blog post is a call to **try out the codemod**. Even if you're not ready to commit yet to using Template Tag in your app, you can try running the codemod on your app to see what results you get and report bugs that get in your way.

The super-short version of the instructions if you just want to give it a try are:

1. Make sure you don't have any uncommitted changes, because we're about to start mutating all your files!
2. Run `npx @embroider/template-tag-codemod`.
3. (Optional but highly recommended) Use `prettier` (with GJS support enabled) to make the results pretty.
4. (Optional but highly recommended) use `npx @embroider/template-tag-codemod merge-history --help`

The default behavior will attempt to convert _everything_ in your app, and it will target the most forward-looking output format.

Read the `--help` and the complete instructions [in the README](https://github.com/embroider-build/embroider/tree/main/packages/template-tag-codemod) to:

- limit which files will be converted all at once:

  ```sh
  --renderTests false --routeTemplates false --components app/components/only-these-ones/**/*.hbs
  ```

- get output that is more compatible with Ember < 6.3.0:

  ```sh
  --nativeRouteTemplates false --nativeLexicalThis false
  ```

- get output that uses imports from the app's module namespace instead of relative paths `import Bar from 'my-app/utils/bar';`; this is required in the classic builds:

  ```sh
  --relativeLocalPaths false
  ```

- produce TypeScript GTS files rather than JavaScript GJS files in cases that are ambiguous between those two choices:

  ```sh
  --defaultFormat gts
  ```

- customize the naming choices for imported components/helpers/modifiers:

  ```sh
  --renamingRules ./your-rules-here.mjs
  ```

_Why is this codemod under the `@embroider` namespace?_

Because Template Tag Codemod is powered by the same backward-compatibility infrastructure that we created in Embroider to allow you to adopt modern build tooling. When you build an app with Embroider, Embroider needs to identify, locate, and synthesize import statements for all the components, helpers, and modifiers that you use in your traditional handlebars templates. The Template Tag Codemod does exactly the same thing, except instead of repeating that process every time you do a build, we can do it once-and-for-all and commit the resulting GJS (or GTS for TypeScript users) files directly into your project. As a result, switching to Template Tag can result in improved build performance for apps that have already adopted Embroider.

Please [report issues here](https://github.com/embroider-build/embroider/issues) and ask questions in the #dev-embroider channel on the community Discord.
