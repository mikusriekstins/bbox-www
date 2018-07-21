var gulp = require('gulp');
var sass = require('gulp-sass');

var sassPaths = [
  'assets/scss/'
];

gulp.task('sass', function() {
  return gulp.src('css/main.scss')
    .pipe(sass({
      includePaths: 'scss',
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
