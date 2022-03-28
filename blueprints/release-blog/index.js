'use strict';

module.exports = {
  description: 'Generates a new release blog post',

  availableOptions: [
    {
      name: 'authors',
      type: Array,
      default: ['the-ember-learning-team'],
    },
  ],

  fileMapTokens() {
    return {
      __name__(options) {
        return `ember-released-${options.locals.version_string.replace(
          '.',
          '-'
        )}`;
      },
    };
  },

  locals(options) {
    let [major, minor] = options.entity.name.split('.');
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let day = date.getDate();
    let authors = options.authors.map((author) =>
      author.toLowerCase().replace(' ', '-')
    );

    console.debug(authors);

    return {
      release_major: major,
      release_minor: minor,
      version_string: `${major}.${minor}`,
      year,
      month,
      day,
      authors,
    };
  },
};
