"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[6685],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>c});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(n),c=r,h=g["".concat(i,".").concat(c)]||g[c]||m[c]||o;return n?t.createElement(h,l(l({ref:a},u),{},{components:n})):t.createElement(h,l({ref:a},u))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3669:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const o={slug:"2022-12-02-whats-new-in-seaography-0.3.0",title:"What's new in Seaography 0.3.0",author:"SeaQL Team",author_title:"Panagiotis Karatakis",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},l=void 0,p={permalink:"/preview/pr-96/blog/2022-12-02-whats-new-in-seaography-0.3.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-12-02-whats-new-in-seaography-0.3.0.md",source:"@site/blog/2022-12-02-whats-new-in-seaography-0.3.0.md",title:"What's new in Seaography 0.3.0",description:"\ud83c\udf89 We are pleased to release Seaography 0.3.0! Here are some feature highlights \ud83c\udf1f:",date:"2022-12-02T00:00:00.000Z",formattedDate:"December 2, 2022",tags:[{label:"news",permalink:"/preview/pr-96/blog/tags/news"}],readingTime:3.285,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Panagiotis Karatakis",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-12-02-whats-new-in-seaography-0.3.0",title:"What's new in Seaography 0.3.0",author:"SeaQL Team",author_title:"Panagiotis Karatakis",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaQuery 0.28.0",permalink:"/preview/pr-96/blog/2022-12-30-whats-new-in-seaquery-0.28.0"},nextItem:{title:"What's new in SeaORM 0.10.x",permalink:"/preview/pr-96/blog/2022-11-10-whats-new-in-0.10.x"}},i={authorsImageUrls:[void 0]},s=[{value:"Dependency Upgrade",id:"dependency-upgrade",level:2},{value:"Support Self Referencing Relation",id:"support-self-referencing-relation",level:2},{value:"Web Framework Generator",id:"web-framework-generator",level:2},{value:"CLI Generator Option",id:"cli-generator-option",level:3},{value:"Actix",id:"actix",level:3},{value:"Poem",id:"poem",level:3},{value:"Related Query Enhancement",id:"related-query-enhancement",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Community",id:"community",level:2}],u={toc:s};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release Seaography ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/releases/tag/0.3.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.3.0")),"! Here are some feature highlights \ud83c\udf1f:"),(0,r.kt)("h2",{id:"dependency-upgrade"},"Dependency Upgrade"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/pull/93"},"#93"),"] We have upgraded a major dependency:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm"},(0,r.kt)("inlineCode",{parentName:"a"},"sea-orm"))," to 0.10")),(0,r.kt)("p",null,"You might need to upgrade the corresponding dependency in your application as well."),(0,r.kt)("h2",{id:"support-self-referencing-relation"},"Support Self Referencing Relation"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/pull/99"},"#99"),"] You can now query self referencing models and the inverse of it."),(0,r.kt)("p",null,"Self referencing relation should be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation")," enum, note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"belongs_to")," attribute must be ",(0,r.kt)("inlineCode",{parentName:"p"},'belongs_to = "Entity"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(\n    Clone, Debug, PartialEq, DeriveEntityModel,\n    async_graphql::SimpleObject, seaography::macros::Filter,\n)]\n#[sea_orm(table_name = "staff")]\n#[graphql(complex)]\n#[graphql(name = "Staff")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub staff_id: i32,\n    pub first_name: String,\n    pub last_name: String,\n    pub reports_to_id: Option<i32>,\n}\n\n#[derive(\n    Copy, Clone, Debug, EnumIter, DeriveRelation,\n    seaography::macros::RelationsCompact\n)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "Entity",\n        from = "Column::ReportsToId",\n        to = "Column::StaffId",\n    )]\n    SelfRef,\n}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,r.kt)("p",null,"Then, you can query the related models in GraphQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    staff {\n        nodes {\n            firstName\n            reportsToId\n            selfRefReverse {\n                staffId\n                firstName\n            }\n            selfRef {\n                staffId\n                firstName\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"The resulting JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "staff": {\n        "nodes": [\n            {\n                "firstName": "Mike",\n                "reportsToId": null,\n                "selfRefReverse": [\n                    {\n                        "staffId": 2,\n                        "firstName": "Jon"\n                    }\n                ],\n                "selfRef": null\n            },\n            {\n                "firstName": "Jon",\n                "reportsToId": 1,\n                "selfRefReverse": null,\n                "selfRef": {\n                    "staffId": 1,\n                    "firstName": "Mike"\n                }\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"web-framework-generator"},"Web Framework Generator"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/pull/74"},"#74"),"] You can generate ",(0,r.kt)("inlineCode",{parentName:"p"},"seaography")," project with either Actix or Poem as the web server."),(0,r.kt)("h3",{id:"cli-generator-option"},"CLI Generator Option"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"seaography-cli")," to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"seaography")," code with Actix or Poem as the web framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# The command take three arguments, generating project with Poem web framework by default\nseaography-cli <DATABASE_URL> <CRATE_NAME> <DESTINATION>\n\n# Generating project with Actix web framework\nseaography-cli -f actix <DATABASE_URL> <CRATE_NAME> <DESTINATION>\n\n# MySQL\nseaography-cli mysql://root:root@localhost/sakila seaography-mysql-example examples/mysql\n# PostgreSQL\nseaography-cli postgres://root:root@localhost/sakila seaography-postgres-example examples/postgres\n# SQLite\nseaography-cli sqlite://examples/sqlite/sakila.db seaography-sqlite-example examples/sqliteql\n")),(0,r.kt)("h3",{id:"actix"},"Actix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use async_graphql::{\n    dataloader::DataLoader,\n    http::{playground_source, GraphQLPlaygroundConfig},\n    EmptyMutation, EmptySubscription, Schema,\n};\nuse async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};\nuse sea_orm::Database;\nuse seaography_example_project::*;\n// ...\n\nasync fn graphql_playground() -> Result<HttpResponse> {\n    Ok(HttpResponse::Ok()\n        .content_type("text/html; charset=utf-8")\n        .body(\n            playground_source(GraphQLPlaygroundConfig::new("http://localhost:8000"))\n        ))\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    // ...\n\n    let database = Database::connect(db_url).await.unwrap();\n    let orm_dataloader: DataLoader<OrmDataloader> = DataLoader::new(\n        OrmDataloader {\n            db: database.clone(),\n        },\n        tokio::spawn,\n    );\n\n    let schema = Schema::build(QueryRoot, EmptyMutation, EmptySubscription)\n        .data(database)\n        .data(orm_dataloader)\n        .finish();\n\n    let app = App::new()\n        .app_data(Data::new(schema.clone()))\n        .service(web::resource("/").guard(guard::Post()).to(index))\n        .service(web::resource("/").guard(guard::Get()).to(graphql_playground));\n\n    HttpServer::new(app)\n        .bind("127.0.0.1:8000")?\n        .run()\n        .await\n}\n')),(0,r.kt)("h3",{id:"poem"},"Poem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use async_graphql::{\n    dataloader::DataLoader,\n    http::{playground_source, GraphQLPlaygroundConfig},\n    EmptyMutation, EmptySubscription, Schema,\n};\nuse async_graphql_poem::GraphQL;\nuse poem::{handler, listener::TcpListener, web::Html, IntoResponse, Route, Server};\nuse sea_orm::Database;\nuse seaography_example_project::*;\n// ...\n\n#[handler]\nasync fn graphql_playground() -> impl IntoResponse {\n    Html(playground_source(GraphQLPlaygroundConfig::new("/")))\n}\n\n#[tokio::main]\nasync fn main() {\n    // ...\n\n    let database = Database::connect(db_url).await.unwrap();\n    let orm_dataloader: DataLoader<OrmDataloader> = DataLoader::new(\n        OrmDataloader { db: database.clone() },\n        tokio::spawn,\n    );\n\n    let schema = Schema::build(QueryRoot, EmptyMutation, EmptySubscription)\n        .data(database)\n        .data(orm_dataloader)\n        .finish();\n\n    let app = Route::new()\n        .at("/", get(graphql_playground)\n        .post(GraphQL::new(schema)));\n\n    Server::new(TcpListener::bind("0.0.0.0:8000"))\n        .run(app)\n        .await\n        .unwrap();\n}\n')),(0,r.kt)("h2",{id:"related-query-enhancement"},"Related Query Enhancement"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography/pull/84"},"#84"),"] Filtering, sorting and paginating related 1-to-many queries. Note that the pagination is work-in-progress, currently it is in memory pagination."),(0,r.kt)("p",null,"For example, find all inactive customers, include their address, and their payments with amount greater than 7 ordered by amount the second result. You can execute the query below at our ",(0,r.kt)("a",{parentName:"p",href:"https://playground.sea-ql.org/seaography"},"GraphQL playground"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  customer(\n    filters: { active: { eq: 0 } }\n    pagination: { cursor: { limit: 3, cursor: "Int[3]:271" } }\n  ) {\n    nodes {\n      customerId\n      lastName\n      email\n      address {\n        address\n      }\n      payment(\n        filters: { amount: { gt: "7" } }\n        orderBy: { amount: ASC }\n        pagination: { pages: { limit: 1, page: 1 } }\n      ) {\n        nodes {\n          paymentId\n          amount\n        }\n        pages\n        current\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n        }\n      }\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      endCursor\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,r.kt)("p",null,"We have the following examples for you, alongside with the SQL scripts to initialize the database."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/mysql"},"MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/postgres"},"PostgreSQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/seaography/tree/main/examples/sqlite"},"SQLite"))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."))}m.isMDXComponent=!0}}]);