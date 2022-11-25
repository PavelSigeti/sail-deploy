import{A as p}from"./AppLoader.cac3a6e6.js";import{_ as v,r as l,i as m,a as h,o,c as i,e as y,f as _,F as f,P as k,b as s,Q as d,g as A}from"./app.f2be09e0.js";const b={name:"AppUsersRating",components:{AppLoader:p},setup(){const c=l(!1),r=l("/api/rating/users"),e=l(!1);return m(async()=>{try{const a=await axios.get(r.value);e.value=a.data}catch(a){console.log(a.message)}}),{data:e,load:async()=>{c.value=!0;try{const a=await axios.get(e.value.next_page_url);e.value.data.push(...a.data.data),e.value.next_page_url=a.data.next_page_url,e.value.current_page=a.data.current_page}catch(a){console.log(a.message)}c.value=!1},loading:c}}},$={key:0,class:"dashboard-item"},L=s("h3",null,"\u041B\u0438\u0447\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",-1),w={class:"rating-position"},R={class:"rating-title"},C={class:"rating-name"},B={class:"rating-nickname"},U={class:"rating-score"},j={class:"jcc"};function N(c,r,e,t,a,x){const g=h("AppLoader");return t.data?(o(),i("div",$,[t.loading?(o(),y(g,{key:0})):_("",!0),L,(o(!0),i(f,null,k(t.data.data,(n,u)=>(o(),i("div",{class:"rating-item",key:n.user_id},[s("div",w,"#"+d(u+1),1),s("div",R,[s("div",C,[s("div",B,d(n.nickname),1),A("\xA0"+d(n.name)+" "+d(n.surname),1)])]),s("div",U,d(n.total),1)]))),128)),s("div",j,[t.data.current_page<t.data.last_page?(o(),i("div",{key:0,class:"btn btn-default btn-settings-280 mt10",onClick:r[0]||(r[0]=(...n)=>t.load&&t.load(...n))},"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435")):_("",!0)])])):_("",!0)}const ta=v(b,[["render",N]]),T={name:"AppTeamRating",components:{AppLoader:p},setup(){const c=l(!1),r=l("/api/rating/team"),e=l(!1);return m(async()=>{try{const a=await axios.get(r.value);e.value=a.data}catch(a){console.log(a.message)}}),{data:e,load:async()=>{c.value=!0;try{const a=await axios.get(e.value.next_page_url);e.value.data.push(...a.data.data),e.value.next_page_url=a.data.next_page_url,e.value.current_page=a.data.current_page}catch(a){console.log(a.message)}c.value=!1},loading:c}}},V={key:0,class:"dashboard-item"},F=s("h3",null,"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",-1),D={class:"rating-position"},E={class:"rating-title"},M={class:"rating-name"},P={class:"rating-nickname"},Q={class:"rating-score"},S={class:"jcc"};function q(c,r,e,t,a,x){const g=h("AppLoader");return t.data?(o(),i("div",V,[t.loading?(o(),y(g,{key:0})):_("",!0),F,(o(!0),i(f,null,k(t.data.data,(n,u)=>(o(),i("div",{class:"rating-item",key:n.user_id},[s("div",D,"#"+d(u+1),1),s("div",E,[s("div",M,[s("div",P,d(n.name),1)])]),s("div",Q,d(n.total),1)]))),128)),s("div",S,[t.data.current_page<t.data.last_page?(o(),i("div",{key:0,class:"btn btn-default btn-settings-280 mt10",onClick:r[0]||(r[0]=(...n)=>t.load&&t.load(...n))},"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435")):_("",!0)])])):_("",!0)}const ea=v(T,[["render",q]]),z={name:"AppUniversityRating",components:{AppLoader:p},setup(){const c=l(!1),r=l("/api/rating/university"),e=l(!1);return m(async()=>{try{const a=await axios.get(r.value);e.value=a.data}catch(a){console.log(a.message)}}),{data:e,load:async()=>{c.value=!0;try{const a=await axios.get(e.value.next_page_url);e.value.data.push(...a.data.data),e.value.next_page_url=a.data.next_page_url,e.value.current_page=a.data.current_page}catch(a){console.log(a.message)}c.value=!1},loading:c}}},G={key:0,class:"dashboard-item"},H=s("h3",null,"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0441\u043A\u0438\u0439 \u0437\u0430\u0447\u0435\u0442",-1),I={class:"rating-position"},J={class:"rating-title"},K={class:"rating-name"},O={class:"rating-nickname"},W={class:"rating-score"},X={class:"jcc"};function Y(c,r,e,t,a,x){const g=h("AppLoader");return t.data?(o(),i("div",G,[t.loading?(o(),y(g,{key:0})):_("",!0),H,(o(!0),i(f,null,k(t.data.data,(n,u)=>(o(),i("div",{class:"rating-item",key:n.user_id},[s("div",I,"#"+d(u+1),1),s("div",J,[s("div",K,[s("div",O,d(n.name),1)])]),s("div",W,d(n.total),1)]))),128)),s("div",X,[t.data.current_page<t.data.last_page?(o(),i("div",{key:0,class:"btn btn-default btn-settings-280 mt10",onClick:r[0]||(r[0]=(...n)=>t.load&&t.load(...n))},"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435")):_("",!0)])])):_("",!0)}const sa=v(z,[["render",Y]]);export{ta as A,ea as a,sa as b};
