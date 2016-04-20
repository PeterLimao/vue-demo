var gulp = require('gulp');
var webpack = require('gulp-webpack');
var clean = require('gulp-clean');

var distBasePath = './dist';
var assetsBasePath = distBasePath + '/assets';

var srcHtml = './src/*.html';
var srcComponents = './src/components/*.vue';
var srcJs = './src/js/**/*.js';

var tasks = ['html-clean', 'js-clean', 'webpack', 'copy-html-src'];
var watchHtml = ['copy-html-src'];
var watchJs = ['webpack'];

gulp.task('js-clean', function(){
    return gulp.src(distBasePath + 'assets/js', {read: false})
        .pipe(clean());
});

gulp.task('html-clean', function() {
    return gulp.src(distBasePath + '/*.html', {read: false})
    .pipe(clean());
});

gulp.task('webpack', ['js-clean'], function() {
    return webpack(require('./webpack.config.js'));
});

gulp.task('copy-html-src', ['html-clean'], function() {
    return gulp.src(srcHtml)
    .pipe(gulp.dest(distBasePath));
});

gulp.task('default', tasks, function() {
    gulp.watch([srcComponents, srcJs], watchJs);
    gulp.watch([srcHtml], watchHtml);
});
