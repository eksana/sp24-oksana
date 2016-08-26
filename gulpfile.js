var gulp = require('gulp'),
	scss = require('gulp-scss'), //Подключаем Scss пакет
	browserSync = require('browser-sync'), // Подключаем Browser Sync
	fileinclude = require('gulp-file-include'),
	spritesmith = require('gulp.spritesmith');
	//rigger = require('gulp-rigger');
 
/*gulp.task('rigg', function () {
    gulp.src('src/include/*.html')
        .pipe(rigger())
       
        .pipe(gulp.dest('build/'));
});*/

gulp.task('fileinclude', function() {
  gulp.src(['src/otzivi.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('build/'));
});

	/*gulp.task('scss', function(){ // Создаем таск "scss"
    return gulp.src('src/scss/style.scss') // Берем источник
        .pipe(scss()) // Преобразуем Scss в CSS посредством gulp-scss
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку src/css
});*/

	gulp.task('scss', function(){
    return gulp.src('src/scss/**/*.scss') // Берем все scss файлы из папки scss и дочерних, если таковые будут
        .pipe(scss())
        .pipe(gulp.dest('src/css'))
       .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

	gulp.task('sprite', function () {
  var spriteData = gulp.src('src/img/sprt/*.png')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('build/img'));
});
	
	//gulp.task('browser-sync', function() { // Создаем таск browser-sync
   // browserSync({ // Выполняем browserSync
     //   server: { // Определяем параметры сервера
    //        baseDir: 'src' // Директория для сервера - app
     //   },
     //   notify: false // Отключаем уведомления
    //});
//});


//gulp.task('default', ['browser-sync','scss']);