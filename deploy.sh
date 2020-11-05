set -e

hugo -D --minify --cleanDestinationDir --destination=docs
git add .
git commit -am "new release"
git push