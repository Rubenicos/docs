"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[859],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,m=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(a),c=i,u=d["".concat(m,".").concat(c)]||d[c]||g[c]||r;return a?n.createElement(u,o(o({ref:e},p),{},{components:a})):n.createElement(u,o({ref:e},p))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l[d]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1372:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2,title:"RtagItem",description:"Edit item NBT"},o=void 0,l={unversionedId:"rtag/usage/item",id:"rtag/usage/item",title:"RtagItem",description:"Edit item NBT",source:"@site/docs/rtag/usage/item.md",sourceDirName:"rtag/usage",slug:"/rtag/usage/item",permalink:"/rtag/usage/item",draft:!1,editUrl:"https://github.com/saicone/docs/blob/main/docs/rtag/usage/item.md",tags:[],version:"current",lastUpdatedBy:"Rub\xe9n",lastUpdatedAt:1690769316,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"RtagItem",description:"Edit item NBT"},sidebar:"rtag",previous:{title:"RtagEditor",permalink:"/rtag/usage/editor"},next:{title:"RtagEntity",permalink:"/rtag/usage/entity"}},m={},s=[{value:"Create",id:"create",level:2},{value:"Instance",id:"instance",level:3},{value:"Method",id:"method",level:3},{value:"Function",id:"function",level:3},{value:"Edit",id:"edit",level:2},{value:"Function",id:"function-1",level:3},{value:"Instance methods",id:"instance-methods",level:3},{value:"Load",id:"load",level:2},{value:"Get copy",id:"get-copy",level:3}],p={toc:s},d="wrapper";function g(t){let{components:e,...a}=t;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Before continue",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To understand this page you should see ",(0,i.kt)("a",{parentName:"p",href:"../../usage/editor/"},"RtagEditor guide"),"."),(0,i.kt)("p",{parentName:"admonition"},"For better understand about some item tags it's suggested to visit the ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Player.dat_format#Item_structure"},"Minecraft wiki page"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RtagItem")," is an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEditor"),", so uses the same methods to edit, load and update changes as editor."),(0,i.kt)("h2",{id:"create"},"Create"),(0,i.kt)("p",null,"There are multiple ways to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagItem")," instance."),(0,i.kt)("h3",{id:"instance"},"Instance"),(0,i.kt)("p",null,"Using the simple constructor that accept any ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\nRtagItem tag = new RtagItem(item);\n")),(0,i.kt)("p",null,"Or specify the Rtag instance to handle NBT."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\nRtag rtag = ...;\n\nRtagItem tag = new RtagItem(rtag, item);\n")),(0,i.kt)("h3",{id:"method"},"Method"),(0,i.kt)("p",null,"Using the simple method that accept any ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\nRtagItem tag = RtagItem.of(item);\n")),(0,i.kt)("p",null,"Or specify the Rtag instance to handle NBT."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\nRtag rtag = ...;\n\nRtagItem tag = RtagItem.of(rtag, item);\n")),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"Using functions to edit NBT is the most easy way to handle ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagItem"),"."),(0,i.kt)("p",null,"You can edit the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack")," without replacing it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = ...;\n\n// Edit item\nRtagItem.edit(item, tag -> {\n    tag.set(123, "path");\n});\n\n// Specify Rtag instance\nRtag rtag = ...;\nRtagItem.edit(rtag, item, tag -> {\n    tag.set(123, "path");\n});\n')),(0,i.kt)("p",null,"Take in count that method return the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack")," itself with changes loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = ...;\n\n// Edit item\nItemStack sameItem = RtagItem.edit(item, tag -> {\n    tag.set(123, "path");\n});\n\n// Specify Rtag instance\nRtag rtag = ...;\nItemStack sameItem = RtagItem.edit(rtag, item, tag -> {\n    tag.set(123, "path");\n});\n')),(0,i.kt)("p",null,"And you can return any type of object specified on the same function method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = ...;\n\n// Get an item copy with changes loaded\nItemStack itemWithChanges = RtagItem.edit(item, tag -> {\n    tag.set(123, "path");\n    return tag.loadCopy();\n});\n\n// Return as you want from RtagEditor instance\nint number = RtagItem.edit(item, tag -> {\n    return tag.get("path");\n});\n')),(0,i.kt)("h2",{id:"edit"},"Edit"),(0,i.kt)("p",null,"There is some methods that ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagItem")," contains and ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEditor")," don't."),(0,i.kt)("h3",{id:"function-1"},"Function"),(0,i.kt)("p",null,"As above functions the current ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagItem")," can be edited with a function that return the instance itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RtagItem tag = ...;\n\ntag.edit(tag -> {\n    tag.set(123, "path");\n    tag.set("Hello", "greeting");\n});\n')),(0,i.kt)("h3",{id:"instance-methods"},"Instance methods"),(0,i.kt)("p",null,"There are ",(0,i.kt)("strong",{parentName:"p"},"easy to use")," methods to edit ",(0,i.kt)("strong",{parentName:"p"},"item known tags")," in a simple way, having a wide Minecraft version support."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Flags"),": Better known as HideFlags, in RtagItem the flags are handled by ordinal values."),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Enchantments"),(0,i.kt)("li",{parentName:"ol"},"AttributeModifiers"),(0,i.kt)("li",{parentName:"ol"},"Unbreakable"),(0,i.kt)("li",{parentName:"ol"},"CanDestroy"),(0,i.kt)("li",{parentName:"ol"},"CanPlaceOn"),(0,i.kt)("li",{parentName:"ol"},"Other information (stored enchants, potion effects, generation, author, explosion and fireworks)"),(0,i.kt)("li",{parentName:"ol"},"Dyed"),(0,i.kt)("li",{parentName:"ol"},"Palette information (armor trim)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.addHideFlags(2, 4, 6);\n\nboolean bool = tag.hasHideFlags(2, 6); // return true\n\ntag.removeHideFlags(6);\n\ntag.setHideFlags(4);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enchantments"),": RtagItem support any enchantment handling by ",(0,i.kt)("inlineCode",{parentName:"p"},"Enchantment")," enum, name ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," or id ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," on any supported version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RtagItem tag = ...;\n\ntag.addEnchantment("Mending", 1);\n\nboolean bool = tag.hasEnchantment(70); // Return true because Mending ID is 70\n// Same as above but using enchantment name\nboolean bool = tag.hasEnchantment("Mending");\n\n// You can use Enchantment enum from Bukkit as well\ntag.removeEnchantment(Enchantment.MENDING);\n\ntag.addEnchantment("Mending", 1);\n\nint level = tag.getEnchantmentLevel("Mending");\n\n// Get all enchantments as Map\nMap<EnchantmentTag, Integer> enchants = tag.getEnchantments();\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unbreakable"),": Handle item unbreakable state (added on MC 1.7, but it can be edited using ItemMeta by Bukkit until MC 1.11)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.setUnbreakable(true);\n\nboolean bool = tag.isUnbreakable();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CustomModelData"),": Edit custom model data introduced on 1.14 in any version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.setCustomModelData(40);\n\nint model = tag.getCustomModelData();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RepairCost"),": Edit item anvil repair cost."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.setRepairCost(10);\n\nint cost = tag.getRepairCost();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Serialization"),": Fix any bad serialized item on Bukkit 1.14 or higher."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"On Minecraft 1.14, the item lore strings was moved to ",(0,i.kt)("a",{parentName:"p",href:"../../feature/chat-component/"},"chat component")," format, so Bukkit serialized items in some way cannot be compared with other items using ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack#isSimilar()")," because the chat component of serialized item lore doesn't contains various unused tags.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RtagItem tag = ...;\n\ntag.fixSerialization();\n")),(0,i.kt)("h2",{id:"load"},"Load"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RtagItem")," changes can be loaded in additional ways, instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEditor"),"."),(0,i.kt)("h3",{id:"get-copy"},"Get copy"),(0,i.kt)("p",null,"Instead of load the changes into provided ItemStack, you can create a item copy with changes loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack original = ...;\n\n// Create editor\nRtagItem tag = new RtagItem(original);\n\n// Edit tag\ntag.set(123, "path");\n\n// Get a copy with changes loaded\nItemStan newItem = tag.loadCopy();\n')))}g.isMDXComponent=!0}}]);