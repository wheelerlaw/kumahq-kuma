var C=Object.defineProperty;var O=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>(O(e,typeof t!="symbol"?t+"":t,n),n);import{s as M}from"./store-866e3b85.js";const V="modulepreload",b=function(e,t){return new URL(e,t).href},T={},o=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=b(i,s),i in T)return;T[i]=!0;const a=i.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!s)for(let _=r.length-1;_>=0;_--){const d=r[_];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":V,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((_,d)=>{c.addEventListener("load",_),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};var E=new Map,R=new Map,B=new Map,m;(function(e){e[e.Constant=0]="Constant",e[e.Instance=1]="Instance",e[e.Factory=2]="Factory"})(m||(m={}));var l;(function(e){e[e.Container=0]="Container",e[e.Resolution=1]="Resolution",e[e.Singleton=2]="Singleton",e[e.Transient=3]="Transient"})(l||(l={}));var k=class{constructor(e){this.impl=e,this.type=m.Constant}},K=class{constructor(e){this.impl=e,this.type=m.Factory}},N=e=>e.type===m.Factory,f=class{constructor(e){this.impl=e,this.type=m.Instance}},$=class extends f{constructor(){super(...arguments),this.scope=l.Container,this.cache=new WeakMap}},z=class extends f{constructor(){super(...arguments),this.scope=l.Resolution}},q=class extends f{constructor(e){super(e),this.impl=e,this.scope=l.Singleton}},x=class extends f{constructor(){super(...arguments),this.scope=l.Transient}},F=e=>e.type===m.Instance,j=e=>e.scope===l.Container,G=e=>e.scope===l.Resolution,Z=e=>e.scope===l.Singleton,H=e=>Symbol(e),L=e=>{const t=Symbol(e);return{__t:null,__d:e,__s:t,__o:!1,optional:{__t:null,__d:e,__s:t,__o:!0}}},h=class{constructor(){this.parent=null,this.map=new Map}set(e,t,n=h.notag){const s=this.map.get(t.__s);s?s.set(n,e):this.map.set(t.__s,new Map().set(n,e))}find(e,t,n){const s=this.map.get(e.__s);if(s!==void 0){if(n){const r=s.get(n);if(r)return r}if(t)for(let r=0,i=t.length;r<i;r+=1){const a=s.get(t[r]);if(a)return a}return s.get(h.notag)}}resolve(e,t,n,s){const r=this.find(e,n,s);return r===void 0?this.parent?this.parent.resolve(e,t,n,s):null:r instanceof h?(t.vaults.push(r),r.resolve(e,t,n,s)):r}get(e,t,n,s){const r=this.resolve(e,t,n,s);if(r)return r;for(let i=0,a=t.vaults,u=a.length;i<u;i+=1){const y=a[i].resolve(e,t,n,s);if(y)return y}return null}from(e){const t=new h;return t.parent=this.parent,this.map.forEach((n,s)=>{t.map.set(s,e(n))}),t}clone(){return this.from(e=>new Map(e))}},D=h;D.notag=H("NO_TAG");var W=class{constructor(e,t,n,s){this.vault=e,this.tokens=t,this.getVault=n,this.condition=s}from(e){const{tokens:t}=this;for(let n=0,s=t.length;n<s;n+=1)this.vault.set(this.getVault(e),t[n],this.condition)}},Q=class{constructor(e,t,n,s){this.vault=e,this.impl=t,this.token=n,this.condition=s}inContainerScope(){this.set($)}inResolutionScope(){this.set(z)}inSingletonScope(){this.set(q)}inTransientScope(){this.set(x)}set(e){this.vault.set(new e(this.impl),this.token,this.condition)}},Y=class{constructor(e,t,n){this.vault=e,this.token=t,this.condition=n}toConstant(e){this.vault.set(new k(e),this.token,this.condition)}toFactory(e,t){this.vault.set(new K({creator:e,initializer:t}),this.token,this.condition)}toInstance(e){return new Q(this.vault,e,this.token,this.condition)}},w=class{constructor(e,t){this.vault=e,this.condition=t}static vault(e){return e.vault}bind(e){return new Y(this.vault,e,this.condition)}use(...e){return new W(this.vault,e,w.vault,this.condition)}},J=class extends w{when(e){return new w(this.vault,e)}},X=class extends J{constructor(){super(new D)}},S=class{constructor(e=new Map,t=[]){this.instances=e,this.vaults=t}split(){return new S(this.instances,this.vaults.slice())}},v=class extends X{constructor(){super(),this.snapshot=null}extend(e){return this.vault.parent=e===null?null:e.vault,this}clone(){const e=new v;return e.vault=this.vault.clone(),e}get(e,t){return this.resolveToken(e,t)}resolveTokens(e,t,n,s){return e.map(r=>this.resolveToken(r,n,s,t.split()))}resolveToken(e,t,n,s=new S){const r=this.vault.get(e,s,t,n);if(r)return this.resolveBinding(r,s);if(!e.__o)throw new Error(`No matching bindings found for '${e.__d}' token.`)}resolveBinding(e,t){return F(e)?Z(e)?this.resolveCache(e,t,()=>e.cache,n=>{e.cache=n}):j(e)?this.resolveCache(e,t,()=>e.cache.get(this.vault),n=>{e.cache.set(this.vault,n)}):G(e)?this.resolveCache(e,t,()=>t.instances.get(e),n=>{t.instances.set(e,n)}):this.createInstance(e.impl,t):N(e)?(...n)=>{const s=this.createInstance(e.impl.creator,t);return s instanceof Promise?s.then(r=>v.resolveInitialization(r,n,e.impl.initializer)):v.resolveInitialization(s,n,e.impl.initializer)}:e.impl}resolveCache(e,t,n,s){const r=n();if(r!==void 0)return r;const i=this.createInstance(e.impl,t);return s(i),i}createInstance(e,t){const n=this.getParameters(e,t),s=E.get(e);if(s!==void 0)return s?e(...n):new e(...n);try{const r=e(...n);return E.set(e,!0),r}catch{const i=new e(...n);return E.set(e,!1),i}}getParameters(e,t){const n=R.get(e);if(n)return this.resolveTokens(n,t,B.get(e),e);if(e.length===0)return[];throw new Error(`Missing required 'injected' registration of '${e.name}'`)}static resolveInitialization(e,t,n){const s=n==null?void 0:n(e,...t);return s instanceof Promise?s.then(()=>e):e}},ee=()=>new v,te=(e,...t)=>(R.set(e,t),e);const ne=(e,t)=>t.get(e),se=(e,t=g)=>e.map(n=>()=>ne(n,t)),g=ee(),re=e=>g.get(e),P=(e,t)=>{const n=L(t.description);return g.bind(n).toInstance(e).inSingletonScope(),n},ie=(e,t)=>{const n=L(t.description);return g.bind(n).toConstant(e),n},oe={baseGuiPath:"",apiUrl:"/",version:"1.7.0"};class U{constructor(t){I(this,"env");let n=t;const s=(a,u="")=>this.var(a,(n==null?void 0:n[a])??u),r=le(),i=ae(s("KUMA_VERSION",r.version));n={...n,KUMA_UTM_QUERY_PARAMS:`utm_source=${s("KUMA_PRODUCT_NAME")}&utm_medium=${s("KUMA_PRODUCT_NAME")}-GUI`},this.env={...n,KUMA_INSTALL_URL:`${s("KUMA_INSTALL_URL")}?${s("KUMA_UTM_QUERY_PARAMS")}`,KUMA_DOCS_URL:`${s("KUMA_DOCS_URL")}/${i.patch==="0.0.0"?"dev":i.patch.replace(/\.\d+$/,".x")}`,KUMA_VERSION:i.pre,KUMA_API_URL:s("KUMA_API_URL")??r.apiUrl,KUMA_BASE_PATH:s("KUMA_BASE_PATH")??r.baseGuiPath}}var(t,n=""){var s;return((s=this.env)==null?void 0:s[t])??n}}function ae(e){const[t,n,...s]=e.split("."),[r,i]=s.join(".").split("-");return{major:t,minor:`${t}.${n}`,patch:`${t}.${n}.${r}`,pre:`${t}.${n}.${r}${i!==void 0?`-${i}`:""}`}}function le(){const e=document.querySelector("#kuma-config");if(e instanceof HTMLScriptElement)try{return JSON.parse(e.innerText.trim())}catch{}return oe}function p(e,t=0){const n=ce(e);return n!==void 0?parseInt(n):t}function ce(e){const t=Array.isArray(e)?e:[e];return t[t.length-1]??void 0}const pe=e=>[{path:"/404",name:"not-found",alias:"/:pathMatch(.*)*",meta:{title:"Item not found"},component:()=>o(()=>import("./AppNotFoundView-e9e6dbb1.js"),["./AppNotFoundView-e9e6dbb1.js","./kongponents.es-3df60cd6.js","./runtime-dom.esm-bundler-91b41870.js"],import.meta.url)},{path:"/",name:"home",meta:{title:"Overview"},component:()=>o(()=>import("./MainOverviewView-93c18345.js"),["./MainOverviewView-93c18345.js","./MeshResources-aa3a4471.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./Instance-292830fe.js","./kongponents.es-3df60cd6.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./ClientStorage-efe299d9.js","./_plugin-vue_export-helper-c27b6911.js","./MeshResources-b0bd4417.css","./MainOverviewView-e4354112.css"],import.meta.url)},{path:"/diagnostics",name:"diagnostics",meta:{title:"Diagnostics"},component:()=>o(()=>import("./DiagnosticsView-89f8aae2.js"),["./DiagnosticsView-89f8aae2.js","./kongponents.es-3df60cd6.js","./runtime-dom.esm-bundler-91b41870.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./ClientStorage-efe299d9.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js"],import.meta.url)},{path:"/zones",name:"zones",meta:{title:"Zones"},props:t=>({selectedZoneName:t.query.zone,offset:p(t.query.offset)}),component:()=>o(()=>import("./ZonesView-9d9fbf05.js"),["./ZonesView-9d9fbf05.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./dataplane-4aecf58f.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./ClientStorage-efe299d9.js","./AccordionItem-5cf952b5.js","./_plugin-vue_export-helper-c27b6911.js","./AccordionItem-2e8063db.css","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./DataOverview-07eb4ec1.js","./datadogLogEvents-4578cfa7.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./FrameSkeleton-256a9a83.js","./LabelList.vue_vue_type_style_index_0_lang-4346c84c.js","./LabelList-82c1e9de.css","./MultizoneInfo.vue_vue_type_script_setup_true_lang-f8d86b15.js","./SubscriptionHeader.vue_vue_type_script_setup_true_lang-bf23b0a3.js","./SubscriptionHeader-aa086b4b.css","./TabsWidget-aec0fabd.js","./TabsWidget-4d82abdb.css","./WarningsWidget.vue_vue_type_script_setup_true_lang-213c05f4.js"],import.meta.url)},{path:"/zone-ingresses",name:"zoneingresses",meta:{title:"Zone ingresses"},props:t=>({selectedZoneIngressName:t.query.zoneIngress,offset:p(t.query.offset)}),component:()=>o(()=>import("./ZoneIngresses-e379a6e5.js"),["./ZoneIngresses-e379a6e5.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./ClientStorage-efe299d9.js","./AccordionItem-5cf952b5.js","./_plugin-vue_export-helper-c27b6911.js","./AccordionItem-2e8063db.css","./DataOverview-07eb4ec1.js","./datadogLogEvents-4578cfa7.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./EnvoyData-f5c11e02.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./EnvoyData-55ab94cb.css","./FrameSkeleton-256a9a83.js","./LabelList.vue_vue_type_style_index_0_lang-4346c84c.js","./LabelList-82c1e9de.css","./MultizoneInfo.vue_vue_type_script_setup_true_lang-f8d86b15.js","./SubscriptionHeader.vue_vue_type_script_setup_true_lang-bf23b0a3.js","./SubscriptionHeader-aa086b4b.css","./TabsWidget-aec0fabd.js","./TabsWidget-4d82abdb.css"],import.meta.url)},{path:"/zoneegresses",name:"zoneegresses",meta:{title:"Zone egresses"},props:t=>({selectedZoneEgressName:t.query.zoneEgress,offset:p(t.query.offset)}),component:()=>o(()=>import("./ZoneEgresses-64c80716.js"),["./ZoneEgresses-64c80716.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./AccordionItem-5cf952b5.js","./_plugin-vue_export-helper-c27b6911.js","./AccordionItem-2e8063db.css","./DataOverview-07eb4ec1.js","./datadogLogEvents-4578cfa7.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./EnvoyData-f5c11e02.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./ClientStorage-efe299d9.js","./CodeBlock-7d9027b4.css","./EnvoyData-55ab94cb.css","./FrameSkeleton-256a9a83.js","./LabelList.vue_vue_type_style_index_0_lang-4346c84c.js","./LabelList-82c1e9de.css","./SubscriptionHeader.vue_vue_type_script_setup_true_lang-bf23b0a3.js","./SubscriptionHeader-aa086b4b.css","./TabsWidget-aec0fabd.js","./TabsWidget-4d82abdb.css"],import.meta.url)},{path:"/mesh/:mesh",children:[{path:"",name:"mesh-detail-view",meta:{title:"Mesh overview"},component:()=>o(()=>import("./MeshOverviewView-fb11b3d7.js"),["./MeshOverviewView-fb11b3d7.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./ContentWrapper-b0fa1a61.js","./_plugin-vue_export-helper-c27b6911.js","./ContentWrapper-fe2d0f8d.css","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./ClientStorage-efe299d9.js","./MeshResources-aa3a4471.js","./Instance-292830fe.js","./MeshResources-b0bd4417.css","./LabelList.vue_vue_type_style_index_0_lang-4346c84c.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./LabelList-82c1e9de.css","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./index-a8834e9c.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./MeshOverviewView-e887824d.css"],import.meta.url)},{path:"gateways",children:[{path:"",name:"gateway-list-view",meta:{title:"Gateways"},props:t=>({selectedDppName:t.query.gateway,gatewayType:t.query.gatewayType==="all"?"true":t.query.gatewayType,offset:p(t.query.offset),isGatewayView:!0}),component:()=>o(()=>import("./DataPlaneListView-7cd7f6a8.js"),["./DataPlaneListView-7cd7f6a8.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./DataPlaneList-f542995d.js","./datadogLogEvents-4578cfa7.js","./kongponents.es-3df60cd6.js","./ClientStorage-efe299d9.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./ContentWrapper-b0fa1a61.js","./_plugin-vue_export-helper-c27b6911.js","./ContentWrapper-fe2d0f8d.css","./DataOverview-07eb4ec1.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./index-a8834e9c.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./DataPlaneList-d74cf059.css","./DataPlaneListView-c9bf2e34.css"],import.meta.url)},{path:":dataPlane",name:"gateway-detail-view",meta:{title:"Gateway",parent:"gateway-list-view",breadcrumbTitleParam:"dataPlane"},component:()=>o(()=>import("./DataPlaneDetailView-8f399282.js"),["./DataPlaneDetailView-8f399282.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./ClientStorage-efe299d9.js","./kongponents.es-3df60cd6.js","./index-a8834e9c.js","./AccordionItem-5cf952b5.js","./_plugin-vue_export-helper-c27b6911.js","./AccordionItem-2e8063db.css","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./EnvoyData-f5c11e02.js","./EnvoyData-55ab94cb.css","./LabelList.vue_vue_type_style_index_0_lang-4346c84c.js","./LabelList-82c1e9de.css","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TabsWidget-aec0fabd.js","./datadogLogEvents-4578cfa7.js","./QueryParameter-70743f73.js","./TabsWidget-4d82abdb.css","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./SubscriptionHeader.vue_vue_type_script_setup_true_lang-bf23b0a3.js","./SubscriptionHeader-aa086b4b.css","./WarningsWidget.vue_vue_type_script_setup_true_lang-213c05f4.js","./DataPlaneDetailView-b6678527.css"],import.meta.url)}]},{path:"data-planes",children:[{path:"",name:"data-plane-list-view",meta:{title:"Data plane proxies"},props:t=>({selectedDppName:t.query.dpp,offset:p(t.query.offset)}),component:()=>o(()=>import("./DataPlaneListView-7cd7f6a8.js"),["./DataPlaneListView-7cd7f6a8.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./DataPlaneList-f542995d.js","./datadogLogEvents-4578cfa7.js","./kongponents.es-3df60cd6.js","./ClientStorage-efe299d9.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./ContentWrapper-b0fa1a61.js","./_plugin-vue_export-helper-c27b6911.js","./ContentWrapper-fe2d0f8d.css","./DataOverview-07eb4ec1.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./index-a8834e9c.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./DataPlaneList-d74cf059.css","./DataPlaneListView-c9bf2e34.css"],import.meta.url)},{path:":dataPlane",name:"data-plane-detail-view",meta:{title:"Data plane proxy",parent:"data-plane-list-view",breadcrumbTitleParam:"dataPlane"},component:()=>o(()=>import("./DataPlaneDetailView-8f399282.js"),["./DataPlaneDetailView-8f399282.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./ClientStorage-efe299d9.js","./kongponents.es-3df60cd6.js","./index-a8834e9c.js","./AccordionItem-5cf952b5.js","./_plugin-vue_export-helper-c27b6911.js","./AccordionItem-2e8063db.css","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./EnvoyData-f5c11e02.js","./EnvoyData-55ab94cb.css","./LabelList.vue_vue_type_style_index_0_lang-4346c84c.js","./LabelList-82c1e9de.css","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TabsWidget-aec0fabd.js","./datadogLogEvents-4578cfa7.js","./QueryParameter-70743f73.js","./TabsWidget-4d82abdb.css","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./SubscriptionHeader.vue_vue_type_script_setup_true_lang-bf23b0a3.js","./SubscriptionHeader-aa086b4b.css","./WarningsWidget.vue_vue_type_script_setup_true_lang-213c05f4.js","./DataPlaneDetailView-b6678527.css"],import.meta.url)}]},{path:"services",children:[{path:"",name:"service-list-view",meta:{title:"Services"},props:t=>({selectedServiceName:t.query.service,offset:p(t.query.offset)}),component:()=>o(()=>import("./ServiceListView-37ebf012.js"),["./ServiceListView-37ebf012.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./ContentWrapper-b0fa1a61.js","./_plugin-vue_export-helper-c27b6911.js","./ContentWrapper-fe2d0f8d.css","./DataOverview-07eb4ec1.js","./kongponents.es-3df60cd6.js","./datadogLogEvents-4578cfa7.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./ServiceSummary-dcb79b12.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./index-a8834e9c.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./ClientStorage-efe299d9.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./ServiceSummary-af890f41.css"],import.meta.url)},{path:":service",name:"service-detail-view",meta:{title:"Internal service",parent:"service-list-view",breadcrumbTitleParam:"service"},props:t=>({selectedDppName:t.query.dpp}),component:()=>o(()=>import("./ServiceDetailView-7ceef28f.js"),["./ServiceDetailView-7ceef28f.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./ClientStorage-efe299d9.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./kongponents.es-3df60cd6.js","./ErrorBlock-46fedade.js","./_plugin-vue_export-helper-c27b6911.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./DataPlaneList-f542995d.js","./datadogLogEvents-4578cfa7.js","./ContentWrapper-b0fa1a61.js","./ContentWrapper-fe2d0f8d.css","./DataOverview-07eb4ec1.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./index-a8834e9c.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./DataPlaneList-d74cf059.css","./ServiceSummary-dcb79b12.js","./ServiceSummary-af890f41.css"],import.meta.url)}]},{path:"policies",name:"policies",meta:{title:"Policies"},redirect:t=>{let n=e.state.policyTypes.find(s=>e.state.sidebar.insights.mesh.policies[s.name]!==0);return n===void 0&&(n=e.state.policyTypes[0]),{...t,params:{...t.params,policyPath:n.path},name:"policy"}}},{path:"policies/:policyPath",name:"policy",meta:{parent:"policies"},component:()=>o(()=>import("./PolicyView-151dc136.js"),["./PolicyView-151dc136.js","./vue-router-573afc44.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./kumaApi-db784568.js","./QueryParameter-70743f73.js","./store-866e3b85.js","./vuex.esm-bundler-df5bd11e.js","./dataplane-4aecf58f.js","./ClientStorage-efe299d9.js","./DataOverview-07eb4ec1.js","./datadogLogEvents-4578cfa7.js","./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js","./ErrorBlock-46fedade.js","./_plugin-vue_export-helper-c27b6911.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./TagList-91d1133a.js","./TagList-27d87a7b.css","./DataOverview-cc37ba93.css","./FrameSkeleton-256a9a83.js","./LabelList.vue_vue_type_style_index_0_lang-4346c84c.js","./LabelList-82c1e9de.css","./TabsWidget-aec0fabd.js","./TabsWidget-4d82abdb.css","./YamlView.vue_vue_type_script_setup_true_lang-d444e9d2.js","./index-a8834e9c.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./CodeBlock-7d9027b4.css","./PolicyView-143a82ea.css"],import.meta.url),props:t=>{const n=e.state.policyTypesByPath[t.params.policyPath];return t.meta.title=n.name,{policyPath:t.params.policyPath,selectedPolicyName:t.query.policy,offset:p(t.query.offset)}}}]},{path:"/onboarding",redirect:{name:"onboarding-welcome"},component:()=>o(()=>import("./ShellEmpty-bbe8ea02.js"),["./ShellEmpty-bbe8ea02.js","./runtime-dom.esm-bundler-91b41870.js","./_plugin-vue_export-helper-c27b6911.js","./ShellEmpty-6642bce4.css"],import.meta.url),children:[{path:"welcome",name:"onboarding-welcome",meta:{title:"Welcome to Kuma!",onboardingProcess:!0},component:()=>o(()=>import("./WelcomeView-f51e87f7.js"),["./WelcomeView-f51e87f7.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./constants-31fdaf55.js","./kongponents.es-3df60cd6.js","./_plugin-vue_export-helper-c27b6911.js","./OnboardingNavigation-0bca1fcc.js","./OnboardingNavigation-8e0e24c9.css","./WelcomeView-81c1745d.css"],import.meta.url)},{path:"deployment-types",name:"onboarding-deployment-types",meta:{title:"Deployment Types",onboardingProcess:!0},component:()=>o(()=>import("./DeploymentTypes-eda87d9d.js"),["./DeploymentTypes-eda87d9d.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./constants-31fdaf55.js","./OnboardingNavigation-0bca1fcc.js","./_plugin-vue_export-helper-c27b6911.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css","./DeploymentTypes-a5506858.css"],import.meta.url)},{path:"configuration-types",name:"onboarding-configuration-types",meta:{title:"Configuration Types",onboardingProcess:!0},component:()=>o(()=>import("./ConfigurationTypes-2f72beee.js"),["./ConfigurationTypes-2f72beee.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./constants-31fdaf55.js","./OnboardingNavigation-0bca1fcc.js","./_plugin-vue_export-helper-c27b6911.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css","./ConfigurationTypes-3e295b7d.css"],import.meta.url)},{path:"multi-zone",name:"onboarding-multi-zone",meta:{title:"Multizone",onboardingProcess:!0},component:()=>o(()=>import("./MultiZoneView-ded03120.js"),["./MultiZoneView-ded03120.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./kumaApi-db784568.js","./LoadingBox-695e756c.js","./_plugin-vue_export-helper-c27b6911.js","./LoadingBox-c2da9e95.css","./OnboardingNavigation-0bca1fcc.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css","./store-866e3b85.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./ClientStorage-efe299d9.js"],import.meta.url)},{path:"create-mesh",name:"onboarding-create-mesh",meta:{title:"Create the Mesh",onboardingProcess:!0},component:()=>o(()=>import("./CreateMesh-52ef7c88.js"),["./CreateMesh-52ef7c88.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./constants-31fdaf55.js","./OnboardingNavigation-0bca1fcc.js","./_plugin-vue_export-helper-c27b6911.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css"],import.meta.url)},{path:"add-services",name:"onboarding-add-services",meta:{title:"Add new services",onboardingProcess:!0},component:()=>o(()=>import("./AddNewServices-8e40d03c.js"),["./AddNewServices-8e40d03c.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./OnboardingNavigation-0bca1fcc.js","./kongponents.es-3df60cd6.js","./_plugin-vue_export-helper-c27b6911.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css","./AddNewServices-1b605ca2.css"],import.meta.url)},{path:"add-services-code",name:"onboarding-add-services-code",meta:{title:"Add new services",onboardingProcess:!0},component:()=>o(()=>import("./AddNewServicesCode-0d894fca.js"),["./AddNewServicesCode-0d894fca.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./index-a8834e9c.js","./kongponents.es-3df60cd6.js","./kumaApi-db784568.js","./constants-31fdaf55.js","./kumaDpServerUrl-b6bb30c6.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./ClientStorage-efe299d9.js","./CodeBlock-7d9027b4.css","./LoadingBox-695e756c.js","./_plugin-vue_export-helper-c27b6911.js","./LoadingBox-c2da9e95.css","./OnboardingNavigation-0bca1fcc.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css"],import.meta.url)},{path:"dataplanes-overview",name:"onboarding-dataplanes-overview",meta:{title:"Data plane overview",onboardingProcess:!0},component:()=>o(()=>import("./DataplanesOverview-7cc4852d.js"),["./DataplanesOverview-7cc4852d.js","./kongponents.es-3df60cd6.js","./runtime-dom.esm-bundler-91b41870.js","./constants-31fdaf55.js","./dataplane-4aecf58f.js","./helpers-32595d9f.js","./kumaApi-db784568.js","./LoadingBox-695e756c.js","./_plugin-vue_export-helper-c27b6911.js","./LoadingBox-c2da9e95.css","./StatusBadge-81464ebd.js","./StatusBadge-43351938.css","./OnboardingNavigation-0bca1fcc.js","./vuex.esm-bundler-df5bd11e.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css","./DataplanesOverview-0c89c176.css"],import.meta.url)},{path:"completed",name:"onboarding-completed",meta:{title:"Completed",onboardingProcess:!0},component:()=>o(()=>import("./CompletedView-ca590809.js"),["./CompletedView-ca590809.js","./OnboardingNavigation-0bca1fcc.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./_plugin-vue_export-helper-c27b6911.js","./OnboardingNavigation-8e0e24c9.css","./OnboardingPage-0de7feb6.js","./OnboardingPage-b97c066f.css"],import.meta.url)}]},{path:"/wizard",name:"wizard",children:[{path:"mesh",name:"create-mesh",meta:{title:"Create a new mesh",wizardProcess:!0},component:()=>o(()=>import("./Mesh-545ac9d4.js"),["./Mesh-545ac9d4.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./kumaApi-db784568.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./ClientStorage-efe299d9.js","./CodeBlock-7d9027b4.css","./formatForCLI-4055776e.js","./index-a8834e9c.js","./EntityScanner-9b947b61.js","./_plugin-vue_export-helper-c27b6911.js","./EntityScanner-4a24290d.css","./TabsWidget-aec0fabd.js","./datadogLogEvents-4578cfa7.js","./QueryParameter-70743f73.js","./ErrorBlock-46fedade.js","./ErrorBlock-8c979915.css","./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js","./TabsWidget-4d82abdb.css","./store-866e3b85.js","./dataplane-4aecf58f.js","./Mesh-935daaef.css"],import.meta.url)},{path:"kubernetes-dataplane",name:"kubernetes-dataplane",meta:{title:"Create a new data plane proxy on Kubernetes",wizardProcess:!0},component:()=>o(()=>import("./DataplaneKubernetes-1e0770d0.js"),["./DataplaneKubernetes-1e0770d0.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./kongponents.es-3df60cd6.js","./kumaApi-db784568.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./ClientStorage-efe299d9.js","./CodeBlock-7d9027b4.css","./formatForCLI-4055776e.js","./index-a8834e9c.js","./EntityScanner-9b947b61.js","./_plugin-vue_export-helper-c27b6911.js","./EntityScanner-4a24290d.css","./EnvironmentSwitcher-03d5770b.js","./EnvironmentSwitcher-edfe74c6.css","./DataplaneKubernetes-64b277e1.css"],import.meta.url)},{path:"universal-dataplane",name:"universal-dataplane",meta:{title:"Create a new data plane proxy on Universal",wizardProcess:!0},component:()=>o(()=>import("./DataplaneUniversal-a8045580.js"),["./DataplaneUniversal-a8045580.js","./vuex.esm-bundler-df5bd11e.js","./runtime-dom.esm-bundler-91b41870.js","./index-a8834e9c.js","./kongponents.es-3df60cd6.js","./kumaApi-db784568.js","./kumaDpServerUrl-b6bb30c6.js","./helpers-32595d9f.js","./constants-31fdaf55.js","./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js","./_commonjsHelpers-87174ba5.js","./ClientStorage-efe299d9.js","./CodeBlock-7d9027b4.css","./EntityScanner-9b947b61.js","./_plugin-vue_export-helper-c27b6911.js","./EntityScanner-4a24290d.css","./EnvironmentSwitcher-03d5770b.js","./EnvironmentSwitcher-edfe74c6.css","./DataplaneUniversal-46498f5e.css"],import.meta.url)}]}],A={EnvVars:ie({KUMA_PRODUCT_NAME:"Kuma",KUMA_FEEDBACK_URL:"https://github.com/kumahq/kuma/issues/new/choose",KUMA_CHAT_URL:"https://kuma-mesh.slack.com",KUMA_INSTALL_URL:"https://kuma.io/install/latest/",KUMA_DOCS_URL:"https://kuma.io/docs"},{description:"EnvVars"}),Env:P(U,{description:"Env"}),env:P(()=>e=>re(A.Env).var(e),{description:"env"}),routes:P(()=>pe(M),{description:"routes"})};te(U,A.EnvVars);const[_e]=se([A.env]);export{A as T,o as _,re as g,_e as u};