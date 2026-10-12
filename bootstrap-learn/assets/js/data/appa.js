/* ============================================================
   附录 A 定制 Bootstrap
   ============================================================ */
window.BS_DATA.push({
  id: 'appa',
  num: '附录 A',
  title: '定制 Bootstrap',
  accent: '#b45309',
  accentSoft: '#fdf3e3',
  icon: 'bi-sliders',
  intro: '用久了你会发现："我想把主色换成自己的品牌色"。这就是定制。三条路从易到难：CSS 变量微调（不装任何东西）→ 加一层覆盖 CSS → Sass 编译定制。这个附录带你把最专业的第三条路走通，顺便入门 Sass。',
  goals: [
    '理解定制 Bootstrap 的三种层次，选对工具',
    '认识 Sass，会读 SCSS 代码',
    '掌握变量、嵌套、mixins、运算、导入五个基础语法',
    '会搭一个 Sass 编译环境（npm 或 VS Code）',
    '能改主题色、开启负边距、写自己的工具类与组件'
  ],
  docs: [
    { t: '官方定制文档', u: 'https://getbootstrap.com/docs/5.3/customize/overview/' },
    { t: 'Sass 官方教程', u: 'https://sass-lang.com/guide/' },
    { t: '官方 CSS 变量', u: 'https://getbootstrap.com/docs/5.3/customize/css-variables/' },
    { t: 'Utilities API', u: 'https://getbootstrap.com/docs/5.3/utilities/api/' }
  ],
  sections: [
    {
      id: 'A.1',
      t: '个性化页面',
      d: '定制前先想清楚"要改多少"：① <b>微调</b>（改一两个按钮/区块的样式）→ 直接用 Bootstrap 暴露的 <b>CSS 变量</b>，一行 style 搞定，不用装任何工具；② <b>换主题色、开启实验特性</b>（如负边距）→ 必须 <b>Sass 编译</b>，因为类名和颜色是"编译时生成"的；③ <b>彻底换皮</b> → 可以考虑 Bootswatch 等现成主题，或者在 Sass 层面大改。',
      demo:
        '<div class="d-flex flex-wrap gap-3 align-items-center">' +
        '<button class="btn btn-primary">默认主色按钮</button>' +
        '<button class="btn btn-primary" style="--bs-btn-bg:#7c3aed;--bs-btn-border-color:#7c3aed;--bs-btn-hover-bg:#6d28d9;--bs-btn-hover-border-color:#6d28d9;--bs-btn-active-bg:#5b21b6;--bs-btn-active-border-color:#5b21b6">CSS 变量改的紫色按钮</button>' +
        '<button class="btn btn-outline-primary" style="--bs-btn-color:#0f766e;--bs-btn-border-color:#0f766e;--bs-btn-hover-bg:#0f766e;--bs-btn-hover-border-color:#0f766e">变量改的描边按钮</button>' +
        '</div>' +
        '<p class="small text-body-secondary mt-3 mb-0">三个按钮 HTML 几乎一样，后两个只是在标签上写了几个 <code>--bs-btn-*</code> 变量——5.3 的每个组件都暴露了这类变量，<b>先翻官方文档的 CSS variables 小节，再决定要不要动 Sass</b>。</p>',
      hint: '悬停第三个按钮，看它的颜色变化也是"青色系"的——整套状态色都由变量统一控制',
      tip: '判断口诀：<b>改局部用 CSS 变量，改全局（尤其是"主题色"）用 Sass 编译</b>。因为 btn-primary 的颜色是在编译时"写死"进 CSS 的，页面里覆盖 --bs-primary 并不会让 btn-primary 变色。'
    },
    {
      id: 'A.2',
      t: 'Sass 概述',
      d: 'Sass 是一门"能编译成 CSS 的语言"（叫预处理器）：用 <b>.scss</b> 后缀的文件写代码，可以用变量、嵌套、函数、循环这些 CSS 没有的东西，编译后生成普通 CSS 给浏览器用。Bootstrap 的源码就是一堆 .scss 文件（编译前有 10000+ 行，编译压缩后就是你在用的 bootstrap.min.css）。',
      demo:
        '<div class="sass-pair">' +
        '<div><div class="pg-label">你写的 SCSS（带变量和嵌套）</div>' +
        '<pre class="sass-out mb-0" style="overflow:auto">$brand: #7952b3;\n\n.card-brand {\n  border-color: $brand;\n\n  .title {\n    color: $brand;\n    &:hover { text-decoration: underline; }\n  }\n}</pre></div>' +
        '<div><div class="pg-label">编译后生成的 CSS（浏览器只看这个）</div>' +
        '<pre class="sass-out mb-0" style="overflow:auto">.card-brand {\n  border-color: #7952b3;\n}\n.card-brand .title {\n  color: #7952b3;\n}\n.card-brand .title:hover {\n  text-decoration: underline;\n}</pre></div>' +
        '</div>',
      hint: '左边是"人写的"，右边是"机器看的"——编译就是这张图里发生的事',
      tip: '<b>别怕</b>：即使不会 Sass，你前面写的一切都照常工作。Sass 是"进阶工具"，本项目里只在需要"改主题色/加功能"时才用它。'
    },
    {
      id: 'A.3',
      t: 'Sass 插件安装',
      d: '两条路线：<b>路线一（推荐新手）：VS Code 插件</b>——商店搜索安装 "Sass"（作者 syler）或 "Live Sass Compiler"，保存 .scss 文件时自动编译；<b>路线二（更专业）：npm 命令行</b>——安装官方 sass 包，用一条命令编译、享受完整控制。国内环境建议先给 npm 换镜像源。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="p-3 border rounded-3 bg-white h-100">' +
        '<h6 class="fw-bold small mb-2"><i class="bi bi-window me-1 text-primary"></i>路线一：VS Code 插件</h6>' +
        '<ol class="small text-body-secondary mb-0 ps-3">' +
        '<li class="mb-1">扩展商店搜 <strong>Sass</strong>，点安装</li>' +
        '<li class="mb-1">项目里新建 <code>scss/custom.scss</code></li>' +
        '<li>在插件里点"Watch Sass"，保存即自动生成 .css</li>' +
        '</ol></div></div>' +
        '<div class="col-md-6"><div class="p-3 border rounded-3 bg-white h-100">' +
        '<h6 class="fw-bold small mb-2"><i class="bi bi-terminal me-1 text-success"></i>路线二：npm 命令行</h6>' +
        '<div class="sass-out" style="font-size:.76rem">npm config set registry https://registry.npmmirror.com<br>' +
        'npm init -y<br>' +
        'npm install sass --save-dev<br>' +
        'npx sass scss/custom.scss css/custom.css --watch</div>' +
        '</div></div></div>',
      tip: 'npm 换国内镜像源（registry.npmmirror.com）后装包速度会快很多；<code>--watch</code> 参数让 sass 一直"盯着"文件，改一次编译一次，不用手动反复敲命令。'
    },
    {
      id: 'A.4',
      t: 'Sass 的基本语法',
      group: true,
      d: '只需要看懂五个东西：变量、嵌套、mixins、运算、导入。掌握了就能读懂 Bootstrap 源码的大部分。',
      children: [
        {
          id: 'A.4.1',
          t: '变量',
          d: '用 <code>$</code> 声明变量，全文件随处引用。好处：一个"品牌色"改一处、全局生效。注意 Sass 变量是<b>编译时替换</b>的（生成 CSS 后它就不存在了），而 CSS 变量（<code>var(--x)</code>）是<b>运行时生效</b>的——两者配合使用最灵活。',
          demo:
            '<div class="sass-pair mb-3">' +
            '<div><div class="pg-label">SCSS</div><pre class="sass-out mb-0">$brand: #7952b3;\n$radius: 12px;\n\n.chip-x {\n  background: $brand;\n  border-radius: $radius;\n}</pre></div>' +
            '<div><div class="pg-label">编译结果 + 实时效果</div><pre class="sass-out mb-2">.chip-x {\n  background: #7952b3;\n  border-radius: 12px;\n}</pre>' +
            '<span style="display:inline-block;background:#7952b3;border-radius:12px;color:#fff;padding:.45rem .9rem;font-size:.85rem">我是 $brand 配色的小块</span></div>' +
            '</div>',
          tip: '命名习惯：Bootstrap 源码里的变量都有前缀 <code>$</code>，主题色大礼包是 <code>$theme-colors</code> 映射（map），下一节就讲。'
        },
        {
          id: 'A.4.2',
          t: '嵌套规则',
          d: '"父级里写子级"——让选择器有层次感，不用一遍遍重复父选择器。<code>&</code> 表示"父选择器本身"，用来拼伪类（<code>&:hover</code>）或后缀（<code>&-lg</code>）。注意：嵌套是为了"书写方便"，编译后仍是平铺的 CSS；嵌套层数别太深（3 层以内）。',
          demo:
            '<div class="sass-pair">' +
            '<div><div class="pg-label">SCSS（嵌套 + &）</div><pre class="sass-out mb-0">.demo-card {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  padding: 12px;\n\n  .title { font-weight: 700; color: #1e2532; }\n\n  &:hover { box-shadow: 0 6px 16px rgba(0,0,0,.12); }\n\n  &.active { border-color: #7952b3; }\n}</pre></div>' +
            '<div><div class="pg-label">编译结果（平铺的 CSS）</div><pre class="sass-out mb-0">.demo-card { border: 1px solid #ddd; border-radius: 10px; padding: 12px; }\n.demo-card .title { font-weight: 700; color: #1e2532; }\n.demo-card:hover { box-shadow: 0 6px 16px rgba(0,0,0,.12); }\n.demo-card.active { border-color: #7952b3; }</pre></div>' +
            '</div>',
          tip: '<code>&</code> 读作"父级"：<code>&:hover</code> 编译成 <code>.demo-card:hover</code>；<code>&-lg</code> 编译成 <code>.demo-card-lg</code>（Bootstrap 里就是用它批量生成 .btn-lg 这类后缀类）。'
        },
        {
          id: 'A.4.3',
          t: '混合（mixins）',
          d: 'mixins = "可带参数的代码模板"。用 <code>@mixin</code> 定义、<code>@include</code> 使用：一段常用样式（比如"加阴影"）写一次，各处调用时可以传不同参数。Bootstrap 内部大量用它——例如每个 .btn-* 的颜色体系就是用 <code>button-variant()</code> 这个 mixin 批量生成的。',
          demo:
            '<div class="sass-pair mb-3">' +
            '<div><div class="pg-label">SCSS（定义 + 使用）</div><pre class="sass-out mb-0">@mixin soft-shadow($color, $blur: 16px) {\n  box-shadow: 0 8px $blur rgba($color, .35);\n}\n\n.box-a { @include soft-shadow(#7952b3); }\n.box-b { @include soft-shadow(#0d6efd, 28px); }</pre></div>' +
            '<div><div class="pg-label">编译结果 + 实时效果</div><pre class="sass-out mb-2">.box-a { box-shadow: 0 8px 16px rgba(121,82,179,.35); }\n.box-b { box-shadow: 0 8px 28px rgba(13,110,253,.35); }</pre>' +
            '<div class="d-flex gap-3">' +
            '<span style="width:88px;height:48px;border-radius:10px;background:#fff;box-shadow:0 8px 16px rgba(121,82,179,.35);display:inline-flex;align-items:center;justify-content:center;font-size:.75rem;color:#7952b3">box-a</span>' +
            '<span style="width:88px;height:48px;border-radius:10px;background:#fff;box-shadow:0 8px 28px rgba(13,110,253,.35);display:inline-flex;align-items:center;justify-content:center;font-size:.75rem;color:#0d6efd">box-b</span>' +
            '</div></div>' +
            '</div>',
          tip: '和"变量"的区别：变量存的是<b>值</b>，mixin 存的是<b>一堆属性和逻辑</b>（还能传参、还能写 if/循环）。'
        },
        {
          id: 'A.4.4',
          t: '运算及函数',
          d: 'Sass 支持数学运算（加减乘除）和内置函数：颜色函数（<code>darken() / lighten() / rgba()</code>、现代的 <code>color.adjust() / color.scale()</code>）、字符串函数、列表/映射函数等。Bootstrap 用它算"悬停色"——比如 btn-primary 悬停时的深蓝色，就是 <code>shade-color()</code> 算出来的。',
          demo:
            '<div class="sass-pair mb-3">' +
            '<div><div class="pg-label">SCSS（运算 + 颜色函数）</div><pre class="sass-out mb-0">$base: #7952b3;\n$gap: 8px;\n\n.hover-x { background: $base; }\n.hover-x:hover { background: darken($base, 12%); }\n.mt-x { margin-top: $gap * 2; }</pre></div>' +
            '<div><div class="pg-label">实时效果（把鼠标放到色块上）</div>' +
            '<span class="brand-btn" style="background:#7952b3;cursor:pointer" onmouseover="this.style.background=\'#5c3b8c\'" onmouseout="this.style.background=\'#7952b3\'">悬停我变深（darken 12%）</span>' +
            '<div class="small text-body-secondary mt-2">margin-top: 8px × 2 = 16px</div>' +
            '<div class="sass-out mt-1">$gap * 2 → 16px</div>' +
            '</div></div>',
          tip: '现代 Sass 建议用 <code>color.scale($base, $lightness: -12%)</code> 替代已逐步弃用的 darken()——但在 Bootstrap 5 源码和大量旧教程里，darken/lighten 仍然到处都是，看得懂最重要。'
        },
        {
          id: 'A.4.5',
          t: '导入文件',
          d: '把大文件拆成小块，用导入"拼"起来。旧写法 <code>@import "xxx"</code>（Sass 官方已弃用）；新写法是 <code>@use "xxx"</code>（推荐）和 <code>@forward</code>（转发）。Bootstrap 5 的源码目前仍用 @import 体系，但你自己写新项目时建议用 @use。',
          demo:
            '<div class="sass-pair">' +
            '<div><div class="pg-label">旧写法（Bootstrap 源码风格）</div><pre class="sass-out mb-0">// _variables.scss 里定义\n$brand: #7952b3;\n\n// main.scss 里导入\n@import "variables";\n@import "bootstrap";</pre></div>' +
            '<div><div class="pg-label">新写法（现代 Sass 推荐）</div><pre class="sass-out mb-0">// _tokens.scss 里定义并转发\n$brand: #7952b3;\n\n// main.scss 里按命名空间使用\n@use "tokens";\n@use "bootstrap";\n\n.btn-x { color: tokens.$brand; }</pre></div>' +
            '</div>',
          tip: '文件名的下划线是"零件文件"的意思：<code>_variables.scss</code> 不会被单独编译成 css，只能被导入——防止生成一堆没用的文件。'
        }
      ]
    },
    {
      id: 'A.5',
      t: '定制 Bootstrap 的前期准备',
      group: true,
      d: '四步走：拿到源码 → 想清楚定制方式 → 装好编译环境 → 建一个自己的"初始项目"。',
      children: [
        {
          id: 'A.5.1',
          t: '下载 Bootstrap 源码文件',
          d: '两种方式：① 官网/download 页下载 <b>Source files</b>（含 scss 源码的压缩包）；② 用 npm 安装（<code>npm install bootstrap</code>），源码在 node_modules/bootstrap/scss/。你会看到几十个 _xxx.scss 文件，平时不用全看，重点是 _variables.scss（所有变量）和 _utilities.scss（工具类配置）。',
          demo:
            '<div class="border rounded-3 p-3 bg-white font-monospace small">' +
            'bootstrap/scss/<br>' +
            '├─ _variables.scss&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body-tertiary">← 所有可改变量都在这里（最常翻）</span><br>' +
            '├─ _maps.scss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body-tertiary">← $theme-colors 等"颜色大礼包"</span><br>' +
            '├─ _utilities.scss&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body-tertiary">← 工具类生成配置（utilities API）</span><br>' +
            '├─ _buttons.scss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body-tertiary">← .btn 组件源码</span><br>' +
            '├─ bootstrap.scss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body-tertiary">← 主入口：把这些零件拼起来</span><br>' +
            '└─ …（约 70 个文件，用到再查）' +
            '</div>',
          tip: '找变量技巧：打开 _variables.scss 用 Ctrl+F 搜索你想改的关键字（primary、radius、font-size…），大概率一下就找到。'
        },
        {
          id: 'A.5.2',
          t: '定制方式',
          d: '正规做法：新建一个 <b>custom.scss</b> 作为"总入口"——<b>先写你的变量覆盖，再 @import Bootstrap</b>。因为 Bootstrap 的变量都用 <code>!default</code> 定义（"你没定义过我才用默认值"），所以你先写的那份"说了算"。全部编译在一个文件里，输出成自己的 custom.css。',
          demo:
            '<div class="sass-out" style="font-size:.8rem">' +
            '// custom.scss —— 我自己的定制入口<br>' +
            '// 第 1 步：先改变量（必须写在导入之前！）<br>' +
            '$primary: #7c3aed;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6d43b0">// 换掉主色</span><br>' +
            '$border-radius: .75rem;&nbsp;&nbsp;<span style="color:#6d43b0">// 全局圆角更大</span><br>' +
            '$enable-negative-margins: true;&nbsp;&nbsp;<span style="color:#6d43b0">// 开启负边距类</span><br><br>' +
            '// 第 2 步：导入 Bootstrap（此时它"继承"上面的值）<br>' +
            '@import "bootstrap/scss/bootstrap";<br><br>' +
            '// 第 3 步：写自己的补充样式<br>' +
            '.site-hero { padding: 6rem 0; }' +
            '</div>',
          tip: '<b>顺序就是一切：</b>变量覆盖必须写在 @import 之前。写在后面会被默认值"顶掉"——这是定制不回生效的第一大原因。'
        },
        {
          id: 'A.5.3',
          t: '配置 Scss 编译环境',
          d: '以 npm 方案为例：初始化项目 → 安装 sass → 在 package.json 里加一条编译命令（sass 输入 输出 --watch）。之后每次保存 .scss，css 自动更新。VS Code 插件方案则不需要配命令，装好插件点 Watch 即可。',
          demo:
            '<div class="sass-out" style="font-size:.8rem">' +
            '// package.json 的 scripts 里加一行：<br>' +
            '"scripts": {<br>' +
            '&nbsp;&nbsp;"sass": "sass scss/custom.scss css/custom.css --watch --style=compressed"<br>' +
            '}<br><br>' +
            '// 然后每次开发时终端里跑：<br>' +
            'npm run sass' +
            '</div>' +
            '<div class="small text-body-secondary mt-2 mb-0">参数解释：<code>--watch</code> 持续监听；<code>--style=compressed</code> 输出压缩版 CSS。</div>',
          tip: '编译报错别慌：终端会给出"哪个文件第几行"——90% 的报错是少了分号、少了括号、或变量名拼错。'
        },
        {
          id: 'A.5.4',
          t: '初始项目',
          d: '一个"能改 Bootstrap"的最小项目长这样：scss/ 放源码和你的 custom.scss，css/ 放编译产物，index.html 只引你自己的 custom.css（因为 Bootstrap 的内容已经编译进去了，不用再单独引）。',
          demo:
            '<div class="row g-3"><div class="col-md-6">' +
            '<div class="border rounded-3 p-3 bg-white font-monospace small">' +
            'my-site/<br>' +
            '├─ scss/<br>' +
            '│&nbsp;&nbsp;├─ bootstrap/&nbsp;&nbsp;<span class="text-body-tertiary">← 源码（原样放着）</span><br>' +
            '│&nbsp;&nbsp;└─ custom.scss&nbsp;<span class="text-body-tertiary">← 你的定制入口</span><br>' +
            '├─ css/custom.css&nbsp;&nbsp;<span class="text-body-tertiary">← 编译产物（自动生成）</span><br>' +
            '├─ package.json<br>' +
            '└─ index.html' +
            '</div></div>' +
            '<div class="col-md-6"><div class="border rounded-3 p-3 bg-white small font-monospace">' +
            'index.html 只引一行：<br><br>' +
            '&lt;link rel="stylesheet" href="css/custom.css"&gt;<br><br>' +
            '<span class="text-body-tertiary">// 不需要再引 bootstrap.min.css<br>// 它已经被编译进 custom.css 了</span>' +
            '</div></div></div>',
          tip: '把 bootstrap/ 源码目录"原样复制"进 scss/ 是常见做法（npm 安装的话直接引 node_modules 里的路径也可以）。'
        }
      ]
    },
    {
      id: 'A.6',
      t: '定制 Bootstrap 的过程',
      group: true,
      d: '四个真刀真枪的定制操作：改变量、玩转 map 和循环、自定义工具类、写自己的组件。',
      children: [
        {
          id: 'A.6.1',
          t: '变量默认值',
          d: '<code>!default</code> 是 Bootstrap 能被"无痛定制"的核心机制：它的含义是"<b>如果这个变量此前没有被赋过值，就用我这个默认值</b>"。所以你先声明 $primary，Bootstrap 内部那句 <code>$primary: #0d6efd !default;</code> 就自动失效。想改主色、圆角、字体、开启/关闭功能开关（$enable-* 系列），全都靠它。',
          demo:
            '<div class="sass-out mb-3" style="font-size:.8rem">' +
            '// 你的 custom.scss（在导入之前）<br>' +
            '$primary: #7c3aed;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6d43b0">// 品牌紫</span><br>' +
            '$border-radius: 1rem;&nbsp;&nbsp;&nbsp;<span style="color:#6d43b0">// 大圆角</span><br>' +
            '$font-size-base: 1rem;&nbsp;&nbsp;<span style="color:#6d43b0">// 基准字号</span><br>' +
            '$enable-negative-margins: true;&nbsp;&nbsp;<span style="color:#6d43b0">// 开启负边距类</span><br><br>' +
            '@import "bootstrap/scss/bootstrap";' +
            '</div>' +
            '<div class="d-flex flex-wrap gap-3 align-items-center">' +
            '<span class="small text-body-secondary">编译后，全站所有 primary 元素都变成：</span>' +
            '<button class="btn btn-primary" style="--bs-btn-bg:#7c3aed;--bs-btn-border-color:#7c3aed;--bs-btn-hover-bg:#6d28d9;--bs-btn-hover-border-color:#6d28d9;--bs-btn-active-bg:#5b21b6;--bs-btn-active-border-color:#5b21b6;border-radius:1rem">品牌紫按钮</button>' +
            '<span class="badge text-bg-primary" style="background:#7c3aed!important;border-radius:1rem">徽章也变了</span>' +
            '</div>' +
            '<p class="small text-body-secondary mt-2 mb-0">（上面的"效果"是用 CSS 变量在你眼前模拟的编译结果——真实的编译在"你改 custom.scss 并保存"的那一刻完成。）</p>',
          tip: '<b>考点：</b>!default 的作用就是"允许外部先定义、优先使用外部值"。这也是为什么"变量必须写在 @import 之前"。'
        },
        {
          id: 'A.6.2',
          t: 'maps 和 loops',
          d: '<b>map</b> 是 Sass 的"字典"结构——Bootstrap 把所有主题色放在 <code>$theme-colors</code> 这个 map 里，然后用 <code>@each</code> 循环"遍历一遍"，批量生成 .text-*、.bg-*、.btn-* 等所有颜色类。<b>想加一个新颜色（比如品牌紫 brand），最正规的姿势就是往 map 里加一项。</b>',
          demo:
            '<div class="sass-pair">' +
            '<div><div class="pg-label">SCSS：往 map 加颜色 + 循环生成类</div><pre class="sass-out mb-0">// 加一个新主题色（写在导入之前）\n$theme-colors: (\n  "brand": #7c3aed,\n  "brand-soft": #f2ecfe\n);\n\n// Bootstrap 内部的循环（简化）\n@each $name, $color in $theme-colors {\n  .text-#{$name} { color: $color; }\n  .bg-#{$name} { background: $color; }\n}</pre></div>' +
            '<div><div class="pg-label">编译结果 + 实时演示</div><pre class="sass-out mb-2">.text-brand { color: #7c3aed; }\n.bg-brand { background: #7c3aed; }\n.bg-brand-soft { background: #f2ecfe; }</pre>' +
            '<div class="d-flex flex-wrap gap-2">' +
            '<span class="badge" style="background:#f2ecfe;color:#7c3aed">bg-brand-soft</span>' +
            '<span class="badge" style="background:#7c3aed;color:#fff">bg-brand</span>' +
            '<span style="color:#7c3aed;font-weight:600">.text-brand</span>' +
            '</div></div></div>',
          tip: '加了新颜色后，<code>btn-brand</code>、<code>text-brand</code>、<code>bg-brand</code>、<code>border-brand</code> 会"自动全套生成"——这就是 map + 循环的威力。'
        },
        {
          id: 'A.6.3',
          t: 'utilities API',
          d: '想加自己的工具类（比如 <code>.cursor-pointer</code>、<code>.opacity-15</code>），用 <code>$utilities</code> 这张 map 配置——加一行配置，Bootstrap 就帮你生成（还可以自动带响应式版本）。这就是官方文档里的 "Utilities API"：<b>不改源码、不重写 CSS，只是"申报"。</b>',
          demo:
            '<div class="sass-out mb-3" style="font-size:.8rem">' +
            '// custom.scss：申报一个新工具类<br>' +
            '$utilities: (<br>' +
            '&nbsp;&nbsp;"cursor": (<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;property: cursor,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6d43b0">// 生成 cursor-* 系列</span><br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;values: pointer,&nbsp;default,&nbsp;not-allowed<br>' +
            '&nbsp;&nbsp;),<br>' +
            '&nbsp;&nbsp;"opacity": (<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;property: opacity,<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;values: (10: .1,&nbsp;20: .2,&nbsp;40: .4)<br>' +
            '&nbsp;&nbsp;)<br>' +
            ');' +
            '</div>' +
            '<div class="d-flex flex-wrap gap-3 align-items-center">' +
            '<span class="small text-body-secondary">生成效果：</span>' +
            '<button class="btn btn-sm btn-outline-secondary" style="cursor:pointer">cursor: pointer</button>' +
            '<button class="btn btn-sm btn-outline-secondary" style="cursor:not-allowed">cursor: not-allowed</button>' +
            '<span style="opacity:.2" class="badge text-bg-primary">opacity .2</span>' +
            '<span style="opacity:.4" class="badge text-bg-primary">opacity .4</span>' +
            '</div>',
          tip: '注意：opacity 类 Bootstrap 自带 <code>.opacity-*</code>，这里只是演示"加自定义档位"的写法；真要加，会覆盖/扩充原有配置。'
        },
        {
          id: 'A.6.4',
          t: '添加自定义组件',
          d: '最后一步：把"常用样式组合"封装成自己的组件。可以复用 Bootstrap 的 mixin（如 <code>button-variant()</code> 生成整条按钮状态色）来保持风格一致。写组件前先想：它是不是"一个类的组合"就能解决？能用工具类就别造组件。',
          demo:
            '<div class="sass-out mb-3" style="font-size:.8rem">' +
            '// 方案一：直接用 Bootstrap 的 mixin 造按钮<br>' +
            '.btn-gold {<br>' +
            '&nbsp;&nbsp;@include button-variant($background: #d9a406, $border: #d9a406);<br>' +
            '}<br><br>' +
            '// 方案二：纯手写一个"徽章卡片"组件<br>' +
            '.stat-card {<br>' +
            '&nbsp;&nbsp;border-radius: $border-radius-lg;<br>' +
            '&nbsp;&nbsp;padding: 1.25rem 1.5rem;<br>' +
            '&nbsp;&nbsp;background: var(--bs-body-bg);<br>' +
            '&nbsp;&nbsp;box-shadow: 0 10px 30px -18px rgba(0,0,0,.4);<br>' +
            '}' +
            '</div>' +
            '<div class="d-flex flex-wrap gap-3 align-items-stretch">' +
            '<button class="btn" style="background:#d9a406;border-color:#d9a406;color:#fff">自定义 btn-gold</button>' +
            '<div style="border-radius:14px;padding:14px 20px;background:#fff;box-shadow:0 10px 30px -18px rgba(0,0,0,.45);min-width:150px">' +
            '<div class="fs-5 fw-bold text-primary">86%</div><div class="small text-body-secondary">自定义 stat-card</div></div>' +
            '</div>',
          tip: '组件命名建议加自己的前缀（如 <code>.my-</code>、项目缩写），避免和 Bootstrap 未来的类名"撞车"。定制完成后别忘了在"减少动效""深色模式"下都验证一遍。'
        }
      ]
    }
  ],
  summary: [
    '定制三层次：CSS 变量微调（不编译）→ 覆盖层 CSS → Sass 编译定制（推荐用于改主题色）。',
    'Sass = 能编译成 CSS 的语言；Bootstrap 源码是 70 多个 .scss 文件，编译后就是 bootstrap.min.css。',
    'Sass 五件套：$变量、嵌套（& 指父级）、@mixin/@include、运算与颜色函数、@import/@use。',
    '环境搭建两方案：VS Code 的 Sass 插件（零配置）或 npm 的 sass 包（npm run sass --watch）。',
    '定制流程：custom.scss 里"先改变量，后 @import bootstrap"；页面只引编译产物 custom.css。',
    '!default 机制 = 你先定义就优先用你的；变量必须写在 @import 之前。',
    '$theme-colors 加一项 = 全套颜色类自动生成；$utilities 加一项 = 自定义工具类自动生成（还能带响应式）。',
    '自定义组件优先复用 Bootstrap 的 mixin（如 button-variant）保持风格统一。'
  ],
  practice: {
    t: '附录实训：把主色换成你的品牌色',
    d: '走一遍完整流程：搭环境 → 改变量 → 编译 → 验证。之后你对"定制"就不再陌生了。',
    steps: [
      '建文件夹 mysite，npm init -y，npm install sass bootstrap --save-dev。',
      '新建 scss/custom.scss：写 $primary 为你的品牌色，$border-radius 调大，然后 @import "bootstrap/scss/bootstrap"。',
      'package.json 加脚本："sass": "sass scss/custom.scss css/custom.css --watch"。运行 npm run sass。',
      '新建 index.html，只引 css/custom.css，放一个 btn-primary 和一个 badge 验证颜色是否变了。',
      '加分题：往 $theme-colors 加一个 "brand" 色，试试 btn-brand / text-brand 是否自动可用。'
    ],
    demo:
      '<div class="d-flex flex-wrap gap-3 align-items-center">' +
      '<span class="small text-body-secondary">"编译后"的最终效果大概是这样：</span>' +
      '<button class="btn btn-primary" style="--bs-btn-bg:#0f766e;--bs-btn-border-color:#0f766e;--bs-btn-hover-bg:#0d6b64;--bs-btn-hover-border-color:#0d6b64;border-radius:.9rem">品牌色按钮</button>' +
      '<button class="btn btn-outline-primary" style="--bs-btn-color:#0f766e;--bs-btn-border-color:#0f766e;--bs-btn-hover-bg:#0f766e;--bs-btn-hover-border-color:#0f766e;border-radius:.9rem">描边版</button>' +
      '<span class="badge rounded-pill" style="background:#0f766e">徽章</span>' +
      '<span class="text-body-secondary small">……全站 primary 元素都跟着变</span>' +
      '</div>',
    hint: '这里的效果用 CSS 变量模拟（免编译），真流程请按上面四步动手'
  }
});
