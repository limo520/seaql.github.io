"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[24121],{48859:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(76687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,u=f["".concat(d,".").concat(m)]||f[m]||p[m]||r;return t?i.createElement(u,l(l({ref:n},c),{},{components:t})):i.createElement(u,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=f;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=t(31308),a=(t(76687),t(48859));const r={},l="Chained Relations",o={unversionedId:"relation/chained-relations",id:"version-0.11.x/relation/chained-relations",title:"Chained Relations",description:"The Related trait is a representation of the arrows (1-1, 1-N, M-N) we draw on Entity Relationship Diagrams. A Linked is composed of a chain of relations, and is useful when:",source:"@site/versioned_docs/version-0.11.x/06-relation/04-chained-relations.md",sourceDirName:"06-relation",slug:"/relation/chained-relations",permalink:"/SeaORM/docs/0.11.x/relation/chained-relations",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/06-relation/04-chained-relations.md",tags:[],version:"0.11.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1706865129,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Many to Many",permalink:"/SeaORM/docs/0.11.x/relation/many-to-many"},next:{title:"Self Referencing",permalink:"/SeaORM/docs/0.11.x/relation/self-referencing"}},d={},s=[{value:"Lazy Loading",id:"lazy-loading",level:3},{value:"Eager Loading",id:"eager-loading",level:3}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chained-relations"},"Chained Relations"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Related")," trait is a representation of the arrows (1-1, 1-N, M-N) we draw on Entity Relationship Diagrams. A ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.Linked.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Linked"))," is composed of a chain of relations, and is useful when:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"there exist multiple join paths between a pair of entities"),(0,a.kt)("li",{parentName:"ol"},"joining across multiple entities in a relational query")),(0,a.kt)("p",null,"Take ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"this")," as a simple example, where we join cake and filling via an intermediate ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling")," table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Relation::Filling.def(),\n        ]\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationDef")," can be defined on the fly, where the following is equivalent to the above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Entity::belongs_to(filling::Entity)\n                .from(cake_filling::Column::FillingId)\n                .to(filling::Column::Id)\n                .into(),\n        ]\n    }\n}\n")),(0,a.kt)("h3",{id:"lazy-loading"},"Lazy Loading"),(0,a.kt)("p",null,"Find fillings that can be filled into a cake with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_linked"},(0,a.kt)("inlineCode",{parentName:"a"},"find_linked"))," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let cake_model = cake::Model {\n    id: 12,\n    name: "".to_owned(),\n};\n\nassert_eq!(\n    cake_model\n        .find_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `filling`.`id`, `filling`.`name`, `filling`.`vendor_id`",\n        "FROM `filling`",\n        "INNER JOIN `cake_filling` AS `r0` ON `r0`.`filling_id` = `filling`.`id`",\n        "INNER JOIN `cake` AS `r1` ON `r1`.`id` = `r0`.`cake_id`",\n        "WHERE `r1`.`id` = 12",\n    ]\n    .join(" ")\n);\n')),(0,a.kt)("h3",{id:"eager-loading"},"Eager Loading"),(0,a.kt)("p",null,"Find all pairs of cake and filling together in a single select with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_also_linked"},(0,a.kt)("inlineCode",{parentName:"a"},"find_also_linked"))," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .find_also_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,",\n        "`r1`.`id` AS `B_id`, `r1`.`name` AS `B_name`, `r1`.`vendor_id` AS `B_vendor_id`",\n        "FROM `cake`",\n        "LEFT JOIN `cake_filling` AS `r0` ON `cake`.`id` = `r0`.`cake_id`",\n        "LEFT JOIN `filling` AS `r1` ON `r0`.`filling_id` = `r1`.`id`",\n    ]\n    .join(" ")\n);\n')))}p.isMDXComponent=!0}}]);