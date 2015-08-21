var gulp        = require('gulp');
var runSequence = require('run-sequence');


// Build Production Files, the Default Task
gulp.task('build', function (cb) {
  runSequence('clean', [
    'browserify',
    'copyHtml', 'copyOther',
    'sass', 'images', 'jade'
  ], ['optimize'], cb);
});
