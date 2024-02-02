"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[9007],{48859:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(31308),r=(n(76687),n(48859));const o={},i="Debug Log",l={unversionedId:"install-and-config/debug-log",id:"install-and-config/debug-log",title:"Debug Log",description:"SeaORM logs debug messages via the tracing crate.",source:"@site/docs/02-install-and-config/03-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/SeaORM/docs/next/install-and-config/debug-log",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/02-install-and-config/03-debug-log.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1706865129,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Connection",permalink:"/SeaORM/docs/next/install-and-config/connection"},next:{title:"Setting Up Migration",permalink:"/SeaORM/docs/next/migration/setting-up-migration"}},s={},c=[{value:"SQLx Logging",id:"sqlx-logging",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debug-log"},"Debug Log"),(0,r.kt)("p",null,"SeaORM logs debug messages via the ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},(0,r.kt)("inlineCode",{parentName:"a"},"tracing"))," crate."),(0,r.kt)("p",null,"You can enable SeaORM's logging with the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug-print")," feature flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies.sea-orm]\nversion = "0.12"\nfeatures = ["debug-print"]\n')),(0,r.kt)("p",null,"You need to setup ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,r.kt)("inlineCode",{parentName:"a"},"tracing-subscriber"))," to capture and view the debug log. See the snippet below and a complete example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,r.kt)("p",null,"SeaORM's debug print injects parameters into the SQL string, which makes it easier to read. Instead of seeing ",(0,r.kt)("inlineCode",{parentName:"p"},'SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = $1'),", you will see ",(0,r.kt)("inlineCode",{parentName:"p"},'SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = 100'),"."),(0,r.kt)("h2",{id:"sqlx-logging"},"SQLx Logging"),(0,r.kt)("p",null,"SQLx also logs by default. If you turned on SeaORM's ",(0,r.kt)("inlineCode",{parentName:"p"},"debug-print"),", you can disable SQLx's log by passing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," to ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt\n    .sqlx_logging(false) // Disable SQLx log\n    .sqlx_logging_level(log::LevelFilter::Info); // Or set SQLx log level\n\nlet db = Database::connect(opt).await?;\n')))}g.isMDXComponent=!0}}]);