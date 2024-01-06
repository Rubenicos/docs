"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[783],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:7,title:"APIs compatibles",description:"Lista de APIs que pueden ser utilizadas con Rtag"},o=void 0,l={unversionedId:"rtag/feature/compatible",id:"rtag/feature/compatible",title:"APIs compatibles",description:"Lista de APIs que pueden ser utilizadas con Rtag",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/feature/compatible.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/compatible",permalink:"/es/rtag/feature/compatible",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/feature/compatible.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1704582569,formattedLastUpdatedAt:"6 ene 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"APIs compatibles",description:"Lista de APIs que pueden ser utilizadas con Rtag"},sidebar:"rtag",previous:{title:"Componente de chat",permalink:"/es/rtag/feature/chat-component"},next:{title:"Gu\xedas",permalink:"/es/rtag/guides/"}},s={},d=[{value:"PersistentDataContainer de Bukkit",id:"persistentdatacontainer-de-bukkit",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Inyector de NBT del Item-NBT-API",id:"inyector-de-nbt-del-item-nbt-api",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Existen algunas APIs compatibles las cuales Rtag puede interactuar con estas."),(0,r.kt)("h2",{id:"persistentdatacontainer-de-bukkit"},"PersistentDataContainer de Bukkit"),(0,r.kt)("p",null,"La api de ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer")," fue introducida en la versi\xf3n 1.14 de Bukkit para guardar tags custom en diferentes objetos como items, entidades y tile entity, haciendo la edici\xf3n de los tags de NBT m\xe1s f\xe1cil para muchos desarrolladores, b\xe1sicamente la misma utilidad que Rtag pero limitada a solo editar tags custom, solamente compatible con los ",(0,r.kt)("a",{parentName:"p",href:"../../intro/#objetos-compatibles"},"objetos compatibles")," y utilizando la instancia de un plugin, adem\xe1s de ser necesario el saber editar NBT para hacer algo funcional."),(0,r.kt)("p",null,"Con Rtag es posible editar objetos del ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer")," debido a que son guardados en la ruta ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicBukkitValues -> <plugin>:<key>"),"."),(0,r.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("p",null,'Por ejemplo, si un plugin llamado "CoolPlugin" guarda el valor de un ',(0,r.kt)("inlineCode",{parentName:"p"},"String"),' en el key "asd" utilizando el API de ',(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer"),", podr\xe1s editarlo usando el siguiente m\xe9todo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Usando un item\nRtagItem tag = new RtagItem(item);\n// Usando una entidad\nRtagEntity tag = new RtagEntity(entity);\n// Usando un bloque\nRtagBlock tag = new RtagBlock(block);\n\n// Obtener\nString value = tag.get("PublicBukkitValues", "coolplugin:asd");\n\n// Establecer\nString str = "Hello";\ntag.get(str, "PublicBukkitValues", "coolplugin:asd");\n')),(0,r.kt)("h2",{id:"inyector-de-nbt-del-item-nbt-api"},"Inyector de NBT del Item-NBT-API"),(0,r.kt)("p",null,"La caracter\xedstica del inyector del Item-NBT-API permite guardar tags custom en las entidades y tile entity, lo mismo que ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentDataContainer")," pero compatible con versiones m\xe1s viejas que la 1.14 de Bukkit."),(0,r.kt)("p",null,"Con Rtag es posible editar esos tags custom debido a que est\xe1n guardados en la ruta ",(0,r.kt)("inlineCode",{parentName:"p"},"__extraData"),"."),(0,r.kt)("h3",{id:"ejemplo-1"},"Ejemplo"),(0,r.kt)("p",null,"Las ediciones son las mismas, pero todas las rutas empiezan con ",(0,r.kt)("inlineCode",{parentName:"p"},"__extraData"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Usando una entidad\nRtagEntity tag = new RtagEntity(entity);\n// Usando un bloque\nRtagBlock tag = new RtagBlock(block);\n\nString str = "My String";\n// Establecer en la ruta "my -> saved -> object"\ntag.set(str, "__extraData", "my", "saved", "object");\n\n// Obtener desde "my <- save <- object"\nString sameStr = tag.get("__extraData", "my", "saved", "object");\n\n// Obtener desde la ruta\ntag.remove("__extraData", "my", "saved", "object");\n')))}p.isMDXComponent=!0}}]);