---
title: Ember 6.9 Released
authors:
  - jared-galanis
date: 2025-12-05T00:00:00.000Z
tags:
  - releases
  - '2025'
  - version-6-x
---

<!-- alex ignore just -->

The Ember project is excited to announce the release of Ember v6.9. This is a standard minor release as part of the [standard Ember Release Train process](https://emberjs.com/releases/). Version 6.8 of Ember.js is now promoted to LTS (Long Term Support). An LTS version of Ember continues to receive security updates for 9 release cycles (54 weeks) and bugfixes for 6 cycles (36 weeks). LTS releases typically occur every four minor versions. The previous LTS version of Ember.js was 6.4.

## Ember.js v6.9

Ember.js 6.9 introduces <insert high level features to feature> for Ember developers to use today and a new way to publish the `ember-source` package. We have also included one bugfix and there are no new deprecations.

### Key Features

<insert key features>

### Other Features

<insert other features>

#### Trusted publishing

v6.9.0 of `ember-source` is the first minor version of the package to be published to `npm` with [Trusted Publishing](https://docs.npmjs.com/trusted-publishers). We will be implementing this across all our packages.

At the bottom of the [npm package page](https://www.npmjs.com/package/ember-source), you'll find a section labeled 'Provenance' that provides verification that the package contents were published from the source repository.

### Bug fixes

Ember.js 6.9 introduces <insert number of> bug fixes.

---

## Ember CLI v6.9

Ember CLI 6.9 upgrades `broccoli` to `^4.0.0` and as a consequence, the minimum Node version Ember CLI supports is now 20.19. This is in accordance with our [Node Support Policy](https://emberjs.com/node-support/).

We have released a new major of `broccoli` to address security vulnerabilities and deprecations in dependencies of the package. These vulnerabilities should not have been exploitable as `broccoli` should only ever be run in a development environment but this fixes a number of `npm audit` headaches. There is more work to do here in updating our long-tail of depdendcies. The major of `broccoli` is otherwise completely API-compatible. We have dropped support for `node` < `20.19` because we need the [`require(esm)`](https://nodejs.org/pt-br/blog/release/v20.19.0) feature that was backported to that version.


## Thank You!

As a community-driven open-source project with an ambitious scope, each of these releases serves as a reminder that the Ember project would not have been possible without your continued support. We are extremely grateful to our contributors for their efforts.
