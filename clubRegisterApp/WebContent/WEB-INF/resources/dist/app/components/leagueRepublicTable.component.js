System.register(["@angular/core","../services/session-data.service","../services/logger.service"],function(e,t){"use strict";var i,o,n,r,c=(t&&t.id,this&&this.__decorate||function(e,t,i,o){var n,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(r<3?n(c):r>3?n(t,i,c):n(t,i))||c);return r>3&&c&&Object.defineProperty(t,i,c),c}),s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};return{setters:[function(e){i=e},function(e){o=e},function(e){n=e}],execute:function(){r=function(){function e(e,t){this.lg$=e,this.d$=t,this.componentName="LeagueRepublicTable",this.logdepth=3,this.lg$.setLogHdr(this.logdepth,this.componentName)}return e.prototype.ngOnInit=function(){if(this.lg$.log("--> ngOnInit()"),this.lrcode=this.d$.dsCurrentTeam.lrcode,this.lg$.log("--- ngOnInit(): lrcode is: "+this.lrcode),void 0===window.numCodeSnippets?window.numCodeSnippets=1:window.numCodeSnippets++,window.numCodeSnippets<=12){var e=Math.random(),t=document.createElement("script");t.src="http://api.leaguerepublic.com/l/js/cs1.html?cs="+this.lrcode+"&random="+e,t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t)}},e.prototype.ngDoCheck=function(){this.lg$.log("--> ngDoCheck()"),this.lrcode=this.d$.dsCurrentTeam.lrcode,this.lg$.log("--- ngDoCheck(): lrcode is: "+this.lrcode);var e=this.lrcode;this.lg$.log("--- Code is: "+e);var t=Math.random(),i=document.createElement("script");i.src="http://api.leaguerepublic.com/l/js/cs1.html?cs="+e+"&random="+t,i.type="text/javascript",this.lg$.log("--- Element is: "+i),document.getElementsByTagName("head")[0].appendChild(i)},e=c([i.Component({selector:"lr-table",template:'<div id="lrep{{lrcode}}"></div>',providers:[n.LoggerService]}),s("design:paramtypes",[n.LoggerService,o.SessionDataService])],e)}(),e("LeagueRepublicTable",r)}}});