"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9086],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1564:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(7294),r=t(6010),i=t(9960),o=t(3438),l=t(3919),c=t(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:n,children:t}=e;return a.createElement(i.Z,{href:n,className:(0,r.Z)("card padding--lg",s.cardContainer)},t)}function d(e){let{href:n,icon:t,title:i,description:o}=e;return a.createElement(u,{href:n},a.createElement("h2",{className:(0,r.Z)("text--truncate",s.cardTitle),title:i},t," ",i),o&&a.createElement("p",{className:(0,r.Z)("text--truncate",s.cardDescription),title:o},o))}function p(e){let{item:n}=e;const t=(0,o.Wl)(n);return t?a.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function m(e){let{item:n}=e;const t=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(n.docId??void 0);return a.createElement(d,{href:n.href,icon:t,title:n.label,description:n.description??(null==r?void 0:r.description)})}function f(e){let{item:n}=e;switch(n.type){case"link":return a.createElement(m,{item:n});case"category":return a.createElement(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}},4482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(7462),r=(t(7294),t(3905)),i=t(1564);const o={sidebar_position:3,title:"Items",description:"Informaci\xf3n sobre los items de la tienda de PixelBuy."},l=void 0,c={unversionedId:"pixelbuy/store/items",id:"pixelbuy/store/items",title:"Items",description:"Informaci\xf3n sobre los items de la tienda de PixelBuy.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/pixelbuy/store/items.md",sourceDirName:"pixelbuy/store",slug:"/pixelbuy/store/items",permalink:"/es/pixelbuy/store/items",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/es/store/items.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"31 ene 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Items",description:"Informaci\xf3n sobre los items de la tienda de PixelBuy."},sidebar:"pixelbuy",previous:{title:"Supervisor web.",permalink:"/es/pixelbuy/store/web-supervisor"},next:{title:"Acci\xf3n",permalink:"/es/pixelbuy/action/"}},s={},u=[{value:"Formato",id:"formato",level:2},{value:"Display",id:"display",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Precio",id:"precio",level:3},{value:"Categor\xeda",id:"categor\xeda",level:3},{value:"Opciones",id:"opciones",level:3},{value:"Ejecuci\xf3n",id:"ejecuci\xf3n",level:2}],d={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Los items de la tienda en PixelBuy son la caracter\xedstica principal del plugin adem\xe1s de que tiene una configuraci\xf3n avanzada."),(0,r.kt)("h2",{id:"formato"},"Formato"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Los items de la tienda se guardan en archivos ",(0,r.kt)("inlineCode",{parentName:"li"},".yml")," dentro de la carpeta ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins/PixelBuy/storeitems"),"."),(0,r.kt)("li",{parentName:"ul"},"Puedes crear cuantas subcarpetas quieras y todos los items dentro ser\xe1n cargados."),(0,r.kt)("li",{parentName:"ul"},"Un archivo ",(0,r.kt)("inlineCode",{parentName:"li"},".yml")," puede contener varios items de la tienda al mismo tiempo."),(0,r.kt)("li",{parentName:"ul"},"Todos los items de la tienda deben tener un nombre \xfanico.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# plugins/PixelBuy/storeitems/default.yml\nmyStoreItem:\n  configuration: key\n\notherStoreItem:\n  configuration: key\n\n\n# plugins/PixelBuy/storeitems/swords.yml\ncoolSword:\n  configuration: key\n\notherSword:\n  configuration: key\n\n\n# plugins/PixelBuy/storeitems/hats/magic-hats.yml\nthunderHat:\n  configuration: key\n\ncreeperHat:\n  configuration: key\n")),(0,r.kt)("h2",{id:"display"},"Display"),(0,r.kt)("p",null,"La configuraci\xf3n sobre como se mostrar\xe1 el item en cualquier men\xfa."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"super-pickaxe:\n  display:\n    material: DIAMOND_PICKAXE\n    name: '&9&lSuper Pickaxe'\n    lore:\n      - ''\n      - '&7Price&8: &a{store_item_price}'\n      - ''\n      - '&7Get on the server store'\n")),(0,r.kt)("p",null,"Para m\xe1s informaci\xf3n sobre el formato de configuraci\xf3n de items:"),(0,r.kt)(i.Z,{item:{type:"link",href:"/es/pixelbuy/usage/item-config/",label:"Configuraci\xf3n de item",description:"Informaci\xf3n sobre el formato para configurar items en PixelBuy"},mdxType:"DocCard"}),(0,r.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,r.kt)("p",null,"La configuraci\xf3n del item afecta la forma en como es guardado, mostrado o entregado."),(0,r.kt)("h3",{id:"precio"},"Precio"),(0,r.kt)("p",null,"El precio del item puede ser un n\xfamer normal o una configuraci\xf3n avanzada al proveer un id de producto asociado con el supervisor web."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configuraci\xf3n simple\nsuper-pickaxe:\n  price: 3.99\n\n# Configuraci\xf3n avanzada\nsuper-pickaxe:\n  price:\n    default: 3.99\n    web-supervisor-name: 1234 # <-- ID del producto\n")),(0,r.kt)("p",null,"Es sugerido utilizar la configuraci\xf3n avanzada."),(0,r.kt)("h3",{id:"categor\xeda"},"Categor\xeda"),(0,r.kt)("p",null,"Un item de la tienda puede ser configurado utilizando una categor\xeda asociada o m\xfaltiples categor\xedas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Una sola categor\xeda\ncreeper-hat:\n  category: hats\n\n# M\xfaltiples categor\xedas\nsuper-pickaxe:\n  categories:\n    - items\n    - pickaxes\n")),(0,r.kt)("h3",{id:"opciones"},"Opciones"),(0,r.kt)("p",null,"Los items tienen m\xfaltiples opciones para manejar cualquier interacci\xf3n o entrega."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"super-pickaxe:\n  options:\n    online: true\n    always-run: false\n    append:\n      - 'global'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"online")," - Ponlo en true si el item de la tienda solamente puede ser entregado si el jugador est\xe1 online, esta opci\xf3n tambi\xe9n afecta toda la \xf3rden de compra a donde el item pertenece al punto de cancelar la entrega o guardado de la orden de compra hasta que el jugador se conecte."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"always-run")," - Ponlo en true para entregar el item sin ser afectado por cualquier otro item cuya configuraci\xf3n incluya el ",(0,r.kt)("inlineCode",{parentName:"li"},"online: true")," en la misma \xf3rden de compra."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"append")," - Los nombres de grupo de servidor donde el item ser\xe1 agregado a las \xf3rdenes de compra que contenga el mismo item pero con un grupo de servidor diferente al grupo de servidor actual de la configuraci\xf3n de la tienda.")),(0,r.kt)("h2",{id:"ejecuci\xf3n"},"Ejecuci\xf3n"),(0,r.kt)("p",null,"La configuraci\xf3n de la ejecuci\xf3n es una lista de acciones para ejecutar cuando el item es entregado, los tipos de ejecuci\xf3n son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onBuy")," - Cuando una \xf3rden de compra es entregada por primera vez."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onRefund")," - Cuando una \xf3rden de compra es devuelta."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onRecover")," - Cando una \xf3rden de compra es marcada con un estado de recuperaci\xf3n, esto significa que el item debe ser entregado m\xe1s de una vez o no.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"super-pickaxe:\n  onBuy:\n    - item:\n        material: DIAMOND_PICKAXE\n        amount: 1\n        name: '&9&lSuper Pickaxe'\n        lore:\n          - '&7Custom pickaxe'\n          - '&7from server store'\n          - ''\n          - '&6Buyer: &7%player_name%'\n          - '&6Order ID: &7{order_id}'\n        enchants:\n          SHARPNESS: 10\n          DIG_SPEED: 5\n          LOOT_BONUS_BLOCKS: 20\n    - message: '&e&lYou bought the &9&lSuper Pickaxe&e!'\n    - broadcast:\n        - '&e-----------------------------'\n        - '&fThe player &e{user_name} &fbought the super pickaxe!'\n        - '&e-----------------------------'\n  onRefund:\n    - command: 'ban {user_name} You cannot refund this item'\n")),(0,r.kt)("p",null,"Para informaci\xf3n detallada sobre las acciones, visita la p\xe1gina de acciones:"),(0,r.kt)(i.Z,{item:{type:"link",href:"/es/pixelbuy/action/",label:"Acciones de PixelBuy",description:"Informaci\xf3n sobre las acciones de PixelBuy"},mdxType:"DocCard"}))}m.isMDXComponent=!0}}]);