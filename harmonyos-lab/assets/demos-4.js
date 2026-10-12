/* ============================================================
   项目 9 & 10 互动演示
   ============================================================ */
(function () {
  'use strict';
  const HL = window.HL;

  /* ============================================================
     项目 9 · 元服务卡片直达
     ============================================================ */
  let p9Inited = false;
  HL.onShow['p9'] = function () {
    if (p9Inited) return; p9Inited = true;

    const service = document.getElementById('p9-service');
    const cardTap = document.getElementById('p9-card-tap');
    const closeBtn = document.getElementById('p9-close');
    const startBtn = document.getElementById('p9-start');
    if (!service || !cardTap) return;

    let charging = false;
    let level = 42;
    let timer = null;

    function renderCard() {
      const num = cardTap.querySelector('span[style*="font-size:30px"]');
      const sub = cardTap.querySelector('span[style*="font-size:12px"]');
      if (num) num.textContent = level + '%';
      if (sub) sub.textContent = charging ? '充电中 · 轻触查看' : '电量 · 未在充电';
      const bigNum = document.querySelector('#p9-service span[style*="font-size:44px"]');
      if (bigNum) bigNum.innerHTML = level + '<span style="font-size:20px;">%</span>';
    }

    cardTap.addEventListener('click', () => {
      service.style.transform = 'translateY(0)';
      HL.toast('从卡片直达服务：无需下载、无需安装 ✨');
    });
    closeBtn.addEventListener('click', () => {
      service.style.transform = 'translateY(105%)';
    });

    startBtn.addEventListener('click', () => {
      if (charging) {
        charging = false;
        clearInterval(timer); timer = null;
        startBtn.textContent = '开始充电';
        renderCard();
        return;
      }
      charging = true;
      startBtn.textContent = '停止充电';
      HL.toast('元服务开始充电（状态同步到桌面卡片）');
      timer = setInterval(() => {
        level = Math.min(100, level + 2);
        renderCard();
        if (level >= 100) {
          clearInterval(timer); timer = null;
          charging = false;
          startBtn.textContent = '已充满 · 再充一次';
        }
      }, 320);
    });

    renderCard();
  };

  /* ============================================================
     项目 10 · 智能充电
     ============================================================ */
  let p10Inited = false;
  HL.onShow['p10'] = function () {
    if (p10Inited) return; p10Inited = true;
    initCharger();
  };

  function initCharger() {
    const ring = document.getElementById('p10-ring');
    const pctEl = document.getElementById('p10-pct');
    const stateEl = document.getElementById('p10-state');
    const powerEl = document.getElementById('p10-power');
    const elapsedEl = document.getElementById('p10-elapsed');
    const etaEl = document.getElementById('p10-eta');
    const toggleBtn = document.getElementById('p10-toggle');
    const modeSeg = document.getElementById('p10-mode');
    if (!ring || !toggleBtn) return;

    const CIRC = 502.65;
    const S = { level: 42, charging: false, mode: '标准', power: 0, elapsedSec: 0, timer: null };

    const SPEED = { '快充': 5.0, '标准': 2.3 };   // 每秒电量增幅（演示加速版）

    function fmtSec(s) {
      s = Math.max(0, Math.round(s));
      const m = Math.floor(s / 60), ss = s % 60;
      return (m < 10 ? '0' : '') + m + ':' + (ss < 10 ? '0' : '') + ss;
    }

    function render() {
      ring.style.strokeDashoffset = CIRC * (1 - S.level / 100);
      pctEl.textContent = String(Math.floor(S.level));
      powerEl.innerHTML = S.power.toFixed(1) + ' <small style="font-size:11px;">kW</small>';

      const em = Math.floor(S.elapsedSec / 60);
      elapsedEl.textContent = em >= 1 ? em + ' 分 ' + Math.floor(S.elapsedSec % 60) + ' 秒' : Math.floor(S.elapsedSec) + ' 秒';

      if (S.charging && S.level < 100) {
        stateEl.textContent = '充电中 · ' + S.mode + '模式';
        const remainSec = (100 - S.level) / SPEED[S.mode];
        const d = new Date(Date.now() + remainSec * 1000);
        const p = n => (n < 10 ? '0' : '') + n;
        etaEl.textContent = p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds()) + '（约 ' + fmtSec(remainSec) + ' 后）';
      } else if (S.level >= 100) {
        stateEl.textContent = '充电完成 ✅';
        etaEl.textContent = '已充满';
      } else {
        stateEl.textContent = '未在充电';
        etaEl.textContent = '--:--';
      }
    }

    function stop() {
      S.charging = false;
      S.power = 0;
      if (S.timer) { clearInterval(S.timer); S.timer = null; }
      toggleBtn.textContent = S.level >= 100 ? '已充满 · 重新充电' : '开始充电';
      render();
    }

    function start() {
      if (S.level >= 100) S.level = 42;      // 充满后重置演示
      S.charging = true;
      S.power = S.mode === '快充' ? 7.2 : 3.6;
      toggleBtn.textContent = '停止充电';
      if (S.timer) clearInterval(S.timer);
      S.timer = setInterval(() => {
        S.level = Math.min(100, S.level + SPEED[S.mode] * 0.3);
        S.elapsedSec += 0.3;
        render();
        if (S.level >= 100) {
          clearInterval(S.timer); S.timer = null;
          S.charging = false;
          S.power = 0;
          toggleBtn.textContent = '已充满 · 重新充电';
          HL.toast('🔋 充电完成！batteryLevel = 100 → 状态自动切换');
          render();
        }
      }, 300);
      render();
    }

    toggleBtn.addEventListener('click', () => {
      if (S.charging) { stop(); HL.toast('stopCharging() → 定时器已清理，功率归零'); }
      else { start(); HL.toast('startCharging() → setInterval 开始更新状态'); }
    });

    HL.$$('button', modeSeg).forEach(b => {
      b.addEventListener('click', () => {
        HL.$$('button', modeSeg).forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        S.mode = b.dataset.m;
        if (S.charging) S.power = S.mode === '快充' ? 7.2 : 3.6;
        render();
        HL.toast('chargeMode = \'' + S.mode + '\' → @State 变化，功率与速度立即联动');
      });
    });

    render();
  }
})();
