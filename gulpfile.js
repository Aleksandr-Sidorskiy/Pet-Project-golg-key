import gulp from "gulp";
import { path } from "./gulp/config/path.js";
// імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

// Передаємо зеачення в глобальну змінну
global.app = {
  path: path,
  gulp: gulp,
};

// наглядаємо за змінами у файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(html, copy);

// створення сценарію виконання задач
const dev = gulp.series(reset, mainTasks, watcher);

// виконуєм сценарій за замовчуванням
gulp.task("default", dev);
