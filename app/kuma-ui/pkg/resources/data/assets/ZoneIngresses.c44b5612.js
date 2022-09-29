import{_ as F,T as Z,U as B,P as K,l as M,K as h,V as N,X as O,n as R,h as g,b as m,w as e,r as s,o as a,e as o,p as b,i as l,t as _,F as f,k as v,f as V}from"./index.f2463021.js";import{S as U,a as H}from"./SubscriptionHeader.a69b1f1e.js";import{M as q}from"./MultizoneInfo.b5cefde3.js";import{g as W}from"./tableDataUtils.233f95a0.js";import{F as G}from"./FrameSkeleton.2e66f46d.js";import{D as P}from"./DataOverview.e6547ee7.js";import{E as X}from"./EntityURLControl.210b712d.js";import{T as j}from"./TabsWidget.817a2fd6.js";import{L as J}from"./LabelList.c9504cac.js";import{E as Q}from"./EnvoyData.2847ea67.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.79e60fc9.js";import"./ErrorBlock.6b7b6a0a.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.92dd8129.js";import"./CodeBlock.f31221ad.js";const Y={name:"ZoneIngresses",components:{EnvoyData:Q,FrameSkeleton:G,DataOverview:P,TabsWidget:j,LabelList:J,AccordionList:Z,AccordionItem:B,SubscriptionDetails:U,SubscriptionHeader:H,MultizoneInfo:q,EntityURLControl:X},data(){return{isLoading:!0,isEmpty:!1,hasError:!1,empty_state:{title:"No Data",message:"There are no Zone Ingresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Ingress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:K,next:null,subscriptionsReversed:[]}},computed:{...M({multicluster:"config/getMulticlusterStatus"})},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.hasError=!1,this.init()}},beforeMount(){this.init()},methods:{init(){this.multicluster&&this.loadData()},tableAction(i){const r=i;this.getEntity(r)},async loadData(i="0"){this.isLoading=!0,this.isEmpty=!1;const r=this.$route.query.ns||null;try{const{data:n,next:u}=await W({getAllEntities:h.getAllZoneIngressOverviews.bind(h),getSingleEntity:h.getZoneIngressOverview.bind(h),size:this.pageSize,offset:i,query:r});this.next=u,n.length?(this.isEmpty=!1,this.rawData=n,this.getEntity({name:n[0].name}),this.tableData.data=n.map(t=>{const{zoneIngressInsight:p={}}=t;return{...t,...N(p)}})):(this.tableData.data=[],this.isEmpty=!0)}catch(n){this.hasError=!0,this.isEmpty=!0,console.error(n)}finally{this.isLoading=!1}},getEntity(i){const r=["type","name"],n=this.rawData.find(t=>t.name===i.name),u=O(n,"zoneIngressInsight.subscriptions",[]);this.subscriptionsReversed=Array.from(u).reverse(),this.entity=R(n,r)}}},$={class:"zoneingresses"},tt=l("span",{class:"custom-control-icon"}," \u2190 ",-1),et=V(" View All ");function st(i,r,n,u,t,p){const E=s("MultizoneInfo"),D=s("KButton"),L=s("DataOverview"),S=s("EntityURLControl"),I=s("LabelList"),z=s("SubscriptionHeader"),w=s("SubscriptionDetails"),k=s("AccordionItem"),A=s("AccordionList"),x=s("KCard"),y=s("EnvoyData"),C=s("TabsWidget"),T=s("FrameSkeleton");return a(),g("div",$,[i.multicluster===!1?(a(),m(E,{key:0})):(a(),m(T,{key:1},{default:e(()=>[o(L,{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"table-data":t.tableData,"table-data-is-empty":t.isEmpty,next:t.next,onTableAction:p.tableAction,onLoadData:r[0]||(r[0]=c=>p.loadData(c))},{additionalControls:e(()=>[i.$route.query.ns?(a(),m(D,{key:0,class:"back-button",appearance:"primary",to:{name:"zoneingresses"}},{default:e(()=>[tt,et]),_:1})):b("",!0)]),_:1},8,["page-size","has-error","is-loading","empty-state","table-data","table-data-is-empty","next","onTableAction"]),t.isEmpty===!1?(a(),m(C,{key:0,"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"},{tabHeader:e(()=>[l("div",null,[l("h3",null," Zone Ingress: "+_(t.entity.name),1)]),l("div",null,[o(S,{name:t.entity.name},null,8,["name"])])]),overview:e(()=>[o(I,null,{default:e(()=>[l("div",null,[l("ul",null,[(a(!0),g(f,null,v(t.entity,(c,d)=>(a(),g("li",{key:d},[l("h4",null,_(d),1),l("p",null,_(c),1)]))),128))])])]),_:1})]),insights:e(()=>[o(x,{"border-variant":"noBorder"},{body:e(()=>[o(A,{"initially-open":0},{default:e(()=>[(a(!0),g(f,null,v(t.subscriptionsReversed,(c,d)=>(a(),m(k,{key:d},{"accordion-header":e(()=>[o(z,{details:c},null,8,["details"])]),"accordion-content":e(()=>[o(w,{details:c,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":e(()=>[o(y,{"data-path":"xds","zone-ingress-name":t.entity.name},null,8,["zone-ingress-name"])]),"envoy-stats":e(()=>[o(y,{"data-path":"stats","zone-ingress-name":t.entity.name},null,8,["zone-ingress-name"])]),"envoy-clusters":e(()=>[o(y,{"data-path":"clusters","zone-ingress-name":t.entity.name},null,8,["zone-ingress-name"])]),_:1},8,["has-error","is-loading","tabs"])):b("",!0)]),_:1}))])}const _t=F(Y,[["render",st]]);export{_t as default};