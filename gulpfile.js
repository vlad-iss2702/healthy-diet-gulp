//Основной модуль
import gulp from 'gulp';

//Импорт путей
import { path } from './gulp/config/path.js';

//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";


//Передаем значение в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}


//Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { vnd_css } from './gulp/tasks/vnd_css.js';
import { js } from './gulp/tasks/js.js';
import { vnd_js } from './gulp/tasks/vnd_js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
//import { grid } from './gulp/tasks/grid.js';


//Наблюдаем за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.vnd_css, vnd_css)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.vnd_js, vnd_js)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.fonts, fonts)
    //gulp.watch('./smartgrid.js', grid);
}

const mainTasks = gulp.parallel(copy, html, scss, vnd_css, js, vnd_js, images, fonts);

//Построение сценариев выполнение задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));


//Выполнение сценария по умолчанию
gulp.task('default', dev);