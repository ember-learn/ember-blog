# Ember Blog

[![Build Status](https://travis-ci.org/ember-learn/ember-blog.svg?branch=master)](https://travis-ci.org/ember-learn/ember-blog)
[![Chat with Ember community on Discord](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/emberjs)

This repository contains the blog content for the [Ember Blog](https://blog.emberjs.com/).

Other parts of the website are separate apps:

- [Ember Website](https://github.com/ember-learn/ember-website)
- [Ember Guides](https://github.com/ember-learn/guides-source)
- [API Docs](https://github.com/ember-learn/ember-api-docs)
- [Deprecations](https://github.com/ember-learn/deprecation-app)


## Contributing

New contributors are welcome! The website is maintained by an all-volunteer team, and we are thankful for your help.

The best way to get started is to find issue labeled "good first issue" or "help wanted." If you have questions or want a buddy to pair with, drop by the [#dev-ember-learning channel](https://discordapp.com/channels/480462759797063690/480777444203429888) on the
[Ember Community Discord](https://discordapp.com/invite/zT3asNS).
Like most open source projects, contributors are encouraged to open an issue
to propose changes and iterate on ideas before investing time in coding.
Some tips for working with git/GitHub can be found in
[Making your first pull request](https://github.com/ember-learn/guides-source/blob/master/CONTRIBUTING.md#making-your-first-pull-request) in the Guides respository.

To contribute to the Ember Times, a blog newsletter with weekly updates from the Ember land, please refer to this [Contributing Guide](https://github.com/ember-learn/ember-blog/blob/master/source/CONTRIBUTING.md).

### Contributing troubleshooting

We are using [Alex](https://github.com/wooorm/alex) for insensitive language checking and [markdownlint](https://github.com/DavidAnson/markdownlint). If your CI branch build is failing from these linters, please see [Contributing Guide](https://github.com/ember-learn/ember-blog/blob/master/source/CONTRIBUTING.md) for more info. 


## Running locally with Docker (recommended)

This is the recommended method to run the website app locally.
Although the website is built with Ruby, most work is done in Markdown files.
You don't need to know Ruby or install its dependencies to help out. Follow
the Docker container instructions below to install and run locally.

First, install [Docker and Compose](https://store.docker.com/search?offering=community&type=edition) and leave it running.

Next, the commands below will install all necessary dependencies for the website
app and start a server. This will take a little while to run,
possibly a few minutes. The dependencies will be installed inside a Docker
container, and do not affect your normal developer environment.

```sh
git clone git://github.com/emberjs/website.git
cd website
docker-compose build
docker-compose up
```

Subsequent runs will be much faster once all the dependencies are installed.

You can view the site locally at [http://localhost:4567](http://localhost:4567)

## Running locally with Ruby and Middleman

If you are unable to use Docker as described above, here's how to get started
installing dependencies.

``` sh
git clone https://github.com/ember-learn/ember-blog.git
cd ember-blog
bundle
bundle exec middleman
```

Then visit [http://localhost:4567/](http://localhost:4567/)

### Requirements

If the `bundle` command is not found, you can install it with `gem install bundler`.

If the `bundle` command fails to run, you may need to upgrade your Ruby version. Please check the current supported version that described at [.ruby-version](https://github.com/emberjs/website/blob/master/.ruby-version).
You can use [RVM](https://rvm.io/) to install it:

``` sh
curl -L https://get.rvm.io | bash -s stable
rvm install $(cat .ruby-version)
rvm use $(cat .ruby-version)
```

### Troubleshooting tips for Windows devs

For Windows developers using [RubyInstaller](http://rubyinstaller.org/), you'll need to [download the DevKit](http://rubyinstaller.org/downloads) and install it using instructions:
<https://github.com/oneclick/rubyinstaller/wiki/Development-Kit>

After you have a proper install, you can then run:

``` sh
gem install bundler wdm tzinfo-data
gem update listen middleman
```

Once Middleman comes up, you'll be prompted by Windows Firewall. Click "Allow access" and you'll be in business!

