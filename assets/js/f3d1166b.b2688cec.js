"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||u;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,l=new Array(u);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<u;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const u={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(u.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7462),n=a(7294),u=a(6010),l=a(2466),o=a(6775),i=a(1980),s=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),u=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(u),(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(r.location.search);t.set(u,e),r.replace({...r.location,search:t.toString()})}),[u,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,u=m(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:u}))),[i,s]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,u]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&u.set(e)}),[a,u])]}({groupId:r}),h=(()=>{const e=i??d;return p({value:e,tabValues:u})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,u]),tabValues:u}}var h=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==o&&(d(t),i(r))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,u.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const u=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,u.Z)("tabs-container",g.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(x,(0,r.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},1795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),u=a(4866),l=a(5162);const o={sidebar_position:5,title:"Textured Heads",description:"How to get textured heads with Rtag"},i=void 0,s={unversionedId:"rtag/feature/textured-heads",id:"rtag/feature/textured-heads",title:"Textured Heads",description:"How to get textured heads with Rtag",source:"@site/docs/rtag/feature/textured-heads.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/textured-heads",permalink:"/rtag/feature/textured-heads",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/feature/textured-heads.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1692932689,formattedLastUpdatedAt:"Aug 25, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Textured Heads",description:"How to get textured heads with Rtag"},sidebar:"rtag",previous:{title:"Tag Stream",permalink:"/rtag/feature/stream"},next:{title:"Chat Component",permalink:"/rtag/feature/chat-component"}},c={},d=[{value:"Example",id:"example",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"With the ",(0,n.kt)("inlineCode",{parentName:"p"},"SkullTexture")," class you can get textured heads from ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Base64"},"base64"),", url, texture ID, player name or UUID."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The texture values are cached with 3 hours expiration after last access."),(0,n.kt)("p",{parentName:"admonition"},'If you get some textured head using player name or UUID the texture value will be obtained asynchronously if it\'s not cached, so "LOADING" texture value will be obtained in that case.')),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Get the following texture as ",(0,n.kt)("inlineCode",{parentName:"p"},"ItemStack")," head using all the different methods."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://textures.minecraft.net/texture/fedfa2e0fdea0c0423804cdb5b62ad05a6e914c046c4a3b7e355bf81269125fd",alt:null})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"base64",label:"Base64",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String texture = "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmVkZmEyZTBmZGVhMGMwNDIzODA0Y2RiNWI2MmFkMDVhNmU5MTRjMDQ2YzRhM2I3ZTM1NWJmODEyNjkxMjVmZCJ9fQ==";\n// Simple get, the texture value will be used\nItemStack head = SkullTexture.getTexturedHead(texture);\n'))),(0,n.kt)(l.Z,{value:"url",label:"URL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String texture = "http://textures.minecraft.net/texture/fedfa2e0fdea0c0423804cdb5b62ad05a6e914c046c4a3b7e355bf81269125fd";\n// Simple get, the texture value will be used\nItemStack head = SkullTexture.getTexturedHead(texture);\n'))),(0,n.kt)(l.Z,{value:"texture",label:"Texture ID",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String texture = "fedfa2e0fdea0c0423804cdb5b62ad05a6e914c046c4a3b7e355bf81269125fd";\nItemStack head = SkullTexture.getTexturedHead(texture);\n// Simple get, the texture value will be used\nItemStack head = SkullTexture.getTexturedHead(texture);\n'))),(0,n.kt)(l.Z,{value:"name",label:"Name",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String texture = "Rubenicos";\nItemStack head = SkullTexture.getTexturedHead(texture);\n// Simple get, the texture may be retrieved on async operation\nItemStack head = SkullTexture.getTexturedHead(texture);\n\n// Consume retrieved head when it\'s ready to use\nItemStack head = SkullTexture.getTexturedHead(texture, item -> {\n    // do something\n});\n'))),(0,n.kt)(l.Z,{value:"uuid",label:"UUID",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String texture = "7ca003dc-175f-4f1f-b490-5651045311ad";\n// Simple get, the texture may be retrieved on async operation\nItemStack head = SkullTexture.getTexturedHead(texture);\n\n// Consume retrieved head when it\'s ready to use\nItemStack head = SkullTexture.getTexturedHead(texture, item -> {\n    // do something\n});\n')))))}f.isMDXComponent=!0}}]);