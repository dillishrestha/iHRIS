"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[6688],{6688:function(e,i,t){t.r(i),t.d(i,{default:function(){return m}});var n,r,a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ihris-template",{key:e.id},[e._v(" Loading... ")])},o=[],s=t(538),l={name:"fhir-page-view",props:["id","page"],data:function(){return{}},created:function(){n=this.id,r=this.page,this.getTemplate()},methods:{getTemplate:function(){fetch("/config/page/"+r).then((e=>{e.json().then((e=>{e.template=e.template.replace("<ihris-resource ","<bw-resource "),e.template=e.template.replace("</ihris-resource>","</bw-resource>"),e.template=e.template.replace('<ihris-practitioner-intro :slotProps="slotProps" :isQuestionnaire="false">',""),e.template=e.template.replace("</ihris-practitioner-intro>",""),e.template=e.template.replace('<div class="ihris-intro-float"></div>',""),"OperationOutcome"===e.resourceType?s["default"].component("ihris-template",{name:"ihris-template",data:function(){return{issues:e.issue}},components:{"ihris-outcome":()=>t.e(2269).then(t.bind(t,5532))},template:'<div><ihris-outcome :issues="issues"></ihris-outcome></div>'}):s["default"].component("ihris-template",{name:"ihris-template",data:function(){return{fhirId:n,isEdit:!1,sectionMenu:e.data.sectionMenu,subFields:e.data.subFields,columns:e.data.columns,actions:e.data.actions,links:e.data.links,constraints:e.data.constraints}},components:{"ihris-practitioner-intro":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,6303)),"bw-resource":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,728)),"ihris-codesystem":()=>t.e(902).then(t.bind(t,6462)),"ihris-section":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,6713)),"ihris-secondary":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,9255)),"ihris-array":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,9486)),"fhir-extension":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,1355)),"fhir-reference":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,2346)),"fhir-backbone-element":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,5447)),"fhir-string":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,618)),"fhir-attachment":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,7028)),"fhir-human-name":()=>t.e(1364).then(t.bind(t,8667)),"fhir-code":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,6693)),"fhir-date":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,7814)),"fhir-date-time":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,115)),"fhir-period":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,5481)),"fhir-identifier":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,3858)),"fhir-contact-point":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,6010)),"fhir-address":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,5537)),"fhir-codeable-concept":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,5334)),"fhir-uri":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,776)),"fhir-boolean":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,338)),"fhir-positive-int":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,3541)),"fhir-unsigned-int":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,2112)),"fhir-integer":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,9272)),"fhir-coding":()=>Promise.all([t.e(3986),t.e(2200),t.e(3113),t.e(5870),t.e(2657)]).then(t.bind(t,1251)),"fhir-money":()=>Promise.all([t.e(3986),t.e(591),t.e(7578),t.e(8384)]).then(t.bind(t,6830)),"fhir-decimal":()=>t.e(7305).then(t.bind(t,3782))},template:e.template,methods:{setEdit:function(e){this.isEdit=e}}}),this.$forceUpdate()})).catch((e=>{console.log(e),s["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),this.$forceUpdate()}))})).catch((e=>{console.log(e),s["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),this.$forceUpdate()}))}},beforeCreate:function(){s["default"].component("ihris-template",{template:"<div>Loading...</div>"})}},h=l,d=t(3736),c=(0,d.Z)(h,a,o,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=6688.46603b82.js.map