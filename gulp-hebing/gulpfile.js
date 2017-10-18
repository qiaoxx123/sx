//var gulp=require('gulp');
//var fileinclude  = require('gulp-file-include');
//
//gulp.task('fileinclude', function() {
//  gulp.src('src/**.html')
//      .pipe(fileinclude({
//        prefix: '@@',
//        basepath: '@file'
//      }))
//  .pipe(gulp.dest('dist'));
//});
var gulp=require("gulp");
var hec=require("gulp-file-include");

gulp.task("hecheng",function(){
	gulp.src('i/**.html')
	.pipe(hec())
	.pipe(gulp.dest('a'));
})
