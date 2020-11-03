set -e

hugo --minify --cleanDestinationDir --destination=docs
# git commit -am "new release"
# git push