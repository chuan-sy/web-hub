/* ============================================================
   第 5 章 表单
   ============================================================ */
window.BS_DATA.push({
  id: 'ch5',
  num: '第 5 章',
  title: '表单',
  accent: '#db2777',
  accentSoft: '#fdeef6',
  icon: 'bi-ui-checks',
  intro: '登录、注册、搜索、下单——只要用户要"填东西"，就是表单的活。Bootstrap 把表单控件、布局、验证都做成了现成的，这一章学完，你能独立做出一个漂亮又规范的注册页面。',
  goals: [
    '会做三种表单布局：垂直、水平、内联',
    '掌握输入框 / 下拉框 / 文本域 / 单选复选的写法',
    '会做禁用态、大小调整、浮动标签',
    '能配上表单验证，提示"哪里填错了"',
    '会用输入框组把文字、按钮"拼"进输入框'
  ],
  docs: [
    { t: '官方表单文档', u: 'https://getbootstrap.com/docs/5.3/forms/overview/' },
    { t: '表单布局 Layout', u: 'https://getbootstrap.com/docs/5.3/forms/layout/' },
    { t: '表单验证 Validation', u: 'https://getbootstrap.com/docs/5.3/forms/validation/' },
    { t: '输入框组 Input group', u: 'https://getbootstrap.com/docs/5.3/forms/input-group/' }
  ],
  sections: [
    {
      id: '5.1',
      t: '表单布局',
      group: true,
      d: '同一套控件，三种摆法：垂直（手机默认）、水平（标签在左）、内联（一行摆完，适合搜索框）。',
      children: [
        {
          id: '5.1.1',
          t: '垂直表单',
          d: '最基础也最常用：每个字段由 <code>label.form-label</code> + <code>input.form-control</code> 组成，外层用 <code>.mb-3</code> 隔开。label 的 <code>for</code> 属性对应 input 的 <code>id</code>——点文字也能聚焦输入框，无障碍的硬要求。',
          demo:
            '<div style="max-width:420px">' +
            '<div class="mb-3"><label for="f511Name" class="form-label">姓名</label>' +
            '<input type="text" class="form-control" id="f511Name" placeholder="请输入姓名"></div>' +
            '<div class="mb-3"><label for="f511Email" class="form-label">邮箱地址</label>' +
            '<input type="email" class="form-control" id="f511Email" placeholder="name@example.com">' +
            '<div class="form-text">我们不会公开你的邮箱。</div></div>' +
            '<button type="button" class="btn btn-primary">提交</button>' +
            '</div>',
          tip: 'id 必须全局唯一；<code>form-text</code> 是输入框下方的灰色小提示，不是校验信息（校验用 invalid-feedback）。'
        },
        {
          id: '5.1.2',
          t: '水平表单',
          d: '把每一行写成 <code>row g-3</code>：标签占一列（加 <code>col-form-label</code> 让它垂直居中），输入框占其余列。小屏幕上标签自动"跳"到输入框上方，天然响应式。',
          demo:
            '<div style="max-width:560px">' +
            '<div class="row g-3 mb-3"><label for="f512User" class="col-sm-3 col-form-label">用户名</label>' +
            '<div class="col-sm-9"><input type="text" class="form-control" id="f512User"></div></div>' +
            '<div class="row g-3 mb-3"><label for="f512Pwd" class="col-sm-3 col-form-label">密码</label>' +
            '<div class="col-sm-9"><input type="password" class="form-control" id="f512Pwd" placeholder="至少 8 位"></div></div>' +
            '<div class="row g-3 mb-3"><label class="col-sm-3 col-form-label">性别</label>' +
            '<div class="col-sm-9 d-flex align-items-center gap-3" style="min-height:38px"><div class="form-check"><input class="form-check-input" type="radio" name="f512Sex" id="f512Sex1" checked><label class="form-check-label" for="f512Sex1">男</label></div>' +
            '<div class="form-check"><input class="form-check-input" type="radio" name="f512Sex" id="f512Sex2"><label class="form-check-label" for="f512Sex2">女</label></div></div></div>' +
            '<div class="row g-3"><div class="col-sm-9 offset-sm-3"><button type="button" class="btn btn-primary">保存</button></div></div>' +
            '</div>',
          hint: '把预览区拉窄：标签会自动换到输入框上方（这就是 col-sm-* 的功劳）',
          tip: '关键类就一个：<code>col-form-label</code>。忘了它，标签会和输入框"上下错位"。'
        },
        {
          id: '5.1.3',
          t: '内联表单',
          d: '一行摆完所有控件，适合搜索、筛选这类"轻量输入"。5.x 里没有 form-inline 了，改用 <code>row g-3 align-items-center</code> 或 <code>d-flex</code> 组合。给输入框套 <code>col-auto</code> 可以让宽度随内容。',
          demo:
            '<div class="row g-2 align-items-center mb-3">' +
            '<div class="col-auto"><label for="f513Key" class="visually-hidden">关键词</label>' +
            '<input type="text" class="form-control" id="f513Key" placeholder="搜索关键词"></div>' +
            '<div class="col-auto"><label for="f513Type" class="visually-hidden">类型</label>' +
            '<select class="form-select" id="f513Type"><option>全部类型</option><option>教程</option><option>视频</option></select></div>' +
            '<div class="col-auto"><div class="form-check"><input class="form-check-input" type="checkbox" id="f513New">' +
            '<label class="form-check-label" for="f513New">只要最新</label></div></div>' +
            '<div class="col-auto"><button type="button" class="btn btn-primary">搜索</button></div>' +
            '</div>' +
            '<div class="small text-body-secondary">上面这行：输入框 + 下拉框 + 勾选框 + 按钮，全部在同一行。</div>',
          tip: '当内联元素太多挤不下时，记得换成 row g-3 让它能换行——硬挤在一行会很难看。'
        }
      ]
    },
    {
      id: '5.2',
      t: '表单控件',
      group: true,
      d: '输入框、下拉框、文本域、单选框复选——各就各位。',
      children: [
        {
          id: '5.2.1',
          cmp: [
            {
              label: '一个输入框的"成本对照"',
              native: '<!-- 原生：状态样式全手写 -->\n<input type="email" class="van-input" placeholder="name@example.com">\n\n.van-input { width: 100%; padding: 8px 12px;\n  border: 1px solid #c3cbd8; border-radius: 6px; }\n.van-input:focus { outline: none; border-color: #86b7fe;\n  box-shadow: 0 0 0 4px rgba(13,110,253,.2); }',
              bs: '<label class="form-label" for="uxe">邮箱</label>\n<input type="email" class="form-control" id="uxe"\n       placeholder="name@example.com">\n\n<!-- 焦点光晕、禁用态、尺寸档、校验样式全自带 -->',
              note: 'form-control 的本质 = 一段写全了所有状态的 CSS，封装成了一个类名。'
            }
          ],
          t: '输入框',
          d: '所有 <code>&lt;input&gt;</code> 加 <code>.form-control</code> 统一样式，type 决定键盘与校验行为（text、email、password、number、date、color、file 等）。只读用 <code>readonly</code>；"看起来像纯文字"的只读样式用 <code>.form-control-plaintext</code>。',
          demo:
            '<div style="max-width:430px">' +
            '<div class="mb-3"><label for="f521Email" class="form-label">邮箱（type=email）</label><input type="email" class="form-control" id="f521Email" placeholder="name@example.com"></div>' +
            '<div class="mb-3"><label for="f521Pwd" class="form-label">密码（type=password）</label><input type="password" class="form-control" id="f521Pwd" value="123456"></div>' +
            '<div class="mb-3"><label for="f521Date" class="form-label">日期（type=date）</label><input type="date" class="form-control" id="f521Date"></div>' +
            '<div class="mb-3"><label for="f521Num" class="form-label">数量（type=number）</label><input type="number" class="form-control" id="f521Num" value="3" min="1" max="10"></div>' +
            '<div class="mb-3"><label for="f521Color" class="form-label">颜色（type=color）</label><input type="color" class="form-control form-control-color" id="f521Color" value="#7952b3"></div>' +
            '<div class="mb-3"><label for="f521File" class="form-label">文件（type=file）</label><input type="file" class="form-control" id="f521File"></div>' +
            '<div><label for="f521Ro" class="form-label">只读 + 纯文字样式</label>' +
            '<input type="text" readonly class="form-control-plaintext" id="f521Ro" value="只读内容（像普通文字，能选中）"></div>' +
            '</div>',
          tip: '新版浏览器会给 email、date 这些类型加"原生小图标"和键盘优化，手机上 type="number" 会自动弹数字键盘——用对 type，体验翻倍。'
        },
        {
          id: '5.2.2',
          t: '下拉框',
          d: '下拉选择用 <code>&lt;select class="form-select"&gt;</code>（注意不是 form-control）。多选用 <code>multiple</code> 属性；"占位选项"给第一项加 selected + disabled 即可。',
          demo:
            '<div style="max-width:430px">' +
            '<div class="mb-3"><label for="f522City" class="form-label">所在城市</label>' +
            '<select class="form-select" id="f522City">' +
            '<option selected disabled>请选择城市…</option>' +
            '<option>北京</option><option>上海</option><option>广州</option><option>武汉</option>' +
            '</select></div>' +
            '<div class="mb-3"><label for="f522Size" class="form-label">尺寸（size=4 直接摊开）</label>' +
            '<select class="form-select" id="f522Size" size="4"><option>选项一</option><option>选项二</option><option>选项三</option><option>选项四</option></select></div>' +
            '<div><label for="f522Multi" class="form-label">多选（按住 Ctrl 多选）</label>' +
            '<select class="form-select" id="f522Multi" multiple style="height:110px"><option selected>HTML</option><option>CSS</option><option selected>Bootstrap</option><option>JavaScript</option></select></div>' +
            '</div>',
          tip: '记忆点：<b>输入框是 form-control，下拉框是 form-select</b>。给 select 加 form-control 不生效——这是超高频错误。'
        },
        {
          id: '5.2.3',
          t: '文本域',
          d: '多行文本用 <code>&lt;textarea class="form-control"&gt;</code>，行数用 <code>rows</code> 属性控制。想禁止用户拖拽调整大小，加 CSS <code>resize:none</code>（Bootstrap 没提供对应类）。',
          demo:
            '<div style="max-width:430px">' +
            '<div class="mb-3"><label for="f523Msg" class="form-label">留言（rows=4）</label>' +
            '<textarea class="form-control" id="f523Msg" rows="4" placeholder="说点什么吧…"></textarea></div>' +
            '<div><label for="f523Msg2" class="form-label">禁用拖动（resize:none）</label>' +
            '<textarea class="form-control" id="f523Msg2" rows="2" style="resize:none" placeholder="这个文本域不能拖大"></textarea></div>' +
            '</div>',
          tip: 'textarea 不是自闭合标签，写完整：<code>&lt;textarea&gt;内容&lt;/textarea&gt;</code>。'
        },
        {
          id: '5.2.4',
          t: '单选按钮和复选框',
          d: '每条选项用 <code>.form-check</code> 包住：input 加 <code>.form-check-input</code>，label 加 <code>.form-check-label</code>。<b>单选（radio）</b>同一组要共用一个 name；<b>复选（checkbox）</b>各选各的。横排用 <code>.form-check-inline</code>；做成"开关"样式用 <code>.form-switch</code>。',
          demo:
            '<div style="max-width:460px">' +
            '<div class="mb-3"><div class="form-label">复选框（可多选）</div>' +
            '<div class="form-check"><input class="form-check-input" type="checkbox" id="f524C1" checked><label class="form-check-label" for="f524C1">订阅课程更新</label></div>' +
            '<div class="form-check"><input class="form-check-input" type="checkbox" id="f524C2"><label class="form-check-label" for="f524C2">接收活动通知</label></div>' +
            '<div class="form-check"><input class="form-check-input" type="checkbox" id="f524C3" disabled><label class="form-check-label" for="f524C3">已停用的选项</label></div>' +
            '</div>' +
            '<div class="mb-3"><div class="form-label">单选按钮（一组选一个）</div>' +
            '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="f524Plan" id="f524P1" checked><label class="form-check-label" for="f524P1">月付</label></div>' +
            '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="f524Plan" id="f524P2"><label class="form-check-label" for="f524P2">年付</label></div>' +
            '</div>' +
            '<div><div class="form-label">开关（form-switch）</div>' +
            '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="f524Sw" checked><label class="form-check-label" for="f524Sw">开启消息推送</label></div>' +
            '</div>' +
            '</div>',
          tip: '单选的 name 必须相同（如都叫 plan），否则三个都能选中——这是单选按钮的第一考点。'
        }
      ]
    },
    {
      id: '5.3',
      t: '表单禁用',
      d: '单个控件加 <code>disabled</code> 属性即可。要禁用<b>一整组</b>，把 disabled 加在 <code>&lt;fieldset&gt;</code> 上——里面所有控件全部失效，但 fieldset 里的链接不失效，可以再加 <code>pointer-events: none</code> 兜底。禁用态不仅能防误填，还能防止表单被提交。',
      demo:
        '<div style="max-width:460px">' +
        '<input type="text" class="form-control mb-2" placeholder="正常输入框">' +
        '<input type="text" class="form-control mb-3" placeholder="禁用输入框" disabled>' +
        '<fieldset disabled>' +
        '<legend class="small text-body-secondary">整组被禁用（fieldset disabled）</legend>' +
        '<div class="mb-2"><label for="f53A" class="form-label small">收货人</label><input type="text" class="form-control" id="f53A" value="张三"></div>' +
        '<div class="mb-2"><select class="form-select" aria-label="禁用下拉框"><option>北京</option></select></div>' +
        '<div class="text-end"><button type="button" class="btn btn-primary btn-sm">提交（点不动）</button></div>' +
        '</fieldset>' +
        '</div>',
      tip: '小知识：禁用字段不会随表单提交（也没法用 Tab 聚焦）。如果只是"不想让用户改、但仍要提交"，要用 <code>readonly</code> 而不是 disabled。'
    },
    {
      id: '5.4',
      t: '表单控件和标签的大小',
      d: '输入框与下拉框的尺寸用 <code>.form-control-sm / .form-control-lg</code>、<code>.form-select-sm / .form-select-lg</code>；标签尺寸同步用 <code>.col-form-label-sm / .col-form-label-lg</code>。水平表单里标签和输入框的尺寸要"配对"才不会错位。',
      demo:
        '<div style="max-width:430px">' +
        '<input type="text" class="form-control form-control-lg mb-2" placeholder="form-control-lg 大号">' +
        '<input type="text" class="form-control mb-2" placeholder="默认尺寸">' +
        '<input type="text" class="form-control form-control-sm mb-3" placeholder="form-control-sm 小号">' +
        '<div class="row g-3 align-items-center mb-2"><label for="f54A" class="col-auto col-form-label col-form-label-lg">大标签</label>' +
        '<div class="col-auto"><input type="text" class="form-control form-control-lg" id="f54A"></div></div>' +
        '<div class="row g-3 align-items-center"><label for="f54B" class="col-auto col-form-label col-form-label-sm">小标签</label>' +
        '<div class="col-auto"><input type="text" class="form-control form-control-sm" id="f54B"></div></div>' +
        '</div>',
      tip: '什么时候用小号？工具栏里的紧凑输入框、表格行内编辑。什么时候用大号？登录页、营销页的"主角输入框"。'
    },
    {
      id: '5.5',
      t: '浮动标签',
      d: '5.x 的明星特性：把 label 放进 <code>.form-floating</code> 容器里、放在 input <b>后面</b>，标签会"浮"在输入框里，聚焦或已填内容时自动缩小上移。注意 input 必须有 <code>placeholder</code>（哪怕空字符串也行），否则动画区没有高度、会错位。',
      demo:
        '<div style="max-width:430px">' +
        '<div class="form-floating mb-3">' +
        '<input type="email" class="form-control" id="f55Email" placeholder="name@example.com">' +
        '<label for="f55Email">邮箱地址</label></div>' +
        '<div class="form-floating mb-3">' +
        '<input type="password" class="form-control" id="f55Pwd" placeholder="密码">' +
        '<label for="f55Pwd">密码</label></div>' +
        '<div class="form-floating mb-3">' +
        '<select class="form-select" id="f55Sel"><option selected>请选择城市</option><option>北京</option><option>上海</option></select>' +
        '<label for="f55Sel">城市</label></div>' +
        '<div class="form-floating">' +
        '<textarea class="form-control" id="f55Area" style="height:100px" placeholder="留言"></textarea>' +
        '<label for="f55Area">留言</label></div>' +
        '</div>',
      hint: '点进任意输入框看看：标签会缩小并"浮"上去',
      tip: '<b>三条规则记牢：</b>① label 写在 input 后面；② input 必须有 placeholder；③ 输入框不要再加 mb-3，间距加在 form-floating 上。'
    },
    {
      id: '5.6',
      t: '表单验证',
      d: 'Bootstrap 的验证是"视觉层"：错误提示文字用 <code>.invalid-feedback</code>，控件加 <code>.is-invalid</code> 变红（服务端返回时用）；给 form 加 <code>.was-validated</code>（通常由 JS 在提交时添加）就能一次性显示所有错误。<b>真正拦提交靠浏览器原生属性</b>（required、pattern、type 等）。',
      demo:
        '<div style="max-width:460px">' +
        '<form class="row g-3" novalidate>' +
        '<div class="col-12"><label for="f56User" class="form-label">用户名（必填）</label>' +
        '<div class="input-group has-validation">' +
        '<span class="input-group-text">@</span>' +
        '<input type="text" class="form-control" id="f56User" required>' +
        '<div class="invalid-feedback">用户名不能为空。</div>' +
        '</div></div>' +
        '<div class="col-12"><label for="f56Email" class="form-label">邮箱（格式校验）</label>' +
        '<input type="email" class="form-control" id="f56Email" required>' +
        '<div class="invalid-feedback">请输入正确的邮箱格式（如 name@example.com）。</div>' +
        '</div>' +
        '<div class="col-12"><label for="f56City" class="form-label">城市（必选）</label>' +
        '<select class="form-select" id="f56City" required><option selected disabled value="">请选择…</option><option>北京</option><option>上海</option></select>' +
        '<div class="invalid-feedback">请选择一个城市。</div>' +
        '</div>' +
        '<div class="col-12"><div class="form-check"><input class="form-check-input" type="checkbox" id="f56Agree" required>' +
        '<label class="form-check-label" for="f56Agree">同意用户协议</label>' +
        '<div class="invalid-feedback">必须先同意协议才能继续。</div></div></div>' +
        '<div class="col-12"><button class="btn btn-primary" type="submit">提交表单</button>' +
        '<span class="demo-result d-none ms-3 text-success small"><i class="bi bi-check-circle"></i> 校验通过，可以提交了！</span></div>' +
        '</form></div>',
      js:
        "var f = stage.querySelector('form');\n" +
        "f.addEventListener('submit', function (e) {\n" +
        "  e.preventDefault();\n" +
        "  e.stopPropagation();\n" +
        "  if (f.checkValidity()) {\n" +
        "    stage.querySelector('.demo-result').classList.remove('d-none');\n" +
        "  } else {\n" +
        "    f.classList.add('was-validated');\n" +
        "    stage.querySelector('.demo-result').classList.add('d-none');\n" +
        "  }\n" +
        "});",
      hint: '直接点"提交表单"试试：空着提交会出现红框和提示；填全了会显示成功信息',
      tip: '代码里的三件套：① form 加 <code>novalidate</code>（关掉浏览器默认气泡，改用 Bootstrap 样式）；② 控件加 <code>required</code> 等原生校验属性；③ JS 里用 <code>checkValidity()</code> 判断 + 手动加 <code>was-validated</code> 类。'
    },
    {
      id: '5.7',
      t: '输入框组',
      d: '需要把"文字/按钮/下拉"和输入框拼成一体时，用 <code>.input-group</code> 包裹：说明文字用 <code>.input-group-text</code>，按钮直接放 <code>.btn</code>。还能配尺寸类（input-group-sm/lg）。验证场景记得加 <code>.has-validation</code>，提示文字才不会错位。',
      demo:
        '<div style="max-width:430px">' +
        '<div class="input-group mb-3"><span class="input-group-text">@</span><input type="text" class="form-control" placeholder="用户名" aria-label="用户名"></div>' +
        '<div class="input-group mb-3"><span class="input-group-text">￥</span><input type="number" class="form-control" placeholder="金额" aria-label="金额"><span class="input-group-text">.00</span></div>' +
        '<div class="input-group mb-3"><input type="text" class="form-control" placeholder="输入关键词" aria-label="搜索关键词"><button class="btn btn-primary" type="button"><i class="bi bi-search"></i> 搜索</button></div>' +
        '<div class="input-group input-group-sm mb-3">' +
        '<span class="input-group-text">https://</span><input type="text" class="form-control" value="getbootstrap.com"><span class="input-group-text">.cn</span></div>' +
        '<div class="input-group">' +
        '<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">分类</button>' +
        '<ul class="dropdown-menu"><li><a class="dropdown-item" href="#">教程</a></li><li><a class="dropdown-item" href="#">案例</a></li></ul>' +
        '<input type="text" class="form-control" placeholder="下拉 + 输入框组合" aria-label="组合输入"></div>' +
        '</div>',
      tip: 'input-group 里所有成员都是"邻居"，不要给它们加 margin 或圆角类（Bootstrap 会自动处理连接处的圆角）。把圆角加在 input-group 自己身上。'
    },
    {
      id: '5.8',
      t: '案例：创建“注册新账号”页面',
      d: '把本章技能全用上：浮动标签（邮箱/密码）、输入框组（手机号带区号）、开关（接收通知）、单选（身份）、验证（协议勾选）、块级按钮，做成一个完整的注册卡。',
      demo:
        '<div class="card mx-auto border-0 shadow" style="max-width:460px">' +
        '<div class="card-body p-4">' +
        '<h5 class="fw-bold text-center mb-1">创建新账号</h5>' +
        '<p class="text-center small text-body-secondary mb-4">只需 30 秒，即可开始学习</p>' +
        '<form novalidate id="f58Form">' +
        '<div class="form-floating mb-3">' +
        '<input type="email" class="form-control" id="f58Email" placeholder="邮箱" required>' +
        '<label for="f58Email">邮箱地址</label><div class="invalid-feedback">邮箱格式不对。</div></div>' +
        '<div class="input-group mb-3">' +
        '<span class="input-group-text">+86</span>' +
        '<input type="tel" class="form-control" id="f58Phone" placeholder="手机号（选填）">' +
        '</div>' +
        '<div class="form-floating mb-3">' +
        '<input type="password" class="form-control" id="f58Pwd" placeholder="密码" required minlength="8">' +
        '<label for="f58Pwd">密码（至少 8 位）</label><div class="invalid-feedback">密码至少 8 位。</div></div>' +
        '<div class="d-flex gap-3 mb-3 small">' +
        '<div class="form-check"><input class="form-check-input" type="radio" name="f58Role" id="f58R1" checked><label class="form-check-label" for="f58R1">我是学生</label></div>' +
        '<div class="form-check"><input class="form-check-input" type="radio" name="f58Role" id="f58R2"><label class="form-check-label" for="f58R2">我是老师</label></div>' +
        '</div>' +
        '<div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" id="f58Notify" checked>' +
        '<label class="form-check-label small" for="f58Notify">接收课程更新提醒</label></div>' +
        '<div class="form-check mb-3"><input class="form-check-input" type="checkbox" id="f58Agree" required>' +
        '<label class="form-check-label small" for="f58Agree">我已阅读并同意 <a href="#">用户协议</a> 和 <a href="#">隐私政策</a></label>' +
        '<div class="invalid-feedback">需要先同意协议。</div></div>' +
        '<button class="btn btn-primary w-100 py-2" type="submit">注 册</button>' +
        '<div id="f58Result" class="d-none alert alert-success mt-3 mb-0 py-2 small"><i class="bi bi-check-circle me-1"></i>注册信息校验通过！</div>' +
        '</form>' +
        '<p class="text-center small text-body-secondary mb-0 mt-3">已有账号？<a href="#">去登录</a></p>' +
        '</div></div>',
      js:
        "var f = stage.querySelector('#f58Form');\n" +
        "f.addEventListener('submit', function (e) {\n" +
        "  e.preventDefault();\n" +
        "  e.stopPropagation();\n" +
        "  if (f.checkValidity()) {\n" +
        "    stage.querySelector('#f58Result').classList.remove('d-none');\n" +
        "  } else {\n" +
        "    f.classList.add('was-validated');\n" +
        "    stage.querySelector('#f58Result').classList.add('d-none');\n" +
        "  }\n" +
        "});",
      hint: '空着点"注册"看错误提示；都填对再点一次，底部出现成功横幅'
    }
  ],
  summary: [
    '表单三布局：垂直（mb-3 + form-label）、水平（row g-3 + col-form-label）、内联（row g-2 align-items-center）。',
    '控件口诀：输入框 form-control、下拉框 form-select、复选框/单选框 form-check、开关 form-switch。',
    'label 的 for 要对应 input 的 id（好习惯 + 无障碍硬要求）；单选按钮同组必须同名 name。',
    '尺寸：form-control-sm/lg 配 col-form-label-sm/lg；禁用：单个 disabled，整组用 fieldset disabled。',
    '浮动标签三规则：label 在 input 后面、input 必须有 placeholder、间距加在容器上。',
    '验证三件套：novalidate + required 等原生属性 + JS 里 checkValidity() / was-validated；提示用 invalid-feedback。',
    '输入框组 input-group：前缀后缀用 input-group-text，按钮直接进组，加 has-validation 防提示错位。'
  ],
  practice: {
    t: '实训项目：制作含表单的页面',
    d: '做一个"活动报名"页面：上半部分是活动介绍，下半部分是报名表单（姓名、手机、人数、日期、备注、协议勾选），带验证和提交反馈。',
    steps: [
      '页面结构：container → row g-4 → 左 col-lg-7 放介绍，右 col-lg-5 放表单卡片（card + shadow）。',
      '表单里混用三种布局：姓名单垂直表单，手机号用 input-group（+86 前缀），人数用 form-select。',
      '给姓名和手机加 required + invalid-feedback，日期必填。',
      '提交按钮用 d-grid 或 w-100 做成块级；协议勾选必须 required。',
      'JS 部分抄 5.6 的十行代码，实现"校验通过才显示成功提示"。'
    ],
    demo:
      '<div class="row g-4 align-items-start">' +
      '<div class="col-lg-7"><div class="p-4 rounded-4 text-white h-100" style="background:linear-gradient(135deg,#db2777,#f472b6)">' +
      '<h5 class="fw-bold">周末编程体验营</h5>' +
      '<p class="small" style="opacity:.85">10 月 25 日（周六）9:30 - 17:00 · 武汉市洪山区 · 免费</p>' +
      '<ul class="small" style="opacity:.9"><li>零基础友好，自带电脑</li><li>完成一个属于你的小网页</li><li>限额 30 人，报满即止</li></ul>' +
      '<span class="badge text-bg-light">还剩 7 个名额</span>' +
      '</div></div>' +
      '<div class="col-lg-5"><div class="card border-0 shadow-sm"><div class="card-body p-4">' +
      '<h6 class="fw-bold mb-3">活动报名</h6>' +
      '<form novalidate id="pfForm">' +
      '<div class="mb-3"><label for="pfName" class="form-label small">姓名 *</label>' +
      '<input type="text" class="form-control" id="pfName" required><div class="invalid-feedback">请填写姓名。</div></div>' +
      '<div class="mb-3"><label for="pfPhone" class="form-label small">手机号 *</label>' +
      '<div class="input-group"><span class="input-group-text">+86</span>' +
      '<input type="tel" class="form-control" id="pfPhone" required pattern="1[0-9]{10}" placeholder="11 位手机号"></div>' +
      '<div class="form-text">用于接收报名确认短信。</div>' +
      '<div class="invalid-feedback d-none" style="display:none">手机号格式不对。</div></div>' +
      '<div class="row g-3 mb-3">' +
      '<div class="col-6"><label for="pfCount" class="form-label small">人数 *</label>' +
      '<select class="form-select" id="pfCount" required><option selected disabled value="">选择</option><option>1 人</option><option>2 人</option><option>3 人及以上</option></select>' +
      '<div class="invalid-feedback">请选择人数。</div></div>' +
      '<div class="col-6"><label for="pfDate" class="form-label small">到场日期 *</label>' +
      '<input type="date" class="form-control" id="pfDate" required><div class="invalid-feedback">请选择日期。</div></div>' +
      '</div>' +
      '<div class="mb-3"><label for="pfNote" class="form-label small">备注</label>' +
      '<textarea class="form-control" id="pfNote" rows="2" placeholder="饮食禁忌、随行人员等（选填）"></textarea></div>' +
      '<div class="form-check mb-3"><input class="form-check-input" type="checkbox" id="pfAgree" required>' +
      '<label class="form-check-label small" for="pfAgree">我已阅读并同意活动须知 *</label>' +
      '<div class="invalid-feedback">请先同意活动须知。</div></div>' +
      '<button type="submit" class="btn btn-danger w-100">提交报名</button>' +
      '<div id="pfOk" class="alert alert-success mt-3 mb-0 py-2 small d-none"><i class="bi bi-check-circle me-1"></i>报名成功，我们会短信通知你！</div>' +
      '</form>' +
      '</div></div></div>' +
      '</div>',
    js:
      "var f = stage.querySelector('#pfForm');\n" +
      "f.addEventListener('submit', function (e) {\n" +
      "  e.preventDefault();\n" +
      "  e.stopPropagation();\n" +
      "  if (f.checkValidity()) {\n" +
      "    stage.querySelector('#pfOk').classList.remove('d-none');\n" +
      "  } else {\n" +
      "    f.classList.add('was-validated');\n" +
      "    stage.querySelector('#pfOk').classList.add('d-none');\n" +
      "  }\n" +
      "});",
    hint: '空着直接提交：必填项会变红；填完提交：出现成功提示'
  }
});
