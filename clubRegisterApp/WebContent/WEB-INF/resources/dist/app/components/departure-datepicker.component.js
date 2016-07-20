System.register(["@angular/core","@angular/common","primeng/primeng","../services/booking.service"],function(t,e){"use strict";var n,r,o,i,a,c=(e&&e.id,this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}),u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};return{setters:[function(t){n=t},function(t){r=t},function(t){o=t},function(t){i=t}],execute:function(){a=function(){function t(t){this.bk$=t,console.log("==> DepartureDatepickerComponent...")}return t=c([n.Component({selector:"departure-datepicker",template:'\t\n\t<ui-widget>\n\t\t<ui-widget-content>\n\t\t\t<p-calendar [(ngModel)]="bk$.departureDate" \n\t\t\t\t\t\tdateFormat="dd/mm/yy"\n\t\t\t\t\t\thowAnim="slideDown"\n\t\t\t\t\t\tplaceholder="Please pick departure date"\n\t\t\t\t\t\tshowIcon="true"\n\t\t\t\t\t\t[readonlyInput]="true"\n\t\t\t\t\t\tminDate="17/08/2016"\n\t\t\t\t\t\tmaxDate="22/08/2016" >\n\t\t\t</p-calendar>\n\t\t</ui-widget-content>\n\t</ui-widget>\n\t\t\t',directives:[r.FORM_DIRECTIVES,o.Calendar]}),u("design:paramtypes",[i.BookingService])],t)}(),t("DepartureDatepickerComponent",a)}}});