import{r as t,h as e,g as r}from"./p-bd5842d7.js";import{T as o}from"./p-4012dae5.js";import"./p-29f685bd.js";import{C as s}from"./p-853e84b9.js";var l=function(t,e,r,o){var s,l=arguments.length,i=l<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(i=(l<3?s(i):l>3?s(e,r,i):s(e,r))||i);return l>3&&i&&Object.defineProperty(e,r,i),i};const i=class{constructor(e){t(this,e),this.promisifyControllerLoad=t=>new Promise((e,r)=>{s.getController(t).then(t=>{this.controller=new t(this._host),this.__getInnerController.call(this,this._host),e()}).catch(r)})}render(){return[e("slot",null),this.htmlFilePath&&e("psk-page-loader",{pageUrl:this.htmlFilePath}),this.controller&&this.controllerScript&&this.controller.executeScript(this.controller,this.controllerScript)]}componentWillLoad(){return this.promisifyControllerLoad("string"==typeof this.controllerName&&this.controllerName.length>0?this.controllerName:"base-controllers/BindableController")}__getInnerController(t){let e=t.querySelector("script");null!==e&&(this.controllerScript=e.innerHTML,e.innerHTML="")}get _host(){return r(this)}};l([o({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],i.prototype,"controllerName",void 0),l([o({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],i.prototype,"htmlFilePath",void 0);export{i as psk_container};