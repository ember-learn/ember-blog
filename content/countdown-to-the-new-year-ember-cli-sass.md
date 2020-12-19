---
title: Countdown to The New Year - Ember CLI Sass
authors:
  - isaac-lee
date: 2019-12-08T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the eighth in our DecEmber series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 8

[ember-cli-sass](https://emberobserver.com/addons/ember-cli-sass) is an addon that I always install when I work on side projects. It's that amazing / critical / \<*add your hype word of choice here*\>!

In all seriousness, let me tell you why I love Sass and why I encourage you to try out ember-cli-sass today.

<!-- READMORE -->

### What It Does

<!--alex ignore just-->
[ember-cli-sass](https://github.com/simonexmachina/ember-cli-sass) uses Sass to **preprocess stylesheets** in your Ember app (or addon). That's just a fancy way of saying you will have an easier time expressing how you want to style your app.

The addon also supports common, advanced use cases for Ember projects:

- Source maps by default in development
- Support for `outputPaths` configuration
- Ability to specify `includePaths`
- Ability to edit Sass in Chrome Dev Tools

### Why I Like It

There are two areas to examine here: (1) why I love Sass, and (2) why I love ember-cli-sass.

#### Why I Love Sass 

[Sass (Syntactically Awesome Style Sheets)](https://sass-lang.com/), which builds on top of CSS, provides features that help increase my productivity as designer and developer.

My most favorite feature is **nesting**, which lets me practice [BEM (Block, Element, Modifier)](http://getbem.com/introduction/). BEM helps me think carefully about how I write components and architect my app. It helps me envision how different components will interact with each other and how I might avoid leaking style.

PS. **Variables** are awesome too!

#### Why I Love Ember CLI Sass

ember-cli-sass is a great example of **zero-config**. In a new Ember app, all you need to do is run `ember install ember-cli-sass`, then change the file name `app/styles/app.css` to `app/styles/app.scss`. You also get **live reload** with no additional work!

<!--alex ignore easy-->
Because there will be developers who are learning Sass for their first time, I believe zero-config is a must-have. When I was in a coding bootcamp, I wanted to try out Sass or Less for a group project. We ended up with plain CSS because we had limited time and had more important things to do than figuring out how to install and configure either. Without access to nesting or variables (i.e. a convention), we didn't have an easy time dividing work and collaborating with one another.

### Conclusion

I think Sass is a great tool to help you think about how you want to architect your app. [ember-cli-sass](https://github.com/simonexmachina/ember-cli-sass) helps you try out Sass today!

I also encourage you to try out other tools for styling and discover what's best for your project. This could mean looking at a different framework such as [Tailwind](https://github.com/chrism/emberjs-tailwind-purgecss#emberjs-tailwind-10-and-purgecss-working-example), localizing styles using [ember-css-modules](https://github.com/salsify/ember-css-modules) or [ember-component-css](https://github.com/ebryn/ember-component-css), and finding a linter for stylesheets. I think we have made a good progress in bridging design and development, and am looking forward to what the future holds next.

Do you use ember-cli-sass? Or one like it? We'd love to hear about Ember addons that bring you joy!
