/* ============================================================
   第 7 章 JavaScript 插件（下）7.10 - 7.15
   追加到第 7 章，并设置本章实训项目
   ============================================================ */
(function () {
  var ch = null;
  for (var i = 0; i < window.BS_DATA.length; i++) {
    if (window.BS_DATA[i].id === 'ch7') ch = window.BS_DATA[i];
  }
  if (!ch) return;

  ch.sections.push(
    {
      id: '7.10',
      t: 'Offcanvas',
      group: true,
      d: 'Offcanvas 是"从屏幕边缘滑出的抽屉面板"：手机上的侧边菜单、购物车面板、筛选面板都用它。',
      children: [
        {
          id: '7.10.1',
          t: 'Offcanvas 的基本用法',
          d: '结构类似模态框的简化版：<code>.offcanvas</code> + 方向类（<code>offcanvas-start / -end / -top / -bottom</code>）+ <code>offcanvas-header</code> / <code>offcanvas-body</code>。触发用 <code>data-bs-toggle="offcanvas"</code> + <code>data-bs-target</code>，关闭用 <code>data-bs-dismiss="offcanvas"</code>。',
          demo:
            '<div class="d-flex flex-wrap gap-2">' +
            '<button class="btn btn-primary btn-sm" data-bs-toggle="offcanvas" data-bs-target="#oc710a">从左侧滑出</button>' +
            '<button class="btn btn-success btn-sm" data-bs-toggle="offcanvas" data-bs-target="#oc710b">从右侧滑出（购物车）</button>' +
            '<button class="btn btn-warning btn-sm" data-bs-toggle="offcanvas" data-bs-target="#oc710c">从顶部</button>' +
            '<button class="btn btn-danger btn-sm" data-bs-toggle="offcanvas" data-bs-target="#oc710d">从底部（手机操作栏）</button>' +
            '</div>' +
            '<div class="offcanvas offcanvas-start" tabindex="-1" id="oc710a">' +
            '<div class="offcanvas-header"><h6 class="offcanvas-title">侧边菜单</h6><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="关闭"></button></div>' +
            '<div class="offcanvas-body"><ul class="list-group list-group-flush small">' +
            '<li class="list-group-item">我的课程</li><li class="list-group-item">学习记录</li><li class="list-group-item">收藏夹</li><li class="list-group-item">设置</li></ul></div></div>' +
            '<div class="offcanvas offcanvas-end" tabindex="-1" id="oc710b">' +
            '<div class="offcanvas-header"><h6 class="offcanvas-title"><i class="bi bi-cart3 me-2"></i>购物车（2）</h6><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="关闭"></button></div>' +
            '<div class="offcanvas-body d-flex flex-column">' +
            '<div class="d-flex gap-2 align-items-center border-bottom pb-2 mb-2"><span class="davatar" style="width:44px;height:44px;font-size:.8rem">图</span><div class="small flex-grow-1">Bootstrap 实战课<br><span class="text-body-secondary">￥99</span></div><button class="btn btn-sm btn-outline-danger">删</button></div>' +
            '<div class="d-flex gap-2 align-items-center border-bottom pb-2 mb-3"><span class="davatar" style="width:44px;height:44px;font-size:.8rem">图</span><div class="small flex-grow-1">CSS 布局课<br><span class="text-body-secondary">￥79</span></div><button class="btn btn-sm btn-outline-danger">删</button></div>' +
            '<div class="mt-auto"><div class="d-flex justify-content-between small fw-bold mb-2"><span>合计</span><span>￥178</span></div>' +
            '<button class="btn btn-primary w-100">去结算</button></div></div></div>' +
            '<div class="offcanvas offcanvas-top" tabindex="-1" id="oc710c" style="height:30vh">' +
            '<div class="offcanvas-header"><h6 class="offcanvas-title">顶部面板</h6><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="关闭"></button></div>' +
            '<div class="offcanvas-body small">适合放公告栏、全局搜索框。</div></div>' +
            '<div class="offcanvas offcanvas-bottom" tabindex="-1" id="oc710d" style="height:30vh">' +
            '<div class="offcanvas-header"><h6 class="offcanvas-title">底部面板</h6><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="关闭"></button></div>' +
            '<div class="offcanvas-body small">手机上放"立即购买""分享"等操作按钮。</div></div>',
          tip: '<b>响应式 Offcanvas：</b>把方向类换成 <code>offcanvas-md</code> 即"小于 md 时是抽屉、大于 md 时变成普通内容块"——桌面端侧边栏 + 移动端抽屉的"一套代码"就靠它。'
        },
        {
          id: '7.10.2',
          t: 'Offcanvas 的选项、方法与事件',
          d: '选项：<code>backdrop</code>（遮罩，可设 false）、<code>scroll</code>（true 时允许背景滚动）、<code>keyboard</code>（ESC 关闭）。方法：<code>show() / hide() / toggle()</code>。事件：<code>show.bs.offcanvas / shown / hide / hidden</code>。',
          demo:
            '<div class="d-flex flex-wrap gap-2 align-items-center mb-2">' +
            '<button class="btn btn-sm btn-primary" id="oc710Show">JS show()</button>' +
            '<button class="btn btn-sm btn-outline-secondary" id="oc710NoBackdrop">无遮罩 + 背景可滚动</button>' +
            '</div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2" id="oc710Log" style="background:#fff">事件日志：等待操作…</div>' +
            '<div class="offcanvas offcanvas-end" tabindex="-1" id="oc710z" style="width:320px">' +
            '<div class="offcanvas-header"><h6 class="offcanvas-title">选项演示面板</h6><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="关闭"></button></div>' +
            '<div class="offcanvas-body small">第一个按钮用默认选项打开；第二个按钮打开时没有遮罩、页面还能滚动。</div></div>',
          js:
            "var log10 = stage.querySelector('#oc710Log');\n" +
            "var ocEl = stage.querySelector('#oc710z');\n" +
            "['show','shown','hide','hidden'].forEach(function (n) {\n" +
            "  ocEl.addEventListener(n + '.bs.offcanvas', function () { log10.textContent = '触发 ' + n + '.bs.offcanvas'; });\n" +
            "});\n" +
            "document.getElementById('oc710Show').addEventListener('click', function () {\n" +
            "  bootstrap.Offcanvas.getOrCreateInstance(ocEl, { backdrop: true, scroll: false }).show();\n" +
            "});\n" +
            "document.getElementById('oc710NoBackdrop').addEventListener('click', function () {\n" +
            "  bootstrap.Offcanvas.getOrCreateInstance(ocEl).dispose();\n" +
            "  bootstrap.Offcanvas.getOrCreateInstance(ocEl, { backdrop: false, scroll: true }).show();\n" +
            "});",
          tip: '注意第二个按钮的写法：要改选项就得先 <code>dispose()</code> 掉旧实例再建新的——同一个元素上的实例选项不会自动更新。'
        }
      ]
    },
    {
      id: '7.11',
      t: '轮播',
      group: true,
      d: '轮播（Carousel）＝"自动播放的幻灯片"，常用于首页横幅。它是插件里结构最长的，但套路固定。',
      children: [
        {
          id: '7.11.1',
          t: '轮播的基本用法',
          d: '四件套：① 外层 <code>.carousel.slide</code> + <code>data-bs-ride="carousel"</code>（自动播放）；② 指示器 <code>.carousel-indicators</code>；③ 幻灯片主体 <code>.carousel-inner &gt; .carousel-item</code>（当前项加 <code>.active</code>）；④ 左右控制按钮 <code>.carousel-control-prev/next</code>。',
          demo:
            '<div id="car711" class="carousel slide" data-bs-ride="carousel" style="max-width:520px">' +
            '<div class="carousel-indicators">' +
            '<button type="button" data-bs-target="#car711" data-bs-slide-to="0" class="active" aria-current="true" aria-label="第 1 屏"></button>' +
            '<button type="button" data-bs-target="#car711" data-bs-slide-to="1" aria-label="第 2 屏"></button>' +
            '<button type="button" data-bs-target="#car711" data-bs-slide-to="2" aria-label="第 3 屏"></button>' +
            '</div>' +
            '<div class="carousel-inner rounded-3 overflow-hidden">' +
            '<div class="carousel-item active"><div class="d-flex align-items-center justify-content-center text-white" style="height:250px;background:linear-gradient(135deg,#0ea5e9,#6366f1)"><div class="text-center"><h5 class="fw-bold mb-1">第 1 屏</h5><p class="small mb-0" style="opacity:.85">这里是横幅文字</p></div></div></div>' +
            '<div class="carousel-item"><div class="d-flex align-items-center justify-content-center text-white" style="height:250px;background:linear-gradient(135deg,#10b981,#34d399)"><div class="text-center"><h5 class="fw-bold mb-1">第 2 屏</h5><p class="small mb-0" style="opacity:.85">自动轮播中（默认 5 秒一次）</p></div></div></div>' +
            '<div class="carousel-item"><div class="d-flex align-items-center justify-content-center text-white" style="height:250px;background:linear-gradient(135deg,#f59e0b,#f97316)"><div class="text-center"><h5 class="fw-bold mb-1">第 3 屏</h5><p class="small mb-0" style="opacity:.85">鼠标悬停会暂停，移开继续</p></div></div></div>' +
            '</div>' +
            '<button class="carousel-control-prev" type="button" data-bs-target="#car711" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">上一屏</span></button>' +
            '<button class="carousel-control-next" type="button" data-bs-target="#car711" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">下一屏</span></button>' +
            '</div>',
          hint: '别只入不动——试试点下面的小圆点、左右箭头，再把鼠标悬停在图上',
          tip: '三个 id 必须一一对应：外层 carousel 的 id、indicator 的 data-bs-target、control 的 data-bs-target。写错一个，按钮就"失灵"。'
        },
        {
          id: '7.11.2',
          t: '个性化轮播',
          d: '三种常见改造：① <code>.carousel-fade</code> 把"滑动"改成"淡入淡出"；② 文字说明用 <code>.carousel-caption</code>（叠在图上，配 d-none d-md-block 手机上隐藏）；③ 给每屏单独设 <code>data-bs-interval="2000"</code> 控制停留时长。',
          demo:
            '<div id="car712" class="carousel slide carousel-fade" data-bs-ride="carousel" style="max-width:520px">' +
            '<div class="carousel-inner rounded-3 overflow-hidden">' +
            '<div class="carousel-item active" data-bs-interval="3000">' +
            '<div class="d-flex align-items-end" style="height:250px;background:linear-gradient(135deg,#7c3aed,#a78bfa)"></div>' +
            '<div class="carousel-caption d-none d-md-block"><h6 class="fw-bold">淡入淡出 + 文字说明</h6><p class="small mb-0">carousel-fade 与 carousel-caption 的组合</p></div></div>' +
            '<div class="carousel-item" data-bs-interval="3000">' +
            '<div class="d-flex align-items-end" style="height:250px;background:linear-gradient(135deg,#0ea5e9,#38bdf8)"></div>' +
            '<div class="carousel-caption d-none d-md-block"><h6 class="fw-bold">每屏 3 秒</h6><p class="small mb-0">data-bs-interval="3000" 单独控制</p></div></div>' +
            '</div>' +
            '<button class="carousel-control-prev" type="button" data-bs-target="#car712" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">上一屏</span></button>' +
            '<button class="carousel-control-next" type="button" data-bs-target="#car712" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">下一屏</span></button>' +
            '</div>',
          tip: '轮播图尺寸不统一会"跳一下"：给每屏内容设相同高度（如都 250px），或配合 ratio 类保持比例。'
        },
        {
          id: '7.11.3',
          t: '轮播的选项、方法与事件',
          d: '选项：<code>interval</code>（间隔毫秒，false = 不自动）、<code>ride</code>（自动播放）、<code>wrap</code>（到头是否循环）、<code>touch</code>（触屏滑动）、<code>pause</code>（悬停暂停）。方法：<code>cycle() / pause() / next() / prev() / to(索引)</code>。事件：<code>slide.bs.carousel</code>（记录 from/to 索引）/ <code>slid.bs.carousel</code>。',
          demo:
            '<div class="d-flex flex-wrap gap-2 align-items-center mb-2">' +
            '<button class="btn btn-sm btn-primary" id="car713next">next() 下一屏</button>' +
            '<button class="btn btn-sm btn-outline-primary" id="car713prev">prev() 上一屏</button>' +
            '<button class="btn btn-sm btn-outline-success" id="car713to">to(0) 跳到第 1 屏</button>' +
            '<button class="btn btn-sm btn-outline-secondary" id="car713pause">pause() 暂停自动播</button>' +
            '<button class="btn btn-sm btn-outline-secondary" id="car713cycle">cycle() 恢复自动播</button>' +
            '</div>' +
            '<div id="car713" class="carousel slide" data-bs-ride="carousel" style="max-width:460px">' +
            '<div class="carousel-inner rounded-3 overflow-hidden">' +
            '<div class="carousel-item active"><div class="d-flex align-items-center justify-content-center text-white small" style="height:170px;background:linear-gradient(135deg,#0ea5e9,#6366f1)">屏 1</div></div>' +
            '<div class="carousel-item"><div class="d-flex align-items-center justify-content-center text-white small" style="height:170px;background:linear-gradient(135deg,#10b981,#34d399)">屏 2</div></div>' +
            '<div class="carousel-item"><div class="d-flex align-items-center justify-content-center text-white small" style="height:170px;background:linear-gradient(135deg,#f59e0b,#f97316)">屏 3</div></div>' +
            '</div></div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2 mt-2" id="car713Log" style="background:#fff">事件日志：等待操作…</div>',
          js:
            "var log11 = stage.querySelector('#car713Log');\n" +
            "var carEl = document.getElementById('car713');\n" +
            "var car = bootstrap.Carousel.getOrCreateInstance(carEl);\n" +
            "document.getElementById('car713next').addEventListener('click', function () { car.next(); });\n" +
            "document.getElementById('car713prev').addEventListener('click', function () { car.prev(); });\n" +
            "document.getElementById('car713to').addEventListener('click', function () { car.to(0); });\n" +
            "document.getElementById('car713pause').addEventListener('click', function () { car.pause(); log11.textContent = '已暂停自动播放（再点 next 仍可手动切）'; });\n" +
            "document.getElementById('car713cycle').addEventListener('click', function () { car.cycle(); log11.textContent = '已恢复自动播放'; });\n" +
            "carEl.addEventListener('slide.bs.carousel', function (e) {\n" +
            "  log11.textContent = 'slide.bs.carousel：从第 ' + (e.from + 1) + ' 屏滑向第 ' + (e.to + 1) + ' 屏';\n" +
            "});\n" +
            "carEl.addEventListener('slid.bs.carousel', function (e) {\n" +
            "  log11.textContent = 'slid.bs.carousel：已停在第 ' + (e.to + 1) + ' 屏';\n" +
            "});",
          tip: 'slide 事件里的 <code>e.from</code> / <code>e.to</code> 是索引（从 0 开始）——做"第几张图"统计时直接用，不用自己数。'
        }
      ]
    },
    {
      id: '7.12',
      t: '滚动监听',
      group: true,
      d: '滚动监听（ScrollSpy）＝"目录跟着滚动高亮"：页面滚到哪一节，侧边目录就点亮哪一项。',
      children: [
        {
          id: '7.12.1',
          t: '滚动监听的基本用法',
          d: '两部分：① 被监听的内容区（滚动容器）加 <code>data-bs-spy="scroll"</code> + <code>data-bs-target="#目录id"</code>，并设置 <code>tabindex="0"</code>；② 目录本身是 <code>.list-group</code> 或 <code>.nav</code>，链接的 href 指向内容区各节的 id。加 <code>data-bs-smooth-scroll="true"</code> 点击目录平滑滚动。',
          demo:
            '<div class="row g-3">' +
            '<div class="col-4"><div class="list-group" id="spy712" style="position:sticky;top:0">' +
            '<a class="list-group-item list-group-item-action small" href="#sp712a">第 1 节</a>' +
            '<a class="list-group-item list-group-item-action small" href="#sp712b">第 2 节</a>' +
            '<a class="list-group-item list-group-item-action small" href="#sp712c">第 3 节</a>' +
            '</div></div>' +
            '<div class="col-8"><div data-bs-spy="scroll" data-bs-target="#spy712" data-bs-smooth-scroll="true" tabindex="0" id="sp712area" class="demo-scroll" style="height:230px;position:relative">' +
            '<h6 id="sp712a" class="small fw-bold">第 1 节</h6><p class="small text-body-secondary">在这一节里滚动、停一下，注意左边目录哪一项被高亮。</p><p class="small text-body-secondary">继续补几行字凑高度……</p>' +
            '<h6 id="sp712b" class="small fw-bold mt-4">第 2 节</h6><p class="small text-body-secondary">滚到这里，目录会跳亮"第 2 节"。</p><p class="small text-body-secondary">再补两行……</p>' +
            '<h6 id="sp712c" class="small fw-bold mt-4">第 3 节</h6><p class="small text-body-secondary">最后一节。</p><p class="small text-body-secondary">到底了。</p>' +
            '</div></div></div>',
          js:
            "bootstrap.ScrollSpy.getOrCreateInstance(stage.querySelector('#sp712area'), {\n" +
            "  target: '#spy712',\n" +
            "  rootMargin: '0px 0px -55% 0px',\n" +
            "  smoothScroll: true\n" +
            "});",
          hint: '在右侧内容区滚动：左边目录自动高亮；直接点目录项也能跳过去',
          tip: '<b>5.3 的重要变化：</b>滚动监听已改用 IntersectionObserver 重写（性能更好），<code>offset</code> 选项被删除，改用 <code>rootMargin</code>（负的下边距让"高亮时机"更符合直觉）。'
        },
        {
          id: '7.12.2',
          t: '滚动监听的选项与方法',
          d: '选项：<code>target</code>（目录选择器）、<code>rootMargin</code>（触发边界，默认 "0px 0px -25%"）、<code>smoothScroll</code>、<code>threshold</code>。方法：<code>refresh()</code>（内容高度变化后重新计算）；事件：<code>activate.bs.scrollspy</code>。',
          demo:
            '<div class="alert alert-secondary small mb-2 py-2"><i class="bi bi-info-circle me-1"></i>点下面按钮观察 activate.bs.scrollspy 事件（先滚动左侧区域再点）。</div>' +
            '<div class="d-flex gap-2 mb-2"><button class="btn btn-sm btn-outline-primary" id="sp712btn">refresh() 重算</button></div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2" id="sp712log" style="background:#fff">事件日志：等待操作…</div>',
          js:
            "// 上一个小节的滚动监听实例：监听它的 activate 事件\n" +
            "var area = stage.querySelector('#sp712area');\n" +
            "if (area) {\n" +
            "  area.addEventListener('activate.bs.scrollspy', function () {\n" +
            "    var log = stage.parentElement.querySelector('#sp712log') || stage.querySelector('#sp712log');\n" +
            "    if (log) log.textContent = '触发 activate.bs.scrollspy（目录高亮项变了）';\n" +
            "  });\n" +
            "}\n" +
            "document.getElementById('sp712btn').addEventListener('click', function () {\n" +
            "  var el = stage.closest('section').querySelector('#sp712area');\n" +
            "  var log = stage.querySelector('#sp712log');\n" +
            "  try {\n" +
            "    bootstrap.ScrollSpy.getInstance(el).refresh();\n" +
            "    log.textContent = '已调用 refresh() 重新计算位置';\n" +
            "  } catch (err) {\n" +
            "    log.textContent = 'refresh() 调用完成（或实例未找到）';\n" +
            "  }\n" +
            "});",
          tip: '当页面内容"异步加载"导致高度变化时，滚动监听的高亮会算错位——记得在内容更新后调用 <code>refresh()</code>。'
        }
      ]
    },
    {
      id: '7.13',
      t: '选项卡',
      group: true,
      d: '选项卡（Tab）把"导航"和"内容面板"连起来：点标题，下方内容跟着换。第 6 章的 nav-tabs 只是"长得像页签"，加了这个插件才是真的能切。',
      children: [
        {
          id: '7.13.1',
          t: '选项卡的基本用法',
          d: '两半结构：① <code>.nav.nav-tabs</code> 里的按钮加 <code>data-bs-toggle="tab"</code> + <code>data-bs-target="#面板id"</code>；② 内容区 <code>.tab-content</code>，每个面板 <code>.tab-pane</code>（当前显示的加 <code>.show.active</code>）。面板加 <code>.fade</code> 有淡入过渡。',
          demo:
            '<ul class="nav nav-tabs" role="tablist">' +
            '<li class="nav-item" role="presentation"><button class="nav-link active" id="t713a" data-bs-toggle="tab" data-bs-target="#p713a" type="button" role="tab" aria-controls="p713a" aria-selected="true"><i class="bi bi-book me-1"></i>课程介绍</button></li>' +
            '<li class="nav-item" role="presentation"><button class="nav-link" id="t713b" data-bs-toggle="tab" data-bs-target="#p713b" type="button" role="tab" aria-controls="p713b" aria-selected="false"><i class="bi bi-list-check me-1"></i>课程大纲</button></li>' +
            '<li class="nav-item" role="presentation"><button class="nav-link" id="t713c" data-bs-toggle="tab" data-bs-target="#p713c" type="button" role="tab" aria-controls="p713c" aria-selected="false"><i class="bi bi-chat-quote me-1"></i>学员评价</button></li>' +
            '</ul>' +
            '<div class="tab-content border border-top-0 rounded-bottom p-3 bg-white">' +
            '<div class="tab-pane fade show active" id="p713a" role="tabpanel" aria-labelledby="t713a" tabindex="0"><p class="small mb-0">适合零基础：从"什么是 Bootstrap"讲到完整项目实战，全程有可运行示例。</p></div>' +
            '<div class="tab-pane fade" id="p713b" role="tabpanel" aria-labelledby="t713b" tabindex="0"><ul class="small mb-0"><li>第 1 周：栅格与工具类</li><li>第 2 周：组件与表单</li><li>第 3 周：JS 插件与项目</li></ul></div>' +
            '<div class="tab-pane fade" id="p713c" role="tabpanel" aria-labelledby="t713c" tabindex="0"><p class="small mb-0">"示例都能点，学起来不困。"—— 一位刚学完第 4 章的同学</p></div>' +
            '</div>',
          hint: '点三个页签切换内容；注意内容区有淡入过渡',
          tip: 'nav-tabs（长条页签）和 nav-pills（药丸）都能配这套插件用，只换导航样式、内容结构不变。'
        },
        {
          id: '7.13.2',
          t: '选项卡的方法和事件',
          d: '方法：<code>show()</code>（切到指定页签）、<code>dispose()</code>。事件：<code>show.bs.tab</code>（即将切换，带 relatedTarget 记录"从哪来"）、<code>shown.bs.tab</code>（已切换）。典型用途：切换时懒加载内容、上报统计、联动更新标题。',
          demo:
            '<div class="d-flex flex-wrap gap-2 mb-2">' +
            '<button class="btn btn-sm btn-primary" id="t713js1">JS 切到"大纲"</button>' +
            '<button class="btn btn-sm btn-outline-primary" id="t713js2">JS 切到"评价"</button>' +
            '</div>' +
            '<ul class="nav nav-pills mb-2" id="t713nav" role="tablist">' +
            '<li class="nav-item" role="presentation"><button class="nav-link active btn-sm" id="p714a" data-bs-toggle="pill" data-bs-target="#pn714a" type="button" role="tab">介绍</button></li>' +
            '<li class="nav-item" role="presentation"><button class="nav-link btn-sm" id="p714b" data-bs-toggle="pill" data-bs-target="#pn714b" type="button" role="tab">大纲</button></li>' +
            '<li class="nav-item" role="presentation"><button class="nav-link btn-sm" id="p714c" data-bs-toggle="pill" data-bs-target="#pn714c" type="button" role="tab">评价</button></li>' +
            '</ul>' +
            '<div class="tab-content border rounded-3 p-3 bg-white">' +
            '<div class="tab-pane fade show active" id="pn714a" role="tabpanel" tabindex="0"><p class="small mb-0">介绍面板</p></div>' +
            '<div class="tab-pane fade" id="pn714b" role="tabpanel" tabindex="0"><p class="small mb-0">大纲面板（被 JS 切换过来的）</p></div>' +
            '<div class="tab-pane fade" id="pn714c" role="tabpanel" tabindex="0"><p class="small mb-0">评价面板</p></div>' +
            '</div>' +
            '<div class="small font-monospace text-body-secondary border rounded p-2 mt-2" id="t713log" style="background:#fff">事件日志：等待操作…</div>',
          js:
            "var navEl = document.getElementById('t713nav');\n" +
            "navEl.querySelectorAll('button').forEach(function (btn) {\n" +
            "  btn.addEventListener('show.bs.tab', function (e) {\n" +
            "    var from = e.relatedTarget ? e.relatedTarget.textContent.trim() : '（初始）';\n" +
            "    stage.querySelector('#t713log').textContent = 'show.bs.tab：从「' + from + '」切换到「' + e.target.textContent.trim() + '」';\n" +
            "  });\n" +
            "  btn.addEventListener('shown.bs.tab', function (e) {\n" +
            "    stage.querySelector('#t713log').textContent = 'shown.bs.tab：已切换到「' + e.target.textContent.trim() + '」，可以在这里懒加载内容';\n" +
            "  });\n" +
            "});\n" +
            "document.getElementById('t713js1').addEventListener('click', function () {\n" +
            "  bootstrap.Tab.getOrCreateInstance(document.getElementById('p714b')).show();\n" +
            "});\n" +
            "document.getElementById('t713js2').addEventListener('click', function () {\n" +
            "  bootstrap.Tab.getOrCreateInstance(document.getElementById('p714c')).show();\n" +
            "});",
          tip: 'pills 版用 <code>data-bs-toggle="pill"</code>（tabs 版用 tab）——只影响样式类，机制完全相同。'
        }
      ]
    },
    {
      id: '7.14',
      t: '按钮的 JavaScript 用法',
      d: 'Button 插件就一个小功能：把按钮做成"开关"——点一下激活（变成 .active 的按压态），再点取消。数据属性版 <code>data-bs-toggle="button"</code> 或 JS 版 <code>new bootstrap.Button(el).toggle()</code>。它常和"收藏/点赞"这类轻交互绑定。',
      demo:
        '<div class="d-flex flex-wrap gap-3 align-items-center">' +
        '<button type="button" class="btn btn-outline-primary" data-bs-toggle="button" aria-pressed="false"><i class="bi bi-heart me-1"></i>收藏（数据属性）</button>' +
        '<button type="button" class="btn btn-outline-danger" id="b714"><i class="bi bi-hand-thumbs-up me-1"></i>点赞（JS 控制）</button>' +
        '<span class="small text-body-secondary">都点几下：按钮会"按下去"再弹回来</span>' +
        '</div>' +
        '<div class="small font-monospace text-body-secondary border rounded p-2 mt-2" id="b714log" style="background:#fff">状态日志：等待操作…</div>',
      js:
        "var bEl = document.getElementById('b714');\n" +
        "bEl.addEventListener('click', function () {\n" +
        "  bootstrap.Button.getOrCreateInstance(bEl).toggle();\n" +
        "  stage.querySelector('#b714log').textContent = 'aria-pressed = ' + bEl.getAttribute('aria-pressed');\n" +
        "});\n" +
        "bEl.setAttribute('aria-pressed', 'false');",
      tip: '按钮开关会自动维护 <code>aria-pressed</code>（true/false），读屏用户能感知"开关状态"——这也是它和"按钮组里的 .active"的区别。'
    },
    {
      id: '7.15',
      t: '案例：学院网站首页',
      d: '把第 6、7 章的组件和插件组装成"学院首页"：响应式导航条 + 轮播横幅 + 选项卡展示课程 + 手风琴解答招生问题 + 模态框弹报名表单。这一屏是本册子最接近"真实项目"的例子。',
      demo:
        '<div class="border rounded-3 overflow-hidden bg-white">' +
        '<nav class="navbar navbar-expand-md bg-body-tertiary px-3">' +
        '<span class="navbar-brand fw-bold small"><i class="bi bi-mortarboard-fill text-primary me-1"></i>星辰学院</span>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#academyNav"><span class="navbar-toggler-icon"></span></button>' +
        '<div class="collapse navbar-collapse" id="academyNav">' +
        '<ul class="navbar-nav ms-auto align-items-md-center">' +
        '<li class="nav-item"><a class="nav-link active small" href="#">首页</a></li>' +
        '<li class="nav-item"><a class="nav-link small" href="#">课程</a></li>' +
        '<li class="nav-item"><a class="nav-link small" href="#">师资</a></li>' +
        '<li class="nav-item ms-md-2 mt-2 mt-md-0"><button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#academyModal">立即报名</button></li>' +
        '</ul></div></nav>' +
        '<div id="academyCar" class="carousel slide" data-bs-ride="carousel">' +
        '<div class="carousel-indicators">' +
        '<button type="button" data-bs-target="#academyCar" data-bs-slide-to="0" class="active" aria-label="第 1 屏"></button>' +
        '<button type="button" data-bs-target="#academyCar" data-bs-slide-to="1" aria-label="第 2 屏"></button>' +
        '</div>' +
        '<div class="carousel-inner">' +
        '<div class="carousel-item active"><div class="d-flex align-items-center text-white p-4 p-md-5" style="height:230px;background:linear-gradient(120deg,#4f46e5,#7c3aed)">' +
        '<div><span class="badge text-bg-warning mb-2">2026 秋季招生</span><h4 class="fw-bold mb-2">把技术学到"能上手"</h4><p class="small mb-0" style="opacity:.85">前端 / 后端 / 数据分析，全部项目制教学</p></div></div></div>' +
        '<div class="carousel-item"><div class="d-flex align-items-center text-white p-4 p-md-5" style="height:230px;background:linear-gradient(120deg,#0ea5e9,#14b8a6)">' +
        '<div><span class="badge text-bg-light mb-2">免费试听</span><h4 class="fw-bold mb-2">先听两节课再决定</h4><p class="small mb-0" style="opacity:.85">每周三晚 20:00，直播间见</p></div></div></div>' +
        '</div>' +
        '<button class="carousel-control-prev" type="button" data-bs-target="#academyCar" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">上一屏</span></button>' +
        '<button class="carousel-control-next" type="button" data-bs-target="#academyCar" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">下一屏</span></button>' +
        '</div>' +
        '<div class="p-3 p-md-4">' +
        '<h6 class="fw-bold mb-3"><i class="bi bi-grid-3x3-gap me-1 text-primary"></i>热门课程</h6>' +
        '<ul class="nav nav-pills mb-3" role="tablist">' +
        '<li class="nav-item"><button class="nav-link active btn-sm" data-bs-toggle="pill" data-bs-target="#acP1" type="button" role="tab">前端方向</button></li>' +
        '<li class="nav-item"><button class="nav-link btn-sm" data-bs-toggle="pill" data-bs-target="#acP2" type="button" role="tab">数据分析</button></li>' +
        '<li class="nav-item"><button class="nav-link btn-sm" data-bs-toggle="pill" data-bs-target="#acP3" type="button" role="tab">全栈就业</button></li>' +
        '</ul>' +
        '<div class="tab-content border rounded-3 p-3">' +
        '<div class="tab-pane fade show active" id="acP1" role="tabpanel"><div class="row g-3">' +
        '<div class="col-md-6"><div class="d-flex gap-3 align-items-center"><span class="badge text-bg-primary">Hot</span><div class="small"><strong>Bootstrap 项目实战</strong><br><span class="text-body-secondary">6 周 · 直播 + 答疑</span></div></div></div>' +
        '<div class="col-md-6"><div class="d-flex gap-3 align-items-center"><span class="badge text-bg-secondary">新课</span><div class="small"><strong>JavaScript 进阶</strong><br><span class="text-body-secondary">8 周 · 录播 + 作业批改</span></div></div></div>' +
        '</div></div>' +
        '<div class="tab-pane fade" id="acP2" role="tabpanel"><div class="small text-body-secondary">Python 数据分析、SQL 实战、可视化看板……</div></div>' +
        '<div class="tab-pane fade" id="acP3" role="tabpanel"><div class="small text-body-secondary">从零到就业的完整路径，入学即配学习导师。</div></div>' +
        '</div>' +
        '<h6 class="fw-bold mb-3 mt-4"><i class="bi bi-patch-question me-1 text-primary"></i>招生问答</h6>' +
        '<div class="accordion accordion-flush border rounded-3" id="academyAcc">' +
        '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button small" type="button" data-bs-toggle="collapse" data-bs-target="#acQ1" aria-expanded="true">零基础可以学吗？</button></h2>' +
        '<div id="acQ1" class="accordion-collapse collapse show" data-bs-parent="#academyAcc"><div class="accordion-body small">可以，课程从 HTML 讲起，前两周有"补基础"加餐。</div></div></div>' +
        '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed small" type="button" data-bs-toggle="collapse" data-bs-target="#acQ2">错过直播怎么办？</button></h2>' +
        '<div id="acQ2" class="accordion-collapse collapse" data-bs-parent="#academyAcc"><div class="accordion-body small">每节课都有回放，学习期内可反复看。</div></div></div>' +
        '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed small" type="button" data-bs-toggle="collapse" data-bs-target="#acQ3">可以退款吗？</button></h2>' +
        '<div id="acQ3" class="accordion-collapse collapse" data-bs-parent="#academyAcc"><div class="accordion-body small">开课 7 天内不满意可全额退款。</div></div></div>' +
        '</div>' +
        '</div>' +
        '<div class="text-center small text-body-secondary bg-body-tertiary py-2">© 2026 星辰学院（示例）</div>' +
        '</div>' +
        '<div class="modal fade" id="academyModal" tabindex="-1">' +
        '<div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
        '<div class="modal-header"><h6 class="modal-title">领取试听名额</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
        '<div class="modal-body">' +
        '<div class="mb-3"><label class="form-label small" for="acName">姓名</label><input type="text" class="form-control" id="acName" placeholder="你的称呼"></div>' +
        '<div class="mb-3"><label class="form-label small" for="acPhone">手机号</label><input type="tel" class="form-control" id="acPhone" placeholder="11 位手机号"></div>' +
        '<div class="form-check small"><input class="form-check-input" type="checkbox" id="acOk" checked><label class="form-check-label" for="acOk">同意接收课程通知</label></div>' +
        '</div>' +
        '<div class="modal-footer"><button type="button" class="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">取消</button>' +
        '<button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">提交</button></div>' +
        '</div></div></div>',
      hint: '这一屏里藏了 5 个插件：轮播、选项卡、手风琴、模态框、响应式导航折叠——都点一遍'
    }
  );

  ch.practice = {
    t: '实训项目：制作公司网站首页',
    d: '仿照"7.15 学院首页"的思路，独立做一个公司官网首页，要求至少用上 4 个 JavaScript 插件。',
    steps: [
      '导航条：响应式折叠 + 一个"Contact Us"按钮（点击打开模态框放联系方式）。',
      '主视觉：轮播 3 屏（1 屏主打产品、1 屏客户案例、1 屏招聘信息），带指示器和左右按钮。',
      '产品区：选项卡切分"软件 / 硬件 / 服务"三类产品。',
      '常见问题：手风琴 4 条（合作流程、报价方式、售后、发票）。',
      '加分项：右下角放一个"联系客服"按钮，点击弹出 Offcanvas 侧边面板；页面右下角 toast 提示"已成功发送"。'
    ],
    demo:
      '<div class="border rounded-3 overflow-hidden bg-white" style="max-width:640px">' +
      '<nav class="navbar bg-body-tertiary px-3 py-2">' +
      '<span class="navbar-brand fw-bold small"><i class="bi bi-building-gear text-primary me-1"></i>云启科技</span>' +
      '<span class="small text-body-secondary ms-auto d-flex align-items-center gap-2">联系我们' +
      '<button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#coModal">留言</button></span></nav>' +
      '<div id="coCar" class="carousel slide carousel-fade" data-bs-ride="carousel">' +
      '<div class="carousel-inner">' +
      '<div class="carousel-item active"><div class="text-white p-4" style="height:180px;background:linear-gradient(120deg,#0f172a,#334155)"><h5 class="fw-bold mb-1 mt-4">让企业上云更简单</h5><p class="small mb-0" style="opacity:.85">一站式云迁移与运维服务</p></div></div>' +
      '<div class="carousel-item"><div class="text-white p-4" style="height:180px;background:linear-gradient(120deg,#1e3a8a,#3b82f6)"><h5 class="fw-bold mb-1 mt-4">客户案例：某零售集团</h5><p class="small mb-0" style="opacity:.85">迁移 200+ 系统，成本下降 35%</p></div></div>' +
      '</div></div>' +
      '<div class="p-3">' +
      '<ul class="nav nav-tabs small" role="tablist">' +
      '<li class="nav-item"><button class="nav-link active btn-sm" data-bs-toggle="tab" data-bs-target="#coP1" type="button" role="tab">软件</button></li>' +
      '<li class="nav-item"><button class="nav-link btn-sm" data-bs-toggle="tab" data-bs-target="#coP2" type="button" role="tab">硬件</button></li>' +
      '<li class="nav-item"><button class="nav-link btn-sm" data-bs-toggle="tab" data-bs-target="#coP3" type="button" role="tab">服务</button></li>' +
      '</ul>' +
      '<div class="tab-content border border-top-0 rounded-bottom p-3 mb-3">' +
      '<div class="tab-pane fade show active" id="coP1" role="tabpanel"><div class="small text-body-secondary">云管理平台 · 数据看板 · 自动化运维工具</div></div>' +
      '<div class="tab-pane fade" id="coP2" role="tabpanel"><div class="small text-body-secondary">服务器整机 · 边缘计算盒子 · 网络设备</div></div>' +
      '<div class="tab-pane fade" id="coP3" role="tabpanel"><div class="small text-body-secondary">架构咨询 · 迁移实施 · 7×24 运维托管</div></div>' +
      '</div>' +
      '<div class="accordion accordion-flush border rounded-3" id="coAcc">' +
      '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed small" type="button" data-bs-toggle="collapse" data-bs-target="#coQ1">合作流程是怎样的？</button></h2>' +
      '<div id="coQ1" class="accordion-collapse collapse" data-bs-parent="#coAcc"><div class="accordion-body small">需求沟通 → 方案报价 → 签约实施 → 验收交付，全程有项目经理跟进。</div></div></div>' +
      '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed small" type="button" data-bs-toggle="collapse" data-bs-target="#coQ2">如何报价？</button></h2>' +
      '<div id="coQ2" class="accordion-collapse collapse" data-bs-parent="#coAcc"><div class="accordion-body small">按项目规模评估，提供明细清单，无隐藏费用。</div></div></div>' +
      '</div>' +
      '</div>' +
      '<div class="text-center small text-body-secondary bg-body-tertiary py-2">© 2026 云启科技（示例）</div>' +
      '</div>' +
      '<div class="modal fade" id="coModal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
      '<div class="modal-header"><h6 class="modal-title">联系我们</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
      '<div class="modal-body small"><p class="mb-1"><i class="bi bi-telephone me-1"></i>400-000-0000</p><p class="mb-1"><i class="bi bi-envelope me-1"></i>sales@yunqi.example</p><p class="mb-0"><i class="bi bi-geo-alt me-1"></i>武汉市光谷大道 88 号</p></div>' +
      '<div class="modal-footer"><button class="btn btn-sm btn-primary" data-bs-dismiss="modal">好的</button></div></div></div></div>',
    hint: '参考实现里用了：轮播（fade）+ 选项卡 + 手风琴 + 模态框，你可以继续加 Offcanvas 和 toast'
  };
})();
