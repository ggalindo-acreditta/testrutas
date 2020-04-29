'use strict';

var $ = require('gulp-load-plugins')();
var fs = require('fs');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var pump = require('pump');
var del = require('del');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var path = require('path');
var runningAllTests = true;

var resolve = require('json-refs').resolveRefs;
var YAML = require('js-yaml');

var jsonPackage = JSON.parse(fs.readFileSync('./package.json'));

function displayCoverageReport(display) {
  if (display) {
    gulp.src([])
      .pipe($.istanbul.writeReports());
  }
}

gulp.task('build-clean', function() {
  return del(['dist', 'tmp']);
});

gulp.task('build-scripts', function(cb) {
  pump(
    [
      gulp.src([
        '!controllers/**/*.spec.js',
        'controllers/**/*.js',
        '!db/**/*.spec.js',
        'db/**/*.js',
        '!errors/**/*.spec.js',
        'errors/**/*.js',
        '!helpers/**/*.spec.js',
        'helpers/**/*.js',
        '!middlewares/**/*.spec.js',
        'middlewares/**/*.js',
        '!models/**/*.spec.js',
        'models/**/*.js',
        'swagger-controllers/**/*.js',
        'app.js',
        'apply-db-patch.js',
        'hash-pass.js',
        'mailer.js'
      ], {base: '.'}),
      babel({
        presets: ['es2015']
      }),
      uglify({mangle: {toplevel: true}}),
      gulp.dest('tmp')
    ],
    cb
  );
});

gulp.task('build-static', function(cb) {
  pump(
    [
      gulp.src([
        'api/**/*.yaml',
        'config/**/*.js',
        '!config/config.js',
        'config/**/*.default',
        'db/**/*.sql',
        'docs/**/*',
        'locales/**/*',
        'templates/**/*',
        '*.config.json',
        '*.config.json.default',
        'package.json',
        'package-lock.json'
      ], {base: '.'}),
      gulp.dest('tmp')
    ],
    cb
  );
});

gulp.task('build-compress', function(cb) {
  pump(
    [
      gulp.src('tmp/**/*'),
      tar([jsonPackage.name, '-', jsonPackage.version, '.tar'].join(''), {mode: null}),
      gzip({gzipOptions: {level: 9}}),
      gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('build', function(cb) {
  runSequence('build-clean', 'build-swagger', 'swagger-docs',
    ['build-scripts', 'build-static'],
    'build-compress',
    cb);
});

gulp.task('nsp', function(cb) {
  $.nsp({
    package: path.join(__dirname, 'package.json')
  }, cb);
});

gulp.task('lint', function() {
  return gulp.src([
    'controllers/**/*.js',
    'db/**/*.js',
    'helpers/**/*.js',
    'middlewares/**/*.js',
    'models/**/*.js',
    'test/**/*.js',
    'app.js'
  ], {base: '.'})
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('test-models', function() {
  return new Promise(function(resolve, reject) {
    gulp.src([
      'app.js',
      '!controllers/**/*.spec.js',
      'controllers/**/*.js',
      '!db/**/*.spec.js',
      'db/**/*.js',
      '!helpers/**/*.spec.js',
      'helpers/**/*.js',
      '!middlewares/**/*.spec.js',
      'middlewares/**/*.js',
      '!models/**/*.spec.js',
      'models/**/*.js'
    ])
      .pipe($.istanbul())
      .pipe($.istanbul.hookRequire()) // Force `require` to return covered files
      .on('finish', function() {
        gulp.src([
          './test/models/index.js'
        ]).pipe($.mocha({reporter: 'nyan', timeout: 5000}))
          .on('error', function(err) {
            reject(err);
          })
          .on('end', function() {
            displayCoverageReport(!runningAllTests);
            resolve();
          });
      });
  });
});

gulp.task('test-controllers', function() {
  return new Promise(function(resolve, reject) {
    gulp.src([
      'app.js',
      '!controllers/**/*.spec.js',
      'controllers/**/*.js',
      '!db/**/*.spec.js',
      'db/**/*.js',
      '!helpers/**/*.spec.js',
      'helpers/**/*.js',
      '!middlewares/**/*.spec.js',
      'middlewares/**/*.js',
      '!models/**/*.spec.js',
      'models/**/*.js'
    ])
      .pipe($.istanbul())
      .pipe($.istanbul.hookRequire()) // Force `require` to return covered files
      .on('finish', function() {
        gulp.src([
          './test/controllers/index.js'
        ]).pipe($.mocha({reporter: 'nyan', timeout: 5000}))
          .on('error', function(err) {
            reject(err);
          })
          .on('end', function() {
            displayCoverageReport(!runningAllTests);
            resolve();
          });
      });
  });
});

gulp.task('swagger-docs', function(cb) {
  var rootDoc = YAML.safeLoad(fs.readFileSync(path.join(__dirname, 'swagger', 'swagger.yaml')).toString());
  var optionsdOC = {
    filter        : ['relative', 'remote'],
    resolveCirculars: true,
    includeInvalid: true,
    loaderOptions : {
      processContent : function (res, callback) {
        //console.log("Dentro de processContent...");
        //console.log(res.text);
        callback(null, YAML.safeLoad(res.text));
      }
    }
  };
  resolve(rootDoc, optionsdOC).then(function (results) {
    fs.writeFileSync(path.join(__dirname, 'docs', 'swagger.yaml'), YAML.dump(results.resolved));
    cb();
  });
});

gulp.task('build-swagger', function(cb) {
  var rootDoc = YAML.safeLoad(fs.readFileSync(path.join(__dirname, 'swagger', 'swagger.yaml')).toString());
  var optionsdOC = {
    filter        : ['relative', 'remote'],
    resolveCirculars: true,
    includeInvalid: true,
    loaderOptions : {
      processContent : function (res, callback) {
        //console.log("Dentro de processContent...");
        //console.log(res.text);
        callback(null, YAML.safeLoad(res.text));
      }
    }
  };
  resolve(rootDoc, optionsdOC).then(function (results) {
    fs.writeFileSync(path.join(__dirname, 'api', 'swagger.yaml'), YAML.dump(results.resolved));
    cb();
  });
});

gulp.task('swagger', gulp.series('build-swagger', 'swagger-docs'));

gulp.task('default', gulp.series('lint', 'nsp'));
