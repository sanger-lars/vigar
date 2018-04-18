var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
browserSync = require('browser-sync').create(),
convertEncoding = require('gulp-convert-encoding');

gulp.task('deleteDistFolder', function(){
	return del("./docs");
});

gulp.task('previewDist', function() {
	browserSync.init ({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});



gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./app/**/*', 
		'!./app/index.html', 
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	];
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function(){
	return gulp.src(["./app/*.html",])
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()}]
		}))
		.pipe(gulp.dest("./docs"));
});

gulp.task('convert', ['build'], function() {
	return gulp.src(['./docs/*.html'])
		.pipe(convertEncoding({to: 'UTF-8'}))
        .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin'], function(){
	console.log("kør    gulp previewDist    for at se resultatet");
});