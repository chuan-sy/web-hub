/* ============================================================
   附录 C · 关键词词典（1/6）
   C1 起步与全局 / C2 栅格系统
   每个词条字段说明：
     n  词条名（显示用，也是"关键词芯片"跳转的目标）
     d  白话解释（可含行内 HTML）
     u  用法示例代码（显示在词条卡里，可复制）
     nat 原生对照：用你会的 HTML/CSS/JS 怎么理解
     tip 常见坑 / 记忆点（可选）
     ref 对应本手册的章节位置（可选）
     re 用于"自动提取关键词"的正则（可选，类名有变体时写）
   ============================================================ */
window.BS_GLOSSARY = window.BS_GLOSSARY || [];

/* ---------- 附录 C 词条收集完成后，注册"词典"这一章 ---------- */
window.BS_DATA.push({
  id: 'glossary',
  num: '附录 C',
  title: '关键词词典',
  type: 'glossary',
  accent: '#0f766e',
  accentSoft: '#e6fbf6',
  icon: 'bi-journal-text',
  intro: '学 Bootstrap 最大的门槛不是"不会写"，而是"记不住这么多类名"。这一页就是全站的"关键词字典"：把 <b>类名、data- 属性、专业术语</b>全部翻译成人话。每个知识点的下方都会自动列出它用到的关键词芯片，<b>点一下芯片就能跳到这里</b>。',
  goals: [
    '看到任何一类名（如 col-md-6），都知道它"在说什么"，而不是死记',
    '能分清"工具类"和"组件"各自的查法',
    '遇到 data-bs-* 属性时，知道它是"不写 JS 的遥控器"',
    '把每条词条末尾的"原生对照"看懂——你已有 HTML/CSS/JS 基础，这是最快的理解路径'
  ],
  docs: [
    { t: '官方 Utilities 总览（工具类查这里）', u: 'https://getbootstrap.com/docs/5.3/utilities/api/' },
    { t: '官方 Components 总览（组件查这里）', u: 'https://getbootstrap.com/docs/5.3/components/accordion/' },
    { t: '官方 CSS 变量一览', u: 'https://getbootstrap.com/docs/5.3/customize/css-variables/' }
  ],
  sections: [],
  summary: [
    '类名不是"魔法咒语"，它只是"提前写好的 CSS 规则的名字"——每一个词条背后都是一段原生 CSS。',
    '工具类（mt-3、d-flex）记"拼装逻辑"；组件（card、navbar）记"骨架结构"；data- 属性记"遥控器逻辑"。',
    '记不住的词随时回来查，点任意知识点的「关键词」芯片可直达。',
    '查一个类名的最快方法：浏览器里按 F12 → 选中元素 → 看 Styles 面板，能看到它具体改了哪个属性。'
  ],
  practice: {
    t: '实训：用词典"拆解"一个真实示例',
    d: '打开第 2 章 2.5 的"W3School 首页"示例，把里面所有关键词芯片逐个点开、读一遍。目标是：读完每个词条，能说出"这个类在这里负责做什么"。',
    steps: [
      '挑一个包含 5 个以上关键词芯片的知识点，从上到下依次点开每个芯片。',
      '对每个词条，先看"白话解释"，再看"原生对照"，最后回到示例里找它是哪一块。',
      '自测：遮住解释，只看类名说作用——说不出就再看一遍。',
      '（进阶）把其中 3 个类名换成另一种写法实现同样效果（如 col-md-8 换成 col-md-9），观察变化。'
    ]
  }
});

/* ============================ C1 ============================ */
window.BS_GLOSSARY.push({
  id: 'C1',
  cat: '起步与全局',
  icon: 'bi-rocket-takeoff',
  desc: '页面最开头要写的东西：怎么把 Bootstrap "请"进页面、屏幕尺寸怎么分档——这些是所有章节的共同前提。',
  items: [
    {
      n: 'viewport（视口标签）',
      d: '写在 <code>&lt;head&gt;</code> 里的一行 meta：告诉手机浏览器"按设备真实宽度排版，别假装自己是电脑再缩小"。少了它，所有响应式类（col-md-*、d-lg-none 之类）都会失效。',
      u: '<meta name="viewport" content="width=device-width, initial-scale=1">',
      nat: '它不是 Bootstrap 的发明——任何现代网页（原生也好）都要写它。可以理解为"响应式的总开关"。',
      tip: '"为什么我把窗口拉窄了没变化？"——第一件事先检查有没有这行。',
      ref: '1.5'
    },
    {
      n: 'CDN',
      d: '别人服务器上放好的现成文件，用一行 URL 直接引用，不占本地空间。国内推荐 <b>npmmirror</b>（阿里）、<b>BootCDN</b>、<b>Staticfile</b>；jsDelivr 在国内时好时坏，学习阶段不建议依赖。',
      u: '<link rel="stylesheet" href="https://cdn.staticfile.net/twitter-bootstrap/5.3.8/css/bootstrap.min.css">',
      tip: '练手、做 demo 用 CDN 省事；正式项目建议下载到本地或走 npm 打包，不受对方服务器影响。',
      ref: '1.4'
    },
    {
      n: 'CSS / JS 引入位置',
      d: '两条铁律：<b>CSS 放 &lt;head&gt; 里</b>（先把"衣服"穿好，避免页面裸奔一下再变装）；<b>JS 放 &lt;/body&gt; 前</b>（等页面结构渲染完再执行，插件才不会找不到元素）。',
      u: '<head>\n  <link rel="stylesheet" href="bootstrap.min.css">\n</head>\n<body>\n  …页面内容…\n  <script src="bootstrap.bundle.min.js"><\/script>\n</body>',
      nat: '和你平时写原生项目完全一样——&lt;script&gt; 放底部的老习惯，这里继续沿用。',
      tip: '顺序写反的典型症状：样式闪一下才生效 / 控制台报"找不到元素"。',
      ref: '1.3'
    },
    {
      n: 'bootstrap.min.css',
      d: 'Bootstrap 的"样式总仓库"：一个文件装着全部 CSS 类（栅格、按钮、卡片……）。min 是压缩版——体积小、机器读的，人不用读。',
      u: '<link rel="stylesheet" href="assets/vendor/bootstrap.min.css">',
      nat: '可以把它当成"世界上最完善的一份别人的 style.css"，你只会用到它定义好的类名，不直接改这个文件。',
      tip: '想改样式，永远写在<b>自己的 CSS 文件里</b>去覆盖；直接改它，升级版本就被冲掉。',
      ref: '1.4'
    },
    {
      n: 'bootstrap.bundle.min.js',
      d: '全部交互插件（下拉、模态框、轮播、折叠……）的打包文件。<b>bundle 版已内含 Popper</b>（负责下拉菜单/提示框的定位计算），不需要单独再引。',
      u: '<script src="assets/vendor/bootstrap.bundle.min.js"><\/script>',
      nat: '相当于把你以前写的十几个交互脚本"打包升级"成一个，还附带了键盘操作、无障碍支持。',
      tip: '只做静态排版可以不引 JS；要用 data-bs-* 属性或 bootstrap.Modal 这类功能时，它是必需的。',
      ref: '1.4'
    },
    {
      n: 'data-bs-theme',
      d: '挂在 <code>&lt;html&gt;</code> 或任意元素上的"深浅色开关"：写成 dark，这个范围内所有组件自动切换深色配色；不写或写 light 就是浅色。',
      u: '<html data-bs-theme="dark">\n\n<!-- 也可以只让一块区域变深色 -->\n<div data-bs-theme="dark" class="p-3">深色小岛</div>',
      nat: '原生你得为深色写一整套 CSS；Bootstrap 用"CSS 变量整套换值"的方式，一行属性搞定。',
      tip: '5.3 里用它替代旧写法 .navbar-dark / .navbar-light（后者已被删除）。',
      ref: '6.3.7'
    },
    {
      n: 'container',
      d: '页面内容的"相框"：居中摆放 + 两侧自动留白，宽度随屏幕分 6 档变化（&lt;576 全宽、≥576 是 540px、≥768 是 720px……≥1400 是 1320px）。',
      u: '<div class="container">页面内容</div>',
      nat: '原生：<code>width:100%; max-width:1140px; margin:0 auto; padding:0 12px;</code>——而且还只有一档。container 帮你分了六档。',
      tip: 'container 不要互相嵌套（container 里再放 container）。整页主体用一个就够。',
      ref: '2.3.1'
    },
    {
      n: 'container-fluid',
      d: '永远占满 100% 宽度（两侧只留一点点内边距），专门做"通栏"：全宽横幅、通条页脚、满屏地图。',
      u: '<div class="container-fluid">通栏内容</div>',
      nat: '原生：<code>width: 100%;</code>。',
      tip: '常见搭配：横幅用 fluid，正文换回 container——"一宽一窄"是版面呼吸感的来源。',
      ref: '2.3.1'
    },
    {
      n: 'container-{断点}',
      d: '"从某个尺寸开始才收窄成固定宽度"。例如 container-md：md 以下全宽，md 及以上才居中变成 720/960/1140px 那几档。',
      u: '<div class="container-md">md 以下全宽，md 以上居中收窄</div>',
      re: '^container-(sm|md|lg|xl|xxl)$',
      ref: '2.3.1'
    },
    {
      n: '断点 sm / md / lg / xl / xxl',
      d: '屏幕宽度的五道分档线：<b>sm ≥576、md ≥768、lg ≥992、xl ≥1200、xxl ≥1400</b>（单位 px）。类名里带哪个中缀，就从哪个尺寸"起"生效，而且会向上继承（col-md-6 在 lg 也生效）。',
      u: '<div class="col-12 col-md-6 col-lg-4">…</div>',
      nat: '原生：<code>@media (min-width: 768px) { … }</code>——每个断点都要自己写一段；Bootstrap 把它消化进了类名中缀。',
      tip: '记忆：断点越小越"靠近手机"；类名从手机往大屏写，一路"升级"。',
      ref: '2.2'
    },
    {
      n: '移动优先（mobile first）',
      d: 'Bootstrap 的默认样式先满足小屏；大屏的类是对小屏的"覆盖升级"。所以 col-12 col-md-6 的读法是："一直是 12 份，等 md 到了改成 6 份"。',
      tip: '这解释了为什么第二个类要写 col-md-6 而不是 col-6——col-6 会在手机上也占一半。',
      ref: '2.2'
    },
    {
      n: '工具类 vs 组件',
      d: '<b>工具类（utility）</b>只管一件事：mt-3 只加下外边距、d-flex 只改显示方式——像乐高散件；<b>组件（component）</b>是一整套结构 + 样式 + 交互：navbar、card、modal——像拼好的成品件。两边经常混着用（卡片里塞工具类）。',
      tip: '查询路径：类名查"工具类"页（Utilities），组件查"组件"页（Components）。',
      ref: '4.1'
    },
    {
      n: 'Bootstrap Icons（图标库）',
      d: '官方配套的免费图标库（2000+ 个）。用法：先引入图标 CSS，再写 <code>&lt;i class="bi bi-图标名"&gt;&lt;/i&gt;</code>。本手册里所有小图标都来自它。',
      u: '<i class="bi bi-star-fill"></i>\n\n<!-- 图标名可以在 icons.getbootstrap.com 上搜 -->',
      tip: '忘了图标叫什么？去 icons.getbootstrap.com 搜中文关键词（支持搜"star""用户"等），点一下就复制。',
      ref: '6.10'
    }
  ]
});

/* ============================ C2 ============================ */
window.BS_GLOSSARY.push({
  id: 'C2',
  cat: '栅格系统',
  icon: 'bi-grid-1x2',
  desc: '布局的"地基"类名。记住一个画面：一行 = 12 格的蛋糕，类名就是"怎么切"的指令。',
  items: [
    {
      n: 'row（行）',
      d: '12 列蛋糕的"画布"。row 自带两个动作：① 用负边距抵消容器的内边距；② 让内部自动变成 flex 布局（子元素默认一行排开、可换行）。列必须直接写在 row 里。',
      u: '<div class="row g-3">\n  <div class="col">…</div>\n</div>',
      nat: '原生：<code>display:flex; flex-wrap:wrap; margin-left:-12px; margin-right:-12px;</code>——你自己写的 flex 容器 ≈ row。',
      tip: 'row 的"直接子元素"应当只有 col（列），别把标题、文字直接塞进去。',
      ref: '2.1'
    },
    {
      n: 'col',
      d: '"剩下的空间大家平分"。有几个 col 就分几份——3 个各 1/3，5 个各 1/5。想加一列？直接加一个 <code>&lt;div class="col"&gt;</code>，全部自动重分，一个类名都不用改。',
      u: '<div class="row">\n  <div class="col">1/3</div>\n  <div class="col">1/3</div>\n  <div class="col">1/3</div>\n</div>',
      ref: '2.3.3'
    },
    {
      n: 'col-1 ~ col-12（固定份数）',
      d: '"这一列固定占 n 份"。col-4 = 占三分之一，col-6 = 占一半。数字就是"从 12 里拿几份"。',
      u: '<div class="col-6">一半</div>\n<div class="col-6">另一半</div>',
      re: '^col-(?:[1-9]|1[0-2])$',
      tip: '同一行的份数加起来 ≤ 12；超出的列自动换到下一行（正常行为）。',
      ref: '2.1'
    },
    {
      n: 'col-{断点}-{份数}（响应式列）',
      d: '最常用的写法："到某个屏幕尺寸起，这列占几份"。col-md-6 的完整含义：手机时默认整行，≥768px 起占一半，而且更大的屏也保持一半（除非写 col-lg-* 再覆盖）。',
      u: '<div class="col-12 col-md-6 col-lg-3">\n  手机一列 / 平板两列 / 电脑四列\n</div>',
      re: '^col-(sm|md|lg|xl|xxl)-(?:[1-9]|1[0-2])$',
      tip: '单词顺序：断点在中间、份数在最后。<b>col-md-6 对，col-6-md 错</b>。',
      ref: '2.2'
    },
    {
      n: 'col-auto',
      d: '"宽度由内容决定"的列：内容多宽它多宽，剩下的空间全归其他 col。常见于"图标 + 文字 + 按钮"里的图标列、表单旁的提交按钮列。',
      u: '<div class="row">\n  <div class="col-auto">刚好包住内容</div>\n  <div class="col">占满剩余空间</div>\n</div>',
      re: '^col-(?:(?:sm|md|lg|xl|xxl)-)?auto$',
      ref: '2.3.4'
    },
    {
      n: 'row-cols-{n}（每行几个）',
      d: '写在 <b>row 上</b>的"每行放几个"：row-cols-2 = 每行 2 个（每个自动占一半），row-cols-md-3 = md 起每行 3 个。做"卡片墙"的最佳写法——改数量只改一个地方。',
      u: '<div class="row row-cols-2 row-cols-md-3 g-3">\n  <div class="col">卡片</div>\n  <div class="col">卡片</div>\n  …\n</div>',
      re: '^row-cols-(?:(?:sm|md|lg|xl|xxl)-)?[1-6]$',
      tip: '和 col-4 的区别：row-cols 管"一行放几个"，col-4 管"一列占几份"。做卡片墙优先前者。',
      ref: '2.3.8'
    },
    {
      n: 'g-0 ~ g-5（槽宽）',
      d: '列与列之间的缝隙（gutter），写在 row 上：g-3 是最常用的起步值；g-0 完全无缝（做"紧贴拼接"布局时才用）。数值越大缝越宽。',
      u: '<div class="row g-4">…</div>',
      re: '^g[0-5]$',
      tip: '新手最常忘加 g-*，导致所有卡片糊成一片。养成习惯：写 row 先加 g-3。',
      ref: '2.4.2'
    },
    {
      n: 'gx-{n} / gy-{n}',
      d: '只控制缝隙的"方向"：<b>gx</b> 管左右缝（横向 gap），<b>gy</b> 管上下缝（换行后行与行之间）。',
      u: '<div class="row gx-5 gy-3">…</div>',
      re: '^g[xy]-[0-5]$',
      nat: '对应原生 CSS 的 <code>column-gap</code> / <code>row-gap</code>。',
      ref: '2.4.2'
    },
    {
      n: 'offset-{n}（偏移）',
      d: '"放之前先空出 n 份"。居中公式：12 份里空一半——col-4 + offset-4（=(12−4)÷2）。也可以加断点：offset-md-4 表示 md 起才空 4 份。',
      u: '<div class="col-4 offset-md-4">居中的标题</div>',
      re: '^offset-(?:(?:sm|md|lg|xl|xxl)-)?(?:[0-9]|1[01])$',
      tip: '另一种"贴右"的思路：不用 offset，给左列加 ms-auto（2.4.3）。',
      ref: '2.3.7'
    },
    {
      n: 'order-{n} / order-first / order-last',
      d: '不改 HTML 顺序，只改视觉顺序：数字小的排前面；order-first 钉最前，order-last 钉最后。可加断点，例如 order-2 order-md-1（小屏排第二，md 起排第一）。',
      u: '<div class="col order-2 order-md-1">A（小屏在后）</div>',
      re: '^order-(?:(?:sm|md|lg|xl|xxl)-)?(?:[0-5]|first|last)$',
      tip: '典型场景：手机上"文字在上、图片在下"，电脑上左右对调——只用 order 翻转，HTML 不用动。',
      ref: '2.3.6'
    },
    {
      n: '嵌套栅格',
      d: '列里再放 row + col：里层是一块<b>全新的 12 份画布</b>，和外层份数无关。外层 8 份的列里，照样能再切 12 份。',
      u: '<div class="col-8">\n  <div class="row">\n    <div class="col-6">内左</div>\n    <div class="col-6">内右</div>\n  </div>\n</div>',
      tip: '内层一定要用新的 <code>&lt;div class="row"&gt;</code> 包起来，否则槽宽计算会错。',
      ref: '2.3.5'
    },
    {
      n: '12 列制',
      d: '为什么是 12 而不是 10？因为 12 能被 2、3、4、6 整除：一半、三等分、四等分、六等分全是整数份。所有"占几份"的类名都在这个体系里说话。',
      ref: '2.1'
    },
    {
      n: '自动换行',
      d: '一行里的列加起来超过 12 时，多出来的列顺位换到下一行——这是设计内的行为，不是 bug。',
      tip: '排查版式错乱时先数份数：加起来 ≤ 12 吗？',
      ref: '2.1'
    },
    {
      n: 'ms-auto / me-auto',
      d: 'auto 边距的"撑开"用法：ms-auto 把元素顶到最右（左侧自动占满），me-auto 顶到最左。栅格里的经典句式：<code>col-auto ms-auto</code> = 贴右。',
      u: '<div class="col-auto ms-auto">我贴到最右边</div>',
      nat: '原生：<code>margin-left: auto;</code>——ms 就是 margin-start（左）的缩写。',
      tip: '记忆：s 在左（start），e 在右（end）；谁加 auto，谁被"顶"向对侧。',
      ref: '2.4.3'
    }
  ]
});
