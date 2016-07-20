System.register(['@angular/platform-browser-dynamic', '@angular/http', '@angular/common', 'rxjs/add/operator/map', './app.component', './app.routes', './services/session-data.service', './services/booking.service', './services/common.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, common_1, app_component_1, app_routes_1, session_data_service_1, booking_service_1, common_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (session_data_service_1_1) {
                session_data_service_1 = session_data_service_1_1;
            },
            function (booking_service_1_1) {
                booking_service_1 = booking_service_1_1;
            },
            function (common_service_1_1) {
                common_service_1 = common_service_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                app_routes_1.APP_ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                session_data_service_1.SessionDataService,
                booking_service_1.BookingService,
                common_service_1.CommonService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]).catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=boot.js.map
