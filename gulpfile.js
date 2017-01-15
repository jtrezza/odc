'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/stylesheets/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});
