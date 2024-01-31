"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3117],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?t.createElement(b,o(o({ref:a},u),{},{components:n})):t.createElement(b,o({ref:a},u))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8944:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Mensajer\xeda",description:"Configuraci\xf3n de la mensajer\xeda en PixelBuy."},o=void 0,s={unversionedId:"pixelbuy/setup/messenger",id:"pixelbuy/setup/messenger",title:"Mensajer\xeda",description:"Configuraci\xf3n de la mensajer\xeda en PixelBuy.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/pixelbuy/setup/messenger.md",sourceDirName:"pixelbuy/setup",slug:"/pixelbuy/setup/messenger",permalink:"/es/pixelbuy/setup/messenger",draft:!1,editUrl:"https://github.com/saicone/pixelbuy/blob/main/docs/es/setup/messenger.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706744250,formattedLastUpdatedAt:"31 ene 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Mensajer\xeda",description:"Configuraci\xf3n de la mensajer\xeda en PixelBuy."},sidebar:"pixelbuy",previous:{title:"Base de datos",permalink:"/es/pixelbuy/setup/database"},next:{title:"Opciones",permalink:"/es/pixelbuy/usage/"}},l={},p=[{value:"Sql",id:"sql",level:2},{value:"Redis",id:"redis",level:2},{value:"RabbitMQ",id:"rabbitmq",level:2}],u={toc:p},c="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Una conexi\xf3n con un servicio de mensajer\xeda permite al plugin crear una sincronizaci\xf3n de data entre hosts que utilizan la misma base de datos externa."),(0,r.kt)("p",null,"No configurar una instancia de mensajer\xeda puede provocar una p\xe9rdida de datos."),(0,r.kt)("p",null,"Este concepto utiliza un canal principal para la transferencia de mensajes, todos los servidores con una instancia de mensajer\xeda deben de utilizar el mismo nombre de canal."),(0,r.kt)("p",null,"PixelBuy actualmente es compatible con los tipos de mensajer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REDIS")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"RABBITMQ"),", tambien lo puedes configurar como ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO")," para hacer que el plugin escoga la mejor opci\xf3n disponible."),(0,r.kt)("h2",{id:"sql"},"Sql"),(0,r.kt)("p",null,"El tipo de mensajer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL")," utiliza la base de datos sql actual para transferir mensajes al a\xf1adir filas en una tabla por separado, luego revisa cualquier fila nueva (probablemente a\xf1adida por otra instancia del plugin en otro host)."),(0,r.kt)("p",null,"Cada 30 segundos, todas las filas con m\xe1s de 60 segundos de antiguedad son borradas autom\xe1ticamente por cualquier instancia del plugin conectada al mismo tipo de instancia de mensajer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL"),"."),(0,r.kt)("h2",{id:"redis"},"Redis"),(0,r.kt)("p",null,"El tipo de mensajer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"Redis")," se conecta a una instancia Redis para transferir mensajes, no hay mucho que decir al respecto debido a que este es un sistema bastante conocido."),(0,r.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,r.kt)("p",null,"El tipo de mensajer\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"RABBITMQ"),' se conecta a una instancia RabbitMQ para transferir mensajes temporales, a diferencia de Redis, este tipo de mensajer\xeda es m\xe1s estandarizada (y probablemente mejor), adem\xe1s que requiere configurar un exchange o "pre-canal" para acceder a los canales de mensajer\xeda.'))}d.isMDXComponent=!0}}]);