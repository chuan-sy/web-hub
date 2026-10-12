/* ============================================================
   common.js —— 全站公共数据与工具（在章节数据文件之前加载）
   ============================================================ */

// 所有章节数据都注册到这个数组里，app.js 负责渲染
window.BS_DATA = window.BS_DATA || [];

// ------------------------------------------------------------------
// 占位图片：用内联 SVG 实时生成，不依赖网络，断网也能显示
// ------------------------------------------------------------------
(function () {
  function makeImg(w, h, txt, c1, c2, fg) {
    var svg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'>" +
      "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
      "<stop offset='0' stop-color='" + c1 + "'/><stop offset='1' stop-color='" + c2 + "'/>" +
      "</linearGradient></defs>" +
      "<rect width='" + w + "' height='" + h + "' fill='url(#g)'/>" +
      "<circle cx='" + (w * 0.86) + "' cy='" + (h * 0.2) + "' r='" + (Math.min(w, h) * 0.16) + "' fill='rgba(255,255,255,.45)'/>" +
      "<path d='M0 " + (h * 0.72) + " L" + (w * 0.3) + " " + (h * 0.4) + " L" + (w * 0.52) + " " + (h * 0.66) +
      " L" + (w * 0.72) + " " + (h * 0.34) + " L" + w + " " + (h * 0.62) + " L" + w + " " + h + " L0 " + h + " Z' fill='rgba(255,255,255,.35)'/>" +
      "<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' " +
      "font-family='Segoe UI, Microsoft YaHei, sans-serif' font-size='" + Math.round(Math.min(w, h) / 10) + "' " +
      "fill='" + fg + "' font-weight='600'>" + txt + "</text>" +
      "</svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  window.BS_PH = {
    img1: makeImg(800, 450, "示例图片 800×450", "#cfe2ff", "#eef4ff", "#2b6ed9"),
    img2: makeImg(800, 450, "风景占位图 800×450", "#d1f0e0", "#eefbf4", "#177245"),
    img3: makeImg(400, 400, "400×400", "#ecdffb", "#f8f3ff", "#6d43b0"),
    wide: makeImg(1200, 375, "宽幅横幅 1200×375", "#ffe6cc", "#fff5ea", "#a05a00")
  };
})();
