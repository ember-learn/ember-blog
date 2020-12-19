---
title: Countdown to The New Year - Ember CLI Update
authors:
  - kelly-selden
date: 2019-12-26T00:00:00.000Z
tags:
  - '2019'
  - addons
  - december
---


**This is the 26th in our December series–"Countdown to The New Year: 31 Days of Ember Addons". We plan to highlight a new addon each day until the new year, and we hope you'll join us for the fun!**

## Day 26

Let's highlight how you can update Ember your projects with [ember-cli-update](https://emberobserver.com/addons/ember-cli-update).

<!-- READMORE -->

### What It Does

Besides package updates like ember-source and ember-cli, there are more files that are updated when a new version of Ember releases.
Tweaks to testem.js or .eslintrc.js may be missed if you're not tracking those files changes (via something like [ember-new-output](https://github.com/ember-cli/ember-new-output)).
ember-cli-update was created to update those kinds of files along with package.json changes for you.
It can also run codemods against your newly installed versions.

A new feature is on its way where it can maintain any blueprint, not only the official Ember blueprint.
The idea is that you can make one blueprint for your organization, and keep your projects up-to-date like ember-cli-update does today.
You could also keep default blueprints that ship with addons (ember-cli-mirage, ember-cli-deploy, etc) up-to-date in the same way.
[RFC here](https://github.com/emberjs/rfcs/pull/477).

### Why I Like It

I maintain countless Ember apps and addons. Without this tool, I would have burnt out long ago!
