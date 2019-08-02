git remote add base https://github.com/ember-learn/ember-blog.git
git fetch base
BLOG_HAS_CHANGES=$(git diff --name-status base/master source/2*)
if [[ $BLOG_HAS_CHANGES ]]
  then
    alex $(git diff --name-status base/master source/*.md | sed s/^..//)
fi
