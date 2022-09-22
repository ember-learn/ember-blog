---
title: Evolving Ember’s Major Version Process
authors:
  - chris-krycho
date: 2022-09-23T16:30:00.000Z
tags:
  - '2022'
  - announcement
  - roadmap

---

We recently made a significant shift in how we think about versioning in Ember, with [RFC 0830: Evolving Ember’s Major Version Process][rfc]. Starting in the current 4.0 cycle, Ember major versions will be 18 months long, running from the `.0` release up to the `.12` release, and then starting a new major version.

[rfc]: https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process/

For example, in the current `4.x` cycle, we will do minor releases up through `4.12` in April 2023, and then release `5.0` in May 2023. Then we will repeat, with `5.12` arriving in September 2024 and `6.0` coming in November 2024.

This is a pretty significant change, so it’s important to say up front the things that *aren’t* changing:


**Our approach to minor releases is not changing.** We will keep releasing on the same steady cadence. Features will be in, or not, based on whether they’re ready.

**Our approach to Long Term Support releases is not changing.** That means that every major version will have 3 LTS releases over its life: the `.4`, `.8` and `.12` releases. Having a minimum of 3 LTS releases is important to the project: the `.4` release is often “settling down” after the major and often has a lot of new features or changes in it, the `.8` release should usually be extra stable in the middle of the lifecycle, and the `.12` release will be a good time to get cleanup done in apps and addons before the major arrives!

<!--alex ignore just-->
**Our approach to Editions is not changing.** Just like we did with Octane, we will release Polaris and any future edition in a minor release, when it is fully ready.

**Most importantly, *our approach to breaking changes is not changing*.** We will not be making *more* breaking changes because of this policy, and we will not make breaking changes without clear migration paths.

We have also committed not to introduce new deprecations targeting the next major after the `.10` release of the current major. New deprecations *can* still be added in the `.11` or even the `.12` releases, but they have to target a later major. For example, any deprecations introduced in `4.11` would have to target at least `6.0`.

The only thing that *is* changing is that we now have the same kind of predictable cadence for major versions that we have had for minor versions for nearly a decade.


## Why are we doing this?

Historically, major Ember versions have come rarely and unpredictably. Making major versions come *rarely* was intentional: We have strongly valued stability, and explicitly aimed to minimize the number of breaking changes developers have to deal with over time. Making major versions *unpredictably*, on the other hand, was incidental, not intentional, and it has caused some problems!

For the last nine years, Ember has released its minor versions on a predictable cadence. Every six weeks, we release a new minor version, and start a six-week beta period for the *next* minor version. We embraced this working approach right after 1.0 to avoid the problems that come when you have a “big bang” release after some longer period of time. When you go months or even years without a release, it can lead to a sense that *We have to get this feature in or it could be years before users see it!* By releasing regularly, we avoid that problem.

It’s worth reading [the blog post where we announced it](https://blog.emberjs.com/new-ember-release-process/) to appreciate how little we have had to change since September 2013. The last time we made a big change was back when we [introduced LTS releases](https://blog.emberjs.com/announcing-embers-first-lts/) in early 2016. This model has served us really well over the years!

For major versions, though, we have consistently ended up with the exact same problem our minor versions aimed to solve, but inverted. Instead of a rush to get new features *in*, the lead-up to every major version has come with a rush to get old and no-longer useful features *out*. The lead-ups to 2.0, 3.0, and 4.0 all saw a flurry of deprecations in the final few releases. This is exactly what we would expect! It’s the same basic feeling as with a rush to get features in before a big, rare release, but, again, inverted: *We have to get these old crufty bits out now or it could be years more of having to carry them around!*

Combined with the rarity of our major releases, the result has been *less* stability and *more* churn when majors do come around. That’s the opposite of our goal!

[RFC 0830][rfc] solves this by putting Ember major versions on a predictable cadence. Every 18 months, after the previous `.12` point release, there will be a new Ember major version. That means two big things:

1. Our users can plan for Ember major versions. Knowing that there will be a major versions in (roughly) May 2023, November 2024, May 2026, November 2027, and so on makes it much easier to incorporate into planning cycles, including what deprecations to prioritize and when.

2. We (Ember maintainers) can plan for Ember major versions. In particular, it means we can target deprecations knowing what that means time-wise. We can ask whether it’s reasonable to target a deprecation for a 6.0 release in November 2024, and if not can push it back to the 7.0 release in May 2026, or even the 8.0 release in November 2027.


## Our expected schedule

Here’s how we expect this to work in practice, with expected dates for LTS releases and major releases:

<table>
  <thead>
    <tr>
      <th>Ember Release</th>
      <th>Release date</th>
      <th>LTS date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.8</td>
      <td>October 2022</td>
      <td>November 2022</td>
    </tr>
    <tr>
      <td>4.12</td>
      <td>April 2023</td>
      <td>May 2023</td>
    </tr>
    <tr class='highlight'>
      <td><strong>5.0</strong></td>
      <td><strong>May 2023</strong></td>
      <td>(N/A)</td>
    </tr>
    <tr>
      <td>5.4</td>
      <td>October 2023</td>
      <td>December 2023</td>
    </tr>
    <tr>
      <td>5.8</td>
      <td>April 2024</td>
      <td>May 2024</td>
    </tr>
    <tr>
      <td>5.12</td>
      <td>September 2024</td>
      <td>November 2024</td>
    </tr>
    <tr class='highlight'>
      <td> <strong>6.0</strong></td>
      <td> <strong>November 2024</strong> </td>
      <td>(N/A)</td>
    </tr>
    <tr>
      <td>6.4</td>
      <td>April 2025</td>
      <td>May 2025</td>
    </tr>
    <tr>
      <td>6.8</td>
      <td>October 2025</td>
      <td>November 2025</td>
    </tr>
    <tr>
      <td>6.12</td>
      <td>March 2026</td>
      <td>May 2026</td>
    </tr>
    <tr class='highlight'>
      <td><strong>7.0</strong></td>
      <td><strong>May 2026</strong></td>
      <td>(N/A)</td>
    </tr>
  </tbody>
</table>

<!--alex ignore of-course-->
These dates are not set in stone, of course: they can slip a little, as happens sometimes with minor releases. But this represents our plan, and we are excited to see how it works in practice with a (very small) 5.0 coming up next May!
