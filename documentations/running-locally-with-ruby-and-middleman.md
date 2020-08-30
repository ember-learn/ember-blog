# Running locally with Ruby and Middleman

If you are unable to use Docker as described above, here's how to get started
installing dependencies.

``` sh
git clone https://github.com/ember-learn/ember-blog.git
cd ember-blog
bundle
bundle exec middleman
```

Then visit [http://localhost:4567/](http://localhost:4567/)


## Requirements

If the `bundle` command is not found, you can install it with `gem install bundler`.

If the `bundle` command fails to run, you may need to upgrade your Ruby version. Please check the current supported version that described at [.ruby-version](https://github.com/emberjs/website/blob/master/.ruby-version).
You can use [RVM](https://rvm.io/) to install it:

``` sh
curl -L https://get.rvm.io | bash -s stable
rvm install $(cat .ruby-version)
rvm use $(cat .ruby-version)
```


## Troubleshooting tips for Windows devs

For Windows developers using [RubyInstaller](http://rubyinstaller.org/), you'll need to [download the DevKit](http://rubyinstaller.org/downloads) and install it using instructions:
<https://github.com/oneclick/rubyinstaller/wiki/Development-Kit>

After you have a proper install, you can then run:

``` sh
gem install bundler wdm tzinfo-data
gem update listen middleman
```

Once Middleman comes up, you'll be prompted by Windows Firewall. Click "Allow access" and you'll be in business!