import{A as u}from"./AppHeader.111e5057.js";import{A,a as g,b as f}from"./AppUniversityRating.a18cb00b.js";import{_ as R,r as b,a as i,o as s,c as k,d as y,w as C,b as t,V as o,e as a,f as c,K as r,F as U,g as x}from"./app.f2be09e0.js";import"./AppLoader.cac3a6e6.js";const V={name:"Rating.vue",components:{AppHeader:u,AppUsersRating:A,AppTeamRating:g,AppUniversityRating:f},setup(){return{section:b("user")}}},B={class:"container-fluid g-0"},N={class:"row"},T={class:"col-12"},w={class:"tabs"},H={class:"col-12"};function F(p,n,K,e,h,z){const m=i("AppHeader"),_=i("AppUsersRating"),d=i("AppTeamRating"),v=i("AppUniversityRating");return s(),k(U,null,[y(m,null,{default:C(()=>[x("\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043B\u0438\u0433\u0438")]),_:1}),t("main",null,[t("div",B,[t("div",N,[t("div",T,[t("div",w,[t("div",{class:o(["tab-item",{"tab-item__active":e.section==="user"}]),onClick:n[0]||(n[0]=l=>e.section="user")},"\u041B\u0438\u0447\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",2),t("div",{class:o(["tab-item",{"tab-item__active":e.section==="team"}]),onClick:n[1]||(n[1]=l=>e.section="team")},"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",2),t("div",{class:o(["tab-item",{"tab-item__active":e.section==="university"}]),onClick:n[2]||(n[2]=l=>e.section="university")},"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0441\u043A\u0438\u0439 \u0437\u0430\u0447\u0435\u0442",2)])]),t("div",H,[(s(),a(r,null,[e.section==="user"?(s(),a(_,{key:0})):c("",!0)],1024)),(s(),a(r,null,[e.section==="team"?(s(),a(d,{key:0})):c("",!0)],1024)),(s(),a(r,null,[e.section==="university"?(s(),a(v,{key:0})):c("",!0)],1024))])])])])],64)}const G=R(V,[["render",F]]);export{G as default};
