System.register(["@angular/core","@angular/router","./academyMenu.component","../services/session-data.service","../services/logger.service","./news.component"],function(t,e){"use strict";var n,o,i,a,s,d,c,r=(e&&e.id,this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var d=t.length-1;d>=0;d--)(i=t[d])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s}),l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};return{setters:[function(t){n=t},function(t){o=t},function(t){i=t},function(t){a=t},function(t){s=t},function(t){d=t}],execute:function(){c=function(){function t(t,e,n){this.d$=t,this.lg$=e,this.router=n,this.componentName="AcademyHomeComponent",this.logdepth=1}return t.prototype.ngOnInit=function(){this.lg$.setLogHdr(this.logdepth,this.componentName),this.d$.loadNewsStories()},t.prototype.goToAcademyHome=function(){this.lg$.log("-- going home.."),this.router.navigate(["/academyHome"])},t.prototype.goToAcademyOverview=function(){this.lg$.log("-- going to overview.."),this.router.navigate(["/academyOverview"])},t.prototype.goToAcademyCoaches=function(){this.lg$.log("-- going to coaches.."),this.router.navigate(["/academyCoaches"])},t.prototype.goToAcademySchedule=function(){this.lg$.log("-- going to schedule.."),this.router.navigate(["/academySchedule"])},t.prototype.goToAcademyRegistration=function(){this.lg$.log("-- going to registration.."),this.router.navigate(["/academyRegistration"])},t.prototype.goToAcademyPhotos=function(){this.lg$.log("-- going to photos.."),this.router.navigate(["/academyPhotos"])},t=r([n.Component({template:'\n\t\t\t\t<div class="container t1">\n\t\t\t\t    <div class="row">\n\t\t\t\t        <div class="col-md-1" style="padding-top:50px;">\n\t\t\t\t            <!-- Add menu down left -->\n\t\t\t\t            <academy-memu></academy-memu>\n\t\t\t\t        </div>\n\t\t\t\t        <div class="col-md-6">\n\t\t\t\t            <img src="resources/images/academy/avenue-academy-15.1.jpg" height="auto" width="100%" style="margin-left:100px;"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class="col-md-5">\n\t\t\t\t            <div class="academyflag" style="margin-left:150px;margin-top:30px;"></div>\n\t\t\t\t        </div>\n\t\t\t\t    </div> <!-- end row -->\n\t\t\t\t\n\t\t\t\t    <div class="blankspace"></div>\n\t\t\t\t\n\t\t\t\t    <div class="row">\n\t\t\t\t        <div class="col-md-6">\n\t\t\t\t            <div class="panel">\n\t\t\t\t                <div class="panel-heading avenue-heading">\n\t\t\t\t                    Latest News\n\t\t\t\t                </div>\n\t\t\t\t                <div class="panel-body avenue-body">\n\t\t\t\t                    <div *ngFor="#story of _dataService.dsNewsStories">\n\t\t\t\t                        <div *ngIf="story.category == \'A\'" style="border-bottom: 1px solid #ccc;padding-bottom:5px;">\n\t\t\t\t                            <img src="{{story.image}}" align="left" HSPACE="5" VSPACE="5" height="auto" width="50%"/>\n\t\t\t\t                            <h4 style="color:#FAE900;">{{story.description}}</h4><p>{{story.story}}</p>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t        <div class="col-md-6">\n\t\t\t\t            <div class="panel">\n\t\t\t\t                <div class="panel-heading avenue-heading">\n\t\t\t\t                    Drill of the week:\n\t\t\t\t                </div>\n\t\t\t\t                <div class="panel-body avenue-body">\n\t\t\t\t\n\t\t\t\t                    <div class="panel">\n\t\t\t\t                        <div class="panel-heading avenue-heading">THEME</div>\n\t\t\t\t                        <div class="panel-body avenue-body">Dribbling and Passing through Cones (U6-9 Technical)</div>\n\t\t\t\t                        <div class="panel-heading avenue-heading">DESCRIPTION OF PRACTISE</div>\n\t\t\t\t                        <div class="panel-body avenue-body">A Practise designed to encourage players dribbling and passing</div>\n\t\t\t\t                        <div class="panel-heading avenue-heading">ORGANISATION</div>\n\t\t\t\t                        <div class="panel-body avenue-body">4 to 5 cones setup to dribble through<br />\n\t\t\t\t                            3 cones with a ball on top of the middle cone<br />\n\t\t\t\t                            3-4 players per group Setup as many groups are required<br />\n\t\t\t\t                            Players dribble through cones and try knock their football off the middle cone.<br />\n\t\t\t\t                            Players must strike ball before they pass the end cone<br />\n\t\t\t\t                            Player must retrieve their football and bring back to the team mate<br />\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="panel-heading avenue-heading">KEY FACTORS</div>\n\t\t\t\t                        <div class="panel-body avenue-body">Dribbling, soft touches, keep ball close, head up<br />\n\t\t\t\t                            Passing, pace and accuracy\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="panel-heading avenue-heading">NOTES</div>\n\t\t\t\t                        <div class="panel-body avenue-body">Progress the competition between teams, change distance of \n\t\t\t\t                        \tpassing depending on ability of players. Create a competition between teams by awarding 2 \n\t\t\t\t                        \tpoints to anyone who dribbles through the cones without the ball hitting the cones.  Award 2 \n\t\t\t\t                        \tpoints if they pass the ball through the cones. Award 5 points if they knock the ball off the \n\t\t\t\t                        \tmiddle cone.\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="panel-body avenue-body">\n\t\t\t\t                            <img src="resources/images/academy/drilloftheweek.png" alt="" width="100%"/>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div> <!--  End of container t1 -->\n\n    ',directives:[i.AcademyMenuComponent,d.NewsComponent],providers:[s.LoggerService,o.Router]}),l("design:paramtypes",[a.SessionDataService,s.LoggerService,o.Router])],t)}(),t("AcademyHomeComponent",c)}}});