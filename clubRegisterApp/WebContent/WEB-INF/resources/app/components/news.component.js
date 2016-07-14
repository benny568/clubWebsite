System.register(['@angular/core', '@angular/common', './slide.component', './carousel.component', '../services/session-data.service', '../services/logger.service'], function(exports_1, context_1) {
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
    var core_1, common_1, slide_component_1, carousel_component_1, session_data_service_1, logger_service_1;
    var NewsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (slide_component_1_1) {
                slide_component_1 = slide_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            NewsComponent = (function () {
                function NewsComponent(_dataService, lg$) {
                    this._dataService = _dataService;
                    this.lg$ = lg$;
                    this.componentName = 'NewsComponent';
                    this.logdepth = 2;
                }
                NewsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("-> ngOnInit()");
                    var subscriber = this._dataService.loadNewsStories();
                    subscriber.subscribe(function (data) { return _this._dataService.setNews(data); }, function (error) { return _this.lg$.error("===> Error getting news from server: " + error); }, function () { return _this.lg$.log(" <=== Received news from server. <===="); });
                };
                NewsComponent = __decorate([
                    core_1.Component({
                        selector: 'news',
                        //templateUrl: 'app/htmltemplates/news.component.html',
                        template: "\n\t\t\t    <div class=\"row avenue-body\">\n\t\t\t        <div class=\"panel\">\n\t\t\t            <div class=\"panel-heading avenue-heading\">\n\t\t\t                Latest News:\n\t\t\t            </div>\n\t\t\t            <carousel [interval]=\"5000\" style=\"float:left;width:100%;height:auto;\">\n\t\t\t                <slide *ngFor=\"let story of _dataService.dsNewsStories\">\n\t\t\t                    <img src=\"{{story.image}}\" style=\"float:left;padding-left:100px;padding-top:40px;padding-right:5px;padding-bottom:40px;max-width:40%;\"/>\n\t\t\t                    <div style=\"float:left;width:50%;\">\n\t\t\t                        <div class=\"avenue-heading\" style=\"font-weight:bold;font-size:20px;border-right:solid 1px white;border-left:solid 1px white;\">{{story.title}}</div>\n\t\t\t                        <div class=\"avenue-heading\" style=\"border-bottom:solid 1px white;border-right:solid 1px white;border-left:solid 1px white;\">{{story.description}}</div>\n\t\t\t                        <p style=\"padding-bottom:20px;padding-top:10px;\">{{story.story}}</p><br/>\n\t\t\t                    </div>\n\t\t\t                </slide>\n\t\t\t            </carousel>\n\t\t\t\n\t\t\t        </div> <!-- end panel -->\n\t\t\t    </div> <!-- end row -->\n    ",
                        directives: [slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService, logger_service_1.LoggerService])
                ], NewsComponent);
                return NewsComponent;
            }());
            exports_1("NewsComponent", NewsComponent);
        }
    }
});
//# sourceMappingURL=news.component.js.map