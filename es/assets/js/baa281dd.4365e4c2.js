"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7131],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||r;return t?n.createElement(m,l(l({ref:a},d),{},{components:t})):n.createElement(m,l({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1569:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:4,title:"RtagBlock",description:"Editar el NBT de los bloques"},l=void 0,i={unversionedId:"rtag/usage/block",id:"rtag/usage/block",title:"RtagBlock",description:"Editar el NBT de los bloques",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/usage/block.md",sourceDirName:"rtag/usage",slug:"/rtag/usage/block",permalink:"/es/rtag/usage/block",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/usage/block.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"31 ene 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"RtagBlock",description:"Editar el NBT de los bloques"},sidebar:"rtag",previous:{title:"RtagEntity",permalink:"/es/rtag/usage/entity"},next:{title:"Avanzado",permalink:"/es/rtag/advanced/"}},c={},s=[{value:"Crear",id:"crear",level:2},{value:"Instancia",id:"instancia",level:3},{value:"M\xe9todo",id:"m\xe9todo",level:3},{value:"Funci\xf3n",id:"funci\xf3n",level:3},{value:"Editar",id:"editar",level:2},{value:"Funci\xf3n",id:"funci\xf3n-1",level:3},{value:"M\xe9todos de instancia",id:"m\xe9todos-de-instancia",level:3}],d={toc:s},p="wrapper";function u(e){let{components:a,...t}=e;return(0,o.kt)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Limitaciones actuales",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'Por ahora el RtagBlock solo puede ser utilizado para editar los tags de "tile entities", as\xed que ',(0,o.kt)("strong",{parentName:"p"},"est\xe1 planeado")," utilizar el PersistentDataContainer de los chunks (agregado en la versi\xf3n 1.16 de Bukkit) para guardar tags en cualquier bloque.")),(0,o.kt)("admonition",{title:"Antes de continuar",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Para entender esta p\xe1gina primero debes ver ",(0,o.kt)("a",{parentName:"p",href:"../../usage/editor/"},"la gu\xeda de RtagEditor"),"."),(0,o.kt)("p",{parentName:"admonition"},'Para entender sobre los tags comunes en las "tile entities" se sugiere visitar la ',(0,o.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Chunk_format#Block_entity_format"},"p\xe1gina de la wiki de Minecraft"),".")),(0,o.kt)("admonition",{title:"\xbfBuscando tags no-vanilla?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Si quieres agregar tags no-vanilla a las entidades, echa un vistazo en la secci\xf3n de ",(0,o.kt)("a",{parentName:"p",href:"../../feature/compatible/"},"APIs compatibles"),"."),(0,o.kt)("p",{parentName:"admonition"},'Por ahora Rtag no ofrece una "forma segura" de guardar tags no-vanilla en versiones viejas de Bukkit.')),(0,o.kt)("p",null,"El ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock")," es una instancia de ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagEditor"),", as\xed que utiliza los mismos m\xe9todos para editar, cargar y actualizar los cambios como un editor de tags."),(0,o.kt)("h2",{id:"crear"},"Crear"),(0,o.kt)("p",null,"Existen multiples maneras de crear una instancia de ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock"),"."),(0,o.kt)("h3",{id:"instancia"},"Instancia"),(0,o.kt)("p",null,"Usando un constructor simple que acepta cualquier tipo de ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\n\nRtagBlock tag = new RtagBlock(block);\n")),(0,o.kt)("p",null,"O especificando la instancia de Rtag que se utilizar\xe1 para manejar el NBT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\nRtag rtag = ...;\n\nRtagBlock tag = new RtagBlock(rtag, block);\n")),(0,o.kt)("h3",{id:"m\xe9todo"},"M\xe9todo"),(0,o.kt)("p",null,"Usando un m\xe9todo simple que acepta cualquier tipo de ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\n\nRtagBlock tag = RtagBlock.of(block);\n")),(0,o.kt)("p",null,"O especificando la instancia de Rtag que se utilizar\xe1 para manejar el NBT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Block block = ...;\nRtag rtag = ...;\n\nRtagBlock tag = RtagBlock.of(rtag, block);\n")),(0,o.kt)("h3",{id:"funci\xf3n"},"Funci\xf3n"),(0,o.kt)("p",null,"Usando funciones es la forma m\xe1s f\xe1cil de editar NBT manejando el ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock"),"."),(0,o.kt)("p",null,"Puedes editar el ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," proporcionado sin necesidad de reemplazarlo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Block block = ...;\n\n// Editar el bloque\nRtagBlock.edit(block, tag -> {\n    tag.set(123, "path");\n});\n\n// Especificar la instancia de Rtag\nRtag rtag = ...;\nRtagBlock.edit(rtag, block, tag -> {\n    tag.set(123, "path");\n});\n')),(0,o.kt)("p",null,"Tomar en cuenta que el m\xe9todo devuelve el propio ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," con los cambios cargados."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Block block = ...;\n\n// Editar el bloque\nBlock sameBlock = RtagBlock.edit(block, tag -> {\n    tag.set(123, "path");\n});\n\n// Especificar la instancia de Rtag\nRtag rtag = ...;\nBlock sameBlock = RtagBlock.edit(rtag, block, tag -> {\n    tag.set(123, "path");\n});\n')),(0,o.kt)("p",null,"Adem\xe1s puedes devolver cualquier tipo de objeto especificado en la funci\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Block block = ...;\n\n// Obtenerlo como quieras desde la instancia del RtagEditor\nint number = RtagBlock.edit(block, tag -> {\n    return tag.get("path");\n});\n')),(0,o.kt)("h2",{id:"editar"},"Editar"),(0,o.kt)("p",null,"Existen algunos m\xe9todos dentro de ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock")," que el ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagEditor")," no tiene."),(0,o.kt)("h3",{id:"funci\xf3n-1"},"Funci\xf3n"),(0,o.kt)("p",null,"Como las funciones explicadas anteriormente, el ",(0,o.kt)("inlineCode",{parentName:"p"},"RtagBlock")," actual puede se editado utilizando una funci\xf3n que devuelve su propia instancia."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'RtagBlock tag = ...;\n\ntag.edit(tag -> {\n    tag.set(123, "path");\n    tag.set("Hello", "greeting");\n});\n')),(0,o.kt)("h3",{id:"m\xe9todos-de-instancia"},"M\xe9todos de instancia"),(0,o.kt)("p",null,"Existen algunos m\xe9todos ",(0,o.kt)("strong",{parentName:"p"},"f\xe1ciles de utilizar")," para editar ",(0,o.kt)("strong",{parentName:"p"},"tags conocidos del bloque")," de una manera simple, teniendo soporte para una amplia variedad de versiones de Minecraft."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nombre custom"),': Editar el nombre mostrado para la "tile entity" (como por ejemplo un cofre).'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'RtagBlock tag = ...;\n\n// Establecer utilizando un String con el formato de chat de colores o el formato\n// de componente de chat en json\ntag.setCustomName("\xa7eColored name");\n\n// Obtener en formato de chat de colores\nString name = tag.getCustomName();\n')))}u.isMDXComponent=!0}}]);