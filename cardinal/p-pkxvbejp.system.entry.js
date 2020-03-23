System.register(["./p-3369a689.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-609d210d.system.js","./p-5514a11c.system.js"],(function(e){"use strict";var t,i,s,n,r;return{setters:[function(e){t=e.r;i=e.h;s=e.g},function(){},function(){},function(e){n=e.T},function(e){r=e.C}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,i,s){var n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)if(o=e[a])r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r;return n>3&&r&&Object.defineProperty(t,i,r),r};var a=e("psk_slideshow",function(){function e(e){t(this,e);this.fadeSeconds=1;this.visibleSeconds=10}e.prototype.componentWillLoad=function(){if(this.images){this.marginTop=this.element.getBoundingClientRect().y;this.checkLayout();this.imagesSrcs=this.images.split(",");this.getAnimationCSS()}else{console.log("No images provided")}};e.prototype.checkLayout=function(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop};e.prototype.renderSlide=function(e,t){var s=i("li",{id:"slide-"+t,class:"animation-"+t,style:{backgroundImage:"url("+e+")"}});return s};e.prototype.getAnimationCSS=function(){var e=this.fadeSeconds+this.visibleSeconds;var t=100/(e*this.imagesSrcs.length);var i="@keyframes fade {\n    0% { opacity: 0; }\n    "+t*this.fadeSeconds+"% { opacity: 1; }\n    "+t*e+"% { opacity: 1; }\n    "+t*(e+this.fadeSeconds)+"% { opacity: 0; }\n    100% { opacity: 0; }\n  }";for(var s=0;s<this.imagesSrcs.length;s++){i+="#psk-slider li:nth-child("+s+") {\n        animation-delay: "+e*s+"s;\n        }"}i+="#psk-slider li{animation-duration: "+e*this.imagesSrcs.length+"s;}";var n=document.createElement("style");n.innerHTML=i;this.element.shadowRoot.prepend(n)};e.prototype.render=function(){var e=this;var t=[];this.imagesSrcs.forEach((function(i,s){t.push(e.renderSlide(i,s))}));var s=this.title?i("div",{class:"title"},this.title):null;var n=this.caption?i("div",{class:"caption"},this.caption):null;var r=this.element.children.length>0?i("div",{class:"actions"},i("slot",null)):null;var o=null;if(s||n||r){o=i("div",{class:"container"},i("div",{class:"content"},[s,n,r]))}return i("div",{class:"psk-slideshow"},i("div",{class:"psk-slideshow-container"},o,i("div",{id:"psk-content-slider"},i("div",{id:"psk-slider"},i("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},i("ul",null,t))))))};Object.defineProperty(e.prototype,"element",{get:function(){return s(this)},enumerable:true,configurable:true});return e}());o([r(),n({description:["This property is the images sources separed by ','.","Using this property a new array will be created by spliting this string by ','."],isMandatory:true,propertyType:"string"})],a.prototype,"images",void 0);o([n({description:["This property is the title of the slideshow that will be rendered.","If this property is given than a new div container will be created with the title as the class and the HTML child."],isMandatory:false,propertyType:"string",defaultValue:"null"})],a.prototype,"title",void 0);o([n({description:["This property is the caption of the slideshow that will be rendered.","If this property is given than a new div container will be created with the caption as the class and the HTML child."],isMandatory:false,propertyType:"string",defaultValue:"null"})],a.prototype,"caption",void 0)}}}));