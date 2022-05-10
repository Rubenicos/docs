"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[985],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,v=d["".concat(u,".").concat(p)]||d[p]||c[p]||o;return a?n.createElement(v,i(i({ref:t},m),{},{components:a})):n.createElement(v,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),o="tabItem_OmH5";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),o=a(2389),i=a(7392),l=a(7094),u=a(2466),s=a(6010),m="tabList_uSqn",c="tabItem_LplD";function d(e){var t,a,o,d=e.lazy,p=e.block,v=e.defaultValue,f=e.values,b=e.groupId,g=e.className,T=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:T.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===v?v:null!=(t=null!=v?v:null==(a=T.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=T[0])?void 0:o.props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.U)(),I=h.tabGroupChoices,C=h.setTabGroupChoices,O=(0,r.useState)(N),S=O[0],w=O[1],B=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var j=I[b];null!=j&&j!==S&&y.some((function(e){return e.value===j}))&&w(j)}var A=function(e){var t=e.currentTarget,a=B.indexOf(t),n=y[a].value;n!==S&&(E(t),w(n),null!=b&&C(b,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=B.indexOf(e.currentTarget)+1;a=B[n]||B[0];break;case"ArrowLeft":var r=B.indexOf(e.currentTarget)-1;a=B[r]||B[B.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},y.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return B.push(e)},onKeyDown:x,onFocus:A,onClick:A},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),d?(0,r.cloneElement)(T.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},T.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},3783:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(9877),l=a(2360),u=["components"],s={sidebar_position:2,title:"Tag Stream",description:"Convierte NBTTagCompound en otros tipos de datos"},m=void 0,c={unversionedId:"rtag/feature/stream",id:"rtag/feature/stream",title:"Tag Stream",description:"Convierte NBTTagCompound en otros tipos de datos",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/rtag/feature/stream.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/stream",permalink:"/es/rtag/feature/stream",draft:!1,editUrl:"https://github.com/saicone/docs/blob/master/docs/rtag/feature/stream.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1652214185,formattedLastUpdatedAt:"10/5/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tag Stream",description:"Convierte NBTTagCompound en otros tipos de datos"},sidebar:"rtag",previous:{title:"Objectos custom",permalink:"/es/rtag/feature/custom-objects"},next:{title:"Extra",permalink:"/es/rtag/extra"}},d={},p=[{value:"Informaci\xf3n",id:"informaci\xf3n",level:2},{value:"TagCompound Data",id:"tagcompound-data",level:2},{value:"ItemTagStream",id:"itemtagstream",level:2}],v={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"informaci\xf3n"},"Informaci\xf3n"),(0,o.kt)("p",null,"Rtag tiene la opci\xf3n de guardar los NBTTagCompound en otras formas de almacenamiento:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Archivos"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Base64"},"Base64")),(0,o.kt)("li",{parentName:"ul"},"Bytes")),(0,o.kt)("p",null,"Incluyendo compatibilidad con objetos serializables en NBTTagCompound."),(0,o.kt)("h2",{id:"tagcompound-data"},"TagCompound Data"),(0,o.kt)("p",null,"El class TagCompound incluido en Rtag contiene una forma f\xe1cil para convertir y obtener cualquier NBTTagCompound desde las formas de almacenamiento adicionales."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"file",label:"Archivo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Object compound = // Un NBTTagCompound de alguna parte;\n\n// Convertirlo a un archivo\nFile file TagCompound.DATA.toFile(compound, new File("archivo.nbt"));\n\n// Obtener el compound desde un archivo\nObject tagCompound = TagCompound.DATA.fromFile(file);\n'))),(0,o.kt)(l.Z,{value:"base64",label:"Base64",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Object compound = // Un NBTTagCompound de alguna parte;\n\n// Convertirlo a Base64\nString base64 = TagCompound.DATA.toBase64(compound);\n\n// Obtener el compound desde Base64\nObject tagCompound = TagCompound.DATA.fromBase64(base64)[0]; // Devuelve un array\n"))),(0,o.kt)(l.Z,{value:"bytes",label:"Bytes",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Object compound = // Un NBTTagCompound de alguna parte;\n\n// Convertirlo a un array de bytes\nbyte[] bytes = TagCompound.DATA.toBytes(compound);\n\n// Obtener el compound desde el array de bytes\nObject tagCompound = TagCompound.DATA.fromBytes(bytes);\n")))),(0,o.kt)("h2",{id:"itemtagstream"},"ItemTagStream"),(0,o.kt)("p",null,"Rtag incluye compatibilidad para convertir los ItemStack en las formas adicionales de almacenamiento, esto es realmente \xfatil si quieres ",(0,o.kt)("strong",{parentName:"p"},"guardar items en bases de datos"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"file",label:"Archivo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ItemStack item = // Item de alguna parte;\n\n// Convertirlo a un archivo\nFile file = ItemTagStream.INSTANCE.toFile(item, new File("archivo.nbt"));\n\n// Obtener el item desde un archivo\nItemStack sameItem = ItemTagStream.INSTANCE.fromFile(file);\n'))),(0,o.kt)(l.Z,{value:"base64",label:"Base64",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = // Item de alguna parte;\n\n// Convertirlo a Base64\nString base64 = ItemTagStream.INSTANCE.toBase64(item);\n\n// Obtener el item desde Base64\nItemStack sameItem = ItemTagStream.INSTANCE.fromBase64(base64)[0]; // Devuelve un array\n\n\nList<ItemStack> items = // Lista de items;\n\n// Convertirlo a Base64\nString base64 = ItemTagStream.INSTANCE.toBase64(items);\n\n// Obtener la lista desde Base64\nList<ItemStack> sameItems = ItemTagStream.INSTANCE.listFromBase64(base64);\n"))),(0,o.kt)(l.Z,{value:"bytes",label:"Bytes",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack item = // Item de alguna parte;\n\n// Convertirlo a un array de bytes\nbyte[] bytes = ItemTagStream.INSTANCE.toBytes(item);\n\n// Obtener el item desde el array de bytes\nItemStack sameItem = ItemTagStream.INSTANCE.fromBytes(bytes);\n")))),(0,o.kt)("p",null,"ItemTagStream incluye ",(0,o.kt)("strong",{parentName:"p"},"compatibilidad con m\xfaltiples versiones"),", puedes convertir cualquier item para luego obtenerlo en cualquier versi\xf3n, esto es algo que ni siquiera Bukkit tiene ya que es excluyente con las versiones viejas."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"En la instancia por defecto de ItemTagStream, su conversi\xf3n de \xedtems entre versiones es ",(0,o.kt)("strong",{parentName:"p"},"\xfanicamente compatible con Bukkit"),"."),(0,o.kt)("p",{parentName:"div"},"Si tu servidor tiene Forge se sugiere crear tu propia instancia compatible con Forge."))))}f.isMDXComponent=!0}}]);