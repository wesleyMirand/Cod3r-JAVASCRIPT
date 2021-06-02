const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml () {
  return gulp.src ('src/**/*.html')
      .pipe(htmlmin({ collapseWhitespace : true}))
      .pipe(gulp.dest('build'))
}

function appCSS() {
  return gulp.src('src/assets/sass/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(uglifycss({ "uglyComments": true}))
      .pipe(concat('app.min.css'))
      .pipe(gulp.dest('build/assets/css'))
}



function appIMG() {
  return cb ()
}

module.exports = {
  appHtml,
  appCSS,
  appJs, 
  appIMG
}