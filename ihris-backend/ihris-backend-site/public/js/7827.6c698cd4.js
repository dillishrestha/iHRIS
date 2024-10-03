"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[7827],{35098:function(t,e,r){r.d(e,{Z:function(){return d}});r(26699);var s=r(55648),i=r(98119),o=r(70172),n=r(2936),a=r(48085),l=r(36591),c=r(73325),h=r(71824),d=(0,c.Z)(s.Z,n.Z,l.Z).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i.Z,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||a.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,h.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},36591:function(t,e,r){var s=r(70538);e["Z"]=s["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},77827:function(t,e,r){r.r(e),r.d(e,{default:function(){return B}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":""}},[r("v-overlay",{attrs:{value:t.overlayUnclosed}},[r("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}})],1),r("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},model:{value:t.confirmDeleteDialog,callback:function(e){t.confirmDeleteDialog=e},expression:"confirmDeleteDialog"}},[r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("About to delete a practitioner")]),r("v-card-text",[t._v(" Are you sure that you want to delete "+t._s(t.staffName)+"? This will delete everything associated with this record ")]),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("Cancel")]),r("v-spacer"),r("v-btn",{attrs:{color:"error"},on:{click:t.deletePractitioner}},[t._v("Yes, Proceed")])],1)],1)],1),r("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",clipped:"",permanent:"",right:""}},[r("v-list",{staticClass:"white--text"},[r("v-list-item",[r("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){return t.$router.push("/resource/view/practitioner/"+t.queries.id)}}},[r("v-icon",{attrs:{light:"",left:""}},[t._v("mdi-eye")]),r("span",[t._v("View Health Profession")])],1)],1)],1)],1),t.staffName?r("v-alert",{attrs:{border:"bottom",outlined:""}},[r("b",[t._v("Deleting: "+t._s(t.staffName))])]):t._e()],1)},i=[],o={props:["queries"],data(){return{valid:!0,overlayUnclosed:!1,confirmDeleteDialog:!1,staffName:""}},methods:{deletePractitioner(){fetch("/site/practitioner/deletePractitioner/"+this.queries.id,{method:"DELETE"}).then((t=>t.json().then((t=>{if(t.message)return this.overlay,this.$store.commit("setMessage",{type:t.type,text:t.message}),this.$router.push("/resource/search/practitioner")})).catch((()=>(this.$store.commit("setMessage",{type:"error",text:"An error has occured, try later"}),this.$router.go(-1)))))).catch((()=>(this.$store.commit("setMessage",{type:"error",text:"An error has occured, try later"}),this.$router.go(-1))))}},created(){this.overlayUnclosed=!0,this.$fhirutils.resourceLookup("Practitioner/"+this.queries.id).then((t=>{this.overlayUnclosed=!1,this.staffName=t,this.confirmDeleteDialog=!0}))}},n=o,a=r(43736),l=r(43453),c=r.n(l),h=r(35098),d=r(63150),u=r(32371),p=r(37118),v=r(4228),m=r(4497),g=r(96428),f=r(16816),y=r(97620),_=r(65132),b=r(51058),C=r(90624),$=r(99762),Z=r(36656),x=(0,a.Z)(n,s,i,!1,null,null,null),B=x.exports;c()(x,{VAlert:h.Z,VBtn:d.Z,VCard:u.Z,VCardActions:p.h7,VCardText:p.ZB,VContainer:v.Z,VDialog:m.Z,VIcon:g.Z,VList:f.Z,VListItem:y.Z,VNavigationDrawer:_.Z,VOverlay:b.Z,VProgressCircular:C.Z,VSpacer:$.Z,VToolbar:Z.Z})}}]);
//# sourceMappingURL=7827.6c698cd4.js.map