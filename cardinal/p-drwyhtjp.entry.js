import{r as t,h as e,g as o}from"./p-bd5842d7.js";import{C as s}from"./p-92afb37f.js";import{T as r}from"./p-c4fa3d55.js";import{C as i}from"./p-853e84b9.js";var n=function(t,e,o,s){var r,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};const a=class{constructor(e){t(this,e),this.formActions="submit"}componentWillLoad(){if("string"==typeof this.controllerName)return new Promise((t,e)=>{i.getController(this.controllerName).then(e=>{this.controller=new e(this._host),t()}).catch(e)})}render(){return e("div",{class:"container"},e("form",null,e("slot",null),this._createFormActions(this.formActions)))}_createFormActions(t){if(0===t.trim().length)return null;let o=[];return o=t.split(",").map(t=>e("psk-button",{"button-class":t,"event-name":t,label:t})),e("div",{id:"actions",class:"container-fluid"},o)}get _host(){return o(this)}};n([s()],a.prototype,"controller",void 0),n([r({description:["This attributes is setting the controller of the form. The default value for this attribute is FormController, a default controller for handling form submitions created inside Cardinal.Js.",'Information about creating a controller can be found inside the documentation: <psk-link page="Cardinal/controllers">Controllers Documentation</psk-link>',"All the "],isMandatory:!1,propertyType:"string",defaultValue:"FormController",specialNote:"If the controller name is not provided, then the default FormController is assumed."})],a.prototype,"controllerName",void 0),n([r({description:['By defining this attribute, the user is able to control the behaviour of the form, so by definition, this attribute holds the possible actions inside the form, the defined actions should be sepparated by comma(",").',"Also, as a recommendation, the values should be provided using lowercases, and if there are more words inside an action, to be written using dash symbol(-)","Example of form actions: submit, reset-form, validate-form, cancel",'Using all these actions, the component will generate a <psk-link page="web-components/psk-button">psk-button</psk-link>.'],isMandatory:!1,propertyType:"string values sepparated by comma (,)",defaultValue:"submit",specialNote:"If this attribute has no value, then the submit form action is assumed as default value."})],a.prototype,"formActions",void 0);export{a as psk_form};