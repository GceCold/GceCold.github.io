import{_ as n,d as s}from"./app.c5a9f947.js";const a={},t=s(`<h1 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h1><p>\u73A9\u5BB6\u6A21\u578B\u914D\u7F6E\u6587\u4EF6\u6682\u65F6\u65E0\u6CD5\u81EA\u52A8\u751F\u6210\uFF0C\u60A8\u9700\u8981\u624B\u52A8\u521B\u5EFA\u6A21\u578B\u914D\u7F6E\u6587\u4EF6</p><p>Collada\u6A21\u578B\u914D\u7F6E\u6587\u4EF6\u8BF7\u653E\u7F6E\u4E8E<code>OrangeEngine/model/collada</code>\u5185</p><p>BlockBench\u6A21\u578B\u914D\u7F6E\u6587\u4EF6\u8BF7\u653E\u7F6E\u4E8E<code>OrangeEngine/model/blockbench</code>\u5185</p><p>\u793A\u4F8B\u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">PlayerModel</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6A21\u578B\u540D\uFF0C\u8BF7\u4E0E OrangeEngine/collada</span>
  <span class="token key atrule">Name</span><span class="token punctuation">:</span> <span class="token string">&quot;biped&quot;</span>
  <span class="token comment"># \u76D4\u7532\u6A21\u578B</span>
  <span class="token key atrule">ArmorModel</span><span class="token punctuation">:</span>
    <span class="token key atrule">Head</span><span class="token punctuation">:</span> <span class="token string">&quot;helmet_default&quot;</span>
    <span class="token key atrule">Chest</span><span class="token punctuation">:</span> <span class="token string">&quot;chestplate_default&quot;</span>
    <span class="token key atrule">Legs</span><span class="token punctuation">:</span> <span class="token string">&quot;leggings_default&quot;</span>
    <span class="token key atrule">Feet</span><span class="token punctuation">:</span> <span class="token string">&quot;boots_default&quot;</span>
  <span class="token comment"># \u9AA8\u9ABC\u7ED1\u5B9A</span>
  <span class="token key atrule">BindJoint</span><span class="token punctuation">:</span>
    <span class="token key atrule">Head</span><span class="token punctuation">:</span> <span class="token string">&quot;Head&quot;</span>
    <span class="token key atrule">MainHand</span><span class="token punctuation">:</span> <span class="token string">&quot;Tool_R&quot;</span>
    <span class="token key atrule">OffHand</span><span class="token punctuation">:</span> <span class="token string">&quot;Tool_L&quot;</span>
  <span class="token key atrule">Animation</span><span class="token punctuation">:</span>
    <span class="token key atrule">Internal</span><span class="token punctuation">:</span>
      <span class="token key atrule">Idle</span><span class="token punctuation">:</span> <span class="token string">&quot;idle&quot;</span>
      <span class="token key atrule">IdleWithShift</span><span class="token punctuation">:</span> <span class="token string">&quot;kneel&quot;</span>
      <span class="token key atrule">Death</span><span class="token punctuation">:</span> <span class="token string">&quot;death&quot;</span>
      <span class="token key atrule">Walk</span><span class="token punctuation">:</span> <span class="token string">&quot;walk&quot;</span>
      <span class="token key atrule">Jump</span><span class="token punctuation">:</span>  <span class="token string">&quot;jump&quot;</span>
      <span class="token key atrule">Run</span><span class="token punctuation">:</span> <span class="token string">&quot;run&quot;</span>
      <span class="token key atrule">Sneak</span><span class="token punctuation">:</span> <span class="token string">&quot;sneak&quot;</span>
      <span class="token key atrule">Fly</span><span class="token punctuation">:</span> <span class="token string">&quot;fly&quot;</span>
      <span class="token key atrule">Mount</span><span class="token punctuation">:</span> <span class="token string">&quot;mount&quot;</span>
      <span class="token key atrule">Sleep</span><span class="token punctuation">:</span> <span class="token string">&quot;sleep&quot;</span>
      <span class="token key atrule">Climb</span><span class="token punctuation">:</span> <span class="token string">&quot;climb&quot;</span>
      <span class="token key atrule">Swim</span><span class="token punctuation">:</span> <span class="token string">&quot;swim&quot;</span>
      <span class="token key atrule">Float</span><span class="token punctuation">:</span> <span class="token string">&quot;float&quot;</span>
      <span class="token key atrule">Fall</span><span class="token punctuation">:</span> <span class="token string">&quot;fall&quot;</span>
      <span class="token key atrule">Eat</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">Drink</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">Dig</span><span class="token punctuation">:</span> <span class="token string">&quot;dig&quot;</span>
      <span class="token key atrule">BowAim</span><span class="token punctuation">:</span> <span class="token string">&quot;bow_aim_mid&quot;</span>
      <span class="token key atrule">Block</span><span class="token punctuation">:</span> <span class="token string">&quot;shield&quot;</span>
    <span class="token comment"># \u79FB\u52A8\u52A8\u753B\u5217\u8868\uFF08\u529F\u80FD\u6682\u65F6\u79FB\u9664\uFF09</span>
    <span class="token key atrule">Custom</span><span class="token punctuation">:</span>
      <span class="token key atrule">Movement</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,6);function e(p,l){return t}var u=n(a,[["render",e],["__file","configuration.html.vue"]]);export{u as default};
