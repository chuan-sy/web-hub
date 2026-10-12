/* ============================================================
   附录 C · 关键词词典（2/6）
   C3 排版与内容 / C4 颜色与外观
   ============================================================ */
window.BS_GLOSSARY = window.BS_GLOSSARY || [];

/* ============================ C3 ============================ */
window.BS_GLOSSARY.push({
  id: 'C3',
  cat: '排版与内容',
  icon: 'bi-type',
  desc: '让"文字排版"不用写一行 CSS：标题、字号、对齐、列表、图片自适应，全部有现成类。',
  items: [
    {
      n: 'h1~h6 / .h1~.h6',
      d: '六个标题标签的样式已被统一调好（字号、行高、外边距）。如果想让"非标题标签"长得像标题，单独用 <code>.h1~.h6</code> 类即可。',
      u: '<h3>这是三级标题</h3>\n<p class="h3">我也长得像三级标题，但我是段落</p>',
      nat: '原生 h1 各浏览器默认样式不一致，Bootstrap 统一了它们；你写 h1 时标签本身仍保留"结构语义"。',
      tip: '标题标签是给搜索引擎和屏幕阅读器认"结构"的；.h* 类只负责"长得像"。',
      re: '^h[1-6]$',
      ref: '3.1.1'
    },
    {
      n: 'display-1 ~ display-6',
      d: '"巨型标题"，专给页面顶部横幅（Hero 区）用：比 h1 大得多、字重更细、更抢眼。数字越大字号越大（display-1 最大）。',
      u: '<h1 class="display-4 fw-bold">今天，值得被记录</h1>',
      re: '^display-[1-6]$',
      ref: '3.1.1'
    },
    {
      n: 'lead',
      d: '"引言段"：紧跟标题的那句介绍话，会自动变大一点、变淡一点，自然形成"标题—副标题—正文"三级层次。',
      u: '<p class="lead">一句话说清这个页面是做什么的。</p>',
      ref: '3.1.2'
    },
    {
      n: 'fs-1 ~ fs-6',
      d: '字号工具类。注意方向：<b>数字越小字越大</b>（fs-1 最大）。不想换标签、只想把字放大缩小时用它。',
      u: '<span class="fs-4">放大一点点</span>',
      re: '^fs-[1-6]$',
      tip: '容易记反——fs-1 是最大的（约 2.5rem）。',
      ref: '3.3.3'
    },
    {
      n: 'fw-*（字重）',
      d: '加粗家族：fw-bold 加粗、fw-semibold 半粗（按钮文案最爱）、fw-bolder 比父级更粗一档、fw-normal 恢复、fw-light 细体。',
      u: '<span class="fw-semibold">半粗字，不用加 &lt;strong&gt;</span>',
      re: '^fw-(bold|bolder|semibold|normal|light|lighter|medium)$',
      ref: '3.3.3'
    },
    {
      n: 'fst-italic / fst-normal',
      d: '斜体开关：fst-italic 变斜体，fst-normal 把斜体强行"正"回来。',
      re: '^fst-(italic|normal)$',
      ref: '3.3.3'
    },
    {
      n: 'text-center 等对齐类',
      d: '文字水平对齐三兄弟：text-start（左）、<b>text-center（中）</b>、text-end（右）。可加断点：text-md-end = md 起才靠右。',
      u: '<p class="text-center">我会居中</p>',
      re: '^text-(?:(?:sm|md|lg|xl|xxl)-)?(start|center|end)$',
      nat: '原生：<code>text-align</code>——一个字都没换，只是变成了类名。',
      ref: '3.3.1'
    },
    {
      n: 'text-lowercase / uppercase / capitalize',
      d: '英文大小写变换：全小写 / 全大写 / 每个单词首字母大写。中文没变化，处理英文文案时才见效。',
      re: '^text-(lowercase|uppercase|capitalize)$',
      ref: '3.3.2'
    },
    {
      n: 'text-wrap / text-nowrap',
      d: '文字折行开关：wrap 允许折行（默认），nowrap 强制一行不折（可能溢出，慎用）。',
      re: '^text-(wrap|nowrap)$',
      ref: '3.3.5'
    },
    {
      n: 'text-break',
      d: '"长单词强制折行"。一条没有空格的超长链接会把整个布局撑爆——加上它，浏览器就敢把它拦腰截断。',
      u: '<p class="text-break">https://一个特别特别长的没有空格的网址…</p>',
      ref: '3.3.5'
    },
    {
      n: 'text-truncate',
      d: '超出一行的文字用"…"截断。是"卡片标题太长""表格备注太长"的标准解法，但必须给它一个宽度限制（如放进 col 或设 max-width）。',
      u: '<div class="text-truncate" style="max-width: 220px;">这行字太长就会变成省略号</div>',
      tip: '它只截一行；要多行省略号得自己写 CSS（-webkit-line-clamp）。',
      ref: '3.3.5'
    },
    {
      n: 'lh-1 / lh-sm / lh-base / lh-lg',
      d: '行高工具：lh-1 最紧（1 倍）、lh-lg 最松（2 倍）。大标题嫌太"散"、密排文字想透气，用它微调。',
      re: '^lh-(1|sm|base|lg)$',
      ref: '3.3.4'
    },
    {
      n: 'blockquote + blockquote-footer',
      d: '引用块组合：blockquote 包住引用内容（字号略大），blockquote-footer 放出处（自动加"——"）。',
      u: '<figure>\n  <blockquote class="blockquote">\n    <p>做对，比做快更重要。</p>\n  </blockquote>\n  <figcaption class="blockquote-footer">某位工程师</figcaption>\n</figure>',
      tip: '出处建议用 <figure> + <figcaption> 包住，语义更标准（AI 搜索、阅读模式都吃这一套）。',
      re: '^blockquote(-footer)?$',
      ref: '3.1.8'
    },
    {
      n: 'list-unstyled',
      d: '去样式列表：去掉小圆点和缩进，但保留列表的语义（屏幕阅读器仍会读"列表，3 项"）。自定义列表样式的第一步。',
      u: '<ul class="list-unstyled">\n  <li>第一项</li>\n  <li>第二项</li>\n</ul>',
      ref: '3.4.2'
    },
    {
      n: 'list-inline / list-inline-item',
      d: '列表项横着排：ul 加 list-inline，每个 li 加 list-inline-item。适合做标签栏、横向步骤条这类小列表。',
      u: '<ul class="list-inline">\n  <li class="list-inline-item">标签一</li>\n  <li class="list-inline-item">标签二</li>\n</ul>',
      re: '^list-inline(-item)?$',
      ref: '3.4.3'
    },
    {
      n: 'mark',
      d: '黄色"记号笔"高亮：<code>&lt;mark&gt;重点&lt;/mark&gt;</code>。搜索命中词、要强调的关键词用它。',
      u: '<p>文中这句里的 <mark>关键结论</mark> 被标黄了。</p>',
      ref: '3.3.5'
    },
    {
      n: 'code / kbd',
      d: '行内小标签：<code>&lt;code&gt;</code> 显示代码片段（粉底紫字），<code>&lt;kbd&gt;</code> 显示"要按的键"（黑底键帽）。',
      u: '按 <kbd>Ctrl</kbd> + <kbd>Enter</kbd> 运行；类名写 <code>col-md-6</code>。',
      re: '^(code|kbd|samp)$',
      ref: '3.1.5'
    },
    {
      n: 'abbr / .initialism',
      d: '缩略语：鼠标悬停你写的全称；加 .initialism 让全称以小号大写字母显示（更精致）。',
      u: '<abbr title="Cascading Style Sheets">CSS</abbr>',
      ref: '3.1.6'
    },
    {
      n: '.small',
      d: '"小一号的字"（约小 15%）：说明文字、免责声明、时间戳的默认选择。',
      u: '<small class="text-body-secondary">有效期至本月底</small>',
      ref: '3.3.5'
    },
    {
      n: 'img-fluid',
      d: '响应式图片：图片最大不超过父容器，高度等比缩放。<b>内容区每张图都应该加它</b>——这是手机端不撑破布局的基本修养。',
      u: '<img src="images/pic.jpg" class="img-fluid" alt="示例图">',
      nat: '原生：<code>max-width:100%; height:auto;</code>——它就是这个的打包版。',
      tip: '忘了加它 = 手机端图片爆布局的头号原因。',
      ref: '3.8.1'
    },
    {
      n: 'img-thumbnail',
      d: '"缩略图相框"：自动给图片加细边框、圆角、内边距，像一张老式相片。',
      ref: '3.8.2'
    },
    {
      n: 'object-fit-cover / contain',
      d: '控制图片在"固定大小的框"里怎么填充：cover 裁切填满（好看，可能切掉边角）、contain 完整显示（不裁切，可能留白）。做"等高图片墙"必备。',
      u: '<img src="images/pic.jpg" class="object-fit-cover rounded" style="width:100%;height:180px">',
      re: '^object-fit-(cover|contain|fill|none|scale-down)$',
      ref: '3.8.4'
    },
    {
      n: 'ratio / ratio-16x9',
      d: '"固定长宽比的容器"：无论宽度怎么变，内部内容保持 16:9（还有 4x3、1x1、21x9）。典型用途：嵌视频、图片墙。外层写 ratio-16x9，内容放里面即可。',
      u: '<div class="ratio ratio-16x9">\n  <iframe src="video.html" title="视频"></iframe>\n</div>',
      re: '^ratio(-(1x1|4x3|16x9|21x9))?$',
      nat: '原生要写 <code>padding-top: 56.25%</code> 的"占位魔法"，ratio 把魔法封装成了类名。',
      ref: '4.15'
    },
    {
      n: 'figure / figure-caption',
      d: '带说明的图片容器：figure 包住图，figure-caption 放说明文字（自动变小变灰）。做图文并茂的长文章时很常用。',
      u: '<figure class="figure">\n  <img src="images/pic.jpg" class="figure-img img-fluid rounded" alt="示意图">\n  <figcaption class="figure-caption">图 1 · 说明文字</figcaption>\n</figure>',
      re: '^figure(-(img|caption))?$',
      ref: '3.9'
    }
  ]
});

/* ============================ C4 ============================ */
window.BS_GLOSSARY.push({
  id: 'C4',
  cat: '颜色与外观',
  icon: 'bi-palette',
  desc: '给页面"上色、描边、做立体感"的类名。核心观念：颜色是"主题色"的引用，不是写死的色值。',
  items: [
    {
      n: 'text-{颜色}',
      d: '文字颜色：text-primary（蓝）text-danger（红）text-success（绿）……共 8 个主题色，外加 text-white / text-black / text-black-50 等中性色。',
      u: '<span class="text-danger">红色警告文字</span>',
      re: '^text-(primary|secondary|success|danger|warning|info|light|dark|white|black|black-50|white-50|muted)$',
      tip: '写死的灰（text-muted）5.3 已不推荐，用下面的 text-body-secondary 更好。',
      ref: '3.2.1'
    },
    {
      n: 'text-body-secondary / tertiary',
      d: '"正文的次要色 / 更次要色"：说明文字、时间戳、辅助信息都用它——它会随深浅色模式自动换色，比写死灰色更聪明。',
      u: '<p class="text-body-secondary">灰色说明文字</p>',
      re: '^text-body(-(secondary|tertiary))?$',
      tip: '旧教程里的 text-muted 是同用途的老类名，5.3 推荐改用新写法。',
      ref: '3.2.1'
    },
    {
      n: 'text-{色}-emphasis',
      d: '"加深版颜色"：用于浅色底上的文字，对比度更高。如 text-danger-emphasis 比 text-danger 更深、更易读。',
      re: '^text-(primary|secondary|success|danger|warning|info|light|dark)-emphasis$',
      ref: '3.2.1'
    },
    {
      n: 'bg-{颜色}',
      d: '容器背景色：bg-primary / bg-dark / bg-light / bg-white…… 上色后记得给文字配对比色（或直接用下面的 text-bg-*）。',
      u: '<div class="bg-primary text-white p-3">蓝底白字</div>',
      re: '^bg-(primary|secondary|success|danger|warning|info|light|dark|white|black|transparent)$',
      ref: '3.2.2'
    },
    {
      n: 'bg-body / bg-body-secondary / tertiary',
      d: '"和主题联动的背景色"：bg-body 是主背景，bg-body-tertiary 是"更淡一档"（浅灰面板、轻分隔），深浅色模式下自动变化。',
      u: '<div class="bg-body-tertiary p-3 rounded">浅灰面板</div>',
      re: '^bg-body(-(secondary|tertiary))?$',
      ref: '3.2.2'
    },
    {
      n: 'bg-gradient',
      d: '给现有背景"叠一层从上到下的柔光渐变"，让自己不那么平。不改颜色，只加质感。',
      u: '<div class="bg-primary bg-gradient text-white p-3">带渐变的蓝</div>',
      ref: '3.2.2'
    },
    {
      n: 'text-bg-{颜色}',
      d: '"背景 + 配套文字色"一次到位：text-bg-dark = 深底 + 自动配白色文字（对比度官方校准过）。徽章、深色卡片、警告条首选。',
      u: '<span class="badge text-bg-success">已完成</span>',
      re: '^text-bg-(primary|secondary|success|danger|warning|info|light|dark)$',
      tip: '比"bg-dark text-white"少写一个类，还会自动选对的文字色。',
      ref: '3.2.3'
    },
    {
      n: 'opacity-0 ~ opacity-100',
      d: '整体透明度：opacity-25 / 50 / 75 最常用，75 即 75% 不透明。做"禁用态""悬停变淡"的现成工具。',
      re: '^opacity-(0|25|50|75|100)$',
      tip: '它会让"整个元素"（含子元素）一起变淡；只想淡背景请用 rgba 颜色。',
      ref: '4.1'
    },
    {
      n: 'link-{颜色}',
      d: '改"链接"的颜色（普通文字用 text-*）：link-danger、link-dark……常配 link-offset-2（下划线离文字远一点）。',
      u: '<a href="#" class="link-danger link-offset-2">红色链接</a>',
      re: '^link-(primary|secondary|success|danger|warning|info|light|dark|body-emphasis|body|white|black)$',
      ref: '3.5.1'
    },
    {
      n: 'link-underline / link-underline-opacity-*',
      d: '链接下划线的"材质"调节：link-underline 画出下划线，link-underline-opacity-0 藏起来，加 -hover 后缀只在悬停时出现。',
      u: '<a href="#" class="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">悬停才出下划线</a>',
      re: '^link-underline(-opacity-(0|10|25|50|75|100)(-hover)?)?$',
      ref: '3.5.2'
    },
    {
      n: 'border / border-0',
      d: '边框开关：border 给四条边加 1px 浅灰边框；border-0 去掉边框。还有 border-top / end / bottom / start 单边款。',
      u: '<div class="border rounded p-3">带边框的盒子</div>',
      re: '^border(-(top|end|bottom|start|0))?$',
      ref: '4.2.1'
    },
    {
      n: 'border-1 ~ border-5',
      d: '边框粗细：数字越大越粗。border-1 是默认的 1px，border-5 是夸张的 5px。',
      re: '^border-[1-5]$',
      ref: '4.2.3'
    },
    {
      n: 'border-{颜色}',
      d: '边框上色：border-primary / border-danger……可再配 border-opacity-25 做"半透明描边"。',
      re: '^border-(primary|secondary|success|danger|warning|info|light|dark|white|black)$',
      ref: '4.2.2'
    },
    {
      n: 'rounded / rounded-0 ~ rounded-5',
      d: '圆角：rounded 是默认小圆角；rounded-0 变直角；数字越大越圆（5.3 新增大档位 rounded-4、rounded-5）。',
      re: '^rounded(-[0-5])?$',
      ref: '4.2.4'
    },
    {
      n: 'rounded-top / end / bottom / start',
      d: '只圆"某几条边"：比如图片只圆上两角用 rounded-top，做卡片封面图时很常用。',
      re: '^rounded-(top|end|bottom|start)(-[0-5])?$',
      ref: '4.2.4'
    },
    {
      n: 'rounded-circle / rounded-pill',
      d: '两个"极限圆角"：circle 是正圆（头像、图标按钮），pill 是胶囊（药丸标签、圆润按钮）。',
      re: '^rounded-(circle|pill)$',
      tip: 'circle 要配"正方形元素或图片"才正圆；对长条元素会拉成椭圆。',
      ref: '4.2.4'
    },
    {
      n: 'shadow / shadow-sm / shadow-lg',
      d: '预定义阴影：<b>sm</b> 最轻（贴纸感）、默认居中、<b>lg</b> 最强（悬浮感）、shadow-none 去掉阴影。卡片悬停加深阴影的交互全靠它。',
      re: '^shadow(-(sm|lg|none))?$',
      ref: '4.9'
    },
    {
      n: 'bg-opacity / border-opacity / text-opacity',
      d: '旧版"半透明颜色"的配套类（如 bg-opacity-25）。现在更推荐直接用 bg-body-tertiary 或 rgba 颜色；遇到老代码知道它的意思即可。',
      re: '^(bg|border|text)-opacity-(0|10|25|50|75|100)$',
      ref: '4.1'
    }
  ]
});
