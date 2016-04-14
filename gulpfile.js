var gulp = require('gulp');
var webpack = require('gulp-webpack');

var distBasePath = './dist';
var assetsBasePath = distBasePath + '/assets';

var srcHtml = './src/*.html';

var tasks = ['webpack', 'copy-html-src'];

gulp.task('webpack', function() {
    return gulp.src('./main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(assetsBasePath + '/js'));
});

gulp.task('copy-html-src', function() {
    return gulp.src(srcHtml).
    pipe(gulp.dest(distBasePath));
});

gulp.task('default', tasks, function() {

});
