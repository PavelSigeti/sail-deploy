import{A as h}from"./AppHeader.a25215d2.js";import{A as v,a as f}from"./AppUsersTables.cfe6db66.js";import{_ as b,r as _,X as A,i as T,a as d,o as t,c as a,d as l,w as y,b as s,Q as r,f as i,F as k,g as x}from"./app.96a8ec99.js";import{t as w}from"./time.025744ef.js";import"./logo.597c877d.js";const H={name:"StagePage",components:{AppHeader:h,AppResultTable:v,AppUsersTables:f},setup(){const o=_({}),c=A().params.id,e=_("");return T(async()=>{try{const n=await axios.get(`/api/stage/${c}/show`);o.value=n.data,e.value=o.value.title}catch(n){console.log(n.message)}}),{stage:o,id:c,h1:e,time:w}}},N={class:"container-fluid g-0"},R={class:"row"},V={class:"col-12"},B={key:0,class:"dashboard-item"},C={class:"user-stage__date mb0"},M={key:1,class:"dashboard-item"},S=["innerHTML"],U={key:2,class:"dashboard-item"},F={key:3,class:"dashboard-item"};function L(o,m,c,e,n,P){const g=d("AppHeader"),p=d("AppUsersTables"),u=d("AppResultTable");return t(),a(k,null,[l(g,null,{default:y(()=>[x(r(e.h1),1)]),_:1}),s("main",null,[s("div",N,[s("div",R,[s("div",V,[e.stage&&e.stage.register_start?(t(),a("div",B,[s("div",C,[s("span",null,"\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: "+r(e.time(e.stage.register_start)),1),s("span",null,"\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: "+r(e.time(e.stage.register_end)),1),s("span",null,"\u041D\u0430\u0447\u0430\u043B\u043E \u0433\u043E\u043D\u043E\u043A: "+r(e.time(e.stage.race_start)),1)])])):i("",!0),e.stage&&e.stage.description?(t(),a("div",M,[s("div",{class:"content",innerHTML:e.stage.description},null,8,S)])):i("",!0),e.stage&&e.stage.status==="active"?(t(),a("div",U,[l(p,{users:e.stage.users},null,8,["users"])])):i("",!0),e.stage&&e.stage.status!=="active"?(t(),a("div",F,[l(u,{id:e.id},null,8,["id"])])):i("",!0)])])])])],64)}const q=b(H,[["render",L]]);export{q as default};