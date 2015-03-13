'use strict';

var gulp = require('gulp')
, browserify = require('browserify')
, concat = require('gulp-concat')
, del = require('del')
, reactify = require('reactify')
, source = require("vinyl-source-stream")
, watchify   = require('watchify')
, $          = require('gulp-load-plugins')()
;

var path = {
  HTML: 'scripts/index.html',
  ALL: ['scripts/js/*.js', 'scripts/js/**/*.js', 'scripts/index.html'],
  JS: ['scripts/js/*.js', 'scripts/js/**/*.js'],
  TEST: ['scripts/__tests__/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_scripts: 'dist/scripts',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

var prod = $.util.env.prod;

// gulp-plumber for error handling
function onError() {
    /* jshint ignore:start */
    var args = Array.prototype.slice.call(arguments);
    $.util.beep();
    $.notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
    /* jshint ignore:end */
}

// Styles
gulp.task('styles', function() {
    return gulp.src('src/styles/**/*')
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe($.concat('main.css'))
        .pipe($.autoprefixer('last 3 versions'))
        .pipe(gulp.dest('dist/styles'))
        .pipe($.size());
});

// 3rd party libraries
gulp.task('vendor:font', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/**')
    .pipe(gulp.dest('dist/vendor/fonts'));
});

gulp.task('vendor:css', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/css/*.min.css',
    'node_modules/bootstrap/dist/css/*.map'
  ])
    .pipe(gulp.dest('dist/vendor/css'));
});

gulp.task('vendor:js', function() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('dist/vendor/js'));
});

gulp.task('vendor', ['vendor:css', 'vendor:js', 'vendor:font']);

// Scripts
gulp.task('scripts', function() {
    var bundler;
    bundler = browserify({
        basedir: __dirname,
        noparse: ['react/addons', 'reflux', 'fastclick', 'react-router'],
        entries: ['./src/scripts/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    bundler = watchify(bundler);

    function rebundle() {
        console.log('Bundling Scripts...');
        var start = Date.now();
        return bundler.bundle()
            .on('error', onError)
            .pipe(source('app.js'))
            .pipe(prod ? $.streamify($.uglify()) : $.util.noop())
            .pipe(gulp.dest('dist/scripts'))
            .pipe($.notify(function() {
                console.log('Bundling Complete - ' + (Date.now() - start) + 'ms');
            }));
    }

    bundler.on('update', rebundle);

    return rebundle();
});

// HTML
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});


// Images
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});


// Webserver
gulp.task('serve', function() {
    gulp.src('dist')
        .pipe($.webserver({
            livereload: true,
            port: 9000,
            fallback: 'index.html'
        }));
});

// Test
gulp.task('test', function() {
  return gulp.src([path.JS, path.TEST], {read: false})
  .pipe($.shell([
    'jest'
  ]));
});

// Clean
gulp.task('clean', function (cb) {
  del([
    'dist/**',
  ], cb);
});


// Default task
gulp.task('default', ['clean', 'html', 'styles', 'scripts', 'vendor', 'images']);


// Watch
gulp.task('watch', ['html', 'styles', 'scripts', 'vendor', 'images', 'serve'], function() {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/styles/**/*.css', ['styles']);
    gulp.watch('src/images/**/*', ['images']);
});

