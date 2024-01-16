"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[97641],{48859:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(76687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(31308),i=(n(76687),n(48859));const r={},l="Using sea-orm-cli",o={unversionedId:"generate-entity/sea-orm-cli",id:"version-0.9.x/generate-entity/sea-orm-cli",title:"Using sea-orm-cli",description:"First, install sea-orm-cli with cargo.",source:"@site/versioned_docs/version-0.9.x/04-generate-entity/01-sea-orm-cli.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/sea-orm-cli",permalink:"/SeaORM/docs/0.9.x/generate-entity/sea-orm-cli",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/04-generate-entity/01-sea-orm-cli.md",tags:[],version:"0.9.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705419845,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Seeding Data",permalink:"/SeaORM/docs/0.9.x/migration/seeding-data"},next:{title:"Entity Structure",permalink:"/SeaORM/docs/0.9.x/generate-entity/entity-structure"}},s={},p=[{value:"Configure Environment",id:"configure-environment",level:2},{value:"Getting Help",id:"getting-help",level:2},{value:"Generating Entity Files",id:"generating-entity-files",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-sea-orm-cli"},"Using ",(0,i.kt)("inlineCode",{parentName:"h1"},"sea-orm-cli")),(0,i.kt)("p",null,"First, install ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo install sea-orm-cli\n")),(0,i.kt)("h2",{id:"configure-environment"},"Configure Environment"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, or create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in your project root. Specify your database connection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"DATABASE_URL=protocol://username:password@localhost/database\n")),(0,i.kt)("h2",{id:"getting-help"},"Getting Help"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"-h")," flag on any CLI command or subcommand for help."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# List all available commands\n$ sea-orm-cli -h\n\n# List all subcommands available in `generate` command\n$ sea-orm-cli generate -h\n\n# Show how to use `generate entity` subcommand\n$ sea-orm-cli generate entity -h\n")),(0,i.kt)("h2",{id:"generating-entity-files"},"Generating Entity Files"),(0,i.kt)("p",null,"Discover all tables in a database and generate a corresponding SeaORM entity file for each table."),(0,i.kt)("p",null,"Supported databases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MySQL"),(0,i.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"SQLite")),(0,i.kt)("p",null,"Command line options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-u")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--database-url"),": database URL (default: DATABASE_URL specified in ENV)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-s")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--database-schema"),": database schema (default: DATABASE_SCHEMA specified in ENV)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For MySQL & SQLite, this argument is ignored"),(0,i.kt)("li",{parentName:"ul"},"For PostgreSQL, this argument is optional with default value 'public'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-o")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--output-dir"),": entity file output directory (default: current directory)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--verbose"),": print debug messages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--include-hidden-tables"),": generate entity files from hidden tables (tables with names starting with an underscore are hidden and ignored by default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--ignore-tables"),": Skip generating entity file for specified tables (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"seaql_migrations"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--compact-format"),": generate entity file of ",(0,i.kt)("a",{parentName:"li",href:"/SeaORM/docs/0.9.x/generate-entity/entity-structure"},"compact format")," (default: true)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--expanded-format"),": generate entity file of ",(0,i.kt)("a",{parentName:"li",href:"/SeaORM/docs/0.9.x/generate-entity/expanded-entity-structure"},"expanded format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--with-serde"),": automatically derive serde Serialize / Deserialize traits for the entity (",(0,i.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deserialize"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"both"),") (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--date-time-crate"),": the datetime crate to use for generating entities (",(0,i.kt)("inlineCode",{parentName:"li"},"chrono"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"time"),") (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"chrono"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--max-connections"),": maximum number of database connections to be initialized in the connection pool (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Generate entity files of database `bakery` to `entity/src`\n$ sea-orm-cli generate entity \\\n    -u sql://sea:sea@localhost/bakery \\\n    -o entity/src\n")))}c.isMDXComponent=!0}}]);