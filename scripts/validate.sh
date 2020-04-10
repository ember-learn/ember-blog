#!/usr/bin/env bash

# set options to ensure errors propogate
# if any command terminate unexpectedly
set -e -o pipefail
# shellcheck disable=SC2086
linting_binary=$1

if [ -z "$linting_binary" ]; then
	echo "Please specify a linting binary."
	exit 1
fi
# if the remote already exists, do nothing
git remote add base https://github.com/ember-learn/ember-blog.git || test 1
git fetch base
BLOG_HAS_CHANGES=$(git diff --name-status base/master source/2*)
if [[ $BLOG_HAS_CHANGES ]]
  then
    $linting_binary $(git diff --name-status base/master source/*.md | sed s/^..//)
fi
