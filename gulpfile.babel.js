import gulp from "gulp";
import mocha from "gulp-mocha";
import babel from "babel-register";

gulp.task('test', () => {
    return gulp.src(['test/*.js'])
        .pipe(mocha({
            compilers: babel
        }));
});

gulp.task('test-auto', () => {
    return gulp.watch(['source/*.js', 'test/*.js'], ['test']);
});
