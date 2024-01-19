"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=c(n),p=r,b=s["".concat(l,".").concat(p)]||s[p]||u[p]||i;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Objetos de Minecraft",description:"Information sobre objetos de minecraft en Rtag"},o=void 0,d={unversionedId:"rtag/advanced/minecraft",id:"rtag/advanced/minecraft",title:"Objetos de Minecraft",description:"Information sobre objetos de minecraft en Rtag",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/advanced/minecraft.md",sourceDirName:"rtag/advanced",slug:"/rtag/advanced/minecraft",permalink:"/es/rtag/advanced/minecraft",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/advanced/minecraft.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1705676835,formattedLastUpdatedAt:"19 ene 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Objetos de Minecraft",description:"Information sobre objetos de minecraft en Rtag"},sidebar:"rtag",previous:{title:"Objetos de Tag",permalink:"/es/rtag/advanced/tags"},next:{title:"Caracter\xedsticas",permalink:"/es/rtag/feature/"}},l={},c=[{value:"Objeto de item",id:"objeto-de-item",level:2},{value:"Crear",id:"crear",level:3},{value:"Convertir",id:"convertir",level:3},{value:"Editar",id:"editar",level:3},{value:"Objeto de entidad",id:"objeto-de-entidad",level:2},{value:"Convertir",id:"convertir-1",level:3},{value:"Editar",id:"editar-1",level:3},{value:"Objeto de bloque",id:"objeto-de-bloque",level:2},{value:"Convertir",id:"convertir-2",level:3},{value:"Editar",id:"editar-2",level:3}],m={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aqu\xed algunas classes \xfatiles para manejar objetos de Minecraft y objetos de CraftBukkit utilizando m\xe9todos simples."),(0,r.kt)("h2",{id:"objeto-de-item"},"Objeto de item"),(0,r.kt)("p",null,"El class ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemObject")," sirve para manejar items de Bukkit y Minecraft utilizando m\xe9todos simples compatibles con varias versiones."),(0,r.kt)("h3",{id:"crear"},"Crear"),(0,r.kt)("p",null,"Crear un ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack")," de Minecraft utilizando un ",(0,r.kt)("inlineCode",{parentName:"p"},"NBTTagCompound"),", tambi\xe9n mediante otros formatos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Crear utilizando un compound\nObject compound = ...;\nObject item = ItemObject.newItem(compound);\n\n// Crear utilizando un SNBT (o json)\nString snbt = "{id:\\"minecraft:diamond_sword\\"}";\nObject item = ItemObject.newItem(TagCompound.newTag(snbt));\n')),(0,r.kt)("h3",{id:"convertir"},"Convertir"),(0,r.kt)("p",null,"Convertir items de Bukkit y Minecraft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convertir en un ItemStack de Minecraft\nObject mcItem = ItemObject.asNMSCopy(item);\n\n// Convertir en un ItemStack de Bukkit\nItemStack sameItem = ItemObject.asBukkitCopy(mcItem);\n")),(0,r.kt)("h3",{id:"editar"},"Editar"),(0,r.kt)("p",null,"Editar varias cosas de los ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack")," de Bukkit y Minecraft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Object item = ItemObject.newItem(TagCompound.newTag("{id:\\"minecraft:diamond_sword\\"}"));\n\n// Guardar los datos del item en un NBTTagCompound\nObject compound = ItemObject.save(item);\n// Cargar los datos en un item utilizando un NBTTagCompound\nItemObject.load(item, compound);\n\n// Obtener el tag del item como un NBTTagCompound\nObject tag = ItemObject.getTag(item);\n// Reemplazar el tag del item\nItemObject.setTag(item, tag);\n\n\n// Cualquier ItemStack o CraftItemStack\nItemStack item = ...;\n\n// Obtener el ItemStack manejado por un CraftItemStack\n// O convertir el ItemStack de Bukkit en un ItemStack de Minecraft\nObject mcItem = ItemObject.getHandle(item);\n// Reemplazar el ItemStack manejado por el CraftItemStack\n// O cargar el ItemStack de Minecraft dentro del ItemStack de Bukkit\nItemObject.setHandle(item, mcItem);\n')),(0,r.kt)("h2",{id:"objeto-de-entidad"},"Objeto de entidad"),(0,r.kt)("p",null,"El class ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityObject")," sirve para manejar entidades de Bukkit y Minecraft utilizando m\xe9todos simples compatibles con varias versiones."),(0,r.kt)("h3",{id:"convertir-1"},"Convertir"),(0,r.kt)("p",null,"Convertir entidades de Bukkit y Minecraft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Entity entity = ...;\n\n// Convertir en un Entity de Minecraft\nObject mcEntity = EntityObject.getHandle(entity);\n\n// Convertir en un Entity de Bukkit\nEntity sameEntity = EntityObject.getEntity(mcEntity);\n")),(0,r.kt)("h3",{id:"editar-1"},"Editar"),(0,r.kt)("p",null,"Editar varias cosas de los ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," de Minecraft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Object entity = ...;\n\n// Guardar los datos de la entidad en un NBTTagCompound\nObject compound = EntityObject.save(entity);\n// Cargar los datos en una entidad utilizando un NBTTagCompound\nEntityObject.load(entity, compound);\n")),(0,r.kt)("h2",{id:"objeto-de-bloque"},"Objeto de bloque"),(0,r.kt)("p",null,"El class ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockObject")," sirve para manejar bloques de Bukkit y Minecraft utilizando m\xe9todos simples compatibles con varias versiones."),(0,r.kt)("h3",{id:"convertir-2"},"Convertir"),(0,r.kt)("p",null,"Convertir cualquier ",(0,r.kt)("inlineCode",{parentName:"p"},"Block")," de Bukkit en un ",(0,r.kt)("inlineCode",{parentName:"p"},"TileEntity")," de Minecraft (solo si es aplicable)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\n\n// Convertir en un TileEntity de Minecraft\nObject mcTileEntity = BlockObject.getTileEntity(block);\n")),(0,r.kt)("h3",{id:"editar-2"},"Editar"),(0,r.kt)("p",null,"Editar varias cosas de los ",(0,r.kt)("inlineCode",{parentName:"p"},"TileEntity")," de Minecraft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Object tileEntity = ...;\n\n// Guardar los datos del TileEntity en un NBTTagCompound\nObject compound = BlockObject.save(tileEntity);\n// Cargar los datos en un TileEntity utilizando un NBTTagCompound\nBlockObject.load(tileEntity, compound);\n")))}u.isMDXComponent=!0}}]);