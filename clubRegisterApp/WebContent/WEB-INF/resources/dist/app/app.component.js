System.register(['@angular/core', '@angular/router', './services/session-data.service', './services/logger.service'], function(exports_1, context_1) {
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
    var core_1, router_1, session_data_service_1, logger_service_1, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            AppComponent = (function () {
                function AppComponent(lg$, d$) {
                    this.lg$ = lg$;
                    this.d$ = d$;
                    this.componentName = 'AppComponent';
                    this.logdepth = 0;
                    this.lg$.setLogHdr(this.logdepth, this.componentName);
                    this.lg$.log("constructor()");
                    // Load the teams to use in the menu system
                    this.d$.dsGetTeams();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //templateUrl: 'app/htmltemplates/nav.component.html',
                        template: "\n    <div class=\"container\">\n<!-- (1) Banner across the top -->\n<div class=\"header img-rounded\">\n    <div align=\"right\" style=\"color:#FFFF33; font-weight:bold; font-size:24px; padding:30px 5px 0px 0px;\">Avenue United</div>\n    <div align=\"right\" style=\"color:#FFFF33; font-weight:bold; font-size:10px;padding-right:5px;\"> EST. 1983&nbsp;&nbsp;\n        <i class=\"fa fa-futbol-o\"></i> 14 Titles&nbsp;&nbsp;\n        <i class=\"fa fa-trophy\"></i> 10 Cups\n    </div>\n    <img class=\"t2\" src=\"resources/images/avenueCrest.png\" alt=\"\" />\n</div>\n\n<!-- (2) Navigation bar or menu system -->\n<nav class=\"navbar navbar-inverse\">\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a [routerLink]=\"['']\"><i class=\"fa fa-home\"></i></a></li>           \n            <li class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-picture-o\"></i> Gallery<span class=\"caret\"></span></a>\n\t\t\t\t<ul class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\n\t\t\t\t\t<!-- Drop down menu 1: Events -->\t\t\t\t\t\t\n\t\t        \t<li class=\"dropdown-submenu\">\n                \t\t<a tabindex=\"-1\" href=\"#\">Events</a>\t\t\t\t\t\t<!-- L1 -->\t\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li><a tabindex=\"-1\" href=\"#\">25th Anniversery</a></li>\t<!-- L2 -->\n\t\t\t\t\t\t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t\t\t<a tabindex=\"-1\" href=\"#\">Even More..</a>\t\t\t<!-- L2 -->\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a tabindex=\"-1\" href=\"#\">3rd leve</a></li>\t<!-- L3-->\n\t\t\t\t\t\t    \t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t        \t\t<a href=\"#\">3rd level</a>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t    \t<li><a href=\"#farView/U12 Black\">4th level</a></li>\n\t\t\t\t\t\t\t\t\t    \t<li><a href=\"#farView/U11 Red\">U11 Red</a></li>\n\t\t\t\t\t\t\t\t\t    \t<li><a href=\"#farView/U11 Yellow\">U11 Yellow</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n              \t\t<!-- Drop down menu 2: Academy -->\n\t\t\t\t\t<li class=\"dropdown-submenu pull-middle\">\n\t\t\t\t\t\t<a href=\"#\">Academy</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t\t\t<a href=\"#\">2009</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<span class=\"dropdown-header\">U11s</span>\n\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=\"media('2009','U11','League')\">League</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=\"media('2009','U11','Cup Final')\">Cup Final</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t\t\t<a href=\"#\">2010</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a (click)=\"media('2010','U12','none')\">U12s</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t\t\t<a href=\"#\">2015</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a (click)=\"media('2015','U8','none')\">U8s</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t\t\t<a href=\"#\">2016</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a (click)=\"media('2015','U10','none')\">U10s</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t              \n\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t<!-- Drop down menu 3: Junior B -->\n\t\t\t\t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t<a tabindex=\"-1\" href=\"#\">Junior B</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li class=\"dropdown-submenu\">\n\t\t\t\t\t\t\t\t<a href=\"#\">2016</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<span class=\"dropdown-header\">Junior Cup Semi-Final</span>\n\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=\"media('2016','Junior B','CupSemiFinal')\">Photos</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#Videos/2016/Junior B\">Video</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t              \n\t\t\t\t</ul>\n\t\t\t</li>           \n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-users\"></i> Teams<span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                    <div *ngFor=\"let team of d$.dsTeams\">\n                        <li><a [routerLink]=\"['/viewTeam']\">{{team.name}}</a></li>\n                    </div>\n                </ul>\n            </li>\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                \t<i class=\"fa fa-list\"></i> Fixtures &amp; Results<span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <div *ngFor=\"let team of d$.dsTeams\">\n                        <li><a [routerLink]=\"['/farView']\">{{team.name}}</a></li>\n                    </div>\n                </ul>\n            </li>\n            <li><a [routerLink]=\"['/academyHome']\"><i class=\"fa fa-child\"></i> Academy</a></li>\n            <li><a [routerLink]=\"['merchandise']\"><i class=\"fa fa-shopping-cart\"></i> Merchandise</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n        \t<li class=\"dropdown\" *ngIf=\"d$.dsAuthenticated\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> Admin<span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                \t<li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-home\"></i> Overview</a></li>\n                    <li><a [routerLink]=\"['/adminOverview']\"><i class=\"fa fa-sun-o\"></i> Overview</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/adminTutorials']\"><i class=\"fa fa-book\"></i> Tutorials</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['/memberRegister']\"><i class=\"fa fa-child\"></i> Members</a></li>\n\t\t\t\t\t<li><a *ngIf=\"d$.hasPermission('VIEW_USERS', '*')\" (onClick)=\"usersAdmin\"><i class=\"fa fa-child\"></i> Users</a></li>\n                </ul>\n            </li>\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                \t<i class=\"fa fa-info-circle\"></i> Information <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a [routerLink]=\"['/findUs']\"><i class=\"fa fa-road\"></i> Find Us</a></li>\n                    <li><a [routerLink]=\"['/messageUs']\"><i class=\"fa fa-envelope\"></i> Message Us</a></li>\n                    <li><a [routerLink]=\"['/contactUs']\"><i class=\"fa fa-phone\"></i> Contact Us</a></li>\n                    <li><a [routerLink]=\"['/downloads']\"><i class=\"fa fa-arrow-circle-down\"></i> Downloads</a></li>\n                    <li><a [routerLink]=\"['/links']\"><i class=\"fa fa-link\"></i> Links</a></li>\n                    <li><a [routerLink]=\"['/clubHistory']\"><i class=\"fa fa-angle-double-left\"></i> Our History</a></li>\n                </ul>\n            </li>\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                    <li><a [routerLink]=\"['/login']\"><i class=\"glyphicon glyphicon-user\"></i> Admin</a></li>\n                    <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n                    <li><a [routerLink]=\"['/logout']\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>\n</div>\n\n    ",
                        styles: ["\n            .header\n            {\n                background-image: url(\"resources/images/banner.png\");\n                background-size: cover;\n                min-height:110px;\n                position:relative;\n                margin-top:5px;\n            }\n            .t2\n            {\n                position:absolute;\n                top:0px;\n                left:0px;\n                height:110px;\n            }\n            "],
                        //stylesUrl: '/app/styles/nav.component.css',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService, session_data_service_1.SessionDataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
