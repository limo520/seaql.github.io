"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=n,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={},o="Crawling crates.io Data",s={unversionedId:"install-and-config/crawling-crates-io-data",id:"install-and-config/crawling-crates-io-data",title:"Crawling crates.io Data",description:"Once the database and query engine are up and running, the next step is to prepare the data to fill the database up with.",source:"@site/docs/01-install-and-config/02-crawling-crates-io-data.md",sourceDirName:"01-install-and-config",slug:"/install-and-config/crawling-crates-io-data",permalink:"/preview/pr-96/StarfishQL/docs/install-and-config/crawling-crates-io-data",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/01-install-and-config/02-crawling-crates-io-data.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680515546,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set up the Graph Query Engine",permalink:"/preview/pr-96/StarfishQL/docs/install-and-config/setup-graph-queery-engine"},next:{title:"Visualizing Dependency Graph",permalink:"/preview/pr-96/StarfishQL/docs/install-and-config/visualizing-dependency-graph"}},l={},c=[{value:"Running the crawler for the first time",id:"running-the-crawler-for-the-first-time",level:2},{value:"Updating the database",id:"updating-the-database",level:2},{value:"Starting from scratch",id:"starting-from-scratch",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crawling-cratesio-data"},"Crawling crates.io Data"),(0,n.kt)("p",null,"Once the database and query engine are up and running, the next step is to prepare the data to fill the database up with."),(0,n.kt)("h2",{id:"running-the-crawler-for-the-first-time"},"Running the crawler for the first time"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# starfish-ql/freeport/backend\nnpm install\nnpm start\n")),(0,n.kt)("p",null,"The node application ",(0,n.kt)("strong",{parentName:"p"},"pulls")," the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/crates.io-index"},"index repo")," of crates.io and update the database by using the local cloned repo, so that the whole crawling process has minimal impact on crates.io's service."),(0,n.kt)("h2",{id:"updating-the-database"},"Updating the database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# starfish-ql/freeport/backend\nnpm start\n")),(0,n.kt)("p",null,"The same npm script (",(0,n.kt)("inlineCode",{parentName:"p"},"start"),") is used for updating the database for convenience. This is made possible by storing some crawling metadata."),(0,n.kt)("h2",{id:"starting-from-scratch"},"Starting from scratch"),(0,n.kt)("p",null,"In some cases, you may want to wipe out the whole database and start from scratch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# starfish-ql/freeport/backend\nnpm restart\n")))}d.isMDXComponent=!0}}]);