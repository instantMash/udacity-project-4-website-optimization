var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

// Optimize images
gulp.task('imagemin', function(){
  gulp.src('img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
    gulp.src('views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'))
});

// Minify Javascript
gulp.task('root-uglify', function(){
    return gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('views-uglify', function(){
  return gulp.src('views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/views/js'));
});

// Concatenate and minify CSS, and minify HTML
gulp.task('root-useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    // Minify the CSS file
    .pipe(gulpIf('*.css', cleanCSS()))
    .pipe(gulp.dest('dist/'))
    // Minifiy the HTML file
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest('dist/'))
});

gulp.task('view-useref', function(){
  return gulp.src('views/*.html')
    .pipe(useref())
    // Minify the CSS file
    .pipe(gulpIf('*.css', cleanCSS()))
    .pipe(gulp.dest('dist/views'))
    // Minifiy the HTML file
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest('dist/views'))
});

gulp.task('default', ['imagemin', 'root-uglify','views-uglify', 'root-useref', 'view-useref'], function() {

});
