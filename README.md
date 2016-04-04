# Structure.css

http://francoisromain.github.io/structure.css/

CSS framework based on 

- [PostCSS](http://postcss.org/)
- [cssnext](http://cssnext.io)
- [PostCSS-structure](https://github.com/francoisromain/postcss-structure)


## Usage

* * *

### 1. Install

    $ npm install structure.css --save-dev

This installs the following dev-dependencies:

- [postCSS](https://www.npmjs.com/package/postcss)
- [postcss-cssnext](https://www.npmjs.com/package/postcss-cssnext)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [postcss-structure](https://www.npmjs.com/package/postcss-structure)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [normalize.css](https://www.npmjs.com/package/normalize-css)

* * *

### 2. Configure

##### Example directory structure

    .
    +-- css
        +-- settings.css
        +-- styles.css
        +-- theme.css


##### In `styles.css`

    @import "settings.css";
    @import "structure.css"; // imported from node_modules/structure.css/structure.css by PostCSS-import
    @import "theme.css";

##### In `settings.css`

Copy the content of [`node_modules/structure.css/settings`](https://raw.githubusercontent.com/francoisromain/structure.css/master/settings.css) and __set the variables__.

##### In `theme.css`

Project specific CSS. 

* * *

### 3. Build 

#### With Npm scripts

- [Npm scripts](https://docs.npmjs.com/misc/scripts)
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)

##### In `package.json`:

    "scripts": {
        "css": "postcss -u postcss-import -u postcss-custom-properties -u postcss-calc -u postcss-structure -u postcss-cssnext -i src/css/styles.css -o dist/css/styles.css"
     }

##### Compile

    $ npm run css

##### From the html file, point to `dist/css/styles.css`.


#### With Grunt, Gulp, Webpack…

Check [PostCSS doc](https://github.com/postcss/postcss#gulp).

## todo

- [ ] feat: add media object
- [ ] feat: add code styles
- [ ] fix: indent list in list