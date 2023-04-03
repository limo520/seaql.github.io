"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[632],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),h=a,y=f["".concat(p,".").concat(h)]||f[h]||u[h]||i;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1908:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={},o="Web API Layer",c={unversionedId:"architecture-of-graph-query-engine/web-api-layer",id:"architecture-of-graph-query-engine/web-api-layer",title:"Web API Layer",description:"The current implementation of the StarfishQL query engine handle requests with the rocket(crates.io) web framework.",source:"@site/docs/02-architecture-of-graph-query-engine/07-web-api-layer.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/web-api-layer",permalink:"/preview/pr-96/StarfishQL/docs/architecture-of-graph-query-engine/web-api-layer",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/07-web-api-layer.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680515546,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Querying Graph Data",permalink:"/preview/pr-96/StarfishQL/docs/architecture-of-graph-query-engine/querying-graph-data"},next:{title:"Overview",permalink:"/preview/pr-96/StarfishQL/docs/architecture-of-crates-io-crawler/overview"}},p={},l=[],s={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-api-layer"},"Web API Layer"),(0,a.kt)("p",null,"The current implementation of the StarfishQL query engine handle requests with the ",(0,a.kt)("inlineCode",{parentName:"p"},"rocket"),"(",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/rocket"},"crates.io"),") web framework."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/schema"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/mutate"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"/query")," endpoints are exposed for the corresponding class of operations."),(0,a.kt)("p",null,"For all operations, the server follows the exact same workflow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Parse the body of the POST request."),(0,a.kt)("li",{parentName:"ol"},"According to metadata extracted from the body, invoke the corresponding functions in the Rust structs.")),(0,a.kt)("p",null,"As such, the web API layer is separated from the operations layer, which is in the interest of maintainability."))}u.isMDXComponent=!0}}]);