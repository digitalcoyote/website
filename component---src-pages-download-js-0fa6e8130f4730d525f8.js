(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{249:function(e,t,a){"use strict";a.r(t);a(40),a(39),a(8);var n=a(0),r=a.n(n),o=a(246),l=a(245),i=a(255),s=a.n(i);var c=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={release:"",mac:"",win:"",linuxAppImage:"",linuxDeb:"",os:""},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){var e=this.getOS();this.setState({release:"5.4.3",mac:"https://github.com/getferdi/ferdi/releases/download/v5.4.3/Ferdi-5.4.3.dmg",win:"https://github.com/getferdi/ferdi/releases/download/v5.3.3/Ferdi.Setup.5.3.3.exe",linuxAppImage:"https://github.com/getferdi/ferdi/releases/download/v5.4.3/Ferdi-5.4.3.AppImage",linuxDeb:"https://github.com/getferdi/ferdi/releases/download/v5.4.3/ferdi_5.4.3_amd64.deb",os:e})},i.getLatestRelease=function(){return new Promise((function(e){s()("https://api.github.com/repos/getferdi/ferdi/releases/latest").then((function(e){return e.json()})).then((function(t){return e(t.name)}))}))},i.getOS=function(){var e,t=window.navigator.platform;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(t)?e="mac":-1!==["Win32","Win64","Windows","WinCE"].indexOf(t)?e="win":!e&&/Linux/.test(t)&&(e="linux"),e},i.fullOSName=function(e){switch(e){case"mac":return"Mac";case"win":return"Windows";case"linux":return"Linux";default:return""}},i.render=function(){var e=this.state,t=e.release,a=e.mac,n=e.win,i=e.linuxAppImage,s=e.linuxDeb,c=e.os;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Download"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Download Ferdi ",t)),c&&r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"download-button"},"linux"!==c?r.a.createElement("a",{href:this.state[c]},"Download for ",this.fullOSName(c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:i},"Download AppImage for ",this.fullOSName(c)),r.a.createElement("a",{href:s},"Download for Ubuntu (.deb)")))),c&&r.a.createElement("h2",{className:"download-all"},"All platforms"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"download-button"},r.a.createElement("a",{href:n},"Download for Windows"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"download-button"},r.a.createElement("a",{href:a},"Download for Mac")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"download-button"},r.a.createElement("a",{href:i},"Download Linux AppImage"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"download-button"},r.a.createElement("a",{href:s},"Download for Ubuntu (.deb)")))))))},n}(n.Component);t.default=c},255:function(e,t,a){"use strict";a(49);var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,t.default=n.fetch.bind(n),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}}]);
//# sourceMappingURL=component---src-pages-download-js-0fa6e8130f4730d525f8.js.map