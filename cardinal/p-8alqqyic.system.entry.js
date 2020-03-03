System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-d28653c7.system.js","./p-5ee50c84.system.js"],function(e){"use strict";var t,i,r,n,o,s;return{setters:[function(e){t=e.r;i=e.c;r=e.h},function(e){n=e.C},function(e){o=e.T},function(e){s=e.T}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)if(s=e[l])o=(n<3?s(o):n>3?s(t,i,o):s(t,i))||o;return n>3&&o&&Object.defineProperty(t,i,o),o};var a=e("psk_link",function(){function e(e){t(this,e);this.error=false;this.destinationUrl="#";this.validateUrl=i(this,"validateUrl",7)}e.prototype.componentDidLoad=function(){var e=this;if(!this.page){return}this.validateUrl.emit({sourceUrl:this.page,callback:function(t,i){if(!t){e.destinationUrl=i;e.error=false}else{e.error=true}}})};e.prototype.render=function(){var e=null;if(this.error){e=r("div",{class:"tooltip-error"},r("div",null,"Page ",r("b",null,this.page)," does not exists."))}return r("div",{class:"psk-link"},this.error?r("div",null,r("a",{class:"btn btn-link "+(this.error?"invalid-url":""),onClick:function(e){e.preventDefault()}},r("slot",null)),e):r("stencil-route-link",{url:this.destinationUrl,anchorClass:"btn btn-link"},r("slot",null)))};return e}());l([n(),o({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:true,propertyType:"string"})],a.prototype,"page",void 0);l([s({controllerInteraction:{required:true},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],a.prototype,"validateUrl",void 0)}}});