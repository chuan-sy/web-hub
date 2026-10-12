/* ============================================================
   第 2 章 栅格系统
   ============================================================ */
window.BS_DATA.push({
  id: 'ch2',
  num: '第 2 章',
  title: '栅格系统',
  accent: '#0d6efd',
  accentSoft: '#e8f1ff',
  icon: 'bi-grid-1x2',
  intro: '栅格系统是 Bootstrap 的"地基"，也是全书最重要的一章。记住一句话：<b>把一行当成 12 格的蛋糕，想怎么切，就用类名写出来</b>。学会它，页面布局从"玄学"变成"算术题"。',
  goals: [
    '理解"一行 12 列"的原理和 container / row / col 三层结构',
    '记住 6 个屏幕断点，会用 col-md-6 这种"响应式列"',
    '会做等宽列、自适应列、嵌套、排序、偏移',
    '会用 gutter（槽宽）控制列与列之间的间隙',
    '能独立布局出"左内容右侧栏""四宫格""响应式卡片墙"等常见版式'
  ],
  docs: [
    { t: '官方 Grid 文档', u: 'https://getbootstrap.com/docs/5.3/layout/grid/' },
    { t: '断点 Breakpoints', u: 'https://getbootstrap.com/docs/5.3/layout/breakpoints/' },
    { t: '容器 Containers', u: 'https://getbootstrap.com/docs/5.3/layout/containers/' },
    { t: '槽宽 Gutters', u: 'https://getbootstrap.com/docs/5.3/layout/gutters/' }
  ],
  sections: [
    {
      id: '2.1',
      t: '实现原理',
      d: 'Bootstrap 把页面横向切成 <b>12 等份</b>（12 列），布局无非是决定"每个块占几份"。为什么是 12 而不是 10？因为 12 能被 2、3、4、6 整除，<code>col-6</code>（一半）、<code>col-4</code>（三分之一）、<code>col-3</code>（四分之一）、<code>col-2</code>（六分之一）都能分出整数份，非常灵活。写法上永远是这个三层结构：<code>容器 → 行 → 列</code>，列必须写在行里，行必须写在容器里。',
      demo:
        '<div class="small text-body-secondary mb-2">一整行 = 12 份：</div>' +
        '<div class="row g-1 mb-3">' +
        '<div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div><div class="col-1"><div class="dbox">1</div></div>' +
        '</div>' +
        '<div class="small text-body-secondary mb-2">常见切法：</div>' +
        '<div class="row g-1 mb-2">' +
        '<div class="col-6"><div class="dbox">col-6（一半）</div></div><div class="col-6"><div class="dbox">col-6（一半）</div></div></div>' +
        '<div class="row g-1 mb-2">' +
        '<div class="col-4"><div class="dbox">col-4</div></div><div class="col-4"><div class="dbox">col-4</div></div><div class="col-4"><div class="dbox">col-4</div></div></div>' +
        '<div class="row g-1">' +
        '<div class="col-3"><div class="dbox">col-3</div></div><div class="col-3"><div class="dbox">col-3</div></div><div class="col-3"><div class="dbox">col-3</div></div><div class="col-3"><div class="dbox">col-3</div></div></div>',
      tip: '口诀：<b>一行为 12，列必在行中，行必在容器中</b>。如果一堆 col 加起来超过 12，多出来的会自动"换行"排到下一行——这是正常行为，不是 bug。'
    },
    {
      id: '2.2',
      t: '工作原理',
      d: 'Bootstrap 采用<b>移动优先</b>：类名不带断点时（如 <code>col-12</code>），在任何屏幕都生效；带了断点时（如 <code>col-md-6</code>），表示"<b>从 md（≥768px）这个尺寸开始</b>改成 6 份"，而且会<b>向上覆盖</b>更大的屏幕。所以通常的组合是：手机上一列堆叠（col-12），平板两列（col-md-6），电脑四列（col-lg-3）。',
      demo:
        '<div class="table-responsive mb-3"><table class="table table-sm align-middle mb-0">' +
        '<thead><tr><th>断点</th><th>类名中缀</th><th>生效宽度</th><th>典型设备</th></tr></thead><tbody>' +
        '<tr><td>xs</td><td>无（如 col-12）</td><td>&lt; 576px</td><td>手机竖屏</td></tr>' +
        '<tr><td>sm</td><td>-sm-</td><td>≥ 576px</td><td>手机横屏</td></tr>' +
        '<tr><td>md</td><td>-md-</td><td>≥ 768px</td><td>平板</td></tr>' +
        '<tr><td>lg</td><td>-lg-</td><td>≥ 992px</td><td>笔记本</td></tr>' +
        '<tr><td>xl</td><td>-xl-</td><td>≥ 1200px</td><td>大显示器</td></tr>' +
        '<tr><td>xxl</td><td>-xxl-</td><td>≥ 1400px</td><td>超大显示器</td></tr>' +
        '</tbody></table></div>' +
        '<div class="small text-body-secondary mb-2">下面这四块用了 col-12 col-md-6 col-lg-3，把窗口拉宽拉窄试试：</div>' +
        '<div class="row g-2">' +
        '<div class="col-12 col-md-6 col-lg-3"><div class="dbox">1</div></div>' +
        '<div class="col-12 col-md-6 col-lg-3"><div class="dbox">2</div></div>' +
        '<div class="col-12 col-md-6 col-lg-3"><div class="dbox">3</div></div>' +
        '<div class="col-12 col-md-6 col-lg-3"><div class="dbox">4</div></div>' +
        '</div>',
      hint: '把浏览器窗口或预览区拉宽 / 拉窄，观察 4 块如何从 1 列 → 2 列 → 4 列变化',
      tip: '最容易混的一点：<code>col-md-6</code> 不止在 md 生效，在 lg、xl、xxl 也生效（向上继承）。要"只在 md 用 6 份，更大屏换别的"，再往后加 <code>col-lg-*</code> 覆盖即可。'
    },
    {
      id: '2.3',
      t: '使用方法',
      group: true,
      d: '从最基础的容器和等宽列开始，逐步加上响应式、嵌套、排序、偏移这些技能。',
      children: [
        {
          id: '2.3.1',
          t: '基本用法',
          d: '两个容器要分清：<code>.container</code> 会在两侧留白并把内容居中（宽度随屏幕分档），适合常规页面；<code>.container-fluid</code> 永远占满整个宽度，适合通栏版式。列的基础写法是 <code>.col</code>（自动等宽）或 <code>.col-数字</code>（固定份数）。',
          cmp: [
            {
              label: '把"容器 + 三等分"翻译成你熟悉的原生写法',
              native: '<!-- 原生：居中容器 + 三等分，全靠手写 CSS -->\n<div class="van-wrap">\n  <div class="van-cell">一</div>\n  <div class="van-cell">二</div>\n  <div class="van-cell">三</div>\n</div>\n\n.van-wrap { max-width: 1140px; margin: 0 auto; padding: 0 12px;\n  display: flex; gap: 16px; }\n.van-cell { flex: 1; }\n/* 想"响应式分档"？还得为每个断点补媒体查询 */',
              bs: '<div class="container">\n  <div class="row g-1">\n    <div class="col">一</div>\n    <div class="col">二</div>\n    <div class="col">三</div>\n  </div>\n</div>\n\n<!-- container 负责"居中 + 分档"，row 管 flex 与换行，\n     col 负责均分——一个类一个职责 -->',
              note: '逐层对上号：container ≈ max-width + margin:auto，row ≈ flex 容器，col ≈ flex:1。'
            }
          ],
          demo:
            '<div class="mb-3"><div class="small text-body-secondary mb-1">.container-fluid：占满整行（注意两侧贴边）</div>' +
            '<div class="container-fluid p-0"><div class="row g-1"><div class="col"><div class="dbox">col</div></div><div class="col"><div class="dbox">col</div></div><div class="col"><div class="dbox">col</div></div></div></div></div>' +
            '<div><div class="small text-body-secondary mb-1">.container：居中 + 左右留白</div>' +
            '<div class="container p-0"><div class="row g-1"><div class="col"><div class="dbox">col</div></div><div class="col"><div class="dbox">col</div></div><div class="col"><div class="dbox">col</div></div></div></div></div>',
          hint: '把预览区拉宽，"container 版"两侧留白会变，fluid 版不会',
          tip: '<code>.col</code>（不带数字）表示"剩下的空间大家平分"；<code>.col-4</code> 表示"硬性占 4 份"。混用时先分掉固定份数，剩余空间再由 .col 们平分。'
        },
        {
          id: '2.3.2',
          t: '混合与匹配',
          d: '真实页面几乎不会只用一种列，而是"不同宽度的列混搭"。最经典的组合是<b>主内容 + 侧边栏</b>：主内容 <code>col-12 col-md-8</code>，侧栏 <code>col-12 col-md-4</code>——手机上自动上下堆叠，平板以上并排。',
          demo:
            '<div class="row g-2">' +
            '<div class="col-12 col-md-8"><div class="dbox" style="padding:2rem .5rem">主内容 col-12 col-md-8</div></div>' +
            '<div class="col-12 col-md-4"><div class="dbox dbox-2" style="padding:2rem .5rem">侧边栏 col-12 col-md-4</div></div>' +
            '</div>',
          hint: '拉窄预览区：两块会变成上下排列',
          tip: '8 + 4 = 12，正好一行放满。常见搭配还有 9+3、7+5、6+6，加起来等于 12 就是一整行。'
        },
        {
          id: '2.3.3',
          t: '等宽列',
          d: '想"平均分"时不用一个个写 col-3，直接用 <code>.col</code>：不管几个，浏览器自动均分整行。比如 3 个 col 各占 1/3，5 个 col 各占 1/5——份数由个数决定，改行数不用改类名。',
          demo:
            '<div class="small text-body-secondary mb-2">3 个 .col：各占 1/3</div>' +
            '<div class="row g-1 mb-3"><div class="col"><div class="dbox">1/3</div></div><div class="col"><div class="dbox">1/3</div></div><div class="col"><div class="dbox">1/3</div></div></div>' +
            '<div class="small text-body-secondary mb-2">4 个 .col：各占 1/4</div>' +
            '<div class="row g-1"><div class="col"><div class="dbox">1/4</div></div><div class="col"><div class="dbox">1/4</div></div><div class="col"><div class="dbox">1/4</div></div><div class="col"><div class="dbox">1/4</div></div></div>',
          tip: '<b>想加一列怎么办？</b>直接往 HTML 里加一个 <code>&lt;div class="col"&gt;</code>，所有列自动重新均分，一个类名都不用改——这就是等宽列的魅力。'
        },
        {
          id: '2.3.4',
          t: '可变宽度内容',
          d: '如果某一列希望"宽度由内容决定"（内容多宽它就多宽），用 <code>.col-auto</code>；剩下的空间再由 <code>.col</code> 均分。适合"图标 + 文字 + 按钮"这种一块固定、一块弹性的排版。',
          demo:
            '<div class="row g-2 mb-2">' +
            '<div class="col-auto"><div class="dbox dbox-3">col-auto<br>宽度随内容</div></div>' +
            '<div class="col"><div class="dbox">col：占满剩余空间</div></div>' +
            '<div class="col-auto"><div class="dbox dbox-3">col-auto</div></div>' +
            '</div>' +
            '<div class="small text-body-secondary">改改中间的内容长度试试——auto 列不动，弹性列自动伸缩。</div>',
          tip: '<code>.col-auto</code> 常用于表单输入框旁边的"提交按钮"列，或者卡片右边的"操作按钮"列。'
        },
        {
          id: '2.3.5',
          t: '列嵌套',
          d: '列里面还能再放"行 + 列"，这就是嵌套。注意一个细节：<b>内部的行又是全新的 12 份</b>，和外层无关——外层是 4 份的列，里面照样可以再切 12 份。常见用途：左边大块里再分"图 + 文"，右边侧栏里再分上下两块。',
          demo:
            '<div class="row g-2">' +
            '<div class="col-8"><div class="dbox" style="background:rgba(13,110,253,.05);border-style:dashed;padding:.6rem"><div class="small mb-2">外层左列（col-8）</div>' +
            '<div class="row g-2"><div class="col-6"><div class="dbox dbox-2">内部 col-6</div></div><div class="col-6"><div class="dbox dbox-2">内部 col-6</div></div></div></div></div>' +
            '<div class="col-4"><div class="dbox" style="padding:2rem .5rem">外层右列（col-4）</div></div>' +
            '</div>',
          tip: '嵌套时内层要用一个新的 <code>&lt;div class="row"&gt;</code> 包起来，不要直接把内层 col 塞进外层 col 里，否则槽宽（间距）会算错。'
        },
        {
          id: '2.3.6',
          t: '列排序',
          d: '不改 HTML 顺序，只用 <code>order-*</code> 类就能调整视觉顺序。数量值越大排得越靠后，<code>order-first</code> = 最前，<code>order-last</code> = 最后；也可以给不同断点写不同顺序（如 <code>order-md-2</code>）。典型场景：手机上"文字在上、图片在下"，电脑上反过来。',
          demo:
            '<div class="small text-body-secondary mb-2">HTML 里的顺序是 A B C，但视觉顺序被 order 改了（拉窄窗口看变化）：</div>' +
            '<div class="row g-2">' +
            '<div class="col-4 order-2 order-md-1"><div class="dbox">A：order-md-1</div></div>' +
            '<div class="col-4 order-1 order-md-2"><div class="dbox dbox-2">B：order-1</div></div>' +
            '<div class="col-4 order-last"><div class="dbox dbox-3">C：order-last</div></div>' +
            '</div>',
          hint: '窄屏时 B 在最前、C 在最后；宽屏时顺序变成 A B C',
          tip: '记住方向：<b>order 数字小的在前</b>。默认所有列 order 都是 0，所以只给个别列编号，其他列保持默认即可。'
        },
        {
          id: '2.3.7',
          t: '列偏移',
          d: '<code>offset-*</code> 可以在列的前面"空出"几份位置，实现居中或不贴边的效果。例如标题只想居中、两边留白：给 col-4 加上 <code>offset-md-4</code>（左边空 4 份，4+4=8，右边自然空 4 份）。另一种"把某列推到最右"的写法是给左侧的列加 <code>ms-auto</code>（后面 4.3 会细讲 margin）。',
          demo:
            '<div class="row g-1 mb-3"><div class="col-4 offset-md-4"><div class="dbox dbox-3">col-4 + offset-md-4（居中）</div></div></div>' +
            '<div class="row g-1 mb-3"><div class="col-4"><div class="dbox">col-4</div></div><div class="col-4 offset-2"><div class="dbox dbox-2">col-4 + offset-2</div></div></div>' +
            '<div class="row g-1"><div class="col-auto"><div class="dbox">左</div></div><div class="col-auto ms-auto"><div class="dbox dbox-3">右（ms-auto）</div></div></div>',
          tip: '<b>居中公式：</b>col-4 + offset-4 = 居中；col-6 + offset-3 = 居中；col-8 + offset-2 = 居中。空出的份数 = (12 - 列份数) ÷ 2。'
        },
        {
          id: '2.3.8',
          t: '行内类',
          d: '不想一列一列写？可以在"行"上一次性定规则：<code>row-cols-2</code> 表示"这行里每列占一半（一行放 2 个）"，<code>row-cols-md-3</code> 表示平板以上一行放 3 个。配合 <code>g-*</code> 控制列间距，写"卡片墙"特别省事。',
          demo:
            '<div class="small text-body-secondary mb-2">row-cols-2 row-cols-md-3 row-cols-lg-4（拉窗口看变化）：</div>' +
            '<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">' +
            '<div class="col"><div class="dbox">卡片</div></div><div class="col"><div class="dbox">卡片</div></div><div class="col"><div class="dbox">卡片</div></div>' +
            '<div class="col"><div class="dbox">卡片</div></div><div class="col"><div class="dbox">卡片</div></div><div class="col"><div class="dbox">卡片</div></div>' +
            '<div class="col"><div class="dbox">卡片</div></div><div class="col"><div class="dbox">卡片</div></div>' +
            '</div>',
          tip: '注意区别：<code>row-cols-3</code> 写在行上，管的是"每行放几个"（列自动等宽）；<code>col-4</code> 写在列上，管的是"这一列占几份"。做卡片墙优先用前者，改数量只改一个地方。'
        }
      ]
    },
    {
      id: '2.4',
      t: '结合其他工具类使用',
      group: true,
      d: '栅格天然是 flex 布局（第 4 章会细讲 flex），所以排列、间距、推拉这些工具类可以直接用在 row 和 col 上。',
      children: [
        {
          id: '2.4.1',
          t: '排列',
          d: '在行上加 <code>justify-content-*</code>，控制一行里的列"横向怎么摆"：靠左（默认）、居中 center、靠右 end、两端对齐 between、环绕 around、均匀分布 evenly。',
          demo:
            '<div class="small text-body-secondary mb-1">justify-content-center</div>' +
            '<div class="row g-1 justify-content-center mb-2"><div class="col-3"><div class="dbox">A</div></div><div class="col-3"><div class="dbox">B</div></div></div>' +
            '<div class="small text-body-secondary mb-1">justify-content-end</div>' +
            '<div class="row g-1 justify-content-end mb-2"><div class="col-3"><div class="dbox">A</div></div><div class="col-3"><div class="dbox">B</div></div></div>' +
            '<div class="small text-body-secondary mb-1">justify-content-between</div>' +
            '<div class="row g-1 justify-content-between mb-2"><div class="col-3"><div class="dbox">A</div></div><div class="col-3"><div class="dbox">B</div></div><div class="col-3"><div class="dbox">C</div></div></div>' +
            '<div class="small text-body-secondary mb-1">justify-content-around</div>' +
            '<div class="row g-1 justify-content-around"><div class="col-3"><div class="dbox">A</div></div><div class="col-3"><div class="dbox">B</div></div></div>',
          tip: '这几个词按"分布感"记：center 全居中；end 全靠右；between 首尾贴边中间均分（导航栏里最常见）；around 每块两侧留等距；evenly 连边缘也算进去均分。'
        },
        {
          id: '2.4.2',
          t: '槽宽类',
          d: '列与列之间的缝隙叫"槽"（gutter），用行上的 <code>g-*</code> 控制，取值 0～5。<code>gx-*</code> 只管左右缝，<code>gy-*</code> 只管上下缝。默认 g-0 没缝，g-3 是常用值（卡片墙一般 g-3 或 g-4）。',
          demo:
            '<div class="small text-body-secondary mb-1">g-0：缝隙为 0</div>' +
            '<div class="row g-0 mb-3 border rounded-2 overflow-hidden"><div class="col-6"><div class="dbox" style="border-radius:0">A</div></div><div class="col-6"><div class="dbox" style="border-radius:0">B</div></div></div>' +
            '<div class="small text-body-secondary mb-1">g-3（默认常用）</div>' +
            '<div class="row g-3 mb-3"><div class="col-6"><div class="dbox">A</div></div><div class="col-6"><div class="dbox">B</div></div></div>' +
            '<div class="small text-body-secondary mb-1">gx-5：左右缝超大</div>' +
            '<div class="row gx-5 mb-3"><div class="col-6"><div class="dbox">A</div></div><div class="col-6"><div class="dbox">B</div></div></div>' +
            '<div class="small text-body-secondary mb-1">gy-4：上下缝大（多行时生效）</div>' +
            '<div class="row gy-4"><div class="col-6"><div class="dbox">A</div></div><div class="col-6"><div class="dbox">B</div></div><div class="col-6"><div class="dbox">C</div></div><div class="col-6"><div class="dbox">D</div></div></div>',
          tip: '新手最常忘加 g-3，导致所有卡片"糊"在一起。习惯是：写 <code>&lt;div class="row g-3"&gt;</code> 开头，先留缝再说。'
        },
        {
          id: '2.4.3',
          t: '居左 / 居右',
          d: '在栅格里让元素靠边，有两种常用做法：① 用 <code>justify-content-start / end</code> 让整行内容居左 / 居右；② 给某一列加 <code>ms-auto</code>（左边自动占满）把它"顶"到最右。第二种更灵活，导航栏、工具条里到处都是它。',
          demo:
            '<div class="small text-body-secondary mb-1">整行居右：justify-content-end</div>' +
            '<div class="row g-1 justify-content-end mb-3"><div class="col-3"><div class="dbox">A</div></div><div class="col-3"><div class="dbox">B</div></div></div>' +
            '<div class="small text-body-secondary mb-1">只有一块被顶到最右：ms-auto</div>' +
            '<div class="row g-1"><div class="col-3"><div class="dbox">左边</div></div><div class="col-3 ms-auto"><div class="dbox dbox-3">ms-auto → 贴右</div></div></div>',
          tip: 'ms = margin-start（左），me = margin-end（右）。中文记忆：<b>ms-auto 顶到右，me-auto 顶到左</b>。'
        }
      ]
    },
    {
      id: '2.5',
      t: '案例：W3School 首页',
      d: '用栅格复刻一个"教程站首页"的经典结构：顶部导航 → 通栏 Hero 横幅 → 左右两栏主体（左：课程列表；右：侧栏）→ 页脚。重点体会每一块"住在第几行、占几份"。',
      demo:
        '<div class="border rounded-3 overflow-hidden bg-white">' +
        '<nav class="navbar bg-body-tertiary px-3 py-2"><span class="navbar-brand mb-0 h1 fs-6">W3School 风格首页</span>' +
        '<div class="d-none d-md-flex gap-3 small text-body-secondary"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></nav>' +
        '<div class="text-white text-center py-5" style="background:linear-gradient(120deg,#0d6efd,#5ea2ff)">' +
        '<h4 class="fw-bold mb-1">在这里学 Web 技术</h4><p class="small mb-3" style="opacity:.85">最大的 Web 开发教程站</p>' +
        '<button class="btn btn-light btn-sm fw-semibold">开始学习</button></div>' +
        '<div class="container-fluid p-3"><div class="row g-3">' +
        '<div class="col-12 col-md-8"><h6 class="fw-bold">热门课程</h6>' +
        '<div class="list-group list-group-flush">' +
        '<a href="#" class="list-group-item list-group-item-action px-0">HTML 教程</a>' +
        '<a href="#" class="list-group-item list-group-item-action px-0">CSS 教程</a>' +
        '<a href="#" class="list-group-item list-group-item-action px-0">Bootstrap 教程</a>' +
        '</div></div>' +
        '<div class="col-12 col-md-4"><h6 class="fw-bold">侧边栏</h6>' +
        '<div class="p-3 bg-body-tertiary rounded-2 small text-body-secondary">这里放广告位、推荐链接或搜索框。</div></div>' +
        '</div></div>' +
        '<div class="bg-dark text-white-50 text-center small py-2">页脚 · W3School 风格示例</div>' +
        '</div>',
      hint: '核心结构只有一句：左 8 份（col-md-8）+ 右 4 份（col-md-4），窄屏自动堆叠',
      tip: '这个"导航 + 横幅 + 左右两栏 + 页脚"的结构，稍加替换就能变成公司官网、产品页、博客首页——万变不离其宗。'
    },
    {
      id: '2.6',
      t: '动手实验：栅格速算器（自己调、实时看）',
      d: '光看还不够——这个实验台让你<b>亲手调参数</b>：选断点、拖份数、调槽宽，下面的预览和生成的代码会实时更新。再对照一眼"当前视口宽度 → 生效断点"，你就能彻底明白"类名到底在什么宽度上生效"。',
      demo:
        '<div class="glab">' +
        '<div class="glab-controls">' +
        '<label>断点：<select class="form-select form-select-sm" data-glab="bp">' +
        '<option value="">不加断点（任何宽度都生效）</option>' +
        '<option value="sm">sm ≥576px</option>' +
        '<option value="md" selected>md ≥768px</option>' +
        '<option value="lg">lg ≥992px</option>' +
        '<option value="xl">xl ≥1200px</option>' +
        '<option value="xxl">xxl ≥1400px</option>' +
        '</select></label>' +
        '<label>左侧占几份：<input type="range" min="1" max="11" value="8" data-glab="left"><b class="glab-val" data-glab="leftv">8</b></label>' +
        '<label>槽宽 g-<input type="range" min="0" max="5" value="3" data-glab="gap"><b class="glab-val" data-glab="gapv">3</b></label>' +
        '</div>' +
        '<div class="glab-live">你现在的视口宽：<b data-glab="w">—</b>px → 当前生效断点：<b data-glab="active">—</b></div>' +
        '<div class="glab-preview"><div class="row" data-glab="row"></div></div>' +
        '<pre class="glab-code"><code data-glab="code"></code></pre>' +
        '</div>',
      hint: '先拖"左侧占几份"到 4 / 8 各试一次；再把断点从 md 换成 lg，对照"生效断点"理解类名生效的时机',
      js:
        'var $ = function (sel) { return stage.querySelector(sel); };\n' +
        'var bpSel = $("[data-glab=bp]");\n' +
        'var leftIn = $("[data-glab=left]");\n' +
        'var gapIn = $("[data-glab=gap]");\n' +
        'var leftV = $("[data-glab=leftv]");\n' +
        'var gapV = $("[data-glab=gapv]");\n' +
        'var row = $("[data-glab=row]");\n' +
        'var codeEl = $("[data-glab=code]");\n' +
        'var wEl = $("[data-glab=w]");\n' +
        'var actEl = $("[data-glab=active]");\n' +
        'function activeBp(w) {\n' +
        '  var cur = "xs（基础，无断点）";\n' +
        '  if (w >= 576) cur = "sm";\n' +
        '  if (w >= 768) cur = "md";\n' +
        '  if (w >= 992) cur = "lg";\n' +
        '  if (w >= 1200) cur = "xl";\n' +
        '  if (w >= 1400) cur = "xxl";\n' +
        '  return cur;\n' +
        '}\n' +
        'function updateWidth() {\n' +
        '  var w = window.innerWidth || 0;\n' +
        '  wEl.textContent = w;\n' +
        '  actEl.textContent = activeBp(w);\n' +
        '}\n' +
        'function render() {\n' +
        '  var bp = bpSel.value;\n' +
        '  var left = parseInt(leftIn.value, 10) || 1;\n' +
        '  var right = 12 - left;\n' +
        '  var gap = gapIn.value || "3";\n' +
        '  var lc = bp ? "col-" + bp + "-" + left : "col-" + left;\n' +
        '  var rc = bp ? "col-" + bp + "-" + right : "col-" + right;\n' +
        '  leftV.textContent = left;\n' +
        '  gapV.textContent = gap;\n' +
        '  row.className = "row g-" + gap;\n' +
        '  row.innerHTML = \'<div class="\' + lc + \'"><div class="dbox">主内容 \' + lc + \'</div></div>\' +\n' +
        '    \'<div class="\' + rc + \'"><div class="dbox dbox-2">侧边栏 \' + rc + \'</div></div>\';\n' +
        '  updateWidth();\n' +
        '  codeEl.textContent = \'<div class="row g-\' + gap + \'">\\n  <div class="\' + lc + \'">主内容</div>\\n  <div class="\' + rc + \'">侧边栏</div>\\n</div>\';\n' +
        '}\n' +
        'if (window.__glabCleanup) { try { window.__glabCleanup(); } catch (e) { } }\n' +
        'window.addEventListener("resize", updateWidth);\n' +
        'window.__glabCleanup = function () { window.removeEventListener("resize", updateWidth); };\n' +
        '[bpSel, leftIn, gapIn].forEach(function (el) { el.addEventListener("input", render); });\n' +
        'render();',
      tip: '这个实验台本身就是用本章知识搭的：<b>row + g-*</b> 做结构、<b>col-{断点}-{份数}</b> 随参数生成、宽高由工具类控制。看完别急着走——把参数调到"你自己项目会用的组合"，记下生成的代码。'
    }
  ],
  summary: [
    '栅格 = 12 列等分系统，三层结构：容器 → 行（row）→ 列（col）。',
    '断点从小到大：sm 576 / md 768 / lg 992 / xl 1200 / xxl 1400，类名中缀如 col-md-6 表示"≥768px 起生效并向上继承"。',
    'col 等宽均分；col-auto 宽度随内容；col-数字 固定份数；加起来超 12 自动换行。',
    'order-* 改视觉顺序，offset-* 空出位置（居中是 col-N + offset-(12-N)/2），row-cols-* 快速做卡片墙。',
    '行上可用 justify-content-* 排列、g-*/gx-*/gy-* 控槽宽，列上可用 ms-auto / me-auto 贴边。'
  ],
  practice: {
    t: '实训项目：制作银行网站首页',
    d: '综合运用本章知识，做一个银行官网首页的骨架：顶部导航条、通栏宣传横幅、"两栏"产品区（左侧大幅广告 + 右侧业务列表）、底部页脚。',
    steps: [
      '用 .container 包住主体，避免内容在超宽屏上散开。',
      '横幅区：一个占满 12 份的块，背景用渐变，放标题 + 按钮。',
      '产品区：左边 col-12 col-lg-8 放大广告图，右边 col-12 col-lg-4 用列表组放业务入口。',
      '想一想：手机浏览时，产品区应该怎么堆叠？把 col-lg-* 改成 col-md-* 对比一下效果。',
      '加分项：给横幅加一个 offset 居中的小标题，试试居中的味道。'
    ],
    demo:
      '<div class="border rounded-3 overflow-hidden bg-white">' +
      '<div class="d-flex align-items-center justify-content-between px-3 py-2 bg-body-tertiary">' +
      '<span class="fw-bold text-primary"><i class="bi bi-bank2"></i> 学学银行</span>' +
      '<span class="small text-body-secondary">登录&nbsp;|&nbsp;注册</span></div>' +
      '<div class="text-white py-4 px-4" style="background:linear-gradient(120deg,#0b3d91,#1e6fd9)">' +
      '<div class="row align-items-center"><div class="col-12 col-md-7">' +
      '<h5 class="fw-bold mb-1">让理财更简单</h5><p class="small mb-3" style="opacity:.85">新用户专享 7 天体验金</p>' +
      '<button class="btn btn-warning btn-sm fw-semibold">立即开户</button></div>' +
      '<div class="col-12 col-md-5 d-none d-md-block text-end"><i class="bi bi-credit-card-2-front" style="font-size:3.4rem;opacity:.5"></i></div>' +
      '</div></div>' +
      '<div class="p-3"><div class="row g-3">' +
      '<div class="col-12 col-lg-8"><div class="p-4 rounded-3 text-center" style="background:linear-gradient(135deg,#e8f1ff,#f4f8ff);border:1px dashed #b9d2ff;color:#2b6ed9">' +
      '<i class="bi bi-image fs-2"></i><div class="small mt-1">活动大图 8 份宽</div></div></div>' +
      '<div class="col-12 col-lg-4"><div class="list-group">' +
      '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between"><span><i class="bi bi-piggy-bank me-2 text-primary"></i>存款业务</span><i class="bi bi-chevron-right small"></i></a>' +
      '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between"><span><i class="bi bi-graph-up-arrow me-2 text-success"></i>基金理财</span><i class="bi bi-chevron-right small"></i></a>' +
      '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between"><span><i class="bi bi-house-door me-2 text-warning"></i>房贷计算</span><i class="bi bi-chevron-right small"></i></a>' +
      '</div></div>' +
      '</div></div>' +
      '<div class="text-center small text-body-secondary bg-body-tertiary py-2">© 2026 学学银行（示例）</div>' +
      '</div>',
    hint: '把预览区拉窄：右侧业务列表会先堆到下方，这就是响应式的日常'
  }
});
