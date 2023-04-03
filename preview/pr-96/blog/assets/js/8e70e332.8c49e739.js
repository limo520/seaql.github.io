"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[1158],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=c(a),d=n,v=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?r.createElement(v,i(i({ref:e},m),{},{components:a})):r.createElement(v,i({ref:e},m))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4661:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={slug:"2022-03-26-whats-new-in-0.7.0",title:"What's new in SeaORM 0.7.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,s={permalink:"/preview/pr-96/blog/2022-03-26-whats-new-in-0.7.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-03-26-whats-new-in-0.7.0.md",source:"@site/blog/2022-03-26-whats-new-in-0.7.0.md",title:"What's new in SeaORM 0.7.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.7.0 today! Here are some feature highlights \ud83c\udf1f:",date:"2022-03-26T00:00:00.000Z",formattedDate:"March 26, 2022",tags:[{label:"news",permalink:"/preview/pr-96/blog/tags/news"}],readingTime:4.965,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-03-26-whats-new-in-0.7.0",title:"What's new in SeaORM 0.7.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Introducing StarfishQL",permalink:"/preview/pr-96/blog/2022-04-04-introducing-starfish-ql"},nextItem:{title:"Google Summer of Code 2022",permalink:"/preview/pr-96/blog/gsoc-2022"}},l={authorsImageUrls:[void 0]},c=[{value:"Update ActiveModel by JSON",id:"update-activemodel-by-json",level:2},{value:"Support <code>time</code> crate in Model",id:"support-time-crate-in-model",level:2},{value:"Delete by Primary Key",id:"delete-by-primary-key",level:2},{value:"Paginate Results from Raw Query",id:"paginate-results-from-raw-query",level:2},{value:"Create Database Index",id:"create-database-index",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Community",id:"community",level:2},{value:"GSoC 2022",id:"gsoc-2022",level:2}],m={toc:c};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.7.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.7.0"))," today! Here are some feature highlights \ud83c\udf1f:"),(0,n.kt)("h2",{id:"update-activemodel-by-json"},"Update ActiveModel by JSON"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/492"},"#492"),"] If you want to save user input into the database you can easily convert JSON value into ActiveModel."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]\n#[sea_orm(table_name = "fruit")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    #[serde(skip_deserializing)] // Skip deserializing\n    pub id: i32,\n    pub name: String,\n    pub cake_id: Option<i32>,\n}\n')),(0,n.kt)("p",null,"Set the attributes in ActiveModel with ",(0,n.kt)("inlineCode",{parentName:"p"},"set_from_json")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// A ActiveModel with primary key set\nlet mut fruit = fruit::ActiveModel {\n    id: ActiveValue::Set(1),\n    name: ActiveValue::NotSet,\n    cake_id: ActiveValue::NotSet,\n};\n\n// Note that this method will not alter the primary key values in ActiveModel\nfruit.set_from_json(json!({\n    "id": 8,\n    "name": "Apple",\n    "cake_id": 1,\n}))?;\n\nassert_eq!(\n    fruit,\n    fruit::ActiveModel {\n        id: ActiveValue::Set(1),\n        name: ActiveValue::Set("Apple".to_owned()),\n        cake_id: ActiveValue::Set(Some(1)),\n    }\n);\n')),(0,n.kt)("p",null,"Create a new ActiveModel from JSON value with the ",(0,n.kt)("inlineCode",{parentName:"p"},"from_json")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let fruit = fruit::ActiveModel::from_json(json!({\n    "name": "Apple",\n}))?;\n\nassert_eq!(\n    fruit,\n    fruit::ActiveModel {\n        id: ActiveValue::NotSet,\n        name: ActiveValue::Set("Apple".to_owned()),\n        cake_id: ActiveValue::NotSet,\n    }\n);\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/qyihua"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/13034668?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"qltk")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"support-time-crate-in-model"},"Support ",(0,n.kt)("inlineCode",{parentName:"h2"},"time")," crate in Model"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/602"},"#602"),"] You can define datetime column in Model with ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," crate. You can migrate your Model originally defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"chrono")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," crate."),(0,n.kt)("p",null,"Model defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"chrono")," crate."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "transaction_log")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub date: Date, // chrono::NaiveDate\n    pub time: Time, // chrono::NaiveTime\n    pub date_time: DateTime, // chrono::NaiveDateTime\n    pub date_time_tz: DateTimeWithTimeZone, // chrono::DateTime<chrono::FixedOffset>\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,n.kt)("p",null,"Model defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," crate."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "transaction_log")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub date: TimeDate, // time::Date\n    pub time: TimeTime, // time::Time\n    pub date_time: TimeDateTime, // time::PrimitiveDateTime\n    pub date_time_tz: TimeDateTimeWithTimeZone, // time::OffsetDateTime\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tasn"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/108670?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Tom Hacohen")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"delete-by-primary-key"},"Delete by Primary Key"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/590"},"#590"),"] Instead of selecting ",(0,n.kt)("inlineCode",{parentName:"p"},"Model")," from the database then deleting it. You could also delete a row from database directly by its primary key."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let res: DeleteResult = Fruit::delete_by_id(38).exec(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/ShouvikGhosh2048"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/91585022?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Shouvik Ghosh")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Ilqjx"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/53934234?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Zhenwei Guo"))))),(0,n.kt)("h2",{id:"paginate-results-from-raw-query"},"Paginate Results from Raw Query"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/617"},"#617"),"] You can paginate ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.6.0/sea_orm/struct.SelectorRaw.html"},(0,n.kt)("inlineCode",{parentName:"a"},"SelectorRaw"))," and fetch ",(0,n.kt)("inlineCode",{parentName:"p"},"Model")," in batch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let mut cake_pages = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        vec![1.into()],\n    ))\n    .paginate(db, 50);\n \nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // Do something on cakes: Vec<cake::Model>\n}\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/cemoktra"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/15634263?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Bastian")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shinbunbun"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/34409044?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"shinbunbun"))))),(0,n.kt)("h2",{id:"create-database-index"},"Create Database Index"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/593"},"#593"),"] To create indexes in database instead of writing ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html"},(0,n.kt)("inlineCode",{parentName:"a"},"IndexCreateStatement"))," manually, you can derive it from ",(0,n.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/schema/struct.Schema.html#method.create_index_from_entity"},(0,n.kt)("inlineCode",{parentName:"a"},"Schema::create_index_from_entity")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query, tests_cfg::*, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nlet stmts = schema.create_index_from_entity(indexes::Entity);\nassert_eq!(stmts.len(), 2);\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index1_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index1Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[0]), builder.build(&idx));\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index2_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index2Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[1]), builder.build(&idx));\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/grtlr"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/3404250?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Jochen G\xf6rtler")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nickb937"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1443207?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Nick Burrett"))))),(0,n.kt)("h2",{id:"sponsor"},"Sponsor"),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," profile is up! If you feel generous, a small donation will be greatly appreciated."),(0,n.kt)("p",null,"A big shout out to our sponsors \ud83d\ude07:"),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/11241812?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Dean Sheather")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,n.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Unnamed Sponsor"))))),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,n.kt)("p",null,"Here is the roadmap for SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/8"},(0,n.kt)("inlineCode",{parentName:"a"},"0.8.x")),"."),(0,n.kt)("h2",{id:"gsoc-2022"},"GSoC 2022"),(0,n.kt)("p",null,"We are super excited to be selected as a Google Summer of Code 2022 mentor organization. Prospective contributors, please visit our ",(0,n.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/programs/2022/organizations/seaql"},"GSoC 2022 Organization Profile"),"!"))}u.isMDXComponent=!0}}]);