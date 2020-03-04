System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-8cc80ac0.system.js","./p-76ae633a.system.js","./p-e811389c.system.js"],function(t){"use strict";var e,o,n,r,i,s;return{setters:[function(t){e=t.r;o=t.h;n=t.g},function(t){r=t.C},function(t){i=t.T},function(){},function(t){s=t.C}],execute:function(){var a=undefined&&undefined.__decorate||function(t,e,o,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)if(s=t[a])i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i;return r>3&&i&&Object.defineProperty(e,o,i),i};var l=t("psk_form",function(){function t(t){e(this,t);this.formActions="submit"}t.prototype.componentWillLoad=function(){var t=this;if(typeof this.controllerName==="string"){return new Promise(function(e,o){s.getController(t.controllerName).then(function(o){t.controller=new o(t._host);e()}).catch(o)})}};t.prototype.render=function(){return o("div",{class:"container"},o("form",null,o("slot",null),this._createFormActions(this.formActions)))};t.prototype._createFormActions=function(t){if(t.trim().length===0){return null}var e=[];e=t.split(",").map(function(t){return o("psk-button",{"button-class":t,"event-name":t,label:t})});return o("div",{id:"actions",class:"container-fluid"},e)};Object.defineProperty(t.prototype,"_host",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());a([r()],l.prototype,"controller",void 0);a([i({description:["This attributes is setting the controller of the form. The default value for this attribute is FormController, a default controller for handling form submitions created inside Cardinal.Js.",'Information about creating a controller can be found inside the documentation: <psk-link page="Cardinal/controllers">Controllers Documentation</psk-link>',"All the "],isMandatory:false,propertyType:"string",defaultValue:"FormController",specialNote:"If the controller name is not provided, then the default FormController is assumed."})],l.prototype,"controllerName",void 0);a([i({description:['By defining this attribute, the user is able to control the behaviour of the form, so by definition, this attribute holds the possible actions inside the form, the defined actions should be sepparated by comma(",").',"Also, as a recommendation, the values should be provided using lowercases, and if there are more words inside an action, to be written using dash symbol(-)","Example of form actions: submit, reset-form, validate-form, cancel",'Using all these actions, the component will generate a <psk-link page="web-components/psk-button">psk-button</psk-link>.'],isMandatory:false,propertyType:"string values sepparated by comma (,)",defaultValue:"submit",specialNote:"If this attribute has no value, then the submit form action is assumed as default value."})],l.prototype,"formActions",void 0)}}});