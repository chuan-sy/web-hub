/* ============================================================
   项目 1 & 2 互动演示
   ============================================================ */
(function () {
  'use strict';
  const HL = window.HL;

  /* ============================================================
     项目 1
     ============================================================ */
  let p1Inited = false;
  HL.onShow['p1'] = function () {
    if (p1Inited) return; p1Inited = true;

    /* ---- 1. 工程目录树：点击显示说明 ---- */
    const descBox = document.getElementById('fileTreeDesc');
    HL.$$('#fileTree .ft-row').forEach(function (row) {
      row.addEventListener('click', function () {
        HL.$$('#fileTree .ft-row').forEach(r => r.classList.remove('sel'));
        row.classList.add('sel');
        const name = row.querySelector('.ft-name').textContent;
        const desc = row.dataset.desc || '（暂无说明）';
        descBox.innerHTML = '<b>' + name + '</b> —— ' + desc;
        descBox.classList.add('flash-focus');
        setTimeout(() => descBox.classList.remove('flash-focus'), 1200);
      });
    });

    /* ---- 2. Stage 模型架构图 ---- */
    const archBox = document.getElementById('archDetail');
    HL.$$('#archBoard .arch-col').forEach(function (col) {
      col.addEventListener('click', function () {
        HL.$$('#archBoard .arch-col').forEach(c => c.classList.remove('hot'));
        col.classList.add('hot');
        archBox.innerHTML = col.dataset.detail;
      });
    });

    /* ---- 3. Hello 页面演示 ---- */
    const btn = document.getElementById('p1-btn');
    const msg = document.getElementById('p1-msg');
    const stateEl = document.getElementById('p1-state');
    let flipped = false;
    if (btn) {
      btn.addEventListener('click', function () {
        flipped = !flipped;
        const val = flipped ? '你好，鸿蒙！' : 'Hello World';
        msg.textContent = val;
        msg.style.transform = 'scale(1.06)';
        setTimeout(() => { msg.style.transform = 'none'; }, 180);
        stateEl.textContent = "'" + val + "'";
        stateEl.classList.add('val-pop');
        setTimeout(() => stateEl.classList.remove('val-pop'), 360);
        if (flipped) HL.toast('✅ this.message = \'你好，鸿蒙！\' → UI 自动刷新');
        else HL.toast('✅ this.message = \'Hello World\' → UI 自动刷新');
      });
    }
  };

  /* ============================================================
     项目 2
     ============================================================ */
  let p2Inited = false;
  HL.onShow['p2'] = function () {
    if (p2Inited) return; p2Inited = true;
    buildRankList();
    initFlowDemo();
  };

  /* ---- 2.1 排行榜列表 ---- */
  const CARS = [
    { logo: '⚡', brand: '比亚迪', sales: 425.0, tag: '新能源', detail: '总部：深圳 ｜ 代表车型：秦PLUS、宋PLUS、汉 ｜ 亮点：新能源全产业链自研，销量遥遥领先' },
    { logo: '🚗', brand: '大众', sales: 266.0, tag: '合资', detail: '总部：德国沃尔夫斯堡 ｜ 代表车型：朗逸、速腾、帕萨特 ｜ 亮点：进入中国最早的合资品牌之一' },
    { logo: '🚙', brand: '丰田', sales: 172.0, tag: '合资', detail: '总部：日本爱知县 ｜ 代表车型：卡罗拉、凯美瑞、RAV4 ｜ 亮点：混动技术积淀深厚，可靠性口碑佳' },
    { logo: '🚘', brand: '吉利', sales: 167.0, tag: '自主', detail: '总部：浙江杭州 ｜ 代表车型：星越L、银河系列 ｜ 亮点：多品牌战略（极氪、领克）成效显著' },
    { logo: '🚕', brand: '长安', sales: 135.0, tag: '自主', detail: '总部：重庆 ｜ 代表车型：CS75、深蓝系列 ｜ 亮点：新能源转型速度快的传统车企' },
    { logo: '🚖', brand: '奇瑞', sales: 128.0, tag: '自主', detail: '总部：安徽芜湖 ｜ 代表车型：瑞虎系列、星途 ｜ 亮点：出口量常年位居前列' },
    { logo: '🚌', brand: '本田', sales: 113.0, tag: '合资', detail: '总部：日本东京 ｜ 代表车型：雅阁、思域、CR-V ｜ 亮点：发动机技术见长' },
    { logo: '🚐', brand: '五菱', sales: 109.0, tag: '自主', detail: '总部：广西柳州 ｜ 代表车型：宏光MINI EV ｜ 亮点：国民代步车之王' },
    { logo: '⚡', brand: '特斯拉', sales: 92.0, tag: '新能源', detail: '总部：美国得州 ｜ 代表车型：Model 3、Model Y ｜ 亮点：上海超级工厂国产化率高' },
    { logo: '🏎️', brand: '奔驰', sales: 71.0, tag: '豪华', detail: '总部：德国斯图加特 ｜ 代表车型：C级、E级、GLC ｜ 亮点：豪华品牌销量担当' }
  ];

  function buildRankList() {
    const box = document.getElementById('p2-rank-list');
    if (!box) return;
    box.innerHTML = CARS.map(function (c, i) {
      const salesText = c.sales.toFixed(1);
      return '' +
        '<div class="rank-item" data-idx="' + i + '">' +
        '  <div class="rank-no">' + (i + 1) + '</div>' +
        '  <div class="rank-logo">' + c.logo + '</div>' +
        '  <div class="m-grow"><b>' + c.brand + '</b><small>' + c.tag + '品牌</small></div>' +
        '  <div class="rank-sales"><b>' + salesText + '万</b><small>年销量</small></div>' +
        '</div>' +
        '<div class="rank-detail" id="p2-detail-' + i + '" style="display:none;background:#fff;border-radius:14px;margin:-2px 0 10px;padding:0 14px;box-shadow:0 2px 8px rgba(20,40,90,.05);">' +
        '  <div style="padding:12px 2px;font-size:12.5px;color:#5A6B8C;line-height:1.7;">' + c.detail + '</div>' +
        '</div>';
    }).join('');

    box.addEventListener('click', function (e) {
      const item = e.target.closest('.rank-item');
      if (!item) return;
      const idx = item.dataset.idx;
      const detail = document.getElementById('p2-detail-' + idx);
      const isOpen = detail.style.display !== 'none';
      // 收起全部（演示"同时只展开一行"的 @State 逻辑）
      HL.$$('.rank-detail', box).forEach(d => { d.style.display = 'none'; });
      HL.$$('.rank-item', box).forEach(r => r.style.borderColor = 'transparent');
      if (!isOpen) {
        detail.style.display = 'block';
        detail.classList.add('pop');
        item.style.borderColor = '#C7DCFF';
        HL.toast('this.expanded = ' + idx + ' → @State 变化，界面刷新');
      } else {
        HL.toast('this.expanded = -1 → 全部收起');
      }
    });
  }

  /* ---- 2.2 状态数据流演示 ---- */
  function initFlowDemo() {
    const seg = document.getElementById('p2-mode-seg');
    if (!seg) return;

    const nodes = {
      parent: document.getElementById('p2-fn-parent'),
      child: document.getElementById('p2-fn-child'),
      arrow1: document.getElementById('p2-arrow1')
    };
    const parentVal = document.getElementById('p2-parent-val');
    const childVal = document.getElementById('p2-child-val');
    const explain = document.getElementById('p2-explain');

    // 状态数据
    const S = { mode: 'state', parent: 10, child: 10, shared: 10 };

    const EXPLAIN = {
      state: '<b>@State（当前模式 · 组件私有状态）</b>：count 是父组件自己的私有数据。父组件修改它 → 界面自动刷新，传给子组件的显示值也跟着变。但子组件<b>无权直接修改</b>父组件的 @State —— 试着点"子组件尝试 +1"，看看会发生什么。',
      prop: '<b>@Prop（当前模式 · 单向拷贝）</b>：父组件把 count <b>拷贝</b>了一份传给子组件。父组件改原件 → 子组件的复印件自动同步（父 → 子）；但子组件改自己的复印件，<b>不影响父组件原件</b> —— 试着点"子组件尝试 +1"验证。',
      link: '<b>@Link（当前模式 · 双向绑定）</b>：父子的 count 指向<b>同一份数据</b>，就像共用一张银行卡。无论谁修改，另一方都会立即同步 —— 两个按钮都点点看。'
    };

    function render(animate) {
      const p = S.mode === 'link' ? S.shared : S.parent;
      const c = S.mode === 'link' ? S.shared : (S.mode === 'prop' ? S.child : S.parent);
      parentVal.textContent = p;
      childVal.textContent = c;
      if (animate === 'parent') parentVal.classList.add('val-pop');
      if (animate === 'child') childVal.classList.add('val-pop');
      if (animate) {
        nodes.arrow1.classList.add('anim');
        setTimeout(() => nodes.arrow1.classList.remove('anim'), 800);
      }
      setTimeout(() => { parentVal.classList.remove('val-pop'); childVal.classList.remove('val-pop'); }, 400);
      explain.innerHTML = EXPLAIN[S.mode];
      // 子节点边框语义
      nodes.child.classList.remove('hot', 'hot-green');
      nodes.child.classList.add(S.mode === 'state' ? 'hot' : (S.mode === 'prop' ? 'hot-green' : 'hot'));
    }

    HL.$$('button', seg).forEach(function (b) {
      b.addEventListener('click', function () {
        HL.$$('button', seg).forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        S.mode = b.dataset.mode;
        if (S.mode === 'prop') { S.parent = 10; S.child = 10; }
        if (S.mode === 'link') { S.shared = 10; }
        render();
        HL.toast('切换到 ' + b.textContent + ' 模式，重新演示');
      });
    });

    document.getElementById('p2-inc-parent').addEventListener('click', function () {
      if (S.mode === 'link') { S.shared++; }
      else { S.parent++; if (S.mode === 'prop') S.child = S.parent; }  // @Prop：父改，子同步
      render('parent');
    });

    document.getElementById('p2-inc-child').addEventListener('click', function () {
      if (S.mode === 'state') {
        nodes.child.classList.add('shake');
        setTimeout(() => nodes.child.classList.remove('shake'), 450);
        HL.toast('❌ @State 是父组件私有的，子组件无法直接修改');
        explain.innerHTML = '<b>刚刚发生了什么？</b>你试图在子组件里直接修改父组件的 @State —— 这在鸿蒙里是不允许的（编译就会拦下来）。正确姿势：<br>① 想让子只读 → 用 <b>@Prop</b>（切到上一个模式看看）；<br>② 想让子也能改 → 用 <b>@Link</b>（切到下一个模式看看）。';
        return;
      }
      if (S.mode === 'prop') {
        S.child++;                      // 只改复印件
        render('child');
        HL.toast('✏️ 子组件改了复印件：父组件原件不受影响（单向）');
      } else {
        S.shared++;                     // 双向，父子同源
        render('child');
        HL.toast('🔗 双向绑定：父组件的值也跟着变了！');
      }
    });

    document.getElementById('p2-reset').addEventListener('click', function () {
      S.parent = 10; S.child = 10; S.shared = 10;
      render();
    });

    render();
  }
})();
