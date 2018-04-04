// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/setting/FieldPicker.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableArea" class\x3d"esriCTLayerFieldSelector"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"btnAddField" class\x3d"esriCTBtnAddSection"\x3e\r\n      \x3cspan class\x3d"esriCTBtnAddIcon"\x3e\x3c/span\x3e\r\n      \x3cspan class\x3d"esriCTBtnAddLabel" data-dojo-attach-point\x3d"addFieldLabel"\x3e\r\n        ${nls.analysisTab.addFieldsLabel}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTHidden esriCTNoLayersOrFieldsForAnalysisLabel" data-dojo-attach-point\x3d"lblNoValidFields"\x3e\r\n      ${nls.analysisTab.noValidFieldsForAnalysis}\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fieldTable"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox dojo/_base/array dojo/_base/lang dojo/_base/html dojo/on jimu/BaseWidget dojo/text!./FieldPicker.html dojo/Evented jimu/dijit/SimpleTable dojo/query dojo/dom-class jimu/utils".split(" "),function(h,k,l,m,e,c,n,f,p,q,r,t,u,g,v){return h([p,k,r],{templateString:q,baseClass:"jimu-widget-screening-setting",_fieldsTable:null,_entireFieldsArr:[],_selectedFieldsArr:[],_entireFieldObj:{},_configuredField:null,
_configuredLabel:null,constructor:function(a){this._fieldsTable=null;this._entireFieldsArr=[];this._selectedFieldsArr=[];this._entireFieldObj={};this._configuredLabel=this._configuredField=null;c.mixin(this,a)},postMixInProperties:function(){this.nls.common={};c.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this._init()},_init:function(){this._clearData();this._addValidFields();this._createFieldsTable();this._attachEventsToElement();this._displayPreviousConfiguredFields()},
_clearData:function(){this._entireFieldsArr=[];this._selectedFieldsArr=[]},_displayPreviousConfiguredFields:function(){var a;if(this.selectedFields)for(a in this.selectedFields)this._configuredField=a,this._configuredLabel=this.selectedFields[a].label,this.btnAddField.click()},_addValidFields:function(){var a;a="esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate".split(" ");e.forEach(this.featureLayer.fields,c.hitch(this,function(b){this._entireFieldObj[b.name]=
b;-1<a.indexOf(b.type)&&(this._entireFieldsArr.push(b.name),this._entireFieldObj[b.name]=c.clone(b),this.selectedFields&&this.selectedFields[b.name]&&(this._entireFieldObj[b.name].label=this.selectedFields[b.name].label))}));0===this._entireFieldsArr.length&&this._disableAddFieldButton()},_createFieldsTable:function(){this._fieldsTable=new t({fields:[{name:"layer",title:this.nls.analysisTab.addFieldsNameTitle,"class":"label",type:"empty",width:"40%"},{name:"field",title:this.nls.common.label,type:"empty",
editable:"true",width:"40%"},{name:"actions",title:this.nls.common.actions,"class":"actions",type:"actions",actions:["up","down","delete"],width:"20%"}]});this._fieldsTable.placeAt(this.fieldTable);n.setStyle(this._fieldsTable.domNode,{height:"100%"});this._fieldsTable.startup()},_attachEventsToElement:function(){this.own(f(this.btnAddField,"click",c.hitch(this,function(){var a;g.contains(this.btnAddField,"esriCTDisabled")||(a=this._getDistinctFields(this._entireFieldsArr,this._selectedFieldsArr),
this._addFieldsRow(a))})));this.own(f(this._fieldsTable,"row-delete",c.hitch(this,function(a){this._deleteFieldRow(a)})))},_addFieldsRow:function(a){var b,d,c;b=this._fieldsTable.addRow({});b.success&&b.tr&&(b=b.tr,c=u(".simple-table-cell",b),d=c[0],c=c[1],this._addFieldDropdown(a,d,b),this._addLabelTextbox(c,b))},_deleteFieldRow:function(a){var b;g.remove(this.btnAddField,"esriCTDisabled");b=this._selectedFieldsArr.indexOf(a.fieldDropdownInstance.value);-1<b&&this._selectedFieldsArr.splice(b,1);
this._addSelectedFieldInOtherDropdown(a.fieldDropdownInstance.value,null)},_addFieldDropdown:function(a,b,d){a=this._getDistinctFieldsOptionsObj(a);a=new l({"class":"esriCTFieldChooserDropdown",options:a});a.placeAt(b);a.startup();this._configuredField&&(a.set("value",this._configuredField),this._configuredField=null);d.fieldDropdownInstance=a;this.own(f(a,"change",c.hitch(this,function(a){var b;b=this._selectedFieldsArr[d.rowIndex];this._selectedFieldsArr[d.rowIndex]=a;this._addSelectedFieldInOtherDropdown(b,
a);this._removeSelectedFieldFromOtherDropdown(a)})));this._selectedFieldsArr.push(a.value);this._removeSelectedFieldFromOtherDropdown(a.value);this._disableAddFieldButton()},_disableAddFieldButton:function(){this._selectedFieldsArr.length===this._entireFieldsArr.length&&g.add(this.btnAddField,"esriCTDisabled")},_addLabelTextbox:function(a,b){var d;d=new m({"class":"esriCTFieldValidationTextBox"});d.placeAt(a);d.startup();this._configuredLabel&&(d.set("value",this._configuredLabel),this._configuredLabel=
null);b.fieldLabelInstance=d},_getDistinctFieldsOptionsObj:function(a){var b=[];e.forEach(a,c.hitch(this,function(a){b.push({label:this._entireFieldObj[a].alias||this._entireFieldObj[a].name,value:a})}));return b},_removeSelectedFieldFromOtherDropdown:function(a){var b;b=this._fieldsTable.getRows();e.forEach(b,c.hitch(this,function(b){a!==b.fieldDropdownInstance.value&&b.fieldDropdownInstance.removeOption(a)}))},_addSelectedFieldInOtherDropdown:function(a,b){var d;d=this._fieldsTable.getRows();e.forEach(d,
c.hitch(this,function(d){b!==d.fieldDropdownInstance.value&&d.fieldDropdownInstance.addOption({label:this._entireFieldObj[a].alias,value:a})}))},okButtonClicked:function(){var a,b;b={};a=this._fieldsTable.getRows();0===a.length?this.selectedFields=null:(e.forEach(a,c.hitch(this,function(a){this._entireFieldObj[a.fieldDropdownInstance.value].label=v.stripHTML(c.trim(a.fieldLabelInstance.value));b[a.fieldDropdownInstance.value]=this._entireFieldObj[a.fieldDropdownInstance.value]})),this.selectedFields=
b);return this.selectedFields},_getDistinctFields:function(a,b){return a.filter(function(a){return 0>b.indexOf(a)})}})});