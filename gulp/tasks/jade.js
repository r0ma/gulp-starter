var gulp         = require('gulp');
var jade         = require('gulp-jade');
var plumber      = require('gulp-plumber');
var handleErrors = require('../util/handleErrors');

gulp.task('jade', function() {
  return gulp.src('src/templates/**/*.jade')
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(jade({pretty: !global.isWatching}))
    .pipe(gulp.dest('.tmp'));
});
