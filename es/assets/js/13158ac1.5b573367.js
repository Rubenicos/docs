"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[659],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>b});var o=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var a=o.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return o.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||t;return r?o.createElement(b,i(i({ref:a},p),{},{components:r})):o.createElement(b,i({ref:a},p))}));function b(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,i=new Array(t);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<t;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},946:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const t={sidebar_position:2,title:"Como usarlo",description:"Como utilizar Ezlib"},i=void 0,l={unversionedId:"ezlib/usage",id:"ezlib/usage",title:"Como usarlo",description:"Como utilizar Ezlib",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/ezlib/usage.md",sourceDirName:"ezlib",slug:"/ezlib/usage",permalink:"/es/ezlib/usage",draft:!1,editUrl:"https://github.com/saicone/ezlib/blob/main/docs/es/usage.md",tags:[],version:"current",lastUpdatedBy:"Rub\xe9n",lastUpdatedAt:1690913999,formattedLastUpdatedAt:"1 ago 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Como usarlo",description:"Como utilizar Ezlib"},sidebar:"ezlib",previous:{title:"Ezlib",permalink:"/es/ezlib/"}},s={},c=[{value:"Basic",id:"basic",level:2},{value:"Parent ClassLoader",id:"parent-classloader",level:2},{value:"Recolocaci\xf3n",id:"recolocaci\xf3n",level:2}],p={toc:c},d="wrapper";function u(e){let{components:a,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Ezlib usa el mismo formato que gradle para agregar dependencias")),(0,n.kt)("h2",{id:"basic"},"Basic"),(0,n.kt)("p",null,"Ezlib ofrece m\xe9todos f\xe1ciles de entender para cargar todas las dependencias que necesites en tiempo de ejecuci\xf3n dentro de un class loader."),(0,n.kt)("p",null,"Aqu\xed se muestra un ejemplo para cargar dependencias en un child class loader."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// Crear una instancia de Ezlib que por defecto guarda la librer\xedas en el path "folder"\nEzlib ezlib = new Ezlib();\n// Tambi\xe9n puedes crear la instancia especificando el path\nEzlib ezlib = new Ezlib(new File("folder/path"));\n\n// Cargar una dependencia desde el repositorio de Maven (por defecto)\nezlib.load("commons-io:commons-io:2.11.0");\n\n// Cargar una dependencia desde un repositorio en espec\xedfico\nezlib.load("com.saicone.rtag:rtag:1.1.0", "https://jitpack.io/");\n\n// Tambien puedes cambiar el repositoria por defecto\nezlib.setDefaultRepository("URL de repositorio");\n')),(0,n.kt)("h2",{id:"parent-classloader"},"Parent ClassLoader"),(0,n.kt)("p",null,'Ezlib permite cargar la dependencias en el parent class loader actual, solamente a\xf1adiendo "true" al final del m\xe9todo load.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Ezlib ezlib = new Ezlib();\n\n// Cargar desde el repositorio de Maven (por defecto)\nezlib.load("commons-io:commons-io:2.11.0", true);\n\n// Cargar desde un repositorio en espec\xedfico\nezlib.load("com.saicone.rtag:rtag:1.1.0", "https://jitpack.io/", true);\n')),(0,n.kt)("h2",{id:"recolocaci\xf3n"},"Recolocaci\xf3n"),(0,n.kt)("p",null,"Ezlib usa la librer\xeda ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lucko/jar-relocator"},"jar-relocator"),", as\xed que puedes recolocar los imports de las dependencias que quieres cargar."),(0,n.kt)("p",null,"Aqu\xed se ver\xe1 un ejemplo para cargar la librer\xedas de Redis con todas sus dependencias en el parent class loader."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> relocations = new HashMap();\nrelocations.put("com.google.gson", "myproject.path.libs.gson");\nrelocations.put("org.apache.commons.pool2", "myproject.path.libs.pool2");\nrelocations.put("org.json", "myproject.path.libs.json");\nrelocations.put("org.slf4j", "myproject.path.libs.slf4j");\nrelocations.put("redis.clients.jedis", "myproject.path.libs.jedis");\n\nEzlib ezlib = new Ezlib();\n\n// Cargar primero todas las librer\xedas necesarias\nezlib.load("com.google.gson:gson:2.8.9", relocations, true);\nezlib.load("org.apache.commons:commons-pool2:2.11.1", relocations, true);\nezlib.load("org.json:json:20211205", relocations, true);\nezlib.load("org.slf4j:slf4j-api:1.7.32", relocations, true);\n\n// Luego cargar la librer\xeda de Redis\nezlib.load("redis.clients:jedis:4.2.2", relocations, true);\n')),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Recuerda recolocar los imports de tu proyecto cuando lo vayas a compilar ya sea usando Gradle ShadowJar o Maven Shade, para que la recolocaci\xf3n de Ezlib tenga sentido con tu proyecto actual, adem\xe1s excluye el class que estas utilizando para cargar las dependencias al momento de recolocar los imports de tu proyecto ya que los Strings de ese class tambi\xe9n son cambiados.")))}u.isMDXComponent=!0}}]);