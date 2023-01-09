import gulp from "gulp";
import { path } from "./gulp/config/path.js";
// імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
// Передаємо зеачення в глобальну змінну
global.app = {
  path: path,
  gulp: gulp,
};

// наглядаємо за змінами у файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
}

// створення сценарію виконання задач
const dev = gulp.series(reset, copy, watcher);
// виконуєм сценарій за замовчуванням
gulp.task("default", dev);

// // import { deleteAsync } from "del";
// let project_folder = "dist";
// let source_folder = "#src";

// let path = {
//   build: {
//     html: project_folder + "/",
//     css: project_folder + "/css",
//     js: project_folder + "/js",
//     img: project_folder + "/img",
//     fonts: project_folder + "/fonts",
//   },
//   src: {
//     html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
//     css: source_folder + "/scss/style.scss",
//     js: source_folder + "/js/app.js",
//     img: source_folder + "/img/**/*.{jpg,png,svg,ico,webp}",
//     fonts: source_folder + "/fonts/*.ttf",
//   },
//   watch: {
//     html: source_folder + "/**/*.html",
//     css: source_folder + "/scss/**/*.scss",
//     js: source_folder + "/js/**/*.js",
//     img: source_folder + "/img/**/*.{jpg,png,svg,ico,webp}",
//   },
//   clean: "./" + project_folder + "/",
// };

// let { src, dest } = require("gulp"),
//   gulp = require("gulp"),
//   browserSync = require("browser-sync").create(),
//   fileinclude = require("gulp-file-include"),
//   scss = require("gulp-sass")(require("sass"));
// // del = require("del");
// // const scss = require("gulp-sass")(require("sass"));

// function browserSyncFun() {
//   browserSync.init({
//     server: {
//       baseDir: "./" + project_folder + "/",
//     },
//     port: 3000,
//     notify: false,
//   });
// }

// function html() {
//   return src(path.src.html)
//     .pipe(fileinclude())
//     .pipe(dest(path.build.html))
//     .pipe(browserSync.stream());
// }

// function css() {
//   return src(path.src.css)
//     .pipe(
//       scss({
//         outputStyle: "expanded",
//       })
//     )
//     .pipe(dest(path.build.css))
//     .pipe(browserSync.stream());
// }

// function watchFile() {
//   gulp.watch([path.watch.html], html);
// }
// function clean() {
//   return del(path.clean);
// }

// let build = gulp.series(gulp.parallel(css, html));
// let watch = gulp.parallel(build, watchFile, browserSyncFun);

// exports.css = css;
// exports.html = html;
// exports.build = build;
// exports.watch = watch;
// exports.default = watch;
