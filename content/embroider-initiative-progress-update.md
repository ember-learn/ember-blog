---
title: 'Embroider Initiative: Progress Update'
image:
imageMeta:
  attribution:
  attributionLink:
featured: true
canonical: https://mainmatter.com/blog/2023/11/16/embroider-initiative-progress-update/
authors:
  - chris-manson
date: Fri Nov 24 2023 11:49:41 GMT+0000 (Greenwich Mean Time)
tags:
  - '2023'
---

> This post was originally published on [mainmatter.com](https://mainmatter.com/blog/2023/11/16/embroider-initiative-progress-update/)

For anyone who has clicked the link to this blog post but doesn't already know,
Embroider is a new build pipeline that compiles Ember apps into spec-compliant,
modern JavaScript. Before Embroider, it was somewhat difficult to participate in
modern build-tooling optimisations such as code-splitting and tree-shaking.
Embroider allows you to opt-into these behaviours out of the box.

Embroider is of critical importance for the entire Ember ecosystem, yet has been
in development for many years with no clear end in sight. The Embroider
Initiative is spearheaded by Mainmatter with the support of a group of sponsors
to help speed up development on Embroider so that we can make it the default
build system for newly generated Ember apps as soon as possible. This will allow
Ember developers to continue leveraging its advantages while benefiting from a
modern build system. We hope to see Ember apps being built with Vite before the
end of the year.

The Embroider Initiative aims to:

1. **Finish Embroider** itself by assigning experienced Ember engineers
   full-time to the project. This covers development work on Embroider and its
   dependencies, as well as helping backers setting it up in their repos to
   uncover and fix edge cases.
2. **Make Embroider maintainable** by decentralizing technical knowledge beyond
   the project's core developer [Ed Faulkner](https://github.com/ef4) and thus
   [improving the bus factor](https://en.wikipedia.org/wiki/Bus_factor).
   Mainmatter makes use of the apprenticeship model to onboard and train new
   developers on the intricate parts of the project.
3. **Shift the ecosystem and make Embroider mainstream** by making it easier to
   generate Embroider-optimized Ember apps and supporting addon developers make
   their addons compatible with Embroider.

**To reach these goals and keep up the momentum, the project needs your
financial support. Please [get in touch](https://mainmatter.com/contact) to learn how to directly
benefit from this investment.**

Mainmatter founder and director Marco Otte-Witte recently
[talked about the Embroider Initiative and open source funding in general at EmberFest in Madrid](https://www.youtube.com/watch?v=QMUm6UOoNRs).
He detailed how important the Initiative is to the future of Ember itself and to
all companies that have built on Ember and need to secure the investments they
have made in Ember. He also went into detail about the Embroider Initiative in
his
[original blog post that announced the initiative](https://mainmatter.com/blog/2023/06/09/securing-the-ecosystems-investment-in-emberjs/).
This blog post will dive into the things our team has been able to achieve up
until now.

## Getting Ember to work with Vite

At EmberConf this year [Ed Faulkner](https://github.com/ef4)
[announced that we were closing in on a Vite plugin for Embroider](https://www.youtube.com/watch?v=8rnmGGY5rhk&t=1723s).
While that was true at the time, we have learned a lot about the Vite build
process since then and we know more about the steps that are still required to
get the Vite integration working.

The Vite app that Ed demoed at EmberConf was a trivial app that is
[a package in the Embroider monorepo](https://github.com/embroider-build/embroider/tree/main/tests/vite-app)
and if you wanted to test it yourself then you could either clone the Embroider
monorepo, or you could clone
[this repo](https://github.com/mansona/ember-vite-app) which is essentially just
extracting the same test app into an independent repo. It works, and you can
even see the incredible rebuild speeds in action.

The issue with this trivial demo is that it doesn't represent an average Ember
application. There aren't any Ember applications out there that don't have a
single addon installed. While it's not exactly true that the demo doesn't have
**any** addons installed, it doesn't have any addons that are doing any real
work. And, as it turns out, getting dependencies to work right is the challenge
with the Vite build.

Ed and Mainmatter Senior Engineer Chris Manson have been pairing weekly,
plugging away at the remaining things that are required to fix the Vite build.
We are now optimistic we can get to a point where it's possible to build the
first real-world Ember applications with Vite until the end of the year.

## ember-auto-import `allowAppImports`

While the main focus of the Embroider Initiative was always going to be the
Embroider code base, there are other parts of the ecosystem that will require
some work to bring them more in line with how we want people to build their
apps.

If you're already using Embroider, you will know that a lot of the work to
package your app is done by Webpack. If you're still on a classic build, you may
not be aware that ember-auto-import uses Webpack under the hood to allow you to
seamlessly import from `node_modules`. This has been a very useful feature but
since the acceptance of the
[v2 addon spec RFC](https://rfcs.emberjs.com/id/0507-embroider-v2-package-format)
we have noticed that we have a bit of a blindspot in classic builds. Since v2
addons can't influence the build in any way (effectively making them static
packages) addon authors need to add extra installation instructions to detail
how to add a Webpack plugin to their application build config if they still
wanted to influence the build process in any way. This is perfectly legitimate
in Embroider but it does not work for classic apps.

The issue is that ember-auto-import was originally designed to only work with
npm packages, so that means that classic apps couldn't add a Webpack plugin that
would influence the build process for any files controlled by their app, only
for files controlled by npm packages or addons. This has been a
[blocker for some addon developers who want to upgrade their addons to the new v2 format](https://github.com/simonihmig/ember-responsive-image/pull/442)
and our solution to this problem has been to
[add a new config to ember-auto-import](https://github.com/embroider-build/ember-auto-import/pull/587)
to allow you to specify parts of your app that should be under its control.

While this work has been done to facilitate v2 addons having the same install
instructions for classic ember-cli builds and Embroider apps, this functionality
could also be considered a way to allow you to opt-in to Embroider on a folder
by folder basis and when your whole app is being controlled by ember-auto-import
(and Webpack) the move to embroider should technically require no changes to the
app.

## Progress for Embroider Initiative backers

For the Embroider Initiative to be successful, it needs backing from companies
that would benefit from a modern and thriving Ember ecosystem. But the benefits
of sponsoring the project go beyond the end goal.

While all sponsorship tiers (starting at 3k€ for individual supporters) include
a backer's logo in Mainmatter communication around the Initiative, companies
committing 18k€ to the project get access to the weekly 1-hour call with the
team and get opportunities to discuss their technical needs and challenges
related to Embroider.

Premium tiers of 36k€ and above include a 2-hour weekly private session with
Mainmatter engineers focused on improving the backer's Ember build. In practice,
these backers have seen a great return on their investment as the Mainmatter
Embroider team has been able to deliver dramatic speed improvements to their
build, removing a bottleneck in their development process. Some issues specific
to these backers also resulted in solutions that the larger Ember community can
now benefit from.

Let's see some success stories in details:

### Ticketsolve

Like many companies, Ticketsolve has an internal addon that they use throughout
their other applications. Internal addons are a great place to start when you
are thinking about upgrading to Embroider for two reasons:

1. It's an isolated place to opt into Embroider's stricter requirements
2. There is a
   [clear specification](https://github.com/embroider-build/embroider/blob/main/docs/spec.md)
   of what your v2 addon can do.

Chris' work on improving the ergonomics of the v2 addon blueprint in the early
weeks of the Embroider Initiative, proved very useful during the process of
converting Ticketsolve's internal addon.

After the internal addon was fully converted to v2 and deployed to all of
Ticketsolve's apps, our next step was to add support for
[GJS files](https://rfcs.emberjs.com/id/0779-first-class-component-templates/)
in both the internal addon and their applications. The team also worked on the
ecosystem PRs required to enable GJS support in v2 addons in both a
`@embroider/addon-dev`
[PR](https://github.com/embroider-build/embroider/pull/1518) and a
[PR](https://github.com/embroider-build/addon-blueprint/pull/159) to the
`@embroider/addon-blueprint`.

Before the Embroider Initiative, Ticketsolve had one of their three apps already
running Embroider. We worked to update the Embroider version of that app, then
started to convert the remaining two apps. There were some challenges along the
way, mostly related to addons that just didn't support Embroider. A great
example of this is the
[ember-service-worker](https://github.com/DockYard/ember-service-worker) addon
which uses the `postprocessTree()` hook that doesn't work with Embroider. We
updated the addon locally using [`pnpm patch <pkg>`](https://pnpm.io/cli/patch)
and
[submitted a PR with the same changes](https://github.com/DockYard/ember-service-worker/pull/230)
to help the rest of the community.

This is only a fraction of the changes that came out of these pairing sessions,
but it gives a flavour of the kinds of things that we have been able to achieve.
While our Chris Manson has been instrumental in helping speed up this work,
Ticketsolve's engineer [Andreas Minnich](https://github.com/enspandi) deserves a
shout-out for the colossal amount of work they have put into this effort between
pairing sessions.

### Intercom

Intercom also had an internal addon they wanted to convert to v2 before working
on converting their main application. Mainmatter worked with them to convert
that and, incidentally, we also helped them to convert the tests app that was
documenting the v2 addon to use Embroider with the `staticAddonTestSupportTrees`
and `staticAddonTrees` flags turned on.

While this work was going on, Intercom Engineer
[Aaron Chambers](https://github.com/achambers) had setup a CI build step that
would keep track if the main Intercom app could build with Embroider and if any
tests were passing. Because of this CI job, Aaron identified a 10x slowdown in
build times between Embroider v3.1 and v3.2. Chris used a number of pairing
sessions to dive into the issue and produce a number of flamecharts for their
Embroider builds to get an insight into what was causing their specific
slowdown. Those flamecharts were pointing at a particular part of Embroider's
package cache not working exactly as we intended it to. Ed Faulkner managed to
pinpoint the problem (while we were discussing it in the "hallway track" of
[EmberFest](https://emberfest.eu)) and
[opened a pull-request with the fix](https://github.com/embroider-build/embroider/pull/1609).
This completely fixed the performance regression for Intercom.

The Mainmatter Embroider team also noticed that Intercom's build was behaving
differently on CI compared to running the exact same build locally. We tracked
it down to the fact that Intercom's CI was configured to create a symbolic link
to an existing `node_modules` folder rather than running a new `npm install` for
every job. As it turns out, this was the same reason that the CI was failing for
[Chris' pull request to make Embroider optimised the default](https://github.com/ember-cli/ember-cli/pull/10370)
when running the command `ember new --embroider`. Chris identified the cause of
the issue inside Embroider and
[fixed it](https://github.com/embroider-build/embroider/pull/1622) without the
need for any assistance from Ed, which also shows the success in making
Embroider more maintainable by increasing the team size and distributing
technical knowledge (more about this in the next section).

The rest of the pairing sessions were spent working through issues that were
causing tests to fail. Some of these issues were systemic and when they were
fixed they would turn hundreds of tests green (Intercom has a lot of tests),
while other problems were highly specific and required multiple pairing sessions
to identify and fix the problem. An example of this would be Intercom's use of
the charting library [Highcharts](https://www.highcharts.com). When a Highcharts
user needs to include timezones in their Date axis, the library will check for
the presence of `window.moment` and use it for any timezone-related
calculations. This allows the user to have a chance to setup `window.moment` to
use `moment-timezone` and correctly configure it with the right set of timezone
data for their application. With the move to Embroider, `window.moment` is no
longer accidentally set to the correct instance of `moment-timzone` as a
side-effect of the build system, so Highcharts wasn't finding the right instance
during its initialisation. It turns out that Highcharts
[provides a config option](https://api.highcharts.com/highcharts/time.moment),
`time.moment`, to cover this exact case and, as soon as the team set that
correctly in the application's charts base class, the x-axis started behaving
again.

Again, these are only a fraction of the changes that came out of these pairing
sessions. Both [Aaron Chambers](https://github.com/achambers) and
[Peter Meehan](https://github.com/22a) were able to achieve a lot of big things
over the course of the Embroider Initiative for Intercom and our team was more
than happy to help speed the process along.

## Improving the bus factor

The goals of Embroider may seem simple from the outside, i.e. "just use Webpack
or Vite to build your Ember app", but when digging a bit deeper, it's easy to
see how complex of a project it really is. This complexity arises from the
project having challenging design constraints which pose a significant challenge
to anyone who would like to contribute to the core of Embroider. The main design
constraint that causes a lot of this complexity arises from the fact that the
team wants to provide an easy on-ramp for existing Ember apps to convert to
Embroider, and then slowly move those apps from full-compatibility mode to a
"fully static" build that can automatically benefit from tree-shaking and
code-splitting. This means that we need to provide systems that can
automatically convert the still-supported conventions of an Ember app to fully
standard compliant ESM code. This is a significant challenge since some of the
patterns that are still **officially** supported today date back to the 1.x
series of Ember which was released in 2015.

Because of the overall complexity of project and the rapid iteration of the
internal architecture, it hasn't been practical to create any documentation that
could communicate what is going on under the hood. This is illustrated by the
fact that [Aaron Chambers](https://github.com/achambers) and
[Peter Meehan](https://github.com/22a) put together a
[document trying to explain the full architecture of the project](https://github.com/embroider-build/embroider/pull/1459),
which was completely outdated only less than a month later when Ed Faulkner
merged
[the first of many internal refactors](https://github.com/embroider-build/embroider/pull/1435).

To address this challenge, we have adopted an apprenticeship model where
[Ed Faulkner](https://github.com/ef4/) pairs with Chris every week,
collaborating on solving complex problems deep within the heart of the Embroider
codebase. This has made a significant improvement to the
[bus factor](https://en.wikipedia.org/wiki/Bus_factor) of the Embroider project
and has also had a deep impact on its velocity.

With our second full-time engineer on the Embroider Initiative,
[Andrey Mikhaylov](https://github.com/lolmaus/), we have extended the
apprenticeship model by having Chris and Andrey pair-program for half a day each
week. This has helped both Chris and Andrey ramp up their knowledge of the
codebase while improving the overall project's bus factor.

## General stability and ecosystem improvements

### Providing watch-mode tests for Embroider

Recently, [Godfrey Chan](https://github.com/chancancode) has been discovering
some places in Embroider and our Webpack plugin that were
[causing crashes when certain files were added or deleted](https://github.com/embroider-build/embroider/issues/1619).
He has already come up with a
[fix for some of the cases](https://github.com/embroider-build/embroider/pull/1620),
but it showed a blind spot in the team's testing infrastructure that meant we
weren't testing "watch mode" in Embroider.
[Preston Sego](https://github.com/NullVoxPopuli) and Chris paired together to
[add some basic watch mode tests](https://github.com/embroider-build/embroider/pull/1624)
that would highlight the problem and prove the effectiveness of the fix, but
they were hit by some strange quirks that prevented the watch-mode tests from
ever exiting properly on the Windows CI job. Chris spent most of his
[weekly streaming session on Twitch](https://www.twitch.tv/real_ate) trying to
[figure out the solution](https://github.com/embroider-build/embroider/pull/1624/files#diff-adeba5225992c6c7545d60355bcb082048a61ff39fdb2d9f5aa0d2c585e8d896R55-R62).
The team finally got the PR merged and is now ready to start adding more
expansive watch-mode tests.

### `ember-cli-update` supporting v2 addons

`ember-cli-update` is a great asset to the Ember community, and it's a vital
tool during the push for Embroider and encouraging the community to use the new
v2 addon blueprint because a lot of the recent changes require updating both a
dependency version and related configuration.

One issue the team worked through was to fix CI, which had been broken for a
year. `ember-cli-update` interacts with the npm APIs to discover versions, but a
change on the npm side prevented it from functioning properly. The solution to
fixing CI was ultimately updating a dependency, `boilerplate-update`, to use
[pacote](https://www.npmjs.com/package/pacote) to interact with the npm API.
Once the upstream dependency was updated, the team only needed to
[add a few tweaks to ember-cli-update](https://github.com/ember-cli/ember-cli-update/pull/1243)
to get CI to finally pass. This gave us time and confidence for the rest of the
project.

The team then worked to get a new release of
[ember-cli-update](https://github.com/ember-cli/ember-cli-update) so that it
could update any Ember addon generated with the
[v2 addon blueprint](https://github.com/embroider-build/addon-blueprint).

`ember-cli-update` works by generating a diff between the version of the
blueprint that the app or addon was generated with, and the version to update it
to. Under the hood, this means that `ember-cli-update` will generate a pristine
new version of the app/addon at its current version, then generates a new
pristine copy of the target version. It generates a `git diff` between those
versions then applies that diff to the current app.

Generating these pristine "from" and "to" versions of the blueprint involved a
custom code-path in `ember-cli-update` that aimed at working around some bugs in
Node 8. As those workarounds were causing it to fail, Chris'
[fix for custom blueprints](https://github.com/ember-cli/ember-cli-update/pull/1240)
involved removing these workarounds.
[This fix was released in `ember-cli-update v2.0.0`](https://github.com/ember-cli/ember-cli-update/releases/tag/v2.0.0),
then followed by
[another release](https://github.com/ember-cli/ember-cli-update/releases/tag/v2.0.1)
that fixed a small bug. These two releases are a big deal for the wider Ember
community, especially as its members are encouraged to migrate their existing v1
addons to v2 addons. They bring an important DX functionality that the Ember
community has come to expect.

### Embroider optimised with the `--embroider` flag

Creating a new Ember app with the `embroider` flag
(`ember new my-super-app --embroider`) generates a "full compat" app were none
of the
[Embroider optimisation flags](https://github.com/embroider-build/embroider#options)
are passed to the build for the developer.

While more existing apps will work with a "full compat" mode, Ember has reached
a point where it makes sense for **newly generated apps** to start with a high
water mark so that developers don't accidentally or unconsciously add
functionality that won't work in a fully optimised Embroider application.
Developers have the option to turn off any of the optimisation flags, but it
would be a deliberate choice as they would need to add a specific dependency or
functionality to their app.

The Mainmatter Embroider team opened a
[PR to switch the functionality](https://github.com/ember-cli/ember-cli/pull/10370)
so that passing the `--embroider` flag uses Embroider optimised by default. This
involved working through issues with some of the slow test suites that rely on a
custom package caching mechanism. The PR got merged and the functionality will
be part of Ember v5.5.

### `scenario-tester` ESM compatibility

[Scenario tester](https://github.com/embroider-build/scenario-tester) is a
testing tool that the team makes use of a lot when testing Embroider and
`ember-auto-import`. It allows us to generate many scenarios with different
combinations of dependencies. We tried using it outside of Embroider, or more
specifically outside of a Typescript project, and saw it doesn't work in a CJS
environment.
[Chris started the effort to move the Typescript build to output an ESM-compatible build](https://github.com/embroider-build/scenario-tester/pull/18)
so it can be consumed directly in ESM without a build step. The only remaining
task is to test if it will work in Embroider before merging and releasing the
new version.

### Documenting the scenario-tester library.

[`scenario-tester`](https://github.com/ef4/scenario-tester/) is to Embroider
what `ember-try` is to Ember CLI: it's a tool that lets us perform automated
tests with various combinations of dependencies, configs and circumstances. The
approach of `scenario-tester` is different: instead of reinstalling dependencies
for every test case, it has all dependencies (including all versions of
dependencies) set up once, saving a lot of time. It leverages
[fixturify-project](https://github.com/stefanpenner/node-fixturify-project) to
create and emit to filesystem Ember apps and addons with predefined dependencies
and configuration, in order to run tests on them.

### Working on the reverse-exports

During the build, Embroider needs to expose Ember internals to Vite and Webpack
in a way they can understand and consume. Modern Ember apps can have multiple
[exports](https://nodejs.org/api/packages.html#package-entry-points) entry
points in their `package.json` configs. This poses a peculiar challenge for
Embroider: it needs to know how to reorganize files in an Ember project in such
a way that they would resolve into paths defined as `exports` values.
Essentially, this requires resolving `exports` in reverse, and this it what the
[reverse-exports](https://github.com/embroider-build/embroider/pull/1652/)
package is for.

## Call to action

We are hoping we can extend the initiative's budget and timeline to keep up the
momentum in 2024 and finish the work we started. Please [get in touch](https://mainmatter.com/contact)
to learn how to support the Embroider Initiative and directly benefit from this
investment!
