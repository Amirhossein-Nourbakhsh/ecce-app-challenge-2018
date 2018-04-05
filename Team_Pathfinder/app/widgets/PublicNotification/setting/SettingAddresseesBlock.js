// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class ./settingComponents ./SettingCheckbox ./SettingContainer ./SettingObject ./SettingOptionsTable ./SettingStaticText".split(" "),function(c,g,d,f,h,k,l,m,n,p){return g(m,{_inputControl:null,_detailsDiv:null,_detailsTitle:null,_detailsCheckbox:null,_iCurrentDetails:-1,_menuItems:[],constructor:function(a,b,e){this._inputControl=new n(null,"half-width","",b.propertyLabels.name,null,b.hints.selectionListOfOptionsToDisplay,d.hitch(this,
this._onRowSelected));this._detailsTitle=new p;this._detailsCheckbox=new k(null,b.propertyLabels.useRelatedRecords,"",d.hitch(this,this._checkboxChanged));this._detailsDiv=h.container("half-width optionsTableHeaderHeight","majorTrailingVertGap",[this._detailsTitle.div(),this._detailsCheckbox.div()]);this._mainDiv=(new l(null,"flexbox "+(e||""),"majorTrailingHorizGap",b.groupingLabels.addressSources,"full-width",[this._inputControl,this._detailsDiv])).div()},setConfig:function(){var a,b;a=[this._config[0]];
b=this._config.slice(1);this._menuItems=c.map(b,function(a){return a.name});this._menuItems=0<this._menuItems.length?[].concat(a,this._menuItems):[a];this._inputControl.setValue(this._menuItems);this._setDetails(0)},getConfig:function(){var a=this._config.slice(1),b;this._menuItems=this._inputControl.getValue();b=[this._menuItems[0]];c.forEach(this._menuItems.slice(1),function(e){c.some(a,function(a){e===a.name&&b.push(a)})});this._config=b},_setDetails:function(a){var b=this._config.length-1;0<=
a&&a<b?(f.remove(this._detailsDiv,"hidden"),this._detailsTitle.setValue(this._config[a+1].name),this._detailsCheckbox.setValue(this._config[a+1].useRelatedRecords),this._iCurrentDetails=a):(f.add(this._detailsDiv,"hidden"),this._iCurrentDetails=-1)},_onRowSelected:function(a){var b=a.innerText.trim();c.some(this._menuItems,d.hitch(this,function(a,c){return a===b?(this._setDetails(c-1),!0):!1}))},_checkboxChanged:function(a){0<=this._iCurrentDetails&&(this._config[this._iCurrentDetails+1].useRelatedRecords=
a)}})});