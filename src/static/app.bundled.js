!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){"use strict";var e=document.querySelector('[data-id="nav-toggle"]'),t=document.querySelector('[data-id="nav-items"]'),n=!1;e.addEventListener("click",(function(r){n=!n,e.textContent=n?"Close":"Menu",t.classList.toggle("hidden")}),!1);var r=document.querySelectorAll("img.lazy"),o=function(e){var t,n=e.dataset.src;(t=n,new Promise((function(e,n){var r=new Image;r.src=t,r.onload=e,r.onerror=n}))).then((function(){e.classList.add("fadeIn"),e.src=n}))},i=new IntersectionObserver((function(e,t){e.forEach((function(e){e.intersectionRatio>0&&o(e.target)}))}),{root:null,rootMargin:"0px",threshold:.1});r.forEach((function(e){"IntersectionObserver"in window?i.observe(e):o(e)}))}()}]);