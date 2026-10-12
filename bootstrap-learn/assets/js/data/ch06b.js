/* ============================================================
   第 6 章 CSS 组件（下）6.8 - 6.14
   把「卡片 ~ 案例」追加到第 6 章的 sections 里
   ============================================================ */
(function () {
  var ch = null;
  for (var i = 0; i < window.BS_DATA.length; i++) {
    if (window.BS_DATA[i].id === 'ch6') ch = window.BS_DATA[i];
  }
  if (!ch) return;

  ch.sections.push(
    {
      id: '6.8',
      t: '卡片',
      group: true,
      d: '卡片（card）是 Bootstrap 的"万能容器"：文章卡、商品卡、用户卡……万物皆可装进卡片。它是全站使用率第二高的组件（第一名是按钮）。',
      children: [
        {
          id: '6.8.1',
          t: '基本卡片',
          d: '最小卡片：<code>.card</code> + <code>.card-body</code>，里面放 <code>.card-title</code>（标题）、<code>.card-text</code>（正文）、<code>.card-link</code>（链接）。卡片默认会撑满父容器宽度，用工具类控制宽高。',
          demo:
            '<div class="card" style="max-width:300px">' +
            '<div class="card-body">' +
            '<h6 class="card-title">卡片标题</h6>' +
            '<p class="card-text small text-body-secondary">卡片正文：这里可以放任意内容，没有图片、没有页脚的最简卡片长这样。</p>' +
            '<a href="#" class="card-link">查看更多</a>' +
            '<a href="#" class="card-link">收藏</a>' +
            '</div></div>',
          tip: 'card 自带边框和圆角；card-body 是"带内边距的内容区"。所有内容都往 card-body 里塞，这是官方约定的结构。'
        },
        {
          id: '6.8.2',
          t: '卡片的内容设计',
          d: '卡片里能放的东西很多：<code>.card-img-top</code> 顶图、列表组（flush 版）、<code>.card-img-overlay</code> 文字直接叠在图上。图片 + 文字的资讯卡是最常用的组合。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-4"><div class="card h-100">' +
            '<img src="' + BS_PH.img1 + '" class="card-img-top" alt="卡片顶图">' +
            '<div class="card-body p-3"><h6 class="card-title mb-1">顶部图片卡</h6><p class="card-text small text-body-secondary mb-0">card-img-top 让图片自动铺满顶部并带上圆角。</p></div></div></div>' +
            '<div class="col-md-4"><div class="card h-100">' +
            '<div class="card-body p-2"><p class="small text-body-secondary mb-1">列表组镶嵌：</p></div>' +
            '<ul class="list-group list-group-flush"><li class="list-group-item small">✓ 支持 Markdown</li><li class="list-group-item small">✓ 支持导出 PDF</li><li class="list-group-item small">✓ 无限次修订</li></ul>' +
            '<div class="card-body p-2 pt-3"><button class="btn btn-sm btn-outline-primary w-100">选择此方案</button></div>' +
            '</div></div>' +
            '<div class="col-md-4"><div class="card h-100">' +
            '<img src="' + BS_PH.img2 + '" class="card-img" alt="叠加文字背景图" style="height:100%;object-fit:cover;min-height:180px">' +
            '<div class="card-img-overlay d-flex flex-column justify-content-end">' +
            '<h6 class="card-title text-white mb-1" style="text-shadow:0 1px 4px rgba(0,0,0,.6)">文字叠在图上</h6>' +
            '<p class="card-text small text-white mb-0" style="text-shadow:0 1px 4px rgba(0,0,0,.6)">card-img-overlay</p>' +
            '</div></div></div>' +
            '</div>',
          code:
            '<!-- 图片在上 + 文字在下 -->\n' +
            '<div class="card">\n' +
            '  <img src="images/pic.jpg" class="card-img-top" alt="卡片顶图">\n' +
            '  <div class="card-body">\n' +
            '    <h6 class="card-title mb-1">顶部图片卡</h6>\n' +
            '    <p class="card-text small text-body-secondary mb-0">说明文字。</p>\n' +
            '  </div>\n' +
            '</div>\n' +
            '\n' +
            '<!-- 文字叠在图上 -->\n' +
            '<div class="card">\n' +
            '  <img src="images/bg.jpg" class="card-img" alt="背景图">\n' +
            '  <div class="card-img-overlay">\n' +
            '    <h6 class="card-title text-white">叠图标题</h6>\n' +
            '  </div>\n' +
            '</div>',
          tip: '叠图文字别忘了加深色文字阴影或用半透明遮罩，不然在浅色图片上会看不清。'
        },
        {
          id: '6.8.3',
          t: '卡片的页眉和脚注',
          d: '卡片顶部加 <code>.card-header</code>（标题栏），底部加 <code>.card-footer</code>（脚注栏），中间还是 card-body。头部/脚注自动带上分隔线和浅背景。',
          demo:
            '<div class="card" style="max-width:340px">' +
            '<div class="card-header d-flex justify-content-between align-items-center"><span class="small fw-bold">今日待办</span><span class="badge text-bg-primary">3</span></div>' +
            '<div class="card-body p-3">' +
            '<div class="form-check small"><input class="form-check-input" type="checkbox" id="cf1"><label class="form-check-label" for="cf1">复习栅格系统</label></div>' +
            '<div class="form-check small"><input class="form-check-input" type="checkbox" id="cf2" checked><label class="form-check-label text-decoration-line-through text-body-secondary" for="cf2">完成第 3 章练习</label></div>' +
            '<div class="form-check small"><input class="form-check-input" type="checkbox" id="cf3"><label class="form-check-label" for="cf3">写一段卡片代码</label></div>' +
            '</div>' +
            '<div class="card-footer small text-body-secondary">最后更新：今天 09:30</div>' +
            '</div>',
          tip: 'card-header / card-footer 里可以放任何内容（徽章、按钮、下拉菜单），它们只是"带样式的一行容器"。'
        },
        {
          id: '6.8.4',
          t: '卡片样式',
          d: '换色三招：<code>.text-bg-*</code>（底色 + 对比文字一步到位）、<code>.bg-*</code> + <code>.text-*</code>（手动配）、<code>.border-*</code>（只换边框色、内容保持白底）。再配合 h-100 和栅格排成"等高卡片墙"。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-4"><div class="card text-bg-primary h-100"><div class="card-body p-3"><h6 class="card-title mb-1">text-bg-primary</h6><p class="card-text small mb-0" style="opacity:.85">深底白字自动配好</p></div></div></div>' +
            '<div class="col-md-4"><div class="card text-bg-dark h-100"><div class="card-body p-3"><h6 class="card-title mb-1">text-bg-dark</h6><p class="card-text small mb-0" style="opacity:.85">适合"深色模式"版块</p></div></div></div>' +
            '<div class="col-md-4"><div class="card border-success h-100"><div class="card-body p-3"><h6 class="card-title mb-1 text-success">border-success</h6><p class="card-text small text-body-secondary mb-0">只换边框色的"轻量版"</p></div></div></div>' +
            '</div>',
          tip: '三种方式的选择：整块强调用 text-bg-*；轻微提示用 border-*；自定义配色用 bg-* + text-*。'
        },
        {
          id: '6.8.5',
          t: '水平卡片',
          d: '图片在左、文字在右的"横卡"。核心技巧：<code>row g-0</code> 把图片和内容装进一行（g-0 去掉缝隙），图片列给 <code>col-md-4</code>，内容列 <code>col-md-8</code>。窄屏时自动变回竖卡。',
          demo:
            '<div class="card" style="max-width:560px">' +
            '<div class="row g-0">' +
            '<div class="col-4"><img src="' + BS_PH.img3 + '" class="img-fluid rounded-start h-100" alt="横卡图片" style="object-fit:cover"></div>' +
            '<div class="col-8"><div class="card-body p-3">' +
            '<h6 class="card-title mb-1">水平卡片</h6>' +
            '<p class="card-text small text-body-secondary">row g-0 + 左右两列的结构，图片在左内容在右。注意图片加了 rounded-start 和 h-100 + object-fit:cover，才能完整填充左半边。</p>' +
            '<p class="card-text"><small class="text-body-tertiary">更新于 3 分钟前</small></p>' +
            '</div></div></div></div>',
          code:
            '<div class="card">\n' +
            '  <div class="row g-0">\n' +
            '    <div class="col-4">\n' +
            '      <img src="images/pic.jpg" class="img-fluid rounded-start h-100" style="object-fit:cover" alt="图片">\n' +
            '    </div>\n' +
            '    <div class="col-8">\n' +
            '      <div class="card-body">\n' +
            '        <h6 class="card-title">水平卡片</h6>\n' +
            '        <p class="card-text small text-body-secondary">说明文字……</p>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</div>',
          tip: '<code>g-0</code> 是关键：不加它，图片和文字之间会有一条"槽缝"，图片和卡片边之间也会有空隙。'
        },
        {
          id: '6.8.6',
          t: '卡片组',
          d: '两套做法：① <code>.card-group</code>——卡片紧贴无缝隙，且始终等宽等高（像一张大表格）；② <code>row g-3</code> + <code>h-100</code>——有缝隙的卡片墙（推荐，更符合现代审美）。',
          demo:
            '<div class="small text-body-secondary mb-2">card-group：无缝、等高、等宽</div>' +
            '<div class="card-group mb-4" style="max-width:640px">' +
            '<div class="card"><div class="card-body p-3"><h6 class="card-title small">第一张</h6><p class="card-text small text-body-secondary mb-0">内容短。</p></div></div>' +
            '<div class="card"><div class="card-body p-3"><h6 class="card-title small">第二张</h6><p class="card-text small text-body-secondary mb-0">内容稍长一点，但高度被"拉齐"到最高那张。</p></div></div>' +
            '<div class="card"><div class="card-body p-3"><h6 class="card-title small">第三张</h6><p class="card-text small text-body-secondary mb-0">也齐。</p></div></div>' +
            '</div>' +
            '<div class="small text-body-secondary mb-2">row g-3 + h-100：有缝隙的卡片墙（推荐）</div>' +
            '<div class="row g-3" style="max-width:660px">' +
            '<div class="col-6 col-md-4"><div class="card h-100"><div class="card-body p-3"><h6 class="card-title small mb-1">卡片一</h6><p class="card-text small text-body-secondary mb-0">r</p></div></div></div>' +
            '<div class="col-6 col-md-4"><div class="card h-100"><div class="card-body p-3"><h6 class="card-title small mb-1">卡片二</h6><p class="card-text small text-body-secondary mb-0">g-3 提供间隙，h-100 保证等高。</p></div></div></div>' +
            '<div class="col-6 col-md-4"><div class="card h-100"><div class="card-body p-3"><h6 class="card-title small mb-1">卡片三</h6><p class="card-text small text-body-secondary mb-0">推荐这种。</p></div></div></div>' +
            '</div>',
          tip: '<b>为什么推荐第二种？</b>card-group 让卡片"焊在一起"没有呼吸感，而且嵌套进栅格时表现不稳；row g-3 + h-100 是官方文档《Grid → 卡片示例》的推荐做法。'
        },
        {
          id: '6.8.7',
          t: '卡片布局',
          d: '三种常用布局：<b>卡片墙</b>（row g-3，最常见）、<b>瀑布流</b>（官方推荐用 Masonry 类 JS 库或 CSS 多列，Bootstrap 不内置）、<b>横向滚动条</b>（d-flex flex-nowrap overflow-auto）。',
          demo:
            '<div class="small text-body-secondary mb-2">横向滑动卡片（把鼠标放到卡片区，按住 Shift 滚轮横向滚动）：</div>' +
            '<div class="d-flex flex-nowrap gap-3 overflow-auto pb-2">' +
            '<div class="card flex-shrink-0" style="width:180px"><div class="card-body p-3"><h6 class="small mb-1">课程 1</h6><p class="small text-body-secondary mb-0">横向滚动的卡片</p></div></div>' +
            '<div class="card flex-shrink-0" style="width:180px"><div class="card-body p-3"><h6 class="small mb-1">课程 2</h6><p class="small text-body-secondary mb-0">flex-nowrap 不换行</p></div></div>' +
            '<div class="card flex-shrink-0" style="width:180px"><div class="card-body p-3"><h6 class="small mb-1">课程 3</h6><p class="small text-body-secondary mb-0">overflow-auto 出现滚动条</p></div></div>' +
            '<div class="card flex-shrink-0" style="width:180px"><div class="card-body p-3"><h6 class="small mb-1">课程 4</h6><p class="small text-body-secondary mb-0">flex-shrink-0 防压扁</p></div></div>' +
            '<div class="card flex-shrink-0" style="width:180px"><div class="card-body p-3"><h6 class="small mb-1">课程 5</h6><p class="small text-body-secondary mb-0">这就是"滑动卡片"</p></div></div>' +
            '</div>',
          tip: '横向滑动卡片的三个关键类：<code>d-flex flex-nowrap gap-3 overflow-auto</code>，再给每张卡 <code>flex-shrink-0</code> + 固定宽度。'
        }
      ]
    },
    {
      id: '6.9',
      t: '旋转图标',
      d: '加载中的"转圈"效果：<code>.spinner-border</code>（环形旋转）和 <code>.spinner-grow</code>（呼吸式放大）。颜色用 text-*，尺寸加 <code>.spinner-border-sm</code> 或直接改 font-size；放在按钮里做"提交中"是经典用法。别忘了加 <code>.visually-hidden</code> 的说明文字给读屏软件。',
      demo:
        '<div class="d-flex flex-wrap align-items-center gap-4 mb-3">' +
        '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">加载中…</span></div>' +
        '<div class="spinner-border text-success" role="status" style="width:1.2rem;height:1.2rem"></div>' +
        '<div class="spinner-grow text-danger" role="status" style="width:1.2rem;height:1.2rem"></div>' +
        '<div class="spinner-grow text-warning" role="status" style="width:0.8rem;height:0.8rem"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap gap-2">' +
        '<button class="btn btn-primary" type="button" disabled><span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>提交中…</button>' +
        '<button class="btn btn-outline-secondary" type="button" disabled><span class="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>加载</button>' +
        '</div>',
      tip: '规范写法：<code>spinner-border-sm</code> 配按钮；只有 "sm" 档没有 "lg"，想要更大就写 style 覆盖宽高。'
    },
    {
      id: '6.10',
      t: '图标',
      group: true,
      d: 'Bootstrap 官方图标库 Bootstrap Icons：2000+ 个免费图标，和框架"同源同风格"。本手册的图标就是用它渲染的。',
      children: [
        {
          id: '6.10.1',
          t: '图标的安装',
          d: '两种方式：① CDN 引入（最快）——一行 <code>&lt;link&gt;</code> 引图标样式表（本页已引好，你能看到的所有小图标都来自它）；② 下载：到 icons.getbootstrap.com 下载压缩包，把 css 和 fonts 文件夹放进项目后引入。',
          demo:
            '<div class="border rounded-3 p-3 bg-white font-monospace small">' +
            '&lt;!-- 在 &lt;head&gt; 里加这一行（本页已加）：--&gt;<br>' +
            '&lt;link rel="stylesheet" href="<span class="text-primary">https://registry.npmmirror.com/bootstrap-icons/1.13.1/files/font/bootstrap-icons.min.css</span>"&gt;' +
            '</div>' +
            '<p class="small text-body-secondary mt-2 mb-0">国内也可用 jsDelivr：<code>https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css</code></p>',
          tip: '为什么国内推荐 npmmirror / BootCDN：jsDelivr 在部分网络环境下不稳定（本手册所有资源已下载到本地，完全不受影响）。'
        },
        {
          id: '6.10.2',
          t: '什么是 SVG',
          d: 'SVG 是"矢量图形"：用数学描述线条和形状，放大到任意尺寸都不糊，而且文件还可以被 CSS 改颜色。Bootstrap Icons 每个图标既提供单独 SVG 文件（下载后当图片用），也提供"字体版"（用 &lt;i&gt; 标签的 class 调用，本页用的就是字体版）。',
          demo:
            '<div class="row g-3 align-items-center">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-2">字体版用法（推荐）：一个 i 标签</div>' +
            '<div class="d-flex align-items-center gap-3 p-3 border rounded bg-white">' +
            '<i class="bi bi-heart-fill text-danger" style="font-size:2rem"></i>' +
            '<i class="bi bi-star-fill text-warning" style="font-size:2rem"></i>' +
            '<i class="bi bi-cup-hot-fill text-secondary" style="font-size:2rem"></i>' +
            '<span class="small text-body-secondary">font-size 控制大小，text-* 控制颜色</span>' +
            '</div></div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-2">SVG 文件用法：当图片引用</div>' +
            '<div class="p-3 border rounded bg-white small font-monospace">&lt;img src="icons/heart.svg" width="32" alt="收藏"&gt;</div>' +
            '</div></div>',
          tip: '一句话记住：<b>字体版 = 当文字用（能改颜色、跟字号）</b>；<b>SVG 文件 = 当图片用（更好控制尺寸和保存）</b>。'
        },
        {
          id: '6.10.3',
          t: '图标的使用',
          d: '语法非常简单：<code>&lt;i class="bi bi-图标名"&gt;&lt;/i&gt;</code>。常用搭配：配文字时加 <code>me-1</code> 留空隙；调大小用 <code>.fs-*</code> 或 font-size；换颜色用 <code>text-*</code>；放进按钮、列表、输入框组都可以。图标名字去官网搜索复制即可。',
          demo:
            '<div class="d-flex flex-wrap gap-3 fs-4 mb-3">' +
            '<i class="bi bi-alarm text-primary" title="bi-alarm"></i>' +
            '<i class="bi bi-bag-heart text-danger" title="bi-bag-heart"></i>' +
            '<i class="bi bi-battery-charging text-success" title="bi-battery-charging"></i>' +
            '<i class="bi bi-camera-video text-secondary" title="bi-camera-video"></i>' +
            '<i class="bi bi-cloud-sun text-warning" title="bi-cloud-sun"></i>' +
            '<i class="bi bi-envelope-paper text-primary" title="bi-envelope-paper"></i>' +
            '<i class="bi bi-github text-dark" title="bi-github"></i>' +
            '<i class="bi bi-house-door text-success" title="bi-house-door"></i>' +
            '<i class="bi bi-music-note-beamed text-danger" title="bi-music-note-beamed"></i>' +
            '<i class="bi bi-wifi text-primary" title="bi-wifi"></i>' +
            '</div>' +
            '<div class="d-flex flex-wrap gap-2 align-items-center">' +
            '<button class="btn btn-primary btn-sm"><i class="bi bi-download me-1"></i>下载</button>' +
            '<button class="btn btn-outline-secondary btn-sm"><i class="bi bi-share"></i></button>' +
            '<button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash3 me-1"></i>删除</button>' +
            '<span class="small text-body-secondary ms-2">图标的三种尺寸：</span>' +
            '<i class="bi bi-star-fill fs-6 text-warning"></i><i class="bi bi-star-fill fs-4 text-warning"></i><i class="bi bi-star-fill fs-2 text-warning"></i>' +
            '</div>',
          hint: '鼠标悬停每个图标，可以看到它的名字',
          tip: '图标名首字母小写、连字符分隔（bi-arrow-left-circle）。忘记了就去 icons.getbootstrap.com 搜索——中文用户直接搜英文关键词。'
        }
      ]
    },
    {
      id: '6.11',
      t: '按钮组',
      group: true,
      d: '把多个按钮"拼成一体"的组件：一排按钮、工具栏、垂直组、单选复选切换组。',
      children: [
        {
          id: '6.11.1',
          t: '基本按钮组',
          d: '外层 <code>.btn-group</code> 包住多个 <code>.btn</code>（记得写 role="group"）。组内按钮的圆角会自动"只留两头"，中间缝自动合并，看起来像一个整体控件。',
          demo:
            '<div class="btn-group" role="group" aria-label="左中右对齐">' +
            '<button type="button" class="btn btn-outline-primary"><i class="bi bi-text-left"></i> 左</button>' +
            '<button type="button" class="btn btn-outline-primary active" aria-pressed="true"><i class="bi bi-text-center"></i> 中</button>' +
            '<button type="button" class="btn btn-outline-primary"><i class="bi bi-text-right"></i> 右</button>' +
            '</div>',
          tip: '别给组内按钮单独加 rounded-* 类，也别加 margin——btn-group 自己会处理连接处的圆角。'
        },
        {
          id: '6.11.2',
          t: '按钮工具栏',
          d: '多个按钮组凑成"工具栏"：外层 <code>.btn-toolbar</code>，里面每组 <code>.btn-group</code> 再加 <code>me-2</code> 隔开（工具栏本身不管间距）。',
          demo:
            '<div class="btn-toolbar" role="toolbar" aria-label="编辑器工具栏">' +
            '<div class="btn-group me-2" role="group"><button class="btn btn-outline-secondary btn-sm"><i class="bi bi-type-bold"></i></button>' +
            '<button class="btn btn-outline-secondary btn-sm"><i class="bi bi-type-italic"></i></button>' +
            '<button class="btn btn-outline-secondary btn-sm"><i class="bi bi-type-underline"></i></button></div>' +
            '<div class="btn-group me-2" role="group"><button class="btn btn-outline-secondary btn-sm"><i class="bi bi-list-ul"></i></button>' +
            '<button class="btn btn-outline-secondary btn-sm"><i class="bi bi-list-ol"></i></button></div>' +
            '<div class="btn-group" role="group"><button class="btn btn-outline-secondary btn-sm"><i class="bi bi-link-45deg"></i> 链接</button></div>' +
            '</div>',
          tip: '工具栏= flex 容器，所以还能用 gap 类、ms-auto 等工具类摆布内部按钮组。'
        },
        {
          id: '6.11.3',
          t: '按钮组尺寸',
          d: '尺寸类加在"整组"上：<code>.btn-group-sm / .btn-group-lg</code>——组内按钮会同步缩放，不用一个个改。',
          demo:
            '<div class="d-flex flex-wrap align-items-center gap-3">' +
            '<div class="btn-group btn-group-lg" role="group"><button class="btn btn-primary">大</button><button class="btn btn-primary">按钮组</button></div>' +
            '<div class="btn-group" role="group"><button class="btn btn-primary">默认</button><button class="btn btn-primary">按钮组</button></div>' +
            '<div class="btn-group btn-group-sm" role="group"><button class="btn btn-primary">小</button><button class="btn btn-primary">按钮组</button></div>' +
            '</div>',
          tip: '口诀：<b>尺寸加在"组"上，不要加在"成员"上</b>——加错地方会出现"高低不一"的怪现象。'
        },
        {
          id: '6.11.4',
          t: '按钮组嵌套',
          d: '按钮组里可以嵌"下拉菜单"甚至"另一个按钮组"，做出"主按钮 + 更多操作"的组合。下拉部分注意用 <code>dropdown-toggle-split</code>。',
          demo:
            '<div class="btn-group" role="group">' +
            '<button type="button" class="btn btn-success">发布文章</button>' +
            '<button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">更多发布选项</span></button>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item" href="#">定时发布</a></li>' +
            '<li><a class="dropdown-item" href="#">存为草稿</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item" href="#">预览文章</a></li>' +
            '</ul></div>' +
            '<p class="small text-body-secondary mt-2 mb-0">下拉的"菜单结构"和 6.1 完全一样，只是把触发按钮"镶"进了按钮组。</p>',
          tip: '下拉菜单的容纳单元是"按钮组"，不是按钮——所以 ul.dropdown-menu 是 btn-group 的直接子元素。'
        },
        {
          id: '6.11.5',
          t: '垂直的按钮组',
          d: '把 <code>.btn-group</code> 换成 <code>.btn-group-vertical</code>，按钮就竖着堆叠、上下圆角自动处理。',
          demo:
            '<div class="btn-group-vertical" role="group" aria-label="垂直按钮组" style="width:180px">' +
            '<button type="button" class="btn btn-primary">第一项</button>' +
            '<button type="button" class="btn btn-primary">第二项</button>' +
            '<button type="button" class="btn btn-primary">第三项</button>' +
            '</div>',
          tip: '垂直按钮组默认宽度随内容，想要等宽一排就加 style="width:..." 或包进栅格列。'
        },
        {
          id: '6.11.6',
          t: '单选按钮组和复选框组',
          d: '把"真正的单选/复选"变成按钮外观的秘诀：input 隐藏成 <code>.btn-check</code>，label 用 <code>.btn</code> 样式，label 的 for 指向 input 的 id。点按钮 = 选中，选中态(active)自动出现，还能配 <code>btn-outline-*</code> 当"分段选择器"。',
          demo:
            '<div class="small text-body-secondary mb-1">复选框组（可多选）：</div>' +
            '<div class="btn-group mb-3" role="group" aria-label="复选框组">' +
            '<input type="checkbox" class="btn-check" id="bc1" autocomplete="off" checked>' +
            '<label class="btn btn-outline-primary" for="bc1">加粗</label>' +
            '<input type="checkbox" class="btn-check" id="bc2" autocomplete="off">' +
            '<label class="btn btn-outline-primary" for="bc2">斜体</label>' +
            '<input type="checkbox" class="btn-check" id="bc3" autocomplete="off">' +
            '<label class="btn btn-outline-primary" for="bc3">下划线</label>' +
            '</div>' +
            '<div class="small text-body-secondary mb-1">单选按钮组（选一个）：</div>' +
            '<div class="btn-group mb-3" role="group" aria-label="单选按钮组">' +
            '<input type="radio" class="btn-check" name="bcSize" id="bs1" autocomplete="off" checked>' +
            '<label class="btn btn-outline-success" for="bs1">小杯</label>' +
            '<input type="radio" class="btn-check" name="bcSize" id="bs2" autocomplete="off">' +
            '<label class="btn btn-outline-success" for="bs2">中杯</label>' +
            '<input type="radio" class="btn-check" name="bcSize" id="bs3" autocomplete="off">' +
            '<label class="btn btn-outline-success" for="bs3">大杯</label>' +
            '</div>' +
            '<div class="small text-body-secondary mb-1">单选 + 实心填充（点击切换试试）：</div>' +
            '<div class="btn-group">' +
            '<input type="radio" class="btn-check" name="bcTab" id="bt1" autocomplete="off" checked>' +
            '<label class="btn btn-primary" for="bt1">最新</label>' +
            '<input type="radio" class="btn-check" name="bcTab" id="bt2" autocomplete="off">' +
            '<label class="btn btn-primary" for="bt2">最热</label>' +
            '<input type="radio" class="btn-check" name="bcTab" id="bt3" autocomplete="off">' +
            '<label class="btn btn-primary" for="bt3">收藏</label>' +
            '</div>',
          hint: '点一点：复选可以选中多个，单选永远只有一个高亮',
          tip: '<b>三段式结构：</b>input.btn-check（真身，隐藏）+ label.btn（外壳，可见）+ for/id 关联（灵魂）。少任何一个都点不了。'
        }
      ]
    },
    {
      id: '6.12',
      t: '关闭按钮',
      d: '通用于弹窗、提示条、标签的"×"按钮：<code>.btn-close</code>（自带 aria 提示）。禁用加 <code>disabled</code>；深色背景上要用白色的叉——在 5.3 中给父元素加 <code>data-bs-theme="dark"</code> 即可（旧写法 <code>.btn-close-white</code> 已不推荐）。',
      demo:
        '<div class="d-flex flex-wrap gap-4 align-items-center mb-3">' +
        '<div class="d-flex align-items-center gap-2 border rounded p-2 small">普通：<button type="button" class="btn-close" aria-label="关闭"></button></div>' +
        '<div class="d-flex align-items-center gap-2 border rounded p-2 small">禁用：<button type="button" class="btn-close" disabled aria-label="关闭"></button></div>' +
        '<div class="d-flex align-items-center gap-2 rounded p-2 small bg-dark text-white" data-bs-theme="dark">深色背景：<button type="button" class="btn-close" aria-label="关闭"></button></div>' +
        '<div class="d-flex align-items-center gap-2 rounded p-2 small" style="background:#7952b3" data-bs-theme="dark">彩色背景：<button type="button" class="btn-close" aria-label="关闭"></button></div>' +
        '</div>' +
        '<div class="alert alert-warning alert-dismissible d-flex align-items-center gap-2 mb-0" role="alert">' +
        '<i class="bi bi-exclamation-triangle"></i><div class="flex-grow-1">alert-dismissible 里的关闭按钮就是它——点一下 × 试试，提示条会真的消失。</div>' +
        '<button type="button" class="btn-close" aria-label="关闭"></button></div>',
      tip: '<code>aria-label="关闭"</code> 别偷懒省略——读屏用户会听到"按钮：关闭"，这是无障碍底线（Bootstrap 官方也算它）。'
    },
    {
      id: '6.13',
      t: '媒体对象（flex）',
      d: '"左头像 + 右内容"的经典排版。Bootstrap 5 移除了 v4 的 .media 组件（官方建议用 flex 重写）：<code>d-flex</code> 容器 + 左侧元素 <code>flex-shrink-0</code>（防止被文字挤扁）+ 右侧 <code>flex-grow-1</code> + 间距 gap。评论区、私信列表都靠它。',
      demo:
        '<div class="d-flex gap-3 mb-3">' +
        '<div class="davatar flex-shrink-0">涛</div>' +
        '<div class="flex-grow-1">' +
        '<div class="d-flex align-items-center gap-2"><strong class="small">涛哥</strong><span class="small text-body-tertiary">2 小时前</span></div>' +
        '<p class="small mb-1">这个卡片组件真好用，我把课程页改成卡片墙了。</p>' +
        '<button class="btn btn-sm btn-link p-0 text-decoration-none small">回复</button>' +
        '</div></div>' +
        '<div class="d-flex gap-3 ms-4">' +
        '<div class="davatar flex-shrink-0" style="width:44px;height:44px;font-size:.9rem">我</div>' +
        '<div class="flex-grow-1">' +
        '<div class="d-flex align-items-center gap-2"><strong class="small">我</strong><span class="small text-body-tertiary">1 小时前</span></div>' +
        '<p class="small mb-0">确实，配上 stretched-link 整卡都能点，体验很好。（这一条做了缩进，表示"回复"层级）</p>' +
        '</div></div>',
      tip: '三层结构记牢：外层 d-flex gap-3；头像加 flex-shrink-0；文字区加 flex-grow-1。嵌套一层就自动形成"楼中楼"。'
    },
    {
      id: '6.14',
      t: '案例：保护野生动物公益网站首页',
      d: '综合本章组件做一个公益站首页：顶部导航条（响应式 + 下拉）、Hero 区（大图 + 按钮）、三张动物卡片（图片 + 徽章 + 延伸链接）、数据进度区（进度条）、页脚。',
      demo:
        '<div class="border rounded-3 overflow-hidden bg-white">' +
        '<nav class="navbar navbar-expand-md bg-body-tertiary px-3">' +
        '<span class="navbar-brand fw-bold small"><i class="bi bi-tree-fill text-success me-1"></i>守护自然</span>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#wildNav"><span class="navbar-toggler-icon"></span></button>' +
        '<div class="collapse navbar-collapse" id="wildNav">' +
        '<ul class="navbar-nav ms-auto">' +
        '<li class="nav-item"><a class="nav-link active small" href="#">首页</a></li>' +
        '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle small" href="#" data-bs-toggle="dropdown">了解动物</a>' +
        '<ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item small" href="#">濒危名录</a></li><li><a class="dropdown-item small" href="#">救助故事</a></li></ul></li>' +
        '<li class="nav-item"><a class="nav-link small" href="#">加入我们</a></li>' +
        '</ul></div></nav>' +
        '<div class="position-relative text-white" style="background:linear-gradient(120deg,#14532d,#3f9142)">' +
        '<div class="p-4 p-md-5">' +
        '<span class="badge text-bg-warning mb-2">公益项目</span>' +
        '<h4 class="fw-bold mb-2">它们正在消失，我们一起守护</h4>' +
        '<p class="small mb-3" style="opacity:.85">已有 12,846 位志愿者加入我们</p>' +
        '<button class="btn btn-light btn-sm fw-semibold me-2">成为志愿者</button>' +
        '<button class="btn btn-outline-light btn-sm">了解项目</button>' +
        '</div>' +
        '<i class="bi bi-piggy-bank position-absolute end-0 top-50 translate-middle-y d-none d-md-block" style="font-size:5rem;opacity:.18;margin-right:2.5rem"></i>' +
        '</div>' +
        '<div class="p-3">' +
        '<div class="row g-3 mb-3">' +
        '<div class="col-md-4"><div class="card h-100 position-relative">' +
        '<img src="' + BS_PH.img2 + '" class="card-img-top" alt="大熊猫">' +
        '<div class="card-body p-3"><div class="d-flex justify-content-between align-items-start mb-1">' +
        '<h6 class="card-title small mb-0">大熊猫</h6><span class="badge text-bg-danger">易危</span></div>' +
        '<p class="card-text small text-body-secondary mb-2">野外种群约 1,800 只，栖息地破碎化是最大威胁。</p>' +
        '<a href="#" class="small stretched-link">查看保护计划 →</a></div></div></div>' +
        '<div class="col-md-4"><div class="card h-100 position-relative">' +
        '<img src="' + BS_PH.img1 + '" class="card-img-top" alt="亚洲象">' +
        '<div class="card-body p-3"><div class="d-flex justify-content-between align-items-start mb-1">' +
        '<h6 class="card-title small mb-0">亚洲象</h6><span class="badge text-bg-warning">濒危</span></div>' +
        '<p class="card-text small text-body-secondary mb-2">人象冲突加剧，需要更多生态廊道。</p>' +
        '<a href="#" class="small stretched-link">查看保护计划 →</a></div></div></div>' +
        '<div class="col-md-4"><div class="card h-100 position-relative">' +
        '<img src="' + BS_PH.img3 + '" class="card-img-top" alt="朱鹮" style="height:158px;object-fit:cover">' +
        '<div class="card-body p-3"><div class="d-flex justify-content-between align-items-start mb-1">' +
        '<h6 class="card-title small mb-0">朱鹮</h6><span class="badge text-bg-success">恢复中</span></div>' +
        '<p class="card-text small text-body-secondary mb-2">从 7 只到 9,000 余只，保护成功案例。</p>' +
        '<a href="#" class="small stretched-link">查看保护计划 →</a></div></div></div>' +
        '</div>' +
        '<div class="p-3 bg-body-tertiary rounded-3"><div class="row g-3 align-items-center">' +
        '<div class="col-md-4"><div class="small fw-bold mb-1">2026 年度目标：10,000 名志愿者</div>' +
        '<div class="progress" style="height:12px"><div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:68%"></div></div>' +
        '<div class="small text-body-secondary mt-1">已完成 6,800 名（68%）</div></div>' +
        '<div class="col-md-4"><div class="small fw-bold mb-1">栖息地修复：500 公顷</div>' +
        '<div class="progress" style="height:12px"><div class="progress-bar bg-primary" style="width:42%"></div></div>' +
        '<div class="small text-body-secondary mt-1">已完成 210 公顷（42%）</div></div>' +
        '<div class="col-md-4"><div class="small fw-bold mb-1">科普进校园：100 所</div>' +
        '<div class="progress" style="height:12px"><div class="progress-bar bg-warning" style="width:85%"></div></div>' +
        '<div class="small text-body-secondary mt-1">已完成 85 所（85%）</div></div>' +
        '</div></div>' +
        '</div>' +
        '<div class="text-center small text-body-secondary bg-body-tertiary py-2">© 2026 守护自然公益（示例）· 数据为演示用虚构值</div>' +
        '</div>',
      hint: '这一屏集合了：响应式导航条 + 下拉菜单 + 徽章 + 卡片 + stretched-link + 进度条'
    }
  );

  // 更新本章小结与实训（追加到原有小结后面）
  ch.summary = ch.summary.concat([
    '卡片五件套：card-body / card-title / card-text / card-img-top / card-header-footer；横卡用 row g-0，卡片墙用 row g-3 + h-100。',
    '旋转图标：spinner-border / spinner-grow + text-* 颜色 + spinner-*-sm 尺寸，按钮里配 disabled。',
    '图标：Bootstrap Icons 用 <i class="bi bi-名字"> 调用，名字到官网搜；大小用 fs-*，颜色用 text-*。',
    '按钮组：btn-group / btn-toolbar / btn-group-vertical；单复选切换用 btn-check + label.btn 的三段式。',
    '关闭按钮 .btn-close 必须带 aria-label；深色背景用 data-bs-theme="dark" 自动变白。',
    '媒体对象（flex 版）：d-flex gap-3 + 头像 flex-shrink-0 + 内容 flex-grow-1。'
  ]);
})();
