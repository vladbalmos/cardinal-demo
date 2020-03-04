System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-8cc80ac0.system.js","./p-76ae633a.system.js","./p-8d5c6603.system.js","./p-9bc303bb.system.js"],function(t){"use strict";var e,i,r,o,n,s,c,a,p,h,l,d;return{setters:[function(t){e=t.r;i=t.h;r=t.c;o=t.g},function(t){n=t.C},function(t){s=t.T;c=t.f;a=t.g},function(t){p=t.s;h=t.d},function(t){l=t.B},function(t){d=t.T}],execute:function(){var f=undefined&&undefined.__decorate||function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,i,r);else for(var c=t.length-1;c>=0;c--)if(s=t[c])n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n;return o>3&&n&&Object.defineProperty(e,i,n),n};var u=t("psk_card",function(){function t(t){e(this,t);this.title="";this.id=""}t.prototype.render=function(){var t=this.id.trim().replace(/(\s+|:+|\/+)/g,"-").toLowerCase();var e=null;if(this.title){e=i("div",{class:"card-header"},i("h5",null,this.title,t.length>0?i("psk-copy-clipboard",{id:t},"#"):null),i("slot",{name:"toolbar"}))}return i("div",{class:"card psk-card",id:t},e,i("div",{class:"card-body"},i("slot",null)))};return t}());f([l(),n(),s({description:"This property is the title that will be rendered in title specific format.",isMandatory:false,propertyType:"string"})],u.prototype,"title",void 0);f([s({description:"This property is the id which will be attached to the component so finding the component in the DOM should be simplified.\n\t\t\t\t\tThe id is also simplifying the navigation to that section of the page where the component is rendered.\n\t\t\t\t\tSpecial characters(Example : ':','/') will be replaced with dash('-').",isMandatory:false,propertyType:"string"})],u.prototype,"id",void 0);var y=undefined&&undefined.__decorate||function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,i,r);else for(var c=t.length-1;c>=0;c--)if(s=t[c])n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n;return o>3&&n&&Object.defineProperty(e,i,n),n};var m=t("psk_chapter",function(){function t(t){e(this,t);this.title="";this.reportedToc=false;var i=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,i=t=="x"?e:e&3|8;return i.toString(16)})};this.guid=i();this.chapterInfo={title:this.title,guid:this.guid,children:[]};this.sendChapter=r(this,"psk-send-chapter",5)}t.prototype.componentDidLoad=function(){if(!this.reportedToc){this.sendChapter.emit(this.chapterInfo)}};t.prototype.receivedChapter=function(t){if(t.path&&t.path[0]&&o(this)!==t.path[0]){t.stopImmediatePropagation();if(this.chapterInfo.children.length>0){var e=false;this.chapterInfo.children.forEach(function(i){if(i.guid===t.detail.guid){i.children=t.detail.children;e=true}});if(!e){this.chapterInfo.children.push(t.detail)}}else{this.chapterInfo.children.push(t.detail)}this.sendChapter.emit(this.chapterInfo);this.reportedToc=true}};t.prototype.render=function(){return i("psk-card",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},i("slot",null))};return t}());y([n(),s({description:"This property is the title, that will be used in order to create a psk-card ",isMandatory:false,propertyType:"string"})],m.prototype,"title",void 0);y([d({eventName:"psk-send-chapter",description:["This event is emitted the moment a psk-chapter with a title is created.","This event contains the title of the chapter as well as all the titles of it's subchapters."]})],m.prototype,"sendChapter",void 0);var g=undefined&&undefined.__decorate||function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(t,e,i,r);else for(var c=t.length-1;c>=0;c--)if(s=t[c])n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n;return o>3&&n&&Object.defineProperty(e,i,n),n};var v=t("psk_copy_clipboard",function(){function t(t){e(this,t);this.id="";this.chapterToken="";this.getHistoryType=r(this,"getHistoryType",7)}t.prototype.componentWillLoad=function(){var t=this;this.getHistoryType.emit(function(e,i){if(e){console.log(e);return}switch(i){case"browser":case"hash":t.chapterToken="?chapter=";break;case"query":t.chapterToken="&chapter=";break}})};t.prototype._copyToClipboardHandler=function(t){try{var e=window.location.href;if(window.location.href.indexOf(this.chapterToken)!==-1){e=window.location.href.split(this.chapterToken)[0]}navigator.clipboard.writeText(""+e+this.chapterToken+t);var i=this.element.querySelector(".copy-tooltip");i.innerHTML=c;i.setAttribute("class","copy-tooltip copied");p(t,h(this.element,"psk-page"))}catch(t){console.error(t)}};t.prototype._resetTooltip=function(){var t=this.element.querySelector(".copy-tooltip");t.innerHTML=a;t.setAttribute("class","copy-tooltip")};t.prototype._isCopySupported=function(){var t=!!document.queryCommandSupported;["copy","cut"].forEach(function(e){t=t&&!!document.queryCommandSupported(e)});return t};t.prototype.render=function(){var t=this;var e=this.id.trim().replace(/( |:|\/|\.)/g,"-").toLowerCase();if(e.length===0||!this._isCopySupported()){return}return i("div",{class:"tooltip_container",onClick:function(i){i.stopImmediatePropagation();t._copyToClipboardHandler(e)},onMouseOut:function(){t._resetTooltip()}},i("a",{class:"mark",href:"#"+e,onClick:function(t){t.preventDefault()}},i("slot",null)),i("span",{class:"copy-tooltip"},a))};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});return t}());g([n(),d({eventName:"getHistoryType",controllerInteraction:{required:true},description:"This event gets the history type in order to see what identificator to use for the selected chapter Token.\n                  The three types of token that can be returned are : browser, hash or query."})],v.prototype,"getHistoryType",void 0);g([s({description:"This property is the id of the textzone that will be copied to the clipboard.\n                  It is necessary (but not mandatory) so the URL can be copied in a simplified fashion.\n                  Special characters(Example : ':','/') will be replaced with dash('-').",isMandatory:false,propertyType:"string"})],v.prototype,"id",void 0)}}});