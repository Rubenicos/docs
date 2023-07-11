"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[284],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,d=m["".concat(s,".").concat(u)]||m[u]||g[u]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6,title:"Examples",description:"How to use Rtag"},i=void 0,l={unversionedId:"rtag/example",id:"rtag/example",title:"Examples",description:"How to use Rtag",source:"@site/docs/rtag/example.md",sourceDirName:"rtag",slug:"/rtag/example",permalink:"/rtag/example",draft:!1,editUrl:"https://github.com/saicone/docs/blob/main/docs/rtag/example.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1689097240,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Examples",description:"How to use Rtag"},sidebar:"rtag",previous:{title:"Extras",permalink:"/rtag/extra"}},s={},c=[{value:"ObjectTag",id:"objecttag",level:2},{value:"Item",id:"item",level:2},{value:"Entity",id:"entity",level:2},{value:"Block",id:"block",level:2}],p={toc:c},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here you can see different ways to use Rtag."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For better understand about some objects tags, is suggested to visit their pages on Minecraft wiki:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minecraft.fandom.com/wiki/Entity_format"},"Entity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minecraft.fandom.com/wiki/Player.dat_format#Item_structure"},"Item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minecraft.fandom.com/wiki/Chunk_format#Block_entity_format"},"Block")))),(0,r.kt)("h2",{id:"objecttag"},"ObjectTag"),(0,r.kt)("p",null,"The simplest way to understand Rtag is learning about the use of RtagEditor instances, which have methods to edit in an easy way objects like items, entities and blocks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// -- Create RtagEditor\n\n// Using Item\nRtagItem tag = new RtagItem(item);\n// Using Entity\nRtagEntity tag = new RtagEntity(entity);\n// Using block\nRtagBlock tag = new RtagBlock(block);\n\n\n// -- Edit object tag\n\n// - Put values\n// value = "Custom Value"\n// path = "deep" -> "path"\ntag.set("Custom Value", "deep", "path");\ntag.set(40, "somekey");\ntag.set("Item name!", "display", "name");\n\n// You can add lists\ntag.set(new ArrayList(), "list", "path");\n// And add values into list\ntag.add((short) 3, "list", "path");\n// Or replace the values of existing list\ntag.set((short) 5, "list", "path", 0); // index 0\n\n// - Get values\n// Value from path "deep" -> "path"\nString value = tag.get("deep", "path");\nString name = tag.get("display", "name");\n\n// Safe value get\n// Value from path "somekey", or -1 by default\nint intValue = tag.getOptional("somekey").or(-1);\n\n// Get lists\nList<Short> list = tag.get("list", "path");\n// Get list value from index\nshort listValue = tag.get("list", "path", 0);\n\n// Get the entire object tag as Map\nMap<String, Object> map = tag.get();\n\n\n// -- Load changes into object\n\n// Load into original object\ntag.load();\n\n// RtagItem as the option to load an object copy with changes loaded\nItemStack item = tag.loadCopy();\n')),(0,r.kt)("h2",{id:"item"},"Item"),(0,r.kt)("p",null,"Here an example to change item name and make it unbreakable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagItem tag = new RtagItem(new ItemStack(Material.DIAMOND_SWORD));\n\n// Value = "Custom item name!"\n// Path = "display" -> "name"\ntag.set("Custom item name!", "display", "name");\n\n// Make it unbreakable\ntag.set(true, "Unbreakable");\n\n// Load the changes\ntag.load();\n')),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"Here an example to give glowing effect and levitation to entities using Rtag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagEntity tag = new RtagEntity(entity);\n\n// Make it glow\ntag.set(true, "Glowing");\n\n// In case the entity its a mob or player\n// it can receive potion effects\nMap<String, Object> effect = Map.of(\n    "Ambient", false,\n    "Amplifier", false,\n    "Duration", 200, // 10 seconds = 200 ticks\n    "Id", (byte) 25,\n    "ShowIcon", false,\n    "ShowParticles", true,\n    );\ntag.add(effect, "ActiveEffects");\n\n// Load the changes\ntag.load();\n')),(0,r.kt)("h2",{id:"block"},"Block"),(0,r.kt)("p",null,"Here an example to add a custom name and open restriction to chest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RtagBlock tag = new RtagBlock(block);\n\n// Custom name\ntag.set("Custom name for chest", "CustomName");\n// The chest only be oppened if the player as a item that\n// name contains "key 123"\ntag.set("key 123", "Lock");\n\n// Load the changes\ntag.load();\n')))}g.isMDXComponent=!0}}]);