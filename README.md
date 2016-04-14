# Structure.css

http://francoisromain.github.io/structure.css/

A minimal CSS framework based on:

- [PostCSS](http://postcss.org/)
- [cssnext](http://cssnext.io)
- [postcss-structure](http://francoisromain.github.io/postcss-structure/)

## Installation

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
    require('postcss-cssnext')            // does a lot of stuff
])
```

See [PostCSS usage instructions](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts…

#### Example with [npm scripts](https://docs.npmjs.com/misc/scripts) and [postcss-cli](https://www.npmjs.com/package/postcss-cli)

Add this to package.json:

```js
"scripts": {
  "build": "postcss -u postcss-import -u postcss-custom-properties -u postcss-structure -u postcss-cssnext -i src/css/styles.css -o dist/css/styles.css"
}
```

    $ npm run build


## Configuration

1. Copy the content from [`node_modules/structure.css/settings`](https://raw.githubusercontent.com/francoisromain/structure.css/master/settings.css) at the very begining of your CSS.
2. __Set the variables__ inside the `:root` declaration
3. Add your own CSS after the line `@import "structure.css";`
4. See [PostCSS-structure](https://github.com/francoisromain/postcss-structure#usage) to set the grid.

## todo

- [ ] feat: add media object
- [ ] feat: add code styles
- [ ] fix: indent list in list