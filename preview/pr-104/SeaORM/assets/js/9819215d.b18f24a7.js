"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[26533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},i="Custom Active Model",c={unversionedId:"advanced-query/custom-active-model",id:"version-0.4.x/advanced-query/custom-active-model",title:"Custom Active Model",description:"Creating your own struct with partial fields of a model, which implements IntoActiveModel that can be converted into an ActiveModel with the method intoactivemodel. For example, it can be used as a form submission in a REST API.",source:"@site/versioned_docs/version-0.4.x/08-advanced-query/08-custom-active-model.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-active-model",permalink:"/preview/pr-104/SeaORM/docs/0.4.x/advanced-query/custom-active-model",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/08-advanced-query/08-custom-active-model.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691125895,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:8,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Streaming",permalink:"/preview/pr-104/SeaORM/docs/0.4.x/advanced-query/streaming"},next:{title:"Traits and Types",permalink:"/preview/pr-104/SeaORM/docs/0.4.x/internal-design/trait-and-type"}},l={},d=[],s={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-active-model"},"Custom Active Model"),(0,a.kt)("p",null,"Creating your own struct with partial fields of a model, which implements ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoActiveModel")," that can be converted into an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," with the method ",(0,a.kt)("inlineCode",{parentName:"p"},"into_active_model"),". For example, it can be used as a form submission in a REST API."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IntoActiveValue")," trait allows converting ",(0,a.kt)("inlineCode",{parentName:"p"},"Option<T>")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveValue<T>")," with the method ",(0,a.kt)("inlineCode",{parentName:"p"},"into_active_value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Define regular model as usual\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "fruit")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n    pub cake_id: Option<i32>,\n}\n')),(0,a.kt)("p",null,"Create a new struct with some fields omitted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DeriveIntoActiveModel)]\npub struct NewFruit {\n    // id is omitted\n    pub name: String,\n    // it is required as opposed to optional in Model\n    pub cake_id: i32,\n}\n\nassert_eq!(\n    NewFruit {\n        name: "Apple".to_owned(),\n        cake_id: 1,\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: Unset(None),\n        name: Set("Apple".to_owned()),\n        cake_id: Set(Some(1)),\n    }\n);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Option<Option<T>>")," allows for ",(0,a.kt)("inlineCode",{parentName:"p"},"Some(None)")," to update the column to be NULL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(DeriveIntoActiveModel)]\npub struct UpdateFruit {\n    pub cake_id: Option<Option<i32>>,\n}\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: Some(Some(1)),\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: Unset(None),\n        name: Unset(None),\n        cake_id: Set(Some(1)),\n    }\n);\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: Some(None),\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: Unset(None),\n        name: Unset(None),\n        cake_id: Set(None),\n    }\n);\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: None,\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: Unset(None),\n        name: Unset(None),\n        cake_id: Unset(None),\n    }\n);\n")))}p.isMDXComponent=!0}}]);