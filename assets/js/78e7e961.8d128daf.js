"use strict";(self.webpackChunkwiki_new=self.webpackChunkwiki_new||[]).push([[281],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=l(t),u=o,b=s["".concat(p,".").concat(u)]||s[u]||d[u]||a;return t?r.createElement(b,i(i({ref:n},m),{},{components:t})):r.createElement(b,i({ref:n},m))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3,description:"\u63d2\u4ef6\u6307\u4ee4"},i="\u63d2\u4ef6\u6307\u4ee4",c={unversionedId:"basics/command",id:"basics/command",title:"\u63d2\u4ef6\u6307\u4ee4",description:"\u63d2\u4ef6\u6307\u4ee4",source:"@site/docs/basics/command.md",sourceDirName:"basics",slug:"/basics/command",permalink:"/docs/basics/command",draft:!1,editUrl:"https://github.com/GceCold/OrangeEngine-Wiki/docs/basics/command.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"\u63d2\u4ef6\u6307\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/basics/configuration"},next:{title:"\u5b9e\u4f53\u6a21\u578b",permalink:"/docs/category/\u5b9e\u4f53\u6a21\u578b"}},p={},l=[{value:"\u6240\u6709\u6307\u4ee4",id:"\u6240\u6709\u6307\u4ee4",level:2},{value:"\u8d44\u6e90\u64cd\u4f5c",id:"\u8d44\u6e90\u64cd\u4f5c",level:2}],m={toc:l},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63d2\u4ef6\u6307\u4ee4"},"\u63d2\u4ef6\u6307\u4ee4"),(0,o.kt)("h2",{id:"\u6240\u6709\u6307\u4ee4"},"\u6240\u6709\u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/oe npc             CitizensNPC\u5b9e\u4f53\u76f8\u5173\u64cd\u4f5c (\u9700\u8981\u5b89\u88c5\u9644\u5c5e\u63d2\u4ef6)\n   => /oe npc trait [ModeName] [Id]                 \u4e3aNPC\u7ed1\u5b9a\u6a21\u578b\n   => /oe npc play [AnimationName]                  \u6307\u5b9aNPC\u64ad\u653e\u6a21\u578b\u52a8\u753b\n   => /oe npc play [AnimationName] [Id]             \u6307\u5b9aID\u7684NPC\u64ad\u653e\u52a8\u753b\n   => /oe npc play [AnimationName] [Player]         \u6307\u5b9a\u73a9\u5bb6\u64ad\u653eNPC\u6a21\u578b\u52a8\u753b\n   => /oe npc play [AnimationName] [Player] [Id]    \u6307\u5b9a\u73a9\u5bb6\u64ad\u653eNPC\u52a8\u753b\n/oe resource        \u8d44\u6e90\u76f8\u5173\u64cd\u4f5c\n   => /oe resource bb                  \u5c06bb\u6587\u4ef6\u8f6c\u6362\u4e3aOrangeEngine\u7684json\u6a21\u578b\n/oe model           \u6a21\u578b\u76f8\u5173\u64cd\u4f5c\n   => /oe model list                   \u5217\u51fa\u5df2\u52a0\u8f7d\u6a21\u578b\u5217\u8868\n/oe player          \u73a9\u5bb6\u6a21\u578b\u64cd\u4f5c\n   => /oe player create [ModelName]    \u751f\u6210\u73a9\u5bb6\u6a21\u578b\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\n   => /oe player bind [ModelName]    \u7ed1\u5b9a\u73a9\u5bb6\u6a21\u578b\n/oe reload          \u91cd\u8f7d\u6240\u6709\u914d\u7f6e\u6587\u4ef6\n")),(0,o.kt)("h2",{id:"\u8d44\u6e90\u64cd\u4f5c"},"\u8d44\u6e90\u64cd\u4f5c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/oe resource                           \u8d44\u6e90\u64cd\u4f5c\n   => /oe resource bb                  \u5c06bb\u6587\u4ef6\u8f6c\u6362\u4e3aOrangeEngine\u7684json\u6a21\u578b\n")),(0,o.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"/oe resource bb"),"\u5c06\u81ea\u52a8\u5c06\u904d\u5386",(0,o.kt)("inlineCode",{parentName:"p"},"OrangeEngine/blockbench"),"\u5185\u6240\u6709\u6587\u4ef6\u5939\u7684",(0,o.kt)("inlineCode",{parentName:"p"},".bbmodel"),"\u6587\u4ef6\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5728\u8be5\u76ee\u5f55\u4e0b\u653e\u7f6e\u591a\u5c42\u6587\u4ef6\u5939\u5bf9\u6a21\u578b\u8fdb\u884c\u5206\u7c7b")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u8bf7\u786e\u4fdd\u60a8\u7684\u6a21\u578b\u6587\u4ef6\u5728Blockbench\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"File Name"),"\u8bbe\u7f6e\u7684\u540d\u79f0\u9075\u5faa",(0,o.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9/._-]"),"\u89c4\u5219\uff0c\u5916\u90e8bb\u6587\u4ef6\u540d\u53ef\u968f\u610f\u8bbe\u7f6e"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\uff1aBlockbench\u4e2d\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"File Name"),'\u4e3a"Test_Model"\uff0c\u4f46bb\u6587\u4ef6\u540d\u53ef\u8bbe\u7f6e\u4e3a"\u6d4b\u8bd5\u6a21\u578b.bbmodel"\u3002'),(0,o.kt)("p",{parentName:"admonition"},"\u5bfc\u51fa\u65f6\u63d2\u4ef6\u4f1a\u81ea\u52a8\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"OrangeEngine/model"),"\u5185\u751f\u6210\u6a21\u578b\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"test_model.yml"),"\uff0c\u914d\u7f6e\u5185\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Name"),'\u4e3a"test_model"')),(0,o.kt)("p",null,"\u5bfc\u51fa\u540e\u7684\u6a21\u578b\u5c06\u81ea\u52a8\u5b58\u653e\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"OrangeEngine/resources/assets/orangeengine"),"\u5185\uff0c\u66f4\u591a\u8be6\u7ec6\u53ef\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"./../entity-model/resources"},"\u8d44\u6e90\u5305\u8bf4\u660e")))}d.isMDXComponent=!0}}]);