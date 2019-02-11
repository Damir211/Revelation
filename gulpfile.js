const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const sourcemaps 	= require('gulp-sourcemaps');
const watch 		= require('gulp-watch');
const autoprefixer  = require('gulp-autoprefixer');

gulp.task('sass-compile', function(){
	return gulp.src('./src/styles/**/*.scss')
			.pipe(sourcemaps.init())
			.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
			.pipe(sass().on('error', sass.logError))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./build/styles'))
});

gulp.task('watch', function(){
	gulp.watch('./src/styles/**/*.scss', gulp.parallel('sass-compile'))
});