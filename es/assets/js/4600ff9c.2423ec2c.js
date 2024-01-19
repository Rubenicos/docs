"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[281],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4171:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2,title:"Info B\xe1sica",description:"Informaci\xf3n b\xe1sica para entender el NBT"},i=void 0,l={unversionedId:"rtag/intro",id:"rtag/intro",title:"Info B\xe1sica",description:"Informaci\xf3n b\xe1sica para entender el NBT",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/intro.md",sourceDirName:"rtag",slug:"/rtag/intro",permalink:"/es/rtag/intro",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/es/intro.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1705676835,formattedLastUpdatedAt:"19 ene 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Info B\xe1sica",description:"Informaci\xf3n b\xe1sica para entender el NBT"},sidebar:"rtag",previous:{title:"Rtag",permalink:"/es/rtag/"},next:{title:"Usar Rtag",permalink:"/es/rtag/usage/"}},s={},p=[{value:"\xbfQu\xe9 is NBT?",id:"qu\xe9-is-nbt",level:2},{value:"Objetos compatibles",id:"objetos-compatibles",level:2},{value:"Sobre Bukkit",id:"sobre-bukkit",level:2},{value:"La magia de Rtag",id:"la-magia-de-rtag",level:2}],c={toc:p},m="wrapper";function u(e){let{components:a,...t}=e;return(0,o.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"qu\xe9-is-nbt"},"\xbfQu\xe9 is NBT?"),(0,o.kt)("p",null,'El NBT por sus siglas en ingl\xe9s significa "Etiqueta Binaria con Nombre" (Named Binary Tag), el cual es un formato al estilo de una estructura de datos de \xe1rbol usado por Minecraft para guardar datos en diferentes formatos como si fuera bytes, un NBT es solamente un objeto normal de java (String, Integer, List.. etc) con una key (llave) definida.'),(0,o.kt)("p",null,"El formato de NBT es com\xfanmente utilizado para guardar objetos de Minecraft como mundos, items, entidades... etc."),(0,o.kt)("p",null,"Los classes de NBT dentro del c\xf3digo de Minecraft est\xe1n extendidos por ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTBase")," y hacen referencia a objetos normales de Java: ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagString"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagInt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagLong"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagList"),"... etc. El class principal de las estructuras de datos NBT ser\xeda el ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagCompound")," que se refiere a un Map en Java y es el objeto b\xe1sico para guardar objetos NBT con sus respectivas keys (llaves) en un ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, NBTBase>"),"."),(0,o.kt)("h2",{id:"objetos-compatibles"},"Objetos compatibles"),(0,o.kt)("p",null,"Los objetos NBT definidos por su n\xfamero de ID son:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagByte"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"byte")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagShort"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"short")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagInt"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"int")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagLong"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"long")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagFloat"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"float")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagDouble"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"double")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagByteArray"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"byte[]")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagString"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagList"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"List<NBTBase>")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagCompound"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"Map<String, NBTBase>")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagIntArray"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"int[]")," en Java."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NBTTagLongArray"),": Lo mismo que ",(0,o.kt)("inlineCode",{parentName:"li"},"long[]")," en Java (Agregado en MC 1.12).")),(0,o.kt)("admonition",{title:"\xbfY el objeto de boolean?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Seguramente notaste que los booleans no son compatibles, eso es porque son guardados como ",(0,o.kt)("inlineCode",{parentName:"p"},"byte")," (",(0,o.kt)("inlineCode",{parentName:"p"},"NBTTagByte"),")."),(0,o.kt)("p",{parentName:"admonition"},"As\xed que toma en cuenta que Java por defecto no puede convertir un ",(0,o.kt)("inlineCode",{parentName:"p"},"byte")," en ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," de manera autom\xe1tica (pero si al rev\xe9s jaja), ver\xe1s una mejor explicaci\xf3n despu\xe9s.")),(0,o.kt)("h2",{id:"sobre-bukkit"},"Sobre Bukkit"),(0,o.kt)("p",null,'Primero que nada, el "NMS" hace referencia al package ',(0,o.kt)("inlineCode",{parentName:"p"},"net.minecraft.server"),' que se utilizaba en versiones viejas de Bukkit antes de la "universalizaci\xf3n" (Lo que sucedi\xf3 en el Bukkit 1.17 con sus mappings) el cual contiene diferentes classes del servidor original de Minecraft distribu\xeddo por Mojang, utilizado por Bukkit para funcionar como un servidor.'),(0,o.kt)("p",null,"Las versiones m\xe1s recientes de Bukkit (desde la 1.17) tiene diferentes packages para los classes del c\xf3digo de Minecraft, por ejemplo ",(0,o.kt)("inlineCode",{parentName:"p"},"net.minecraft.world.level.World"),"."),(0,o.kt)("p",null,"El NMS es conocido popularmente por utilizarse con ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/technical-resources/articles/java/javareflection.html"},"reflection")," ya que Mojang cambia constantemente los m\xe9todos y utiliza ",(0,o.kt)("a",{parentName:"p",href:"https://www.javatpoint.com/java-obfuscator"},"ofuscadores")," en su c\xf3digo."),(0,o.kt)("p",null,"As\xed que ha sido un problema frecuente para los desarrolladores que utilizan el NBT directamente env\xe9s de los m\xe9todos ofrecidos por Bukkit, como el PersistentDataContainer introducido en la versi\xf3n 1.14 de Bukkit."),(0,o.kt)("h2",{id:"la-magia-de-rtag"},"La magia de Rtag"),(0,o.kt)("p",null,'Para simplificar el uso de NBT, la librer\xeda Rtag explicada en ingl\xe9s como "Tag legible" (readable tag) prove\xe9 una forma f\xe1cil para manejar los NBTTagCompound y los otros objetos compatibles.'),(0,o.kt)("p",null,"Rtag hace (o lo intenta) una conversi\xf3n de cualquier objeto de Java en un ",(0,o.kt)("inlineCode",{parentName:"p"},"NBTBase")," y viceversa, y de esta manera manejar los NBT como si fueran objetos normales de java en una forma f\xe1cil."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// OBTENER - Lo ver\xe1s como un objeto normal\nNBTBase -> Object\n// ESTABLECER - El servidor lo guardar\xe1 como un objeto NBTBase\nObject -> NBTBase\n")),(0,o.kt)("p",null,"Actualmente limitado por la conversi\xf3n de ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", as\xed que es sugerido obtenerlos como ",(0,o.kt)("inlineCode",{parentName:"p"},"byte")," o ejecutar una ",(0,o.kt)("a",{parentName:"p",href:"../feature/types/#conversion"},"conversi\xf3n expl\xedcita"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// obtener desde la ruta\nbyte data = rtag.get(compound, "path");\n// convertir en boolean\nboolean bool = data == (byte) 1;\n\n// o convertir utilizando una conversi\xf3n expl\xedcita\nboolean bool = rtag.getOptional(compound, "path").asBoolean(false); // false por defecto\n')))}u.isMDXComponent=!0}}]);