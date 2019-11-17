// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/dom-construct dojo/_base/array dojo/_base/lang dojo/Deferred dojo/promise/all dojo/aspect esri/request ./LayerInfoForDefault".split(" "),function(g,b,c,e,h,k,l,m,n){return g(n,{constructor:function(){this._addImageServiceLayerType()},_addImageServiceLayerType:function(){this.layerObject.type=!this.layerObject.serviceDataType||"esriImageServiceDataTypeVector-UV"!==this.layerObject.serviceDataType&&"esriImageServiceDataTypeVector-MagDir"!==this.layerObject.serviceDataType?
"ArcGISImageServiceLayer":"ArcGISImageServiceVectorLayer"},_initLegendsNode:function(d){10.2<=this.layerObject.version?this._legendRequestServer().then(e.hitch(this,function(a){b.empty(d);c.forEach(a.layers,function(a){c.forEach(a.legend,function(a){if("\x3call other values\x3e"!==a.label){var f=b.create("div",{"class":"legend-div"},d),e=b.create("div",{"class":"legend-symbol jimu-float-leading",style:"width:50px;height:50px;position:relative"},f),c=null,c=a.imageData?"data:"+a.contentType+";base64,"+
a.imageData:a.url;b.create("img",{"class":"legend-symbol-image",style:"overflow:auto;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0",src:c},e);b.create("div",{"class":"legend-label jimu-float-leading",innerHTML:a.label||" "},f)}},this)},this)}),e.hitch(this,function(){b.empty(d)})):b.empty(d)},_legendRequestServer:function(){var d=this.layerObject.url+"/legend",a={f:"json"};this.layerObject._params.bandIds&&(a.bandIds=this.layerObject._params.bandIds);this.layerObject._params.renderingRule&&
(a.renderingRule=this.layerObject._params.renderingRule);return m({url:d,content:a,handleAs:"json",callbackParamName:"callback"})},getSupportTableInfo:function(){var d=new h,a={isSupportedLayer:!1,isSupportQuery:!1,layerType:null},b=this.getLayerType(),c=this.getLayerObject();k({type:b,layerObject:c}).then(e.hitch(this,function(b){var c=b.type;b=b.layerObject;a.layerType=c;0<=this._getLayerTypesOfSupportTable().indexOf(c)&&(a.isSupportedLayer=!0);b.capabilities&&0<=b.capabilities.indexOf("Catalog")?
a.isSupportQuery=!0:a.isSupportedLayer=!1;d.resolve(a)}),function(){d.resolve(a)});return d},_getServiceDefinition:function(){var b=this.getUrl();return this._serviceDefinitionBuffer.getRequest(this.subId).request(b)},_bindEvent:function(){var b;this.inherited(arguments);this.layerObject&&!this.layerObject.empty&&(b=l.after(this.layerObject,"setRenderingRule",e.hitch(this,this._onRendererChanged)),this._eventHandles.push(b))}})});