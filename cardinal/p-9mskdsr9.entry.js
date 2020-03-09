import{r as e,h as t,g as o}from"./p-bd5842d7.js";import{C as n}from"./p-92afb37f.js";import{T as s}from"./p-4012dae5.js";import"./p-29f685bd.js";import{C as r}from"./p-853e84b9.js";var i=function(e,t,o,n){var s,r=arguments.length,i=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const a=class{constructor(t){e(this,t),this.formActions=""}componentWillLoad(){if("string"==typeof this.controllerName)return new Promise((e,t)=>{r.getController(this.controllerName).then(t=>{this.controller=new t(this._host),e()}).catch(t)})}render(){return t("div",{class:"container"},t("form",null,t("slot",null),this._createFormActions(this.formActions)))}_createFormActions(e){if(0===e.trim().length)return null;let o=[];return o=e.split(",").map(e=>t("psk-button",{"button-class":e,"event-name":e,label:e})),t("div",{id:"actions",class:"container-fluid"},o)}get _host(){return o(this)}};i([n()],a.prototype,"controller",void 0),i([s({description:["This attributes is setting the controller of the form. The default value for this attribute is FormController, a default controller for handling form submitions created inside Cardinal.Js.",'Information about creating a controller can be found inside the documentation: <psk-link page="Cardinal/controllers">Controllers Documentation</psk-link>',"All the "],isMandatory:!1,propertyType:"string",defaultValue:"FormController",specialNote:"If the controller name is not provided, then the default FormController is assumed."})],a.prototype,"controllerName",void 0),i([s({description:['By defining this attribute, the user is able to control the behaviour of the form, so by definition, this attribute holds the possible actions inside the form, the defined actions should be sepparated by comma(",").',"Also, as a recommendation, the values should be provided using lowercases, and if there are more words inside an action, to be written using dash symbol(-)","Example of form actions: submit, reset-form, validate-form, cancel",'Using all these actions, the component will generate a <psk-link page="web-components/psk-button">psk-button</psk-link>.','If this attribute is not defined, you can also add <psk-link page="web-components/psk-button">psk-button</psk-link> components anywhere in the form. The rule is the same, the event-name attribute assigned to the psk-button component needs to be registered in the form\'s controller.'],isMandatory:!1,propertyType:"string values sepparated by comma (,)",defaultValue:"null",specialNote:["If this attribute has no value, then the form will have no actions."]})],a.prototype,"formActions",void 0);export{a as psk_form};