import{_ as p,r as l,o as t,c,a as s,b as u,w as r,F as o,d as a,e as n}from"./app.3f723b63.js";var i="/assets/hand.2506f491.png";const k={},b=a('<h1 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u73A9\u5BB6\u6A21\u578B\u540D\u8BF7\u4EE5player\u4F5C\u4E3A\u5F00\u5934\u4EE5\u4FBF\u533A\u5206</p></div><p>\u5728\u4F7F\u7528\u6307\u4EE4<code>/oe player create [ModelName]</code>\u751F\u6210\u914D\u7F6E\u6587\u4EF6\u524D\uFF0C\u9700\u8981\u5DF2\u7ECF\u4F7F\u7528<code>/oe resource bb</code>\u751F\u6210\u6A21\u578B\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u4E14\u63D2\u4EF6\u5DF2\u7ECF\u52A0\u8F7D\u8BE5\u6A21\u578B\u914D\u7F6E\u3002\u63D2\u4EF6\u5728\u751F\u6210\u793A\u4F8B\u914D\u7F6E\u6587\u4EF6\u540E\u9700\u8981\u6839\u636E\u5B9E\u9645\u6A21\u578B\u8FDB\u884C\u8C03\u6574\u3002</p><p>\u6587\u6863\u5C06\u4EE5\u7FA4\u6587\u4EF6\u5185<code>player.bbmodel</code>\u6A21\u578B\u4F5C\u4E3A\u8BB2\u89E3\u793A\u4F8B\u3002</p><h3 id="\u624B\u90E8\u7269\u54C1\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u624B\u90E8\u7269\u54C1\u7ED1\u5B9A" aria-hidden="true">#</a> \u624B\u90E8\u7269\u54C1\u7ED1\u5B9A</h3><p>\u6253\u5F00<code>player.bbmodel</code>\u6A21\u578B\u6587\u4EF6\u540E\u53EF\u4EE5\u627E\u5230\u53F2\u8482\u592B\u53CC\u624B\u7684\u5206\u7EC4\uFF0C\u5C06\u7EC4\u540D\u5206\u522B\u586B\u5165\u914D\u7F6E\u6587\u4EF6\u7684<code>PlayerModel.Left.Name</code>\u4E0E<code>PlayerModel.Right.Name</code>\u4E2D\u3002</p><p>\u8FDB\u5165\u6E38\u620F\u540E\u5982\u679C\u53D1\u73B0\u7269\u54C1\u6E32\u67D3\u4F4D\u7F6E\u4E0E\u60F3\u8981\u4F4D\u7F6E\u6709\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574<code>Translate</code>\u914D\u7F6E\u5BF9\u7269\u54C1\u8FDB\u884C\u5E73\u79FB\u8C03\u6574\u3002</p><p><img src="'+i+`" alt="\u6A21\u578B\u624B\u90E8" title="\u6A21\u578B\u624B\u90E8"></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">PlayerModel</span><span class="token punctuation">:</span>
  <span class="token key atrule">Name</span><span class="token punctuation">:</span> player
  <span class="token key atrule">Hand</span><span class="token punctuation">:</span>
    <span class="token key atrule">Left</span><span class="token punctuation">:</span>
      <span class="token key atrule">Name</span><span class="token punctuation">:</span> lefthand
      <span class="token key atrule">Translate</span><span class="token punctuation">:</span>
        <span class="token key atrule">X</span><span class="token punctuation">:</span> <span class="token number">-0.25</span>
        <span class="token key atrule">Y</span><span class="token punctuation">:</span> <span class="token number">0.15</span>
        <span class="token key atrule">Z</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">Right</span><span class="token punctuation">:</span>
      <span class="token key atrule">Name</span><span class="token punctuation">:</span> righthand
      <span class="token key atrule">Translate</span><span class="token punctuation">:</span>
        <span class="token key atrule">X</span><span class="token punctuation">:</span> <span class="token number">-0.15</span>
        <span class="token key atrule">Y</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">Z</span><span class="token punctuation">:</span> <span class="token number">-0.25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u76D4\u7532\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u76D4\u7532\u7ED1\u5B9A" aria-hidden="true">#</a> \u76D4\u7532\u7ED1\u5B9A</h3><p>\u5982\u679C\u6A21\u578B\u4E0D\u9700\u8981\u6E32\u67D3\u539F\u7248\u76D4\u7532\uFF0C\u5C06\u4EE5\u4E0B\u8BBE\u7F6E\u7559\u7A7A\u5373\u53EF\u3002\u9700\u8981\u6839\u636E\u6240\u7528\u6A21\u578B\u81EA\u884C\u8C03\u6574\u3002</p><p>\u5982\u679C\u9700\u8981\u6E32\u67D3\u8F83\u4E3A\u5B8C\u6574\u7684\u539F\u7248\u76D4\u7532\uFF0C\u6700\u597D\u5C06\u6A21\u578B\u5934\u90E8\u5927\u5C0F\u8BBE\u7F6E\u4E3A8<em>8</em>8\uFF0C\u8EAF\u5E72\u8BBE\u7F6E\u4E3A4<em>12</em>4\uFF0C\u80F3\u818A\u4E0E\u817F\u90E8\u4E3A4<em>12</em>4\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">PlayerModel</span><span class="token punctuation">:</span>
  <span class="token key atrule">ArmorModel</span><span class="token punctuation">:</span>
    <span class="token key atrule">Head</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> head_lay2
    <span class="token key atrule">LeftArm</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> left_arm_lay2
    <span class="token key atrule">RightArm</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> right_arm_lay2
    <span class="token key atrule">Body</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> body_lay2
    <span class="token key atrule">LeftLeg</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> left_leg_lay2
    <span class="token key atrule">RightLeg</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> right_leg_lay2
    <span class="token key atrule">LeftFeet</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> left_leg_down_lay2
    <span class="token key atrule">RightFeet</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> right_leg_down_lay2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u73A9\u5BB6\u6A21\u578B\u9ED8\u8BA4\u52A8\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u73A9\u5BB6\u6A21\u578B\u9ED8\u8BA4\u52A8\u4F5C" aria-hidden="true">#</a> \u73A9\u5BB6\u6A21\u578B\u9ED8\u8BA4\u52A8\u4F5C</h3>`,14),m=n("\u8BF7\u5C06\u52A8\u4F5C"),d=s("code",null,"\u57FA\u7840\u540D",-1),y=n("\u586B\u5165\u914D\u7F6E\u6587\u4EF6\u3002\u547D\u540D\u89C4\u5219\u8BF7\u4ED4\u7EC6\u9605\u8BFB"),h=n("\u6A21\u578B\u89C4\u5219"),g=a(`<p>\u5728<code>Movement</code>\u4E2D\u6DFB\u52A0\u7684\u81EA\u5B9A\u4E49\u52A8\u4F5C\u5C06\u6839\u636E\u73A9\u5BB6\u7684\u5B9E\u9645\u79FB\u52A8\u901F\u5EA6\u6765\u8BA1\u7B97\u52A8\u4F5C\u7684\u64AD\u653E\u901F\u5EA6\uFF0C\u5185\u7F6E\u7684\u9ED8\u8BA4\u52A8\u4F5C\u65E0\u9700\u518D\u6B21\u8BBE\u7F6E\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">PlayerModel</span><span class="token punctuation">:</span>
  <span class="token key atrule">Animation</span><span class="token punctuation">:</span>
    <span class="token key atrule">Movement</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> run_attack
    <span class="token key atrule">Internal</span><span class="token punctuation">:</span>
      <span class="token key atrule">Idle</span><span class="token punctuation">:</span> idle
      <span class="token key atrule">Walk</span><span class="token punctuation">:</span> walk
      <span class="token key atrule">Run</span><span class="token punctuation">:</span> run
      <span class="token key atrule">Swim</span><span class="token punctuation">:</span> swim
      <span class="token key atrule">Fly</span><span class="token punctuation">:</span> fly
      <span class="token key atrule">Sneak</span><span class="token punctuation">:</span> sneak
      <span class="token key atrule">Kneel</span><span class="token punctuation">:</span> kneel
      <span class="token key atrule">Fall</span><span class="token punctuation">:</span> fall
      <span class="token key atrule">Mount</span><span class="token punctuation">:</span> mount
      <span class="token key atrule">Death</span><span class="token punctuation">:</span> death
      <span class="token key atrule">Jump</span><span class="token punctuation">:</span> jump
      <span class="token key atrule">Inaction</span><span class="token punctuation">:</span> inaction
      <span class="token key atrule">Climb</span><span class="token punctuation">:</span> climb
      <span class="token key atrule">Sleep</span><span class="token punctuation">:</span> sleep
      <span class="token key atrule">None</span><span class="token punctuation">:</span> idle
      <span class="token key atrule">Aim</span><span class="token punctuation">:</span> pulling
      <span class="token key atrule">Block</span><span class="token punctuation">:</span> block
      <span class="token key atrule">Eat</span><span class="token punctuation">:</span> eat
      <span class="token key atrule">Float</span><span class="token punctuation">:</span> float
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="\u78B0\u649E\u7BB1\u5927\u5C0F\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u78B0\u649E\u7BB1\u5927\u5C0F\u4FEE\u6539" aria-hidden="true">#</a> \u78B0\u649E\u7BB1\u5927\u5C0F\u4FEE\u6539</h3><p>\u5728\u64AD\u653E\u52A8\u753B\u65F6\uFF0C\u6709\u4E9B\u52A8\u4F5C\u9700\u8981\u52A8\u6001\u4FEE\u6539\u78B0\u649E\u7BB1\u5927\u5C0F\uFF0C\u53EF\u5728HitBox\u4E0B\u6DFB\u52A0\u914D\u7F6E\u3002\u5728\u64AD\u653E\u8BE5\u52A8\u4F5C\u65F6\u5B9E\u4F53\u78B0\u649E\u7BB1\u5C06\u81EA\u52A8\u4FEE\u6539\u4E3A\u914D\u7F6E\u503C\uFF0C\u64AD\u653E\u5B8C\u6BD5\u540E\u5C06\u81EA\u52A8\u6062\u590D\u9ED8\u8BA4\u503C\u3002</p><p>\u683C\u5F0F\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">PlayerModel</span><span class="token punctuation">:</span>
  <span class="token key atrule">HitBox</span><span class="token punctuation">:</span>
    <span class="token key atrule">\u52A8\u4F5C\u540D</span><span class="token punctuation">:</span>
      <span class="token key atrule">Width</span><span class="token punctuation">:</span> \u5BBD\u5EA6
      <span class="token key atrule">Height</span><span class="token punctuation">:</span> \u9AD8\u5EA6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5728\u4FEE\u6539\u5185\u7F6E\u52A8\u4F5C\u65F6\u8BF7\u4F7F\u7528\u914D\u7F6E\u9879\u7684\u5927\u5199\u540D\uFF0C\u81EA\u5B9A\u4E49\u52A8\u4F5C\u6B63\u5E38\u586B\u5199\u5176\u52A8\u4F5C\u540D\u5373\u53EF\u65E0\u9700\u8C03\u6574\u4E3A\u5927\u5199</p><p>\u4F8B\u5982\u5185\u7F6E\u7684\u8DD1\u6B65\u52A8\u4F5C\u914D\u7F6E\u4E3A <code>Run: running</code> \uFF0C\u5982\u679C\u9700\u8981\u5C06\u5176\u914D\u7F6E\u4E3A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">PlayerModel</span><span class="token punctuation">:</span>
  <span class="token key atrule">HitBox</span><span class="token punctuation">:</span>
    <span class="token key atrule">RUN</span><span class="token punctuation">:</span>
      <span class="token key atrule">Width</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token key atrule">Height</span><span class="token punctuation">:</span> <span class="token number">2.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5B8C\u6574\u793A\u4F8B\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u793A\u4F8B\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5B8C\u6574\u793A\u4F8B\u914D\u7F6E\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">PlayerModel</span><span class="token punctuation">:</span>
  <span class="token key atrule">Name</span><span class="token punctuation">:</span> player
  <span class="token key atrule">Hand</span><span class="token punctuation">:</span>
    <span class="token key atrule">Left</span><span class="token punctuation">:</span>
      <span class="token key atrule">Name</span><span class="token punctuation">:</span> lefthand
      <span class="token key atrule">Translate</span><span class="token punctuation">:</span>
        <span class="token key atrule">X</span><span class="token punctuation">:</span> <span class="token number">-0.25</span>
        <span class="token key atrule">Y</span><span class="token punctuation">:</span> <span class="token number">0.15</span>
        <span class="token key atrule">Z</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">Right</span><span class="token punctuation">:</span>
      <span class="token key atrule">Name</span><span class="token punctuation">:</span> righthand
      <span class="token key atrule">Translate</span><span class="token punctuation">:</span>
        <span class="token key atrule">X</span><span class="token punctuation">:</span> <span class="token number">-0.15</span>
        <span class="token key atrule">Y</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">Z</span><span class="token punctuation">:</span> <span class="token number">-0.25</span>
  <span class="token key atrule">HitBox</span><span class="token punctuation">:</span>
    <span class="token key atrule">SWIM</span><span class="token punctuation">:</span>
      <span class="token key atrule">Width</span><span class="token punctuation">:</span> <span class="token number">0.6</span>
      <span class="token key atrule">Height</span><span class="token punctuation">:</span> <span class="token number">0.6</span>
  <span class="token key atrule">ArmorModel</span><span class="token punctuation">:</span>
    <span class="token key atrule">Head</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> head_lay2
    <span class="token key atrule">LeftArm</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> left_arm_lay2
    <span class="token key atrule">RightArm</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> right_arm_lay2
    <span class="token key atrule">Body</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> body_lay2
    <span class="token key atrule">LeftLeg</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> left_leg_lay2
    <span class="token key atrule">RightLeg</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> right_leg_lay2
    <span class="token key atrule">LeftFeet</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> left_leg_down_lay2
    <span class="token key atrule">RightFeet</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> right_leg_down_lay2
  <span class="token key atrule">Animation</span><span class="token punctuation">:</span>
    <span class="token key atrule">Movement</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> run_attack
    <span class="token key atrule">Internal</span><span class="token punctuation">:</span>
      <span class="token key atrule">Idle</span><span class="token punctuation">:</span> idle
      <span class="token key atrule">Walk</span><span class="token punctuation">:</span> walk
      <span class="token key atrule">Run</span><span class="token punctuation">:</span> run
      <span class="token key atrule">Swim</span><span class="token punctuation">:</span> swim
      <span class="token key atrule">Fly</span><span class="token punctuation">:</span> fly
      <span class="token key atrule">Sneak</span><span class="token punctuation">:</span> sneak
      <span class="token key atrule">Kneel</span><span class="token punctuation">:</span> kneel
      <span class="token key atrule">Fall</span><span class="token punctuation">:</span> fall
      <span class="token key atrule">Mount</span><span class="token punctuation">:</span> mount
      <span class="token key atrule">Death</span><span class="token punctuation">:</span> death
      <span class="token key atrule">Jump</span><span class="token punctuation">:</span> jump
      <span class="token key atrule">Inaction</span><span class="token punctuation">:</span> inaction
      <span class="token key atrule">Climb</span><span class="token punctuation">:</span> climb
      <span class="token key atrule">Sleep</span><span class="token punctuation">:</span> sleep
      <span class="token key atrule">None</span><span class="token punctuation">:</span> idle
      <span class="token key atrule">Aim</span><span class="token punctuation">:</span> pulling
      <span class="token key atrule">Block</span><span class="token punctuation">:</span> block
      <span class="token key atrule">Eat</span><span class="token punctuation">:</span> eat
      <span class="token key atrule">Float</span><span class="token punctuation">:</span> float
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,11);function _(f,v){const e=l("RouterLink");return t(),c(o,null,[b,s("p",null,[m,d,y,u(e,{to:"/guide/plugin/player/model.html"},{default:r(()=>[h]),_:1})]),g],64)}var M=p(k,[["render",_],["__file","config.html.vue"]]);export{M as default};
