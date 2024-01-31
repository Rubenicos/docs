"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2,title:"Base de datos",description:"Configuraci\xf3n de la base de datos en PixelBuy."},o=void 0,i={unversionedId:"pixelbuy/setup/database",id:"pixelbuy/setup/database",title:"Base de datos",description:"Configuraci\xf3n de la base de datos en PixelBuy.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/pixelbuy/setup/database.md",sourceDirName:"pixelbuy/setup",slug:"/pixelbuy/setup/database",permalink:"/es/pixelbuy/setup/database",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/es/setup/database.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"31 ene 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Base de datos",description:"Configuraci\xf3n de la base de datos en PixelBuy."},sidebar:"pixelbuy",previous:{title:"Configuraci\xf3n",permalink:"/es/pixelbuy/setup/configuration"},next:{title:"Mensajer\xeda",permalink:"/es/pixelbuy/setup/messenger"}},d={},p=[{value:"Usuario",id:"usuario",level:2},{value:"Cargar todo",id:"cargar-todo",level:3},{value:"Top",id:"top",level:2},{value:"L\xedmite",id:"l\xedmite",level:3},{value:"Tiempo",id:"tiempo",level:3},{value:"Sql",id:"sql",level:2}],s={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PixelBuy actualmente tiene soporte para el tipo de base de datos ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL"),"."),(0,r.kt)("h2",{id:"usuario"},"Usuario"),(0,r.kt)("h3",{id:"cargar-todo"},"Cargar todo"),(0,r.kt)("p",null,"Cargar o no toda la informaci\xf3n de los usuarios desde la base de datos en la memoria del servidor, esta informaci\xf3n incluye:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El nombre del jugador"),(0,r.kt)("li",{parentName:"ul"},"El id \xfanico del jugador"),(0,r.kt)("li",{parentName:"ul"},"La cantidad donada")),(0,r.kt)("p",null,"Esta opci\xf3n tambi\xe9n hace disponible la opci\xf3n de generar el top de donadores."),(0,r.kt)("h2",{id:"top"},"Top"),(0,r.kt)("p",null,"Es la configuraci\xf3n sobre el top de donadores."),(0,r.kt)("h3",{id:"l\xedmite"},"L\xedmite"),(0,r.kt)("p",null,"Limita el n\xfamero de entradas para la cantidad calculada en el top donadores, se puede poner como ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," para calcular la posici\xf3n del top para todos los usuarios."),(0,r.kt)("h3",{id:"tiempo"},"Tiempo"),(0,r.kt)("p",null,"Tiempo en ticks entre el c\xe1lculo de top donadores."),(0,r.kt)("p",null,"Un n\xfamero base puede provocar lag en la mayor\xeda de servidores, se puede poner como ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," para desactivar el c\xe1lculo de top donadores."),(0,r.kt)("h2",{id:"sql"},"Sql"),(0,r.kt)("p",null,"Es la configuraci\xf3n del tipo de base de datos ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL"),", edita \xfanicamente esta parte si pusiste ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL")," como el tipo de base de datos utilizado."),(0,r.kt)("p",null,"El tipo de base de datos ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL")," tiene soporte para diferentes instancias de sql:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:null},"Conexi\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"H2"),(0,r.kt)("td",{parentName:"tr",align:null},"Local"),(0,r.kt)("td",{parentName:"tr",align:null},"La instancia de base de datos ",(0,r.kt)("strong",{parentName:"td"},"recomendada")," para guardar data local.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQLITE"),(0,r.kt)("td",{parentName:"tr",align:null},"Local"),(0,r.kt)("td",{parentName:"tr",align:null},"Es un tipo de instancia m\xe1s lento para guardar data local.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"Externa"),(0,r.kt)("td",{parentName:"tr",align:null},"El tipo de base de datos m\xe1s utilizado en servidores de Minecraft")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MARIADB"),(0,r.kt)("td",{parentName:"tr",align:null},"Externa"),(0,r.kt)("td",{parentName:"tr",align:null},"Parecido a MySQL, pero m\xe1s r\xe1pido")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POSTGRESQL"),(0,r.kt)("td",{parentName:"tr",align:null},"Externa"),(0,r.kt)("td",{parentName:"tr",align:null},"La instancia de base de datos ",(0,r.kt)("strong",{parentName:"td"},"recomendada")," para guardar data externamente.")))),(0,r.kt)("p",null,"Si seleccionaste una base de datos local, puedes ignorar el resto de la configuraci\xf3n."))}c.isMDXComponent=!0}}]);