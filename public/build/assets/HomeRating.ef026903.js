import{c as A}from"./AppHomeHeader.aba7fc05.js";import{A as u,a as g,b as R}from"./AppUniversityRating.db38db45.js";import{_ as b,r as f,a as i,o as s,c as k,d as y,b as e,V as a,e as o,f as c,K as r,F as H}from"./app.5ae2f6e8.js";import"./logo.abca6919.js";import"./vue-select.666a764f.js";const C={name:"HomeRating",components:{AppUsersRating:u,AppTeamRating:g,AppUniversityRating:R,AppHomeHeader:A},setup(){return{section:f("user")}}},U={class:"container"},B={class:"row"},V=e("div",{class:"col-12 mt30 mb30"},[e("h1",null,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043B\u0438\u0433\u0438")],-1),x={class:"col-12"},N={class:"tabs"},T={class:"col-12"};function h(l,n,F,t,K,w){const p=i("AppHomeHeader"),_=i("AppUsersRating"),d=i("AppTeamRating"),v=i("AppUniversityRating");return s(),k(H,null,[y(p),e("main",null,[e("div",U,[e("div",B,[V,e("div",x,[e("div",N,[e("div",{class:a(["tab-item",{"tab-item__active":t.section==="user"}]),onClick:n[0]||(n[0]=m=>t.section="user")},"\u041B\u0438\u0447\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",2),e("div",{class:a(["tab-item",{"tab-item__active":t.section==="team"}]),onClick:n[1]||(n[1]=m=>t.section="team")},"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",2),e("div",{class:a(["tab-item",{"tab-item__active":t.section==="university"}]),onClick:n[2]||(n[2]=m=>t.section="university")},"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0441\u043A\u0438\u0439 \u0437\u0430\u0447\u0435\u0442",2)])]),e("div",T,[(s(),o(r,null,[t.section==="user"?(s(),o(_,{key:0})):c("",!0)],1024)),(s(),o(r,null,[t.section==="team"?(s(),o(d,{key:0})):c("",!0)],1024)),(s(),o(r,null,[t.section==="university"?(s(),o(v,{key:0})):c("",!0)],1024))])])])])],64)}const G=b(C,[["render",h]]);export{G as default};