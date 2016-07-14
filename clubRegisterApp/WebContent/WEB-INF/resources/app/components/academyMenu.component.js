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
    var core_1, core_2;
    var AcademyMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            AcademyMenuComponent = (function () {
                function AcademyMenuComponent() {
                }
                AcademyMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'academy-memu',
                        //templateUrl: 'app/htmltemplates/academyMenu.component.html'
                        template: "\n\t\t\t\t<div class=\"btn-group-vertical\">\n\t\t\t\t    <a (click)=\"academyHome()\" class=\"btn btn-primary academymenu\"><i class=\"fa fa-home\"></i> Home</a>\n\t\t\t\t    <a (click)=\"academyOverview()\" class=\"btn btn-primary academymenu\">Overview</a>\n\t\t\t\t    <a (click)=\"academyCoaches()\" class=\"btn btn-primary academymenu\">Coaches</a>\n\t\t\t\t    <a (click)=\"academySchedule()\" class=\"btn btn-primary academymenu\">Schedule</a>\n\t\t\t\t    <a (click)=\"academyRegistration()\" class=\"btn btn-primary academymenu\">Registration</a>\n\t\t\t\t    <a (click)=\"academyPhotos()\" class=\"btn btn-primary academymenu\">Photos</a>\n\t\t\t\t    <div class=\"btn-group\">\n\t\t\t\t        <button type=\"button\" class=\"btn btn-primary dropdown-toggle academymenu\" data-toggle=\"dropdown\">\n\t\t\t\t            FAQ <span class=\"caret\"></span></button>\n\t\t\t\t        <ul class=\"dropdown-menu academymenu\" role=\"menu\">\n\t\t\t\t            <li><a href=\"#\">Season</a></li>\n\t\t\t\t            <li><a href=\"#\">Fees</a></li>\n\t\t\t\t        </ul>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n    "
                    }),
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AcademyMenuComponent);
                return AcademyMenuComponent;
            }());
            exports_1("AcademyMenuComponent", AcademyMenuComponent);
        }
    }
});
//# sourceMappingURL=academyMenu.component.js.map