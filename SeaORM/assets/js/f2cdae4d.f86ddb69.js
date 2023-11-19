"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[98042],{48859:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(76687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},l),{},{components:a})):n.createElement(f,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(31308),r=(a(76687),a(48859));const o={},i="SeaORM Concepts",s={unversionedId:"introduction/sea-orm",id:"version-0.6.x/introduction/sea-orm",title:"SeaORM Concepts",description:"In SeaORM, a database with a collection of tables is called a Schema.",source:"@site/versioned_docs/version-0.6.x/01-introduction/03-sea-orm.md",sourceDirName:"01-introduction",slug:"/introduction/sea-orm",permalink:"/SeaORM/docs/0.6.x/introduction/sea-orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/01-introduction/03-sea-orm.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1700393245,formattedLastUpdatedAt:"Nov 19, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Programming",permalink:"/SeaORM/docs/0.6.x/introduction/async"},next:{title:"Database & Async Runtime",permalink:"/SeaORM/docs/0.6.x/install-and-config/database-and-async-runtime"}},p={},c=[],l={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seaorm-concepts"},"SeaORM Concepts"),(0,r.kt)("p",null,"In SeaORM, a database with a collection of tables is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,r.kt)("p",null,"Each table corresponds to an ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/entity-structure#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))," in SeaORM, which helps you perform ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUD")," (Create, Read, Update, and Delete) operations on relevant tables."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," trait provides an API for you to inspect its properties (",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/entity-structure#column"},(0,r.kt)("inlineCode",{parentName:"a"},"Column")),", ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/entity-structure#relation"},(0,r.kt)("inlineCode",{parentName:"a"},"Relation"))," and ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/entity-structure#primary-key"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKey")),") at runtime."),(0,r.kt)("p",null,"Each table has multiple columns, which are referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute"),"."),(0,r.kt)("p",null,"These attributes and their values are grouped in a Rust struct (a ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/expanded-entity-structure#model"},(0,r.kt)("inlineCode",{parentName:"a"},"Model")),") so that you can manipulate them."),(0,r.kt)("p",null,"However, ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," is for read operations only. To perform insert, update, or delete, you need to use ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/expanded-entity-structure#active-model"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModel"))," which attaches meta-data on each attribute."),(0,r.kt)("p",null,"Finally, there is no singleton (global context) in SeaORM. Application code is responsible for managing the ownership of the ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/install-and-config/connection"},(0,r.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),". We do provide integration examples for web frameworks including ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"axum")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"poem")," to help you get started quickly."))}m.isMDXComponent=!0}}]);