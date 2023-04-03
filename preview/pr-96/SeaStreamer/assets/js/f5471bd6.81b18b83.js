"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||l[u]||p;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const p={},o="Index",i={unversionedId:"index",id:"index",title:"Index",description:"1. Introduction",source:"@site/docs/01-index.md",sourceDirName:".",slug:"/index",permalink:"/preview/pr-96/SeaStreamer/docs/next/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/01-index.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680515546,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Intro to Stream Processing",permalink:"/preview/pr-96/SeaStreamer/docs/next/introduction/intro-to-streams"}},s={},c=[],m={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Introduction"),(0,n.kt)("p",{parentName:"li"},"1.1. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/introduction/intro-to-streams"},"Intro to Stream Processing")),(0,n.kt)("p",{parentName:"li"},"1.2. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/introduction/async-programming"},"Async Programming in Rust")),(0,n.kt)("p",{parentName:"li"},"1.3. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/introduction/sea-streamer"},"SeaStreamer Concepts"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Getting Started"),(0,n.kt)("p",{parentName:"li"},"2.1. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/getting-started/configuration"},"Configuring Features")),(0,n.kt)("p",{parentName:"li"},"2.2. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/getting-started/architecture"},"SeaStreamer Architecture")),(0,n.kt)("p",{parentName:"li"},"2.3. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/getting-started/examples"},"Example Processors"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SeaStreamer Semantics"),(0,n.kt)("p",{parentName:"li"},"3.1. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/streamer/streamer"},"Streamer")),(0,n.kt)("p",{parentName:"li"},"3.2. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/streamer/producer"},"Producer")),(0,n.kt)("p",{parentName:"li"},"3.3. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/streamer/consumer"},"Consumer"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connecting Stream Processors"),(0,n.kt)("p",{parentName:"li"},"4.1. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/processors/inter-process"},"Inter Process")),(0,n.kt)("p",{parentName:"li"},"4.2. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/processors/intra-process"},"Intra Process"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What's Next?"),(0,n.kt)("p",{parentName:"li"},"5.1. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/whats-next/roadmap"},"The Roadmap")),(0,n.kt)("p",{parentName:"li"},"5.2. ",(0,n.kt)("a",{parentName:"p",href:"/preview/pr-96/SeaStreamer/docs/next/whats-next/vision"},"The Vision")))))}l.isMDXComponent=!0}}]);