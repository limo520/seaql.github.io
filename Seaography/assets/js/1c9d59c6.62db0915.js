"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Generated project structure",l={unversionedId:"generated-project-structure",id:"version-0.3.0/generated-project-structure",title:"Generated project structure",description:"On this article we will describe the generated project structure.",source:"@site/versioned_docs/version-0.3.0/03-generated-project-structure.md",sourceDirName:".",slug:"/generated-project-structure",permalink:"/Seaography/docs/generated-project-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/versioned_docs/version-0.3.0/03-generated-project-structure.md",tags:[],version:"0.3.0",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1691628750,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running the example",permalink:"/Seaography/docs/running-example"},next:{title:"Extending generated code",permalink:"/Seaography/docs/extending-code"}},s={},c=[{value:"Entities",id:"entities",level:3},{value:"Example content:",id:"example-content",level:4},{value:"<code>sea_orm_active_enums.rs</code>",id:"sea_orm_active_enumsrs",level:3},{value:"Example content:",id:"example-content-1",level:4},{value:"<code>query_root.rs</code>",id:"query_rootrs",level:3},{value:"Example content:",id:"example-content-2",level:4},{value:"<code>lib.rs</code>",id:"librs",level:3},{value:"Example content:",id:"example-content-3",level:4},{value:"<code>main.rs</code>",id:"mainrs",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generated-project-structure"},"Generated project structure"),(0,a.kt)("p",null,"On this article we will describe the generated project structure."),(0,a.kt)("p",null,"All examples are based on ",(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/sakila/en/"},"https://dev.mysql.com/doc/sakila/en/")," database."),(0,a.kt)("h3",{id:"entities"},"Entities"),(0,a.kt)("p",null,"This folder contains all SeaORM entities."),(0,a.kt)("h4",{id:"example-content"},"Example content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![doc = "SeaORM Entity. Generated by sea-orm-codegen 0.9.1"]\nuse sea_orm::entity::prelude::*;\n#[derive(Copy, Clone, Default, Debug, DeriveEntity)]\npub struct Entity;\nimpl EntityName for Entity {\n    fn table_name(&self) -> &str {\n        "actor"\n    }\n}\n#[derive(\n    Clone,\n    Debug,\n    PartialEq,\n    DeriveModel,\n    DeriveActiveModel,\n    async_graphql::SimpleObject,\n    seaography::macros::Filter,\n)]\n#[sea_orm(table_name = "actor")]\n#[graphql(complex)]\n#[graphql(name = "Actor")]\npub struct Model {\n    pub actor_id: u16,\n    pub first_name: String,\n    pub last_name: String,\n    pub last_update: DateTimeUtc,\n}\n#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\npub enum Column {\n    ActorId,\n    FirstName,\n    LastName,\n    LastUpdate,\n}\n#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]\npub enum PrimaryKey {\n    ActorId,\n}\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = u16;\n    fn auto_increment() -> bool {\n        true\n    }\n}\n#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    FilmActor,\n}\nimpl ColumnTrait for Column {\n    type EntityName = Entity;\n    fn def(&self) -> ColumnDef {\n        match self {\n            Self::ActorId => ColumnType::SmallUnsigned.def(),\n            Self::FirstName => ColumnType::String(Some(45u32)).def(),\n            Self::LastName => ColumnType::String(Some(45u32)).def(),\n            Self::LastUpdate => ColumnType::Timestamp.def(),\n        }\n    }\n}\n#[seaography::macros::relation]\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::FilmActor => Entity::has_many(super::film_actor::Entity).into(),\n        }\n    }\n}\nimpl Related<super::film_actor::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::FilmActor.def()\n    }\n}\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,a.kt)("h3",{id:"sea_orm_active_enumsrs"},(0,a.kt)("inlineCode",{parentName:"h3"},"sea_orm_active_enums.rs")),(0,a.kt)("p",null,"This file contains all database enumerations."),(0,a.kt)("h4",{id:"example-content-1"},"Example content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![doc = "SeaORM Entity. Generated by sea-orm-codegen 0.9.1"]\nuse sea_orm::entity::prelude::*;\n#[derive(\n    Debug,\n    Clone,\n    PartialEq,\n    EnumIter,\n    DeriveActiveEnum,\n    Eq,\n    Copy,\n    async_graphql::Enum,\n    seaography::macros::EnumFilter,\n)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "rating")]\npub enum Rating {\n    #[sea_orm(string_value = "G")]\n    G,\n    #[sea_orm(string_value = "PG")]\n    Pg,\n    #[sea_orm(string_value = "PG-13")]\n    Pg13,\n    #[sea_orm(string_value = "R")]\n    R,\n    #[sea_orm(string_value = "NC-17")]\n    Nc17,\n}\n')),(0,a.kt)("h3",{id:"query_rootrs"},(0,a.kt)("inlineCode",{parentName:"h3"},"query_root.rs")),(0,a.kt)("p",null,"Contains the QueryRoot for the GraphQL entities queries."),(0,a.kt)("h4",{id:"example-content-2"},"Example content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, seaography::macros::QueryRoot)]\n#[seaography(entity = "crate::entities::category")]\n#[seaography(entity = "crate::entities::film_actor")]\n#[seaography(entity = "crate::entities::staff")]\n#[seaography(entity = "crate::entities::store")]\n#[seaography(entity = "crate::entities::film_text")]\n#[seaography(entity = "crate::entities::film_category")]\n#[seaography(entity = "crate::entities::customer")]\n#[seaography(entity = "crate::entities::address")]\n#[seaography(entity = "crate::entities::language")]\n#[seaography(entity = "crate::entities::city")]\n#[seaography(entity = "crate::entities::payment")]\n#[seaography(entity = "crate::entities::rental")]\n#[seaography(entity = "crate::entities::country")]\n#[seaography(entity = "crate::entities::actor")]\n#[seaography(entity = "crate::entities::film")]\n#[seaography(entity = "crate::entities::inventory")]\npub struct QueryRoot;\n')),(0,a.kt)("h3",{id:"librs"},(0,a.kt)("inlineCode",{parentName:"h3"},"lib.rs")),(0,a.kt)("p",null,"Contains the OrmDataLoader that we extend to provide entities relations loaders."),(0,a.kt)("h4",{id:"example-content-3"},"Example content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::prelude::*;\npub mod entities;\npub mod query_root;\npub use query_root::QueryRoot;\npub struct OrmDataloader {\n    pub db: DatabaseConnection,\n}\n")),(0,a.kt)("h3",{id:"mainrs"},(0,a.kt)("inlineCode",{parentName:"h3"},"main.rs")),(0,a.kt)("p",null,"Establish the database connection, constructs the GraphQL context and serves the API."))}p.isMDXComponent=!0}}]);