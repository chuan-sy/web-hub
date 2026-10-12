/* ============================================================
   第 7 章 JavaScript 插件（上）7.1 - 7.9
   ============================================================ */
window.BS_DATA.push({
  id: 'ch7',
  num: '第 7 章',
  title: 'JavaScript 插件',
  accent: '#0ea5e9',
  accentSoft: '#e6f7fe',
  icon: 'bi-magic',
  intro: '前六章让页面"好看"，这一章让页面"会动"：点击弹出模态框、鼠标悬停出提示、内容折叠展开、图片轮播。好消息是——大部分效果不用写一行 JS，官方已经把常用的都做好了，你只需要按"数据属性"的配方调用它。',
  goals: [
    '理解"数据属性调用"和"JavaScript 调用"两种方式',
    '掌握模态框、提示框、弹出框三种"浮层"组件',
    '会用警告框、轻量弹框、折叠、手风琴做内容交互',
    '会做轮播、滚动监听、选项卡这三大"页面级"插件',
    '知道每个插件的 options（选项）与 events（事件）怎么查怎么用'
  ],
  docs: [
    { t: '官方 JS 总览', u: 'https://getbootstrap.com/docs/5.3/getting-started/javascript/' },
    { t: '模态框 Modal', u: 'https://getbootstrap.com/docs/5.3/components/modal/' },
    { t: '轮播 Carousel', u: 'https://getbootstrap.com/docs/5.3/components/carousel/' },
    { t: '折叠 Collapse', u: 'https://getbootstrap.com/docs/5.3/components/collapse/' }
  ],
  sections: [
    {
      id: '7.1',
      t: '插件库说明',
      d: 'Bootstrap 的 JS 有<b>两个版本</b>：<code>bootstrap.js</code>（各插件分离，用到 Popper 的组件要自己另引）和 <code>bootstrap.bundle.js</code>（<b>把 Popper 打包进去的完整版，新手选它</b>）。调用方式也有<b>两种</b>：① <b>数据属性调用</b>——在 HTML 上写 data-bs-* 属性，官方脚本自动接管（推荐、零 JS）；② <b>JavaScript 调用</b>——new bootstrap.Modal(el) 这类写法，用于动态控制和高级选项。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="p-3 border rounded-3 bg-white h-100">' +
        '<h6 class="fw-bold small mb-2"><i class="bi bi-code-slash text-primary me-1"></i>方式一：数据属性（推荐）</h6>' +
        '<div class="border rounded p-2 mb-2" style="background:#f8f9fc"><code class="small">data-bs-toggle="modal"</code><br><code class="small">data-bs-target="#myModal"</code></div>' +
        '<button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modal71">点我打开模态框</button>' +
        '<p class="small text-body-secondary mt-2 mb-0">一个 JS 字母都不用写</p>' +
        '</div></div>' +
        '<div class="col-md-6"><div class="p-3 border rounded-3 bg-white h-100">' +
        '<h6 class="fw-bold small mb-2"><i class="bi bi-braces text-success me-1"></i>方式二：JavaScript 调用</h6>' +
        '<div class="border rounded p-2 mb-2" style="background:#f8f9fc"><code class="small">const m = new bootstrap.Modal("#myModal");</code><br><code class="small">m.show();</code></div>' +
        '<button class="btn btn-sm btn-success" id="btn71Js">用 JS 打开同一个模态框</button>' +
        '<p class="small text-body-secondary mt-2 mb-0">适合需要"动态逻辑"的场景</p>' +
        '</div></div>' +
        '</div>' +
        '<div class="modal fade" id="modal71" tabindex="-1" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
        '<div class="modal-header"><h6 class="modal-title">你好，我是模态框</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
        '<div class="modal-body small">我是<strong>同一个</strong>模态框：左边按钮用数据属性打开我，右边按钮用 JavaScript 打开我。殊途同归。</div>' +
        '<div class="modal-footer"><button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">知道了</button></div>' +
        '</div></div></div>',
      js:
        "document.getElementById('btn71Js').addEventListener('click', function () {\n" +
        "  var m = bootstrap.Modal.getOrCreateInstance('#modal71');\n" +
        "  m.show();\n" +
        "});",
      hint: '两个按钮打开的是同一个模态框，注意页面外层的工具条进度条也会被"暗化"',
      tip: '<b>版本要点：</b>Bootstrap 5 起不再依赖 jQuery，不再需要写 $(...) 那一套；如果你在旧教程里看到 jQuery 写法，那讲的是 v4 及以前，作废即可。'
    },
    {
      id: '7.2',
      t: '模态框',
      group: true,
      d: '模态框（Modal）＝"浮在页面上方的对话框"，登录、确认、表单弹窗的标配。结构有五层，一层都不能少。',
      children: [
        {
          id: '7.2.1',
          cmp: [
            {
              label: '一个弹窗的两条路',
              native: '// 原生 <dialog>：窗口有了，"体验"靠自己补\nvar dlg = document.getElementById("vanDialog");\nbtn.addEventListener("click", function () { dlg.showModal(); });\n// 还得补：居中样式、背景遮罩、开关动画、\n// 滚动锁定、焦点管理、ESC 行为……',
              bs: '<button class="btn btn-primary" data-bs-toggle="modal"\n        data-bs-target="#myModal">打开</button>\n<div class="modal fade" id="myModal" tabindex="-1">\n  <div class="modal-dialog modal-dialog-centered">…</div>\n</div>\n\n// 打开后要做点什么？监听事件即可：\nel.addEventListener("shown.bs.modal", function () { … });',
              note: '五层结构各司其职：modal（遮罩）→ dialog（定位）→ content（白盒）→ header / body / footer（内容）。'
            }
          ],
          t: '模态框的基本用法',
          d: '五层结构（从外到内）：<code>.modal</code> → <code>.modal-dialog</code> → <code>.modal-content</code> → <code>.modal-header</code>（标题 + 关闭按钮）/ <code>.modal-body</code>（内容）/ <code>.modal-footer</code>（按钮区）。加 <code>.fade</code> 有淡入动画；<code>.modal-dialog-centered</code> 让弹窗垂直居中。',
          demo:
            '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal721">打开模态框</button>' +
            '<div class="modal fade" id="modal721" tabindex="-1" aria-labelledby="modal721Label" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
            '<div class="modal-header"><h6 class="modal-title" id="modal721Label">确认提交作业？</h6>' +
            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
            '<div class="modal-body small">提交后将进入批改队列，无法修改。三层结构分别是 modal-header（标题栏）、modal-body（内容区）、modal-footer（按钮区）。</div>' +
            '<div class="modal-footer"><button type="button" class="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">再想想</button>' +
            '<button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">确认提交</button></div>' +
            '</div></div></div>',
          tip: '两个 <code>data-bs-dismiss="modal"</code> 的按钮（右上角 × 和底部取消键）不需要写 JS：数据 API 自动帮你关闭。'
        },
        {
          id: '7.2.2',
          t: '模态框尺寸',
          d: '给 <code>.modal-dialog</code> 加尺寸类：<code>.modal-sm</code>（小）、<code>.modal-lg</code>（大）、<code>.modal-xl</code>（超大）；不加是默认中等。<code>.modal-dialog-scrollable</code> 让长内容"在弹窗内部滚动"（标题和按钮始终可见）；<code>.modal-fullscreen</code> 全屏。',
          demo:
            '<div class="d-flex flex-wrap gap-2">' +
            '<button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#m722a">小尺寸 sm</button>' +
            '<button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#m722b">大尺寸 lg + 内部滚动</button>' +
            '<button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#m722c">全屏 fullscreen</button>' +
            '</div>' +
            '<div class="modal fade" id="m722a" tabindex="-1"><div class="modal-dialog modal-sm modal-dialog-centered"><div class="modal-content">' +
            '<div class="modal-body small text-center p-4"><i class="bi bi-emoji-smile fs-2 text-primary d-block mb-2"></i>小尺寸弹窗，适合一句话确认。</div>' +
            '<div class="modal-footer p-2 justify-content-center"><button class="btn btn-sm btn-secondary" data-bs-dismiss="modal">关闭</button></div></div></div></div>' +
            '<div class="modal fade" id="m722b" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered"><div class="modal-content">' +
            '<div class="modal-header"><h6 class="modal-title">大弹窗 + 内部滚动</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
            '<div class="modal-body small">' +
            '<p>试着在弹窗内滚动：内容区会滚动，但标题栏和底部按钮一直钉着不动。</p>' +
            '<p>滚动的秘密是 modal-dialog-scrollable。下面是一些"凑高度"的占位段落。</p>' +
            '<p>段落 1：Bootstrap 的模态框支持多种尺寸组合。</p><p>段落 2：modal-sm / modal-lg / modal-xl 三档尺寸。</p>' +
            '<p>段落 3：modal-dialog-centered 让它垂直居中。</p><p>段落 4：modal-dialog-scrollable 让长内容不撑爆屏幕。</p>' +
            '<p>段落 5：modal-fullscreen 则让弹窗铺满整个屏幕。</p><p>段落 6：快到结尾了。</p><p>段落 7：最后一段，你可以滚到底看看。</p>' +
            '</div>' +
            '<div class="modal-footer"><button class="btn btn-sm btn-primary" data-bs-dismiss="modal">好，我懂了</button></div></div></div></div>' +
            '<div class="modal fade" id="m722c" tabindex="-1"><div class="modal-dialog modal-fullscreen"><div class="modal-content">' +
            '<div class="modal-header"><h6 class="modal-title">全屏模态框</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
            '<div class="modal-body small text-center d-flex align-items-center justify-content-center">' +
            '<div><i class="bi bi-fullscreen fs-1 text-primary d-block mb-3"></i>铺满整个屏幕，手机上做"二级页面"常用它。<br>按右上角 × 或 ESC 键退出。</div></div></div></div></div>',
          tip: '尺寸类写在 <code>.modal-dialog</code> 上（不是 .modal 上）；<code>modal-fullscreen-md-down</code> 还能做"手机全屏、电脑窗口"的精细控制。'
        },
        {
          id: '7.2.3',
          t: '模态框的其他样式',
          d: '三个细节属性：<code>data-bs-backdrop="static"</code>（点击遮罩不关闭，常用于"必须做出选择"的弹窗）、<code>data-bs-keyboard="false"</code>（禁用 ESC 关闭）、<code>.modal-dialog-centered</code>（垂直居中而不是贴顶）。给它加背景色类还能换风格。',
          demo:
            '<div class="d-flex flex-wrap gap-2">' +
            '<button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#m723">必须选择的弹窗（点遮罩关不掉）</button>' +
            '<button class="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#m723b">深色主题弹窗</button>' +
            '</div>' +
            '<div class="modal fade" id="m723" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">' +
            '<div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
            '<div class="modal-header"><h6 class="modal-title">请先升级套餐</h6></div>' +
            '<div class="modal-body small">我设置了 <code>data-bs-backdrop="static"</code> 和 <code>data-bs-keyboard="false"</code>：点外面、按 ESC 都关不掉，必须点下面的按钮（这叫"强制选择"）。</div>' +
            '<div class="modal-footer"><button class="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">暂不升级</button>' +
            '<button class="btn btn-sm btn-primary" data-bs-dismiss="modal">去升级</button></div></div></div></div>' +
            '<div class="modal fade" id="m723b" tabindex="-1"><div class="modal-dialog modal-dialog-centered" data-bs-theme="dark"><div class="modal-content" style="background:#1f2430">' +
            '<div class="modal-header border-secondary"><h6 class="modal-title">深色弹窗</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
            '<div class="modal-body small">给 modal-dialog 加 <code>data-bs-theme="dark"</code>，整个弹窗自动切到深色配色。</div>' +
            '<div class="modal-footer border-secondary"><button class="btn btn-sm btn-light" data-bs-dismiss="modal">关闭</button></div></div></div></div>',
          tip: '注意：static 只是"防手滑"，真正的强约束还得靠后端校验——别把业务规则托付给前端。'
        },
        {
          id: '7.2.4',
          t: '模态框的选项、方法与事件',
          d: '三种控制力：<b>选项</b>（初始化时配置，如 backdrop/keyboard/focus）→ 用 JS 传对象；<b>方法</b> <code>show() / hide() / toggle() / dispose()</code> → 程序控制开关；<b>事件</b> <code>show.bs.modal / shown.bs.modal / hide.bs.modal / hidden.bs.modal</code> → 在打开/关闭的前后"插一脚"，做埋点统计、数据加载。',
          demo:
            '<div class="d-flex flex-wrap gap-2 align-items-center mb-2">' +
            '<button class="btn btn-sm btn-primary" id="m724Show">.show() 打开</button>' +
            '<button class="btn btn-sm btn-outline-danger" id="m724Hide">.hide() 关闭</button>' +
            '<button class="btn btn-sm btn-outline-secondary" id="m724Toggle">.toggle() 切换</button>' +
            '</div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2" id="m724Log" style="min-height:52px;background:#fff">事件日志：等待操作…</div>' +
            '<div class="modal fade" id="m724" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
            '<div class="modal-header"><h6 class="modal-title">观察下面的事件日志</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
            '<div class="modal-body small">打开和关闭我的过程中，会依次触发 show → shown → hide → hidden 四个事件，下面那段日志实时记录。</div>' +
            '</div></div></div>',
          js:
            "var m724 = bootstrap.Modal.getOrCreateInstance('#m724');\n" +
            "var log = stage.querySelector('#m724Log');\n" +
            "function w(msg) { log.textContent = msg + '\\n' + log.textContent.split('\\n').slice(0, 3).join('\\n'); }\n" +
            "document.getElementById('m724Show').addEventListener('click', function () { m724.show(); });\n" +
            "document.getElementById('m724Hide').addEventListener('click', function () { m724.hide(); });\n" +
            "document.getElementById('m724Toggle').addEventListener('click', function () { m724.toggle(); });\n" +
            "['show', 'shown', 'hide', 'hidden'].forEach(function (name) {\n" +
            "  document.getElementById('m724').addEventListener(name + '.bs.modal', function () {\n" +
            "    w('触发事件：' + name + '.bs.modal');\n" +
            "  });\n" +
            "});\n" +
            "w('事件监听已就绪，点按钮试试');",
          tip: '事件名格式统一为 <code>动作.bs.组件名</code>。记忆法：show/hide 是"将要发生"，shown/hidden 是"已经完成"。'
        }
      ]
    },
    {
      id: '7.3',
      t: '工具提示框',
      group: true,
      d: '鼠标悬停时冒出的"小气泡"（Tooltip）。注意：它<b>必须用 JS 初始化</b>——本页已经帮你初始化了所有带 data-bs-toggle="tooltip" 的元素。',
      children: [
        {
          id: '7.3.1',
          t: '工具提示框的基本用法',
          d: '写法：元素加 <code>data-bs-toggle="tooltip"</code> 和 <code>data-bs-title="提示文字"</code>，再用 JS 初始化（本页示例已代劳）。位置用 <code>data-bs-placement</code> 控制：top / bottom / left / right。',
          demo:
            '<div class="d-flex flex-wrap gap-3">' +
            '<button class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="我在上面 top">上方提示</button>' +
            '<button class="btn btn-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="我在右边 right">右侧提示</button>' +
            '<button class="btn btn-warning btn-sm" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="我在下面 bottom">下方提示</button>' +
            '<button class="btn btn-danger btn-sm" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="我在左边 left">左侧提示</button>' +
            '<span class="text-body-secondary small" data-bs-toggle="tooltip" data-bs-title="提示也可以挂在普通文字上" style="border-bottom:1px dashed #b9c2d4;cursor:help">悬停这段文字也有提示</span>' +
            '</div>',
          hint: '把鼠标悬停在四个按钮和文字上',
          tip: '初始化代码只有一行：<code>document.querySelectorAll(\'[data-bs-toggle="tooltip"]\').forEach(el => new bootstrap.Tooltip(el));</code>（本手册统一在页面加载后自动做了这件事）。'
        },
        {
          id: '7.3.2',
          t: '工具提示框的选项',
          d: '常用选项：<code>placement</code>（位置）、<code>trigger</code>（hover / click / focus / manual）、<code>html</code>（允许提示里写 HTML）、<code>delay</code>（延迟显示防手滑）。这些选项通过 JS 初始化时传入。',
          demo:
            '<div class="d-flex flex-wrap gap-3 align-items-center">' +
            '<button class="btn btn-outline-primary btn-sm" id="t732a">悬停延迟 600ms（防手滑）</button>' +
            '<button class="btn btn-outline-success btn-sm" id="t732b">点击才出现（click）</button>' +
            '<button class="btn btn-outline-dark btn-sm" id="t732c">支持 HTML 的提示</button>' +
            '</div>' +
            '<p class="small text-body-secondary mt-3 mb-0">第三个按钮的气泡里有一行<strong>加粗</strong>文字和一个徽章，这说明它开启了 html 选项。</p>',
          js:
            "new bootstrap.Tooltip(document.getElementById('t732a'), { delay: { show: 600, hide: 100 }, title: '等了 0.6 秒才出现' });\n" +
            "new bootstrap.Tooltip(document.getElementById('t732b'), { trigger: 'click', title: '点一次出现，再点消失' });\n" +
            "new bootstrap.Tooltip(document.getElementById('t732c'), {\n" +
            "  html: true,\n" +
            "  trigger: 'click',\n" +
            "  title: '这是 <strong>HTML 内容</strong> <span class=\"badge text-bg-primary\">徽章</span>'\n" +
            "});",
          tip: '提示文字默认放在 title 属性里，但更推荐 <code>data-bs-title</code>——因为原生 title 会"抢答"弹浏览器默认提示，两个气泡打架很尴尬。'
        },
        {
          id: '7.3.3',
          t: '工具提示框的方法和事件',
          d: '方法：<code>show() / hide() / toggle() / disable() / enable() / dispose()</code>。事件：<code>show.bs.tooltip / shown / hide / hidden / inserted</code>。做"新手引导"时，常用 show() 主动弹提示引导用户。',
          demo:
            '<div class="d-flex flex-wrap gap-2 align-items-center mb-2">' +
            '<button class="btn btn-sm btn-primary" id="t733a">主动 show() 提示</button>' +
            '<button class="btn btn-sm btn-outline-secondary" id="t733b">再 hide() 一次</button>' +
            '<span class="badge text-bg-success" id="t733c" data-bs-toggle="tooltip" data-bs-title="我是目标元素，被 JS 控制">目标元素</span>' +
            '</div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2" id="t733Log" style="background:#fff">事件日志：等待操作…</div>',
          js:
            "var tipEl = document.getElementById('t733c');\n" +
            "var tip = bootstrap.Tooltip.getOrCreateInstance(tipEl);\n" +
            "var log3 = stage.querySelector('#t733Log');\n" +
            "function w3(m) { log3.textContent = m + ' | ' + log3.textContent.replace('事件日志：', '').split(' | ').slice(0, 2).join(' | '); }\n" +
            "document.getElementById('t733a').addEventListener('click', function () { tip.show(); });\n" +
            "document.getElementById('t733b').addEventListener('click', function () { tip.hide(); });\n" +
            "['show','shown','hide','hidden'].forEach(function (name) {\n" +
            "  tipEl.addEventListener(name + '.bs.tooltip', function () { w3('触发 ' + name + '.bs.tooltip'); });\n" +
            "});\n" +
            "log3.textContent = '点「主动 show() 提示」按钮试试';",
          tip: '注意 <code>getOrCreateInstance</code>：先用它拿实例（没有则创建），避免对同一元素重复初始化产生两个提示。'
        }
      ]
    },
    {
      id: '7.4',
      t: '弹出框',
      group: true,
      d: '弹出框（Popover）是工具提示的"加强版"：有标题 + 正文，内容更多。同样需要 JS 初始化。',
      children: [
        {
          id: '7.4.1',
          t: '弹出框的基本用法',
          d: '数据属性：<code>data-bs-toggle="popover"</code> + <code>data-bs-title</code>（标题）+ <code>data-bs-content</code>（正文），位置同样用 data-bs-placement。',
          demo:
            '<div class="d-flex flex-wrap gap-3">' +
            '<button class="btn btn-primary btn-sm" data-bs-toggle="popover" data-bs-title="弹出框标题" data-bs-content="我是正文内容，可以写得比 tooltip 长一些。">点击查看弹出框</button>' +
            '<button class="btn btn-success btn-sm" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-title="在下面" data-bs-content="placement 换成 bottom，气泡就跑到下方。">下方弹出框</button>' +
            '<button class="btn btn-warning btn-sm" data-bs-toggle="popover" data-bs-placement="right" data-bs-title="在右边" data-bs-content="右侧弹出框，适合放说明文字。">右侧弹出框</button>' +
            '</div>' +
            '<p class="small text-body-secondary mt-3 mb-0">点一下按钮气泡就出现；再点一次（或点页面其他地方）消失。</p>',
          tip: '默认点击触发、点击空白关闭——这是"卡片式说明"的主流交互，比悬停更适合手机上使用。'
        },
        {
          id: '7.4.2',
          t: '弹出框的选项、方法和事件',
          d: '关键选项 <code>trigger</code>：<code>"focus"</code> 让"点开、点别处自动关"（适合"关闭按钮"式交互）；<code>"hover focus"</code> 悬停也能出现。<code>html: true</code> 支持富文本。方法/事件与 Tooltip 家族完全一致（show / hide / toggle / show.bs.popover…）。',
          demo:
            '<div class="d-flex flex-wrap gap-3 align-items-center">' +
            '<button class="btn btn-outline-danger btn-sm" id="p742a">focus 模式（点别处自动关）</button>' +
            '<button class="btn btn-outline-primary btn-sm" id="p742b">悬停即弹出</button>' +
            '<button class="btn btn-outline-dark btn-sm" id="p742c">HTML 富内容</button>' +
            '</div>',
          js:
            "new bootstrap.Popover(document.getElementById('p742a'), {\n" +
            "  trigger: 'focus',\n" +
            "  title: '专注模式',\n" +
            "  content: '点击别的地方，我会自动消失。常用于「点击后查看」的场景。'\n" +
            "});\n" +
            "new bootstrap.Popover(document.getElementById('p742b'), {\n" +
            "  trigger: 'hover',\n" +
            "  title: '悬停弹出',\n" +
            "  content: '鼠标移上去就出现，移开就消失。'\n" +
            "});\n" +
            "new bootstrap.Popover(document.getElementById('p742c'), {\n" +
            "  trigger: 'click',\n" +
            "  html: true,\n" +
            "  title: '<i class=\"bi bi-stars text-warning\"></i> 富文本标题',\n" +
            "  content: '支持 <strong>加粗</strong>、<a href=\"#\">链接</a>、<span class=\"badge text-bg-success\">徽章</span> 等。'\n" +
            "});",
          tip: '<b>易错点：</b>data-bs-content 里写 HTML 时，必须同时用 JS 初始化并传 <code>html: true</code>，否则标签会原样显示成文字。'
        }
      ]
    },
    {
      id: '7.5',
      t: '警告框',
      group: true,
      d: '警告框（Alert）＝"彩色提示条"，用于成功/警告/错误消息。它的 JS 部分主要负责"关闭"动作。',
      children: [
        {
          id: '7.5.1',
          t: '警告框的基本用法',
          d: '基础类 <code>.alert</code> + 颜色 <code>.alert-success / -warning / -danger</code> 等。里面可以放标题 <code>.alert-heading</code>、链接 <code>.alert-link</code>、水平线、甚至其他组件。<code>.alert-dismissible</code> + 关闭按钮 = 可关闭提示条。',
          demo:
            '<div class="alert alert-primary" role="alert"><i class="bi bi-info-circle me-1"></i>普通信息提示（alert-primary）</div>' +
            '<div class="alert alert-success" role="alert"><i class="bi bi-check-circle me-1"></i>操作成功（alert-success）</div>' +
            '<div class="alert alert-warning" role="alert"><h6 class="alert-heading small fw-bold"><i class="bi bi-exclamation-triangle me-1"></i>注意：存储空间不足</h6>' +
            '<p class="small mb-2">当前已使用 92% 的存储空间，建议清理旧文件。</p>' +
            '<hr><p class="small mb-0">你可以点击 <a href="#" class="alert-link">这里</a> 查看占用详情（alert-link 会自动适配颜色）。</p></div>' +
            '<div class="alert alert-danger alert-dismissible fade show mb-0" role="alert">' +
            '<i class="bi bi-x-octagon me-1"></i>可关闭的警告：点右侧 × 试试' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="关闭"></button></div>',
          hint: '点最后一个警告条右边的 ×，它会真的消失',
          tip: '关闭按钮外面一定要有 <code>.alert-dismissible</code>，否则点 × 不会自动消失（数据 API 认这个类）。'
        },
        {
          id: '7.5.2',
          t: '警告框的 JavaScript 触发',
          d: '两种 JS 玩法：① <b>动态生成</b>——提交表单后用 JS 往页面里插入一条 alert（比预埋在 HTML 里更灵活）；② <b>用方法关闭</b>——<code>new bootstrap.Alert(el).close()</code>，还可以监听 <code>close.bs.alert</code> / <code>closed.bs.alert</code> 事件。',
          demo:
            '<div class="d-flex flex-wrap gap-2 mb-2">' +
            '<button class="btn btn-sm btn-success" id="a752add">模拟"保存成功"（动态插入）</button>' +
            '<button class="btn btn-sm btn-outline-danger" id="a752close">用 JS 关闭第一条</button>' +
            '</div>' +
            '<div id="a752Box"></div>' +
            '<div id="a752Static" class="alert alert-secondary alert-dismissible fade show mb-0 small" role="alert">' +
            '我会被"用 JS 关闭第一条"按钮关掉' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="关闭"></button></div>',
          js:
            "var box = stage.querySelector('#a752Box');\n" +
            "document.getElementById('a752add').addEventListener('click', function () {\n" +
            "  box.insertAdjacentHTML('beforeend', '<div class=\"alert alert-success alert-dismissible fade show small\" role=\"alert\">' +\n" +
            "    '<i class=\"bi bi-check-circle me-1\"></i>保存成功！这条 alert 是 JS 刚创建出来的。' +\n" +
            "    '<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"关闭\"></button></div>');\n" +
            "});\n" +
            "document.getElementById('a752close').addEventListener('click', function () {\n" +
            "  var el = document.getElementById('a752Static');\n" +
            "  if (el) bootstrap.Alert.getOrCreateInstance(el).close();\n" +
            "});",
          tip: '动态插入的 alert 上的 <code>data-bs-dismiss</code> 依然有效——因为 Bootstrap 用的是"事件委托"，不需要重新初始化。'
        },
        {
          id: '7.5.3',
          t: '警告框的方法和事件',
          d: '方法：<code>close()</code>（关闭，带淡出动画）、<code>dispose()</code>、<code>getInstance()</code>。事件：<code>close.bs.alert</code>（即将关闭，可 preventDefault 拦截）、<code>closed.bs.alert</code>（已关闭，元素被移除）。',
          demo:
            '<div class="alert alert-info alert-dismissible fade show small" id="a753" role="alert">' +
            '关闭我，看看下面的事件日志<i class="bi bi-hand-index ms-1"></i>' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="关闭"></button></div>' +
            '<div class="d-flex gap-2 mb-2"><button class="btn btn-sm btn-outline-primary" id="a753re">重新插入一个来关闭</button></div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2" id="a753Log" style="background:#fff">事件日志：等待操作…</div>',
          js:
            "var log5 = stage.querySelector('#a753Log');\n" +
            "var host5 = stage.querySelector('#a753').parentElement;\n" +
            "function bind5(el) {\n" +
            "  el.addEventListener('close.bs.alert', function () { log5.textContent = '触发 close.bs.alert（即将关闭）'; });\n" +
            "  el.addEventListener('closed.bs.alert', function () { log5.textContent = '触发 closed.bs.alert（已关闭并从页面移除）'; });\n" +
            "}\n" +
            "bind5(stage.querySelector('#a753'));\n" +
            "document.getElementById('a753re').addEventListener('click', function () {\n" +
            "  host5.insertAdjacentHTML('afterbegin', '<div class=\"alert alert-info alert-dismissible fade show small\" role=\"alert\">新插入的提示条，再关我一次<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"关闭\"></button></div>');\n" +
            "  bind5(host5.firstElementChild);\n" +
            "});",
          tip: 'close.bs.alert 事件里调用 <code>e.preventDefault()</code> 可以"取消关闭"——做"真的要走吗？"二次确认时很有用。'
        }
      ]
    },
    {
      id: '7.6',
      t: '轻量弹框',
      group: true,
      d: '轻量弹框（Toast）＝"会自己消失的小通知"，像手机上的推送横幅：不打断操作、只做提醒。',
      children: [
        {
          id: '7.6.1',
          t: '轻量弹框的基本用法与定位',
          d: '结构：<code>.toast</code> 外层 + <code>.toast-header</code>（小标题 + 时间 + 关闭）+ <code>.toast-body</code>。要让 HTML 里直接显示，加 <code>.show</code>。位置用外层容器 <code>.toast-container</code> + 定位类（position-fixed + top-0 end-0 等）确定它"贴在屏幕哪个角"。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-2">静态展示（HTML 里已加 .show）：</div>' +
            '<div class="toast show mb-2" role="alert" aria-live="assertive" aria-atomic="true">' +
            '<div class="toast-header"><i class="bi bi-app-indicator text-primary me-2"></i><strong class="me-auto small">学习助手</strong>' +
            '<small class="text-body-secondary">刚刚</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="关闭"></button></div>' +
            '<div class="toast-body small">今天的 3 个知识点已经复习完啦。</div></div>' +
            '<div class="toast show mb-0" role="alert">' +
            '<div class="toast-body small d-flex align-items-center gap-2"><span class="badge text-bg-success">成功</span>文件已保存到"我的文档"。</div></div>' +
            '</div>' +
            '<div class="col-md-6"><div class="small text-body-secondary mb-2">toast-container 定位（真实页面贴屏幕角，这里演示"右下角"）：</div>' +
            '<div class="toast-container position-static">' +
            '<div class="toast show" role="alert" data-bs-theme="dark">' +
            '<div class="toast-header text-bg-primary"><i class="bi bi-bell me-2"></i><strong class="me-auto small">新消息</strong><small>1 分钟前</small>' +
            '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="关闭"></button></div>' +
            '<div class="toast-body small">有人回复了你的提问。</div></div></div>' +
            '</div></div>',
          tip: 'toast-container 的真实用法：加 <code>position-fixed top-0 end-0 p-3</code> 放在 body 里，所有 toast 就统一从右上角弹出——不要给每个 toast 单独定位。'
        },
        {
          id: '7.6.2',
          t: '轻量弹框的 JavaScript 触发与选项',
          d: '常用选项：<code>autohide</code>（默认 true，自动消失）、<code>delay</code>（消失前停留毫秒数，默认 5000）、<code>animation</code>。方法：<code>show() / hide() / dispose()</code>。事件：<code>show.bs.toast / shown / hide / hidden</code>。按钮触发 + JS show() 是最常见的组合。',
          demo:
            '<div class="d-flex flex-wrap gap-2 align-items-center mb-2">' +
            '<button class="btn btn-sm btn-primary" id="t762a">显示通知（2 秒后自动消失）</button>' +
            '<button class="btn btn-sm btn-outline-secondary" id="t762b">常驻通知（不自动消失）</button>' +
            '</div>' +
            '<div class="position-relative border rounded" style="min-height:110px;background:#fbfcfe">' +
            '<div class="position-absolute top-0 end-0 p-2" id="t762Host"></div>' +
            '<div class="p-3 small text-body-secondary">这是"模拟屏幕右上角"的区域：</div>' +
            '</div>' +
            '<div class="toast" id="t762Toast" role="alert" aria-live="assertive" aria-atomic="true">' +
            '<div class="toast-header"><i class="bi bi-check2-circle text-success me-2"></i><strong class="me-auto small">操作成功</strong><small class="text-body-secondary">刚刚</small>' +
            '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="关闭"></button></div>' +
            '<div class="toast-body small" id="t762Text">内容已发布。</div></div>',
          js:
            "var toastEl = document.getElementById('t762Toast');\n" +
            "document.getElementById('t762Host').appendChild(toastEl);\n" +
            "document.getElementById('t762a').addEventListener('click', function () {\n" +
            "  stage.querySelector('#t762Text').textContent = '内容已发布（2 秒后自动消失）。';\n" +
            "  bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2000 }).show();\n" +
            "});\n" +
            "document.getElementById('t762b').addEventListener('click', function () {\n" +
            "  var t = bootstrap.Toast.getOrCreateInstance(toastEl, { autohide: false });\n" +
            "  stage.querySelector('#t762Text').textContent = '这条通知不会自己走，点 × 才关闭。';\n" +
            "  t.show();\n" +
            "});",
          tip: '注意 <code>getOrCreateInstance(el, options)</code>：如果实例已存在，第二次传的 autohide:false 不会生效——需要 <code>dispose()</code> 后再创建，或如本例"按用途区分选项"来演示。'
        }
      ]
    },
    {
      id: '7.7',
      t: '下拉菜单的 JavaScript 用法',
      d: '第 6 章的下拉菜单靠 <code>data-bs-toggle="dropdown"</code> 自动工作；这一节看它的"程序接口"：<b>选项</b> <code>autoClose</code>（点菜单内是否自动关闭：true / false / "inside" / "outside"）、<b>方法</b> <code>show() / hide() / toggle() / update()</code>、<b>事件</b> <code>show.bs.dropdown / shown / hide / hidden</code>。',
      demo:
        '<div class="d-flex flex-wrap gap-3 align-items-center mb-2">' +
        '<div class="dropdown">' +
        '<button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dd77Btn" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">' +
        'autoClose="outside"（点里面不关）</button>' +
        '<ul class="dropdown-menu">' +
        '<li><a class="dropdown-item small" href="#">点我：菜单不会关</a></li>' +
        '<li><div class="dropdown-item-text small p-2"><label class="small">菜单里的输入框：<input class="form-control form-control-sm mt-1" placeholder="输入试试"></label></div></li>' +
        '<li><a class="dropdown-item small" href="#">点外面才关（适合带筛选的菜单）</a></li>' +
        '</ul></div>' +
        '<button class="btn btn-outline-secondary btn-sm" id="dd77Js">用 JS 的 toggle() 控制</button>' +
        '<div class="dropdown">' +
        '<button class="btn btn-outline-primary btn-sm dropdown-toggle" type="button" id="dd77b2" data-bs-toggle="dropdown" data-bs-auto-close="false">autoClose="false"（永不自动关）</button>' +
        '<ul class="dropdown-menu"><li><a class="dropdown-item small" href="#">点哪都不关</a></li><li><a class="dropdown-item small" href="#">要自己点按钮收回</a></li></ul></div>' +
        '</div>' +
        '<div class="small font-monospace text-body-secondary border rounded p-2" id="dd77Log" style="background:#fff">事件日志：等待操作…</div>',
      js:
        "var log7 = stage.querySelector('#dd77Log');\n" +
        "document.getElementById('dd77Js').addEventListener('click', function () {\n" +
        "  bootstrap.Dropdown.getOrCreateInstance('#dd77Btn').toggle();\n" +
        "});\n" +
        "document.getElementById('dd77Btn').parentElement.addEventListener('shown.bs.dropdown', function () { log7.textContent = '触发 shown.bs.dropdown（菜单已展开）'; });\n" +
        "document.getElementById('dd77Btn').parentElement.addEventListener('hidden.bs.dropdown', function () { log7.textContent = '触发 hidden.bs.dropdown（菜单已收起）'; });",
      hint: '重点玩第一个菜单：点里面的输入框，菜单居然不关——这就是 autoClose="outside" 的妙用',
      tip: '事件绑在"组件根元素（.dropdown）"上，不是绑在按钮上——这是下拉菜单事件最容易写错的地方。'
    },
    {
      id: '7.8',
      t: '折叠',
      group: true,
      d: '折叠（Collapse）＝"点一下展开/收起一块内容"。导航条的汉堡菜单、FAQ 问答、详情展开全靠它。',
      children: [
        {
          id: '7.8.1',
          cmp: [
            {
              label: '一个折叠面板',
              native: '// 原生：切类名 + 高度动画全自己来\nbtn.addEventListener("click", function () {\n  panel.classList.toggle("open");\n});\n/* 想要平滑动画，还要写 max-height 过渡\n   + 监听 transitionend 收尾…… */',
              bs: '<button class="btn btn-primary" data-bs-toggle="collapse"\n        data-bs-target="#p1">展开 / 收起</button>\n<div class="collapse" id="p1">被折叠的内容</div>\n\n<!-- 动画、aria-expanded 状态同步，插件全包 -->',
              note: '"看着简单"的交互，隐性工作量最多——这正是插件的价值。'
            }
          ],
          t: '折叠的基本用法',
          d: '触发元素写 <code>data-bs-toggle="collapse"</code> + <code>data-bs-target="#被折叠区"</code>（或用 href），被折叠区加 <code>.collapse</code>；默认展开的加 <code>.show</code>。横向折叠用 <code>.collapse-horizontal</code>（控制宽度）。',
          demo:
            '<div class="d-flex flex-wrap gap-2 mb-3">' +
            '<button class="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#col781" aria-expanded="false" aria-controls="col781">展开 / 收起文字</button>' +
            '<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#col781b">切换另一块</button>' +
            '</div>' +
            '<div class="collapse show" id="col781">' +
            '<div class="p-3 border rounded-3 bg-white small">我默认是展开的（写了 .show）。点击上面的按钮可以收起我——注意收起过程是有动画的。</div></div>' +
            '<div class="collapse mt-2" id="col781b">' +
            '<div class="p-3 border rounded-3 bg-body-tertiary small">我默认是收起的。多个 collapse 可以由不同按钮分别控制。</div></div>' +
            '<div class="d-flex gap-2 mt-3 align-items-start">' +
            '<button class="btn btn-dark btn-sm flex-shrink-0" type="button" data-bs-toggle="collapse" data-bs-target="#col781h">横向展开</button>' +
            '<div class="collapse collapse-horizontal" id="col781h"><div class="p-2 border rounded bg-white small" style="width:260px">collapse-horizontal：从左边"宽度 0"滑出来。</div></div>' +
            '</div>',
          tip: '按钮上建议同步写 <code>aria-expanded</code>（展开 true / 收起 false），Bootstrap 会自动帮你更新它——无障碍细节，加分项。'
        },
        {
          id: '7.8.2',
          t: '折叠的选项、方法与事件',
          d: '选项：<code>parent</code>（指定"父亲"，同一父亲下同时只能展开一个——手风琴的原理）、<code>toggle: false</code>（初始化时不自动切换）。方法：<code>show() / hide() / toggle() / dispose()</code>。事件：<code>show.bs.collapse / shown / hide / hidden</code>。',
          demo:
            '<div class="d-flex flex-wrap gap-2 mb-2">' +
            '<button class="btn btn-sm btn-primary" id="c782t">toggle() 切换</button>' +
            '<button class="btn btn-sm btn-outline-secondary" id="c782s">show() 展开</button>' +
            '<button class="btn btn-sm btn-outline-danger" id="c782h">hide() 收起</button>' +
            '</div>' +
            '<div class="collapse" id="c782box"><div class="p-3 border rounded-3 bg-white small">我是被 JS 方法控制的折叠块。事件触发情况见下方日志。</div></div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2 mt-2" id="c782Log" style="background:#fff">事件日志：等待操作…</div>',
          js:
            "var cEl = document.getElementById('c782box');\n" +
            "bootstrap.Collapse.getOrCreateInstance(cEl, { toggle: false });\n" +
            "var log8 = stage.querySelector('#c782Log');\n" +
            "document.getElementById('c782t').addEventListener('click', function () { bootstrap.Collapse.getOrCreateInstance(cEl).toggle(); });\n" +
            "document.getElementById('c782s').addEventListener('click', function () { bootstrap.Collapse.getOrCreateInstance(cEl).show(); });\n" +
            "document.getElementById('c782h').addEventListener('click', function () { bootstrap.Collapse.getOrCreateInstance(cEl).hide(); });\n" +
            "['show','shown','hide','hidden'].forEach(function (n) {\n" +
            "  cEl.addEventListener(n + '.bs.collapse', function () { log8.textContent = '触发 ' + n + '.bs.collapse'; });\n" +
            "});",
          tip: '<code>toggle:false</code> 很重要：不然 JS 一初始化，元素就自己"抖"一下。写方法控制前先这么初始化。'
        }
      ]
    },
    {
      id: '7.9',
      t: '手风琴',
      d: '手风琴（Accordion）＝"折叠 2.0"：多条折叠项，点开一条时（默认）自动收起其他条——FAQ 页面标配。结构：<code>.accordion</code> 容器 + 多个 <code>.accordion-item</code>，每项里 header/-button/-collapse/-body 四件套；加 <code>.accordion-flush</code> 去掉外边框；<b>删掉 data-bs-parent 属性</b>就变成"可同时展开多条"。',
      demo:
        '<div class="row g-3">' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-2">默认：同时只开一条（data-bs-parent）</div>' +
        '<div class="accordion" id="acc79a">' +
        '<div class="accordion-item"><h2 class="accordion-header">' +
        '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accA1" aria-expanded="true">Bootstrap 是什么？</button></h2>' +
        '<div id="accA1" class="accordion-collapse collapse show" data-bs-parent="#acc79a"><div class="accordion-body small">一套免费开源的前端框架，用类名快速搭页面。</div></div></div>' +
        '<div class="accordion-item"><h2 class="accordion-header">' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accA2">需要学 JavaScript 吗？</button></h2>' +
        '<div id="accA2" class="accordion-collapse collapse" data-bs-parent="#acc79a"><div class="accordion-body small">入门不需要；想做复杂交互再补 JS。</div></div></div>' +
        '<div class="accordion-item"><h2 class="accordion-header">' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accA3">收费吗？</button></h2>' +
        '<div id="accA3" class="accordion-collapse collapse" data-bs-parent="#acc79a"><div class="accordion-body small">MIT 协议，完全免费，商用也免费。</div></div></div>' +
        '</div></div>' +
        '<div class="col-md-6"><div class="small text-body-secondary mb-2">个性化：flush 无边框 + 可同时展开多条（删掉了 data-bs-parent）</div>' +
        '<div class="accordion accordion-flush border rounded-3 bg-white" id="acc79b">' +
        '<div class="accordion-item"><h2 class="accordion-header">' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accB1"><i class="bi bi-lightning-charge text-warning me-2"></i>第一条（点开第二条，我不关）</button></h2>' +
        '<div id="accB1" class="accordion-collapse collapse"><div class="accordion-body small">没有 data-bs-parent 的约束，大家可以同时打开。</div></div></div>' +
        '<div class="accordion-item"><h2 class="accordion-header">' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accB2"><i class="bi bi-gem text-primary me-2"></i>第二条</button></h2>' +
        '<div id="accB2" class="accordion-collapse collapse"><div class="accordion-body small">标题里可以放图标、徽章等任意内容。</div></div></div>' +
        '</div></div></div>',
      hint: '左边点开第三条，第一条会自动收起；右边不会——对比感受 data-bs-parent 的作用',
      tip: '<b>考试高频点：</b>"手风琴单开模式"靠的就是 data-bs-parent 指向 accordion 容器的 id；去掉它 = 多开模式。'
    }
  ],
  summary: [
    '两个 JS 版本：bundle 版含 Popper（推荐）；两种调用方式：data-bs-* 数据属性（首选）与 new bootstrap.XXX() JS 调用。',
    '模态框五层结构 modal > modal-dialog > modal-content > header/body/footer；尺寸 sm/lg/xl、居中 centered、内部滚动 scrollable、全屏 fullscreen。',
    '浮层三兄弟都要 JS 初始化：Tooltip（小气泡）、Popover（带标题，trigger 用 focus/click）、Toast（自动消失的通知）。',
    '警告框：alert-dismissible + btn-close 实现关闭；可用 JS 动态插入；事件 close.bs.alert / closed.bs.alert。',
    '下拉菜单事件绑在 .dropdown 容器上；autoClose 选项控制"点菜单里关不关"。',
    '折叠collapse：按钮 data-bs-toggle="collapse" + data-bs-target；选项 parent 做单开、toggle:false 防初始化抖动。',
    '手风琴 = 手风琴结构 + data-bs-parent；accordion-flush 去边框。',
    '所有插件的事件命名统一为 动作.bs.组件名（show.bs.modal、shown.bs.tab…），show/hide 是"将要"，shown/hidden 是"完成"。'
  ]
});
