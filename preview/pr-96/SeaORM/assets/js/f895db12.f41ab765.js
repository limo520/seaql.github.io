"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),v=n,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o="Save",s={unversionedId:"basic-crud/save",id:"version-0.10.x/basic-crud/save",title:"Save",description:"This is a helper method to save (insert / update) ActiveModel into the database.",source:"@site/versioned_docs/version-0.10.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/preview/pr-96/SeaORM/docs/0.10.x/basic-crud/save",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/05-basic-crud/04-save.md",tags:[],version:"0.10.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680515546,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/preview/pr-96/SeaORM/docs/0.10.x/basic-crud/update"},next:{title:"Delete",permalink:"/preview/pr-96/SeaORM/docs/0.10.x/basic-crud/delete"}},l={},c=[{value:"Save Behaviour",id:"save-behaviour",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"save"},"Save"),(0,n.kt)("p",null,"This is a helper method to save (insert / update) ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel")," into the database."),(0,n.kt)("h2",{id:"save-behaviour"},"Save Behaviour"),(0,n.kt)("p",null,"When saving an ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel"),", it will perform either insert or update depending on the primary key attribute:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Insert if primary key is ",(0,n.kt)("inlineCode",{parentName:"li"},"NotSet")),(0,n.kt)("li",{parentName:"ul"},"Update if primary key is ",(0,n.kt)("inlineCode",{parentName:"li"},"Set")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Unchanged"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," to insert or update an ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\nlet banana = fruit::ActiveModel {\n    id: NotSet, // primary key is NotSet\n    name: Set("Banana".to_owned()),\n    ..Default::default() // all other attributes are `NotSet`\n};\n\n// Insert, because primary key `id` is `NotSet`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// Update, because primary key `id` is `Unchanged`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n')))}d.isMDXComponent=!0}}]);