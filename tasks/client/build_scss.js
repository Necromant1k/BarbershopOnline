import gulp from 'gulp';
import sass from 'gulp-sass';
import {path, tasks} from './const';

const CSS = path.DEV;


gulp.task('sass', function () {
  return gulp.src(path.DEV+'*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(CSS));
});

gulp.task('sass:watch', function () {
  gulp.watch(path.DEV+'*.scss', ['sass']);
});
