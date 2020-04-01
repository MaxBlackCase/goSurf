let gulp = require('gulp')
let browserSync = require('browser-sync')
let rename = require('gulp-rename')
let sass = require('gulp-sass')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')
let pug = require('gulp-pug')
let autoprefixer = require('gulp-autoprefixer')

gulp.task('scss', function() {
  return gulp
    .src('./app/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(
      autoprefixer({
        cascade: false,
        overrideBrowserslist: 'last 8 versions'
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('css', () => {
  return gulp
    .src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/animate.css/animate.css',
      'node_modules/slick-carousel/slick/slick.css',
    ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('./app/scss/'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('html', function() {
  return gulp.src('app/*.html').pipe(browserSync.reload({ stream: true }))
})

gulp.task('pug', function() {
  return gulp
    .src('./app/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest('./app/'))
})

gulp.task('script', function() {
  return gulp.src('app/js/*.js').pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', function() {
  return gulp
    .src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/slick-carousel/slick/slick.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './app/'
    }
  })
})

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('script'))
})

gulp.task(
  'default',
  gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch')
)
