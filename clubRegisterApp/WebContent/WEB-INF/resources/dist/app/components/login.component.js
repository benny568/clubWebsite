System.register(["@angular/core","@angular/common","@angular/router","../services/session-data.service"],function(t,e){"use strict";var n,o,r,i,s,a=(e&&e.id,this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}),c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};return{setters:[function(t){n=t},function(t){o=t},function(t){r=t},function(t){i=t}],execute:function(){s=function(){function t(t,e){this._dataService=t,this._router=e,this.componentName="LoginComponent",this.logdepth=2,this.loghdr="",this.loghdr=this.setLogHdr(this.logdepth,this.componentName)}return t.prototype.onSubmit=function(t){var e=this;console.log(this.loghdr+"->onSubmit(): you submitted value:"+t);var n=this._dataService.authenticate(t.username,t.password);n.subscribe(function(n){return e.getUserDetails(t.username,n)},function(t){return console.log("ERROR: "+t)})},t.prototype.getUserDetails=function(t,e){var n=this;console.log(this.loghdr+"->getUserDetails("+t+"): "+e),this._dataService.dsCurrentUser.username=t;var o=this._dataService.getUser(t);o.subscribe(function(t){return n._dataService.dsCurrentUser=t},function(t){return console.log("ERROR: "+t)},function(){return n.goToAdmin(t)})},t.prototype.goToAdmin=function(t){console.log(this.loghdr+"->goToAdmin("+t+")"),this._dataService.dsCurrentUser.username=t,this._dataService.dsAuthenticated=!0,console.log("######>>>>>> AUTHENTICATED: ["+this._dataService.dsCurrentUser.username+"] <<<<<<#####"),console.log("Authenticated: "+this._dataService.dsAuthenticated),this._router.navigate(["AdminHome",{}])},t.prototype.setLogHdr=function(t,e){var n=0,o=4*t,r="## "+e;for(n=0;n<o;n++)r+=" ";return r+="|-"},t=a([n.Component({template:'\n\t\t\t\t<div class="container">\n\t\t\t\t\t<div class="loginbox">\n\t\t\t\t\t\t<div class="loginhead"><i class="glyphicon glyphicon-user" style="align:right;margin-right:0px;"></i> Please Login\n\t\t\t\t\t\t<div class="loginbody">\n\t\t\t\t\t\t\t<form #f="ngForm" (ngSubmit)="onSubmit(f.value)" >\n\t\t\t\t\t\t\t\t<input \ttype="text" \n\t\t\t\t\t\t\t\t\t\tname=\'j_username\' \n\t\t\t\t\t\t\t\t\t\tid="j_username" \n\t\t\t\t\t\t\t\t\t\tngControl="username" \n\t\t\t\t\t\t\t\t\t\tplaceholder="Username" \n\t\t\t\t\t\t\t\t\t\trequired />\n\t\t\t\t\t\t\t\t<input \ttype="password" \n\t\t\t\t\t\t\t\t\t\tname=\'j_password\' \n\t\t\t\t\t\t\t\t\t\tid="j_password" \n\t\t\t\t\t\t\t\t\t\tngControl="password" \n\t\t\t\t\t\t\t\t\t\tplaceholder="Password" \n\t\t\t\t\t\t\t\t\t\trequired />\n\t\t\t\t\t\t\t\t<input type="submit" value="Login Now">\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div> <!-- end loginbody -->\n\t\t\t\t\t</div> <!-- end loginbox -->\n\t\t\t\t</div>\n\t',directives:[o.FORM_DIRECTIVES]}),c("design:paramtypes",[i.SessionDataService,r.Router])],t)}(),t("LoginComponent",s)}}});