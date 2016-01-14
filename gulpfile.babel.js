import gulp from 'gulp'
import nano from 'cssnano'
import url from 'postcss-url'
import postcss from 'gulp-postcss'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import atimport from 'postcss-import'
import browserSync from 'browser-sync'
import autoprefixer from 'autoprefixer'
import reporter from 'postcss-reporter'
import sourcemaps from 'gulp-sourcemaps'
import breporter from 'postcss-browser-reporter'

const dist = 'public/'

const sources = {
  styles: 'assets/styles/'
}

gulp.task('css', () => {
  gulp.src(sources.styles+'styles.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    atimport,
    url,
    nested,
    nano({autoprefixer: false, calc: false}),
    cssnext,
    autoprefixer,
    breporter,
    reporter({clearMessages: true})
  ]))
  .on('error', (err) => { console.log(err.message) })
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dist))
  .pipe(browserSync.stream())
})

//gulp.task('serve', ['css'], () => {
//  browserSync.init({
//    server: dist
//  })
//  gulp.watch(sources.styles+'**/*.css', ['css'])
//  gulp.watch(dist+'*.html').on('change', browserSync.reload)
//})

gulp.task('default', ['css'])
