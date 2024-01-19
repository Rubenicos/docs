"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Functional Paths",description:"How to handle paths with functions"},o=void 0,l={unversionedId:"rtag/feature/functions",id:"rtag/feature/functions",title:"Functional Paths",description:"How to handle paths with functions",source:"@site/docs/rtag/feature/functions.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/functions",permalink:"/rtag/feature/functions",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/feature/functions.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1705676273,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Functional Paths",description:"How to handle paths with functions"},sidebar:"rtag",previous:{title:"Custom Objects",permalink:"/rtag/feature/custom-objects"},next:{title:"Tag Stream",permalink:"/rtag/feature/stream"}},u={},s=[{value:"Usage",id:"usage",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Before continue",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is an advanced feature, you can ignore this because is rarely used."),(0,r.kt)("p",{parentName:"admonition"},"To understand this page you should see ",(0,r.kt)("a",{parentName:"p",href:"../../advanced/tags/"},"Tag Objects guide"),".")),(0,r.kt)("p",null,"The tree-like paths used by Rtag is quite simple, so there is a more complex way to handle edits with functions that accept ",(0,r.kt)("inlineCode",{parentName:"p"},"NBTTagCompound")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NBTTagList")," objects while the path is resolved."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"For example, suppose we have the following data in a NBT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'main:\n  list:\n    - id: EPIC\n      value: 40\n    - id: RARE\n      value: 30\n    - id: LEGENDARY\n      value: 50\nmy:\n  custom:\n    list:\n      - 15\n      - 40\n      - 39\n  path: "Hello"\n')),(0,r.kt)("p",null,"It's impossible for a tree-like path to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," of id ",(0,r.kt)("inlineCode",{parentName:"p"},"EPIC"),", because it's on a list."),(0,r.kt)("p",null,"In a normal case you should get the entire list and iterate hover to check what value has ",(0,r.kt)("inlineCode",{parentName:"p"},"EPIC")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", which is quite expensive because Rtag will convert the entire list into normal objects including unused values in the operation."),(0,r.kt)("p",null,"To solve that you can use functional paths by using a function that iterate hover ",(0,r.kt)("inlineCode",{parentName:"p"},"NBTTagList")," directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Prepare the function\nThrowableFunction<Object, Object> function = nbtList -> {\n    for (Object nbtCompound : TagList.getValue(nbtList)) {\n        Object id = TagCompound.get(nbtCompound, "id");\n        if ("EPIC".equals(TagBase.getValue(id))) {\n            return nbtCompound;\n        }\n    }\n    return null;\n};\n\n\n// --- Using Rtag instance\nRtag rtag = ...;\nObject compound = ...;\n// Get the value path from object with EPIC id\nint value = rtag.get(compound, "main", "list", function, "value");\n// Or replace the value\nrtag.set(compound, 45, "main", "list", function, "value");\n\n\n// --- Using RtagEditor instance\nRtagEditor tag = ...;\n// Get the value path from object with EPIC id\nint value = tag.get("main", "list", function, "value");\n// Or replace the value\ntag.set(45, "main", "list", function, "value");\n')),(0,r.kt)("p",null,"If you want to get ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," from objects id ",(0,r.kt)("inlineCode",{parentName:"p"},"RARE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGENDARY")," you can register a function provided by method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private ThrowableFunction<Object, Object> getFunction(String type) {\n    return nbtList -> {\n        for (Object nbtCompound : TagList.getValue(nbtList)) {\n            Object id = TagCompound.get(nbtCompound, "id");\n            if (type.equals(TagBase.getValue(id))) {\n                return nbtCompound;\n            }\n        }\n        return null;\n    };\n}\n')),(0,r.kt)("p",null,"And use like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// --- Using Rtag instance\nRtag rtag = ...;\nObject compound = ...;\n// Get the value path from object with RARE id\nint value = rtag.get(compound, "main", "list", getFunction("RARE"), "value");\n// Or replace the value\nrtag.set(compound, 35, "main", "list", getFunction("RARE"), "value");\n\n\n// --- Using RtagEditor instance\nRtagEditor tag = ...;\n// Get the value path from object with LEGENDARY id\nint value = tag.get("main", "list", getFunction("LEGENDARY"), "value");\n// Or replace the value\ntag.set(55, "main", "list", getFunction("LEGENDARY"), "value");\n')))}d.isMDXComponent=!0}}]);