/* global grunt */

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "compressed",
          sourcemap: "none",
        },
        files: {
          'dist/css/styles.css': 'src/scss/styles.scss',
        },
      },
      dev: {
        options: {
          sourcemap: "auto",
          trace: true,
        },
        files: {
          'dist/css/styles.css': 'src/scss/styles.scss',
        },
      },
    },
    watch: {
      dev: {
        files: ['index.html', 'src/**/*'],
        tasks: ['dev'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.registerTask('default', ['dev']);
  grunt.registerTask('dev', 'sass:dev');
  grunt.registerTask('dist', 'sass:dist');
};
