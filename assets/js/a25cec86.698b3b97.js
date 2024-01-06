"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),g=r,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||o;return n?a.createElement(d,i(i({ref:e},p),{},{components:n})):a.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6567:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Custom Objects",description:"How to save and get custom objects in Rtag"},i=void 0,s={unversionedId:"rtag/feature/custom-objects",id:"rtag/feature/custom-objects",title:"Custom Objects",description:"How to save and get custom objects in Rtag",source:"@site/docs/rtag/feature/custom-objects.md",sourceDirName:"rtag/feature",slug:"/rtag/feature/custom-objects",permalink:"/rtag/feature/custom-objects",draft:!1,editUrl:"https://github.com/saicone/rtag/blob/main/docs/default/feature/custom-objects.md",tags:[],version:"current",lastUpdatedBy:"Rubenicos",lastUpdatedAt:1704582569,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Custom Objects",description:"How to save and get custom objects in Rtag"},sidebar:"rtag",previous:{title:"Optional Types",permalink:"/rtag/feature/types"},next:{title:"Functional Paths",permalink:"/rtag/feature/functions"}},l={},u=[{value:"Gson serializer",id:"gson-serializer",level:2},{value:"Rtag registry",id:"rtag-registry",level:2},{value:"Example",id:"example",level:3}],p={toc:u},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With Rtag you can set custom objects into NBT tags and get has the required type, depends on your needs there are different options to (de)serialize objects."),(0,r.kt)("h2",{id:"gson-serializer"},"Gson serializer"),(0,r.kt)("p",null,"By using the Gson library inside Bukkit code, it's possible to convert objets following the next process:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Serializer (set)"),": Custom Object -> Json String -> Map -> NBTTagCompound"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deserializer (get)"),": NBTTagCompound -> Map -> Json String -> Custom Object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Create your custom object\nMyObject myObj = ...;\n\n// --- Using Rtag instance\nRtag rtag = ...;\nObject compount = ...;\n// Set to "my -> object -> path"\nrtag.set(compound, myObj, "my", "object", "path");\n// Get from "my <- object <- path"\nMyObject sameObj = rtag.getOptional(compount, "my", "object", "path").as(MyObject.class);\n\n\n// --- Using RtagEditor instance\nRtagEditor tag = ...;\n// Set to "my -> object -> path"\ntag.set(myObj, "my", "object", "path");\n// Get from "my <- object <- path"\nMyObject sameObj = tag.getOptional("my", "object", "path").as(MyObject.class);\n')),(0,r.kt)("h2",{id:"rtag-registry"},"Rtag registry"),(0,r.kt)("p",null,"Rtag by default only has support for normal Java objects (String, Integer, List... etc), if you want to set and get custom objects you can register a (de)serializer into Rtag instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RtagSerializer"),": Instance to convert a custom object into Map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RtagDeserializer"),": Instance to convert a Map into a custom object."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This conversion put an additional key into your saved tag to detect it using the provided ID.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Suppose you have a custom object named ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomData")," to save additional data in your items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package my.plugin;\n\npublic class CustomData {\n\n    private final String type;\n    private int level;\n    private boolean broken;\n\n    public CustomData(String type, int level, boolean broken) {\n        this.type = type;\n        this.level = level;\n        this.broken = broken;\n    }\n\n    public String getType() {\n        return type;\n    }\n\n    public int getLevel() {\n        return level;\n    }\n\n    public boolean isBroken() {\n        return broken;\n    }\n\n    public void setLevel(int level) {\n        this.level = level;\n    }\n\n    public void setBroken(boolean broken) {\n        this.broken = broken;\n    }\n\n    public boolean equals(Object object) {\n        if (object instanceof CustomData) {\n            CustomData data = (CustomData) object;\n            return data.getType().equals(type) && data.getLevel == level && data.isBroken == broken;\n        }\n        return false;\n    }\n}\n")),(0,r.kt)("p",null,"So you need to create a (de)serializer for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package my.plugin;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class CustomDataConversion implements RtagSerializer<CustomData>, RtagDeserializer<CustomData> {\n    \n    // ID used when the object will be converted into Map.\n    // CustomData -> Map\n    @Override\n    public String getInID() {\n        return "myplugin:CustomData";\n    }\n    \n    // ID used when an Map will be converted into the object.\n    // Map -> CustomData\n    @Override\n    public String getOutID() {\n        return "myplugin:CustomData";\n    }\n\n    // Convert the CustomData into Map\n    @Override\n    public Map<String, Object> serialize(CustomData data) {\n        Map<String, Object> map = new HashMap();\n        map.put("type", data.getType());\n        map.put("level", data.getLevel());\n        // Boolean value must be saved as byte\n        map.put("broken", data.isBroken() ? (byte) 1 : (byte) 0);\n        return map;\n    }\n    \n    // Convert the Map into CustomData\n    @Override\n    public CustomData deserialize(Map<String, Object> map) {\n        String type = (String) map.get("type");\n        Integer level = (Integer) map.get("level");\n        Byte broken = (Byte) map.get("broken");\n\n        if (type == null || level == null || broken == null) {\n            return null;\n        } else {\n            return new CustomData(type, level, broken == (byte) 1);\n        }\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's suggested to use an ID with the format ",(0,r.kt)("inlineCode",{parentName:"p"},"<plugin>:<object>")," to avoid incompatibility issues with other plugins ")),(0,r.kt)("p",null,"Then you need to register the (de)serializer into used Rtag instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Rtag rtag = ...;\nCustomDataConversion serializer = new CustomDataConversion();\n\nrtag.putSerializer(CustomData.class, serializer);\nrtag.putDeserializer(serializer);\n")),(0,r.kt)("p",null,"Now when you use the Rtag instance with registered ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomDataConversion"),", you can set and get the CustomData with simple methods."),(0,r.kt)("p",null,"In this example will be used an RtagItem with Rtag that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomDataConversion"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private final Rtag rtag = initRtag();\n\nprivate Rtag initRtag() {\n    Rtag rtag = new Rtag();\n    CustomDataConversion serializer = new CustomDataConversion();\n    rtag.putSerializer(CustomData.class, serializer);\n    rtag.putDeserializer(serializer);\n    return rtag;\n}\n\npublic void example(ItemStack item) {\n    RtagItem tag = new RtagItem(rtag, item);\n    \n    // -- Save custom data into ItemStack\n    \n    // Data for the item\n    CustomData data = new CustomData("EPIC", 30, false);\n    // Save at path "custom -> data"\n    tag.set(data, "custom", "data");\n    \n    // The changes will be loaded into original item\n    tag.load();\n    \n    \n    // -- Get custom data from ItemStack\n    \n    // Get data from "custom" -> "data" without explicit conversion\n    CustomData itemData = tag.get("custom", "data");\n    // Check if it equals\n    System.out.println(data.equals(itemData));\n}\n')))}m.isMDXComponent=!0}}]);