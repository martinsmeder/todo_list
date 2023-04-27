/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var f={};function h(){}function v(){}function m(){}var y={};s(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(D([])));w&&w!==n&&o.call(w,c)&&(y=w);var x=m.prototype=h.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(i,a,c,u){var l=d(e[i],e,a);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function D(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=m,i(x,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=s(m,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},E(b.prototype),s(b.prototype,u,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new b(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),s(x,l,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=D,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var n,o,i=function(t,e,r,n,o){return{title:t,description:e,priority:r,dueDate:n,isDone:o}},a={itemArray:n=[],createItem:function(t,e,r,o,a){var c=i(t,e,r,o,a);return n.push(c),c},deleteItem:function(t){var e=n.indexOf(t);e>-1&&n.splice(e,1)},editItem:function(){var t,n=(t=e().mark((function t(r,n,o,i,a,c){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.title=n,r.description=o,r.priority=i,r.dueDate=a,r.isDone=c;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t,e,r,o,i,a){return n.apply(this,arguments)}}(),toggleIsDone:function(t){t.isDone=!t.isDone},getAllItems:function(){return n}},c={projectArray:o=[],createProject:function(t){var e=function(t){return{title:t,array:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]}}(t,[]);return o.push(e),e},deleteProject:function(t){var e=o.indexOf(t);e>-1&&o.splice(e,1)},editProject:function(t,e){t.title=e},addProjectItem:function(t,e,r,n,o,a){var c=i(e,r,n,o,a);return t.array.push(c),c},deleteProjectItem:function(t,e){var r=t.array.indexOf(e);r>-1&&t.array.splice(r,1)},getAllProjects:function(){return o}};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function p(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new P(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var f={};function h(){}function v(){}function m(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(D([])));w&&w!==e&&r.call(w,i)&&(y=w);var x=m.prototype=h.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var l=d(t[n],t,i);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==u(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function D(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=m,n(x,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),s(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(p(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=D,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function s(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}function d(t,e){var r=document.createElement("form");r.classList.add("form");var n=document.createElement("input");n.type="text",n.name="title",n.value=t.title;var o=document.createElement("input");o.type="text",o.name="description",o.value=t.description;var i=document.createElement("select");i.name="priority";var c=document.createElement("option");c.value="High",c.text="High",i.appendChild(c);var u=document.createElement("option");u.value="Medium",u.text="Medium",i.appendChild(u);var s=document.createElement("option");s.value="Low",s.text="Low",i.appendChild(s),i.value=t.priority;var d=document.createElement("input");d.type="date",d.name="dueDate",d.value=t.dueDate;var f=document.createElement("input");f.type="checkbox",f.name="isDone",f.checked=t.isDone;var v=document.createElement("label");v.textContent="Completed",v.appendChild(f);var m=document.createElement("button");return m.type="submit",m.textContent="Update Item",r.appendChild(n),r.appendChild(o),r.appendChild(i),r.appendChild(d),r.appendChild(v),r.appendChild(m),r.addEventListener("submit",function(){var n=p(l().mark((function n(o){var i,c,u,s,p;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.preventDefault(),i=o.target.elements.title.value,c=o.target.elements.description.value,u=o.target.elements.priority.value,s=o.target.elements.dueDate.value,p=o.target.elements.isDone.checked,n.next=8,a.editItem(t,i,c,u,s,p);case 8:return n.t0=e,n.next=11,h(t);case 11:return n.t1=n.sent,n.t0.replaceWith.call(n.t0,n.t1),o.target.reset(),r.style.display="none",n.next=17,g();case 17:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),r}function f(t,e){var r=document.createElement("form");r.classList.add("form");var n=document.createElement("input");n.type="text",n.name="title",n.value=t.title;var o=document.createElement("button");return o.type="submit",o.textContent="Update Project",r.appendChild(n),r.appendChild(o),r.addEventListener("submit",function(){var n=p(l().mark((function n(o){var i;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.preventDefault(),i=o.target.elements.title.value,n.next=4,c.editProject(t,i);case 4:return n.t0=e,n.next=7,m(t);case 7:return n.t1=n.sent,n.t0.replaceWith.call(n.t0,n.t1),o.target.reset(),r.style.display="none",n.next=13,x();case 13:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),r}function h(t){return v.apply(this,arguments)}function v(){return v=p(l().mark((function t(e){var r,n,o,i,c,u,s,f;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=document.createElement("div")).classList.add("card"),(n=document.createElement("input")).type="checkbox",n.checked=e.isDone,n.addEventListener("click",p(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.toggleIsDone(e);case 2:g();case 3:case"end":return t.stop()}}),t)})))),(o=document.createElement("h3")).textContent=e.title,(i=document.createElement("p")).textContent=e.description,(c=document.createElement("p")).textContent="Priority: ".concat(e.priority),(u=document.createElement("p")).textContent="Due Date: ".concat(e.dueDate),(s=document.createElement("a")).href="#",s.textContent="Delete",s.addEventListener("click",function(){var t=p(l().mark((function t(n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,a.deleteItem(e);case 3:r.remove();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(f=document.createElement("a")).href="#",f.textContent="Edit",f.addEventListener("click",(function(){var t=d(e,r);r.replaceWith(t)})),r.appendChild(n),r.appendChild(o),r.appendChild(i),r.appendChild(c),r.appendChild(u),r.appendChild(s),r.appendChild(f),t.abrupt("return",r);case 30:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return y=p(l().mark((function t(e){var r,n,o,i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=document.createElement("div")).classList.add("card"),(n=document.createElement("h3")).textContent=e.title,n.addEventListener("click",p(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.parentElement.dataset.id,currentProject=e,console.log(currentProject);case 3:case"end":return t.stop()}}),t)})))),(o=document.createElement("a")).href="#",o.textContent="Delete",o.addEventListener("click",function(){var t=p(l().mark((function t(n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,c.deleteProject(e);case 3:r.remove();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(i=document.createElement("a")).href="#",i.textContent="Edit",i.addEventListener("click",(function(){var t=f(e,r);r.replaceWith(t)})),r.appendChild(n),r.appendChild(o),r.appendChild(i),t.abrupt("return",r);case 17:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function g(){return w.apply(this,arguments)}function w(){return w=p(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=document.querySelector("#content")).textContent="",a.getAllItems().forEach(function(){var t=p(l().mark((function t(r){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(r);case 2:n=t.sent,e.appendChild(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function x(){return E.apply(this,arguments)}function E(){return E=p(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=document.querySelector("#projectContainer")).textContent="",t.next=4,c.getAllProjects();case 4:return t.sent.forEach(function(){var t=p(l().mark((function t(r){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(r);case 2:n=t.sent,e.appendChild(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}document.querySelector("#allItems a:first-child").addEventListener("click",p(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:case"end":return t.stop()}}),t)})))),document.querySelector("#newTaskBtn").addEventListener("click",(function(){!function(){var t=document.querySelector("#content"),e=document.createElement("form");e.classList.add("form");var r=document.createElement("select");r.name="project",c.getAllProjects().forEach((function(t){var e=document.createElement("option");e.value=t.title,e.text=t.title,r.appendChild(e)}));var n=document.createElement("input");n.type="text",n.name="title",n.placeholder="Title";var o=document.createElement("input");o.type="text",o.name="description",o.placeholder="Description";var i=document.createElement("select");i.name="priority";var a=document.createElement("option");a.value="High",a.text="High",i.appendChild(a);var u=document.createElement("option");u.value="Medium",u.text="Medium",i.appendChild(u);var s=document.createElement("option");s.value="Low",s.text="Low",i.appendChild(s);var d=document.createElement("input");d.type="date",d.name="dueDate";var f=document.createElement("input");f.type="checkbox",f.name="isDone";var h=document.createElement("label");h.textContent="Completed",h.appendChild(f);var v=document.createElement("button");v.type="submit",v.textContent="Create Item",e.appendChild(r),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(d),e.appendChild(h),e.appendChild(v),e.addEventListener("submit",function(){var t=p(l().mark((function t(r){var n,o,i,a,u,s,p;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=r.target.elements.project.value,o=c.getAllProjects().find((function(t){return t.title===n})),i=r.target.elements.title.value,a=r.target.elements.description.value,u=r.target.elements.priority.value,s=r.target.elements.dueDate.value,p=r.target.elements.isDone.checked,console.log(o),console.log(i,a,u,s,p),t.next=12,c.addProjectItem(o,i,a,u,s,p);case 12:r.target.reset(),e.style.display="none";case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.appendChild(e)}()})),document.querySelector("#newProjectBtn").addEventListener("click",(function(){!function(){var t=document.querySelector("#content"),e=document.createElement("form");e.classList.add("form");var r=document.createElement("label");r.textContent="Title:";var n=document.createElement("input");n.type="text",n.name="title",n.required=!0;var o=document.createElement("button");o.type="submit",o.textContent="Create Project",e.appendChild(r),e.appendChild(n),e.appendChild(o),e.addEventListener("submit",(function(t){t.preventDefault();var r=t.target.elements.title.value;c.createProject(r),t.target.reset(),e.style.display="none",x()})),t.appendChild(e)}()}))})();