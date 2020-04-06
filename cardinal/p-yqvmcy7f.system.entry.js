System.register(["./p-3369a689.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-609d210d.system.js","./p-7a7a1b10.system.js"],(function(e){"use strict";var t,o,r,n,i;return{setters:[function(e){t=e.r;o=e.h;r=e.g},function(){},function(){},function(e){n=e.T},function(e){i=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,o,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i;return n>3&&i&&Object.defineProperty(t,o,i),i};var a=e("psk_app_root",function(){function e(e){t(this,e);this.mobileLayout=false;this.componentCode="";this.hasSlot=false}e.prototype.__createLoader=function(){var e=12;var t="";for(var o=1;o<=e;o++){t+='<div class="sk-circle'+o+' sk-circle"></div>'}var r=document.createElement("div");r.className="app-loader";r.innerHTML="<div class='sk-fading-circle'>"+t+"</div>";return r};e.prototype.connectedCallback=function(){this.disconnected=false};e.prototype.disconnectedCallback=function(){this.disconnected=true};e.prototype.componentWillLoad=function(){var e=this;if(this.host.parentElement){this.htmlLoader=this.__createLoader();this.host.parentElement.appendChild(this.htmlLoader)}var t=this.host.innerHTML;t=t.replace(/\s/g,"");if(t.length){this.hasSlot=true}if(typeof this.controller==="string"){return new Promise((function(t,o){i.getController(e.controller).then((function(o){if(e.disconnected){return t()}new o(e.host);t()})).catch(o)}))}else{console.error("No controller added to app-root")}};e.prototype.componentDidLoad=function(){if(this.htmlLoader&&this.htmlLoader.parentNode){this.htmlLoader.parentNode.removeChild(this.htmlLoader)}};e.prototype.render=function(){var e="psk-default-renderer";return this.hasSlot?o("slot",null):o(e,null)};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());s([n({isMandatory:true,description:["This property is a string that will permit the developer to choose his own controller.","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],a.prototype,"controller",void 0)}}}));