$(function(){
  /* This script is responsible for adding data-* attributes to Ember Times posts on the blog. These attributes are useful for distinguishing separate section titles, section paragraphs and the intro
     text on the page, facilitating the automatic newsletter template generation on Goodbits which is currently done using https://github.com/ember-learn/ember-times-tools */
  if ($('[data-embertimes-page]').length > 0) {
    /* This checks if the current post page is an Ember Times post and if so, applies additional data-* attributes used for automatic newsletter template generation */
    applyEmberTimesTestIds();
  }


   function applyEmberTimesTestIds() {
     let sectionTitles = $('[data-embertimes-post-body] h2');

     sectionTitles.each((i, title) => {
       /* This annotates each section title of the post. e.g. `## [Ember Roadmap Call for Blog Posts 🤙](#section-url)` with a section specific id */
       $(title).attr('data-embertimes-section-title', i);
       let sectionFragments = $(title).nextUntil('h2').not('hr');
       sectionFragments.each((index, element) => {
         /* This annotates each sub element of a section, e.g. a `p`, `a`, `ul`, with the section specific id, allowing grouping of content belonging to a single section
            into one unit in the automation script */
         $(element).attr('data-embertimes-section-fragment', i);
       });
     });

     let introFragmentFirst = $('[data-embertimes-post-body]').children().first();
     introFragmentFirst.attr('data-embertimes-intro-fragment', true);
     let introFragments = introFragmentFirst.nextUntil('h2').not('hr');

     introFragments.each((i, el) => {
       /* This annotates each sub element, e.g. `p` or `ul` among others, of the intro section of the post. E.g. `Hello Emberistas! This week we have for you....` */
       $(el).attr('data-embertimes-intro-fragment', true);
     });
   }
 });
