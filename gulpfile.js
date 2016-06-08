'use strict';


const gulp = require('gulp');
const runSequence = require('run-sequence');
const plugins = require('gulp-load-plugins')();

gulp.task('eslint', function () {
  return gulp.src(['server.js', 'server/**/*.js', 'public/modules/**/*.js'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
});

gulp.task('watch', function() {
  // gulp.watch(['public/modules/**/*', 'webpack.config.js'], ['webpack']);
});

gulp.task('nodemon', function() {
  return plugins.nodemon({
    script: 'server.js',
    nodeArgs: ['--debug=5859'],
    ext: 'js,html',
    watch: ['server/**/*', 'config/**/*']
  });
});


gulp.task('default', function (done) {
  runSequence('eslint', ['nodemon', 'watch'], done);
});
