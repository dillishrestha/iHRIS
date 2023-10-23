"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[2657,728],{6693:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.hide?t._e():i("ihris-element",{attrs:{edit:t.edit,loading:t.loading},scopedSlots:t._u([{key:"form",fn:function(){return[i("v-autocomplete",{attrs:{loading:t.loading,label:t.$t("App.fhir-resources-texts."+t.display),items:t.items.filter((function(t){return!t.code.includes("(deactivated)")})),outlined:"","hide-details":"auto","error-messages":t.errors,"item-text":"display","item-value":"code",disabled:t.disabled,rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.$t("App.fhir-resources-texts."+t.display))+" "),t.required?i("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}],null,!1,3110236810),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+t.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.displayValue)+" ")]},proxy:!0}],null,!1,2837257624)})},r=[],a=i(2130),o=i(8187),l=i(1997),n={name:"fhir-code",props:["field","min","max","base-min","base-max","label","binding","slotProps","path","edit","sliceName","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:a.Z},mixins:[l.x],data:function(){return{value:"",loading:!0,errors:[],items:[],source:{path:"",data:{},binding:this.binding},disabled:!1,lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},value(t){o.Y.$emit(this.path,t)}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let t=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t);let e=null;if(1==this.source.data.length)e=this.source.data[0];else{let t,i=this.path.split("[");for(let e of i){let i=e.split("]");Number.isInteger(parseInt(i[0]))&&(t=i[0])}(t||0==t)&&(e=this.source.data[t])}null!=e&&(this.value=e,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}let t=this.binding||this.slotProps.source.binding;this.$fhirutils.expand(t).then((t=>{this.items=t,this.loading=!1})).catch((t=>{console.log(t),this.errors.push(t.message),this.loading=!1}))}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},displayValue:function(){let t=this.items.find((t=>t.code===this.value));return t?t.display:""},required:function(){return(this.index||0)<this.min},rules:function(){return this.required?[t=>!!t||this.display+" is required"]:[]}}},h=n,d=i(3736),c=i(3453),u=i.n(c),p=i(1835),f=(0,d.Z)(h,s,r,!1,null,null,null),v=f.exports;u()(f,{VAutocomplete:p.Z})},1251:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.hide?t._e():i("ihris-element",{attrs:{edit:t.edit,loading:t.loading},scopedSlots:t._u([{key:"form",fn:function(){return[i("v-autocomplete",{attrs:{loading:t.loading,label:t.display,items:t.items.filter((function(t){return!t.code.includes("(deactivated)")})),outlined:"","hide-details":"auto","error-messages":t.errors,"item-text":"display","item-value":"code",disabled:t.disabled,rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.$t("App.fhir-resources-texts."+t.label))+" "),t.required?i("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}],null,!1,3654946902),model:{value:t.valueCode,callback:function(e){t.valueCode=e},expression:"valueCode"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+t.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.valueDisplay||t.value.display||"")+" ")]},proxy:!0}],null,!1,1368762095)})},r=[],a=i(2130),o=i(8187),l=i(1997),n={name:"fhir-coding",props:["field","label","sliceName","targetprofile","min","max","base-min","base-max","slotProps","path","binding","edit","readOnlyIfSet","constraints","displayCondition"],components:{IhrisElement:a.Z},mixins:[l.x],data:function(){return{value:{system:"",code:"",display:""},valueCode:"",valueDisplay:"",loading:!0,errors:[],items:[],source:{path:"",data:{},binding:this.binding},disabled:!1,lockWatch:!1}},created:function(){this.hideShowField(this.displayCondition),this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},valueCode:function(t){if(this.items){let e=this.items.find((e=>e.code===t));e&&(this.value=e)}this.value.system&&this.value.code&&this.$fhirutils.codeLookup(this.value.system,this.value.code,this.binding||this.source.binding).then((t=>{this.valueDisplay=t})),o.Y.$emit(this.path,this.value.system+"#"+this.value.code)}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{},binding:this.binding||this.slotProps.source.binding},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.source.data&&(this.value=this.source.data,this.valueCode=this.value.code,this.lockWatch=!0);else{let t=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t);let e=null;if(1==this.source.data.length)e=this.source.data[0];else{let t,i=this.path.split("[");for(let e of i){let i=e.split("]");Number.isInteger(parseInt(i[0]))&&(t=i[0])}(t||0==t)&&(e=this.source.data[t])}null!=e&&(this.value=e,this.valueCode=this.value.code,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.valueCode}let t=this.binding||this.slotProps.source.binding;this.$fhirutils.expand(t).then((t=>{this.items=t,this.loading=!1})).catch((t=>{console.log(t),this.errors=t.message,this.loading=!1}))}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return this.required?[t=>!!t||this.display+" is required"]:[]}}},h=n,d=i(3736),c=i(3453),u=i.n(c),p=i(1835),f=(0,d.Z)(h,s,r,!1,null,null,null),v=f.exports;u()(f,{VAutocomplete:p.Z})},3858:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ihris-complex-card",{attrs:{complexField:t.field,slotProps:t.slotProps,label:t.label,errors:t.errors},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{source:e.source})]}}],null,!0)})},r=[],a=i(7085),o={name:"fhir-identifier",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:a.Z}},l=o,n=i(3736),h=(0,n.Z)(l,s,r,!1,null,null,null),d=h.exports},2130:function(t,e,i){i.d(e,{Z:function(){return m}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.edit?i("v-container",[t._t("form")],2):i("div",[i("v-row",{attrs:{dense:""}},[i("v-col",{staticClass:"font-weight-bold",attrs:{cols:t.$store.state.cols.header}},[t._t("header")],2),t.loading?i("v-col",{attrs:{cols:t.$store.state.cols.content}},[i("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):i("v-col",{attrs:{cols:t.$store.state.cols.content}},[t._t("value")],2)],1),i("v-divider")],1)],1)},r=[],a={name:"ihris-element",props:["edit","loading"]},o=a,l=i(3736),n=i(3453),h=i.n(n),d=i(2102),c=i(4228),u=i(1418),p=i(7003),f=i(2877),v=(0,l.Z)(o,s,r,!1,null,null,null),m=v.exports;h()(v,{VCol:d.Z,VContainer:c.Z,VDivider:u.Z,VProgressLinear:p.Z,VRow:f.Z})},4861:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=function(){var t=this,e=this,i=e.$createElement,s=e._self._c||i;return!e.intro.closed&&this.intro.fullName?s("div",{class:[e.hasScrolled||this.isQuestionnaire?"show":"hide"],staticStyle:{padding:"0"}},[s("v-snackbar",{attrs:{color:"white",bottom:e.bottom,right:e.right,timeout:e.timeout,width:"320"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[s("div",[s("v-card",{attrs:{height:"400",elevation:"0",color:"white",width:"320"}},[s("template",{slot:"progress"},[s("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),s("v-card-title",{staticClass:"justify-end",staticStyle:{"padding-top":"4px","padding-bottom":"4px"}},[s("v-btn",{attrs:{color:"deep-purple lighten-2",icon:""},on:{click:function(){t.intro.closed=!0}}},[s("v-icon",[e._v("mdi-close-circle-outline")])],1)],1),s("v-card-title",{staticClass:"justify-center",staticStyle:{"padding-top":"4px","padding-bottom":"4px"}},[s("v-avatar",{attrs:{size:"120"}},[s("img",{attrs:{alt:e.intro.fullName,src:e.intro.photoURL?e.intro.photoURL:"/images/Blank-Avatar.jpg"}})])],1),s("v-card-title",{staticClass:"justify-center py-0"},[s("span",{staticClass:"black--text"},[e._v(e._s(e.intro.fullName))])]),s("v-card-text",{staticClass:"black--text"},[s("span",[e._v(e._s(e.$t("App.hardcoded-texts.Job Title"))+": "),s("strong",[e._v(e._s(e.intro.jobTitle))])]),s("br"),s("span",[e._v(e._s(e.$t("App.hardcoded-texts.Employee Number"))+": "),s("strong",[e._v(e._s(e.intro.employeeID))])]),s("br"),s("span",[e._v(e._s(e.$t("App.hardcoded-texts.Email"))+": "),s("strong",[e._v(e._s(e.intro.email))])]),s("br"),s("span",[e._v(e._s(e.$t("App.hardcoded-texts.Phone"))+" : "),s("strong",[e._v(e._s(e.intro.phone))])]),s("br"),s("span",[e._v(e._s(e.$t("App.hardcoded-texts.Gender"))+" : "),s("strong",[e._v(e._s(e.intro.gender))])]),s("br"),s("span",[e._v(e._s(e.$t("App.hardcoded-texts.Birth Date"))+" : "),s("strong",[e._v(e._s(e.intro.birthDate))])]),s("br"),s("span",[e._v(" "+e._s(e.$t("App.hardcoded-texts.Age"))+" : "),s("strong",[e._v(e._s(Math.floor((new Date-new Date(e.intro.birthDate))/31536e6)))])]),s("br")])],2)],1)])],1):e._e()},r=[],a={name:"ihris-practitioner-intro",props:["slotProps","isQuestionnaire"],data:function(){return{intro:{fullName:"",jobTitle:"",photoURL:"",birthDate:"",gender:"",employeeID:"",closed:!1,emil:"",phone:""},hasScrolled:!1,snackbar:!0,timeout:-1,bottom:!0,right:!0}},components:{},mounted(){this.isQuestionnaire?window.removeEventListener("scroll",this.handleScroll):window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData(){if(this.slotProps&&this.slotProps.source&&this.slotProps.source.data){let t=this.slotProps.source.data,e="";t&&t.name[0]?.prefix&&t.name[0]?.prefix.length&&(e=t.name[0].prefix[0]),this.intro.fullName=`${e} ${t?.name[0]?.family} ${t?.name[0]?.given[0]}`,this.intro.email=t?.telecom?.find((t=>"email"===t.system))?.value,this.intro.phone=t?.telecom?.find((t=>"phone"===t.system))?.value,this.intro.jobTitle=this.slotProps.position,this.intro.gender=t?.gender,this.intro.birthDate=t?.birthDate,this.intro.employeeID=t?.identifier?t?.identifier[0]?.value:"";let i="";if(t.photo&&(i=t?.photo[0]),i.data&&i.contentType){let t="data:"+i.contentType+";base64,"+i.data;fetch(t).then((t=>t.blob())).then((t=>{this.intro.photoURL=URL.createObjectURL(t)})).catch((t=>{console.log("Failed to get data from base64.",t)}))}}},handleScroll(){this.hasScrolled=window.top.scrollY>=100}}},o=a,l=i(3736),n=i(3453),h=i.n(n),d=i(6370),c=i(3150),u=i(2371),p=i(7118),f=i(6428),v=i(7003),m=i(3202),g=(0,l.Z)(o,s,r,!1,null,"05a18d60",null),y=g.exports;h()(g,{VAvatar:d.Z,VBtn:c.Z,VCard:u.Z,VCardText:p.ZB,VCardTitle:p.EB,VIcon:f.Z,VProgressLinear:v.Z,VSnackbar:m.Z})},9708:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{key:t.pageKey,staticClass:"my-3"},[i("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("default",null,{position:t.position,source:t.source}),i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}})],1),i("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",clipped:"",permanent:"",right:""}},[i("v-list",{staticClass:"white--text"},[t.edit?i("v-list-item",[t.edit?i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-close-circle-outline")]),i("span",[t._v(t._s(t.$t("App.hardcoded-texts.Cancel")))])],1):t._e(),i("v-spacer"),t.edit?[t.valid?i("v-btn",{staticClass:"success darken-1",attrs:{disabled:!t.valid,dark:""},on:{click:function(e){return t.processFHIR()}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),i("span",[t._v(t._s(t.$t("App.hardcoded-texts.Save")))])],1):i("v-btn",{staticClass:"warning",attrs:{dark:""},on:{click:function(e){return t.$refs.form.validate()}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),i("span",[t._v(t._s(t.$t("App.hardcoded-texts.Save")))])],1)]:t._e()],2):t._e(),i("v-divider",{attrs:{color:"white"}}),!t.edit&&t.links&&t.links.length?t._l(t.links,(function(e,s){return i("v-list-item",{key:e.url},[i("v-btn",{key:e.url,class:e.linkclass,attrs:{text:!e.button,to:t.getLinkUrl(e)}},[e.icon?i("v-icon",{attrs:{light:""}},[t._v(t._s(e.icon))]):t._e(),t._v(" "+t._s(t.linktext[s])+" ")],1)],1)})):t._e(),i("v-divider",{attrs:{color:"white"}}),t.sectionMenu?i("v-subheader",{staticClass:"white--text"},[i("h2",[t._v(t._s(t.$t("App.hardcoded-texts.Sections")))])]):t._e(),t._l(t.sectionMenu,(function(e){return i("v-list-item",{key:e.name,attrs:{href:"#section-"+e.name}},[t.edit&&e.secondary?t._e():i("v-list-item-content",{staticClass:"white--text"},[i("v-list-item-title",{staticClass:"text-uppercase"},[i("h4",[t._v(t._s(t.$t("App.fhir-resources-texts."+e.title)))])]),i("v-list-item-subtitle",{staticClass:"white--text"},[t._v(t._s(t.$t("App.fhir-resources-texts."+e.desc)))])],1)],1)}))],2)],1),this.edit?t._e():i("v-card",{staticClass:"mx-auto mb-4 rounded-lg",attrs:{"max-width":"700",outlined:""}},[i("v-card-title",{staticClass:"primary font-weight-bold caption pa-2 white--text justify-center "},[t._v("Record History ")]),i("v-card-text",{staticClass:"my-3"},[i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Record Id:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(this.$data.orig.id))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Last Updated:")])]),t.$data.orig&&t.$data.orig.meta?i("v-col",{attrs:{cols:"8"}},[t._v(" "+t._s(new Date(this.$data.orig.meta.lastUpdated))+" ")]):t._e()],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Version:")])]),t.$data.orig&&t.$data.orig.meta?i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.$data.orig.meta.versionId)+" of "+t._s(t.max))]):t._e()],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("See older version:")])]),i("v-col",{attrs:{cols:"8"}},[i("v-row",[i("v-col",{staticClass:"px-4",attrs:{cols:"2"}},[t.$data.orig.meta?i("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"40px"},attrs:{max:t.max,rules:[t.rules.min,t.rules.max],value:t.$data.orig.meta.versionId,"hide-details":"",min:"1","single-line":"",type:"number"},model:{value:t.version,callback:function(e){t.version=t._n(e)},expression:"version"}}):t._e()],1),i("v-col",{staticClass:"px-4"},[i("v-btn",{attrs:{disabled:t.version>t.max||t.version<1,color:"primary",icon:"",small:""},on:{click:t.changeVersion}},[i("v-icon",[t._v("mdi-eye")])],1)],1)],1)],1)],1),i("v-divider")],1)],1)],2)],1)},r=[],a=(i(6699),{name:"ihris-resource",props:["title","field","fhir-id","page","profile","section-menu","edit","links","constraints"],data:function(){return{fhir:{},orig:{},valid:!0,source:{data:{},path:""},path:"",loading:!1,overlay:!1,isEdit:!1,linktext:[],position:"",advancedValid:!0,loadingId:!1,loadingCv:!1,version:1,max:1,pageKey:0,rules:{min:t=>t>=1||"The Min is 1",max:t=>t<=this.max||`The Max is ${this.max}`}}},mounted(){this.isQuestionnaire?window.removeEventListener("scroll",this.handleScroll):window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},created:function(){if(this.fhirId)this.loading=!0,fetch(`/fhir/PractitionerRole?_practitioner=${this.fhirId}`).then((t=>{t.json().then((t=>{if(t.entry){let e=t.entry[0].resource.code[0].coding[0].display;this.position=e||""}})).catch((t=>{console.log(this.field,this.fhirId,t)}))})).catch((t=>{console.log(this.field,this.fhirId,t)})),fetch("/fhir/"+this.field+"/"+this.fhirId).then((t=>{t.json().then((t=>{this.max=t.meta.versionId,this.orig=t,this.source={data:t,path:this.field},this.setLinkText(),this.loading=!1})).catch((t=>{console.log(this.field,this.fhirId,t)}))})).catch((t=>{console.log(this.field,this.fhirId,t)}));else if(this.$route.query){let e={resourceType:this.field},i=!1;for(let s of Object.keys(this.$route.query))if(s.startsWith(this.field+".")){i=!0;let r=s.substring(this.field.length+1).split("."),a=r.pop(),o=e;for(let e of r)if(e.includes("["))try{let t=e.split("["),i=t[0],s=t[1].slice(0,-1);if(o.hasOwnProperty(i)||(o[i]=[]),s){let t={};o[i][parseInt(s)]=t,o=t}else{let t={};o[i].push(t),o=t}}catch(t){console.log("Unable to process",s)}else o.hasOwnProperty(e)||(o[e]={},o=o[e]);if(a.includes("["))try{let t=a.split("["),e=t[0],i=t[1].slice(0,-1);o.hasOwnProperty(e)||(o[e]=[]),i?o[e][parseInt(i)]=this.$route.query[s]:o[e].push(this.$route.query[s])}catch(t){console.log("Unable to process",s)}else o[a]=this.$route.query[s]}i&&(this.source={data:e,path:this.field})}},computed:{hasFhirId:function(){return""!=this.fhirId&&!!this.fhirId}},methods:{handleScroll(){this.hasScrolled=window.top.scrollY>=100,this.sectionMenu.map((t=>{let e=document.getElementById(`section-${t.name}`),i=e.offsetTop;pageYOffset>=i&&(this.path=`#section-${t.name}`)}))},getLinkField:function(t){let e=this.$fhirpath.evaluate(this.source.data,t);return!!e&&e[0]},getLinkUrl:function(t){let e;if(t.field&&(e=this.getLinkField(t.field)),e){if(e.includes("/")){let t=e.split("/");e=t[1]}return t.url.replace("FIELD",e)}return t.url},setLinkText:function(){for(let t in this.links){let e=this.links[t];if(e.text)this.linktext[t]=e.text;else if(e.field){let i=this.getLinkField(e.field);i&&this.$fhirutils.lookup(i).then((e=>{this.$set(this.linktext,t,e)}))}}},processFHIR:async function(){if(this.$refs.form.validate(),!this.valid)return;this.advancedValid=!0,this.overlay=!0,this.loading=!0;const t=async(e,i,s)=>{for(let a of s){let s=e,o=i;if(a.field&&!a.fieldType){let t;if(a.sliceName?a.field.startsWith("value[x]")?(t=a.field.substring(9),s+="."+t):(t=a.field.replace(":"+a.sliceName,""),s+="."+t):(t=a.field,s+="."+t),"1"!==a.max||"1"!==a.baseMax?i.hasOwnProperty(t)||(o[t]=[]):o[t]={},a.hasOwnProperty("value"))Array.isArray(o[t])?o[t].push(a.value):o[t]=a.value,o=o[t];else if(Array.isArray(o[t])){let e={};a.profile?e.url=a.profile:"extension"===t&&a.sliceName&&(e.url=a.sliceName),o[t].push(e),o=e}else o=o[t]}if(a.$children)try{await t(s,o,a.$children)}catch(r){this.advancedValid=!1,console.log(r)}if(a.constraints){a.errors=[];try{this.advancedValid=this.advancedValid&&await this.$fhirutils.checkConstraints(a.constraints,this.constraints,o,a.errors,this.fhirId)}catch(r){this.advancedValid=!1,a.errors.push("An unknown error occurred."),console.log(r)}}}};this.fhir={resourceType:this.field,meta:{profile:[this.profile]}};try{await t(this.field,this.fhir,this.$children)}catch(s){this.advancedValid=!1,console.log(s)}if(!this.advancedValid)return this.overlay=!1,this.loading=!1,void this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."});console.log("FINISHED PROCESS AND CHECK.");let e="/fhir/"+this.field,i={method:"POST",headers:{"Content-Type":"application/fhir+json"},redirect:"manual"};this.fhirId&&(this.fhir.id=this.fhirId,e+="/"+this.fhirId,i.method="PUT"),i.body=JSON.stringify(this.fhir),fetch(e,i).then((t=>{201!==t.status&&200!==t.status||t.json().then((t=>{this.overlay=!1,this.loading=!1,this.fhirId?(this.$store.commit("setMessage",{type:"success",text:"Update successful."}),setTimeout((()=>this.$router.go(0)),1e3)):this.$router.push({name:"resource_view",params:{page:this.page,id:t.id}})}))}))},changeVersion(){fetch("/fhir/vRead/"+this.field+"/"+this.fhirId+"/"+this.version).then((t=>{t.json().then((t=>{this.orig=t,this.source={data:t,path:this.field},this.setLinkText(),this.loading=!1,this.pageKey+=1})).catch((t=>{console.log(this.field,this.fhirId,t)}))})).catch((t=>{console.log(this.field,this.fhirId,t)}))}}}),o=a,l=i(3736),n=i(3453),h=i.n(n),d=i(3150),c=i(2371),u=i(7118),p=i(2102),f=i(4228),v=i(1418),m=i(6232),g=i(6428),y=i(6816),x=i(7620),_=i(4562),b=i(5132),k=i(1058),$=i(624),w=i(2877),C=i(9762),I=i(3205),V=i(5978),P=(0,l.Z)(o,s,r,!1,null,null,null),Z=P.exports;h()(P,{VBtn:d.Z,VCard:c.Z,VCardText:u.ZB,VCardTitle:u.EB,VCol:p.Z,VContainer:f.Z,VDivider:v.Z,VForm:m.Z,VIcon:g.Z,VList:y.Z,VListItem:x.Z,VListItemContent:_.km,VListItemSubtitle:_.oZ,VListItemTitle:_.V9,VNavigationDrawer:b.Z,VOverlay:k.Z,VProgressCircular:$.Z,VRow:w.Z,VSpacer:C.Z,VSubheader:I.Z,VTextField:V.Z})},9779:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.edit?t._e():i("v-container",{staticClass:"my-3"},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.translatedHeader,items:t.items,"item-key":"id","items-per-page":5,loading:t.loading,dense:"","footer-props":{"items-per-page-text":t.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]}},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+t.title))+" ")]),i("v-spacer"),t._l(t.topActions,(function(e){return i("v-btn",{key:e.text,attrs:{to:t.setupLink(e.link,{}),color:e.class,small:""}},[t._v(" "+t._s(t.$t("App.fhir-resources-texts."+e.text))+" ")])}))],2)]},proxy:!0},{key:"item._action",fn:function(e){var s=e.item;return t._l(s.actions,(function(e){return i("v-btn",{key:e.text,attrs:{to:t.setupLink(e.link,s),color:e.class,small:"",rounded:""}},[t._v(" "+t._s(e.text)+" ")])}))}}],null,!1,1174550382)})],1)},r=[];const a=t=>!!t&&t.constructor===Object;var o={name:"ihris-secondary",props:["title","field","profile","slotProps","link-id","link-field","search-field","search-field-target","edit","columns","actions"],data:function(){return{source:{data:{},path:this.field},empty:!0,items:[],loading:!0,topActions:[],translatedHeader:[]}},mounted:function(){this.setupData()},watch:{},methods:{setupData:function(){let t;if(this.translatedHeader=this.columns.map((t=>({text:this.$t(`App.fhir-resources-texts.${t.text}`),value:t.value}))),2===this.searchField.split(":").length){let e=this.searchField.split(":")[0];t="fhir/"+e+"?_id="+this.linkId+"&_include="+this.searchField}else{t="/fhir/"+this.field;let e=[];this.profile&&e.push("_profile="+this.profile);let i="";this.searchFieldTarget&&(i=this.searchFieldTarget+"/"),i+=this.linkId,this.searchField?e.push(this.searchField+"="+i):e.push(this.linkField.substring(this.linkField.indexOf(".")+1)+"="+i),t+="?"+e.join("&")}t+="&_sort=-_id",this.items=[],this.loading=!0,this.addItems(t)},addItems:function(t){fetch(t).then((e=>{200===e.status?e.json().then((async t=>{if(t.entry&&t.entry.length>0)for(let i of t.entry){if(2===this.searchField.split(":").length&&i.resource.resourceType===this.searchField.split(":")[0])continue;let t={id:i.resource.id};for(let s of this.columns)if("_action"!==s.value)try{let e=this.$fhirpath.evaluate(i.resource,s.value);t[s.value]=await this.processContent(e)}catch(e){console.log(e)}t.actions||(t.actions=[]);for(let e of this.actions)if(e.row)if(e.condition){let s=this.$fhirpath.evaluate(i.resource,e.condition);s.every((t=>t))&&t.actions.push(e)}else t.actions.push(e);else if(e.condition){let t=this.$fhirpath.evaluate(i.resource,e.condition);e.hasOwnProperty("meets")?e.meets=e.meets&&t.every((t=>t)):e.meets=t.every((t=>t))}else e.meets=!0;this.items.push(t)}else for(let i of this.actions)i.row||(i.meets=i.emptyDisplay);if(this.topActions=this.actions.filter((t=>!t.row&&t.meets)),t.link){let e=t.link.find((t=>"next"===t.relation));e?this.addItems(e.url):this.loading=!1}else this.loading=!1})).catch((t=>{this.loading=!1,console.log(t)})):(this.loading=!1,console.log("Unable to fetch",t,e.status))})).catch((t=>{this.loading=!1,console.log(t)}))},processContent:async function(t){if(Array.isArray(t)){let e=await Promise.all(t.map(this.processContent));return e.join(" ")}return a(t)?t.code&&t.system?await this.$fhirutils.codeLookup(t.system,t.code):t.display?t.display:t.code?t.code:t.reference?await this.$fhirutils.resourceLookup(t.reference):(console.log("Unable to process content:",t),"Unknown"):t},setupLink(t,e){return t.replace("ITEMID",e.id).replace("FHIRID",this.linkId)}}},l=o,n=i(3736),h=i(3453),d=i.n(h),c=i(3150),u=i(4228),p=i(4998),f=i(9762),v=i(6656),m=i(7921),g=(0,n.Z)(l,s,r,!1,null,null,null),y=g.exports;d()(g,{VBtn:c.Z,VContainer:u.Z,VDataTable:p.Z,VSpacer:f.Z,VToolbar:v.Z,VToolbarTitle:m.qW})},6869:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.edit&&t.secondary?t._e():i("div",{staticClass:"ihris-section",attrs:{id:"section-"+t.name}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[i("v-card-title",{staticClass:"primary darken-1 white--text text-uppercase font-weight-bold"},[t._v(t._s(t.$t("App.fhir-resources-texts."+t.title))+" ")]),i("v-card-text",{staticClass:"my-3"},[t._t("default",null,{source:t.slotProps.source})],2)],1)],1)},r=[],a={name:"ihris-section",props:["name","slotProps","title","description","edit","secondary"],data:function(){return{}},created:function(){},watch:{},methods:{}},o=a,l=i(3736),n=i(3453),h=i.n(n),d=i(2371),c=i(7118),u=(0,l.Z)(o,s,r,!1,null,null,null),p=u.exports;h()(u,{VCard:d.Z,VCardText:c.ZB,VCardTitle:c.EB})},728:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{key:t.pageKey,staticClass:"my-3"},[i("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("default",null,{source:t.source}),i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}})],1)],2)],1)},r=[],a=(i(6699),{name:"ihris-resource",props:["title","field","fhir-id","page","profile","section-menu","edit","links","constraints"],data:function(){return{fhir:{},orig:{},valid:!0,source:{data:{},path:""},path:"",loading:!1,overlay:!1,isEdit:!1,linktext:[],position:"",advancedValid:!0,loadingId:!1,loadingCv:!1,version:1,max:1,pageKey:0,rules:{min:t=>t>=1||"The Min is 1",max:t=>t<=this.max||`The Max is ${this.max}`}}},created:function(){if(this.fhirId)this.loading=!0,fetch("/fhir/"+this.field+"/"+this.fhirId).then((t=>{t.json().then((t=>{this.max=t.meta.versionId,this.orig=t,this.source={data:t,path:this.field},this.setLinkText(),this.loading=!1})).catch((t=>{console.log(this.field,this.fhirId,t)}))})).catch((t=>{console.log(this.field,this.fhirId,t)}));else if(this.$route.query){let e={resourceType:this.field},i=!1;for(let s of Object.keys(this.$route.query))if(s.startsWith(this.field+".")){i=!0;let r=s.substring(this.field.length+1).split("."),a=r.pop(),o=e;for(let e of r)if(e.includes("["))try{let t=e.split("["),i=t[0],s=t[1].slice(0,-1);if(o.hasOwnProperty(i)||(o[i]=[]),s){let t={};o[i][parseInt(s)]=t,o=t}else{let t={};o[i].push(t),o=t}}catch(t){console.log("Unable to process",s)}else o.hasOwnProperty(e)||(o[e]={},o=o[e]);if(a.includes("["))try{let t=a.split("["),e=t[0],i=t[1].slice(0,-1);o.hasOwnProperty(e)||(o[e]=[]),i?o[e][parseInt(i)]=this.$route.query[s]:o[e].push(this.$route.query[s])}catch(t){console.log("Unable to process",s)}else o[a]=this.$route.query[s]}i&&(this.source={data:e,path:this.field})}},computed:{hasFhirId:function(){return""!=this.fhirId&&!!this.fhirId}},methods:{getLinkField:function(t){let e=this.$fhirpath.evaluate(this.source.data,t);return!!e&&e[0]},getLinkUrl:function(t){let e;if(t.field&&(e=this.getLinkField(t.field)),e){if(e.includes("/")){let t=e.split("/");e=t[1]}return t.url.replace("FIELD",e)}return t.url},setLinkText:function(){for(let t in this.links){let e=this.links[t];if(e.text)this.linktext[t]=e.text;else if(e.field){let i=this.getLinkField(e.field);i&&this.$fhirutils.lookup(i).then((e=>{this.$set(this.linktext,t,e)}))}}},processFHIR:async function(){if(this.$refs.form.validate(),!this.valid)return;this.advancedValid=!0,this.overlay=!0,this.loading=!0;const t=async(e,i,s)=>{for(let a of s){let s=e,o=i;if(a.field&&!a.fieldType){let t;if(a.sliceName?a.field.startsWith("value[x]")?(t=a.field.substring(9),s+="."+t):(t=a.field.replace(":"+a.sliceName,""),s+="."+t):(t=a.field,s+="."+t),"1"!==a.max||"1"!==a.baseMax?i.hasOwnProperty(t)||(o[t]=[]):o[t]={},a.hasOwnProperty("value"))Array.isArray(o[t])?o[t].push(a.value):o[t]=a.value,o=o[t];else if(Array.isArray(o[t])){let e={};a.profile?e.url=a.profile:"extension"===t&&a.sliceName&&(e.url=a.sliceName),o[t].push(e),o=e}else o=o[t]}if(a.$children)try{await t(s,o,a.$children)}catch(r){this.advancedValid=!1,console.log(r)}if(a.constraints){a.errors=[];try{this.advancedValid=this.advancedValid&&await this.$fhirutils.checkConstraints(a.constraints,this.constraints,o,a.errors,this.fhirId)}catch(r){this.advancedValid=!1,a.errors.push("An unknown error occurred."),console.log(r)}}}};this.fhir={resourceType:this.field,meta:{profile:[this.profile]}};try{await t(this.field,this.fhir,this.$children)}catch(s){this.advancedValid=!1,console.log(s)}if(!this.advancedValid)return this.overlay=!1,this.loading=!1,void this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."});console.log("FINISHED PROCESS AND CHECK.");let e="/fhir/"+this.field,i={method:"POST",headers:{"Content-Type":"application/fhir+json"},redirect:"manual"};this.fhirId&&(this.fhir.id=this.fhirId,e+="/"+this.fhirId,i.method="PUT"),i.body=JSON.stringify(this.fhir),fetch(e,i).then((t=>{201!==t.status&&200!==t.status||t.json().then((t=>{this.overlay=!1,this.loading=!1,this.fhirId?(this.$store.commit("setMessage",{type:"success",text:"Update successful."}),setTimeout((()=>this.$router.go(0)),1e3)):this.$router.push({name:"resource_view",params:{page:this.page,id:t.id}})}))}))}}}),o=a,l=i(3736),n=i(3453),h=i.n(n),d=i(4228),c=i(6232),u=i(1058),p=i(624),f=(0,l.Z)(o,s,r,!1,null,null,null),v=f.exports;h()(f,{VContainer:d.Z,VForm:c.Z,VOverlay:u.Z,VProgressCircular:p.Z})}}]);
//# sourceMappingURL=fhir-primary.35c35ea5.js.map