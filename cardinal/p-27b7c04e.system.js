var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};System.register(["./p-51da6f80.system.js","./p-ebebd7ad.system.js","./p-9ee366d8.system.js"],(function(n){"use strict";var e,t,r,i,s,o;return{setters:[function(n){e=n.g},function(n){t=n.D;r=n.a;i=n.b;s=n.c},function(n){o=n.c}],execute:function(){n("T",a);function a(n){return function(a,c){var f=a.connectedCallback,u=a.componentWillLoad,l=a.componentDidLoad,d=a.render;var v="psk-send-events";var p=i;var m=t;var b="definedEvents";a.componentWillLoad=function(){var n=this;var i=e(n);if(!i.hasAttribute(t)&&!i.hasAttribute(r)){return u&&u.call(n)}};a.componentDidLoad=function(){var n=this;var i=e(n);if(!i.hasAttribute(t)&&!i.hasAttribute(r)){return l&&l.call(n)}};a.connectedCallback=function(){var t=this;var i=e(t);if(n.controllerInteraction){m=r;b="definedControllers";p=s;v="psk-send-controllers"}if(i.hasAttribute(m)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[b]=[Object.assign(Object.assign({},n),{eventName:String(c)})];return f&&f.call(t)}var o=t.componentDefinitions;var a=Object.assign(Object.assign({},n),{eventName:String(c)});if(o&&o.hasOwnProperty(p)){var u=__spreadArrays(o[p]);u.push(a);o[p]=__spreadArrays(u)}else{o[p]=[a]}t.componentDefinitions=Object.assign({},o)}return f&&f.call(t)};a.render=function(){var n=this;if(!n.componentDefinitions||!(n.componentDefinitions&&n.componentDefinitions[p])){return d&&d.call(n)}var e=n.componentDefinitions[p];if(e){e=e.reverse()}o(v,{composed:true,bubbles:true,cancelable:true,detail:e},true)}}}}}}));