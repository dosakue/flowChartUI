!function(n){function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";var r=e(1);(0,r.app)({state:"Hi.4909",view:function(n){return(0,r.h)("h1",null,n)}})},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(2);e.d(t,"h",function(){return r.a});var a=e(3);e.d(t,"app",function(){return a.a})},function(n,t,e){"use strict";function r(n,t){for(var e,r=[],a=[],o=arguments.length;o-- >2;)r[r.length]=arguments[o];for(;r.length;)if(Array.isArray(e=r.pop()))for(var o=e.length;o--;)r[r.length]=e[o];else null!=e&&!0!==e&&!1!==e&&("number"==typeof e&&(e+=""),a[a.length]=e);return"string"==typeof n?{tag:n,data:t||{},children:a}:n(t,a)}t.a=r},function(n,t,e){"use strict";function r(n){function t(){x||requestAnimationFrame(r,x=!x)}function e(n,t){return null==n?n:{tag:n.tagName,data:{},children:t.call(n.childNodes,function(n){e(n,t)})}}function r(){p=s(w,p,v,v=o("render",b)(h,g)),x=!x,j||o("loaded",j=!0)}function a(n,e,r){Object.keys(e||[]).map(function(i){var l=e[i],c=r?r+"."+i:i;"function"==typeof l?n[i]=function(n){var e=l(h,g,o("action",{name:c,data:n}).data);return null!=e&&null==e.then&&t(h=u(h,o("update",e))),e}:a(n[i]||(n[i]={}),l,c)})}function o(n,t){return(m[n]||[]).map(function(n){var e=n(h,g,t);null!=e&&(t=e)}),t}function u(n,t){if("object"!=typeof t)return t;var e={};for(var r in n)e[r]=n[r];for(var r in t)e[r]=t[r];return e}function i(n){if(n&&(n=n.data))return n.key}function l(n,t){if("string"==typeof n)var e=document.createTextNode(n);else{for(var e=(t=t||"svg"===n.tag)?document.createElementNS("http://www.w3.org/2000/svg",n.tag):document.createElement(n.tag),r=0;r<n.children.length;)e.appendChild(l(n.children[r++],t));for(var r in n.data)"oncreate"===r?n.data[r](e):"oninsert"===r?setTimeout(n.data[r],0,e):c(e,r,n.data[r])}return e}function c(n,t,e,r){if("key"===t||"oncreate"===t||"oninsert"===t||"onupdate"===t||"onremove"===t)return t;if("style"===t)for(var a in u(r,e=e||{}))n.style[a]=e[a]||"";else{try{n[t]=e}catch(n){}"function"!=typeof e&&(e?n.setAttribute(t,e):n.removeAttribute(t))}}function f(n,t,e,r){for(var a in u(t,e)){var o=e[a],i=t[a];o!==i&&o!==n[a]&&null==c(n,a,o,i)&&(r=e.onupdate)}null!=r&&r(n)}function d(n,t,e){e&&e.onremove?e.onremove(t):n.removeChild(t)}function s(n,t,e,r,a,o){if(null==e)t=n.insertBefore(l(r,a),t);else if(null!=r.tag&&r.tag===e.tag){f(t,e.data,r.data),a=a||"svg"===r.tag;for(var u=r.children.length,c=e.children.length,v={},p=[],h={},g=0;g<c;g++){var m=t.childNodes[g];p[g]=m;var y=e.children[g],b=i(y);null!=b&&(v[b]=[m,y])}for(var g=0,w=0;w<u;){var m=p[g],y=e.children[g],x=r.children[w],b=i(y);if(h[b])g++;else{var j=i(x),O=v[j]||[];null==j?(null==b&&(s(t,m,y,x,a),w++),g++):(b===j?(s(t,O[0],O[1],x,a),g++):O[0]?(t.insertBefore(O[0],m),s(t,O[0],O[1],x,a)):s(t,m,null,x,a),w++,h[j]=x)}}for(;g<c;){var y=e.children[g],b=i(y);null==b&&d(t,p[g],y.data),g++}for(var g in v){var O=v[g],k=O[1];h[k.data.key]||d(t,O[0],k.data)}}else null!=(o=t)&&r!==e&&r!==t.nodeValue&&n.replaceChild(t=l(r,a),o);return t}for(var v,p,h={},g={},m={},y=[],b=n.view,w=n.root||document.body,x=!1,j=!1,O=-1;O<y.length;O++){var k=y[O]?y[O](o):n;Object.keys(k.events||[]).map(function(n){m[n]=(m[n]||[]).concat(k.events[n])}),null!=k.state&&(h=u(h,k.state)),y=y.concat(k.mixins||[]),a(g,k.actions)}return v=e(p=w.querySelector("[data-ssr]"),[].map),t(o("init")),o}t.a=r}]);