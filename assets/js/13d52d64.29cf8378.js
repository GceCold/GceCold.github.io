"use strict";(self.webpackChunkwiki_new=self.webpackChunkwiki_new||[]).push([[944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,description:"\u6a21\u578b\u914d\u7f6e\u6587\u4ef6"},a="\u6a21\u578b\u914d\u7f6e\u6587\u4ef6",l={unversionedId:"entity-model/configuration",id:"entity-model/configuration",title:"\u6a21\u578b\u914d\u7f6e\u6587\u4ef6",description:"\u6a21\u578b\u914d\u7f6e\u6587\u4ef6",source:"@site/docs/entity-model/configuration.md",sourceDirName:"entity-model",slug:"/entity-model/configuration",permalink:"/docs/entity-model/configuration",draft:!1,editUrl:"https://github.com/GceCold/OrangeEngine-Wiki/docs/entity-model/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u6a21\u578b\u914d\u7f6e\u6587\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u8f7d\u6a21\u578b",permalink:"/docs/entity-model/model-usage"},next:{title:"\u8d44\u6e90\u5305",permalink:"/docs/entity-model/resources"}},p={},c=[],m={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6a21\u578b\u914d\u7f6e\u6587\u4ef6"},"\u6a21\u578b\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="\u6d4b\u8bd5\u6a21\u578b.yml"',title:'"\u6d4b\u8bd5\u6a21\u578b.yml"'},"\nModel:\n  # \u6a21\u578b\u540d\uff0c\u82e5\u624b\u52a8\u4fee\u6539\u8bf7\u9075\u5faa[a-z0-9/._-]\uff0c\u540c\u65f6\u4e5f\u4f5c\u4e3a\u8bc6\u522b\u8d44\u6e90\u5305\u5185\u6a21\u578b\u7684\u91cd\u8981\u7279\u5f81\n  Name: test\n  # \u81ea\u5b9a\u4e49\u78b0\u649e\u7bb1 (\u751f\u6210\u914d\u7f6e\u6587\u4ef6\u65f6\u63d2\u4ef6\u4f1a\u81ea\u52a8\u8bc6\u522bbb\u6a21\u578b\u6587\u4ef6\u5185HitBox\u5927\u5c0f)\n  Hitbox:\n    # \u78b0\u649e\u7bb1\u5bbd\u5ea6\n    Width: 2.375\n    # \u78b0\u649e\u7bb1\u9ad8\u5ea6\n    Height: 3.5625\n  # \u6a21\u578b\u52a8\u4f5c\u521d\u59cb\u5316\u9ed8\u8ba4\u52a8\u4f5c\uff0c\u4f8b\u5982\u5b9e\u4f53\u7a7a\u95f2\u65f6\u5faa\u73af\u64ad\u653eIDLE\u6307\u5b9a\u7684\u52a8\u753b\uff0c\u8d70\u8def\u65f6\u64ad\u653eWalk\u8bbe\u7f6e\u7684\u52a8\u753b\n  Animation:\n    Spawn: spawn\n    Idle: idle\n    Walk: walk\n    Jump: jump\n    Death: death\n  # \u6a21\u578bNameTag\u504f\u79fb\n  TagOffset:\n    X: 0.0\n    Y: 0.0\n    Z: 0.0\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u6307\u4ee4",(0,o.kt)("inlineCode",{parentName:"p"},"/oe resource bb"),"\u5bfc\u51fa\u6a21\u578b\u6587\u4ef6\uff0c\u63d2\u4ef6\u5c06\u4f1a\u81ea\u52a8\u4f7f\u7528Blockbench\u4e2d\u8bbe\u7f6e\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"File Name"),"\u5c0f\u5199\u8f6c\u6362\u540e\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u540d\u4ee5\u53ca\u6a21\u578b\u540d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u624b\u52a8\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"strong"},"Name"),"\u8bf7\u786e\u4fdd\u540d\u5b57\u4e0e\u8d44\u6e90\u5305\u5185\u7684json\u6587\u4ef6\u4e0e\u8d34\u56fe\u6587\u4ef6\u5939\u540d\u5b57\u76f8\u540c\uff0c\u5426\u5219\u5ba2\u6237\u7aef\u65e0\u6cd5\u6ce8\u518c\u6a21\u578b\uff0c\u624b\u52a8\u4fee\u6539\u524d\u8bf7\u9605\u8bfb",(0,o.kt)("a",{parentName:"strong",href:"./resources"},"\u8d44\u6e90\u5305\u8bf4\u660e"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u624b\u52a8\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"strong"},"Name"),"\u65f6\uff0c\u8bf7\u6ce8\u610f\u4fee\u6539\u540e\u7684\u5b57\u7b26\u4e32\u52a1\u5fc5\u9075\u5faa","[a-z0-9/._-]","\u683c\u5f0f\uff0c\u5426\u5219\u53ef\u80fd\u9020\u6210\u6a21\u578b\u65e0\u6cd5\u52a0\u8f7d")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Mod\u4f1a\u81ea\u52a8\u52a0\u8f7d\u52a8\u753bJson\u5185\u6240\u6709\u52a8\u753b\u3002\u914d\u7f6e\u6587\u4ef6\u5185\u7684Animation\u7684\u914d\u7f6e\u4ec5\u662f\u4f5c\u4e3a\u6a21\u578b\u5b9e\u4f53\u9ed8\u8ba4\u72b6\u6001\u65f6\u81ea\u52a8\u64ad\u653e\u7684\u52a8\u753b\u3002")),(0,o.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u5728\u52a0\u8f7d\u65f6\u4f1a\u81ea\u52a8\u904d\u5386",(0,o.kt)("inlineCode",{parentName:"p"},"OrangeEngine/model/blockbench"),"\u5185\u7684\u6240\u6709\u914d\u7f6e\u6587\u4ef6\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5728\u8be5\u76ee\u5f55\u4e0b\u653e\u7f6e\u591a\u5c42\u6587\u4ef6\u5939\u5bf9\u6a21\u578b\u8fdb\u884c\u5206\u7c7b"),(0,o.kt)("p",{parentName:"admonition"},"\u540c\u65f6\u63d2\u4ef6",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a"),"\u5bf9\u672c\u76ee\u5f55\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u540d\u8fdb\u884c\u9650\u5236\uff0c\u60a8\u53ef\u4ee5\u968f\u610f\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540d\u4f5c\u4e3a\u76f8\u5173\u6807\u6ce8\uff0c\u4f46\u914d\u7f6e\u6587\u4ef6\u5185\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Name"),"\u8bf7\u8c28\u614e\u4fee\u6539")))}u.isMDXComponent=!0}}]);