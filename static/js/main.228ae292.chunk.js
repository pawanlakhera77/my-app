(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(3),a=n.n(o),c=n(1),s=(n(18),n(19),function(e){var t=e.text,n=e.buttonText,o=e.type,a=e.onClick,s=Object(c.b)();return Object(r.useEffect)((function(){if(!a){var e=setTimeout((function(){s({type:o})}),6e3);return function(){return clearTimeout(e)}}}),[]),i.a.createElement("div",{className:"alert"},t," ",n&&i.a.createElement("button",{onClick:a},n))}),l=n(7),u=n.n(l);n(20);var d=function(){console.log("hello2");var e=Object(c.c)((function(e){return e.serviceWorkerInitialized})),t=Object(c.c)((function(e){return e.serviceWorkerUpdated})),n=Object(c.c)((function(e){return e.serviceWorkerRegistration}));return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-alert"},e&&i.a.createElement(s,{text:"Service Worker is initialized for the first time",type:"SW_INIT"}),t&&i.a.createElement(s,{text:"There is a new version available.",buttonText:"Update",type:"SW_UPDATE",onClick:function(){var e=n.waiting;e&&(e.postMessage({type:"SKIP_WAITING"}),e.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload()})))}})),i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"isServiceWorkerInitialized:"," ",JSON.stringify(e)),i.a.createElement("p",null,"isServiceWorkerUpdated: ",JSON.stringify(t))))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var f=n(8),g=n(2);var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SW_INIT":return Object(g.a)(Object(g.a)({},e),{},{serviceWorkerInitialized:!e.serviceWorkerInitialized});case"SW_UPDATE":return Object(g.a)(Object(g.a)({},e),{},{serviceWorkerUpdated:!e.serviceWorkerUpdated,serviceWorkerRegistration:t.payload});default:return e}};var m=function(){return Object(f.a)(h,{serviceWorkerInitialized:!1,serviceWorkerUpdated:!1,serviceWorkerRegistration:null})}();a.a.render(i.a.createElement(c.a,{store:m},i.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/my-app","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}({onSuccess:function(){return m.dispatch({type:"SW_INIT"})},onUpdate:function(e){return m.dispatch({type:"SW_UPDATE",payload:e})}})},7:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.228ae292.chunk.js.map