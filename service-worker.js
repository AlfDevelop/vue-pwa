if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const c=e=>r(e,o),t={module:{uri:o},exports:u,require:c};s[o]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),u)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-functions"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue-pwa/css/app.c03aa6c4.css",revision:null},{url:"/vue-pwa/custom-service-worker.js",revision:"caa9a5b71b04f966f6a3782dd2a8548f"},{url:"/vue-pwa/index.html",revision:"3b4dd6cef570a0c81d02e7d3abc79714"},{url:"/vue-pwa/js/about.32d21dec.js",revision:null},{url:"/vue-pwa/js/app.a0e298ef.js",revision:null},{url:"/vue-pwa/js/chunk-vendors.fd94ccaa.js",revision:null},{url:"/vue-pwa/manifest.json",revision:"0c2ffb24729680c413e37a534fadd1b6"},{url:"/vue-pwa/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
