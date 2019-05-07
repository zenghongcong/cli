/**
 * rem布局方案
 */
let rem = {
  init: (doc, win) => {
    doc = doc ? doc : document;
    win = win ? win : window;
    let user_webset_font;
    //      用原生方法获取用户设置的浏览器的字体大小(兼容ie)
    if (doc.documentElement.currentStyle) {
      user_webset_font = doc.documentElement.currentStyle["fontSize"];
    } else {
      user_webset_font = getComputedStyle(doc.documentElement, false)[
        "fontSize"
      ];
    }

    //      取整后与默认16px的比例系数
    let xs = parseFloat(user_webset_font) / 16;
    //      设置rem的js设置的字体大小
    let view_jsset_font, result_font;

    let docEl = doc.documentElement,
      resizeEvt =
        "orientationchange" in window ? "orientationchange" : "resize",
      clientWidth,
      recalc = function() {
        clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (!doc.addEventListener) return;
        if (clientWidth < 750) {
          //              设置rem的js设置的字体大小
          view_jsset_font = 100 * (clientWidth / 375);
          //              最终的字体大小为rem字体/系数
          result_font = view_jsset_font / xs;
          //              设置根字体大小
          docEl.style.fontSize = result_font + "px";
        } else {
          docEl.style.fontSize = 200 + "px";
        }
      };

    win.addEventListener(resizeEvt, recalc, false);
    recalc();
  }
};

export default rem;
