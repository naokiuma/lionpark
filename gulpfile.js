const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');


gulp.task("scss",function(){
    return gulp.src("src/scss/main.scss")
    .pipe(sass({
        outpusTtyle:'expanded'
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css/"));
});

//自動監視 https://qiita.com/shimisunet/items/d8827b20cd5aeab2f9d2
gulp.task("watch",function(){
    gulp.watch("src/scss/main.scss",gulp.series('scss'));
});

gulp.task('default', gulp.task('watch'));




