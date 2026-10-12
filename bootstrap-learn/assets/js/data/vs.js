/* ============================================================
   附录 D · 对照专区（上部：D.1 ~ D.4）
   "原生 HTML/CSS/JS 写法" 与 "Bootstrap 写法" 并排对照
   知识点字段新增：
     cmp  [{ label, native, bs, note }]
          native=原生写法代码 / bs=Bootstrap 写法代码 / note=一句话结论
   ============================================================ */
window.BS_DATA.push({
  id: 'vs',
  num: '附录 D',
  title: '对照专区：原生写法 vs Bootstrap',
  accent: '#b45309',
  accentSoft: '#fef3e2',
  icon: 'bi-arrow-left-right',
  intro: '你已经会 HTML / CSS / JavaScript——这就是最大的优势：<b>Bootstrap 里没有新知识，只有"新包装"</b>。这一页把同一件事的"原生写法"和"Bootstrap 写法"并排放给你看，一眼就能对上号。建议按 D.1 → D.2 → D.3 → D.4 顺序读，最后用 D.5 速查表和 D.6 易错表收尾。',
  goals: [
    '看任何一段 Bootstrap 代码，都能说出"它原生里是什么"',
    '能判断一件事：用 Bootstrap 省事，还是回原生更省事',
    '把"类名"当成"写在 HTML 上的样式配置单"，不再当咒语背',
    '会查官方文档、会用 DevTools 自己找答案'
  ],
  docs: [
    { t: '官方文档首页', u: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' },
    { t: '官方示例库（照着抄最快）', u: 'https://getbootstrap.com/docs/5.3/examples/' },
    { t: 'GitHub 仓库与 Issue', u: 'https://github.com/twbs/bootstrap' }
  ],
  sections: [
    {
      id: 'D.1',
      t: '先看这里：你会的三件套，就是理解的捷径',
      d: '学 Bootstrap 其实只发生三个"说法转换"：① <b>CSS 属性 → 类名</b>：原生你把样式写在 <code>style.css</code> 里，Bootstrap 把最常用的样式"配置"提前编成了类名，你写在 HTML 上就行；② <b>addEventListener → data-bs-*</b>：原生你手动找元素、绑事件，Bootstrap 让你把"要干什么"写在属性里，插件替你绑；③ <b>出问题 → 回原生找原因</b>：布局出了问题，本质还是 flex；样式不生效，本质还是优先级。你已有的基础，恰好就是"排查问题的地图"。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="p-3 border rounded-3 h-100">' +
        '<div class="small text-body-secondary mb-2">你以前是这么写的</div>' +
        '<ul class="list-unstyled small mb-0">' +
        '<li class="mb-2"><code>text-align: center</code><br><span class="text-body-secondary">写在 CSS 文件里的属性</span></li>' +
        '<li class="mb-2"><code>addEventListener("click", fn)</code><br><span class="text-body-secondary">手动给元素绑事件</span></li>' +
        '<li><code>classList.toggle("open")</code><br><span class="text-body-secondary">用 JS 切换状态</span></li>' +
        '</ul></div></div>' +
        '<div class="col-md-6"><div class="p-3 border rounded-3 h-100 bg-body-tertiary">' +
        '<div class="small text-body-secondary mb-2">Bootstrap 里换个说法</div>' +
        '<ul class="list-unstyled small mb-0">' +
        '<li class="mb-2"><code>.text-center</code><br><span class="text-body-secondary">属性变成类名，直接写 HTML</span></li>' +
        '<li class="mb-2"><code>data-bs-toggle</code><br><span class="text-body-secondary">"要干什么"写在属性里，插件替你绑事件</span></li>' +
        '<li><code>.collapse.show</code><br><span class="text-body-secondary">状态也是类名，"切类名"由插件负责</span></li>' +
        '</ul></div></div>' +
        '</div>',
      hint: '这只是总览——下面三节会把 HTML / CSS / JS 逐项拆开并排对照',
      tip: '把这句话刻进脑子：<b>Bootstrap 没有发明新东西，它只是把"你写过无数遍的原生代码"标准化并起了名字。</b>所以遇到看不懂的类，先问：它原生对应什么？'
    },
    {
      id: 'D.2',
      t: 'HTML 对照：标签照旧，只穿"类名外套"',
      group: true,
      d: '看四个高频例子：导航、输入框、按钮、图片。注意标签本身基本没变（nav 还是 nav、input 还是 input），变的只是"身上多了什么类名"。',
      children: [
        {
          id: 'D.2.1',
          t: '导航：<nav> → navbar',
          d: '原生写导航，结构有三行、样式有八行，还要再补响应式；Bootstrap 用一个 navbar 家族把"样式 + 响应式 + 无障碍"全接过去。',
          cmp: [
            {
              label: '一个深色导航条的两种实现',
              native: '<!-- 原生：结构、样式、响应式都要自己来 -->\n<nav class="van-nav">\n  <a class="van-brand" href="#">我的站点</a>\n  <ul class="van-nav-ul">\n    <li><a href="#">首页</a></li>\n    <li><a href="#">产品</a></li>\n  </ul>\n</nav>\n\n/* 还没算悬停高亮、当前页区分、小屏折叠…… */\n.van-nav { display: flex; align-items: center; gap: 24px;\n  padding: 12px 24px; background: #212529; color: #fff; }\n.van-nav-ul { display: flex; gap: 16px; list-style: none; margin: 0; }\n.van-nav a { color: #fff; text-decoration: none; }',
              bs: '<!-- Bootstrap：一套类名，样式 + 响应式都就位 -->\n<nav class="navbar navbar-expand-md bg-dark px-3" data-bs-theme="dark">\n  <a class="navbar-brand" href="#">我的站点</a>\n  <ul class="navbar-nav">\n    <li class="nav-item"><a class="nav-link active" href="#">首页</a></li>\n    <li class="nav-item"><a class="nav-link" href="#">产品</a></li>\n  </ul>\n</nav>\n\n<!-- 再想要"手机折叠成汉堡菜单"？补这几行： -->\n<button class="navbar-toggler" data-bs-toggle="collapse"\n        data-bs-target="#menu1"><span class="navbar-toggler-icon"></span></button>',
              note: '导航条是全站最值得当"模板"抄的组件——它把样式、响应式、键盘操作全打包了。'
            }
          ],
          demo:
            '<nav class="navbar navbar-expand-md bg-body-tertiary rounded-3 px-3">' +
            '<a class="navbar-brand fw-bold" href="#">我的站点</a>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#vsNavMenu" aria-label="切换导航"><span class="navbar-toggler-icon"></span></button>' +
            '<div class="collapse navbar-collapse" id="vsNavMenu">' +
            '<ul class="navbar-nav ms-auto">' +
            '<li class="nav-item"><a class="nav-link active" href="#">首页</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">产品</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">关于</a></li>' +
            '</ul></div></nav>',
          hint: '把预览区拉窄到手机宽度：右上角出现汉堡按钮，点开折叠菜单——这就是"响应式导航"的全部代码',
          tip: '类名分工记清楚：<code>navbar</code> 是基座、<code>navbar-expand-md</code> 管"何时变横排"、<code>navbar-nav</code> 管链接列表。'
        },
        {
          id: 'D.2.2',
          t: '输入框：<input> → form-control',
          d: '输入框标签没变，还是原生 <code>&lt;input&gt;</code>。但从今往后你不用再手写聚焦光晕、禁用态、尺寸变体——这些"状态"全部被 form-control 预置了。',
          cmp: [
            {
              label: '一个输入框的两种命运',
              native: '<!-- 原生：每个状态都要自己写 CSS -->\n<input type="text" class="van-input" placeholder="请输入邮箱">\n\n.van-input { width: 100%; padding: 8px 12px; font-size: 1rem;\n  border: 1px solid #c3cbd8; border-radius: 6px; }\n.van-input:focus { outline: none; border-color: #86b7fe;\n  box-shadow: 0 0 0 4px rgba(13,110,253,.2); }\n/* 还有：禁用态、大小档位、校验红框……都得自己补 */',
              bs: '<label class="form-label">邮箱地址</label>\n<input type="email" class="form-control"\n       placeholder="name@example.com">\n\n<!-- 焦点光晕、禁用态、尺寸变体、校验样式全自带： -->\n<input class="form-control form-control-sm" …>\n<input class="form-control" disabled …>',
              note: '控件"状态越多"，Bootstrap 省下的代码越多——输入框是头号赢家。'
            }
          ],
          demo:
            '<div class="row g-3">' +
            '<div class="col-sm-6"><label class="form-label">邮箱地址</label><input type="email" class="form-control" placeholder="name@example.com"></div>' +
            '<div class="col-sm-6"><label class="form-label">禁用的输入框（自带样式）</label><input type="text" class="form-control" disabled placeholder="不可编辑"></div>' +
            '</div>',
          hint: '点一下输入框看聚焦光晕；对比禁用框的灰色——两个状态都没写一行 CSS'
        },
        {
          id: 'D.2.3',
          t: '按钮：<button> → btn',
          d: '按钮是最能体现"标准化"价值的例子：hover、按下、禁用、尺寸、配色——原生要写十行，Bootstrap 只换后缀。',
          cmp: [
            {
              label: '一个按钮的两种写法',
              native: '<!-- 原生：hover / 按下 / 禁用 全要手写 -->\n<button class="van-btn">提交</button>\n\n.van-btn { padding: 8px 18px; border: 1px solid #0b5ed7;\n  background: #0d6efd; color: #fff; border-radius: 6px;\n  cursor: pointer; transition: .15s; }\n.van-btn:hover { background: #0b5ed7; }\n.van-btn:active { transform: translateY(1px); }\n.van-btn:disabled { opacity: .65; cursor: not-allowed; }',
              bs: '<button class="btn btn-primary">提交</button>\n\n<!-- 想换风格？只换后缀： -->\n<button class="btn btn-outline-primary">提交</button>\n<button class="btn btn-primary btn-sm">小号提交</button>\n\n<!-- 8 种配色 × 3 档尺寸 × 悬停/按下/禁用，全部现成 -->',
              note: '把"每个状态都要写"标准化，这就是 Bootstrap 的核心卖点。'
            }
          ],
          demo:
            '<div class="d-flex align-items-end gap-4 flex-wrap">' +
            '<div><div class="small text-body-secondary mb-1">原生手写样式</div><button class="van-btn" type="button">提交</button></div>' +
            '<div><div class="small text-body-secondary mb-1">btn btn-primary</div><button class="btn btn-primary" type="button">提交</button></div>' +
            '<div><div class="small text-body-secondary mb-1">btn-outline-primary</div><button class="btn btn-outline-primary" type="button">提交</button></div>' +
            '</div>',
          hint: '把鼠标放上去按一按，三个按钮的悬停/按下反馈各不相同',
          tip: '自己写按钮样式时，先把"悬停、按下、禁用、焦点"四个状态想全——Bootstrap 的按钮之所以好用，就是替你想全了。'
        },
        {
          id: 'D.2.4',
          t: '图片：<img> → img-fluid',
          d: '原生图片加两条规则就能"自适应"；Bootstrap 把它们封成 <code>img-fluid</code>。它是"手机端不撑爆布局"的保险丝。',
          cmp: [
            {
              label: '响应式图片',
              native: '<img src="images/banner.jpg" class="van-img" alt="横幅">\n\n.van-img { max-width: 100%; height: auto; display: block; }',
              bs: '<img src="images/banner.jpg" class="img-fluid" alt="横幅">\n\n<!-- 顺手的搭档： -->\n<img class="img-fluid rounded" …>        <!-- 圆角 -->\n<img class="img-fluid img-thumbnail" …>  <!-- 相框 -->\n<div class="ratio ratio-16x9">…</div>    <!-- 固定比例 -->',
              note: 'img-fluid 只干一件事，但内容区里每张图都应该加它。'
            }
          ],
          demo:
            '<div class="row g-3 align-items-center">' +
            '<div class="col-md-7"><img src="' + BS_PH.wide + '" class="img-fluid rounded" alt="响应式横幅示例"></div>' +
            '<div class="col-md-5"><div class="small text-body-secondary">拉窄预览区：图片等比缩到容器宽度，永远不会溢出——这就是 max-width:100% + height:auto 的两条规则在干活。</div></div>' +
            '</div>',
          hint: '把预览区拉窄观察图片的缩放行为'
        }
      ]
    },
    {
      id: 'D.3',
      t: 'CSS 对照：手写规则 → 组合类名',
      group: true,
      d: '这一节是你最熟悉的地盘：flex、媒体查询、margin、CSS 变量……全部换成类名写法。看完你会发现——Bootstrap 的"魔法"，你早就会了。',
      children: [
        {
          id: 'D.3.1',
          t: '布局：flex + 媒体查询 → 栅格',
          d: '"三张卡片，手机一列、平板两列、电脑三列"——这就是你写过无数遍的 flex + 媒体查询。栅格把它标准化成了类名。',
          cmp: [
            {
              label: '响应式卡片墙',
              native: '/* 原生：手写 flex + 逐断点媒体查询 */\n.cards { display: flex; flex-wrap: wrap; gap: 16px; }\n.cards > .item { width: 100%; }\n@media (min-width: 768px)  { .cards > .item { width: calc(50% - 8px); } }\n@media (min-width: 992px)  { .cards > .item { width: calc(33.33% - 11px); } }',
              bs: '<div class="row g-3">\n  <div class="col-12 col-md-6 col-lg-4">卡片一</div>\n  <div class="col-12 col-md-6 col-lg-4">卡片二</div>\n  <div class="col-12 col-md-6 col-lg-4">卡片三</div>\n</div>\n<!-- 断点、间距、换行、对齐，全在类名里 -->',
              note: '栅格 = 别人帮你写好的 flex + 媒体查询。它没有魔法，只是把重复劳动标准化了。'
            }
          ],
          demo:
            '<div class="row g-3">' +
            '<div class="col-12 col-md-6 col-lg-4"><div class="dbox">卡片一</div></div>' +
            '<div class="col-12 col-md-6 col-lg-4"><div class="dbox dbox-2">卡片二</div></div>' +
            '<div class="col-12 col-md-6 col-lg-4"><div class="dbox dbox-3">卡片三</div></div>' +
            '</div>',
          hint: '拉宽 / 拉窄预览区，观察 1 列 → 2 列 → 3 列的变化'
        },
        {
          id: 'D.3.2',
          t: '间距：margin → m-*',
          d: '间距类是"把 margin / padding 的方向 × 数值编成代号"。想到哪边、多大，写出代号就行。',
          cmp: [
            {
              label: '同一个"上边距 1rem"',
              native: '/* 原生：还得想清楚方向、数值、要不要配媒体查询 */\n.panel { margin-top: 1rem; }\n@media (min-width: 768px) {\n  .panel { margin-top: 0; }\n}',
              bs: '<div class="mt-3">上边距 1rem（3 档）</div>\n<div class="mt-4 mt-md-0">小屏 4 档、md 起清零</div>',
              note: 'm 是推别人（外边距）、p 是撑自己（内边距）；方向字母 t/b/s/e、x/y 一次管两侧。'
            }
          ],
          demo:
            '<div class="bg-body-tertiary rounded-3 p-3">' +
            '<div class="dbox">上面这块没有上边距</div>' +
            '<div class="dbox dbox-2 mt-3">我加了 mt-3（上边距 1rem）</div>' +
            '</div>',
          hint: '两个盒子挨着的距离，就是 mt-3 的效果'
        },
        {
          id: 'D.3.3',
          t: '颜色主题：自定变量 → 主题色表',
          d: '你以前自定义颜色是"写一组变量 + 给每个元素写样式"；Bootstrap 的主题色是"一个色名 = 一整套类"（按钮、文字、背景、边框、徽章全生成）。',
          cmp: [
            {
              label: '加一个品牌色',
              native: ':root { --brand: #7048e8; }\n.btn-brand { background: var(--brand); color: #fff; }\n.text-brand { color: var(--brand); }\n.bg-brand { background: var(--brand); }\n/* 想再加一个色？上面整套变体都要自己补 */',
              bs: '/* Sass：一行配置，全套变体自动生成 */\n$theme-colors: ( "brand": #7048e8 );\n// → 自动获得 .btn-brand / .text-brand / .bg-brand…\n\n/* 或运行时覆盖一条 CSS 变量（不用重编译）： */\n.my-area { --bs-primary: #7048e8; }',
              note: '"一个颜色 = 一整套类"来自主题色表；这是它比手写变量"成套"的地方。'
            }
          ],
          demo:
            '<div class="d-flex flex-wrap gap-2">' +
            '<span class="badge text-bg-primary">primary</span>' +
            '<span class="badge text-bg-success">success</span>' +
            '<span class="badge text-bg-danger">danger</span>' +
            '<span class="badge text-bg-warning">warning</span>' +
            '<span class="badge text-bg-info">info</span>' +
            '<span class="badge text-bg-dark">dark</span>' +
            '</div>' +
            '<div class="row g-2 mt-3">' +
            '<div class="col-4"><div class="p-3 rounded-3 bg-primary text-white text-center small">bg-primary</div></div>' +
            '<div class="col-4"><div class="p-3 rounded-3 bg-success text-white text-center small">bg-success</div></div>' +
            '<div class="col-4"><div class="p-3 rounded-3 bg-danger text-white text-center small">bg-danger</div></div>' +
            '</div>',
          hint: '所有颜色都是"主题色"的引用——换主题时它们会一起变'
        },
        {
          id: 'D.3.4',
          t: '断点：@media → 类名中缀',
          d: '你背过的 <code>@media (min-width: 768px)</code>，在 Bootstrap 里就是类名里的 <code>md</code>。只有 5 个档，一个不多。',
          cmp: [
            {
              label: '同一套断点，两种表达',
              native: '/* 原生：断点写在媒体查询里 */\n@media (min-width: 576px)  { … }  /* sm */\n@media (min-width: 768px)  { … }  /* md */\n@media (min-width: 992px)  { … }  /* lg */\n@media (min-width: 1200px) { … }  /* xl */\n@media (min-width: 1400px) { … }  /* xxl */',
              bs: '/* Bootstrap：断点写在类名里 */\ncol-sm-*   col-md-*   col-lg-*   col-xl-*   col-xxl-*\nd-sm-none  d-md-block  mt-lg-0  order-md-2 …\n所有带断点的类，都用同一套中缀：sm / md / lg / xl / xxl',
              note: '类名中的 sm~xxl 就是这 5 个宽度值——背过 @media 的你，等于已经会了。'
            }
          ],
          demo:
            '<div class="table-responsive"><table class="table table-sm table-striped align-middle mb-0">' +
            '<thead><tr><th>类名中缀</th><th>何时生效</th><th>等效的媒体查询</th></tr></thead><tbody>' +
            '<tr><td><code>sm</code></td><td>≥ 576px</td><td><code>@media (min-width: 576px)</code></td></tr>' +
            '<tr><td><code>md</code></td><td>≥ 768px</td><td><code>@media (min-width: 768px)</code></td></tr>' +
            '<tr><td><code>lg</code></td><td>≥ 992px</td><td><code>@media (min-width: 992px)</code></td></tr>' +
            '<tr><td><code>xl</code></td><td>≥ 1200px</td><td><code>@media (min-width: 1200px)</code></td></tr>' +
            '<tr><td><code>xxl</code></td><td>≥ 1400px</td><td><code>@media (min-width: 1400px)</code></td></tr>' +
            '</tbody></table></div>',
          hint: '对照表收好，写类名时不确定就回来查一眼'
        },
        {
          id: 'D.3.5',
          t: '响应式显隐：display:none → d-none',
          d: '"手机藏、电脑显"是最高频的响应式需求。原生要写媒体查询，Bootstrap 用两个类就表达完了：<b>d-none d-md-block</b>。',
          cmp: [
            {
              label: '藏一个侧栏',
              native: '/* 原生：媒体查询 + display */\n@media (max-width: 767.98px) {\n  .side { display: none; }\n}',
              bs: '<div class="d-none d-md-block">手机隐藏、md 起显示</div>\n\n<!-- 反过来？ -->\n<div class="d-block d-md-none">只有手机上显示</div>',
              note: '读法：第一个类"先藏起来"，第二个类"从某断点放开"。'
            }
          ],
          demo:
            '<div class="d-none d-md-block mb-2"><div class="dbox">我是 d-none d-md-block：窄屏时我会消失</div></div>' +
            '<div class="d-block d-md-none"><div class="dbox dbox-warn">我是 d-block d-md-none：只有手机宽度才轮到我出场</div></div>',
          hint: '把预览区拉窄到 768px 以下：两块会互换（上面的消失、下面的出现）'
        }
      ]
    },
    {
      id: 'D.4',
      t: 'JS 对照：手写事件 → 数据属性与插件 API',
      group: true,
      d: '这一节是"最赚"的部分：你以前用 addEventListener 手写的交互，Bootstrap 拆成两条路——简单场景写 <b>data-bs-* 属性</b>（零 JS），复杂逻辑用 <b>插件 API</b>（bootstrap.Modal 之类）。',
      children: [
        {
          id: 'D.4.1',
          t: '下拉菜单：20 行 JS → 两行属性',
          d: '手写下拉菜单不只是"切个类名"：还要处理点击外部关闭、ESC 关闭、键盘上下键……这些"隐性工作量"插件全包了。',
          cmp: [
            {
              label: '点击弹出的下拉菜单',
              native: '// 原生：手写 20 行，还只算半成品\nvar btn = document.querySelector(".van-dd");\nbtn.addEventListener("click", function () {\n  btn.nextElementSibling.classList.toggle("open");\n});\ndocument.addEventListener("click", function (e) {\n  if (!e.target.closest(".van-dd-wrap")) closeAll(); // 点外部关闭\n});\ndocument.addEventListener("keydown", function (e) {\n  if (e.key === "Escape") closeAll(); // ESC 关闭\n});\n// 还差：键盘上下键选择、焦点管理、无障碍属性……',
              bs: '<div class="dropdown">\n  <button class="btn btn-primary dropdown-toggle"\n          data-bs-toggle="dropdown">更多操作</button>\n  <ul class="dropdown-menu">\n    <li><a class="dropdown-item" href="#">编辑</a></li>\n    <li><a class="dropdown-item" href="#">删除</a></li>\n  </ul>\n</div>\n<!-- 键盘操作、ESC、点外部关闭、aria 状态，插件全包了 -->',
              note: '两行属性替换二十行手写 JS——这就是"数据属性"的性价比。'
            }
          ],
          demo:
            '<div class="dropdown">' +
            '<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">更多操作</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item" href="#">编辑</a></li>' +
            '<li><a class="dropdown-item" href="#">复制</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item text-danger" href="#">删除</a></li>' +
            '</ul></div>',
          hint: '点开菜单后试试：按 ESC 关闭、点空白处关闭——这些你都没写，是插件送的'
        },
        {
          id: 'D.4.2',
          t: '模态框：手写遮罩 → modal 插件',
          d: '模态框是"数据属性 + 插件 API"的分水岭：打开关闭这种简单场景纯属性；"打开后要做点什么"就用事件（shown.bs.modal）。',
          cmp: [
            {
              label: '一个居中弹窗',
              native: '// 原生 <dialog>：功能有，但"体验"要自己补\nvar dlg = document.getElementById("vanDialog");\ndocument.querySelector(".open-btn").addEventListener("click", function () {\n  dlg.showModal();\n});\n// 还得自己补：居中样式、背景遮罩、打开/关闭动画、\n// 滚动锁定、焦点管理、ESC 行为……',
              bs: '<button class="btn btn-primary" data-bs-toggle="modal"\n        data-bs-target="#myModal">打开</button>\n\n<div class="modal fade" id="myModal" tabindex="-1">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content"> … </div>\n  </div>\n</div>\n\n// 打开后要执行逻辑？监听事件就行：\nel.addEventListener("shown.bs.modal", function () { … });',
              note: '简单场景用属性；复杂逻辑（打开后加载数据等）用 JS API + 事件。'
            }
          ],
          demo:
            '<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#vsModal">打开模态框</button>' +
            '<div class="modal fade" id="vsModal" tabindex="-1" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered">' +
            '<div class="modal-content">' +
            '<div class="modal-header"><h5 class="modal-title">示例弹窗</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
            '<div class="modal-body">遮罩 + 居中 + 动画 + 焦点管理，你就写了一个按钮和一段结构。</div>' +
            '<div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button><button type="button" class="btn btn-primary">确定</button></div>' +
            '</div></div></div>',
          hint: '点按钮打开；试试 ESC 关闭、点遮罩关闭'
        },
        {
          id: 'D.4.3',
          t: '折叠：classList.toggle → data-bs-toggle="collapse"',
          d: '原生折叠"看起来简单"（切个类名），但想要"平滑动画 + 无障碍状态同步"就要做不少功课。collapse 插件一步到位。',
          cmp: [
            {
              label: '一个折叠面板',
              native: '// 原生：切换类名 + 自己实现高度动画\nvar btn = document.querySelector(".van-toggle");\nbtn.addEventListener("click", function () {\n  var panel = document.getElementById("vanPanel");\n  panel.classList.toggle("collapsed");\n  btn.setAttribute("aria-expanded",\n    panel.classList.contains("collapsed") ? "false" : "true");\n});\n/* .collapsed { display: none; } —— 想要滑动动画还得写 transition */',
              bs: '<button class="btn btn-primary" data-bs-toggle="collapse"\n        data-bs-target="#panel1">展开 / 收起</button>\n<div class="collapse" id="panel1">\n  被折叠的内容（滑动动画、aria-expanded 状态都处理好了）\n</div>',
              note: '越"看着简单"的交互，隐性工作量越多——这正是插件存在的意义。'
            }
          ],
          demo:
            '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#vsCollapsePanel" aria-expanded="false" aria-controls="vsCollapsePanel">展开 / 收起</button>' +
            '<div class="collapse mt-3" id="vsCollapsePanel">' +
            '<div class="border rounded-3 p-3 bg-body-tertiary">折叠内容：点几次按钮，注意滑动动画与"展开/收起"的过渡。</div>' +
            '</div>',
          hint: '点按钮感受一下动画；再看代码，你一行 JS 都没写'
        }
      ]
    }
  ],
  summary: [
    'HTML 对照：标签基本不变（nav / input / button / img），变的只是"身上的类名外套"——类名 = 写在 HTML 上的样式配置单。',
    'CSS 对照：栅格 = flex + 媒体查询的标准化；间距类 = margin/padding 的方向 × 数值代号；断点中缀 sm~xxl = 你背过的 @media。',
    'JS 对照：data-bs-* 是"声明式接线"（零 JS）；插件 API（new bootstrap.Modal…）与事件（shown.bs.*）负责复杂逻辑。',
    '排查问题的思路不变：布局问题想 flex、样式不生效想优先级、交互异常先查 data-bs-target 的 id 是否对得上。',
    '判断标准：标准界面用 Bootstrap（快、稳、无障碍都到位）；高度定制的视觉细节回原生 CSS 写（准、自由）。'
  ],
  practice: {
    t: '实训项目：把一段原生代码"翻译"成 Bootstrap',
    d: '找一段你以前写过的原生页面或组件（教程里的练习、自己做过的小项目都行），逐段"翻译"成 Bootstrap 写法，并列出"哪些地方省了代码、哪些地方还是原生更好用"。',
    steps: [
      '挑一个包含"布局 + 按钮 + 表单 + 一个交互"的小页面。',
      '布局层：把 flex / 媒体查询替换成 row + col-{断点}-*，记录省掉的 CSS 行数。',
      '控件层：把按钮、输入框替换成 btn / form-control，对比状态样式（悬停、聚焦、禁用）的完整度。',
      '交互层：把手写的下拉 / 折叠 / 弹窗替换成 data-bs-* 属性，感受"零 JS"的边界在哪里。',
      '收尾：写下 3 条"Bootstrap 更好用"和 3 条"原生更好用"的场景——这就是你自己的决策清单。'
    ]
  }
});
