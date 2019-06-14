$(function(){
  if ($('[data-embertimes-page]').length > 0) {
    applyEmberTimesTestIds();
  }


   function applyEmberTimesTestIds() {
     let sectionTitles = $('[data-embertimes-post-body] h2');

     sectionTitles.each((i, title) => {
       $(title).attr('data-embertimes-section-title', i);
       let sectionFragments = $(title).nextUntil('h2').not('hr');
       sectionFragments.each((index, element) => {
         $(element).attr('data-embertimes-section-fragment', i);
       });
     });

     let introFragmentFirst = $('[data-embertimes-post-body]').children().first();
     introFragmentFirst.attr('data-embertimes-intro-fragment', true);
     let introFragments = introFragmentFirst.nextUntil('h2').not('hr');

     introFragments.each((i, el) => {
       $(el).attr('data-embertimes-intro-fragment', true);
     });
   }
 });
