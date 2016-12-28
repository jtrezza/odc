'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./app/styles/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./assets/stylesheets/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/styles/**/*.scss', ['sass']);
});
