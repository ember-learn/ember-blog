---
title: Global Accessibility Awareness Day
author: Melanie Sumner
tags: Recent Posts, 2020, Announcement, Featured Announcement, Accessibility
responsive: true
---
Happy Global Accessibility Awareness Day! 

To mark this occasion, I'd like to talk about the ways Ember already helps you make accessible applications, give you an update on what Ember has been doing to make it easier than ever to create accessible Ember applications, and finally a few things that you can do starting today to make your applications more accessible. 

## Accessibility in Ember

Because Ember is an HTML-first framework, it is straight-forward to write accessible applications from day one. Here are just some of the ways that we have provided a solid foundation for you to build your applications, no matter what scale or what size team you have, or what level of talent you have on your team. 

1. Accessibility on our Core Team - As an accessibility expert, I provide feedback on new features while we are designing them, to ensure that we're setting our users up for success. Having that kind of representation on a framework's core team demonstrates Ember's commitment to accessibility and recognizes that accessibility cannot be an afterthought. 
2. Accessibility in our Guides - Not only have we added an [accessibility section in our guides](https://guides.emberjs.com/release/accessibility/), we are also working on our code samples to make sure that they are accessible too! 
3. Accessibility tooling - Specifically, we have two ways to support accessible development: 
    1. [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint): this comes with a new Ember app by default, and we have some accessibility-focused rules in there to help you succeed- and we are continually adding more! This provides static analysis support right in the developer workflow, and can reduce the number of issues in your code before you commit a single line! 
    2. [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing): built on top of axe-core, ember-a11y-testing provides dynamic analysis for your code, by checking for common accessibility issues. This helps developers ensure that the code they write will be able to be understood by assistive technology. 
4. Accessibility Support in the Community - Ember users can ask questions in our [community Discord chat](https://discord.gg/emberjs) in the #topic-a11y channel, and get answers and help right away. Additionally, we've started [compiling accessible component patterns](https://emberjs-1.gitbook.io/ember-component-patterns/) that will help developers more deeply understand the patterns they are asked to create. 

## Update on Ember's A11y Strike Team

After identifying the issues that keep brand new Ember apps from meeting legal conformance requirements, an issue was filed that outlined the [Technical A11y Issues in New Ember Apps](https://github.com/emberjs/rfcs/issues/595). A strike team was formed with the goal of submitting RFCs that propose a clear path forward for each of these five issues: 

1. Accessible Routing- when a user with a screen reader navigates to a new URL within an Ember app, no information is given to the user to let them know that the navigation was successful.
2. Page Titles- Ember provides the base HTML boilerplate that is needed for a valid web page in the index.html file.However, the `<title>` element is missing, and there is no way to provide that content.
3. Label support for Input elements- The input component that is built into Ember supports at least 30 standard attributes but provides no way to ensure that the inputs have labels.
4. Missing default language declaration- There is no default language declaration on the <html> element in the index.html file.
5. Splattributes- Right now, `...attributes` do not have a guaranteed merge order. This is problematic in cases where some `aria-` attributes can have multiple values, and the order of those values matter. 

The strike team meets every week on Wednesdays, and has made progress on proposed solutions. Keep an eye out for new RFCs in the next few weeks that especially cover adding support for unique page titles as well as missing default language declaration support. 

Another thing that has come out of this strike team's work is that there are other things that we'd like to do for the long-term, and consideration for a more permanent accessibility working group is now being discussed. Want to participate in the strike team work? Check out the #st-a11y channel on [Discord](https://discord.gg/emberjs), and let us know! The meetings are also open to anyone who wants to attend. 

## Build More Accessible Ember Apps Today!

So what can you do **today** to improve the accessibility of your Ember application? Here are a few suggestions:

- Ask about accessibility at work. Is it already baked into your design and development workflow? This is a great day to get that conversation going if it isn't already!
- Check your package.json file and see if the most recent version of ember-template-lint is there. Try running the linter inside of your project with the `yarn lint:hbs` command in the terminal. What issues does it show?
- Install the [Accessibility Insights](https://accessibilityinsights.io/) extension in your browser and turn on the tab stops checker. Then check the tabbing order of your website. Does the focus move from left to right and top to bottom? This is an easy way to check for keyboard traps, too! The Accessibility Insights for web browser extension allows you to toggle checks that help you quickly test different accessibility concerns for your website, along with giving you guidance for any manual checks you might have to do.
- Help out by writing new rules for [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint). Get stuck, or need a new issue to work on? There's a Discord channel for that too- check out #e-template-lint and get the help you need.

Have you already done these things? How about browsing the internet today with a screen reader turned on, or only using your keyboard?

## Closing

By creating a better future for accessible application development, we create products that make it possible for *everyone* to use. My goal is to get accessibility into the design and development workflow so it is in the list of a product's design constraints. I believe Ember is the framework that will help you do just that. Avoid costly lawsuits and code rewrites by putting accessibility into the base requirements of your work, because when accessibility is considered first, everyone wins.
