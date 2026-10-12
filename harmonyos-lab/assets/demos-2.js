/* ============================================================
   项目 3 & 4 & 5 互动演示
   ============================================================ */
(function () {
  'use strict';
  const HL = window.HL;

  /* ============================================================
     项目 3 · 组件画廊
     ============================================================ */
  let p3Inited = false;
  HL.onShow['p3'] = function () {
    if (p3Inited) return; p3Inited = true;

    /* ---- 按钮计数 ---- */
    let cnt = 0;
    const btn = document.getElementById('p3-btn-demo');
    const cntEl = document.getElementById('p3-btn-count');
    if (btn) btn.addEventListener('click', () => {
      cnt++; cntEl.textContent = cnt;
      cntEl.classList.add('val-pop');
      setTimeout(() => cntEl.classList.remove('val-pop'), 340);
    });

    /* ---- 输入框联动 ---- */
    const input = document.getElementById('p3-input');
    const echo = document.getElementById('p3-input-echo');
    if (input) input.addEventListener('input', () => {
      echo.textContent = input.value === '' ? '（空）' : '"' + input.value + '"';
    });

    /* ---- 进度条 ---- */
    const pbar = document.getElementById('p3-progress');
    const ptxt = document.getElementById('p3-progress-txt');
    const pbtn = document.getElementById('p3-progress-btn');
    if (pbtn) {
      let p = 0, timer = null;
      pbtn.addEventListener('click', () => {
        if (timer) { clearInterval(timer); timer = null; }
        p = 0;
        timer = setInterval(() => {
          p += Math.random() * 12 + 4;
          if (p >= 100) { p = 100; clearInterval(timer); timer = null; }
          pbar.style.width = p + '%';
          ptxt.textContent = Math.round(p) + '%';
        }, 140);
      });
    }

    /* ---- Slider ---- */
    const slider = document.getElementById('p3-slider');
    const sval = document.getElementById('p3-slider-val');
    if (slider) slider.addEventListener('input', () => { sval.textContent = slider.value; });

    /* ---- Toggle ---- */
    const tgl = document.getElementById('p3-toggle');
    const ttxt = document.getElementById('p3-toggle-txt');
    if (tgl) tgl.addEventListener('change', () => {
      ttxt.textContent = tgl.checked ? '开' : '关';
      ttxt.style.color = tgl.checked ? '#00B42A' : '#F53F3F';
    });

    /* ---- Rating ---- */
    const rating = document.getElementById('p3-rating');
    if (rating) {
      let score = 0;
      const paint = (n) => { rating.textContent = '★'.repeat(n) + '☆'.repeat(5 - n); };
      rating.addEventListener('click', (e) => {
        const rect = rating.getBoundingClientRect();
        score = Math.min(5, Math.max(1, Math.ceil((e.clientX - rect.left) / (rect.width / 5))));
        paint(score);
        rating.style.color = '#FFB800';
        HL.toast('评分组件收到：' + score + ' 星');
      });
      rating.style.color = '#C9D4E6';
    }

    /* ---- 布局切换 ---- */
    initLayoutDemo();

    /* ---- 乐购路由 ---- */
    initShopRoute();
  };

  /* ---- 布局演示 ---- */
  const LAYOUT_NOTES = {
    column: `<b>Column（线性布局 · 竖）</b>：子元素从上往下依次排列。做表单、信息流最常用。<br><span style="color:#0A59F7;font-family:var(--mono);font-size:12px;">Column() { Text('1')  Text('2')  Text('3') }</span>`,
    row: `<b>Row（线性布局 · 横）</b>：子元素从左往右依次排列。做导航栏、图标行最常用。<br><span style="color:#0A59F7;font-family:var(--mono);font-size:12px;">Row() { Text('1')  Text('2')  Text('3') }</span>`,
    stack: `<b>Stack（层叠布局）</b>：子元素像叠纸一样摞在一起，后放的在上面。做"图片 + 角标""视频 + 悬浮按钮"最合适。<br><span style="color:#0A59F7;font-family:var(--mono);font-size:12px;">Stack() { Image()  Text('角标') }</span>`,
    flex: `<b>Flex（弹性布局）</b>：子元素能按需换行、拉伸或压缩，适合内容数量不确定的场景。<br><span style="color:#0A59F7;font-family:var(--mono);font-size:12px;">Flex({ wrap: FlexWrap.Wrap }) { … }</span>`,
    grid: `<b>Grid（网格布局）</b>：按行列摆放，做商品宫格、相册。<br><span style="color:#0A59F7;font-family:var(--mono);font-size:12px;">Grid() { GridItem() … GridItem() … }</span>`
  };

  function initLayoutDemo() {
    const seg = document.getElementById('p3-layout-seg');
    const stage = document.getElementById('p3-layout-stage');
    const note = document.getElementById('p3-layout-note');
    if (!seg || !stage) return;

    function render(mode) {
      let html = '';
      const box = (n, cls) => '<div class="lz-box ' + (cls || '') + '">盒子 ' + n + '</div>';
      if (mode === 'column') {
        stage.style.cssText = 'display:flex;flex-direction:column;gap:8px;border:2px dashed #C9D6EC;border-radius:14px;padding:14px;background:repeating-linear-gradient(45deg,#FAFCFF 0 10px,#F4F8FF 10px 20px);min-height:190px;';
        html = box(1) + box(2) + box(3);
      } else if (mode === 'row') {
        stage.style.cssText = 'display:flex;flex-direction:row;gap:8px;border:2px dashed #C9D6EC;border-radius:14px;padding:14px;background:repeating-linear-gradient(45deg,#FAFCFF 0 10px,#F4F8FF 10px 20px);min-height:190px;';
        html = box(1) + box(2) + box(3);
        // 让盒子平分宽度
        setTimeout(() => HL.$$('.lz-box', stage).forEach(b => b.style.flex = '1'), 0);
      } else if (mode === 'stack') {
        stage.style.cssText = 'position:relative;border:2px dashed #C9D6EC;border-radius:14px;padding:14px;background:repeating-linear-gradient(45deg,#FAFCFF 0 10px,#F4F8FF 10px 20px);min-height:190px;';
        html = '<div style="position:absolute;left:34px;top:26px;width:62%;">' + box(1, 'alt') + '</div>' +
          '<div style="position:absolute;left:96px;top:66px;width:58%;">' + box(2) + '</div>' +
          '<div style="position:absolute;left:150px;top:108px;width:48%;">' + box(3, 'alt2') + '</div>' +
          '<div style="position:absolute;right:16px;bottom:12px;font-size:11.5px;color:#8C97AB;">后声明的元素盖在上面 →</div>';
      } else if (mode === 'flex') {
        stage.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;border:2px dashed #C9D6EC;border-radius:14px;padding:14px;background:repeating-linear-gradient(45deg,#FAFCFF 0 10px,#F4F8FF 10px 20px);min-height:190px;align-content:flex-start;';
        html = '';
        for (let i = 1; i <= 5; i++) html += '<div class="lz-box ' + (i % 2 ? '' : 'alt') + '" style="flex:0 0 30%;">盒子 ' + i + '</div>';
      } else if (mode === 'grid') {
        stage.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px;border:2px dashed #C9D6EC;border-radius:14px;padding:14px;background:repeating-linear-gradient(45deg,#FAFCFF 0 10px,#F4F8FF 10px 20px);min-height:190px;';
        html = '';
        for (let i = 1; i <= 6; i++) html += '<div class="lz-box ' + (i % 3 === 1 ? '' : (i % 3 === 2 ? 'alt' : 'alt2')) + '">格子 ' + i + '</div>';
      }
      stage.innerHTML = html;
      if (mode === 'row') HL.$$('.lz-box', stage).forEach(b => b.style.flex = '1');
      note.innerHTML = LAYOUT_NOTES[mode] || '';
    }

    HL.$$('button', seg).forEach(b => {
      b.addEventListener('click', () => {
        HL.$$('button', seg).forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        render(b.dataset.l);
      });
    });
    render('column');
  }

  /* ---- 乐购 App 路由演示 ---- */
  const GOODS = [
    { id: 1001, emoji: '🎧', name: '无线降噪耳机', price: 499, desc: '主动降噪 · 40 小时续航 · 轻盈佩戴' },
    { id: 1002, emoji: '⌚', name: '智能手表', price: 1299, desc: '血氧监测 · 14 天续航 · 百种运动模式' },
    { id: 1003, emoji: '🎒', name: '轻便双肩包', price: 199, desc: '防泼水面料 · 15.6 寸电脑隔层' },
    { id: 1004, emoji: '👟', name: '缓震跑步鞋', price: 399, desc: '回弹中底 · 透气网面 · 轻至 240g' },
    { id: 1005, emoji: '☕', name: '真空保温杯', price: 99, desc: '316 不锈钢内胆 · 24 小时保温' },
    { id: 1006, emoji: '📱', name: '磨砂手机壳', price: 39, desc: '防指纹 · 全包镜头 · 亲肤手感' }
  ];

  function initShopRoute() {
    const listBox = document.getElementById('p3-goods');
    if (!listBox) return;
    listBox.innerHTML = GOODS.map(g =>
      '<div class="p3-good-card" data-id="' + g.id + '" style="background:#fff;border-radius:16px;padding:13px;cursor:pointer;box-shadow:0 2px 8px rgba(20,40,90,.05);transition:transform .15s;">' +
      '<div style="font-size:38px;text-align:center;">' + g.emoji + '</div>' +
      '<div style="font-size:13px;font-weight:600;margin-top:7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + g.name + '</div>' +
      '<div style="font-size:14px;font-weight:800;color:#F53F3F;margin-top:2px;font-family:var(--mono);">¥' + g.price + '</div>' +
      '</div>').join('');

    const home = document.getElementById('p3-route-home');
    const detail = document.getElementById('p3-route-detail');

    listBox.addEventListener('click', (e) => {
      const card = e.target.closest('.p3-good-card');
      if (!card) return;
      const g = GOODS.find(x => x.id === Number(card.dataset.id));
      if (!g) return;
      // 填充详情
      document.getElementById('p3-detail-img').textContent = g.emoji;
      document.getElementById('p3-detail-name').textContent = g.name;
      document.getElementById('p3-detail-desc').textContent = g.desc;
      document.getElementById('p3-detail-price').textContent = g.price;
      document.getElementById('p3-detail-params').textContent = "{ id: " + g.id + ", name: '" + g.name + "' }";
      // 路由动画
      home.classList.add('slide-out');
      detail.classList.add('show');
      HL.toast('router.pushUrl({ url: \'pages/ProductDetail\', params: { id: ' + g.id + ' } })');
    });

    document.getElementById('p3-back').addEventListener('click', () => {
      detail.classList.remove('show');
      home.classList.remove('slide-out');
      HL.toast('router.back() → 返回首页');
    });
    document.getElementById('p3-add-cart').addEventListener('click', () => {
      HL.toast('🛒 已加入购物车（只是一个演示按钮～）');
    });
  }

  /* ============================================================
     项目 4 · 手势密码 + 数据存储
     ============================================================ */
  let p4Inited = false;
  HL.onShow['p4'] = function () {
    if (p4Inited) return; p4Inited = true;
    initPatternLock();
    initRdbDemo();
  };

  function initRdbDemo() {
    const btn = document.getElementById('p4-rdb-add');
    const table = document.getElementById('p4-rdb-table');
    if (!btn || !table) return;
    const names = ['小华', '小美', '阿强', '小杰', '小雨', '小安'];
    const cities = ['武汉', '长沙', '西安', '成都', '合肥', '郑州'];
    let id = 2;
    btn.addEventListener('click', () => {
      id++;
      const tr = document.createElement('tr');
      tr.innerHTML = '<td>' + id + '</td><td>' + names[id % names.length] + '</td><td>' + (75 + Math.floor(Math.random() * 24)) + '</td><td>' + cities[id % cities.length] + '</td>';
      table.appendChild(tr);
      tr.classList.add('pop');
      HL.toast("insert('user', { id: " + id + ", … }) → 新增一行");
    });
  }

  /* ---- 九宫格 ---- */
  function initPatternLock() {
    const canvas = document.getElementById('p4-canvas');
    if (!canvas || !canvas.getContext) return;
    const SIZE = 228;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width = SIZE + 'px';
    canvas.style.height = SIZE + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const PAD = 38;
    const GAP = (SIZE - PAD * 2) / 2;   // = 76
    const pts = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        pts.push({ x: PAD + c * GAP, y: PAD + r * GAP, idx: r * 3 + c });
      }
    }
    const HIT = 27;
    const STATE = { phase: 'set', first: '', saved: '' };
    let selected = [];
    let drawing = false;
    let cursor = { x: 0, y: 0 };
    let flash = null;     // 'ok' | 'err' | null
    let clearTimer = null;

    const msgEl = document.getElementById('p4-msg');
    const badge = document.getElementById('p4-phase-badge');
    const pathView = document.getElementById('p4-path-view');

    function say(text, type) {
      msgEl.textContent = text;
      msgEl.className = 'pattern-msg ' + (type || '');
    }

    function setPhaseBadge() {
      const map = { set: '阶段：设置密码', confirm: '阶段：确认图案', verify: '阶段：验证解锁' };
      badge.textContent = map[STATE.phase];
    }

    /* ---- 绘制 ---- */
    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, SIZE, SIZE);
      // 背景
      ctx.fillStyle = '#F7FAFF';
      roundRect(0, 0, SIZE, SIZE, 20); ctx.fill();
      ctx.strokeStyle = '#E3ECFA'; ctx.lineWidth = 1.5;
      roundRect(1, 1, SIZE - 2, SIZE - 2, 19); ctx.stroke();

      // 连线
      if (selected.length > 0) {
        ctx.strokeStyle = flash === 'err' ? '#F53F3F' : (flash === 'ok' ? '#00B42A' : '#0A59F7');
        ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.beginPath();
        selected.forEach((idx, i) => {
          const p = pts[idx];
          if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        });
        if (drawing) ctx.lineTo(cursor.x, cursor.y);
        ctx.stroke();
      }

      // 圆点
      pts.forEach(p => {
        const sel = selected.indexOf(p.idx) >= 0;
        if (sel) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
          ctx.fillStyle = flash === 'err' ? 'rgba(245,63,63,.14)' : (flash === 'ok' ? 'rgba(0,180,42,.14)' : 'rgba(10,89,247,.13)');
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, sel ? 8.5 : 7, 0, Math.PI * 2);
        ctx.fillStyle = sel ? (flash === 'err' ? '#F53F3F' : (flash === 'ok' ? '#00B42A' : '#0A59F7')) : '#C4D0E4';
        ctx.fill();
      });
    }

    /* ---- 逻辑 ---- */
    function finish() {
      if (selected.length === 0) { draw(); return; }
      const str = selected.join(',');

      if (selected.length < 4) {
        say('图案太短啦！至少要连接 4 个点（安全起见）', 'err');
        flashAndClear('err');
        pathView.textContent = '收到：[' + str + '] → 长度不足，拒绝';
        return;
      }

      pathView.textContent = 'onPatternComplete 收到：[' + str + ']';

      if (STATE.phase === 'set') {
        STATE.first = str;
        STATE.phase = 'confirm';
        setPhaseBadge();
        say('第一次记录成功：' + str + '。请原样再画一遍以确认 👆', 'ok');
        flashAndClear('ok');
      } else if (STATE.phase === 'confirm') {
        if (str === STATE.first) {
          STATE.saved = str;
          STATE.phase = 'verify';
          setPhaseBadge();
          say('✅ 密码设置成功！现在试着画出刚才的图案来解锁', 'ok');
          kvPut('pattern', str, '手势密码（savePattern）');
          kvPut('pattern_set_at', nowStr(), '设置时间');
          flashAndClear('ok');
        } else {
          STATE.first = '';
          STATE.phase = 'set';
          setPhaseBadge();
          say('❌ 两次画的图案不一致，从头再来：重新画第一次', 'err');
          flashAndClear('err');
        }
      } else {
        if (str === STATE.saved) {
          say('🎉 解锁成功！欢迎回来（图案匹配）', 'ok');
          kvPut('last_unlock', nowStr(), '最近解锁时间');
          flashAndClear('ok');
        } else {
          say('❌ 图案错误，再试一次（把这次当作一次"验证失败"）', 'err');
          flashAndClear('err');
        }
      }
    }

    function flashAndClear(color) {
      flash = color;
      if (clearTimer) clearTimeout(clearTimer);
      clearTimer = setTimeout(() => {
        flash = null;
        selected = [];
        draw();
      }, 640);
      draw();
    }

    function nowStr() {
      const d = new Date();
      const p = n => (n < 10 ? '0' : '') + n;
      return p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
    }

    function posOf(e) {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches && e.touches.length ? e.touches[0] : e;
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    }

    function hitCheck() {
      pts.forEach(p => {
        if (selected.indexOf(p.idx) >= 0) return;
        const dx = cursor.x - p.x, dy = cursor.y - p.y;
        if (dx * dx + dy * dy <= HIT * HIT) {
          selected.push(p.idx);
        }
      });
    }

    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (clearTimer) { clearTimeout(clearTimer); clearTimer = null; flash = null; }
      selected = [];
      drawing = true;
      cursor = posOf(e);
      hitCheck(); draw();
    });
    window.addEventListener('mousemove', (e) => {
      if (!drawing) return;
      cursor = posOf(e);
      hitCheck(); draw();
    });
    window.addEventListener('mouseup', () => {
      if (!drawing) return;
      drawing = false;
      finish();
    });
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (clearTimer) { clearTimeout(clearTimer); clearTimer = null; flash = null; }
      selected = [];
      drawing = true;
      cursor = posOf(e);
      hitCheck(); draw();
    }, { passive: false });
    canvas.addEventListener('touchmove', (e) => {
      if (!drawing) return;
      e.preventDefault();
      cursor = posOf(e);
      hitCheck(); draw();
    }, { passive: false });
    canvas.addEventListener('touchend', (e) => {
      if (!drawing) return;
      e.preventDefault();
      drawing = false;
      finish();
    }, { passive: false });

    /* ---- 按钮 ---- */
    document.getElementById('p4-reset-btn').addEventListener('click', () => {
      selected = []; flash = null; drawing = false;
      if (clearTimer) { clearTimeout(clearTimer); clearTimer = null; }
      STATE.phase = 'set'; STATE.first = ''; STATE.saved = '';
      setPhaseBadge();
      say('已清空，重新开始：先设置一个新图案', '');
      pathView.textContent = '';
      draw();
    });
    document.getElementById('p4-forget-btn').addEventListener('click', () => {
      kvDelete('pattern'); kvDelete('pattern_set_at'); kvDelete('last_unlock');
      STATE.phase = 'set'; STATE.first = ''; STATE.saved = '';
      setPhaseBadge();
      selected = []; flash = null; draw();
      say('密码已删除（delete + flush），请重新设置', 'warn');
      pathView.textContent = '';
    });

    draw();
    setPhaseBadge();

    /* ---- Preferences "柜子" ---- */
    const kvData = {};
    function renderKv() {
      const body = document.getElementById('p4-kv-body');
      const keys = Object.keys(kvData);
      if (!keys.length) {
        body.innerHTML = '<tr><td colspan="3" style="color:#B0BACA;font-family:var(--font);">（还没有数据——先去右边设置一个手势密码）</td></tr>';
        return;
      }
      body.innerHTML = keys.map(k =>
        '<tr class="new-row"><td>' + k + '</td><td class="val">' + kvData[k].v + '</td><td style="font-family:var(--font);color:#8C97AB;">' + kvData[k].note + '</td></tr>'
      ).join('');
    }
    function kvPut(k, v, note) { kvData[k] = { v: v, note: note }; renderKv(); }
    function kvDelete(k) { delete kvData[k]; renderKv(); }
    renderKv();
  }

  /* ============================================================
     项目 5 · Web 组件演示
     ============================================================ */
  let p5Inited = false;
  HL.onShow['p5'] = function () {
    if (p5Inited) return; p5Inited = true;

    /* ---- 生命周期 ---- */
    const lcBox = document.getElementById('p5-lc-detail');
    HL.$$('#p5-lc-board .arch-col').forEach(col => {
      col.addEventListener('click', () => {
        HL.$$('#p5-lc-board .arch-col').forEach(c => c.classList.remove('hot'));
        col.classList.add('hot');
        lcBox.innerHTML = col.dataset.detail;
      });
    });

    /* ---- 通信日志 ---- */
    const logBox = document.getElementById('p5-log');
    function addLog(text, cls) {
      const d = new Date();
      const p = n => (n < 10 ? '0' : '') + n;
      const time = p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
      const line = document.createElement('div');
      line.innerHTML = '<span class="lg-time">[' + time + ']</span><span class="' + (cls || '') + '">' + text + '</span>';
      logBox.appendChild(line);
      logBox.scrollTop = logBox.scrollHeight;
    }
    addLog('Web 组件已就绪 · onPageEnd: shop/index.html 加载完成', 'lg-sys');

    const page = document.getElementById('p5-page');
    const sale = document.getElementById('p5-sale');

    /* 应用侧 → 网页 */
    document.getElementById('p5-app-btn1').addEventListener('click', () => {
      page.style.background = '#EAF2FF';
      addLog('应用侧执行：runJavaScript("setBgColor(\'#EAF2FF\')")', 'lg-sys');
      addLog('→ 网页背景已变为浅蓝色 ✅', 'lg-ok');
      HL.toast('App 侧代码执行成功：网页背景已变化');
    });
    document.getElementById('p5-app-btn2').addEventListener('click', () => {
      sale.style.display = 'block';
      sale.classList.add('pop');
      addLog('应用侧执行：runJavaScript("showSaleBanner()")', 'lg-sys');
      addLog('→ 网页顶部出现促销横幅 🎉', 'lg-ok');
    });
    document.getElementById('p5-app-btn3').addEventListener('click', () => {
      addLog('应用侧执行：runJavaScript("document.title")', 'lg-sys');
      setTimeout(() => addLog('→ 返回结果："体育用品商城"', 'lg-ok'), 380);
    });

    /* 网页 → 应用侧 */
    document.getElementById('p5-web-btn').addEventListener('click', () => {
      addLog('网页执行：window.shopBridge.checkout()', 'lg-warn');
      setTimeout(() => {
        addLog('App 收到调用 → showToast("结算成功，感谢购买！")', 'lg-ok');
        HL.toast('📣 App 侧弹窗：结算成功，感谢购买！（来自网页的调用）');
      }, 420);
    });
  };
})();
