# Linters


## Language Checking with Alex

This project uses [Alex](https://github.com/wooorm/alex)

- a wording linter for insensitive language - to make sure that new posts are as inviting and approachable to its readers as possible.

The CI for this project will run `alex` on all new changes which have been made
in the `source/blog/` directory and issue a warning if it encounters any controversial language.

If you'd like to lint your changes locally, you can install `alex` and run it from your command line
to only check your current changes as follows:

```bash
npm install -g alex
bash scripts/language-check.sh
```

Or, you can download an [extension](https://github.com/get-alex/alex#integrations) for your editor.

If you are consciously [overriding the Alex linter](https://github.com/get-alex/alex#control) you can add an annotation before the paragraph as shown below.

From the example error message:

Text:

```bash
A pop up window will occur.
```

Error Message:

```bash
readme.md
  1:15-1:18  warning  `pop` may be insensitive, use `parent` instead  dad-mom  retext-equality

⚠ 1 warning
```

Add the keyword to the ignore

```bash
<!--alex ignore dad-mom-->
A pop up window will occur.
```


## Markdownlint

We are using [markdownlint](https://github.com/DavidAnson/markdownlint) for linting!

We suggest downloading a [markdownlint extension](https://github.com/DavidAnson/markdownlint#related) for your editor to see errors in real-time, if available.