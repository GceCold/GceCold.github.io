import{_ as p,r as t,o as l,a as c,b as n,d as o,w as r,F as u,c as a,e as s}from"./app.371f2336.js";const i={},m=a(`<h1 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h1><p>\u63D2\u4EF6\u914D\u7F6E\u76EE\u5F55\u7ED3\u6784</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500 plugins
   \u2514\u2500 OrangeEngine
      \u251C\u2500 blockbench        &lt;-  \u5F85\u8F6C\u6362\u6A21\u578B
      \u2502  \u2514\u2500 \u6A21\u578B.bbmodel
      \u251C\u2500 model             &lt;-  \u6A21\u578B\u914D\u7F6E\u6587\u4EF6
      \u2502  \u2514\u2500 \u6A21\u578B\u540D.yml 
      \u251C\u2500 resources         &lt;-  \u5BFC\u51FA\u6A21\u578B\u5B58\u50A8\u4F4D\u7F6E
      \u251C\u2500 config.yml
      \u2514\u2500 resources.yml     &lt;-  \u52A0\u5BC6\u8D44\u6E90\u5305\u8BBE\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="config-yml" tabindex="-1"><a class="header-anchor" href="#config-yml" aria-hidden="true">#</a> config.yml</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token comment"># \u7528\u6765\u8BF7\u6C42\u8282\u70B9\u5217\u8868\uFF0C\u4E0D\u61C2\u8BEF\u6539</span>
  <span class="token key atrule">dns</span><span class="token punctuation">:</span> <span class="token string">&quot;119.29.29.29&quot;</span>
  <span class="token comment"># \u9ED8\u8BA4\u8282\u70B9\u9009\u62E9 \u7559\u7A7A\u81EA\u52A8\u9009\u62E9</span>
  <span class="token comment"># \u586B\u5199\u793A\u4F8B \u5982\u679C\u9009\u62E9\u8282\u70B92\u4F5C\u4E3A\u9ED8\u8BA4\u8282\u70B9\u8BF7\u586B\u5165 &quot;2&quot;</span>
  <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>

<span class="token comment"># \u5B98\u7F51\u6CE8\u518C\u90AE\u7BB1</span>
<span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
<span class="token comment"># \u4F7F\u7528\u7801</span>
<span class="token key atrule">code</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728\u9996\u6B21\u751F\u6210\u63D2\u4EF6\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u60A8\u9700\u8981\u5728<code>user</code>\u5185\u586B\u5199\u60A8\u5B98\u7F51\u6CE8\u518C\u90AE\u7BB1\uFF0C\u5728<code>code</code>\u5185\u586B\u5199\u63D2\u4EF6\u4F7F\u7528\u7801\uFF0C\u5982\u679C\u4E22\u5931\u53EF\u5728\u5B98\u7F51\u67E5\u8BE2\u3002</p><p>\u5728\u60A8\u542F\u52A8\u591A\u6B21\u540E\uFF0C\u5982\u679C\u60A8\u670D\u52A1\u5668\u80FD\u591F\u957F\u65F6\u95F4\u7A33\u5B9A\u8FDE\u63A5\u67D0\u4E00\u8282\u70B9\u670D\u52A1\u5668\uFF0C\u60A8\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E\u8BE5\u8282\u70B9\u4E3A\u60A8\u7684\u9ED8\u8BA4\u9A8C\u8BC1\u670D\u52A1\u5668\u3002\u7559\u7A7A\u5C06\u81EA\u52A8\u9009\u62E9\u5EF6\u8FDF\u8F83\u4F4E\u7684\u8282\u70B9\u670D\u52A1\u5668\u3002</p><blockquote><p>\u586B\u5199\u793A\u4F8B \u5982\u679C\u9009\u62E9\u8282\u70B92\u4F5C\u4E3A\u9ED8\u8BA4\u8282\u70B9\u8BF7\u586B\u5165 &quot;2&quot;</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u63D2\u4EF6\u65E0\u6CD5\u83B7\u53D6\u670D\u52A1\u5668\u8282\u70B9\uFF0C\u53EF\u5C1D\u8BD5\u4FEE\u6539<code>dns</code>\u9879 \u5C1D\u8BD5\u4FEE\u6539\u4E3A\u7C7B\u4F3C<code>114.114.114.114</code> <code>223.5.5.5</code> <code>119.29.29.29</code>\u7B49dns\u670D\u52A1\u5668</p><p>\u5982\u679C\u4EE5\u4E0A\u5747\u65E0\u6CD5\u83B7\u53D6\uFF0C\u8BF7\u5728\u786E\u4FDD\u670D\u52A1\u5668\u80FD\u591F\u6B63\u5E38<code>ping baidu.com</code>\u5E76\u8FD4\u56DEIP\u5730\u5740\u7684\u60C5\u51B5\u4E0B\uFF0C\u67E5\u770B\u670D\u52A1\u5668\u8BBE\u7F6E\u7684\u9ED8\u8BA4dns\u5E76\u586B\u5165\u672C\u914D\u7F6E\u5185</p></div><h2 id="resources-yml" tabindex="-1"><a class="header-anchor" href="#resources-yml" aria-hidden="true">#</a> resources.yml</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u793A\u4F8B\u547D\u540D\uFF0C\u53EF\u81EA\u5B9A\u4E49</span>
<span class="token key atrule">example</span><span class="token punctuation">:</span>
  <span class="token comment"># zip\u538B\u7F29\u5305\u5B57</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span> <span class="token string">&quot;resources.zip&quot;</span>   
  <span class="token comment"># zip\u538B\u7F29\u5305\u5BC6\u7801</span>
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u52A0\u5BC6\u8D44\u6E90\u5305\u52A0\u8F7D\uFF0C\u76EE\u524D\u672C\u529F\u80FD\u4F1A\u5728\u73A9\u5BB6\u8FDB\u670D\u540E\u5F3A\u5236\u91CD\u8F7D\u8D44\u6E90\u5305\u4EE5\u52A0\u8F7D\u52A0\u5BC6\u8D44\u6E90\u5305\uFF0C\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u53EF\u80FD\u4F1A\u5F71\u54CD\u73A9\u5BB6\u4F53\u9A8C\uFF0C\u529F\u80FD\u5F85\u5B8C\u5584\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6E05\u7A7A\u672C\u914D\u7F6E\u6587\u4EF6\u5373\u53EF\u5173\u95ED\u672C\u529F\u80FD</p></div><h2 id="\u6A21\u578B\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6A21\u578B\u914D\u7F6E\u6587\u4EF6</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">Model</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6A21\u578B\u540D\uFF0C\u82E5\u624B\u52A8\u4FEE\u6539\u8BF7\u9075\u5FAA[a-z0-9/._-]\uFF0C\u540C\u65F6\u4E5F\u4F5C\u4E3A\u8BC6\u522B\u8D44\u6E90\u5305\u5185\u6A21\u578B\u7684\u91CD\u8981\u7279\u5F81</span>
  <span class="token key atrule">Name</span><span class="token punctuation">:</span> <span class="token string">&quot;goblin&quot;</span>
  <span class="token comment">#\u81EA\u5B9A\u4E49\u78B0\u649E\u7BB1</span>
  <span class="token key atrule">Hitbox</span><span class="token punctuation">:</span>
    <span class="token comment">#\u78B0\u649E\u7BB1\u5BBD\u5EA6</span>
    <span class="token key atrule">Width</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token comment">#\u78B0\u649E\u7BB1\u9AD8\u5EA6</span>
    <span class="token key atrule">Height</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token comment"># \u6A21\u578B\u52A8\u4F5C\u521D\u59CB\u5316\u9ED8\u8BA4\u52A8\u4F5C\uFF0C\u4F8B\u5982\u5B9E\u4F53\u7A7A\u95F2\u65F6\u5FAA\u73AF\u64AD\u653EIDLE\u6307\u5B9A\u7684\u52A8\u753B\uFF0C\u8D70\u8DEF\u65F6\u64AD\u653EWalk\u8BBE\u7F6E\u7684\u52A8\u753B</span>
  <span class="token key atrule">Animation</span><span class="token punctuation">:</span>
    <span class="token key atrule">Idle</span><span class="token punctuation">:</span> <span class="token string">&quot;idle&quot;</span>
    <span class="token key atrule">Walk</span><span class="token punctuation">:</span> <span class="token string">&quot;walk&quot;</span>
    <span class="token key atrule">Jump</span><span class="token punctuation">:</span> <span class="token string">&quot;jump&quot;</span>
    <span class="token key atrule">Death</span><span class="token punctuation">:</span> <span class="token string">&quot;death&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5982\u679C\u4F7F\u7528\u6307\u4EE4<code>/oe resource bb</code>\u5BFC\u51FA\u6A21\u578B\u6587\u4EF6\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u4F7F\u7528Blockbench\u4E2D\u8BBE\u7F6E\u7684<code>File Name</code>\u5C0F\u5199\u8F6C\u6362\u540E\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u540D\u4EE5\u53CA\u6A21\u578B\u540D</p>`,16),d=s("\u5982\u679C\u60A8\u624B\u52A8\u4FEE\u6539"),b=n("code",null,"Name",-1),k=s("\u8BF7\u786E\u4FDD\u540D\u5B57\u4E0E\u8D44\u6E90\u5305\u5185\u7684json\u6587\u4EF6\u4E0E\u8D34\u56FE\u6587\u4EF6\u540D\u5B57\u76F8\u5BF9\uFF0C\u5426\u5219\u5BA2\u6237\u7AEF\u65E0\u6CD5\u6CE8\u518C\u6A21\u578B\uFF0C\u624B\u52A8\u4FEE\u6539\u524D\u8BF7\u9605\u8BFB"),g=s("\u8D44\u6E90\u5305\u8BF4\u660E"),h=a('<p><strong>\u624B\u52A8\u4FEE\u6539<code>Name</code>\u65F6\uFF0C\u8BF7\u6CE8\u610F\u4FEE\u6539\u540E\u7684\u5B57\u7B26\u4E32\u52A1\u5FC5\u9075\u5FAA[a-z0-9/._-]\u683C\u5F0F\uFF0C\u5426\u5219\u53EF\u80FD\u9020\u6210\u6A21\u578B\u65E0\u6CD5\u52A0\u8F7D</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Mod\u4F1A\u81EA\u52A8\u52A0\u8F7D\u52A8\u753BJson\u5185\u6240\u6709\u52A8\u753B\u3002\u914D\u7F6E\u6587\u4EF6\u5185\u7684Animation\u7684\u914D\u7F6E\u4EC5\u662F\u4F5C\u4E3A\u6A21\u578B\u5B9E\u4F53\u9ED8\u8BA4\u72B6\u6001\u65F6\u81EA\u52A8\u64AD\u653E\u7684\u52A8\u753B\u3002\u7C7B\u4F3C<code>ModelEngine</code>\u7684<code>DefaultState</code>\u6807\u7B7E</p></div><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u63D0\u793A</p><p>\u63D2\u4EF6\u5728\u52A0\u8F7D\u65F6\u4F1A\u81EA\u52A8\u904D\u5386<code>OrangeEngine/model</code>\u5185\u7684\u6240\u6709\u914D\u7F6E\u6587\u4EF6\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5728\u8BE5\u76EE\u5F55\u4E0B\u653E\u7F6E\u591A\u5C42\u6587\u4EF6\u5939\u5BF9\u6A21\u578B\u8FDB\u884C\u5206\u7C7B</p><p>\u540C\u65F6\u63D2\u4EF6<strong>\u4E0D\u4F1A</strong>\u5BF9\u672C\u76EE\u5F55\u4E0B\u7684\u914D\u7F6E\u6587\u4EF6\u540D\u8FDB\u884C\u9650\u5236\uFF0C\u60A8\u53EF\u4EE5\u968F\u610F\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540D\u4F5C\u4E3A\u76F8\u5173\u6807\u6CE8\uFF0C\u4F46\u914D\u7F6E\u6587\u4EF6\u5185\u7684<code>Name</code>\u8BF7\u8C28\u614E\u4FEE\u6539</p></div>',3);function y(_,q){const e=t("RouterLink");return l(),c(u,null,[m,n("p",null,[n("strong",null,[d,b,k,o(e,{to:"/guide/plugin/resources.html"},{default:r(()=>[g]),_:1})])]),h],64)}var f=p(i,[["render",y],["__file","configuration.html.vue"]]);export{f as default};
