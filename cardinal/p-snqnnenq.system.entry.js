System.register(["./p-226ad382.system.js","./p-a6c41423.system.js","./p-f7aa7448.system.js"],function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.r;n=e.h},function(e){r=e.T},function(){}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,n,r){var o=arguments.length,a=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(i=e[s])a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a;return o>3&&a&&Object.defineProperty(t,n,a),a};var a=e("psk_page_loader",function(){function e(e){t(this,e);this.errorLoadingPage=false}e.prototype.watchHandler=function(e){this.getPageContent(e,this.getPageHandler())};e.prototype.componentWillLoad=function(){var e=this;return new Promise(function(t){e.getPageContent(e.pageUrl,e.getPageHandler(t))})};e.prototype.getPageHandler=function(e){var t=this;return function(n,r){if(n){t.errorLoadingPage=true}else{t.errorLoadingPage=false;t.pageContent=r}if(typeof e==="function"){e()}}};e.prototype.getPageContent=function(e,t){var n=this;var r=new XMLHttpRequest;r.open("GET",e);r.onload=function(){if(r.status!=200){t(new Error("Some error occurred"))}else{t(null,r.responseText)}};r.onerror=function(){n.errorLoadingPage=true};r.send()};e.prototype.render=function(){return this.errorLoadingPage?n("h4",null,"Page "+this.pageUrl+" could not be loaded!"):n("div",{class:"page_content",innerHTML:this.pageContent})};Object.defineProperty(e,"watchers",{get:function(){return{pageUrl:["watchHandler"]}},enumerable:true,configurable:true});return e}());o([r({description:["This property is the url for the page that needs to be loaded.","When this component loads a get http request will be issued and the cotent of that url will be rendered if it can be accessed."],isMandatory:true,propertyType:"string"})],a.prototype,"pageUrl",void 0)}}});