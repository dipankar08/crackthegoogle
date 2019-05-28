const { task,src, dest } = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
function defaultTask(cb) {
    // place code for your default task here
    cb();
  }

  task('njk', function() {
    // Gets .html and .nunjucks files in pages
    return src('templates/**/*.+(html|nunjucks|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['templates']
      }))
    // output files in app folder
    .pipe(dest('public'))
  });

  exports.default = defaultTask