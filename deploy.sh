set -e

hugo -D -F --minify --cleanDestinationDir --destination=docs
git add .
git commit -am "new release"
git push