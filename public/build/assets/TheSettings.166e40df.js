import{_ as g,u as y,r as _,i as k,h as p,a as m,o as i,c as r,b as t,e as S,f as v,U as x,S as w,Y as A,F as b,P as T,Q as h,d as f,w as U,g as C}from"./app.37985ac0.js";import{A as M}from"./logo.f2626bed.js";import{A as V}from"./AppHeader.8c449762.js";const $={name:"TheUniversitiesSettings",components:{AppLoader:M},setup(){const c=y(),o=_(),a=_(),e=_(!1),l=async(n,s)=>{e.value=!0;try{await p.delete(`/api/admin/universities/${n}/delete`),a.value.splice(s,1)}catch(u){console.log(u.message),c.dispatch("notification/displayMessage",{value:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430!",type:"error"})}e.value=!1},d=async()=>{e.value=!0;try{const s=(await p.post("/api/admin/universities/store",{name:o.value})).data;s.users_count=0,a.value.push(s)}catch(n){console.log(n.message),c.dispatch("notification/displayMessage",{value:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430!",type:"error"})}e.value=!1};return k(async()=>{e.value=!0;try{const n=await p.get("/api/admin/universities");a.value=n.data}catch(n){console.log(n.message)}e.value=!1}),{universities:a,submit:d,name:o,removeUniversity:l,loading:e}}},B={class:"col-12"},L={class:"dashboard-item"},N=t("h3",null,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",-1),H={class:"form-control"},D=t("label",{for:"name"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430",-1),F=t("button",{class:"btn btn-default btn-settings"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",-1),E={key:1,class:"universities-container"},P=t("h3",null,"\u0421\u043F\u0438\u0441\u043E\u043A \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043E\u0432",-1),Q={class:"item-block__content"},Y={class:"item-block__btn item-block__cancel-btn"},j=["onClick"];function q(c,o,a,e,l,d){const n=m("AppLoader");return i(),r("div",B,[t("div",L,[e.loading?(i(),S(n,{key:0})):v("",!0),N,t("form",{onSubmit:o[1]||(o[1]=x((...s)=>e.submit&&e.submit(...s),["prevent"])),class:"mb30"},[t("div",H,[D,w(t("input",{class:"form-input",type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=s=>e.name=s),placeholder:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430"},null,512),[[A,e.name]])]),F],32),e.universities&&e.universities.length>0?(i(),r("div",E,[P,(i(!0),r(b,null,T(e.universities,(s,u)=>(i(),r("div",{class:"item-block",key:s.id},[t("div",Q,h(s.name)+" - "+h(s.users_count)+" \u0447\u0435\u043B. ",1),t("div",Y,[t("span",{onClick:O=>e.removeUniversity(s.id,u)},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",8,j)])]))),128))])):v("",!0)])])}const z=g($,[["render",q]]),G={name:"TheSettings",components:{TheUniversitiesSettings:z,AppHeader:V},setup(){return{}}},I={class:"container-fluid g-0"},J={class:"row"};function K(c,o,a,e,l,d){const n=m("AppHeader"),s=m("TheUniversitiesSettings");return i(),r(b,null,[f(n,null,{default:U(()=>[C("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0430\u0439\u0442\u0430")]),_:1}),t("main",null,[t("div",I,[t("div",J,[f(s)])])])],64)}const Z=g(G,[["render",K]]);export{Z as default};
