const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');


// Функция для компиляции LESS в CSS
function styles() {
    return src('./src/styles/style.less')
        .pipe(less()) // Компиляция LESS
      //  .pipe(cleanCSS())
        .pipe(dest('./dist/styles')) // Путь для сохранения скомпилированного CSS

}

// Функция для отслеживания изменений в LESS файлах
function watchFiles() {
 
    watch('./src/styles/*.less', styles);

   
}

// Экспортируем задачи
exports.default = series(styles, watchFiles);
