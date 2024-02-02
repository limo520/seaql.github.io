"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[18892],{48859:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(31308),a=(r(76687),r(48859));const o={},i="What is an ORM",l={unversionedId:"introduction/orm",id:"version-0.6.x/introduction/orm",title:"What is an ORM",description:"An Object Relational Mapper (ORM) is a programming library to help you interact with a relational database from an Object-Oriented Programming (OOP) language.",source:"@site/versioned_docs/version-0.6.x/01-introduction/01-orm.md",sourceDirName:"01-introduction",slug:"/introduction/orm",permalink:"/SeaORM/docs/0.6.x/introduction/orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/01-introduction/01-orm.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1706865129,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/SeaORM/docs/0.6.x/index"},next:{title:"Async Programming",permalink:"/SeaORM/docs/0.6.x/introduction/async"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-an-orm"},"What is an ORM"),(0,a.kt)("p",null,"An Object Relational Mapper (ORM) is a programming library to help you interact with a relational database from an Object-Oriented Programming (OOP) language."),(0,a.kt)("p",null,"Tables and columns in a database are mapped to objects and attributes, while additional methods allow you to load and store data from and to the database."),(0,a.kt)("p",null,"Services built in Rust are lightweight (small binary size, low memory usage), safe (with compile-time guarantee), correct (if unit tests are well-designed), and fast (compile-time optimizations minimize runtime overhead)."),(0,a.kt)("p",null,"Due to Rust being a static, strongly typed, compiled, thread-safe, non-garbage-collected, and unconventional object-oriented language, working with an ORM in Rust is a bit different from other scripting languages you are already familiar with."),(0,a.kt)("p",null,"SeaORM tries to help you in reaping the above benefits while avoiding the hiccups when programming in Rust."),(0,a.kt)("p",null,"Without further ado, let's get started."))}p.isMDXComponent=!0}}]);