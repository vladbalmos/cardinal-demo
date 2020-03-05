System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-8cc80ac0.system.js","./p-76ae633a.system.js","./p-29529ff4.system.js"],function(e){"use strict";var t,s,i,o,r,n;return{setters:[function(e){t=e.r;s=e.c;i=e.h},function(e){o=e.C},function(e){r=e.T},function(){},function(e){n=e.C}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,s,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)if(n=e[a])r=(o<3?n(r):o>3?n(t,s,r):n(t,s))||r;return o>3&&r&&Object.defineProperty(t,s,r),r};var l=e("psk_ui_alert",function(){function e(e){t(this,e);this.typeOfAlert=n.ALERT_SUCCESS;this.timeAlive=3e3;this.alert=null;this.isVisible=true;this.closeFeedback=s(this,"closeFeedback",7)}e.prototype.closeUIFeedback=function(){var e=this;this.isVisible=false;setTimeout(function(){e.closeFeedback.emit(e.message)},1e3)};e.prototype.render=function(){var e=this;this.alert=i("div",{class:"alert "+this.typeOfAlert+" alert-dismissible fade "+(this.isVisible?"show":"hide"),style:this.styleCustomisation.alert?this.styleCustomisation.alert.style?this.styleCustomisation.alert.style:{}:{},onClick:function(){e.closeUIFeedback()}},i("slot",null),i("div",{class:"toast-body"},this.message.content));setTimeout(function(){e.closeUIFeedback()},this.timeAlive);return this.alert};return e}());a([o(),r({description:"This property is a string that indicates the type of alert that you want so send back to the user",isMandatory:false,propertyType:"string",defaultValue:"alert-success"})],l.prototype,"typeOfAlert",void 0);a([r({description:"This property is the message that will be rendered on the alert",isMandatory:false,propertyType:"any"})],l.prototype,"message",void 0);a([r({description:"This property is the time in milliseconds t",isMandatory:false,propertyType:"any"})],l.prototype,"timeAlive",void 0);a([r({description:"The style customisation for the alert so it looks according to your application",isMandatory:false,propertyType:"StyleCustomisation"})],l.prototype,"styleCustomisation",void 0)}}});