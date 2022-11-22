---
title: 'Improved RFC Process'
authors:
  - katie-gengler
  - peter-wagenet
date: 2022-11-22T00:00:00.000Z
tags:
  - '2022'

---

The Ember project is pleased to announce that an improved RFC ("request for comments") process has been implemented.

As proposed in [RFC #617 "RFC Stages"](https://rfcs.emberjs.com/id/0617-rfc-stages/), RFCs will now progress through several stages that now include tracking implementation, release, and completeness of features, as well as design:

## 0 - Proposed

A new proposal for a change to Ember or its processes that is offered for community and team evaluation. In practical terms, this is an open pull request on the [emberjs/rfcs](https://github.com/emberjs/rfcs) repo.

## 1 - Exploring

An RFC deemed worth pursuing but in need of refinement. This stage is marked by labeling the opened PR as 'Exploring'.

## 2 - Accepted

A fully specified RFC. Waiting for or in the process of implementation. An FCP is required to advance to this stage. This stage is marked by updated frontmatter in the text of the RFC and by being merged to the main branch of the [emberjs/rfcs](https://github.com/emberjs/rfcs) repo. When the RFC is merged, a PR to advance to the next stage is automatically opened on the repo to provide a coordination point for implementation.

## 3 - Ready for Release

The implementation of the RFC is complete, including learning materials. An FCP is required to advance to this stage. The advancement to this stage is the merging, upon successful FCP, of a pull request updating the stage to 'Ready for Release'. Upon merge, a new PR to advance to 'Released' is automatically opened for the RFC.

## 4 - Released

The work is published. If it is codebase-related work, it is in a stable version of the relevant package(s). The stage is again updated by a PR changing the stage in the frontmatter. Upon merge, a new PR to advance to 'Recommended' is automatically opened for the RFC.

## 5 - Recommended

The feature/resource is recommended for general use. An FCP is required to advance to this stage. Upon successfully FCP, the PR to advance will be merged by the team. At this point, the RFC process is complete.

---

Each stage is a checkpoint in the progress of a feature or change. The RFC repository now has automation to open a pull request to the next stage, where appropriate. These pull requests will be used to track implementation and the work necessary for a feature to reach Recommended status.

The RFC process is way we design, implement, and shepherd changes and features added to the Ember Project. It affects the entire community. Please familiarize yourself with the new process by consulting the [revamped and updated README](https://github.com/emberjs/rfcs/#ember-rfcs) for the `emberjs/rfcs` repo.

The revised process streamlines and unifies our existing process by bringing it all to one system. It also increases transparency by moving previously closed process to the open on Github.

Learn more about the motivation and detailed specification of this new process by consulting [RFC #617](https://rfcs.emberjs.com/id/0617-rfc-stages/). See an example of the new process as we tried it out to implement this very RFC: [Pull Request to advance RFC #617 to Stage Ready for Release](https://github.com/emberjs/rfcs/pull/836), [Pull request to advance #617 to Stage Released](https://github.com/emberjs/rfcs/pull/862), [Pull Request to advance #617 to Recommended](https://github.com/emberjs/rfcs/pull/863).

We are working to back-fill stages to earlier merged RFCs, and that work is one of the criteria for RFC #617 to achieve the Recommended stage.
