/* ============================================================
   鸿蒙学习实验室 · 核心脚本
   导航 / 代码高亮 / 通用工具 / 首页
   ============================================================ */
(function () {
  'use strict';

  const HL = window.HL = window.HL || {};
  const onShow = HL.onShow = {};   // 各页面显示时的回调（演示延迟初始化）

  /* ---------- 小工具 ---------- */
  HL.$ = (sel, root) => (root || document).querySelector(sel);
  HL.$$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  HL.toast = function (msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2200);
  };

  /* ---------- 页面切换 ---------- */
  let currentPage = 'home';
  HL.go = function (page) {
    const el = document.getElementById('page-' + page);
    if (!el) return;
    HL.$$('.page').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    HL.$$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === page));
    window.scrollTo(0, 0);
    currentPage = page;
    try { history.replaceState(null, '', '#' + page); } catch (e) { }
    if (onShow[page]) onShow[page]();
    document.getElementById('sidebar').classList.remove('open');
  };

  /* ---------- 代码高亮 ---------- */
  const KEYWORDS = ('struct let const function return if else for while do switch case break continue default ' +
    'new class interface extends implements import from export async await this super try catch finally throw ' +
    'typeof instanceof in of null undefined true false void enum type declare namespace get set static public ' +
    'private protected readonly override abstract as is keyof').split(' ');

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlightText(src) {
    const tokens = [];
    // 1) 先把注释与字符串抽出来保护
    let text = src.replace(
      /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|('(?:[^'\\\n]|\\.)*')|("(?:[^"\\\n]|\\.)*")|(`(?:[^`\\]|\\.)*`)/g,
      function (m, com1, com2, s1, s2, s3) {
        const i = tokens.length;
        if (com1 || com2) tokens.push('<span class="c">' + escapeHtml(m) + '</span>');
        else tokens.push('<span class="s">' + escapeHtml(m) + '</span>');
        return '\u0001' + 'x'.repeat(i + 1) + '\u0002';
      });
    // 2) 转义剩余文本
    text = escapeHtml(text);
    // 3) 装饰器 @Xxx（同样放入 token 保护，避免插入的 class 属性被后续关键字替换误伤）
    text = text.replace(/@[A-Za-z_]\w*/g, function (m) {
      const i = tokens.length;
      tokens.push('<span class="d">' + m + '</span>');
      return '\u0001' + 'x'.repeat(i + 1) + '\u0002';
    });
    // 4) 关键字
    const kwRe = new RegExp('\\b(' + KEYWORDS.join('|') + ')\\b', 'g');
    text = text.replace(kwRe, m => '<span class="k">' + m + '</span>');
    // 5) 数字
    text = text.replace(/\b\d+(\.\d+)?\b/g, m => '<span class="n">' + m + '</span>');
    // 6) 类型 / 组件（大写开头）
    text = text.replace(/\b[A-Z][A-Za-z0-9_]*\b/g, m => '<span class="t">' + m + '</span>');
    // 7) 函数调用
    text = text.replace(/\b([a-z_]\w*)(?=\()/g, m => '<span class="f">' + m + '</span>');
    // 8) 还原受保护的 token
    text = text.replace(/\u0001(x+)\u0002/g, function (m, xs) { return tokens[xs.length - 1] || ''; });
    return text;
  }

  function highlightAll() {
    HL.$$('.codeblock code').forEach(function (el) {
      if (el.dataset.hl) return;
      const raw = el.textContent;
      el.innerHTML = highlightText(raw);
      el.dataset.hl = '1';
    });
  }
  HL.highlightAll = highlightAll;
  HL.highlightText = highlightText;   // 供词典等动态内容使用

  /* ---------- 阅读进度 ---------- */
  function initProgress() {
    const bar = document.getElementById('readProgress');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0';
    }, { passive: true });
  }

  /* ---------- 全局交互委托 ---------- */
  function initGlobal() {
    // 导航点击
    HL.$$('.nav-item').forEach(function (n) {
      n.addEventListener('click', function () { HL.go(n.dataset.page); });
    });
    // 目标勾选
    document.addEventListener('click', function (e) {
      const ck = e.target.closest('.gi-check');
      if (ck) {
        const item = ck.closest('.goal-item');
        item.classList.toggle('done');
        ck.textContent = item.classList.contains('done') ? '✓' : '';
      }
    });
    // 移动端侧栏开关（顶部双击品牌打开）
    const brand = HL.$('.brand-logo');
    if (brand) brand.addEventListener('click', function () {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  /* ---------- 通用：目标勾选列表工厂 ---------- */
  HL.buildGoals = function (containerId, goals) {
    const box = document.getElementById(containerId);
    if (!box) return;
    box.innerHTML = goals.map(function (g) {
      return '<div class="goal-item"><span class="gi-check"></span><span>' + g + '</span></div>';
    }).join('');
  };

  /* ---------- 启动 ---------- */
  function boot() {
    initGlobal();
    initProgress();
    highlightAll();
    // 根据 hash 打开页面
    const h = (location.hash || '').replace('#', '');
    if (h && document.getElementById('page-' + h)) {
      HL.go(h);
    } else {
      HL.go('home');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
