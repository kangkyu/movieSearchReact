const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

gulp.task('styles', function(){
	gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
})

gulp.task('default', function(){
	livereload.listen();
	gulp.watch('scss/*.scss', ['styles']);
});