'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)

        this.source = './';
        this.sourceApp = this.source + 'app/';
        
        this.allFiles = this.source + '/**/*';

        this.rootOutput = this.source + '/dist';
        this.tsOutputPath = this.rootOutput + '/app';
        this.allJavaScript = [this.source + '/dist/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/main/**/*.ts';
        
        this.htmlFiles = this.sourceApp + '/**/*.html';
        this.imageFiles = this.source + '/images/**/*';
        this.styleFiles = this.sourceApp + '/styles/*';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
