/* eslint-env node */
/* eslint no-console:0 */
const yaml = require('js-yaml');
const { readFileSync, writeFileSync, renameSync } = require('fs');
const { extname, join } = require('path');
const dashify = require('dashify');
const walkSync = require('walk-sync');
const yamlFront = require('yaml-front-matter');
const rimraf = require('rimraf');

const dryRun = process.env.DRY_RUN;
const postDateRegex = /(\d\d\d\d-\d\d-\d\d)-(.*)\..*/;


const mdFiles = walkSync('source')
  .filter(path => ['.md', '.markdown'].includes(extname(path)));

const existingAuthors = {};
const existingTags = {};

let redirects = [];

redirects = mdFiles.map((file) => {
  const match = file.match(postDateRegex);
  if(!match) {
    return;
  }
  const oldDate = match[1].replace('-', '/');
  const titleWithoutDate = match[2];
  const oldUrl = `/${oldDate}/${titleWithoutDate}.html`
  const newUrl = `/${titleWithoutDate}/`
  return `${oldUrl} ${newUrl} 301`
})

if (!dryRun) {
  writeFileSync('.netlifyredirects', redirects.join('\n'));
} else {
  console.log({redirects})
}

let promises = mdFiles.map(async postFilename => {
  const file = readFileSync(join('source', postFilename));

  let front;
  try {
    front = yamlFront.loadFront(file);
  } catch (e) {
    console.error('bad data in', postFilename);
    return;
  }

  let content = front.__content;
  delete front.__content;

  content = content.replace(/\nREADMORE\n/, '\n<!-- READMORE -->\n');

  const match = postFilename.match(postDateRegex);

  if(!match) {
    return;
  }

  let authors = [];
  if(front.author) {
    authors = front.author.split(',').map(author => ({
      name: author.trim(),
      id: dashify(author.trim().toLowerCase()),
    }));
  }

  let tags = [];
  if(front.tags) {
    tags = front.tags.split(',')
      .map(tag => tag.trim())
      .filter((tag) => {
        // ignore specific tags
        const tagsToIgnore = [
          'Recent Posts',
          'The Ember Times',
          'Ember Times',
          'Ember.js Times',
          'Prerelease',
          'Controller',
          'Controllers',
          'Adapter',
          'Components',
          'Handlebars',
          'JSONSerializer',
          'Node',
          'Performance',
          'Process',
          'Release Management',
          'Router',
          'Substate',
        ];
        if (
          // ignore 1.2 1.13 etc
          /^\d\.\d+$/.test(tag)
          || /^\d\.\d+\.\d+$/.test(tag)
          || /^\d$/.test(tag)
          || tagsToIgnore.includes(tag)
        ) {
          console.log(`ignoring tag: ${tag}`);
          return false
        }

        return true;
      })
      .map(tag => ({
        id: dashify(tag.toLowerCase()),
        name: tag,
      }));
  }

  authors.forEach(author => {
    if(!existingAuthors[author.id]) {
      let authorData = {
        name: author.name,
        image: '',
        cover: '',
        website: '',
        twitter: '',
        location: '',
      }

      if(dryRun) {
        console.log(`Creating author file: ${author.id}.md`);
      } else {
        writeFileSync(join('author', `${author.id}.md`), `---
${yaml.safeDump(authorData)}---
`);
      }
      existingAuthors[author.id] = author;
    }
  })

  tags.forEach(tag => {
    if(!existingTags[tag.id]) {
      let tagData = {
        name: tag.name,
        image: '',
        imageMeta: '',
      }

      if(!dryRun) {
        writeFileSync(join('tag', `${tag.id}.md`), `---
${yaml.safeDump(tagData)}---
`);
      }
      existingTags[tag.id] = tag;
    }
  })

  const data = {
    title: front.title || '',
    authors: authors.map(author => author.id),
    date: new Date(match[1]),
    tags: tags.map(tag => tag.id)
  }

  let yamlData
  try {
    yamlData = yaml.safeDump(data);
  } catch (e) {
    console.error('error while writing data', e, data);
    return;
  }
  if(!dryRun) {
    writeFileSync(join('content', `${match[2]}.md`), `---
${yamlData}---
${content}`);
  }
})

Promise.all(promises).then(() => {
  console.log('success!!!');
  if(!dryRun) {
    renameSync('source/manifest.json', 'public/manifest.json');
    rimraf.sync("source");
  }
}).catch((err) => {
  console.error("error processing", err);
})
