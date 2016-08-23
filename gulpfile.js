var gulp = require('gulp'),
	scss = require('gulp-scss'), //Подключаем Scss пакет
	browserSync = require('browser-sync'); // Подключаем Browser Sync

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
	
	//gulp.task('browser-sync', function() { // Создаем таск browser-sync
   // browserSync({ // Выполняем browserSync
     //   server: { // Определяем параметры сервера
    //        baseDir: 'src' // Директория для сервера - app
     //   },
     //   notify: false // Отключаем уведомления
    //});
//});


//gulp.task('default', ['browser-sync','scss']);