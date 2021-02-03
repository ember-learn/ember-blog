---
title: How To Todo In Ember Template Lint
authors:
  - melanie-sumner
date: 2021-02-02T00:00:00.000Z
tags:
  - addons
  - '2021'
---

## Introduction

**At the time of this writing, this feature is available in `ember-template-lint@3.0.0-beta.3`.**

The new `todo` feature in the `ember-template-lint` addon provides a new option to the existing states for linting rules.

With this new functionality, linting issues can be converted into a `todo` and developers can strategically plan the work to resolve issues in existing code. A `todo` can be set to automatically become a `warning`, then an `error` with the use of a supporting feature called decay days.

<img src="/images/blog/how-to-todo-in-ember-template-lint/todo-warning-error-graphic.png" alt="todo, warning, error">

Previously, running the  `lint:hbs` script (default in an Ember app) would cause `ember-template-lint` to run on all of the `.hbs` files, and return a result that included number of `warnings` and number of `errors` found.
<img src="/images/blog/how-to-todo-in-ember-template-lint/terminal-without-todo.png" alt="a terminal showing results that include 2 errors and 0 warnings" />

Now, however, we have a new option—we can also include number of `todos`. First, update the `lint:hbs` script in the `package.json` file to use the `--include-todo` flag (we want to be reminded that we have todos!):

```json
"lint:hbs": "ember-template-lint . --include-todo",
```

Next, run the command `yarn lint:hbs` again:
<img src="/images/blog/how-to-todo-in-ember-template-lint/terminal-with-todo.png" alt="a terminal showing 2 errors, 0 warnings, and 0 todos" />

Note: `ember-template-lint` also takes a `--quiet` flag, which won't print any warnings or todos, only errors.

Along with the ability to create todos out of currently failing rules, some options can be set to decide the number of days before the `todo` turns into a `warning` and then into an `error`.

### Why, though?

This new feature is really intended to help apps at scale. It can be tricky to update a dependency like `ember-template-lint`, especially if it's a version that includes a new rule, due to the number of factors involved. Taking in a new version of the linter usually means a lot of communication and coordination about the new rule(s) and the larger your app gets, and the more developers you have, the more work this was. For global companies that use Ember, there might even be a committee whose sole focus is to make decisions about linting rules. That's a lot of red tape!

While the `pending` feature gave us _some_ of the desired functionality, it didn't really ensure that teams would be given the support they needed to actually fix existing issues- issues could stay "pending" forever. Now that the `todo` feature has replaced the `pending` feature, we can be confident that when we introduce new linting rules, we're giving our development teams the support they need to remember to fix those issues.

Perhaps a visualization would also be useful:
<img src="/images/blog/how-to-todo-in-ember-template-lint/value-visualization.png" alt="a chart that shows how existing code receives a todo, while new code must follow the linting rules.">

All new code is immediately supported by new linting rules; existing code can have a timeline to provide a fix.

We can even go a step farther, and customize the number of days to fix based on the rule itself. Super useful!

## Step 1: Strategize

You'll want to think about how you want to approach all of the linting rules. Do you want all rules to be treated the same way, or do you want to apply decay days by rule? The linter gives you options for both.

### All rules (generic setting)

It's possible that you don't care what the error is; all todos should have 15 days before they turn into a warning, and 30 days before they turn into an error. To do this, add this to the `package.json` file:

```json
{
  "lintTodo": {
    "decayDays": {
      "warn": 15,
      "error": 30
    }
  }
}
```

The default values will vary from team to team, but in general the idea is this: it should be reasonable enough for teams to methodically work on past issues, but not too long that they are forgotten about. _*It should feel like a little bit of a stretch, but not stressful.*_

### Increasing specificity by rule

It's also possible that you'd want to specify that a particular rule needs to be fix with more immediacy. In that case, you'd want to run that rule by itself. Let's use the `no-nested-interactive` rule as an example:

```bash
yarn ember-template-lint app/ --no-config-path --no-inline-config --rule 'no-nested-interactive:error' --update-todo --todo-days-to-warn=7 --todo-days-to-error=14
```

Let's break down what this command does:

- `yarn ember-template-lint app/` : "run the linter on the app folder"
- `--no-config-path` : "ignore the `.template-lintrc.js` file"
- `--no-inline-config` : "also, ignore instances where the rule has been supressed inline"
- `--rule 'no-nested-interactive:error'` : "specifically, only run the `no-nested-interactive` rule and throw an error if it finds these issues"
- `--update-todo` : "create a todo if this issue is found"
- `--todo-days-to-warn=7` : "in the created todo, automatically change the todo to a warning after 7 days"
- `--todo-days-to-error=14` : "in the created todo, automatically change the warning to an error after 14 days"

<div class="cta-note" style="max-width:100%">
  <div class="cta-note-content">
    <div class="cta-note-body p-2">
      <div class="text-lg mb-1 hide-in-percy" data-test-es-note-heading="">Zoey says...accessibility!</div>
      <div class="cta-note-message">
        <p>If your company has decided to make more inclusive products, you may want to set the decay days based on the rule itself.</p>
        <p>Typically, accessibility (a11y) bugs are divided up into categories based on impact to the user: blocker, critical, major and minor (results may vary).</p>
        <p>Looking at the documentation for each the <a href="https://github.com/ember-template-lint/ember-template-lint/blob/master/lib/config/a11y.js">a11y-related rules</a> in <code>ember-template-lint</code>, you could then determine the rule's category, and determine the number of days to warn/error accordingly.</p>
        <p>For more ideas about how this could work, ping the #topic-a11y channel in the <a href="https://discord.gg/emberjs">Ember Discord community chat</a>.</p>
      </div>
    </div>
    <img src="/images/mascots/zoey.png" role="presentation" alt="" class="hide-in-percy cta-mascot m-2" style="max-height:100px" />
  </div>
</div>


## Step 2: Plan For Accountability

After running the linter and creating all of the todos, a `.lint-todo` folder will appear in the root directory of the project. This is where you'll find the specifics about what file is failing what rule, and you can fix those issues.

If you run the linter after an issue is fixed, the linter will tell you that an issue has been resolved. To remove the resolved todo, use the `--fix` flag:

```bash
yarn lint:hbs --fix
```

Note: using `--fix` will also auto-fix any items that are automatically fixable. One place where this sometimes causes some concern is with the `require-button-type` rule. It will add a default `type="button"` to the `<button>` element, but may not automatically respect the prettier or beautify configs of the project.

The `.lint-todo` folder should get checked in to the project's version control system, and teams should do a periodic review to ensure that they are fixing the todos and not changing the due dates. Have a professional agreement with the other members of your team, and stay committed to fixing those todos.

## Step 3: Enjoy Improved Code!

By taking advantage of the new todo feature, dev teams are setting themselves up for success and higher quality code will result. If you have any questions about this new feature, check out the #e-template-lint channel in the [Ember Discord community chat](https://discord.gg/emberjs), or [file an issue](https://github.com/ember-template-lint/ember-template-lint/issues) on the project's repo.
