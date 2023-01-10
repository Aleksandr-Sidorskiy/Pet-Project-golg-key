import fileInclude from "gulp-file-include";
import bs from "browser-sync";
// const fileinclude = require("gulp-file-include");

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(bs.stream());
};
