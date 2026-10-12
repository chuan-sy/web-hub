/* ============================================================
   第 4 章 工具类
   ============================================================ */
window.BS_DATA.push({
  id: 'ch4',
  num: '第 4 章',
  title: '工具类',
  accent: '#ea580c',
  accentSoft: '#fff1e6',
  icon: 'bi-tools',
  intro: '工具类（Utilities）是 Bootstrap 的"瑞士军刀"：不用写一行 CSS，靠类名就能调间距、边框、透明度、flex 布局、定位、阴影……这一章知识点最多，但规律极强，基本是"一看就懂、一用就上瘾"。',
  goals: [
    '看懂工具类的命名规律（属性 + 方位 + 尺寸）',
    '会用边距、边框、尺寸、阴影类快速微调样式',
    '彻底搞懂 flex 布局的一套类（做布局的核心）',
    '会用定位、溢出、比例、延伸链接等进阶工具',
    '能组合工具类"徒手"拼出常见组件'
  ],
  docs: [
    { t: '间距 Spacing', u: 'https://getbootstrap.com/docs/5.3/utilities/spacing/' },
    { t: 'Flex', u: 'https://getbootstrap.com/docs/5.3/utilities/flex/' },
    { t: '定位 Position', u: 'https://getbootstrap.com/docs/5.3/utilities/position/' },
    { t: '全部工具类', u: 'https://getbootstrap.com/docs/5.3/utilities/api/' }
  ],
  sections: [
    {
      id: '4.1',
      t: '透明度',
      d: '<code>.opacity-0 / 25 / 50 / 75 / 100</code> 控制元素整体的透明度，数字就是"剩余的不透明百分比"。另外，文字透明度用 <code>.text-opacity-*</code>（配颜色类用），背景透明度用 <code>.bg-opacity-*</code>——三者管的"对象"不同，别混用。',
      demo:
        '<div class="d-flex flex-wrap gap-3 mb-3">' +
        '<div class="dbox dbox-3 opacity-100" style="width:88px">100</div>' +
        '<div class="dbox dbox-3 opacity-75" style="width:88px">75</div>' +
        '<div class="dbox dbox-3 opacity-50" style="width:88px">50</div>' +
        '<div class="dbox dbox-3 opacity-25" style="width:88px">25</div>' +
        '<div class="dbox dbox-3 opacity-0" style="width:88px">0</div>' +
        '</div>' +
        '<p class="text-body-secondary small mb-0">opacity 会连文字一起变淡；如果只想让背景变淡，用 bg-opacity（见 3.2.2）。</p>',
      tip: 'opacity-0 只是"看不见"，元素还占着位置；要彻底移除（不占位），用后面 4.6 的 d-none。'
    },
    {
      id: '4.2',
      t: '边框',
      group: true,
      d: '四个维度随便组合：有没有边框 → 什么颜色 → 多粗 → 多圆。',
      children: [
        {
          id: '4.2.1',
          t: '基本边框',
          d: '加边框 <code>.border</code>；只要一边用 <code>.border-top / -end / -bottom / -start</code>；去掉已有边框用 <code>.border-0</code>（也可只去一边，如 <code>.border-top-0</code>）。',
          demo:
            '<div class="d-flex flex-wrap gap-3">' +
            '<div class="border rounded p-2 small">border</div>' +
            '<div class="border-top p-2 small">border-top</div>' +
            '<div class="border-end p-2 small">border-end</div>' +
            '<div class="border-bottom p-2 small">border-bottom</div>' +
            '<div class="border-start p-2 small">border-start</div>' +
            '<div class="border border-top-0 p-2 small">border + 去掉上边</div>' +
            '<div class="border border-0 p-2 small">border-0（等于没加）</div>' +
            '</div>',
          tip: 'end 是"结尾边"：从左往右的页面里指右边，从右往左的语言里自动指左边。'
        },
        {
          id: '4.2.2',
          t: '边框颜色',
          d: '边框默认是浅灰色，换色用 <code>.border-primary / -success / -danger</code> 等；深色底上想用白边框就写 <code>.border-white</code>。还能叠 <code>.border-opacity-25/50/75</code> 让边框变淡。',
          demo:
            '<div class="d-flex flex-wrap gap-3 mb-3">' +
            '<div class="border border-primary rounded p-2 small">border-primary</div>' +
            '<div class="border border-success rounded p-2 small">border-success</div>' +
            '<div class="border border-danger rounded p-2 small">border-danger</div>' +
            '<div class="border border-warning rounded p-2 small">border-warning</div>' +
            '<div class="border border-dark rounded p-2 small">border-dark</div>' +
            '</div>' +
            '<div class="d-flex flex-wrap gap-3 mb-3">' +
            '<div class="border border-primary border-opacity-75 rounded p-2 small">opacity 75</div>' +
            '<div class="border border-primary border-opacity-50 rounded p-2 small">opacity 50</div>' +
            '<div class="border border-primary border-opacity-25 rounded p-2 small">opacity 25</div>' +
            '</div>' +
            '<div class="bg-dark rounded p-2 d-inline-block"><span class="border border-white rounded p-2 small text-white">深色底上的 border-white</span></div>',
          tip: '边框颜色类必须和 <code>.border</code> 一起用（只有颜色没有 border，边框根本不存在）。'
        },
        {
          id: '4.2.3',
          t: '边框宽度',
          d: '默认边框 1px；加粗用 <code>.border-2 / 3 / 4 / 5</code>（2～5px）。注意宽度类也要和 .border 搭配。',
          demo:
            '<div class="d-flex flex-wrap gap-3 align-items-center">' +
            '<div class="border border-1 border-primary rounded p-2 small">border-1</div>' +
            '<div class="border border-2 border-primary rounded p-2 small">border-2</div>' +
            '<div class="border border-3 border-primary rounded p-2 small">border-3</div>' +
            '<div class="border border-4 border-primary rounded p-2 small">border-4</div>' +
            '<div class="border border-5 border-primary rounded p-2 small">border-5</div>' +
            '</div>',
          tip: '想给某一边单独加粗？用 <code>.border-top</code> + <code>.border-top-4</code>? 不行——宽度类只有整体版。单边加粗要用 Sass 定制或自己写 CSS（附录 A 会讲）。'
        },
        {
          id: '4.2.4',
          t: '边框圆角',
          d: '圆角四档起步：<code>.rounded</code>（小）、<code>.rounded-3</code>（卡片常用）、<code>.rounded-4</code>、<code>.rounded-5</code>（超大），直角用 <code>.rounded-0</code>。特殊形状：<code>.rounded-circle</code>（正圆）、<code>.rounded-pill</code>（胶囊）。只圆某几角用 <code>.rounded-top / -end / -bottom / -start</code>，还能加尺寸后缀（如 <code>.rounded-top-4</code>）。',
          demo:
            '<div class="row g-3 mb-3">' +
            '<div class="col"><div class="dbox dbox-3 py-4 rounded-0">rounded-0</div></div>' +
            '<div class="col"><div class="dbox dbox-3 py-4 rounded-2">rounded-2</div></div>' +
            '<div class="col"><div class="dbox dbox-3 py-4 rounded-4">rounded-4</div></div>' +
            '<div class="col"><div class="dbox dbox-3 py-4 rounded-5">rounded-5</div></div>' +
            '</div>' +
            '<div class="row g-3">' +
            '<div class="col"><div class="dbox py-4 rounded-top-4">rounded-top-4</div></div>' +
            '<div class="col"><div class="dbox py-4 rounded-bottom-4">rounded-bottom-4</div></div>' +
            '<div class="col"><div class="dbox py-4 rounded-start-4">rounded-start-4</div></div>' +
            '<div class="col"><div class="dbox py-4 rounded-end-4">rounded-end-4</div></div>' +
            '</div>',
          tip: '记法：数字越大越圆。<code>rounded</code> ≈ rounded-2 附近；卡片一般 rounded-3，按钮用 rounded-3 或 rounded-pill。'
        }
      ]
    },
    {
      id: '4.3',
      t: '边距',
      group: true,
      d: '全 Bootstrap 使用频率最高的工具类，没有之一。命名格式：<b>{属性}{方位}-{尺寸}</b>。',
      children: [
        {
          id: '4.3.1',
          cmp: [
            {
              label: '"上边距 1rem"的两种写法',
              native: '/* 原生：属性、方位、数值、响应式全自己写 */\n.card { margin-top: 1rem; }\n@media (min-width: 768px) {\n  .card { margin-top: 0; }\n}',
              bs: '<div class="mt-3">上边距 1rem（3 档）</div>\n<div class="mt-4 mt-md-0">小屏 4 档、md 起清零</div>',
              note: '命名公式 = {m 或 p}{方位}-{档位}；方位不写 = 四周全加。'
            }
          ],
          t: '基本边距类',
          d: '属性：<code>m</code> = margin（外边距，推别人），<code>p</code> = padding（内边距，撑自己）。方位：t 上 / b 下 / s 左（start）/ e 右（end）/ x 左右 / y 上下 / 不写 = 四周。尺寸：0 到 5 档 + auto。<code>mx-auto</code> 是经典的"固定宽度块水平居中"。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6">' +
            '<div class="small text-body-secondary mb-1">padding：内边距撑开自己（背景变大）</div>' +
            '<div class="bg-primary bg-opacity-25 rounded mb-2"><div class="dbox p-0" style="background:none;border:0">p-0</div></div>' +
            '<div class="bg-primary bg-opacity-25 rounded"><div class="dbox p-4" style="background:none;border:0">p-4</div></div>' +
            '</div>' +
            '<div class="col-md-6">' +
            '<div class="small text-body-secondary mb-1">margin：外边距推开别人（虚线是容器）</div>' +
            '<div class="border rounded p-2" style="border-style:dashed!important">' +
            '<div class="dbox m-0">m-0（贴着）</div>' +
            '<div class="dbox mt-4">mt-4（被推下来）</div>' +
            '</div>' +
            '</div></div>' +
            '<div class="mt-3"><div class="small text-body-secondary mb-1">mx-auto：宽 240px 的块水平居中</div>' +
            '<div class="bg-success bg-opacity-25 rounded mx-auto p-2 text-center small" style="width:240px">mx-auto</div></div>',
          tip: '<b>口诀：</b>m 是"把人推远"，p 是"自己长胖"。看不见效果时先给元素加个背景色，一眼就明白。另：尺寸记忆——1=4px，2=8px，3=16px，4=24px，5=48px（约数）。'
        },
        {
          id: '4.3.2',
          t: '负外边距类',
          d: '<code>mt-n1</code> 这类"负边距"可以把元素往回拉（变成 -4px），做"卡片向上叠一层""内容压住横幅"的效果。注意：<b>Bootstrap 5 默认不生成这些类</b>，官方说需要在编译时打开开关——设置 Sass 变量 <code>$enable-negative-margins: true</code> 后重新编译（附录 A 会讲怎么编译）。',
          demo:
            '<div class="pt-4">' +
            '<div class="rounded-top-4 bg-primary text-white text-center small py-4">横幅（背景）</div>' +
            '<div class="neg-demo mx-3 bg-white border rounded-3 shadow-sm p-3 text-center small">' +
            '这个白卡片往上"拉"了 1.5rem（负边距效果）<br>' +
            '<span class="text-body-secondary">编译时未开启负边距类，这里的演示用自定义 CSS 模拟</span>' +
            '</div>' +
            '</div>',
          tip: '<b>考试/面试爱考：</b>负边距类默认关闭，开启方式就是 <code>$enable-negative-margins: true</code>，开启后类名格式是在尺寸前加 n：<code>.mt-n1</code>。'
        },
        {
          id: '4.3.3',
          t: 'gap 类',
          d: 'flex 或 grid 容器里，<code>gap-1</code>～<code>gap-5</code> 一次性设置"子元素之间的间距"，比给每个子元素手动加 margin 干净得多。还能分方向：<code>row-gap-*</code> 管行距、<code>column-gap-*</code> 管列距。',
          demo:
            '<div class="small text-body-secondary mb-1">d-flex gap-1（缝很小）</div>' +
            '<div class="d-flex gap-1 mb-3"><span class="dbox">A</span><span class="dbox">B</span><span class="dbox">C</span></div>' +
            '<div class="small text-body-secondary mb-1">d-flex gap-4（缝很大）</div>' +
            '<div class="d-flex gap-4 mb-3"><span class="dbox">A</span><span class="dbox">B</span><span class="dbox">C</span></div>' +
            '<div class="small text-body-secondary mb-1">d-grid gap-3 + 两列网格</div>' +
            '<div class="d-grid gap-3" style="grid-template-columns:1fr 1fr">' +
            '<span class="dbox">1</span><span class="dbox">2</span><span class="dbox">3</span><span class="dbox">4</span></div>',
          tip: 'gap 是"容器给孩子的间距"，栅格行上的 g-* 其实是它的"亲戚"（实现方式略有不同，效果类似）。'
        }
      ]
    },
    {
      id: '4.4',
      t: '尺寸',
      group: true,
      d: '宽高也有一组快捷类，常用的是百分比系列。',
      children: [
        {
          id: '4.4.1',
          t: '宽度',
          d: '<code>.w-25 / 50 / 75 / 100 / auto</code> 分别占父容器的 25%、50%、75%、100% 或"按内容自动"。做进度条、分隔线、栅格内的局部对齐常用它。',
          demo:
            '<div class="mb-2"><div class="w-25 bg-primary text-white rounded px-2 small">w-25</div></div>' +
            '<div class="mb-2"><div class="w-50 bg-primary text-white rounded px-2 small">w-50</div></div>' +
            '<div class="mb-2"><div class="w-75 bg-primary text-white rounded px-2 small">w-75</div></div>' +
            '<div class="mb-2"><div class="w-100 bg-primary text-white rounded px-2 small">w-100</div></div>' +
            '<div><span class="w-auto bg-primary text-white rounded px-2 small d-inline-block">w-auto（宽度随文字）</span></div>',
          tip: 'w-100 用在 <code>&lt;img&gt;</code> 上就等于 img-fluid 的宽度行为；用在按钮上就是"块级按钮"（见 3.6.5）。'
        },
        {
          id: '4.4.2',
          t: '高度',
          d: '<code>.h-25 / 50 / 75 / 100 / auto</code> 控制高度（需要父元素有明确高度，否则百分比无从算起）。整屏高度另有专用类：<code>.vh-100</code>（视口高度的 100%）和更温和的 <code>.min-vh-100</code>（至少一屏高，内容多了可以撑高）。',
          demo:
            '<div class="d-flex gap-3 align-items-end border rounded p-2" style="height:150px">' +
            '<div class="h-25 bg-success bg-opacity-50 rounded px-2 small" style="width:74px">h-25</div>' +
            '<div class="h-50 bg-success bg-opacity-50 rounded px-2 small" style="width:74px">h-50</div>' +
            '<div class="h-75 bg-success bg-opacity-50 rounded px-2 small" style="width:74px">h-75</div>' +
            '<div class="h-100 bg-success bg-opacity-50 rounded px-2 small" style="width:74px">h-100</div>' +
            '</div>',
          hint: '注意外层的 d-flex 和固定 150px 高度——没有它，百分比高度就没有参照物',
          tip: '页面级布局（比如整屏登录页）用 <code>.min-vh-100</code> 更安全：屏幕小而内容多时不会被切掉。'
        },
        {
          id: '4.4.3',
          t: '最大宽度或高度',
          d: '<code>.mw-100</code>（最大宽度 100%）和 <code>.mh-100</code>（最大高度 100%）用来"限制元素不能被撑爆"。最典型的用法：flex 布局里给图片加 <code>.mw-100</code>，防止大图挤坏布局。',
          demo:
            '<div class="d-flex border rounded p-2 gap-3">' +
            '<img src="' + BS_PH.img1 + '" class="mw-100 rounded" alt="受最大宽度限制的图片" style="max-width:100%">' +
            '<div class="small text-body-secondary">上面这张 800px 宽的图片在 flex 容器里被 mw-100 限制住，没有撑破边界。</div>' +
            '</div>',
          code:
            '<div class="d-flex gap-3">\n' +
            '  <img src="images/photo.jpg" class="mw-100 rounded" alt="受限图片">\n' +
            '  <div>文字说明……</div>\n' +
            '</div>',
          tip: '<code>img-fluid</code> ≈ <code>mw-100</code> 的"专业版"（还处理了高度自适应），图片场景优先用前者。'
        }
      ]
    },
    {
      id: '4.5',
      t: '浮动',
      group: true,
      d: '浮动（float）是老牌图文环绕技术，配合清除浮动使用。',
      children: [
        {
          id: '4.5.1',
          t: '浮动属性',
          d: '<code>.float-start</code> 左浮动、<code>.float-end</code> 右浮动、<code>.float-none</code> 取消浮动。浮动的元素会被后面的文字"绕开"，是图文混排的经典做法。还能按断点生效：<code>.float-md-start</code>。',
          demo:
            '<div class="mb-3">' +
            '<img src="' + BS_PH.img3 + '" class="float-end rounded ms-3" width="92" alt="右浮动">' +
            '<p class="small mb-0">这张图用了 float-end，所以靠在右边，文字自动从左边绕着它排版。这个技巧在新闻、百科类页面里非常常见，能有效利用版面空间。</p>' +
            '<div style="clear:both"></div></div>' +
            '<div>' +
            '<img src="' + BS_PH.img3 + '" class="float-start rounded me-3" width="92" alt="左浮动">' +
            '<p class="small mb-0">这张图用了 float-start，靠在左边，文字在右侧环绕。注意两边都用了 clear:both 收尾，防止浮动"漏"到下一块。</p>' +
            '<div style="clear:both"></div></div>',
          code:
            '<img src="images/pic.jpg" class="float-start ms-3" width="92" alt="图">\n' +
            '<p>文字自动环绕……</p>',
          tip: '中文排版习惯：左图配 <code>me-3</code>（右间距），右图配 <code>ms-3</code>（左间距），图文才不会贴在一起。'
        },
        {
          id: '4.5.2',
          t: '清除浮动',
          d: '浮动元素会"脱离正常文档流"：如果浮动元素比父容器还高，父容器就会"塌陷"（背景包不住它）。给父容器加 <code>.clearfix</code> 可以自动清除浮动，让父容器重新包住所有子元素。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">没有 clearfix：父容器塌陷</div>' +
            '<div class="border border-danger rounded p-2">' +
            '<div class="float-start bg-danger bg-opacity-25 rounded p-3 small" style="height:96px">浮动的高块</div>' +
            '<div class="small">父容器本来应该包住左边这个高块，但它塌陷了。</div>' +
            '</div></div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">用了 clearfix：父容器正常包裹</div>' +
            '<div class="border border-success rounded p-2 clearfix">' +
            '<div class="float-start bg-success bg-opacity-25 rounded p-3 small" style="height:96px">浮动的高块</div>' +
            '<div class="small">父容器现在包住了这个浮动块，边框完整。</div>' +
            '</div></div>' +
            '</div>',
          tip: '一句话记忆：<b>浮动在高个子旁边，父容器会"兜不住"，clearfix 就是给父容器兜底的网。</b>'
        }
      ]
    },
    {
      id: '4.6',
      t: '定义 display',
      d: '<code>.d-*</code> 系列直接设置元素的显示方式：<code>d-none</code> 隐藏、<code>d-block</code> 块级、<code>d-inline</code> 行内、<code>d-inline-block</code> 行内块、<code>d-flex</code> 弹性盒（下一节的主角）、<code>d-grid</code> 网格、<code>d-table</code> 等。它们还能按断点"分级生效"——<code>d-none d-md-block</code> 就是"手机上藏起来、md 以上才显示"的经典写法。',
      demo:
        '<div class="mb-3 d-flex flex-wrap gap-2">' +
        '<span class="d-inline bg-primary bg-opacity-25 p-1 small">d-inline（行内）</span>' +
        '<span class="d-inline bg-primary bg-opacity-25 p-1 small">第二个 d-inline</span>' +
        '<span class="d-block bg-success bg-opacity-25 p-1 small">d-block（自己独占一行）</span>' +
        '<span class="d-none bg-danger bg-opacity-25 p-1 small">d-none 你看不见我</span>' +
        '</div>' +
        '<div class="p-3 border rounded mb-2 text-center">' +
        '<span class="d-none d-md-inline-block bg-warning bg-opacity-50 rounded px-3 py-1 small">宽屏才出现的我（d-none d-md-inline-block）</span>' +
        '<span class="d-md-none bg-dark text-white rounded px-3 py-1 small">窄屏才出现的我（d-md-none）</span>' +
        '</div>' +
        '<p class="small text-body-secondary mb-0">把预览区拉宽 / 拉窄，观察最后两块的"互换"。d-none 的元素连位置都不占。</p>',
      tip: '<b>两个 d-none 的妙用：</b>① 手机上隐藏次要内容（d-none d-lg-block）；② 手机和电脑各显示一套布局（d-md-none 和 d-none d-md-block 配对写）。'
    },
    {
      id: '4.7',
      t: '定位',
      group: true,
      d: 'position 相关的类，用来做"悬浮元素""固定导航""吸附标题"这类效果。',
      children: [
        {
          id: '4.7.1',
          t: '边缘定位类',
          d: '配合定位使用的一套"坐标类"：<code>.top-0/50/100</code>、<code>.bottom-*</code>、<code>.start-*</code>、<code>.end-*</code>。<code>50</code> 表示 50%，再叠一个 <code>.translate-middle</code> 就能实现真正的"正中对齐"——右上角小红点、正中央的播放按钮都靠它。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6">' +
            '<button type="button" class="btn btn-primary position-relative">收件箱' +
            '<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">99+</span></button>' +
            '<p class="small text-body-secondary mt-3 mb-0">套路：按钮加 .position-relative，小红点加 .position-absolute .top-0 .start-100 .translate-middle。</p>' +
            '</div>' +
            '<div class="col-md-6">' +
            '<div class="position-relative rounded-3 overflow-hidden" style="height:130px;background:linear-gradient(135deg,#cfd8ff,#ffd9cf)">' +
            '<span class="position-absolute top-0 start-0 m-2 badge text-bg-dark">top-0 start-0</span>' +
            '<span class="position-absolute top-50 start-50 translate-middle"><i class="bi bi-play-circle-fill" style="font-size:2.6rem;color:#4c5fd5"></i></span>' +
            '<span class="position-absolute bottom-0 end-0 m-2 badge text-bg-dark">bottom-0 end-0</span>' +
            '</div>' +
            '</div></div>',
          tip: '<code>translate-middle</code> 的作用是把元素"向上、向左各拉回自身的一半"，所以 50% 坐标 + translate-middle = 数学意义上的正中。去掉它，你就只能得到"左上角对在 50% 处"的偏位。'
        },
        {
          id: '4.7.2',
          t: 'position 类',
          d: '五个定位类：<code>.position-static</code>（默认）、<code>.position-relative</code>（自身偏移，并成为子元素的参照物）、<code>.position-absolute</code>（相对最近的定位祖先自由摆放）、<code>.position-fixed</code>（钉在浏览器窗口，页面滚动它不动）、<code>.position-sticky</code>（滚动到位置后才"粘住"）。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">relative 当"参照物"，absolute 子元素在里面定位</div>' +
            '<div class="position-relative border rounded bg-body-tertiary" style="height:130px">' +
            '<span class="position-absolute top-0 end-0 m-2 badge text-bg-warning">absolute</span>' +
            '<span class="position-absolute bottom-0 start-0 m-2 badge text-bg-info">absolute</span>' +
            '<div class="p-4 small text-body-secondary">父盒子是 position-relative</div>' +
            '</div></div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">sticky：滚动这个盒子，标题会粘住</div>' +
            '<div class="demo-scroll" style="max-height:130px">' +
            '<div class="position-sticky top-0 bg-primary text-white small rounded px-2 py-1 mb-2">position-sticky top-0</div>' +
            '<p class="small mb-2">往下滚动……</p><p class="small mb-2">继续滚动……</p><p class="small mb-2">它会一直粘在盒子顶部。</p><p class="small mb-2">多写几行凑高度。</p><p class="small mb-0">到底了。</p>' +
            '</div></div>' +
            '</div>',
          hint: '右侧小盒子可以滚动，滚动时注意那条蓝色标题的行为',
          tip: 'sticky 生效需要两个条件：① 自身不是"贴边"状态就有空间可粘；② 父容器有高度限制（有滚动）。它常用于表格表头、侧栏目录。'
        },
        {
          id: '4.7.3',
          t: '顶部和底部定位',
          d: '三个"页面级"快捷类：<code>.fixed-top</code>（钉在浏览器顶部，做导航条）、<code>.fixed-bottom</code>（钉在底部，做客服按钮/购物车栏）、<code>.sticky-top</code>（滚动到才粘住）。它们本质上就是 position:fixed/sticky + top:0 的组合。',
          demo:
            '<div class="d-flex gap-1 small"><span class="badge text-bg-primary">固定条（真实页面里钉在浏览器窗口顶部）</span></div>' +
            '<div class="rounded border p-2 mt-2" style="height:190px;overflow:hidden;position:relative">' +
            '<div class="fixed-top bg-primary text-white small px-3 py-1">.fixed-top 导航条</div>' +
            '<div class="pt-5 px-2 small text-body-secondary">这个演示盒子的顶部被 fixed-top 的导航条压住了。真实场景里，它固定在浏览器窗口顶部，页面滚多久它都不动——这就是"吸顶导航"。注意：用了 fixed-top 的页面，要在顶部给 body 加出约 56px 的内边距，否则内容会被盖住。</div>' +
            '<div class="fixed-bottom bg-dark text-white small px-3 py-1">.fixed-bottom 底部条</div>' +
            '</div>',
          contained: true,
          hint: '演示盒已"模拟"成浏览器窗口，所以固定条钉在这个盒子上',
          tip: '两个坑：① fixed 元素脱离了文档流，会盖住内容，记得留出 padding；② 它相对"浏览器窗口"定位，如果祖先元素有 transform，则会改为相对那个祖先定位（我们就是利用这一点把演示"框"住的）。'
        }
      ]
    },
    {
      id: '4.8',
      t: 'flex 布局',
      group: true,
      d: '现代网页布局的主力，一套类就能表达"横排竖排、怎么对齐、谁站前面"。建议在页面上反复练 10 分钟：把每个类的效果都点一遍。',
      children: [
        {
          id: '4.8.1',
          cmp: [
            {
              label: '一根"左中右"工具条',
              native: '/* 原生：把容器变成 flex + 手动对齐 */\n.toolbar { display: flex; align-items: center; gap: 8px; }\n.toolbar .grow { flex: 1; }',
              bs: '<div class="d-flex align-items-center gap-2">\n  <span>左</span>\n  <span class="flex-grow-1">中间（占满剩余）</span>\n  <button class="btn btn-sm btn-primary">右</button>\n</div>',
              note: '你过去写 flex 的每个属性，都有一个对应类：align-items-*、gap-*、flex-grow-*。'
            }
          ],
          t: 'display 属性',
          d: '先用 <code>.d-flex</code> 把容器变成弹性盒——它<b>一行的子元素默认横排</b>，而且自动"齐高"。想要"行内版"弹性盒（盒子本身像文字一样排在行内），用 <code>.d-inline-flex</code>。',
          demo:
            '<div class="small text-body-secondary mb-1">普通 div：每块独占一行</div>' +
            '<div class="mb-3"><div class="dbox mb-1">块 1</div><div class="dbox">块 2</div></div>' +
            '<div class="small text-body-secondary mb-1">d-flex：子元素横排</div>' +
            '<div class="d-flex gap-2"><div class="dbox">块 1</div><div class="dbox">块 2</div><div class="dbox">块 3</div></div>',
          tip: 'd-flex 之后，"子元素之间的间距"用 <code>gap-*</code> 加，比给每个孩子加 margin 优雅多了。'
        },
        {
          id: '4.8.2',
          t: 'flex-flow 属性',
          d: '控制<b>方向</b>与<b>是否换行</b>：<code>.flex-row</code>（默认横排）、<code>.flex-column</code>（竖排）、<code>.flex-row-reverse</code> / <code>.flex-column-reverse</code>（反向）。换行控制：<code>.flex-wrap</code>（放不下就换行）、<code>.flex-nowrap</code>（硬挤在一行）。还能按断点：<code>.flex-md-row</code>。',
          demo:
            '<div class="small text-body-secondary mb-1">flex-row（默认）</div>' +
            '<div class="d-flex flex-row gap-2 mb-3"><div class="dbox">1</div><div class="dbox">2</div><div class="dbox">3</div></div>' +
            '<div class="small text-body-secondary mb-1">flex-column</div>' +
            '<div class="d-flex flex-column gap-2 mb-3" style="max-width:180px"><div class="dbox">1</div><div class="dbox">2</div><div class="dbox">3</div></div>' +
            '<div class="small text-body-secondary mb-1">flex-nowrap + 宽度超限：硬挤（缩水变形）</div>' +
            '<div class="d-flex flex-nowrap gap-2" style="width:200px"><div class="dbox">块一</div><div class="dbox">块二</div><div class="dbox">块三</div></div>',
          tip: '移动端常用组合：<code>d-flex flex-column flex-md-row</code>——手机上竖着排，平板以上横过来。'
        },
        {
          id: '4.8.3',
          t: 'justify-content 属性',
          d: '控制<b>主轴</b>（横排时就是横向）的分布：<code>.justify-content-start / center / end / between / around / evenly</code>。六个值对比着看一遍，记不住就回来多看看这张图。',
          demo:
            '<div class="small text-body-secondary mb-1">start / center / end</div>' +
            '<div class="d-flex justify-content-start gap-2 mb-1"><div class="dbox">A</div><div class="dbox">B</div></div>' +
            '<div class="d-flex justify-content-center gap-2 mb-1"><div class="dbox">A</div><div class="dbox">B</div></div>' +
            '<div class="d-flex justify-content-end gap-2 mb-3"><div class="dbox">A</div><div class="dbox">B</div></div>' +
            '<div class="small text-body-secondary mb-1">between / around / evenly</div>' +
            '<div class="d-flex justify-content-between gap-2 mb-1"><div class="dbox">A</div><div class="dbox">B</div><div class="dbox">C</div></div>' +
            '<div class="d-flex justify-content-around gap-2 mb-1"><div class="dbox">A</div><div class="dbox">B</div><div class="dbox">C</div></div>' +
            '<div class="d-flex justify-content-evenly gap-2"><div class="dbox">A</div><div class="dbox">B</div><div class="dbox">C</div></div>',
          tip: '对照记忆：between 首尾贴边（导航栏"左 logo 右菜单"）；around 每块左右各留半份；evenly 连两端边缘也算一份。'
        },
        {
          id: '4.8.4',
          t: 'align-items 属性',
          d: '控制<b>交叉轴</b>（横排时就是纵向）怎么对齐：<code>.align-items-start / center / end / baseline / stretch（默认，拉伸齐高）</code>。父容器加高度后效果最明显。',
          demo:
            '<div class="small text-body-secondary mb-1">align-items-center（最常用）</div>' +
            '<div class="d-flex align-items-center gap-2 border rounded p-2 mb-3" style="height:96px">' +
            '<div class="dbox">高</div><div class="dbox" style="padding-top:1.4rem;padding-bottom:1.4rem">更高</div><div class="dbox">高</div>' +
            '</div>' +
            '<div class="d-flex align-items-end gap-2 border rounded p-2" style="height:96px">' +
            '<div class="dbox">align-items-end</div><div class="dbox" style="padding-top:1.4rem;padding-bottom:1.4rem">底对齐</div><div class="dbox">底对齐</div>' +
            '</div>',
          tip: '三兄弟别搞混：align-items 管<b>容器里所有孩子</b>；align-self 管<b>某一个孩子</b>；align-content 管"多行之间"的分布。'
        },
        {
          id: '4.8.5',
          t: 'align-self 属性',
          d: '"大家都站好了，就我特殊"——给单个子元素加 <code>.align-self-start / center / end / stretch</code>，让它单独偏离容器的对齐规则。',
          demo:
            '<div class="d-flex align-items-center gap-2 border rounded p-2" style="height:110px">' +
            '<div class="dbox">普通</div>' +
            '<div class="dbox align-self-start">align-self-start</div>' +
            '<div class="dbox">普通</div>' +
            '<div class="dbox align-self-end">align-self-end</div>' +
            '</div>',
          tip: '5.3 还加了 <code>.align-self-center</code> 的响应式版本（如 align-self-md-center），做响应式卡片时很有用。'
        },
        {
          id: '4.8.6',
          t: 'order 属性',
          d: '不用改 HTML，用 <code>.order-0</code>～<code>.order-5</code> 调整子元素的排列优先级（数字小的在前），配合断点如 <code>.order-md-2</code> 做响应式换位。和栅格的 order 是同一套逻辑。',
          demo:
            '<div class="d-flex gap-2">' +
            '<div class="dbox order-2">HTML 第一个 → order-2</div>' +
            '<div class="dbox dbox-2 order-1">HTML 第二个 → order-1</div>' +
            '<div class="dbox dbox-3 order-3">HTML 第三个 → order-3</div>' +
            '</div>',
          tip: '默认所有元素 order 是 0，<b>数字小的排前面</b>，负数（order-first 等）会排到最前。'
        },
        {
          id: '4.8.7',
          t: 'flex-grow 和 flex-shrink 属性',
          d: '<code>.flex-grow-1</code> 让元素"把剩余空间全吃掉"（自动变宽）；<code>.flex-grow-0</code> 保持原样。<code>.flex-shrink-0</code> 表示"坚决不缩水"——头像、图标旁边配文字时必用，防止被文字挤小。',
          demo:
            '<div class="small text-body-secondary mb-1">头像 + 文字：头像用 flex-shrink-0，绝不被压扁</div>' +
            '<div class="d-flex gap-3 border rounded p-3 mb-3">' +
            '<div class="davatar flex-shrink-0">图</div>' +
            '<div class="small">这段很长的文字会让弹性布局"挤压"空间。幸好左侧的头像加了 flex-shrink-0，坚决不缩水，所以被挤的只是文字区域——这正是我们想要的效果，文字换行就好。</div>' +
            '</div>' +
            '<div class="small text-body-secondary mb-1">flex-grow-1：输入框吃掉所有剩余宽度</div>' +
            '<div class="d-flex gap-2"><input class="form-control flex-grow-1" value="我自动变宽，撑满剩余空间"><button class="btn btn-primary flex-shrink-0">搜索</button></div>',
          tip: '搜索框"左边输入 + 右边按钮"的经典组合就是这两招：输入框 flex-grow-1，按钮 flex-shrink-0。'
        },
        {
          id: '4.8.8',
          t: '.flex-fill 类',
          d: '多个元素加 <code>.flex-fill</code>，它们会"按份均分"整行空间——内容长短不影响宽度。适合做一排等宽的按钮、标签或卡片。',
          demo:
            '<div class="d-flex gap-2 mb-2">' +
            '<div class="dbox flex-fill">短</div>' +
            '<div class="dbox flex-fill">中等长度</div>' +
            '<div class="dbox flex-fill">这是特别长的一段内容</div>' +
            '</div>' +
            '<p class="small text-body-secondary mb-0">三块内容长短不一，但被 flex-fill 强制"等宽均分"。</p>',
          tip: 'flex-fill 和"等宽列 .col"效果类似，区别是它工作在"任意 d-flex 容器"里，不依赖栅格结构。'
        },
        {
          id: '4.8.9',
          t: '自动外边距',
          d: '在 flex 容器里，给某个子元素加 <code>.ms-auto</code> 或 <code>.me-auto</code>，它会自动吃掉那一侧的剩余空间，把元素"顶"到另一边。做"左边一组、右边一组"的工具栏最方便。',
          demo:
            '<div class="d-flex align-items-center gap-2 border rounded p-2 mb-2">' +
            '<strong class="small">站点名</strong>' +
            '<a href="#" class="small">首页</a><a href="#" class="small">产品</a>' +
            '<a href="#" class="small ms-auto link-primary fw-semibold">登录 →（ms-auto 顶到最右）</a>' +
            '</div>' +
            '<div class="d-flex align-items-center gap-2 border rounded p-2">' +
            '<button class="btn btn-sm btn-outline-secondary me-auto">返回</button>' +
            '<button class="btn btn-sm btn-primary">下一步（me-auto 把返回顶左）</button>' +
            '</div>',
          tip: '这是导航条、弹窗底部按钮组的"隐藏杀手锏"，不用 float、不用绝对定位，一行类名搞定左右分组。'
        }
      ]
    },
    {
      id: '4.9',
      t: '阴影',
      d: '四档阴影：<code>.shadow-none</code>（无）、<code>.shadow-sm</code>（很轻，卡片常用）、<code>.shadow</code>（标准）、<code>.shadow-lg</code>（明显，适合悬浮面板）。阴影是"层次感"的来源：卡片、下拉菜单、弹窗各用不同档位，界面就有了纵深。',
      demo:
        '<div class="row g-4 justify-content-center text-center">' +
        '<div class="col-6 col-md-3"><div class="shadow-none bg-white rounded p-4 small">shadow-none</div></div>' +
        '<div class="col-6 col-md-3"><div class="shadow-sm bg-white rounded p-4 small">shadow-sm</div></div>' +
        '<div class="col-6 col-md-3"><div class="shadow bg-white rounded p-4 small">shadow</div></div>' +
        '<div class="col-6 col-md-3"><div class="shadow-lg bg-white rounded p-4 small">shadow-lg</div></div>' +
        '</div>',
      tip: '阴影用"克制"：一屏里通常只有 1～2 种档位。全页面 shadow-lg 会显得"脏"。'
    },
    {
      id: '4.10',
      t: '垂直对齐',
      d: '行内元素（文字、图片、inline-block 的小块）在"文字行"里的垂直对齐，用 <code>.align-baseline</code>（默认）、<code>.align-top / .align-middle / .align-bottom</code>，以及文字专用的 <code>.align-text-top / .align-text-bottom</code>。它和 flex 的 align-items 是两回事——这个管"行内"。',
      demo:
        '<div style="line-height:3">' +
        '<span class="badge text-bg-primary align-baseline me-1">baseline</span>' +
        '<span class="badge text-bg-success align-top me-1">top</span>' +
        '<span class="badge text-bg-warning align-middle me-1">middle</span>' +
        '<span class="badge text-bg-danger align-bottom">bottom</span>' +
        '<span class="ms-1 small text-body-secondary">← 四种对齐方式的小标签</span>' +
        '</div>',
      tip: '实用场景：图标和文字"对不齐"时，给图标加 <code>.align-middle</code> 基本能治好强迫症。'
    },
    {
      id: '4.11',
      t: '视觉隐藏',
      d: '<code>.visually-hidden</code> 是"给屏幕阅读器听、不给眼睛看"的隐藏——无障碍必备：既让内容对辅助技术可见，又不影响视觉排版。<code>.visually-hidden-focusable</code> 更妙：平时藏起来，<b>键盘 Tab 聚焦时才出现</b>，常用来做"跳到主要内容"的快捷链接。',
      demo:
        '<a href="#" class="visually-hidden-focusable btn btn-sm btn-primary mb-2">跳到主要内容（聚焦时才出现）</a>' +
        '<p class="small mb-0">用鼠标点一下这个预览区，然后多按几次 <kbd>Tab</kbd> 键——那个按钮会突然冒出来。这就是给键盘用户准备的"快捷入口"。</p>',
      tip: '它和 <code>display:none</code>（d-none）的区别：d-none 连屏幕阅读器也听不到；visually-hidden 只是"视觉上藏起来"。无障碍功能是加分项，面试也常问。'
    },
    {
      id: '4.12',
      t: '可见性',
      d: '<code>.invisible</code> 把元素"变透明但继续占位置"。它和 d-none 的区别是关键考点：<b>invisible = 看不见但占位；d-none = 看不见也不占位</b>。',
      demo:
        '<div class="d-flex gap-3 align-items-center">' +
        '<div class="dbox">正常</div>' +
        '<div class="dbox invisible">invisible（还占着这个位置）</div>' +
        '<div class="dbox">正常</div>' +
        '<div class="dbox d-none">d-none（位置被收回了）</div>' +
        '<div class="dbox">正常</div>' +
        '</div>',
      tip: '做"加载中"占位骨架、预留给 JS 填充的位置时，用 invisible；做响应式隐藏时，用 d-none。'
    },
    {
      id: '4.13',
      t: '交互',
      d: '三个交互相关的小类：<code>.user-select-all</code>（点击自动全选，适合"邀请码"）、<code>.user-select-none</code>（禁止选中，适合按钮和图标）、<code>.pe-none</code>（元素变成"透明人"：看得见但点不到，鼠标事件穿透到下层），反向用 <code>.pe-auto</code>。',
      demo:
        '<p class="small mb-1">下面的邀请码：点一下试试（user-select-all 会整段选中）</p>' +
        '<div class="dbox user-select-all mb-3">BS-2026-OCT-8888</div>' +
        '<p class="small mb-1">pe-none 的链接看得见、点不到：<a href="#" class="link-primary fw-semibold pe-none">这个链接点不动</a>（鼠标悬停也没有手型）</p>' +
        '<p class="small mb-0">user-select-none：<span class="user-select-none border rounded px-2">这段字选不中</span></p>',
      tip: '<code>.pe-none</code> 常用于"禁用态的链接"或"覆盖层让下层的卡片整体可点"，是 stretched-link（4.16）的底层原理。'
    },
    {
      id: '4.14',
      t: '溢出',
      d: '盒子装不下内容时怎么办？用 <code>.overflow-auto / .hidden / .visible / .scroll</code> 控制。还能分方向：<code>.overflow-x-*</code>（横向）、<code>.overflow-y-*</code>（纵向）。overflow-auto 是"需要才出滚动条"，overflow-scroll 是"永远保留滚动条"。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-1">overflow-auto：内容多了才出滚动条</div>' +
        '<div class="border rounded p-2 overflow-auto" style="height:110px"><p class="small mb-1">内容第一行……</p><p class="small mb-1">第二行……</p><p class="small mb-1">第三行……</p><p class="small mb-1">第四行……</p><p class="small mb-1">第五行……</p><p class="small mb-1">第六行……</p></div></div>' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-1">overflow-hidden：超出部分直接裁掉</div>' +
        '<div class="border rounded p-2 overflow-hidden" style="height:110px"><p class="small mb-1">内容第一行（可见）……</p><p class="small mb-1">第二行（可见）……</p><p class="small mb-1">第三行开始就被裁掉了……</p><p class="small mb-1">这一行看不到了……</p><p class="small mb-1">这一行也看不到了……</p></div></div>' +
        '</div>',
      tip: '做"固定高小面板 + 内部滚动"时，记住 overflow-auto 是默认选择；overflow-hidden 常用来配合圆角"裁掉"子元素的方角。'
    },
    {
      id: '4.15',
      t: '比例助手',
      d: '.ratio 可以让盒子"按固定比例自适应"：宽度变、高度跟着按比例变。常用比例类：<code>ratio-1x1</code>（正方形）、<code>ratio-4x3</code>（老电视）、<code>ratio-16x9</code>（视频/横幅）、<code>ratio-21x9</code>（超宽横幅）。里面放 iframe 拉视频最常用。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-1">ratio-16x9（视频比例）</div>' +
        '<div class="ratio ratio-16x9"><div class="dbox dbox-3 d-flex align-items-center justify-content-center">16 : 9</div></div></div>' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-1">ratio-1x1（正方形）</div>' +
        '<div class="ratio ratio-1x1"><div class="dbox dbox-2 d-flex align-items-center justify-content-center">1 : 1</div></div></div>' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-1">ratio-4x3</div>' +
        '<div class="ratio ratio-4x3"><div class="dbox flex-grow-1 d-flex align-items-center justify-content-center">4 : 3</div></div></div>' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-1">ratio-21x9（超宽）</div>' +
        '<div class="ratio ratio-21x9"><div class="dbox dbox-3 d-flex align-items-center justify-content-center">21 : 9</div></div></div>' +
        '</div>',
      tip: '套路：<code>&lt;div class="ratio ratio-16x9"&gt;&lt;iframe src="视频地址"&gt;&lt;/iframe&gt;&lt;/div&gt;</code>——视频就永远不会变形。图片想按比例裁切，用 <code>.object-fit-cover</code> 配合。'
    },
    {
      id: '4.16',
      t: '延伸链接',
      d: '给卡片里的某个链接加 <code>.stretched-link</code>，链接的"可点击范围"会拉伸到整个最近的定位容器（通常是卡片）——用户点卡片任意位置都等于点了这个链接。做资讯卡片、商品卡片时体验极好。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="card position-relative h-100 shadow-sm">' +
        '<div class="card-body">' +
        '<h6 class="card-title mb-1">整张卡片都能点（stretched-link）</h6>' +
        '<p class="card-text small text-body-secondary">把鼠标移到卡片下方空白处，光标仍是手型；点一下试试。</p>' +
        '<a href="#" class="btn btn-sm btn-outline-primary stretched-link">前往详情</a>' +
        '</div></div></div>' +
        '<div class="col-md-6"><div class="card h-100 border">' +
        '<div class="card-body">' +
        '<h6 class="card-title mb-1">对比：普通链接</h6>' +
        '<p class="card-text small text-body-secondary">只有"前往详情"这四个字能点，卡片其他区域点了没反应。</p>' +
        '<a href="#" class="btn btn-sm btn-outline-secondary">前往详情</a>' +
        '</div></div></div>' +
        '</div>',
      tip: '两个条件：① 卡片本身要加 <code>.position-relative</code>；② 卡片里<b>只能有一个</b> stretched-link，两个会打架。'
    },
    {
      id: '4.17',
      t: '焦点环',
      d: '键盘用户（按 Tab 键操作）需要一个明显的"当前焦点在哪"的视觉信号。<code>.focus-ring</code> 会把默认的焦点轮廓换成更漂亮的"光环"阴影，还能换颜色：<code>.focus-ring-primary / -success / -danger</code> 等。',
      demo:
        '<p class="small text-body-secondary mb-2">用鼠标点一下下面的链接，再按 <kbd>Tab</kbd> 键在它们之间切换，观察焦点光环：</p>' +
        '<div class="d-flex flex-wrap gap-3 mb-3">' +
        '<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">默认焦点环</a>' +
        '<a href="#" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">绿色焦点环</a>' +
        '<a href="#" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">红色焦点环</a>' +
        '</div>' +
        '<p class="small text-body-secondary mb-0">还可以用 CSS 变量微调：<code>style="--bs-focus-ring-color: rgba(...)"</code>。</p>',
      hint: '焦点环是键盘导航专属：鼠标点击时不会出现，按 Tab 才会',
      tip: '焦点环属于无障碍（a11y）细节：做正式项目时，<b>千万不要为了"好看"把焦点样式删掉</b>，键盘用户会完全迷路。'
    },
    {
      id: '4.18',
      t: '案例：“学习电台”页面',
      d: '用本章工具类"徒手"拼一个电台页：顶部工具条（flex + ms-auto）、左侧分类 + 右侧播放列表（栅格 + flex + gap）、封面用 ratio 保证比例、卡片用 shadow + stretched-link、位置徽标用绝对定位。全程不写自定义 CSS。',
      demo:
        '<div class="border rounded-3 overflow-hidden bg-white">' +
        '<div class="d-flex align-items-center gap-2 px-3 py-2 bg-body-tertiary">' +
        '<i class="bi bi-broadcast text-danger"></i><strong class="small">学习电台</strong>' +
        '<span class="small text-body-secondary ms-auto">正在播放：第 3 章 · 表格</span>' +
        '</div>' +
        '<div class="p-3"><div class="row g-3">' +
        '<div class="col-md-4"><div class="d-flex flex-column gap-2">' +
        '<div class="d-flex align-items-center gap-2 p-2 rounded bg-primary bg-opacity-10 text-primary small fw-semibold"><i class="bi bi-collection-play"></i>全部课程</div>' +
        '<div class="d-flex align-items-center gap-2 p-2 rounded text-body-secondary small"><i class="bi bi-grid"></i>栅格系统</div>' +
        '<div class="d-flex align-items-center gap-2 p-2 rounded text-body-secondary small"><i class="bi bi-fonts"></i>CSS 布局</div>' +
        '<div class="d-flex align-items-center gap-2 p-2 rounded text-body-secondary small"><i class="bi bi-tools"></i>工具类</div>' +
        '</div></div>' +
        '<div class="col-md-8"><div class="row g-3">' +
        '<div class="col-sm-6"><div class="card position-relative shadow-sm h-100">' +
        '<div class="ratio ratio-1x1"><div class="d-flex align-items-center justify-content-center" style="background:linear-gradient(135deg,#ffd9cf,#cfd8ff)"><i class="bi bi-headphones" style="font-size:2.2rem;color:#6d43b0"></i></div></div>' +
        '<div class="card-body p-3"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger" style="margin:.6rem 0 0 -.6rem">NEW</span>' +
        '<h6 class="card-title mb-1 small">第 2 章 · 栅格系统</h6>' +
        '<p class="card-text small text-body-secondary mb-2">12 列布局的完整讲解</p>' +
        '<a href="#" class="stretched-link small">开始收听 →</a></div>' +
        '</div></div>' +
        '<div class="col-sm-6"><div class="card position-relative shadow-sm h-100">' +
        '<div class="ratio ratio-1x1"><div class="d-flex align-items-center justify-content-center" style="background:linear-gradient(135deg,#d7f5e3,#cfe9ff)"><i class="bi bi-mic" style="font-size:2.2rem;color:#177245"></i></div></div>' +
        '<div class="card-body p-3"><h6 class="card-title mb-1 small">第 4 章 · 工具类</h6>' +
        '<p class="card-text small text-body-secondary mb-2">flex 与间距全解析</p>' +
        '<a href="#" class="stretched-link small">开始收听 →</a></div>' +
        '</div></div>' +
        '</div></div>' +
        '</div></div>' +
        '<div class="d-flex justify-content-between align-items-center px-3 py-2 border-top small text-body-secondary">' +
        '<span><i class="bi bi-pause-circle me-1"></i>暂停</span><span>00:35 / 12:08</span><span><i class="bi bi-volume-up"></i></span>' +
        '</div></div>',
      hint: '找一找这一屏里用了哪些本章工具类：d-flex / gap / ms-auto / ratio / position-absolute / translate-middle / shadow / stretched-link'
    }
  ],
  summary: [
    '工具类命名规律 {属性}{方位}-{尺寸}：m/p 边距、gap 间隙、top/start 定位坐标等。',
    '间距口诀：m 推别人、p 撑自己；尺寸 1≈4px 到 5≈48px；mx-auto 居中。',
    '边框四件套：border（有无）、border-*（颜色）、border-2~5（粗细）、rounded-*（圆角，rounded-pill/circle 特殊形状）。',
    'flex 是布局主力：d-flex / flex-row|column / justify-content-*（主轴）/ align-items-*（交叉轴）/ order / grow-shrink / flex-fill / ms-auto。',
    '定位：relative 当参照、absolute 自由摆放、fixed 钉窗口、sticky 粘滚动；top/start 坐标 + translate-middle 精确定位。',
    '隐藏三兄弟：d-none 不占位、invisible 看不见还占位、visually-hidden 给读屏软件。',
    '进阶工具：overflow 溢出控制、ratio 比例盒子、stretched-link 整卡可点、focus-ring 焦点环、shadow 阴影四档。'
  ],
  practice: {
    t: '实训项目：制作个人简历网页（一）',
    d: '用工具类"徒手"排版一张简历卡片：顶部头像 + 姓名 + 联系方式（flex），中间左右分栏（栅格 + 工具类），技能条用 flex + 圆角，全程不加自定义 CSS。',
    steps: [
      '顶部区：d-flex align-items-center gap-3，放圆形头像（rounded-circle）和姓名信息，右侧用 ms-auto 放"下载 PDF"按钮。',
      '联系方式：d-flex flex-wrap gap-3 横排，每个用 <i> 图标 + 小字。',
      '主体：row g-3，左 col-md-8 放"工作经历"，右 col-md-4 放"技能标签"。',
      '技能条：外层 bg-body-tertiary rounded-pill，内层 bg-primary rounded-pill w-75 表示掌握程度。',
      '最后给整张简历卡片加 shadow-sm rounded-4 和 border，看看"专业感"是不是立刻上来了。'
    ],
    demo:
      '<div class="p-4 bg-white border rounded-4 shadow-sm" style="max-width:560px">' +
      '<div class="d-flex align-items-center gap-3 mb-3">' +
      '<div class="davatar flex-shrink-0" style="width:72px;height:72px;font-size:1.3rem">川</div>' +
      '<div><h5 class="mb-0 fw-bold">川同学</h5><div class="small text-body-secondary">前端开发实习生 · 计算机三级备考中</div></div>' +
      '<button class="btn btn-sm btn-outline-primary ms-auto flex-shrink-0"><i class="bi bi-download me-1"></i>PDF</button>' +
      '</div>' +
      '<div class="d-flex flex-wrap gap-3 small text-body-secondary mb-3">' +
      '<span><i class="bi bi-telephone me-1"></i>138-0000-0000</span>' +
      '<span><i class="bi bi-envelope me-1"></i>chuan@example.com</span>' +
      '<span><i class="bi bi-geo-alt me-1"></i>武汉</span>' +
      '</div>' +
      '<div class="row g-3">' +
      '<div class="col-md-8"><div class="fw-bold small mb-2">工作经历</div>' +
      '<div class="border-start border-3 border-primary ps-3 mb-3"><div class="small fw-semibold">某科技公司 · 前端实习生</div><div class="small text-body-secondary">2025.07 – 2025.12 · 用 Bootstrap 完成了 3 个内部工具页面</div></div>' +
      '<div class="border-start border-3 border-secondary ps-3"><div class="small fw-semibold">校园工作室 · 网页组</div><div class="small text-body-secondary">2024.09 – 2025.06 · 负责社团官网的响应式改版</div></div>' +
      '</div>' +
      '<div class="col-md-4"><div class="fw-bold small mb-2">技能</div>' +
      '<div class="small mb-1">HTML / CSS</div><div class="progress mb-2" style="height:8px"><div class="progress-bar" style="width:80%"></div></div>' +
      '<div class="small mb-1">Bootstrap</div><div class="progress mb-2" style="height:8px"><div class="progress-bar bg-success" style="width:65%"></div></div>' +
      '<div class="small mb-1">JavaScript</div><div class="progress" style="height:8px"><div class="progress-bar bg-warning" style="width:40%"></div></div>' +
      '</div></div></div>',
    hint: '对照找一找：头像用的是 rounded + flex-shrink-0，按钮靠 ms-auto 顶右，技能条是两层 rounded-pill 叠加'
  }
});
