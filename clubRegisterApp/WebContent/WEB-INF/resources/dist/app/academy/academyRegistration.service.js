System.register(["@angular/core","@angular/http","../services/logger.service","../services/common.service","../dao/member"],function(e,t){"use strict";var o,i,a,r,s,n,l,m,c,h=(t&&t.id,this&&this.__decorate||function(e,t,o,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,o,s):a(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=this&&this.__param||function(e,t){return function(o,i){t(o,i,e)}};return{setters:[function(e){o=e,i=e},function(e){a=e,r=e,s=e},function(e){n=e},function(e){l=e},function(e){m=e}],execute:function(){c=function(){function e(e,t,o){this.lg$=e,this.com$=t,this._http=o,this.member=new m.Member,this.regData=[{id:0,name:"First name",value:"",required:!0,display:!0,type:"text",placeholder:"Childs first name"},{id:1,name:"Last name",value:"",required:!0,display:!0,type:"text",placeholder:"Childs last name"},{id:2,name:"email",value:"email",required:!0,display:!0,type:"text",placeholder:"Parent's email"},{id:3,name:"Date of Birth",value:"",required:!0,display:!0,type:"text",placeholder:"Childs birth date"},{id:4,name:"First contact number",value:"",required:!0,display:!0,type:"text",placeholder:"First Parent's number"},{id:5,name:"Second contact number",value:"",required:!0,display:!0,type:"text",placeholder:"Second Parent's number"},{id:6,name:"Allergy information",value:"",required:!0,display:!0,type:"text",placeholder:"Details on any allergies"},{id:7,name:"Asthma",value:"",required:!0,display:!0,type:"text",placeholder:"Has the child asthma?"},{id:8,name:"Diabetes",value:"",required:!0,display:!0,type:"text",placeholder:"Has the child diabetes?"},{id:9,name:"Medication",value:"",required:!0,display:!0,type:"text",placeholder:"Is the child on any medication?"},{id:10,name:"Notes",value:"",required:!1,display:!0,type:"text",placeholder:"Additional notes"},{id:11,name:"Registration Date",value:"",required:!0,display:!1,type:"text",placeholder:"Date of registration"},{id:12,name:"Mother's Name",value:"",required:!0,display:!0,type:"text",placeholder:"Mother's name"},{id:13,name:"Father's name",value:"",required:!0,display:!0,type:"text",placeholder:"Father's name"},{id:14,name:"Single Term",value:!1,required:!1,display:!0,type:"checkbox",placeholder:"Half term payment"},{id:15,name:"Second Child",value:!1,required:!1,display:!0,type:"checkbox",placeholder:"Discount for 2nd child"},{id:16,name:"Third Child",value:!1,required:!1,display:!1,type:"checkbox",placeholder:"Discount for 3rd child"},{id:17,name:"General Consent",value:!1,required:!0,display:!0,type:"checkbox",placeholder:"We the parents of the above named child give our consent for him/her to participate in All Avenue United Soccer Academy’s Coaching sessions, Organised Events, Blitz & Competitions etc. In the unlikely event of an Accident I/We give our permission for our child to be given immediate First Aid or taken to the nearest Hospital."},{id:18,name:"Consent to take pictures",value:!1,required:!0,display:!0,type:"checkbox",placeholder:"I, the child's parent/guardian, give permission for the club to use our child's picture on their website."}],this.logdepth=3,this.loghdr="",this.serviceName="AcademyRegistrationService"}return e.prototype.sortingHat=function(e){var t="",o=new Date,i=o.getFullYear(),a=new Date(e),r=a.getFullYear(),s=a.getDay(),n=i-r,l=a.getMonth()+1,m=o.getMonth()+1,c=o.getDay();switch((m>l||m===l&&c>=s)&&n++,n){case 10:t="U11";break;case 9:t="U10";break;case 8:t="U9";break;case 7:t="U8";break;case 6:t="U7";break;case 5:case 4:t="U6";break;default:t="Unknown"}return t},e.prototype.calculateTotalCost=function(){console.log("### Single Term: "+this.getSingleTerm),this.payment=this.getSingleTerm()?60:120},e.prototype.getGeneralConsent=function(){var e=this.regData[17];return e.value},e.prototype.getSingleTerm=function(){var e=this.regData[14];return console.log("### "+e.name+": "+e.value),e.value},e.prototype.payPal=function(){console.log("[AcademyRegistrationService]-> payPal()");var e=(JSON.stringify({amount:"110",currency_code:"EUR"}),new r.Headers({"Content-Type":"application/json"}));new s.RequestOptions({headers:e});console.log("    |- Storing registration details to server.."),this.convertToMember(),this.storeDetails(this.member),console.log("    |- Calling http post to PayPal..");var t="";t=this.regData[14].value===!0?"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GCXHLWUZ3X9MJ":"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SYRJF6N5A488G",window.location.href=t},e.prototype.storeDetails=function(e){var t=this;this.logValues();var o=this.com$.getHome();console.log("-- home set to: "+o);var i=new r.Headers;i.append("Content-Type","application/json");new s.RequestOptions({headers:i});console.log("-- posting registration to server..["+o+"/academyregistration]"),this._http.post(o+"/academyregistration",e,{headers:i}).subscribe(function(e){return console.log("POST of academy registration successfull")},function(e){return t.handleError(e)},function(){return t.sendEmailConfirmation()})},e.prototype.convertToMember=function(){console.log("    |- ->convertToMember()"),this.member.name=this.regData[0].value+" "+this.regData[1].value,this.member.address="",this.member.phone=String(this.regData[4].value),this.member.phone2=String(this.regData[5].value),this.member.dob=String(this.regData[3].value),this.member.email=String(this.regData[2].value),this.member.amount=this.payment,this.member.receiptid="",this.member.team=0,this.member.team2=0,this.member.team3=0,this.member.position=0,this.member.position2=0,this.member.position3=0,this.member.lid=0,this.member.favteam="",this.member.favplayer="",this.member.sappears=0,this.member.sassists=0,this.member.sgoals=0,this.member.photo="resources/images/Players/default.png",this.member.achievements="",this.member.status="",this.member.academyinfo=this.regData[6].name+": "+this.regData[6].value+", "+this.regData[7].name+": "+this.regData[7].value+", "+this.regData[8].name+": "+this.regData[8].value+", "+this.regData[9].name+": "+this.regData[9].value+", "+this.regData[10].name+": "+this.regData[10].value,this.logMember(),console.log("    |- <-convertToMember()")},e.prototype.sendEmailConfirmation=function(){console.log("[AcademyRegistrationService]-->sendEmailConfirmation()..");var e=this.com$.getHome(),t=new r.Headers;t.append("Content-Type","application/json");new s.RequestOptions({headers:t});this._http.post(e+"/confirmregistration",this.member,{headers:t}).subscribe(function(e){return console.log("Confirmation email sent successfull")},function(e){return console.log("===> Error sending confirmation email: "+e)},function(){return console.log(" <=== Confirmation email sent successfull <====")})},e.prototype.handleError=function(e){console.log("===> Error posting academy registration to server: "+e),this.logValues()},e.prototype.logValues=function(){for(var e="ACADEMY REGISTRATION: [ ",t=0;t<this.regData.length;t++)e+=this.regData[t].name+": "+this.regData[t].value,t<this.regData.length&&(e+=", ");console.log(e)},e.prototype.logMember=function(){console.log("    |-    | ->logMember()"),console.log("    |-    | -- Name: "+this.member.name),console.log("    |-    | -- Address: "+this.member.address),console.log("    |-    | -- Phone: "+this.member.phone),console.log("    |-    | -- Phone2: "+this.member.phone2),console.log("    |-    | -- dob: "+this.member.dob),console.log("    |-    | -- email: "+this.member.email),console.log("    |-    | -- Amount: "+this.member.amount),console.log("    |-    | -- ReceiptId: "+this.member.receiptid),console.log("    |-    | -- Team: "+this.member.team),console.log("    |-    | -- Team2: "+this.member.team2),console.log("    |-    | -- Team3: "+this.member.team3),console.log("    |-    | -- Position: "+this.member.position),console.log("    |-    | -- Position2: "+this.member.position2),console.log("    |-    | -- Position3: "+this.member.position3),console.log("    |-    | -- LeagueId: "+this.member.lid),console.log("    |-    | -- Fav Team: "+this.member.favteam),console.log("    |-    | -- Fav Player: "+this.member.favplayer),console.log("    |-    | -- Appears: "+this.member.sappears),console.log("    |-    | -- Assists: "+this.member.sassists),console.log("    |-    | -- Goals: "+this.member.sgoals),console.log("    |-    | -- Photo: "+this.member.photo),console.log("    |-    | -- Achievements: "+this.member.achievements),console.log("    |-    | -- Status: "+this.member.status),console.log("    |-    | -- AcademyInfo: "+this.member.academyinfo),console.log("    |-    | <-logMember()")},e=h([o.Injectable(),p(0,i.Inject(a.Http)),d("design:paramtypes",[n.LoggerService,l.CommonService,a.Http])],e)}(),e("AcademyRegistrationService",c)}}});