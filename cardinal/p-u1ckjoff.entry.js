import{r as t,h as e,g as i}from"./p-bd5842d7.js";import{C as n}from"./p-92afb37f.js";import{P as r,L as s,T as o}from"./p-99c53673.js";import"./p-5a953e20.js";const l=class{constructor(e){t(this,e)}render(){let t="";if(!this.getInnerContent)return null;const i=this.getInnerContent("innerHTML").split(/\n/g).filter(t=>t.trim().length>0);if(0===i.length)return null;let n=[],o=null,l="";const u=i[0].trimLeft(),f=i[0].length-u.length;for(let t=0;t<i.length;t++){let e=i[t];const s=e.trimLeft();if(f!==e.length-s.length){l+=`${e}\n`;continue}if("<"!==(e=e.substring(f)).split("")[0]){""!==l&&n.push(`${l}</li>`),l=`<li>${e}`;continue}if(""!==l&&(n.push(`${l}</li>`),l=""),null!==r.inlineTag.exec(e)){n.push(`<li>${e}</li>`);continue}const u=r.startTag.exec(e);if(null!==u&&!o){o=u[1],l=`<li>${e}`;continue}const c=r.endTag.exec(e);null===c||o!==c[1]||(n.push(`${l}${e}</li>`),o=null,l="")}return""!==l&&n.push(l),this.element.innerHTML="",e(this.listType===s?"ol":"ul",{innerHTML:n.join("\n")})}get element(){return i(this)}};!function(t,e,i,n){var r,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);s>3&&o&&Object.defineProperty(e,i,o)}([n(),o({description:['This property gives the type of the list. It has two type of values, "ordered" or "unordered"','If this property is missing, "unordered is assumed"'],isMandatory:!1,propertyType:"string",defaultValue:"unordered"})],l.prototype,"listType",void 0);export{l as psk_list};