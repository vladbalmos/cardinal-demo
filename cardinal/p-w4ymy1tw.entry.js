import{r as t,h as e,g as i}from"./p-9835b40a.js";import{T as s}from"./p-539bc613.js";import"./p-3ebe5698.js";import{C as o}from"./p-ec895615.js";import{P as n}from"./p-8b6bfe23.js";var a=function(t,e,i,s){var o,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const r=[document,window],l=class{constructor(e){t(this,e),this.buttonClass="btn btn-primary",this.disabled=!1}render(){return e("button",{onClick:t=>{if(this.eventName){t.preventDefault(),t.stopImmediatePropagation();let e=new n(this.eventName,this.eventData,{bubbles:!0,composed:!0,cancelable:!0}),i=this.htmlElement;this.eventDispatcher&&-1!==r.indexOf(window[this.eventDispatcher])&&(i=window[this.eventDispatcher]),i.dispatchEvent(e)}},class:this.buttonClass,disabled:this.disabled},this.label&&this.label,e("slot",null))}get htmlElement(){return i(this)}};a([o()],l.prototype,"htmlElement",void 0),a([s({description:["This is the label that will be displayed for the button. If it is not set, the label will not be displayed.","Also, the component has a slot which can be used to set the label for the component."],isMandatory:!1,propertyType:"string"})],l.prototype,"label",void 0),a([s({description:["This attribute is used to provide a set of CSS classes, defined inside psk-button.css, that will be used as design for this component."],isMandatory:!1,propertyType:"string",defaultValue:"btn btn-primary"})],l.prototype,"buttonClass",void 0),a([s({description:["By defining this attribute, the component will be able to trigger an event. The name of the event is the value of the attribute."],isMandatory:!1,propertyType:"string"})],l.prototype,"eventName",void 0),a([s({description:["This attribute is used to pass some information along with an event.","This attribute is taken into consideration only if the eventName has a value. If not, it is ignored."],isMandatory:!1,propertyType:"any"})],l.prototype,"eventData",void 0),a([s({description:["By defining this attribute, you tell the component if it is disabled or not.",'Possible values: "true", "false".'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],l.prototype,"disabled",void 0),a([s({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the eventDispatcher will be the component itself."],isMandatory:!1,propertyType:"string"})],l.prototype,"eventDispatcher",void 0);export{l as psk_button};