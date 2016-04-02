# Structure.css

Mini CSS framework based on 

- [PostCSS](http://postcss.org/)
- [cssnext](http://cssnext.io)
- [PostCSS-structure](https://github.com/francoisromain/postcss-structure)

http://francoisromain.github.io/structure.css/


## Usage

### 1. Install

    $ npm install structure.css --save-dev

Structure.css will install the following dependencies:

- (postCSS)[https://www.npmjs.com/package/postcss]
- (postcss-cssnext)[https://www.npmjs.com/package/postcss-cssnext]
- (postcss-import)[https://www.npmjs.com/package/postcss-import]
- (postcss-structure)[https://www.npmjs.com/package/postcss-structure]
- (postcss-cli)[https://www.npmjs.com/package/postcss-cli]
- (normalize.css)[https://www.npmjs.com/package/normalize-css]

### 2. Configure

Make your src/css look like this:

    .
    +-- css
        +-- settings.css
        +-- styles.css
        +-- theme.css


In `styles.css`:

    @import "settings.css";
    @import "structure.css"; // PostCSS-import will import from node_modules/structure.css/structure.css
    @import "theme.css";

In `settings.css`, copy the content of [`node_modules/structure.css/settings`](https://raw.githubusercontent.com/francoisromain/structure.css/master/settings.css) and set the variables to your preference.

In `theme.css`, put your own CSS. 

### 3. Compile

#### With `npm scripts`

You can use [`postcss-cli`](https://www.npmjs.com/package/postcss-cli).

Add this to your `package.json`:

    "scripts": {
        "css": "postcss -u postcss-import -u postcss-custom-properties -u postcss-calc -u postcss-structure -u postcss-cssnext -i src/css/styles.css -o dist/css/styles.css"
     }

Then:

    $ npm run css

From your html file point to `dist/css/styles.css`

## todo

- [ ] media object
- [ ] code styles
- [ ] indent list in list