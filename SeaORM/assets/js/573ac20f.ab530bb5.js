"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[58809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Transaction",s={unversionedId:"advanced-query/transaction",id:"version-0.12.x/advanced-query/transaction",title:"Transaction",description:"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs.",source:"@site/versioned_docs/version-0.12.x/08-advanced-query/06-transaction.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/transaction",permalink:"/SeaORM/docs/advanced-query/transaction",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/08-advanced-query/06-transaction.md",tags:[],version:"0.12.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1691628750,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sub Query",permalink:"/SeaORM/docs/advanced-query/subquery"},next:{title:"Streaming",permalink:"/SeaORM/docs/advanced-query/streaming"}},l={},c=[{value:"With a Closure",id:"with-a-closure",level:2},{value:"<code>begin</code> &amp; <code>commit</code> / <code>rollback</code>",id:"begin--commit--rollback",level:2},{value:"Nested transaction",id:"nested-transaction",level:2},{value:"Isolation Level and Access Mode",id:"isolation-level-and-access-mode",level:2},{value:"IsolationLevel",id:"isolationlevel",level:3},{value:"AccessMode",id:"accessmode",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs."),(0,r.kt)("h2",{id:"with-a-closure"},"With a Closure"),(0,r.kt)("p",null,"Perform a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.transaction"},"transaction with a closure"),". The transaction will be committed if the closure returned ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok"),", rollbacked if returned ",(0,r.kt)("inlineCode",{parentName:"p"},"Err"),". The 2nd and 3rd type parameters are the Ok and Err types respectively. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"async_closure")," is not yet stabilized, you have to ",(0,r.kt)("inlineCode",{parentName:"p"},"Pin<Box<_>>")," it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::TransactionTrait;\n\n// <Fn, A, B> -> Result<A, B>\ndb.transaction::<_, (), DbErr>(|txn| {\n    Box::pin(async move {\n        bakery::ActiveModel {\n            name: Set("SeaSide Bakery".to_owned()),\n            profit_margin: Set(10.4),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        bakery::ActiveModel {\n            name: Set("Top Bakery".to_owned()),\n            profit_margin: Set(15.0),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        Ok(())\n    })\n})\n.await;\n')),(0,r.kt)("p",null,"This is the preferred way for most cases. However, if you happen to run into an ",(0,r.kt)("em",{parentName:"p"},"impossible lifetime")," while trying to capture a reference in the async block, then the following API is the solution."),(0,r.kt)("h2",{id:"begin--commit--rollback"},(0,r.kt)("inlineCode",{parentName:"h2"},"begin")," & ",(0,r.kt)("inlineCode",{parentName:"h2"},"commit")," / ",(0,r.kt)("inlineCode",{parentName:"h2"},"rollback")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.begin"},(0,r.kt)("inlineCode",{parentName:"a"},"begin"))," the transaction followed by a ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"rollback"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"txn")," goes out of scope, the transaction is automatically rollbacked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let txn = db.begin().await?;\n\nbakery::ActiveModel {\n    name: Set("SeaSide Bakery".to_owned()),\n    profit_margin: Set(10.4),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\nbakery::ActiveModel {\n    name: Set("Top Bakery".to_owned()),\n    profit_margin: Set(15.0),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\ntxn.commit().await?;\n')),(0,r.kt)("h2",{id:"nested-transaction"},"Nested transaction"),(0,r.kt)("p",null,"Nested transaction is implemented with database's ",(0,r.kt)("inlineCode",{parentName:"p"},"SAVEPOINT"),". The example below illustrates the behavior with the closure API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(Bakery::find().all(txn).await?.len(), 0);\n\nctx.db.transaction::<_, _, DbErr>(|txn| {\n    Box::pin(async move {\n        let _ = bakery::ActiveModel {..}.save(txn).await?;\n        let _ = bakery::ActiveModel {..}.save(txn).await?;\n        assert_eq!(Bakery::find().all(txn).await?.len(), 2);\n\n        // Try nested transaction committed\n        txn.transaction::<_, _, DbErr>(|txn| {\n            Box::pin(async move {\n                let _ = bakery::ActiveModel {..}.save(txn).await?;\n                assert_eq!(Bakery::find().all(txn).await?.len(), 3);\n\n                // Try nested-nested transaction rollbacked\n                assert!(txn.transaction::<_, _, DbErr>(|txn| {\n                        Box::pin(async move {\n                            let _ = bakery::ActiveModel {..}.save(txn).await?;\n                            assert_eq!(Bakery::find().all(txn).await?.len(), 4);\n\n                            Err(DbErr::Query(RuntimeErr::Internal(\n                                "Force Rollback!".to_owned(),\n                            )))\n                        })\n                    })\n                    .await\n                    .is_err()\n                );\n\n                assert_eq!(Bakery::find().all(txn).await?.len(), 3);\n\n                // Try nested-nested transaction committed\n                txn.transaction::<_, _, DbErr>(|txn| {\n                    Box::pin(async move {\n                        let _ = bakery::ActiveModel {..}.save(txn).await?;\n                        assert_eq!(Bakery::find().all(txn).await?.len(), 4);\n\n                        Ok(())\n                    })\n                })\n                .await;\n\n                assert_eq!(Bakery::find().all(txn).await?.len(), 4);\n\n                Ok(())\n            })\n        })\n        .await;\n\n        Ok(())\n    })\n})\n.await;\n\nassert_eq!(Bakery::find().all(txn).await?.len(), 4);\n')),(0,r.kt)("h2",{id:"isolation-level-and-access-mode"},"Isolation Level and Access Mode"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("inlineCode",{parentName:"p"},"0.10.5"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.transaction_with_config"},(0,r.kt)("inlineCode",{parentName:"a"},"transaction_with_config"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.begin_with_config"},(0,r.kt)("inlineCode",{parentName:"a"},"begin_with_config"))," allows you to specify the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.IsolationLevel.html"},"IsolationLevel")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.AccessMode.html"},"AccessMode"),"."),(0,r.kt)("p",null,"For now, they are only implemented for MySQL and Postgres. In order to align their semantic difference, MySQL will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"SET TRANSACTION")," commands before begin transaction, while Postgres will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"SET TRANSACTION")," commands after begin transaction."),(0,r.kt)("h3",{id:"isolationlevel"},"IsolationLevel"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RepeatableRead"),": Consistent reads within the same transaction read the snapshot established by the first read."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReadCommitted"),": Each consistent read, even within the same transaction, sets and reads its own fresh snapshot."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReadUncommitted"),": SELECT statements are performed in a nonlocking fashion, but a possible earlier version of a row might be used."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Serializable"),": All statements of the current transaction can only see rows committed before the first query or data-modification statement was executed in this transaction."),(0,r.kt)("h3",{id:"accessmode"},"AccessMode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnly"),": Data can\u2019t be modified in this transaction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReadWrite"),": Data can be modified in this transaction (default)"))}p.isMDXComponent=!0}}]);