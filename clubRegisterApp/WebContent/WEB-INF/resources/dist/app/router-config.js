System.register(["./academy/academy.routes","./admin/admin.routes","./components/viewTeam.component","./components/home.component","./components/far.component","./components/findUs.component","./components/messageUs.component","./components/contactUs.component","./components/downloads.component","./components/links.component","./components/clubHistory.component","./components/merchandise.component","./components/login.component","./components/photos.component","./components/memberRegister.component","./components/editMember.component","./booking/success.component","./components/logout.component"],function(n,o){"use strict";var t,e,c,m,p,s,i,a,u,r,f,h,d,C,g,l,b,U,w,y,H;o&&o.id;return{setters:[function(n){t=n},function(n){e=n},function(n){c=n},function(n){m=n},function(n){p=n},function(n){s=n},function(n){i=n},function(n){a=n},function(n){u=n},function(n){r=n},function(n){f=n},function(n){h=n},function(n){d=n},function(n){C=n},function(n){g=n},function(n){l=n},function(n){b=n},function(n){U=n}],execute:function(){w={path:"",component:m.HomeComponent},y={path:"**",component:m.HomeComponent},n("routeConfig",H=[{path:"",component:m.HomeComponent},{path:"findUs",component:s.FindUsComponent},{path:"contactUs",component:a.ContacteUsComponent},{path:"downloads",component:u.DownloadsComponent},{path:"links",component:r.LinksComponent},{path:"messageUs",component:i.MessageUsComponent},{path:"viewTeam",component:c.ViewTeam},{path:"farView",component:p.FarViewComponent},{path:"clubHistory",component:f.ClubHistoryComponent},{path:"merchandise",component:h.MerchandiseComponent},{path:"media/:cat1/:cat2/:cat3",component:C.PhotosComponent},{path:"login",component:d.LoginComponent},{path:"logout",component:U.LogoutComponent},{path:"memberRegister",component:g.MemberRegisterComponent},{path:"editMember",component:l.EditMemberComponent},{path:"success",component:b.SuccessComponent}].concat(t.academyRouterConfig,e.adminRouterConfig))}}});