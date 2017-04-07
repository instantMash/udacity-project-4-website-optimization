var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

// Optimize images
gulp.task('imagemin', function(){
    gulp.src('views/src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('views/dist/images'))
});

// Minify Javascript
gulp.task('uglify', function(){
  return gulp.src('views/src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('views/dist/js'));
});

// Concatenate and minify CSS, and minify HTML
gulp.task('useref', function(){
  return gulp.src('views/src/*.html')
    .pipe(useref())
    // Minify the CSS file
    .pipe(gulpIf('*.css', cleanCSS()))
    .pipe(gulp.dest('views/dist'))
    // Minifiy the HTML file
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest('views/dist'))
});

gulp.task('default', ['imagemin', 'uglify', 'useref'], function() {

});
