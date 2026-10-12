/* ============================================================
   第 1 章 Bootstrap 概述
   ============================================================ */
window.BS_DATA.push({
  id: 'ch1',
  num: '第 1 章',
  title: 'Bootstrap 概述',
  accent: '#7952b3',
  accentSoft: '#f3eefb',
  icon: 'bi-flag',
  intro: '这一章先不写代码，先搞清楚三件事：Bootstrap 是什么、为什么要用它、怎么把它"装"进自己的网页。学完你就可以做出人生第一个 Bootstrap 页面了。',
  goals: [
    '用大白话说清 Bootstrap 是什么、能解决什么问题',
    '知道它为什么流行，也知道它的缺点',
    '会用 CDN 或本地文件两种方式引入它',
    '看懂官方包里的目录结构，知道每个文件干嘛的',
    '能独立写出一个最简单的 Bootstrap 页面骨架'
  ],
  docs: [
    { t: '官方首页', u: 'https://getbootstrap.com/' },
    { t: '官方入门（Getting started）', u: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' },
    { t: '官方下载页', u: 'https://getbootstrap.com/docs/5.3/getting-started/download/' },
    { t: 'GitHub 仓库', u: 'https://github.com/twbs/bootstrap' }
  ],
  sections: [
    {
      id: '1.1',
      t: 'Bootstrap 简述',
      d: 'Bootstrap 是目前世界上最流行的<b>前端 UI 框架</b>。用一句话说：它是一盒"预制好的积木"——按钮、表格、导航条、弹窗这些常用零件，别人已经写好并调好样式了，你只要在 HTML 标签上"贴上类名"（class），零件就自动变成好看的样子。它由 Twitter 的两位工程师在 2011 年发布，现在还由官方团队和全球社区一起维护。你不需要先精通 CSS，就能拼出体面的网页。',
      demo:
        '<div class="row g-4 text-center">' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-2">不用 Bootstrap：浏览器默认样式</div>' +
        '<button>提交</button><div class="mt-2"><a href="#">一个普通的链接</a></div></div>' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-2">用了 Bootstrap：加一个类名就变样</div>' +
        '<button class="btn btn-primary">提交</button><div class="mt-2"><a href="#" class="link-primary">一个漂亮的链接</a></div></div>' +
        '</div>',
      hint: '同一个 <button> 标签，右边只多了 class="btn btn-primary"',
      tip: '记法：Bootstrap 的 class 就像"积木型号"。btn 是"按钮积木"，table 是"表格积木"，写上型号，浏览器就照着官方画好的样子渲染。'
    },
    {
      id: '1.2',
      t: '为何使用 Bootstrap',
      d: '最核心的原因有三个：<b>省时间</b>（几十种组件拿来即用，不用从零写 CSS）、<b>天生响应式</b>（同一套代码，手机、平板、电脑都自动适配）、<b>跨浏览器稳定</b>（官方帮你踩平了各种浏览器的坑）。再加上它是 MIT 协议的免费开源项目、社区资料海量，遇到问题几乎都能搜到答案。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-4"><div class="p-3 bg-white border rounded-3 h-100"><i class="bi bi-stopwatch fs-3 text-primary"></i><h6 class="mt-2 mb-1">省时间</h6><p class="small text-body-secondary mb-0">组件拿来即用，把精力留给业务和内容。</p></div></div>' +
        '<div class="col-md-4"><div class="p-3 bg-white border rounded-3 h-100"><i class="bi bi-phone fs-3 text-success"></i><h6 class="mt-2 mb-1">响应式</h6><p class="small text-body-secondary mb-0">手机 / 平板 / 电脑一套代码全适配。</p></div></div>' +
        '<div class="col-md-4"><div class="p-3 bg-white border rounded-3 h-100"><i class="bi bi-people fs-3 text-warning"></i><h6 class="mt-2 mb-1">大社区</h6><p class="small text-body-secondary mb-0">GitHub 17 万+ star，教程、模板、答疑遍地都是。</p></div></div>' +
        '</div>',
      tip: '也要知道它的"坑"：全世界都在用，所以页面容易"撞脸"；想做出真正个性化的设计，最终还是要补 CSS 基本功。框架只是拐杖，不是终点。'
    },
    {
      id: '1.3',
      t: '如何使用 Bootstrap',
      d: '最常用的方式有两种：<b>方式一：CDN 引入</b>（推荐新手）——把官网的 CSS、JS 网络地址直接用 <code>&lt;link&gt;</code> 和 <code>&lt;script&gt;</code> 引到页面里，改两行就能跑；<b>方式二：下载到本地</b>——把文件放到项目文件夹里再引入，离线也能用。CSS 负责"长相"，JS 负责"会动的功能"（弹窗、轮播等），两个都要引。',
      demo:
        '<div class="border rounded-3 p-4 bg-white text-center">' +
        '<h1 class="display-6 fw-bold mb-2">Hello, world!</h1>' +
        '<p class="text-body-secondary">这段效果，就是下面 10 行代码跑出来的</p>' +
        '<button class="btn btn-primary">点我</button>' +
        '</div>',
      code:
        '<!doctype html>\n' +
        '<html lang="zh-CN">\n' +
        '<head>\n' +
        '  <meta charset="utf-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '  <title>我的第一个 Bootstrap 页面</title>\n' +
        '  <!-- CSS：控制长相。放到 </head> 前 -->\n' +
        '  <link href="https://registry.npmmirror.com/bootstrap/5.3.8/files/dist/css/bootstrap.min.css" rel="stylesheet">\n' +
        '</head>\n' +
        '<body class="p-4">\n' +
        '  <h1 class="display-6">Hello, world!</h1>\n' +
        '  <button class="btn btn-primary">点我</button>\n' +
        '\n' +
        '  <!-- JS：让弹窗、轮播等"活起来"。放到 </body> 前 -->\n' +
        '  <script src="https://registry.npmmirror.com/bootstrap/5.3.8/files/dist/js/bootstrap.bundle.min.js"></script>\n' +
        '</body>\n' +
        '</html>',
      hint: '长按代码区域可滚动查看完整模板',
      tip: '<b>两个新手必踩的坑：</b>① 漏写 <code>&lt;meta name="viewport"&gt;</code>，手机上整个页面会缩得很小，响应式彻底失效；② JS 忘记引，弹窗、下拉菜单点了没反应。另外，CDN 地址可以选国内镜像（npmmirror、BootCDN、Staticfile），加载更快。'
    },
    {
      id: '1.4',
      t: '下载 Bootstrap',
      d: '到官网的 Download 页，你可以：下载编译好的压缩包、复制 CDN 地址、或者用 npm / git 等工具安装。下载解压后，常用的其实只有 4 个文件——CSS 和 JS 各两个版本（压缩版 / 未压缩版）。<b>.min 是压缩版</b>：去掉了空格换行，体积小，适合上线；未压缩版可读性好，适合打开来"偷看"官方是怎么写的。',
      demo:
        '<div class="border rounded-3 p-3 bg-white" style="font-family:var(--mono)">' +
        '<div class="small text-body-secondary mb-2">解压后的目录（只列你最常用的部分）</div>' +
        '<div class="small">bootstrap/<br>' +
        '├─ css/<br>' +
        '│&nbsp;&nbsp;├─ <b>bootstrap.min.css</b>&nbsp;&nbsp;&nbsp;← 压缩版样式，上线用<br>' +
        '│&nbsp;&nbsp;└─ bootstrap.css&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← 未压缩版，学习用<br>' +
        '└─ js/<br>' +
        '&nbsp;&nbsp;&nbsp;├─ <b>bootstrap.bundle.min.js</b>&nbsp;← 含 Popper 的完整脚本（推荐）<br>' +
        '&nbsp;&nbsp;&nbsp;└─ bootstrap.min.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← 不含 Popper，需要自己另引</div>' +
        '</div>',
      tip: '新手不要一开始就下载"源码版"（里面是 .scss 文件，需要编译才能用，那是附录 A 的内容）。<b>Popper</b> 是一个定位工具库，下拉菜单、提示框都靠它算位置，所以直接用官方打包好的 <code>bundle</code> 版本最省心。'
    },
    {
      id: '1.5',
      t: '简单模板',
      d: '官方提供了一份"最小可用模板"（Starter template），把结构骨架——文档声明、编码、viewport、CSS、JS——全都摆好了，你只需要在里面填内容。这就是每个 Bootstrap 页面的起跑线，熟记它的结构，以后每个项目都从它开始复制。',
      demo:
        '<div class="border rounded-3 overflow-hidden">' +
        '<nav class="navbar bg-body-tertiary px-3"><span class="navbar-brand mb-0 h1">我的第一个页面</span></nav>' +
        '<div class="p-4">' +
        '<h1 class="display-6 fw-bold">你好，Bootstrap！</h1>' +
        '<p class="lead text-body-secondary mb-3">这是用官方入门模板搭出来的页面骨架。</p>' +
        '<button class="btn btn-primary">开始学习</button>' +
        '</div></div>',
      code:
        '<!doctype html>\n' +
        '<html lang="zh-CN">\n' +
        '<head>\n' +
        '  <meta charset="utf-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '  <title>简单模板</title>\n' +
        '  <link href="https://registry.npmmirror.com/bootstrap/5.3.8/files/dist/css/bootstrap.min.css" rel="stylesheet">\n' +
        '</head>\n' +
        '<body>\n' +
        '  <nav class="navbar bg-body-tertiary">\n' +
        '    <div class="container-fluid">\n' +
        '      <span class="navbar-brand mb-0 h1">我的第一个页面</span>\n' +
        '    </div>\n' +
        '  </nav>\n' +
        '\n' +
        '  <div class="container py-4">\n' +
        '    <h1 class="display-6 fw-bold">你好，Bootstrap！</h1>\n' +
        '    <p class="lead text-body-secondary">这是用官方入门模板搭出来的页面骨架。</p>\n' +
        '    <button class="btn btn-primary">开始学习</button>\n' +
        '  </div>\n' +
        '\n' +
        '  <script src="https://registry.npmmirror.com/bootstrap/5.3.8/files/dist/js/bootstrap.bundle.min.js"></script>\n' +
        '</body>\n' +
        '</html>',
      tip: '记住这个骨架的"顺序感"：<code>head</code> 里放 CSS，<code>body</code> 末尾放 JS。这样浏览器先把样式准备好再显示内容，不会出现"闪一下没样式"的画面。'
    },
    {
      id: '1.6',
      t: '案例：Bootstrap 实例',
      d: '把前面学的拼起来，做一个"麻雀虽小五脏俱全"的页面：顶部一块彩色横幅（英雄区 hero），中间三个卖点图标，底部一行页脚。这类"横幅 + 三个卖点 + 页脚"的结构，是互联网上高频出现的经典版式，先抄下来，以后到处都能用。',
      demo:
        '<div class="rounded-3 overflow-hidden border">' +
        '<div class="text-white p-4 p-md-5" style="background:linear-gradient(120deg,#7952b3,#4e8df5)">' +
        '<h3 class="fw-bold mb-1">Bootstrap 体验站</h3>' +
        '<p class="mb-3" style="opacity:.8">用最少的代码，做出像样的页面。</p>' +
        '<a href="#" class="btn btn-light btn-sm fw-semibold">了解更多</a>' +
        '</div>' +
        '<div class="row g-0 text-center bg-white">' +
        '<div class="col-4 p-3 border-end"><i class="bi bi-lightning-charge fs-4 text-warning"></i><div class="small mt-1">快速开发</div></div>' +
        '<div class="col-4 p-3 border-end"><i class="bi bi-phone fs-4 text-primary"></i><div class="small mt-1">响应式</div></div>' +
        '<div class="col-4 p-3"><i class="bi bi-people fs-4 text-success"></i><div class="small mt-1">大社区</div></div>' +
        '</div>' +
        '<div class="bg-body-tertiary text-center small text-body-secondary py-2">页脚 · © 2026 我的站点</div>' +
        '</div>',
      hint: '注意横幅里的几个细节：渐变背景、半透明副标题、浅色小按钮'
    }
  ],
  summary: [
    'Bootstrap 是一套自带样式的"预制积木"，核心用法就是给 HTML 标签加类名。',
    '使用方式两种：CDN 引入（最快）或下载本地文件（可离线）；CSS 管长相，JS 管交互。',
    '压缩包常用 4 个文件：css 两份（.min 上线用 / 完整版学习用）、js 两份（优先 bundle 版，含 Popper）。',
    '每个页面都从官方"简单模板"开始：head 引 CSS，body 末尾引 JS，千万别漏 viewport。',
    '本手册用的是当前最新稳定版 v5.3.8，示例全部在真实运行。'
  ],
  practice: {
    t: '实训项目：熟悉 Bootstrap',
    d: '动手做一遍，比看十遍都强。目标：不查笔记，独立写出你的第一个 Bootstrap 页面。',
    steps: [
      '新建一个 index.html，用官方简单模板的骨架填好（记得 meta viewport 和两个引入）。',
      '在页面里加入：一个 h1 大标题（试试 display-1）、一段介绍文字、一个按钮。',
      '把按钮的 btn-primary 换成 btn-success、btn-outline-danger 等，观察颜色变化。',
      '把浏览器窗口从满屏拉窄到手机宽度，观察页面有没有"响应式"的变化（目前应该没有，别急，第 2 章就学）。'
    ],
    demo:
      '<div class="d-flex flex-wrap gap-3 align-items-center">' +
      '<span class="text-body-secondary small">把按钮类名改一改，效果立刻不一样：</span>' +
      '<button class="btn btn-primary btn-sm">btn-primary</button>' +
      '<button class="btn btn-success btn-sm">btn-success</button>' +
      '<button class="btn btn-outline-danger btn-sm">btn-outline-danger</button>' +
      '<button class="btn btn-warning btn-sm">btn-warning</button>' +
      '</div>',
    hint: '点任意卡片的"在游乐场改一改"，就能亲手试'
  }
});
