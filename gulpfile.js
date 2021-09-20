const { src, dest, series, parallel, watch, task } = require('gulp');
const sass = require('gulp-sass')(require("sass"));


task("scss", ()=>{
    return src('./src/scss/index.scss')     // берём все SASS-файлы 
    .pipe(sass())                    // компилируем SASS в CSS 
    .pipe(dest('./')); // выгружаем результат 
})

task("default", ()=>{
    watch('./src/scss/**/*.scss', parallel('scss'));

})