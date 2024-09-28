"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[276],{3370:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[e.isDropDown&&!e.hideFilters?a("v-autocomplete",{staticClass:"ma-1",attrs:{error:e.error,"error-messages":e.err_messages,items:e.items,label:e.$t("App.reports."+e.label),loading:e.loading,clearable:"",dense:"","hide-details":"","item-text":"display","item-value":"code",multiple:"",outlined:"","small-chips":""},on:{change:function(t){return e.updateSearch()},"click:clear":function(t){return e.clearSearch()}},scopedSlots:e._u([{key:"prepend-item",fn:function(){return[a("v-radio-group",{attrs:{row:""},on:{change:function(t){return e.updateSearch()}},model:{value:e.filterType,callback:function(t){e.filterType=t},expression:"filterType"}},[a("v-radio",{attrs:{label:"Include",value:"include"}}),a("v-radio",{attrs:{label:"Exclude",value:"exclude"}})],1),a("v-divider")]},proxy:!0}],null,!1,1071381286),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e.hideFilters?e._e():["date"==e.filterDataType?[a("v-container",[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,l=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"internal-slot reverse-text",attrs:{label:e.$t("App.reports."+e.label),clearable:"",dense:"",outlined:"","hide-details":"",readonly:""},on:{input:e.updateSearch},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-select",{staticStyle:{"max-width":"80px"},attrs:{items:e.comparisons,"menu-props":"auto",dense:"",solo:"",chips:"","hide-details":"","item-text":"text","item-value":"value"},on:{change:e.changeFilter,input:e.updateSearch},model:{value:e.filters,callback:function(t){e.filters=t},expression:"filters"}})]},proxy:!0}],null,!0),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},"v-text-field",l,!1),i))]}}],null,!1,2717138356),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[a("v-date-picker",{ref:"picker",attrs:{range:e.isRange},on:{change:e.updateSearch},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)]:"long"==e.filterDataType?[a("div",[a("v-text-field",{staticClass:"internal-slot reverse-text",attrs:{label:e.$t("App.reports."+e.label),clearable:"",dense:"",outlined:"","hide-details":""},on:{input:e.updateSearch},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-select",{staticStyle:{"max-width":"80px"},attrs:{items:e.comparisons,"menu-props":"auto",dense:"",solo:"",chips:"","hide-details":"","item-text":"text","item-value":"value"},on:{change:e.changeFilter,input:e.updateSearch},model:{value:e.filters,callback:function(t){e.filters=t},expression:"filters"}})]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]:a("v-text-field",{staticClass:"ma-1",attrs:{label:e.$t("App.reports."+e.label),clearable:"",dense:"","hide-details":"",outlined:"","prepend-inner-icon":"mdi-filter-variant"},on:{change:function(t){return e.updateSearch()},"click:clear":function(t){return e.clearSearch()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]],2)},l=[],r={name:"ihris-search-term",props:["label","expression","isDropDown","reportData","hideFilters"],data:function(){return{loading:!1,items:[],error:!1,err_messages:null,filterType:"include",value:null,filterDataType:"",dateMenu:!1,filters:null,comparisons:[{value:null,text:"="},{value:"gte",text:">="},{value:"gt",text:">"},{value:"lt",text:"<"},{value:"lte",text:"<="},{value:"range",text:"In"}],isRange:!1}},mounted:function(){let e;if(this.filterDataType=this.reportData.filters&&this.reportData.filters.find((e=>e.field===this.expression)).dataType,this.reportData.mappings.mappings.properties[this.expression]&&!this.filterDataType&&(this.filterDataType=this.reportData.mappings.mappings.properties[this.expression].type),this.reportData.mappings.mappings.properties[this.expression].fields&&this.reportData.mappings.mappings.properties[this.expression].fields.keyword&&(e=!0),this.isDropDown&&this.filterDataType){this.loading=!0;let t=`/es/populateFilter/${this.reportData.indexName}/${this.expression}?dataType=${this.filterDataType}&hasKeyword=${e}`;fetch(t,{method:"GET"}).then((e=>{e.json().then((e=>{this.loading=!1;for(let t of e)this.items.push(t.key.value.toString().replace(/\s+/g," "))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))}},methods:{changeFilter(e){this.filterType=e,this.$emit("termChange",this.expression,this.value,this.filterType)},updateSearch:function(){this.$emit("termChange",this.expression,this.value,this.filterType)},clearSearch:function(){this.$emit("termChange",this.expression,[])}},watch:{filters(e){this.isRange="range"===e},dateMenu(e){this.isRange||e&&setTimeout((()=>this.$refs.picker.activePicker="YEAR"))}}},n=r,s=a(3736),o=a(3453),u=a.n(o),c=a(1835),p=a(4228),d=a(9771),h=a(1418),f=a(1152),v=a(8978),m=a(4739),g=a(3986),x=a(5978),b=(0,s.Z)(n,i,l,!1,null,"6416a8b2",null),y=b.exports;u()(b,{VAutocomplete:c.Z,VContainer:p.Z,VDatePicker:d.Z,VDivider:h.Z,VMenu:f.Z,VRadio:v.Z,VRadioGroup:m.Z,VSelect:g.Z,VTextField:x.Z})},7536:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[e.isDropDown&&!e.hideFilters?a("v-autocomplete",{staticClass:"ma-1",attrs:{error:e.error,"error-messages":e.err_messages,items:e.items,label:e.label,loading:e.loading,clearable:"",dense:"","hide-details":"","item-text":"display","item-value":"code",multiple:"",outlined:"","small-chips":""},on:{change:function(t){return e.updateSearch()},"click:clear":function(t){return e.clearSearch()}},scopedSlots:e._u([{key:"prepend-item",fn:function(){return[a("v-radio-group",{attrs:{row:""},on:{change:function(t){return e.updateSearch()}},model:{value:e.filterType,callback:function(t){e.filterType=t},expression:"filterType"}},[a("v-radio",{attrs:{label:"Include",value:"include"}}),a("v-radio",{attrs:{label:"Exclude",value:"exclude"}})],1),a("v-divider")]},proxy:!0}],null,!1,1071381286),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e.hideFilters?e._e():["date"==e.filterDataType?[a("v-container",[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"min-width":"auto","offset-y":"",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,l=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"internal-slot reverse-text",attrs:{label:e.label,clearable:"",dense:"",outlined:"","hide-details":"",readonly:""},on:{input:e.updateSearch},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-select",{staticStyle:{"max-width":"80px"},attrs:{items:e.comparisons,"menu-props":"auto",dense:"",solo:"",chips:"","hide-details":"","item-text":"text","item-value":"value"},on:{change:e.changeFilter,input:e.updateSearch},model:{value:e.filters,callback:function(t){e.filters=t},expression:"filters"}})]},proxy:!0}],null,!0),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},"v-text-field",l,!1),i))]}}],null,!1,984029115),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[a("v-date-picker",{ref:"picker",attrs:{range:e.isRange,min:"1400-01-01"},on:{change:e.updateSearch},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)]:a("v-text-field",{staticClass:"ma-1",attrs:{label:e.label,clearable:"",dense:"","hide-details":"",outlined:"","prepend-inner-icon":"mdi-filter-variant"},on:{change:function(t){return e.updateSearch()},"click:clear":function(t){return e.clearSearch()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]],2)},l=[],r={name:"ihris-search-term",props:["label","expression","isDropDown","reportData","hideFilters"],data:function(){return{loading:!1,items:[],error:!1,err_messages:null,filterType:"include",value:null,filterDataType:"",dateMenu:!1,filters:null,comparisons:[{value:null,text:"="},{value:"gte",text:">="},{value:"gt",text:">"},{value:"lt",text:"<"},{value:"lte",text:"<="},{value:"range",text:"In"}],isRange:!1}},mounted:function(){if(this.filterDataType=this.reportData.filters&&this.reportData.filters.find((e=>e.field===this.expression)).dataType,this.isDropDown){this.loading=!0;let e=this.expression,t=`/fhir2sql/populateFilter/${this.reportData.indexName}/${e}`;fetch(t,{method:"GET"}).then((t=>{t.json().then((t=>{this.loading=!1;for(let a of t)null!=a[e]&&this.items.push(a[e].toString().replace(/\s+/g," "))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))}},methods:{changeFilter(e){this.filterType=e,this.$emit("termChange",this.expression,this.value,this.filterType)},updateSearch:function(){this.$emit("termChange",this.expression,this.value,this.filterType)},clearSearch:function(){this.$emit("termChange",this.expression,[])}},watch:{filters(e){this.isRange="range"===e},dateMenu(e){this.isRange||e&&setTimeout((()=>this.$refs.picker.activePicker="YEAR"))}}},n=r,s=a(3736),o=a(3453),u=a.n(o),c=a(1835),p=a(4228),d=a(9771),h=a(1418),f=a(1152),v=a(8978),m=a(4739),g=a(3986),x=a(5978),b=(0,s.Z)(n,i,l,!1,null,"1a27c799",null),y=b.exports;u()(b,{VAutocomplete:c.Z,VContainer:p.Z,VDatePicker:d.Z,VDivider:h.Z,VMenu:f.Z,VRadio:v.Z,VRadioGroup:m.Z,VSelect:g.Z,VTextField:x.Z})}}]);
//# sourceMappingURL=ihris-es-search-term.926123c9.js.map