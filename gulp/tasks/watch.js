/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', function(cb) {
  runSequence('clean', 'setWatch', 'browserSync', cb);

  gulp.watch('src/styles/**/*.{scss, sass}', ['sass']);

  gulp.watch('src/templates/**/*.jade', ['jade']);

  // gulp.watch('src/scripts/**/*.ts', ['tsLint']);

  gulp.watch('src/templates/**/*.html', ['copyHtml']);

  gulp.watch(['src/fonts/**', 'src/sounds/**'], ['copyOther']);

  gulp.watch('src/images/**', ['images']);

});
