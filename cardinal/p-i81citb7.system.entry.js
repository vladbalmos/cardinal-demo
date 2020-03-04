System.register(["./p-51da6f80.system.js","./p-ebebd7ad.system.js","./p-9ee366d8.system.js","./p-77f35bd6.system.js","./p-d6924f85.system.js"],(function(e){"use strict";var t,i,o,n,r;return{setters:[function(e){t=e.r;i=e.h},function(e){o=e.T},function(){},function(e){n=e.C},function(e){r=e.B}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)if(a=e[s])r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r;return n>3&&r&&Object.defineProperty(t,i,r),r};var s=["Bytes","KB","MB","GB","TB"];var l=e("psk_attachments_list",function(){function e(e){t(this,e);this.files=[];this.removeFileFromList=null}e.bytesToSize=function(e){if(e==0)return"0 Byte";var t=parseInt(String(Math.floor(Math.log(e)/Math.log(1024))));return Math.round(e/Math.pow(1024,t))+" "+s[t]};e.prototype.render=function(){var e=this;if(!this.files||this.files.length===0){return i("h5",null,"No attachments available!")}var t=this.files.map((function(t,o){var n=null;switch(t.name.substr(t.name.lastIndexOf(".")+1)){case"pdf":n="fa-file-pdf-o";break;case"xls":n="fa-file-excel-o";break;case"doc":case"docx":n="fa-file-word-o";break;case"jpg":case"png":n="fa-file-picture-o";break;default:n="fa-file-o"}return i("button",{type:"button",class:"btn btn-primary mr-2 mt-2"},i("span",{class:"icon mr-1 fa "+n}),t.name,i("span",{class:"badge badge-light ml-1"},l.bytesToSize(t.size)),e.removeFileFromList!==null&&i("span",{class:"fa fa-remove fa-2x pull-right",onClick:function(t){t.preventDefault();t.stopImmediatePropagation();e.removeFileFromList(o)}}))}));return t};return e}());a([n(),r(),o({description:"This parameter holds the files that can be downloaded. They can be downloaded one by one by clicking on the desired file, or all at the same time.",specialNote:"WgFile is a custom type. Inside it, the following information can be stored:\n\t\t\tname of the file,\n\t\t\tsize of the file,\n\t\t\ttype of the file (by extension),\n\t\t\t? content of the file",isMandatory:true,propertyType:"array of WgFile items (WgFile[])"})],l.prototype,"files",void 0);a([o({description:"If this property is given to the component, then a red X will be displayed on the right of each file card giving the possibility to remove the file (this functionality should be implemented by the programmer providing him the possibility to have custom behavior before the deletion of the file).",specialNote:"The function will receive one parameter, the index of the file in the WgFile array.",isMandatory:false,propertyType:"Function",defaultValue:"null"})],l.prototype,"removeFileFromList",void 0)}}}));