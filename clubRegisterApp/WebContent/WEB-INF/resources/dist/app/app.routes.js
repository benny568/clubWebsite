System.register(['@angular/router', './components/viewTeam.component', "./components/home.component", "./components/far.component", "./components/findUs.component", "./components/messageUs.component", "./components/contactUs.component", "./components/downloads.component", "./components/links.component", "./components/academyHome.component", "./components/clubHistory.component", "./components/merchandise.component", "./components/login.component", "./components/photos.component", "./components/fleadh.component", "./components/payNow.component", "./components/adminHome.component", "./components/adminOverview.component", "./components/memberRegister.component", "./components/editMember.component", "./booking/booking-stage1.component", "./booking/booking-stage3.component", "./booking/booking-stage4.component", "./booking/success.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, viewTeam_component_1, home_component_1, far_component_1, findUs_component_1, messageUs_component_1, contactUs_component_1, downloads_component_1, links_component_1, academyHome_component_1, clubHistory_component_1, merchandise_component_1, login_component_1, photos_component_1, fleadh_component_1, payNow_component_1, adminHome_component_1, adminOverview_component_1, memberRegister_component_1, editMember_component_1, booking_stage1_component_1, booking_stage3_component_1, booking_stage4_component_1, success_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (viewTeam_component_1_1) {
                viewTeam_component_1 = viewTeam_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (far_component_1_1) {
                far_component_1 = far_component_1_1;
            },
            function (findUs_component_1_1) {
                findUs_component_1 = findUs_component_1_1;
            },
            function (messageUs_component_1_1) {
                messageUs_component_1 = messageUs_component_1_1;
            },
            function (contactUs_component_1_1) {
                contactUs_component_1 = contactUs_component_1_1;
            },
            function (downloads_component_1_1) {
                downloads_component_1 = downloads_component_1_1;
            },
            function (links_component_1_1) {
                links_component_1 = links_component_1_1;
            },
            function (academyHome_component_1_1) {
                academyHome_component_1 = academyHome_component_1_1;
            },
            function (clubHistory_component_1_1) {
                clubHistory_component_1 = clubHistory_component_1_1;
            },
            function (merchandise_component_1_1) {
                merchandise_component_1 = merchandise_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (photos_component_1_1) {
                photos_component_1 = photos_component_1_1;
            },
            function (fleadh_component_1_1) {
                fleadh_component_1 = fleadh_component_1_1;
            },
            function (payNow_component_1_1) {
                payNow_component_1 = payNow_component_1_1;
            },
            function (adminHome_component_1_1) {
                adminHome_component_1 = adminHome_component_1_1;
            },
            function (adminOverview_component_1_1) {
                adminOverview_component_1 = adminOverview_component_1_1;
            },
            function (memberRegister_component_1_1) {
                memberRegister_component_1 = memberRegister_component_1_1;
            },
            function (editMember_component_1_1) {
                editMember_component_1 = editMember_component_1_1;
            },
            function (booking_stage1_component_1_1) {
                booking_stage1_component_1 = booking_stage1_component_1_1;
            },
            function (booking_stage3_component_1_1) {
                booking_stage3_component_1 = booking_stage3_component_1_1;
            },
            function (booking_stage4_component_1_1) {
                booking_stage4_component_1 = booking_stage4_component_1_1;
            },
            function (success_component_1_1) {
                success_component_1 = success_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'findUs', component: findUs_component_1.FindUsComponent },
                { path: 'contactUs', component: contactUs_component_1.ContacteUsComponent },
                { path: 'downloads', component: downloads_component_1.DownloadsComponent },
                { path: 'links', component: links_component_1.LinksComponent },
                { path: 'messageUs', component: messageUs_component_1.MessageUsComponent },
                { path: 'viewTeam/:team', component: viewTeam_component_1.ViewTeam },
                { path: 'farView/:team', component: far_component_1.FarViewComponent },
                { path: 'academyHome', component: academyHome_component_1.AcademyHomeComponent },
                { path: 'clubHistory', component: clubHistory_component_1.ClubHistoryComponent },
                { path: 'merchandise', component: merchandise_component_1.MerchandiseComponent },
                { path: 'media/:cat1/:cat2/:cat3', component: photos_component_1.PhotosComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'admin', component: adminHome_component_1.AdminHomeComponent },
                { path: 'fleadh', component: fleadh_component_1.FleadhComponent },
                { path: 'payNow', component: payNow_component_1.PayNowComponent },
                { path: 'adminOverview', component: adminOverview_component_1.AdminOverviewComponent },
                { path: 'memberRegister', component: memberRegister_component_1.MemberRegisterComponent },
                { path: 'editMember', component: editMember_component_1.EditMemberComponent },
                { path: 'booking', component: booking_stage1_component_1.BookingStage1Component },
                { path: 'booking3', component: booking_stage3_component_1.BookingStage3Component },
                { path: 'booking4', component: booking_stage4_component_1.BookingStage4Component },
                { path: 'success', component: success_component_1.SuccessComponent }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=app.routes.js.map
