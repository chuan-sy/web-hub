/* ============================================================
   项目 6 & 7 & 8 互动演示
   ============================================================ */
(function () {
  'use strict';
  const HL = window.HL;

  /* ============================================================
     项目 6 · 计算器 + 桌面卡片
     ============================================================ */
  let p6Inited = false;
  HL.onShow['p6'] = function () {
    if (p6Inited) return; p6Inited = true;
    initCalculator();
    initDesktop();
  };

  function initCalculator() {
    const out = document.getElementById('p6-out');
    const expr = document.getElementById('p6-expr');
    if (!out) return;

    const S = { cur: '0', prev: null, op: null, waiting: false, expr: '' };

    const fmt = (s) => {
      if (s === '错误' || s.indexOf('e') >= 0) return s;
      const parts = s.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    };

    function render() {
      out.textContent = fmt(S.cur);
      expr.innerHTML = S.expr ? fmt(S.expr) : '&nbsp;';
      out.classList.add('val-pop');
      setTimeout(() => out.classList.remove('val-pop'), 300);
    }

    function compute(a, b, op) {
      const x = parseFloat(a), y = parseFloat(b);
      let r = 0;
      if (op === '+') r = x + y;
      else if (op === '−') r = x - y;
      else if (op === '×') r = x * y;
      else if (op === '÷') { if (y === 0) return '错误'; r = x / y; }
      else r = y;
      r = Math.round(r * 1e10) / 1e10;
      if (Math.abs(r) >= 1e12) return r.toExponential(4);
      return String(r);
    }

    function press(k) {
      if (/[0-9]/.test(k)) {
        if (S.cur === '错误') { S.cur = '0'; S.expr = ''; }
        if (S.waiting) { S.cur = k; S.waiting = false; }
        else if (S.cur.length < 11) S.cur = (S.cur === '0' ? k : S.cur + k);
      } else if (k === '.') {
        if (S.waiting) { S.cur = '0.'; S.waiting = false; }
        else if (S.cur.indexOf('.') < 0 && S.cur.length < 11) S.cur += '.';
      } else if (k === 'C') {
        S.cur = '0'; S.prev = null; S.op = null; S.waiting = false; S.expr = '';
      } else if (k === 'neg') {
        if (S.cur !== '0' && S.cur !== '错误') S.cur = S.cur.charAt(0) === '-' ? S.cur.slice(1) : '-' + S.cur;
      } else if (k === '%') {
        if (S.cur !== '错误') { S.cur = String(Math.round(parseFloat(S.cur) / 100 * 1e10) / 1e10); }
      } else if (['+', '−', '×', '÷'].indexOf(k) >= 0) {
        if (S.op && !S.waiting) {
          S.cur = compute(S.prev, S.cur, S.op);
        }
        S.prev = S.cur === '错误' ? '0' : S.cur;
        S.op = k;
        S.waiting = true;
        S.expr = S.prev + ' ' + k;
        if (S.cur !== '错误') pushToWidget(S.prev + ' ' + k + ' …');
      } else if (k === '=') {
        if (S.op) {
          if (S.cur !== '错误') {
            const r = compute(S.prev, S.cur, S.op);
            S.expr = S.prev + ' ' + S.op + ' ' + S.cur + ' =';
            S.cur = r;
            pushToWidget(r);
          }
          S.prev = null; S.op = null; S.waiting = true;
        }
      }
      render();
    }

    /* 把结果"推送"到桌面卡片（模拟 updateForm） */
    function pushToWidget(text) {
      const wv = document.getElementById('p6-widget-val');
      const ws = document.getElementById('p6-widget-sub');
      if (!wv) return;
      wv.textContent = fmt(String(text));
      wv.classList.add('val-pop');
      setTimeout(() => wv.classList.remove('val-pop'), 360);
      if (ws) ws.textContent = 'updateForm 刷新于 ' + nowStr();
    }

    HL.$$('.calc-btn').forEach(b => {
      b.addEventListener('click', () => {
        press(b.dataset.k);
        b.classList.add('pop');
        setTimeout(() => b.classList.remove('pop'), 220);
      });
    });

    render();
  }

  function nowStr() {
    const d = new Date();
    const p = n => (n < 10 ? '0' : '') + n;
    return p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
  }

  function initDesktop() {
    // 桌面时钟
    const clock = document.getElementById('p6-dw-time');
    if (clock) {
      const tick = () => {
        const d = new Date();
        const p = n => (n < 10 ? '0' : '') + n;
        clock.textContent = p(d.getHours()) + ':' + p(d.getMinutes());
      };
      tick();
      setInterval(tick, 20000);
    }
    // 卡片尺寸切换
    const seg = document.getElementById('p6-size-seg');
    const widget = document.getElementById('p6-widget');
    const sizeLbl = document.getElementById('p6-widget-size');
    if (seg && widget) {
      HL.$$('button', seg).forEach(b => {
        b.addEventListener('click', () => {
          HL.$$('button', seg).forEach(x => x.classList.remove('on'));
          b.classList.add('on');
          const wide = b.dataset.s === '2x4';
          widget.classList.toggle('wide', wide);
          if (sizeLbl) sizeLbl.textContent = b.dataset.s;
          widget.classList.add('pop');
          setTimeout(() => widget.classList.remove('pop'), 320);
          HL.toast('卡片尺寸切换：' + b.dataset.s + '（配置在 widget/profile 里声明）');
        });
      });
    }
  }

  /* ============================================================
     项目 7 · 网络请求
     ============================================================ */
  let p7Inited = false;
  HL.onShow['p7'] = function () {
    if (p7Inited) return; p7Inited = true;
    initNetworkDemo();
  };

  const NEWS = [
    { id: 1, title: '图书馆本周末延长开放至 22:00', time: '10-12 08:30', tag: '通知' },
    { id: 2, title: '校园歌手大赛报名开始啦', time: '10-11 16:20', tag: '活动' },
    { id: 3, title: '四六级考试报名截止提醒', time: '10-11 09:00', tag: '考试' },
    { id: 4, title: '食堂三楼新窗口试营业', time: '10-10 11:45', tag: '生活' }
  ];

  function initNetworkDemo() {
    const seg = document.getElementById('p7-net-seg');
    const badge = document.getElementById('p7-net-badge');
    const sendBtn = document.getElementById('p7-send');
    const logBox = document.getElementById('p7-log');
    const jsonBox = document.getElementById('p7-json');
    const renderBox = document.getElementById('p7-render');
    const packet = document.getElementById('p7-packet1');
    const nodeApp = document.getElementById('p7-node-app');
    const nodeServer = document.getElementById('p7-node-server');
    if (!sendBtn) return;

    let net = 'wifi';
    let busy = false;

    function log(text, cls) {
      const line = document.createElement('div');
      line.innerHTML = '<span class="lg-time">[' + nowStr() + ']</span><span class="' + (cls || '') + '">' + text + '</span>';
      logBox.appendChild(line);
      logBox.scrollTop = logBox.scrollHeight;
    }
    log('网络模块初始化完成（http.createHttp()）', 'lg-sys');

    HL.$$('button', seg).forEach(b => {
      b.addEventListener('click', () => {
        HL.$$('button', seg).forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        net = b.dataset.net;
        if (net === 'wifi') {
          badge.className = 'net-badge wifi';
          badge.textContent = '📶 Wi-Fi 已连接';
          log('on(\'netAvailable\') → 网络已恢复', 'lg-ok');
        } else {
          badge.className = 'net-badge offline';
          badge.textContent = '✈️ 无网络连接';
          log('on(\'netLost\') → 设备已断网！', 'lg-err');
        }
      });
    });

    function formatJsonLine(obj) {
      const json = JSON.stringify(obj, null, 2);
      return json
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/"([^"]+)":/g, '<span class="jk">"$1"</span>:')
        .replace(/: "([^"]*)"/g, ': <span class="jv">"$1"</span>')
        .replace(/: (\d+)/g, ': <span class="jn">$1</span>');
    }

    function doSend() {
      if (busy) return;
      busy = true;
      nodeApp.classList.remove('err'); nodeServer.classList.remove('err', 'hot');

      if (net === 'off') {
        nodeApp.classList.add('err');
        log('httpRequest.request("…/api/news") → 发起请求…', 'lg-sys');
        setTimeout(() => {
          log('❌ 请求失败：{ code: 2300007, message: "Couldn\'t resolve host / 无网络" }', 'lg-err');
          log('→ 正确姿势：捕获错误 + 给用户友好提示（Toast/空态页）', 'lg-warn');
          jsonBox.innerHTML = '<span style="color:#F53F3F;">// 请求失败，无数据</span>';
          renderBox.innerHTML = '<div style="text-align:center;padding:44px 0;"><div style="font-size:30px;">📡</div><div style="color:#8C97AB;font-size:12.5px;margin-top:8px;">网络不可用，请检查连接后重试</div></div>';
          busy = false;
        }, 700);
        return;
      }

      // 正常流程
      log('httpRequest.request("http://localhost:3000/api/news") → 发起 GET 请求…', 'lg-sys');
      jsonBox.innerHTML = '<span style="color:#8C97AB;">// 请求进行中…</span>';
      // 1) 请求包飞出
      packet.classList.remove('go', 'back'); void packet.offsetWidth;
      packet.classList.add('go');

      setTimeout(() => {
        nodeServer.classList.add('hot');
        log('服务器收到请求 → 查询数据 → 组装 JSON 响应', 'lg-sys');
      }, 1050);

      setTimeout(() => {
        // 2) 响应包飞回
        packet.classList.remove('go', 'back'); void packet.offsetWidth;
        packet.classList.add('back');
        log('收到响应：HTTP 200 · Content-Type: application/json', 'lg-ok');
      }, 1650);

      setTimeout(() => {
        nodeApp.classList.add('hot');
        jsonBox.innerHTML = formatJsonLine(NEWS);
        log('JSON.parse(data.result) → 解析出 ' + NEWS.length + ' 条数据', 'lg-sys');

        renderBox.innerHTML = NEWS.map(n =>
          '<div style="background:#fff;border-radius:11px;padding:10px 13px;margin-bottom:8px;box-shadow:0 1px 4px rgba(20,40,90,.06);" class="pop">' +
          '<div style="font-size:13px;font-weight:600;color:#16233A;">' + n.title + '</div>' +
          '<div style="font-size:11px;color:#96A2BC;margin-top:3px;">🕐 ' + n.time + ' · <span style="color:#0A59F7;">' + n.tag + '</span></div>' +
          '</div>').join('');
        log('✅ 数据已渲染到列表（ForEach 循环生成每条新闻）', 'lg-ok');
        busy = false;
        setTimeout(() => {
          nodeServer.classList.remove('hot');
          nodeApp.classList.remove('hot');
        }, 1200);
      }, 2750);
    }

    sendBtn.addEventListener('click', doSend);
  }

  /* ============================================================
     项目 8 · 状态机 + 视频播放器
     ============================================================ */
  let p8Inited = false;
  HL.onShow['p8'] = function () {
    if (p8Inited) return; p8Inited = true;
    initFSM();
    initPlayer();
  };

  /* ---- 状态机 ---- */
  function initFSM() {
    const logBox = document.getElementById('p8-fsm-log');
    if (!logBox || !document.querySelector('#page-p8 .fsm-state')) return;
    let state = 'idle';

    function log(text, cls) {
      const line = document.createElement('div');
      line.innerHTML = '<span class="lg-time">[' + nowStr() + ']</span><span class="' + (cls || '') + '">' + text + '</span>';
      logBox.appendChild(line);
      logBox.scrollTop = logBox.scrollHeight;
    }

    function paint() {
      HL.$$('#page-p8 .fsm-state').forEach(el => {
        el.classList.toggle('on', el.dataset.s === state);
      });
    }

    const NAMES = {
      create: 'createAVPlayer() 创建实例', url: "avPlayer.url = 'demo_sunset.mp4'",
      prepare: 'prepare() 准备播放', play: 'play() 开始播放', pause: 'pause() 暂停',
      stop: 'stop() 停止', reset: 'reset() 重置', release: 'release() 销毁实例'
    };

    function act(a) {
      let ok = false, next = state;
      switch (a) {
        case 'create': ok = (state === 'idle' || state === 'released'); next = 'idle'; break;
        case 'url': ok = (state === 'idle'); next = 'initialized'; break;
        case 'prepare': ok = (state === 'initialized'); next = 'prepared'; break;
        case 'play': ok = (['prepared', 'paused', 'completed'].indexOf(state) >= 0); next = 'playing'; break;
        case 'pause': ok = (state === 'playing'); next = 'paused'; break;
        case 'stop': ok = (['prepared', 'playing', 'paused', 'completed'].indexOf(state) >= 0); next = 'stopped'; break;
        case 'reset': ok = (state !== 'idle'); next = 'idle'; break;
        case 'release': ok = (state !== 'released'); next = 'released'; break;
      }
      if (ok) {
        log('✅ ' + NAMES[a] + ' → 状态：' + state + ' ➜ ' + next, 'lg-ok');
        state = next;
      } else {
        log('❌ ' + NAMES[a] + ' 失败：当前状态 ' + state + ' 不允许该操作', 'lg-err');
      }
      paint();
    }

    HL.$$('#page-p8 [data-act]').forEach(b => {
      b.addEventListener('click', () => act(b.dataset.act));
    });
    log('播放器已创建：state = idle（初始状态）', 'lg-sys');
    paint();
  }

  /* ---- 视频播放器 ---- */
  function initPlayer() {
    const player = document.getElementById('p8-player');
    const fill = document.getElementById('p8-fill');
    const curEl = document.getElementById('p8-cur');
    const durEl = document.getElementById('p8-dur');
    const playbtn = document.getElementById('p8-playbtn');
    const play2 = document.getElementById('p8-play2');
    const bar = document.getElementById('p8-bar');
    const tip = document.getElementById('p8-tip');
    const hint = document.getElementById('p8-gesture-hint');
    const speedEl = document.getElementById('p8-speed');
    if (!player || !fill) return;

    const V = { cur: 0, dur: 60, playing: false, speed: 1, timer: null };

    const fmtT = (s) => {
      s = Math.max(0, Math.round(s));
      const m = Math.floor(s / 60), ss = s % 60;
      return (m < 10 ? '0' : '') + m + ':' + (ss < 10 ? '0' : '') + ss;
    };

    function ui() {
      fill.style.width = (V.cur / V.dur * 100) + '%';
      curEl.textContent = fmtT(V.cur);
      durEl.textContent = fmtT(V.dur);
    }

    function setPlayState(on) {
      V.playing = on;
      playbtn.textContent = on ? '❚❚' : '▶';
      play2.textContent = on ? '❚❚' : '▶';
      HL.$$('.vp-cloud', player).forEach(c => { c.style.animationPlayState = on ? 'running' : 'paused'; });
      if (on) {
        if (!V.timer) V.timer = setInterval(() => {
          V.cur += 0.1 * V.speed;
          if (V.cur >= V.dur) { V.cur = V.dur; ui(); setPlayState(false); return; }
          ui();
        }, 100);
      } else {
        clearInterval(V.timer); V.timer = null;
      }
    }

    playbtn.addEventListener('click', () => setPlayState(!V.playing));
    play2.addEventListener('click', () => setPlayState(!V.playing));
    document.getElementById('p8-back10').addEventListener('click', () => { V.cur = Math.max(0, V.cur - 10); ui(); HL.toast('seek(' + Math.round(V.cur * 1000) + ') 后退 10 秒'); });
    document.getElementById('p8-fwd10').addEventListener('click', () => { V.cur = Math.min(V.dur, V.cur + 10); ui(); HL.toast('seek(' + Math.round(V.cur * 1000) + ') 前进 10 秒'); });
    speedEl.addEventListener('click', () => {
      V.speed = V.speed === 1 ? 1.5 : (V.speed === 1.5 ? 2 : 1);
      speedEl.textContent = V.speed.toFixed(1) + 'x';
      HL.toast('setSpeed(' + V.speed + ') 倍速播放');
    });
    document.getElementById('p8-full').addEventListener('click', () => {
      HL.toast('全屏播放：真实项目中会切换布局方向 + 调整 XComponent 尺寸');
    });

    /* 进度条点击 / 悬停提示 */
    bar.addEventListener('click', (e) => {
      const rect = bar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      V.cur = ratio * V.dur;
      ui();
      HL.toast('seek(' + Math.round(V.cur * 1000) + ' ms)');
    });
    bar.addEventListener('mousemove', (e) => {
      const rect = bar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      tip.textContent = fmtT(ratio * V.dur);
      tip.style.left = (ratio * 100) + '%';
    });

    /* 手势：水平滑动快进 / 后退 */
    let g = null;
    function hintShow(txt) { hint.textContent = txt; hint.classList.add('show'); }
    function hintHide() { hint.classList.remove('show'); }

    player.addEventListener('mousedown', (e) => {
      if (e.target.closest('.vp-controls') || e.target.closest('.vp-center')) return;
      g = { x0: e.clientX, t0: V.cur, target: null };
    });
    window.addEventListener('mousemove', (e) => {
      if (!g) return;
      const dx = e.clientX - g.x0;
      if (Math.abs(dx) > 16) {
        const delta = dx / player.clientWidth * V.dur;
        const t = Math.min(V.dur, Math.max(0, g.t0 + delta));
        g.target = t;
        hintShow((delta > 0 ? '⏩ 快进到 ' : '⏪ 后退到 ') + fmtT(t));
      }
    });
    window.addEventListener('mouseup', () => {
      if (g && g.target != null) {
        V.cur = g.target; ui();
        HL.toast('PanGesture.onActionEnd → seek(' + Math.round(V.cur * 1000) + ')');
      }
      hintHide(); g = null;
    });

    /* 触摸版 */
    player.addEventListener('touchstart', (e) => {
      if (e.target.closest('.vp-controls') || e.target.closest('.vp-center')) return;
      const t = e.touches[0];
      g = { x0: t.clientX, t0: V.cur, target: null };
    }, { passive: true });
    player.addEventListener('touchmove', (e) => {
      if (!g) return;
      const t = e.touches[0];
      const dx = t.clientX - g.x0;
      if (Math.abs(dx) > 16) {
        const delta = dx / player.clientWidth * V.dur;
        const target = Math.min(V.dur, Math.max(0, g.t0 + delta));
        g.target = target;
        hintShow((delta > 0 ? '⏩ 快进到 ' : '⏪ 后退到 ') + fmtT(target));
      }
    }, { passive: true });
    player.addEventListener('touchend', () => {
      if (g && g.target != null) { V.cur = g.target; ui(); }
      hintHide(); g = null;
    });

    /* 初始化：画面暂停、进度归零 */
    HL.$$('.vp-cloud', player).forEach(c => { c.style.animationPlayState = 'paused'; });
    ui();
  }
})();
