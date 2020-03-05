import{r as e,h as t,g as s}from"./p-bd5842d7.js";import{C as o}from"./p-92afb37f.js";import{T as i}from"./p-fd654465.js";import"./p-40b98907.js";import{B as l}from"./p-63233ee2.js";import{P as r}from"./p-a38a4faf.js";var p=function(e,t,s,o){var i,l=arguments.length,r=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(r=(l<3?i(r):l>3?i(t,s,r):i(t,s))||r);return l>3&&r&&Object.defineProperty(t,s,r),r};const n=class{constructor(t){e(this,t),this.label="Select files"}addedFile(e){console.log(this);let t=Array.from(e.target.files);if(this.eventName){e.preventDefault(),e.stopImmediatePropagation();let s=new r(this.eventName,t,{bubbles:!0,composed:!0,cancelable:!0});this.htmlElement.dispatchEvent(s)}}render(){return[t("button",{type:"button",class:"btn btn-secondary p-0"},t("label",{class:"pt-0 mb-0 p-2"},this.label,t("input",{accept:this.accept,type:"file",onChange:this.addedFile.bind(this),multiple:!0,class:"form-control-file form-control-sm"}))),this.eventName?null:t("h5",{class:"mt-4"},"No controller set for this component!")]}get htmlElement(){return s(this)}};p([o(),l()],n.prototype,"htmlElement",void 0),p([i({description:"This is the lable of the button",isMandatory:!1,propertyType:"string",defaultValue:"Select files"})],n.prototype,"label",void 0),p([i({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:!1,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],n.prototype,"accept",void 0);export{n as psk_files_chooser};