import{_ as i,r as a,o as c,c as s,a as n,b as t,w as r,d,e}from"./app.383af0f4.js";const l={},m=d(`<h1 id="\u63D2\u4EF6\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6307\u4EE4" aria-hidden="true">#</a> \u63D2\u4EF6\u6307\u4EE4</h1><h2 id="\u6240\u6709\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u6307\u4EE4" aria-hidden="true">#</a> \u6240\u6709\u6307\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/oe npc             CitizensNPC\u5B9E\u4F53\u76F8\u5173\u64CD\u4F5C
   =&gt; /oe npc trait [ModeName]               \u4E3ANPC\u7ED1\u5B9A\u6A21\u578B
   =&gt; /oe npc play [AnimationName]           \u6307\u5B9ANPC\u64AD\u653E\u6A21\u578B\u52A8\u753B
   =&gt; /oe npc play [Id] [AnimationName]      \u6307\u5B9AID\u7684NPC\u64AD\u653E\u52A8\u753B
/oe resource        \u8D44\u6E90\u76F8\u5173\u64CD\u4F5C
   =&gt; /oe resource bb                  \u5C06bb\u6587\u4EF6\u8F6C\u6362\u4E3AOrangeEngine\u7684json\u6A21\u578B
   =&gt; /oe resource zip [Password]      \u6253\u5305\u52A0\u5BC6\u8D44\u6E90\u6587\u4EF6
/oe reload          \u91CD\u8F7D\u6240\u6709\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8D44\u6E90\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u64CD\u4F5C" aria-hidden="true">#</a> \u8D44\u6E90\u64CD\u4F5C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/oe resource                           \u8D44\u6E90\u64CD\u4F5C
   =&gt; /oe resource bb                  \u5C06bb\u6587\u4EF6\u8F6C\u6362\u4E3AOrangeEngine\u7684json\u6A21\u578B
   =&gt; /oe resource zip [Password]      \u6253\u5305\u52A0\u5BC6\u8D44\u6E90\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/oe resource bb</code>\u5C06\u81EA\u52A8\u5C06\u904D\u5386<code>OrangeEngine/blockbench</code>\u5185\u6240\u6709\u6587\u4EF6\u5939\u7684<code>.bbmodel</code>\u6587\u4EF6\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5728\u8BE5\u76EE\u5F55\u4E0B\u653E\u7F6E\u591A\u5C42\u6587\u4EF6\u5939\u5BF9\u6A21\u578B\u8FDB\u884C\u5206\u7C7B</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u786E\u4FDD\u60A8\u7684\u6A21\u578B\u6587\u4EF6\u5728Blockbench\u4E2D\u7684<code>File Name</code>\u8BBE\u7F6E\u7684\u540D\u79F0\u9075\u5FAA<code>[a-zA-Z0-9/._-]</code>\u89C4\u5219\uFF0C\u5916\u90E8bb\u6587\u4EF6\u540D\u53EF\u968F\u610F\u8BBE\u7F6E</p><p>\u4F8B\uFF1ABlockbench\u4E2D\u8BBE\u7F6E<code>File Name</code>\u4E3A&quot;Test_Model&quot;\uFF0C\u4F46bb\u6587\u4EF6\u540D\u53EF\u8BBE\u7F6E\u4E3A&quot;\u6D4B\u8BD5\u6A21\u578B.bbmodel&quot;\u3002\u5BFC\u51FA\u65F6\u63D2\u4EF6\u81EA\u52A8\u5728<code>OrangeEngine/model</code>\u5185\u751F\u6210\u6A21\u578B\u914D\u7F6E<code>test_model.yml</code>\uFF0C\u914D\u7F6E\u5185\u7684<code>Name</code>\u4E3A&quot;test_model&quot;</p></div>`,7),u=e("\u5BFC\u51FA\u540E\u7684\u6A21\u578B\u5C06\u81EA\u52A8\u5B58\u653E\u4E8E"),p=n("code",null,"OrangeEngine/resources/assets/orangeengine",-1),b=e("\u5185\uFF0C\u66F4\u591A\u8BE6\u7EC6\u53EF\u67E5\u770B"),v=e("\u8D44\u6E90\u5305\u8BF4\u660E"),h=d(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6307\u4EE4\u751F\u6210\u6A21\u578B\u540E\u63D2\u4EF6\u4E0D\u4F1A\u81EA\u52A8\u52A0\u8F7D\u8FDB\u63D2\u4EF6\u6A21\u578B\u5217\u8868\u4E2D\uFF0C\u9700\u624B\u52A8\u6267\u884C<code>/oe reload</code>\u91CD\u65B0\u52A0\u8F7D</p></div><h2 id="citizensnpc\u76F8\u5173\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#citizensnpc\u76F8\u5173\u64CD\u4F5C" aria-hidden="true">#</a> CitizensNPC\u76F8\u5173\u64CD\u4F5C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/oe npc                                     CitizensNPC\u64CD\u4F5C
  =&gt; /oe npc trait [ModeName]               \u4E3ANPC\u7ED1\u5B9A\u6A21\u578B
  =&gt; /oe npc play [AnimationName]           \u6307\u5B9ANPC\u64AD\u653E\u6A21\u578B\u52A8\u753B
  =&gt; /oe npc play [Id] [AnimationName]      \u6307\u5B9AID\u7684NPC\u64AD\u653E\u52A8\u753B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F7F\u7528<code>/oe npc trait</code>\u4E0E<code>/oe npc play</code>\u524D\u8BF7\u5148\u4F7F\u7528<code>/npc select|sel</code>\u9009\u62E9npc\u5B9E\u4F53</p><p><code>ModelName</code>\u4E3A<code>OrangeEngine/model</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u7684<code>Name</code>\u7684\u540D\u5B57</p><p><code>AnimationName</code>\u4E3Abb\u6A21\u578B\u6587\u4EF6\u4E2D\u52A8\u4F5C\u540D</p><p><code>Id</code>\u4E3ANPC ID</p>`,7);function g(_,N){const o=a("RouterLink");return c(),s("div",null,[m,n("p",null,[u,p,b,t(o,{to:"/guide/plugin/resources.html"},{default:r(()=>[v]),_:1})]),h])}var C=i(l,[["render",g],["__file","commands.html.vue"]]);export{C as default};
