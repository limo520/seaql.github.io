"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[7471],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var r=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=r.createContext({}),m=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=m(a),u=o,d=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return a?r.createElement(d,n(n({ref:e},p),{},{components:a})):r.createElement(d,n({ref:e},p))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,n=new Array(i);n[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,n[1]=s;for(var m=2;m<i;m++)n[m]=a[m];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},417:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=a(7462),o=(a(7294),a(3905));const i={slug:"2022-05-15-whats-new-in-0.8.0",title:"What's new in SeaORM 0.8.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},n=void 0,s={permalink:"/preview/pr-104/blog/2022-05-15-whats-new-in-0.8.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-05-15-whats-new-in-0.8.0.md",source:"@site/blog/2022-05-15-whats-new-in-0.8.0.md",title:"What's new in SeaORM 0.8.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.8.0 today! Here are some feature highlights \ud83c\udf1f:",date:"2022-05-15T00:00:00.000Z",formattedDate:"May 15, 2022",tags:[{label:"news",permalink:"/preview/pr-104/blog/tags/news"}],readingTime:4.775,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-05-15-whats-new-in-0.8.0",title:"What's new in SeaORM 0.8.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Welcome Summer of Code 2022 Contributors",permalink:"/preview/pr-104/blog/2022-06-02-summer-of-code-2022-intro"},nextItem:{title:"SeaORM FAQ.01",permalink:"/preview/pr-104/blog/2022-05-14-faq-01"}},l={authorsImageUrls:[void 0]},m=[{value:"Migration Utilities Moved to <code>sea-orm-migration</code> crate",id:"migration-utilities-moved-to-sea-orm-migration-crate",level:2},{value:"Generating New Migration",id:"generating-new-migration",level:2},{value:"Inserting One with Default",id:"inserting-one-with-default",level:2},{value:"Checking if an <code>ActiveModel</code> is changed",id:"checking-if-an-activemodel-is-changed",level:2},{value:"Minor Improvements",id:"minor-improvements",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Who&#39;s using SeaORM?",id:"whos-using-seaorm",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Community",id:"community",level:2},{value:"GSoC 2022",id:"gsoc-2022",level:2}],p={toc:m};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.8.0"},(0,o.kt)("inlineCode",{parentName:"a"},"0.8.0"))," today! Here are some feature highlights \ud83c\udf1f:"),(0,o.kt)("h2",{id:"migration-utilities-moved-to-sea-orm-migration-crate"},"Migration Utilities Moved to ",(0,o.kt)("inlineCode",{parentName:"h2"},"sea-orm-migration")," crate"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/666"},"#666"),"] Utilities of SeaORM migration have been moved from ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-schema")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-orm-migration")," crate. Users are advised to upgrade from older versions with the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bump ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-orm")," version to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.8.0"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-schema")," dependency with ",(0,o.kt)("inlineCode",{parentName:"p"},"sea-orm-migration")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"migration")," crate."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=migration/Cargo.toml",title:"migration/Cargo.toml"},'[dependencies]\n- sea-schema = { version = "^0.7.0", ... }\n+ sea-orm-migration = { version = "^0.8.0" }\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"use sea_schema::migration::")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"use sea_orm_migration::")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"migration")," crate."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- use sea_schema::migration::prelude::*;\n+ use sea_orm_migration::prelude::*;\n\n- use sea_schema::migration::*;\n+ use sea_orm_migration::*;\n")))),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Designed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Chris Tsang")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,o.kt)("h2",{id:"generating-new-migration"},"Generating New Migration"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/656"},"#656"),"] You can create a new migration with the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate generate")," subcommand. This simplifies the migration process, as new migrations no longer need to be added manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# A migration file `MIGRATION_DIR/src/mYYYYMMDD_HHMMSS_create_product_table.rs` will be created.\n# And, the migration file will be imported and included in the migrator located at `MIGRATION_DIR/src/lib.rs`.\nsea-orm-cli migrate generate create_product_table\n")),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed & Contributed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/viktorbahr"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/8578264?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Viktor Bahr"))))),(0,o.kt)("h2",{id:"inserting-one-with-default"},"Inserting One with Default"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/589"},"#589"),"] Insert a row populate with default values. Note that the target table should have default values defined for all of its columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    ..Default::default() // all attributes are `NotSet`\n};\n\n// The SQL statement:\n//   - MySQL: INSERT INTO `fruit` VALUES ()\n//   - SQLite: INSERT INTO "fruit" DEFAULT VALUES\n//   - PostgreSQL: INSERT INTO "fruit" VALUES (DEFAULT) RETURNING "id", "name", "cake_id"\nlet pear: fruit::Model = pear.insert(db).await?;\n')),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Crypto-Virus"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/6034171?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Crypto-Virus")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,o.kt)("h2",{id:"checking-if-an-activemodel-is-changed"},"Checking if an ",(0,o.kt)("inlineCode",{parentName:"h2"},"ActiveModel")," is changed"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/683"},"#683"),"] You can check whether any field in an ",(0,o.kt)("inlineCode",{parentName:"p"},"ActiveModel")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," with the help of the ",(0,o.kt)("inlineCode",{parentName:"p"},"is_changed")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut fruit: fruit::ActiveModel = Default::default();\nassert!(!fruit.is_changed());\n\nfruit.set(fruit::Column::Name, "apple".into());\nassert!(fruit.is_changed());\n')),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/kudlatyamroth"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/2165237?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Karol Fuksiewicz")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/kirawi"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/67773714?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Kirawi"))))),(0,o.kt)("h2",{id:"minor-improvements"},"Minor Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/670"},"#670"),"] Add ",(0,o.kt)("inlineCode",{parentName:"li"},"max_connections")," option to ",(0,o.kt)("inlineCode",{parentName:"li"},"sea-orm-cli generate entity")," subcommand"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/677"},"#677"),"] Derive ",(0,o.kt)("inlineCode",{parentName:"li"},"Eq")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Clone")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"DbErr"))),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed & Contributed by:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/benluelo"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/57334811?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"benluelo"))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/SebastienGllmt"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/2608559?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Sebastien Guillemot"))))),(0,o.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,o.kt)("p",null,"SeaORM plays well with the other crates in the async ecosystem. It can be integrated easily with common RESTful frameworks and also gRPC frameworks; check out our new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic example")," to see how it works. More examples ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/issues/269"},"wanted"),"!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic Example"))),(0,o.kt)("h2",{id:"whos-using-seaorm"},"Who's using SeaORM?"),(0,o.kt)("p",null,"The following products are powered by SeaORM:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://caido.io/"},(0,o.kt)("img",{src:"https://www.sea-ql.org/SeaORM/img/other/caido-logo.png",width:"250"})),(0,o.kt)("br",null),"A lightweight web security auditing toolkit"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://www.svix.com/"},(0,o.kt)("img",{src:"https://www.sea-ql.org/SeaORM/img/other/svix-logo.svg",width:"250"})),(0,o.kt)("br",null),"The enterprise ready webhooks service"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://www.spyglass.fyi/"},(0,o.kt)("img",{src:"https://www.sea-ql.org/SeaORM/img/other/spyglass-logo.svg",width:"250"})),(0,o.kt)("br",null),"A personal search engine")))),(0,o.kt)("p",null,"SeaORM is the foundation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/starfish-ql"},"StarfishQL"),", an experimental graph database and query engine."),(0,o.kt)("p",null,"For more projects, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/COMMUNITY.md#built-with-seaorm"},"Built with SeaORM"),"."),(0,o.kt)("h2",{id:"sponsor"},"Sponsor"),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," profile is up! If you feel generous, a small donation will be greatly appreciated."),(0,o.kt)("p",null,"A big shout out to our sponsors \ud83d\ude07:"),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/11241812?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Dean Sheather")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,o.kt)("div",{class:"col col--6 margin-bottom--md"},(0,o.kt)("div",{class:"avatar"},(0,o.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,o.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,o.kt)("div",{class:"avatar__intro"},(0,o.kt)("div",{class:"avatar__name"},"Unnamed Sponsor"))))),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,o.kt)("p",null,"Here is the roadmap for SeaORM ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/9"},(0,o.kt)("inlineCode",{parentName:"a"},"0.9.x")),"."),(0,o.kt)("h2",{id:"gsoc-2022"},"GSoC 2022"),(0,o.kt)("p",null,"We are super excited to be selected as a Google Summer of Code 2022 ",(0,o.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/programs/2022/organizations/seaql"},"mentor organization"),". The application is now closed, but the program is about to start! If you have thoughts over how we are going to implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/tree/main/2022"},"project ideas"),", feel free to participate in the discussion."))}c.isMDXComponent=!0}}]);