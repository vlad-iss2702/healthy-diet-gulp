export const vnd_css = () => {
    return app.gulp.src(app.path.src.vnd_css)
        .pipe(app.gulp.dest(app.path.build.vnd_css))
}