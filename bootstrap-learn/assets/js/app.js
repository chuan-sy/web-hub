/* ============================================================
   app.js —— 渲染引擎与交互
   把 BS_DATA 渲染成页面：目录、章节、知识点卡片、示例舞台、
   代码高亮复制、学习进度、搜索、游乐场
   ============================================================ */
(function () {
  'use strict';

  var DATA = window.BS_DATA || [];
  var PH = window.BS_PH || {};
  var STORE_KEY = 'bslearn.done.v1';

  /* ------------------------- 工具 ------------------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // 用于 HTML 属性值：在 esc 基础上还要处理引号，防止内容里的引号截断属性
  function attr(s) {
    return esc(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // 极简 HTML 语法高亮（注释 / 标签 / 属性 / 属性值）
  function highlight(raw) {
    var s = esc(raw);
    var re = /&lt;!--[\s\S]*?--&gt;|&lt;(\/?)([a-zA-Z][\w:-]*)((?:[^]|\n)*?)(\/?)&gt;/g;
    return s.replace(re, function (m, close, name, attrs, selfclose) {
      if (m.indexOf('&lt;!--') === 0) return '<span class="tok-com">' + m + '</span>';
      var a = (attrs || '').replace(
        /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(\s*=\s*)("[^"]*"|'[^']*')/g,
        function (mm, n, eq, v) {
          return '<span class="tok-attr">' + n + '</span>' + eq + '<span class="tok-str">' + v + '</span>';
        }
      );
      return '<span class="tok-ent">&lt;' + (close || '') + '</span><span class="tok-tag">' + name + '</span>' + a +
        (selfclose ? '<span class="tok-ent">' + selfclose + '</span>' : '') + '<span class="tok-ent">&gt;</span>';
    });
  }

  function slug(s) { return String(s).replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-'); }

  function copyText(text, btn, okLabel) {
    var done = function () {
      if (!btn) return;
      var old = btn.getAttribute('data-label') || btn.textContent;
      btn.setAttribute('data-label', old);
      btn.classList.add('copied');
      btn.innerHTML = '<i class="bi bi-check2"></i> ' + (okLabel || '已复制');
      setTimeout(function () {
        btn.classList.remove('copied');
        btn.textContent = old;
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { }
      document.body.removeChild(ta);
    }
  }

  function eachLeaf(ch, fn) {
    (ch.sections || []).forEach(function (sec) {
      if (sec.children) sec.children.forEach(function (c) { fn(c, sec); });
      else fn(sec, null);
    });
  }

  /* ------------------------- 关键词词典：索引与提取 ------------------------- */
  var GLOSS = window.BS_GLOSSARY || [];
  var GCATS = [];          // 排序后的分类（C1..C10）
  var GEXACT = {};         // 精确匹配：token → 词条
  var GRE = [];            // 正则匹配：[RegExp, 词条]
  var GCOUNT = 0;          // 词条总数

  function buildGlossIndex() {
    GCATS = GLOSS.slice().sort(function (a, b) {
      var na = parseInt(String(a.id).replace(/\D+/g, ''), 10) || 0;
      var nb = parseInt(String(b.id).replace(/\D+/g, ''), 10) || 0;
      return na - nb;
    });
    GCOUNT = 0; GEXACT = {}; GRE = [];
    GCATS.forEach(function (cat) {
      (cat.items || []).forEach(function (it) {
        it.key = slug(it.n);
        it.cat = cat.id;
        it.catName = cat.cat;
        GCOUNT++;
        if (it.re) {
          try { GRE.push([new RegExp(it.re), it]); } catch (e) { }
        }
        var bare = String(it.n).replace(/^\./, '');
        if (/^[a-zA-Z][a-zA-Z0-9-]*$/.test(bare) && !GEXACT[bare]) GEXACT[bare] = it;
        if (it.k) it.k.forEach(function (t) { GEXACT[t] = it; });
      });
    });
  }

  // 从知识点里提取"值得解释的"关键词（类名 + data-bs-* 属性），返回词条数组
  function keywordsFor(item) {
    if (!GCATS.length) return [];
    var hits = [], hitSet = {};
    function push(it) {
      if (it && !hitSet[it.key]) { hitSet[it.key] = 1; hits.push(it); }
    }
    if (item.kw) {
      item.kw.forEach(function (k) { push(matchToken(k)); });
      return hits.slice(0, 10);
    }
    var src = (item.demo || '') + '\n' + ((typeof item.code === 'string' ? item.code : '') || '');
    var tokens = [], seen = {}, m;
    var reClass = /class=\\?"([^"\\]+)\\?"/g;
    while ((m = reClass.exec(src))) {
      m[1].split(/\s+/).forEach(function (t) { if (t && !seen[t]) { seen[t] = 1; tokens.push(t); } });
    }
    var reData = /\bdata-bs-[a-z-]+/g;
    while ((m = reData.exec(src))) {
      if (!seen[m[0]]) { seen[m[0]] = 1; tokens.push(m[0]); }
    }
    for (var i = 0; i < tokens.length && hits.length < 9; i++) push(matchToken(tokens[i]));
    return hits;
  }

  function matchToken(tok) {
    var it = GEXACT[tok] || null;
    if (!it) {
      for (var i = 0; i < GRE.length; i++) { if (GRE[i][0].test(tok)) { it = GRE[i][1]; break; } }
    }
    return it;
  }

  function keysHtml(item) {
    if (item.noKeys) return '';
    var ks = keywordsFor(item);
    if (!ks.length) return '';
    return '<div class="kp-keys"><span class="kk-label"><i class="bi bi-key-fill"></i>关键词</span>' +
      ks.map(function (g) {
        var plain = (g.d || '').replace(/<[^>]+>/g, '').slice(0, 80) + (g.ref ? '（详见 ' + g.ref + '）' : '');
        return '<button type="button" class="key-chip" data-gloss="' + attr(g.key) + '" title="' + attr(plain) + '">' + esc(g.n) + '</button>';
      }).join('') +
      '<span class="kk-note">点标签看白话解释</span></div>';
  }

  // "原生写法 vs Bootstrap 写法" 并排对照块
  function cmpHtml(item) {
    if (!item.cmp || !item.cmp.length) return '';
    return '<div class="cmp"><div class="cmp-title"><i class="bi bi-arrow-left-right"></i>原生对照：同一件事，两种写法</div>' +
      item.cmp.map(function (c) {
        return '<div class="cmp-item">' +
          (c.label ? '<div class="cmp-label">' + esc(c.label) + '</div>' : '') +
          '<div class="cmp-cols">' +
          '<div class="cmp-col native"><div class="cmp-col-head">原生写法</div><pre class="cmp-code">' + highlight(c.native || '') + '</pre></div>' +
          '<div class="cmp-col bs"><div class="cmp-col-head">Bootstrap 写法</div><pre class="cmp-code">' + highlight(c.bs || '') + '</pre></div>' +
          '</div>' +
          (c.note ? '<div class="cmp-note"><i class="bi bi-lightbulb-fill"></i><span>' + esc(c.note) + '</span></div>' : '') +
          '</div>';
      }).join('') + '</div>';
  }

  /* ------------------------- 渲染：目录 ------------------------- */
  function renderSidebar() {
    var nav = document.getElementById('sideNav');
    var html = '';
    DATA.forEach(function (ch) {
      var isGloss = ch.type === 'glossary';
      var leafCount = 0;
      eachLeaf(ch, function () { leafCount++; });
      html += '<div class="sn-ch" style="--sn-accent:' + ch.accent + '" data-ch="' + ch.id + '">' +
        '<button class="sn-ch-head" type="button" data-toggle-ch="' + ch.id + '">' +
        '<span class="dot"></span><span>' + esc(ch.num + ' ' + ch.title) + '</span>' +
        '<span class="cnt">' + (isGloss ? GCOUNT : leafCount) + '</span>' +
        '<i class="bi bi-chevron-down caret"></i></button>' +
        '<div class="sn-ch-body">';
      html += '<a class="sn-sec" href="#' + ch.id + '" data-nav="' + ch.id + '" data-search="' + attr((ch.num + ch.title).toLowerCase()) + '">' +
        '<i class="bi bi-flag"></i> ' + (isGloss ? '词典使用说明' : '本章导读') + '</a>';
      if (isGloss) {
        GCATS.forEach(function (cat) {
          var s = ((cat.cat || '') + ' ' + (cat.items || []).map(function (i) { return i.n; }).join(' ')).toLowerCase();
          html += '<a class="sn-sec" href="#glcat-' + slug(cat.id) + '" data-nav="glcat-' + slug(cat.id) + '" data-search="' + attr(s) + '">' +
            '<span class="sid">' + esc(cat.id) + '</span>' + esc(cat.cat) + '</a>';
        });
      } else {
        (ch.sections || []).forEach(function (sec) {
          if (sec.children) {
            html += '<a class="sn-sec group" href="#sec-' + slug(sec.id) + '" data-nav="sec-' + slug(sec.id) + '" data-search="' +
              attr((sec.id + ' ' + sec.t + ' ' + (sec.d || '')).toLowerCase()) + '">' +
              '<span class="sid">' + esc(sec.id) + '</span>' + esc(sec.t) + '</a>';
            sec.children.forEach(function (c) { html += sideLink(c); });
          } else {
            html += sideLink(sec);
          }
        });
      }
      html += '</div></div>';
    });
    nav.innerHTML = html;
    nav.addEventListener('click', function (e) {
      var t = e.target.closest('[data-toggle-ch]');
      if (t) {
        var box = t.closest('.sn-ch');
        box.classList.toggle('collapsed');
      }
      if (e.target.closest('a')) closeDrawer();
    });
  }

  function sideLink(item) {
    return '<a class="sn-sec" href="#kp-' + slug(item.id) + '" data-nav="kp-' + slug(item.id) + '" data-search="' +
      attr((item.id + ' ' + item.t + ' ' + (item.d || '') + ' ' + (item.tip || '')).toLowerCase()) + '">' +
      '<span class="sid">' + esc(item.id) + '</span>' + esc(item.t) + '</a>';
  }

  /* ------------------------- 渲染：章节 ------------------------- */
  function itemCard(item) {
    var codeText = item.code || (item.demo + (item.js ? '\n\n<script>\n' + item.js + '\n<\/script>' : ''));
    var demoCls = 'demo-stage' + (item.contained ? ' contained' : '') + (item.centered ? ' centered' : '');
    var h = '<article class="kp" id="kp-' + slug(item.id) + '" data-kp="' + esc(item.id) + '" data-search="' +
      attr((item.id + ' ' + item.t + ' ' + (item.d || '') + ' ' + (item.tip || '')).toLowerCase()) + '">';
    h += '<div class="kp-head">' +
      '<span class="kp-id">' + esc(item.id) + '</span>' +
      '<h3 class="kp-title">' + esc(item.t) + '</h3>' +
      '<label class="kp-done" title="学明白后勾选，进度会存在本机"><input type="checkbox" data-kp-check="' + esc(item.id) + '"><span>已掌握</span></label>' +
      '</div>';
    h += '<p class="kp-desc">' + item.d + '</p>';
    h += keysHtml(item);
    if (item.tip) {
      h += '<div class="kp-tip"><i class="bi bi-lightbulb-fill"></i><div>' + item.tip + '</div></div>';
    }
    h += cmpHtml(item);
    if (item.demo) {
      h += '<div class="demo-wrap"><div class="demo-label">' +
        '<span class="tag"><i class="bi bi-activity"></i> 效果预览</span>' +
        (item.hint ? '<span class="hint">' + item.hint + '</span>' : '') +
        '</div><div class="' + demoCls + '" data-demo="' + esc(item.id) + '">' + item.demo + '</div></div>';
    }
    if (codeText) {
      h += '<div class="kp-code" data-code-box>' +
        '<div class="code-bar">' +
        '<span class="code-title"><i class="bi bi-filetype-html"></i> 代码</span>' +
        '<span class="spacer"></span>' +
        '<button class="code-btn" type="button" data-act="copy"><i class="bi bi-clipboard"></i> 复制代码</button>' +
        '<button class="code-btn" type="button" data-act="pg"><i class="bi bi-box-arrow-up-right"></i> 在游乐场改一改</button>' +
        '<button class="code-btn" type="button" data-act="toggle"><i class="bi bi-chevron-down"></i> 展开</button>' +
        '</div>' +
        '<pre class="code-block"><code>' + highlight(codeText) + '</code></pre>' +
        '</div>';
    }
    h += '</article>';
    return h;
  }

  function chHeadHtml(ch) {
    var h = '<header class="ch-head">' +
      '<div class="ch-num"><i class="bi ' + (ch.icon || 'bi-bookmark') + '"></i> ' + esc(ch.num) + '</div>' +
      '<h2>' + esc(ch.title) + '</h2>' +
      '<p class="ch-intro">' + ch.intro + '</p>';
    if (ch.goals && ch.goals.length) {
      h += '<div class="ch-goals"><strong>学完这一章，你能：</strong><ul>' +
        ch.goals.map(function (g) { return '<li>' + g + '</li>'; }).join('') + '</ul></div>';
    }
    if (ch.docs && ch.docs.length) {
      h += '<div class="ch-docs">' + ch.docs.map(function (d) {
        return '<a href="' + d.u + '" target="_blank" rel="noreferrer"><i class="bi bi-link-45deg"></i>' + esc(d.t) + '</a>';
      }).join('') + '</div>';
    }
    h += '</header>';
    return h;
  }

  function chFootHtml(ch) {
    var foot = '<div class="ch-foot">';
    if (ch.summary && ch.summary.length) {
      foot += '<h3><i class="bi bi-list-check"></i> 本章小结</h3><ul>' +
        ch.summary.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>';
    }
    if (ch.practice) {
      var p = ch.practice;
      foot += '<div class="practice"><div class="pt-head"><i class="bi bi-hammer"></i>' + esc(p.t) + '</div>';
      if (p.d) foot += '<p>' + p.d + '</p>';
      if (p.steps && p.steps.length) {
        foot += '<ol>' + p.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>';
      }
      if (p.demo) {
        foot += '<div class="demo-wrap"><div class="demo-label"><span class="tag"><i class="bi bi-activity"></i> 参考效果（简化版）</span>' +
          (p.hint ? '<span class="hint">' + p.hint + '</span>' : '') + '</div>' +
          '<div class="demo-stage' + (p.contained ? ' contained' : '') + '" data-demo="' + esc(p.t) + '"' +
          (p.js ? ' data-demo-js="' + esc(p.t) + '"' : '') + '>' + p.demo + '</div></div>';
      }
      foot += '</div>';
    }
    foot += '</div>';
    return foot;
  }

  function renderChapters() {
    var root = document.getElementById('chapters');
    var html = '';
    DATA.forEach(function (ch) {
      html += '<section class="chapter" id="' + ch.id + '" style="--accent:' + ch.accent + ';--accent-soft:' + ch.accentSoft + '">';
      html += chHeadHtml(ch);
      if (ch.type === 'glossary') {
        html += glossaryBodyHtml();
      } else {
        (ch.sections || []).forEach(function (sec) {
          if (sec.children) {
            html += '<div class="kp-group" id="sec-' + slug(sec.id) + '" data-nav="sec-' + slug(sec.id) + '">' +
              '<h3><span class="gid">' + esc(sec.id) + '</span>' + esc(sec.t) + '</h3>' +
              (sec.d ? '<p>' + sec.d + '</p>' : '') + '</div>';
            sec.children.forEach(function (c) { html += itemCard(c); });
          } else {
            html += itemCard(sec);
          }
        });
      }
      html += chFootHtml(ch);
      html += '</section>';
    });
    root.innerHTML = html;
  }

  /* ------------------------- 示例激活 ------------------------- */
  var DEMO_JS = {};
  function collectDemoJs() {
    DATA.forEach(function (ch) {
      eachLeaf(ch, function (item) { if (item.js) DEMO_JS[item.id] = item.js; });
      if (ch.practice && ch.practice.demo && ch.practice.js) DEMO_JS[ch.practice.t] = ch.practice.js;
    });
  }

  function initPluginsIn(root) {
    if (!window.bootstrap) return;
    root.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
      try { if (!bootstrap.Tooltip.getInstance(el)) new bootstrap.Tooltip(el); } catch (e) { }
    });
    root.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (el) {
      try { if (!bootstrap.Popover.getInstance(el)) new bootstrap.Popover(el); } catch (e) { }
    });
  }

  function activateDemos() {
    document.querySelectorAll('[data-demo]').forEach(function (stage) {
      var id = stage.getAttribute('data-demo');
      var js = DEMO_JS[id];
      if (js) {
        try { new Function('stage', js)(stage); }
        catch (e) { console.warn('[demo] ' + id + ' 脚本出错：', e); }
      }
      initPluginsIn(stage);
    });
  }

  /* ------------------------- 进度 ------------------------- */
  var doneSet = {};
  try { doneSet = JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch (e) { doneSet = {}; }

  function totalLeaves() {
    var n = 0;
    DATA.forEach(function (ch) { eachLeaf(ch, function () { n++; }); });
    return n;
  }

  function saveDone() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(doneSet)); } catch (e) { }
  }

  function refreshProgress() {
    var total = totalLeaves();
    var n = Object.keys(doneSet).length;
    var pct = total ? Math.round(n / total * 100) : 0;
    var bar = document.getElementById('progressBar');
    var txt = document.getElementById('progressText');
    var stxt = document.getElementById('sideProgressText');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = '已掌握 ' + n + ' / ' + total + ' （' + pct + '%）';
    if (stxt) stxt.textContent = '已掌握 ' + n + ' / ' + total + ' （' + pct + '%）';
  }

  function applyProgressToDom() {
    document.querySelectorAll('[data-kp-check]').forEach(function (cb) {
      var id = cb.getAttribute('data-kp-check');
      if (doneSet[id]) { cb.checked = true; cb.closest('.kp').classList.add('done'); }
    });
    refreshProgress();
  }

  function bindProgress() {
    document.getElementById('chapters').addEventListener('change', function (e) {
      var cb = e.target.closest('[data-kp-check]');
      if (!cb) return;
      var id = cb.getAttribute('data-kp-check');
      if (cb.checked) { doneSet[id] = 1; cb.closest('.kp').classList.add('done'); }
      else { delete doneSet[id]; cb.closest('.kp').classList.remove('done'); }
      saveDone();
      refreshProgress();
    });
    var reset = document.getElementById('btnResetProgress');
    if (reset) reset.addEventListener('click', function () {
      if (!confirm('确定要清空全部学习进度吗？')) return;
      doneSet = {};
      saveDone();
      document.querySelectorAll('[data-kp-check]').forEach(function (cb) {
        cb.checked = false; cb.closest('.kp').classList.remove('done');
      });
      refreshProgress();
    });
  }

  /* ------------------------- 代码块交互 ------------------------- */
  function bindCode() {
    document.getElementById('chapters').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var box = btn.closest('[data-code-box]');
      var code = box ? box.querySelector('code') : null;
      var act = btn.getAttribute('data-act');
      if (act === 'toggle') {
        box.classList.toggle('open');
        var open = box.classList.contains('open');
        btn.innerHTML = '<i class="bi bi-chevron-' + (open ? 'up' : 'down') + '"></i> ' + (open ? '收起' : '展开');
      } else if (act === 'copy' && code) {
        copyText(code.textContent, btn);
      } else if (act === 'pg' && code) {
        openPlayground(code.textContent);
      }
    });

    var expandBtn = document.getElementById('btnExpandAll');
    if (expandBtn) expandBtn.addEventListener('click', function () {
      var boxes = document.querySelectorAll('[data-code-box]');
      var anyClosed = Array.prototype.some.call(boxes, function (b) { return !b.classList.contains('open'); });
      boxes.forEach(function (b) {
        b.classList.toggle('open', anyClosed);
        var t = b.querySelector('[data-act="toggle"]');
        if (t) t.innerHTML = '<i class="bi bi-chevron-' + (anyClosed ? 'up' : 'down') + '"></i> ' + (anyClosed ? '收起' : '展开');
      });
      expandBtn.innerHTML = '<i class="bi bi-code-square"></i><span>' + (anyClosed ? '收起全部代码' : '展开全部代码') + '</span>';
    });
  }

  /* ------------------------- 搜索 ------------------------- */
  function bindSearch() {
    var input = document.getElementById('navSearch');
    var clearBtn = document.getElementById('btnClearSearch');
    var hint = document.getElementById('sideHint');
    if (!input) return;

    function apply() {
      var q = input.value.trim().toLowerCase();
      clearBtn.classList.toggle('show', !!q);
      hint.classList.toggle('show', !!q);
      var kps = document.querySelectorAll('.kp');
      var hit = 0;
      kps.forEach(function (kp) {
        var ok = !q || (kp.getAttribute('data-search') || '').indexOf(q) > -1;
        kp.classList.toggle('hidden', !ok);
        if (ok) hit++;
      });
      document.querySelectorAll('.kp-group').forEach(function (g) {
        var any = g.parentElement.querySelector('.kp:not(.hidden)');
        // 只判断该分组之后的兄弟卡片：简化处理——分组标题在搜索时全部显示
        g.classList.remove('hidden');
      });
      document.querySelectorAll('.gloss-card').forEach(function (c) {
        var gok = !q || (c.getAttribute('data-search') || '').indexOf(q) > -1;
        c.classList.toggle('hidden', !gok);
      });
      document.querySelectorAll('.gloss-cat').forEach(function (g) {
        var gany = g.querySelector('.gloss-card:not(.hidden)');
        g.classList.toggle('hidden', !!q && !gany);
      });
      document.querySelectorAll('.chapter').forEach(function (ch) {
        var anyKp = ch.querySelector('.kp:not(.hidden), .gloss-card:not(.hidden)');
        var headMatch = !q || (ch.getAttribute('id') && ch.querySelector('.ch-head').textContent.toLowerCase().indexOf(q) > -1);
        ch.classList.toggle('hidden', !!q && !anyKp && !headMatch);
        ch.querySelectorAll('.ch-foot').forEach(function (f) { f.classList.toggle('hidden', !!q); });
      });
      // 侧栏
      document.querySelectorAll('.sn-sec').forEach(function (a) {
        var ok = !q || (a.getAttribute('data-search') || '').indexOf(q) > -1;
        a.classList.toggle('hidden', !ok);
      });
      document.querySelectorAll('.sn-ch').forEach(function (c) {
        var any = c.querySelector('.sn-sec:not(.hidden)');
        c.style.display = q && !any ? 'none' : '';
        if (q) c.classList.remove('collapsed');
      });
      hint.textContent = q ? ('找到 ' + hit + ' 个知识点' + (hit === 0 ? '，换个词试试？比如「栅格」「按钮」' : '')) : '';
    }

    input.addEventListener('input', apply);
    clearBtn.addEventListener('click', function () { input.value = ''; apply(); input.focus(); });
  }

  /* ------------------------- 关键词词典：渲染与交互 ------------------------- */
  function glossCardHtml(it) {
    var s = (it.n + ' ' + (it.d || '') + ' ' + (it.u || '') + ' ' + (it.nat || '') + ' ' + (it.tip || '') + ' ' + (it.ref || ''))
      .replace(/<[^>]+>/g, ' ').toLowerCase();
    var h = '<article class="gloss-card" id="gl-' + attr(it.key) + '" data-search="' + attr(s) + '" data-cat="' + esc(it.cat) + '">';
    h += '<div class="gloss-head"><span class="gloss-name">' + esc(it.n) + '</span>' +
      '<span class="gloss-cat-badge">' + esc(it.catName) + '</span>' +
      (it.ref ? '<span class="gloss-ref">详见 ' + esc(it.ref) + '</span>' : '') + '</div>';
    h += '<p class="gloss-desc">' + it.d + '</p>';
    if (it.u) {
      h += '<div class="kp-code open gloss-code" data-code-box>' +
        '<div class="code-bar"><span class="code-title"><i class="bi bi-terminal"></i> 怎么用</span><span class="spacer"></span>' +
        '<button class="code-btn" type="button" data-act="copy"><i class="bi bi-clipboard"></i> 复制</button></div>' +
        '<pre class="code-block"><code>' + highlight(it.u) + '</code></pre></div>';
    }
    if (it.nat) h += '<div class="gloss-native"><i class="bi bi-arrow-left-right"></i><span>' + it.nat + '</span></div>';
    if (it.tip) h += '<div class="gloss-tip"><i class="bi bi-exclamation-triangle-fill"></i><span>' + it.tip + '</span></div>';
    h += '</article>';
    return h;
  }

  function glossaryBodyHtml() {
    var h = '<div class="gloss-tools">' +
      '<div class="gloss-search"><i class="bi bi-search"></i>' +
      '<input type="search" id="glossSearch" placeholder="在词典里搜：栅格 / flex / modal / 变量……" autocomplete="off">' +
      '<button class="clear-btn" id="glossClear" type="button" aria-label="清空"><i class="bi bi-x-lg"></i></button></div>' +
      '<div class="gloss-count" id="glossCount"></div>' +
      '</div>' +
      '<div class="gloss-cats" id="glossCats"><button class="gcat-btn active" type="button" data-gcat="all">全部 ' + GCOUNT + '</button>' +
      GCATS.map(function (c) {
        return '<button class="gcat-btn" type="button" data-gcat="' + esc(c.id) + '">' + esc(c.cat) + ' ' + (c.items || []).length + '</button>';
      }).join('') + '</div>';
    h += GCATS.map(function (cat) {
      return '<div class="gloss-cat" id="glcat-' + slug(cat.id) + '" data-nav="glcat-' + slug(cat.id) + '">' +
        '<h3><i class="bi ' + esc(cat.icon || 'bi-collection') + '"></i>' + esc(cat.cat) + '</h3>' +
        (cat.desc ? '<p class="gloss-cat-desc">' + cat.desc + '</p>' : '') +
        '<div class="gloss-grid">' + (cat.items || []).map(glossCardHtml).join('') + '</div></div>';
    }).join('');
    return h;
  }

  var glossResetCat = null; // 由 bindGlossary 注入：重置"分类筛选"

  function resetGlossFilters() {
    var input = document.getElementById('glossSearch');
    if (input && input.value) { input.value = ''; input.dispatchEvent(new Event('input')); }
    if (glossResetCat) glossResetCat();
  }

  function navigateToGloss(key) {
    // 清掉可能存在的筛选（顶部全局搜索 / 词典内筛选），确保目标可见
    var gs = document.getElementById('navSearch');
    if (gs && gs.value) { gs.value = ''; gs.dispatchEvent(new Event('input')); }
    resetGlossFilters();
    var target = document.getElementById('gl-' + key);
    if (!target) return;
    if (target.scrollIntoView) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('flash');
    setTimeout(function () { target.classList.remove('flash'); }, 1800);
  }

  function bindGlossary() {
    var input = document.getElementById('glossSearch');
    var clear = document.getElementById('glossClear');
    var cats = document.getElementById('glossCats');
    if (!input || !cats) return;
    var curCat = 'all';

    function apply() {
      var q = input.value.trim().toLowerCase();
      clear.classList.toggle('show', !!q);
      var shown = 0;
      document.querySelectorAll('.gloss-card').forEach(function (c) {
        var okCat = curCat === 'all' || c.getAttribute('data-cat') === curCat;
        var okQ = !q || (c.getAttribute('data-search') || '').indexOf(q) > -1;
        var ok = okCat && okQ;
        c.classList.toggle('hidden', !ok);
        if (ok) shown++;
      });
      document.querySelectorAll('.gloss-cat').forEach(function (g) {
        var any = g.querySelector('.gloss-card:not(.hidden)');
        g.classList.toggle('hidden', !any);
      });
      var cnt = document.getElementById('glossCount');
      if (cnt) cnt.textContent = (q || curCat !== 'all') ? ('筛选出 ' + shown + ' / ' + GCOUNT + ' 条') : ('共 ' + GCOUNT + ' 条词条');
    }

    input.addEventListener('input', apply);
    clear.addEventListener('click', function () { input.value = ''; apply(); input.focus(); });
    cats.addEventListener('click', function (e) {
      var b = e.target.closest('[data-gcat]');
      if (!b) return;
      curCat = b.getAttribute('data-gcat');
      cats.querySelectorAll('.gcat-btn').forEach(function (x) { x.classList.toggle('active', x === b); });
      apply();
    });
    // 供"关键词芯片跳转"使用：把分类筛选恢复为"全部"
    glossResetCat = function () {
      curCat = 'all';
      cats.querySelectorAll('.gcat-btn').forEach(function (x) {
        x.classList.toggle('active', x.getAttribute('data-gcat') === 'all');
      });
      apply();
    };
    apply();

    // 全站的"关键词芯片"点击 → 跳到词典对应词条
    document.addEventListener('click', function (e) {
      var chip = e.target.closest('.key-chip');
      if (!chip) return;
      chip.classList.add('on');
      setTimeout(function () { chip.classList.remove('on'); }, 1500);
      navigateToGloss(chip.getAttribute('data-gloss'));
    });
  }

  /* ------------------------- 移动端抽屉 ------------------------- */
  function closeDrawer() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sideBackdrop').classList.remove('show');
  }
  function bindDrawer() {
    var btn = document.getElementById('btnMenu');
    var backdrop = document.getElementById('sideBackdrop');
    if (btn) btn.addEventListener('click', function () {
      document.getElementById('sidebar').classList.toggle('open');
      backdrop.classList.toggle('show');
    });
    backdrop.addEventListener('click', closeDrawer);
  }

  /* ------------------------- 侧栏高亮 + 回顶 ------------------------- */
  function bindScrollSpy() {
    var targets = [];
    document.querySelectorAll('[data-nav]').forEach(function (el) { targets.push(el); });
    var links = {};
    document.querySelectorAll('.side-nav a[data-nav]').forEach(function (a) { links[a.getAttribute('data-nav')] = a; });
    var navBox = document.getElementById('sideNav');
    var current = null;
    var ticking = false;

    function update() {
      ticking = false;
      var best = null;
      for (var i = 0; i < targets.length; i++) {
        var el = targets[i];
        var top = el.getBoundingClientRect().top;
        if (top - 110 <= 0) best = el;
        else break;
      }
      if (!best) best = targets[0];
      var id = best.getAttribute('data-nav');
      if (id === current) return;
      current = id;
      if (current && links[current]) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
        var a = links[current];
        if (a.classList.contains('hidden')) return;
        a.classList.add('active');
        var box = a.closest('.side-nav');
        var r = a.getBoundingClientRect(), br = box.getBoundingClientRect();
        if (r.top < br.top + 8 || r.bottom > br.bottom - 8) {
          box.scrollTop += r.top - br.top - box.clientHeight / 2 + r.height;
        }
      }
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();

    var backtop = document.getElementById('backTop');
    window.addEventListener('scroll', function () {
      backtop.classList.toggle('show', window.scrollY > 700);
    }, { passive: true });
    backtop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ------------------------- 游乐场 ------------------------- */
  var PRESETS = {
    blank: '<!-- 在这里写你的 HTML，写完按 Ctrl+Enter -->\n<h1 class="text-primary">你好，Bootstrap！</h1>\n',
    grid: '<div class="container p-0">\n  <h4 class="mb-3">三栏栅格：小屏自动堆叠</h4>\n  <div class="row g-3">\n    <div class="col-12 col-md-4">\n      <div class="p-3 text-bg-primary rounded">第 1 栏</div>\n    </div>\n    <div class="col-12 col-md-4">\n      <div class="p-3 text-bg-success rounded">第 2 栏</div>\n    </div>\n    <div class="col-12 col-md-4">\n      <div class="p-3 text-bg-danger rounded">第 3 栏</div>\n    </div>\n  </div>\n</div>\n',
    card: '<div class="row g-3">\n  <div class="col-md-4">\n    <div class="card h-100 shadow-sm">\n      <div class="card-body">\n        <h5 class="card-title">卡片标题</h5>\n        <p class="card-text">把 card-title 和 card-text 换成你的内容。</p>\n        <a href="#" class="btn btn-outline-primary btn-sm">了解更多</a>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-4">\n    <div class="card h-100 shadow-sm">\n      <div class="card-body">\n        <h5 class="card-title">试试改颜色</h5>\n        <p class="card-text">把 btn-outline-primary 改成 btn-outline-success。</p>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-4">\n    <div class="card h-100 text-bg-dark">\n      <div class="card-body">\n        <h5 class="card-title">深色卡片</h5>\n        <p class="card-text">text-bg-dark 让整张卡片变深色。</p>\n      </div>\n    </div>\n  </div>\n</div>\n',
    form: '<div class="card mx-auto shadow-sm" style="max-width: 420px;">\n  <div class="card-body p-4">\n    <h4 class="mb-4 text-center">登录</h4>\n    <div class="form-floating mb-3">\n      <input type="email" class="form-control" id="pgEmail" placeholder="name@example.com">\n      <label for="pgEmail">邮箱地址</label>\n    </div>\n    <div class="form-floating mb-3">\n      <input type="password" class="form-control" id="pgPwd" placeholder="密码">\n      <label for="pgPwd">密码</label>\n    </div>\n    <div class="form-check mb-4">\n      <input class="form-check-input" type="checkbox" id="pgRemember">\n      <label class="form-check-label" for="pgRemember">记住我</label>\n    </div>\n    <button class="btn btn-primary w-100 py-2">登 录</button>\n  </div>\n</div>\n',
    navbar: '<nav class="navbar navbar-expand-md bg-body-tertiary rounded px-3">\n  <a class="navbar-brand fw-bold" href="#">我的站点</a>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pgNav">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="pgNav">\n    <ul class="navbar-nav me-auto">\n      <li class="nav-item"><a class="nav-link active" href="#">首页</a></li>\n      <li class="nav-item"><a class="nav-link" href="#">产品</a></li>\n      <li class="nav-item dropdown">\n        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">更多</a>\n        <ul class="dropdown-menu">\n          <li><a class="dropdown-item" href="#">关于我们</a></li>\n          <li><a class="dropdown-item" href="#">联系方式</a></li>\n        </ul>\n      </li>\n    </ul>\n    <form class="d-flex">\n      <input class="form-control me-2" type="search" placeholder="搜索">\n      <button class="btn btn-outline-primary">搜索</button>\n    </form>\n  </div>\n</nav>\n',
    buttons: '<div class="d-flex flex-wrap gap-2 mb-3">\n  <button class="btn btn-primary">主要按钮</button>\n  <button class="btn btn-success">成功</button>\n  <button class="btn btn-outline-danger">危险（描边）</button>\n  <button class="btn btn-warning">警告</button>\n  <button class="btn btn-link">链接样式</button>\n</div>\n<button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="我是个提示！">鼠标悬停试试</button>\n',
    page: '<nav class="navbar navbar-expand-md bg-dark rounded px-3 mb-4" data-bs-theme="dark">\n  <a class="navbar-brand fw-bold" href="#">品牌</a>\n  <ul class="navbar-nav ms-auto">\n    <li class="nav-item"><a class="nav-link active" href="#">首页</a></li>\n    <li class="nav-item"><a class="nav-link" href="#">功能</a></li>\n  </ul>\n</nav>\n<div class="text-center py-5 mb-4 rounded" style="background: linear-gradient(135deg,#e8f0ff,#f7f2ff);">\n  <h1 class="display-6 fw-bold">一句话说清你的产品</h1>\n  <p class="lead text-body-secondary mb-4">再配一句打动人心的副标题。</p>\n  <button class="btn btn-primary btn-lg px-4">立即开始</button>\n</div>\n<div class="row g-3">\n  <div class="col-md-4"><div class="p-4 border rounded-3 h-100"><h5>功能一</h5><p class="text-body-secondary mb-0">用 icon + 标题 + 描述介绍卖点。</p></div></div>\n  <div class="col-md-4"><div class="p-4 border rounded-3 h-100"><h5>功能二</h5><p class="text-body-secondary mb-0">三个并排是最常见的布局。</p></div></div>\n  <div class="col-md-4"><div class="p-4 border rounded-3 h-100"><h5>功能三</h5><p class="text-body-secondary mb-0">改改文案看效果。</p></div></div>\n</div>\n'
  };

  function buildDoc(code) {
    var css = new URL('assets/vendor/bootstrap.min.css', location.href).href;
    var icons = new URL('assets/vendor/bootstrap-icons.css', location.href).href;
    var js = new URL('assets/vendor/bootstrap.bundle.min.js', location.href).href;
    return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<link rel="stylesheet" href="' + css + '"><link rel="stylesheet" href="' + icons + '">' +
      '<style>body{padding:18px}</style></head><body>' + code +
      '<script src="' + js + '"><\/script>' +
      '<script>document.querySelectorAll(\'[data-bs-toggle="tooltip"]\').forEach(function(el){new bootstrap.Tooltip(el);});' +
      'document.querySelectorAll(\'[data-bs-toggle="popover"]\').forEach(function(el){new bootstrap.Popover(el);});<\/script>' +
      '</body></html>';
  }

  function runPlayground() {
    var frame = document.getElementById('pgFrame');
    var code = document.getElementById('pgCode').value;
    frame.srcdoc = buildDoc(code);
  }

  function openPlayground(code) {
    var el = document.getElementById('pgPanel');
    var oc = bootstrap.Offcanvas.getOrCreateInstance(el);
    if (code) document.getElementById('pgCode').value = code;
    oc.show();
    setTimeout(runPlayground, 250);
  }

  function bindPlayground() {
    var preset = document.getElementById('pgPreset');
    var ta = document.getElementById('pgCode');
    ta.value = PRESETS.grid;
    preset.addEventListener('change', function () {
      ta.value = PRESETS[preset.value] || PRESETS.blank;
      runPlayground();
    });
    document.getElementById('pgRun').addEventListener('click', runPlayground);
    document.getElementById('pgCopy').addEventListener('click', function () {
      copyText(ta.value, document.getElementById('pgCopy'));
    });
    ta.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runPlayground(); }
    });
    document.getElementById('btnPlayground').addEventListener('click', function () { openPlayground(); });
    document.getElementById('pgPanel').addEventListener('shown.bs.offcanvas', runPlayground);
  }

  /* ------------------------- 统计 ------------------------- */
  function fillStats() {
    var kp = 0, demos = 0;
    DATA.forEach(function (ch) {
      eachLeaf(ch, function (item) { kp++; if (item.demo) demos++; });
      if (ch.practice && ch.practice.demo) demos++;
    });
    var a = document.getElementById('statKp');
    var b = document.getElementById('statDemo');
    var g = document.getElementById('statGloss');
    if (a) a.textContent = kp;
    if (b) b.textContent = demos;
    if (g) g.textContent = GCOUNT;
  }

  /* ------------------------- 演示占位链接 ------------------------- */
  // 示例里的 href="#" 是占位链接，阻止它们把页面弹回顶部
  function bindPlaceholderLinks() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href="#"]');
      if (a) e.preventDefault();
    });
  }

  /* ------------------------- 启动 ------------------------- */
  function boot() {
    buildGlossIndex();
    renderSidebar();
    renderChapters();
    collectDemoJs();
    activateDemos();
    applyProgressToDom();
    bindProgress();
    bindCode();
    bindSearch();
    bindGlossary();
    bindDrawer();
    bindScrollSpy();
    bindPlayground();
    bindPlaceholderLinks();
    fillStats();
    console.log('%cBootstrap 学习手册已就绪：共 ' + DATA.length + ' 章', 'color:#7952b3;font-weight:bold');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
