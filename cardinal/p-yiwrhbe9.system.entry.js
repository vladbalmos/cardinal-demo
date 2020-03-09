System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-c5ed78fc.system.js","./p-44489c7e.system.js","./p-1fe9a9c9.system.js"],function(e){"use strict";var t,o,r,n,i,a;return{setters:[function(e){t=e.r;o=e.g},function(e){r=e.C},function(e){n=e.T},function(e){i=e.a},function(e){a=e.B}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)if(a=e[l])i=(n<3?a(i):n>3?a(t,o,i):a(t,o))||i;return n>3&&i&&Object.defineProperty(t,o,i),i};var s=e("psk_for_each_old",function(){function e(e){t(this,e);this.templateModel=null;this.currentTemplateViews=[];this.emptyListPlaceholder=null;this.dataViewModel=null}e.prototype.render=function(){this.__renderFormTemplateContent.call(this)};e.prototype.__renderFormTemplateContent=function(){var e=this;var t=this.__getTemplateContent.call(this);if(t===null){console.error("[psk-for-each] Template content for the component is not defined");return null}if(!this["parentChain"]||!this["rootModel"]){return null}var o=t.content.children;for(var r=0;r<o.length;r++){if(o[r].hasAttribute("slot")){if(o[r].getAttribute("slot")==="no-data"){this.emptyListPlaceholder=o[r].cloneNode(true);t.content.removeChild(o[r]);break}}}var n=this["parentChain"];var a=this["rootModel"];this.templateModel=a.getChainValue(n);a.onChange(n,function(){e.templateModel=a.getChainValue(n)});var l=this.__host.parentElement;if(l.shadowRoot){if(l.shadowRoot.querySelector("slot")!==null){l=l.shadowRoot.querySelector("slot").parentElement}}else{if(l.querySelector("slot")!==null){l=l.querySelector("slot").parentElement}}var s=l.shadowRoot?l.shadowRoot:l;while(this.currentTemplateViews.length>0){var h=this.currentTemplateViews.pop();if(s.contains(h))s.removeChild(h)}if(!l.shadowRoot&&i(l.tagName)){l.attachShadow({mode:"open"})}if(this.templateModel.length>0){for(var p=0;p<this.templateModel.length;++p){var d=n+"."+p+".";this.__appendTemplateItem.call(this,d,t.content.cloneNode(true),l)}}else{if(this.emptyListPlaceholder){this.__appendNodeInParent(this.emptyListPlaceholder,l)}else{console.log("No data to iterate")}}};e.prototype.__getTemplateContent=function(){var e=this.__host.querySelector("template");return e?e:null};e.prototype.__processNode=function(e,t){var o=this;var r=Array.from(e.attributes).filter(function(e){return e.name.startsWith("view-model-")});r.forEach(function(r){var n=r.name.split("view-model-")[1];var i=t?""+t+r.value:r.value;e.setAttribute(n,o["rootModel"].getChainValue(i))});r=Array.from(e.attributes).filter(function(e){return e.value.startsWith("@")});r.forEach(function(r){var n=r.value.split("@")[1];var i=t?""+t+n:n;e.setAttribute(r.name,o["rootModel"].getChainValue(i))});Array.from(e.children).forEach(function(e){o.__processNode.call(o,e,t)})};e.prototype.__appendTemplateItem=function(e,t,o){var r=this;var n=t.querySelectorAll("[view-model]");var i=Array.from(t.children);i.forEach(function(t){r.__processNode.call(r,t,e)});n.forEach(function(t){var o=""+e+t.getAttribute("view-model");t.setAttribute("view-model",o);t.setAttribute("get-model","get-model")});Array.from(t.childNodes).forEach(function(e){r.__appendNodeInParent(e,o)})};e.prototype.__appendNodeInParent=function(e,t){this.currentTemplateViews.push(e);if(t.shadowRoot){t.shadowRoot.append(e)}else{t.append(e)}};Object.defineProperty(e.prototype,"__host",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());l([r(),a()],s.prototype,"templateModel",void 0);l([n({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:false,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],s.prototype,"dataViewModel",void 0)}}});