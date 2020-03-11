import{r as t,c as s,h as e}from"./p-bd5842d7.js";import"./p-18c69f0f.js";import{T as i}from"./p-7aa21657.js";import{C as o}from"./p-92afb37f.js";import{C as r}from"./p-e678086e.js";var a=function(t,s,e,i){var o,r=arguments.length,a=r<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,s,e,i);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(a=(r<3?o(a):r>3?o(s,e,a):o(s,e))||a);return r>3&&a&&Object.defineProperty(s,e,a),a};const h=class{constructor(e){t(this,e),this._styleCustomisation={},this.typeOfAlert=r.ALERT_SUCCESS,this.timeAlive=3e3,this.styleCustomisation={},this.isVisible=!0,this.alert=null,this.closeFeedback=s(this,"closeFeedback",7)}styleCustomisationWatcher(t){this._styleCustomisation="string"==typeof t?JSON.parse(t):t}closeUIFeedback(){this.isVisible=!1,setTimeout(()=>{this.closeFeedback.emit(this.message)},1e3)}componentWillLoad(){this.styleCustomisationWatcher(this.styleCustomisation)}render(){return this.alert=e("div",{class:`alert ${this.typeOfAlert} alert-dismissible fade ${this.isVisible?"show":"hide"}`,style:this._styleCustomisation.alert&&this._styleCustomisation.alert.style?this._styleCustomisation.alert.style:{},onClick:()=>{this.closeUIFeedback()}},e("slot",null),e("div",{class:"toast-body"},this.message.content)),setTimeout(()=>{this.closeUIFeedback()},this.timeAlive),this.alert}static get watchers(){return{styleCustomisation:["styleCustomisationWatcher"]}}};a([o(),i({description:"This property is a string that indicates the type of alert that you want so send back to the user",isMandatory:!1,propertyType:"string",defaultValue:"alert-success"})],h.prototype,"typeOfAlert",void 0),a([i({description:"This property is the message that will be rendered on the alert",isMandatory:!1,propertyType:"any"})],h.prototype,"message",void 0),a([i({description:"This property is the time in milliseconds t",isMandatory:!1,propertyType:"any"})],h.prototype,"timeAlive",void 0),a([i({description:"The style customisation for the alert so it looks according to your application",isMandatory:!1,propertyType:"StyleCustomisation"})],h.prototype,"styleCustomisation",void 0);export{h as psk_ui_alert};