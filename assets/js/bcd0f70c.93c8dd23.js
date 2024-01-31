"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?o.createElement(y,i(i({ref:t},u),{},{components:r})):o.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2,title:"Web supervisor",description:"How to setup PixelBuy web supervisors."},i=void 0,s={unversionedId:"pixelbuy/store/web-supervisor",id:"pixelbuy/store/web-supervisor",title:"Web supervisor",description:"How to setup PixelBuy web supervisors.",source:"@site/docs/pixelbuy/store/web-supervisor.md",sourceDirName:"pixelbuy/store",slug:"/pixelbuy/store/web-supervisor",permalink:"/pixelbuy/store/web-supervisor",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/default/store/web-supervisor.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Web supervisor",description:"How to setup PixelBuy web supervisors."},sidebar:"pixelbuy",previous:{title:"Configuration",permalink:"/pixelbuy/store/configuration"},next:{title:"Items",permalink:"/pixelbuy/store/items"}},l={},p=[{value:"Types",id:"types",level:2},{value:"Global values",id:"global-values",level:3},{value:"WooMinecraft",id:"woominecraft",level:2},{value:"WooCommerce integration",id:"woocommerce-integration",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The web supervisor interface is a type of system that retrieves data from a web store to apply any necessary delivery inside Minecraft server."),(0,n.kt)("h2",{id:"types"},"Types"),(0,n.kt)("p",null,"PixelBuy currently aims to support some delivery concepts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WOOMINECRAFT")," - Self-hosted WordPress using ",(0,n.kt)("strong",{parentName:"li"},"WooMinecraft")," plugin."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TEBEX")," - BuyCraft-like delivery from ",(0,n.kt)("strong",{parentName:"li"},"Tebex")," store.")),(0,n.kt)("h3",{id:"global-values"},"Global values"),(0,n.kt)("p",null,"Any web supervisor has common configuration paths."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Group: 'servername'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"group")," - Is the server associated with the name that the supervisor is looking for orders.")),(0,n.kt)("h2",{id:"woominecraft"},"WooMinecraft"),(0,n.kt)("p",null,"The WooMinecraft supervisor type makes delayed checks to get what order commands must be delivered (like WooMinecaft plugin), but it processes every command separated by comma as store item names."),(0,n.kt)("p",null,"The store plugin setup is the same as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WooMinecraft/WooMinecraft/wiki/Step-2:-Setting-up-the-wordpress-side"},"WooMinecraft wiki")," and also ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WooMinecraft/WooMinecraft/wiki/Step-3:-Creating-A-Package"},"the commands"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Check-Interval: 7\nURL: 'http://shop.mysite.com'\nKey: 'asdUniqueKeyForServer'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Check-Interval")," - Is the interval in seconds to check WooMinecraft rest api from store url."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"URL")," - Is the store url."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Key")," - Is the server key from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/WooMinecraft/WooMinecraft/wiki/Step-2:-Setting-up-the-wordpress-side"},"WooMinecraft configuration"),".")),(0,n.kt)("h3",{id:"woocommerce-integration"},"WooCommerce integration"),(0,n.kt)("p",null,"Instead of WooMinecraft plugin, this web supervisor also has an integration directly with the WooCommerce plugin installed on WordPress site to retrieve more information about store items (and also a better calculation about store order price)."),(0,n.kt)("p",null,"To generate a new WooCommerce API key:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the admin panel on your WordPress site."),(0,n.kt)("li",{parentName:"ol"},"Move the mouse over WooCommerce."),(0,n.kt)("li",{parentName:"ol"},"Go to Settings."),(0,n.kt)("li",{parentName:"ol"},'Click on "Advanced" to get into advanced settings.'),(0,n.kt)("li",{parentName:"ol"},"Go to API Keys."),(0,n.kt)("li",{parentName:"ol"},"Generate a read access key.")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"It's important to generate only a ",(0,n.kt)("strong",{parentName:"p"},"read access")," key, if you set ",(0,n.kt)("strong",{parentName:"p"},"write access")," you are leaving a security breach in your WordPress site if you don't protect the server instance where PixelBuy is installed.")),(0,n.kt)("p",null,"Next you only need to set the generated key and secret into web supervisor configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"WooCommerce:\n  ConsumerKey: 'ck_theGeneratedConsumerKey'\n  ConsumerSecret: 'cs_theGeneratedConsumerSecret'\n")),(0,n.kt)("p",null,"Take in count that every consumer key starts with ",(0,n.kt)("inlineCode",{parentName:"p"},"ck_")," and every consumer secret starts with ",(0,n.kt)("inlineCode",{parentName:"p"},"cs_"),"."))}m.isMDXComponent=!0}}]);