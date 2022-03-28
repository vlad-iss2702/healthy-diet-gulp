import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

/*export const fonts = () => {
    //Ищем файлы шрифтов otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error <%= error.message %>"
            })
        ))
        //Конвертируем в ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        //Выгружаем в исхоную папку
        .pipe(app.gulp.dest(`{app.path.srcFolder}/fonts/`))
}*/

export const fonts = () => {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.fonts))
}
