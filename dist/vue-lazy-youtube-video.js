!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueLazyYoutubeVideo",[],e):"object"==typeof exports?exports.VueLazyYoutubeVideo=e():t.VueLazyYoutubeVideo=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5).default)("2875c42c",r,!1,{})},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".y-video{background-color:#000;cursor:pointer}.y-video__inner{position:relative}.y-video__embed,.y-video__media{position:absolute;top:0;left:0;width:100%;height:100%;border-width:0}.y-video__media--type--img{object-fit:cover}.y-video__button{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-width:0;background-color:transparent;width:68px;height:48px;padding:0;cursor:pointer}.y-video__button-shape{fill:#212121;fill-opacity:0.8}.y-video__button-icon{fill:#fff}.y-video__button:focus{outline:0}.y-video__button:focus .y-video__button-shape{fill:red;fill-opacity:1}.y-video:hover .y-video__button-shape{fill:red;fill-opacity:1}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var a,s,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"y-video",on:{click:t.clickHandler}},[n("div",{staticClass:"y-video__inner",style:t.styleObj},[t.isVideoLoaded?n("iframe",{staticClass:"y-video__media",attrs:{src:t.generateURL(),allowfullscreen:"",allow:"autoplay"}}):[n("picture",[n("source",{attrs:{srcset:"https://i.ytimg.com/vi_webp/"+t.id+"/"+t.previewImageSize+".webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"y-video__media y-video__media--type--img",attrs:{src:t.thumbnail||"https://i.ytimg.com/vi/"+t.id+"/"+t.previewImageSize+".jpg",alt:t.alt}})]),t._v(" "),n("button",{staticClass:"y-video__button",attrs:{type:"button","aria-label":t.buttonLabel}},[n("svg",{attrs:{viewBox:"0 0 68 48",version:"1.1",width:"100%",height:"100%"}},[n("path",{staticClass:"y-video__button-shape",attrs:{d:"M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"}}),t._v(" "),n("path",{staticClass:"y-video__button-icon",attrs:{d:"M45 24L27 14v20"}})])])]],2)])};function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r._withStripped=!0;var i={name:"VueLazyYoutubeVideo",props:{url:{type:String,required:!0,validator:function(t){return 1!==t.indexOf("https://www.youtube.com/watch?")},thumbnail:String},alt:{type:String,default:"Video alternative image"},buttonLabel:{type:String,default:"Play video"},aspectRatio:{type:String,default:"16:9",validator:function(t){return/^\d+:\d+$/.test(t)}},previewImageSize:{type:String,default:"maxresdefault",validator:function(t){return-1!==["default","mqdefault","sddefault","hqdefault","maxresdefault"].indexOf(t)}}},data:function(){return{isVideoLoaded:!1}},computed:{id:function(){return/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/.exec(this.url)[1]},styleObj:function(){return{paddingBottom:this.getPaddingBottom()}}},methods:{generateURL:function(){return"https://www.youtube.com/embed/".concat(this.id).concat("?rel=0&showinfo=0&autoplay=1")},clickHandler:function(){this.isVideoLoaded=!0,this.$emit("videoLoaded")},getPaddingBottom:function(){var t=o(this.aspectRatio.split(":"),2),e=t[0],n=t[1];return"".concat(n/e*100,"%")}}};n(1);var a=function(t,e,n,r,o,i,a,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}(i,r,[],!1,null,null,null);a.options.__file="src/VueLazyYoutubeVideo.vue";var s=a.exports;e.default=s},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,d=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,o){c=n,l=o||{};var a=r(t,e);return h(a),function(e){for(var n=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,n.push(u)}e?h(a=r(t,e)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function y(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=y()),e=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=y(),e=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var b,g=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function w(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute(f,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}])});