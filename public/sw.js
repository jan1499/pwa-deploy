if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>i(e,n),d={module:{uri:n},exports:r,require:o};s[n]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-00a24876"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1a8014940cb391ed9d1c0b333d5a9a6d"},{url:"/_next/static/BRBRR0sMxjChZM51ypOKs/_buildManifest.js",revision:"ad054297f858556d37fecce8998a66b3"},{url:"/_next/static/BRBRR0sMxjChZM51ypOKs/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-b7c45be92b62912c.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/23-ff9119f68ad6c87e.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/231-972c5705dfb595cd.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/444-ead01ef5135d0ea6.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/46-d2a7a49a719d1dd2.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/472-61913167e274c096.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/(auth)/login/page-d4611555d5ea0d44.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/(auth)/login/resetpassword/page-e5b63b35f4b9de4f.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/(auth)/signup/page-f1934c07971855f8.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/_not-found/page-3e027ae1f45fd8fa.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/layout-ca3311cde4b1b6d8.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/page-87f87bba973d57c6.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/taskflow/layout-9f4a0ac1db5b4983.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/taskflow/page-ae0b97272e9c93ce.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/app/taskflow/your-work/page-c630a880827118d8.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/fd9d1056-2aef084df2650b8c.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/main-app-e2837b51741aa0d6.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/main-d880cb0b28270e26.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d96c70349528979d.js",revision:"BRBRR0sMxjChZM51ypOKs"},{url:"/_next/static/css/a2f87917799d1020.css",revision:"a2f87917799d1020"},{url:"/_next/static/css/e523f80203514a76.css",revision:"e523f80203514a76"},{url:"/_next/static/css/ed2b9354ceb36326.css",revision:"ed2b9354ceb36326"},{url:"/_next/static/media/dp2.f8381d6a.svg",revision:"c39d034128b9cd05d844e504d5ee167e"},{url:"/_next/static/media/google.c40fa2c4.svg",revision:"1651d8b87f0961b52b759a8169341659"},{url:"/_next/static/media/logo.498d776e.svg",revision:"313460ef8601a079432270d1b5584597"},{url:"/icons/all-layers-svgrepo-com.svg",revision:"713235ce38ad03c69166143a75904e12"},{url:"/icons/backlog-svgrepo-com (1).svg",revision:"3a9122ce04052fa58c4539d3c7dec92b"},{url:"/icons/backlog-svgrepo-com.svg",revision:"fc3d4b288024357bb6c712ad552788d8"},{url:"/icons/board-svgrepo-com.svg",revision:"e786ade039c27362a3ce80015e8de7a6"},{url:"/icons/bug-svgrepo-com.svg",revision:"2364faa6707f9f0a36ff10297f139cc3"},{url:"/icons/jira-svgrepo-com.svg",revision:"178d51c85dd4f529fb0d94480e9da4c8"},{url:"/icons/plus-circle-svgrepo-com.svg",revision:"39800c2c1dcf81a28264e70a58352f64"},{url:"/images/android-chrome-192x192.png",revision:"2d78b6392f385ad84fe860d9ce6844ca"},{url:"/images/android-chrome-512x512.png",revision:"920a36834be4c131c80243ab44355556"},{url:"/images/apple-touch-icon.png",revision:"2ac95917099539c51923a8af4181b1de"},{url:"/images/apple.svg",revision:"702a44203a4506f1b3ca73126b7cc51f"},{url:"/images/bar.svg",revision:"921acb0a5fa445b1c4d5c2203c8e6c04"},{url:"/images/dele.svg",revision:"d826ed0cdfde9783c5ea7e54827dc405"},{url:"/images/dp.svg",revision:"de9fc29149210cc1d6280ad181157b7f"},{url:"/images/dp1.svg",revision:"a2e3c5cc237517ca46a6f118ba40c21e"},{url:"/images/dp2.svg",revision:"c39d034128b9cd05d844e504d5ee167e"},{url:"/images/dp3.svg",revision:"309a4333bdf1bd39c0483301e58884b6"},{url:"/images/dp4.svg",revision:"8d4f93427f072c271fa1b93c2b5a7568"},{url:"/images/dp5.svg",revision:"c273eb600e90e95c644b58c0011dc98f"},{url:"/images/dp6.svg",revision:"ed14cf8b80e96f9b3981fa79b4510f13"},{url:"/images/dp7.svg",revision:"27c31430814dd42c7834bb8c4aa7a660"},{url:"/images/dp8.svg",revision:"9178ae87319fab2107e92effb9ec37c4"},{url:"/images/dp9.svg",revision:"0981db4ab5f3aeeb41e0aabaa089ea3a"},{url:"/images/edit.svg",revision:"cb6243dd1a919272e2cb1a650944dfcd"},{url:"/images/favicon-16x16.png",revision:"872aabd854733f4c3821e2e8c93ce876"},{url:"/images/favicon-32x32.png",revision:"1e5c7de82970f5dbc4b5c7ed554b34e8"},{url:"/images/github.svg",revision:"6d10f267615e42f226aa7a9bb58f5917"},{url:"/images/google.svg",revision:"1651d8b87f0961b52b759a8169341659"},{url:"/images/linkedin.svg",revision:"7cdcd269c329f838d50ff94b0387fcd8"},{url:"/images/linkedin1.svg",revision:"49d1b0d48e87ce431822aee6389c8c0b"},{url:"/images/logo-black.svg",revision:"3cddd714d27b8ed8fc0849cc0ae919d7"},{url:"/images/logo-color.svg",revision:"1cf287762bbc6b20fd65eae146c17ef7"},{url:"/images/logo-no-background.svg",revision:"e321fdfa8c739ed9e429fa470ecc42b0"},{url:"/images/logo-white.svg",revision:"de05dfcae5e9fb405407d3cd9f20834a"},{url:"/images/logo.svg",revision:"313460ef8601a079432270d1b5584597"},{url:"/images/microsoft.svg",revision:"ef2908be78499121003743520e59cf9e"},{url:"/images/user.svg",revision:"3c183c76ce632678a641e35a2bb82369"},{url:"/pwaicons/apple-touch-icon.png",revision:"2ac95917099539c51923a8af4181b1de"},{url:"/pwaicons/icon-16x16.png",revision:"872aabd854733f4c3821e2e8c93ce876"},{url:"/pwaicons/icon-192x192.png",revision:"2d78b6392f385ad84fe860d9ce6844ca"},{url:"/pwaicons/icon-32x32.png",revision:"1e5c7de82970f5dbc4b5c7ed554b34e8"},{url:"/pwaicons/icon-512x512.png",revision:"920a36834be4c131c80243ab44355556"},{url:"/service-worker.js",revision:"6f2da945e347cbc3bb9665de95ed2b87"},{url:"/styles/bootstrap.css",revision:"8938ebea7cb45c9f3c29aef884521dfa"},{url:"/styles/component.css",revision:"dd7e1a5d04b841459edfc447a3a6aca0"},{url:"/styles/globals.css",revision:"138b329b5aebd1073c73d60409be16bb"},{url:"/styles/style.css",revision:"9dda52e0655820e7e9a93923c7a37f77"},{url:"/styles/utility.css",revision:"c922b0ea1b274a618da87911a38681a3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(googleapis|gstatic)\.com/,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/your-api-url\.com\//,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/cdn.jsdelivr.net/,new e.CacheFirst({cacheName:"jsdelivr-cache",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3})]}),"GET")}));