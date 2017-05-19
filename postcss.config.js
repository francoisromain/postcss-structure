module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-custom-properties')(),
    require('./postcss-structure')(),
    require('postcss-cssnext')()
  ]
}
