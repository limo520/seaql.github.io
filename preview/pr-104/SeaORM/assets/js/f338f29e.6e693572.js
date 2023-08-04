"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[25739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return r?i.createElement(m,o(o({ref:t},u),{},{components:r})):i.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},73705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(87462),a=(r(67294),r(3905));const n={},o="Compare with Diesel",s={unversionedId:"internal-design/diesel",id:"version-0.12.x/internal-design/diesel",title:"Compare with Diesel",description:"SeaORM and Diesel share the same goal: to offer you a complete solution in interfacing with databases.",source:"@site/versioned_docs/version-0.12.x/11-internal-design/03-diesel.md",sourceDirName:"11-internal-design",slug:"/internal-design/diesel",permalink:"/preview/pr-104/SeaORM/docs/internal-design/diesel",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/11-internal-design/03-diesel.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691125895,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Derive Macros",permalink:"/preview/pr-104/SeaORM/docs/internal-design/derive-macro"},next:{title:"Architecture",permalink:"/preview/pr-104/SeaORM/docs/internal-design/architecture"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Programming paradigm",id:"programming-paradigm",level:2},{value:"Schema Builder",id:"schema-builder",level:2},{value:"Similarities",id:"similarities",level:2},{value:"Final words",id:"final-words",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compare-with-diesel"},"Compare with Diesel"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/diesel-rs/diesel"},"Diesel")," share the same goal: to offer you a complete solution in interfacing with databases."),(0,a.kt)("p",null,"Both SeaORM and Diesel work with MySQL, PostgreSQL, and SQLite, so you aren't constrained going with either. While Diesel allows third parties to implement custom backends, SeaORM does not."),(0,a.kt)("p",null,"There are also other things we chose to do differently."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"First off, perhaps the number one requested feature, async Rust support. While using async may not offer you better performance today, programming in async is an architectural decision you have to make early on. By choosing SeaORM, we together look forward to Rust's async ecosystem maturing."),(0,a.kt)("p",null,"Under the hood, SeaORM together with ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},"SQLx")," offers you a pure Rust technology stack. Diesel uses native drivers by default and it may take some effort for you to replace it with a pure Rust driver. Each side has their pros and cons, so it's up to your preference."),(0,a.kt)("p",null,"SeaORM has a modular design. If you don't like the idea of an ORM, you'll definitely still want to use ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/sea-query"},"SeaQuery"),", the underlying query builder. It is lightweight and can be easily integrated into any project. The SeaQuery API is also available to you when using SeaORM, so you receive the benefits of high-level abstraction while still having the power of a flexible query builder when you need it."),(0,a.kt)("h2",{id:"programming-paradigm"},"Programming paradigm"),(0,a.kt)("p",null,"In addition to the sync vs async foundation, the biggest distinction between Diesel and SeaORM is static vs dynamic."),(0,a.kt)("p",null,"Diesel provides an everything-compile-time API where types can be checked entirely statically. You can also do dynamic queries with Diesel, but you'd lose some of the benefits of compile-time type-checking."),(0,a.kt)("p",null,"SeaORM is dynamic, in which things are established at runtime. It offers more flexibility. While you lose some compile-time checkings, SeaORM helps you to prove correctness by testing instead."),(0,a.kt)("p",null,"Both libraries make heavy use of traits and generics, but SeaORM generates less types: each column in Diesel is a struct (each struct impl several traits), while each column in SeaORM is an enum variant (all columns of an entity together form one enum, which impl some traits)."),(0,a.kt)("p",null,"There are also no deeply nested generics in SeaORM (e.g.",(0,a.kt)("inlineCode",{parentName:"p"},"A<B<C<D<E>>>>"),")."),(0,a.kt)("h2",{id:"schema-builder"},"Schema Builder"),(0,a.kt)("p",null,"While in the Diesel ecosystem there are awesome libraries like ",(0,a.kt)("a",{parentName:"p",href:"https://git.irde.st/spacekookie/barrel"},"barrel"),", SeaQL maintains the tools for schema building (SeaQuery) and management (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-schema"},"SeaSchema"),"). That means a familiar API and a unified experience."),(0,a.kt)("h2",{id:"similarities"},"Similarities"),(0,a.kt)("p",null,"Both Diesel and SeaORM are schema first, meaning it all starts from your existing database schema, instead of starting from your OOP classes."),(0,a.kt)("p",null,"Both Diesel and SeaORM are relational, meaning you can do complex joins with defined relations."),(0,a.kt)("h2",{id:"final-words"},"Final words"),(0,a.kt)("p",null,"Diesel is a well-established library in the Rust ecosystem. SeaORM is very new. Neither can replace the other. We hope that the Rust community will grow stronger together."))}d.isMDXComponent=!0}}]);