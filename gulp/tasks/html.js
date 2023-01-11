import fileInclude from "gulp-file-include";
import src from "gulp";
// import bs from "browser-sync";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(app.gulp.dest(app.path.build.html));
};
