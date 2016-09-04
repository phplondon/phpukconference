var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

var sass = require('gulp-sass');
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');

var imageop = require('gulp-image-optimization');

var browserSync = require('browser-sync');

var cp = require('child_process');

/**
 * Build the Jekyll Site
 */
 gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
 gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
 gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

// Sass build
var sassBuild = function () {
    gulp.src('assets/sass/**/*.scss').pipe(sass({
        errLogToConsole: false
    }))
    .on('error', reportError)
    // .pipe(cleanCSS())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload( { stream:true } ))
};

// Compile sass
gulp.task('sass', sassBuild);

// Image optimization
gulp.task('images', function(cb) {
    gulp.src('assets/images/**/*.+(png|jpg|gif|jpeg)').pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('assets/images')).on('end', cb).on('error', cb);
});

// Error report sass
var reportError = function (error) {
    var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

    notify({
        title: 'Task Failed [' + error.plugin + ']',
        message: lineNumber + 'See console.',
        sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
    }).write(error);

    gutil.beep(); // Beep 'sosumi' again

    // Pretty error reporting
    var report = '';
    var chalk = gutil.colors.white.bgRed;

    report += chalk('TASK:') + ' [' + error.plugin + ']\n';
    report += chalk('PROB:') + ' ' + error.message + '\n';
    if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }
    if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }
    console.error(report);

    // Prevent the 'watch' task from stopping
    this.emit('end');
}

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  // Watch image files
  gulp.watch(['assets/images/**/*.png', 'assets/images/**/*.jpg', 'assets/images/**/*.gif', 'assets/images/**/*.jpeg'], ['images']);
  // Watch .html files and posts
  gulp.watch(['index.html', '*/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', function () {
    gulp.start('sass', 'browser-sync', 'watch');
});
