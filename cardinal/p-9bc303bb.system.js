System.register(["./p-226ad382.system.js","./p-8cc80ac0.system.js","./p-76ae633a.system.js"],function(n){"use strict";var e,t,i,o,r,s;return{setters:[function(n){e=n.g},function(n){t=n.D;i=n.a;o=n.b;r=n.c},function(n){s=n.c}],execute:function(){n("T",c);function c(n){return function(c,a){var l=c.connectedCallback,u=c.componentWillLoad,f=c.componentDidLoad,v=c.render;var p="psk-send-events";var m=o;var d=t;var b="definedEvents";c.componentWillLoad=function(){var n=this;var o=e(n);if(!o.hasAttribute(t)&&!o.hasAttribute(i)){return u&&u.call(n)}};c.componentDidLoad=function(){var n=this;var o=e(n);if(!o.hasAttribute(t)&&!o.hasAttribute(i)){return f&&f.call(n)}};c.connectedCallback=function(){var t=this;var o=e(t);if(n.controllerInteraction){d=i;b="definedControllers";m=r;p="psk-send-controllers"}if(o.hasAttribute(d)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[b]=[Object.assign({},n,{eventName:String(a)})];return l&&l.call(t)}var s=t.componentDefinitions;var c=Object.assign({},n,{eventName:String(a)});if(s&&s.hasOwnProperty(m)){var u=s[m].slice();u.push(c);s[m]=u.slice()}else{s[m]=[c]}t.componentDefinitions=Object.assign({},s)}return l&&l.call(t)};c.render=function(){var n=this;if(!n.componentDefinitions||!(n.componentDefinitions&&n.componentDefinitions[m])){return v&&v.call(n)}var e=n.componentDefinitions[m];if(e){e=e.reverse()}s(p,{composed:true,bubbles:true,cancelable:true,detail:e},true)}}}}}});