import{_ as t,d as e}from"./app.66c468b9.js";const n={},a=e(`<h1 id="\u6280\u80FD\u673A\u5236-mechanics" tabindex="-1"><a class="header-anchor" href="#\u6280\u80FD\u673A\u5236-mechanics" aria-hidden="true">#</a> \u6280\u80FD\u673A\u5236[Mechanics]</h1><p>\u672C\u9875\u4F5C\u8005: \u5C0F\u5B66\u751F</p><blockquote><p>OrangeEngine\u4E3AMythicMobs\u63D0\u4F9B\u4E86\u6280\u80FD\u6807\u7B7E\u5E76\u4E14\u4E0EModelEngine\u9AD8\u5EA6\u5339\u914D\uFF0C\u517C\u5BB9\u5927\u90E8\u5206\u6765\u81EAModelEngine\u7684\u6280\u80FD\u914D\u7F6E\u3002</p></blockquote><table><thead><tr><th style="text-align:center;">\u6280\u80FD\u673A\u5236</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">Model</td><td style="text-align:center;">\u4E3A\u76EE\u6807\u5E94\u7528/\u79FB\u9664\u6307\u5B9A\u6A21\u578B</td></tr><tr><td style="text-align:center;">State</td><td style="text-align:center;">\u4E3A\u6307\u5B9A\u76EE\u6807\u5207\u6362\u6A21\u578B\u7684\u72B6\u6001[\u52A8\u753B\uFF0C\u6A21\u578B]</td></tr><tr><td style="text-align:center;">Tint</td><td style="text-align:center;">\u5C06\u6A21\u578B\u7684\u6307\u5B9A\u9AA8\u9ABC\u8D34\u56FE\u8FDB\u884C\u7740\u8272</td></tr><tr><td style="text-align:center;">SwapModel</td><td style="text-align:center;">\u66F4\u6362\u5B9E\u4F53\u6A21\u578B</td></tr><tr><td style="text-align:center;">ChangePart</td><td style="text-align:center;">\u66F4\u6539\u6A21\u578B\u7684\u9AA8\u9ABC\u4E3A\u8BBE\u5B9A\u503C</td></tr><tr><td style="text-align:center;">SubModel</td><td style="text-align:center;">\u5411\u76EE\u6807\u6A21\u578B\u6DFB\u52A0\u6216\u5220\u9664\u4E0D\u540C\u6A21\u578B\u7684\u4E00\u90E8\u5206</td></tr><tr><td style="text-align:center;">Petrify</td><td style="text-align:center;">\u521B\u5EFA\u6A21\u578B\u7684\u96D5\u50CF\uFF0C\u6B64\u6A21\u578B\u4E0D\u80FD\u591F\u66F4\u6539\u6216\u79FB\u52A8</td></tr><tr><td style="text-align:center;">DefaultState</td><td style="text-align:center;">\u8BBE\u7F6E\u6A21\u578B\u7684\u9ED8\u8BA4\u72B6\u6001\uFF0C[\u5C31\u7B97\u4E0D\u8BBE\u7F6E\uFF0C\u4F9D\u7136\u5B58\u5728\u9ED8\u8BA4\u52A8\u753B]</td></tr><tr><td style="text-align:center;">SetModelTag</td><td style="text-align:center;">\u8BBE\u7F6E\u6A21\u578B\u540D\u79F0\u6807\u7B7E\u4E0A\u663E\u793A\u7684\u540D\u79F0</td></tr><tr><td style="text-align:center;">SetModelTagVisible</td><td style="text-align:center;">\u8BBE\u7F6E\u6A21\u578B\u540D\u79F0\u6807\u7B7E\u7684\u53EF\u89C1\u6027</td></tr><tr><td style="text-align:center;">Disguise</td><td style="text-align:center;">\u7ED9\u76EE\u6807\u73A9\u5BB6\u7ED1\u5B9A\u6A21\u578B</td></tr><tr><td style="text-align:center;">Undisguise</td><td style="text-align:center;">\u79FB\u9664\u76EE\u6807\u73A9\u5BB6\u7ED1\u5B9A\u7684\u6A21\u578B</td></tr><tr><td style="text-align:center;">LockHead</td><td style="text-align:center;">\u9501\u5B9A\u6A21\u578B\u7684\u4FEF\u4EF0\u548C\u504F\u822A\u65CB\u8F6C</td></tr><tr><td style="text-align:center;">PartVisibility</td><td style="text-align:center;">\u8BBE\u7F6E\u6A21\u578B\u4E00\u90E8\u5206\u9AA8\u9ABC\u7684\u53EF\u89C1\u6027</td></tr></tbody></table><hr><h3 id="\u6280\u80FD\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u6280\u80FD\u673A\u5236" aria-hidden="true">#</a> \u6280\u80FD\u673A\u5236</h3><blockquote><p>Model \u4E3A\u76EE\u6807\u5E94\u7528/\u79FB\u9664\u6307\u5B9A\u6A21\u578B</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">m, mid, model</td><td style="text-align:center;">\u5E94\u7528\u6307\u5B9A\u7684\u6A21\u578B[\u540D\u79F0]</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">hitbox</td><td style="text-align:center;">h</td><td style="text-align:center;">\u662F\u5426\u66FF\u6362\u751F\u7269\u78B0\u649E\u7BB1\u4E3A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u8BBE\u7F6E]</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">nametag</td><td style="text-align:center;">n, name</td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u751F\u7269\u540D\u5B57\u6807\u7B7E</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">lockpitch</td><td style="text-align:center;">lp, lpitch</td><td style="text-align:center;">\u9501\u5B9A\u5934\u90E8\u4FEF\u4EF0\u89D2</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">lockyaw</td><td style="text-align:center;">ly, lyaw</td><td style="text-align:center;">\u9501\u5B9A\u5934\u90E8\u504F\u822A\u89D2</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">remove</td><td style="text-align:center;">r</td><td style="text-align:center;">\u79FB\u9664\u6A21\u578B</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">invisible</td><td style="text-align:center;">i, invis</td><td style="text-align:center;">\u8BBE\u7F6E\u5B9E\u4F53\u662F\u5426\u4E0D\u53EF\u89C1</td><td style="text-align:center;">false</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># MythicMobs\u5B9E\u4F53\u751F\u6210\u540E\u4E3A\u81EA\u8EAB\u5E94\u7528\u540D\u4E3A&quot;test&quot;\u7684\u6A21\u578B, \u540C\u65F6\u542F\u7528\u540D\u79F0\u6807\u7B7E&quot;\u540C\u6B65mm\u8BBE\u7F6E\u7684\u540D\u79F0&quot;</span>
<span class="token punctuation">-</span> model<span class="token punctuation">{</span>m=test;n=true<span class="token punctuation">}</span> @self ~onSpawn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>State \u4E3A\u6307\u5B9A\u76EE\u6807\u5207\u6362\u6A21\u578B\u7684\u72B6\u6001[\u52A8\u753B\uFF0C\u6A21\u578B]</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">m, mid, model</td><td style="text-align:center;">\u5E94\u7528\u6307\u5B9A\u7684\u6A21\u578B[\u540D\u79F0]</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">state</td><td style="text-align:center;">s</td><td style="text-align:center;">\u5207\u6362\u540E\u7684\u72B6\u6001[\u52A8\u753B]</td><td style="text-align:center;"></td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u653B\u51FB\u65F6\u4EE4\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B&quot;test&quot; \u64AD\u653E\u540D\u4E3A&quot;attack&quot;\u7684\u52A8\u753B</span>
<span class="token punctuation">-</span> state<span class="token punctuation">{</span>s=attack<span class="token punctuation">}</span> @self ~onattack
<span class="token comment"># \u8FD9\u91CC\u6709\u4E2A\u8981\u8BF4\u7684\u662F\uFF0C\u6211\u5EFA\u8BAE\u4F7F\u7528\u6280\u80FD\u7EC4\u653B\u51FB\u6765\u4EE3\u66FF\u539F\u7248\u653B\u51FB\uFF0C\u4E0B\u9762\u63D0\u4F9B\u793A\u4F8B\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u6280\u80FD\u4EE3\u66FF\u539F\u7248\u653B\u51FB\u793A\u4F8B[\u751F\u7269\u914D\u7F6E]</span>
<span class="token comment"># \u4E00\u4E2A\u975E\u5E38\u57FA\u7840\u7684\u751F\u7269\u793A\u4F8B</span>
<span class="token key atrule">\u6211\u662F\u53EF\u7231\u7684\u5C0F\u7EF5\u7F8A</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> HUSK
  <span class="token key atrule">Health</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token key atrule">Damage</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment">#\u5C06\u751F\u7269\u7684\u57FA\u7840\u653B\u51FB\u8BBE\u7F6E\u4E3A0\uFF0C\u4F7F\u7528\u6280\u80FD\u6765\u66FF\u6362\u666E\u901A\u653B\u51FB</span>
  <span class="token key atrule">Skills</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> model<span class="token punctuation">{</span>mid=test<span class="token punctuation">:</span>n=true<span class="token punctuation">}</span> @self ~onSpawn <span class="token comment">#\u5B9E\u4F53\u5728\u751F\u6210\u7684\u65F6\u5019\u8FD0\u7528\u7684\u6307\u5B9A\u6A21\u578B\u5E76\u663E\u793A\u540D\u79F0</span>
  <span class="token punctuation">-</span> skill<span class="token punctuation">{</span>s=\u91CD\u51FB;sync=true<span class="token punctuation">}</span> @self ~onAttack <span class="token comment">#\u8FD9\u6BB5\u6280\u80FD\u65E2\u662F\u7528\u52A8\u753B\u548C\u6280\u80FD\u7EC4\u4EE3\u66FF\u539F\u7248\u653B\u51FB</span>
<span class="token comment">#  - state{s=death} @Self ~onDeath \u8FD9\u6BB5\u662F\u62E5\u6709\u6B7B\u4EA1\u52A8\u753B\u540E\uFF0C\u5C06\u4F1A\u64AD\u653E\u6B7B\u4EA1\u52A8\u753B</span>
  <span class="token key atrule">Options</span><span class="token punctuation">:</span>
    <span class="token key atrule">Silent</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">MovementSpeed</span><span class="token punctuation">:</span> <span class="token number">0.2</span> <span class="token comment">#\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u79FB\u52A8\u52A8\u753B\u4E0D\u80FD\u64AD\u653E\uFF0C\u5219\u662F\u56E0\u4E3A\u79FB\u52A8\u901F\u5EA6\u8FC7\u5FEB\u6216\u8005\u8FC7\u6162\u5BFC\u81F4</span>
    <span class="token key atrule">MaxCombatDistance</span><span class="token punctuation">:</span> <span class="token number">25</span>
    <span class="token key atrule">PreventOtherDrops</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">PreventBlockInfection</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u6280\u80FD\u4EE3\u66FF\u539F\u7248\u653B\u51FB\u793A\u4F8B[\u6280\u80FD\u7EC4\u914D\u7F6E]</span>
<span class="token comment"># \u4E00\u4E2A\u975E\u5E38\u57FA\u7840\u7684\u6280\u80FD\u7EC4\u793A\u4F8B</span>
<span class="token key atrule">\u91CD\u51FB</span><span class="token punctuation">:</span> 
  <span class="token key atrule">Skills</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> CancelEvent
  <span class="token punctuation">-</span> skill<span class="token punctuation">{</span>s=\u91CD\u51FB\u6548\u679C<span class="token punctuation">}</span> @self

<span class="token key atrule">\u91CD\u51FB\u6548\u679C</span><span class="token punctuation">:</span>
  <span class="token key atrule">Cooldown</span><span class="token punctuation">:</span> <span class="token number">0.5</span>
  <span class="token key atrule">Skills</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> state<span class="token punctuation">{</span>s=attack<span class="token punctuation">}</span> @self <span class="token comment">#\u8FD9\u662F\u6307\u5B9A\u89E6\u53D1\u6280\u80FD\u540E\u7684\u52A8\u753B\uFF0C\u52A8\u753B\u95F4\u9694\u6700\u597D\u4E0E\u4F60\u7684\u52A8\u753B\u76F8\u5339\u914D\uFF0C\u8BF7\u81EA\u884C\u7406\u89E3\uFF01</span>
  <span class="token punctuation">-</span> stun<span class="token punctuation">{</span>d=25<span class="token punctuation">}</span> @self
  <span class="token punctuation">-</span> totem<span class="token punctuation">{</span>ch=1;onStart=\u91CD\u51FB\u4F24\u5BB3;int=1;hR=3;md=1<span class="token punctuation">}</span> @Forward<span class="token punctuation">{</span>f=0.5<span class="token punctuation">}</span><span class="token comment">#\u9020\u6210\u4F24\u5BB3\u7684\u8303\u56F4</span>

<span class="token key atrule">\u91CD\u51FB\u4F24\u5BB3</span><span class="token punctuation">:</span>
  <span class="token key atrule">Skills</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> damage<span class="token punctuation">{</span>amount=3<span class="token punctuation">}</span> @EntitiesNearOrigin<span class="token punctuation">{</span>r=2<span class="token punctuation">}</span> <span class="token comment">#\u4F24\u5BB3\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><hr><blockquote><p>Tint \u5C06\u6A21\u578B\u7684\u6307\u5B9A\u9AA8\u9ABC\u7EC4\u8D34\u56FE\u8FDB\u884C\u7740\u8272</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">model, mid, m</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">partid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u9AA8\u9ABC\u7EC4\u540D</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">c</td><td style="text-align:center;">\u5341\u516D\u8FDB\u5236RGB/RGBA\u989C\u8272\uFF0C\u652F\u6301\u8C03\u6574\u900F\u660E\u5EA6 \u4F8B\u5982\uFF1AFFFFFF/#FFFFFF</td><td style="text-align:center;">FFFFFF</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u653B\u51FB\u540E\u4EE4\u81EA\u8EAB\u5E94\u7528\u6A21\u578B&quot;test&quot;\u7684\u540D\u4E3A&quot;h_head&quot;\u7684\u9AA8\u9ABC\u7EC4&quot; \u67D3\u4E3A\u9ED1\u8272</span>
<span class="token punctuation">-</span> tint<span class="token punctuation">{</span>m=test;pid=h_head;c=000000<span class="token punctuation">}</span> @self ~onAttack
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>SwapModel \u66F4\u6362\u5B9E\u4F53\u6A21\u578B</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">model, mid, m</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">newmodelid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u65B0\u6A21\u578B</td><td style="text-align:center;"></td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53D7\u51FB\u4E14\u81EA\u8EAB\u751F\u547D\u4F4E\u4E8E\u6700\u5927\u751F\u547D\u7684\u4E00\u534A\u5C06\u66FF\u6362&quot;test&quot;\u6A21\u578B\u4E3A&quot;test-1&quot;\u6A21\u578B</span>
<span class="token punctuation">-</span> swapmodel<span class="token punctuation">{</span>m=test;n=test<span class="token punctuation">-</span><span class="token number">1</span><span class="token punctuation">}</span> 2self ~ondamaged =50%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>ChangePart \u6280\u80FD\u76EE\u6807\u6240\u5E94\u7528\u7684\u6307\u5B9A\u6A21\u578B\u7684\u6307\u5B9A\u9AA8\u9ABC\u7EC4\u66FF\u6362\u4E3A\u53E6\u4E00\u4E2A\u6307\u5B9A\u6A21\u578B\u7684\u6307\u5B9A\u9AA8\u9ABC\u7EC4</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">model, mid, m</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">partid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u88AB\u66FF\u6362\u7684\u6A21\u578B\u7684\u9AA8\u9ABC\u7EC4</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">newmodelid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u7528\u4E8E\u66FF\u6362\u7684\u9AA8\u9ABC\u7EC4\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">newpartid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u7528\u4E8E\u66FF\u6362\u7684\u9AA8\u9ABC\u7EC4</td><td style="text-align:center;"></td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u751F\u6210\u540E\u5C06\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B&quot;testA&quot;\u7684\u540D\u4E3A&quot;h_head&quot;\u7684\u9AA8\u9ABC\u7EC4\u66FF\u6362\u4E3A&quot;testB&quot;\u7684&quot;h_head&quot;</span>
<span class="token punctuation">-</span> changepart<span class="token punctuation">{</span>m=testA;pid=h_head;nm=testB;npid=h_head<span class="token punctuation">}</span> @self ~onSpawn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>SubModel \u5411\u76EE\u6807\u6A21\u578B\u6DFB\u52A0\u6216\u5220\u9664\u4E0D\u540C\u6A21\u578B\u7684\u4E00\u90E8\u5206</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">model, mid, m</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">partid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u88AB\u5F71\u54CD\u7684\u6A21\u578B\u7684\u9AA8\u9ABC\u7EC4</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">submodelid</td><td style="text-align:center;">delid sm, smid, submodel</td><td style="text-align:center;">\u8981\u6DFB\u52A0\u7684\u9AA8\u9ABC\u7EC4\u6240\u4F4D\u4E8E\u7684\u6A21\u578B\u4E2D\u7684\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">subpartid</td><td style="text-align:center;">sp, spid, subpart</td><td style="text-align:center;">\u8981\u6DFB\u52A0\u7684\u9AA8\u9ABC\u7EC4\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">remove</td><td style="text-align:center;">r</td><td style="text-align:center;">\u662F\u5426\u4E3A\u5220\u9664\u5B50\u6A21\u578B\u9AA8\u9ABC</td><td style="text-align:center;">false</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53D7\u4F24\u540E\u5C06\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B &quot;test&quot;\u6A21\u578B\u4E2D\u7684&quot;h_head&quot;\u9AA8\u9ABC\u7EC4\u79FB\u9664</span>
<span class="token punctuation">-</span> submodel<span class="token punctuation">{</span>model=test;subpart=h_head;remove=true<span class="token punctuation">}</span> @self ~onDamaged
<span class="token comment"># \u653B\u51FB\u540E\u4E3A\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B:&quot;test&quot;\u6A21\u578B\u4E2D\u7684&quot;test_righthand&quot;\u9AA8\u9ABC\u7EC4\u6DFB\u52A0\u6A21\u578B&quot;sword&quot;\u4E2D\u7684\u7EC4&quot;diamond_sword&quot;</span>
<span class="token punctuation">-</span> submodel<span class="token punctuation">{</span>model=test;part=test_righthand;submodel=sword;subpart=diamond_sworld<span class="token punctuation">}</span> @self ~onAttack
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><blockquote><p>Petrify \u521B\u5EFA\u6A21\u578B\u7684\u96D5\u50CF\uFF0C\u6B64\u6A21\u578B\u5C06\u4E0D\u518D\u80FD\u591F\u66F4\u6539\u6216\u79FB\u52A8</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">model, mid, m</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u6B7B\u4EA1\u540E\u5728\u81EA\u8EAB\u4F4D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u65E0\u6CD5\u4EA4\u4E92\u3001\u79FB\u9664\u7684\u6A21\u578B&quot;test&quot;</span>
<span class="token punctuation">-</span> petrify<span class="token punctuation">{</span>m=\u96D5\u50CF<span class="token punctuation">}</span> @self ~onDeath
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>DefaultState \u5C06\u6280\u80FD\u76EE\u6807\u6240\u5E94\u7528\u7684\u6307\u5B9A\u6A21\u578B\u7684\u6307\u5B9A\u9ED8\u8BA4\u72B6\u6001\u66FF\u6362\u4E3A\u6A21\u578B\u5185\u7684\u6307\u5B9A\u72B6\u6001\uFF08\u5305\u542B\u52A8\u4F5C\uFF09</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">model, mid, m</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">t</td><td style="text-align:center;">\u52A8\u4F5C\u7C7B\u578B\u3002\u7C7B\u578B\uFF1AIDLE, WALK, JUMP, DEATH</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">state</td><td style="text-align:center;">s</td><td style="text-align:center;">\u5207\u6362\u540E\u7684\u72B6\u6001[\u52A8\u753B]</td><td style="text-align:center;"></td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53D7\u51FB\u540E\u5C06\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B&quot;test&quot;\u7684\u72B6\u6001&quot;walk&quot;\u66F4\u6539\u4E3A\u72B6\u6001&quot;run&quot;</span>
<span class="token punctuation">-</span> defaultstate<span class="token punctuation">{</span>m=test;t=walk;s=run<span class="token punctuation">}</span> @self ~onDamaged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>SetModelTag \u8BBE\u7F6E\u6A21\u578B\u7684\u540D\u79F0\u6807\u7B7E</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">tag</td><td style="text-align:center;">t</td><td style="text-align:center;">\u540D\u79F0\u6216\u5360\u4F4D\u7B26</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">visible</td><td style="text-align:center;">v</td><td style="text-align:center;">\u540D\u79F0\u6807\u7B7E\u7684\u662F\u5426\u53EF\u89C1</td><td style="text-align:center;">true</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53D7\u51FB\u65F6\u663E\u793A\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B\u7684\u8840\u91CF\uFF0C\u57FA\u4E8E\u78B0\u649E\u7BB1\u9AD8\u5EA6</span>
<span class="token punctuation">-</span> setmodeltagvisible<span class="token punctuation">{</span>tag=&lt;caster.hp<span class="token punctuation">&gt;</span>;v=true<span class="token punctuation">}</span> @self ~onDamaged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>SetModelTagVisible \u8BBE\u7F6E\u6A21\u578B\u540D\u79F0\u6807\u7B7E\u7684\u53EF\u89C1\u6027</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">tag</td><td style="text-align:center;">t</td><td style="text-align:center;">\u540D\u79F0\u6216\u5360\u4F4D\u7B26</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">visible</td><td style="text-align:center;">v</td><td style="text-align:center;">\u540D\u79F0\u6807\u7B7E\u7684\u662F\u5426\u53EF\u89C1</td><td style="text-align:center;">true</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53D7\u51FB\u4E14\u81EA\u8EAB\u751F\u547D\u4F4E\u4E8E\u6700\u5927\u751F\u547D10%\u65F6\u9690\u85CF\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B\u7684\u6807\u7B7E\uFF0C\u57FA\u4E8E\u78B0\u649E\u7BB1\u9AD8\u5EA6</span>
<span class="token punctuation">-</span> setmodeltagvisible<span class="token punctuation">{</span>v=false<span class="token punctuation">}</span> @self ~onDamaged =10%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>Disguise \u7ED9\u76EE\u6807\u73A9\u5BB6\u7ED1\u5B9A\u6A21\u578B</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">m, mid, model</td><td style="text-align:center;">\u5E94\u7528\u6307\u5B9A\u7684\u6A21\u578B[\u540D\u79F0]</td><td style="text-align:center;"></td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53F3\u952E\u540E\u4E3A\u53F3\u952E\u8005\u5E94\u7528\u6A21\u578B&quot;test&quot;</span>
<span class="token punctuation">-</span> disguise<span class="token punctuation">{</span>m=test<span class="token punctuation">}</span> @trigger ~onInteract
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>Undisguise \u79FB\u9664\u76EE\u6807\u73A9\u5BB6\u7ED1\u5B9A\u7684\u6A21\u578B</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">Undisguise</td><td style="text-align:center;">Undisguise</td><td style="text-align:center;">\u79FB\u9664\u6A21\u578B</td><td style="text-align:center;"></td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53D7\u51FB\u540E\u79FB\u9664\u653B\u51FB\u8005\u7684\u6A21\u578B</span>
<span class="token punctuation">-</span> undisguise @trigger ~ondamaged
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>LockHead \u79FB\u9664\u76EE\u6807\u73A9\u5BB6\u7ED1\u5B9A\u7684\u6A21\u578B</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">lockpitch</td><td style="text-align:center;">lp, lpitch</td><td style="text-align:center;">\u9501\u5B9A\u5934\u90E8\u4FEF\u4EF0\u89D2</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">lockyaw</td><td style="text-align:center;">ly, lyaw</td><td style="text-align:center;">\u9501\u5B9A\u5934\u90E8\u504F\u822A\u89D2</td><td style="text-align:center;">false</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u88AB\u53F3\u952E\u540E\u9501\u5B9A\u81EA\u8EAB\u6240\u5E94\u7528\u6A21\u578B\u7684\u4FEF\u4EF0\u89C6\u89D2\u5EA6</span>
<span class="token punctuation">-</span> lockhead<span class="token punctuation">{</span>lp=true<span class="token punctuation">}</span> @self ~onInteract
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><blockquote><p>PartVisibility \u8BBE\u7F6E\u6A21\u578B\u4E00\u90E8\u5206\u7684\u53EF\u89C1\u6027\u3002 \u8FD9\u4E0D\u4F1A\u5220\u9664\u6216\u6DFB\u52A0\u4EFB\u4F55\u90E8\u5206</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">m, mid, model</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">partid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u6240\u5F71\u54CD\u6A21\u578B\u7684\u9AA8\u9ABC\u7EC4\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">visibility</td><td style="text-align:center;">v, visible</td><td style="text-align:center;">\u9AA8\u9ABC\u7EC4\u662F\u5426\u53EF\u89C1</td><td style="text-align:center;">true</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53D7\u51FB\u4E14\u81EA\u8EAB\u5F53\u524D\u751F\u547D\u4F4E\u4E8E\u6700\u5927\u751F\u547D20%\u65F6\u9690\u85CF\u6240\u5E94\u7528\u6A21\u578B&quot;test&quot;\u7684\u7EC4&quot;h_head&quot;</span>
<span class="token punctuation">-</span> partvisibility<span class="token punctuation">{</span>m=test;p=h_head;v=false<span class="token punctuation">}</span> @self ~onDamaged =20%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h1 id="\u76EE\u6807\u9009\u62E9\u5668-targeters" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6807\u9009\u62E9\u5668-targeters" aria-hidden="true">#</a> \u76EE\u6807\u9009\u62E9\u5668[Targeters]</h1><blockquote><p>OrangeEngine\u4E3AMythicMobs\u63D0\u4F9B\u4E86\u76EE\u6807\u9009\u62E9\u5668\u5E76\u4E0EModelEngine\u9AD8\u5EA6\u5339\u914D\uFF0C\u517C\u5BB9\u5927\u90E8\u5206ModelEngine\u7684\u6280\u80FD\u914D\u7F6E\u3002</p></blockquote><table><thead><tr><th style="text-align:center;">\u76EE\u6807\u9009\u62E9\u5668</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">ModelPart</td><td style="text-align:center;">\u83B7\u53D6\u9AA8\u9ABC\u4F4D\u7F6E</td></tr></tbody></table><hr><h3 id="\u76EE\u6807\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6807\u9009\u62E9\u5668" aria-hidden="true">#</a> \u76EE\u6807\u9009\u62E9\u5668</h3><hr><blockquote><p>ModelPart \u83B7\u53D6\u9AA8\u9ABC\u4F4D\u7F6E</p></blockquote><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u522B\u540D/\u7B80\u5199</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u9ED8\u8BA4</th></tr></thead><tbody><tr><td style="text-align:center;">modelid</td><td style="text-align:center;">m, mid, model</td><td style="text-align:center;">\u6240\u5F71\u54CD\u7684\u6A21\u578B\u540D\u79F0</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">partid</td><td style="text-align:center;">p, pid, part</td><td style="text-align:center;">\u6240\u5F71\u54CD\u6A21\u578B\u7684\u76EE\u6807\u9AA8\u9ABC\u7EC4</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x</td><td style="text-align:center;"></td><td style="text-align:center;">x\u8F74\u504F\u79FB</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">y</td><td style="text-align:center;"></td><td style="text-align:center;">y\u8F74\u504F\u79FB</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">z</td><td style="text-align:center;"></td><td style="text-align:center;">z\u8F74\u504F\u79FB</td><td style="text-align:center;">0</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5927\u90E8\u5206\u60C5\u51B5\uFF0CZ \u8F74\u4E3A\u524D/\u540E\uFF0CX \u8F74\u4E3A\u53F3/\u5DE6\uFF0CY \u8F74\u4E3A\u4E0A/\u4E0B</p></div>`,73);function s(l,r){return a}var c=t(n,[["render",s],["__file","skill.html.vue"]]);export{c as default};
