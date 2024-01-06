"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[797],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(a),g=i,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||r;return a?n.createElement(m,o(o({ref:e},p),{},{components:a})):n.createElement(m,o({ref:e},p))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4966:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3,title:"RtagEntity",description:"Editar el NBT de las entidades"},o=void 0,l={unversionedId:"rtag/usage/entity",id:"rtag/usage/entity",title:"RtagEntity",description:"Editar el NBT de las entidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/usage/entity.md",sourceDirName:"rtag/usage",slug:"/rtag/usage/entity",permalink:"/es/rtag/usage/entity",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/usage/entity.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1704582569,formattedLastUpdatedAt:"6 ene 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"RtagEntity",description:"Editar el NBT de las entidades"},sidebar:"rtag",previous:{title:"RtagItem",permalink:"/es/rtag/usage/item"},next:{title:"RtagBlock",permalink:"/es/rtag/usage/block"}},s={},d=[{value:"Crear",id:"crear",level:2},{value:"Instancia",id:"instancia",level:3},{value:"M\xe9todo",id:"m\xe9todo",level:3},{value:"Funci\xf3n",id:"funci\xf3n",level:3},{value:"Editar",id:"editar",level:2},{value:"Funci\xf3n",id:"funci\xf3n-1",level:3},{value:"M\xe9todos de instancia",id:"m\xe9todos-de-instancia",level:3}],p={toc:d},u="wrapper";function c(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Antes de continuar",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Para entender esta p\xe1gina primero debes ver ",(0,i.kt)("a",{parentName:"p",href:"../../usage/editor/"},"la gu\xeda de RtagEditor"),"."),(0,i.kt)("p",{parentName:"admonition"},"Para entender sobre los tags comunes en las entidades se sugiere visitar la ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Entity_format"},"p\xe1gina de la wiki de Minecraft"),".")),(0,i.kt)("admonition",{title:"\xbfBuscando tags no-vanilla?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Si quieres agregar tags no-vanilla a las entidades, echa un vistazo en la secci\xf3n de ",(0,i.kt)("a",{parentName:"p",href:"../../feature/compatible/"},"APIs compatibles"),"."),(0,i.kt)("p",{parentName:"admonition"},'Por ahora Rtag no ofrece una "forma segura" de guardar tags no-vanilla en versiones viejas de Bukkit.')),(0,i.kt)("p",null,"El ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEntity")," es una instancia de ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEditor"),", as\xed que utiliza los mismos m\xe9todos para editar, cargar y actualizar los cambios como un editor de tags."),(0,i.kt)("h2",{id:"crear"},"Crear"),(0,i.kt)("p",null,"Existen multiples maneras de crear una instancia de ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEntity"),"."),(0,i.kt)("h3",{id:"instancia"},"Instancia"),(0,i.kt)("p",null,"Usando un constructor simple que acepta cualquier tipo de ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Entity entity = ...;\n\nRtagEntity tag = new RtagEntity(entity);\n")),(0,i.kt)("p",null,"O especificando la instancia de Rtag que se utilizar\xe1 para manejar el NBT."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Entity entity = ...;\nRtag rtag = ...;\n\nRtagEntity tag = new RtagEntity(rtag, entity);\n")),(0,i.kt)("h3",{id:"m\xe9todo"},"M\xe9todo"),(0,i.kt)("p",null,"Usando un m\xe9todo simple que acepta cualquier tipo de ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Entity entity = ...;\n\nRtagEntity tag = RtagEntity.of(entity);\n")),(0,i.kt)("p",null,"O especificando la instancia de Rtag que se utilizar\xe1 para manejar el NBT."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Entity entity = ...;\nRtag rtag = ...;\n\nRtagEntity tag = RtagEntity.of(rtag, entity);\n")),(0,i.kt)("h3",{id:"funci\xf3n"},"Funci\xf3n"),(0,i.kt)("p",null,"Usando funciones es la forma m\xe1s f\xe1cil de editar NBT manejando el ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEntity"),"."),(0,i.kt)("p",null,"Puedes editar el ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," proporcionado sin necesidad de reemplazarlo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Entity entity = ...;\n\n// Editar la entidad\nRtagEntity.edit(entity, tag -> {\n    tag.set(123, "path");\n});\n\n// Especificar la instancia de Rtag\nRtag rtag = ...;\nRtagEntity.edit(rtag, entity, tag -> {\n    tag.set(123, "path");\n});\n')),(0,i.kt)("p",null,"Tomar en cuenta que el m\xe9todo devuelve el propio ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," con los cambios cargados."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Entity entity = ...;\n\n// Editar la entidad\nEntity sameEntity = RtagEntity.edit(entity, tag -> {\n    tag.set(123, "path");\n});\n\n// Especificar la instancia de Rtag\nRtag rtag = ...;\nEntity sameEntity = RtagEntity.edit(rtag, entity, tag -> {\n    tag.set(123, "path");\n});\n')),(0,i.kt)("p",null,"Adem\xe1s puedes devolver cualquier tipo de objeto especificado en la funci\xf3n."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Entity entity = ...;\n\n// Obtenerlo como quieras desde la instancia del RtagEditor\nint number = RtagEntity.edit(entity, tag -> {\n    return tag.get("path");\n});\n')),(0,i.kt)("h2",{id:"editar"},"Editar"),(0,i.kt)("p",null,"Existen algunos m\xe9todos dentro de ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEntity")," que el ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEditor")," no tiene."),(0,i.kt)("h3",{id:"funci\xf3n-1"},"Funci\xf3n"),(0,i.kt)("p",null,"Como las funciones explicadas anteriormente, el ",(0,i.kt)("inlineCode",{parentName:"p"},"RtagEntity")," actual puede se editado utilizando una funci\xf3n que devuelve su propia instancia."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RtagEntity tag = ...;\n\ntag.edit(tag -> {\n    tag.set(123, "path");\n    tag.set("Hello", "greeting");\n});\n')),(0,i.kt)("h3",{id:"m\xe9todos-de-instancia"},"M\xe9todos de instancia"),(0,i.kt)("p",null,"Existen algunos m\xe9todos ",(0,i.kt)("strong",{parentName:"p"},"f\xe1ciles de utilizar")," para editar ",(0,i.kt)("strong",{parentName:"p"},"tags conocidos dla entidad")," de una manera simple, teniendo soporte para una amplia variedad de versiones de Minecraft."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vida"),": Editar la vida de la entidad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RtagEntity tag = ...;\n\ntag.setHealth(170f);\n\nfloat health = tag.getHealth();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Atributos"),": Manejar los valores de los atributos."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RtagEntity tag = ...;\n\ntag.setAttributeBase("generic.attackDamage", 0.5d);\n// Lo mismo que el de arriba\ntag.setAttributeValue("generic.attackDamage", "Base", 0.5d);\n\ndouble damage = tag.getAttributeBase("generic.attackDamage");\n// Lo mismo que el de arriba\nObject value = tag.getAttributeValue("generic.attackDamage", "Base");\n')))}c.isMDXComponent=!0}}]);