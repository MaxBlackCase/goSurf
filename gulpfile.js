let gulp = require('gulp')
let browserSync = require('browser-sync')
let rename = require('gulp-rename')
let sass = require('gulp-sass')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')
let pug = require('gulp-pug')
let kit = require('gulp-kit')
let autoprefixer = require('gulp-autoprefixer')

gulp.task('scss', function() {
  return gulp
    .src('./docs/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(
      autoprefixer({
        cascade: false,
        overrideBrowserslist: 'last 8 versions'
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('css', () => {
  return gulp
    .src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/animate.css/animate.css',
      'node_modules/slick-carousel/slick/slick.css'
    ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('./docs/scss/'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('kit', function(){
  return gulp.src('docs/*.kit')
  .pipe(kit())
  .pipe(gulp.dest('docs/'))
  // .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function() {
  return gulp.src('docs/*.html').pipe(browserSync.reload({ stream: true }))
})

gulp.task('pug', function() {
  return gulp
    .src('./docs/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest('./docs/'))
})

gulp.task('script', function() {
  return gulp.src('docs/js/*.js').pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', function() {
  return gulp
    .src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/slick-carousel/slick/slick.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./docs/js'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './docs/'
    }
  })
})

gulp.task('watch', function() {
  gulp.watch('docs/**/*.kit', gulp.parallel('kit'))
  gulp.watch('docs/**/*.html', gulp.parallel('html'))
  gulp.watch('docs/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch('docs/js/*.js', gulp.parallel('script'))
})

gulp.task(
  'default',
  gulp.parallel('kit', 'scss', 'css', 'js', 'browser-sync', 'watch')
)
