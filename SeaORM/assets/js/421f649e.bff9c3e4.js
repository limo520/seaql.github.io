"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[24903],{48859:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>d});var r=t(76687);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},f),{},{components:t})):r.createElement(m,a({ref:n},f))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},28962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(31308),i=(t(76687),t(48859));const o={},a="Self Referencing",l={unversionedId:"relation/self-referencing",id:"version-0.7.x/relation/self-referencing",title:"Self Referencing",description:"In previous section, we introduced the Linked trait. It can also help you define self referencing relations.",source:"@site/versioned_docs/version-0.7.x/07-relation/05-self-referencing.md",sourceDirName:"07-relation",slug:"/relation/self-referencing",permalink:"/SeaORM/docs/0.7.x/relation/self-referencing",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/07-relation/05-self-referencing.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1700393245,formattedLastUpdatedAt:"Nov 19, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chained Relations",permalink:"/SeaORM/docs/0.7.x/relation/chained-relations"},next:{title:"Bakery Schema",permalink:"/SeaORM/docs/0.7.x/relation/bakery-schema"}},c={},s=[],f={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"self-referencing"},"Self Referencing"),(0,i.kt)("p",null,"In previous section, we introduced the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/trait.Linked.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Linked"))," trait. It can also help you define self referencing relations."),(0,i.kt)("p",null,"The following example defines an Entity that references itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "self_join")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub uuid: Uuid,\n    pub uuid_ref: Option<Uuid>,\n    pub time: Option<Time>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(belongs_to = "Entity", from = "Column::UuidRef", to = "Column::Uuid")]\n    SelfReferencing,\n}\n\npub struct SelfReferencingLink;\n\nimpl Linked for SelfReferencingLink {\n    type FromEntity = Entity;\n\n    type ToEntity = Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![Relation::SelfReferencing.def()]\n    }\n}\n')))}u.isMDXComponent=!0}}]);