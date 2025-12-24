const gulp = require('gulp');
const less = require('gulp-less'); 
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer'); 
const concat = require('gulp-concat');
const postcss = require('gulp-postcss'); 

const paths = {
  styles: {
    // O arquivo mestre que tem os @imports
    src: './assets/css/template_style.less', 
    // Escuta a pasta css, a pasta components e QUALQUER outra que tu criar
    watch: './assets/css/**/*.less',      
    dest: './assets/dist/'
  },
  scripts: {
    // Escuta a raiz da js e qualquer subpasta que vier a existir
    src: './assets/js/**/*.js',               
    dest: './assets/dist/'
  }
};

// Tarefa de CSS
function buildCss() {
  return gulp.src(paths.styles.src) // Parte do arquivo mestre
    .pipe(less().on('error', function (err) {
      console.error(err.toString());
      this.emit('end');
    }))
    .pipe(postcss([ autoprefixer() ])) 
    .pipe(concat('style.min.css')) // Nome do arquivo final na raiz de /dist/
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa de JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('scripts.min.js')) // Nome do arquivo final na raiz de /dist/
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

// Função Watch (O "Vigia")
function watch() {
  // Se mudar qualquer .less em qualquer pasta dentro de assets/css, roda o buildCss
  gulp.watch(paths.styles.watch, buildCss); 
  // Se mudar qualquer .js em qualquer pasta dentro de assets/js, roda o scripts
  gulp.watch(paths.scripts.src, scripts); 
}

// Comando padrão: executa as duas tarefas e fica vigiando
const build = gulp.series(gulp.parallel(buildCss, scripts), watch);

exports.default = build;