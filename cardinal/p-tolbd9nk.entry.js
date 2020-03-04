import{r as t,c as e,h as s}from"./p-9835b40a.js";import{T as i}from"./p-539bc613.js";import"./p-3ebe5698.js";import{C as o}from"./p-ec895615.js";import{T as r}from"./p-5dce8e9b.js";var a=function(t,e,s,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(r<3?o(a):r>3?o(e,s,a):o(e,s))||a);return r>3&&a&&Object.defineProperty(e,s,a),a};const n=class{constructor(s){t(this,s),this.timeMeasure="Right now",this.toast=null,this.closeFeedback=e(this,"closeFeedback",7)}render(){return this.toast=s("div",{class:"toast fade out show",style:this.styleCustomisation.toast&&this.styleCustomisation.toast.feedback&&this.styleCustomisation.toast.feedback.style?this.styleCustomisation.toast.feedback.style:{}},s("div",{class:"toast-header",style:this.styleCustomisation.toast&&this.styleCustomisation.toast.header&&this.styleCustomisation.toast.header.style?this.styleCustomisation.toast.header.style:{}},s("strong",{class:"mr-auto"},this.message.name),"Right now"!==this.timeMeasure?s("small",null,this.timeSinceCreation," ",this.timeMeasure," "):s("small",null,this.timeMeasure," "),s("button",{class:"ml-2 mb-1 close",title:"Close",onClick:()=>{this.closeFeedback.emit(this.message)}},s("span",null,"×"))),s("div",{class:"toast-body",style:this.styleCustomisation.toast&&this.styleCustomisation.toast.body&&this.styleCustomisation.toast.body.style?this.styleCustomisation.toast.body.style:{}},this.message.content))}};a([o(),i({description:"This property is the message that will be rendered on the toast",isMandatory:!1,propertyType:"any"})],n.prototype,"message",void 0),a([i({description:"The time in milliseconds when the toast was created",isMandatory:!0,propertyType:"number"})],n.prototype,"timeSinceCreation",void 0),a([i({description:"The time measure that will be renderer together with timeSinceCreation in order to get the live timer working properly",isMandatory:!0,propertyType:"string",defaultValue:"Right now"})],n.prototype,"timeMeasure",void 0),a([i({description:"The style customisation for the toast so it looks according to your application",isMandatory:!1,propertyType:"StyleCustomisation"})],n.prototype,"styleCustomisation",void 0),a([r({eventName:"closeFeedback",description:"When the X button is pressed this event is emitted in order to get rid of that specific feedback"})],n.prototype,"closeFeedback",void 0);export{n as psk_ui_toast};