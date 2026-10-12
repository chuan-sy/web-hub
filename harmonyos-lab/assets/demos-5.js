/* ============================================================
   前端转鸿蒙对照页 + 关键词词典
   ============================================================ */
(function () {
  'use strict';
  const HL = window.HL;
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  /* ============================================================
     页面：web2harmony —— 命令式 vs 声明式演示 + 单位演示
     ============================================================ */
  let w2hInited = false;
  HL.onShow['web2harmony'] = function () {
    if (w2hInited) return; w2hInited = true;

    /* ---- 命令式 vs 声明式 ---- */
    const pv = document.getElementById('w2h-pv');
    const runImp = document.getElementById('w2h-run-imp');
    const runDec = document.getElementById('w2h-run-dec');
    const resetBtn = document.getElementById('w2h-reset');
    if (pv && runImp && runDec) {
      let busy = false;

      function clearAll() {
        HL.$$('#page-web2harmony .cmp2-step').forEach(s => s.classList.remove('on'));
        pv.classList.remove('pop');
      }

      runImp.addEventListener('click', async function () {
        if (busy) return; busy = true;
        clearAll();
        pv.textContent = 'Hello World';
        const steps = HL.$$('#page-web2harmony .cmp2-step[data-side="imp"]');
        for (let i = 0; i < steps.length; i++) {
          steps[i].classList.add('on');
          await sleep(560);
        }
        // 命令式：最后一步（重绘）完成后，屏幕才变
        pv.textContent = '你好，鸿蒙';
        pv.classList.add('pop');
        HL.toast('🐢 命令式：3 步全走完，屏幕才变化——每一步都得你操心');
        busy = false;
      });

      runDec.addEventListener('click', async function () {
        if (busy) return; busy = true;
        clearAll();
        pv.textContent = 'Hello World';
        const steps = HL.$$('#page-web2harmony .cmp2-step[data-side="dec"]');
        steps[0].classList.add('on');           // ① 改变量
        await sleep(560);
        pv.textContent = '你好，鸿蒙';           // 数据一变，屏幕立刻变
        pv.classList.add('pop');
        steps[1].classList.add('on');           // ② 框架发现变化
        await sleep(560);
        steps[2].classList.add('on');           // ③ 自动刷新
        HL.toast('🚀 声明式：你只做了第 1 步，后两步是框架自动完成的');
        busy = false;
      });

      resetBtn.addEventListener('click', function () {
        clearAll();
        pv.textContent = 'Hello World';
      });
    }

    /* ---- px vs vp 单位演示 ---- */
    const dprInput = document.getElementById('w2h-dpr');
    const dprVal = document.getElementById('w2h-dpr-val');
    const pxText = document.getElementById('w2h-px-text');
    const vpText = document.getElementById('w2h-vp-text');
    if (dprInput && pxText && vpText) {
      const apply = () => {
        const d = parseFloat(dprInput.value);
        dprVal.textContent = d + 'x';
        pxText.style.fontSize = (22 / d) + 'px';   // Web 习惯：写死 px → 密度越高越小
        vpText.style.fontSize = '22px';            // 鸿蒙 vp/fp → 恒定不变
      };
      dprInput.addEventListener('input', apply);
      apply();
    }
  };

  /* ============================================================
     关键词词典
     ============================================================ */
  const CAT_NAME = {
    decorator: '装饰器', keyword: '语法', component: '组件',
    attr: '属性方法', api: 'API', concept: '概念'
  };

  const DICT = [
    /* ---------- 装饰器 ---------- */
    { w: '@Entry', c: 'decorator', d: '页面入口标记。被它标记的组件，是"路由可以跳转到的页面"。一个页面文件只写一个。', web: '相当于你在路由表里注册过的"页面组件"。', e: '@Entry\n@Component\nstruct Index { }' },
    { w: '@Component', c: 'decorator', d: '声明"这是一个可复用的自定义组件"，加了它才能被别人当积木用。', web: '类似你写的 <code>function Card() {}</code> 组件函数。', e: '@Component\nstruct MyCard {\n  build() { }\n}' },
    { w: '@State', c: 'decorator', d: '组件私有状态。值一改，所有用到它的 UI 自动刷新——全课程最重要的概念。', web: 'React 的 <code>useState</code> / Vue 的 <code>ref</code>，思维完全一致。', e: '@State count: number = 0;\nthis.count++;   // 界面自动更新' },
    { w: '@Prop', c: 'decorator', d: '从父组件"拷贝"一份数据（单向：父变子变；子改只影响自己的副本，不影响父）。', web: 'React 的 props（只读，只能父传子）。', e: '@Prop title: string;   // 父组件传值进来' },
    { w: '@Link', c: 'decorator', d: '父子共享同一份数据（双向：谁改都同步）。', web: '像父子引用同一个响应式变量（不是拷贝，是引用）。', e: '@Link count: number;\n// 父组件里传值用 $count 加美元符' },
    { w: '@Builder', c: 'decorator', d: '把一小段 UI 打包成可复用的"UI 工厂函数"，随用随取。', web: '类似把一段 JSX / 模板抽成一个小函数复用。', e: '@Builder TitleBar(title: string) {\n  Text(title).fontSize(18)\n}' },
    { w: '@Extend', c: 'decorator', d: '给内置组件"扩展"一个新的样式方法（只能扩展，不能覆盖原属性）。', web: '类似给你的 HTML 标签再加一个自定义 CSS 类。', e: '@Extend(Text)\nfunction bold() {\n  .fontWeight(FontWeight.Bold)\n}' },
    { w: '@Styles', c: 'decorator', d: '定义可复用的"通用样式组合"（不含具体组件，通用属性）。', web: '类似 CSS 里的公共类 <code>.card { … }</code>。', e: "@Styles\nfunction card() {\n  .borderRadius(16)\n  .backgroundColor('#fff')\n}" },
    { w: '@Watch', c: 'decorator', d: '监听某个状态变量：它一变，就自动执行你指定的方法。', web: 'Vue 的 watch / React 的 useEffect 依赖监听。', e: '@State @Watch(\'onCountChange\')\ncount: number = 0;' },
    { w: '@Provide / @Consume', c: 'decorator', d: '跨层级传数据：祖先用 @Provide 提供，后代用 @Consume 消费，中间层不用管。', web: 'React 的 Context / Vue 的 provide-inject。', e: '@Provide count: number = 0;   // 祖先\n@Consume count: number;        // 后代' },

    /* ---------- 语法 ---------- */
    { w: 'struct', c: 'keyword', d: '定义"组件"的关键字——注意鸿蒙组件用 struct（不是 class）声明。', web: '相当于你写组件函数 <code>function Foo() {}</code> 的位置。', e: '@Component\nstruct Header { }' },
    { w: 'build()', c: 'keyword', d: '组件的"画图纸"：界面长什么样，全写在里面。只能写 UI 描述，不许写逻辑。', web: '相当于 React 组件里 <code>return (JSX)</code> 的位置。', e: 'build() {\n  Column() { Text(\'hi\') }\n}' },
    { w: 'this', c: 'keyword', d: '指向"当前组件实例"，用来访问它自己的状态和方法。', web: '和 JS 类里的 this 一样。', e: 'Text(this.message)' },
    { w: 'let / const', c: 'keyword', d: '声明变量 / 常量。用法和 JS 一样，只是类型必须写。', web: '一模一样，只是要多写类型注解。', e: "let count: number = 0;\nconst PI: number = 3.14;" },
    { w: 'interface', c: 'keyword', d: '定义"数据长什么样"的结构说明书（对象的类型）。', web: 'TS 的 interface，你熟悉的老朋友。', e: 'interface Car {\n  brand: string;\n  sales: number;\n}' },
    { w: 'class', c: 'keyword', d: '类。语法与 JS/TS 基本一致（构造器、方法、继承都有）。', web: '一样，无差别。', e: 'class Car {\n  brand: string = \'\';\n}' },
    { w: 'enum', c: 'keyword', d: '枚举：给一组固定值起名字，避免魔法数字。', web: 'JS 没有枚举，你以前可能用对象常量模拟。', e: 'enum Mode { Fast, Normal }\nlet m: Mode = Mode.Fast;' },
    { w: 'import / export', c: 'keyword', d: '模块导入导出，和 ES Module 思路一致。', web: '完全一样。', e: "import { Car } from '../model/Car';" },
    { w: 'async / await', c: 'keyword', d: '异步编程语法，用法完全一致。', web: '完全一样。', e: "const v = await store.get('key');" },
    { w: 'as', c: 'keyword', d: '类型断言：告诉编译器"这个值就是某个类型"。', web: 'TS 的 as，一模一样。', e: 'const p = router.getParams() as Record<string, Object>;' },
    { w: 'ForEach', c: 'keyword', d: '列表渲染语法：把数组的每一项变成界面组件——不是拼字符串，而是"每条数据生成一个组件"。', web: '<code>array.map()</code> 渲染列表的声明式加强版。', e: 'ForEach(list, (item: Car) => {\n  RowItem({ data: item })\n}, (item: Car) => item.id)   // 唯一标识' },

    /* ---------- 组件 ---------- */
    { w: 'Text', c: 'component', d: '显示文字。', web: '<code>&lt;p&gt; &lt;span&gt; &lt;h1&gt;</code> 全用它替代。', e: "Text('你好，鸿蒙').fontSize(16)" },
    { w: 'Button', c: 'component', d: '按钮。文字直接当参数传。', web: '<code>&lt;button&gt;</code>', e: "Button('提交').onClick(() => {})" },
    { w: 'Image', c: 'component', d: '显示图片。', web: '<code>&lt;img&gt;</code>', e: "Image($r('app.media.logo')).width(80)" },
    { w: 'TextInput', c: 'component', d: '单行输入框。', web: '<code>&lt;input type="text"&gt;</code>', e: "TextInput({ placeholder: '请输入' })" },
    { w: 'Column', c: 'component', d: '纵向线性容器：子元素从上往下依次排。', web: '<code>flex-direction: column</code> 的 div。', e: "Column() { Text('上'); Text('下') }" },
    { w: 'Row', c: 'component', d: '横向线性容器：子元素从左往右排。', web: '<code>flex-direction: row</code> 的 div。', e: "Row() { Text('左'); Text('右') }" },
    { w: 'Stack', c: 'component', d: '层叠容器：子元素像叠纸一样摞起来，后声明的在上面。', web: '<code>position: relative</code> + 绝对定位叠放。', e: "Stack() { Image(); Text('角标') }" },
    { w: 'Flex', c: 'component', d: '弹性容器：可换行、伸缩，用法接近 CSS flex 的高级版。', web: '<code>display: flex</code>。', e: 'Flex({ wrap: FlexWrap.Wrap }) { }' },
    { w: 'List / ListItem', c: 'component', d: '可滚动列表容器 / 列表项。', web: '<code>&lt;ul&gt;&lt;li&gt;</code> + 自带滚动。', e: "List() {\n  ListItem() { Text('第一行') }\n}" },
    { w: 'Grid / GridItem', c: 'component', d: '网格容器 / 格子，做商品宫格、相册。', web: 'CSS Grid 或照片墙布局。', e: "Grid() {\n  GridItem() { }\n}.columnsTemplate('1fr 1fr')" },
    { w: 'Tabs', c: 'component', d: '标签页容器：切换不同内容区（顶部/底部导航）。', web: 'Tab 导航切换内容。', e: 'Tabs() {\n  TabContent() { }   // 每一页\n}' },
    { w: 'Scroll', c: 'component', d: '让内容可以滚动。', web: '<code>overflow: auto</code>。', e: 'Scroll() { Column() { } }' },
    { w: 'Swiper', c: 'component', d: '轮播图容器（可以左右滑动切换的页面组）。', web: 'swiper.js 之类的轮播插件。', e: 'Swiper() { Image(a); Image(b) }' },
    { w: 'Blank', c: 'component', d: '占位组件：在 Row 里把两边元素"撑开"，像自动的弹簧。', web: '<code>justify-content: space-between</code> 或占位 div。', e: "Row() { Text('左'); Blank(); Text('右') }" },
    { w: 'Divider', c: 'component', d: '分割线。', web: '<code>&lt;hr&gt;</code>', e: "Divider().color('#eee')" },
    { w: 'Progress', c: 'component', d: '进度条。', web: '<code>&lt;progress&gt;</code>', e: 'Progress({ value: 60, total: 100 })' },
    { w: 'Slider', c: 'component', d: '滑块（拖动调节数值）。', web: '<code>&lt;input type="range"&gt;</code>', e: 'Slider({ value: 30 }).onChange((v: number) => {})' },
    { w: 'Toggle', c: 'component', d: '开关（Switch 样式）。', web: 'checkbox 的开关皮肤。', e: 'Toggle({ type: ToggleType.Switch })' },
    { w: 'PatternLock', c: 'component', d: '九宫格手势锁组件——官方内置，回调给你经过的点编号数组。', web: 'Web 没有现成对照，得自己用 canvas 画。', e: 'PatternLock()\n  .onPatternComplete((input) => { })' },
    { w: 'Web', c: 'component', d: '内嵌网页的组件（小型浏览器）。', web: '<code>&lt;iframe&gt;</code>', e: "Web({ src: $rawfile('a.html'), controller })" },
    { w: 'XComponent', c: 'component', d: '提供原生"画布"（Surface），视频画面等自绘内容渲染在它上面。', web: '定位类似 <code>&lt;canvas&gt;</code>。', e: "XComponent({ id: 'v', type: XComponentType.SURFACE })" },
    { w: 'Video', c: 'component', d: '现成的视频播放组件（懒人方案，简单场景用它）。', web: '<code>&lt;video&gt;</code> 标签。', e: "Video({ src: $rawfile('a.mp4') }).controls(true)" },

    /* ---------- 属性方法 ---------- */
    { w: '.width() / .height()', c: 'attr', d: '设置宽高。写数字 = vp 单位；写字符串 = 百分比。', web: '<code>width / height</code>', e: ".width(200).height('100%')" },
    { w: '.fontSize() .fontColor() .fontWeight()', c: 'attr', d: '字号 / 文字颜色 / 粗细。', web: '<code>font-size / color / font-weight</code>', e: ".fontSize(16).fontColor('#333')\n.fontWeight(FontWeight.Bold)" },
    { w: '.backgroundColor()', c: 'attr', d: '设置背景色。', web: '<code>background-color</code>', e: ".backgroundColor('#F1F3F8')" },
    { w: '.margin() / .padding()', c: 'attr', d: '外边距 / 内边距。可以传单个数字（四边相同），也可以传对象单独指定。', web: '<code>margin / padding</code>', e: '.margin(10)\n.padding({ top: 8, left: 16 })' },
    { w: '.borderRadius() / .border()', c: 'attr', d: '圆角 / 边框。', web: '<code>border-radius / border</code>', e: ".borderRadius(12)\n.border({ width: 1, color: '#eee' })" },
    { w: '.onClick()', c: 'attr', d: '点击事件。', web: '<code>addEventListener(\'click\', fn)</code>', e: "Button('点我').onClick(() => { })" },
    { w: '.layoutWeight()', c: 'attr', d: '在容器里按权重分配剩余空间。', web: '<code>flex: 1</code>', e: "Text('…').layoutWeight(1)" },
    { w: '.justifyContent() / .alignItems()', c: 'attr', d: '主轴 / 交叉轴对齐（布局两大件）。', web: '<code>justify-content / align-items</code>', e: '.justifyContent(FlexAlign.Center)\n.alignItems(HorizontalAlign.Center)' },
    { w: '.visibility() / .opacity()', c: 'attr', d: '显示隐藏 / 透明度。', web: '<code>display / opacity</code>', e: '.visibility(Visibility.Hidden)\n.opacity(0.5)' },

    /* ---------- API ---------- */
    { w: 'router', c: 'api', d: '页面路由：pushUrl 跳转、back 返回、getParams 取参数。', web: '<code>location.href / history.back()</code>', e: "router.pushUrl({\n  url: 'pages/Detail',\n  params: { id: 1 }\n})" },
    { w: 'Preferences', c: 'api', d: '轻量键值存储：存登录状态、设置、小数据。', web: '<code>localStorage</code>（但它是异步的）。', e: "await pref.put('k', 'v');\nawait pref.flush();" },
    { w: 'flush()', c: 'api', d: '把 Preferences 的修改真正写入磁盘。忘写 = 数据丢。', web: 'localStorage 是即时生效的；这里必须手动"保存"。', e: 'await store.flush();' },
    { w: 'http.createHttp()', c: 'api', d: '创建 HTTP 请求对象，发网络请求。', web: '<code>fetch / axios</code>', e: "let req = http.createHttp();\nreq.request(url, (err, data) => { })" },
    { w: 'RCP', c: 'api', d: 'Remote Communication Kit：新一代请求框架，能力比 http 模块更全面（多请求优先级、会话管理）。', web: '定位更接近 axios（封装更高级）。', e: '// 复杂业务选 RCP，简单请求用 http' },
    { w: 'media.createAVPlayer()', c: 'api', d: '创建音视频播放器实例（要配 XComponent 显示画面）。', web: '<code>new Audio()</code> / video 元素（但状态要自己管）。', e: "let p = await media.createAVPlayer();\np.url = 'xxx.mp4';" },
    { w: 'promptAction.showToast()', c: 'api', d: '弹一个轻提示（一闪而过的黑色小条）。', web: '<code>alert()</code> 的轻量替代，类似各种 toast 库。', e: "promptAction.showToast({ message: '保存成功' })" },
    { w: '$r()', c: 'api', d: '引用工程内的资源（图片、字符串、颜色…），编译期校验路径。', web: '类似 <code>src="imgs/a.png"</code>，但更安全——写错路径直接报错。', e: "Image($r('app.media.icon'))" },
    { w: '$rawfile()', c: 'api', d: '引用 rawfile 目录里的原始文件（比如本地网页、音视频）。', web: '静态资源路径。', e: "Web({ src: $rawfile('shop.html') })" },
    { w: 'setInterval / clearInterval', c: 'api', d: '定时器，和 JS 完全一样（做倒计时、轮询、充电进度都用它）。', web: '一模一样。', e: 'this.timer = setInterval(() => { }, 1000);' },
    { w: 'console.info()', c: 'api', d: '打印日志。', web: '<code>console.log</code>，改个名而已。', e: "console.info('调试信息');" },
    { w: 'updateForm()', c: 'api', d: '主动刷新服务卡片的数据（卡片不能自己拉数据，要 App 喂）。', web: '无直接对照，类似"把新数据推送给桌面小组件"。', e: 'formProvider.updateForm(formId, formData)' },
    { w: 'animateTo()', c: 'api', d: '显式动画：让属性变化"动起来"，而不是瞬间跳变。', web: 'CSS <code>transition</code> 的命令式版本。', e: "animateTo({ duration: 300 }, () => {\n  this.opacity = 0.5;\n})" },

    /* ---------- 概念 ---------- */
    { w: 'vp', c: 'concept', d: '虚拟像素：鸿蒙默认长度单位，密度无关——换屏幕大小不变。', web: '比 CSS px 更智能；概念接近 Android 的 dp。', e: '.width(100)   // 100vp，直接写数字即可' },
    { w: 'fp', c: 'concept', d: '字体像素：专用于字号，跟随系统字体大小设置缩放。', web: '类似 rem 跟随 root 字号缩放。', e: '.fontSize(16)   // 16fp' },
    { w: 'Stage 模型', c: 'concept', d: '鸿蒙推荐的应用组织方式：UIAbility 管能力、WindowStage 管窗口、Page 管界面。', web: '类似"应用进程 + 路由页面"的分层思路。', e: '// module.json5 中配置 abilities' },
    { w: 'UIAbility', c: 'concept', d: '应用的功能单元 + 生命周期管家（创建 / 切前台 / 切后台 / 销毁）。', web: '类似 SPA 的入口 + 生命周期钩子（mounted / unmounted）。', e: 'export default class EntryAbility extends UIAbility { }' },
    { w: 'loadContent', c: 'concept', d: '在窗口里"装"首页面的方法——Stage 模型启动的关键一步。', web: '相当于把 index.html 设为网站的首页。', e: "windowStage.loadContent('pages/Index')" },
    { w: 'HAP', c: 'concept', d: 'HarmonyOS Ability Package：应用模块的安装包（类似 apk）。', web: '没有直接对照，属于"发布产物"概念。', e: '// 构建产物：entry-default-signed.hap' },
    { w: '声明式 UI', c: 'concept', d: '"描述界面应该长什么样 + 数据变了自动刷新"的范式。', web: 'React / Vue 都是声明式；jQuery 手动操作 DOM 是命令式。', e: "// 你只管 this.msg = 'x'，界面自动变" },
    { w: '状态管理', c: 'concept', d: '用装饰器标记"哪些数据变化要驱动界面刷新"的机制。', web: 'React 的 state / Vue 的响应式数据。', e: '@State / @Prop / @Link …' },
    { w: 'module.json5', c: 'concept', d: '模块配置文件：声明页面清单、权限、Ability（"说明书"）。', web: '类似 PWA 的 <code>manifest.json</code>。', e: '{ "module": { "abilities": [ ] } }' },
    { w: 'oh-package.json5', c: 'concept', d: '工程的依赖声明文件。', web: '<code>package.json</code>', e: '{ "dependencies": { } }' },
    { w: '服务卡片', c: 'concept', d: '放在桌面上的"小窗口"，展示 App 的关键信息（项目 6）。', web: 'PWA 小组件 / 桌面小工具。', e: '// widget 目录 + updateForm 刷新' },
    { w: '元服务', c: 'concept', d: '免安装、即用即走的轻量应用形态（项目 9）。', web: '理念接近 PWA / 小程序。', e: '// 独立工程类型，卡片直达服务' },
    { w: '生命周期', c: 'concept', d: '组件 / Ability "从生到死"的各个阶段回调。', web: 'DOMContentLoaded / window.onload / beforeunload。', e: 'aboutToAppear() { }  // 即将显示' },
    { w: 'aboutToAppear', c: 'concept', d: '组件"即将显示"时触发——初始化数据的常用地方。', web: 'Vue 的 created / React 的 useEffect 初版。', e: 'aboutToAppear() {\n  this.loadData();\n}' },
    { w: 'ohpm', c: 'concept', d: 'OpenHarmony 包管理器：装三方库、管理依赖。', web: '<code>npm</code>，用法几乎一样。', e: 'ohpm install @ohos/xxx' },
    { w: 'hvigor', c: 'concept', d: '鸿蒙构建工具：编译、打包、签名。', web: '<code>webpack / vite</code>，但基本不用手写配置。', e: '// DevEco Studio 自动调用' },
    { w: '@kit.Xxx', c: 'concept', d: '新版统一包导入方式：鸿蒙把系统能力按 Kit 归类（ArkData、NetworkKit、MediaKit…）。', web: '和 <code>import from \'package\'</code> 一样，只是"包"按能力分好了。', e: "import { http } from '@kit.NetworkKit';" },
    { w: 'ArkTS', c: 'concept', d: '鸿蒙应用开发语言：TypeScript 的强化版——类型检查更严格、运行性能更好。', web: '你写的 TS 代码基本能平滑迁移过来，习惯基本不变。', e: '// .ets 文件里写的都是 ArkTS 代码' },
    { w: 'ArkUI', c: 'concept', d: '鸿蒙的声明式 UI 框架：组件、布局、动画、交互全套基础设施。', web: '相当于 React/Vue 的框架角色，但配套的是原生组件体系。', e: "Column() { Text('hi') }   // 这就是 ArkUI" },
    { w: 'ArkData', c: 'concept', d: '数据管理框架：Preferences、分布式键值数据库、关系型数据库都归它管。', web: '相当于前端界的 localStorage + IndexedDB 全家桶。', e: "import { preferences } from '@kit.ArkData';" },
    { w: 'ArkWeb', c: 'concept', d: 'Web 能力框架：提供 Web 组件、网页加载、与网页 JS 互操作。', web: '相当于"浏览器引擎 + iframe"的合体。', e: "import { webview } from '@kit.ArkWeb';" },
    { w: '分布式键值数据库', c: 'concept', d: '能跨设备自动同步的键值存储：手机改，手表、平板跟着变。', web: '好比 localStorage + 云同步，但由系统底层自动完成。', e: '// 需组网 + 权限，数据自动同步到同账号设备' },
    { w: '关系型数据库（RDB）', c: 'concept', d: '基于 SQLite 的数据库：用"表"存大量结构化数据，支持增删改查。', web: 'IndexedDB 或后端 SQL 的对应物。', e: "let store = await relationalStore.getRdbStore(ctx, {\n  name: 'my.db', securityLevel: 1\n});" }
  ];
  HL.DICT = DICT;

  /* ---- 渲染 ---- */
  let dictInited = false;
  HL.onShow['dict'] = function () {
    if (dictInited) return; dictInited = true;

    const grid = document.getElementById('dict-grid');
    const countEl = document.getElementById('dict-count');
    const search = document.getElementById('dict-search');
    const seg = document.getElementById('dict-seg');
    if (!grid) return;

    let cat = 'all';

    function esc(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function render() {
      const q = (search.value || '').trim().toLowerCase();
      const list = DICT.filter(function (item) {
        if (cat !== 'all' && item.c !== cat) return false;
        if (!q) return true;
        const hay = (item.w + ' ' + item.d + ' ' + (item.web || '') + ' ' + (item.e || '')).toLowerCase();
        return hay.indexOf(q) >= 0;
      });
      countEl.textContent = '共 ' + list.length + ' 条' + (q ? '（匹配「' + q + '」）' : '');
      if (!list.length) {
        grid.innerHTML = '<div class="dict-empty"><span class="de-ico">🕵️</span>没有找到「' + esc(q) + '」<br>试试搜英文名（如 State）或换个说法</div>';
        return;
      }
      grid.innerHTML = list.map(function (item) {
        return '<div class="dict-card">' +
          '<div class="dc-top"><span class="dc-w">' + esc(item.w) + '</span><span class="dc-cat ' + item.c + '">' + CAT_NAME[item.c] + '</span></div>' +
          '<div class="dc-d">' + item.d + '</div>' +
          (item.web ? '<div class="dc-web"><b>Web 对照：</b>' + item.web + '</div>' : '') +
          (item.e ? '<div class="dc-code">' + HL.highlightText(item.e) + '</div>' : '') +
          '</div>';
      }).join('');
    }

    search.addEventListener('input', render);
    HL.$$('button', seg).forEach(function (b) {
      b.addEventListener('click', function () {
        HL.$$('button', seg).forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        cat = b.dataset.cat;
        render();
      });
    });
    render();
  };
})();
