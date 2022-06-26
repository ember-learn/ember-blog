# Bringing Typescript to Ember 🐹

by Chris Krycho

---

## How Ember-TypeScript core team was formed?

---

Chris had been looking around for bringing typescript to Ember.
Initially he started with Flow (a Javascript data types checking system made by Facebook).
Back then TypeScript didn't have as many features as Flow offered inorder to represent some of the concepts in Ember.
From TypeScript 2.1 there were enough tools to represent the stuff that was done in Ember.
Noticing the opportunity to use TypeScript,now steps were taken to form a core team.

---

### How work on TypeScript-Ember(a.k.a Typed-Ember) start?

---

`ember-cli-typescript` existed well before as a TODO but was not in a state where it could be made use of in an application.
With encouragement by Ricardo Mendes, Chris started to work on it and would actively get help from Robert Jackson to resolve issues of brocolli typescript pipelining.
Later on people also slowly started to work together and the `typed-ember` organization was formed.This was done inorder to maintain and build `ember-cli-typescript` to get types on a package called definitely typed ( a repo for maintaining 3rd party definitions for packages)package.

---

## Fact check:

`ember-cli-typescript` is the top add-on in [Ember Observer](https://emberobserver.com/).

This signifies that typescript support to modern web development is pretty important.

---

## Fun Fact:

* Even if one doesn't use Typescript in web development, under the hood all of the tooling that exists across the eco-system uses Typescript. Ex: Auto-complete, Goto-Definition, Refactoring.
* At Microsoft and its subsidiaries there is no pressure to use TypeScript this is because the ultimate goal is to make it so good that teams adopt it organically.

---

### When to use TypeScript and when not?

---
Practically,every project needs to have TypeScript but based on coding style, mental frame,and ones background, decision needs to be taken.
It is important to recognize that there are some costs to adopt TypeScript, in terms of training and leveling up your team etc..
Additionally,transitioning from un-typed language has a learning curve which adds to the down-side of extra overhead for small sized teams working on projects.
If the project is going to exist for years and it pays for themselves, then they definitely need to use TypeScript.

One must consider a working style that works well with cognitive style of the team, with expected overhead and considering the turn rate for the project that they are working.

---

### TypeScript inclusion in LinkedIn codebase:
---
LinkedIn didn’t have TypeScript inclusion for such a huge codebase with millions of lines of code also they didn’t have a need for it in flagship web app.

Although addition of TypeScript had no use case as they were not wiring ember-types or other things related to Ember.Since they saw the long term benefits compared to training cost,learning curve,adoption and migration they have started using TypeScript.

---

### Things to be kept in mind while using TypeScript:

---
There is a tendency among enthusiasts for typed functional programming.

As a newbie the enthusiasm in using TypeScript,go deep dive in TypeScript and using some deep stuff happens often but that comes with a cost of difficulty in future modification and takes up a lot of developer's time.

We should avoid deep types in application level codebase as it unnecessarily complicates things for a developer, it is good to have them in a library instead.

---
### A common issue with add-ons and TypeScript:
While using a few add-ons along with TypeScript there are innumerable errors.
After attemps to ignore the particular files of package by flagging, TypeScript would consider adding more errors than reducing the number.

The beauty of TypeScript is that these issues are surfaced in the build itself,which is a good thing rather than finding a live issue in production. 

A quick fix would be to do skip lib check in the compiler options → which says don’t check the types of the libraries that is consumed, only check the cases where there is a explicit usage of the types from external add-ons.

Additionally, whenever there is such an issue one can report a bug to the core team and get the issue resolved.

---
### Advice for Developers 
---

Chris suggest developers to learn Rust.
Learning Rust will teach things which are really helpful , even if they don’t use it at their work on day-to-day basis.
Considering, one has a Object Oriented Programming background then learning functional programming helps a lot, the opposite is also very helpful.
For those who have tried both, exploring logic programming languages like Prolog improves ones logic building exceptionally.
To grow as an engineer it essential to go deep dive into stuff and learn it.
In General one needs to keep broadening the horizon, as its really easy to get locked into next JS framework or any other language framework.
It's necessary to know the different set of things happening in the eco-system in a timely manner.
