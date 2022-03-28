export const vnd_js = () => {
    return app.gulp.src(app.path.src.vnd_js)
        .pipe(app.gulp.dest(app.path.build.vnd_js))
}