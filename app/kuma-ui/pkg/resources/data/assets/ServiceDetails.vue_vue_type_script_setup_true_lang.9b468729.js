import{d as x,cL as E,M as m,h as f,i as e,e as y,w as $,N as n,b as u,p as S,t as c,F as M,k as R,r as D,u as b,x as T,s as C,o as i,f as L,_ as q,q as j,cy as O,L as g,cM as k,K as w}from"./index.f2463021.js";import{E as A}from"./EntityTag.1082faf5.js";import{E as B}from"./EntityURLControl.210b712d.js";import{Y as N}from"./YamlView.dbf4ab2f.js";import{_ as F}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.79e60fc9.js";import{E as K}from"./ErrorBlock.6b7b6a0a.js";import{_ as U}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.92dd8129.js";const h=s=>(b("data-v-f07c944d"),s=s(),T(),s),Y={class:"entity-summary entity-section-list"},z={class:"entity-title"},G=h(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),H={class:"definition"},J=h(()=>e("span",null,"Mesh:",-1)),P={class:"definition"},Q=h(()=>e("span",null,"Address:",-1)),W={class:"definition"},X=h(()=>e("span",null,"TLD:",-1)),Z={key:0},ee=h(()=>e("h4",null,"Tags",-1)),te={class:"tag-list"},se=x({__name:"ExternalServiceDetails",props:{externalService:{type:Object,required:!0}},setup(s){const t=s,o=E(),a=m(()=>({name:"external-service-detail-view",params:{service:t.externalService.name,mesh:t.externalService.mesh}})),r=m(()=>Object.entries(t.externalService.tags).map(([_,d])=>({label:_,value:d}))),l=m(()=>C(t.externalService));return(_,d)=>{const v=D("router-link");return i(),f("div",Y,[e("h3",z,[G,y(v,{to:n(a)},{default:$(()=>[L(c(s.externalService.name),1)]),_:1},8,["to"]),n(o).name!==n(a).name?(i(),u(B,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",H,[J,e("span",null,c(s.externalService.mesh),1)]),e("div",P,[Q,e("span",null,c(t.externalService.networking.address),1)]),e("div",W,[X,e("span",null,c(t.externalService.networking.tls.enabled?"Enabled":"Disabled"),1)])]),n(r).length>0?(i(),f("section",Z,[ee,e("div",te,[(i(!0),f(M,null,R(n(r),(p,V)=>(i(),u(A,{key:V,tag:p},null,8,["tag"]))),128))])])):S("",!0),y(N,{content:n(l)},null,8,["content"])])}}});const ne=q(se,[["__scopeId","data-v-f07c944d"]]),I=s=>(b("data-v-cd95f11c"),s=s(),T(),s),ae={class:"entity-summary entity-section-list"},ie={class:"entity-title"},re=I(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),ce={class:"definition"},oe=I(()=>e("span",null,"Mesh:",-1)),le={class:"definition"},ue=I(()=>e("span",null,"Data planes:",-1)),_e=x({__name:"ServiceInsightDetails",props:{serviceInsight:{type:Object,required:!0}},setup(s){const t=s,o=E(),a=m(()=>({name:"service-insight-detail-view",params:{service:t.serviceInsight.name,mesh:t.serviceInsight.mesh}})),r=m(()=>O[t.serviceInsight.status]),l=m(()=>C(t.serviceInsight));return(_,d)=>{const v=D("router-link");return i(),f("div",ae,[e("h3",ie,[re,y(v,{to:n(a)},{default:$(()=>[L(c(s.serviceInsight.name),1)]),_:1},8,["to"]),e("div",{class:j(`status status--${n(r).appearance}`),"data-testid":"data-plane-status-badge"},c(n(r).title.toLowerCase()),3),n(o).name!==n(a).name?(i(),u(B,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",ce,[oe,e("span",null,c(s.serviceInsight.mesh),1)]),e("div",le,[ue,e("span",null,"Total: "+c(t.serviceInsight.dataplanes.total)+" (online: "+c(t.serviceInsight.dataplanes.online)+")",1)])]),y(N,{content:n(l)},null,8,["content"])])}}});const de=q(_e,[["__scopeId","data-v-cd95f11c"]]),Se=x({__name:"ServiceDetails",props:{type:{type:String,required:!0},name:{type:String,required:!0},mesh:{type:String,required:!0}},setup(s){const t=s,o=g(null),a=g(null),r=g(!0),l=g(null);k(()=>t.mesh,function(){_()}),k(()=>t.name,function(){_()}),_();async function _(){r.value=!0,l.value=null,o.value=null,a.value=null;const d=t.mesh,v=t.name;try{t.type==="ServiceInsight"?o.value=await w.getServiceInsight({mesh:d,name:v}):a.value=await w.getExternalService({mesh:d,name:v})}catch(p){p instanceof Error?l.value=p:console.error(p)}finally{r.value=!1}}return(d,v)=>r.value?(i(),u(U,{key:0})):l.value!==null?(i(),u(K,{key:1,error:l.value},null,8,["error"])):o.value!==null?(i(),u(de,{key:2,"service-insight":o.value},null,8,["service-insight"])):a.value!==null?(i(),u(ne,{key:3,"external-service":a.value},null,8,["external-service"])):(i(),u(F,{key:4}))}});export{Se as _};