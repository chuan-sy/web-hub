/* ============================================================
   第 6 章 CSS 组件（上）6.1 - 6.7
   ============================================================ */
window.BS_DATA.push({
  id: 'ch6',
  num: '第 6 章',
  title: 'CSS 组件',
  accent: '#7c3aed',
  accentSoft: '#f2ecfe',
  icon: 'bi-boxes',
  intro: '组件 = 官方帮你做好的"半成品零件"：下拉菜单、导航条、卡片、轮播……你只要按它的"配方"（固定结构 + 固定类名）把 HTML 拼上，就自然拥有完整样式和交互。这一章是本册子最"实战"的部分。',
  goals: [
    '会用下拉菜单、导航、导航条这三件套做站点头部',
    '掌握徽章、分页、列表组、进度条等展示型组件',
    '会用卡片拼出资讯列表、商品墙',
    '认识 Bootstrap Icons 图标库并会使用',
    '会做按钮组、关闭按钮、媒体对象（flex 版）'
  ],
  docs: [
    { t: '官方组件总览', u: 'https://getbootstrap.com/docs/5.3/components/accordion/' },
    { t: '导航条 Navbar', u: 'https://getbootstrap.com/docs/5.3/components/navbar/' },
    { t: '卡片 Card', u: 'https://getbootstrap.com/docs/5.3/components/card/' },
    { t: 'Bootstrap Icons', u: 'https://icons.getbootstrap.com/' }
  ],
  sections: [
    {
      id: '6.1',
      t: '下拉菜单',
      group: true,
      d: '点一下按钮弹出一个小菜单。它需要 JavaScript 参与（本页已引好 bootstrap.bundle.min.js），结构必须按"三段式"写。',
      children: [
        {
          id: '6.1.1',
          t: '下拉菜单的基本用法',
          d: '三段式结构：① 外层 <code>.dropdown</code> 容器；② 触发按钮加 <code>.dropdown-toggle</code> 和 <code>data-bs-toggle="dropdown"</code>；③ 菜单 <code>.dropdown-menu</code>，里面每项 <code>.dropdown-item</code>。',
          demo:
            '<div class="dropdown">' +
            '<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">点我弹出菜单</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item" href="#">新建文件</a></li>' +
            '<li><a class="dropdown-item" href="#">打开文件</a></li>' +
            '<li><a class="dropdown-item" href="#">保存</a></li>' +
            '</ul></div>',
          tip: '图标和文字都行，但触发按钮必须有 <code>dropdown-toggle</code>（负责右下角那个小箭头）。菜单项推荐用 <code>&lt;a&gt;</code>，用按钮也行（加 <code>&lt;button class="dropdown-item"&gt;</code>）。'
        },
        {
          id: '6.1.2',
          t: '分裂式按钮下拉菜单',
          d: '"左半边直接执行、右半边弹菜单"的组合：外层 <code>.btn-group</code>，第二个按钮加 <code>.dropdown-toggle .dropdown-toggle-split</code>（它把箭头按钮收窄）。',
          demo:
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-success">保存</button>' +
            '<button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">更多操作</span></button>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item" href="#">另存为…</a></li>' +
            '<li><a class="dropdown-item" href="#">导出 PDF</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item text-danger" href="#">删除草稿</a></li>' +
            '</ul></div>' +
            '<p class="small text-body-secondary mt-2 mb-0">左边"保存"直接点；右边小箭头才弹菜单。</p>',
          tip: '箭头按钮里放了一个 <code>visually-hidden</code> 的文字"更多操作"——屏幕上看不见，但读屏软件会读，属于无障碍小细节。'
        },
        {
          id: '6.1.3',
          t: '菜单内容',
          d: '菜单里不只有菜单项：<code>.dropdown-header</code> 做分组标题、<code>.dropdown-divider</code> 画分隔线、<code>.dropdown-item-text</code> 放普通文字。',
          demo:
            '<div class="dropdown">' +
            '<button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">账户菜单</button>' +
            '<ul class="dropdown-menu" style="min-width:15rem">' +
            '<li><h6 class="dropdown-header">登录信息</h6></li>' +
            '<li><span class="dropdown-item-text small">chuan@example.com</span></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><h6 class="dropdown-header">操作</h6></li>' +
            '<li><a class="dropdown-item" href="#">个人资料</a></li>' +
            '<li><a class="dropdown-item" href="#">设置</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item text-danger" href="#">退出登录</a></li>' +
            '</ul></div>',
          tip: 'dropdown-divider 就是一条 <code>&lt;hr&gt;</code> 包在 li 里。给菜单设 min-width 可以治"菜单太窄字换行"的毛病。'
        },
        {
          id: '6.1.4',
          t: '对齐方式',
          d: '菜单默认向右下展开。给菜单加 <code>.dropdown-menu-end</code> 让它靠右对齐（不然会被浏览器右边"切掉"）；给容器换 <code>.dropup</code>（向上弹）、<code>.dropend</code>（向右弹）、<code>.dropstart</code>（向左弹）改方向。',
          demo:
            '<div class="d-flex flex-wrap gap-3">' +
            '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">默认（左下）</button>' +
            '<ul class="dropdown-menu"><li><a class="dropdown-item" href="#">菜单项一</a></li><li><a class="dropdown-item" href="#">菜单项二</a></li></ul></div>' +
            '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">dropup（向上）</button>' +
            '<ul class="dropdown-menu"><li><a class="dropdown-item" href="#">菜单项一</a></li><li><a class="dropdown-item" href="#">菜单项二</a></li></ul></div>' +
            '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">dropstart（向左）</button>' +
            '<ul class="dropdown-menu"><li><a class="dropdown-item" href="#">菜单项一</a></li><li><a class="dropdown-item" href="#">菜单项二</a></li></ul></div>' +
            '<div class="dropdown ms-auto"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">菜单靠右对齐</button>' +
            '<ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="#">靠右对齐的菜单项</a></li><li><a class="dropdown-item" href="#">第二项</a></li></ul></div>' +
            '</div>',
          tip: '把容器 class 从 <code>dropup</code> 换成 <code>dropdown</code> 就能切换方向，菜单结构完全不用动。'
        },
        {
          id: '6.1.5',
          t: '选中和禁用菜单项',
          d: '当前选中的项加 <code>.active</code>（蓝底白字）；不可用的项加 <code>.disabled</code>（变灰、点不动）。',
          demo:
            '<div class="dropdown">' +
            '<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">语言：简体中文</button>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item active" href="#" aria-current="true">简体中文</a></li>' +
            '<li><a class="dropdown-item" href="#">English</a></li>' +
            '<li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">日本語（即将上线）</a></li>' +
            '</ul></div>',
          tip: '<code>.active</code> 用 <code>aria-current="true"</code>、<code>.disabled</code> 用 <code>aria-disabled="true"</code> 来告诉读屏软件——养成"视觉 + 语义"双标注的习惯。'
        },
        {
          id: '6.1.6',
          t: '深色菜单项',
          d: '深色导航上用白色菜单更协调。旧写法是给菜单加 <code>.dropdown-menu-dark</code>（5.3 已标记为"旧写法"），新写法是给菜单加 <code>data-bs-theme="dark"</code>——它会自动把字体、边框、悬停色全部倒过来。',
          demo:
            '<div class="d-flex flex-wrap gap-3 p-3 rounded-3" style="background:#1f2430">' +
            '<div class="dropdown">' +
            '<button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">data-bs-theme="dark"（推荐）</button>' +
            '<ul class="dropdown-menu" data-bs-theme="dark">' +
            '<li><a class="dropdown-item" href="#">个人资料</a></li>' +
            '<li><a class="dropdown-item" href="#">消息中心</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item" href="#">退出</a></li>' +
            '</ul></div>' +
            '<div class="dropdown">' +
            '<button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">旧写法 .dropdown-menu-dark</button>' +
            '<ul class="dropdown-menu dropdown-menu-dark">' +
            '<li><a class="dropdown-item active" href="#">仍可用但不再推荐</a></li>' +
            '<li><a class="dropdown-item" href="#">菜单项</a></li>' +
            '</ul></div>' +
            '</div>',
          hint: '两个菜单都点开对比：效果几乎一样，但新写法更"未来-proof"',
          tip: '<b>5.3 版本要点：</b>官方引入了全站颜色模式（data-bs-theme），很多旧的 -dark 后缀类（dropdown-menu-dark、navbar-dark 等）都被它取代。答题和写代码都优先用新写法。'
        }
      ]
    },
    {
      id: '6.2',
      t: '导航',
      group: true,
      d: '一组链接的"导航排版"，四种基础形态：基础、选项卡、胶囊、垂直，外加对齐方式和二级菜单。',
      children: [
        {
          id: '6.2.1',
          t: '导航基础样式',
          d: '最素的导航：<code>.nav</code> 容器 + 每个链接 <code>.nav-link</code>，<code>.active</code> 表示当前页、<code>.disabled</code> 禁用。默认横排、无边框，是后面所有变体的"内核"。',
          demo:
            '<ul class="nav">' +
            '<li class="nav-item"><a class="nav-link active" href="#" aria-current="page">首页</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">课程</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">资料</a></li>' +
            '<li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">会员（禁用）</a></li>' +
            '</ul>',
          tip: '基础 nav 的样子和普通链接差别不大——它的价值在于"统一结构"，加上 nav-tabs / nav-pills 立刻变身。'
        },
        {
          id: '6.2.2',
          t: '选项卡导航',
          d: '给 <code>.nav</code> 再加一个 <code>.nav-tabs</code>，就是浏览器里那种"文件夹页签"的样式，当前项自动带白底和边框，和下方内容"连成一体"。',
          demo:
            '<ul class="nav nav-tabs mb-3">' +
            '<li class="nav-item"><a class="nav-link active" href="#">待发货</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">运输中</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">已完成</a></li>' +
            '<li class="nav-item"><a class="nav-link disabled" href="#">已取消</a></li>' +
            '</ul>' +
            '<div class="border rounded-bottom p-3 small text-body-secondary" style="margin-top:-1rem;padding-top:1.5rem!important">页签下方的"内容区"。选项卡导航只负责"长得像页签"，真正的切换动作要配 7.13 的"选项卡插件"。</div>',
          tip: 'nav-tabs 常和 tab 插件配合：链接加 <code>data-bs-toggle="tab"</code> 就能点击切换内容（第 7 章 7.13 细讲）。'
        },
        {
          id: '6.2.3',
          t: 'Pills 导航',
          d: '换成 <code>.nav-pills</code>，当前项变成"圆角药丸"高亮。还能加 <code>.nav-fill</code>（每项等宽铺满）或 <code>.nav-justified</code>（等宽且文字居中）做"分段选择器"。',
          demo:
            '<ul class="nav nav-pills mb-3">' +
            '<li class="nav-item"><a class="nav-link active" href="#">最新</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">最热</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">收藏夹</a></li>' +
            '</ul>' +
            '<div class="small text-body-secondary mb-1">nav-pills + nav-fill（等宽铺满）：</div>' +
            '<ul class="nav nav-pills nav-fill mb-2">' +
            '<li class="nav-item"><a class="nav-link active" href="#">按月付费</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">按年付费（省 20%）</a></li>' +
            '</ul>' +
            '<div class="small text-body-secondary mb-1">nav-pills + nav-justified（等宽且居中）：</div>' +
            '<ul class="nav nav-pills nav-justified">' +
            '<li class="nav-item"><a class="nav-link active" href="#">简单</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">专业</a></li>' +
            '</ul>',
          tip: 'pills 做"筛选器/分段选择"特别合适：选中态是一整块圆角背景，对比明显，比 tabs 更现代。'
        },
        {
          id: '6.2.4',
          t: '垂直导航',
          d: '给导航加 <code>.flex-column</code> 就竖起来。常见于侧边栏目录、设置页左侧菜单。也能做成"手机竖排、电脑横排"：<code>flex-column flex-md-row</code>。',
          demo:
            '<ul class="nav flex-column" style="max-width:220px">' +
            '<li class="nav-item"><a class="nav-link active" href="#">栅格系统</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">CSS 布局</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">工具类</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">表单</a></li>' +
            '</ul>',
          tip: '竖排导航一般让 <code>.nav-link</code> 自己撑满宽度（默认就会），鼠标悬停背景铺满整行，点到哪行都很舒服。'
        },
        {
          id: '6.2.5',
          t: '导航对齐方式',
          d: '让导航整体居中或靠右：加 <code>.justify-content-center / .justify-content-end</code>。想要"占满 + 均分"就用上一节的 nav-fill / nav-justified。',
          demo:
            '<ul class="nav nav-tabs justify-content-center mb-2"><li class="nav-item"><a class="nav-link active" href="#">居中 1</a></li><li class="nav-item"><a class="nav-link" href="#">居中 2</a></li><li class="nav-item"><a class="nav-link" href="#">居中 3</a></li></ul>' +
            '<ul class="nav nav-tabs justify-content-end"><li class="nav-item"><a class="nav-link active" href="#">靠右 1</a></li><li class="nav-item"><a class="nav-link" href="#">靠右 2</a></li></ul>',
          tip: '具体对齐方式由 justify-content 系列决定，这对 nav、卡片、按钮组全都适用——工具类是万金油。'
        },
        {
          id: '6.2.6',
          t: '导航二级菜单',
          d: '把导航项和下拉菜单结合：<code>li.nav-item.dropdown</code> 里放 <code>a.nav-link.dropdown-toggle</code> + 下拉菜单，就是带二级菜单的导航。',
          demo:
            '<ul class="nav nav-pills">' +
            '<li class="nav-item"><a class="nav-link active" href="#">首页</a></li>' +
            '<li class="nav-item dropdown">' +
            '<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">教程分类</a>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item" href="#">HTML 基础</a></li>' +
            '<li><a class="dropdown-item" href="#">Bootstrap 实战</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item" href="#">全部教程</a></li>' +
            '</ul></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">关于</a></li>' +
            '</ul>',
          tip: '导航里状态类别写乱：菜单容器用 <code>nav-item dropdown</code>，触发链接用 <code>nav-link dropdown-toggle</code>。'
        },
        {
          id: '6.2.7',
          t: '面包屑导航',
          d: '"首页 / 教程 / 工具类"这种路径导航用 <code>.breadcrumb</code> + <code>.breadcrumb-item</code>，当前页加 <code>.active</code>。分隔符默认是斜杠，可以用 CSS 变量换（如 <code>--bs-breadcrumb-divider</code>）。',
          demo:
            '<nav aria-label="breadcrumb">' +
            '<ol class="breadcrumb mb-2">' +
            '<li class="breadcrumb-item"><a href="#">首页</a></li>' +
            '<li class="breadcrumb-item"><a href="#">教程</a></li>' +
            '<li class="breadcrumb-item active" aria-current="page">工具类</li>' +
            '</ol></nav>' +
            '<nav aria-label="breadcrumb">' +
            '<ol class="breadcrumb" style="--bs-breadcrumb-divider: \'>\'">' +
            '<li class="breadcrumb-item"><a href="#">首页</a></li>' +
            '<li class="breadcrumb-item"><a href="#">第 6 章</a></li>' +
            '<li class="breadcrumb-item active">面包屑导航</li>' +
            '</ol></nav>',
          hint: '两条面包屑，对比分隔符：默认斜杠 vs 自定义">"',
          tip: '面包屑要放在 <code>&lt;nav aria-label="breadcrumb"&gt;</code> 里——语义明确，读屏软件会把它读成"面包屑导航"。'
        }
      ]
    },
    {
      id: '6.3',
      t: '导航条',
      group: true,
      d: '网站顶部的"门面担当"。导航条 = 导航 + 品牌 + 响应式折叠的"套装"，也是全书结构最复杂的组件，建议对照官方文档慢慢拼。',
      children: [
        {
          id: '6.3.1',
          cmp: [
            {
              label: '导航条：原生 40 行 vs 一层结构',
              native: '<!-- 原生：结构 + 样式 + 小屏折叠全要自己来（约 40 行） -->\n<nav class="van-nav"> … </nav>\n\n.van-nav { display: flex; align-items: center; gap: 24px;\n  padding: 12px 24px; background: #212529; color: #fff; }\n/* 还没算：汉堡按钮、折叠动画、打开状态、aria 属性…… */',
              bs: '<nav class="navbar navbar-expand-md bg-body-tertiary">\n  <a class="navbar-brand" href="#">我的站点</a>\n  <button class="navbar-toggler" data-bs-toggle="collapse"\n          data-bs-target="#nav1"><span class="navbar-toggler-icon"></span></button>\n  <div class="collapse navbar-collapse" id="nav1">\n    <ul class="navbar-nav">…</ul>\n  </div>\n</nav>',
              note: '"何时折叠成汉堡、折叠里装什么"全由 navbar-expand-* 一个类决定。'
            }
          ],
          t: '导航条的基本用法',
          d: '配方：<code>.navbar</code> 打底；<code>.navbar-expand-lg</code> 决定"从哪个屏幕宽度起横向展开"；<code>.navbar-brand</code> 放站名；折叠按钮 <code>.navbar-toggler</code>；被折叠的内容 <code>.collapse.navbar-collapse</code>；链接列表 <code>.navbar-nav</code>。',
          demo:
            '<nav class="navbar navbar-expand-md bg-body-tertiary rounded px-2">' +
            '<div class="container-fluid">' +
            '<a class="navbar-brand" href="#">我的站点</a>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav631" aria-controls="nav631" aria-expanded="false" aria-label="展开导航">' +
            '<span class="navbar-toggler-icon"></span></button>' +
            '<div class="collapse navbar-collapse" id="nav631">' +
            '<ul class="navbar-nav">' +
            '<li class="nav-item"><a class="nav-link active" href="#">首页</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">功能</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">价格</a></li>' +
            '</ul>' +
            '</div></div></nav>',
          hint: '把预览区拉窄到 768 以下，右侧出现"汉堡按钮"，点它可以展开菜单',
          tip: '<code>navbar-expand-md</code> 的 md 就是"展开断点"：屏幕 ≥768px 时平铺，小于时折叠成汉堡。不想折叠就用 <code>navbar-expand</code>，永远不折叠。'
        },
        {
          id: '6.3.2',
          t: '品牌图标',
          d: '<code>navbar-brand</code> 里可以放图片 logo（用 <code>img</code> 或 <code>svg</code>），公司名 + 图标一左一右排。也可以配 Bootstrap Icons 当简易 logo。',
          demo:
            '<nav class="navbar bg-body-tertiary rounded px-3">' +
            '</nav>',
          code:
            '<a class="navbar-brand" href="#">\n' +
            '  <img src="images/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">\n' +
            '  品牌名称\n' +
            '</a>',
          js:
            "// 动态插入带图标的品牌区，方便你直接改\n" +
            "var nav = stage.querySelector('nav');\n" +
            "nav.innerHTML = '<span class=\"navbar-brand mb-0 h1\"><i class=\"bi bi-bootstrap-fill text-primary me-1\"></i>品牌名称</span>' +\n" +
            "  '<span class=\"navbar-text small ms-auto\">版本 v5.3.8</span>';",
          tip: '图片 logo 记得设 <code>width</code>/<code>height</code>，否则加载时会"跳一下"（布局抖动）。'
        },
        {
          id: '6.3.3',
          t: '导航条上的链接',
          d: '链接列表用 <code>ul.navbar-nav</code>，每项 <code>li.nav-item</code> + <code>a.nav-link</code>。<code>.active</code> 高亮当前页、<code>.disabled</code> 禁用。给 ul 加 <code>.me-auto</code> 可以把它"顶到左边"，右侧再放别的元素。',
          demo:
            '<nav class="navbar navbar-expand bg-body-tertiary rounded px-3">' +
            '<ul class="navbar-nav me-auto">' +
            '<li class="nav-item"><a class="nav-link active" href="#">首页</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">教程</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">关于</a></li>' +
            '<li class="nav-item"><a class="nav-link disabled" href="#">停用项</a></li>' +
            '</ul>' +
            '<span class="navbar-text small">me-auto 把右侧区域推开了</span>' +
            '</nav>',
          tip: '导航条上的链接"高度"是自动撑满的，鼠标悬停时背景会填满整条——这也是导航条和普通导航的视觉区别之一。'
        },
        {
          id: '6.3.4',
          t: '导航条上的表单',
          d: '搜索框放进导航条：<code>&lt;form class="d-flex"&gt;</code> 包住 <code>input.form-control</code> 和按钮，右侧用 <code>ms-auto</code> 顶过去。想要"输入框 + 按钮无缝拼接"，用 input-group。',
          demo:
            '<nav class="navbar bg-body-tertiary rounded px-3">' +
            '<a class="navbar-brand" href="#">书库</a>' +
            '<form class="d-flex ms-auto" role="search">' +
            '<input class="form-control me-2" type="search" placeholder="搜索书名 / 作者" aria-label="搜索">' +
            '<button class="btn btn-outline-success" type="submit">搜索</button>' +
            '</form></nav>',
          tip: '给 form 加 <code>role="search"</code>，读屏用户能快速定位到搜索框。'
        },
        {
          id: '6.3.5',
          t: '导航条上的文本',
          d: '纯文字用 <code>.navbar-text</code>（自动垂直居中、颜色适配），常配 <code>ms-auto</code> 推到右边，例如显示"当前用户 / 版本号 / 公告"。',
          demo:
            '<nav class="navbar bg-body-tertiary rounded px-3">' +
            '<span class="navbar-brand">控制台</span>' +
            '<span class="navbar-text ms-auto small">' +
            '<i class="bi bi-person-circle me-1"></i>欢迎，川同学' +
            '</span></nav>',
          tip: 'navbar-text 和普通 span 的区别：它自带居中与颜色处理，在深色导航条里也会自动变白（配 data-bs-theme="dark"）。'
        },
        {
          id: '6.3.6',
          t: '固定导航条',
          d: '三种"钉住"方式：<code>.fixed-top</code> 永远钉在窗口顶部（页面滚动它不动）；<code>.fixed-bottom</code> 钉在窗口底部；<code>.sticky-top</code> 平时跟随滚动、到达顶部后粘住（更温和，不遮内容）。',
          demo:
            '<div class="d-flex gap-2 flex-wrap small mb-2">' +
            '<span class="badge text-bg-primary">下面演示区里：普通导航 vs sticky-top</span></div>' +
            '<div class="demo-scroll border rounded" style="max-height:180px">' +
            '<div class="sticky-top bg-warning bg-opacity-75 small px-2 py-1">.sticky-top（滚到这里就粘住）</div>' +
            '<p class="small px-2 mb-2 pt-2">往下滚动……</p><p class="small px-2 mb-2">继续滚动……</p><p class="small px-2 mb-2">注意上面的黄条一直粘在顶部。</p><p class="small px-2 mb-2">快到底了。</p><p class="small px-2 mb-0">到底啦。</p>' +
            '</div>',
          tip: '<b>实战注意：</b>用 fixed-top 时，要给 body 加上"等于导航条高度"的 padding-top（约 56px），否则页面顶部内容会被导航条盖住——这是最常见的"翻车"点。'
        },
        {
          id: '6.3.7',
          t: '导航条配色方案',
          d: '浅色导航是默认色；深色导航在 5.3 推荐用 <code>data-bs-theme="dark"</code>（旧写法 <code>.navbar-dark</code> 仍可用但已不推荐；<code>.navbar-light</code> 已被移除）。配任意背景色（如 bg-primary + data-bs-theme="dark"）都能自动匹配文字颜色。',
          demo:
            '<div class="vstack gap-2">' +
            '<nav class="navbar bg-body-tertiary rounded px-3"><span class="navbar-brand mb-0">默认浅色导航</span><a href="#" class="nav-link ms-auto">链接</a></nav>' +
            '<nav class="navbar rounded px-3" data-bs-theme="dark" style="background:#1f2430"><span class="navbar-brand mb-0">深色导航（data-bs-theme="dark"）</span><a href="#" class="nav-link ms-auto">链接</a></nav>' +
            '<nav class="navbar bg-primary rounded px-3" data-bs-theme="dark"><span class="navbar-brand mb-0">彩色导航（bg-primary + dark 主题）</span><a href="#" class="nav-link ms-auto">链接</a></nav>' +
            '</div>',
          tip: '记忆更新：老教程里的 <code>.navbar-dark bg-dark</code> 双类写法，在 5.3 里合并成了 <code>bg-dark + data-bs-theme="dark"</code>。'
        },
        {
          id: '6.3.8',
          t: '响应式导航条',
          d: '核心类就是 <code>navbar-expand-{断点}</code>：小于断点时自动折叠成汉堡按钮，点击展开/收起。数据属性 <code>data-bs-toggle="collapse"</code> + <code>data-bs-target="#id"</code> 负责关联折叠区——把这两处配好，交互官方全包。',
          demo:
            '<nav class="navbar navbar-expand-lg bg-body-tertiary rounded px-3">' +
            '<div class="container-fluid">' +
            '<a class="navbar-brand fw-bold" href="#">响应式导航</a>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav638" aria-controls="nav638" aria-expanded="false" aria-label="切换导航">' +
            '<span class="navbar-toggler-icon"></span></button>' +
            '<div class="collapse navbar-collapse" id="nav638">' +
            '<ul class="navbar-nav me-auto mb-2 mb-lg-0">' +
            '<li class="nav-item"><a class="nav-link active" href="#">首页</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#">文档</a></li>' +
            '<li class="nav-item dropdown">' +
            '<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">更多</a>' +
            '<ul class="dropdown-menu"><li><a class="dropdown-item" href="#">示例</a></li><li><a class="dropdown-item" href="#">博客</a></li></ul></li>' +
            '</ul>' +
            '<form class="d-flex" role="search">' +
            '<input class="form-control form-control-sm me-2" type="search" placeholder="搜索">' +
            '<button class="btn btn-sm btn-outline-primary" type="submit">搜</button>' +
            '</form></div></div></nav>',
          hint: '拉宽 → 完整横向导航；拉窄 → 汉堡按钮（点开试试）',
          tip: '一个页面上有多个折叠区时，<code>id</code> 必须各不相同（我们这里叫 nav631 / nav638），否则按钮会"控错对象"。'
        }
      ]
    },
    {
      id: '6.4',
      t: '徽章',
      d: '徽章（badge）是做"小标签/数字角标"的。基础类是 <code>.badge</code> + 颜色（推荐 <code>text-bg-*</code>）；用 <code>.rounded-pill</code> 变胶囊形。放进按钮做"未读数"时，用绝对定位 + translate-middle 挂到角上。',
      demo:
        '<div class="d-flex flex-wrap gap-2 mb-3 align-items-center">' +
        '<span class="badge text-bg-primary">新品</span>' +
        '<span class="badge text-bg-success">已完成</span>' +
        '<span class="badge text-bg-danger">紧急</span>' +
        '<span class="badge text-bg-warning">待处理</span>' +
        '<span class="badge text-bg-secondary rounded-pill">99+</span>' +
        '<span class="badge bg-primary-subtle text-primary-emphasis">浅色系徽章</span>' +
        '</div>' +
        '<div class="d-flex gap-4">' +
        '<button type="button" class="btn btn-primary position-relative">消息' +
        '<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">4</span></button>' +
        '<button type="button" class="btn btn-outline-secondary position-relative">通知' +
        '<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"><span class="visually-hidden">有新通知</span></span></button>' +
        '</div>',
      tip: '<b>文字 → 徽章</b>只需要改一行：把 span 的 inline 样式换成 badge 类；反过来也成立。角标只写一个空 span + 圆点样式就行（第二个例子）。'
    },
    {
      id: '6.5',
      t: '分页导航',
      d: '分页用 <code>.pagination</code>（外层）+ <code>.page-item</code> + <code>.page-link</code>。当前页加 <code>.active</code>、不可用加 <code>.disabled</code>。尺寸有 <code>.pagination-lg / .pagination-sm</code>，对齐用 justify-content 类。',
      demo:
        '<nav aria-label="分页示例">' +
        '<ul class="pagination justify-content-center mb-3">' +
        '<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">上一页</a></li>' +
        '<li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>' +
        '<li class="page-item"><a class="page-link" href="#">2</a></li>' +
        '<li class="page-item"><a class="page-link" href="#">3</a></li>' +
        '<li class="page-item"><span class="page-link">…</span></li>' +
        '<li class="page-item"><a class="page-link" href="#">12</a></li>' +
        '<li class="page-item"><a class="page-link" href="#">下一页</a></li>' +
        '</ul></nav>' +
        '<div class="d-flex align-items-center justify-content-center gap-3">' +
        '<ul class="pagination pagination-sm mb-0">' +
        '<li class="page-item active"><a class="page-link" href="#">1</a></li>' +
        '<li class="page-item"><a class="page-link" href="#">2</a></li>' +
        '</ul>' +
        '<span class="small text-body-secondary">pagination-sm 小号</span>' +
        '</div>',
      tip: '"当前页"必须只有 .active 一个；"上一页/下一页"用到的 disabled 是 .page-item 上的类，别加到 .page-link 上。'
    },
    {
      id: '6.6',
      t: '列表组',
      group: true,
      d: '列表组（list-group）是"万能列表"：通知列表、设置项、消息列表……一个组件全包。',
      children: [
        {
          id: '6.6.1',
          t: '基础列表组',
          d: '外层 <code>ul.list-group</code>（或 div），每一项 <code>li.list-group-item</code>。去掉外边框用 <code>.list-group-flush</code>；改横向排列用 <code>.list-group-horizontal</code>。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6"><ul class="list-group mb-2"><li class="list-group-item">普通列表项一</li><li class="list-group-item">普通列表项二</li><li class="list-group-item">普通列表项三</li></ul>' +
            '<span class="small text-body-secondary">普通列表组（有边框和圆角）</span></div>' +
            '<div class="col-md-6"><ul class="list-group list-group-flush"><li class="list-group-item">flush 无外边框</li><li class="list-group-item">适合放进卡片里</li><li class="list-group-item">与容器无缝融合</li></ul>' +
            '<span class="small text-body-secondary">list-group-flush</span></div>' +
            '</div>' +
            '<div class="mt-3"><ul class="list-group list-group-horizontal"><li class="list-group-item">横排 1</li><li class="list-group-item">横排 2</li><li class="list-group-item">横排 3</li></ul>' +
            '<span class="small text-body-secondary">list-group-horizontal</span></div>',
          tip: '列表组放进卡片时用 flush，卡片自己已经有边框和圆角了，两层边框会显得很"脏"。'
        },
        {
          id: '6.6.2',
          t: '带徽章的列表组',
          d: '列表项里加徽章：给列表项加 <code>.d-flex justify-content-between align-items-center</code>，徽章就自动贴到右侧并垂直居中。',
          demo:
            '<ul class="list-group" style="max-width:420px">' +
            '<li class="list-group-item d-flex justify-content-between align-items-center">收件箱<span class="badge text-bg-primary rounded-pill">14</span></li>' +
            '<li class="list-group-item d-flex justify-content-between align-items-center">草稿<span class="badge text-bg-secondary rounded-pill">2</span></li>' +
            '<li class="list-group-item d-flex justify-content-between align-items-center">垃圾邮件<span class="badge text-bg-danger rounded-pill">99+</span></li>' +
            '</ul>',
          tip: '这就是"工具类拼组件"的典型：列表组负责"长得像列表"，flex 三件套负责"左右分布"。'
        },
        {
          id: '6.6.3',
          t: '链接列表组',
          d: '把列表项换成 <code>&lt;a&gt;</code> 或 <code>&lt;button&gt;</code> 并加 <code>.list-group-item-action</code>，就有了悬停背景和指针样式，成为"可点击列表"。',
          demo:
            '<div class="list-group" style="max-width:420px">' +
            '<a href="#" class="list-group-item list-group-item-action active" aria-current="true"><div class="d-flex w-100 justify-content-between"><h6 class="mb-1">第一条：正在播放</h6><small>3 分钟前</small></div><p class="mb-1 small">这是当前选中的条目（active）。</p></a>' +
            '<a href="#" class="list-group-item list-group-item-action"><div class="d-flex w-100 justify-content-between"><h6 class="mb-1">第二条</h6><small class="text-body-secondary">1 小时前</small></div><p class="mb-1 small">鼠标悬停有背景变化。</p></a>' +
            '<a href="#" class="list-group-item list-group-item-action"><div class="d-flex w-100 justify-content-between"><h6 class="mb-1">第三条</h6><small class="text-body-secondary">昨天</small></div><p class="mb-1 small">点整行任意位置都能跳转。</p></a>' +
            '</div>',
          tip: '用 <code>&lt;div class="list-group"&gt;</code> 而不是 ul 时，直接放 a 标签即可（不用套 li）。'
        },
        {
          id: '6.6.4',
          t: '状态设置',
          d: '<code>.active</code> 表示"当前选中"（蓝底白字）；<code>.disabled</code> 表示"不可点"（变灰、鼠标样式照旧但点不动）。两个都加在 list-group-item 上。',
          demo:
            '<div class="list-group" style="max-width:420px">' +
            '<a href="#" class="list-group-item list-group-item-action active" aria-current="true">当前选中的条目（active）</a>' +
            '<a href="#" class="list-group-item list-group-item-action">普通条目</a>' +
            '<a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">不可点的条目（disabled）</a>' +
            '</div>',
          tip: '给 disabled 的链接加 <code>tabindex="-1"</code>，可以防止键盘 Tab 键聚焦到它——细节拉满。'
        },
        {
          id: '6.6.5',
          t: '列表组主题',
          d: '彩色列表项：<code>.list-group-item-primary / -success / -danger</code> 等等。5.3 里它们变成了"柔和底色 + 强调色文字"的现代风格（不再是刺眼的纯色块）。',
          demo:
            '<ul class="list-group" style="max-width:420px">' +
            '<li class="list-group-item list-group-item-primary">主要（primary）</li>' +
            '<li class="list-group-item list-group-item-success">成功（success）</li>' +
            '<li class="list-group-item list-group-item-warning">警告（warning）</li>' +
            '<li class="list-group-item list-group-item-danger">危险（danger）</li>' +
            '</ul>',
          tip: '彩色列表项用来"分类/标状态"很合适（比如"未读/已读/已归档"三色），但要控制在一两种颜色，不然像彩虹。'
        },
        {
          id: '6.6.6',
          t: '其他元素的支持',
          d: '列表项里什么都能放：复选框（做"任务清单"）、按钮、媒体对象（左图右文）。水平排列时用 <code>.list-group-horizontal</code>，还能按断点切换（如 <code>list-group-horizontal-md</code>）。',
          demo:
            '<ul class="list-group mb-3" style="max-width:460px">' +
            '<li class="list-group-item d-flex align-items-center gap-2"><input class="form-check-input mt-0" type="checkbox" checked id="tg1"><label for="tg1" class="small text-decoration-line-through text-body-secondary">写完第 4 章练习</label></li>' +
            '<li class="list-group-item d-flex align-items-center gap-2"><input class="form-check-input mt-0" type="checkbox" id="tg2"><label for="tg2" class="small">复习 flex 布局</label></li>' +
            '<li class="list-group-item d-flex justify-content-between align-items-center">' +
            '<span class="d-flex align-items-center gap-2"><span class="davatar" style="width:38px;height:38px;font-size:.8rem">图</span><span class="small">带小图标的条目</span></span>' +
            '<button class="btn btn-sm btn-outline-danger">删除</button></li>' +
            '</ul>' +
            '<ul class="list-group list-group-horizontal-md" style="max-width:560px">' +
            '<li class="list-group-item">水平行 1</li><li class="list-group-item">水平行 2</li><li class="list-group-item">水平行 3</li>' +
            '</ul>' +
            '<span class="small text-body-secondary">最后一条：窄屏竖排、md 以上横排</span>',
          tip: '复选框放进列表项时给 input 加 <code>mt-0</code> 微调对齐——这是官方文档都用的"小手术"。'
        }
      ]
    },
    {
      id: '6.7',
      t: '进度条',
      group: true,
      d: '展示"进度/完成度"的组件，样式在外层，宽度在内层。',
      children: [
        {
          id: '6.7.1',
          t: '基础进度条',
          d: '结构两层：外层 <code>.progress</code>（灰色轨道），内层 <code>.progress-bar</code>（彩色填充）用 <code>style="width: 60%"</code> 控制进度。建议给外层加 <code>role="progressbar"</code> 与 aria 属性，方便无障碍。',
          demo:
            '<div class="progress mb-2" role="progressbar" aria-label="基础进度条" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="height:16px">' +
            '<div class="progress-bar" style="width:60%">60%</div></div>' +
            '<div class="progress" style="height:8px"><div class="progress-bar" style="width:30%"></div></div>' +
            '<div class="small text-body-secondary mt-2">上面的写了 aria 属性（可访问），下面的用 height:8px 变细——宽度随心调。</div>',
          tip: '进度条默认高 1rem；做细进度条直接在 .progress 上写 style="height:8px" 最省事。'
        },
        {
          id: '6.7.2',
          t: '进度条的颜色',
          d: '换颜色：给内层加 <code>.bg-success / .bg-info</code> 等背景类。<code>.progress-bar-striped</code> 加条纹，<code>.progress-bar-animated</code> 让条纹动起来（加载中就靠它）。',
          demo:
            '<div class="progress mb-2" style="height:18px"><div class="progress-bar bg-success" style="width:25%">25%</div></div>' +
            '<div class="progress mb-2" style="height:18px"><div class="progress-bar bg-info" style="width:50%">50%</div></div>' +
            '<div class="progress mb-2" style="height:18px"><div class="progress-bar bg-warning" style="width:75%">75%</div></div>' +
            '<div class="progress mb-2" style="height:18px"><div class="progress-bar bg-danger" style="width:90%">90%（快到限制了）</div></div>' +
            '<div class="progress" style="height:18px"><div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:70%">条纹 + 动画</div></div>',
          tip: '颜色也表达语义：绿色=顺利、蓝色=进行中、黄色=注意、红色=接近上限/危险。'
        },
        {
          id: '6.7.3',
          t: '条纹进度条',
          d: '条纹就是 <code>.progress-bar-striped</code>（45°斜纹），再叠 <code>.progress-bar-animated</code> 斜纹会缓慢滚动，向用户传达"还在进行中"。',
          demo:
            '<div class="progress mb-3" style="height:20px"><div class="progress-bar progress-bar-striped" style="width:40%">静态条纹</div></div>' +
            '<div class="progress" style="height:20px"><div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" style="width:60%">滚动条纹（表示进行中）</div></div>',
          hint: '第二条的斜纹正在缓慢移动——动画走开中',
          tip: '提醒：如果用户开启了"减少动画"系统设置，Bootstrap 会自动停掉这个动画（无障碍适配），不用你操心。'
        },
        {
          id: '6.7.4',
          t: '进度条堆叠效果',
          d: '多段进度拼在一起：外层 <code>.progress-stacked</code>，里面放多个普通 .progress 子项，各自有宽度——用来看"存储空间构成""预算分配"这类比例图。',
          demo:
            '<div class="progress-stacked mb-3" style="height:20px">' +
            '<div class="progress" style="width:35%"><div class="progress-bar bg-primary">35%</div></div>' +
            '<div class="progress" style="width:25%"><div class="progress-bar bg-success">25%</div></div>' +
            '<div class="progress" style="width:20%"><div class="progress-bar bg-warning">20%</div></div>' +
            '<div class="progress" style="width:20%"><div class="progress-bar bg-danger">20%</div></div>' +
            '</div>' +
            '<div class="d-flex flex-wrap gap-3 small text-body-secondary">' +
            '<span><i class="bi bi-square-fill text-primary me-1"></i>视频 35%</span>' +
            '<span><i class="bi bi-square-fill text-success me-1"></i>图片 25%</span>' +
            '<span><i class="bi bi-square-fill text-warning me-1"></i>文档 20%</span>' +
            '<span><i class="bi bi-square-fill text-danger me-1"></i>其他 20%</span>' +
            '</div>',
          tip: '堆叠进度条每一段都要是完整的 <code>.progress &gt; .progress-bar</code> 结构（不是直接放 progress-bar），这是 5.2 起的新写法。'
        }
      ]
    }
  ],
  summary: [
    '下拉菜单三段式：.dropdown 容器 + .dropdown-toggle 触发 + .dropdown-menu / .dropdown-item；菜单靠右用 dropdown-menu-end。',
    '导航四形态：基础 nav、nav-tabs（页签）、nav-pills（药丸）、flex-column（垂直）；对齐用 justify-content-* / nav-fill / nav-justified。',
    '导航条配方：navbar + navbar-expand-{断点} + navbar-brand + toggler + collapse + navbar-nav；深色用 data-bs-theme="dark"（navbar-dark 已不推荐）。',
    '固定导航条三兄弟：fixed-top（钉顶部）、fixed-bottom（钉底部）、sticky-top（粘住）；用 fixed 记得给页面留出空间。',
    '徽章 badge + text-bg-*；角标 = 绝对定位 + translate-middle。',
    '分页：pagination > page-item > page-link，当前页 .active、不可用 .disabled。',
    '列表组：list-group-item 为核心；flush 去边框、horizontal 横排、-action 可点、-primary 等彩色；里面能塞复选框、按钮、媒体对象。',
    '进度条两层结构：.progress > .progress-bar + width；条纹 striped、动画 animated、多段用 progress-stacked。'
  ],
  practice: {
    t: '实训项目：制作个人简历网页（二）',
    d: '在实训（一）的基础上，把"简历"升级成一个带导航条和组件的完整页面：顶部导航条（含下拉菜单）、技能用进度条、经历用列表组、徽章标能力等级。',
    steps: [
      '导航条：navbar navbar-expand-md，左侧品牌"川同学"，右侧"下载 PDF"按钮 + 一个下拉菜单（作品集 / 联系方式 / 关于）。',
      '技能区：每个技能一行，左侧名称 + 右侧"熟练度百分比"徽章，下面跟一条进度条（宽度对应百分比）。',
      '工作经历：用 list-group 的链接版，每条一个小图标 + 标题 + 时间徽章。',
      '证书区：list-group 里放复选框样式（学过的技能打勾），体验"任务清单"式列表。',
      '检查：把窗口拉窄，导航条是否正确折叠成汉堡按钮？'
    ],
    demo:
      '<div class="border rounded-3 overflow-hidden bg-white" style="max-width:640px">' +
      '<nav class="navbar navbar-expand-md bg-body-tertiary px-3">' +
      '<span class="navbar-brand fw-bold"><i class="bi bi-person-badge me-1 text-primary"></i>川同学</span>' +
      '<div class="d-none d-md-flex align-items-center gap-2 ms-auto">' +
      '<a class="nav-link small" href="#">作品集</a>' +
      '<div class="dropdown"><a class="nav-link small dropdown-toggle" href="#" data-bs-toggle="dropdown">更多</a>' +
      '<ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="#">联系方式</a></li><li><a class="dropdown-item" href="#">关于我</a></li></ul></div>' +
      '<button class="btn btn-sm btn-primary">下载 PDF</button>' +
      '</div>' +
      '<button class="navbar-toggler ms-auto d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#cvNav"><span class="navbar-toggler-icon"></span></button>' +
      '<div class="collapse navbar-collapse d-md-none" id="cvNav"><ul class="navbar-nav pt-2"><li class="nav-item"><a class="nav-link" href="#">作品集</a></li><li class="nav-item"><a class="nav-link" href="#">联系方式</a></li></ul></div>' +
      '</nav>' +
      '<div class="p-4">' +
      '<div class="row g-4">' +
      '<div class="col-md-7"><h6 class="fw-bold mb-3"><i class="bi bi-briefcase me-1"></i>工作经历</h6>' +
      '<div class="list-group mb-4">' +
      '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><span><strong class="small">某科技公司 · 前端实习生</strong><br><span class="small text-body-secondary">Bootstrap 内部工具页面 × 3</span></span><span class="badge text-bg-primary">2025.07 - 2025.12</span></a>' +
      '<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><span><strong class="small">校园工作室 · 网页组</strong><br><span class="small text-body-secondary">社团官网响应式改版</span></span><span class="badge text-bg-secondary">2024 - 2025</span></a>' +
      '</div>' +
      '<h6 class="fw-bold mb-3"><i class="bi bi-patch-check me-1"></i>证书与学习</h6>' +
      '<ul class="list-group"><li class="list-group-item d-flex gap-2 align-items-center"><input class="form-check-input mt-0" type="checkbox" checked disabled><span class="small text-body-secondary text-decoration-line-through">HTML / CSS 基础</span><span class="badge text-bg-success ms-auto">已完成</span></li>' +
      '<li class="list-group-item d-flex gap-2 align-items-center"><input class="form-check-input mt-0" type="checkbox" checked disabled><span class="small text-body-secondary text-decoration-line-through">Bootstrap 5 组件</span><span class="badge text-bg-success ms-auto">已完成</span></li>' +
      '<li class="list-group-item d-flex gap-2 align-items-center"><input class="form-check-input mt-0" type="checkbox" disabled><span class="small">JavaScript 插件</span><span class="badge text-bg-warning ms-auto">进行中</span></li></ul>' +
      '</div>' +
      '<div class="col-md-5"><h6 class="fw-bold mb-3"><i class="bi bi-bar-chart me-1"></i>技能熟练度</h6>' +
      '<div class="d-flex justify-content-between small mb-1"><span>HTML / CSS</span><span class="badge text-bg-light border">85%</span></div>' +
      '<div class="progress mb-3" style="height:10px"><div class="progress-bar bg-success" style="width:85%"></div></div>' +
      '<div class="d-flex justify-content-between small mb-1"><span>Bootstrap</span><span class="badge text-bg-light border">70%</span></div>' +
      '<div class="progress mb-3" style="height:10px"><div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" style="width:70%"></div></div>' +
      '<div class="d-flex justify-content-between small mb-1"><span>JavaScript</span><span class="badge text-bg-light border">45%</span></div>' +
      '<div class="progress mb-3" style="height:10px"><div class="progress-bar bg-warning" style="width:45%"></div></div>' +
      '<div class="d-flex justify-content-between small mb-1"><span>Node.js</span><span class="badge text-bg-light border">20%</span></div>' +
      '<div class="progress" style="height:10px"><div class="progress-bar bg-danger" style="width:20%"></div></div>' +
      '</div>' +
      '</div></div></div>',
    hint: '这一屏几乎用齐了第 6 章的组件：导航条、下拉、列表组、徽章、进度条、按钮组思路'
  }
});
