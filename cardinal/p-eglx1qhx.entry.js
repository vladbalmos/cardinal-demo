import{r as e,h as t,g as n}from"./p-bd5842d7.js";import{C as a}from"./p-92afb37f.js";import{T as r}from"./p-c4fa3d55.js";var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i,s=a.util.type(t);switch(n=n||{},s){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in n[i]=r={},t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(n[i]=r=[],t.forEach(function(t,a){r[a]=e(t,n)}),r);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var c=r[e];return r[e]=s,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=s)}),s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],c=a.util.type(l);"Object"!==c||i[s(l)]?"Array"!==c||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var i,s=e.querySelectorAll(r.selector),o=0;i=s[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){for(var s,o="none",l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(t)||[,"none"])[1].toLowerCase(),s=a.languages[o]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o,n.parentNode&&/pre/i.test((l=n.parentNode).nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:s,code:n.textContent},d=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(a.highlight(c.code,c.grammar,c.language));else d(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,i,s,o,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var d=n[c];d="Array"===a.util.type(d)?d:[d];for(var u=0;u<d.length;++u){var p=d[u],f=p.inside,m=!!p.lookbehind,h=!!p.greedy,g=0,b=p.alias;if(h&&!p.pattern.global){var S=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,S+"g")}p=p.pattern||p;for(var A=i,E=s;A<t.length;E+=t[A].length,++A){var v=t[A];if(t.length>e.length)return;if(!(v instanceof r)){if(h&&A!=t.length-1){if(p.lastIndex=E,!(T=p.exec(e)))break;for(var w=T.index+(m?T[1].length:0),y=T.index+T[0].length,_=A,F=E,k=t.length;_<k&&(F<y||!t[_].type&&!t[_-1].greedy);++_)w>=(F+=t[_].length)&&(++A,E=F);if(t[A]instanceof r)continue;O=_-A,v=e.slice(E,F),T.index-=E}else{p.lastIndex=0;var T=p.exec(v),O=1}if(T){m&&(g=T[1]?T[1].length:0),y=(w=T.index+g)+(T=T[0].slice(g)).length;var I=v.slice(0,w),R=v.slice(y),D=[A,O];I&&(++A,E+=I.length,D.push(I));var N=new r(c,f?a.tokenize(T,f):T,b,T,h);if(D.push(N),R&&D.push(R),Array.prototype.splice.apply(t,D),1!=O&&a.matchGrammar(e,t,n,A,E,!0,c),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}if(e.Prism=a,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return r.stringify(e,t)}).join("");var n={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,i)}a.hooks.run("wrap",n);var s=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),r=n.language,i=n.immediateClose;e.postMessage(a.highlight(n.code,a.languages[r],r)),i&&e.close()},!1),a):a;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==s&&(s.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},t.languages.insertBefore("markup","cdata",i)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,r=e.getAttribute("data-src"),i=e,s=/\blang(?:uage)?-([\w-]+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(a=(e.className.match(s)||[,""])[1]),!a){var o=(r.match(/\.(\w+)$/)||[,""])[1];a=n[o]||o}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,t.highlightElement(l),e.setAttribute("data-src-loaded","")):l.textContent=c.status>=400?"✖ Error "+c.status+" while fetching file: "+c.statusText:"✖ Error: File does not exist or is empty")},c.send(null)}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}(i={exports:{}}),i.exports);Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:!0,inside:n}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=n.variable[1].inside,i=0;i<a.length;i++)r[a[i]]=e.languages.bash[a[i]];e.languages.shell=e.languages.bash}(Prism),Prism.languages["shell-session"]={command:{pattern:/\$(?:[^\r\n'"<]|(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1|((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*(?:\r\n?|\n)(?:[\s\S])*?(?:\r\n?|\n)\3)+/,inside:{bash:{pattern:/(\$\s*)[\s\S]+/,lookbehind:!0,alias:"language-bash",inside:Prism.languages.bash},sh:{pattern:/^\$/,alias:"important"}}},output:{pattern:/.(?:.*(?:\r\n?|\n|.$))*/}};var l=function(e,t,n,a){var r,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};const c=/<!---->/gm,d=class{constructor(t){e(this,t),this.title="",this.language="xml",this.componentCode=""}componentWillLoad(){switch(this.language){case"javascript":case"css":case"json":case"shell-session":this.componentCode=this.host.innerText;break;default:this.componentCode=this.host.innerHTML}let e=this.host.querySelector("link");e?(this.host.innerHTML=e.outerHTML,this.componentCode=this.componentCode.replace(e.outerHTML,"")):this.host.innerHTML=""}componentDidLoad(){o.highlightAllUnder(this.host)}render(){let e=document.createElement("textarea");e.innerHTML=this.componentCode;let n=e.value,a=(n=(n=n.replace(c,"")).trim()).split("\n"),r=[];if(a.length){let e=a[a.length-1].trimLeft(),t=a[a.length-1].length-e.length;for(let e=0;e<a.length;e++){let n=a[e],i=t,s=n.trimLeft();n.length-s.length<t&&(i=n.length-s.length),n=n.substring(i),r.push(n)}}let i=r.join("\n");const s=t("pre",null,t("code",{class:`language-${this.language}`},i));return""===this.title.replace(/\s/g,"")?t("div",null,s):t("psk-chapter",{title:this.title},s)}get host(){return n(this)}};l([a(),r({description:"This property is the title of the psk-chapter that will be created.",isMandatory:!1,propertyType:"string"})],d.prototype,"title",void 0),l([r({description:"This property is the language, in which the code is written(so the css can identify it).",isMandatory:!1,propertyType:"string"})],d.prototype,"language",void 0);export{d as psk_code};