import{_ as b,o as e,c as s,b as t,F as o,Q as u,R as l,g as f,e as $,r as x,i as A}from"./app.7c300969.js";const B={name:"AppUsersTables",props:{users:{type:Array,default:null}}},N={key:0,class:"result-table"},R=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"\u042F\u0445\u0442\u0441\u043C\u0435\u043D")])],-1),V={class:"result-table__name"},F={class:"result-table__nick"};function U(p,i,c,n,y,k){return c.users?(e(),s("table",N,[R,t("tbody",null,[(e(!0),s(o,null,u(c.users,(_,r)=>(e(),s("tr",{key:r},[t("td",null,l(r+1),1),t("td",null,[t("div",V,[f(l(_.name)+" "+l(_.surname)+" ",1),t("span",F,l(_.nickname),1)])])]))),128))])])):$("",!0)}const z=b(B,[["render",U]]),j={name:"AppResultTable",props:["id"],setup(p){const i=x(),c={default:"\u0413\u043E\u043D\u043A\u0430",group:"\u0413\u0440\u0443\u043F\u043F\u0430",fleet:"\u0424\u043B\u043E\u0442"};return A(async()=>{try{const n=await axios.get(`/api/stage/${p.id}`);i.value=n.data}catch(n){console.log(n.message)}}),{results:i,statusTitle:c}}},w={class:"result-tables"},C={key:0},D={class:"result-table"},E=t("th",null,"#",-1),L=t("th",null,"\u042F\u0445\u0442\u0441\u043C\u0435\u043D",-1),M=t("th",null,"\u0418\u0442\u043E\u0433",-1),O={class:"result-table__name"},Q={class:"result-table__nick"};function S(p,i,c,n,y,k){return e(),s("div",w,[(e(!0),s(o,null,u(n.results,(_,r)=>(e(),s("div",{class:"result-table__container",key:r},[(e(!0),s(o,null,u(_,(h,g,T)=>(e(),s("div",{key:g},[n.statusTitle[r]!=="\u0413\u043E\u043D\u043A\u0430"?(e(),s("h3",C,l(n.statusTitle[r])+" #"+l(T+1),1)):$("",!0),t("table",D,[t("thead",null,[t("tr",null,[E,L,(e(!0),s(o,null,u(Object.keys(h[0]).length-1,a=>(e(),s("th",null," #"+l(a),1))),256)),M])]),t("tbody",null,[(e(!0),s(o,null,u(h,(a,v)=>(e(),s("tr",null,[t("td",null,l(v+1),1),t("td",null,[t("div",O,[f(l(a[0].name)+" "+l(a[0].surname)+" ",1),t("span",Q,l(a[0].nickname),1)])]),(e(!0),s(o,null,u(a,d=>{var m;return e(),s("td",null,l(d.drop?d.place===h.length+1?`(dnf, ${d.place})`:`(${d.place})`:(m=d.place)!=null?m:a.sum),1)}),256))]))),256))])])]))),128))]))),128))])}const G=b(j,[["render",S]]);export{z as A,G as a};
