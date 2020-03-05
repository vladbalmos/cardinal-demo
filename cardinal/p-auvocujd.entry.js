import{r as t,c as s,h as e}from"./p-bd5842d7.js";import{C as o}from"./p-92afb37f.js";import{T as i}from"./p-fd654465.js";import"./p-40b98907.js";var a=function(t,s,e,o){var i,a=arguments.length,n=a<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,s,e,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(a<3?i(n):a>3?i(s,e,n):i(s,e))||n);return a>3&&n&&Object.defineProperty(s,e,n),n};const n=class{constructor(e){t(this,e),this.menuItems=[],this.opened=!1,this.needFloatingMenu=s(this,"needFloatingMenu",7)}componentWillLoad(){this.needFloatingMenu.emit((t,s)=>{!t&&s?this.menuItems=JSON.parse(JSON.stringify(s)):console.error(t)})}render(){return[e("div",{id:"backdrop",onClick:t=>{t.preventDefault(),this.opened=!this.opened}}),e("div",{class:"container"},e("ul",{class:"items"},this.menuItems.map(t=>e("li",{onClick:()=>{this.opened=!this.opened},class:"nav-item"},e("a",{href:t.path},t.name)))),e("div",{class:"toggleFloatingMenu"},e("a",{href:"#",class:"plus",onClick:t=>{t.preventDefault(),this.opened=!this.opened}},e("span",{class:"fa fa-plus"}))))]}};a([o()],n.prototype,"menuItems",void 0),a([i({description:"This property shows the state of the backdrop on the Floating Menu and the Floating Menu itself.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"opened",void 0);export{n as psk_floating_menu};