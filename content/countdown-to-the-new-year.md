---
title: Countdown to The New Year - Built-in Addons
authors:
  - melanie-sumner
date: 2019-12-31T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the last of our December series-"Countdown to The New Year: 31 Days of Ember Addons". Thank you for joining us!**

What a month it’s been!  Over the last thirty days, we have showcased different kinds of addons in the Ember ecosystem. In this final post, we’ll show how an Ember app’s default addons come together to form a great developer experience, and we will reflect on the article series as a whole.

This article series highlights the real spirit of the Ember community, the ways in which we come together to find a way to say yes to good ideas.  It started out as a wish: “Wouldn’t it be nice if we had our own advent calendar blog?” Then, it quickly turned into a refined possibility: “Let’s do a countdown to the new year so we can cover more addons.” From there, it grew into actionable steps: “What does an MVP blog post look like? How about a pre-determined format to make it easier to allow other community members to contribute?” This is one example of how many of our favorite open source projects come to life!

<!-- READMORE -->

<!--alex ignore of-course-->
Of course, we were only able to highlight a small portion of the addons that so many of us use in our day-to-day lives, and we didn’t even touch on the ones that are included in Ember apps by default...so let's do that now! 

If you start to consider the kinds of apps powered by Ember—everything from dairy farm apps to cruise ship line's websites, to the future in open source blockchain—the need for stability becomes urgently and crisply apparent. This is where Ember’s backwards-compatibility guarantee really shines—the new stuff won’t break your old stuff, and you’ll be given both plenty of time and guidance to upgrade. 

<!--alex disable just-->
One of the ways we are able to offer this kind of flexibility and stability is through the work that Rob Jackson, Kris Selden, Godfrey Chan, Ed Faulkner and many others have done to make Ember more flexible by splitting it up into separate addons. This helps the overall maintainability and makes it a lot more convenient when work needs to be done on just one of the addons. 

When you type `ember new my-app` do you know all of the things that you’re getting by default? 

You might already be aware of the major things:

<!--alex ignore gramps-granny-->
- the component library (`@glimmer/component` )
- the data library (`ember-data` ) 
- the granddaddy of all CLI tools (`ember-cli`)

Those things alone are amazing, and the reason why Ember can provide such a cohesive, robust approach to building apps for developers of **all** skill levels. But there’s more! Let’s look at a few of the addons that are built into Ember by default, and the usefulness that they provide. 

## Make it robust

1. `@ember/optional-features` - who doesn’t love a good feature flag? This is one of the ways Ember allows you to try new features. The added bonus here is that we can test out the compatibility with existing features before making the optional feature permanent. Read more about optional features in Ember: [https://guides.emberjs.com/release/configuring-ember/optional-features/](https://guides.emberjs.com/release/configuring-ember/optional-features/).
2. `ember-auto-import` - we covered this one on [day 6](https://blog.emberjs.com/2019/12/06/countdown-to-the-new-year-ember-auto-import.html), but it’s worth mentioning again. As of Ember v3.15, it is now part of apps by default! Gone are the days when an Ember version of a popular library or package needed to be created (and maintained).  It eliminates the need for developers to understand the differences between AMD and CJS modules and how they get into the app tree. They don't need to read about how to configure their build, or how Ember's build pipeline differs from other build tools. They import what they need, and it just works. 
3. `ember-qunit` - Ember’s testing story is unarguably one of its biggest strengths, and built into every app is the ability to write tests that are concise and readable. Read more in the testing section of the guides: [https://guides.emberjs.com/release/testing/](https://guides.emberjs.com/release/testing/).

## Make it just work 

1. `ember-cli-dependency-checker` automatically checks for missing dependencies before the command even runs! Ember CLI is pure productivity gold; it gives you strong defaults but also ways to customize further, if you want to. Read more here: [https://guides.emberjs.com/release/configuring-ember/configuring-ember-cli/](https://guides.emberjs.com/release/configuring-ember/configuring-ember-cli/). 
2. `ember-maybe-import-regenerator` will import the Regenerator Runtime into your Ember app- but only if you need it. [Among other things](https://github.com/machty/ember-maybe-import-regenerator), it’s useful for apps that want to use ES6 generator functions but don’t want to import the (larger) Babel polyfill package.
3. `ember-resolver` is probably the real “Ember magic,” if there is such a thing. What template goes with what route? [Ember Resolver](https://github.com/ember-cli/ember-resolver) has your back. Technically speaking, it’s how your code gets converted into the actual classes/functions/templates that Ember needs to resolve it’s dependencies. And you don’t have to think about it, or set it up, it’s just there, working for you. Like magic. Or science.
4. `broccoli-asset-rev` adds fingerprint checksums and CDN URLs to your assets (things like images, web fonts, etc). Just one more thing you don’t have to think about, but you can customize if desired. In a similar vein, `ember-cli-sri` ensures sub-resource integrity, a security concept used to check JavaScript and stylesheets are loaded with the correct content when using a CDN.

## Make it friendly

1. `ember-welcome-page` is a friendly way to let you know that you’ve successfully spun up your Ember application. When you’re ready to remove it and replace it with your own app content, removing the addon from `package.json` and the related template code from `app/templates/application.hbs` will put you back to a blank slate. 
2. `ember-cli-inject-live-reload` is possibly my favorite developer-friendly feature of Ember. I make changes, and my local developer instance live reloads, with no setup required from me. I’ll say that again - no setup required from me. Absolute bliss. 
3. lint, lint, and lint some more - the most developer-friendly thing that Ember provides is a robust set of linters. There are a lot of ways apps can get things wrong, but Ember does what it can for preventable issues. `ember-template-lint`, `eslint-plugin-ember`, and `ember-cli-eslint` are just a few of the ways we try to give you a well-lit path to success. 

When I stop to think about all of the things I used to have to do every time I set up a new application, I grow more grateful for the ways Ember makes it easier to focus on what my app should do, and not all the tedium that can so quickly waste developer productivity through human error on tiny details. 

On top of all of this, the [recent release of the Octane edition of Ember](https://blog.emberjs.com/2019/12/20/octane-is-here.html) means that now is the perfect time to give Ember a try, no matter what your skill level. [EmberObserver](https://emberobserver.com/) is still the go-to place for pre-evaluating Ember addons, and the [community chat server](https://discord.gg/emberjs) is a perfect spot for getting help and advice if you need it- or have some to share! 

No matter what your relationship with Ember.js is, there’s a place for you. Haven’t tried Ember yet? Check out the [revamped tutorial](https://guides.emberjs.com/release/tutorial/) and give it a go! Regular Ember user? Check out the [updated guides](https://guides.emberjs.com/release/), and let us know what you think! Already using Octane (v3.15+)? I bet there are some addons that could use some updates! There’s no time like the present- jump right in and give it a try. 

Ember wouldn't be what it is without the community of folks that make it all work. Thank you for being a part of this community and this effort to move the web forward in a way that allows us all to climb the proverbial mountain together. Here's to a happy and healthy 2020!
