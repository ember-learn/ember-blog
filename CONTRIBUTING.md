# Contributing to Ember Blog

New contributors are welcome! Ember Blog is maintained by an all-volunteer team, and we are thankful for your help.

You can support us in a few different ways:

- Suggest an article for [The Ember Times](https://blog.emberjs.com/tags/newsletter.html)
- Do a write-up of an article for The Ember Times
- Complete an [issue](https://github.com/ember-learn/ember-blog/issues) with the label "good first issue" or "help wanted"
- Open an issue to provide feedback

If you have questions or need help with writing, please visit the `#dev-ember-learning` channel on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS).


## Setup

<details>
<summary>Installation</summary>

1. Fork and clone this repo.

    ```bash
    git clone git@github.com:<your GitHub handle>/ember-blog.git
    ```

1. Change directory.

    ```bash
    cd ember-blog
    ```

1. Install packages.

    ```bash
    npm install
    ```

</details>


<details>
<summary>Creating a blog post</summary>

1. We use [Markdown](https://www.markdownguide.org/cheat-sheet/) when writing a blog post.

1. The file must be saved in the `content` directory.

    ```bash
    # Create an Ember Times blog post for August 29, 2020
    touch content/the-ember-times-issue-162.md
    ```

1. We use [alex](https://alexjs.com/) and [markdownlint](https://github.com/DavidAnson/markdownlint) for linting. If your branch's CI (continuous integration) didn't pass these linters, please consider rewording or updating Markdown syntax to fix the error. If the linter incorrectly marked something as an error, you may add an exception to your file.

* If GitHub Actions lint CI fails on alex, the failure is usually listed **far** above `Exit status 1`.

```
⚠ 1 warning
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! ember-blog@0.0.0 lint:alex: `alex {content,post-templates}/**/*.md`
npm ERR! Exit status 1
```

Search for "warning" to see the specific alex failure, which will look like:

```
content/the-ember-times-issue-173.md
  71:8-71:12  warning  Don’t use `Tang`, it’s profane  tang  retext-profanities
```

* If GitHub Actions lint CI fails on markdownlint, the failure is usually listed **closely** above `Exit status 1`. In the example below, the markdownlint error is `MD034`. Full list of rules can be found [here](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md).

```
content/the-ember-times-issue-173.md:39:16 MD034/no-bare-urls Bare URL used [Context: "https://dev.to/jelhan/format-g..."]
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! ember-blog@0.0.0 lint:md: `markdownlint {content,post-templates}/**/*.md`
npm ERR! Exit status 1
```

</details>


<details>
<summary>Running app locally (optional)</summary>

1. You can preview how the blog post looks by running the Ember app locally.

    ```bash
    ember serve
    ```

1. Visit [http://localhost:4200](http://localhost:4200).

</details>


## Writing for The Ember Times

Thank you for contributing to The Ember Times! Let us know if you can be a guest or regular writer. On Discord, you can reach the team in the `#support-ember-times` channel.

<details>
<summary>Claiming a news item</summary>

1. Where can you find news items that you can cover? Look for an in-progress [pull request with the label `Ember Times`](https://github.com/ember-learn/ember-blog/pulls?q=is%3Apr+label%3A%22Ember+Times%22+is%3Aopen).

1. You can claim a news item by **leaving a comment in the pull request**. If you have edit permission for the pull request, you can update the description by adding the lock emoji 🔏 and your GitHub handle:

    ```markdown
    - [x] Ember v3.22 released (🔏 @tomster)
    - [ ] How to use GraphQL with Ember (🔏 @zoey) <-- claimed!
    - [ ] 16th edition of I Contribute to Ember
    ```

</details>

<details>
<summary>Updating the blog post</summary>

1. After installing the repo (see [Setup](#setup)), you will need to perform a few extra steps to work from the correct branch.

    ```bash
    # Set upstream (one-time operation)
    git remote add upstream https://github.com/ember-learn/ember-blog

    # Get branches and commits from upstream
    git fetch upstream

    # Switch to the current Ember Times branch
    git switch -t upstream/blog/embertimes-165 # or, git checkout blog/embertimes-165
    ```

1. Open the Markdown file for the current blog issue: `content/the-ember-times-issue-165.md`.

1. Add your name, introductory line, and writing to the Markdown file. You'll see useful notes and placeholders in the file.

    ```markdown
    ## [Section title in sentence case 🐹](section-url)

    <change section title emoji>
    <consider adding some bold to your paragraph>
    <please include link to external article/repo/etc in paragraph / body text, not just header title above>

    <add your name to author list, top and bottom>
    <add blurb and emoji to "SOME-INTRO-HERE">
    ```

1. When you're finished with writing, create a pull request. Let the team know on Discord that it is ready for review!

    ```bash
    # Commit changes
    git add .
    git commit -m 'Covered the article "How to use GraphQL with Ember"'

    # Push changes
    git push origin blog/embertimes-165

    # Create a pull request from your repo on GitHub
    ```

</details>

<details>
<summary>Meeting the deadline</summary>

1. **Friday afternoon** is a general deadline that the team strives to meet. We encourage you to turn in your writing early to get effective feedback and revise as much as needed.

1. We fully understand that you may be busy and need to miss writing. If so, we encourage you to let your team know.

</details>


## Publishing an Issue of The Ember Times

<details>
<summary>Substack instructions</summary>
  
1. Get a login to the Ember Times account on Substack from [#support-ember-times](https://discord.com/channels/480462759797063690/485450546887786506).
1. Merge post PR to master on this repo. 
1. Draft a new post in Substack. From https://github.com/ember-learn/ember-blog/find/master, search for the issue e.g. "171". 
1. Put greeting e.g. "👋 Emberistas! 🐹" and the intro AKA summary of articles in the Substack subtitle. No need to repeat in the content of the Substack itself. 
1. Copy the copy content of the blog below the "intro" from there into Substack. 
1. You will need to manually import images such as Office Hours Tomster mascot https://github.com/ember-learn/ember-blog/blob/master/public/images/tomsters/officehours.png.
1. In Substack "Post settings", manually import https://github.com/ember-learn/ember-blog/blob/master/public/images/logos/e-icon.png for the Substack social preview.
1. Also in Substack "Post settings", you may want to remove "👋 Emberistas!" so that the social preview is "🐹 <intro-here>" as we are limited on space.
1. Send yourself a test email to preview how it looks.
1. Send to the list!

</details>

<details>
<summary>Twitter instructions</summary>
  
1. Post tweet on Tweetdeck to post on Monday (second day of #engagement)
1. Set $natural reminder on Discord, for example: `$natural on February 15th at 2:00pm send post tweet 2 news & announce @Alon (if you're avail!) :newspaper2: to #support-ember-times`
1. Use one emoji for each line item as a bullet point
1. Try to @ or hashtag when appropriate
1. Include the URL to the blog

</details>

<details>
<summary>dev.to instructions</summary>
  
1. Copy raw from GitHub, delete top YAML portion.
1. If they appear in the preview, delete any `alex-ignore` or `markdownlint-ignore`.
1. Delete any italics classes such as <span style="font-style: italic;"></span>. Normal <em> or *italicizeme* markdown doesn't work in /ember-blog right now.
1. Double curlies `{{` in header link titles will sometimes give you a liquid error. For example, with this heading `[No Implicit This or {{foo}} to {{this.foo}} Codemod](https://github.com/ember-codemods/ember-no-implicit-this-codemod)` I just deleted the double curlies to fix. 
1. Check for weird line breaking. We can fix this with stricter markdownlint but it was a bit cumbersome for blog writers!
1. Add canonical URL and series name (The Ember Times should come up)
1. Add body image for Readers' Questions image manually https://github.com/ember-learn/ember-website/blob/master/public/images/tomsters/officehours.png.
1. Format manually if needed.
  
</details>
