"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[21491],{48859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(31308),r=(n(76687),n(48859));const o={},i="Transaction",c={unversionedId:"advanced-query/transaction",id:"version-0.10.x/advanced-query/transaction",title:"Transaction",description:"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs.",source:"@site/versioned_docs/version-0.10.x/08-advanced-query/06-transaction.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/transaction",permalink:"/SeaORM/docs/0.10.x/advanced-query/transaction",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/08-advanced-query/06-transaction.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705419845,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sub Query",permalink:"/SeaORM/docs/0.10.x/advanced-query/subquery"},next:{title:"Streaming",permalink:"/SeaORM/docs/0.10.x/advanced-query/streaming"}},l={},s=[{value:"Within a <code>Closure</code>",id:"within-a-closure",level:2},{value:"<code>begin</code> &amp; <code>commit</code> / <code>rollback</code>",id:"begin--commit--rollback",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs."),(0,r.kt)("h2",{id:"within-a-closure"},"Within a ",(0,r.kt)("inlineCode",{parentName:"h2"},"Closure")),(0,r.kt)("p",null,"The transaction will be committed if the closure returned ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok"),", rollbacked if returned ",(0,r.kt)("inlineCode",{parentName:"p"},"Err"),". The 2nd and 3rd type parameters are the Ok and Err types respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::TransactionTrait;\n\n// <Fn, A, B> -> Result<A, B>\ndb.transaction::<_, (), DbErr>(|txn| {\n    Box::pin(async move {\n        bakery::ActiveModel {\n            name: Set("SeaSide Bakery".to_owned()),\n            profit_margin: Set(10.4),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        bakery::ActiveModel {\n            name: Set("Top Bakery".to_owned()),\n            profit_margin: Set(15.0),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        Ok(())\n    })\n})\n.await;\n')),(0,r.kt)("p",null,"This is the preferred way for most cases. However, if you happen to run into an ",(0,r.kt)("em",{parentName:"p"},"impossible lifetime")," while trying to capture a reference in the async block, then the following API is the solution."),(0,r.kt)("h2",{id:"begin--commit--rollback"},(0,r.kt)("inlineCode",{parentName:"h2"},"begin")," & ",(0,r.kt)("inlineCode",{parentName:"h2"},"commit")," / ",(0,r.kt)("inlineCode",{parentName:"h2"},"rollback")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"begin")," the transaction followed by a ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"rollback"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"txn")," goes out of scope, the transaction is automatically rollbacked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let txn = db.begin().await?;\n\nbakery::ActiveModel {\n    name: Set("SeaSide Bakery".to_owned()),\n    profit_margin: Set(10.4),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\nbakery::ActiveModel {\n    name: Set("Top Bakery".to_owned()),\n    profit_margin: Set(15.0),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\ntxn.commit().await?;\n')))}p.isMDXComponent=!0}}]);