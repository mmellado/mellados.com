var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');
var shell = require('gulp-shell');
var autoprefixer = require('gulp-autoprefixer');


var path = {
  ALL: ['components/**/*.js', 'static/js/**/*.js'],
  DEST_BUILD: 'public/dist',
};

gulp.task('bower-files', function() {
  gulp.src([
    'bower_components/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest('public/lib'))
});

gulp.task('scss-compilation-dev', function() {
  gulp.src(['static/scss/main.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
  .pipe(gulp.dest('public/css'));
});

gulp.task('scss-compilation-prod', function() {
  gulp.src(['static/scss/main.scss'])
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
  .pipe(gulp.dest('public/css'));
});

gulp.task('webpack-dev', function() {
  process.env.NODE_ENV = 'development';
  return gulp.src(path.ALL) // gulp looks for all source files under specified path
   .pipe(sourcemaps.init()) // creates a source map which would be very helpful for debugging by maintaining the actual source code structure
   .pipe(stream(webpackConfig)) // blend in the webpack config into the source files
   .pipe(sourcemaps.write())
   .pipe(gulp.dest(path.DEST_BUILD));
 });

gulp.task('webpack-prod', function() {
  return gulp.src(path.ALL) // gulp looks for all source files under specified path
   .pipe(sourcemaps.init()) // creates a source map which would be very helpful for debugging by maintaining the actual source code structure
   .pipe(stream(webpackConfig)) // blend in the webpack config into the source files
   .pipe(uglify())// minifies the code for better compression
   .pipe(sourcemaps.write())
   .pipe(gulp.dest(path.DEST_BUILD));
 });

gulp.task('webpack-dev-server',  shell.task([
  'cp views/index.html public/index.html',
  'NODE_ENV=development PORT=8080 webpack-dev-server --content-base public/ --hot --inline --devtool inline-source-map --history-api-fallback'
]));

gulp.task('clean', shell.task([
  'rm -rf public/index.html',
  'NODE_ENV=production'
]))

gulp.task('watch', function(){
  gulp.watch('static/scss/**/*.scss', ['scss-compilation-dev']);
  gulp.watch(path.ALL, ['webpack-dev']);
})

gulp.task('development', ['bower-files', 'scss-compilation-dev', 'webpack-dev', 'webpack-dev-server', 'watch']);
gulp.task('production', ['bower-files', 'scss-compilation-prod', 'webpack-prod', 'clean']);
