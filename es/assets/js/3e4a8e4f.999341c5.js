"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2,title:"Objetos de Tag",description:"Informaci\xf3n sobre Rtag manejando NBT"},i=void 0,l={unversionedId:"rtag/advanced/tags",id:"rtag/advanced/tags",title:"Objetos de Tag",description:"Informaci\xf3n sobre Rtag manejando NBT",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/advanced/tags.md",sourceDirName:"rtag/advanced",slug:"/rtag/advanced/tags",permalink:"/es/rtag/advanced/tags",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/advanced/tags.md",tags:[],version:"current",lastUpdatedBy:"Rub\xe9n",lastUpdatedAt:1690913999,formattedLastUpdatedAt:"1 ago 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Objetos de Tag",description:"Informaci\xf3n sobre Rtag manejando NBT"},sidebar:"rtag",previous:{title:"Explicaci\xf3n",permalink:"/es/rtag/advanced/explanation"},next:{title:"Objetos de Minecraft",permalink:"/es/rtag/advanced/minecraft"}},s={},p=[{value:"TagBase",id:"tagbase",level:2},{value:"Crear",id:"crear",level:3},{value:"Obtener valores",id:"obtener-valores",level:3},{value:"TagList",id:"taglist",level:2},{value:"TagCompound",id:"tagcompound",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aqu\xed algunas classes \xfatiles para manejar objetos NBT utilizando m\xe9todos simples."),(0,o.kt)("h2",{id:"tagbase"},"TagBase"),(0,o.kt)("p",null,"Es el class principal para manejar cualquier tipo de objeto NBT."),(0,o.kt)("h3",{id:"crear"},"Crear"),(0,o.kt)("p",null,"Con el class ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase")," puede crear objetos NBT con cualquier tipo de objeto (normal de java), por defecto solo tiene soporte para los ",(0,o.kt)("a",{parentName:"p",href:"../../intro/#objetos-compatibles"},"objetos compatibles"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," guardado como ",(0,o.kt)("inlineCode",{parentName:"p"},"Byte")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," guardado como ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Este m\xe9todo NO es compatible con Map o List\nObject nbtObject = TagBase.newTag("Hello");\n\n// Este m\xe9todo SI es compatible con Map, List y cualquier objeto deserializable utilizando Gson\nRtagMirror mirror = ...;\nObject nbtObject = TagBase.newTag(mirror, Map.of("greeting", "Hello"));\n\n// Copiar el objeto NBT\nObject nbtCopy = TagBase.clone(nbtObject);\n')),(0,o.kt)("h3",{id:"obtener-valores"},"Obtener valores"),(0,o.kt)("p",null,"El class ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase")," tiene diferentes m\xe9todos para obtener el equivalente en un objeto de Java desde cualquier objeto NBT, el ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," es obtenido como ",(0,o.kt)("inlineCode",{parentName:"p"},"Byte")," y el ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," es obtenido como ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"int[]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Objeto NBT\nObject nbtObject = ...;\n\n// Obtener el ID que representa el tipo de NBT\nbyte type = TagBase.getTypeId(nbtObject);\n\n// Obtener el equivalente en un objeto de Java\n// Este m\xe9todo NO es compatible con Map o List\nObject value = TagBase.getValue(nbtObject);\n\n// Obtener el equivalente en un objeto de Java\n// Este m\xe9todo SI es compatible con Map o List, pero\n// solo prove\xe9 conversi\xf3n con objetos serializables si\n// la instancia de RtagMirror lo permite\nRtagMirror mirror = ...;\nObject value = TagBase.getValue(mirror, nbtObject);\n")),(0,o.kt)("h2",{id:"taglist"},"TagList"),(0,o.kt)("p",null,"Es un class m\xe1s espec\xedfico para manejar cualquier ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagList")," como si fuera en java un ",(0,o.kt)("inlineCode",{parentName:"p"},"List<NBTBase>"),", tamb\xed\xe9n tiene los m\xe9todos mencionados anteriormente del class ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase"),", pero solo funcionan para las listas de NBT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Crear un NBTTagList\nObject nbtList = TagList.newTag();\n\n// Agregar un valor\nTagList.add(nbtList, TagBase.newTag("Hello"));\n\n// Obtener el tama\xf1o de la lista\nint size = TagList.size(nbtList);\n\n// Obtener un valor desde su posici\xf3n\nObject nbtObject = TagList.get(nbtList, 0); // posici\xf3n: 0\n\n// Obtener el valor dentro de la instancia de NBTTagList, una lista de NBTBase\nList<Object> value = TagList.getValue(nbtList);\n\n// Limpiar la lista\nTagList.clear(nbtList);\n')),(0,o.kt)("h2",{id:"tagcompound"},"TagCompound"),(0,o.kt)("p",null,"Es un class m\xe1s espec\xedfico para manejar cualquier ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagCompound")," como si fuera en java un ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, NBTBase>"),", tamb\xed\xe9n tiene los m\xe9todos mencionados anteriormente del class ",(0,o.kt)("inlineCode",{parentName:"p"},"TagBase"),", pero solo funcionan para los NBTTagCompound."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Crear un NBTTagCompound\nObject nbtCompound = TagCompound.newTag();\n// O crear un NBTTagCompound utilizando un SNBT (tambi\xe9n es compatible con json)\nObject nbtCompound = TagCompound.newTag("{greeting:\\"Hello\\",someValue:123}");\n\n// Agregar un valor\nTagCompound.set(nbtCompound, "greeting", TagBase.newTag("Hello"));\n\n// Obtener el tama\xf1o del compound\nint size = TagCompound.getValue(nbtCompound).size();\n\n// Obtener un valor utilizando su key\nObject nbtObject = TagCompound.get(nbtCompound, "greeting");\n\n// Obtener el valor dentro de la instancia de NBTTagCompound, un Map de NBTBase\nMap<String, Object> value = TagCompound.getValue(nbtCompound);\n\n// Obtener el NBTTagCompound como si fuera un String en formato Json\nString json = TagCompound.getJson(nbtCompound);\n\n// Limpiar el compound\nTagCompound.clear(nbtCompound);\n')))}u.isMDXComponent=!0}}]);