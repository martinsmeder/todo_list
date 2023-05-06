/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(){n=function(){return e};var e={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new D(n||[]);return a(i,"_invoke",{value:L(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var f={};function h(){}function m(){}function v(){}var y={};s(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(P([])));w&&w!==r&&o.call(w,c)&&(y=w);var x=v.prototype=h.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(a,i,c,u){var l=d(e[a],e,i);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=v,a(x,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:m,configurable:!0}),m.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(b.prototype),s(b.prototype,u,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),s(x,l,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function o(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var a,i,c,u,l=function(t,e,r,n,o){return{title:t,description:e,priority:r,dueDate:n,isDone:o}},s={itemArray:a=[],createItem:function(t,e,r,n,o){var i=l(t,e,r,n,o);return a.push(i),i},deleteItem:function(t){var e=a.indexOf(t);e>-1&&a.splice(e,1)},editItem:function(){var t,e=(t=n().mark((function t(e,r,o,a,i,c){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.title=r,e.description=o,e.priority=a,e.dueDate=i,e.isDone=c;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,u,"next",t)}function u(t){o(i,n,a,c,u,"throw",t)}c(void 0)}))});return function(t,r,n,o,a,i){return e.apply(this,arguments)}}(),toggleIsDone:function(t){t.isDone=!t.isDone},getAllItems:function(){return a}},p={projectArray:i=[],createProject:function(t){var e=function(t){return{title:t,array:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]}}(t,[]);return i.push(e),e},deleteProject:function(t){var e=i.indexOf(t);e>-1&&i.splice(e,1)},editProject:function(t,e){t.title=e},addProjectItem:function(t,e,r,n,o,a){var i=l(e,r,n,o,a);return t.array.push(i),i},deleteProjectItem:function(t,e){var r=t.array.indexOf(e);r>-1&&t.array.splice(r,1)},getAllProjects:function(){return i},getProjectByTitle:function(t){return p.getAllProjects().find((function(e){return e.title===t}))}},d={isDueToday:c=function(t){var e=new Date;e.setHours(0,0,0,0);var r=new Date(t);return r.getDate()===e.getDate()&&r.getMonth()===e.getMonth()&&r.getFullYear()===e.getFullYear()},isDueThisWeek:u=function(t){var e=new Date;e.setHours(0,0,0,0);var r=new Date(Date.parse(t)),n=new Date(e.getFullYear(),e.getMonth(),e.getDate()+(7-e.getDay()));return r>=e&&r<=n},getAllDailyItems:function(){var t=[],r=e(s.itemArray);return p.projectArray.forEach((function(t){r.push.apply(r,e(t.array))})),r.forEach((function(e){c(e.dueDate)&&t.push(e)})),t},getAllWeeklyItems:function(){var t=[],r=e(s.itemArray);return p.projectArray.forEach((function(t){r.push.apply(r,e(t.array))})),r.forEach((function(e){u(e.dueDate)&&t.push(e)})),t},getAllTotalItems:function(){var t=e(s.itemArray);return p.projectArray.forEach((function(r){t.push.apply(t,e(r.array))})),t}},f=(s.createItem("Item1","First item","medium",new Date(2023,4,3),!1),s.createItem("Item2","Second item","high",new Date(2023,4,4),!1),s.createItem("Item3","Third item","low",new Date(2023,4,10),!1),p.createProject("aProject",[]));function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new D(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function d(){}function f(){}function v(){}var y={};u(y,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(P([])));w&&w!==e&&r.call(w,a)&&(y=w);var x=v.prototype=d.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,a,i,c){var u=s(t[n],t,a);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==h(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(p).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v,n(x,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:f,configurable:!0}),f.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function v(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){v(a,n,o,i,c,"next",t)}function c(t){v(a,n,o,i,c,"throw",t)}i(void 0)}))}}function g(){var t=document.querySelector("#content"),e=document.createElement("form");e.classList.add("form");var r=document.createElement("input");r.type="text",r.name="title",r.placeholder="Title",r.required=!0;var n=document.createElement("textarea");n.name="description",n.placeholder="Description";var o=document.createElement("select");o.name="project",p.getAllProjects().forEach((function(t){var e=document.createElement("option");e.value=t.title,e.text=t.title,o.appendChild(e)}));var a=document.createElement("option");a.value="noProject",a.text="No Project",o.appendChild(a);var i=document.createElement("select");i.name="priority";var c=document.createElement("option");c.value="low",c.text="Low Priority",i.appendChild(c);var u=document.createElement("option");u.value="medium",u.text="Medium Priority",i.appendChild(u);var l=document.createElement("option");l.value="high",l.text="High Priority",i.appendChild(l);var d=document.createElement("input");d.type="date",d.name="dueDate",d.required=!0;var f=document.createElement("input");f.type="checkbox",f.name="isDone";var h=document.createElement("label");h.textContent="Completed",h.appendChild(f);var v=document.createElement("button");return v.type="submit",v.textContent="Create Item",e.appendChild(r),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(d),e.appendChild(h),e.appendChild(v),e.addEventListener("submit",function(){var t=y(m().mark((function t(r){var n,o,a,i,c,u,l;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),n=r.target.elements.project.value,o=p.getProjectByTitle(n),a=r.target.elements.title.value,i=r.target.elements.description.value,c=r.target.elements.priority.value,(u=new Date(r.target.elements.dueDate.value)).setHours(0,0,0,0),l=r.target.elements.isDone.checked,"noProject"!==n){t.next=18;break}return t.next=12,s.createItem(a,i,c,u,l);case 12:return r.target.reset(),e.style.display="none",t.next=16,j();case 16:t.next=25;break;case 18:if(!o){t.next=25;break}return t.next=21,p.addProjectItem(o,a,i,c,u,l);case 21:return r.target.reset(),e.style.display="none",t.next=25,T(o);case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.appendChild(e),t}function w(t,e){var r=document.createElement("form");r.classList.add("form");var n=document.createElement("input");n.type="text",n.name="title",n.value=t.title;var o=document.createElement("textarea");o.name="description",o.value=t.description;var a=document.createElement("select");a.name="priority";var i=document.createElement("option");i.value="low",i.text="Low Priority",a.appendChild(i);var c=document.createElement("option");c.value="medium",c.text="Medium Priority",a.appendChild(c);var u=document.createElement("option");u.value="high",u.text="High Priority",a.appendChild(u),a.value=t.priority;var l=document.createElement("input");l.type="date",l.name="dueDate",l.value=t.dueDate.toISOString().slice(0,10);var p=document.createElement("input");p.type="checkbox",p.name="isDone",p.checked=t.isDone;var d=document.createElement("label");d.textContent="Completed",d.appendChild(p);var f=document.createElement("button");return f.type="submit",f.textContent="Update Item",r.appendChild(n),r.appendChild(o),r.appendChild(a),r.appendChild(l),r.appendChild(d),r.appendChild(f),r.addEventListener("submit",function(){var n=y(m().mark((function n(o){var a,i,c,u,l;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.preventDefault(),a=o.target.elements.title.value,i=o.target.elements.description.value,c=o.target.elements.priority.value,(u=new Date(o.target.elements.dueDate.value)).setHours(0,0,0,0),l=o.target.elements.isDone.checked,n.next=9,s.editItem(t,a,i,c,u,l);case 9:return n.t0=e,n.next=12,b(t);case 12:return n.t1=n.sent,n.t0.replaceWith.call(n.t0,n.t1),o.target.reset(),r.style.display="none",n.next=18,j();case 18:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),r}function x(){var t=document.querySelector("#content"),e=document.createElement("form");e.classList.add("form");var r=document.createElement("input");r.type="text",r.name="title",r.placeholder="Title",r.required=!0;var n=document.createElement("button");return n.type="submit",n.textContent="Create Project",e.appendChild(r),e.appendChild(n),e.addEventListener("submit",(function(t){t.preventDefault();var r=t.target.elements.title.value;p.createProject(r),t.target.reset(),e.style.display="none",A()})),t.appendChild(e),e}function E(t,e){var r=document.createElement("form");r.classList.add("form");var n=document.createElement("input");n.type="text",n.name="title",n.value=t.title;var o=document.createElement("button");return o.type="submit",o.textContent="Update Project",r.appendChild(n),r.appendChild(o),r.addEventListener("submit",function(){var n=y(m().mark((function n(o){var a;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.preventDefault(),a=o.target.elements.title.value,n.next=4,p.editProject(t,a);case 4:return n.t0=e,n.next=7,C(t);case 7:return n.t1=n.sent,n.t0.replaceWith.call(n.t0,n.t1),o.target.reset(),r.style.display="none",n.next=13,A();case 13:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),r}function b(t){return L.apply(this,arguments)}function L(){return L=y(m().mark((function t(e){var r,n,o,a,i,c,u,l,p,d;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=document.createElement("div")).classList.add("card"),(n=document.createElement("div")).classList.add("left"),(o=document.createElement("div")).classList.add("right"),(a=document.createElement("div")).classList.add("priority"),"low"===e.priority?a.classList.add("low"):"medium"===e.priority?a.classList.add("medium"):"high"===e.priority&&a.classList.add("high"),(i=document.createElement("input")).classList.add("left"),i.type="checkbox",i.checked=e.isDone,i.addEventListener("click",y(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.toggleIsDone(e);case 2:j();case 3:case"end":return t.stop()}}),t)})))),(c=document.createElement("p")).textContent=e.title,u=document.createElement("p"),l={day:"numeric",month:"short",year:"2-digit"},u.textContent=e.dueDate.toLocaleDateString("en-US",l),(p=document.createElement("a")).href="#",p.textContent="Edit",p.addEventListener("click",(function(){var t=w(e,r);r.replaceWith(t)})),(d=document.createElement("a")).href="#",d.textContent="Delete",d.addEventListener("click",function(){var t=y(m().mark((function t(n){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,s.deleteItem(e);case 3:r.remove();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.appendChild(a),n.appendChild(i),n.appendChild(c),r.appendChild(n),o.appendChild(u),o.appendChild(p),o.appendChild(d),r.appendChild(o),t.abrupt("return",r);case 36:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function C(t){return k.apply(this,arguments)}function k(){return k=y(m().mark((function t(e){var r,n,o,a,i,c;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=document.createElement("div")).classList.add("card"),(n=document.createElement("div")).classList.add("left"),(o=document.createElement("div")).classList.add("right"),(a=document.createElement("a")).href="#",a.textContent=e.title,a.addEventListener("click",y(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(e);case 1:case"end":return t.stop()}}),t)})))),(i=document.createElement("a")).href="#",i.textContent="Edit",i.addEventListener("click",(function(){var t=E(e,r);r.replaceWith(t)})),(c=document.createElement("a")).href="#",c.textContent="Delete",c.addEventListener("click",function(){var t=y(m().mark((function t(n){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,p.deleteProject(e);case 3:r.remove();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.appendChild(a),o.appendChild(i),o.appendChild(c),r.appendChild(n),r.appendChild(o),t.abrupt("return",r);case 24:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function j(){return D.apply(this,arguments)}function D(){return D=y(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=document.querySelector("#content")).textContent="",t.next=4,d.getAllTotalItems();case 4:return t.sent.forEach(function(){var t=y(m().mark((function t(r){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(r);case 2:n=t.sent,e.appendChild(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)}))),D.apply(this,arguments)}function P(){return S.apply(this,arguments)}function S(){return S=y(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=document.querySelector("#content")).textContent="",t.next=4,d.getAllDailyItems();case 4:return t.sent.forEach(function(){var t=y(m().mark((function t(r){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(r);case 2:n=t.sent,e.appendChild(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}function I(){return O.apply(this,arguments)}function O(){return O=y(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=document.querySelector("#content")).textContent="",t.next=4,d.getAllWeeklyItems();case 4:return t.sent.forEach(function(){var t=y(m().mark((function t(r){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(r);case 2:n=t.sent,e.appendChild(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function A(){return _.apply(this,arguments)}function _(){return _=y(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=document.querySelector("#projectContainer")).textContent="",t.next=4,p.getAllProjects();case 4:return t.sent.forEach(function(){var t=y(m().mark((function t(r){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(r);case 2:n=t.sent,e.appendChild(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function T(t){return N.apply(this,arguments)}function N(){return N=y(m().mark((function t(e){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=document.querySelector("#content")).textContent="",e.array.forEach(function(){var t=y(m().mark((function t(e){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:n=t.sent,r.appendChild(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),N.apply(this,arguments)}function F(){return(F=y(m().mark((function t(e){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(),A(),document.querySelector("#allItems a:first-child").addEventListener("click",y(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:case"end":return t.stop()}}),t)})))),document.querySelector("#allItems a:nth-child(2)").addEventListener("click",y(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:case"end":return t.stop()}}),t)})))),document.querySelector("#allItems a:nth-child(3)").addEventListener("click",y(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:case"end":return t.stop()}}),t)})))),document.querySelector("#newTaskBtn").addEventListener("click",(function(){g()})),document.querySelector("#newProjectBtn").addEventListener("click",(function(){x()}));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}p.addProjectItem(f,"Item4","Fourth item","medium",new Date(2023,4,3),!1),p.addProjectItem(f,"Item5","Fifth item","high",new Date(2023,4,4),!1),p.addProjectItem(f,"Item6","Sixth item","low",new Date(2023,4,10),!1),function(t){F.apply(this,arguments)}()})();