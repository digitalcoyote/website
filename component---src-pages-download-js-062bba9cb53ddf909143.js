(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{249:function(t,e,r){"use strict";r.r(e);r(40),r(39),r(8);var n=r(255),o=r.n(n),a=(r(254),r(0)),i=r.n(a),c=r(246),u=r(245),l=r(256),s=r.n(l);function f(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}var h=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={release:"",mac:"",win:"",linuxAppImage:"",linuxDeb:"",os:""},e}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){var t,e=(t=o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getLatestRelease();case 2:e=t.sent,r=this.getOS(),this.setState({release:e,mac:"https://github.com/getferdi/ferdi/releases/download/v"+e+"/Ferdi-"+e+".dmg",win:"https://github.com/getferdi/ferdi/releases/download/v"+e+"/Ferdi.Setup."+e+".exe",linuxAppImage:"https://github.com/getferdi/ferdi/releases/download/v"+e+"/Ferdi."+e+".AppImage",linuxDeb:"https://github.com/getferdi/ferdi/releases/download/v"+e+"/ferdi_"+e+"_amd64.deb",os:r});case 5:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),a.getLatestRelease=function(){return new Promise((function(t){s()("https://api.github.com/repos/getferdi/ferdi/releases/latest").then((function(t){return t.json()})).then((function(e){return t(e.name)}))}))},a.getOS=function(){var t,e=window.navigator.platform;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(e)?t="mac":-1!==["Win32","Win64","Windows","WinCE"].indexOf(e)?t="win":!t&&/Linux/.test(e)&&(t="linux"),t},a.fullOSName=function(t){switch(t){case"mac":return"Mac";case"win":return"Windows";case"linux":return"Linux";default:return""}},a.render=function(){var t=this.state,e=t.release,r=t.mac,n=t.win,o=t.linuxAppImage,a=t.linuxDeb,l=t.os;return i.a.createElement(c.a,null,i.a.createElement(u.a,{title:"Download"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,"Download Ferdi ",e)),l&&i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"download-button"},"linux"!==l?i.a.createElement("a",{href:this.state[l]},"Download for ",this.fullOSName(l)):i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:o},"Download AppImage for ",this.fullOSName(l)),i.a.createElement("a",{href:a},"Download for Ubuntu (.deb)")))),l&&i.a.createElement("h2",{className:"download-all"},"All platforms"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"download-button"},i.a.createElement("a",{href:n},"Download for Windows"))),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"download-button"},i.a.createElement("a",{href:r},"Download for Mac")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"download-button"},i.a.createElement("a",{href:o},"Download Linux AppImage"))),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"download-button"},i.a.createElement("a",{href:a},"Download for Ubuntu (.deb)")))))))},n}(a.Component);e.default=h},254:function(t,e,r){r(12),r(13),r(49),r(60),r(39),r(8),r(109),r(40),r(29),r(61),r(51),r(38);var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=s;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var s="suspendedStart",f="suspendedYield",h="executing",d="completed",p={};function m(){}function v(){}function w(){}var y={};y[a]=function(){return this};var g=Object.getPrototypeOf,E=g&&g(g(D([])));E&&E!==r&&n.call(E,a)&&(y=E);var x=w.prototype=m.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=l(t[r],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function D(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=x.constructor=w,w.constructor=v,w[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=D,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},255:function(t,e,r){t.exports=r(254)},256:function(t,e,r){"use strict";r(50);var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();t.exports=e=n.fetch,e.default=n.fetch.bind(n),e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response}}]);
//# sourceMappingURL=component---src-pages-download-js-062bba9cb53ddf909143.js.map