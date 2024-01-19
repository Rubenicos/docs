"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[708],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3632:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,title:"Settings",description:"Java library to interpret multiple data formats as flexible configuration."},o=void 0,l={unversionedId:"settings/README",id:"settings/README",title:"Settings",description:"Java library to interpret multiple data formats as flexible configuration.",source:"@site/docs/settings/README.md",sourceDirName:"settings",slug:"/settings/",permalink:"/settings/",draft:!1,editUrl:"https://github.com/saicone/settings/blob/main/docs/default/README.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1705676835,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Settings",description:"Java library to interpret multiple data formats as flexible configuration."},sidebar:"settings"},s={},p=[{value:"Introduction",id:"introduction",level:2}],u={toc:p},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Settings library handle multiple data formats as configuration in a flexible way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node templates and transformation."),(0,a.kt)("li",{parentName:"ul"},"Node value substitution in non-compatible formats (like json and yaml)."),(0,a.kt)("li",{parentName:"ul"},"Fallback format reader."),(0,a.kt)("li",{parentName:"ul"},"Iterable nodes."),(0,a.kt)("li",{parentName:"ul"},"Data update parameters."),(0,a.kt)("li",{parentName:"ul"},"Comparable paths to get nodes."),(0,a.kt)("li",{parentName:"ul"},"Multi-layer node values.")),(0,a.kt)("p",null,"Currently supporting the formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.json.org/"},"JSON")," (with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/gson"},"Gson"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://toml.io/en/v1.0.0"},"TOML")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://yaml.org/spec/1.1/current.html"},"YAML"))),(0,a.kt)("p",null,"Take in count this library is not focused as an object serializer, the main purpose is making flexible interactions with multiple data formats at the same time."),(0,a.kt)("p",null,"It also has simple methods to get nodes as multiple data types if you want to implement your own object serializer."),(0,a.kt)("h2",{id:"introduction"},"Introduction"))}m.isMDXComponent=!0}}]);