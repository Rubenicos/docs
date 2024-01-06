"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,m=c["".concat(p,".").concat(d)]||c[d]||y[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,title:"Optional Types",description:"Information about OptionalType and it superclasses"},i=void 0,l={unversionedId:"rtag/feature/types",id:"rtag/feature/types",title:"Optional Types",description:"Information about OptionalType and it superclasses",source:"@site/docs/rtag/feature/types.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/types",permalink:"/rtag/feature/types",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/feature/types.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1704582569,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Optional Types",description:"Information about OptionalType and it superclasses"},sidebar:"rtag",previous:{title:"Features",permalink:"/rtag/feature/"},next:{title:"Custom Objects",permalink:"/rtag/feature/custom-objects"}},p={},s=[{value:"Type check",id:"type-check",level:2},{value:"Conversion",id:"conversion",level:2},{value:"Single conversions",id:"single-conversions",level:3},{value:"Multiple conversions",id:"multiple-conversions",level:3},{value:"Custom conversions",id:"custom-conversions",level:3},{value:"Iterator",id:"iterator",level:2}],u={toc:s},c="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rtag library provide the OptionalType class instance to allow flexible tag handling with different types of objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Create directly with any type of object\nOptionalType type = OptionalType.of("123");\n\n// --- Get from Rtag instance\nRtag rtag = ...;\nObject compount = ...;\nOptionalType type = rtag.getOptional(compound, "my", "object", "path");\n\n\n// --- Get from RtagEditor instance\nRtagEditor tag = ...;\nOptionalType type = tag.getOptional("my", "object", "path");\n')),(0,o.kt)("h2",{id:"type-check"},"Type check"),(0,o.kt)("p",null,"Get the value of OptionalType as the type of data has you want or provide a default object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OptionalType type = ...;\n\n// Get as required object, this method assumes that you known the type of data\n// If the value isn't the required type will return null\nString string = type.value();\n// Specify the class (optional)\nString string = type.value(String.class);\n\n// Get as required object or return default provided object\nint num = type.or(-1); // default: -1\n// Specify the class (optional)\nint num = type.or(int.class, -1);\n")),(0,o.kt)("h2",{id:"conversion"},"Conversion"),(0,o.kt)("p",null,"Convert ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalType")," value into different types of objects, pretty useful if you don't known what type of data is it or simply require to parse any object, for example get a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"Integer")," providing a default value if the conversion fails."),(0,o.kt)("h3",{id:"single-conversions"},"Single conversions"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalType")," as the following single-object conversions to get the current value as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Object"),(0,o.kt)("li",{parentName:"ul"},"String - Convert any non-null object to ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Char - Extract the first char from any non-null object converted to ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Boolean - Check if the non-null object as ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," is ",(0,o.kt)("inlineCode",{parentName:"li"},'"true"')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'"false"')," (",(0,o.kt)("inlineCode",{parentName:"li"},'"1"')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'"0"')," | ",(0,o.kt)("inlineCode",{parentName:"li"},'"yes"')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'"no"')," | ",(0,o.kt)("inlineCode",{parentName:"li"},'"on"')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'"off"')," | ",(0,o.kt)("inlineCode",{parentName:"li"},'"y"')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'"n"'),")"),(0,o.kt)("li",{parentName:"ul"},"Byte"),(0,o.kt)("li",{parentName:"ul"},"Short"),(0,o.kt)("li",{parentName:"ul"},"Integer (Int)"),(0,o.kt)("li",{parentName:"ul"},"Float"),(0,o.kt)("li",{parentName:"ul"},"Long"),(0,o.kt)("li",{parentName:"ul"},"Double"),(0,o.kt)("li",{parentName:"ul"},"UUID - Parse ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," or 4-length ",(0,o.kt)("inlineCode",{parentName:"li"},"int[]")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"UUID")),(0,o.kt)("li",{parentName:"ul"},"Any type of serializable object - By using Gson")),(0,o.kt)("p",null,"And only if the current value is a bit field:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Set<? extends Enum>")," - Convert by providing Enum type class."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Set<E>")," - Convert by providing element ordinal value by function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Set<Integer>")," - Convert by providing maximum ordinal value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'OptionalType type = OptionalType.of("1");\n\n// Convert to normal objects\nString string = type.asString();\nint num = type.asInt(-1); // default: -1\nboolean bool = type.asBoolean(); // return true\n\n// Convert to serializable object like MyObject\nMyObject myObj = type.getAs(MyObject.class);\n')),(0,o.kt)("admonition",{title:"Boolean compatibility",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If the required conversion type is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," and the current value is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", it will be parsed as ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("h3",{id:"multiple-conversions"},"Multiple conversions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalType")," instance allows to convert any value into collective one, by iterating hover it and never return null value of required collection or array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'OptionalType type = OptionalType.of(List.of("1", "value2", "2", "3", "3"));\n\n// Convert to any type of array (you should provide array sample)\n// Result: ["1", "value2", "2", "3", "3"]\nString[] array = type.asArray(new String[0], OptionalType::asString);\n\n// Convert to any type of list\n// Result: [1, 2, 3, 3]\nList<Short> list = type.asList(OptionalType::asShort);\n\n// Convert to any type of collection (you should provide collection to add values)\n// Result: [1, 2, 3]\nSet<Integer> set = type.asCollection(new HashSet(), OptionalType::asInt);\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Take in count the multiple-type conversion doesn\'t do "magic" to convert types, it is limited to convert as provided function, and ignore any value that cannot be converted with the function.')),(0,o.kt)("admonition",{title:"Single type conversion",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want the ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalType")," instance as single object just wrap it with ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalType#single()")," method, if the current type is a collection or array the first value will be used ",(0,o.kt)("strong",{parentName:"p"},"recursively"),"."),(0,o.kt)("p",{parentName:"admonition"},'For only "the first value" use the method ',(0,o.kt)("inlineCode",{parentName:"p"},"OptionalType#first()")," instead.")),(0,o.kt)("h3",{id:"custom-conversions"},"Custom conversions"),(0,o.kt)("p",null,"So you can implement your own conversion function with different types of methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OptionalType type = ...;\n\n// Simple convert to MyObject\nMyObject myObj = type.by(value -> {\n    // Conversion\n});\n")),(0,o.kt)("p",null,"Return default value if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The current value is ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Conversion throws exception"),(0,o.kt)("li",{parentName:"ul"},"Conversion return ",(0,o.kt)("inlineCode",{parentName:"li"},"null"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"MyObject def = ...;\nMyObject myObj = type.by(value -> {\n    // Conversion\n}, def);\n")),(0,o.kt)("p",null,"Provide class to check if the current value is instance of required object and avoid conversion function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"MyObject def = ...;\nMyObject myObj = type.by(MyObject.class, value -> {\n    // Conversion\n}, def);\n")),(0,o.kt)("h2",{id:"iterator"},"Iterator"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalType")," instance extends ",(0,o.kt)("inlineCode",{parentName:"p"},"IterableType")," that allow to iterate hover value type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Array: Iterate hover array values"),(0,o.kt)("li",{parentName:"ul"},"Collection: Iterate hover collection values"),(0,o.kt)("li",{parentName:"ul"},"Single object: Iterate 1 time with the value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OptionalType type = ...;\n\nfor (Object o : type) {\n    // Array|Collection values or simply the single object\n}\n\ntype.forEach(o -> {\n    // Array|Collection values or simply the single object\n});\n")))}y.isMDXComponent=!0}}]);