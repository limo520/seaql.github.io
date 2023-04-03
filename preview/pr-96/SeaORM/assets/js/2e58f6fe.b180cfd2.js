"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Debug Log",l={unversionedId:"install-and-config/debug-log",id:"version-0.6.x/install-and-config/debug-log",title:"Debug Log",description:"SeaORM (with debug-print feature turned on) logs debug messages via the tracing crate.",source:"@site/versioned_docs/version-0.6.x/02-install-and-config/04-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/preview/pr-96/SeaORM/docs/0.6.x/install-and-config/debug-log",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/02-install-and-config/04-debug-log.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680515546,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection Pool",permalink:"/preview/pr-96/SeaORM/docs/0.6.x/install-and-config/connection"},next:{title:"Using sea-orm-cli",permalink:"/preview/pr-96/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-log"},"Debug Log"),(0,a.kt)("p",null,"SeaORM (with ",(0,a.kt)("inlineCode",{parentName:"p"},"debug-print")," feature turned on) logs debug messages via the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},(0,a.kt)("inlineCode",{parentName:"a"},"tracing"))," crate."),(0,a.kt)("p",null,"You need to setup ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,a.kt)("inlineCode",{parentName:"a"},"tracing-subscriber"))," to capture and view the debug log. See the snippet below and a complete example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,a.kt)("p",null,"To filter debug log from ",(0,a.kt)("inlineCode",{parentName:"p"},"sea_orm"),", you can:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm\n[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1\n")))}u.isMDXComponent=!0}}]);