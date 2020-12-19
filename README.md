# Ember Blog

[![Build Status](https://travis-ci.org/ember-learn/ember-blog.svg?branch=master)](https://travis-ci.org/ember-learn/ember-blog)
<a href="https://discord.gg/emberjs"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>

This repository contains the blog content for the [Ember.js public website](https://emberjs.com).

Other parts of the public website are separate apps:

- [The Website](https://github.com/ember-learn/ember-website)
- [API Docs](https://github.com/ember-learn/ember-api-docs)
- [Deprecations](https://github.com/ember-learn/deprecation-app)
- [The Guides](https://github.com/ember-learn/guides-source)
- [Builds](https://github.com/ember-learn/builds)
- [Status Board](https://github.com/ember-learn/statusboard)

## Contributing

New contributors are welcome! The website is maintained by an all-volunteer team, and we are thankful for your help.

The best way to get started is to find issue labeled "good first issue" or "help wanted." If you have questions or want a buddy to pair with, drop by the [#dev-ember-learning channel](https://discordapp.com/channels/480462759797063690/480777444203429888) on the
[Ember Community Discord](https://discordapp.com/invite/zT3asNS).
Like most open source projects, contributors are encouraged to open an issue
to propose changes and iterate on ideas before investing time in coding.
Some tips for working with git/GitHub can be found in
[Making your first pull request](https://github.com/ember-learn/guides-source/blob/master/CONTRIBUTING.md#making-your-first-pull-request) in the Guides respository.

### Contributing troubleshooting

We are using [Alex](https://github.com/wooorm/alex) for insensitive language checking and [markdownlint](https://github.com/DavidAnson/markdownlint). If your CI branch build is failing from these linters, please see [Contributing Guide](https://github.com/ember-learn/ember-blog/blob/master/source/CONTRIBUTING.md) for more info.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-blog`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
