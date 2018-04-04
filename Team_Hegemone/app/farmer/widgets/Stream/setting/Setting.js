// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Stream/setting/utils":function(){define(["dojo/_base/array"],function(k){return{getStreamLayers:function(b){var f=[],e;k.forEach(b.graphicsLayerIds,function(d){e=b.getLayer(d);"esri.layers.StreamLayer"===e.declaredClass&&f.push(e)});f.reverse();return f},getStreamLayerName:function(b){b=/\/([^\/]+)\/StreamServer/.exec(b);return 1<b.length?b[1]:""}}})},"widgets/Stream/setting/StreamSetting":function(){define("dojo/_base/declare dojo/_base/lang dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./StreamSetting.html dojo/dom-class dojo/dom-style dojo/Evented esri/symbols/jsonUtils jimu/dijit/CheckBox jimu/dijit/SymbolPicker ./FilterConfigPopup ../FilterUtil jimu/dijit/LoadingShelter".split(" "),
function(k,b,f,e,d,g,l,m,h,q,p,n,r,c,a){return k([e,d,g,q],{baseClass:"jimu-widget-stream-setting",templateString:l,map:null,nls:null,layerName:null,streamLayer:null,_filterList:[],_started:!1,postCreate:function(){this.inherited(arguments);var t=null;this._filterList=[];this.startStopCheckBox=new n({checked:!0,label:this.nls.startStopStream});this.startStopCheckBox.placeAt(this.startStopCheckBoxDiv);this.clearPreviousCheckBox=new n({checked:!0,label:this.nls.clearStream});this.clearPreviousCheckBox.placeAt(this.clearPreviousCheckBoxDiv);
this.drawPreviousCheckBox=new n({checked:!1,label:this.nls.drawPrevious});this.drawPreviousCheckBox.placeAt(this.drawPreviousCheckBoxDiv);this.streamLayer&&(1===this.streamLayer.maximumTrackPoints?this.drawPreviousCheckBox.setStatus(!1):1<this.streamLayer.maximumTrackPoints&&this.drawPreviousCheckBox.setValue(!0));this.spatialFilterCheckBox=new n({checked:!0,label:this.nls.spatialFilter,onChange:b.hitch(this,this._spatialStatusChange)});this.spatialFilterCheckBox.placeAt(this.spatialFilterCheckBoxDiv);
this.mapExtentCheckBox=new n({checked:!1,label:this.nls.limitMapExtent});this.mapExtentCheckBox.placeAt(this.mapExtentCheckBoxDiv);this.drawExtentCheckBox=new n({checked:!1,label:this.nls.limitDrawExtent,onChange:b.hitch(this,function(a){a?h.set(this.symbolPickerNode,"display","inline"):h.set(this.symbolPickerNode,"display","none")})});h.set(this.drawExtentCheckBox.domNode,"vertical-align","top");this.drawExtentCheckBox.placeAt(this.drawExtentCheckBoxDiv);this.config&&this.config.drawSymbol&&(t=p.fromJson(this.config.drawSymbol));
this.symbolPicker=new r({symbol:t,type:"fill"});h.set(this.symbolPicker.domNode,"margin-top","-16px");this.symbolPicker.placeAt(this.symbolPickerNode);this.symbolPicker.startup();this.filterCheckBox=new n({checked:!1,label:this.nls.attributeFilter,onChange:b.hitch(this,this._filterStatusChange)});this.filterCheckBox.placeAt(this.filterCheckBoxDiv);this.config?this.setConfig(this.config):this.streamLayer&&this.streamLayer.getDefinitionExpression()&&(this.shelter.show(),a.buildFilterInfoFromString(this.streamLayer,
this.streamLayer.getDefinitionExpression(),this.nls.newFilter).then(b.hitch(this,function(a){null!==a&&(this._filterList.push(a),this.filterCheckBox.setValue(!0),this.filterCheckBox.setStatus(!1));this.shelter.hide()})))},setConfig:function(a){this.config=a;this.layerName=this.config.layerName;this._filterList=this.config.filterList;this.startStopCheckBox.setValue(this.config.startStop);this.clearPreviousCheckBox.setValue(this.config.clear);this.drawPreviousCheckBox.setValue(this.config.drawPrevious);
this.spatialFilterCheckBox.setValue(this.config.spatialFilter);this.mapExtentCheckBox.setValue(!!this.config.mapExtentFilter);this.drawExtentCheckBox.setValue(!!this.config.drawExtentFilter);this.config.drawExtentFilter?h.set(this.symbolPickerNode,"display","inline"):h.set(this.symbolPickerNode,"display","none");this.filterCheckBox.setValue(this.config.attrFilter)},getConfig:function(){var a={layerId:this.streamLayer.id,layerName:this.layerName||"",startStop:this.startStopCheckBox.getValue(),clear:this.clearPreviousCheckBox.getValue(),
drawPrevious:this.drawPreviousCheckBox.getValue(),spatialFilter:this.spatialFilterCheckBox.getValue(),mapExtentFilter:this.mapExtentCheckBox.getValue(),drawExtentFilter:this.drawExtentCheckBox.getValue(),attrFilter:this.filterCheckBox.getValue(),filterList:this._filterList};a.mapExtentFilter||a.drawExtentFilter||(a.spatialFilter=!1);a.drawExtentFilter&&(a.drawSymbol=this.symbolPicker.getSymbol().toJson());return a},_filterStatusChange:function(a){a?m.remove(this.filterIcon,"disabled"):m.add(this.filterIcon,
"disabled")},_spatialStatusChange:function(a){a?h.set(this.spatialChoices,"display","block"):h.set(this.spatialChoices,"display","none")},_showFilter:function(){if(this.filterCheckBox.getValue()){var a;a=new c({titleLabel:this.nls.configFilter,filterList:this._filterList,streamLayer:this.streamLayer,nls:this.nls});this.own(f(a,"ok",b.hitch(this,function(c){this._filterList=c;a.close()})));this.own(f(a,"cancel",b.hitch(this,function(){a.close()})));a.startup()}}})})},"jimu/dijit/SymbolPicker":function(){define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dijit/TooltipDialog dijit/popup dijit/registry jimu/dijit/SymbolChooser jimu/symbolUtils".split(" "),
function(k,b,f,e,d,g,l,m,h,q,p,n,r,c){return k([b,f,e],{baseClass:"jimu-symbol-picker",declaredClass:"jimu.dijit.SymbolPicker",templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"symbolNode" class\x3d"symbol-node jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"separator jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 jimu-float-leading"\x3e\x3c/div\x3e\x3c/div\x3e',tooltipDialog:null,_isTooltipDialogOpened:!1,symbol:null,type:null,postCreate:function(){this.inherited(arguments);
this._createTooltipDialog();this._hideTooltipDialog();var a=this.symbolChooser.getSymbol();a&&this._drawSymbol(a)},destroy:function(){this._hideTooltipDialog();this.symbolChooser&&this.symbolChooser.destroy();this.symbolChooser=null;this.inherited(arguments)},_createTooltipDialog:function(){var a=g.create("div");this.tooltipDialog=new q({content:a});this.symbolChooser=new r({symbol:this.symbol,type:this.type});this.symbolChooser.placeAt(a);this.symbolChooser.startup();this.own(m(this.symbolChooser,
"change",d.hitch(this,function(a){this._drawSymbol(a);this.emit("change",a)})));this.own(m(this.domNode,"click",d.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(m(document.body,"click",d.hitch(this,function(a){var c=a.target||a.srcElement;a=this._getColorPickers();0<a.length&&l.some(a,function(a){return a.isPartOfPopup(c)})||(a=this.tooltipDialog.domNode,c===a||g.isDescendant(c,a)||this._hideTooltipDialog())})));
this.own(m(this.symbolChooser,"resize",d.hitch(this,function(){this._isTooltipDialogOpened&&(this._hideTooltipDialog(),this._showTooltipDialog())})))},_getColorPickers:function(){var a=h(".jimu-color-picker",this.symbolChooser.domNode);return l.map(a,d.hitch(this,function(a){return n.byNode(a)}))},reset:function(){this.symbol=this.type=null;g.empty(this.symbolNode);this.symbolChooser.reset()},showBySymbol:function(a){this.reset();a&&(this._drawSymbol(a),this.symbolChooser.showBySymbol(a))},showByType:function(a){this.reset();
this.symbolChooser.showByType(a);(a=this.symbolChooser.getSymbol())&&this._drawSymbol(a)},getSymbol:function(){return this.symbolChooser.getSymbol()},_drawSymbol:function(a){g.empty(this.symbolNode);a&&(a=c.createSymbolNode(a,{width:16,height:16}))&&g.place(a,this.symbolNode)},_showTooltipDialog:function(){this.tooltipDialog&&(p.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.domNode}),this._isTooltipDialogOpened=!0)},_hideTooltipDialog:function(){this.tooltipDialog&&(p.close(this.tooltipDialog),
this._isTooltipDialogOpened=!1)}})})},"widgets/Stream/setting/FilterConfigPopup":function(){define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/html jimu/dijit/Popup jimu/dijit/LoadingIndicator ./FilterConfig".split(" "),function(k,b,f,e,d,g,l){return k([d,b],{width:1024,height:600,titleLabel:"",filterList:null,streamLayer:null,nls:null,constructor:function(){this.inherited(arguments);this.nls=f.clone(window.jimuNls.common);this.buttons=[{label:this.nls.ok,onClick:f.hitch(this,this._accept)},
{label:this.nls.cancel,onClick:f.hitch(this,this._reject)}]},postCreate:function(){this.inherited(arguments);e.addClass(this.domNode,"stream-filter-popup");this._initLoading();this._initFilter()},_initFilter:function(){this.filter=new l({streamLayer:this.streamLayer,config:this.filterList,nls:this.nls});this.filter.placeAt(this.contentContainerNode)},_reject:function(){this.emit("cancel")},_accept:function(){var b=this.filter.getConfig();b?this.emit("ok",b):this.emit(null)},_initLoading:function(){this.loading=
new g({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()}})})},"widgets/Stream/setting/FilterConfig":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-style dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./FilterConfig.html ./SingleFilter jimu/dijit/Message jimu/dijit/SimpleTable jimu/dijit/LoadingShelter".split(" "),function(k,b,f,e,d,g,l,m,h,q,p,n,r){return k([l,m,h],{baseClass:"jimu-widget-stream-filter",
templateString:q,streamLayer:null,config:null,postCreate:function(){this.inherited(arguments);this.filterList=new r({autoHeight:!1,selectable:!0,fields:[{name:"name",title:this.nls.name,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"70px",type:"actions",actions:["up","down","delete"]}]},this.filterList);g.add(this.filterList.domNode,"stream-filter-table");d.set(this.filterList.domNode,"height","100%");this.own(e(this.filterList,"row-select",b.hitch(this,this._onFilterSelected)));
this.own(e(this.filterList,"row-delete",b.hitch(this,this._onFilterRemoved)));this.filterList.startup();this.config&&0<this.config.length&&this._applyConfig()},_applyConfig:function(){this.filterList.clear();f.forEach(this.config,b.hitch(this,function(c,a){var b=this.filterList.addRow({name:c.name||this.nls.newFilter}).tr;this._createFilter(b,c);0===a&&this.filterList.selectRow(b)}))},getConfig:function(){var c,a=[];f.forEach(this.filterList.getRows(),function(b){c=b.filter;a.push(c.getConfig())});
return a},_addFilter:function(){var c;c=this.filterList.addRow({name:this.nls.newFilter});c.success?(c=c.tr,this._createFilter(c,{name:this.nls.newFilter}),this.filterList.selectRow(c)):new n({message:this.nls.addFilterFailed})},_onFilterSelected:function(c){var a;this.currentTR?this.currentTR!==c&&((a=this.currentTR.filter)&&d.set(a.domNode,"display","none"),this.currentTR=c,(a=this.currentTR.filter)&&d.set(a.domNode,"display","block")):(this.currentTR=c,(a=this.currentTR.filter)&&d.set(a.domNode,
"display","block"))},_onFilterRemoved:function(c){var a=c.filter;a&&(a.destroy(),c.filter=null)},_createFilter:function(c,a){a=new p({config:a,streamLayer:this.streamLayer,nls:this.nls});a.placeAt(this.singleFilterContainer);c.filter=a;this.own(e(a,"filterNameChanged",b.hitch(this,function(a){this.filterList.editRow(c,{name:a})})));d.set(a.domNode,"display","none")}})})},"widgets/Stream/setting/SingleFilter":function(){define("dojo/_base/declare dojo/_base/lang dojo/json dojo/on dojo/Evented dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleFilter.html jimu/dijit/Filter jimu/dijit/SimpleTable jimu/dijit/LoadingShelter dijit/form/ValidationTextBox".split(" "),
function(k,b,f,e,d,g,l,m,h,q,p){return k([l,m,h,d],{baseClass:"jimu-widget-stream-filter",templateString:q,streamLayer:null,config:null,_inherited:null,_definitionExpression:null,postCreate:function(){this.inherited(arguments);this._inherited=!1;this._definitionExpression="";this._init()},_init:function(){var d;this.filterNameEditor.set("value",this.config.name||this.nls.newFilter);"inherited"in this.config&&(this._inherited=this.config.inherited);"definitionExpression"in this.config&&(this._definitionExpression=
this.config.definitionExpression);this.own(e(this.filterNameEditor,"change",b.hitch(this,function(b){this.emit("filterNameChanged",b)})));this.filter=new p({enableAskForValues:!0,noFilterTip:this.nls.noFilterTip,style:"width:100%;margin-top:22px;"});this.filter.placeAt(this.singleFilterContent);this._inherited?(g.set(this.filterMask,"display","block"),g.set(this.filterMaskTip,"display","block")):(g.set(this.filterMask,"display","none"),g.set(this.filterMaskTip,"display","none"));this.streamLayer&&
this.config&&(this.shelter.show(),d=f.parse(this.streamLayer._json),"object"===typeof this.config&&"object"===typeof this.config.filterInfo?this.filter.buildByFilterObj(this.streamLayer.url,this.config.filterInfo,d).then(b.hitch(this,function(){this.shelter.hide()})):this.filter.buildByExpr(this.streamLayer.url,"1\x3d1",d).then(b.hitch(this,function(){this.shelter.hide()})))},getConfig:function(){return{inherited:this._inherited,definitionExpression:this._definitionExpression,name:this.filterNameEditor.get("value"),
filterInfo:this.filter.toJson()}}})})},"widgets/Stream/FilterUtil":function(){define(["dojo/json","jimu/dijit/Filter","dojo/dom-construct"],function(k,b,f){return{buildFilterInfoFromString:function(e,d,g){var l=new b,m=f.create("div"),h=k.parse(e._json);l.placeAt(m);l.startup();return l.buildByExpr(e.url,d,h).then(function(){return{inherited:!0,definitionExpression:d,name:g,filterInfo:l.toJson()}},function(){return null})}}})},"widgets/Stream/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Stream/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"stream-list"\x3e\r\n    \x3cdiv class\x3d"stream-list-head" style\x3d"overflow:hidden;"\x3e\r\n      \x3cdiv class\x3d"jimu-float-leading jimu-widget-title"\x3e${nls.streamLayers}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"stream-list-content"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"streamList"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"single-stream-container" data-dojo-attach-point\x3d"singleStreamContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Stream/setting/StreamSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"detailSection" class\x3d"detail"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"titleContainer"\x3e\r\n        \x3clabel class\x3d"jimu-widget-title"\x3e${nls.streamControls}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"startStopCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"clearPreviousCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"drawPreviousCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"titleContainer"\x3e\r\n        \x3clabel class\x3d"jimu-widget-title"\x3e${nls.streamFilter}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"spatialFilterCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"spatialChoices"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"mapExtentCheckBoxDiv" class\x3d"subCheckboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"subCheckboxContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"drawExtentCheckBoxDiv" class\x3d"jimu-widget-tooltip" style\x3d"display:inline"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"symbolPickerNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterCheckBoxDiv" class\x3d"jimu-widget-tooltip"\r\n             class\x3d"checkboxContainer" style\x3d"display: inline-block"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterIcon" class\x3d"filterIcon disabled jimu-leading-margin05"\r\n          data-dojo-attach-event\x3d"onClick: _showFilter"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Stream/setting/FilterConfig.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"stream-filter-head" style\x3d"overflow:hidden;"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading"\x3e\r\n      \x3cdiv class\x3d"add-with-icon" data-dojo-attach-event\x3d"onclick:_addFilter"\x3e\r\n        \x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"add-label jimu-widget-normal"\x3e${nls.addNew}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"stream-filterList"\x3e\r\n    \x3cdiv class\x3d"stream-filterList-content"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"filterList"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"single-filter-container" data-dojo-attach-point\x3d"singleFilterContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Stream/setting/SingleFilter.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"single-filter-container"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cspan class\x3d"jimu-widget-normal"\x3e${nls.filterName}\x3c/span\x3e\r\n      \x3cinput data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n        data-dojo-props\x3d"required:true"\r\n        data-dojo-attach-point\x3d"filterNameEditor"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"position:relative;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"singleFilterContent"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"filterMask" class\x3d"mask"\x3e\x3c/div\x3e\r\n      \x3cspan class\x3d"jimu-widget-normal mask-tip" data-dojo-attach-point\x3d"filterMaskTip"\x3e\r\n        ${nls.filterReadOnly}\r\n      \x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter"\r\n       data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Stream/setting/css/style.css":".jimu-widget-stream-setting{height: 90%; margin-top: 20px;}.jimu-widget-stream-setting .titleContainer{margin-bottom: 12px;}.jimu-widget-stream-setting .checkboxContainer{margin-bottom: 15px;}.jimu-widget-stream-setting .subCheckboxContainer{margin-bottom: 15px; margin-left: 30px;}.jimu-rtl .jimu-widget-stream-setting .subCheckboxContainer{margin-right: 30px; margin-left: auto;}.jimu-widget-stream-setting .filterIcon{background-image: url(images/edit_icon02.png); width: 16px; height: 16px; cursor: pointer; background-repeat: no-repeat; display: inline-block;}.jimu-widget-stream-setting .filterIcon.disabled{background-image: url(images/edit_icon01.png); cursor: default;}.jimu-widget-stream-setting .stream-list{position: absolute; top: 0; left: 0; width: 235px; height: 100%;}.jimu-rtl .jimu-widget-stream-setting .stream-list{left: auto; right: 0;}.jimu-widget-stream-setting .stream-list-content{position: absolute; width: 100%; top: 30px; bottom: 5px; overflow-y: auto;}.jimu-widget-stream-setting .single-stream-container{position: absolute; left: 265px; right: 0; height: 100%; overflow-y: auto;}.jimu-rtl .jimu-widget-stream-setting .single-stream-container{right: 265px; left: 0;}.stream-filter-head{width: 100%; height: 30px;}.stream-filterList{width: 100%; height: 100%;}.stream-filterList-content{position: absolute; width: 250px; top: 40px; bottom: 5px; overflow-y: auto;}.single-filter-container{margin-left: 140px; margin-top: 5px; overflow-y: auto;}.jimu-rtl .single-filter-container{margin-right: 140px; margin-left: auto;}.jimu-widget-stream-filter .mask{position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #FFFFFF; opacity: 0;}.jimu-widget-stream-filter .mask-tip{color: #FF0000;}",
"*now":function(k){k(['dojo/i18n!*preload*widgets/Stream/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-style dojo/dom-class dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./Setting.html jimu/BaseWidgetSetting ./utils ./StreamSetting jimu/dijit/SimpleTable jimu/dijit/LoadingShelter".split(" "),function(k,b,f,e,d,g,l,m,h,q,p,n,r){return k([q,l,m],{baseClass:"jimu-widget-stream-setting",templateString:h,postMixInProperties:function(){this.inherited(arguments);b.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);
this.streamList=new r({autoHeight:!1,selectable:!0,fields:[{name:"name",title:this.nls.name,width:"auto",type:"text",editable:!1}]},this.streamList);g.add(this.streamList.domNode,"stream-list-table");d.set(this.streamList.domNode,"height","100%");this.own(e(this.streamList,"row-select",b.hitch(this,this._onStreamLayerSelected)));this.streamList.startup();this.layerList=p.getStreamLayers(this.map);f.forEach(this.layerList,b.hitch(this,function(c,a){var d,e,g=null;d=this.streamList.addRow({name:p.getStreamLayerName(c.url)});
d.success&&(e=d.tr,this.config&&this.config.streamLayers&&0<this.config.streamLayers.length&&f.some(this.config.streamLayers,b.hitch(this,function(a){if(a.layerId===c.id)return g=a,!0})),this._createSingleStreamSetting(e,c,g));0===a&&this.streamList.selectRow(e)}))},getConfig:function(){var c,a={streamLayers:[]};f.forEach(this.streamList.getRows(),function(b){c=b.streamLayerSetting;a.streamLayers.push(c.getConfig())});return a},_onStreamLayerSelected:function(b){var a;this.currentTR?this.currentTR!==
b&&((a=this.currentTR.streamLayerSetting)&&d.set(a.domNode,"display","none"),this.currentTR=b,(a=this.currentTR.streamLayerSetting)&&d.set(a.domNode,"display","block")):(this.currentTR=b,(a=this.currentTR.streamLayerSetting)&&d.set(a.domNode,"display","block"))},_createSingleStreamSetting:function(b,a,e){var c=this.streamList.getRowData(b);a=new n({map:this.map,nls:this.nls,config:e,layerName:c?c.name:"",streamLayer:a});a.placeAt(this.singleStreamContainer);b.streamLayerSetting=a;d.set(a.domNode,
"display","none")}})});