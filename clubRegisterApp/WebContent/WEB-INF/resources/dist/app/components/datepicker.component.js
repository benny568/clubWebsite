System.register(['@angular/core', '@angular/common', '../../node_modules/moment/moment', '../../node_modules/ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, common_1, moment, ng2_bootstrap_1;
    var DatepickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (moment_1) {
                moment = moment_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            DatepickerComponent = (function () {
                function DatepickerComponent() {
                    this.dt = new Date();
                    this.minDate = void 0;
                    this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
                    this.format = this.formats[0];
                    this.dateOptions = {
                        formatYear: 'YY',
                        startingDay: 1
                    };
                    this.opened = false;
                    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
                    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
                    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
                    this.events = [
                        { date: this.tomorrow, status: 'full' },
                        { date: this.afterTomorrow, status: 'partially' }
                    ];
                }
                DatepickerComponent.prototype.getDate = function () {
                    return this.dt && this.dt.getTime() || new Date().getTime();
                };
                DatepickerComponent.prototype.today = function () {
                    this.dt = new Date();
                };
                DatepickerComponent.prototype.d20090824 = function () {
                    this.dt = moment('2016-08-17', 'YYYY-MM-DD').toDate();
                };
                // todo: implement custom class cases
                DatepickerComponent.prototype.getDayClass = function (date, mode) {
                    if (mode === 'day') {
                        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
                        for (var i = 0; i < this.events.length; i++) {
                            var currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
                            if (dayToCheck === currentDay) {
                                return this.events[i].status;
                            }
                        }
                    }
                    return '';
                };
                DatepickerComponent.prototype.disabled = function (date, mode) {
                    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
                };
                DatepickerComponent.prototype.open = function () {
                    this.opened = !this.opened;
                };
                DatepickerComponent.prototype.clear = function () {
                    this.dt = void 0;
                };
                DatepickerComponent.prototype.toggleMin = function () {
                    this.dt = new Date(this.minDate.valueOf());
                };
                DatepickerComponent = __decorate([
                    core_1.Component({
                        selector: 'datepicker',
                        //templateUrl: 'app/htmltemplates/datepicker.component.html',
                        template: "\n\t\t\t\t<style>\n\t\t\t\t  .full button span {\n\t\t\t\t    background-color: limegreen;\n\t\t\t\t    border-radius: 32px;\n\t\t\t\t    color: black;\n\t\t\t\t  }\n\t\t\t\t  .partially button span {\n\t\t\t\t    background-color: orange;\n\t\t\t\t    border-radius: 32px;\n\t\t\t\t    color: black;\n\t\t\t\t  }\n\t\t\t\t</style>\n\t\t\t\t\n\t\t\t\t<div>\n\t\t\t\t  <pre class=\"card card-block card-header\">Selected date is: <em *ngIf=\"dt\">{{ getDate() | date:'fullDate'}}</em></pre>\n\t\t\t\t\n\t\t\t\t  <div style=\"display:inline-block; min-height:290px;\">\n\t\t\t\t    <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\"></datepicker>\n\t\t\t\t  </div>\n\t\t\t\t\n\t\t\t\t  <hr />\n\t\t\t\t  <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"today()\">Today</button>\n\t\t\t\t  <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"d20090824();\">2009-08-24</button>\n\t\t\t\t  <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\n\t\t\t\t  <button \ttype=\"button\" \n\t\t\t\t  \t\t\tclass=\"btn btn-sm btn-default btn-secondary\" \n\t\t\t\t  \t\t\t(click)=\"toggleMin()\" \n\t\t\t\t  \t\t\ttooltip=\"After today restriction\">Min date</button>\n\t\t\t\t</div>\n  ",
                        directives: [ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatepickerComponent);
                return DatepickerComponent;
            }());
            exports_1("DatepickerComponent", DatepickerComponent);
        }
    }
});

//# sourceMappingURL=datepicker.component.js.map
