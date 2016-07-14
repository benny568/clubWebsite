System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LinksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LinksComponent = (function () {
                function LinksComponent() {
                }
                LinksComponent = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/links.component.html'
                        template: "\n\t\t\t\t<div id=\"wrap\">\n\t\t\t\t    <div class=\"container t1\">\n\t\t\t\t        <div class=\"panel\">\n\t\t\t\t            <div class=\"panel-heading avenue-heading\">\n\t\t\t\t                Useful Links:\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"panel-body avenue-body\">\n\t\t\t\t                <a href=\"http://www.cssleague.ie/\" target=_blank>\n\t\t\t\t                    <img src=\"resources/images/links/cssl.jpeg\" height=\"50\" width=\"50\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Clare Schoolboys Soccer League\"/>\n\t\t\t\t                </a>\n\t\t\t\t                <a href=\"http://www.claresoccer.net/\" target=\"_blank\">\n\t\t\t\t                    <img src=\"resources/images/links/CDSL_Crest.JPG\" height=\"50\" width=\"50\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Clare Junior Soccer League\"/>\n\t\t\t\t                </a>\n\t\t\t\t                <a href=\"http://www.fai.ie/\" target=\"_blank\">\n\t\t\t\t                    <img src=\"resources/images/links/fai-crest.png\" height=\"50\" width=\"50\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Football Association of Ireland\"/>\n\t\t\t\t                </a>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t\n\t\t\t\t    </div> <!--  End of container t1 -->\n\t\t\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LinksComponent);
                return LinksComponent;
            }());
            exports_1("LinksComponent", LinksComponent);
        }
    }
});
//# sourceMappingURL=links.component.js.map