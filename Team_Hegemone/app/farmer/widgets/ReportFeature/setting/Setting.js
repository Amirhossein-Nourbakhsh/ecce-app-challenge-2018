// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/tasks/datareviewer/ReviewerResultsTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/json dojo/has ./_DRSBaseTask ../../request ../FeatureSet ../../layers/FeatureEditResult ../../kernel".split(" "),function(h,g,n,l,t,q,u,m,r,v,c){h=h(u,{declaredClass:"esri.tasks.datareviewer.ReviewerResultsTask",constructor:function(f){this.onGetResultsComplete=g.hitch(this,this.onGetResultsComplete);this.onWriteResultComplete=g.hitch(this,this.onWriteResultComplete);
this.onWriteFeatureAsResultComplete=g.hitch(this,this.onWriteFeatureAsResultComplete);this.onGetLayerDefinitionComplete=g.hitch(this,this.onGetLayerDefinitionComplete);this.onGetBatchRunDetailsComplete=g.hitch(this,this.onGetBatchRunDetailsComplete)},getResults:function(f,c){var e=this._successHandler,d=this._errorHandler,a=this._appendQueryParams,b=this._url+"/ReviewerResults/getResults",b=a(b),k=new l;f={queryParameters:f.toJSON(),f:"json"};null!==c&&void 0!==c&&(f.filtersArray=c.toJSON());m({callbackParamName:"callback",
url:b,content:f}).then(g.hitch(this,function(b,a){if(void 0!==b.error)a=Error(),a.message=b.error.message,a.code=b.error.code,d(a,k);else try{if(void 0===b.features||void 0===b.fieldAliases||void 0===b.fields)d(null,k);else{var f=new r(b);e({featureSet:f},"onGetResultsComplete",k)}}catch(x){d(x,k)}}),function(b,a){d(b,k)});return k},writeResult:function(f,c){var e=this._successHandler,d=this._errorHandler,a=this._appendQueryParams,b=this._url+"/ReviewerResults/writeResult",b=a(b),k=new l;m({callbackParamName:"callback",
url:b,content:{reviewerAttributes:f.toJSON(),geometry:t.stringify(c.toJson()),f:"json"}}).then(g.hitch(this,function(b,a){a=Error();if(void 0!==b.error)a.message=b.error.message,a.code=b.error.code,d(a,k);else try{void 0!==b.result&&"error"===b.result?(a.message=b.messages,a.code=b.result,d(a,k)):"success"===b.result?e({success:!0},"onWriteResultComplete",k):d(null,k)}catch(w){d(w,k)}}),function(b,a){d(b,k)});return k},writeFeatureAsResult:function(f,c){var e=this._successHandler,d=this._errorHandler,
a=this._appendQueryParams,b=this._url+"/ReviewerResults/writeFeatureAsResult",b=a(b),k=new l;m({callbackParamName:"callback",url:b,content:{reviewerAttributes:f.toJSON(),feature:t.stringify(c.toJson()),f:"json"}}).then(g.hitch(this,function(b,a){a=Error();if(void 0!==b.error)a.message=b.error.message,a.code=b.error.code,d(a,k);else try{void 0!==b.result&&"error"===b.result?(a.message=b.messages,a.code=b.result,d(a,k)):"success"===b.result?e({success:!0},"onWriteFeatureAsResultComplete",k):d(null,
k)}catch(w){d(w,k)}}),function(b,a){d(b,k)});return k},getLayerDefinition:function(f){var c=this._successHandler,e=this._errorHandler,d=this._appendQueryParams,a=this._url+"/ReviewerResults/getLayerDefinition",a=d(a),b=new l,d={f:"json"};if(null!==f||void 0!==f)d.filtersArray=f.toJSON();m({callbackParamName:"callback",url:a,content:d}).then(g.hitch(this,function(a,d){if(void 0!==a.error)d=Error(),d.message=a.error.message,d.code=a.error.code,e(d,b);else try{void 0===a.whereClause?e(null,b):c({whereClause:a.whereClause},
"onGetLayerDefinitionComplete",b)}catch(p){e(p,b)}}),function(a,d){e(a,b)});return b},getBatchRunDetails:function(f){var c=this._successHandler,e=this._errorHandler,d=this._appendQueryParams,a=this._url+"/ReviewerResults/getBatchRunDetails",a=d(a),b=new l;m({callbackParamName:"callback",url:a,content:{batchRunIds:t.stringify(f),f:"json"}}).then(g.hitch(this,function(a,d){if(void 0!==a.error)d=Error(),d.message=a.error.message,d.code=a.error.code,e(d,b);else try{if(void 0===a.features||void 0===a.fieldAliases||
void 0===a.fields)e(null,b);else{var k=new r(a);c({featureSet:k},"onGetBatchRunDetailsComplete",b)}}catch(w){e(w,b)}}),function(a,d){e(a,b)});return b},updateLifecycleStatus:function(c,h,e,d){var a=this._successHandler,b=this._errorHandler,k=this._appendQueryParams,f=this._url+"/ReviewerResults/updateLifecycleStatus",f=k(f),p=new l;m({callbackParamName:"callback",url:f,content:{sessionId:c,lifecycleStatus:h,technicianName:e,filtersArray:d.toJSON(),f:"json"}}).then(g.hitch(this,function(d,e){if(void 0!==
d.error)e=Error(),e.message=d.error.message,e.code=d.error.code,b(e,p);else try{var c=[];n.forEach(d.updateResults,function(a){var b=new v;b.error=Error(a.description);b.success=a.success;b.objectId=a.objectId;c.push(b)});a({featureEditResults:c},"onUpdateLifecycleStatusComplete",p)}catch(z){b(z,p)}}),function(a,d){b(a,p)});return p},getResultsFieldNames:function(){return"recordId objectId subtype category sessionId checktitle resourceName checkName notes severity reviewStatus correctionStatus verificationStatus reviewTechnician correctionTechnician verificationTechnician reviewDateUtc correctionDateUtc verificationDateUtc lifecycleStatus".split(" ")},
onGetResultsComplete:function(c){},onWriteResultComplete:function(c){},onWriteFeatureAsResultComplete:function(c){},onGetLayerDefinitionComplete:function(c){},onGetBatchRunDetailsComplete:function(c){},onUpdateLifecycleStatusComplete:function(c){}});q("extend-esri")&&g.setObject("tasks.datareviewer.ReviewerResultsTask",h,c);return h})},"esri/tasks/datareviewer/_DRSBaseTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/has ../../request ../../urlUtils ../../kernel ../Task ./ReviewerSession".split(" "),
function(h,g,n,l,t,q,u,m,r,v){h=h(r,{declaredClass:"esri.tasks.datareviewer.DRSBaseTask",_url:null,_queryParams:null,_reviewerMapServerUrl:null,constructor:function(c){"/"==c[c.length-1]&&(c=c.slice(0,-1));c=u.urlToObject(c);this._url=c.path;this._queryParams=c.query;c=this._url.toLowerCase().lastIndexOf("/exts/");0<c&&(this._reviewerMapServerUrl=this._url.substring(0,c));this._successHandler=g.hitch(this,this._successHandler);this._errorHandler=g.hitch(this,this._errorHandler);this._appendQueryParams=
g.hitch(this,this._appendQueryParams);this.onError=g.hitch(this,this.onError)},_appendQueryParams:function(c){if(this._queryParams)for(var f in this._queryParams)c=u.urlToObject(c).query?c+("\x26"+f+"\x3d"+this._queryParams[f]):c+("?"+f+"\x3d"+this._queryParams[f]);return c},_successHandler:function(c,f,g){f&&this[f].apply(this,[c]);g&&g.resolve(c)},_errorHandler:function(c,f){null===c&&(c=Error("Unexpected response received from server"),c.code=500);this.onError(c);f&&f.reject(c)},getReviewerMapServerUrl:function(){var c=
null;if(c=this._reviewerMapServerUrl){if(this._queryParams)for(var f in this._queryParams)c=u.urlToObject(c).query?c+("\x26"+f+"\x3d"+this._queryParams[f]):c+("?"+f+"\x3d"+this._queryParams[f]);return c}return null},getLifecycleStatusStrings:function(){var c=this._successHandler,f=this._errorHandler,h=this._appendQueryParams,e=this._url+"/Utilities/getLifecycleStatusStrings",e=h(e),d=new l;q({callbackParamName:"callback",url:e,content:{f:"json"}}).then(g.hitch(this,function(a,b){if(void 0!==a.error)b=
Error(),b.message=a.error.message,b.code=a.error.code,f(b,d);else try{var e=a.lifecycleStatusString;if(void 0===e)f(null,d);else{var g=[];n.forEach(e,function(a,b){g[a.descriptionCode]=a.descriptionString});c({lifecycleStatusStrings:g},"onGetLifecycleStatusStringsComplete",d)}}catch(p){f(p,d)}}),function(a,b){f(a,d)});return d},createReviewerSession:function(c,f){var h=this._successHandler,e=this._errorHandler,d=this._appendQueryParams,a=this._url+"/Utilities/createReviewerSession",a=d(a),b=new l;
q({callbackParamName:"callback",url:a,content:{sessionName:c,sessionProperties:f.toJsonSessionOptions(),f:"json"}}).then(g.hitch(this,function(a,d){if(void 0!==a.error)d=Error(),d.message=a.error.message,d.code=a.error.code,e(d,b);else try{if(void 0===a.sessionAttributes)e(null,b);else{var c=a.sessionAttributes,f=new v(c.sessionId,c.sessionName,c.userName,c.versionName);h({reviewerSession:f},"onCreateReviewerSessionComplete",b)}}catch(x){e(x,b)}}),function(a,d){e(a,b)});return b},getReviewerSessions:function(){var c=
this._successHandler,f=this._errorHandler,h=this._appendQueryParams,e=this._url+"/Utilities/getReviewerSessions",e=h(e),d=new l;q({callbackParamName:"callback",url:e,content:{f:"json"}}).then(g.hitch(this,function(a,b){if(void 0!==a.error)b=Error(),b.message=a.error.message,b.code=a.error.code,f(b,d);else try{var e=a.sessionAttributes;if(void 0===e)f(null,d);else{var g=[];n.forEach(e,function(a,b){g[b]=new v(a.sessionId,a.sessionName,a.userName,a.versionName)});c({reviewerSessions:g},"onGetReviewerSessionsComplete",
d)}}catch(p){f(p,d)}}),function(a,b){f(a,d)});return d},getCustomFieldNames:function(){var c=this._successHandler,f=this._errorHandler,h="BATCHJOBCHECKGROUP CHECKTITLE FEATUREOBJECTCLASS LIFECYCLEPHASE LIFECYCLESTATUS SESSIONID SEVERITY SUBTYPE".split(" "),e=this._appendQueryParams,d=this._url+"/Dashboard",d=e(d),a=new l;q({callbackParamName:"callback",url:d,content:{f:"json"}}).then(g.hitch(this,function(b,d){if(void 0!==b.error)d=Error(),d.message=b.error.message,d.code=b.error.code,f(d,a);else try{var e=
[];void 0===b.reviewerResultsBy&&f(null,a);n.forEach(b.reviewerResultsBy,function(a,b){-1===h.indexOf(a.name)&&e.push(a.name)});c({customFieldNames:e},"onGetCustomFieldNamesComplete",a)}catch(p){f(p,a)}}),function(b,d){f(b,a)});return a},onGetLifecycleStatusStringsComplete:function(c){},onGetReviewerSessionsComplete:function(c){},onCreateReviewerSessionComplete:function(c){},onGetCustomFieldNamesComplete:function(c){},onError:function(c){}});t("extend-esri")&&g.setObject("tasks.datareviewer.DRSBaseTask",
h,m);return h})},"esri/tasks/datareviewer/ReviewerSession":function(){define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(h,g,n,l){h=h(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:NaN,sessionName:"",userName:"",versionName:"",constructor:function(g,h,l,m){this.sessionId=g;this.sessionName=h;this.userName=l;void 0!==m&&(this.versionName=m)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});
g("extend-esri")&&n.setObject("tasks.datareviewer.ReviewerSession",h,l);return h})},"widgets/ReportFeature/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ReportFeature/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first  jimu-trailing-padding1"\x3e${nls.drsUrl}\x3c/td\x3e\r\n        \x3ctd style\x3d"width:auto;"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true" \r\n          data-dojo-attach-point\x3d"drsUrl" style\x3d"width:650px;" class\x3d"inputBox"/\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd  style\x3d"width:80px;"\x3e\r\n            \x3cdiv data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClicked" class\x3d"jimu-btn  jimu-float-trailing" style\x3d"padding:0px 15px !important;" \x3e${nls.setSource}\x3c/div\x3e       \r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.includeReportedBy}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n           \x3cdiv\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"currentUser"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"currentLogin" value\x3d"logon" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getCurrentUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"userName"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"defaultUser" value\x3d"default" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getDefaultUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025 " data-dojo-attach-point\x3d"userInput"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"allowUser" value\x3d"user" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n       \x3c/tr\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"userNameSettings" \x3e\r\n       \x3ctr class\x3d\'dynamicRow\'\x3e\r\n       \x3ctd class\x3d"first jimu-trailing-padding1"\x3e\r\n       ${nls.userName}\r\n       \x3c/td\x3e\r\n       \x3ctd class\x3d"second"\x3e   \x3cinput type\x3d"text" class\x3d"inputBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" \r\n            data-dojo-attach-point\x3d"defaultUserName" placeHolder\x3d"${nls.revTechName}"\r\n            data-dojo-props\x3d\'style:{width:"30%"}\' /\x3e\x3c/td\x3e\r\n       \x3c/tr\x3e\r\n       \x3c/div\x3e\r\n       \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.defaultSessionId}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"defaultSessionSelect" class\x3d"selectBox"\x3e\r\n        \x3c/select\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"third"\x3e\r\n          \x3cdiv class\x3d"help-icon"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e \r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableNoLayersError" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/ReportFeature/setting/css/style.css":".drs-widget-report-feature-setting{margin:0; padding:0; font-size:15px;}.drs-widget-report-feature-setting .setting-table \x3e thead \x3e tr \x3e th,.drs-widget-report-feature-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .second{width:120px;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.drs-widget-report-feature-setting .revTechnician-item{display: inline-block; vertical-align: middle;}.drs-widget-report-feature-setting .revTechnician-item .jimu-radio,.drs-widget-report-feature-setting .revTechnician-item .jimu-leading-margin025{vertical-align: middle;}",
"*now":function(h){h(['dojo/i18n!*preload*widgets/ReportFeature/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/html dojo/query dojo/on dijit/registry esri/tasks/datareviewer/ReviewerResultsTask jimu/dijit/Message dojo/dom-style dijit/form/ValidationTextBox jimu/dijit/RadioBtn".split(" "),function(h,g,n,l,t,q,u,m,r,v,c,f,y){return h([t,l],{baseClass:"drs-widget-report-feature-setting",includeUserBy:"",defaultUserName:"",selectedUserType:"",postCreate:function(){this.own(r(this.currentUser,
"click",n.hitch(this,function(){this._setRadioItem(this.currentUser)})));this.own(r(this.userName,"click",n.hitch(this,function(){this._setRadioItem(this.userName)})));this.own(r(this.userInput,"click",n.hitch(this,function(){this._setRadioItem(this.userInput)})))},startup:function(){this.inherited(arguments);this.config.layers||(this.config.layers=[]);var e=[{name:"label",title:this.nls.label,width:"40%",type:"text"},{name:"id",title:"index",type:"text",hidden:!0},{name:"alias",title:this.nls.alias,
type:"text",width:"40%",editable:"true","class":"symbol"},{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"layerType",title:"layerType",type:"text",hidden:!0},{name:"url",title:"url",type:"text",hidden:!0}];this._setUserNameVisibility(!1);this.displayFieldsTable=new q({fields:e,selectable:!0});this.displayFieldsTable.placeAt(this.tableLayerInfos);u.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.displayFieldsTable.startup();this.setConfig(this.config)},
_setUserNameVisibility:function(e){var d=m(this.userNameSettings);e?(this.set("includeUserBy","default"),d.style({display:"block"}),this.showHideDynamicRows(!0,this.userNameSettings)):this.showHideDynamicRows(!1,this.userNameSettings)},showHideDynamicRows:function(e){var d=m(".dynamicRow");if(void 0!==d&&null!==d&&0<d.length)for(var a=0;a<d.length;a++)d[a].style.display=e?"":"none"},setConfig:function(e){this.config=e;this.populateSessionNames(this.config.drsUrl);e.drsUrl&&this.drsUrl.set("value",
e.drsUrl);""===e.includeReportedBy||"logon"===e.includeReportedBy||void 0===e.includeReportedBy?this._setRadioItem(this.currentUser):"default"===e.includeReportedBy?(this._setRadioItem(this.userName),this.defaultUserName.set("value",e.defaultUserName)):"user"===e.includeReportedBy&&this._setRadioItem(this.userInput);e=this.map.itemInfo.itemData.operationalLayers;0>=e.length?(y.set(this.tableNoLayersError,"display",""),this.tableNoLayersError.innerHTML=this.nls.noLayers):y.set(this.tableNoLayersError,
"display","none");for(var d=0;d<e.length;d++){var a=e[d];if(a.hasOwnProperty("url")&&0<a.url.indexOf("MapServer")||"ArcGISFeatureLayer"===a.layerType){var b,c,f="ArcGISMapServiceLayer";b=this.isLayerInConfig(a,"alias");c=this.isLayerInConfig(a,"show");a.layerType&&(f=a.layerType);this.displayFieldsTable.addRow({label:a.title,id:a.id,alias:""===b?a.title:b,show:""===c?!0:c,layerType:f,url:a.url})}}},_onBtnSetSourceClicked:function(){this.populateSessionNames(this.drsUrl.value)},populateSessionNames:function(e){this.defaultSessionSelect.options.length=
null;(new c(e)).getReviewerSessions().then(n.hitch(this,function(d){g.forEach(d.reviewerSessions,n.hitch(this,function(a){this.defaultSessionSelect.addOption({value:a.sessionId,label:a.toString()})}));this.config.sessionID&&this.defaultSessionSelect.set("value",this.config.sessionID.toString())}))},isLayerInConfig:function(e,d){if(this.config.layers)for(var a=this.config.layers,b=a.length,c=0;c<b;c++)if(a[c].id.toLowerCase()===e.id.toLowerCase()){if("show"===d)return a[c].show;if("alias"===d)return a[c].alias}return""},
_setRadioItem:function(c){c=v.byNode(m(".jimu-radio",c)[0]);c.check(!0);this.selectedUserType=c.value;"default"===c.value?this._setUserNameVisibility(!0):this._setUserNameVisibility(!1)},getConfig:function(){if(!this.drsUrl.value)return new f({message:this.nls.warning}),!1;this.config.drsUrl=this.drsUrl.value;if(""===this.defaultSessionSelect.value||void 0===this.defaultSessionSelect.value)return new f({message:this.nls.noSessionName}),!1;this.config.sessionID=this.defaultSessionSelect.value;var c=
this.displayFieldsTable.getData();this.config.layers=[];for(var d=[],a=c.length,b=0;b<a;b++){var g={};g.label=c[b].label;g.id=c[b].id;g.alias=c[b].alias;g.show=c[b].show;g.layerType=c[b].layerType;g.url=c[b].url;d.push(g)}this.config.layers=d;if("default"===this.selectedUserType&&""===this.defaultUserName.value)return new f({message:this.nls.noUserName}),!1;this.config.includeReportedBy=this.selectedUserType;this.config.defaultUserName=this.defaultUserName.value;return this.config}})});