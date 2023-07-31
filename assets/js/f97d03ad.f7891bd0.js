"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[413],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(c,".").concat(u)]||d[u]||g[u]||r;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6896:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4,title:"RtagBlock",description:"Edit block NBT"},i=void 0,l={unversionedId:"rtag/usage/block",id:"rtag/usage/block",title:"RtagBlock",description:"Edit block NBT",source:"@site/docs/rtag/usage/block.md",sourceDirName:"rtag/usage",slug:"/rtag/usage/block",permalink:"/rtag/usage/block",draft:!1,editUrl:"https://github.com/saicone/docs/blob/main/docs/rtag/usage/block.md",tags:[],version:"current",lastUpdatedBy:"Rub\xe9n",lastUpdatedAt:1690769316,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"RtagBlock",description:"Edit block NBT"},sidebar:"rtag",previous:{title:"RtagEntity",permalink:"/rtag/usage/entity"},next:{title:"Advanced",permalink:"/rtag/advanced/"}},c={},s=[{value:"Create",id:"create",level:2},{value:"Instance",id:"instance",level:3},{value:"Method",id:"method",level:3},{value:"Function",id:"function",level:3},{value:"Edit",id:"edit",level:2},{value:"Function",id:"function-1",level:3},{value:"Instance methods",id:"instance-methods",level:3}],p={toc:s},d="wrapper";function g(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Before continue",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To understand this page you should see ",(0,o.kt)("a",{parentName:"p",href:"../../usage/editor/"},"RtagEditor guide"),"."),(0,o.kt)("p",{parentName:"admonition"},"For better understand about some tile entity tags it's suggested to visit the ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Chunk_format#Block_entity_format"},"Minecraft wiki page"),".")),(0,o.kt)("admonition",{title:"Current limitations",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For now RtagBlock only can be used to edit tile entities tags, so ",(0,o.kt)("strong",{parentName:"p"},"it's planned")," to use Chunk PersistentDataContainer (added on Bukkit 1.16) to save any block tag.")),(0,o.kt)("admonition",{title:"Looking for non-vanilla tags?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to add non-vanilla tags to tile entities, take a look hover ",(0,o.kt)("a",{parentName:"p",href:"../../feature/compatible/"},"compatible APIs")," section."),(0,o.kt)("p",{parentName:"admonition"},'For now Rtag does not offer a "safe way" to save non-vanilla tags in old Bukkit versions.')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock")," is an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagEditor"),", so uses the same methods to edit, load and update changes as editor."),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"There are multiple ways to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock")," instance."),(0,o.kt)("h3",{id:"instance"},"Instance"),(0,o.kt)("p",null,"Using the simple constructor that accept any ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\n\nRtagBlock tag = new RtagBlock(block);\n")),(0,o.kt)("p",null,"Or specify the Rtag instance to handle NBT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\nRtag rtag = ...;\n\nRtagBlock tag = new RtagBlock(rtag, block);\n")),(0,o.kt)("h3",{id:"method"},"Method"),(0,o.kt)("p",null,"Using the simple method that accept any ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\n\nRtagBlock tag = RtagBlock.of(block);\n")),(0,o.kt)("p",null,"Or specify the Rtag instance to handle NBT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\nRtag rtag = ...;\n\nRtagBlock tag = RtagBlock.of(rtag, block);\n")),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"Using functions to edit NBT is the most easy way to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock"),"."),(0,o.kt)("p",null,"You can edit the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," without replacing it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Block block = ...;\n\n// Edit block\nRtagBlock.edit(block, tag -> {\n    tag.set(123, "path");\n});\n\n// Specify Rtag instance\nRtag rtag = ...;\nRtagBlock.edit(rtag, block, tag -> {\n    tag.set(123, "path");\n});\n')),(0,o.kt)("p",null,"Take in count that method return the ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," itself with changes loaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Block block = ...;\n\n// Edit block\nBlock sameBlock = RtagBlock.edit(block, tag -> {\n    tag.set(123, "path");\n});\n\n// Specify Rtag instance\nRtag rtag = ...;\nBlock sameBlock = RtagBlock.edit(rtag, block, tag -> {\n    tag.set(123, "path");\n});\n')),(0,o.kt)("p",null,"And you can return any type of object specified on the same function method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Block block = ...;\n\n// Return as you want from RtagEditor instance\nint number = RtagBlock.edit(block, tag -> {\n    return tag.get("path");\n});\n')),(0,o.kt)("h2",{id:"edit"},"Edit"),(0,o.kt)("p",null,"There is some methods that ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock")," contains and ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagEditor")," don't."),(0,o.kt)("h3",{id:"function-1"},"Function"),(0,o.kt)("p",null,"As above functions the current ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock")," can be edited with a function that return the instance itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'RtagBlock tag = ...;\n\ntag.edit(tag -> {\n    tag.set(123, "path");\n    tag.set("Hello", "greeting");\n});\n')),(0,o.kt)("h3",{id:"instance-methods"},"Instance methods"),(0,o.kt)("p",null,"There are ",(0,o.kt)("strong",{parentName:"p"},"easy to use")," methods to edit ",(0,o.kt)("strong",{parentName:"p"},"tile entity known tags")," in a simple way, having a wide Minecraft version support."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Custom name"),": Edit tile entity display name (chest for example)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'RtagBlock tag = ...;\n\n// Set using String with chat color or chat component json format\ntag.setCustomName("\xa7eColored name");\n\n// Get as chat color format\nString name = tag.getCustomName();\n')))}g.isMDXComponent=!0}}]);