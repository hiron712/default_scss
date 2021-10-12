const gulp = require('gulp'); //タスクランナー
const sass = require('gulp-sass'); //SCSS変換用
const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const cssSorter = require('css-declaration-sorter');
const mqpacker = require("css-mqpacker");
const plugin = [
  autoprefixer({
    cascade: false
  }),
  cssSorter({
    order: 'smacss'
  }),
  mqpacker()
];
/*-------------------------------------------------
--------------------------------------------------*/
gulp.task('scss', function(){
  //ここからタスクの内容
  return gulp.src('htdocs/assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss(plugin))
    .pipe(gulp.dest('htdocs/assets/css/'));
});
gulp.task('watch', function(){
  gulp.watch( 'htdocs/assets/sass/**/*.scss', gulp.task('scss'));
});

