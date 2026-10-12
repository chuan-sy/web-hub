/* ============================================================
   第 8 章 综合案例
   ============================================================ */
window.BS_DATA.push({
  id: 'ch8',
  num: '第 8 章',
  title: '综合案例',
  accent: '#475569',
  accentSoft: '#eef2f7',
  icon: 'bi-rocket-takeoff',
  intro: '前面七章是"零件"，这一章是"组装"。我们从一个空文件开始，一屏一屏地搭出一个企业官网单页：全屏头图 → 数据展示 → 服务卡片 → 联系表单 → 导航条吸附 → 页脚 → 滚动监听，最后变成一个可以直接拿去改的真实项目。',
  goals: [
    '体验"从需求到上线"的完整搭建流程',
    '学会把零散知识组装成完整页面',
    '掌握单页网站（One Page）的经典结构',
    '会给地图、导航条、页脚、滚动监听这些"收官件"做收尾',
    '建立自己的"页面骨架模板库"'
  ],
  docs: [
    { t: '官方 Examples（整页示例）', u: 'https://getbootstrap.com/docs/5.3/examples/' },
    { t: '官方 Starter template', u: 'https://getbootstrap.com/docs/5.3/examples/starter-template/' },
    { t: 'Scrollspy 文档', u: 'https://getbootstrap.com/docs/5.3/components/scrollspy/' }
  ],
  sections: [
    {
      id: '8.1',
      t: '网站概述',
      d: '案例目标：给"云启科技"这类技术服务公司做一个<b>单页官网</b>（One Page Website）——所有内容在一页里，用导航条 + 锚点跳转代替多页。结构定六块：导航条、第 1 屏头图、第 2 屏公司介绍、第 3 屏服务、第 4 屏联系、页脚。先把结构画出来，再一屏一屏实现。',
      demo:
        '<div class="border rounded-3 p-3 bg-white" style="max-width:520px">' +
        '<div class="small text-body-secondary mb-2">单页官网的结构草图：</div>' +
        '<div class="d-flex flex-column gap-2 small">' +
        '<div class="dbox dbox-3">① 导航条（固定顶部 + 锚点链接）</div>' +
        '<div class="dbox" style="padding:1.4rem .5rem">② 第 1 屏 · 全屏头图（标题 + 口号 + 按钮）</div>' +
        '<div class="dbox dbox-2" style="padding:1rem .5rem">③ 第 2 屏 · 公司介绍（文字 + 数据）</div>' +
        '<div class="dbox" style="padding:1rem .5rem">④ 第 3 屏 · 服务/产品（卡片栅格）</div>' +
        '<div class="dbox dbox-2" style="padding:1rem .5rem">⑤ 第 4 屏 · 联系我们（地图 + 表单）</div>' +
        '<div class="dbox-warn dbox">⑥ 页脚（栏目链接 + 版权）</div>' +
        '</div></div>',
      tip: '做项目先"画骨架"：把每一屏当成一个 <code>&lt;section&gt;</code>，给它们起好 id（home / about / services / contact），导航和滚动监听后面都要靠这些 id。'
    },
    {
      id: '8.2',
      t: '开始页面',
      d: '新建 index.html，先写好每个页面都一样的"地基"：文档声明、编码、viewport、标题、Bootstrap CSS（head 里）和 JS（body 末尾），再加上我们自己的 style.css。然后照着 8.1 的草图，把六块的"空壳"先搭出来。',
      demo:
        '<div class="border rounded-3 p-3 bg-white font-monospace small">' +
        '&lt;body&gt;<br>' +
        '&nbsp;&nbsp;&lt;nav class="navbar fixed-top"&gt;&lt;/nav&gt;&nbsp;&nbsp;<span class="text-body-tertiary">&lt;!-- ① 导航条 --&gt;</span><br>' +
        '&nbsp;&nbsp;&lt;header id="home"&gt;&lt;/header&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body-tertiary">&lt;!-- ② 第 1 屏 --&gt;</span><br>' +
        '&nbsp;&nbsp;&lt;section id="about"&gt;&lt;/section&gt;&nbsp;&nbsp;<span class="text-body-tertiary">&lt;!-- ③ 第 2 屏 --&gt;</span><br>' +
        '&nbsp;&nbsp;&lt;section id="services"&gt;&lt;/section&gt;&nbsp;&nbsp;<span class="text-body-tertiary">&lt;!-- ④ 第 3 屏 --&gt;</span><br>' +
        '&nbsp;&nbsp;&lt;section id="contact"&gt;&lt;/section&gt;&nbsp;&nbsp;<span class="text-body-tertiary">&lt;!-- ⑤ 第 4 屏 --&gt;</span><br>' +
        '&nbsp;&nbsp;&lt;footer&gt;&lt;/footer&gt;&nbsp;&nbsp;<span class="text-body-tertiary">&lt;!-- ⑥ 页脚 --&gt;</span><br>' +
        '&lt;/body&gt;' +
        '</div>',
      code:
        '<!doctype html>\n' +
        '<html lang="zh-CN">\n' +
        '<head>\n' +
        '  <meta charset="utf-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '  <title>云启科技 · 让企业上云更简单</title>\n' +
        '  <link href="https://registry.npmmirror.com/bootstrap/5.3.8/files/dist/css/bootstrap.min.css" rel="stylesheet">\n' +
        '  <link href="style.css" rel="stylesheet">\n' +
        '</head>\n' +
        '<body data-bs-spy="scroll" data-bs-target="#mainNav" tabindex="0">\n' +
        '\n' +
        '  <nav id="mainNav" class="navbar navbar-expand-lg fixed-top">…</nav>\n' +
        '  <header id="home" class="min-vh-100 d-flex align-items-center">…</header>\n' +
        '  <section id="about" class="py-5">…</section>\n' +
        '  <section id="services" class="py-5 bg-body-tertiary">…</section>\n' +
        '  <section id="contact" class="py-5">…</section>\n' +
        '  <footer class="py-4 bg-dark" data-bs-theme="dark">…</footer>\n' +
        '\n' +
        '  <script src="https://registry.npmmirror.com/bootstrap/5.3.8/files/dist/js/bootstrap.bundle.min.js"></script>\n' +
        '</body>\n' +
        '</html>',
      tip: '两个"提前量"：① body 上的 <code>data-bs-spy</code> 是给 8.4.4 滚动监听埋的伏笔；② fixed-top 导航条需要给 body 加 padding-top（写在 style.css 里）。'
    },
    {
      id: '8.3',
      t: '主要内容的制作',
      group: true,
      d: '一屏一屏来：头图 → 介绍 → 服务 → 联系。每屏搞定时都可以单独在浏览器里看一眼，再往下一屏推进。',
      children: [
        {
          id: '8.3.1',
          t: '制作第 1 屏',
          d: '第 1 屏（Hero）是"第一印象"，标准配置：<code>min-vh-100</code> 撑满一屏 + <code>d-flex align-items-center</code> 内容垂直居中 + 深色渐变背景 + 大标题 + 一句口号 + 两个按钮（主行动 + 次要）。',
          demo:
            '<div class="position-relative d-flex align-items-center rounded-3 overflow-hidden" style="min-height:340px;background:linear-gradient(130deg,#0f172a 0%,#1e3a8a 60%,#3b82f6 100%)">' +
            '<div class="container-fluid px-4">' +
            '<div class="row"><div class="col-lg-8">' +
            '<span class="badge text-bg-light mb-3">企业云服务 · 十年经验</span>' +
            '<h2 class="text-white fw-bold mb-3" style="line-height:1.35">让企业上云<br>更简单、更省钱</h2>' +
            '<p class="text-white-50 mb-4" style="max-width:420px">我们提供云迁移、运维托管与数据安全的一站式服务，已服务 500+ 家企业客户。</p>' +
            '<div class="d-flex flex-wrap gap-3">' +
            '<a href="#" class="btn btn-primary btn-lg px-4">免费咨询</a>' +
            '<a href="#services" class="btn btn-outline-light btn-lg px-4">查看服务</a>' +
            '</div></div></div>' +
            '<div class="position-absolute bottom-0 start-50 translate-middle-x pb-3 text-white-50 small d-none d-md-block">' +
            '<i class="bi bi-chevron-double-down"></i> 向下滚动' +
            '</div></div></div>',
          hint: '真实项目中 min-vh-100 让这一屏撑满整个浏览器高度；这里是压缩版演示',
          tip: 'Hero 文案公式：<b>一句话说清"你是谁 + 客户能得到什么"</b>，别写"欢迎光临本网站"这种废话。'
        },
        {
          id: '8.3.2',
          t: '制作第 2 屏',
          d: '第 2 屏做"公司介绍"：左边一段品牌故事（<code>.lead</code> + 正文），右边用栅格排 4 个"数据指标"（500+ 客户、10 年经验、99.9% 可用性、7×24 支持）。数字要大、要加粗，一眼看到重点。',
          demo:
            '<div class="row g-4 align-items-center p-3 bg-white rounded-3 border">' +
            '<div class="col-lg-6">' +
            '<div class="d-flex align-items-center gap-2 text-primary small mb-2"><i class="bi bi-buildings"></i>关于我们</div>' +
            '<h4 class="fw-bold mb-3">十年深耕，只做一件事</h4>' +
            '<p class="lead small text-body-secondary">从 2016 年成立至今，我们陪伴 500 多家企业完成了数字化转型。</p>' +
            '<p class="small text-body-secondary mb-0">无论是刚起步的创业团队，还是需要整体上云的大型集团，我们都能提供匹配的方案。团队 60% 以上是工程师，我们把"技术靠谱"当成第一广告语。</p>' +
            '</div>' +
            '<div class="col-lg-6"><div class="row g-3 text-center">' +
            '<div class="col-6"><div class="border rounded-3 p-3"><div class="fs-3 fw-bold text-primary">500+</div><div class="small text-body-secondary">服务客户</div></div></div>' +
            '<div class="col-6"><div class="border rounded-3 p-3"><div class="fs-3 fw-bold text-primary">10 年</div><div class="small text-body-secondary">行业经验</div></div></div>' +
            '<div class="col-6"><div class="border rounded-3 p-3"><div class="fs-3 fw-bold text-primary">99.9%</div><div class="small text-body-secondary">服务可用性</div></div></div>' +
            '<div class="col-6"><div class="border rounded-3 p-3"><div class="fs-3 fw-bold text-primary">7×24</div><div class="small text-body-secondary">运维支持</div></div></div>' +
            '</div></div></div>',
          tip: '数据指标用 <code>fs-3 fw-bold</code> + 灰色小字标签，是"数字展示"的通用配方；数据要真实可核查，别编。'
        },
        {
          id: '8.3.3',
          t: '制作第 3 屏',
          d: '第 3 屏列"服务/产品"：栅格 + 卡片三连（<code>row g-4</code> + <code>col-md-4</code> + <code>card h-100</code>），每张卡配 Bootstrap 图标、标题、两行说明和一个箭头链接。想要"悬停浮起来"再加一点点自定义 CSS。',
          demo:
            '<div class="p-3 rounded-3" style="background:#f8fafc">' +
            '<div class="text-center mb-4"><div class="small text-primary mb-1"><i class="bi bi-grid me-1"></i>我们的服务</div>' +
            '<h4 class="fw-bold">三件事，做到极致</h4></div>' +
            '<div class="row g-4">' +
            '<div class="col-md-4"><div class="card h-100 border-0 shadow-sm">' +
            '<div class="card-body p-4">' +
            '<div class="rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style="width:48px;height:48px;background:#e8f1ff"><i class="bi bi-cloud-arrow-up fs-4 text-primary"></i></div>' +
            '<h6 class="fw-bold">云迁移</h6>' +
            '<p class="small text-body-secondary mb-3">把现有系统平滑搬到云上，业务不中断，成本可下降 30% 以上。</p>' +
            '<a href="#" class="small text-decoration-none">了解详情 <i class="bi bi-arrow-right"></i></a>' +
            '</div></div></div>' +
            '<div class="col-md-4"><div class="card h-100 border-0 shadow-sm">' +
            '<div class="card-body p-4">' +
            '<div class="rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style="width:48px;height:48px;background:#e9f9f0"><i class="bi bi-shield-check fs-4 text-success"></i></div>' +
            '<h6 class="fw-bold">安全加固</h6>' +
            '<p class="small text-body-secondary mb-3">等保咨询、渗透测试、数据加密，帮企业守住底线。</p>' +
            '<a href="#" class="small text-decoration-none">了解详情 <i class="bi bi-arrow-right"></i></a>' +
            '</div></div></div>' +
            '<div class="col-md-4"><div class="card h-100 border-0 shadow-sm">' +
            '<div class="card-body p-4">' +
            '<div class="rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style="width:48px;height:48px;background:#f2ecfe"><i class="bi bi-headset fs-4" style="color:#7c3aed"></i></div>' +
            '<h6 class="fw-bold">运维托管</h6>' +
            '<p class="small text-body-secondary mb-3">7×24 监控响应，让技术团队专注业务开发。</p>' +
            '<a href="#" class="small text-decoration-none">了解详情 <i class="bi bi-arrow-right"></i></a>' +
            '</div></div></div>' +
            '</div></div>',
          tip: '卡片图标用"浅色圆角方块 + 彩色图标"（48×48），这是现代官网最常见的装饰法；图标外的方块用什么颜色，记得和图标色同一色系。'
        },
        {
          id: '8.3.4',
          t: '制作第 4 屏',
          d: '第 4 屏"联系我们"：左边放联系方式清单（图标 + 文字），右边放一个简约表单（姓名、邮箱、留言、按钮），用栅格 <code>col-lg-5</code> / <code>col-lg-7</code> 分左右。地图在 8.4.1 补上。',
          demo:
            '<div class="row g-4 p-3 bg-white rounded-3 border">' +
            '<div class="col-lg-5">' +
            '<h5 class="fw-bold mb-3">联系我们</h5>' +
            '<div class="d-flex flex-column gap-3 small">' +
            '<div class="d-flex gap-3"><div class="davatar" style="width:42px;height:42px;font-size:.85rem"><i class="bi bi-telephone"></i></div><div><strong>电话咨询</strong><br><span class="text-body-secondary">400-000-0000（工作日 9:00-18:00）</span></div></div>' +
            '<div class="d-flex gap-3"><div class="davatar" style="width:42px;height:42px;font-size:.85rem"><i class="bi bi-envelope"></i></div><div><strong>商务邮箱</strong><br><span class="text-body-secondary">sales@yunqi.example</span></div></div>' +
            '<div class="d-flex gap-3"><div class="davatar" style="width:42px;height:42px;font-size:.85rem"><i class="bi bi-geo-alt"></i></div><div><strong>公司地址</strong><br><span class="text-body-secondary">武汉市光谷大道 88 号 3 号楼</span></div></div>' +
            '</div></div>' +
            '<div class="col-lg-7">' +
            '<form class="row g-3" id="c8Form" novalidate>' +
            '<div class="col-md-6"><label class="form-label small" for="c8Name">您的称呼</label>' +
            '<input type="text" class="form-control" id="c8Name" placeholder="怎么称呼您" required><div class="invalid-feedback">请填写称呼。</div></div>' +
            '<div class="col-md-6"><label class="form-label small" for="c8Mail">联系邮箱</label>' +
            '<input type="email" class="form-control" id="c8Mail" placeholder="name@example.com" required><div class="invalid-feedback">邮箱格式不对。</div></div>' +
            '<div class="col-12"><label class="form-label small" for="c8Msg">需求描述</label>' +
            '<textarea class="form-control" id="c8Msg" rows="3" placeholder="简单说说您的需求，例如：想把 20 台服务器迁移上云"></textarea></div>' +
            '<div class="col-12"><button type="submit" class="btn btn-primary px-4">提交需求</button>' +
            '<span class="small text-success ms-3 d-none" id="c8Ok"><i class="bi bi-check-circle me-1"></i>已收到，我们会尽快联系您！</span></div>' +
            '</form></div></div>',
      js:
        "var f8 = stage.querySelector('#c8Form');\n" +
        "f8.addEventListener('submit', function (e) {\n" +
        "  e.preventDefault(); e.stopPropagation();\n" +
        "  if (f8.checkValidity()) { stage.querySelector('#c8Ok').classList.remove('d-none'); }\n" +
        "  else { f8.classList.add('was-validated'); stage.querySelector('#c8Ok').classList.add('d-none'); }\n" +
        "});",
      tip: '表单是"转化入口"：字段越少越好（姓名 + 邮箱 + 一句话需求就够了），按钮文字用动词（"提交需求"好过"发送"）。'
    }
  ]},
    {
      id: '8.4',
      t: '完善网站功能',
      group: true,
      d: '四件"收官"工作：地图、导航条、页脚、滚动监听——做完这些，网站才真的像个能上线的站。',
      children: [
        {
          id: '8.4.1',
          t: '添加地图',
          d: '地图不是"画"出来的，是用 <code>&lt;iframe&gt;</code> 把地图服务"嵌"进来的。以高德/百度地图为例：在官网找到"分享 → 嵌入地图"，复制 iframe 代码；外面套一个 <code>.ratio</code> 容器保证比例，再加 <code>rounded</code> 融入设计。',
          demo:
            '<div class="ratio ratio-16x9 rounded-3 overflow-hidden border" style="max-width:560px">' +
            '<div class="d-flex flex-column align-items-center justify-content-center" style="background:linear-gradient(135deg,#eef4ff,#e7f0fe);color:#2b6ed9">' +
            '<i class="bi bi-geo-alt-fill" style="font-size:2.4rem"></i>' +
            '<div class="fw-semibold mt-2">地图区域（示例占位）</div>' +
            '<div class="small text-body-secondary mt-1">真实项目里这里嵌一个 &lt;iframe&gt; 地图</div>' +
            '</div></div>',
          code:
            '<!-- 外层用 ratio 锁比例，里面放地图 iframe -->\n' +
            '<div class="ratio ratio-16x9 rounded-3 overflow-hidden">\n' +
            '  <iframe\n' +
            '    src="https://www.openstreetmap.org/export/embed.html?bbox=114.35,30.48,114.43,30.53"\n' +
            '    style="border:0"\n' +
            '    loading="lazy"\n' +
            '    referrerpolicy="no-referrer-when-downgrade"\n' +
            '    title="公司位置地图">\n' +
            '  </iframe>\n' +
            '</div>',
          tip: '<b>两个提醒：</b>① 国内商用项目建议用高德/百度/腾讯地图的官方嵌入，注意遵守它们的服务条款；② iframe 加 <code>loading="lazy"</code> 让地图"滚到附近才加载"，首页速度更快。'
        },
        {
          id: '8.4.2',
          t: '添加导航条',
          d: '给整页配导航条：<code>fixed-top</code> 固定在顶部，链接用"锚点"跳转到各屏（href="#about"）。滚动监听要认得这些链接，所以链接的 href 必须和各 section 的 id 一一对应。深色半透明背景 + 模糊效果更现代。',
          demo:
            '<nav class="navbar navbar-expand navbar-dark px-3 rounded-3" id="demo84Nav" style="background:rgba(15,23,42,.92)">' +
            '<span class="navbar-brand fw-bold small">云启科技</span>' +
            '<ul class="navbar-nav ms-auto small">' +
            '<li class="nav-item"><a class="nav-link active" href="#home">首页</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#about">关于</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#services">服务</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#contact">联系</a></li>' +
            '</ul>' +
            '<a href="#contact" class="btn btn-sm btn-primary ms-3">免费咨询</a>' +
            '</nav>' +
            '<p class="small text-body-secondary mt-2 mb-0">导航链接用的都是锚点（#about、#services…），点击会"滚"到对应 section——这正是滚动监听识别"当前在哪一屏"的依据。</p>',
          tip: 'fixed-top 导航条会盖住第 1 屏顶部：给 body 加 <code style="color:#6d43b0">padding-top: 56px</code>（或给第一屏加相应内边距）。这几乎是每个人都会踩的坑。'
        },
        {
          id: '8.4.3',
          t: '设置页脚',
          d: '页脚三件套：品牌区（logo + 一句话）、栏目链接（分两列）、版权行。整体用 <code>bg-dark + data-bs-theme="dark"</code> 深色收尾，链接用浅灰、悬停变白。',
          demo:
            '<footer class="p-4 rounded-3 text-white-50 small" style="background:#0f172a">' +
            '<div class="row g-4">' +
            '<div class="col-md-5">' +
            '<div class="text-white fw-bold mb-2"><i class="bi bi-building-gear me-1"></i>云启科技</div>' +
            '<p class="mb-3" style="max-width:280px">让企业上云更简单。十年深耕云计算服务，500+ 客户的共同选择。</p>' +
            '<div class="d-flex gap-3 fs-5"><i class="bi bi-wechat"></i><i class="bi bi-sina-weibo"></i><i class="bi bi-github"></i></div>' +
            '</div>' +
            '<div class="col-6 col-md-3"><div class="text-white fw-semibold mb-2 small">产品</div>' +
            '<div class="d-flex flex-column gap-1"><a href="#" class="link-light text-decoration-none small text-white-50">云迁移</a><a href="#" class="link-light text-decoration-none small text-white-50">安全加固</a><a href="#" class="link-light text-decoration-none small text-white-50">运维托管</a></div></div>' +
            '<div class="col-6 col-md-4"><div class="text-white fw-semibold mb-2 small">公司</div>' +
            '<div class="d-flex flex-column gap-1"><a href="#" class="link-light text-decoration-none small text-white-50">关于我们</a><a href="#" class="link-light text-decoration-none small text-white-50">加入我们</a><a href="#" class="link-light text-decoration-none small text-white-50">联系方式</a></div></div>' +
            '</div>' +
            '<hr style="border-color:rgba(255,255,255,.15)">' +
            '<div class="d-flex flex-wrap justify-content-between gap-2 small">' +
            '<span>© 2026 云启科技（示例）· 鄂 ICP 备 00000000 号</span>' +
            '<span><a href="#" class="text-white-50 text-decoration-none">隐私政策</a> · <a href="#" class="text-white-50 text-decoration-none">服务条款</a></span>' +
            '</div></footer>',
          tip: '页脚别堆太多东西：品牌一句话 + 两组链接 + 版权/备案，其余都收进二级页。备案号在国内是硬性要求，真实项目别忘了。'
        },
        {
          id: '8.4.4',
          t: '设置滚动监听',
          d: '最后一步：让导航条"知道自己在哪一屏"。给 <code>body</code> 加 <code>data-bs-spy="scroll" data-bs-target="#mainNav" tabindex="0"</code>（本页示例是容器版），滚动时导航条对应项自动高亮——单页官网的灵魂功能，也是第 7 章滚动监听的实际应用。',
          demo:
            '<div class="alert alert-secondary small mb-0 py-2">' +
            '<i class="bi bi-lightbulb me-1"></i>滚动监听其实在 7.12 已经完整学过。这里的关键只是"把 spy 挂在 body 上 + target 指向导航条"，然后在页面底部（或导航条里）随时能看到高亮跟随滚动。' +
            '</div>',
          code:
            '<!-- 整页滚动监听的标准写法 -->\n' +
            '<body data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-root-margin="0px 0px -40%" tabindex="0">\n' +
            '\n' +
            '  <nav id="mainNav" class="navbar navbar-expand-lg fixed-top">\n' +
            '    <ul class="navbar-nav">\n' +
            '      <li class="nav-item"><a class="nav-link" href="#home">首页</a></li>\n' +
            '      <li class="nav-item"><a class="nav-link" href="#about">关于</a></li>\n' +
            '      <li class="nav-item"><a class="nav-link" href="#services">服务</a></li>\n' +
            '      <li class="nav-item"><a class="nav-link" href="#contact">联系</a></li>\n' +
            '    </ul>\n' +
            '  </nav>\n' +
            '\n' +
            '  <header id="home">…</header>\n' +
            '  <section id="about">…</section>\n' +
            '  <section id="services">…</section>\n' +
            '  <section id="contact">…</section>\n' +
            '</body>',
          hint: '规律：nav 链接的 href、section 的 id、spy 的 target——三处 id 必须严丝合缝',
          tip: '实际开发中，很多单页站用 CSS <code>scroll-behavior: smooth</code> 一句开启平滑滚动（本手册页面就开了），比装插件更轻。'
        }
      ]
    }
  ],
  summary: [
    '单页官网六件套：导航条 → 第 1 屏 Hero → 介绍屏 → 服务屏 → 联系屏 → 页脚，每屏一个 section + 一个 id。',
    'Hero = min-vh-100 + flex 居中 + 渐变背景 + 大标题 + 两个按钮；文案公式：你是谁 + 客户得到什么。',
    '数据展示用 fs-3 fw-bold + 灰色小字；服务卡用 row g-4 + col-md-4 + card h-100 + 图标圆角方块。',
    '地图 = 地图服务商嵌入代码 + ratio 比例容器 + loading="lazy"；导航条 fixed-top 记得给 body 留出 padding-top。',
    '页脚：品牌区 + 两组链接 + 版权/备案；深色收尾用 bg-dark + data-bs-theme="dark"。',
    '滚动监听挂在 body 上（或滚动容器），target 指向导航条，三处 id（href / section id / target）必须一一对应。'
  ],
  practice: {
    t: '实训项目：制作一个商业网站',
    d: '把整个第 8 章串起来，做一个属于你自己的单页商业网站（可以是虚构产品），要求包含：响应式导航条（含滚动监听）、Hero、三个内容屏、页脚，并尝试替换配色与文案。',
    steps: [
      '确定主题与配色：先定一个主色（改 btn-primary 里的颜色或直接用 text-bg-* 色系）。',
      '写六块骨架（nav / header / 3 个 section / footer），每块先用 dbox 占位，把结构跑通。',
      '逐屏替换成真实内容：Hero 文案、数据指标、三张服务卡、联系表单。',
      '加上 fixed-top 导航 + body padding-top + 滚动监听三件套，检查高亮是否跟随。',
      '最后做"响应式检查"：把窗口从全屏缩到手机宽度，逐屏看有没有"挤爆"的元素，优先修栅格断点。'
    ],
    demo:
      '<div class="border rounded-3 overflow-hidden bg-white" style="max-width:700px">' +
      '<div class="demo-scroll" id="finalSite" style="max-height:460px;position:relative" tabindex="0">' +
      '<nav class="navbar sticky-top px-3 py-2" id="finalNav" data-bs-theme="dark" style="background:rgba(15,23,42,.94)">' +
      '<span class="navbar-brand fw-bold small mb-0">云启科技</span>' +
      '<ul class="navbar-nav flex-row ms-auto gap-3 small">' +
      '<li class="nav-item"><a class="nav-link py-1" href="#finalS1">首页</a></li>' +
      '<li class="nav-item"><a class="nav-link py-1" href="#finalS2">关于</a></li>' +
      '<li class="nav-item"><a class="nav-link py-1" href="#finalS3">服务</a></li>' +
      '</ul>' +
      '<button class="btn btn-sm btn-primary ms-3" type="button" data-bs-toggle="modal" data-bs-target="#finalModal">咨询</button>' +
      '</nav>' +
      '<div id="finalS1" class="text-white p-4 p-md-5" style="background:linear-gradient(130deg,#0f172a,#1e3a8a 70%,#3b82f6)">' +
      '<span class="badge text-bg-light mb-2">企业云服务</span>' +
      '<h4 class="fw-bold mb-2">让企业上云更简单</h4>' +
      '<p class="small mb-3" style="opacity:.8;max-width:380px">云迁移 · 安全加固 · 运维托管，500+ 企业的共同选择。</p>' +
      '<button class="btn btn-primary btn-sm me-2">免费咨询</button><button class="btn btn-outline-light btn-sm">查看服务</button>' +
      '</div>' +
      '<div id="finalS2" class="p-4">' +
      '<div class="row g-4 align-items-center"><div class="col-md-6">' +
      '<h5 class="fw-bold mb-2">十年深耕，只做一件事</h5>' +
      '<p class="small text-body-secondary mb-0">从 2016 年至今，我们陪伴 500 多家企业完成数字化转型，团队 60% 以上是工程师。</p></div>' +
      '<div class="col-md-6"><div class="row g-2 text-center small">' +
      '<div class="col-6"><div class="border rounded-3 p-2"><div class="fs-5 fw-bold text-primary">500+</div>服务客户</div></div>' +
      '<div class="col-6"><div class="border rounded-3 p-2"><div class="fs-5 fw-bold text-primary">99.9%</div>可用性</div></div>' +
      '</div></div></div></div>' +
      '<div id="finalS3" class="p-4 bg-body-tertiary">' +
      '<h6 class="fw-bold mb-3 text-center">我们的服务</h6>' +
      '<div class="row g-3">' +
      '<div class="col-md-4"><div class="card h-100 border-0 shadow-sm"><div class="card-body p-3 text-center"><i class="bi bi-cloud-arrow-up fs-3 text-primary"></i><div class="fw-semibold small mt-2">云迁移</div><div class="text-body-secondary" style="font-size:.75rem">业务不中断</div></div></div></div>' +
      '<div class="col-md-4"><div class="card h-100 border-0 shadow-sm"><div class="card-body p-3 text-center"><i class="bi bi-shield-check fs-3 text-success"></i><div class="fw-semibold small mt-2">安全加固</div><div class="text-body-secondary" style="font-size:.75rem">守住安全底线</div></div></div></div>' +
      '<div class="col-md-4"><div class="card h-100 border-0 shadow-sm"><div class="card-body p-3 text-center"><i class="bi bi-headset fs-3" style="color:#7c3aed"></i><div class="fw-semibold small mt-2">运维托管</div><div class="text-body-secondary" style="font-size:.75rem">7×24 响应</div></div></div></div>' +
      '</div></div>' +
      '<footer class="p-4 text-white-50 small" style="background:#0f172a">' +
      '<div class="d-flex flex-wrap justify-content-between gap-2"><span>© 2026 云启科技（示例）</span><span>隐私政策 · 服务条款</span></div>' +
      '</footer>' +
      '</div>' +
      '<div class="text-center small text-body-secondary bg-white border-top py-2">' +
      '<i class="bi bi-hand-index-thumb me-1"></i>在这个框里上下滚动：导航条的"首页 / 关于 / 服务"会自动高亮（滚动监听）' +
      '</div>' +
      '</div>' +
      '<div class="modal fade" id="finalModal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
      '<div class="modal-header"><h6 class="modal-title">免费咨询</h6><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button></div>' +
      '<div class="modal-body small">留下联系方式，我们的解决方案顾问会在 1 个工作日内联系你。</div>' +
      '<div class="modal-footer"><button class="btn btn-sm btn-primary" data-bs-dismiss="modal">好的</button></div></div></div></div>',
    js:
      "var site = stage.querySelector('#finalSite');\n" +
      "bootstrap.ScrollSpy.getOrCreateInstance(site, {\n" +
      "  target: '#finalNav',\n" +
      "  rootMargin: '0px 0px -65% 0px',\n" +
      "  smoothScroll: true\n" +
      "});"
  }
});
