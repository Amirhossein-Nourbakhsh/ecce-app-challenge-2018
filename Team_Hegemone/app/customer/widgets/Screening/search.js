// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dojo/_base/lang dojo/_base/array esri/dijit/Search esri/tasks/locator esri/layers/FeatureLayer jimu/utils dojo/dom-construct jimu/LayerInfos/LayerInfos ./searchSourceUtils dojo/when dojo/Deferred dojo/promise/all dojo/on esri/InfoTemplate".split(" "),function(m,n,p,c,h,q,r,t,f,u,v,k,w,x,y,l,z){return m([n,p],{_urlParams:{},config:null,map:null,searchOptions:null,layerInfosObj:null,constructor:function(b){this._urlParams={};this.layerInfosObj=
this.searchOptions=this.map=this.config=null;c.mixin(this,b)},postCreate:function(){this._urlParams={}},startup:function(){this.inherited(arguments);v.getInstance(this.map,this.map.itemInfo).then(c.hitch(this,function(b){this.layerInfosObj=b;this.own(this.layerInfosObj.on("layerInfosFilterChanged",c.hitch(this,this.onLayerInfosFilterChanged)));k.setMap(this.map);k.setLayerInfosObj(this.layerInfosObj);k.setAppConfig(this.appConfig);w(k.getConfigInfo(this.config.searchSourceSettings)).then(c.hitch(this,
function(a){this.config.searchSourceSettings||(this.config.searchSourceSettings=a);return y(this._convertConfig(a)).then(function(a){return h.filter(a,function(a){return a})})})).then(c.hitch(this,function(a){this.domNode&&this._init(a)}))}))},_convertConfig:function(b){return h.map(b.sources,c.hitch(this,function(a){var b=new x;if(a&&a.url&&"locator"===a.type){var d={locator:new r(a.url||""),outFields:["*"],singleLineFieldName:a.singleLineFieldName||"",name:f.stripHTML(a.name||""),placeholder:f.stripHTML(a.placeholder||
""),countryCode:a.countryCode||"",maxSuggestions:a.maxSuggestions,maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,useMapExtent:!!a.searchInCurrentMapExtent};a.enableLocalSearch&&(d.localSearchOptions={minScale:a.localSearchMinScale,distance:a.localSearchDistance});b.resolve(d)}else a&&a.url&&"query"===a.type?(d=new t(a.url||null,{outFields:["*"]}),this.own(l(d,"load",c.hitch(this,function(c){var d,g,e;d=c.layer;g=this._getInfoTemplate(d,a,a.displayField);e=null;a.searchFields&&0<a.searchFields.length?
e=a.searchFields:(e=[],h.forEach(d.fields,function(a){"esriFieldTypeOID"!==a.type&&a.name!==d.objectIdField&&"esriFieldTypeGeometry"!==a.type&&e.push(a.name)}));c={featureLayer:d,outFields:["*"],searchFields:e,displayField:a.displayField||"",exactMatch:!!a.exactMatch,name:f.stripHTML(a.name||""),placeholder:f.stripHTML(a.placeholder||""),maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,infoTemplate:g,useMapExtent:!!a.searchInCurrentMapExtent,_featureLayerId:a.layerId};
g||delete c.infoTemplate;c._featureLayerId&&(g=this.layerInfosObj.getLayerInfoById(c._featureLayerId),d.setDefinitionExpression(g.getFilter()));b.resolve(c)}))),this.own(l(d,"error",function(){b.resolve(null)}))):b.resolve(null);return b}))},_getInfoTemplate:function(b,a,g){var d,e,f;e=(d=this.layerInfosObj.getLayerInfoById(a.layerId))&&d.getInfoTemplate();f=d&&e;if(d&&!f)return null;f||(e=new z,e.setTitle("\x26nbsp;"),e.setContent(c.hitch(this,"_formatContent",a.name,b,g)));return e},_init:function(b){var a,
g;a={map:this.map,addLayersFromMap:!1,autoNavigate:!1,autoComplete:!0,minCharacters:0,searchDelay:100,enableInfoWindow:!0,enableHighlight:this.config.searchSourceSettings.showInfoWindowOnSelect,showInfoWindowOnSelect:this.config.searchSourceSettings.showInfoWindowOnSelect,allPlaceholder:f.stripHTML(this.config.searchSourceSettings.allPlaceholder)};g=1===b.length?0:"all";c.mixin(a,this.searchOptions);this._urlParams=this._getUrlParams();this.search=new q(a,u.create("div",{"class":"searchControl"},
this.domNode));this.search.set("sources",b);this.search.set("activeSourceIndex",g);this.own(this.search.on("load",c.hitch(this,this._load)));this.own(this.search.on("select-result",c.hitch(this,this._selectResult)));this.own(this.search.on("clear-search",c.hitch(this,this._clear)));this.own(this.search.on("search-results",c.hitch(this,this._results)));this.own(this.search.on("suggest-results",c.hitch(this,this._results)));this.search.startup()},_getUrlParams:function(){var b=f.urlToObject(document.location.href);
b.query=b.query||{};return b.query},setSearchText:function(b){this.search.set("value",b)},clearSearchText:function(){this.search&&this.search.clear()},_setSearchString:function(){this._urlParams.find&&(this.search.set("value",this._urlParams.find),setTimeout(c.hitch(this,function(){this.search.search()}),1E3))},onLayerInfosFilterChanged:function(b){h.some(b,c.hitch(this,function(a){this.search&&this.search.sources&&0<this.search.sources.length&&h.forEach(this.search.sources,function(b){b._featureLayerId===
a.id&&b.featureLayer.setDefinitionExpression(a.getFilter())})}))},_load:function(b){this.emit("search-loaded",b);this._setSearchString()},_results:function(b){this.emit("search-results",b)},_clear:function(b){this.emit("clear-search",b)},_selectResult:function(b){b&&this.search.sources[b.sourceIndex].featureLayer&&b.result&&b.result.name&&this.setSearchText(b.result.name);this.search.blur();this.emit("select-result",b)}})});