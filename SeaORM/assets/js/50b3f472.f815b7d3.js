"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[61542],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,y=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(31308),r=(n(76687),n(48859));const l={},o="Custom Select",s={unversionedId:"advanced-query/custom-select",id:"version-0.11.x/advanced-query/custom-select",title:"Custom Select",description:"By default, SeaORM will select all columns defined in the Column enum. You can override the defaults if you wish to select certain columns only.",source:"@site/versioned_docs/version-0.11.x/08-advanced-query/01-custom-select.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-select",permalink:"/SeaORM/docs/0.11.x/advanced-query/custom-select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/08-advanced-query/01-custom-select.md",tags:[],version:"0.11.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1700393245,formattedLastUpdatedAt:"Nov 19, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using SQLite",permalink:"/SeaORM/docs/0.11.x/write-test/sqlite"},next:{title:"Conditional Expressions",permalink:"/SeaORM/docs/0.11.x/advanced-query/conditional-expression"}},i={},c=[{value:"Select Partial Attributes",id:"select-partial-attributes",level:2},{value:"Select Custom Expressions",id:"select-custom-expressions",level:2},{value:"Handling Select Results",id:"handling-select-results",level:2},{value:"Custom Struct",id:"custom-struct",level:3},{value:"Unstructured Tuple",id:"unstructured-tuple",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-select"},"Custom Select"),(0,r.kt)("p",null,"By default, SeaORM will select all columns defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," enum. You can override the defaults if you wish to select certain columns only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting all columns\nassert_eq!(\n    cake::Entity::find()\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("h2",{id:"select-partial-attributes"},"Select Partial Attributes"),(0,r.kt)("p",null,"Clear the default selection by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"select_only")," method. Then, you can select some of the attributes or custom expressions afterwards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Selecting the name column only\nassert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("p",null,"If you want to select multiple attributes at once, you can supply an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .columns([cake::Column::Id, cake::Column::Name])\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("p",null,"Advanced example: conditionally select all columns except a specific column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .columns(cake::Column::iter().filter(|col| match col {\n            cake::Column::Id => false,\n            _ => true,\n        }))\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake""#\n);\n')),(0,r.kt)("h2",{id:"select-custom-expressions"},"Select Custom Expressions"),(0,r.kt)("p",null,"Select any custom expression with ",(0,r.kt)("inlineCode",{parentName:"p"},"column_as")," method, it takes any ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr"))," and an alias. Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sea_query::Expr"))," helper to build ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleExpr"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::{Alias, Expr};\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")\n        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#\n);\n')),(0,r.kt)("h2",{id:"handling-select-results"},"Handling Select Results"),(0,r.kt)("h3",{id:"custom-struct"},"Custom Struct"),(0,r.kt)("p",null,"You can use a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,r.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of a complex query. It is especially useful when dealing with custom columns or multiple joins which cannot directly be converted into models. It may be used to receive the result of any query, even raw SQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{FromQueryResult, JoinType, RelationTrait};\nuse sea_query::Expr;\n\n#[derive(FromQueryResult)]\nstruct CakeAndFillingCount {\n    id: i32,\n    name: String,\n    count: i32,\n}\n\nlet cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()\n    .column_as(filling::Column::Id.count(), "count")\n    .join_rev(\n        // construct `RelationDef` on the fly\n        JoinType::InnerJoin,\n        cake_filling::Entity::belongs_to(cake::Entity)\n            .from(cake_filling::Column::CakeId)\n            .to(cake::Column::Id)\n            .into()\n    )\n    // reuse a `Relation` from existing Entity\n    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n    .group_by(cake::Column::Id)\n    .into_model::<CakeAndFillingCount>()\n    .all(db)\n    .await?;\n')),(0,r.kt)("h3",{id:"unstructured-tuple"},"Unstructured Tuple"),(0,r.kt)("p",null,"You can select a tuple (or single value) with the ",(0,r.kt)("inlineCode",{parentName:"p"},"into_tuple")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\nlet res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column(cake::Column::Name)\n    .column(cake::Column::Id.count())\n    .group_by(cake::Column::Name)\n    .into_tuple()\n    .all(&db)\n    .await?;\n")))}d.isMDXComponent=!0}}]);