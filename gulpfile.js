var gulp = require('gulp')
, browserify = require('browserify')
, concat = require('gulp-concat')
, reactify = require('reactify')
, source = require("vinyl-source-stream")
 
gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/js/app.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});
 
gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'))
})
 
gulp.task('default', ['browserify','copy'])
 
gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['default'])
})
