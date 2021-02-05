#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:SpeciesFileGroup/taxonworks_stats.git master:gh-pages

cd -
