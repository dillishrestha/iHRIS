"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[6515],{95424:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(73325),r=i(85827),a=i(70172),n=i(46952),o=i(17352),c=i(48085),l=i(2936),h=i(6505),u=i(19131),d=i(71824),p=(0,s.Z)(n.Z,u.Z,h.Z,c.Z,(0,o.d)("chipGroup"),(0,l.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,d.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r.Zq,t)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const r=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(r,s),e)}})},76515:function(t,e,i){i.r(e),i.d(e,{default:function(){return j}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-xs":""}},[i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}}),i("v-btn",{attrs:{icon:""},on:{click:function(e){t.overlay=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1),i("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",clipped:"",permanent:"",right:""}},[i("v-list",{staticClass:"white--text"},[i("v-list-item",[i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){return t.$router.push("/resource/view/bwpractitioner/"+t.queries.practitioner)}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-close-circle-outline")]),i("span",[t._v("View Health Profession")])],1)],1),i("v-divider",{attrs:{color:"white"}}),t.canEditInitialRegistration?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(e){return t.$router.push("/questionnaire/bhpc-registration/bhpc-registration/"+t.queries.id+"?practitioner="+t.queries.practitioner+"&category=initial")}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-check-decagram")]),i("span",[t._v("Edit Registration")])],1)],1):t._e(),t.canEditChangeProfession?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(e){return t.$router.push("/questionnaire/bhpc-registration/bhpc-registration/"+t.queries.id+"?practitioner="+t.queries.practitioner+"&category=profchange")}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-check-decagram")]),i("span",[t._v("Edit Registration")])],1)],1):t._e(),t.canApproveRegistration?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(e){return t.$router.push("/questionnaire/bhpc-approve-registration/bhpc-registration-status?practitioner="+t.queries.practitioner+"&status="+t.latest_status_id+"&category=initial")}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-check-decagram")]),i("span",[t._v("Approve Registration")])],1)],1):t._e(),t.canApproveChangeProfession?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(e){return t.$router.push("/questionnaire/bhpc-approve-registration/bhpc-registration-status?practitioner="+t.queries.practitioner+"&status="+t.latest_status_id+"&category=profchange")}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-check-decagram")]),i("span",[t._v("Approve Prof Change")])],1)],1):t._e(),t.canChangeStatus?i("v-list-item",[i("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(e){return t.$router.push("/questionnaire/bhpc-change-registration-status/bhpc-registration-status?practitioner="+t.queries.practitioner+"&status="+t.latest_status_id)}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-check-decagram")]),i("span",[t._v("Change Status")])],1)],1):t._e(),t.canPrintCertificate?i("v-list-item",[i("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:function(e){return t.print_certificate("blue_card")}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-download")]),i("span",[t._v("Blue Card")])],1)],1):t._e(),t.canPrintCertificate?i("v-list-item",[i("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:function(e){return t.print_certificate("registration_certificate")}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-download")]),i("span",[t._v("Registration Certificate")])],1)],1):t._e(),t.canPrintCertificate?i("v-list-item",[i("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:function(e){return t.print_certificate("letter_good_standing")}}},[i("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-download")]),i("span",[t._v("Letter of Good Standing")])],1)],1):t._e()],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px",transition:"dialog-transition"},model:{value:t.renewDialog,callback:function(e){t.renewDialog=e},expression:"renewDialog"}},[i("v-card",[i("v-toolbar",{staticClass:"darken-1 white--text text-uppercase font-weight-bold",attrs:{color:"primary",dark:""}},[t._v(" License Renewal "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(e){t.renewDialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1),i("v-card-text",[i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-text-field",t._g({attrs:{label:"Renewal Date*","prepend-icon":"mdi-event",readonly:""},model:{value:t.renewalDateFormatted,callback:function(e){t.renewalDateFormatted=e},expression:"renewalDateFormatted"}},s))]}}]),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[i("v-date-picker",{on:{change:function(e){t.renewalDateFormatted=t.formatDate(t.renewalDate)},input:function(e){t.dateMenu=!1}},model:{value:t.renewalDate,callback:function(e){t.renewalDate=e},expression:"renewalDate"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"success",disabled:!t.renewalDate||t.disableRenewalBtn},on:{click:t.renew}},[t._v("Renew")])],1)],1)],1),i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[i("v-card-actions",{attrs:{justify:"space-around"}},[i("v-btn",{attrs:{outlined:"",color:"indigo",disabled:!t.canRenewLicense},on:{click:function(e){t.renewDialog=!0}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-autorenew")]),t._v("Renew License ")],1),i("v-btn",{attrs:{outlined:"",color:"primary darken-1",disabled:!t.canChangeProfession,to:"/questionnaire/bhpc-registration/bhpc-registration?practitioner="+t.queries.practitioner+"&category=profchange"}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-swap-horizontal")]),t._v("Change Profession ")],1),i("v-btn",{attrs:{disabled:"bhpc-role-admin-officer"!==t.$store.state.user.role,outlined:"",color:"primary darken-1",to:"/questionnaire/bhpc-profession-change-exam/bhpc-profession-change-exam?practitioner="+t.queries.practitioner+"&registration="+t.queries.id}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-swap-horizontal")]),t._v("Add Prof Change Exam ")],1)],1),i("v-card-title",{staticClass:"primary darken-1 white--text text-uppercase font-weight-bold"},[t._v(" BHPC Registration ")]),i("v-card-text",{staticClass:"my-3"},[i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Full Name:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.practitioner.name))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Status:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.registration.status))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Status Reason:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.registration.reason))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("BHPC Registration Type:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.registration.regType))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Profession:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.registration.prof.type)+", "+t._s(t.registration.prof.sub))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Application Date:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.registration.appDate))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Registration Date:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.registration.regDate))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Submitted Documents:")])]),i("v-col",{attrs:{cols:"8"}},[t._l(t.registration.docs,(function(e){return[i("div",{key:e.name},[t._v(t._s(e.name))])]}))],2)],1),i("v-divider"),i("v-row",[i("v-col",{attrs:{cols:"auto"}},[i("v-chip",{attrs:{color:"primary"}},[t._v(t._s(t.registration.regNumber))])],1),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-chip",{attrs:{color:"secondary"}},[t._v(t._s(t.registration.hpNumber))]),i("br")],1)],1)],1)],1),i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[i("v-card-title",{staticClass:"primary darken-1 white--text text-uppercase font-weight-bold"},[t._v(" BHPC Current License ")]),i("v-card-text",{staticClass:"my-3"},[i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Number:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.license.number))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Start:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.license.start))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("End:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(t.license.end))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Status:")])]),i("v-col",{attrs:{cols:"8"}},["Expired"==t.license.status?i("v-chip",{attrs:{color:"error"}},[t._v(t._s(t.license.status))]):i("v-chip",{attrs:{color:"success"}},[t._v(t._s(t.license.status))])],1)],1),i("v-divider")],1)],1),t._l(t.profChangeExam,(function(e){return i("v-card",{key:e.id,staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[i("v-card-title",{staticClass:"primary darken-1 white--text text-uppercase font-weight-bold"},[t._v(" Profession Change Exam ")]),i("v-card-text",{staticClass:"my-3"},[i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Date:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(e.date))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Score:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(t._s(e.score))])],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Assessment:")])]),i("v-col",{attrs:{cols:"8"}},["fail"==e.assessmentCode?i("v-chip",{attrs:{color:"error"}},[t._v(t._s(e.assessment))]):i("v-chip",{attrs:{color:"success"}},[t._v(t._s(e.assessment))])],1)],1),i("v-divider"),i("v-row",{staticClass:"justify-space-between"},[i("v-col",{attrs:{cols:"4"}},[i("span",{staticClass:"font-weight-bold"},[t._v("Attempt:")])]),i("v-col",{attrs:{cols:"8"}},[t._v(" "+t._s(e.attempt)+" ")])],1),i("v-row",{staticClass:"justify-space-between"},[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:function(i){return t.$router.push("/questionnaire/bhpc-profession-change-exam/bhpc-profession-change-exam/"+e.id+"?practitioner="+t.queries.practitioner+"&registration="+t.queries.id)}}},[t._v(" Edit ")])],1),i("v-divider")],1)],1)}))],2)},r=[],a={props:["queries"],data(){return{latest_registration:!1,disableRenewalBtn:!1,renewDialog:!1,renewalDate:"",dateMenu:!1,renewalDateFormatted:"",overlay:!1,latest_status_id:"",registration:{prof:{type:"",sub:""},docs:[],status:"",statusCode:"",reason:"",reasonCode:""},profChangeExam:[],practitioner:{name:""},license:{number:"",start:"",end:"",lastRenewed:""}}},computed:{canEditInitialRegistration(){return"bhpc-role-admin-officer"===this.$store.state.user.role&&"pending"===this.registration.statusCode&&"new_file"===this.registration.reasonCode},canEditChangeProfession(){return"bhpc-role-admin-officer"===this.$store.state.user.role&&"pending"===this.registration.statusCode&&"upgrade"===this.registration.reasonCode},canApproveRegistration(){return"bhpc-role-registrar"===this.$store.state.user.role&&("pending"===this.registration.statusCode||"rejected"===this.registration.statusCode)&&"new_file"===this.registration.reasonCode},canApproveChangeProfession(){return"bhpc-role-registrar"===this.$store.state.user.role&&("pending"===this.registration.statusCode||"rejected"===this.registration.statusCode)&&"upgrade"===this.registration.reasonCode},canRenewLicense(){return!("bhpc-role-admin-officer"!==this.$store.state.user.role&&"bhpc-role-registrar"!==this.$store.state.user.role||"active"!=this.registration.statusCode&&"upgrade"!=this.registration.statusCode)},canChangeProfession(){let t=this.profChangeExam.find((t=>"pass"===t.assessmentCode));return!("bhpc-role-admin-officer"!==this.$store.state.user.role||"active"!=this.registration.statusCode||!this.profChangeExam.length||!t)},canChangeStatus(){return("bhpc-role-admin-officer"===this.$store.state.user.role||"bhpc-role-registrar"===this.$store.state.user.role)&&"pending"!==this.registration.statusCode&&"rejected"!==this.registration.statusCode},canPrintCertificate(){return("bhpc-role-admin-officer"===this.$store.state.user.role||"bhpc-role-registrar"===this.$store.state.user.role)&&"active"==this.registration.statusCode}},methods:{formatDate(t){if(!t)return null;const[e,i,s]=t.split("-");return`${s}-${i}-${e}`},print_certificate(t){this.overlay=!0,fetch("/site/bhpc/"+t+"/"+this.queries.id+"/"+this.queries.practitioner).then((t=>{t.blob().then((t=>{fetch("/fhir/Practitioner/"+this.queries.practitioner).then((e=>{e.json().then((e=>{this.overlay=!1;let i="",s=e.name.find((t=>{t.use}));if(!s&&e.name&&e.name.length>0&&(s=e.name[0]),s){let t=s.extension&&s.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/ihris-practitioner-prefix"===t.url));t&&(i+=t.valueCoding.display),s.given&&(i&&(i+=" "),i+=s.given.join(" ")),s.family&&(i&&(i+=" "),i+=s.family)}let r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.download=`${i}.pdf`,r.click()})).catch((()=>{this.overlay=!1}))})).catch((()=>{this.overlay=!1}))})).catch((()=>{this.overlay=!1}))})).catch((()=>{this.overlay=!1}))},renew(){this.overlay=!0,this.disableRenewalBtn=!0,this.renewDialog=!1;let t={reg_status_id:this.latest_status_id,practitioner:this.queries.practitioner,reg_id:this.queries.id,license_number:this.registration.regNumber,date:this.renewalDate};fetch("/site/bhpc/renewLicense",{method:"POST",headers:{"Content-Type":"application/json"},redirect:"manual",body:JSON.stringify(t)}).then((t=>{this.overlay=!1,this.disableRenewalBtn=!1,201===t.status?(this.getRegistration(),this.getPractitioner(),this.getLatestLicense(),this.getLatestStatus(),this.$store.commit("setMessage",{type:"success",text:"License Renewed"})):this.$store.commit("setMessage",{type:"error",text:"Failed to renew license."})})).catch((()=>{this.overlay=!1,this.disableRenewalBtn=!1,this.$store.commit("setMessage",{type:"error",text:"Failed to renew license."})}))},getRegistration(){fetch("/fhir/Basic/"+this.queries.id).then((t=>{t.json().then((async t=>{let e=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-registration-type"===t.url));e&&(this.registration.regType=e.valueCoding.display,this.registration.regType||(this.registration.regType=await this.$fhirutils.codeLookup(e.valueCoding.system,e.valueCoding.code)));let i=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bw-profession-subtype"===t.url));i&&fetch("/fhir/Basic/"+i.valueReference.reference.split("/")[1]).then((t=>{t.json().then((async t=>{let e=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/ihris-basic-name"===t.url));e&&(this.registration.prof.sub=e.valueString);let i=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bw-profession-type"===t.url));this.registration.prof.type=i.valueCoding.display,this.registration.prof.type||(this.registration.prof.type=await this.$fhirutils.codeLookup(i.valueCoding.system,i.valueCoding.code))}))}));let s=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/application-date"===t.url));if(s){let t=s.valueDate.split("-");t=t[2]+"-"+t[1]+"-"+t[0],this.registration.appDate=t}let r=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/registration-date"===t.url));if(r){let t=r.valueDate.split("-");t=t[2]+"-"+t[1]+"-"+t[0],this.registration.regDate=t}let a=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-registration-number"===t.url));a&&(this.registration.regNumber=a.valueString);let n=t.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-hp-number"===t.url));n&&(this.registration.hpNumber=n.valueString);let o=t.extension.filter((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-submitted-document"===t.url));this.registration.docs=[];for(let c of o){let t=c.extension.find((t=>"name"===t.url));if(t){let e=t.valueCoding.display;e||(e=await this.$fhirutils.codeLookup(t.valueCoding.system,t.valueCoding.code)),this.registration.docs.push({name:t.valueCoding.code+": "+e})}}}))}))},getProfChangeExam(){let t=`?_profile=http://ihris.org/fhir/StructureDefinition/bhpc-profession-change-exam-profile&practitioner=Practitioner/${this.queries.practitioner}&bhpcregistration=Basic/${this.queries.id}`;fetch("/fhir/Basic"+t).then((t=>{t.json().then((t=>{if(t&&t.entry&&t.entry.length)for(let e of t.entry){let t={};t.id=e.resource.id,t.score=e.resource.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/oral-score"===t.url))?.valueDecimal,t.date=e.resource.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/exam-date"===t.url))?.valueDate,t.assessment=e.resource.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-exam-assessment"===t.url))?.valueCoding?.display,t.assessmentCode=e.resource.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-exam-assessment"===t.url))?.valueCoding?.code,t.attempt=e.resource.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/exam-attempt"===t.url))?.valueInteger,this.profChangeExam.push(t)}}))}))},getPractitioner(){fetch("/fhir/Practitioner/"+this.queries.practitioner+"?_elements=name").then((t=>{t.json().then((t=>{this.practitioner.name=t.name[t.name.length-1].given.join(", ")+" "+t.name[t.name.length-1].family}))}))},getLatestLicense(){let t={_profile:"http://ihris.org/fhir/StructureDefinition/bhpc-license-profile",bhpcregistration:"Basic/"+this.queries.id};fetch("/site/bw/latestResourceById?params="+JSON.stringify(t)).then((t=>{t.json().then((t=>{let e=t.entry[0].resource,i=e.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/start-date"===t.url)).valueDate;i=i.split("-"),this.license.start=i[2]+"-"+i[1]+"-"+i[0];let s=e.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/end-date"===t.url)).valueDate;s>(new Date).toJSON().slice(0,10)?this.license.status="Active":this.license.status="Expired",s=s.split("-"),this.license.end=s[2]+"-"+s[1]+"-"+s[0],this.license.number=e.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/license-number"===t.url)).valueString}))}))},async getLatestRegistration(){let t={_profile:"http://ihris.org/fhir/StructureDefinition/bhpc-registration-profile",practitioner:"Practitioner/"+this.queries.practitioner};fetch("/site/bw/latestResourceById?params="+JSON.stringify(t)).then((t=>{t.json().then((t=>{t.entry[0].resource.id===this.queries.id&&(this.latest_registration=!0)}))}))},async getLatestStatus(){let t={_profile:"http://ihris.org/fhir/StructureDefinition/bhpc-registration-status-profile",bhpcregistration:"Basic/"+this.queries.id,practitioner:"Practitioner/"+this.queries.practitioner};fetch("/site/bw/latestResourceById?params="+JSON.stringify(t)).then((t=>{t.json().then((async t=>{let e=t.entry[0].resource;this.latest_status_id=e.id;let i=e.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-file-status"===t.url)).valueCoding;this.registration.statusCode=i.code,this.registration.status=i.display,this.registration.status||(this.registration.status=await this.$fhirutils.codeLookup(i.system,i.code));let s=e.extension.find((t=>"http://ihris.org/fhir/StructureDefinition/bhpc-file-status-reason"===t.url)).valueCoding;this.registration.reason=s.display,this.registration.reasonCode=s.code,this.registration.reason||(this.registration.reason=await this.$fhirutils.codeLookup(s.system,s.code))}))}))}},created(){this.getRegistration(),this.getProfChangeExam(),this.getLatestRegistration(),this.getPractitioner(),this.getLatestLicense(),this.getLatestStatus()}},n=a,o=i(43736),c=i(43453),l=i.n(c),h=i(63150),u=i(32371),d=i(37118),p=i(95424),v=i(82102),g=i(4228),f=i(89771),m=i(4497),b=i(11418),C=i(96428),_=i(16816),w=i(97620),y=i(41152),x=i(65132),k=i(51058),D=i(90624),S=i(62877),$=i(99762),R=i(55978),q=i(36656),P=(0,o.Z)(n,s,r,!1,null,null,null),j=P.exports;l()(P,{VBtn:h.Z,VCard:u.Z,VCardActions:d.h7,VCardText:d.ZB,VCardTitle:d.EB,VChip:p.Z,VCol:v.Z,VContainer:g.Z,VDatePicker:f.Z,VDialog:m.Z,VDivider:b.Z,VIcon:C.Z,VList:_.Z,VListItem:w.Z,VMenu:y.Z,VNavigationDrawer:x.Z,VOverlay:k.Z,VProgressCircular:D.Z,VRow:S.Z,VSpacer:$.Z,VTextField:R.Z,VToolbar:q.Z})}}]);
//# sourceMappingURL=6515.1905ac26.js.map