# Structure.css

http://francoisromain.github.io/structure.css/

CSS framework based on 

- [PostCSS](http://postcss.org/)
- [cssnext](http://cssnext.io)


## Usage

### 1. Install

* * *

    $ npm install structure.css --save-dev

This installs the following dev-dependencies:

- [postCSS](https://www.npmjs.com/package/postcss)
- [postcss-cssnext](https://www.npmjs.com/package/postcss-cssnext)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [normalize.css](https://www.npmjs.com/package/normalize-css)

### 2. Configure

* * *

##### Example directory structure

    .
    +-- src
        +-- css
            +-- settings.css
            +-- styles.css
            +-- theme.css


##### In `styles.css`

    @import "settings.css";
    @import "structure.css"; // imported from node_modules/structure.css/structure.css by PostCSS-import
    @import "theme.css";

##### In `settings.css`

Copy the content from [`node_modules/structure.css/settings`](https://raw.githubusercontent.com/francoisromain/structure.css/master/settings.css) and __set the variables__.

##### In `theme.css`

Project specific CSS. 


### 3. Build

* * *

Example with [Npm scripts](https://docs.npmjs.com/misc/scripts) and [postcss-cli](https://www.npmjs.com/package/postcss-cli). For other build options (Grunt, Gulp, Webpack,…), check [PostCSS instructions](https://github.com/postcss/postcss#gulp).

##### In `package.json`, add:

    "scripts": {
        "css": "postcss -u postcss-import -u postcss-cssnext -i src/css/styles.css -o dist/css/styles.css"
     }

##### Compile

    $ npm run css

##### Link 

From the html file, point to `dist/css/styles.css`.

## todo

- [ ] feat: add media object
- [ ] feat: add code styles
- [ ] fix: indent list in list