---
title: Updates To The EmberData Lockstep Versioning Strategy
authors:
  - chris-thoburn
  - jared-galanis
  - the-ember-data-team
date: 2023-10-31T00:00:00.000Z
tags:
  - '2023'
  - ember-data
---

# Updates To The EmberData Lockstep Versioning Strategy

Today the EmberData team is excited to announce changes to how we manage lockstep
versioning with the broader Ember.js project.

The primary goals of these changes is to improve version-to-version stability for our consumers. We see this being beneficial in several ways.

First, by releasing fewer versions that contain no effective changes other than the version bump. We believe this will help consumers navigate version-by-version and lts-by-lts upgrades with greater stability.

Second, if the only changes are bugfixes then these fixes are applied to the latest minor
instead of becoming strung out across multiple minors.

Third, this should enable the project to move more carefully at times when more substantive changes
are being made.

Our hope is that this new policy will improve the ability for us to invest in upgrade paths for
consumers using older versions by focusing on providing the most robust release targets we can.

## Policy Changes

- When Ember.js releases an LTS, the most recent release of EmberData will also be released as an LTS
- When Ember.js releases a new major, EmberData will also release a new major
- New minor releases of EmberData will coincide with Ember.js' six week release cadence when EmberData releases a new minor.
- These changes do not affect how and when ember-source and ember-cli release
- These changes do not change EmberData's LTS support policy or its ember-source LTS support policy
  - The latest EmberData release will always support the last two ember-source LTS releases

## Mitigating Effects

- The API Docs will \_\_\_\_
- The releases overview on the website \_\_\_\_
- EmberData's README has added a compatibility table
- New releases (including patch and lts releases) of EmberData beginning today will always list the range of compatible ember-source versions in the release notes at time of release
- EmberData will begin setting an explicit peerDependency on ember-source set to all tested compatible versions matching the range specified in the release notes
  - Note: this peerDependency will at times be much broader than EmberData's official LTS support policy of "last 2 ember-source LTS releases".
- ember-cli will ship the latest version of EmberData at times of release in the new app blueprint

## Examples

- ember-source releases a new minor (5.4), EmberData chooses to not release and remains at 5.3
- ember-source releases a new LTS (5.4), EmberData's latest release is 5.3 and thus releases 5.3 as LTS
- ember-source releases a new minor (5.5), EmberData chooses to release and thus bumps from 5.3 to 5.4
- ember-source releases a new major (6.0), EmberData will release 6.0

## Timeline

EmberData is beginning this new policy effective with the current release, and has opted to not
release in this cycle. Thus the latest ember-source is 5.4 and latest ember-data is 5.3
