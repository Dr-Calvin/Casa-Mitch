(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(645),i=n.n(a),r=n(667),o=n.n(r),s=n(789),u=n(795),c=i()((function(e){return e[1]})),l=o()(s),d=o()(u);c.push([e.id,'body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n    "Segoe UI Symbol", "Noto Color Emoji";\n}\n\n.content {\n  width: 75%;\n  min-width: 200px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.headerLogo {\n  margin: 0 auto;\n  height: 200px;\n  width: 200px;\n  background-image: url('+l+");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.main {\n  margin: 30px 0;\n  color: white;\n}\n\ntabSelector {\n  width: 60%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-color: salmon;\n}\n\n.tab {\n  display: inline-block;\n  color: white;\n}\n\n.tab_display {\n  height: 300px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url("+d+");\n}\n\n.overlay {\n  width: 100%;\n  height: inherit;\n  background-color: rgba(100, 100, 100, 0.6);\n}\n\np {\n  margin: 0px 0px;\n  padding: 0px 0px;\n}\n\n.active {\n  background-color: black;\n  opacity: 0.3;\n  border-bottom: red 2px solid;\n}\n\n.menutext {\n  margin-top: -300px;\n  padding: 100px 50px 0px 50px;\n  overflow-y: auto;\n  height: 200px;\n  \n  /* color:violet; */\n}\n\n.tab:hover {\n  cursor: pointer !important;\n  color: rgb(91, 112, 231);\n}\n\nul {\n  list-style: none;\n  margin: 20px 0px;\n  padding: 0;\n}\n\na {\n  color: white;\n}\n\nfooter {\n  text-align: right;\n}\n\nbutton {\n  text-transform: capitalize;\n  background-color: salmon;\n  border: none;\n  text-align: center;\n  color: white;\n}\n",""]);const m=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);a&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{var a,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function o(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],i=0;i<e.length;i++){var s=e[i],u=t.base?s[0]+t.base:s[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var d=o(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(r[d].references++,r[d].updater(m)):r.push({identifier:l,updater:b(m,t),references:1}),a.push(l)}return a}function u(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function m(e,t,n){var a=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,f=0;function b(e,t){var n,a,i;if(t.singleton){var r=f++;n=p||(p=u(t)),a=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=u(t),a=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var i=o(n[a]);r[i].references--}for(var u=s(e,t),c=0;c<n.length;c++){var l=o(n[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=u}}}},795:(e,t,n)=>{e.exports=n.p+"d319a3f58d63ef84bb96.jpg"},789:(e,t,n)=>{e.exports=n.p+"c12ad875443108ac02d5.jpg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),a=n(426);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i={content:document.querySelector(".content"),header:document.createElement("header"),headerLogo:document.createElement("div"),img:document.createElement("img"),main:document.createElement("main"),about:document.createElement("button"),menu:document.createElement("button"),contact:document.createElement("button"),tabSelector:document.createElement("tabSelector"),footer:document.createElement("footer"),footerSpan:document.createElement("span")},r=[i.menu,i.contact,i.about];i.header.classList.add("header"),i.headerLogo.classList.add("headerLogo"),i.header.appendChild(i.headerLogo),i.content.appendChild(i.header),i.main.classList.add("main"),i.about.classList.add("tab"),i.about.textContent="about",i.about.value=0,i.menu.classList.add("tab"),i.menu.textContent="menu",i.menu.value=1,i.contact.classList.add("tab"),i.contact.textContent="contact",i.contact.value=2,i.tabSelector.appendChild(i.about),i.tabSelector.appendChild(i.menu),i.tabSelector.appendChild(i.contact),i.main.appendChild(i.tabSelector),i.content.appendChild(i.main),i.footer.classList.add("footer"),i.footerSpan.textContent="/ Website created by Mitch /",i.footer.appendChild(i.footerSpan),i.content.appendChild(i.footer);const o=document.createElement("div");o.classList.add("tab_display","tab_display_about"),o.innerHTML="<div class=\"overlay\" >\n</div>\n<p class='menutext'>We are currently closed. Please come back later!\n\n<br></br>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat diam lectus. Quisque urna augue, tempor ut vehicula sagittis, vestibulum nec nunc. Mauris pulvinar condimentum velit. Morbi suscipit justo at nunc vestibulum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt malesuada enim, nec mollis eros congue et. Sed molestie, justo eget condimentum molestie, elit lectus lobortis diam, non hendrerit risus mauris sit amet arcu. Etiam malesuada felis quis mauris vestibulum, nec facilisis massa condimentum.\n\nNam enim urna, interdum sed velit sit amet, vestibulum finibus massa. Nam sed augue turpis. Morbi dictum auctor accumsan. Aliquam pretium nisl enim, vitae iaculis leo imperdiet ac. Nulla a ipsum et quam accumsan suscipit suscipit sed leo. Vestibulum vel tempor elit, id semper ante. Aliquam erat volutpat. Vestibulum finibus est eget nibh facilisis, a mattis erat gravida. In nulla sem, finibus a pellentesque sed, lobortis id lacus. Donec varius enim vel felis sodales malesuada. Nunc a justo vitae est dapibus tristique sit amet a justo. Sed sed justo ac neque laoreet mattis. Pellentesque accumsan viverra gravida. Praesent gravida augue tellus, eget dapibus ipsum luctus porttitor.\n\nSuspendisse potenti. Aliquam at ornare nisl. Suspendisse vitae convallis tortor. Aliquam et dapibus lorem. Ut cursus volutpat est nec egestas. Ut scelerisque, eros tristique accumsan faucibus, lectus velit pharetra diam, eget ultricies risus mi nec augue. Mauris lectus risus, tincidunt dictum varius vel, elementum et sem. Cras in eros quis nisi pharetra scelerisque.\n\nAenean id ante nibh. In lacus arcu, sagittis a efficitur ac, varius non dui. Nam vel facilisis elit, eget blandit neque. Praesent lectus mauris, condimentum non ligula a, lacinia venenatis mi. Vivamus dictum nulla nec enim dignissim tincidunt. Nam viverra vel nunc at blandit. Mauris scelerisque ante at neque pretium, eu efficitur elit euismod.\n\nCurabitur odio nulla, tristique dignissim aliquam ut, mattis eget dolor. Donec sit amet felis ac magna fermentum consequat a eu justo. Aenean sagittis vel arcu nec lobortis. Vestibulum pretium imperdiet nibh eget sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada diam aliquet, ultricies ipsum sit amet, scelerisque mi. Quisque eget egestas dui. Sed in dui viverra, consectetur ante non, malesuada massa. Nam convallis neque et eleifend pretium. Curabitur aliquet augue at sapien interdum, a egestas urna porta. \n</p>\n";const s=o,u=document.createElement("div");u.classList.add("tab_display","tab_display_about");const c=document.createElement("div");c.classList.add("overlay"),u.appendChild(c);const l=document.createElement("p");l.classList.add("menutext"),l.innerText="This is the about page. Lorem ipsum dolor sit amet, consect, lorem eget met am.",u.appendChild(l);const d=u,m=document.createElement("div");m.classList.add("tab_display","tab_display_menu"),m.innerHTML='<div class="overlay"></div>\n\n<div class=\'menutext\'>\n \n<p>These are the menus:</p>\n<ul> \n<li><a href="Fish.pdf">Fish Menu</a></li>\n<li><a href="Meats.pdf">Meat Menu</a></li>\n<li><a href="Vegetarian.pdf">Vegetarian Menu</a></li>\n</ul>\n</div>\n\n';const p=[d,m,s];r.forEach((e=>{e.onclick=()=>{i.main.removeChild(i.main.lastChild),i.main.appendChild(p[e.value]),document.querySelector(".active").classList.remove("active"),e.classList.add("active")}})),i.main.appendChild(d),i.about.classList.add("active")})()})();