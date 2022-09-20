import{_ as s,r as o,o as r,c,a as e,b as i,w as t,F as d,e as n,d as l}from"./app.66c468b9.js";const p={},u=e("h1",{id:"\u8D44\u6E90\u5305\u8BF4\u660E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8D44\u6E90\u5305\u8BF4\u660E","aria-hidden":"true"},"#"),n(" \u8D44\u6E90\u5305\u8BF4\u660E")],-1),m={class:"custom-container warning"},h=e("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),g=n("\u73A9\u5BB6\u6A21\u578B\u8D44\u6E90\u5305\u8BF4\u660E\u8BF7\u524D\u5F80"),_=n("\u6A21\u578B\u8D44\u6E90"),b=n(" \u8BF7\u6CE8\u610F\uFF0CCollada\u6A21\u578B\u751F\u6210\u4E0EBlockbench\u6A21\u578B\u89E3\u6790\u6709\u8F83\u5927\u533A\u522B\uFF0C\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u540E\u518D\u8FDB\u884C\u64CD\u4F5C\uFF01"),x=l(`<h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500 plugins
   \u2514\u2500 OrangeEngine
      \u2514\u2500 resources         &lt;-  \u5BFC\u51FA\u8D44\u6E90\u5305
         \u251C\u2500 pack.mcmeta
         \u2514\u2500 assets
            \u2514\u2500 orangeengine         &lt;-  \u8D44\u6E90\u5305\u547D\u540D\u7A7A\u95F4\u4E0D\u80FD\u4FEE\u6539
               \u251C\u2500 animations        &lt;-  \u52A8\u753B\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
               \u251C\u2500 custom_models     &lt;-  \u6A21\u578B\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
               \u2514\u2500 textures          &lt;-  \u8D34\u56FE\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6587\u4EF6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8BF4\u660E" aria-hidden="true">#</a> \u6587\u4EF6\u8BF4\u660E</h2><p>\u6A21\u578B\u6587\u4EF6\u4EE5<code>\u6A21\u578B\u540D.json</code>\u547D\u540D</p><p>\u52A8\u753B\u6587\u4EF6\u4EE5<code>\u6A21\u578B\u540D.animation.json</code>\u547D\u540D</p><p>\u8D34\u56FE\u6587\u4EF6\u4EE5<code>\u6A21\u578B\u540D.png</code>\u547D\u540D</p><p><strong>\u6A21\u578B\u540D\u4E3A<code>OrangeEngine/model</code>\u5185\u5BF9\u5E94\u6A21\u578B\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684<code>Name</code>\u9879\u8BBE\u7F6E\u7684\u540D\u79F0</strong></p><p>\u5BFC\u51FA\u7684\u6A21\u578B\u6587\u4EF6\u4E3AOrangeEngine\u4E13\u7528\u6587\u4EF6\uFF0C\u6545\u6A21\u578Bjson\u88AB\u6076\u610F\u5077\u53D6\u540E\u540C\u6837\u65E0\u6CD5\u4F7F\u7528\u65E0\u6CD5\u8F6C\u6362</p><h2 id="\u6A21\u578B\u540D\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u540D\u4FEE\u6539" aria-hidden="true">#</a> \u6A21\u578B\u540D\u4FEE\u6539</h2><ol><li>\u5728<code>OrangeEngine/model</code>\u627E\u5230\u5BF9\u5E94\u6A21\u578B\u914D\u7F6E\u6587\u4EF6</li><li>\u4FEE\u6539\u6A21\u578B\u914D\u7F6E\u6587\u4EF6\u4E2D<code>Name</code>\u9879\uFF0C\u4FEE\u6539\u4E3A\u76EE\u6807\u540D\u79F0</li><li>\u8FDB\u5165<code>OrangeEngine/resources/orangeengine/custom_models</code>\u4E2D\u627E\u5230\u5BF9\u5E94\u7684\u6A21\u578B\u914D\u7F6E\u6587\u4EF6\uFF0C\u4FEE\u6539\u540D\u79F0\u4E3A<code>\u76EE\u6807\u540D\u79F0.json</code></li><li>\u8FDB\u5165<code>OrangeEngine/resources/orangeengine/animations</code>\u4E2D\u627E\u5230\u5BF9\u5E94\u7684\u52A8\u753B\u914D\u7F6E\u6587\u4EF6\uFF0C\u4FEE\u6539\u540D\u79F0\u4E3A<code>\u76EE\u6807\u540D\u79F0.animation.json</code></li><li>\u8FDB\u5165<code>OrangeEngine/resources/orangeengine/textures</code>\u4E2D\u627E\u5230\u5BF9\u5E94\u7684\u8D34\u56FE\u6587\u4EF6\uFF0C\u4FEE\u6539\u540D\u79F0\u4E3A<code>\u76EE\u6807\u540D\u79F0.png</code></li><li>\u6253\u5305\u8FDB\u8D44\u6E90\u5305\uFF0C\u66FF\u6362\u5BA2\u6237\u7AEF\u8D44\u6E90\u5305</li><li>\u4F7F\u7528<code>/oe reload</code>\u91CD\u8F7D\u914D\u7F6E</li></ol>`,10);function f(v,E){const a=o("RouterLink");return r(),c(d,null,[u,e("div",m,[h,e("p",null,[g,i(a,{to:"/guide/plugin/collada/resource.html"},{default:t(()=>[_]),_:1}),b])]),x],64)}var k=s(p,[["render",f],["__file","resources.html.vue"]]);export{k as default};
