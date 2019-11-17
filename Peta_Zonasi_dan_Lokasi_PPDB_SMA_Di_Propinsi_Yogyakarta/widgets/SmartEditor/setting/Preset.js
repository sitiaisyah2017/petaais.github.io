// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/SmartEditor/setting/Preset.html":'\x3cdiv class\x3d"esriCTPresetPopUpDiv"\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv style\x3d"width:50%; float:left;"\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopUpLabel"\x3e${nls.intersectionPage.groupNameLabel}\x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopupdijitWrapper"\x3e\r\n                \x3cdiv class\x3d"esriCTPresetPopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"groupNameDiv"\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv style\x3d"width:50%; float:left;"\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopUpLabel"\x3e${nls.intersectionPage.dataTypeLabel}\x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopupdijitWrapper"\x3e\r\n                \x3cdiv class\x3d"esriCTPresetPopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"dataTypeDropdownDiv"\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n        \x3cdiv style\x3d"width: 100%;" data-dojo-attach-point\x3d"showOnlyDomainFieldsNode" class\x3d"esriCTPresetPopUpLabel"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n            \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.smartActionsPage.layerAndFieldsApplyLabel}\x3c/legend\x3e\r\n            \x3cdiv class\x3d"esriCTTableParentContainer" data-dojo-attach-point\x3d"tableParentContainer"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/fieldset\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopUpLabel"\x3e${nls.presetPopup.presetValueLAbel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPresetPopupdijitWrapper" data-dojo-attach-point\x3d"presetValuedijitWrapper"\x3e\r\n            \x3cdiv class\x3d"esriCTPresetPopupdijit" style\x3d"width: 100%" data-dojo-attach-point\x3d"presetValueDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-btn esriCTSelectValueBtn" data-dojo-attach-point\x3d"selectPresetValueBtn"\r\n            data-dojo-attach-event\x3d"onClick:_onSelectPresetValueButtonClick"\x3e${nls.chooseFromLayer.selectValueLabel}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n        \x3cdiv style\x3d"width: 100%;" data-dojo-attach-point\x3d"hideInPresetDisplayNode" class\x3d"esriCTPresetPopUpLabel"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/mouse dojo/text!./Preset.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup jimu/dijit/CheckBox dijit/form/Select dijit/form/ValidationTextBox ./ChooseFromLayer ./RelativeDates ./RelativeDomains dojo/dom-class dijit/form/NumberTextBox ./layersAndFieldsApplyOn ../presetUtils jimu/utils".split(" "),function(p,q,c,g,k,f,r,t,u,v,w,n,x,l,y,z,A,B,C,D,m,E){return p([v,q,u],{baseClass:"jimu-widget-smartEditor-setting-presetPopup",
templateString:t,groupNameTextBox:null,dataTypeDropdown:null,hasDomainField:null,presetValueDijitNode:null,presetValueTimeNode:null,_selectedRelativeDate:null,_selectedRelativeDomains:null,ValidFieldsByTypeToApplyOn:{esriFieldTypeInteger:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeGUID:["esriFieldTypeGUID"],esriFieldTypeDate:["esriFieldTypeDate"],esriFieldTypeString:["esriFieldTypeString"]},postCreate:function(){this.inherited(arguments);
this._isDomainField();this._initControls();this.isDelete||this.showDialog()},_initControls:function(){this.groupNameTextBox=new l({required:!0,trim:!0,style:{width:"100%"}});this.groupNameTextBox.placeAt(this.groupNameDiv);this.groupNameTextBox.validator=c.hitch(this,function(b){return b?b!==this.prevName&&this.editUtils.isDuplicateGroupName(b,this.existingGroupNames)?(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.uniqueGroupNameMsg),!1):!0:(this.groupNameTextBox.set("invalidMessage",
this.nls.smartActionsPage.requiredGroupNameMsg),!1)});this.groupNameTextBox.startup();this.name&&this.groupNameTextBox.set("value",this.name);this.dataTypeDropdown=new x({options:this._addDataTypeOptions(),style:{width:"100%"}});this.own(f(this.dataTypeDropdown,"change",c.hitch(this,function(b){var a;this.showOnlyDomainFieldsCB.getValue()||"esriFieldTypeDate"!==b||(this._selectedRelativeDate=a={dateType:"fixed"});this._createValueDijit(b,a);this._domainTableData=[]})));this.dataTypeDropdown.placeAt(this.dataTypeDropdownDiv);
this.dataTypeDropdown.startup();this.showOnlyDomainFieldsCB=new n({label:this.nls.presetPage.showOnlyDomainFields},k.create("div",{},this.showOnlyDomainFieldsNode));this.showOnlyDomainFields&&this.showOnlyDomainFieldsCB.setValue(!0);this.own(f(this.showOnlyDomainFieldsCB,"change",c.hitch(this,function(b){var a,c=this.dataTypeDropdown.get("value");b||"esriFieldTypeDate"!==c||(this._selectedRelativeDate=a={dateType:"fixed"});this._createValueDijit(c,a);this._createLayersAndFields(c,b)})));this.dataType&&
(this.dataTypeDropdown.set("value",this.dataType,!1),this.showOnlyDomainFields?this._selectedRelativeDomains=this._domainTableData=this.presetValue:"esriFieldTypeDate"===this.dataType&&(this._selectedRelativeDate=this.presetValue),this._createValueDijit(this.dataType,this.presetValue));this.hideInPresetDisplayCB=new n({label:this.nls.presetPage.hideInPresetDisplay},k.create("div",{},this.hideInPresetDisplayNode));this.hideInPresetDisplay&&this.hideInPresetDisplayCB.setValue(!0)},_createValueDijit:function(b,
a){var h;if(h=this.createDijitOnDataTypeChange(b))this.presetValueDijitNode=h,this.own(f(this.presetValueDijitNode.domNode,r.enter,c.hitch(this,function(){if(this._selectedRelativeDate&&"esriFieldTypeDate"===this.dataTypeDropdown.get("value")){var a=m.getDateFromRelativeInfo(this._selectedRelativeDate,!0);""===a&&(a=this.nls.relativeDates.noDateDefinedTooltip);this.presetValueDijitNode.set("title",a)}else this.presetValueDijitNode.set("title",this.presetValueDijitNode.get("value"))}))),this.presetValueDijitNode.placeAt(this.presetValueDiv),
this.presetValueDijitNode.startup(),a&&(this.showOnlyDomainFields?this.presetValueDijitNode.set("value",this._getDefaultDomain(a)):"esriFieldTypeDate"===b&&a.dateType?"fixed"===a.dateType?a.dateTime?this.presetValueDijitNode.set("value",m.getDateFromRelativeInfo(a,!0)):this.presetValueDijitNode.set("value",""):this.presetValueDijitNode.set("value",this.nls.relativeDates[a.dateType]):this.presetValueDijitNode.set("value",a)),this._createLayersAndFields(b,this.showOnlyDomainFieldsCB.checked)},_addDataTypeOptions:function(){return[{label:this.nls.dataType.esriFieldTypeString,
value:"esriFieldTypeString"},{label:this.nls.dataType.esriFieldTypeInteger,value:"esriFieldTypeInteger"},{label:this.nls.dataType.esriFieldTypeDate,value:"esriFieldTypeDate"},{label:this.nls.dataType.esriFieldTypeGUID,value:"esriFieldTypeGUID"}]},_isDomainField:function(){g.forEach(this._totalLayers,c.hitch(this,function(b){g.some(b.layerObject.fields,c.hitch(this,function(a){if(a.domain&&"codedValue"===a.domain.type)return this.hasDomainField=!0}))}))},_createLayerFieldsFilter:function(b,a){var h=
[],e={};g.forEach(this._totalLayers,c.hitch(this,function(d){(!d.isTable||d.isTable&&0<d.layerObject.relationships.length)&&g.forEach(d.layerObject.fields,c.hitch(this,function(c){this.ValidFieldsByTypeToApplyOn[b]&&(h=this.ValidFieldsByTypeToApplyOn[b],-1<h.indexOf(c.type)&&c.editable&&(!a||c.domain&&(!c.domain||"range"!==c.domain.type))&&(e[d.id]||(e[d.id]={}),e[d.id][c.name]=c))}))}));return e},_createLayersAndFields:function(b,a){this._layerAndFieldsApplyOnObj=new D({map:this.map,layerInfos:this.layerInfos,
_configInfos:this._configInfos,actionName:"Preset",nls:this.nls,prevName:this.prevName,existingGroups:this.existingGroups,_configuredPresetInfos:this._configuredPresetInfos,layerDetails:this._createLayerFieldsFilter(b,a),appliedOn:this.appliedOn});k.empty(this.tableParentContainer);this._layerAndFieldsApplyOnObj.placeAt(this.tableParentContainer);this._layerAndFieldsApplyOnObj.startup();B.add(this._layerAndFieldsApplyOnObj.layerAndFieldsMainDiv,"esriCTOverrideForPreset");f(this._layerAndFieldsApplyOnObj,
"layerFieldsUpdated",c.hitch(this,function(){this._fieldsToAppliedUpdated=!0;this.tableDomains=this._consolidateLayerDomains();this._domainTableData=this._createDomainData()}))},deleteGroup:function(){this._layerAndFieldsApplyOnObj.deleteGroup()},showDialog:function(){this.presetPopup=new w({titleLabel:this.nls.fieldsPage.fieldsSettingsTable.canPresetValue,width:950,maxHeight:600,autoHeight:!1,"class":this.baseClass,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var b=!0,
a;a={};this.groupNameTextBox.isValid()?(a.name=E.stripHTML(this.groupNameTextBox.get("value")),a.dataType=this.dataTypeDropdown.get("value"),"esriFieldTypeGUID"===a.dataType&&""===this.presetValueDijitNode.get("value")&&(b=!1),b&&!this.presetValueDijitNode.isValid()?this.presetValueDijitNode.focus():(a.showOnlyDomainFields=this.showOnlyDomainFieldsCB.getValue(),a.hideInPresetDisplay=this.hideInPresetDisplayCB.getValue(),this.showOnlyDomainFieldsCB.checked&&this._domainTableData?a.presetValue=c.clone(this._domainTableData):
"esriFieldTypeDate"===a.dataType?a.presetValue=c.clone(this._selectedRelativeDate):this.presetValueDijitNode&&(a.presetValue=this.presetValueDijitNode.get("value")),a.appliedOn=this._layerAndFieldsApplyOnObj.getCheckedFields(a),this.emit("groupInfoUpdated",a),this.presetPopup.close())):this.groupNameTextBox.focus()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,function(){this.presetPopup.close()})}]})},createDijitOnDataTypeChange:function(b){k.empty(this.presetValueDiv);
this.presetValueDijitNode=this.presetValueTimeNode=null;if(this.showOnlyDomainFieldsCB.getValue()||"esriFieldTypeDate"===b)b=new l({required:!1,disabled:!0,trim:!0,style:{width:"100%"}});else switch(b){case "esriFieldTypeSmallInteger":case "esriFieldTypeInteger":case "esriFieldTypeSingle":case "esriFieldTypeDouble":b=new C({style:"width:100%"});break;case "esriFieldTypeGUID":b=new l({style:"width:100%"});b.validator=c.hitch(this,m.isGuid);break;default:b=new l({required:!1,trim:!0,style:{width:"100%"}})}return b},
_onSelectPresetValueButtonClick:function(){var b=this.dataTypeDropdown.get("value");this.showOnlyDomainFieldsCB.checked?(this._relativeDomainsObj=new A({nls:this.nls,layerInfos:this.layerInfos,domainTableData:this._domainTableData,dataType:this.dataTypeDropdown.get("value"),_selectedRelativeDomains:this._selectedRelativeDomains}),this.own(f(this._relativeDomainsObj,"updatePresetValue",c.hitch(this,function(a){this._selectedRelativeDomains=this._domainTableData=a.domainData;this.presetValueDijitNode.set("value",
a.defaultValue)})))):"esriFieldTypeDate"===b?(this._relativeDatesObj=new z({nls:this.nls,relativeDates:this._selectedRelativeDate}),this.own(f(this._relativeDatesObj,"updatePresetValue",c.hitch(this,function(a){this._selectedRelativeDate=a;"fixed"===this._selectedRelativeDate.dateType?this._selectedRelativeDate.dateTime?this.presetValueDijitNode.set("value",m.getDateFromRelativeInfo(this._selectedRelativeDate,!0)):this.presetValueDijitNode.set("value",""):this.presetValueDijitNode.set("value",this.nls.relativeDates[a.dateType])})))):
(this.ChooseFromLayerObj=new y({map:this.map,nls:this.nls,allLayers:this._totalLayers,dataType:this.dataTypeDropdown.get("value")}),f(this.ChooseFromLayerObj,"updatePresetValue",c.hitch(this,function(a){this.presetValueDijitNode.set("value",a)})))},_getDefaultDomain:function(b){var a="";g.some(b,c.hitch(this,function(b){if(b.isDefault)return a=b.label,!0}));return a},_consolidateLayerDomains:function(){var b=[],a,h,e,d={};h=this._layerAndFieldsApplyOnObj.getOnlyCheckedFields();for(var f in h)e=this.layerInfos.getLayerInfoById(f),
g.forEach(h[f],c.hitch(this,function(b){(a=e.layerObject.getField(b))&&a.domain&&a.domain.codedValues&&g.forEach(a.domain.codedValues,c.hitch(this,function(a){d.hasOwnProperty(a.code)?0>d[a.code].indexOf(a.name)&&d[a.code].push(a.name):(d[a.code]=[],d[a.code].push(a.name))}))}));for(var k in d)b.push({value:k,displayedLabel:d[k].join(" | ")});return b},_createDomainData:function(){var b=[];g.forEach(this._selectedRelativeDomains,c.hitch(this,function(a){for(var c,e=this.tableDomains.length-1;0<=e;e--)if(c=
this.tableDomains[e].value,"esriFieldTypeString"!==this.dataTypeDropdown.get("value")&&(c=Number(c)),a.value===c){b.push({showInList:a.showInList,value:this.tableDomains[e].value,label:this.tableDomains[e].displayedLabel,isDefault:a.isDefault});this.tableDomains.splice(e,1);break}}));g.forEach(this.tableDomains,c.hitch(this,function(a,c){b.push({showInList:!0,value:""+a.value+"",label:a.displayedLabel,isDefault:!1})}));return b}})});