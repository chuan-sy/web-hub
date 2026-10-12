/* ============================================================
   附录 D · 对照专区（下部：D.5 ~ D.8）
   追加到 vs 章节：速查表 / 易错表 / 查文档指南 / 决策建议
   ============================================================ */
(function () {
  var ch = null;
  window.BS_DATA.forEach(function (c) { if (c.id === 'vs') ch = c; });
  if (!ch) return;

  /* ---------- 速查表：需求 → 原生 → Bootstrap ---------- */
  var quickRows = [
    ['文字水平居中', 'text-align: center', '.text-center'],
    ['块级元素水平居中', 'margin: 0 auto', '.mx-auto'],
    ['一行两列、手机自动堆叠', 'flex / float + 媒体查询', '.col-12 .col-md-6'],
    ['卡片之间的间距', '给每张卡写 margin', '行上加 .g-3'],
    ['图片自适应不溢出', 'max-width:100%; height:auto', '.img-fluid'],
    ['圆角 / 正圆头像', 'border-radius: 50%', '.rounded / .rounded-circle'],
    ['卡片阴影', 'box-shadow: …', '.shadow / .shadow-sm'],
    ['手机隐藏、电脑显示', '@media + display:none', '.d-none .d-md-block'],
    ['固定顶部导航', 'position: fixed', '.fixed-top / .sticky-top'],
    ['图标与文字垂直居中', 'flex + align-items', '.d-flex .align-items-center'],
    ['灰色说明小字', '自己调 font-size + color', '.small .text-body-secondary'],
    ['按钮组', '逐个调 margin / border', '.btn-group'],
    ['加载转圈', '手写 @keyframes 动画', '.spinner-border'],
    ['进度条', '两层结构 + 手动设宽', '.progress / .progress-bar'],
    ['美化表格', '给每个 td / th 写样式', '.table .table-striped .table-hover'],
    ['表单控件统一外观', '逐个控件写样式', '.form-control / .form-select'],
    ['点击展开的下拉菜单', '约 20 行 JS', 'data-bs-toggle="dropdown"'],
    ['弹窗', '手写遮罩 + 焦点管理', '.modal + 插件'],
    ['自动轮播', '手写定时器', '.carousel + data-bs-ride="carousel"'],
    ['折叠面板', 'classList.toggle + 高度动画', 'data-bs-toggle="collapse"'],
    ['可关闭的提示条', '自己做一个组件', '.alert + .alert-dismissible'],
    ['角标数字', '绝对定位慢慢调', '.position-absolute + .translate-middle + .badge'],
    ['深色模式', '维护一整套深色 CSS', 'data-bs-theme="dark"'],
    ['响应式栅格', '每个断点一段媒体查询', '.col-md-* 一套中缀搞定']
  ];
  var quickTable = '<div class="table-responsive"><table class="table table-striped table-hover align-middle mb-0">' +
    '<thead><tr><th style="min-width:180px">需求</th><th>原生怎么写</th><th>Bootstrap 怎么写</th></tr></thead><tbody>' +
    quickRows.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td><code>' + r[1] + '</code></td><td><code>' + r[2] + '</code></td></tr>';
    }).join('') +
    '</tbody></table></div>';

  /* ---------- 易错表：错误 → 正确 → 原因 ---------- */
  var badRows = [
    ['col-6-md', 'col-md-6', '单词顺序：断点在中间、份数在最后'],
    ['m-t-3', 'mt-3', '方向字母连写，没有第二个连字符'],
    ['class="margin-top: 10px"', 'class="mt-3"', 'class 里只放"类名"，不放 CSS 语句'],
    ['忘写 viewport meta', '&lt;meta name="viewport" …&gt;', '没有它，所有响应式类都会失效'],
    ['row 里直接塞标题、文字', '内容先包进 col', 'row 的直接子元素应该是"列"'],
    ['col 里直接嵌 col', '新开一个 row 再嵌', '嵌套要先建新的"行"，否则槽宽算错'],
    ['.navbar-light / .navbar-dark', 'data-bs-theme="dark"', '这两个类在 5.3 已被删除'],
    ['.text-muted', '.text-body-secondary', '5.3 推荐的新类名（旧类仍可用但不推荐）'],
    ['data-toggle="modal"', 'data-bs-toggle="modal"', '少了 bs 是 v4 的老写法'],
    ['mt-n3 没效果', '开启 $enable-negative-margins', '预编译版默认不生成"负边距"类'],
    ['class="btn"（没颜色）', '补上 .btn-primary 等配色', 'btn 只是基座，不负责颜色'],
    ['tooltip 完全不出现', 'new bootstrap.Tooltip(el) 初始化', '提示类插件需要手动初始化'],
    ['点了没反应', '检查 data-bs-target 的 #id 是否一致', '最常见的一类低级错误'],
    ['改了 $primary 没生效', '变量写在 @import "bootstrap" 之前', 'Sass 的顺序硬规定'],
    ['图片撑破手机布局', '给图加 .img-fluid', '缺少"最大宽度"限制'],
    ['表格"没有样式"', '给 table 加 .table', '不写类就是浏览器默认样子'],
    ['container 里再套 container', '一个页面只留一个 container', '宽度分档会"套娃"，版式反而变怪']
  ];
  var badTable = '<div class="table-responsive"><table class="table table-bordered align-middle mb-0">' +
    '<thead><tr><th style="min-width:200px">错误写法</th><th style="min-width:220px">正确写法</th><th>为什么</th></tr></thead><tbody>' +
    badRows.map(function (r) {
      return '<tr><td><code class="text-danger">' + r[0] + '</code></td><td><code class="text-success">' + r[1] + '</code></td><td>' + r[2] + '</td></tr>';
    }).join('') +
    '</tbody></table></div>';

  /* ---------- 文档结构六卡片 ---------- */
  var docCards = [
    ['bi-info-circle', '概览 Overview', '这个组件是什么、适合干什么'],
    ['bi-grid', '示例 Examples', '最常用写法，看懂就能抄'],
    ['bi-sliders', '用法 Usage', '进阶结构、注意事项'],
    ['bi-gear', '选项 Options', 'data-bs-* 属性 / JS 配置项'],
    ['bi-code-slash', '方法 Methods', 'show() / hide() 这类 API'],
    ['bi-broadcast', '事件 Events', 'shown.bs.* 这类时机的钩子']
  ];
  var docDemo = '<div class="row g-2">' + docCards.map(function (c) {
    return '<div class="col-6 col-md-4"><div class="p-3 border rounded-3 h-100">' +
      '<div class="mb-1"><i class="bi ' + c[0] + ' me-1 text-primary"></i><b class="small">' + c[1] + '</b></div>' +
      '<div class="small text-body-secondary">' + c[2] + '</div></div></div>';
  }).join('') + '</div>';

  ch.sections.push({
    id: 'D.5',
    t: '速查表：常见需求 → 两种写法',
    d: '把"想要的效果"翻译成代码的对照表。用法：写页面时想不起类名，先来这查；查不到再去附录 C 词典。注意观察规律——<b>第三列总是比第二列短</b>。',
    demo: quickTable,
    hint: '这份表建议截图存到手机里，写代码时随查随用',
    code: '<div class="table-responsive">\n  <table class="table table-striped table-hover align-middle">\n    <thead>\n      <tr><th>需求</th><th>原生怎么写</th><th>Bootstrap 怎么写</th></tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>文字水平居中</td>\n        <td><code>text-align: center</code></td>\n        <td><code>.text-center</code></td>\n      </tr>\n      <!-- 其余行依此类推…… -->\n    </tbody>\n  </table>\n</div>\n\n<!-- 重点不是"写表格"，而是体会每一行的第三列都比中间那列短 -->'
  }, {
    id: 'D.6',
    t: '自查清单：新手最容易写错的 17 处',
    d: '这些都是真实高频错误（括号里是"为什么"）。建议写代码前扫一眼，出错时逐条排查——<b>红色列里有没有你的写法？</b>',
    demo: badTable,
    hint: '把这张表当"体检单"：布局怪、样式不生效、点了没反应，逐行自查',
    code: '<!-- 自查习惯：出错时按"三层"排查 -->\n\n<!-- 1. 类名层：拼写、顺序、断点位置（看"错误"列） -->\n<div class="col-md-6 mt-3"></div>\n\n<!-- 2. 属性层：data-bs-* 的拼写、target 的 #id 是否一致 -->\n<button data-bs-toggle="collapse" data-bs-target="#panel1">切换</button>\n<div class="collapse" id="panel1">…</div>\n\n<!-- 3. 环境层：viewport 写了吗？JS 引了吗？Sass 变量顺序对吗？ -->\n<meta name="viewport" content="width=device-width, initial-scale=1">'
  }, {
    id: 'D.7',
    t: '怎么查官方文档：把"查得到"变成"查得快"',
    d: '官方文档每个组件页都是同一个结构（下面六张卡片）。查的时候记住三条路径：① <b>想抄现成结构</b> → 看 Examples；② <b>想改行为</b> → 看 Options / Methods / Events；③ <b>页面上的效果不知道哪个类干的</b> → 按 F12 检查元素，看 Styles 面板。',
    demo: docDemo,
    hint: '一个组件页，永远是这六块内容',
    tip: '两个小技巧：看文档时注意右上角版本切到 <b>5.3</b>（老教程版本不同会坑）；遇到报错把英文原文粘进 GitHub 仓库的 Issues 搜索框——大概率有人已经问过并且被解答了。',
    code: '<!-- 组件文档的网址规律： -->\nhttps://getbootstrap.com/docs/5.3/components/组件名/\n\n<!-- 例如： -->\nhttps://getbootstrap.com/docs/5.3/components/modal/\nhttps://getbootstrap.com/docs/5.3/components/carousel/\n\n<!-- 工具类、栅格、表单同理，把 components 换成 -->\n<!-- utilities / layout / forms 即可。 -->'
  }, {
    id: 'D.8',
    t: '实战建议：什么时候用 Bootstrap，什么时候回原生',
    d: 'Bootstrap 不是"必须全用"的框架。它的最佳定位是：<b>把标准化的活儿交给它，把个性化的事留给自己</b>。下面两栏清单帮你建立判断力。',
    demo:
      '<div class="row g-3">' +
      '<div class="col-md-6"><div class="p-3 border rounded-3 h-100">' +
      '<div class="fw-bold small mb-2"><i class="bi bi-check2-circle text-success me-1"></i>放心交给 Bootstrap</div>' +
      '<ul class="small text-body-secondary mb-0 ps-3">' +
      '<li>标准界面部件：导航条、卡片、表单、按钮、弹窗</li>' +
      '<li>响应式布局：栅格与断点类名</li>' +
      '<li>交互 MVP：下拉、折叠、轮播、提示</li>' +
      '<li>需要"快且不丑"的原型 / 后台界面</li>' +
      '</ul></div></div>' +
      '<div class="col-md-6"><div class="p-3 border rounded-3 h-100">' +
      '<div class="fw-bold small mb-2"><i class="bi bi-tools text-warning me-1"></i>回原生 / 自己写更合适</div>' +
      '<ul class="small text-body-secondary mb-0 ps-3">' +
      '<li>高度定制的视觉设计（改到亲妈都不认识时，不如自己写）</li>' +
      '<li>性能敏感的小部件（几百字节能搞定的事别拉一个插件）</li>' +
      '<li>特殊动效：滚动视差、复杂手势、canvas 绘图</li>' +
      '<li>业务逻辑复杂、需要完全掌控 DOM 时序的地方</li>' +
      '</ul></div></div>' +
      '</div>',
    tip: '现实项目里几乎都是"混合"的：Bootstrap 搭骨架和标准件，你自己的 CSS/JS 负责个性化。两者不冲突——这也是为什么你已有的三件套基础这么值钱。',
    code: null
  });
})();
