---
name: December 2019 Blog Series
# about: So I don't have to make 31 of these by hand
title: Create a blog post for December DD, 2019 about the `ADDON` addon
labels:
  - december
  - help-wanted
---

## Goal

Write a short blog post for the December blog series that is similar to the [example post]( https://github.com/ember-learn/ember-blog/blob/be8f29ba0ae8b5367d1758b1a150c1b503812a77/source/2019-12-01-countdown-to-the-new-year-ember-sortable.md).

## Criteria

- [ ] file name should 2019-12-DD-countdown-to-the-new-year-ADDON-NAME.md where DD is replaced with the day and ADDON-NAME is replaced with the hyphenated name of the addon
- [ ] copy the file `december-2019-template.md` to a new one in the `source/` directory. On Unix terminals you can e.g. run the following while you are in the root directory of the blog project: `cp source/december-2019-template.md source/2019-12-DD-countdown-to-the-new-year-ADDON-NAME.md` where DD should be replaced with the two digit release date of your post and ADDON NAME as described in step 1
- [ ] The opening sentence should be updated where COUNT is the sequential ordinal word.


## Template

[source/december-2019-template](source/december-2019-template.md)

## Instructions

- [ ] The first h2 should be "Day NUM" where NUM is the same as the DD in the date.
- [ ] the link to the addon should point to the page on Ember Observer
- [ ] There should be two sub sections: (both h3)- "What it does" and "Why I like it"
- [ ] Include whether or not the addon has been updated yet for Ember Octane- if not, invite contributors to help get the addon Octane ready.
- [ ] The closing sentence can be slightly altered but should feel similar:
"Do you use this addon? Or one like it? We'd love to hear about Ember addons that bring you joy!"
- [ ] Update the metadata in the header of the file to reflect the content of your post. Add your addon's name into the title (title), your own name (author) and update the date of the post (alias)
- [ ] Send a PR to the [ember-learn/ember-blog repo](https://github.com/ember-learn/ember-blog) and assign [@MelSumner](https://github.com/MelSumner), [@amyrlam](https://github.com/amyrlam), [@jenweber](https://github.com/jenweber) or [@jessica-jordan](https://github.com/jessica-jordan) for review
- [ ] And last, but not least: Celebrate your efforts to contribute to the Ember blog! 🎉
