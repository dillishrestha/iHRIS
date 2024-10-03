"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[8926],{35098:function(e,t,i){i.d(t,{Z:function(){return c}});i(26699);var s=i(55648),r=i(98119),o=i(70172),a=i(2936),n=i(48085),l=i(36591),h=i(73325),d=i(71824),c=(0,h.Z)(s.Z,a.Z,l.Z).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(r.Z,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.Z,{props:{color:e}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...s.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e[`v-alert--border-${this.border}`]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,d.fK)("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},55533:function(e,t,i){i.d(t,{Z:function(){return o}});var s=i(48085),r=i(73325),o=(0,r.Z)(s.Z).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},36591:function(e,t,i){var s=i(70538);t["Z"]=s["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},31997:function(e,t,i){i.d(t,{x:function(){return r}});var s=i(44479);const r={data(){return{hide:!1,pathes:{}}},methods:{hideShowField(e,t){if(e){this.hide=!0;let i=e.split("+=");for(let e of i){let i=e.split("|"),r=i[0],o=i[1],a=i[2];this.pathes[r]||(this.pathes[r]={data:[]}),this.pathes[r].data.push({expectedVal:a,operator:o}),s.Y.$on(r,(e=>{this.pathes[r].selectedVal=e,this.hide=!1;let i={};for(let s in this.pathes){let e=this.pathes[s].selectedVal;for(let r of this.pathes[s].data){let o=r.expectedVal,a=r.operator;"="===a&&o==e||"!="===a&&o!=e||"exists"===a&&""!==e||">"===a&&o>e||"<"===a&&o<e||"<="===a&&o<=e||">="===a&&o>=e?i[s+"#"+o]=!1:(i[s+"#"+o]=!0,t&&"all"!==t||(this.hide=!0))}}if(t&&"any"===t){let e=!1;for(let t in i)i[t]||(e=!0);e||(this.hide=!0)}}))}}else this.hide=!1}}}},10216:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ihris-section"},[i("v-alert",{attrs:{prominent:"",border:"top",type:e.alertType,"colored-border":"",elevation:"2"}},[e._v(" "+e._s(e.text)+" ")])],1)},r=[],o={name:"ihris-section",props:["type","text"],computed:{alertType(){return this.type?this.type:"info"}}},a=o,n=i(43736),l=i(43453),h=i.n(l),d=i(35098),c=(0,n.Z)(a,s,r,!1,null,null,null),u=c.exports;h()(c,{VAlert:d.Z})},6187:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"d-none"},[i("v-text-field",{attrs:{readonly:"","hide-details":"",dense:"",disabled:""},model:{value:e.hiddenValue,callback:function(t){e.hiddenValue=t},expression:"hiddenValue"}})],1)},r=[],o={name:"ihris-hidden",props:["label","path","hiddenType","hiddenValue"],data:function(){return{qField:"value"+this.hiddenType,value:this.hiddenValue}}},a=o,n=i(43736),l=i(43453),h=i.n(l),d=i(55978),c=(0,n.Z)(a,s,r,!1,null,null,null),u=c.exports;h()(c,{VTextField:d.Z})},33090:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hide?e._e():i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[i("v-card-title",{staticClass:"primary white--text font-weight-bold"},[e._v(e._s(e.$t("App.fhir-resources-texts."+e.label)))]),i("v-divider"),e._l(e.errors,(function(t,s){return i("v-card-text",{key:s,staticClass:"error white--text font-weight-bold"},[e._v(e._s(t))])})),i("v-card-text",{staticClass:"my-3"},[e._t("default",null,{source:e.source})],2)],2)},r=[],o=i(31997),a={name:"ihris-questionnaire-group",props:["id","profile","sliceName","field","label","slotProps","path","constraints","limit","displayCondition","enableBehavior"],mixins:[o.x],data:function(){return{isQuestionnaireGroup:!0,source:{path:"",data:[]},errors:[]}},created:function(){this.hideShowField(this.displayCondition,this.enableBehavior),this.setupData()},watch:{slotProps:{handler(){this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.source.fromArray=!0;else{let e;if(e=this.profile?this.profile:this.sliceName,e){let t=this.field.replace(/([^:]+):(.+)/,"$1.where(url='"+e+"')");this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t),this.limit&&(this.source.data=this.$fhirpath.evaluate(this.source.data,this.limit))}else this.limit?this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,this.limit):this.source=this.slotProps.source}if(this.source.data.length>1){let e,t=this.path.split("[");for(let i of t){let t=i.split("]");Number.isInteger(parseInt(t[0]))&&(e=t[0])}(e||0==e)&&(this.source.data=this.source.data[e])}}}}},n=a,l=i(43736),h=i(43453),d=i.n(h),c=i(32371),u=i(37118),p=i(11418),f=(0,l.Z)(n,s,r,!1,null,null,null),m=f.exports;d()(f,{VCard:c.Z,VCardText:u.ZB,VCardTitle:u.EB,VDivider:p.Z})},92048:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ihris-section pb-4",attrs:{id:"section-"+e.id}},[e.hide?e._e():i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[i("v-card-title",{staticClass:" justify-center darken-1 primary white--text text-uppercase font-weight-bold"},[e._v(e._s(e.$t("App.fhir-resources-texts."+e.label)))]),e._l(e.errors,(function(t,s){return i("v-card-text",{key:s,staticClass:"error white--text font-weight-bold"},[e._v(e._s(t))])})),i("v-card-text",{staticClass:"my-3"},[e._t("default",null,{source:e.source})],2)],2)],1)},r=[],o=i(31997),a={name:"ihris-questionnaire-section",props:["id","profile","sliceName","field","slotProps","label","description","path","constraints","link-id","link-field","search-field","search-field-target","displayCondition","enableBehavior"],mixins:[o.x],data:function(){return{isQuestionnaireGroup:!0,resourceId:"",source:{path:"",data:[]},errors:[]}},created:function(){this.hideShowField(this.displayCondition,this.enableBehavior),this.setupData()},watch:{slotProps:{handler(){this.setupData()},deep:!0}},methods:{setupData:function(){if(this.searchField&&this.linkId){let e;if(2===this.searchField.split(":").length){let t=this.searchField.split(":")[0];e="fhir/"+t+"?_id="+this.linkId+"&_include="+this.searchField}else{e="/fhir/"+this.field;let t=[];this.profile&&t.push("_profile="+this.profile);let i="";this.searchFieldTarget&&(i=this.searchFieldTarget+"/"),i+=this.linkId,this.searchField?t.push(this.searchField+"="+i):t.push(this.linkField.substring(this.linkField.indexOf(".")+1)+"="+i),e+="?"+t.join("&")}e+="&_sort=-_id&_count=1",fetch(e).then((e=>{200===e.status&&e.json().then((async e=>{e.entry&&e.entry.length>0&&(this.resourceId=e.entry[0].resource.id,this.source={path:this.field,data:e.entry[0].resource})}))}))}else if(this.slotProps&&this.slotProps.source)if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{let e;if(e=this.profile?this.profile:this.sliceName,e){let t=this.field.replace(/([^:]+):(.+)/,"$1.where(url='"+e+"')");this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t),this.limit&&(this.source.data=this.$fhirpath.evaluate(this.source.data,this.limit))}else this.limit?this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,this.limit):this.source=this.slotProps.source}}}},n=a,l=i(43736),h=i(43453),d=i.n(h),c=i(32371),u=i(37118),p=(0,l.Z)(n,s,r,!1,null,null,null),f=p.exports;d()(p,{VCard:c.Z,VCardText:u.ZB,VCardTitle:u.EB})},7847:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"my-3"},[i("ihris-practitioner-intro"),i("v-form",{ref:"form",attrs:{id:"app"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e._t("default",null,{source:e.source}),i("v-overlay",{attrs:{value:e.overlay}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}}),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.overlay=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",clipped:"",permanent:"",right:""}},[i("v-list",{staticClass:"white--text"},[i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(t){return e.$router.go(-1)}}},[i("v-icon",{attrs:{light:""}},[e._v("mdi-close-circle-outline")]),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Cancel")))])],1),i("v-spacer"),e.valid?i("v-btn",{staticClass:"success darken-1",attrs:{disabled:!e.valid||e.isSaveInProgress,dark:""},on:{click:function(t){return e.processFHIR()}}},[i("v-icon",{attrs:{light:""}},[e._v("mdi-content-save")]),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Save")))])],1):i("v-btn",{staticClass:"green",attrs:{dark:""},on:{click:function(t){return e.$refs.form.validate()}}},[i("v-icon",{attrs:{light:""}},[e._v("mdi-content-save")]),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.Save")))])],1)],1),"/questionnaire/ihris-practitioner/practitioner"===e.$router.history.current.path?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(t){return e.$router.push("/bulk-registration")}}},[i("v-icon",{attrs:{light:""}},[e._v("mdi-attachment")]),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.uploadCSV")))])],1)],1):e._e(),"/questionnaire/ihris-practitioner/practitioner"===e.$router.history.current.path?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:e.getCsvTemplate}},[i("v-icon",{attrs:{light:""}},[e._v("mdi-download")]),i("span",[e._v(e._s(e.$t("App.hardcoded-texts.getCSVTemplate")))])],1)],1):e._e(),i("v-divider",{attrs:{color:"white"}}),e.sectionMenu?i("v-subheader",{staticClass:"white--text"},[i("h2",[e._v(e._s(e.$t("App.hardcoded-texts.Sections")))])]):e._e(),e._l(e.sectionMenu,(function(t){return i("v-list-item",{key:t.id,class:"#section-"+t.id===e.path?"highlighted":"",attrs:{href:"#section-"+t.id}},[i("v-list-item-content",{staticClass:"white--text"},[i("v-list-item-title",{staticClass:"text-uppercase"},[i("h4",[e._v(e._s(e.$t("App.fhir-resources-texts."+t.title)))])]),i("v-list-item-subtitle",{staticClass:"white--text"},[e._v(e._s(e.$t("App.fhir-resources-texts."+t.desc))+" ")])],1)],1)}))],2)],1)],2)],1)},r=[],o=(i(26699),i(9669)),a=i.n(o);const n=i(17673);var l={name:"ihris-questionnaire",props:["id","url","title","description","purpose","section-menu","view-page","edit","constraints","field","profile","fhir-id"],data:function(){return{fhir:{},loading:!1,overlay:!1,isEdit:!1,valid:!0,advancedValid:!0,position:"",source:{path:"",data:{}},introSource:{path:"",data:{}},path:"",isSaveInProgress:!1}},watch:{$route:function(){this.path=this.$route.hash}},created:function(){this.fhirId&&(this.loading=!0,fetch("/fhir/"+this.field+"/"+this.fhirId).then((e=>{e.json().then((e=>{this.orig=e,this.source={data:e,path:this.field},this.setLinkText(),this.loading=!1})).catch((e=>{console.log(this.field,this.fhirId,e)}))})).catch((e=>{console.log(this.field,this.fhirId,e)})))},methods:{getLinkField:function(e){let t=this.$fhirpath.evaluate(this.source.data,e);return!!t&&t[0]},getLinkUrl:function(e){let t;if(e.field&&(t=this.getLinkField(e.field)),t){if(t.includes("/")){let e=t.split("/");t=e[1]}return e.url.replace("FIELD",t)}return e.url},setLinkText:function(){for(let e in this.links){let t=this.links[e];if(t.text)this.linktext[e]=t.text;else if(t.field){let i=this.getLinkField(t.field);i&&this.$fhirutils.lookup(i).then((t=>{this.$set(this.linktext,e,t)}))}}},logout(){this.loading=!0,fetch("/auth/logout").then((()=>{this.loading=!1,this.$store.commit("logout"),this.$store.commit("setMessage",{type:"success",text:"You change your password success fully."}),this.$router.push({path:"/"})}))},handleScroll(){this.hasScrolled=window.top.scrollY>=100,this.sectionMenu.map((e=>{let t=document.getElementById(`section-${e.id}`),i=t.offsetTop;pageYOffset>=i&&(this.path=`#section-${e.id}`)}))},getCsvTemplate(){a()({url:"/config/csvTemplate",method:"GET",responseType:"blob"}).then((e=>{let t=new Blob([e.data],{type:"application/vnd.ms-excel"}),i=document.createElement("a");i.href=window.URL.createObjectURL(t),i.download="User_bulk_registration_template.xlsx",i.click()}))},processFHIR:async function(){if(this.$refs.form.validate(),!this.valid)return;this.isSaveInProgress=!0,this.advancedValid=!0,this.overlay=!0,this.loading=!0;let e=[];this.fhirId&&e.push({profile:this.profile,id:this.fhirId});const t=e=>{let t=[];for(let i of e)for(let e of i.$children)if(e.isExtension)for(let i of e.$children)t.push(i);return t},i=async(s,r,o)=>{o||(o={});for(let n of r){let r=s,l={};if(n.isArray);else if(n.isQuestionnaireGroup){n.resourceId&&e.push({profile:n.profile,id:n.resourceId});let t={linkId:n.path,text:n.label,item:[]};r.push(t),r=t.item}else if(n.qField){let e;o.hasOwnProperty(n.path)?e=o[n.path]:(e={linkId:n.path,answer:[]},o[n.path]=e,r.push(e));let t={};if(t[n.qField]=n.value,e.answer.push(t),n.constraints){n.errors=[];try{this.advancedValid=this.advancedValid&&await this.$fhirutils.checkConstraints(n.constraints,this.constraints,n.value,n.errors)}catch(a){this.advancedValid=!1,n.errors.push("An unknown error occurred."),console.log(a)}}}if(n.$children)try{let e=[];if(n.isArray){let i=t(n.$children);i.length>0&&(e=i)}0===e.length&&(e=n.$children),await i(r,e,l)}catch(a){this.advancedValid=!1,console.log(a)}if(n.isQuestionnaireGroup&&n.constraints){n.errors=[];try{this.advancedValid=this.advancedValid&&await this.$fhirutils.checkConstraints(n.constraints,this.constraints,r,n.errors)}catch(a){this.advancedValid=!1,n.errors.push("An unknown error occurred."),console.log(a)}}}};this.fhir={resourceType:"QuestionnaireResponse",questionnaire:this.url,status:"completed",item:[]};try{await i(this.fhir.item,this.$children)}catch(s){this.advancedValid=!1,console.log(s)}if(!this.advancedValid)return this.overlay=!1,this.loading=!1,this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."}),void(this.isSaveInProgress=!1);this.fhir.item.find((e=>"Practitioner:communication"===e.linkId))&&this.fhir.item.find((e=>"Practitioner:communication"===e.linkId)).item.map(((e,t)=>{e.linkId=`Practitioner:communication[${t}]`,e.item[0].linkId=`Practitioner.communication[${t}]`})),this.$route.query.editing=!1,e.length>0&&(this.$route.query.editingResources=JSON.stringify(e),this.$route.query.editing=!0),fetch("/fhir/QuestionnaireResponse?"+n.stringify(this.$route.query),{method:"POST",headers:{"Content-Type":"application/fhir+json"},redirect:"manual",body:JSON.stringify(this.fhir)}).then((e=>{this.isSaveInProgress=!1,201===e.status?(e.json().then((e=>{let t;if(this.overlay=!1,this.loading=!1,this.viewPage){if(e.meta.tag){let i=e.meta.tag.find((e=>"http://ihris.org/fhir/tags/resource"===e.system));i&&i.code&&(t=i.code)}if(!t&&e.subject&&e.subject.reference&&(t=e.subject.reference),t){let i=t.split("/");i=i[1]?i[1]:t,"http://ihris.org/fhir/Questionnaire/ihris-change-password"===e.questionnaire&&this.logout(),this.$router.push({name:"resource_view",params:{page:this.viewPage,id:i}})}}t||this.$router.push({name:"home"})})),this.$store.commit("setMessage",{type:"success",text:this.$t("App.hardcoded-texts.Added successfully")})):(this.overlay=!1,this.loading=!1,e.json().then((e=>{let t;if("OperationOutcome"==e.resourceType)try{t=Array.from(new Set(e.issue.map((e=>e.diagnostics)))).join(", ")}catch(s){console.log("Unable to retrieve errors from ",e)}else t=e.message?e.message:"Unknown";this.$store.commit("setMessage",{type:"error",text:"An error occurred trying to save this record: "+t})})).catch((e=>{this.$store.commit("setMessage",{type:"error",text:"An unknown error occurred trying to save this record."}),console.log("Error on retrieving error status",e)})))})).catch((e=>{this.isSaveInProgress=!1,console.log(e),this.overlay=!1,this.loading=!1,this.isSaveInProgress=!1,this.$store.commit("setMessage",{type:"error",text:"Failed to update data."})}))}},components:{"ihris-practitioner-intro":()=>Promise.all([i.e(3986),i.e(2200),i.e(3113),i.e(5814),i.e(2657)]).then(i.bind(i,62765))}},h=l,d=i(43736),c=i(43453),u=i.n(c),p=i(63150),f=i(4228),m=i(11418),v=i(46232),g=i(96428),y=i(16816),b=i(97620),$=i(84562),_=i(65132),x=i(51058),C=i(90624),k=i(99762),P=i(55533),w=(0,d.Z)(h,s,r,!1,null,null,null),I=w.exports;u()(w,{VBtn:p.Z,VContainer:f.Z,VDivider:m.Z,VForm:v.Z,VIcon:g.Z,VList:y.Z,VListItem:b.Z,VListItemContent:$.km,VListItemSubtitle:$.oZ,VListItemTitle:$.V9,VNavigationDrawer:_.Z,VOverlay:x.Z,VProgressCircular:C.Z,VSpacer:k.Z,VSubheader:P.Z})},90614:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var s,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-template",{key:e.$route.path},[e._v(" Loading... ")])},o=[],a=i(70538),n={name:"fhir-report",props:{report:{type:String,default:""},terms:{type:Object,default:function(){return{}}},termsConditions:{type:Object,default:function(){return{}}},hideFilters:{type:Boolean,default:!1},hideCheckboxes:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},hideExport:{type:Boolean,default:!1},hideReportCustomization:{type:Boolean,default:!1},disableOpenResourcePage:{type:Boolean,default:!1}},data:function(){return{}},created:function(){this.$route.params&&this.$route.params.report?s=this.$route.params.report:this.report&&(s=this.report),this.getTemplate()},methods:{getTemplate:function(){fetch("/config/report/es/"+s).then((e=>{e.json().then((e=>{let t=this.terms,s=this.termsConditions,r=this.hideFilters,o=this.hideCheckboxes,n=this.hideLabel,l=this.hideExport,h=this.hideReportCustomization,d=this.disableOpenResourcePage,c=e=>{this.$emit("rowSelected",e)};a["default"].component("ihris-template",{name:"ihris-template",data:function(){return{reportData:e.reportData,dataURL:e.dataURL,terms:t,termsConditions:s,hideLabel:n,hideFilters:r,hideCheckboxes:o,hideExport:l,hideReportCustomization:h,disableOpenResourcePage:d}},components:{"ihris-es-report":()=>Promise.all([i.e(3986),i.e(2200),i.e(3113),i.e(5844)]).then(i.bind(i,91532)),"ihris-es-search-term":()=>Promise.all([i.e(3986),i.e(1276)]).then(i.bind(i,3370)),"ihris-sql-report":()=>Promise.all([i.e(3986),i.e(2200),i.e(3113),i.e(5844)]).then(i.bind(i,30825)),"ihris-sql-search-term":()=>Promise.all([i.e(3986),i.e(1276)]).then(i.bind(i,37536))},template:e.reportTemplate,methods:{rowSelected(e){c(e)},searchData:function(e,t,i){this.$set(this.terms,e,t),(this.terms[e]&&"object"===typeof this.terms[e]&&this.terms[e].length>0||"string"===typeof this.terms[e]&&""!==this.terms[e])&&this.$set(this.termsConditions,e,i)}}}),this.$forceUpdate()})).catch((e=>{console.log("error"),console.log(e),a["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this report</p>.</div>"}),this.$forceUpdate()}))})).catch((e=>{console.log(e),a["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this report</p>.</div>"}),this.$forceUpdate()}))}},components:{},beforeCreate:function(){a["default"].component("ihris-template",{template:"<div>Loading...</div>"})}},l=n,h=i(43736),d=(0,h.Z)(l,r,o,!1,null,null,null),c=d.exports},13985:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var s,r,o,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-template",[e._v(" Loading... ")])},n=[],l=i(70538),h={name:"fhir-page",props:["questionnaire","page","pageId"],data:function(){return{}},created:function(){!s&&this.questionnaire&&(s=this.questionnaire),!r&&this.page&&(r=this.page),!o&&this.pageId&&(o=this.pageId),this.getTemplate()},methods:{getTemplate:function(){fetch("/config/questionnaire/"+s+"/"+r).then((e=>{e.json().then((e=>{"OperationOutcome"===e.resourceType?l["default"].component("ihris-template",{name:"ihris-template",data:function(){return{issues:e.issue}},components:{"ihris-outcome":()=>i.e(2269).then(i.bind(i,5532))},template:'<div><ihris-outcome :issues="issues"></ihris-outcome></div>'}):l["default"].component("ihris-template",{name:"ihris-template",data:function(){return{viewPage:r,isEdit:!0,fhirId:o,sectionMenu:e.data.sectionMenu,hidden:e.data.hidden,initials:e.data.initials,constraints:e.data.constraints}},components:{"ihris-questionnaire":()=>i.e(8926).then(i.bind(i,7847)),"ihris-questionnaire-section":()=>i.e(8926).then(i.bind(i,92048)),"ihris-questionnaire-group":()=>i.e(8926).then(i.bind(i,33090)),"ihris-display":()=>i.e(8926).then(i.bind(i,10216)),"ihris-hidden":()=>i.e(8926).then(i.bind(i,6187)),"ihris-array":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,79486)),"fhir-extension":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,91355)),"fhir-codeable-concept":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,2692)),"fhir-human-name":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,8667)),"fhir-contact-point":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,76010)),"fhir-address":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,65537)),"fhir-backbone-element":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,35447)),"fhir-identifier":()=>Promise.all([i.e(3986),i.e(2200),i.e(3113),i.e(5814),i.e(2657)]).then(i.bind(i,53858)),"fhir-reference":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,26473)),"fhir-string":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,58245)),"fhir-text":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,42218)),"fhir-date":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,21854)),"fhir-date-time":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,50425)),"fhir-period":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(6049),i.e(2890),i.e(8384)]).then(i.bind(i,85481)),"fhir-boolean":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,48125)),"fhir-integer":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,83229)),"fhir-choice":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(5814),i.e(2890),i.e(2251)]).then(i.bind(i,53753)),"fhir-attachment":()=>Promise.all([i.e(3986),i.e(591),i.e(6473),i.e(6049),i.e(2890),i.e(8384)]).then(i.bind(i,46049)),"fhir-decimal":()=>i.e(7305).then(i.bind(i,67289))},template:e.template}),this.$forceUpdate()})).catch((e=>{console.log(e),l["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),this.$forceUpdate()}))})).catch((e=>{console.log(e),l["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),this.$forceUpdate()}))}},beforeCreate:function(){s=this.$route.params.questionnaire,r=this.$route.params.page,o=this.$route.params.id,l["default"].component("ihris-template",{template:"<div>Loading...</div>"})}},d=h,c=i(43736),u=(0,c.Z)(d,a,n,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=fhir-questionnaire.7be1a18c.js.map