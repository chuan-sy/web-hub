/* ============================================================
   附录 C · 关键词词典（5/6）
   C8 组件
   ============================================================ */
window.BS_GLOSSARY = window.BS_GLOSSARY || [];

/* ============================ C8 ============================ */
window.BS_GLOSSARY.push({
  id: 'C8',
  cat: '组件',
  icon: 'bi-ui-checks',
  desc: '一整套"拼好的界面零件"：按钮、导航、卡片、模态框……每个组件的用法都在第 6、7 章，这里给它们的类名做"速查索引"。',
  items: [
    {
      n: 'btn（按钮基座）',
      d: '所有按钮的"底座类"：负责内边距、文字居中、点击动画、焦点环。它单独用是一个"白板按钮"，必须再配一个配色变体（btn-primary 等）。',
      u: '<button type="button" class="btn btn-primary">提交</button>',
      tip: '只写 btn 不写配色，是新手最常见的"按钮没颜色"原因。',
      ref: '3.6.1'
    },
    {
      n: 'btn-primary 等（实心按钮）',
      d: '8 个实心配色：primary / secondary / success / danger / warning / info / light / dark（外加 btn-link 变成链接样式）。每个都自带悬停加深、按下变深、焦点环。',
      re: '^btn-(primary|secondary|success|danger|warning|info|light|dark|link)$',
      ref: '3.6.1'
    },
    {
      n: 'btn-outline-primary 等（描边按钮）',
      d: '"描边款"：平时白底彩边，鼠标悬停时整颗变实心。同一套 8 色。适合"次要操作"或想让界面显得轻盈时。',
      re: '^btn-outline-(primary|secondary|success|danger|warning|info|light|dark)$',
      ref: '3.6.1'
    },
    {
      n: 'btn-sm / btn-lg',
      d: '按钮的两个尺寸档：sm 变小（工具栏、表格里），lg 变大（主行动）。默认尺寸不写类就行。',
      re: '^btn-(sm|lg)$',
      ref: '3.6.4'
    },
    {
      n: 'btn-close',
      d: '标准"×"关闭按钮：透明底、悬停变实。配合 data-bs-dismiss 关闭 alert / modal / offcanvas。深色背景上加 btn-close-white 让它变白。',
      u: '<button type="button" class="btn-close" aria-label="关闭"></button>',
      re: '^btn-close(-white)?$',
      tip: '别忘了 aria-label="关闭"——屏幕阅读器靠它读出按钮用途。',
      ref: '6.12'
    },
    {
      n: 'btn-group',
      d: '按钮组：把一排按钮"焊"成一体（只有两端圆角、无缝拼接），还会自动处理相邻按钮边框重叠的小细节。可加 -sm / -lg，或 btn-group-vertical 竖排。',
      u: '<div class="btn-group">\n  <button class="btn btn-primary">左</button>\n  <button class="btn btn-primary">中</button>\n  <button class="btn btn-primary">右</button>\n</div>',
      re: '^btn-group(-(sm|lg|vertical))?$',
      ref: '6.11.1'
    },
    {
      n: 'btn-toolbar',
      d: '按钮"工具栏"：把多个 btn-group 摆成一条工具条，自动处理组与组的间距。',
      ref: '6.11.2'
    },
    {
      n: 'btn-check',
      d: '"按钮版单选/复选"：把 radio / checkbox 藏起来、用 label 上的 btn 样式做开关按钮。做筛选标签栏（记得 label 的 for 对上 input 的 id）。',
      u: '<input type="radio" class="btn-check" name="opt" id="op1">\n<label class="btn btn-outline-primary" for="op1">选项一</label>',
      ref: '6.11.6'
    },
    {
      n: 'dropdown / dropdown-toggle',
      d: '下拉菜单"触发器"：外层 .dropdown，触发按钮加 .dropdown-toggle（自带小箭头），配 data-bs-toggle="dropdown"。菜单本体是 dropdown-menu，每一项是 dropdown-item。',
      u: '<div class="dropdown">\n  <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">菜单</button>\n  <ul class="dropdown-menu">\n    <li><a class="dropdown-item" href="#">选项一</a></li>\n  </ul>\n</div>',
      re: '^dropdown(-(toggle|menu(-(end|dark))?|item|divider|header))?$',
      ref: '6.1.1'
    },
    {
      n: 'nav / nav-link',
      d: '导航基座：外层 .nav，每项 .nav-item，链接 .nav-link。默认纵向排，配 flex 工具类可横排；再叠加 nav-tabs / nav-pills 等"皮肤"。',
      re: '^nav(-(item|link))?$',
      ref: '6.2.1'
    },
    {
      n: 'nav-tabs / nav-pills',
      d: '两种导航皮肤：<b>tabs</b> 像"文件夹标签"（有边框+下划线感），<b>pills</b> 是"药丸"（选中项整颗变色）。它们只管长相——切换内容要配 7.13 的选项卡插件。',
      re: '^nav-(tabs|pills)$',
      ref: '6.2.2'
    },
    {
      n: 'nav-fill / nav-justified',
      d: '导航"铺满整行"的两种方式：fill 按内容比例铺满，justified 严格等宽。做"分段选择器"（类似 iOS 的 Tab）时很顺手。',
      re: '^nav-(fill|justified)$',
      ref: '6.2.5'
    },
    {
      n: 'nav-underline',
      d: '5.3 新增的"下划线导航"：选中项下方一条粗下划线，轻盈现代的导航样式。',
      re: '^nav-underline$',
      ref: '6.2.1'
    },
    {
      n: 'navbar',
      d: '页面顶部"导航条"组件：品牌区 + 导航链接 +（移动端）折叠按钮的组合基座。常配 navbar-expand-* 控制何时展开。',
      u: '<nav class="navbar navbar-expand-lg bg-body-tertiary">…</nav>',
      re: '^navbar$',
      ref: '6.3.1'
    },
    {
      n: 'navbar-expand-*',
      d: '"到哪个尺寸才展开成横排"：navbar-expand-md = md 以下汉堡菜单、md 起横排；写死 navbar-expand（不带断点）= 永不折叠。',
      re: '^navbar-expand(-(sm|md|lg|xl|xxl))?$',
      tip: '手机预览永远只见汉堡按钮？多半是没写 navbar-expand-*。',
      ref: '6.3.8'
    },
    {
      n: 'navbar-brand',
      d: '导航条上的"品牌位"：放 logo 或站名（字号略大、自动对齐）。',
      re: '^navbar-brand$',
      ref: '6.3.2'
    },
    {
      n: 'navbar-toggler / navbar-toggler-icon',
      d: '移动端的"汉堡按钮"：配 data-bs-toggle="collapse" + data-bs-target="#菜单id" 使用。navbar-toggler-icon 就是那三条小横线（官方用 SVG 背景画的）。',
      re: '^navbar-toggler(-icon)?$',
      ref: '6.3.8'
    },
    {
      n: 'navbar-nav',
      d: '"导航条内部的导航列表"：在 navbar 里用 ul.navbar-nav 装链接，间距与颜色自动适配导航条；可配 me-auto / ms-auto 推位置。',
      re: '^navbar-nav(-scroll)?$',
      ref: '6.3.3'
    },
    {
      n: 'breadcrumb（面包屑）',
      d: '"首页 > 分类 > 当前页"的层级导航：ol 加 breadcrumb，每项 li 加 breadcrumb-item（分隔符是自动画的）。',
      re: '^breadcrumb(-item|-divider)?$',
      ref: '6.2.7'
    },
    {
      n: 'pagination',
      d: '分页组件三件套：ul.pagination > li.page-item > a.page-link。当前页给 page-item 加 active；不可点击加 disabled。',
      re: '^pagination(-(sm|lg))?$|^page-(item|link)$',
      ref: '6.5'
    },
    {
      n: 'badge',
      d: '"徽章"：小圆角标签，显示计数（99+）或状态（新）。常嵌在按钮、列表项里；配 text-bg-* 上色。',
      u: '<span class="badge text-bg-danger">99+</span>',
      tip: '经典坑：badge 会继承标题的大字号，塞进大标题里记得压一下（如加 fs-6）。',
      ref: '6.4'
    },
    {
      n: 'alert',
      d: '"提示条"组件：彩色横条显示成功/警告/错误。默认已经带着 role="alert"（屏幕阅读器自动播报）。',
      u: '<div class="alert alert-warning" role="alert">请注意：这条信息很重要。</div>',
      re: '^alert(-(primary|secondary|success|danger|warning|info|light|dark|dismissible|link|heading))?$',
      ref: '7.5.1'
    },
    {
      n: 'card / card-body / card-title / card-text',
      d: '卡片全家桶：card 是外框（圆角+细边框），card-body 是内衬（自动 padding），card-title / card-text 管标题与正文的间距节奏。',
      u: '<div class="card" style="max-width: 20rem;">\n  <div class="card-body">\n    <h5 class="card-title">卡片标题</h5>\n    <p class="card-text">卡片内容文字。</p>\n  </div>\n</div>',
      re: '^card(-(body|title|subtitle|text|link))?$',
      ref: '6.8.1'
    },
    {
      n: 'card-header / footer / img-top',
      d: '卡片的结构件：card-header 页眉、card-footer 脚注（都自带分隔线）、card-img-top 封面图（自动圆角）、card-img-overlay 在图片上盖文字。',
      re: '^card-(header|footer|img-top|img-bottom|img-overlay)$',
      ref: '6.8.3'
    },
    {
      n: 'card-group',
      d: '"卡片组"：多张卡片自动变成等宽等高、无缝拼接；卡片布局（card-group）则是等宽带缝。做定价表、功能对比的首选。',
      re: '^card-group$',
      ref: '6.8.6'
    },
    {
      n: 'list-group / list-group-item',
      d: '"列表组"：一组内容变成带边框的竖排列表。item 加 list-group-item-action 整行可点、悬停变色；list-group-flush 去外框；list-group-horizontal 横排。',
      re: '^list-group(-(item(-(action|active|disabled|primary|secondary|success|danger|warning|info|light|dark))?|flush|horizontal(-(sm|md|lg|xl|xxl))?))?$',
      ref: '6.6'
    },
    {
      n: 'progress / progress-bar',
      d: '进度条：外层 progress 是"槽"，内层 progress-bar 是"条"——给条设 style="width: 60%" 表示进度。加 progress-bar-striped 出条纹、-animated 让它流动、外层 progress-stacked 做堆叠分段。',
      u: '<div class="progress" role="progressbar" aria-label="示例进度" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">\n  <div class="progress-bar" style="width: 60%">60%</div>\n</div>',
      re: '^progress(-(bar(-(striped|animated))?|stacked))?$',
      ref: '6.7'
    },
    {
      n: 'spinner-border / spinner-grow',
      d: '两个加载动画：border 是"转圈"、grow 是"呼吸"（像信号灯）。配 text-primary 上色，加 spinner-border-sm 变小。',
      u: '<div class="spinner-border text-primary" role="status"></div>',
      re: '^spinner-(border|grow)(-sm)?$',
      ref: '6.9'
    },
    {
      n: 'toast',
      d: '"轻量通知气泡"：几秒后自动消失的小纸条（"已保存""新消息"）。结构 toast > toast-header + toast-body；常放 toast-container 里定位到右下角。',
      re: '^toast(-(container|header|body))?$',
      ref: '7.6'
    },
    {
      n: 'modal / modal-dialog / modal-content',
      d: '模态框三层结构：<b>modal</b>（遮罩层）> <b>modal-dialog</b>（居中定位层，可加 -centered / -scrollable / -sm/-lg/-xl）> <b>modal-content</b>（白盒子）。盒子里再分 header / body / footer。',
      u: '<div class="modal" id="m1" tabindex="-1">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">…</div>\n  </div>\n</div>',
      re: '^modal(-(dialog(-(centered|scrollable|sm|lg|xl|fullscreen))?|content|header|body|footer|title|backdrop))?$',
      ref: '7.2.1'
    },
    {
      n: 'offcanvas',
      d: '"侧滑抽屉"：从屏幕边缘滑出的面板（移动版菜单、购物车、设置）。方向用 offcanvas-start / end / top / bottom；offcanvas-md 等可做"到某尺寸才变抽屉"的响应式。',
      u: '<div class="offcanvas offcanvas-start" id="drawer1" tabindex="-1">…</div>',
      re: '^offcanvas(-(start|end|top|bottom|sm|md|lg|xl|xxl|header|body|title))?$',
      ref: '7.10'
    },
    {
      n: 'carousel',
      d: '轮播（幻灯片）：carousel（外壳）> carousel-inner（轨道）> carousel-item（每一屏，第一屏加 active）。配 carousel-indicators（小圆点）、carousel-control-prev / next（左右箭头）、carousel-caption（图上字幕）、carousel-fade（淡入淡出）。',
      re: '^carousel(-(inner|item|indicators|caption|fade|control-(prev|next)(-icon)?))?$',
      ref: '7.11'
    },
    {
      n: 'accordion（手风琴）',
      d: '可折叠面板组：accordion > accordion-item > accordion-header（内含 accordion-button）+ accordion-collapse（内含 accordion-body）。同一时间只开一个（兄弟自动排他）；accordion-flush 去外框。',
      re: '^accordion(-(item|header|button|collapse|body|flush))?$',
      ref: '7.9'
    },
    {
      n: 'collapse',
      d: '"折叠"基础类：默认把内容藏起来，配合 data-bs-toggle="collapse" 点击展开。加 show 默认展开；collapse-horizontal 做横向折叠。',
      re: '^collapse(-horizontal)?$',
      ref: '7.8'
    },
    {
      n: 'tab-pane / tab-content',
      d: '选项卡"内容区"：tab-content 是容器，每个 tab-pane 是一屏内容。切换（active 的转移、加淡入动画）由 7.13 的选项卡插件自动完成。',
      re: '^tab-(pane|content)$',
      ref: '7.13.1'
    },
    {
      n: 'tooltip（工具提示）',
      d: '悬停时浮出的小气泡。<b>需要手动初始化</b>：new bootstrap.Tooltip(元素)，提示文字放 data-bs-title。',
      u: '<button class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-title="我是提示文字">悬停我</button>\n<script>new bootstrap.Tooltip(document.querySelector("[data-bs-toggle=tooltip]"));<\/script>',
      tip: '忘初始化 = 它"完全不出现"，这是头号原因。',
      re: '^tooltip$',
      ref: '7.3'
    },
    {
      n: 'popover（弹出框）',
      d: 'tooltip 的"加强版"：有标题 + 富文本内容，点击弹出。同样需要初始化，标题/内容放 data-bs-title / data-bs-content。',
      re: '^popover$',
      ref: '7.4'
    },
    {
      n: 'fade / show',
      d: '两个基础"状态类"：fade 给元素加淡入淡出过渡（modal、tab、alert 都能配）；show 表示"当前正在显示"。通常你只需在 HTML 里预置 fade，切换由插件负责。',
      re: '^(fade|show)$',
      ref: '7.13.3'
    }
  ]
});
