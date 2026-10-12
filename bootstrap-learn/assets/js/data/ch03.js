/* ============================================================
   第 3 章 CSS 布局
   ============================================================ */
window.BS_DATA.push({
  id: 'ch3',
  num: '第 3 章',
  title: 'CSS 布局',
  accent: '#16a34a',
  accentSoft: '#e9f9f0',
  icon: 'bi-fonts',
  intro: '这一章是"零件库大巡游"：文字怎么排版、颜色怎么用、按钮和表格有多少款式、图片怎么处理。内容多，但都不难——每个知识点看一眼效果、抄一段代码就能用，属于"记住了就能直接用"的干货。',
  goals: [
    '会用标题、段落、引用、代码等排版元素',
    '会用颜色类、文本工具类快速调样式',
    '掌握按钮的全部玩法：颜色 / 描边 / 尺寸 / 状态',
    '会做条纹表格、响应式表格、彩色表格',
    '会处理图片：响应式、圆角、缩略图、图文框'
  ],
  docs: [
    { t: '官方内容文档', u: 'https://getbootstrap.com/docs/5.3/content/typography/' },
    { t: '颜色 Colors', u: 'https://getbootstrap.com/docs/5.3/utilities/colors/' },
    { t: '表格 Tables', u: 'https://getbootstrap.com/docs/5.3/content/tables/' },
    { t: '图片 Images', u: 'https://getbootstrap.com/docs/5.3/content/images/' }
  ],
  sections: [
    {
      id: '3.1',
      t: '排版',
      group: true,
      d: '文字是网页的主体。Bootstrap 已经帮你把标题、段落、引用这些基本元素的样式调好了，多数时候你什么都不用加。',
      children: [
        {
          id: '3.1.1',
          t: '标题',
          d: '<code>h1</code>～<code>h6</code> 从大到小共 6 级，样式 Bootstrap 已调好。特殊需求用 <b>display 大标题</b>（display-1～display-6）：它比 h1 更大更"海报化"，适合横幅和落地页。如果想让"非标题标签"长得像标题，用 <code>.h1</code>～<code>.h6</code> 类。',
          demo:
            '<h1>h1. 一级标题</h1><h2>h2. 二级标题</h2><h3>h3. 三级标题</h3>' +
            '<hr class="my-3">' +
            '<p class="display-6 mb-2">display-6 大标题</p>' +
            '<p class="text-body-secondary small mb-0">display-1 到 display-6 依次变小，数字越大反而越小</p>',
          tip: '<code>&lt;p class="h3"&gt;</code> 可以"让段落穿标题的皮"——保留段落标签的语义，外观却像 h3。SEO 友好又好看。'
        },
        {
          id: '3.1.2',
          t: '段落',
          d: '普通段落用 <code>&lt;p&gt;</code> 即可。想要"引言感"的放大段落，加 <code>.lead</code>；要小一号的辅助文字，可用 <code>.small</code> 或 <code>&lt;small&gt;</code>。Bootstrap 还会让相邻段落下边距统一为 1rem，视觉节奏一致。',
          demo:
            '<p class="lead">这是 .lead 引言段落，字号更大、颜色稍浅，适合放在标题下面做副标题。</p>' +
            '<p>这是普通段落。这是普通段落。这是普通段落。这是普通段落，用来对比 lead 的效果。</p>' +
            '<p class="small text-body-secondary mb-0">这是 .small 小字，适合放注释、说明、版权信息。</p>',
          tip: '配色口诀：正文用默认色，次要信息配 <code>.text-body-secondary</code>，再淡一层用 <code>.text-body-tertiary</code>。'
        },
        {
          id: '3.1.3',
          t: '内联文本标签',
          d: '一批"行内小标签"直接改变文字的样子：<code>mark</code> 荧光笔、<code>del</code> 删除线、<code>ins</code> 下划线（表新增）、<code>strong</code> 加粗、<code>em</code> 斜体。它们既有视觉效果，也自带语义（对搜索引擎和读屏软件友好）。',
          demo:
            '<p>你可以<mark>用荧光笔划重点</mark>，也可以表示<del>删掉的内容</del>和<ins>新增的内容</ins>。</p>' +
            '<p><strong>加粗（strong）</strong>用来强调重点，<em>斜体（em）</em>用来表示语气或术语。</p>' +
            '<p class="mb-0">价格：<s>￥199</s> <span class="text-danger fw-bold">￥99</span>（s 标签也能表示作废内容）</p>',
          tip: '不要用 <code>&lt;b&gt;</code>、<code>&lt;i&gt;</code> 了：新写法是 strong / em，语义更清楚，而且 Bootstrap 对两者的加粗斜体样式一样。'
        },
        {
          id: '3.1.4',
          t: '水平线和垂直线',
          d: '<code>&lt;hr&gt;</code> 是水平分隔线，Bootstrap 把它做成了"上边框样式"，还能用边距类（如 my-4）控制上下留白。<code>.vr</code> 是垂直线，通常放在 flex 容器里，用来分隔左右两段内容。',
          demo:
            '<p class="mb-1">上面的段落</p><hr class="my-3"><p class="mb-0">下面的段落（中间是 hr）</p>' +
            '<div class="d-flex align-items-center my-4" style="height:56px">' +
            '<span class="me-3 small">左边内容</span><div class="vr me-3"></div><span class="small">右边内容（中间是 .vr）</span>' +
            '</div>',
          tip: '<code>.vr</code> 需要它的父元素有一定高度（如 d-flex + 高度或 align-self-stretch），否则它会"看不见"。'
        },
        {
          id: '3.1.5',
          t: '代码',
          d: '展示代码有四件套：<code>code</code> 行内代码片段、<code>kbd</code> 键盘按键、<code>samp</code> 程序输出、<code>var</code> 表示变量名。展示多行代码用 <code>&lt;pre&gt;&lt;code&gt;</code> 组合。',
          demo:
            '<p>行内代码：给按钮加 <code>btn</code> 类就能变样。</p>' +
            '<p>按下 <kbd>Ctrl</kbd> + <kbd>C</kbd> 复制，<kbd>Ctrl</kbd> + <kbd>V</kbd> 粘贴。</p>' +
            '<p>程序输出：<samp>Hello, Bootstrap!</samp>，变量名：<var>userName</var></p>' +
            '<pre class="mb-0"><code>const name = "Bootstrap";\nconsole.log(name);</code></pre>',
          tip: '<code>&lt;pre&gt;</code> 里显示 HTML 代码时，<code>&lt;</code> 要写成 <code>&amp;lt;</code>，否则会被浏览器当成真的标签"吃掉"。'
        },
        {
          id: '3.1.6',
          t: '缩略语',
          d: '把鼠标悬停在带 <code>title</code> 的 <code>&lt;abbr&gt;</code> 上，就能看到全称。Bootstrap 会给它加一条虚线下划线提示"这里可以悬停"。加 <code>.initialism</code> 类可以把字号缩小一点，适合 WWW、HTML 这类全大写缩写。',
          demo:
            '<p class="mb-1">这条提示依赖浏览器原生行为：把鼠标放到 <abbr title="HyperText Markup Language（超文本标记语言）">HTML</abbr> 上看全称。</p>' +
            '<p class="mb-0">全大写缩写缩小字号：<abbr title="World Wide Web" class="initialism">WWW</abbr> 和 <abbr title="Cascading Style Sheets" class="initialism">CSS</abbr></p>',
          tip: '手机上没法"悬停"，所以 abbr 只适合辅助信息，重要说明还是要写在正文里。'
        },
        {
          id: '3.1.7',
          t: '地址',
          d: '<code>&lt;address&gt;</code> 专门用来写联系方式（地址、电话、邮箱），Bootstrap 会把它重置为"无特殊样式"——默认斜体、不换行的问题都被处理掉了，直接写就好。',
          demo:
            '<address class="mb-0">' +
            '<strong>Bootstrap 学习小组</strong><br>' +
            '某市某区某路 88 号 8 楼<br>' +
            '<abbr title="电话">Tel</abbr>：010-8888-8888<br>' +
            '邮箱：<a href="#">learn@example.com</a>' +
            '</address>',
          tip: '地址块里用 <code>&lt;br&gt;</code> 手动换行即可，不要用 <code>&lt;p&gt;</code> 堆，语义不对。'
        },
        {
          id: '3.1.8',
          t: '引用',
          d: '块引用用 <code>&lt;blockquote class="blockquote"&gt;</code>；出处（作者、书名）用 <code>.blockquote-footer</code>，再用 <code>&lt;cite&gt;</code> 包住出处名。想靠右排版，给 blockquote 加 <code>.text-end</code>。',
          demo:
            '<figure class="mb-4"><blockquote class="blockquote">' +
            '<p>程序是写给人看的，只是顺便能在机器上运行。</p>' +
            '</blockquote><figcaption class="blockquote-footer mb-0">某位程序员，出自 <cite title="来源">《代码整洁之道》</cite></figcaption></figure>' +
            '<blockquote class="blockquote text-end mb-0">' +
            '<p class="mb-1">学而不思则罔。</p>' +
            '<footer class="blockquote-footer mb-0">孔子，出自 <cite>《论语》</cite></footer></blockquote>',
          tip: '引用块里也可以放很多段落，最后一段不写 <code>&lt;p&gt;</code>、直接写文字，footer 的位置会更自然。'
        }
      ]
    },
    {
      id: '3.2',
      t: '颜色类',
      group: true,
      d: 'Bootstrap 内置 8 个主题色（primary、secondary、success、danger、warning、info、light、dark），文字、背景、边框都能用。',
      children: [
        {
          id: '3.2.1',
          t: '文本颜色类、文本透明类',
          d: '文字颜色用 <code>.text-*</code>：8 个主题色 + 黑白 + 半透明黑/白（black-50、white-50）。想让颜色变淡，加 <code>.text-opacity-25/50/75</code>（颜色透明度），或者用 <code>.text-body-secondary</code> 这类"自动适配深浅模式"的通用色。',
          demo:
            '<p class="mb-1">' +
            '<span class="text-primary">primary</span> <span class="text-success">success</span> <span class="text-danger">danger</span> <span class="text-warning">warning</span> <span class="text-info">info</span> <span class="text-secondary">secondary</span> <span class="text-dark">dark</span> <span class="text-muted">muted（旧写法）</span>' +
            '</p>' +
            '<p class="mb-2"><span class="text-primary text-opacity-25">透明度 25</span> / <span class="text-primary text-opacity-50">50</span> / <span class="text-primary text-opacity-75">75</span> / <span class="text-primary">100</span></p>' +
            '<div class="p-2 rounded text-white" style="background:#212529">' +
            '<span class="text-white-50">深色背景上：white-50</span> / <span class="text-white">text-white</span> / <span class="text-body-secondary">body-secondary 会自动适配</span>' +
            '</div>',
          hint: '注意最后一行：同一个 text-body-secondary 在浅色底上是深灰、在深色底上自动变浅灰',
          tip: '<b>小抄：</b>正文默认色；"不太重要"的说明用 <code>text-body-secondary</code>；"警告用红色、成功用绿色"——颜色要种"用户直觉"匹配，别乱用。'
        },
        {
          id: '3.2.2',
          t: '背景颜色类、背景透明类',
          d: '背景色用 <code>.bg-*</code>，还能叠加 <code>.bg-opacity-25/50/75</code> 控制透明度，或加 <code>.bg-gradient</code> 变成渐变。透明背景用 <code>.bg-transparent</code>。记住：深色背景上要配 <code>text-white</code>，否则字看不清。',
          demo:
            '<div class="d-flex flex-wrap gap-2 mb-3">' +
            '<span class="p-2 rounded bg-primary text-white small">bg-primary</span>' +
            '<span class="p-2 rounded bg-success text-white small">bg-success</span>' +
            '<span class="p-2 rounded bg-warning text-dark small">bg-warning</span>' +
            '<span class="p-2 rounded bg-info text-dark small">bg-info</span>' +
            '<span class="p-2 rounded bg-danger text-white small">bg-danger</span>' +
            '<span class="p-2 rounded bg-dark text-white small">bg-dark</span>' +
            '<span class="p-2 rounded bg-body-secondary small">bg-body-secondary</span>' +
            '</div>' +
            '<div class="d-flex flex-wrap gap-2 mb-3">' +
            '<span class="p-2 rounded bg-primary bg-opacity-75 text-white small">透明度 75</span>' +
            '<span class="p-2 rounded bg-primary bg-opacity-50 text-white small">50</span>' +
            '<span class="p-2 rounded bg-primary bg-opacity-25 text-dark small">25</span>' +
            '<span class="p-2 rounded bg-primary bg-opacity-10 text-dark small">10</span>' +
            '</div>' +
            '<div class="p-2 rounded bg-primary bg-gradient text-white small">bg-gradient：带渐变的高级感</div>',
          tip: '5.3 也支持用 CSS 变量调透明度：<code>style="--bs-bg-opacity: .4"</code>，效果和 bg-opacity-40 类似（类名只有 10、25、50、75、100 五档）。'
        },
        {
          id: '3.2.3',
          t: '文本背景类',
          d: '<code>.text-bg-*</code> 一个类同时搞定"文字颜色 + 背景颜色"，帮你自动配好对比色（深背景自动配白字）。做徽章、标签、色块最省心，再也不用担心"白字配浅底看不见"。',
          demo:
            '<div class="d-flex flex-wrap gap-2 mb-3">' +
            '<span class="badge text-bg-primary">text-bg-primary</span>' +
            '<span class="badge text-bg-success">成功</span>' +
            '<span class="badge text-bg-danger">失败</span>' +
            '<span class="badge text-bg-warning">警告</span>' +
            '<span class="badge text-bg-info">信息</span>' +
            '<span class="badge text-bg-dark">深色</span>' +
            '<span class="badge text-bg-light border">浅色</span>' +
            '</div>' +
            '<div class="card text-bg-dark" style="max-width:320px"><div class="card-body p-3">' +
            '<h6 class="mb-1">text-bg-dark 的卡片</h6>' +
            '<p class="small mb-0" style="opacity:.75">一个类名，卡片立刻变"深色模式"，文字自动转白。</p>' +
            '</div></div>',
          tip: '凡是"深色底 + 浅色字"的场合，优先想 <code>text-bg-*</code>，比分开写 bg- 和 text- 更稳。'
        }
      ]
    },
    {
      id: '3.3',
      t: '文本类',
      group: true,
      d: '一批专门"收拾文字"的工具类：对齐、大小写、粗细、行高，等等。',
      children: [
        {
          id: '3.3.1',
          t: '文本排列',
          d: '横向对齐用 <code>.text-start / .text-center / .text-end</code>。还能按断点"分级生效"，例如 <code>.text-md-end</code> 表示"窄屏默认，md 以上才靠右"——手机上居中的标题，电脑上自动靠右，一行类名搞定。',
          demo:
            '<p class="text-start mb-1">这段靠左对齐（默认）：text-start</p>' +
            '<p class="text-center mb-1">这段居中：text-center</p>' +
            '<p class="text-end mb-3">这段靠右：text-end</p>' +
            '<p class="text-center text-md-end border rounded p-2 mb-0"><span class="text-body-secondary small">这段用了 text-center text-md-end —— 拉宽窗口看它靠右</span></p>',
          tip: '注意排版行话：Bootstrap 用 start/end 而不是 left/right，因为它还要照顾从右往左排版的语言（阿拉伯语等）。'
        },
        {
          id: '3.3.2',
          t: '文本字母大小写变换',
          d: '三个类用 CSS 改变英文字母大小写（不改原始文字）：<code>.text-lowercase</code> 全小写、<code>.text-uppercase</code> 全大写、<code>.text-capitalize</code> 每个单词首字母大写。中文没有大小写，所以只对英文内容有效果。',
          demo:
            '<p class="text-lowercase mb-1">Bootstrap Makes Front-End Development Faster</p>' +
            '<p class="text-uppercase mb-1">bootstrap makes front-end development faster</p>' +
            '<p class="text-capitalize mb-3">bootstrap makes front-end development faster</p>' +
            '<p class="text-body-secondary small mb-0">原始文字其实一模一样，只是套了不同的类。</p>',
          tip: '常见用途：把用户输入的英文统一显示为大写（如产品序列号），不用改数据库里的数据。'
        },
        {
          id: '3.3.3',
          t: '字体样式',
          d: '字重（粗细）用 <code>.fw-bold / .fw-semibold / .fw-normal / .fw-light / .fw-bolder</code>；斜体用 <code>.fst-italic</code>；字号有 <code>.fs-1</code>～<code>.fs-6</code>（数字越大字越小）；等宽字体（代码风格）用 <code>.font-monospace</code>。',
          demo:
            '<p class="fw-bold">fw-bold 粗体</p>' +
            '<p class="fw-semibold">fw-semibold 半粗（现代 UI 常用）</p>' +
            '<p class="fw-light">fw-light 细体</p>' +
            '<p class="fst-italic">fst-italic 斜体</p>' +
            '<p class="mb-1"><span class="fs-1">fs-1</span> <span class="fs-2">fs-2</span> <span class="fs-3">fs-3</span> <span class="fs-4">fs-4</span> <span class="fs-5">fs-5</span> <span class="fs-6">fs-6</span></p>' +
            '<p class="font-monospace mb-0">font-monospace: const a = 1;</p>',
          tip: '标题默认就是粗体，正文里要强调某几个字才用 fw-bold；满屏加粗等于没加粗。'
        },
        {
          id: '3.3.4',
          t: '行高',
          d: '行高（行与行的距离）用 <code>.lh-1 / .lh-sm / .lh-base（默认 1.5）/ .lh-lg</code> 控制。大标题行太挤时用 lh-sm 收紧，长文阅读段落用 lh-lg 放松些。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">lh-1（最紧）</div>' +
            '<p class="lh-1 mb-0">Bootstrap 是一个前端框架。Bootstrap 是一个前端框架。Bootstrap 是一个前端框架。Bootstrap 是一个前端框架。</p></div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">lh-lg（最松）</div>' +
            '<p class="lh-lg mb-0">Bootstrap 是一个前端框架。Bootstrap 是一个前端框架。Bootstrap 是一个前端框架。Bootstrap 是一个前端框架。</p></div>' +
            '</div>',
          tip: '一行中文正文的行高推荐 1.6～1.8；Bootstrap 默认 1.5 对中文略挤，长文页面可以给正文加 <code>lh-lg</code>。'
        },
        {
          id: '3.3.5',
          t: '其他类',
          d: '常用的还有：<code>.text-decoration-underline</code>（下划线）、<code>.text-decoration-line-through</code>（删除线）、<code>.text-truncate</code>（超长自动省略成"…"，需要块级元素）、<code>.text-break</code>（超长单词强制换行，防止撑破布局）、<code>.text-nowrap</code>（禁止换行）、<code>.text-reset</code>（继承父级颜色）。',
          demo:
            '<p class="text-decoration-underline mb-1">下划线：text-decoration-underline</p>' +
            '<p class="text-decoration-line-through mb-3">删除线：text-decoration-line-through</p>' +
            '<div class="row g-3">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">text-truncate（省略号）</div>' +
            '<div class="text-truncate border rounded p-2">这是一段很长的文字，长到放不下的时候会被截断并显示省略号，绝不会换行。</div></div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">text-break（强制换行）</div>' +
            '<div class="text-break border rounded p-2">https://getbootstrap.com/docs/5.3/utilities/text/aaaaaaaaaaaaaaaaaaaaaaaa</div></div>' +
            '</div>',
          tip: '<code>text-truncate</code> 只对"块级元素"生效（div、p），塞在 span 里不管用——这是小白最常翻的车。'
        }
      ]
    },
    {
      id: '3.4',
      t: '列表',
      group: true,
      d: '三种列表（无序 / 有序 / 描述）Bootstrap 已重置好样式，另有几个美化类可用。',
      children: [
        {
          id: '3.4.1',
          t: '无序列表和有序列表',
          d: '<code>&lt;ul&gt;</code> 无序列表（小圆点）和 <code>&lt;ol&gt;</code> 有序列表（数字）都是原生标签，Bootstrap 只统一了缩进与间距，用起来和纯 HTML 一样。',
          demo:
            '<div class="row"><div class="col-md-6">' +
            '<div class="small text-body-secondary mb-1">无序列表 ul</div>' +
            '<ul><li>苹果</li><li>香蕉</li><li>橙子</li></ul></div>' +
            '<div class="col-md-6">' +
            '<div class="small text-body-secondary mb-1">有序列表 ol</div>' +
            '<ol><li>打开官网</li><li>下载文件</li><li>引入页面</li></ol></div></div>',
          tip: '列表项里可以塞任何东西：链接、图片、按钮组，甚至是另一个列表。'
        },
        {
          id: '3.4.2',
          t: '无样式列表',
          d: '给 <code>&lt;ul&gt;</code> 加 <code>.list-unstyled</code>，去掉小圆点和缩进——做导航菜单、侧栏链接列表时"素颜"更合适。注意：这个类只对<b>直接子级</b>的 li 生效，嵌套的子列表不受影响。',
          demo:
            '<div class="row"><div class="col-md-6">' +
            '<div class="small text-body-secondary mb-1">默认（有小圆点）</div>' +
            '<ul><li>首页</li><li>产品</li><li>关于</li></ul></div>' +
            '<div class="col-md-6">' +
            '<div class="small text-body-secondary mb-1">list-unstyled（素颜）</div>' +
            '<ul class="list-unstyled mb-0"><li>首页</li><li>产品</li><li>关于</li></ul></div></div>',
          tip: '清完圆点后常配 <code>&lt;a class="link-*"&gt;</code> 逐条改成链接，就是一个最朴素的竖向菜单。'
        },
        {
          id: '3.4.3',
          t: '内联列表',
          d: '想让它"横着排"，给 ul 加 <code>.list-inline</code>，给每个 li 加 <code>.list-inline-item</code>。页脚导航、标签列表常用它。',
          demo:
            '<ul class="list-inline mb-0">' +
            '<li class="list-inline-item"><a href="#">关于我们</a></li>' +
            '<li class="list-inline-item text-body-tertiary">·</li>' +
            '<li class="list-inline-item"><a href="#">联系方式</a></li>' +
            '<li class="list-inline-item text-body-tertiary">·</li>' +
            '<li class="list-inline-item"><a href="#">隐私条款</a></li>' +
            '</ul>',
          tip: '两个类要配对使用，只加一个没效果——这是高频翻车点。'
        },
        {
          id: '3.4.4',
          t: '描述列表',
          d: '术语 + 解释的配对（如"名词：定义"）用 <code>&lt;dl&gt;&lt;dt&gt;&lt;dd&gt;</code>。配合栅格可以做成"左边术语、右边解释"的两栏表格感：dt 用 col-sm-3、dd 用 col-sm-9 放在一个 row 里。',
          demo:
            '<dl class="row mb-0">' +
            '<dt class="col-sm-3">前端框架</dt><dd class="col-sm-9">提前写好样式和组件的工具箱，Bootstrap 是其中最流行的一个。</dd>' +
            '<dt class="col-sm-3">栅格系统</dt><dd class="col-sm-9">把一行分为 12 份的布局系统，本章第 2 章讲过。</dd>' +
            '<dt class="col-sm-3">CDN</dt><dd class="col-sm-9 mb-0">内容分发网络，用网址直接引用别人服务器的文件。</dd>' +
            '</dl>',
          tip: 'dt 是 term（术语），dd 是 description（描述）；别忘了外面套 <code>.row</code>，否则栅格不生效。'
        }
      ]
    },
    {
      id: '3.5',
      t: '超链接',
      group: true,
      d: '链接的默认样式是"蓝色 + 下划线 + 悬停变深"，另有颜色和下划线的微调类。',
      children: [
        {
          id: '3.5.1',
          t: '链接颜色类',
          d: '' +
            '给链接加 <code>.link-primary / .link-success / .link-danger</code> 等类可以换颜色，鼠标悬停时还会自动加深一档。想让它"长得像普通文字"（但仍可点击），加 <code>.link-body-emphasis</code>；彻底去掉下划线用 <code>.text-decoration-none</code>。',
          demo:
            '<p class="mb-1"><a href="#">默认链接</a></p>' +
            '<p class="mb-1"><a href="#" class="link-primary">link-primary</a>　<a href="#" class="link-success">link-success</a>　<a href="#" class="link-danger">link-danger</a>　<a href="#" class="link-warning">link-warning</a></p>' +
            '<p class="mb-1"><a href="#" class="link-body-emphasis text-decoration-none">link-body-emphasis + 无下划线 → 像普通文字但可点击</a></p>' +
            '<p class="mb-0"><a href="#" class="link-secondary">link-secondary（次要链接）</a></p>',
          tip: '悬停变色是"可交互"的重要信号，别全局把下划线都去掉——用户会分不清哪些字能点。'
        },
        {
          id: '3.5.2',
          t: '下画线类',
          d: '下划线可以"精细化装修"：<code>.link-offset-1/2/3</code> 让下划线离文字远一点；<code>.link-underline-opacity-0/25/50/75/100</code> 调下划线透明度；<code>.link-underline-*</code> 单独给下划线换颜色。鼠标悬停时想变实线，可以加 <code>.link-offset-2-hover</code> 这类组合类。',
          demo:
            '<p class="mb-1"><a href="#" class="link-offset-2">link-offset-2：下划线往下移一点</a></p>' +
            '<p class="mb-1"><a href="#" class="link-offset-3 link-underline-opacity-50">offset-3 + 下划线 50% 透明</a></p>' +
            '<p class="mb-1"><a href="#" class="link-underline-opacity-0">下划线完全隐藏（悬停才出现）</a></p>' +
            '<p class="mb-1"><a href="#" class="link-primary link-underline-danger link-underline-opacity-75">蓝字 + 红色下划线</a></p>' +
            '<p class="mb-0"><a href="#" class="link-underline-opacity-0 link-underline-opacity-100-hover link-offset-2">平时无下划线，悬停出现并下移 offset-2</a></p>',
          hint: '用鼠标逐个悬停上面 5 个链接，观察细节差别',
          tip: '下划线的几个类可以组合使用，顺序无所谓。它们是 5.3 新增的"精细排版"能力，做高级感的正文链接就靠它。'
        }
      ]
    },
    {
      id: '3.6',
      t: '按钮',
      group: true,
      d: '<code>.btn</code> 是最常用的组件。基础类 + 颜色类组合使用，再加上尺寸、状态、描边等变体，能覆盖 90% 的点击需求。',
      children: [
        {
          id: '3.6.1',
          cmp: [
            {
              label: '同一个"提交按钮"的两种成本',
              native: '<!-- 原生：hover / 按下 / 禁用 / 焦点 全要手写 -->\n<button class="van-btn">提交</button>\n\n.van-btn { padding: 8px 18px; border: 1px solid #0b5ed7;\n  background: #0d6efd; color: #fff; border-radius: 6px;\n  cursor: pointer; transition: .15s; }\n.van-btn:hover { background: #0b5ed7; }\n.van-btn:active { transform: translateY(1px); }\n.van-btn:disabled { opacity: .65; cursor: not-allowed; }',
              bs: '<button class="btn btn-primary">提交</button>\n<button class="btn btn-outline-primary">提交</button>\n\n<!-- 8 种配色 × 3 档尺寸 × 悬停/按下/禁用/焦点状态，\n     全部现成，一个类名切换 -->',
              note: '类名分工：btn 管"底座"（尺寸、动画、状态骨架），btn-* 管"配色"。'
            }
          ],
          t: '预定义按钮',
          d: '两个类叠加：<code>.btn</code>（基础样式）+ 颜色类（<code>.btn-primary</code> 等）。8 个主题色各有一款实心按钮。深色底的场景优先选 primary（蓝）、success（绿）、danger（红）等语义色。',
          demo:
            '<div class="d-flex flex-wrap gap-2">' +
            '<button class="btn btn-primary">Primary</button>' +
            '<button class="btn btn-secondary">Secondary</button>' +
            '<button class="btn btn-success">Success</button>' +
            '<button class="btn btn-danger">Danger</button>' +
            '<button class="btn btn-warning">Warning</button>' +
            '<button class="btn btn-info">Info</button>' +
            '<button class="btn btn-light">Light</button>' +
            '<button class="btn btn-dark">Dark</button>' +
            '<button class="btn btn-link">Link</button>' +
            '</div>',
          tip: '按钮颜色也是"信号"：一屏里最多一个 primary 主按钮，其余用次要色，界面才不乱。'
        },
        {
          id: '3.6.2',
          t: '按钮标签',
          d: '同一个 btn 类可以套在 4 种标签上：<code>&lt;button&gt;</code>（推荐）、<code>&lt;a&gt;</code>（跳转链接）、<code>&lt;input type="button/submit"&gt;</code>（老式写法）。注意 <code>&lt;a&gt;</code> 做按钮时补上 <code>role="button"</code>，方便读屏软件理解。',
          demo:
            '<div class="d-flex flex-wrap gap-2 align-items-center">' +
            '<button type="button" class="btn btn-primary">button 标签</button>' +
            '<a class="btn btn-success" href="#" role="button">a 标签（跳转）</a>' +
            '<input type="button" class="btn btn-warning" value="input button">' +
            '<input type="submit" class="btn btn-danger" value="input submit">' +
            '</div>',
          tip: '选择口诀：<b>会跳转用 &lt;a&gt;，执行操作用 &lt;button&gt;</b>。这是无障碍和 SEO 都喜欢的写法。'
        },
        {
          id: '3.6.3',
          t: '按钮边框',
          d: '想"轻一点"就换成描边按钮：<code>.btn-outline-*</code>——平时只有边框和彩色文字，鼠标悬停时整块填色。<b>一屏只能选一种风格</b>（实心或描边），混着用会显得"图标打架"。',
          demo:
            '<div class="d-flex flex-wrap gap-2 mb-3">' +
            '<button class="btn btn-outline-primary">Outline Primary</button>' +
            '<button class="btn btn-outline-success">Outline Success</button>' +
            '<button class="btn btn-outline-danger">Outline Danger</button>' +
            '<button class="btn btn-outline-dark">Outline Dark</button>' +
            '</div>' +
            '<p class="small text-body-secondary mb-0">把鼠标悬停在上面任一按钮上：描边会"填色"变成实心按钮。</p>',
          tip: '典型搭配：主按钮用实心 btn-primary，次级按钮用 btn-outline-primary，层级一眼分明。'
        },
        {
          id: '3.6.4',
          t: '按钮尺寸',
          d: '大按钮 <code>.btn-lg</code>，小按钮 <code>.btn-sm</code>，不加类就是标准尺寸。还可以"只缩某一维"：如 <code>.btn-sm</code> + <code>.px-4</code> 得到一个"矮而宽"的按钮。',
          demo:
            '<div class="d-flex flex-wrap align-items-center gap-3">' +
            '<button class="btn btn-primary btn-lg">大按钮 btn-lg</button>' +
            '<button class="btn btn-primary">标准按钮</button>' +
            '<button class="btn btn-primary btn-sm">小按钮 btn-sm</button>' +
            '<button class="btn btn-primary btn-sm px-4">小号加宽 px-4</button>' +
            '</div>',
          tip: '手机端表单里的按钮别用 btn-sm——手指点起来会痛苦。小按钮适合表格行内操作。'
        },
        {
          id: '3.6.5',
          t: '块级按钮',
          d: '"撑满整行"的按钮不需要写 CSS：外层套一个 <code>.d-grid</code> 网格容器（再用 <code>.gap-2</code> 加间距），按钮就自动拉满宽度。或者直接给按钮加 <code>.w-100</code>（宽度 100%）。多个块级按钮叠放时，用 d-grid gap-2 最省事。',
          demo:
            '<div class="row g-4">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-2">d-grid gap-2：两个块级按钮</div>' +
            '<div class="d-grid gap-2"><button class="btn btn-primary">确认支付</button><button class="btn btn-outline-secondary">取消</button></div></div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-2">单个按钮：w-100</div>' +
            '<button class="btn btn-success w-100">登录</button></div>' +
            '</div>',
          tip: '注意：给 <code>&lt;a&gt;</code> 标签的按钮加 w-100 也可以，但如果外面还有 grid 容器，直接用 d-grid 更规范。'
        },
        {
          id: '3.6.6',
          t: '按钮状态',
          d: '三种状态要认得：① <code>.active</code>——"被按住 / 选中"的样子；② <code>disabled</code> 属性——真正的禁用（对 button 标签）；③ <code>.disabled</code> 类——给 <code>&lt;a&gt;</code> 用，配合 <code>aria-disabled="true"</code> 与 <code>tabindex="-1"</code> 防键盘误触。禁用按钮通常再配 <code>.opacity-50</code> 之类的淡化处理更直观。',
          demo:
            '<div class="d-flex flex-wrap gap-2 align-items-center">' +
            '<button class="btn btn-primary">正常状态</button>' +
            '<button class="btn btn-primary active" aria-pressed="true">active（看上去被按下）</button>' +
            '<button class="btn btn-primary" disabled>disabled 按钮</button>' +
            '<a href="#" class="btn btn-primary disabled" tabindex="-1" aria-disabled="true">a 标签用 .disabled</a>' +
            '</div>',
          tip: '好消息：5.3 里禁用按钮悬停时不会再"变色"了，还顺手移除了指针样式，看起来就是"点不动"。'
        }
      ]
    },
    {
      id: '3.7',
      t: '表格',
      group: true,
      d: '数据展示的主力组件。基础类只有一个 <code>.table</code>，加上修饰类就能变出条纹、悬停、彩色等花样。',
      children: [
        {
          id: '3.7.1',
          t: '表格样式',
          d: '给 <code>&lt;table&gt;</code> 加 <code>.table</code> 是起步价。再加修饰：<code>.table-striped</code> 隔行变色、<code>.table-hover</code> 悬停高亮、<code>.table-bordered</code> 全边框、<code>.table-borderless</code> 无边框、<code>.table-sm</code> 更紧凑。用 <code>.table-active</code> 高亮某一行。',
          demo:
            '<div class="small text-body-secondary mb-1">table-striped table-hover（悬停任意行试试）</div>' +
            '<table class="table table-striped table-hover mb-3"><thead><tr><th>#</th><th>课程</th><th>时长</th></tr></thead>' +
            '<tbody><tr><td>1</td><td>HTML 入门</td><td>2 小时</td></tr><tr><td>2</td><td>CSS 基础</td><td>3 小时</td></tr><tr><td>3</td><td>Bootstrap 实战</td><td>5 小时</td></tr></tbody></table>' +
            '<div class="small text-body-secondary mb-1">table-bordered + 一行 table-active 高亮</div>' +
            '<table class="table table-bordered mb-0"><tbody>' +
            '<tr><td>普通行</td><td>内容</td></tr>' +
            '<tr class="table-active"><td>table-active</td><td>这行被高亮了</td></tr>' +
            '<tr><td>普通行</td><td>内容</td></tr></tbody></table>',
          tip: '记得写完整的 <code>&lt;thead&gt;</code> / <code>&lt;tbody&gt;</code>：table-striped 的隔行变色是从 tbody 里算的，结构写对了样式才不"跑偏"。'
        },
        {
          id: '3.7.2',
          t: '响应式表格',
          d: '列特别多、手机放不下时，给表格套一层 <code>.table-responsive</code>：小屏幕上表格可以左右滑动查看，不会把整个页面撑破。还可以按断点启用，如 <code>.table-responsive-md</code> 表示"md 以下才出现横向滚动"。',
          demo:
            '<div class="table-responsive">' +
            '<table class="table table-sm align-middle mb-0" style="min-width:760px">' +
            '<thead><tr><th>订单号</th><th>客户</th><th>商品</th><th>数量</th><th>金额</th><th>状态</th><th>下单时间</th></tr></thead>' +
            '<tbody><tr><td>20261012001</td><td>张三</td><td>机械键盘</td><td>1</td><td>￥399</td><td><span class="badge text-bg-success">已发货</span></td><td>2026-10-12 09:20</td></tr>' +
            '<tr><td>20261012002</td><td>李四</td><td>无线鼠标</td><td>2</td><td>￥178</td><td><span class="badge text-bg-warning">待付款</span></td><td>2026-10-12 10:05</td></tr></tbody></table>' +
            '</div>',
          hint: '把预览区拉窄——表格出现横向滚动条，页面其余部分不受影响',
          tip: '记住"套壳"位置：table-responsive 包在 table 外面，不是加在 table 上。'
        },
        {
          id: '3.7.3',
          t: '表格主题色',
          d: '彩色表格用 <code>.table-primary / .table-danger</code> 等类，加在 table 上整表着色，也可以只给某一行、某一格加。整表变深色用 <code>.table-dark</code>；配 <code>.table-striped</code> 和 <code>.table-group-divider</code>（表格组之间加粗分隔线）做专业感更强的报表。',
          demo:
            '<table class="table mb-3"><thead><tr><th>状态</th><th>说明</th></tr></thead><tbody>' +
            '<tr class="table-primary"><td>table-primary</td><td>当前行（蓝）</td></tr>' +
            '<tr class="table-success"><td>table-success</td><td>成功（绿）</td></tr>' +
            '<tr class="table-danger"><td>table-danger</td><td>危险（红）</td></tr>' +
            '<tr class="table-warning"><td>table-warning</td><td>警告（黄）</td></tr>' +
            '</tbody></table>' +
            '<table class="table table-dark table-striped mb-0"><thead><tr><th>深色表格</th><th>数值</th></tr></thead>' +
            '<tbody><tr><td>第一季度</td><td>￥12,000</td></tr><tr><td>第二季度</td><td>￥18,500</td></tr></tbody></table>',
          tip: '5.3 的小变化：彩色行现在是"柔和底色 + 深色文字"的样式，比旧版本更耐看；给表头单独加彩色没问题，但别全表都上色。'
        },
        {
          id: '3.7.4',
          t: '其他类',
          d: '两个实用加分项：① <b>垂直对齐</b>——用 <code>.align-middle</code> 等类让单元格内容垂直居中；② <b>标题位置</b>——默认表格标题在底部，加 <code>.caption-top</code> 挪到顶部。加上 <code>.table-group-divider</code> 可以在表头和数据区之间画一条加粗分隔线。',
          demo:
            '<table class="table align-middle mb-0"><caption class="caption-top small text-body-secondary">caption-top：标题被挪到了表格上方</caption>' +
            '<thead class="table-group-divider"><tr><th style="width:34%">姓名</th><th>说明</th></tr></thead>' +
            '<tbody>' +
            '<tr><td class="align-middle">垂直居中</td><td>这一行内容比较长，用来把行"撑高"，方便观察左侧单元格是不是垂直居中的效果。</td></tr>' +
            '<tr><td class="align-top">顶部对齐 align-top</td><td>这一行内容也比较长，用来把行"撑高"，观察左侧单元格贴在了顶部。</td></tr>' +
            '</tbody></table>',
          tip: 'td 默认是"顶部对齐"；中文表格里几乎都要加 <code>align-middle</code>，不然数字和文字会"高低不齐"。'
        },
        {
          id: '3.7.5',
          t: '个性化表格',
          d: '官方样式改不动时，可以"合体技"自定义：用 borderless 去边框、用 <code>.bg-body-tertiary</code> 做表头底色、用 CSS 变量（如 <code>--bs-table-bg</code>）换主色，最后放进一个圆角卡片里，就是一张"现代感报表"。',
          demo:
            '<div class="p-3 bg-white border rounded-3" style="max-width:460px">' +
            '<div class="d-flex justify-content-between align-items-center mb-2">' +
            '<span class="fw-bold small">本月支出</span><span class="badge text-bg-light border">10 月</span></div>' +
            '<table class="table table-borderless align-middle mb-0">' +
            '<thead><tr class="small text-body-secondary"><th>项目</th><th class="text-end">金额</th><th class="text-end">占比</th></tr></thead>' +
            '<tbody>' +
            '<tr><td>餐饮</td><td class="text-end">￥1,280</td><td class="text-end text-danger">42%</td></tr>' +
            '<tr><td>交通</td><td class="text-end">￥460</td><td class="text-end text-body-secondary">15%</td></tr>' +
            '<tr><td>学习</td><td class="text-end">￥980</td><td class="text-end text-success">32%</td></tr>' +
            '</tbody></table></div>',
          tip: '思路解析：这其实就是"table-borderless + 数字右对齐 + 小字号表头 + 卡片外壳"的组合。学会了组合，就能自己发明样式。'
        }
      ]
    },
    {
      id: '3.8',
      t: '图像',
      group: true,
      d: '图片在响应式页面里最容易"惹祸"，Bootstrap 提供了几个救命类。',
      children: [
        {
          id: '3.8.1',
          t: '响应式图像',
          d: '大图在小屏幕溢出、撑破页面，是新手最容易撞的墙。给 <code>&lt;img&gt;</code> 加 <code>.img-fluid</code> 即可：它的原理是 <code>max-width:100%; height:auto</code>——图片永远不会超过容器宽度，也不会被压变形。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">没加 img-fluid：超出容器被裁掉</div>' +
            '<div style="width:100%;overflow:hidden;border-radius:8px;border:1px solid #e5e9f2">' +
            '<img src="' + BS_PH.img1 + '" width="900" alt="示意大图（会被裁切）" style="display:block">' +
            '</div></div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-1">加了 img-fluid：自动缩到 100% 宽</div>' +
            '<img src="' + BS_PH.img1 + '" class="img-fluid rounded" alt="示意大图（自适应）">' +
            '</div></div>',
          code:
            '<!-- 没加：图片原始宽度 900px，容器窄了就会被裁 / 撑破 -->\n' +
            '<img src="images/photo.jpg" width="900" alt="示意图">\n' +
            '\n' +
            '<!-- 加了：宽度自动收缩到容器大小 -->\n' +
            '<img src="images/photo.jpg" class="img-fluid" alt="示意图">',
          tip: '<b>铁律：内容图片一律先加 img-fluid。</b>它只"缩"不"放"，小图不会被拉大变形，放心用。'
        },
        {
          id: '3.8.2',
          t: '图像边框',
          d: '"缩略图"效果一个类搞定：<code>.img-thumbnail</code>（细边框 + 内边距 + 圆角）。想要其他形状：<code>.rounded</code>（小圆角）、<code>.rounded-3</code>（大圆角）、<code>.rounded-circle</code>（正圆，适合头像）、<code>.rounded-pill</code>（胶囊形）。',
          demo:
            '<div class="d-flex flex-wrap gap-4 align-items-end">' +
            '<div class="text-center"><img src="' + BS_PH.img3 + '" class="img-thumbnail" width="110" alt="缩略图"><div class="small text-body-secondary mt-1">img-thumbnail</div></div>' +
            '<div class="text-center"><img src="' + BS_PH.img3 + '" class="rounded" width="110" alt="圆角"><div class="small text-body-secondary mt-1">rounded</div></div>' +
            '<div class="text-center"><img src="' + BS_PH.img3 + '" class="rounded-3" width="110" alt="大圆角"><div class="small text-body-secondary mt-1">rounded-3</div></div>' +
            '<div class="text-center"><img src="' + BS_PH.img3 + '" class="rounded-circle" width="110" height="110" alt="圆形头像" style="object-fit:cover"><div class="small text-body-secondary mt-1">rounded-circle</div></div>' +
            '<div class="text-center"><img src="' + BS_PH.img3 + '" class="rounded-pill" width="140" height="90" alt="胶囊" style="object-fit:cover"><div class="small text-body-secondary mt-1">rounded-pill</div></div>' +
            '</div>',
          code:
            '<img src="images/thumb.jpg" class="img-thumbnail" alt="缩略图">\n' +
            '<img src="images/avatar.jpg" class="rounded-circle" width="110" height="110" alt="圆形头像">\n' +
            '<img src="images/pic.jpg" class="rounded-3" alt="大圆角">',
          tip: '<code>rounded-circle</code> 要做成"正圆"，图片本身得是正方形（长宽相等），再用 <code>width</code>/<code>height</code> 限制尺寸；否则出来是椭圆。'
        },
        {
          id: '3.8.3',
          t: '图像对齐',
          d: '三种对齐手段：① <b>左右环绕</b>——图片用 <code>.float-start</code>（左）/ <code>.float-end</code>（右），文字会自动围着图片排；② <b>水平居中</b>——图片是行内元素，用 <code>.mx-auto .d-block</code> 组合可以居中；③ 简单粗暴——给父容器加 <code>.text-center</code>。',
          demo:
            '<div class="mb-4">' +
            '<img src="' + BS_PH.img3 + '" class="float-start rounded me-3" width="96" alt="左浮动">' +
            '<p class="small mb-0">图片加了 float-start + me-3，后面的这段文字就自己"绕着"图片排了。这是报纸杂志里最常见的图文混排方式。文字长一点更能看出环绕效果，所以这里多写几句凑数，感受一下环绕排版的样子。</p>' +
            '<div style="clear:both"></div></div>' +
            '<div><div class="small text-body-secondary mb-1">mx-auto d-block（水平居中）</div>' +
            '<img src="' + BS_PH.img3 + '" class="mx-auto d-block rounded" width="120" alt="居中"><div style="clear:both"></div></div>',
          code:
            '<!-- 左浮动 + 右间距，文字自动环绕 -->\n' +
            '<img src="images/pic.jpg" class="float-start rounded me-3" width="96" alt="图">\n' +
            '<p>后面的文字会绕着图片排……</p>\n' +
            '\n' +
            '<!-- 水平居中 -->\n' +
            '<img src="images/pic.jpg" class="mx-auto d-block" alt="居中">',
          tip: 'float 之后记得"清理浮动"（加一个 div style="clear:both" 或给父级加 .clearfix），否则后面的内容会"贴"上来。'
        },
        {
          id: '3.8.4',
          t: 'picture 元素',
          d: '想让"电脑用大图、手机用小图"（省流量、提速），用原生 <code>&lt;picture&gt;</code> 标签：里面放多个 <code>&lt;source media="..."&gt;</code>，浏览器按媒体条件自己选，最后留一个 <code>&lt;img&gt;</code> 兜底（它也是给老浏览器看的）。',
          demo:
            '<picture>' +
            '<source media="(min-width: 768px)" srcset="' + BS_PH.img1 + '">' +
            '<img src="' + BS_PH.img2 + '" class="img-fluid rounded" alt="响应式图片">' +
            '</picture>' +
            '<p class="small text-body-secondary mt-2 mb-0">拉宽 / 拉窄预览区：两张图会切换（宽屏蓝色图 = 大图，窄屏绿色图 = 小图）。</p>',
          code:
            '<picture>\n' +
            '  <!-- 屏幕 ≥768px 时用大图 -->\n' +
            '  <source media="(min-width: 768px)" srcset="images/hero-large.jpg">\n' +
            '  <!-- 兜底：小屏和所有浏览器 -->\n' +
            '  <img src="images/hero-small.jpg" class="img-fluid" alt="横幅">\n' +
            '</picture>',
          tip: '注意：<code>&lt;picture&gt;</code> 只负责"选哪张图"，样式类还是要写在里面的 <code>&lt;img&gt;</code> 上。'
        }
      ]
    },
    {
      id: '3.9',
      t: '图文框',
      d: '给图片配文字说明（图注），用 <code>&lt;figure&gt;</code> 包起来：图片加 <code>.figure-img</code>（自动加一点下边距），说明文字加 <code>.figure-caption</code>（灰色小字）。再配 <code>.text-end</code> 可以让图注靠右，或者干脆整个图文框右对齐。',
      demo:
        '<figure class="figure mb-4">' +
        '<img src="' + BS_PH.img1 + '" class="figure-img img-fluid rounded" alt="示例图">' +
        '<figcaption class="figure-caption">图 1：一张带说明的图。figure-img + figure-caption 是标准搭配。</figcaption>' +
        '</figure>' +
        '<figure class="figure text-end mx-0 d-block mb-0" style="max-width:280px;margin-left:auto">' +
        '<img src="' + BS_PH.img3 + '" class="figure-img img-fluid rounded-3" alt="右对齐图">' +
        '<figcaption class="figure-caption">图 2：整块图文框靠右排列。</figcaption>' +
        '</figure>',
      code:
        '<figure class="figure">\n' +
        '  <img src="images/demo.jpg" class="figure-img img-fluid rounded" alt="示例图">\n' +
        '  <figcaption class="figure-caption">图 1：图片下方的小字说明。</figcaption>\n' +
        '</figure>',
      tip: '图注文字用 <code>figure-caption</code> 而不是自己写 text-muted 小字——这样样式统一，以后要批量调整图注就改一处。'
    },
    {
      id: '3.10',
      t: '案例：少儿编程网站首页',
      d: '把本章零件拼成一个小型首页：彩色横幅、三张"课程卡片"（图片 + 标题 + 按钮）、带图注的实拍区、页脚，全部用"图像 + 按钮 + 文本"这些刚学的零件完成。',
      demo:
        '<div class="border rounded-3 overflow-hidden bg-white">' +
        '<div class="p-4 text-white" style="background:linear-gradient(120deg,#16a34a,#37c47b)">' +
        '<div class="row align-items-center"><div class="col-8">' +
        '<h5 class="fw-bold mb-1">编程，从 8 岁开始</h5><p class="small mb-0" style="opacity:.85">图形化编程 · 机器人 · 信息学</p></div>' +
        '<div class="col-4 text-end"><i class="bi bi-robot" style="font-size:2.6rem;opacity:.6"></i></div></div></div>' +
        '<div class="p-3"><div class="row g-3">' +
        '<div class="col-md-4"><div class="card h-100"><img src="' + BS_PH.img3 + '" class="card-img-top" alt="课程图片"><div class="card-body p-3"><h6 class="card-title mb-1">Scratch 图形化</h6><p class="card-text small text-body-secondary">拖拖拽拽，做出第一个小游戏。</p><a href="#" class="btn btn-outline-success btn-sm">了解详情</a></div></div></div>' +
        '<div class="col-md-4"><div class="card h-100"><img src="' + BS_PH.img2 + '" class="card-img-top" alt="课程图片"><div class="card-body p-3"><h6 class="card-title mb-1">Python 起步</h6><p class="card-text small text-body-secondary">从"Hello World"到小工具。</p><a href="#" class="btn btn-outline-success btn-sm">了解详情</a></div></div></div>' +
        '<div class="col-md-4"><div class="card h-100"><img src="' + BS_PH.img1 + '" class="card-img-top" alt="课程图片"><div class="card-body p-3"><h6 class="card-title mb-1">机器人搭建</h6><p class="card-text small text-body-secondary">动手拼装，让代码动起来。</p><a href="#" class="btn btn-outline-success btn-sm">了解详情</a></div></div></div>' +
        '</div>' +
        '<figure class="figure mb-0 mt-3 text-center">' +
        '<img src="' + BS_PH.wide + '" class="figure-img img-fluid rounded" alt="课堂实拍">' +
        '<figcaption class="figure-caption">图：周末班课堂实拍（figure 图文框）</figcaption>' +
        '</figure></div>' +
        '<div class="text-center small text-body-secondary bg-body-tertiary py-2">© 2026 小小程序员培训（示例）</div>' +
        '</div>',
      code:
        '<!-- 结构骨架（图片路径换成你自己的） -->\n' +
        '<div class="p-4 text-white" style="background:linear-gradient(120deg,#16a34a,#37c47b)">\n' +
        '  <h5 class="fw-bold mb-1">编程，从 8 岁开始</h5>\n' +
        '  <p class="small mb-0">图形化编程 · 机器人 · 信息学</p>\n' +
        '</div>\n' +
        '\n' +
        '<div class="row g-3 p-3">\n' +
        '  <div class="col-md-4">\n' +
        '    <div class="card h-100">\n' +
        '      <img src="images/scratch.jpg" class="card-img-top" alt="课程图片">\n' +
        '      <div class="card-body p-3">\n' +
        '        <h6 class="card-title mb-1">Scratch 图形化</h6>\n' +
        '        <p class="card-text small text-body-secondary">拖拖拽拽，做出第一个小游戏。</p>\n' +
        '        <a href="#" class="btn btn-outline-success btn-sm">了解详情</a>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '  <!-- 另外两张卡片同上，换成不同图片和文字 -->\n' +
        '</div>\n' +
        '\n' +
        '<figure class="figure text-center">\n' +
        '  <img src="images/class.jpg" class="figure-img img-fluid rounded" alt="课堂实拍">\n' +
        '  <figcaption class="figure-caption">图：周末班课堂实拍</figcaption>\n' +
        '</figure>',
      hint: '本章零件的"全家福"：渐变横幅 + 卡片 + 按钮 + 图文框'
    }
  ],
  summary: [
    '排版：h1～h6 与 display 大标题、lead 引言、hr/vr 分隔线、引用与代码标签，样式官方已调好。',
    '颜色三件套：text-*（文字）、bg-*（背景，可叠 bg-opacity-*）、text-bg-*（文字背景自动配色，最省心）。',
    '文本工具类：对齐（含响应式 text-md-end）、大小写、fw 字重、fs 字号、lh 行高、truncate 省略号等。',
    '列表：list-unstyled 去圆点、list-inline 横排；描述列表 dl 用 row + col 做两栏。',
    '按钮：btn + 颜色类为核心，outline 描边、lg/sm 尺寸、d-grid 块级、active/disabled 状态。',
    '表格：.table 打底 + striped/hover/bordered/sm 修饰；多列表格套 .table-responsive；彩色用 table-*。',
    '图像：img-fluid（必加）、img-thumbnail、rounded-circle、float 环绕、picture 按屏选图；图注用 figure 三件套。'
  ],
  practice: {
    t: '实训项目：制作“动物世界”百度词条网页',
    d: '仿照百科词条的排版：左侧主介绍（图文混排 + 引用）、右侧信息卡（表格 + 列表）、正文中有代码/高亮等文本标签。',
    steps: [
      '顶部放 h1 标题 + .lead 一句话简介。',
      '正文第一段用 float-start 放一张动物图片，让文字环绕。',
      '信息卡用 table table-sm + table-bordered，展示"纲/目/科/分布区域"。',
      '文中用到 mark 划重点、abbr 做术语提示、blockquote 引用一句百科名言。',
      '底部用 figure 加一张带图注的图片，收尾。'
    ],
    demo:
      '<div class="border rounded-3 p-4 bg-white">' +
      '<h4 class="fw-bold mb-1">大熊猫</h4>' +
      '<p class="text-body-secondary small mb-3">大熊猫（哺乳纲食肉目熊科），中国的"国宝"级珍稀动物。</p>' +
      '<img src="' + BS_PH.img2 + '" class="float-start rounded me-3 mb-2" width="150" alt="大熊猫图片">' +
      '<p class="small">大熊猫主要栖息于<b>四川、陕西和甘肃</b>的山区，以<mark>竹子为主食</mark>。它每天要吃 12～38 公斤的竹子，为了"吃饭"这件事，一天中有 <mark>一半以上时间</mark>都在进食。</p>' +
      '<p class="small">大熊猫善于爬树，也爱嬉戏。爬树的行为一般是<del>为了逃避危险</del><ins>临近求婚期或彼此相遇时回避的一种方式</ins>。</p>' +
      '<div style="clear:both"></div>' +
      '<table class="table table-sm table-bordered align-middle" style="max-width:420px"><tbody>' +
      '<tr><th style="width:36%">保护级别</th><td>国家一级保护动物</td></tr>' +
      '<tr><th>分布区域</th><td>四川、陕西、甘肃</td></tr>' +
      '<tr><th>食物</th><td>竹子（占 99%）</td></tr>' +
      '<tr><th>体重</th><td>60～110 千克</td></tr></tbody></table>' +
      '<blockquote class="blockquote mt-3"><p class="small mb-0">"大熊猫是中国特有的珍稀动物，被誉为活化石。"</p>' +
      '<footer class="blockquote-footer mb-0 small">摘自百科词条</footer></blockquote>' +
      '<figure class="figure mb-0"><img src="' + BS_PH.wide + '" class="figure-img img-fluid rounded" alt="栖息地">' +
      '<figcaption class="figure-caption">图：大熊猫栖息地实景（图注示例）</figcaption></figure>' +
      '</div>',
    hint: '这一屏就是"实训参考答案"，对照它自己复刻一遍'
  }
});
