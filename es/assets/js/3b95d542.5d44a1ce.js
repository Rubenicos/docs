"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,b=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return a?n.createElement(b,l(l({ref:t},m),{},{components:a})):n.createElement(b,l({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6775),s=a(1980),u=a(7392),m=a(12);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==i&&(c(t),s(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(T,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},3783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={sidebar_position:4,title:"Tag Stream",description:"Convierte NBT en otros tipos de datos y viceversa"},s=void 0,u={unversionedId:"rtag/feature/stream",id:"rtag/feature/stream",title:"Tag Stream",description:"Convierte NBT en otros tipos de datos y viceversa",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/feature/stream.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/stream",permalink:"/es/rtag/feature/stream",draft:!1,editUrl:"https://github.com/saicone/docs/blob/main/docs/rtag/feature/stream.md",tags:[],version:"current",lastUpdatedBy:"Rub\xe9n",lastUpdatedAt:1690769316,formattedLastUpdatedAt:"31 jul 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Tag Stream",description:"Convierte NBT en otros tipos de datos y viceversa"},sidebar:"rtag",previous:{title:"Rutas funcionales",permalink:"/es/rtag/feature/functions"},next:{title:"Cabezas con textura",permalink:"/es/rtag/feature/textured-heads"}},m={},c=[{value:"Informaci\xf3n",id:"informaci\xf3n",level:2},{value:"TagCompound Data",id:"tagcompound-data",level:2},{value:"ItemTagStream",id:"itemtagstream",level:2}],p={toc:c},d="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"informaci\xf3n"},"Informaci\xf3n"),(0,r.kt)("p",null,"Rtag tiene la opci\xf3n de guardar los NBTTagCompound en diferentes formas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Archivos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Base64"},"Base64")),(0,r.kt)("li",{parentName:"ul"},"Bytes"),(0,r.kt)("li",{parentName:"ul"},"Maps (",(0,r.kt)("inlineCode",{parentName:"li"},"Map<String, Object>"),")"),(0,r.kt)("li",{parentName:"ul"},"String (En formato SNBT, tambi\xe9n compatible con Json)"),(0,r.kt)("li",{parentName:"ul"},"Map legible (Solo para items)")),(0,r.kt)("p",null,"Incluyendo compatibilidad con objetos serializables."),(0,r.kt)("h2",{id:"tagcompound-data"},"TagCompound Data"),(0,r.kt)("p",null,"El class TagCompound incluido en Rtag contiene una forma f\xe1cil para convertir y obtener cualquier NBTTagCompound desde Archivo, Base64, Bytes, Map y String."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"file",label:"Archivo",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// NBTTagCompound desde cualquer parte\nObject compound = ...;\n\n// Convertirlo en un archivo\nFile file TagCompound.DATA.toFile(compound, new File("archivo.nbt"));\n\n// Obtener el compound desde un archivo\nObject tagCompound = TagCompound.DATA.fromFile(file);\n'))),(0,r.kt)(l.Z,{value:"base64",label:"Base64",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// NBTTagCompound desde cualquer parte\nObject compound = ...;\n\n// Convertirlo en Base64\nString base64 = TagCompound.DATA.toBase64(compound);\n\n// Obtener el compound desde Base64\nObject tagCompound = TagCompound.DATA.fromBase64(base64)[0]; // Devuelve un array\n"))),(0,r.kt)(l.Z,{value:"bytes",label:"Bytes",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// NBTTagCompound desde cualquer parte\nObject compound = ...;\n\n// Convertirlo en un array de bytes\nbyte[] bytes = TagCompound.DATA.toBytes(compound);\n\n// Obtener el compound desde el array de bytes\nObject tagCompound = TagCompound.DATA.fromBytes(bytes);\n"))),(0,r.kt)(l.Z,{value:"map",label:"Map",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// NBTTagCompound desde cualquer parte\nObject compound = ...;\n\n// Convertirlo en un Map\nMap<String, Object> map = TagCompound.DATA.toMap(compound);\n\n// Obtener el compound desde el Map\nObject tagCompound = TagCompound.DATA.fromMap(map);\n"))),(0,r.kt)(l.Z,{value:"string",label:"String",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// NBTTagCompound desde cualquer parte\nObject compound = ...;\n\n// Convertirlo en un SNBT\nString snbt = TagCompound.DATA.toString(compound);\n\n// Obtener el compound desde el SNBT\nObject tagCompound = TagCompound.DATA.fromString(snbt);\n")))),(0,r.kt)("h2",{id:"itemtagstream"},"ItemTagStream"),(0,r.kt)("p",null,"Rtag incluye compatibilidad para convertir los ItemStack en archivos, Base64, Bytes, Map, String y Map legible, esto es realmente \xfatil si quieres ",(0,r.kt)("strong",{parentName:"p"},"guardar items en bases de datos"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'El formato de "map legible" convierte el nombre y lore del item en Strings colorizados, env\xe9s del formato de ',(0,r.kt)("a",{parentName:"p",href:"../../feature/chat-component/"},"componente de chat")," introducido para el NBT de los items en Minecraft 1.13, es bastante \xfatil si quieres guardar items en archivos y hacerlos editables por el usuario sin necesidad de entender componentes de chat.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"file",label:"Archivo",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = ...;\n\n// Convertirlo en un archivo\nFile file = ItemTagStream.INSTANCE.toFile(item, new File("archivo.nbt"));\n\n// Obtener el item desde un archivo\nItemStack sameItem = ItemTagStream.INSTANCE.fromFile(file);\n'))),(0,r.kt)(l.Z,{value:"base64",label:"Base64",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convertirlo en Base64\nString base64 = ItemTagStream.INSTANCE.toBase64(item);\n\n// Obtener el item desde Base64\nItemStack sameItem = ItemTagStream.INSTANCE.fromBase64(base64)[0]; // Devuelve un array\n\n\nList<ItemStack> items = // Lista de items;\n\n// Convertirlo en Base64\nString base64 = ItemTagStream.INSTANCE.toBase64(items);\n\n// Obtener la lista desde Base64\nList<ItemStack> sameItems = ItemTagStream.INSTANCE.listFromBase64(base64);\n"))),(0,r.kt)(l.Z,{value:"bytes",label:"Bytes",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convertirlo en un array de bytes\nbyte[] bytes = ItemTagStream.INSTANCE.toBytes(item);\n\n// Obtener el item desde el array de bytes\nItemStack sameItem = ItemTagStream.INSTANCE.fromBytes(bytes);\n"))),(0,r.kt)(l.Z,{value:"map",label:"Map",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convertirlo en un map\nMap<String, Object> map = ItemTagStream.INSTANCE.toMap(item);\n\n// Obtener el item desde el map\nItemStack sameItem = ItemTagStream.INSTANCE.fromMap(map);\n"))),(0,r.kt)(l.Z,{value:"string",label:"String",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convertirlo en un snbt\nString snbt = ItemTagStream.INSTANCE.toString(item);\n\n// Obtener el item desde el snbt\nItemStack sameItem = ItemTagStream.INSTANCE.fromString(snbt);\n"))),(0,r.kt)(l.Z,{value:"readable",label:"Legible",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = ...;\n\n// Convertirlo en un map legible\nMap<String, Object> map = ItemTagStream.INSTANCE.toReadableMap(item);\n\n// Obtener el item desde el map legible\nItemStack sameItem = ItemTagStream.INSTANCE.fromReadableMap(map);\n")))),(0,r.kt)("p",null,"ItemTagStream incluye ",(0,r.kt)("strong",{parentName:"p"},"compatibilidad con m\xfaltiples versiones"),", puedes convertir cualquier item para luego obtenerlo en cualquier versi\xf3n. Materiales, encantamientos, pociones... etc, todo ser\xe1 convertido! esto es algo que ni siquiera Bukkit tiene ya que es excluyente con las versiones viejas."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"En la instancia por defecto de ItemTagStream, su conversi\xf3n de \xedtems entre versiones es ",(0,r.kt)("strong",{parentName:"p"},"\xfanicamente compatible con Bukkit"),"."),(0,r.kt)("p",{parentName:"admonition"},"Si tu servidor tiene Forge se sugiere crear tu propia instancia compatible con Forge.")))}b.isMDXComponent=!0}}]);