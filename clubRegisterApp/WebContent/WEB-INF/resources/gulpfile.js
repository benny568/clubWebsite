'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic' ),
    rename     = require('gulp-rename'),
	uglify     = require('gulp-uglify'),
	gulpUtil   = require('gulp-util'),
	minifyCSS  = require('gulp-minify-css');

var config = new Config();

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
// gulp.task('gen-ts-refs', function () {
//     var target = gulp.src(config.appTypeScriptReferences);
//     var sources = gulp.src([config.allTypeScript], {read: false});
//     return target.pipe(inject(sources, {
//         starttag: '//{',
//         endtag: '//}',
//         transform: function (filepath) {
//             return '/// <reference path="../..' + filepath + '" />';
//         }
//     })).pipe(gulp.dest(config.typings));
// });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report());
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                 //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
                        

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('rel-htmls', function() {
	var sourceFiles = [config.htmlFiles];
	return gulp.src( sourceFiles )
				.pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('copy-images', function() {
	return gulp.src(config.imageFiles)
		.pipe(gulp.dest(config.rootOutput + '/images'));
});

gulp.task('copy-styles', function() {
	return gulp.src(config.styleFiles)
		.pipe(gulp.dest(config.tsOutputPath + '/styles'));
});

gulp.task('minify-js', function() {
    return gulp.src(config.allJavaScript)
        .pipe(uglify().on('error', gulpUtil.log))
        .pipe(gulp.dest(config.rootOutput));
});

gulp.task('minify-css', function() {
    return gulp.src(config.sourceApp + '/styles/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.tsOutputPath + '/styles'));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
  var typeScriptGenFiles = [
                              config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
                              config.tsOutputPath +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
                              '!' + config.tsOutputPath + '/lib'
                           ];

  // delete the files
  del(typeScriptGenFiles, cb);
});

gulp.task('watch', function() {
    gulp.watch([config.allFiles], ['ts-lint', 'compile-ts', 'rel-htmls', 'copy-images']);
});

gulp.task('serve', ['compile-ts', 'watch'], function() {
  process.stdout.write('Starting browserSync and superstatic...\n');
  browserSync({
    port: 3000,
    files: ['index.html', '**/*.js'],
    injectChanges: true,
    logFileChanges: false,
    logLevel: 'silent',
    logPrefix: 'angularin20typescript',
    notify: true,
    reloadDelay: 0,
    server: {
      baseDir: './src',
      middleware: superstatic({ debug: false})
    }
  });
});

gulp.task('default', ['ts-lint', 'compile-ts']);

gulp.task('min', ['rel-htmls', 'copy-images', 'minify-js', 'minify-css']);



gulp.task('nm', ['nm1',
                 'nm2',
                 'nm3',
                 'nm4',
                 'nm5',
                 'nm6',
                 'nm6.2',
                 'nm7',
                 'nm7.2',
                 'nm8',
                 'nm8.2',
                 'nm9',
                 'nm9.2',
                 'nm10',
                 'nm10.2',
                 'nm11',
                 'nm11.2',
                 'nm12',
                 'nm12.2',
                 'nm13',
                 'nm13.2',
                 'nm14',
                 'nm14.2'
                 ]);
gulp.task('nm1', function() {
	return gulp.src('node_modules/@angular/core/src/animation/metadata.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/core/src/animation/'));
});
gulp.task('nm2', function() {
	return gulp.src('node_modules/@angular/core/src/di/reflective_injector.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/core/src/di/'));
});
gulp.task('nm3', function() {
	return gulp.src('node_modules/@angular/router/url_tree.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/router/'));
});
gulp.task('nm4', function() {
	return gulp.src('node_modules/primeng/components/datatable/datatable.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/primeng/components/datatable/'));
});
gulp.task('nm5', function() {
	return gulp.src('node_modules/primeng/components/datatable/datatable.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/primeng/components/datatable/'));
});
gulp.task('nm6', function() {
	return gulp.src('node_modules/@angular/router/router_state.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/@angular/router/'));
});
gulp.task('nm6.2', function() {
	return gulp.src('node_modules/@angular/router/router_state.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/router/'));
});

// @angular/core/src/metadata
gulp.task('nm7', function() {
	return gulp.src('node_modules/@angular/core/src/metadata/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/@angular/core/src/metadata/'));
});
gulp.task('nm7.2', function() {
	return gulp.src('node_modules/@angular/core/src/metadata/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/core/src/metadata/'));
});

// @angular/http
gulp.task('nm8', function() {
	return gulp.src('node_modules/@angular/http/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/@angular/http/'));
});
gulp.task('nm8.2', function() {
	return gulp.src('node_modules/@angular/http/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/http/'));
});

//@angular/router/directives
gulp.task('nm9', function() {
	return gulp.src('node_modules/@angular/router/directives/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/@angular/router/directives/'));
});
gulp.task('nm9.2', function() {
	return gulp.src('node_modules/@angular/router/directives/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/router/directives/'));
});

//@angular/core/src
gulp.task('nm10', function() {
	return gulp.src('node_modules/@angular/core/src/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/@angular/core/src/'));
});
gulp.task('nm10.2', function() {
	return gulp.src('node_modules/@angular/core/src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/core/src/'));
});

//@angular/core/src/di
gulp.task('nm11', function() {
	return gulp.src('node_modules/@angular/core/src/di/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/@angular/core/src/di/'));
});
gulp.task('nm11.2', function() {
	return gulp.src('node_modules/@angular/core/src/di/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/core/src/di/'));
});

//@angular/core/src/zone
gulp.task('nm12', function() {
	return gulp.src('node_modules/@angular/core/src/zone/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/@angular/core/src/zone/'));
});
gulp.task('nm12.2', function() {
	return gulp.src('node_modules/@angular/core/src/zone/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('node_modules/@angular/core/src/zone/'));
});

//@angular/core/src/zone
gulp.task('nm13', function() {
	return gulp.src('node_modules/typescript/lib/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/typescript/lib/'));
});
gulp.task('nm13.2', function() {
	return gulp.src('node_modules/typescript/lib/*.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('node_modules/typescript/lib/'));
});

//systemjs/dist/*.js
gulp.task('nm14', function() {
	return gulp.src('node_modules/systemjs/dist/*.js')
		.pipe(rename({ suffix: '.2' }))
		.pipe(gulp.dest('node_modules/systemjs/dist/'));
});
gulp.task('nm14.2', function() {
	return gulp.src('node_modules/systemjs/dist/*.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('node_modules/systemjs/dist/'));
});