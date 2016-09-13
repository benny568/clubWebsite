System.register(["@angular/core","../services/session-data.service","../services/logger.service"],function(t,e){"use strict";var n,i,a,o,r=(e&&e.id,this&&this.__decorate||function(t,e,n,i){var a,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r}),s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};return{setters:[function(t){n=t},function(t){i=t},function(t){a=t}],execute:function(){o=function(){function t(t,e){this.lg$=t,this._dataService=e,this.componentName="AdminHomeComponent",this.logdepth=2}return t.prototype.onInit=function(){this.lg$.setLogHdr(this.logdepth,this.componentName),this.lg$.log("ngOnInit()")},t=r([n.Component({template:'\n\t\t\t<div class="container t1">\n\n\t\t\t<div class="panel" style="margin-right:30px;">\n\t\t\t\t<div class="panel-heading avenue-heading" style="font-size:20px;">\n\t\t\t\t\tWelcome <strong>{{_dataService.dsCurrentUser.username}}}</strong> to the Avenue United Administration Portal\n\t\t\t\t</div>\n\t\t\t\t<div class="panel-body avenue-body">\n\t\t\t\t\t<img src="resources/images/user-male-icon.png" align="left" HSPACE="5" VSPACE="5" height="200px" width="auto"/>\n\t\t\t\t\t<img src="resources/images/user-female-icon.png" align="right" HSPACE="5" VSPACE="5" height="200px" width="auto"/>\n\n\t\t\t\t\tThe administration portal provides club members with a way to manage the part of the club they are affiliated with. \n\t\t\t\t\tYour ability to perform tasks will be dependent on your access rights. People holding certain office within the club\n\t\t\t\t\twill be given appropriate access rights to allow them to manage details according to that office. For instance, a manager\n\t\t\t\t\tof a team will have access to manage his/her squad details but will not have access to delete members from the register.\n\n\t\t\t\t\tA list of functions you can perform are as follows:\n\n\t\t\t\t\t<h4>Team Manager:</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Setup your squad</li>\n\t\t\t\t\t\t<li>Add, remove, edit members of your squad</li>\n\t\t\t\t\t\t<li>Upload fixtures and results for your team</li>\n\t\t\t\t\t\t<li>Upload match reports and news stories</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<h4>Club Secretary:</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Monitor the club register of all club members</li>\n\t\t\t\t\t\t<li>Run reports on feed paid, per team, and individuals</li>\n\t\t\t\t\t\t<li>Upload fixtures and results for any team</li>\n\t\t\t\t\t\t<li>Upload match reports and news stories</li>\n\t\t\t\t\t\t<li>Upload upcoming events</li>\n\t\t\t\t\t\t<li>Receive email via the website</li>\n\t\t\t\t\t\t<li>Contact other members via the website, e.g. send an email to a team manager</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div> <!-- end panel -->\n\t\t    \t\n\t\t</div> <!--  End of container t1 -->\n\t\t'}),s("design:paramtypes",[a.LoggerService,i.SessionDataService])],t)}(),t("AdminOverviewComponent",o)}}});