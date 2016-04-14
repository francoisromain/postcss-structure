# structure.css

[francoisromain.github.io/structure.css/](http://francoisromain.github.io/structure.css/)

A minimal CSS framework based on:

- [PostCSS](http://postcss.org/)
- [cssnext](http://cssnext.io)
- [postcss-structure](http://francoisromain.github.io/postcss-structure/)

## Installation

Install the [npm module](https://www.npmjs.com/package/structure.css):

    $ npm install structure.css --save-dev

This installs the following dependencies in */node_modules*:

- [postCSS](https://www.npmjs.com/package/postcss)
- [postcss-cssnext](https://www.npmjs.com/package/postcss-cssnext)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [normalize.css](https://www.npmjs.com/package/normalize-css)
- [postcss-structure](https://www.npmjs.com/package/postcss-structure)

Require the PostCSS plugins:

``` js
postcss([ 
    require('postcss-import'),            // imports the external css
    require('postcss-custom-properties'), // converts variables to values
    require('postcss-structure'),         // makes grids and media-queries
    require('postcss-cssnext')            // does a lot of stuffs
])
```

See [PostCSS usage instructions](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts…

##### Example with [npm scripts](https://docs.npmjs.com/misc/scripts) and [postcss-cli](https://www.npmjs.com/package/postcss-cli)

    $ npm install postcss-cli --save-dev

Add a script to package.json:

```js
"scripts": {
  "build": "postcss -u postcss-import -u postcss-custom-properties -u postcss-structure -u postcss-cssnext -i src/css/styles.css -o dist/css/styles.css"
}
```

    $ npm run build


## Configuration

1. Copy the content from [`node_modules/structure.css/settings`](https://raw.githubusercontent.com/francoisromain/structure.css/master/settings.css) to your own `src/css/settings.css`.
2. Add `@import "settings.css";` and `@import "structure.css";` at the top of your stylesheet.

## Usage

### Settings

- [settings](https://github.com/francoisromain/structure.css/blob/master/settings.css)

[cssnext](http://cssnext.io) brings _css variables_, _calc()_, _autoprefixer_ and many other goodies. In your `settings.css`, set the variables in the `:root` declaration and they are available inside your CSS.

### Reset

- [normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css)
- [print](https://github.com/francoisromain/structure.css/blob/master/print.css)
- [reset](https://github.com/francoisromain/structure.css/blob/master/reset.css)

Consistent styling accross browsers, basic @print reset and consistent vertical rhythm. 


### Helper classes

- [typography](https://github.com/francoisromain/structure.css/blob/master/typography.css)
- [lists](https://github.com/francoisromain/structure.css/blob/master/lists.css)
- [buttons](https://github.com/francoisromain/structure.css/blob/master/buttons.css)
- [forms](https://github.com/francoisromain/structure.css/blob/master/forms.css)
- [tables](https://github.com/francoisromain/structure.css/blob/master/tables.css)
- [utils](https://github.com/francoisromain/structure.css/blob/master/utils.css)

Ready to use helper classes. Inspect elements on the [demo page](http://francoisromain.github.io/structure.css/) to get the class names.

### Grids

- [grids](https://github.com/francoisromain/structure.css/blob/master/grids.css)
- [margins](https://github.com/francoisromain/structure.css/blob/master/margins.css)

See [postcss-structure](https://github.com/francoisromain/postcss-structure#usage) to use the grid in your stylesheet.

### Ui

- [ui](https://github.com/francoisromain/structure.css/blob/master/ui.css)

### Tools

- [tools](https://github.com/francoisromain/structure.css/blob/master/tools.css)

Add classes to the main `html` element: 

- `grid`: display baseline grid
- `debug`: add a bcaground color to every blocs

## todo

- [ ] feat: add media object
- [ ] feat: add code and pre styles
- [ ] fix: indent list in list
- [ ] fix: tooltip position
- [ ] feat: add more ui components