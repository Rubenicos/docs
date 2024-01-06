"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return n?o.createElement(f,l(l({ref:t},m),{},{components:n})):o.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:6,title:"Componente de chat",description:"Como utilizar el class de componentes de chat."},l=void 0,i={unversionedId:"rtag/feature/chat-component",id:"rtag/feature/chat-component",title:"Componente de chat",description:"Como utilizar el class de componentes de chat.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/feature/chat-component.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/chat-component",permalink:"/es/rtag/feature/chat-component",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/feature/chat-component.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1704582569,formattedLastUpdatedAt:"6 ene 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Componente de chat",description:"Como utilizar el class de componentes de chat."},sidebar:"rtag",previous:{title:"Cabezas con textura",permalink:"/es/rtag/feature/textured-heads"},next:{title:"APIs compatibles",permalink:"/es/rtag/feature/compatible"}},p={},c=[{value:"Conversi\xf3n",id:"conversi\xf3n",level:2},{value:"Formato mejorado para nbt",id:"formato-mejorado-para-nbt",level:2},{value:"Linea simple",id:"linea-simple",level:3},{value:"M\xfaltiples l\xedneas",id:"m\xfaltiples-l\xedneas",level:3}],m={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"El class ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatComponent")," contiene multiples m\xe9todos utiles para manejar cosas relacionadas con el chat."),(0,a.kt)("h2",{id:"conversi\xf3n"},"Conversi\xf3n"),(0,a.kt)("p",null,"Con el class ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatComponent")," puedes convertir strings (en formato json) en componentes de chat y viceversa."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// En component\nObject component = ChatComponent.fromJson("{\\"bold\\":true,\\"italic\\":false,\\"color\\":\\"dark_purple\\",\\"text\\":\\"Colored text!\\"}");\nObject sameComponent = ChatComponent.fromString("\xa75\xa7lColored text!");\n\n// Desde component\nString json = ChatComponent.toJson(component);\nString string = ChatComponent.toString(component);\n\n// Compatibilidad cruzada\nString json = ChatComponent.toJson("\xa75\xa7lColored text!");\nString string = ChatComponent.toString("{\\"bold\\":true,\\"italic\\":false,\\"color\\":\\"dark_purple\\",\\"text\\":\\"Colored text!\\"}");\n')),(0,a.kt)("h2",{id:"formato-mejorado-para-nbt"},"Formato mejorado para nbt"),(0,a.kt)("p",null,"Dale un formato mejorado (pretty format) a cualquier objeto nbt en una o m\xfaltiples l\xedneas separadas por ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," usando una paleta de color:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE")," - La paleta de color por defecto como el comando ",(0,a.kt)("inlineCode",{parentName:"li"},"/data")," de Minecraft (",(0,a.kt)("inlineCode",{parentName:"li"},'[ "\xa7f", "\xa7b", "\xa7a", "\xa76", "\xa7c" ]'),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE_HEX")," - Paleta de color modificada para Bukkit 1.16 o superior utilizando un formato hexadecimal para colores como ",(0,a.kt)("inlineCode",{parentName:"li"},"\xa7#RRGGBB"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE_BUNGEE")," - Paleta de color modificada para Bukkit 1.16 o superior utilizando el formato hexadecimal del chat de bungeecord para colores como ",(0,a.kt)("inlineCode",{parentName:"li"},"\xa7x\xa7R\xa7R\xa7G\xa7G\xa7B\xa7B"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NBT_PALETTE_MINIMESSAGE")," - Paleta de color por defecto utilizando el ",(0,a.kt)("a",{parentName:"li",href:"https://docs.advntr.dev/minimessage/index.html"},"formato MiniMessage de Adventure"),".")),(0,a.kt)("p",null,"Ejemplo con la paleta de color por defecto:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/saicone/rtag/main/docs/images/pretty-nbt.png",alt:"Pretty NBT"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Para hacer tu propia paleta debes proporcionar un ",(0,a.kt)("inlineCode",{parentName:"p"},"String[]")," de un tama\xf1o de 5 con los colores en el orden de:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Color base."),(0,a.kt)("li",{parentName:"ol"},"Color de las key (llave) de los compound."),(0,a.kt)("li",{parentName:"ol"},"Strings."),(0,a.kt)("li",{parentName:"ol"},"N\xfameros."),(0,a.kt)("li",{parentName:"ol"},"Sufijo de los n\xfameros."))),(0,a.kt)("p",null,"Ejemplo con una paleta de color personalizada:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/saicone/rtag/main/docs/images/pretty-nbt-palette.png",alt:"Pretty NBT with palette"})),(0,a.kt)("h3",{id:"linea-simple"},"Linea simple"),(0,a.kt)("p",null,"Para aplicar el formato en una sola l\xednea solamente se debe utilizar ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," en el segundo argumento."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Object nbt = ...;\n\n// Formato mejorato (pretty format) en un componente de chat, componente en json o un texto de color\nObject component = ChatComponent.toPrettyComponent(nbt, null);\nString json = ChatComponent.toPrettyJson(nbt, null);\nString colored = ChatComponent.toPrettyString(nbt, null);\n\n// Usando una paleta de color (ejemplo con texto de color)\nString colored = ChatComponent.toPrettyString(nbt, null, ChatComponent.NBT_PALETTE_BUNGEE);\n")),(0,a.kt)("h3",{id:"m\xfaltiples-l\xedneas"},"M\xfaltiples l\xedneas"),(0,a.kt)("p",null,"Para aplicar el formato en m\xfaltiples l\xedneas se debe proporcionar un ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," para usarlo como sangr\xeda, por ejemplo ",(0,a.kt)("inlineCode",{parentName:"p"},'"  "')," para una sangr\xeda de 2 espacios."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Object nbt = ...;\n\n// Formato mejorato (pretty format) en un componente de chat, componente en json o un texto de color\nObject component = ChatComponent.toPrettyComponent(nbt, "  ");\nString json = ChatComponent.toPrettyJson(nbt, "  ");\nString colored = ChatComponent.toPrettyString(nbt, "  ");\n\n// Usando una paleta de color (ejemplo con texto de color)\nString colored = ChatComponent.toPrettyString(nbt, "  ", ChatComponent.NBT_PALETTE_BUNGEE);\n')))}d.isMDXComponent=!0}}]);