import{a as S,b as k,c as I,d as y,e as A,f as R,g as E}from"./chunk-OGLOGEFA.js";import{h as L}from"./chunk-2EFVKVVU.js";import{h as O,i as M}from"./chunk-MN6JOAZN.js";import{Ja as x,La as b,N as d,Na as n,Oa as r,Pa as c,Qa as w,Ra as P,S as f,Sa as _,Ta as i,Z as u,_ as g,c as l,ra as h,sa as v,v as s,ya as C}from"./chunk-QBMX6MGX.js";var V=[{path:"",loadComponent:()=>import("./chunk-AF7KIHTU.js").then(t=>t.HomeComponent)},{path:"services",loadComponent:()=>import("./chunk-G2SAH435.js").then(t=>t.ServicesComponent)},{path:"about",loadComponent:()=>import("./chunk-3W7J6Z75.js").then(t=>t.AboutComponent)},{path:"contact",loadComponent:()=>import("./chunk-2YHD6ESG.js").then(t=>t.ContactComponent)}];var j={providers:[R(V,E())]};var a=class t{constructor(e){this.router=e;this.router.events.pipe(s(o=>o instanceof k)).subscribe(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})}static \u0275fac=function(o){return new(o||t)(f(y))};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})};function N(t,e){if(t&1){let o=w();n(0,"button",8),P("click",function(){u(o);let T=_();return g(T.installPwa())}),i(1," Install App "),r()}}var p=class t{constructor(e){this.scrollService=e}deferredPrompt;showInstallButton=!1;ngOnInit(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e,this.showInstallButton=!0})}installPwa(){return l(this,null,function*(){if(!this.deferredPrompt)return;this.deferredPrompt.prompt();let{outcome:e}=yield this.deferredPrompt.userChoice;e==="accepted"&&(this.showInstallButton=!1),this.deferredPrompt=null})}static \u0275fac=function(o){return new(o||t)(v(a))};static \u0275cmp=C({type:t,selectors:[["app-root"]],decls:20,vars:1,consts:[[1,"header-content"],[1,"logo-container"],["routerLink","/",1,"logo-link"],["src","/icons/icon-1024x1024.png","alt","Va\u0161ke Logo",1,"logo"],["routerLink","/services"],["routerLink","/about"],["routerLink","/contact"],["class","install-button",3,"click",4,"ngIf"],[1,"install-button",3,"click"]],template:function(o,m){o&1&&(n(0,"header")(1,"div",0)(2,"div",1)(3,"a",2),c(4,"img",3),n(5,"h1"),i(6,"Va\u0161ke Removal Service"),r()()(),n(7,"nav")(8,"a",4),i(9,"Our Services"),r(),n(10,"a",5),i(11,"About Us"),r(),n(12,"a",6),i(13,"Contact"),r()()()(),n(14,"main"),c(15,"router-outlet"),r(),n(16,"footer")(17,"p"),i(18,"\xA9 2024 Va\u0161ke Removal Service. Professional Head Lice Treatment."),r()(),x(19,N,2,0,"button",7)),o&2&&(h(19),b("ngIf",m.showInstallButton))},dependencies:[I,A,M,O,L],styles:["header[_ngcontent-%COMP%]{background-color:var(--white);box-shadow:0 2px 4px #0000001a;padding:1rem}.header-content[_ngcontent-%COMP%]{max-width:1000px;margin:0 auto;display:flex;justify-content:space-between;align-items:center}.logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.logo[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:50%;object-fit:cover}.logo-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;text-decoration:none;color:inherit}nav[_ngcontent-%COMP%]{display:flex;gap:2rem}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-color);text-decoration:none;font-weight:500;transition:color .2s}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-color)}main[_ngcontent-%COMP%]{max-width:1000px;margin:2rem auto;padding:0 1rem;min-height:calc(100vh - 200px)}footer[_ngcontent-%COMP%]{background-color:var(--white);padding:1rem;text-align:center;border-top:1px solid #eee}.install-button[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;z-index:1000}@media (max-width: 768px){.header-content[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}nav[_ngcontent-%COMP%]{gap:1rem}}"]})};S(p,j).catch(t=>console.error(t));