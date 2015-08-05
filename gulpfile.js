var   gulp 			    = require('gulp'),
      browserSync		= require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("*.js").on('change', browserSync.reload);  
});

gulp.task('default',['browser-sync']);
