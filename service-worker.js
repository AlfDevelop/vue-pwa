if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-functions"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.c03aa6c4.css",revision:null},{url:"/index.html",revision:"3c1d1bfe43957355ce40c7b6a1e99e0a"},{url:"/js/about.32d21dec.js",revision:null},{url:"/js/app.cd3b1125.js",revision:null},{url:"/js/chunk-vendors.fd94ccaa.js",revision:null},{url:"/manifest.json",revision:"b9ae15754cadf1354d5a3c8d1753f4a7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
