var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssfmt = require('gulp-cssfmt');
var livereload = require('gulp-livereload');

gulp.task('css', function () {
    return gulp.src('./styles.css')
        .pipe(postcss([
            require('postcss-import'),
            require('postcss-custom-properties'),
            require('postcss-structure'),
            require('postcss-cssnext')({ browsers: "> 2%" }),
            require('cssnano')({ discardComments: { removeAll: true }, autoprefixer: false })
        ]))
        .pipe(cssfmt())
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload());
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['css/**/*.css', 'styles.css'], ['css']);
});