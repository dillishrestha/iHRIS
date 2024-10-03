"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[3825],{55533:function(e,t,i){i.d(t,{Z:function(){return a}});var r=i(48085),s=i(73325),a=(0,s.Z)(r.Z).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},71135:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{"grid-list-xs":""}},[i("v-overlay",{attrs:{value:e.overlay}},[i("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}}),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.overlay=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-card",[i("v-card-title",[e._v("Select Family Head Name")]),i("v-card-text",[i("v-row",[i("v-col",[i("v-text-field",{attrs:{label:"Search Job",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-col",{attrs:{cols:"2"}},[i("v-btn",{attrs:{color:"success"},on:{click:e.search}},[e._v("Search")])],1)],1),i("v-data-table",{staticClass:"elevation-1",staticStyle:{cursor:"pointer"},attrs:{headers:e.headers,items:e.results,"item-key":"id",options:e.options,"server-items-length":e.total,"footer-props":{"items-per-page-text":e.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]},loading:e.loading},on:{"update:options":function(t){e.options=t},"click:row":e.selected}})],1)],1)],1)},s=[],a={props:["queries"],data(){return{date:"",menu:!1,overlay:!1,confirmDialog:!1,practitionername:"",practitionerregnum:"",familyHead:{},total:0,name:"",regNum:"",headers:[{text:"Job",value:"Basic.extension.where(url='http://ihris.org/fhir/StructureDefinition/position-advertisement').extension.where(url='designation').valueReference"},{text:"Closing Date",value:"Basic.extension.where(url='http://ihris.org/fhir/StructureDefinition/position-advertisement').extension.where(url='closing-date').valueDate"}],fields:[["Job","Basic.extension.where(url='http://ihris.org/fhir/StructureDefinition/position-advertisement').extension.where(url='designation').valueReference",null],["Closing Date","Basic.extension.where(url='http://ihris.org/fhir/StructureDefinition/position-advertisement').extension.where(url='closing-date').valueDate",null]],results:[],loading:!1,update_again:{rerun:!1,restart:!1},options:{itemsPerPage:10}}},watch:{options:{handler(){this.search()},deep:!0}},methods:{selected:function(e){this.$router.push("/questionnaire/position-application/applicant?advert=Basic/"+e.id)},checkRerun(){!this.loading&&this.update_again.rerun&&(this.search(this.update_again.restart),this.update_again={rerun:!1,restart:!1})},search(e){let t="";if(this.name&&(t+="&name:contains="+this.name),this.loading)return this.update_again.rerun=!0,void(this.update_again.restart=this.update_again.restart||e);this.loading=!0,this.error_message=null;let i="";if(e&&(this.options.page=1),this.options.page>1&&(this.options.page===this.prevPage-1?i=this.link.find((e=>"previous"===e.relation)).url:this.options.page===this.prevPage+1&&(i=this.link.find((e=>"next"===e.relation)).url),i=i.replace(/_getpages=[^&]*&*/,"").replace("/fhir?","/fhir/Basic?"),i=i.substring(i.indexOf("/fhir/")),-1===i.indexOf("_total=accurate")&&(i+="&_total=accurate"),i+="&_profile=http://ihris.org/fhir/StructureDefinition/position-advertisement-profile"),""===i){let e=this.options.itemsPerPage||10,r="";for(let t in this.options.sortBy)r&&(r+=","),this.options.sortDesc[t]&&(r+="-"),r+=this.options.sortBy[t];i="/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/position-advertisement-profile&_count="+e+"&_total=accurate",i+=t}this.prevPage=this.options.page,fetch(i).then((e=>{e.json().then((async e=>{if(this.results=[],e.total>0){this.link=e.link;for(let t of e.entry){let e={id:t.resource.id};for(let i of this.fields){let r=this.$fhirpath.evaluate(t.resource,i[1]);e[i[1]]=await this.$fhirutils.lookup(r[0],i[2])}this.results.push(e)}}this.total=e.total,this.loading=!1,this.checkRerun()})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))}}},n=a,o=i(43736),l=i(43453),h=i.n(l),u=i(63150),c=i(32371),p=i(37118),d=i(82102),f=i(4228),g=i(40865),v=i(96428),m=i(51058),x=i(90624),_=i(62877),k=i(55978),y=(0,o.Z)(n,r,s,!1,null,null,null),b=y.exports;h()(y,{VBtn:u.Z,VCard:c.Z,VCardText:p.ZB,VCardTitle:p.EB,VCol:d.Z,VContainer:f.Z,VDataTable:g.Z,VIcon:v.Z,VOverlay:m.Z,VProgressCircular:x.Z,VRow:_.Z,VTextField:k.Z})}}]);
//# sourceMappingURL=3825.d3c5a507.js.map