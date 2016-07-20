System.register(['@angular/core', "./academyMenu.component", "../services/session-data.service", "./news.component"], function(exports_1, context_1) {
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
    var core_1, academyMenu_component_1, session_data_service_1, news_component_1;
    var AcademyHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (academyMenu_component_1_1) {
                academyMenu_component_1 = academyMenu_component_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (news_component_1_1) {
                news_component_1 = news_component_1_1;
            }],
        execute: function() {
            AcademyHomeComponent = (function () {
                function AcademyHomeComponent(_dataService) {
                    this._dataService = _dataService;
                }
                AcademyHomeComponent.prototype.ngOnInit = function () {
                    console.log("### AcademyHomeComponent -> ngOnInit()");
                    this._dataService.loadNewsStories();
                };
                AcademyHomeComponent = __decorate([
                    core_1.Component({
                        //templateUrl: 'app/htmltemplates/academyHome.component.html',
                        //stylesUrl: 'app/styles/academyHome.component.css',
                        template: "\n\t\t\t\t<div class=\"container t1\">\n\t\t\t\t    <div class=\"row\">\n\t\t\t\t        <div class=\"col-md-1\" style=\"padding-top:50px;\">\n\t\t\t\t            <!-- Add menu down left -->\n\t\t\t\t            <academy-memu></academy-memu>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"col-md-6\">\n\t\t\t\t            <img src=\"resources/images/academy/avenue-academy-15.1.jpg\" height=\"auto\" width=\"100%\" style=\"margin-left:100px;\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"col-md-5\">\n\t\t\t\t            <div class=\"academyflag\" style=\"margin-left:150px;margin-top:30px;\"></div>\n\t\t\t\t        </div>\n\t\t\t\t    </div> <!-- end row -->\n\t\t\t\t\n\t\t\t\t    <div class=\"blankspace\"></div>\n\t\t\t\t\n\t\t\t\t    <div class=\"row\">\n\t\t\t\t        <div class=\"col-md-6\">\n\t\t\t\t            <div class=\"panel\">\n\t\t\t\t                <div class=\"panel-heading avenue-heading\">\n\t\t\t\t                    Latest News\n\t\t\t\t                </div>\n\t\t\t\t                <div class=\"panel-body avenue-body\">\n\t\t\t\t                    <div *ngFor=\"#story of _dataService.dsNewsStories\">\n\t\t\t\t                        <div *ngIf=\"story.category == 'A'\" style=\"border-bottom: 1px solid #ccc;padding-bottom:5px;\">\n\t\t\t\t                            <img src=\"{{story.image}}\" align=\"left\" HSPACE=\"5\" VSPACE=\"5\" height=\"auto\" width=\"50%\"/>\n\t\t\t\t                            <h4 style=\"color:#FAE900;\">{{story.description}}</h4><p>{{story.story}}</p>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"col-md-6\">\n\t\t\t\t            <div class=\"panel\">\n\t\t\t\t                <div class=\"panel-heading avenue-heading\">\n\t\t\t\t                    Drill of the week:\n\t\t\t\t                </div>\n\t\t\t\t                <div class=\"panel-body avenue-body\">\n\t\t\t\t\n\t\t\t\t                    <div class=\"panel\">\n\t\t\t\t                        <div class=\"panel-heading avenue-heading\">THEME</div>\n\t\t\t\t                        <div class=\"panel-body avenue-body\">Dribbling and Passing through Cones (U6-9 Technical)</div>\n\t\t\t\t                        <div class=\"panel-heading avenue-heading\">DESCRIPTION OF PRACTISE</div>\n\t\t\t\t                        <div class=\"panel-body avenue-body\">A Practise designed to encourage players dribbling and passing</div>\n\t\t\t\t                        <div class=\"panel-heading avenue-heading\">ORGANISATION</div>\n\t\t\t\t                        <div class=\"panel-body avenue-body\">4 to 5 cones setup to dribble through<br />\n\t\t\t\t                            3 cones with a ball on top of the middle cone<br />\n\t\t\t\t                            3-4 players per group Setup as many groups are required<br />\n\t\t\t\t                            Players dribble through cones and try knock their football off the middle cone.<br />\n\t\t\t\t                            Players must strike ball before they pass the end cone<br />\n\t\t\t\t                            Player must retrieve their football and bring back to the team mate<br />\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class=\"panel-heading avenue-heading\">KEY FACTORS</div>\n\t\t\t\t                        <div class=\"panel-body avenue-body\">Dribbling, soft touches, keep ball close, head up<br />\n\t\t\t\t                            Passing, pace and accuracy\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class=\"panel-heading avenue-heading\">NOTES</div>\n\t\t\t\t                        <div class=\"panel-body avenue-body\">Progress the competition between teams, change distance of \n\t\t\t\t                        \tpassing depending on ability of players. Create a competition between teams by awarding 2 \n\t\t\t\t                        \tpoints to anyone who dribbles through the cones without the ball hitting the cones.  Award 2 \n\t\t\t\t                        \tpoints if they pass the ball through the cones. Award 5 points if they knock the ball off the \n\t\t\t\t                        \tmiddle cone.\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class=\"panel-body avenue-body\">\n\t\t\t\t                            <img src=\"resources/images/academy/drilloftheweek.png\" alt=\"\" width=\"100%\"/>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div> <!--  End of container t1 -->\n\n    ",
                        directives: [academyMenu_component_1.AcademyMenuComponent, news_component_1.NewsComponent]
                    }), 
                    __metadata('design:paramtypes', [session_data_service_1.SessionDataService])
                ], AcademyHomeComponent);
                return AcademyHomeComponent;
            }());
            exports_1("AcademyHomeComponent", AcademyHomeComponent);
        }
    }
});

//# sourceMappingURL=academyHome.component.js.map
