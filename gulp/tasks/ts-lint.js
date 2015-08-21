// var gulp       = require('gulp');
// var tsLint     = require('gulp-tslint');
// var notifier   = require('node-notifier');
// var gutil      = require('gulp-util');


// var testReporter = function (output, file, options) {
//   notifier.notify({
//     'title': "TS-lint errors: " +  output.length,
//     'message': output[0].name + ' ' + output[0].endPosition.line + ':' +  output[0].endPosition.character + ' ' + output[0].failure
//   });

//   gutil.log(gutil.colors.red("Failed to lint:"));
//   for (var i = 0; i < output.length; i++) {
//     gutil.log(gutil.colors.red('   ' + (i + 1) + ')  ' + output[0].name + '[' + output[0].endPosition.line + ', ' +  output[0].endPosition.character + '] ' + output[0].failure));
//   }
// };

// gulp.task('tsLint', function () {
//   return gulp.src('src/scripts/**/*.ts')
//     .pipe(tsLint({configuration: 'tslint.json'}))
//     .pipe(tsLint.report(testReporter, {emitError: false}));
// });
