var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssfmt = require('gulp-cssfmt');

gulp.task('css', function() {
  return gulp.src('./src/css/styles.css')
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-custom-properties'),
      require('postcss-structure'),
      require('postcss-cssnext')({browsers: "> 4%"}),
      require('cssnano')({discardComments: {removeAll: true}})
    ]))
    .pipe(cssfmt())
    .pipe(gulp.dest('./dist/css/'));
});
