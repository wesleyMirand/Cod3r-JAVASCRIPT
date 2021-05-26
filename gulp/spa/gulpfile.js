const { series, parallel } = require('gulp')
const gulp = require('gulp')

const {appHtml, appCSS, appJs, appIMG } = require('./gulpTasks/app')
const {depsCSS, depsFonts } = require('./gulpTasks/deps')
const {monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series (
  parallel(
    series(appHtml, appCSS, appJs, appIMG),
    series(depsCSS, depsFonts)
  ),
  servidor,
  monitorarArquivos
)
(concat series = )