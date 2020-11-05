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

</details>


<details>
<summary>Creating a blog post</summary>

1. We use [Markdown](https://www.markdownguide.org/cheat-sheet/) when writing a blog post.

1. The file must be saved in the `source` directory. The file name must begin with `YYYY-MM-DD`.

    ```bash
    # Create an Ember Times blog post for August 29, 2020
    touch source/2020-08-29-the-ember-times-issue-162.md
    ```

1. We use [alex](https://alexjs.com/) and [markdownlint](https://github.com/DavidAnson/markdownlint) for linting. If your branch's CI (continuous integration) didn't pass these linters, please read [Linters](documentations/linters.md) for more information. 

</details>


<details>
<summary>Running app locally (optional)</summary>

1. You can preview how the blog post looks by running the app locally.

1. For more information, please check these documentations:

  - [Running Locally with Docker](documentations/running-locally-with-docker.md)
  - [Running Locally with Ruby and Middleman](documentations/running-locally-with-ruby-and-middleman.md)

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
    git switch -t upstream/blog/embertimes-167
    ```

1. Open the Markdown file for the current blog issue: `source/2020-10-09-the-ember-times-issue-165.md`.

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
