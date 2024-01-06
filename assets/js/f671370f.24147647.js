"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[817],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),c=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=c(n),d=r,g=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return n?o.createElement(g,l(l({ref:e},m),{},{components:n})):o.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},622:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:6,title:"Chat Component",description:"How to use chat component class."},l=void 0,i={unversionedId:"rtag/feature/chat-component",id:"rtag/feature/chat-component",title:"Chat Component",description:"How to use chat component class.",source:"@site/docs/rtag/feature/chat-component.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/chat-component",permalink:"/rtag/feature/chat-component",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/feature/chat-component.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1704582569,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Chat Component",description:"How to use chat component class."},sidebar:"rtag",previous:{title:"Textured Heads",permalink:"/rtag/feature/textured-heads"},next:{title:"Compatible APIs",permalink:"/rtag/feature/compatible"}},p={},c=[{value:"Conversion",id:"conversion",level:2},{value:"Pretty nbt formatter",id:"pretty-nbt-formatter",level:2},{value:"Single line",id:"single-line",level:3},{value:"Multiple lines",id:"multiple-lines",level:3}],m={toc:c},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatComponent")," class contains multiple utility methods to handle chat-related things."),(0,r.kt)("h2",{id:"conversion"},"Conversion"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatComponent")," class you can convert (json) strings into chat components and viceversa."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// To component\nObject component = ChatComponent.fromJson("{\\"bold\\":true,\\"italic\\":false,\\"color\\":\\"dark_purple\\",\\"text\\":\\"Colored text!\\"}");\nObject sameComponent = ChatComponent.fromString("\xa75\xa7lColored text!");\n\n// From component\nString json = ChatComponent.toJson(component);\nString string = ChatComponent.toString(component);\n\n// Cross-compatibility\nString json = ChatComponent.toJson("\xa75\xa7lColored text!");\nString string = ChatComponent.toString("{\\"bold\\":true,\\"italic\\":false,\\"color\\":\\"dark_purple\\",\\"text\\":\\"Colored text!\\"}");\n')),(0,r.kt)("h2",{id:"pretty-nbt-formatter"},"Pretty nbt formatter"),(0,r.kt)("p",null,"Format any nbt object into single or multiple lines separated by ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," with a color palette:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE")," - The default color palette like Minecraft ",(0,r.kt)("inlineCode",{parentName:"li"},"/data")," command (",(0,r.kt)("inlineCode",{parentName:"li"},'[ "\xa7f", "\xa7b", "\xa7a", "\xa76", "\xa7c" ]'),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE_HEX")," - Modified color palette for Bukkit 1.16 or upper using hex color format like ",(0,r.kt)("inlineCode",{parentName:"li"},"\xa7#RRGGBB"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE_BUNGEE")," - Modified color palette for Bukkit 1.16 or upper using bungee hex color format like ",(0,r.kt)("inlineCode",{parentName:"li"},"\xa7x\xa7R\xa7R\xa7G\xa7G\xa7B\xa7B"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE_MINIMESSAGE")," - Default color palette using ",(0,r.kt)("a",{parentName:"li",href:"https://docs.advntr.dev/minimessage/index.html"},"Adventure MiniMessage format"),".")),(0,r.kt)("p",null,"Example with default color palette:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/saicone/rtag/main/docs/images/pretty-nbt.png",alt:"Pretty NBT"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can make your own color palette by providing a 5-length ",(0,r.kt)("inlineCode",{parentName:"p"},"String[]")," with color in the order of:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Base color."),(0,r.kt)("li",{parentName:"ol"},"Key color (compound keys)."),(0,r.kt)("li",{parentName:"ol"},"Strings."),(0,r.kt)("li",{parentName:"ol"},"Numbers."),(0,r.kt)("li",{parentName:"ol"},"Number suffix."))),(0,r.kt)("p",null,"Example with custom color palette:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/saicone/rtag/main/docs/images/pretty-nbt-palette.png",alt:"Pretty NBT with palette"})),(0,r.kt)("h3",{id:"single-line"},"Single line"),(0,r.kt)("p",null,"To format into single line just use ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," for second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Object nbt = ...;\n\n// Pretty format into chat component, json component, colored string\nObject component = ChatComponent.toPrettyComponent(nbt, null);\nString json = ChatComponent.toPrettyJson(nbt, null);\nString colored = ChatComponent.toPrettyString(nbt, null);\n\n// Using color palette (example with colored string)\nString colored = ChatComponent.toPrettyString(nbt, null, ChatComponent.NBT_PALETTE_BUNGEE);\n")),(0,r.kt)("h3",{id:"multiple-lines"},"Multiple lines"),(0,r.kt)("p",null,"To format into multiple lines just provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," to use as indent, for example ",(0,r.kt)("inlineCode",{parentName:"p"},'"  "')," for 2 spaces indent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Object nbt = ...;\n\n// Pretty format into chat component, json component, colored string\nObject component = ChatComponent.toPrettyComponent(nbt, "  ");\nString json = ChatComponent.toPrettyJson(nbt, "  ");\nString colored = ChatComponent.toPrettyString(nbt, "  ");\n\n// Using color palette (example with colored string)\nString colored = ChatComponent.toPrettyString(nbt, "  ", ChatComponent.NBT_PALETTE_BUNGEE);\n')))}u.isMDXComponent=!0}}]);