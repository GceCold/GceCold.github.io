import{_ as t,d}from"./app.f422bf7e.js";const e={},r=d('<h1 id="\u5DF2\u517C\u5BB9\u7684modelengine\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u517C\u5BB9\u7684modelengine\u6807\u7B7E" aria-hidden="true">#</a> \u5DF2\u517C\u5BB9\u7684ModelEngine\u6807\u7B7E</h1><div class="custom-container tip"><p class="custom-container-title">\u987B\u77E5</p><p>\u60A8\u9700\u8981\u5728\u7FA4\u6587\u4EF6\u4E2D\u4E0B\u8F7D<strong>OrangeMechanic</strong>\u9644\u5C5E\u63D2\u4EF6\u6765\u517C\u5BB9MythicMobs\u4EE5\u53CAModelEngine\u6807\u7B7E.</p><p>\u5DF2\u540C\u65F6\u517C\u5BB9MythicMobs v4\u4E0EMythicMobs v5.</p></div><p>\u2714\uFE0F \u5DF2\u517C\u5BB9</p><p>\u274C \u672A\u517C\u5BB9</p><hr><h3 id="mechanics" tabindex="-1"><a class="header-anchor" href="#mechanics" aria-hidden="true">#</a> Mechanics</h3><p>\u2714\uFE0F Model</p><p>\u4E3A\u751F\u7269\u7ED1\u5B9A\u6A21\u578B\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>hitbox</td><td>h</td><td>\u662F\u5426\u66FF\u6362\u751F\u7269\u78B0\u649E\u7BB1\u4E3A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u8BBE\u7F6E</td><td>true</td></tr><tr><td>nametag</td><td>n, name</td><td>\u662F\u5426\u663E\u793A\u751F\u7269\u540D\u5B57\u6807\u7B7E</td><td>true</td></tr><tr><td>lockpitch</td><td>lp, lpitch</td><td>\u9501\u5B9A\u5934\u90E8\u4FEF\u4EF0\u89D2</td><td>false</td></tr><tr><td>lockyaw</td><td>ly, lyaw</td><td>\u9501\u5B9A\u5934\u90E8\u504F\u822A\u89D2</td><td>false</td></tr><tr><td>remove</td><td>r</td><td>\u662F\u5426\u79FB\u9664\u6A21\u578B</td><td>false</td></tr><tr><td>invisible</td><td>i, invis</td><td>\u8BBE\u7F6E\u5B9E\u4F53\u662F\u5426\u4E0D\u53EF\u89C1</td><td>false</td></tr></tbody></table><hr><p>\u2714\uFE0F State</p><p>\u6A21\u578B\u64AD\u653E\u52A8\u753B\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>state</td><td>h</td><td>\u52A8\u753B\u540D</td><td></td></tr></tbody></table><hr><p>\u274C MountModel</p><p>\u5C06\u4E58\u5BA2\u5B9E\u4F53\u5B89\u88C5\u5230\u6307\u5B9A\u7684\u9AA8\u9ABC\u4E0A\u3002</p><p>\u274C DismountModel</p><p>\u4ECE\u6A21\u578B\u4E0A\u5378\u4E0B\u76EE\u6807\u3002</p><p>\u274C DismountAll</p><p>\u5378\u4E0B\u6A21\u578B\u4E0A\u7684\u6240\u6709\u4E58\u5BA2\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u56E0OrangeEngine\u672C\u8EAB\u662F\u4FEE\u6539\u4E86\u4E00\u4E2A\u666E\u901A\u5B9E\u4F53\u6E32\u67D3\u57FA\u5CA9\u6A21\u578B\uFF0C\u6545\u65E0\u9700\u7279\u522B\u8BBE\u7F6E\u9A91\u4E58\uFF0C\u4F7F\u7528\u539F\u7248\u64CD\u4F5C\u5373\u53EF\u6545\u4E0D\u5BF9<code>MountModel</code> <code>DismountModel</code> <code>DismountAll</code>\u8FDB\u884C\u517C\u5BB9\u3002</p></div><hr><p>\u2714\uFE0F Tint</p><p>\u5C06\u6A21\u578B\u7684\u67D0\u4E9B\u9AA8\u9ABC\u8D34\u56FE\u7740\u8272\u4FEE\u6539\u4E3A\u8BBE\u7F6E\u5185\u5BB9\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>partid</td><td>p, pid, part</td><td>\u9AA8\u9ABC\u540D</td><td></td></tr><tr><td>color</td><td>c</td><td>\u5341\u516D\u8FDB\u5236RGB/RGBA\u989C\u8272\uFF0C\u652F\u6301\u8C03\u6574\u900F\u660E\u5EA6 \u4F8B\u5982\uFF1A<code>FFFFFF</code>/<code>#FFFFFF</code></td><td>FFFFFF</td></tr></tbody></table><hr><p>\u274C Enchant \u5BF9\u6A21\u578B\u7684\u67D0\u4E9B\u90E8\u5206\u8FDB\u884C\u9644\u9B54\u6216\u53D6\u6D88\u3002</p><hr><p>\u2714\uFE0F SwapModel</p><p>\u66F4\u6362\u5B9E\u4F53\u6A21\u578B\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>newmodelid</td><td>p, pid, part</td><td>\u65B0\u6A21\u578B</td><td></td></tr></tbody></table><hr><p>\u2714\uFE0F ChangePart</p><p>\u8BBE\u7F6E\u9AA8\u9ABC\u4EE5\u663E\u793A\u6765\u81EA<code>\u540C\u4E00</code>\u6A21\u578B\u7684\u9AA8\u9ABC\u3002 \u8FD9\u4E0D\u4F1A\u6539\u53D8\u9AA8\u9ABC\u7684\u4F4D\u7F6E\uFF0C\u53EA\u4F1A\u5728\u89C6\u89C9\u4E0A\u6539\u53D8\u6A21\u578B\u3002</p><p><strong>\u6E32\u67D3\u6765\u81EA\u4E0D\u540C\u6A21\u578B\u7684\u9AA8\u9ABC\u76EE\u524D\u5B58\u5728BUG\uFF0C\u4F1A\u65E0\u6CD5\u8C03\u6574\u8BE5\u9AA8\u9ABC\u7684\u89D2\u5EA6\u3002</strong></p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>partid</td><td>p, pid, part</td><td>\u88AB\u66FF\u6362\u76EE\u6807\u9AA8\u9ABC</td><td></td></tr><tr><td>newmodelid</td><td>p, pid, part</td><td>\u65B0\u6A21\u578B</td><td></td></tr><tr><td>newpartid</td><td>np, npid, newpart</td><td>\u6B32\u66FF\u6362\u7684\u76EE\u6807\u9AA8\u9ABC</td><td></td></tr></tbody></table><hr><p>\u2714\uFE0F SubModel</p><p>\u5411\u76EE\u6807\u6A21\u578B\u6DFB\u52A0\u6216\u5220\u9664\u4E0D\u540C\u6A21\u578B\u7684\u4E00\u90E8\u5206\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>partid</td><td>p, pid, part</td><td>\u88AB\u66FF\u6362\u76EE\u6807\u9AA8\u9ABC</td><td></td></tr><tr><td>submodelid</td><td>delid sm, smid, submodel</td><td>\u6B32\u6DFB\u52A0\u7684\u5B50\u6A21\u578B</td><td></td></tr><tr><td>subpartid</td><td>sp, spid, subpart</td><td>\u6B32\u6DFB\u52A0\u7684\u5B50\u6A21\u578B\u90E8\u5206</td><td></td></tr><tr><td>remove</td><td>r</td><td>\u662F\u5426\u4E3A\u5220\u9664\u5B50\u6A21\u578B\u9AA8\u9ABC</td><td></td></tr></tbody></table><hr><p>\u2714\uFE0F Petrify</p><p>\u521B\u5EFA\u6A21\u578B\u7684\u96D5\u50CF\uFF0C\u6B64\u6A21\u578B\u5C06\u4E0D\u518D\u80FD\u591F\u66F4\u6539\u6216\u79FB\u52A8\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr></tbody></table><hr><p>\u2714\uFE0F DefaultState</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>type</td><td>t</td><td>\u52A8\u4F5C\u7C7B\u578B\u3002\u7C7B\u578B\uFF1AIDLE, WALK, JUMP, DEATH</td><td></td></tr><tr><td>state</td><td>s</td><td>\u52A8\u753B\u540D</td><td></td></tr></tbody></table><hr><p>\u274C BodyClamp</p><p>\u5728\u65CB\u8F6C\u8EAB\u4F53\u4E4B\u524D\u8BBE\u7F6E\u6700\u5927\u7684\u5934\u90E8\u65CB\u8F6C\u3002</p><hr><p>\u2714\uFE0F SetModelTag</p><p>\u8BBE\u7F6E\u6A21\u578B\u540D\u79F0\u6807\u7B7E\u4E0A\u663E\u793A\u7684\u540D\u79F0\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>tag</td><td>t</td><td>\u540D\u79F0\u6216\u5360\u4F4D\u7B26\u5B57\u7B26\u4E32</td><td></td></tr><tr><td>visible</td><td>v</td><td>\u540D\u79F0\u6807\u7B7E\u7684\u662F\u5426\u53EF\u89C1</td><td>true</td></tr></tbody></table><hr><p>\u2714\uFE0F SetModelTagVisible</p><p>\u8BBE\u7F6E\u6A21\u578B\u540D\u79F0\u6807\u7B7E\u7684\u53EF\u89C1\u6027\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>tag</td><td>t</td><td>\u540D\u79F0\u6216\u5360\u4F4D\u7B26\u5B57\u7B26\u4E32</td><td></td></tr><tr><td>visible</td><td>v</td><td>\u540D\u79F0\u6807\u7B7E\u7684\u662F\u5426\u53EF\u89C1</td><td>true</td></tr></tbody></table><hr><p>\u2714\uFE0F Disguise</p><p>\u7ED9\u76EE\u6807\u73A9\u5BB6\u7ED1\u5B9A\u6A21\u578B</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr></tbody></table><hr><p>\u2714\uFE0F Undisguise</p><p>\u79FB\u9664\u76EE\u6807\u73A9\u5BB6\u7ED1\u5B9A\u7684\u6A21\u578B</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead></table><hr><p>\u2714\uFE0F LockHead</p><p>\u9501\u5B9A\u6A21\u578B\u7684\u4FEF\u4EF0\u548C\u504F\u822A\u65CB\u8F6C\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>lockpitch</td><td>lp, lpitch</td><td>\u9501\u5B9A\u5934\u90E8\u4FEF\u4EF0\u89D2</td><td>false</td></tr><tr><td>lockyaw</td><td>ly, lyaw</td><td>\u9501\u5B9A\u5934\u90E8\u504F\u822A\u89D2</td><td>false</td></tr></tbody></table><hr><p>\u274C ChangeParent</p><p>\u5F3A\u5236\u6A21\u578B\u7684\u4E00\u90E8\u5206\u6210\u4E3A\u53E6\u4E00\u90E8\u5206\u7684\u5B50\u9AA8\u9ABC\u3002 \u8FD9\u4E0D\u4F1A\u521B\u5EFA\u4EFB\u4F55\u65B0\u96F6\u4EF6\u3002</p><p>\u8BE5\u90E8\u5206\u4ECD\u5C06\u4F7F\u7528\u5176\u65E7\u7236\u7EA7\u7684\u504F\u79FB\u91CF\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u56E0ModelEngine\u539F\u529F\u80FD\u4FEE\u6539\u6A21\u578B\u7236\u7EA7\u540E\u65E0\u6CD5\u4FEE\u6539\u9AA8\u9ABC\u504F\u79FB\u91CF\uFF0C\u5B9E\u73B0\u6548\u679C\u4E0EModelEngine\u6682\u4E0D\u76F8\u540C\uFF0C\u6545\u6807\u8BB0\u4E3A\u6682\u4E0D\u517C\u5BB9</p></div><hr><p>\u2714\uFE0F PartVisibility</p><p>\u8BBE\u7F6E\u6A21\u578B\u4E00\u90E8\u5206\u7684\u53EF\u89C1\u6027\u3002 \u8FD9\u4E0D\u4F1A\u5220\u9664\u6216\u6DFB\u52A0\u4EFB\u4F55\u90E8\u5206\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>partid</td><td>p, pid, part</td><td>\u76EE\u6807\u9AA8\u9ABC</td><td></td></tr><tr><td>visibility</td><td>v, visible</td><td>\u9AA8\u9ABC\u662F\u5426\u53EF\u89C1</td><td>true</td></tr></tbody></table><hr><p>\u274C BindHitbox</p><p>\u751F\u6210\u4E00\u4E2Amm\u751F\u7269\u5E76\u5C06\u8BE5\u751F\u7269\u8BBE\u7F6E\u4E3A\u7279\u5B9A\u7684\u5B50\u78B0\u649E\u7BB1\u3002</p><p>\u274C HitboxConfig</p><p>\u914D\u7F6E \u5B50\u78B0\u649E\u7BB1 \u548C \u7236mm\u751F\u7269 \u4E4B\u95F4\u7684\u4EA4\u4E92\u3002</p><p>\u274C RemapModel</p><p>\u5C06\u65B0\u6A21\u578B\u9010\u90E8\u5206\u91CD\u65B0\u6620\u5C04\u5230\u5F53\u524D\u6A21\u578B\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4EE5\u4E0A\u6807\u7B7E\u5927\u6982\u6CA1\u6709\u4EC0\u4E48\u7528\u9014\u5427\uFF0C\u6682\u4E0D\u517C\u5BB9\u3002</p></div><hr><h3 id="targeters" tabindex="-1"><a class="header-anchor" href="#targeters" aria-hidden="true">#</a> Targeters</h3><p>\u2714\uFE0F ModelPart</p><p>\u83B7\u53D6\u9AA8\u9ABC\u4F4D\u7F6E</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u522B\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>modelid</td><td>m, mid, model</td><td>\u6A21\u578B\u540D</td><td></td></tr><tr><td>partid</td><td>p, pid, part</td><td>\u76EE\u6807\u9AA8\u9ABC</td><td></td></tr><tr><td>x</td><td></td><td>x\u8F74\u504F\u79FB</td><td>0</td></tr><tr><td>y</td><td></td><td>y\u8F74\u504F\u79FB</td><td>0</td></tr><tr><td>z</td><td></td><td>z\u8F74\u504F\u79FB</td><td>0</td></tr></tbody></table>',92);function h(p,a){return r}var o=t(e,[["render",h],["__file","mythicmobs.html.vue"]]);export{o as default};
