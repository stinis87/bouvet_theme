
const { parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function javascript(cb) {
  // body omitted
  //cb();
  return src('dev/js/*.js')
    .pipe(dest('assets/js'))
}

function css() {
  return src('dev/scss/*.scss')

    .pipe(sass()).on('error', sass.logError)

    .pipe(autoprefixer())

    .pipe(dest('assets/css'))
}

function watchChanges(){
  // gulp.watch takes in the location of the files to watch for changes
  // and the name of the function we want to run on change
  watch('dev/scss/**/*.scss', css);
  watch('dev/js/**/*.js', javascript);
}

exports.watch = watchChanges;
exports.css = css;
exports.build = parallel(javascript, css);
