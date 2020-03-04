System.register(["./p-51da6f80.system.js","./p-ebebd7ad.system.js","./p-9ee366d8.system.js","./p-77f35bd6.system.js","./p-d6924f85.system.js"],(function(e){"use strict";var t,n,i,o,a;return{setters:[function(e){t=e.r;n=e.h},function(e){i=e.T},function(){},function(e){o=e.C},function(e){a=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,n,i){var o=arguments.length,a=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)if(s=e[r])a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a;return o>3&&a&&Object.defineProperty(t,n,a),a};var r=e("psk_number_input",function(){function e(e){var n=this;t(this,e);this.__inputHandler=function(e){e.stopImmediatePropagation();var t=e.target.value;if(n["changeModel"]){n["changeModel"].call(n,"value",t)}else{console.warn("[psk-number-input] Function named -=changeModel=- is not defined!")}};this.label=null;this.value=null;this.name=null;this.placeholder=null;this.required=false;this.readOnly=false;this.invalidValue=null}e.prototype.render=function(){return n("psk-input",{type:"number",label:this.label,name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})};return e}());s([o(),a()],r.prototype,"render",null);s([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],r.prototype,"label",void 0);s([i({description:["Specifies the value of an psk-number-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],r.prototype,"value",void 0);s([i({description:["Specifies the name of a psk-number-input component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],r.prototype,"name",void 0);s([i({description:["Specifies a short hint that describes the expected value of an psk-number-input component"],isMandatory:false,propertyType:"string"})],r.prototype,"placeholder",void 0);s([i({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],r.prototype,"required",void 0);s([i({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],r.prototype,"readOnly",void 0);s([i({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],r.prototype,"invalidValue",void 0)}}}));