"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[657],{6693:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hide?t._e():s("ihris-element",{attrs:{edit:t.edit,loading:t.loading},scopedSlots:t._u([{key:"form",fn:function(){return[s("v-autocomplete",{attrs:{loading:t.loading,label:t.$t("App.fhir-resources-texts."+t.display),items:t.items.filter((function(t){return!t.code.includes("(deactivated)")})),outlined:"","hide-details":"auto","error-messages":t.errors,"item-text":"display","item-value":"code",disabled:t.disabled,rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.$t("App.fhir-resources-texts."+t.display))+" "),t.required?s("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}],null,!1,3110236810),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+t.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.displayValue)+" ")]},proxy:!0}],null,!1,2837257624)})},r=[],o=s(2130),a=s(131),l=s(1997),n={name:"fhir-code",props:["field","min","max","base-min","base-max","label","binding","slotProps","path","edit","sliceName","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:o.Z},mixins:[l.x],data:function(){return{value:"",loading:!0,errors:[],items:[],source:{path:"",data:{},binding:this.binding},disabled:!1,lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},value(t){a.Y.$emit(this.path,t)}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let t=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t);let e=null;if(1==this.source.data.length)e=this.source.data[0];else{let t,s=this.path.split("[");for(let e of s){let s=e.split("]");Number.isInteger(parseInt(s[0]))&&(t=s[0])}(t||0==t)&&(e=this.source.data[t])}null!=e&&(this.value=e,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}let t=this.binding||this.slotProps.source.binding;this.$fhirutils.expand(t).then((t=>{this.items=t,this.loading=!1})).catch((t=>{console.log(t),this.errors.push(t.message),this.loading=!1}))}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},displayValue:function(){let t=this.items.find((t=>t.code===this.value));return t?t.display:""},required:function(){return(this.index||0)<this.min},rules:function(){return this.required?[t=>!!t||this.display+" is required"]:[]}}},d=n,c=s(3736),h=s(3453),u=s.n(h),p=s(1835),f=(0,c.Z)(d,i,r,!1,null,null,null),v=f.exports;u()(f,{VAutocomplete:p.Z})},1251:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hide?t._e():s("ihris-element",{attrs:{edit:t.edit,loading:t.loading},scopedSlots:t._u([{key:"form",fn:function(){return[s("v-autocomplete",{attrs:{loading:t.loading,label:t.display,items:t.items.filter((function(t){return!t.code.includes("(deactivated)")})),outlined:"","hide-details":"auto","error-messages":t.errors,"item-text":"display","item-value":"code",disabled:t.disabled,rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.$t("App.fhir-resources-texts."+t.label))+" "),t.required?s("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}],null,!1,3654946902),model:{value:t.valueCode,callback:function(e){t.valueCode=e},expression:"valueCode"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+t.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.valueDisplay||t.value.display||"")+" ")]},proxy:!0}],null,!1,1368762095)})},r=[],o=s(2130),a=s(131),l=s(1997),n={name:"fhir-coding",props:["field","label","sliceName","targetprofile","min","max","base-min","base-max","slotProps","path","binding","edit","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:o.Z},mixins:[l.x],data:function(){return{value:{system:"",code:"",display:""},valueCode:"",valueDisplay:"",loading:!0,errors:[],items:[],source:{path:"",data:{},binding:this.binding},disabled:!1,lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},valueCode:function(t){if(this.items){let e=this.items.find((e=>e.code===t));e&&(this.value=e)}this.value.system&&this.value.code&&this.$fhirutils.codeLookup(this.value.system,this.value.code,this.binding||this.source.binding).then((t=>{this.valueDisplay=t})),a.Y.$emit(this.path,this.value.system+"#"+this.value.code)}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{},binding:this.binding||this.slotProps.source.binding},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.source.data&&(this.value=this.source.data,this.valueCode=this.value.code,this.lockWatch=!0);else{let t=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t);let e=null;if(1==this.source.data.length)e=this.source.data[0];else{let t,s=this.path.split("[");for(let e of s){let s=e.split("]");Number.isInteger(parseInt(s[0]))&&(t=s[0])}(t||0==t)&&(e=this.source.data[t])}null!=e&&(this.value=e,this.valueCode=this.value.code,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.valueCode}let t=this.binding||this.slotProps.source.binding;this.$fhirutils.expand(t).then((t=>{this.items=t,this.loading=!1})).catch((t=>{console.log(t),this.errors=t.message,this.loading=!1}))}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return this.required?[t=>!!t||this.display+" is required"]:[]}}},d=n,c=s(3736),h=s(3453),u=s.n(h),p=s(1835),f=(0,c.Z)(d,i,r,!1,null,null,null),v=f.exports;u()(f,{VAutocomplete:p.Z})},3858:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ihris-complex-card",{attrs:{complexField:t.field,slotProps:t.slotProps,label:t.label,errors:t.errors},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{source:e.source})]}}],null,!0)})},r=[],o=s(7085),a={name:"fhir-identifier",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:o.Z}},l=a,n=s(3736),d=(0,n.Z)(l,i,r,!1,null,null,null),c=d.exports},2130:function(t,e,s){s.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.edit?s("v-container",[t._t("form")],2):s("div",[s("v-row",{attrs:{dense:""}},[s("v-col",{staticClass:"font-weight-bold",attrs:{cols:t.$store.state.cols.header}},[t._t("header")],2),t.loading?s("v-col",{attrs:{cols:t.$store.state.cols.content}},[s("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):s("v-col",{attrs:{cols:t.$store.state.cols.content}},[t._t("value")],2)],1),s("v-divider")],1)],1)},r=[],o={name:"ihris-element",props:["edit","loading"]},a=o,l=s(3736),n=s(3453),d=s.n(n),c=s(2102),h=s(4228),u=s(1418),p=s(7003),f=s(2877),v=(0,l.Z)(a,i,r,!1,null,null,null),m=v.exports;d()(v,{VCol:c.Z,VContainer:h.Z,VDivider:u.Z,VProgressLinear:p.Z,VRow:f.Z})},4861:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=function(){var t=this,e=this,s=e.$createElement,i=e._self._c||s;return!e.intro.closed&&this.intro.fullName?i("div",{class:[e.hasScrolled||this.isQuestionnaire?"show":"hide"],staticStyle:{padding:"0"}},[i("v-snackbar",{attrs:{color:"white",bottom:e.bottom,right:e.right,timeout:e.timeout,width:"320"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[i("div",[i("v-card",{attrs:{height:"400",elevation:"0",color:"white",width:"320"}},[i("template",{slot:"progress"},[i("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),i("v-card-title",{staticClass:"justify-end",staticStyle:{"padding-top":"4px","padding-bottom":"4px"}},[i("v-btn",{attrs:{color:"deep-purple lighten-2",icon:""},on:{click:function(){t.intro.closed=!0}}},[i("v-icon",[e._v("mdi-close-circle-outline")])],1)],1),i("v-card-title",{staticClass:"justify-center",staticStyle:{"padding-top":"4px","padding-bottom":"4px"}},[i("v-avatar",{attrs:{size:"120"}},[i("img",{attrs:{alt:e.intro.fullName,src:e.intro.photoURL?e.intro.photoURL:"/images/Blank-Avatar.jpg"}})])],1),i("v-card-title",{staticClass:"justify-center py-0"},[i("span",{staticClass:"black--text"},[e._v(e._s(e.intro.fullName))])]),i("v-card-text",{staticClass:"black--text"},[i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Job Title"))+": "),i("strong",[e._v(e._s(e.intro.jobTitle))])]),i("br"),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Employee Number"))+": "),i("strong",[e._v(e._s(e.intro.employeeID))])]),i("br"),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Email"))+": "),i("strong",[e._v(e._s(e.intro.email))])]),i("br"),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Phone"))+" : "),i("strong",[e._v(e._s(e.intro.phone))])]),i("br"),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Gender"))+" : "),i("strong",[e._v(e._s(e.intro.gender))])]),i("br"),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Birth Date"))+" : "),i("strong",[e._v(e._s(e.intro.birthDate))])]),i("br"),i("span",[e._v(" "+e._s(e.$t("App.hardcoded-texts.Age"))+" : "),i("strong",[e._v(e._s(Math.floor((new Date-new Date(e.intro.birthDate))/31536e6)))])]),i("br")])],2)],1)])],1):e._e()},r=[],o={name:"ihris-practitioner-intro",props:["slotProps","isQuestionnaire"],data:function(){return{intro:{fullName:"",jobTitle:"",photoURL:"",birthDate:"",gender:"",employeeID:"",closed:!1,emil:"",phone:""},hasScrolled:!1,snackbar:!0,timeout:-1,bottom:!0,right:!0}},components:{},mounted(){this.isQuestionnaire?window.removeEventListener("scroll",this.handleScroll):window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData(){if(this.slotProps&&this.slotProps.source&&this.slotProps.source.data){let t=this.slotProps.source.data,e="";t&&t.name[0]?.prefix&&t.name[0]?.prefix.length&&(e=t.name[0].prefix[0]),this.intro.fullName=`${e} ${t?.name[0]?.family} ${t?.name[0]?.given[0]}`,this.intro.email=t?.telecom?.find((t=>"email"===t.system))?.value,this.intro.phone=t?.telecom?.find((t=>"phone"===t.system))?.value,this.intro.jobTitle=this.slotProps.position,this.intro.gender=t?.gender,this.intro.birthDate=t?.birthDate,this.intro.employeeID=t?.identifier?t?.identifier[0]?.value:"";let s="";if(t.photo&&(s=t?.photo[0]),s.data&&s.contentType){let t="data:"+s.contentType+";base64,"+s.data;fetch(t).then((t=>t.blob())).then((t=>{this.intro.photoURL=URL.createObjectURL(t)})).catch((t=>{console.log("Failed to get data from base64.",t)}))}}},handleScroll(){this.hasScrolled=window.top.scrollY>=100}}},a=o,l=s(3736),n=s(3453),d=s.n(n),c=s(6370),h=s(3150),u=s(2371),p=s(7118),f=s(6428),v=s(7003),m=s(3202),g=(0,l.Z)(a,i,r,!1,null,"05a18d60",null),y=g.exports;d()(g,{VAvatar:c.Z,VBtn:h.Z,VCard:u.Z,VCardText:p.ZB,VCardTitle:p.EB,VIcon:f.Z,VProgressLinear:v.Z,VSnackbar:m.Z})},2946:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{key:t.pageKey,staticClass:"my-3"},[s("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("default",null,{position:t.position,source:t.source}),s("v-overlay",{attrs:{value:t.overlay}},[s("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}})],1),s("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",clipped:"",permanent:"",right:""}},[s("v-list",{staticClass:"white--text"},[t.edit?s("v-list-item",[t.edit?s("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){return t.$router.go(-1)}}},[s("v-icon",{attrs:{light:""}},[t._v("mdi-close-circle-outline")]),s("span",[t._v(t._s(t.$t("App.hardcoded-texts.Cancel")))])],1):t._e(),s("v-spacer"),t.edit?[t.valid?s("v-btn",{staticClass:"success darken-1",attrs:{disabled:!t.valid,dark:""},on:{click:function(e){return t.processFHIR()}}},[s("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),s("span",[t._v(t._s(t.$t("App.hardcoded-texts.Save")))])],1):s("v-btn",{staticClass:"warning",attrs:{dark:""},on:{click:function(e){return t.$refs.form.validate()}}},[s("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),s("span",[t._v(t._s(t.$t("App.hardcoded-texts.Save")))])],1)]:t._e()],2):t._e(),s("v-divider",{attrs:{color:"white"}}),!t.edit&&t.links&&t.links.length?t._l(t.links,(function(e,i){return s("v-list-item",{key:e.url},[s("v-btn",{key:e.url,class:e.linkclass,attrs:{text:!e.button,to:t.getLinkUrl(e)}},[e.icon?s("v-icon",{attrs:{light:""}},[t._v(t._s(e.icon))]):t._e(),t._v(" "+t._s(t.linktext[i])+" ")],1)],1)})):t._e(),s("v-divider",{attrs:{color:"white"}}),t.sectionMenu?s("v-subheader",{staticClass:"white--text"},[s("h2",[t._v(t._s(t.$t("App.hardcoded-texts.Sections")))])]):t._e(),t._l(t.sectionMenu,(function(e){return s("v-list-item",{key:e.name,class:"#section-"+e.name===t.path?"highlighted":"",attrs:{id:"#section-"+e.name},on:{click:function(s){return t.scrollTo(e.name)}}},[t.edit&&e.secondary?t._e():s("v-list-item-content",{staticClass:"white--text"},[s("v-list-item-title",{staticClass:"text-uppercase"},[s("h4",[t._v(t._s(t.$t("App.fhir-resources-texts."+e.title)))])]),s("v-list-item-subtitle",{staticClass:"white--text"},[t._v(t._s(t.$t("App.fhir-resources-texts."+e.desc)))])],1)],1)}))],2)],1),this.edit?t._e():s("v-card",{staticClass:"mx-auto mb-4 rounded-lg",attrs:{"max-width":"700",outlined:""}},[s("v-card-title",{staticClass:"primary font-weight-bold caption pa-2 white--text justify-center "},[t._v("Record History ")]),s("v-card-text",{staticClass:"my-3"},[s("v-row",{staticClass:"justify-space-between"},[s("v-col",{attrs:{cols:"4"}},[s("span",{staticClass:"font-weight-bold"},[t._v("Record Id:")])]),s("v-col",{attrs:{cols:"8"}},[t._v(t._s(this.$data.orig.id))])],1),s("v-divider"),s("v-row",{staticClass:"justify-space-between"},[s("v-col",{attrs:{cols:"4"}},[s("span",{staticClass:"font-weight-bold"},[t._v("Last Updated:")])]),t.$data.orig&&t.$data.orig.meta?s("v-col",{attrs:{cols:"8"}},[t._v(" "+t._s(new Date(this.$data.orig.meta.lastUpdated))+" ")]):t._e()],1),s("v-divider"),s("v-row",{staticClass:"justify-space-between"},[s("v-col",{attrs:{cols:"4"}},[s("span",{staticClass:"font-weight-bold"},[t._v("Version:")])]),t.$data.orig&&t.$data.orig.meta?s("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.$data.orig.meta.versionId)+" of "+t._s(t.max))]):t._e()],1),s("v-divider"),s("v-row",{staticClass:"justify-space-between"},[s("v-col",{attrs:{cols:"4"}},[s("span",{staticClass:"font-weight-bold"},[t._v("See older version:")])]),s("v-col",{attrs:{cols:"8"}},[s("v-row",[s("v-col",{staticClass:"px-4",attrs:{cols:"2"}},[t.$data.orig.meta?s("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"40px"},attrs:{max:t.max,rules:[t.rules.min,t.rules.max],value:t.$data.orig.meta.versionId,"hide-details":"",min:"1","single-line":"",type:"number"},model:{value:t.version,callback:function(e){t.version=t._n(e)},expression:"version"}}):t._e()],1),s("v-col",{staticClass:"px-4"},[s("v-btn",{attrs:{disabled:t.version>t.max||t.version<1,color:"primary",icon:"",small:""},on:{click:t.changeVersion}},[s("v-icon",[t._v("mdi-eye")])],1)],1)],1)],1)],1),s("v-divider")],1)],1)],2)],1)},r=[],o={name:"ihris-resource",props:["title","field","fhir-id","page","profile","section-menu","edit","links","constraints"],data:function(){return{fhir:{},orig:{},valid:!0,source:{data:{},path:""},path:"",loading:!1,overlay:!1,isEdit:!1,linktext:[],position:"",advancedValid:!0,loadingId:!1,loadingCv:!1,version:1,max:1,pageKey:0,rules:{min:t=>t>=1||"The Min is 1",max:t=>t<=this.max||`The Max is ${this.max}`}}},mounted(){this.isQuestionnaire?window.removeEventListener("scroll",this.handleScroll):window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},created:function(){if(this.fhirId)this.loading=!0,fetch(`/fhir/PractitionerRole?_practitioner=${this.fhirId}`).then((t=>{t.json().then((t=>{if(t.entry){let e=t.entry[0].resource.code[0].coding[0].display;this.position=e||""}})).catch((t=>{console.log(this.field,this.fhirId,t)}))})).catch((t=>{console.log(this.field,this.fhirId,t)})),fetch("/fhir/"+this.field+"/"+this.fhirId).then((t=>{t.json().then((t=>{this.max=t.meta.versionId,this.orig=t,this.source={data:t,path:this.field},this.setLinkText(),this.loading=!1})).catch((t=>{console.log(this.field,this.fhirId,t)}))})).catch((t=>{console.log(this.field,this.fhirId,t)}));else if(this.$route.query){let e={resourceType:this.field},s=!1;for(let i of Object.keys(this.$route.query))if(i.startsWith(this.field+".")){s=!0;let r=i.substring(this.field.length+1).split("."),o=r.pop(),a=e;for(let e of r)if(e.includes("["))try{let t=e.split("["),s=t[0],i=t[1].slice(0,-1);if(a.hasOwnProperty(s)||(a[s]=[]),i){let t={};a[s][parseInt(i)]=t,a=t}else{let t={};a[s].push(t),a=t}}catch(t){console.log("Unable to process",i)}else a.hasOwnProperty(e)||(a[e]={},a=a[e]);if(o.includes("["))try{let t=o.split("["),e=t[0],s=t[1].slice(0,-1);a.hasOwnProperty(e)||(a[e]=[]),s?a[e][parseInt(s)]=this.$route.query[i]:a[e].push(this.$route.query[i])}catch(t){console.log("Unable to process",i)}else a[o]=this.$route.query[i]}s&&(this.source={data:e,path:this.field})}},computed:{hasFhirId:function(){return""!=this.fhirId&&!!this.fhirId}},methods:{scrollTo(t){document.getElementById(`section-${t}`).scrollIntoView()},handleScroll(){this.hasScrolled=window.top.scrollY>=100,this.sectionMenu.map((t=>{let e=document.getElementById(`section-${t.name}`),s=e.offsetTop;pageYOffset>=s&&(this.path=`#section-${t.name}`)}))},getLinkField:function(t){let e=this.$fhirpath.evaluate(this.source.data,t);return!!e&&e[0]},getLinkUrl:function(t){let e;if(t.field&&(e=this.getLinkField(t.field)),e){if(e.includes("/")){let t=e.split("/");e=t[1]}return t.url.replace("FIELD",e)}return t.url},setLinkText:function(){for(let t in this.links){let e=this.links[t];if(e.text)this.linktext[t]=e.text;else if(e.field){let s=this.getLinkField(e.field);s&&this.$fhirutils.lookup(s).then((e=>{this.$set(this.linktext,t,e)}))}}},processFHIR:async function(){if(this.$refs.form.validate(),!this.valid)return;this.advancedValid=!0,this.overlay=!0,this.loading=!0;const t=async(e,s,i)=>{for(let o of i){let i=e,a=s;if(o.field&&!o.fieldType){let t;if(o.sliceName?o.field.startsWith("value[x]")?(t=o.field.substring(9),i+="."+t):(t=o.field.replace(":"+o.sliceName,""),i+="."+t):(t=o.field,i+="."+t),"1"!==o.max||"1"!==o.baseMax?s.hasOwnProperty(t)||(a[t]=[]):a[t]={},o.hasOwnProperty("value"))Array.isArray(a[t])?a[t].push(o.value):a[t]=o.value,a=a[t];else if(Array.isArray(a[t])){let e={};o.profile?e.url=o.profile:"extension"===t&&o.sliceName&&(e.url=o.sliceName),a[t].push(e),a=e}else a=a[t]}if(o.$children)try{await t(i,a,o.$children)}catch(r){this.advancedValid=!1,console.log(r)}if(o.constraints){o.errors=[];try{this.advancedValid=this.advancedValid&&await this.$fhirutils.checkConstraints(o.constraints,this.constraints,a,o.errors,this.fhirId)}catch(r){this.advancedValid=!1,o.errors.push("An unknown error occurred."),console.log(r)}}}};this.fhir={resourceType:this.field,meta:{profile:[this.profile]}};try{await t(this.field,this.fhir,this.$children)}catch(i){this.advancedValid=!1,console.log(i)}if(!this.advancedValid)return this.overlay=!1,this.loading=!1,void this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."});console.log("FINISHED PROCESS AND CHECK.");let e="/fhir/"+this.field,s={method:"POST",headers:{"Content-Type":"application/fhir+json"},redirect:"manual"};this.fhirId&&(this.fhir.id=this.fhirId,e+="/"+this.fhirId,s.method="PUT"),s.body=JSON.stringify(this.fhir),fetch(e,s).then((t=>{201!==t.status&&200!==t.status||t.json().then((t=>{this.overlay=!1,this.loading=!1,this.fhirId?(this.$store.commit("setMessage",{type:"success",text:"Update successful."}),setTimeout((()=>this.$router.go(0)),1e3)):this.$router.push({name:"resource_view",params:{page:this.page,id:t.id}})}))}))},changeVersion(){fetch("/fhir/vRead/"+this.field+"/"+this.fhirId+"/"+this.version).then((t=>{t.json().then((t=>{this.orig=t,this.source={data:t,path:this.field},this.setLinkText(),this.loading=!1,this.pageKey+=1})).catch((t=>{console.log(this.field,this.fhirId,t)}))})).catch((t=>{console.log(this.field,this.fhirId,t)}))}}},a=o,l=s(3736),n=s(3453),d=s.n(n),c=s(3150),h=s(2371),u=s(7118),p=s(2102),f=s(4228),v=s(1418),m=s(6232),g=s(6428),y=s(6816),_=s(7620),x=s(4562),b=s(5132),k=s(1058),w=s(624),$=s(2877),C=s(9762),I=s(3205),V=s(5978),P=(0,l.Z)(a,i,r,!1,null,null,null),Z=P.exports;d()(P,{VBtn:c.Z,VCard:h.Z,VCardText:u.ZB,VCardTitle:u.EB,VCol:p.Z,VContainer:f.Z,VDivider:v.Z,VForm:m.Z,VIcon:g.Z,VList:y.Z,VListItem:_.Z,VListItemContent:x.km,VListItemSubtitle:x.oZ,VListItemTitle:x.V9,VNavigationDrawer:b.Z,VOverlay:k.Z,VProgressCircular:w.Z,VRow:$.Z,VSpacer:C.Z,VSubheader:I.Z,VTextField:V.Z})},9779:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.edit?t._e():s("v-container",{staticClass:"my-3"},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.translatedHeader,items:t.items,"item-key":"id","items-per-page":5,loading:t.loading,dense:"","footer-props":{"items-per-page-text":t.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]}},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:"white"}},[s("v-toolbar-title",[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+t.title))+" ")]),s("v-spacer"),t._l(t.topActions,(function(e){return s("v-btn",{key:e.text,attrs:{to:t.setupLink(e.link,{}),color:e.class,small:""}},[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+e.text))+" ")])}))],2)]},proxy:!0},{key:"item._action",fn:function(e){var i=e.item;return t._l(i.actions,(function(e){return s("v-btn",{key:e.text,attrs:{to:t.setupLink(e.link,i),color:e.class,small:"",rounded:""}},[t._v(" "+t._s(e.text)+" ")])}))}}],null,!1,1174550382)})],1)},r=[];const o=t=>!!t&&t.constructor===Object;var a={name:"ihris-secondary",props:["title","field","profile","slotProps","link-id","link-field","search-field","search-field-target","edit","columns","actions"],data:function(){return{source:{data:{},path:this.field},empty:!0,items:[],loading:!0,topActions:[],translatedHeader:[]}},mounted:function(){this.setupData()},watch:{},methods:{setupData:function(){let t;if(this.translatedHeader=this.columns.map((t=>({text:this.$t(`App.fhir-resources-texts.${t.text}`),value:t.value}))),2===this.searchField.split(":").length){let e=this.searchField.split(":")[0];t="fhir/"+e+"?_id="+this.linkId+"&_include="+this.searchField}else{t="/fhir/"+this.field;let e=[];this.profile&&e.push("_profile="+this.profile);let s="";this.searchFieldTarget&&(s=this.searchFieldTarget+"/"),s+=this.linkId,this.searchField?e.push(this.searchField+"="+s):e.push(this.linkField.substring(this.linkField.indexOf(".")+1)+"="+s),t+="?"+e.join("&")}t+="&_sort=-_id",this.items=[],this.loading=!0,this.addItems(t)},addItems:function(t){fetch(t).then((e=>{200===e.status?e.json().then((async t=>{if(t.entry&&t.entry.length>0)for(let s of t.entry){if(2===this.searchField.split(":").length&&s.resource.resourceType===this.searchField.split(":")[0])continue;let t={id:s.resource.id};for(let i of this.columns)if("_action"!==i.value)try{let e=this.$fhirpath.evaluate(s.resource,i.value);t[i.value]=await this.processContent(e)}catch(e){console.log(e)}t.actions||(t.actions=[]);for(let e of this.actions)if(e.row)if(e.condition){let i=this.$fhirpath.evaluate(s.resource,e.condition);i.every((t=>t))&&t.actions.push(e)}else t.actions.push(e);else if(e.condition){let t=this.$fhirpath.evaluate(s.resource,e.condition);e.hasOwnProperty("meets")?e.meets=e.meets&&t.every((t=>t)):e.meets=t.every((t=>t))}else e.meets=!0;this.items.push(t)}else for(let s of this.actions)s.row||(s.meets=s.emptyDisplay);if(this.topActions=this.actions.filter((t=>!t.row&&t.meets)),t.link){let e=t.link.find((t=>"next"===t.relation));e?this.addItems(e.url):this.loading=!1}else this.loading=!1})).catch((t=>{this.loading=!1,console.log(t)})):(this.loading=!1,console.log("Unable to fetch",t,e.status))})).catch((t=>{this.loading=!1,console.log(t)}))},processContent:async function(t){if(Array.isArray(t)){let e=await Promise.all(t.map(this.processContent));return e.join(" ")}return o(t)?t.code&&t.system?await this.$fhirutils.codeLookup(t.system,t.code):t.display?t.display:t.code?t.code:t.reference?await this.$fhirutils.resourceLookup(t.reference):(console.log("Unable to process content:",t),"Unknown"):t},setupLink(t,e){return t.replace("ITEMID",e.id).replace("FHIRID",this.linkId)}}},l=a,n=s(3736),d=s(3453),c=s.n(d),h=s(3150),u=s(4228),p=s(1859),f=s(9762),v=s(6656),m=s(7921),g=(0,n.Z)(l,i,r,!1,null,null,null),y=g.exports;c()(g,{VBtn:h.Z,VContainer:u.Z,VDataTable:p.Z,VSpacer:f.Z,VToolbar:v.Z,VToolbarTitle:m.qW})},6869:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.edit&&t.secondary?t._e():s("div",{staticClass:"ihris-section",attrs:{id:"section-"+t.name}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[s("v-card-title",{staticClass:"primary darken-1 white--text text-uppercase font-weight-bold"},[t._v(t._s(t.$t("App.fhir-resources-texts."+t.title))+" ")]),s("v-card-text",{staticClass:"my-3"},[t._t("default",null,{source:t.slotProps.source})],2)],1)],1)},r=[],o={name:"ihris-section",props:["name","slotProps","title","description","edit","secondary"],data:function(){return{}},created:function(){},watch:{},methods:{}},a=o,l=s(3736),n=s(3453),d=s.n(n),c=s(2371),h=s(7118),u=(0,l.Z)(a,i,r,!1,null,null,null),p=u.exports;d()(u,{VCard:c.Z,VCardText:h.ZB,VCardTitle:h.EB})}}]);
//# sourceMappingURL=fhir-primary.cd3792d6.js.map