"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
		'ng2-bs3-modal'				: 'node_modules/ng2-bs3-modal',
        moment						: 'node_modules/moment/moment.js',
        'primeng'					: 'node_modules/primeng',
        'symbol-observable'         : 'node_modules/symbol-observable'
};

/** User packages configuration. */
const packages: any = {
	        'rxjs'                             : {main: 'index.js'},
	        '@angular/core'                    : {main: 'index.js'},
	        '@angular/common'                  : {main: 'index.js'},
	        '@angular/compiler'                : {main: 'index.js'},
	        '@angular/router'                  : {main: 'index.js', defaultExtension: 'js' },
	        '@angular/forms'                   : {main: 'index.js'},
	     	'@angular/http'                    : {main: 'index.js'},
	        '@angular/platform-browser'        : {main: 'index.js'},
	        '@angular/platform-browser-dynamic': {main: 'index.js'},
	        'primeng'                          : {defaultExtension: 'js'},
	        'symbol-observable'                : {main: 'index.js', defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'boot': 'boot.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
