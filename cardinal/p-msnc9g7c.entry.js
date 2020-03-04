import{r as t,h as e,g as o}from"./p-bd5842d7.js";import{T as i}from"./p-fd654465.js";import"./p-40b98907.js";import{B as s}from"./p-63233ee2.js";var r=function(t,e,o,i){var s,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var h=t.length-1;h>=0;h--)(s=t[h])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};const n=class{constructor(e){t(this,e),this.modelChanged=!1,this.ignoredNodeNames=["link","slot","#text","#comment","text","comment"],this.templateNodes=[],this.dataViewModel=null}componentWillLoad(){let t=Array.from(this.__host.childNodes).filter(t=>-1===this.ignoredNodeNames.indexOf(t.nodeName.toLowerCase())),e=t.filter(t=>!t.hasAttribute("slot")),o=t.find(t=>t.hasAttribute("slot")&&"no-data"===t.getAttribute("slot"));o&&(o.removeAttribute("slot"),this.emptyNode=o.cloneNode(!0)),this.__host.innerHTML="",e?e.forEach(t=>{this.templateNodes.push(t.cloneNode(!0))}):console.error("No template found!")}componentDidLoad(){this.rootModel&&this.rootModel.onChange(this.parentChain,()=>{this.modelChanged=!this.modelChanged})}render(){if(!this.rootModel||!this.parentChain)return null;if(!this.templateNodes)return null;let t=this.rootModel.getChainValue(this.parentChain),o=[];for(let i=0;i<t.length;i++){let t=this.parentChain?`${this.parentChain}.${i}.`:`${i}.`,s=[];this.templateNodes.forEach(o=>{let i=o.cloneNode(!0),r=this.prepareItem(t,i);s.push(e("div",{innerHTML:r.outerHTML}))}),o.push(s)}return 0===o.length&&this.emptyNode?e("div",{innerHTML:this.emptyNode.outerHTML}):o}__processNode(t,e){let o=Array.from(t.attributes).filter(t=>t.name.startsWith("view-model-"));o.forEach(o=>{const i=o.name.split("view-model-")[1];t.setAttribute(i,this.rootModel.getChainValue(e?`${e}${o.value}`:o.value))}),(o=Array.from(t.attributes).filter(t=>t.value.startsWith("@"))).forEach(o=>{const i=o.value.split("@")[1];t.setAttribute(o.name,this.rootModel.getChainValue(e?`${e}${i}`:i))}),Array.from(t.children).forEach(t=>{this.__processNode.call(this,t,e)})}prepareItem(t,e){let o=e.querySelectorAll("[view-model]");return this.__processNode.call(this,e,t),o.forEach(e=>{const o=`${t}${e.getAttribute("view-model")}`;e.setAttribute("view-model",o)}),e}get __host(){return o(this)}};r([s()],n.prototype,"__host",void 0),r([i({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:!0,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],n.prototype,"dataViewModel",void 0);export{n as psk_for_each};