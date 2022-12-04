import{_ as F,u as V,r as h,i as C,h as f,a as i,o as d,c as g,d as o,w as y,b as e,e as E,f as b,g as r,Q as u,U as M,F as B,m as x}from"./app.96a8ec99.js";import{A as N,F as H,E as L,c as A,b as U,u as q}from"./logo.597c877d.js";import{C as D}from"./vue-select.ecdad68c.js";import{A as P}from"./AppHeader.a25215d2.js";const Q={name:"Settings",components:{AppHeader:P,AppLoader:N,vSelect:D,Field:H,ErrorMessage:L},setup(){const m=V(),a=m.getters["auth/user"],_=a,s=h(!1),k=h(a.nickname),p=h(),v=A({nickname:U().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0438\u043A\u043D\u0435\u0439\u043C").min(2,"\u041E\u0442 2-\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432").max(32,"\u0414\u043E 32-\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),university_id:A().nullable()}),{values:w,handleSubmit:c}=q({validationSchema:v});C(async()=>{s.value=!0;try{const t=await f.get("/api/user-settings");a.email=t.data.email,a.university=t.data.university;const n=await f.get("/api/universities");p.value=n.data}catch(t){console.log(t.message)}s.value=!1});const l=c(async t=>{s.value=!0,t.university_id=t.university_id?t.university_id.code:null;try{await f.patch("/api/user/update",t),_.nickname=t.nickname,m.commit("auth/setUser",_)}catch(n){console.log(n.message)}s.value=!1});return{loading:s,user:a,nickname:k,universities:p,submit:l}}},R={class:"container-fluid g-0"},T={class:"row"},j={class:"col-lg-4"},z={class:"dashboard-item"},G=e("h3",null,"\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",-1),I={class:"user-account__data"},J={class:"b500"},K={class:"b500"},O={class:"b500"},W={key:0},X={class:"b500"},Y={class:"form-control"},Z=e("label",{for:"nickname"},"\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u0432 \u0438\u0433\u0440\u0435",-1),$={key:0,class:"form-control"},ee=e("label",{for:"university_id"},"\u0412\u0430\u0448 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",-1),se=e("button",{class:"btn btn-default btn-full-width"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",-1);function te(m,a,_,s,k,p){const v=i("AppHeader"),w=i("AppLoader"),c=i("Field"),l=i("ErrorMessage"),t=i("v-select");return d(),g(B,null,[o(v,null,{default:y(()=>[r("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430")]),_:1}),e("main",null,[e("div",R,[e("div",T,[e("div",j,[e("div",z,[s.loading?(d(),E(w,{key:0})):b("",!0),G,e("div",I,[e("p",null,[r("\u0418\u043C\u044F: "),e("span",J,u(s.user.name),1)]),e("p",null,[r("\u0424\u0430\u043C\u0438\u043B\u0438\u044F: "),e("span",K,u(s.user.surname),1)]),e("p",null,[r("E-mail: "),e("span",O,u(s.user.email),1)]),s.user.university?(d(),g("p",W,[r("\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442: "),e("span",X,u(s.user.university),1)])):b("",!0)]),e("form",{onSubmit:a[1]||(a[1]=M((...n)=>s.submit&&s.submit(...n),["prevent"]))},[e("div",Y,[Z,o(c,{modelValue:s.nickname,"onUpdate:modelValue":a[0]||(a[0]=n=>s.nickname=n),name:"nickname"},{default:y(({field:n,errors:S})=>[e("input",x(n,{type:"text",class:["form-input",{invalid:!!S.length}],placeholder:"\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u0432 \u0438\u0433\u0440\u0435"}),null,16)]),_:1},8,["modelValue"]),o(l,{class:"alert",name:"nickname"})]),s.user.university?b("",!0):(d(),g("div",$,[ee,o(c,{name:"university_id"},{default:y(({field:n})=>[o(t,x({options:s.universities,placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442"},n),null,16,["options"]),o(l,{class:"alert",name:"university_id"})]),_:1})])),se],32)])])])])])],64)}const re=F(Q,[["render",te]]);export{re as default};