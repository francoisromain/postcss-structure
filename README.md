# Structure.css

http://francoisromain.github.io/structure.css/

CSS framework based on 

- [PostCSS](http://postcss.org/)
- [cssnext](http://cssnext.io)

## Installation

    $ npm install structure.css --save-dev

This installs the following dev-dependencies in *node_modules*:

- [postCSS](https://www.npmjs.com/package/postcss)
- [postcss-cssnext](https://www.npmjs.com/package/postcss-cssnext)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [normalize.css](https://www.npmjs.com/package/normalize-css)
- [postcss-structure](https://www.npmjs.com/package/postcss-structure)

Add the following to the required PostCSS plugins:

``` js
postcss([ 
    require('postcss-import'),
    require('postcss-structure'),
    require('postcss-cssnext') 
])
```

See [PostCSS usage instructions](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts…

#### Example

With [Npm scripts](https://docs.npmjs.com/misc/scripts) and [postcss-cli](https://www.npmjs.com/package/postcss-cli), add this to package.json:

```js
"scripts": {
  "build": "postcss -u postcss-import -u postcss-structure -u postcss-cssnext -i src/css/styles.css -o dist/css/styles.css"
}
// -i is the input -o is the output
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