"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[12233],{48859:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(31308),r=(n(76687),n(48859));const i={},s="Create Index",o={unversionedId:"generate-database-schema/create-index",id:"version-0.7.x/generate-database-schema/create-index",title:"Create Index",description:"To create indexes in database instead of writing IndexCreateStatement manually, you can derive it from Entity using Schema::createindexfromentity. This method will help you create database indexes defined in Entity.",source:"@site/versioned_docs/version-0.7.x/04-generate-database-schema/03-create-index.md",sourceDirName:"04-generate-database-schema",slug:"/generate-database-schema/create-index",permalink:"/SeaORM/docs/0.7.x/generate-database-schema/create-index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/04-generate-database-schema/03-create-index.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1706384933,formattedLastUpdatedAt:"Jan 27, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Enum",permalink:"/SeaORM/docs/0.7.x/generate-database-schema/create-enum"},next:{title:"Setting Up Migration",permalink:"/SeaORM/docs/0.7.x/migration/setting-up-migration"}},d={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-index"},"Create Index"),(0,r.kt)("p",null,"To create indexes in database instead of writing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html"},(0,r.kt)("inlineCode",{parentName:"a"},"IndexCreateStatement"))," manually, you can derive it from ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_index_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_index_from_entity")),". This method will help you create database indexes defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,r.kt)("p",null,"Below we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/indexes.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"Indexes"))," entity to demo its generated SQL statement. You can construct the same statement with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html"},(0,r.kt)("inlineCode",{parentName:"a"},"IndexCreateStatement")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query, tests_cfg::*, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nlet stmts = schema.create_index_from_entity(indexes::Entity);\nassert_eq!(stmts.len(), 2);\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index1_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index1Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[0]), builder.build(&idx));\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index2_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index2Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[1]), builder.build(&idx));\n')))}m.isMDXComponent=!0}}]);