let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let concat = require("gulp-concat");
let csso = require('gulp-csso');
let rename = require('gulp-rename');

var css = {
  src: 'assets/css/src/**/*.scss',
  dest: 'assets/css/dist',
  filename: 'perfect-text-format.scss'
};

function style() {
  return (
    gulp
      .src(css.src)
      .pipe(concat(css.filename))
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(autoprefixer())
      .pipe(gulp.dest(css.dest))
      .pipe(csso())
      .pipe(rename({extname: '.min.css'}))
      .pipe(gulp.dest(css.dest))
  );
}

function watch(){
  gulp.watch(css.src, style);
}

exports.css = style;
exports.default = watch;