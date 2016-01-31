import gulp from 'gulp'
import nano from 'cssnano'
import url from 'postcss-url'
import postcss from 'gulp-postcss'
import nested from 'postcss-nested'
import imagemin from 'gulp-imagemin'
import cssnext from 'postcss-cssnext'
import atimport from 'postcss-import'
import browserSync from 'browser-sync'
import autoprefixer from 'autoprefixer'
import reporter from 'postcss-reporter'
import sourcemaps from 'gulp-sourcemaps'
import breporter from 'postcss-browser-reporter'

const dist = 'public/'

const sources = {
  styles: 'assets/styles/',
  images: 'assets/images/'
}

gulp.task('styles', () => {
  gulp.src(sources.styles+'styles.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    atimport,
    url,
    nested,
    //nano({autoprefixer: false, calc: false}),
    cssnext,
    autoprefixer,
    breporter,
    reporter({clearMessages: true})
  ]))
  .on('error', (err) => { console.log(err.message) })
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dist))
})

gulp.task('images', () => {
  gulp.src(sources.images+'**/*')
  .pipe(imagemin({
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(dist+'images'))
})

gulp.task('scripts', () => {
  return console.log('epa')
})

gulp.task('jekyll', (done) => {
  var child = require('child_process').spawn('jekyll', ['build','--drafts'], {cwd: process.cwd()}),
    stderr = ''

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
      stderr += data;
      console.log(data);
      browserSync.notify('<span style="color:red">'+data+'</span>', 10000);
    });

    child.on('close', function(code) {
      if (code===0) browserSync.reload();
      done()
    });
      /*
  return require('child_process').spawn('jekyll', ['build'], {stdio: ['ignore', 'ignore', process.stderr]})
  .on('close', () => {
  })
    */
})

gulp.task('serve', ['styles', 'images', 'scripts', 'jekyll'], () => {
  browserSync.init({
    server: '_site'
  })
  gulp.watch('assets/styles/**/*.css', ['styles', 'jekyll'])
  gulp.watch('assets/images/**/*', ['images', 'jekyll'])
  gulp.watch('assets/scripts/**/*.js', ['scripts', 'jekyll'])
  gulp.watch(['*.html', '**/*.md', '_includes/*.html', '_layouts/*.html'], ['jekyll'])
})

gulp.task('default', ['serve'])
