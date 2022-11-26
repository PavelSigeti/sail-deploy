import{r as v,h as A,_ as x,a as r,o as l,c as h,b as e,f as c,e as g,d as a,w as u,m as k,u as S,M as w,K as C,F}from"./app.37985ac0.js";import{F as E,a as B,E as M,A as O,c as L,b as y,_ as N}from"./logo.f2626bed.js";function V(s){s?document.body.style.overflow="":document.body.style.overflow="hidden"}const q={name:"AppSupport",emits:["close"],components:{Field:E,Form:B,ErrorMessage:M,AppLoader:O},setup(){const s=v(!1),o=v(!1),p=L({title:y().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043C\u0443").min(5,"\u041E\u0442 5 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").max(128,"\u0414\u043E 128 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),text:y().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442").min(20,"\u041E\u0442 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").max(1024,"\u0414\u043E 1024 \u0441\u0438\u0432\u043E\u043B\u043E\u0432")});return{submit:async _=>{s.value=!0;try{const d=await A.post("/api/feedback",_);console.log("response",d.data)}catch(d){console.log(d.message)}s.value=!1,o.value=!0},loading:s,validationSchema:p,done:o}}},H={class:"modal"},K={class:"support-container"},P={key:0,class:"support-done"},j=e("h2",null,"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C",-1),z={class:"form-control"},D=e("label",{for:"title"},"\u0422\u0435\u043C\u0430",-1),G={class:"form-control"},I=e("label",{for:"text"},"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",-1),J=e("button",{class:"btn btn-default btn-full-width"},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",-1);function Q(s,o,p,t,_,d){const b=r("AppLoader"),m=r("Field"),n=r("ErrorMessage"),$=r("Form");return l(),h("div",H,[e("div",{class:"modal-background",onClick:o[0]||(o[0]=i=>{s.$emit("close")})}),e("div",K,[t.done?(l(),h("div",P," \u0412\u0430\u0448\u0435 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E! ")):c("",!0),t.loading?(l(),g(b,{key:1})):c("",!0),e("div",{class:"close",onClick:o[1]||(o[1]=i=>{s.$emit("close")})}),j,a($,{onSubmit:t.submit,"validation-schema":t.validationSchema},{default:u(()=>[e("div",z,[a(m,{name:"title"},{default:u(({field:i,errors:f})=>[D,e("input",k(i,{id:"title",type:"text",class:["form-input",{invalid:!!f.length}],placeholder:"\u0422\u0435\u043C\u0430"}),null,16)]),_:1}),a(n,{class:"alert",name:"title"})]),e("div",G,[a(m,{name:"text"},{default:u(({field:i,errors:f})=>[I,e("textarea",k(i,{id:"text",class:["form-textarea",{invalid:!!f.length}],placeholder:"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"}),null,16)]),_:1}),a(n,{class:"alert",name:"text"})]),J]),_:1},8,["onSubmit","validation-schema"])])])}const R=x(q,[["render",Q]]),T={name:"AppHeader.vue",components:{AppSupport:R},setup(){const s=v(!1),o=S();return{support:s,bodyOverflow:V,sidebar:()=>{o.dispatch("sidebar/toggleStatus")}}}},U={class:"dashboard-header"},W={class:"mobile-header"},X={class:"mobile-header__left"},Y=e("div",{class:"bars"},null,-1),Z=[Y],ee=e("img",{src:N,alt:"vrisc logo",class:"logo"},null,-1),oe={class:"header-content"},te={class:"header-container"},se={class:"header-content hide767"};function ne(s,o,p,t,_,d){const b=r("router-link"),m=r("AppSupport");return l(),h(F,null,[e("header",U,[e("div",W,[e("div",X,[e("div",{class:"sidebar-bars",onClick:o[0]||(o[0]=(...n)=>t.sidebar&&t.sidebar(...n))},Z),a(b,{to:"/dashboard"},{default:u(()=>[ee]),_:1})]),e("div",oe,[e("div",{class:"btn btn-border support-btn",onClick:o[1]||(o[1]=n=>{t.support=!0,t.bodyOverflow(!1)})},"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"),c("",!0)])]),e("div",te,[e("h1",null,[w(s.$slots,"default")]),e("div",se,[e("div",{class:"btn btn-border support-btn",onClick:o[2]||(o[2]=n=>{t.support=!0,t.bodyOverflow(!1)})},"\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"),c("",!0)])])]),(l(),g(C,null,[t.support?(l(),g(m,{key:0,onClose:o[3]||(o[3]=n=>{t.support=!1,t.bodyOverflow(!0)})})):c("",!0)],1024))],64)}const le=x(T,[["render",ne]]);export{le as A};
