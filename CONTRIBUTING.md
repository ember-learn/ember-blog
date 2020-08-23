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


## Publishing an Issue of The Ember Times