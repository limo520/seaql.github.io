"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Intro to Stream Processing",s={unversionedId:"introduction/intro-to-streams",id:"introduction/intro-to-streams",title:"Intro to Stream Processing",description:'"Turning the database inside out" is an influential article in the data engineering space, leading to the founding of Kafka. Since then, implementations like Redpanda and Redis Streams emerged, spurring a real-time data processing ecosystem.',source:"@site/docs/01-introduction/01-intro-to-streams.md",sourceDirName:"01-introduction",slug:"/introduction/intro-to-streams",permalink:"/preview/pr-104/SeaStreamer/docs/next/introduction/intro-to-streams",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/01-introduction/01-intro-to-streams.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691125895,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/preview/pr-104/SeaStreamer/docs/next/index"},next:{title:"Async Programming in Rust",permalink:"/preview/pr-104/SeaStreamer/docs/next/introduction/async-programming"}},l={},c=[{value:"Vs event-based programming",id:"vs-event-based-programming",level:2},{value:"Vs batch processing",id:"vs-batch-processing",level:2},{value:"Why Rust?",id:"why-rust",level:2},{value:"Multi-threaded async",id:"multi-threaded-async",level:3},{value:"Predictable latency",id:"predictable-latency",level:3},{value:"Self-contained",id:"self-contained",level:3},{value:"Low resource usage",id:"low-resource-usage",level:3},{value:"Long-running safe",id:"long-running-safe",level:3},{value:"Ecosystem",id:"ecosystem",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro-to-stream-processing"},"Intro to Stream Processing"),(0,r.kt)("p",null,'"',(0,r.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/turning-the-database-inside-out-with-apache-samza/"},"Turning the database inside out"),'" is an influential article in the data engineering space, leading to the founding of ',(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka"),". Since then, implementations like ",(0,r.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda")," and ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/docs/manual/data-types/streams/"},"Redis Streams")," emerged, spurring a real-time data processing ecosystem."),(0,r.kt)("h2",{id:"vs-event-based-programming"},"Vs event-based programming"),(0,r.kt)("p",null,"Similar to event-based programming, stream processing is a programming paradigm that aims to handle events in near real-time or as soon as events happen. One way to classify between the two might be frequency. Streams are continuous sequence of events with a high throughput: instead of many short-lived connections, you simply keep a connection open and wait for events to come."),(0,r.kt)("h2",{id:"vs-batch-processing"},"Vs batch processing"),(0,r.kt)("p",null,'Stream processing can be thought as batch processing with extremely small batch sizes. The batch size does not necessarily have to be one. Messages can be micro-batched by the millisecond, or second, according to your latency requirement and processing power. But gone are the days of "it may take up to 24 hours for this change to reflect"!'),(0,r.kt)("h2",{id:"why-rust"},"Why Rust?"),(0,r.kt)("p",null,"We want to construct the best stream processing platform where Rust's unique characteristics truly shine:"),(0,r.kt)("h3",{id:"multi-threaded-async"},"Multi-threaded async"),(0,r.kt)("p",null,"Unlike other languages, Rust's async execution is multi-threaded. It allows you to scale up a process with as many threads as needed to fully utilize the CPU for maximum concurrency. ",(0,r.kt)("strong",{parentName:"p"},"You do not need to setup an external queuing system"),"!"),(0,r.kt)("h3",{id:"predictable-latency"},"Predictable latency"),(0,r.kt)("p",null,"As a language with no garbage collection, there is no random point in time where the garbage collector kicks in and causes jitter. When you have a long pipeline, these jitters tend to propagate and amplify downstream. Rust is not automatically low-latency though - you still need to spend considerable effort in optimization. But you will have a good starting point."),(0,r.kt)("h3",{id:"self-contained"},"Self-contained"),(0,r.kt)("p",null,"Unlike other languages, the recommended way of packaging Rust programs is to static-link everything into one executable - often only sized a few megabytes. And there is no installation or warm-up needed - it spins up immediately, which is a bonus for stream processing."),(0,r.kt)("h3",{id:"low-resource-usage"},"Low resource usage"),(0,r.kt)("p",null,"Like other compiled languages, Rust uses considerably less memory than a VM based language. And without the need of JIT, Rust also has less CPU overhead."),(0,r.kt)("h3",{id:"long-running-safe"},"Long-running safe"),(0,r.kt)("p",null,'Again, without GC, Rust programs are less susceptible to "slow memory bloat over a period of days" (technically, it\'s not a leak). There is less risk of out-of-memory crashes, so you don\'t have to "restart the process every week". Albeit, you still have to be careful about heap allocations.'),(0,r.kt)("h3",{id:"ecosystem"},"Ecosystem"),(0,r.kt)("p",null,"Finally, Rust has a great ecosystem of async programming libraries: networking libraries built on async IO, lock-free channels and other data structures to make async programming ergonomic and fun."),(0,r.kt)("p",null,"Without further ado, let's get started!"))}d.isMDXComponent=!0}}]);