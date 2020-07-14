'use strict'

var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', gulp.series( function() {

return gulp.src(['./css/*.scss'])

.pipe(sass()) // converter o Sass em CSS

.pipe(gulp.dest('./css'));

}));

gulp.task('watch', gulp.series( function() {

gulp.watch(['./css/*.scss'], gulp.parallel( ['sass'] ));

}));

gulp.task('default', gulp.series( ['sass', 'watch'] ));