/* ============================================================
   附录 C · 关键词词典（4/6）
   C7 表单 / C9 JavaScript 与数据属性
   ============================================================ */
window.BS_GLOSSARY = window.BS_GLOSSARY || [];

/* ============================ C7 ============================ */
window.BS_GLOSSARY.push({
  id: 'C7',
  cat: '表单',
  icon: 'bi-input-cursor-text',
  desc: '把原生丑丑的输入控件"礼盒化"的类名。核心结构永远是：label（标签）+ form-*（控件）+ 提示/校验。',
  items: [
    {
      n: 'form-control',
      d: '"输入框美容包"：给 input / textarea 套上它，立刻获得统一的内边距、边框、聚焦蓝色光晕、禁用态样式。',
      u: '<input type="text" class="form-control" placeholder="请输入姓名">',
      nat: '原生你要手写 border、padding、:focus 的 box-shadow 一整套——这就是它的成品版。',
      tip: '尽量配一个 <label>（或 aria-label），否则点击区域和无障碍都会打折。',
      ref: '5.2.1'
    },
    {
      n: 'form-control-sm / form-control-lg',
      d: '输入框的两个尺寸档：sm 紧凑（工具栏、筛选区），lg 大气（登录页主输入框）。',
      re: '^form-control-(sm|lg)$',
      ref: '5.4'
    },
    {
      n: 'form-label',
      d: '输入框标签的样式类（字号小、间距合适）。写法要点：label 的 <b>for</b> 属性和 input 的 <b>id</b> 对上，点文字才能聚焦输入框。',
      u: '<label class="form-label" for="name1">姓名</label>\n<input class="form-control" id="name1">',
      ref: '5.1.1'
    },
    {
      n: 'col-form-label',
      d: '"水平表单专用标签"：让标签和右侧输入框垂直对齐。你写水平表单（label 与 input 左右并排）时，它几乎是必配项。',
      ref: '5.1.2'
    },
    {
      n: 'form-select',
      d: '下拉框（select）的美容包：原生下拉框的箭头样式各浏览器不一致，套上它统一（且高度与输入框对齐）。',
      u: '<select class="form-select">\n  <option selected>请选择城市</option>\n  <option>北京</option>\n</select>',
      ref: '5.2.2'
    },
    {
      n: 'form-check（三件套）',
      d: '单选/复选框的标准结构：外层 form-check，内部 input 用 form-check-input、label 用 form-check-label。可加 form-check-inline 横排。',
      u: '<div class="form-check">\n  <input class="form-check-input" type="checkbox" id="agree1">\n  <label class="form-check-label" for="agree1">我已阅读并同意协议</label>\n</div>',
      re: '^form-check(-(input|label|inline))?$',
      tip: '三件套缺一不可：只有 input 没套 form-check 壳，间距和点击区域就会不对。',
      ref: '5.2.4'
    },
    {
      n: 'form-switch',
      d: '把复选框"变形"成开关（Toggle）：在 form-check 上补一个 form-switch 即可，不用换控件。',
      u: '<div class="form-check form-switch">\n  <input class="form-check-input" type="checkbox" id="sw1">\n  <label class="form-check-label" for="sw1">接收通知</label>\n</div>',
      ref: '5.2.4'
    },
    {
      n: 'input-group + input-group-text',
      d: '"输入框组合件"：把输入框和前后缀拼成一体。前后缀文字用 input-group-text，要塞按钮直接放 .btn。',
      u: '<div class="input-group">\n  <span class="input-group-text">@</span>\n  <input class="form-control" placeholder="用户名">\n</div>',
      tip: 'input-group 里别混放裸 <label>、<div>——只认 form-control、form-select、btn、input-group-text 这几类成员。',
      re: '^input-group(-(text|sm|lg))?$',
      ref: '5.7'
    },
    {
      n: 'form-floating',
      d: '"浮动标签"：placeholder 演示文字会"浮上来"变成一枚小标签——省空间又优雅。关键结构：<b>input 在前、label 在后</b>。',
      u: '<div class="form-floating">\n  <input class="form-control" id="mail1" placeholder="name@example.com">\n  <label for="mail1">邮箱地址</label>\n</div>',
      tip: '顺序反了（label 在 input 前面）就没有浮动效果——这是 5.x 的结构要求。',
      ref: '5.5'
    },
    {
      n: 'form-text',
      d: '输入框下方的"辅助说明"小字（自动变小、变灰）。放在控件下面做提示语。',
      u: '<input class="form-control">\n<div class="form-text">密码至少 8 位，需含字母和数字。</div>',
      ref: '5.2.1'
    },
    {
      n: 'is-valid / is-invalid',
      d: '校验"结果状态类"：加 is-invalid 输入框变红框、is-valid 变绿框。它们一出现，配套的反馈文字就自动显示。',
      u: '<input class="form-control is-invalid">\n<div class="invalid-feedback">邮箱格式好像不对。</div>',
      re: '^is-(valid|invalid)$',
      ref: '5.6'
    },
    {
      n: 'valid-feedback / invalid-feedback',
      d: '校验"提示语容器"：默认藏起来，直到对应状态类出现才露脸。invalid-feedback 配 is-invalid，valid-feedback 配 is-valid。',
      re: '^(in)?valid-feedback$',
      ref: '5.6'
    },
    {
      n: 'was-validated / needs-validation',
      d: '挂在 <form> 上的"整表校验开关"：needs-validation 声明"我要用原生校验"，was-validated 在提交后由 JS 补上，所有字段一起亮红/亮绿。5.6 有完整配方。',
      re: '^(was-validated|needs-validation)$',
      ref: '5.6'
    },
    {
      n: 'disabled / readonly',
      d: '禁用（变灰、不可点、值不提交）与只读（可选中复制、不可修改）。都是原生属性，Bootstrap 负责把它们"长得像被禁用"。',
      u: '<input class="form-control" disabled>\n<input class="form-control" readonly value="只读内容">',
      re: '^(disabled|readonly)$',
      ref: '5.3'
    },
    {
      n: 'form-range',
      d: '滑块（range 输入）的美容包，和 form-control 同族。做音量、价格区间选择时用。',
      u: '<input type="range" class="form-range" min="0" max="5">',
      ref: '5.2.1'
    }
  ]
});

/* ============================ C9 ============================ */
window.BS_GLOSSARY.push({
  id: 'C9',
  cat: 'JavaScript 与数据属性',
  icon: 'bi-braces',
  desc: 'Bootstrap 5 的交互只有两条路：① 在 HTML 写 data-bs-* 属性（声明式）；② 用 JS 调用插件 API（命令式）。这一分类把它们讲成"遥控器说明书"。',
  items: [
    {
      n: 'data-bs-toggle',
      d: '写在 HTML 上的"遥控器按键"：告诉 Bootstrap "点我时干什么"。data-bs-toggle="collapse" 是折叠、="modal" 是开弹窗、="dropdown" 是下拉。核心价值：<b>不写一行 JS，就有交互</b>。',
      u: '<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo1">点我折叠</button>',
      nat: '原生：querySelector + addEventListener + classList.toggle 一整套；数据属性把"绑定事件"变成了声明式写法。',
      tip: '注意拼写：5.x 是 data-bs-toggle，老教程里的 data-toggle（无 bs）是 v4 写法，抄错就不生效。',
      ref: '7.1'
    },
    {
      n: 'data-bs-target',
      d: '"遥控器对准谁"：值写 CSS 选择器（通常是 #id），表示操作哪个元素。按钮和"被操作元素"可以隔很远。',
      u: '<button data-bs-toggle="collapse" data-bs-target="#panel9">展开</button>\n<div class="collapse" id="panel9">被折叠的内容</div>',
      tip: '"点了没反应"十有八九是 target 的 id 和目标元素的 id 拼写不一致。',
      ref: '7.1'
    },
    {
      n: 'data-bs-dismiss',
      d: '"点了就关"：放在关闭按钮上，声明"我负责关闭"。用于 alert、modal、offcanvas、toast 的关闭按钮。',
      u: '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="关闭"></button>',
      ref: '7.5'
    },
    {
      n: 'data-bs-ride / data-bs-interval',
      d: '自动播放组合：data-bs-ride="carousel" 让轮播自动转；data-bs-interval="2000" 设切换间隔（毫秒）；data-bs-pause="hover" 鼠标悬停时暂停。',
      re: '^data-bs-(ride|interval|pause)$',
      ref: '7.11.4'
    },
    {
      n: 'data-bs-slide / data-bs-slide-to',
      d: '轮播遥控器：切上一张/下一张用 data-bs-slide="prev|next"；跳到指定第几张用 data-bs-slide-to="2"（配合 data-bs-target）。',
      re: '^data-bs-slide(-to)?$',
      ref: '7.11'
    },
    {
      n: 'data-bs-backdrop / data-bs-keyboard',
      d: '模态框的两条"关闭规则"：data-bs-backdrop="static" 点遮罩不关（强制用户面对弹窗），data-bs-keyboard="false" 按 ESC 不关。',
      re: '^data-bs-(backdrop|keyboard)$',
      tip: '后台任务型弹窗（如"保存中"）适合 static；普通确认框别乱改，用户习惯点外面关掉。',
      ref: '7.2.4'
    },
    {
      n: 'data-bs-spy / data-bs-offset',
      d: '滚动监听开关：data-bs-spy="scroll" 告诉容器"监听滚动、自动高亮对应导航"，target 指向导航容器，offset 微调判定位置。',
      re: '^data-bs-(spy|offset|rootmargin|smooth-scroll)$',
      ref: '7.12'
    },
    {
      n: 'new bootstrap.Modal(el)',
      d: '"用 JS 打开组件"的入口：拿到元素 → new 一个插件实例 → 调方法（show / hide / toggle / dispose）。',
      u: 'var m = new bootstrap.Modal(document.getElementById("myModal"));\nm.show();',
      nat: '等于给"遥控器"加了可编程按钮——data 属性做不到的条件触发（比如"登录成功后弹窗"）就用它。',
      ref: '7.2.5'
    },
    {
      n: 'getOrCreateInstance',
      d: '官方推荐的"安全拿实例"写法：有实例就复用、没有才创建，避免同一元素被 new 出两个实例互相打架。',
      u: 'bootstrap.Modal.getOrCreateInstance(document.getElementById("myModal")).show();',
      tip: '新代码统一用它；getInstance 只取不建（可能拿到 null）。',
      ref: '7.2'
    },
    {
      n: '事件 shown.bs.* / hidden.bs.*',
      d: '插件在关键时刻会"广播事件"，名字格式：<b>动作.bs.组件名</b>。如 shown.bs.modal（弹窗完全打开后）、hidden.bs.modal（关闭动画结束后）、click.bs.dropdown。',
      u: 'el.addEventListener("shown.bs.modal", function () {\n  console.log("弹窗开好了，可以填数据了");\n});',
      nat: '和你给自定义元素 dispatchEvent 是同一套机制——插件只是把"时机"提前准备好了。',
      ref: '7.2.7'
    },
    {
      n: '--bs-primary 等 CSS 变量',
      d: 'Bootstrap 5 把主题值都存成了 CSS 变量：--bs-primary、--bs-body-bg、--bs-border-color……可以在自己的 CSS 里直接引用，或局部覆盖，不用重新编译。',
      u: '.my-panel {\n  background: var(--bs-primary-bg-subtle);\n  border: 1px solid var(--bs-border-color);\n}',
      tip: '覆盖时选择器写到自己容器上；别去改 :root，那是"全站级"改动。',
      ref: 'A.6.4'
    },
    {
      n: 'Sass 变量（$primary 等）',
      d: '"源头换色"的正规做法：改 $primary、$theme-colors 等变量再重新编译，全站所有组件、所有变体色一起变。硬性要求：变量写在 @import "bootstrap" <b>之前</b>。',
      u: '$primary: #7048e8;\n$enable-negative-margins: true;\n\n@import "bootstrap";',
      tip: '改完没生效？九成是变量写在了 @import 后面——顺序是死规定。',
      ref: 'A.6.1'
    },
    {
      n: '$theme-colors（主题色表）',
      d: '一张"名字 → 色值"的表：往里加一行，就自动多出整套以该名字命名的类（btn-名字、text-名字、bg-名字……）。',
      u: '$theme-colors: (\n  "brand": #7048e8\n);\n// 之后即可用 .btn-brand、.text-brand、.bg-brand…',
      ref: 'A.6.2'
    },
    {
      n: '$enable-*（功能开关）',
      d: '一批"要不要生成某类 CSS"的布尔开关：$enable-negative-margins（负边距类）、$enable-shadows、$enable-gradients、$enable-dark-mode 等。',
      u: '$enable-negative-margins: true;',
      ref: 'A.6.1'
    },
    {
      n: '!important',
      d: 'CSS 的"最高优先级"标记。Bootstrap 的工具类（mt-3、d-flex 等）几乎个个带它——所以工具类很难被别人的普通样式覆盖。',
      nat: '你在原生 CSS 里见过它；这里要知道的规矩是：<b>谁带它谁赢</b>，以及"别跟着无脑加"。',
      tip: '自己的样式被工具类顶掉时，先查是不是撞了工具类，再考虑权重问题。',
      ref: 'B'
    },
    {
      n: '选择器优先级',
      d: '权重从低到高：元素 &lt; 类 / 属性 / 伪类 &lt; ID &lt; 行内 style &lt; !important；同权重时"后写的赢"。Bootstrap 全是类选择器，所以"你放在它之后的同权重样式"能覆盖它。',
      ref: 'B'
    },
    {
      n: '还需要 jQuery 吗？',
      d: '不需要。Bootstrap 5 已完全移除 jQuery 依赖，插件全部是原生 JavaScript。看到老教程写 <code>$("#myModal").modal("show")</code>，那是 v4 或更早的写法。',
      ref: '7.1'
    }
  ]
});
