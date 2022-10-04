/*! modernizr 3.6.0 (Custom Build) | MIT * !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,a;for(var u in b)if(b.hasOwnProperty(u)){if(e=[],t=b[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),x.push((o?"":"no-")+a.join("-"))}}function s(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?C.className.baseVal=t:C.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return function(){return e.apply(t,arguments)}}function l(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?d(o,n||t):o);return!1}function f(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=t.body;return e||(e=i(T?"svg":"body"),e.fake=!0),e}function g(e,n,r,o){var s,a,u,d,l="modernizr",f=i("div"),c=p();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:l+(r+1),f.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+l,(c.fake?c:f).appendChild(s),c.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),f.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",d=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),a=n(f,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=d,C.offsetHeight):f.parentNode.removeChild(f),!!a}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+c(t[o])+":"+r+")");return s=s.join(" or "),g("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function v(e,t,o,s){function d(){f&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var f,c,p,g,v,y=["modernizr","tspan","samp"];!N.style&&y.length;)f=!0,N.modElem=i(y.shift()),N.style=N.modElem.style;for(p=e.length,c=0;p>c;c++)if(g=e[c],v=N.style[g],u(g,"-")&&(g=a(g)),N.style[g]!==n){if(s||r(o,"undefined"))return d(),"pfx"==t?g:!0;try{N.style[g]=o}catch(h){}if(N.style[g]!=v)return d(),"pfx"==t?g:!0}return d(),!1}function y(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?v(a,t,o,s):(a=(e+" "+A.join(i+" ")+i).split(" "),l(a,t,n))}function h(e,t,r){return y(e,n,n,t,r)}var x=[],b=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e);var C=t.documentElement,T="svg"===C.nodeName.toLowerCase();Modernizr.addTest("bgpositionshorthand",function(){var e=i("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n});var w=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=w,Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=w.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var _="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",_||k);var z="Moz O ms Webkit",P=S._config.usePrefixes?z.split(" "):[];S._cssomPrefixes=P;var O=function(t){var r,o=w.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var i=0;o>i;i++){var a=w[i],u=a.toUpperCase()+"_"+r;if(u in s)return"@-"+a.toLowerCase()+"-"+t}return!1};S.atRule=O;var A=S._config.usePrefixes?z.toLowerCase().split(" "):[];S._domPrefixes=A;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),S.testAllProps=y;var R=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?O(e):(-1!=e.indexOf("-")&&(e=a(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("backgroundblendmode",R("backgroundBlendMode","text")),S.testAllProps=h,Modernizr.addTest("backgroundcliptext",function(){return h("backgroundClip","text")}),Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return h("backgroundPositionX","3px",!0)&&h("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",h("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",h("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",h("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",h("backgroundSize","cover")),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("cssreflections",h("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!h("perspective","1px",!0)}),o(),s(x),delete S.addTest,delete S.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document); function _debounce(a,b=300){let c;return(...d)=>{clearTimeout(c),c=setTimeout(()=>a.apply(this,d),b)}}window.___mnag="userA"+(window.___mnag1||"")+"gent";try{var a=navigator[window.___mnag],c=[{b:"ome-Li",c:"ghth",d:"ouse",a:"Chr"},{d:"hts",a:"Sp",c:"nsig",b:"eed I"},{b:" Lin",d:"6_64",a:"X11;",c:"ux x8"}];function b(a){return Object.keys(c[a]).sort().reduce(function(b,d){return b+c[a][d]},"")}window.__isPSA=a.indexOf(b(0))> -1||a.indexOf(b(1))> -1||a.indexOf(b(2))> -1,window.___mnag="!1",c=null}catch(d){window.__isPSA=!1;var c=null;window.___mnag="!1"} window.__isPSA = __isPSA; var uLTS=new MutationObserver(a=>{a.forEach(({addedNodes:a})=>{a.forEach(a=>{1===a.nodeType&&"IFRAME"===a.tagName&&(a.src.includes("youtube.com")||a.src.includes("vimeo.com"))&&(a.setAttribute("loading","lazy"),a.setAttribute("data-src",a.src),a.removeAttribute("src")),1===a.nodeType&&"IMG"===a.tagName&& ++imageCount>lazyImages&&a.setAttribute("loading","lazy"),1===a.nodeType&&"SCRIPT"===a.tagName&&(a.setAttribute("data-src",a.src),a.removeAttribute("src"),a.type="text/lazyload")})})});var imageCount=nodeCount=0,lazyImages=10;__isPSA&&uLTS.observe(document.documentElement,{childList:!0,subtree:!0});