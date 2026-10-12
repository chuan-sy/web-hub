/* ============================================================
   附录 C · 关键词词典（3/6）
   C5 间距与尺寸 / C6 布局与定位工具
   ============================================================ */
window.BS_GLOSSARY = window.BS_GLOSSARY || [];

/* ============================ C5 ============================ */
window.BS_GLOSSARY.push({
  id: 'C5',
  cat: '间距与尺寸',
  icon: 'bi-arrows-move',
  desc: '调"空间"的类名：元素之间隔多远（外边距 m）、元素内部多宽松（内边距 p）、多大（w/h）。口诀：m 推别人，p 撑自己。',
  items: [
    {
      n: 'm-0 ~ m-5（外边距）',
      d: '外边距家族，"把邻居推开"。格式：<b>m + 方向 + 档位</b>——mt-3 是上边距 3 档、mx-2 是左右各 2 档、m-4 是四边都 4 档。',
      u: '<div class="mt-3 mb-5">上面小间距、下面大间距</div>',
      re: '^m[tbeysx]?-[0-5]$',
      nat: '原生：<code>margin-top: 1rem;</code>——类名只是把"方向 + 数值"编成了代号。',
      tip: '方向字母：t 上、b 下、s 左（start）、e 右（end）、x 水平、y 垂直。',
      ref: '4.3.1'
    },
    {
      n: '间距档位 0~5',
      d: '档位和实际数值的对照：<b>0</b>=0、<b>1</b>=.25rem(4px)、<b>2</b>=.5rem(8px)、<b>3</b>=1rem(16px)、<b>4</b>=1.5rem(24px)、<b>5</b>=3rem(48px)。3 是最常用的"标准间距"。',
      nat: 'rem 是以根字号为基准的相对单位：默认 1rem ≈ 16px。',
      ref: '4.3.1'
    },
    {
      n: 'p-0 ~ p-5（内边距）',
      d: '内边距家族，"撑大自己"：卡片想透气加 p-4、按钮想紧凑用 p-2。格式规则和 m 家族一模一样，只是首字母换成 p。',
      u: '<div class="p-4 bg-body-tertiary rounded">内衬 4 档的浅灰面板</div>',
      re: '^p[tbeysx]?-[0-5]$',
      tip: '记忆：<b>m 是推别人（外面）、p 是撑自己（里面）</b>。边框放哪边，决定你该用 m 还是 p。',
      ref: '4.3.1'
    },
    {
      n: 'mx-auto（水平居中）',
      d: '左右 auto 外边距 = 块级元素"水平居中开关"。给一个限宽的块加它，立刻居中。',
      u: '<div class="mx-auto" style="max-width: 420px;">居中收窄的容器</div>',
      re: '^mx-auto$',
      nat: '原生：<code>margin: 0 auto;</code>——一字不差的直译。',
      tip: '它只负责"水平"居中；垂直居中要靠 flex 的 align-items-center。',
      ref: '4.3.1'
    },
    {
      n: 'm-md-2 / mt-lg-0（响应式间距）',
      d: '间距也能带断点："到某尺寸起换档"。如 mt-4 mt-md-0：手机拉开上边距、md 起清零。做"手机宽松、电脑紧凑"的排版很常用。',
      re: '^[mp][tbeysx]?-(sm|md|lg|xl|xxl)-[0-5]$',
      ref: '4.3.1'
    },
    {
      n: 'gap-0 ~ gap-5',
      d: '给 flex / grid 容器设置"子元素之间的缝隙"，省去给每个孩子写 margin。row-gap 只管上下行间、column-gap 只管横向列间。',
      u: '<div class="d-flex gap-3">三块自动留缝</div>',
      re: '^(gap|row-gap|column-gap)-[0-5]$',
      nat: '原生 flex/grid 的 <code>gap</code> 属性，直接对应。',
      tip: '栅格里列与列的缝用 g-3（写在 row 上）；普通 flex 排版用 gap-3。',
      ref: '4.3.3'
    },
    {
      n: 'w-25 / w-50 / w-75 / w-100 / w-auto',
      d: '宽度百分比工具：w-50 = 父容器一半宽，w-100 = 撑满。做"半宽按钮""窄表单列"最顺手。',
      re: '^w-(25|50|75|100|auto)$',
      ref: '4.4.1'
    },
    {
      n: 'h-25 / h-50 / h-75 / h-100',
      d: '高度工具：h-100 = 撑满父容器高度。"卡片等高"的经典配方：<b>行上默认拉伸 + 卡片加 h-100</b>。',
      re: '^h-(25|50|75|100|auto)$',
      ref: '4.4.2'
    },
    {
      n: 'mw-100 / mh-100',
      d: '"最大宽/高别超过父容器"：图片、表格放进小格子时的防溢出保险。',
      re: '^(mw|mh)-100$',
      ref: '4.4.3'
    },
    {
      n: 'vh-100 / vw-100 / min-vh-100',
      d: '和"视口"（浏览器窗口）挂钩：vh-100 = 高度正好一屏；min-vh-100 = <b>至少</b>一屏高（内容再多也随内容长高）。做"整屏首屏""满屏登录页"用它。',
      re: '^(vw|vh|min-vw|min-vh)-100$',
      tip: '出现莫名横向滚动条时，优先检查 vw-100（它可能比可见宽度宽一丁点）。',
      ref: '4.4.2'
    },
    {
      n: '间距的 auto 值',
      d: '间距家族还有 auto 档：mx-auto（水平居中）、ms-auto（顶到右）、me-auto（顶到左）、my-auto。flex 布局里做"自动撑开"全靠它。',
      re: '^[mp][tbeysx]?-auto$',
      ref: '4.3.1'
    },
    {
      n: '负边距（mt-n3 这类）',
      d: 'Bootstrap <b>默认不提供</b>负的间距类。想用 mt-n3、ms-n2，必须自己用 Sass 编译并开启开关 <code>$enable-negative-margins: true</code>。',
      nat: '原生 CSS 直接写 <code>margin-top: -1rem;</code> 就行——这是少数"原生反而更简单"的场景。',
      tip: '在别人的代码里看到 mt-n3 不生效？多半是用的预编译版没开这个开关。',
      ref: '4.3.2'
    }
  ]
});

/* ============================ C6 ============================ */
window.BS_GLOSSARY.push({
  id: 'C6',
  cat: '布局与定位工具',
  icon: 'bi-bounding-box-circles',
  desc: '控制"排列、对齐、定位、显隐"的类名。它们大多是原生 flex 属性和 position 属性的"类名化"，你已经会的 CSS 就是最好的注解。',
  items: [
    {
      n: 'd-*（display 工具）',
      d: '一行控制元素的显示方式：d-block（块）、d-inline-block、d-flex（弹性容器）、d-grid（网格）、d-none（消失且不占位）。',
      u: '<div class="d-flex">我变成 flex 容器了</div>',
      re: '^d-(none|inline|inline-block|block|grid|table|table-row|table-cell|flex|inline-flex)$',
      nat: '原生：<code>display: flex;</code>——类名就是它的开关。',
      ref: '4.6'
    },
    {
      n: 'd-md-none / d-lg-block（响应式显隐）',
      d: '带断点的 display："到某尺寸才换显示方式"。黄金组合 <b>d-none d-md-block</b>：手机隐藏、md 起显示。做"手机藏侧栏""电脑上藏手机菜单"的标准解法。',
      u: '<div class="d-none d-md-block">只在平板及以上才显示</div>',
      re: '^d-(sm|md|lg|xl|xxl)-(none|inline|inline-block|block|grid|table|table-row|table-cell|flex|inline-flex)$',
      k: ['d-sm-none', 'd-md-none', 'd-lg-none', 'd-xl-none', 'd-sm-block', 'd-md-block', 'd-lg-block', 'd-md-flex', 'd-lg-flex', 'd-md-inline', 'd-md-inline-block', 'd-md-table', 'd-md-table-cell'],
      tip: '读法：第一个类"先全隐藏"，第二个类"从某断点放开"。',
      ref: '4.6'
    },
    {
      n: 'd-flex',
      d: '"把这个元素变成 flex 容器"：子元素默认横向排一排。它常和三个搭档连用——justify-content-*（横向分布）、align-items-*（纵向对齐）、gap-*（间距）。',
      u: '<div class="d-flex align-items-center gap-2">图标 + 文字 + 按钮</div>',
      ref: '4.8.1'
    },
    {
      n: 'd-none',
      d: '"彻底消失"：不显示也不占位置。（对比：invisible 隐形但占位。）响应式显隐的起手式永远是它。',
      ref: '4.6'
    },
    {
      n: 'd-print-none',
      d: '打印专用显隐：d-print-none = 打印时隐藏（导航、按钮）；d-print-block = 只有打印时显示。做"打印友好的发票/简历"用它。',
      re: '^d-print-(none|block|inline|inline-block)$',
      ref: '4.6'
    },
    {
      n: 'flex-row / flex-column',
      d: 'flex 容器的"主方向"：默认横排（row）；flex-column 改竖排（"纵向堆叠"最顺手的写法）；加 -reverse 反转顺序。可带断点：flex-md-row（小屏竖、md 起横）。',
      re: '^flex-(?:(?:sm|md|lg|xl|xxl)-)?(row|column)(-reverse)?$',
      nat: '原生：<code>flex-direction: column;</code>。',
      ref: '4.8.2'
    },
    {
      n: 'flex-wrap / flex-nowrap',
      d: '子元素"放不下时换不换行"：wrap 换行、nowrap 死活不换（会被压缩或溢出）。',
      re: '^flex-(?:(?:sm|md|lg|xl|xxl)-)?(wrap|nowrap|wrap-reverse)$',
      ref: '4.8.2'
    },
    {
      n: 'justify-content-*',
      d: '主方向上怎么排：<b>start</b> 靠左、<b>center</b> 居中、<b>end</b> 靠右、<b>between</b> 两端对齐（导航栏常客）、<b>around</b> 环绕、<b>evenly</b> 完全均匀。可带断点。',
      u: '<div class="d-flex justify-content-between">左边标题 · 右边按钮</div>',
      re: '^justify-content-(?:(?:sm|md|lg|xl|xxl)-)?(start|end|center|between|around|evenly)$',
      nat: '原生 flex 的同名属性，类名只是把它变成"随时可切的开关"。',
      ref: '4.8.3'
    },
    {
      n: 'align-items-*',
      d: '"交叉轴"对齐：横向排布时就是"垂直对齐"。<b>align-items-center</b> = 子元素垂直居中——"图标和文字总对不齐"时第一个想到它。',
      re: '^align-items-(?:(?:sm|md|lg|xl|xxl)-)?(start|end|center|baseline|stretch)$',
      ref: '4.8.4'
    },
    {
      n: 'align-self-*',
      d: '"我单独对齐"：只给某一个子元素设置交叉轴对齐，覆盖容器级别的设定。',
      re: '^align-self-(?:(?:sm|md|lg|xl|xxl)-)?(start|end|center|baseline|stretch)$',
      ref: '4.8.5'
    },
    {
      n: 'align-content-*',
      d: '"多行之间"怎么分布（仅当换行产生了多行才生效）。做多行卡片组的整体分布时用。',
      re: '^align-content-(?:(?:sm|md|lg|xl|xxl)-)?(start|end|center|between|around|stretch)$',
      ref: '4.8.4'
    },
    {
      n: 'flex-grow-1 / flex-shrink-0',
      d: '"谁吃掉剩余空间"（grow-1）/ "谁绝不被压缩"（shrink-0）。经典配方：图标列 flex-shrink-0 不许被挤扁 + 文字列 flex-grow-1 占满剩余。',
      u: '<div class="d-flex gap-2">\n  <i class="bi bi-star fs-4 flex-shrink-0"></i>\n  <div class="flex-grow-1">文字占满剩余宽度</div>\n</div>',
      re: '^flex-(grow|shrink)-[01]$',
      nat: '原生：<code>flex-grow: 1; flex-shrink: 0;</code>。',
      ref: '4.8.7'
    },
    {
      n: 'flex-fill',
      d: '"平均分掉剩余空间"：一排子元素每个都加它，自动等宽撑满。等价于给每个孩子写 flex: 1 1 auto。',
      re: '^flex-fill$',
      ref: '4.8.8'
    },
    {
      n: 'vstack / hstack',
      d: '两个"一句话堆叠"：vstack = 纵向堆叠（等价 d-flex flex-column）、hstack = 横向堆叠。自带对齐和间距感，是 5.x 新增的贴心款。',
      u: '<div class="vstack gap-2">纵向自动排开</div>',
      re: '^(v|h)stack$',
      ref: '4.8.9'
    },
    {
      n: 'position-relative / absolute / fixed / sticky',
      d: '定位四件套：<b>relative</b> 当"坐标纸"（本身不太动）；<b>absolute</b> 相对坐标纸飞过去放（常见：角标、关闭钮）；<b>fixed</b> 相对浏览器窗口钉死；<b>sticky</b> 滚到某位置后"粘住"。',
      u: '<div class="position-relative">\n  <span class="position-absolute top-0 start-100 translate-middle badge text-bg-danger">9</span>\n</div>',
      nat: '原生 position 属性，一字不差。',
      tip: 'absolute 要放在"要参照的祖宗"里，忘写 position-relative 会跑去参照整个页面。',
      ref: '4.7.2'
    },
    {
      n: 'top / start / end / bottom（0、50、100）',
      d: '配合定位使用的位置类：top-0 start-0 钉左上角；start-50 top-50 到正中间。常和 translate-middle 连用。',
      re: '^(top|start|end|bottom)-(0|50|100)$',
      ref: '4.7.1'
    },
    {
      n: 'translate-middle',
      d: '"按自身尺寸回退一半"的居中修正：绝对居中标准写法 <b>top-50 start-50 translate-middle</b>。加 -x / -y 只退一个方向。',
      re: '^translate-middle(-[xy])?$',
      nat: '原生：<code>transform: translate(-50%, -50%);</code>。',
      tip: '忘了它，定位到 50% 的是"元素的左上角"而不是中心——新手必踩。',
      ref: '4.7.1'
    },
    {
      n: 'sticky-top / fixed-top / fixed-bottom',
      d: '三个"钉住页面"套餐：<b>sticky-top</b> 粘性导航（滚到顶部吸附）、fixed-top 永远浮在头顶、fixed-bottom 永远钉在底部。',
      re: '^(sticky|fixed)-(top|bottom)$',
      tip: 'fixed-* 脱离文档流会盖住内容，记得给正文补一点上边距。',
      ref: '6.3.6'
    },
    {
      n: 'float-start / float-end / float-none',
      d: '老牌浮动：float-end = 图片靠右、文字环绕。现代布局多用 flex 和栅格，但"图文环绕"依然是它的地盘。',
      re: '^float-(start|end|none)$',
      ref: '4.5.1'
    },
    {
      n: 'clearfix',
      d: '"清除浮动"工具类：包住浮动元素，防止父容器高度塌陷。原理就是经典的 ::after 假清除——Bootstrap 帮你写好了。',
      ref: '4.5.2'
    },
    {
      n: 'overflow-auto / hidden / visible / scroll',
      d: '内容超出容器时怎么办：<b>auto</b> 内容多了才出滚动条（最常用）、hidden 直接裁掉、scroll 永远显示滚动条。代码块、"限高消息区"的标配。',
      re: '^overflow-(auto|hidden|visible|scroll)$',
      ref: '4.14'
    },
    {
      n: 'user-select-all / none',
      d: '文字能不能被选中：all 点一下全选（方便复制单号）、none 禁止选中（防止误选界面文字）。',
      re: '^user-select-(all|auto|none)$',
      ref: '4.13'
    },
    {
      n: 'pe-none / pe-auto',
      d: 'pointer-events 开关：pe-none 让元素"对鼠标透明"（像隔了层玻璃，点不到），pe-auto 恢复。做遮罩、禁用交互区时用。',
      re: '^pe-(none|auto)$',
      ref: '4.13'
    },
    {
      n: 'visually-hidden',
      d: '"只给屏幕阅读器看"：视觉上藏起来、无障碍层面保留。给纯图标按钮补文字说明、给表单输入补隐形 label 时用。',
      re: '^visually-hidden(-focusable)?$',
      ref: '4.11'
    },
    {
      n: 'invisible / visible',
      d: 'invisible = 隐形但<b>占着位置</b>（注意和 d-none 的区别：d-none 不占位）；visible 恢复显示。',
      re: '^(in)?visible$',
      ref: '4.12'
    },
    {
      n: 'stretched-link',
      d: '"把整张卡片变成链接"：卡片里放一个链接加上它，点击范围自动撑满整张卡片——不写 JS、不用 <a> 包 <div>。',
      re: '^stretched-link$',
      tip: '多个卡片共用一个父容器时要小心：它可能撑到父级里去，给每张卡加 position-relative 限定范围。',
      ref: '4.16'
    },
    {
      n: 'vr（竖分隔线）',
      d: '"vertical rule"：一条自动定高的竖向分隔线，做工具条里"两组按钮之间的竖线"很方便。',
      u: '<div class="d-flex align-items-center gap-2">A <span class="vr"></span> B</div>',
      re: '^vr$',
      ref: '3.1.4'
    },
    {
      n: 'ratio 之外的 object-fit 组合',
      d: '做"图片墙"的两件套：外层固定高度（如 style="height:180px"），图片加 object-fit-cover 裁切填满 + w-100，高度就整齐了。',
      ref: '3.8.4'
    }
  ]
});
