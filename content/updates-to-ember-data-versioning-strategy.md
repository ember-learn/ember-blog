---
title: Updates To The EmberData Lockstep Versioning Strategy
authors:
  - chris-thoburn
  - jared-galanis
  - the-ember-data-team
date: 2023-11-01T00:00:00.000Z
tags:
  - '2023'
  - ember-data
---

## Updates To The EmberData Lockstep Versioning Strategy

Today the EmberData team is excited to announce changes to how we manage lockstep
versioning with the broader Ember.js project.

The primary goal of these changes is to improve version-to-version stability for our consumers. We see this being beneficial in several ways.

First, by releasing fewer versions that contain no effective changes other than the version bump, we believe consumers will be able to navigate version-by-version and LTS-by-LTS upgrades with greater stability and clarity.

Second, if the only changes are bug fixes then these fixes are applied to the latest minor
instead of becoming strung out across multiple minors.

Third, this should enable the project to move more carefully at times when more substantive changes
are being made.

We hope that this new policy will improve the ability for us to invest in upgrade paths for
consumers using older versions by focusing on providing the most robust release targets we can.

## Policy Changes

- When Ember.js releases an LTS, the most recent release of EmberData will also be released as an LTS.
- When Ember.js releases a new major, EmberData will also release a new major.
- New minor releases of EmberData will coincide with Ember.js' six-week release cadence when EmberData releases a new minor.
- These changes do not affect how and when ember-source and ember-cli release.
- These changes do not change EmberData's LTS support policy or its ember-source LTS support policy.

    - The latest EmberData release will always support the last two ember-source LTS releases.

## Mitigating Effects

- The API Docs will continue to function as expected. It's worth noting that when viewing docs for EmberData the version dropdown will only include versions available for EmberData. Additionally, links in the EmberData API docs to the Ember API docs will take you to the matching version number of Ember - not necessarily the most recently released version of Ember.
- EmberData's README has added a compatibility table.
- New releases (including patch and LTS releases) of EmberData beginning today will always list the range of compatible ember-source versions in the release notes at the time of release.
- EmberData will begin setting an explicit peerDependency on ember-source set to all tested compatible versions matching the range specified in the release notes.

    - Note: this peerDependency will at times be much broader than EmberData's official LTS support policy of "last 2 ember-source LTS releases".
- ember-cli will ship the latest version of EmberData at the time of releases in the new app blueprint.
- The releases overview on the website will continue to offer instructions for installing the latest version of Ember.js, which will include the latest version of EmberData (see previous bullet point). The LTS page will be updated to track both the Ember.js and EmberData LTS.

## Examples

- ember-source releases a new minor (5.4), EmberData chooses to not release and remains at 5.3.
- ember-source releases a new LTS (5.4), EmberData's latest release is 5.3 and thus releases 5.3 as LTS.
- ember-source releases a new minor (5.5), EmberData chooses to release and thus bumps from 5.3 to 5.4.
- ember-source releases a new major (6.0), EmberData will release 6.0.

## Timeline

EmberData is beginning this new policy effective with the current release, and has opted to not
release in this cycle. Thus the latest ember-source is 5.4 and latest ember-data is 5.3.
