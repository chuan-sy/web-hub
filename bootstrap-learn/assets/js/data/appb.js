/* ============================================================
   附录 B CSS 选择器
   ============================================================ */
window.BS_DATA.push({
  id: 'appb',
  num: '附录 B',
  title: 'CSS 选择器',
  accent: '#0f766e',
  accentSoft: '#e6f7f4',
  icon: 'bi-brush',
  intro: '你可能遇到过一个经典困惑：<b>"我明明写了 CSS，为什么没生效？"</b>——答案多半就在"选择器"和"优先级"里。这个附录用十分钟把 CSS 选择器的核心打透，它是你"脱离 Bootstrap 束缚"的钥匙。',
  goals: [
    '说清选择器是什么、一条 CSS 规则由哪几部分组成',
    '掌握 7 类常用选择器：元素、类、ID、后代、子代、并集、属性',
    '会用 :hover、:nth-child 等伪类和 ::before 等伪元素',
    '看懂"优先级"，知道样式冲突时谁说了算',
    '能自己写出精确的"覆盖 Bootstrap 样式"的规则'
  ],
  docs: [
    { t: 'MDN：CSS 选择器', u: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_selectors' },
    { t: 'MDN：优先级', u: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity' },
    { t: 'Bootstrap 层级说明', u: 'https://getbootstrap.com/docs/5.3/layout/z-index/' }
  ],
  sections: [
    {
      id: 'B.1',
      t: '选择器是什么',
      d: '一条 CSS 规则由三部分组成：<b>选择器</b>（选谁）、<b>属性</b>（改什么）、<b>值</b>（改成什么样）。选择器就是"点名"——全页面那么多元素，你靠它精确指认要化妆的那几个。写法：<code>选择器 { 属性: 值; }</code>。',
      demo:
        '<div class="seldemo">' +
        '<div class="sass-out mb-2" style="font-size:.78rem"><span style="color:#0a58ca">.hit</span> { background: #fff3cd; }<br><span class="text-body-tertiary">/* 选择器 = .hit，属性 = background，值 = #fff3cd */</span></div>' +
        '<ul class="list-unstyled mb-0">' +
        '<li class="hit">我带着 .hit 类 → 被点名，涂上了黄色</li>' +
        '<li>我没有这个类 → 不受影响</li>' +
        '</ul>' +
        '</div>',
      tip: '"选择器 → 属性 → 值"这三件套写在花括号里，每条属性用分号结尾。忘记分号是新人最常见的手误。'
    },
    {
      id: 'B.2',
      t: '元素（类型）选择器',
      d: '直接写标签名，如 <code>p { }</code>、<code>li { }</code>、<code>h1 { }</code>——"所有这个标签都给我改"。优点是不用加类名；缺点是打击面太大，只适合"全局性"的设定（如 body 的字号、段落行高）。',
      demo:
        '<div class="seldemo el-demo">' +
        '<div class="sass-out mb-2" style="font-size:.78rem">li { color: #0f766e; list-style: square; }</div>' +
        '<ul class="mb-0"><li>第一个 li（命中，变绿+方块符号）</li><li>第二个 li（同样命中）</li></ul>' +
        '<p class="small text-body-secondary mt-2 mb-0">所有 li 无一例外都变了——"一网打尽"是把双刃剑。</p>' +
        '</div>',
      tip: '实际项目里，元素选择器常出现在"重置/基础样式"层（Bootstrap 的 Reboot 就是干这个的），业务样式尽量用类选择器。'
    },
    {
      id: 'B.3',
      t: '类选择器',
      d: '以 <code>.</code> 开头、指向 class 属性，如 <code>.btn</code>。<b>这是 Bootstrap 用的一切，也是你日常用得最多的。</b>一个元素可以有多个类，一个类可以命中无数元素——精确、可复用、方便组合。',
      demo:
        '<div class="seldemo cls-demo">' +
        '<div class="sass-out mb-2" style="font-size:.78rem">.hit { background: #fff3cd; font-weight: 600; }</div>' +
        '<ul class="list-unstyled mb-0">' +
        '<li class="hit">我是 .hit —— 高亮</li>' +
        '<li>我是普通 li</li>' +
        '<li class="hit">我也有 .hit —— 同样高亮</li>' +
        '</ul>' +
        '<p class="small text-body-secondary mt-2 mb-0">同一个类，命中多个元素；Bootstrap 的 btn、card、row 全是这个套路。</p>' +
        '</div>',
      tip: '元素上写 <code>class="hit fw-bold text-danger"</code> 可以"叠"多个类，样式逐条累加——这就是"工具类组合"思维的基础。'
    },
    {
      id: 'B.4',
      t: 'ID 选择器',
      d: '以 <code>#</code> 开头、指向 id 属性，如 <code>#mainNav</code>。规则：<b>一个页面里 id 必须唯一</b>，所以 ID 选择器天然"精准但不可复用"。它还有个"副作用"——权重极高（B.10 会讲），所以样式里滥用 ID 会让后面很难覆盖，日常"样式"优先用类，ID 更多用于"锚点跳转"和 JS 定位。',
      demo:
        '<div class="seldemo id-demo">' +
        '<div class="sass-out mb-2" style="font-size:.78rem">#idTarget { background: #e6f7fe; color: #0a58ca; font-weight: 600; }</div>' +
        '<p class="mb-1"><span id="idTarget">我带着唯一的 id="idTarget"</span>　<span class="text-body-secondary small">← 被精确命中</span></p>' +
        '<p class="small mb-0">页面里再写一个 <code>id="idTarget"</code> 就是"违法"的（唯一性），别这么干。</p>' +
        '</div>',
      tip: '判断口诀：<b>要"精准一次"用 ID，要"反复复用"用类</b>。写样式时 99% 的场景用类就够了。'
    },
    {
      id: 'B.5',
      t: '后代选择器与子代选择器',
      d: '<b>后代</b>：<code>A B</code>（空格分隔）——"A 里面（不管层级多深）的 B"；<b>子代</b>：<code>A &gt; B</code>——"A 的直接儿子 B，孙子不算"。前者范围大、后者更精确。Bootstrap 的卡片样式（如 <code>.card &gt; .card-body</code>）就大量用子代选择器防止"误伤"。',
      demo:
        '<div class="seldemo desc-demo">' +
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="sass-out mb-2" style="font-size:.76rem">.card-x .em-x { color: #0d6efd; }<br>（后代：隔几层都找）</div>' +
        '<div class="card-x"><p class="mb-0">段落里 <span class="em-x">我隔着 p 也被找到 →</span> 变蓝</p></div></div>' +
        '<div class="col-md-6"><div class="sass-out mb-2" style="font-size:.76rem">.card-x &gt; .title-x { color: #b45309; }<br>（子代：只管亲儿子）</div>' +
        '<div class="card-x">' +
        '<div class="title-x mb-1">我是亲儿子 → 变棕加粗</div>' +
        '<div><div class="title-x text-body-tertiary mb-0" style="font-weight:400">我是"孙子"（被 div 包了一层）→ 子代选择器管不到我</div></div>' +
        '</div></div>' +
        '</div></div>',
      hint: '对比上下两个 .title-x：亲儿子和孙子的待遇完全不同',
      tip: '为什么 Bootstrap 爱用子代：防止你的"孙子元素"被意外改样式。你自己写覆盖规则时，仿照它的写法最稳。'
    },
    {
      id: 'B.6',
      t: '并集选择器与通配符',
      d: '<b>并集</b>：用逗号分隔 <code>.a, .b { }</code>——"这些选择器共用同一套样式"，省得写两遍。<b>通配符</b>：<code>*</code>——命中所有元素；还有 <code>* + *</code>（相邻兄弟的经典写法）。通配符威力太大，实际项目里一般只在"全站重置"时露个脸。',
      demo:
        '<div class="seldemo union-demo">' +
        '<div class="sass-out mb-2" style="font-size:.78rem">.a-x, .b-x { border-left: 4px solid #7c3aed; background: #f8f4ff; }</div>' +
        '<div class="d-flex flex-column gap-2 mb-2">' +
        '<span class="a-x p-2 rounded">我是 .a-x —— 命中</span>' +
        '<span class="b-x p-2 rounded">我是 .b-x —— 也命中</span>' +
        '<span class="c-x p-2 rounded">我是 .c-x —— 不在名单里，没有紫边</span>' +
        '</div>' +
        '<div class="small text-body-secondary">通配符示例（Bootstrap 也在用）：<code>* , *::before, *::after { box-sizing: border-box; }</code></div>' +
        '</div>',
      tip: '并集记得检查逗号——漏一个逗号，规则语义就完全变了（变成后代选择器）。'
    },
    {
      id: 'B.7',
      t: '属性选择器',
      d: '根据标签的<b>属性</b>来选：<code>[disabled]</code>（有这属性就选）、<code>[type="text"]</code>（属性等于某值）、<code>[href^="https"]</code>（以…开头）、<code>[class~="btn"]</code>（值包含某词）等。做"给所有外链加图标""给禁用的控件变灰"这类需求特别顺手。',
      demo:
        '<div class="seldemo attr-demo">' +
        '<div class="sass-out mb-2" style="font-size:.78rem">a[target] { color: #0f766e; text-decoration: underline dotted; }<br>[data-level="vip"] { outline: 2px dashed #d63384; }</div>' +
        '<p class="mb-2 small"><a href="https://getbootstrap.com/docs/5.3/" target="_blank">我带着 target 属性 → 变绿虚线下划线</a>　｜　<a href="#">我没带 target → 样式不变</a></p>' +
        '<div class="d-flex flex-wrap gap-2">' +
        '<span class="p-2 border rounded small" data-level="vip">data-level="vip" → 虚框</span>' +
        '<span class="p-2 border rounded small" data-level="normal">data-level="normal" → 无虚框</span>' +
        '</div>' +
        '</div>',
      tip: '前缀匹配四兄弟：<code>^=</code> 开头、<code>$=</code> 结尾、<code>*=</code> 包含、<code>~=</code> 按词包含——拼图一样拼出你要的规则。'
    },
    {
      id: 'B.8',
      t: '伪类选择器',
      d: '伪类以 <code>:</code> 开头，描述元素的"<b>状态</b>"而不是"身份"：<code>:hover</code> 悬停、<code>:focus</code> 聚焦、<code>:first-child</code> 第一个孩子、<code>:last-child</code> 最后一个、<code>:nth-child(odd)</code> 奇数位（隔行变色神器）、<code>:not(.x)</code> 排除、<code>:checked</code> 被勾选。Bootstrap 的表格条纹、按钮悬停全是它。',
      demo:
        '<div class="seldemo pseudo-demo">' +
        '<div class="row g-3">' +
        '<div class="col-md-4"><div class="pg-label">li:hover（把鼠标放上去）</div>' +
        '<ul class="list-unstyled mb-0"><li>悬停我</li><li>悬停我</li><li>悬停我</li></ul></div>' +
        '<div class="col-md-4"><div class="pg-label">li:nth-child(odd)（奇数行）</div>' +
        '<ul class="list-unstyled fruit mb-0"><li>苹果</li><li>香蕉</li><li>橙子</li><li>葡萄</li></ul></div>' +
        '<div class="col-md-4"><div class="pg-label">:first-child / :last-child</div>' +
        '<ul class="list-unstyled fl mb-0"><li>第一个（蓝）</li><li>中间的</li><li>最后一个（绿）</li></ul></div>' +
        '</div>' +
        '<p class="small text-body-secondary mt-2 mb-0">常用伪类还有：:focus、:disabled、:checked、:not()、:nth-of-type()…共 50 多个。</p>' +
        '</div>',
      hint: '三列分别演示：悬停变色、隔行变色、首尾特殊化——都是表格/列表美化标配',
      tip: '<code>:hover</code> 是"状态"不是"身份"：它永远写在冒号后面，而且只对鼠标设备有意义（手机上没有 hover）。'
    },
    {
      id: 'B.9',
      t: '伪元素选择器',
      d: '伪元素以 <code>::</code> 开头（两个冒号），表示"<b>元素里的一部分</b>"：<code>::before</code> / <code>::after</code> 可以在元素内容的前后"凭空添加"装饰内容（必须配 content 属性），<code>::first-line</code> 第一行、<code>::placeholder</code> 输入框占位符、<code>::selection</code> 选中的文字——都能单独设样式。',
      demo:
        '<div class="seldemo pseudoel-demo">' +
        '<div class="sass-out mb-2" style="font-size:.78rem">.note-x::before { content: "★ "; color: gold; }<br>.note-x::after { content: " ←（这段是伪元素加的）"; color: purple; }</div>' +
        '<p class="note-x mb-3">这句话的首尾装饰都不是我打的字</p>' +
        '<div class="sass-out mb-2" style="font-size:.78rem">.demo-input::placeholder { color: #b45309; }</div>' +
        '<input class="form-control form-control-sm" style="max-width:260px" placeholder="看看占位符的颜色（在 style.css 里定义）">' +
        '</div>',
      tip: '伪元素常用来"加装饰"（箭头、图标、分割线），而不污染 HTML。注意：<code>content</code> 是它的"开关"，忘了写 content，伪元素不会出现。'
    },
    {
      id: 'B.10',
      t: '优先级（谁是最后赢家）',
      d: '当多条规则同时"抢"一个属性时，浏览器按<b>权重</b>决胜：行内 style &gt; ID &gt; 类/属性/伪类 &gt; 元素/伪元素；权重相同则"后写的赢"。还有一个"核武器" <code>!important</code>（谁都拦不住，但官方不推荐滥用——Bootstrap 只在工具类上用）。看懂这一节，你就能回答"我的样式为什么没生效"。',
      demo:
        '<div class="seldemo spec-box">' +
        '<div class="sass-out mb-2" style="font-size:.76rem">span { color: #0f766e; }<br>.prio { color: #b45309; }<br>#prioId { color: #dc3545; }</div>' +
        '<p class="mb-3"><span id="prioId" class="prio">我同时被三条规则命中 → 最终是红色（ID 胜出）</span></p>' +
        '<div class="table-responsive"><table class="table table-sm small align-middle mb-0" style="max-width:520px">' +
        '<thead><tr><th>选择器</th><th>权重写法</th><th>量级</th></tr></thead><tbody>' +
        '<tr><td>元素（p / li）</td><td>0,0,1</td><td>最低</td></tr>' +
        '<tr><td>类 / 属性 / 伪类</td><td>0,1,0</td><td>中等 —— Bootstrap 全住在这层</td></tr>' +
        '<tr><td>ID（#header）</td><td>1,0,0</td><td>很高</td></tr>' +
        '<tr><td>行内 style="…"</td><td>1,0,0,0</td><td>极高</td></tr>' +
        '<tr><td>!important</td><td>—</td><td>核武器，少用</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small text-body-secondary mt-2 mb-0">备注：<code>.box a</code> 这种组合的权重是"各部分相加"（一个类 + 一个元素 = 0,1,1）；权重一样时，后写的覆盖先写的。</p>' +
        '</div>',
      hint: '记住这张表：以后"样式不生效"，先看是不是被更高权重的规则压住了',
      tip: '<b>覆盖 Bootstrap 的正确姿势：</b>用同样或略高的权重"压过去"（如 .my-card .btn），而不是随手 !important。官方工具类本身自带 !important，所以才"优先级最高"。'
    }
  ],
  summary: [
    '一条 CSS 规则 = 选择器 { 属性: 值 }；选择器的职责是"精确点名"。',
    '七个常用选择器：元素（打击面大）、类（主力）、ID（唯一且权重高）、后代（空格）、子代（>）、并集（,）、属性（[attr="v"]）。',
    '伪类（:hover / :nth-child / :first-child / :not）描述"状态"；伪元素（::before / ::after / ::placeholder）描述"元素的一部分"。',
    '优先级从低到高：元素 < 类/属性/伪类 < ID < 行内 style；同权重后写的赢。',
    '覆盖 Bootstrap 样式时，优先"提高一点权重"而不是 !important；Bootstrap 工具类自带 !important，天然最难覆盖。'
  ],
  practice: {
    t: '附录实训：给你的"书单"列表做精细样式',
    d: '挑一个你自己页面上"光秃秃"的列表（书单、课程表、待办清单），用这个附录学到的选择器，把它做成"有细节"的列表。',
    steps: [
      '给列表加隔行变色：用 :nth-child(odd) 染奇数行（本演示左列的效果）。',
      '加悬停反馈：li:hover 改变背景色，让鼠标"所到之处"看得见。',
      '首尾特殊化：:first-child 标"最新"、:last-child 标"最早"，视觉上首尾呼应。',
      '给完成项加删除线：类选择器 .done + text-decoration: line-through。',
      '最后复习一遍 B.10：如果你发现某条样式"没生效"，打开浏览器开发者工具（F12），看是不是被更高权重的规则压住了。'
    ],
    demo:
      '<div class="seldemo pseudo-demo">' +
      '<div class="row g-3">' +
      '<div class="col-md-6"><div class="pg-label">:nth-child(odd) 隔行 + :hover 悬停</div>' +
      '<ul class="list-unstyled fruit mb-0">' +
      '<li>《Bootstrap 基础教程》</li><li>《CSS 新世界》</li><li>《JavaScript 高级程序设计》</li><li>《图解 HTTP》</li>' +
      '</ul></div>' +
      '<div class="col-md-6"><div class="pg-label">:first-child / :last-child 首尾特殊化</div>' +
      '<ul class="list-unstyled fl mb-0">' +
      '<li>最新添加：《Bootstrap 实战》</li><li>《CSS 新世界》</li><li>《图解 HTTP》</li><li>最早加入：《HTML 基础》</li>' +
      '</ul></div>' +
      '</div>' +
      '<p class="small text-body-secondary mt-3 mb-0">把鼠标移到任意一行上，再观察首尾两行的"特殊待遇"——这就是选择器的"精确点名"。</p>' +
      '</div>',
    hint: '对照 steps：隔行、悬停、首尾，三条规则就能让列表"活"起来'
  }
});
