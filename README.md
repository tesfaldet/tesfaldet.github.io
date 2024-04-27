# mtesfaldet.net
My personal, yet simple, website. Static templating via [jekyll](https://jekyllrb.com). [Sass'd](https://sass-lang.com) up CSS. Minified and compressed. Build tasks performed with [Grunt.js](https://gruntjs.com).

## Requirements

- Ruby --> `>=2.6.8`.
- Node --> `>=16.9.1`.
- npm --> `^6.14.0`.

## Installation

1. Install dependencies
```
  > conda env create -f environment.yaml
  > conda activate mtesfaldet.net
  > export SDKROOT=$(xcrun --sdk macosx --show-sdk-path)
  > bundle install
  > npm install
  > fish_add_path (pwd)/node_modules/.bin
```
2. `bundle exec grunt serve` for viewing locally.
