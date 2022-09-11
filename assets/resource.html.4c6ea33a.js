import{_ as n,d as a}from"./app.c5a9f947.js";const e={},s=a(`<h1 id="\u6A21\u578B\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u8D44\u6E90" aria-hidden="true">#</a> \u6A21\u578B\u8D44\u6E90</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u6CE8\u610F\uFF0CCollada\u6A21\u578B\u751F\u6210\u4E0EBlockbench\u6A21\u578B\u89E3\u6790\u6709\u8F83\u5927\u533A\u522B\uFF0C\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u672C\u7AE0\u540E\u518D\u8FDB\u884C\u64CD\u4F5C\uFF01</p></div><h2 id="\u751F\u6210\u8D44\u6E90\u5305" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u8D44\u6E90\u5305" aria-hidden="true">#</a> \u751F\u6210\u8D44\u6E90\u5305</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500 plugins
   \u2514\u2500 OrangeEngine
      \u251C\u2500 blockbench               &lt;-  \u5F85\u8F6C\u6362Blockbench\u6A21\u578B
      \u2514\u2500 collada                  &lt;-  \u5F85\u8F6C\u6362Collada\u6A21\u578B
         \u2514\u2500 \u6A21\u578B\u540D
            \u2514\u2500 \u6A21\u578B\u6587\u4EF6.dae        &lt;-  \u5F85\u8F6C\u6362Collada\u6A21\u578B

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u60A8\u60F3\u4F7F\u7528\u4E00\u4E2A\u65B0\u7684Collada\u6A21\u578B\uFF0C\u60A8\u9700\u8981\u5148\u5728<code>OrangeEngine/collada</code>\u5185\u65B0\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u4EE5\u6A21\u578B\u540D\u4E3A\u540D\u79F0\u7684\u6587\u4EF6\u5939\uFF0C\u8BE5\u6587\u4EF6\u5939\u5FC5\u987B\u4E3A\u82F1\u6587\uFF0C<strong>\u5E76\u52A1\u5FC5\u9075\u5FAA[a-z0-9/._-]\u683C\u5F0F</strong>\u3002</p><p>\u60A8\u9700\u8981\u5C06\u6240\u6709\u76F8\u540C\u6A21\u578B\u4F46\u52A8\u753B\u4E0D\u540C\u7684Collada\u6A21\u578B\u6587\u4EF6\u653E\u5165\u8BE5\u6587\u4EF6\u5939\u5185\uFF0C\u6A21\u578B\u6587\u4EF6\u540D\u4E5F\u8BF7<strong>\u9075\u5FAA[a-z0-9/._-]\u683C\u5F0F</strong>\u3002</p><p>\u4F7F\u7528\u6307\u4EE4<code>/oe resource collada</code>\u5373\u53EF\u5BFC\u51FA\u3002</p><h2 id="\u8D44\u6E90\u5305\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u5305\u76EE\u5F55" aria-hidden="true">#</a> \u8D44\u6E90\u5305\u76EE\u5F55</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500 plugins
   \u2514\u2500 OrangeEngine
      \u2514\u2500 resources         &lt;-  \u5BFC\u51FA\u8D44\u6E90\u5305
         \u251C\u2500 pack.mcmeta
         \u2514\u2500 assets
            \u2514\u2500 orangeengine           &lt;-  \u8D44\u6E90\u5305\u547D\u540D\u7A7A\u95F4\u4E0D\u80FD\u4FEE\u6539
               \u2514\u2500 collada             &lt;-  \u6A21\u578B\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
                  \u251C\u2500 model            &lt;-  \u6A21\u578B\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
                  \u251C\u2500 animation        &lt;-  \u52A8\u753B\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
                  \u251C\u2500 armor            &lt;-  \u76D4\u7532\u6A21\u578B\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
                  \u2514\u2500 textures         &lt;-  \u8D34\u56FE\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
                     \u2514\u2500 armor         &lt;-  \u76D4\u7532\u8D34\u56FE\u6587\u4EF6\u5B58\u50A8\u4F4D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5F53\u524D\u7248\u672C\u73A9\u5BB6\u6A21\u578B\u81EA\u52A8\u4F7F\u7528\u73A9\u5BB6\u76AE\u80A4\u4F5C\u4E3A\u8D34\u56FE\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u76D4\u7532\u6A21\u578B\u4F7F\u7528Minecraft\u4E2D\u9ED8\u8BA4\u8D34\u56FE\u3002</p><p>OrangeEngine\u63D0\u4F9B\u4E00\u4EFD\u6765\u81EAEpicFight\u7684\u793A\u4F8B\u6A21\u578B\u5305\uFF0C\u53EF\u5728\u7FA4\u5185\u81EA\u884C\u4E0B\u8F7D\u3002</p>`,11);function r(l,c){return s}var t=n(e,[["render",r],["__file","resource.html.vue"]]);export{t as default};
