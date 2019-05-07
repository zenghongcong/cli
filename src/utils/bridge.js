
const isIOS = /ipad|iphone|iPod|Macintosh|mac os/i.test(navigator.userAgent);

/**
 * iOS创建连接桥
 * @param {Object} callback
 */
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement("iframe");
  WVJBIframe.style.display = "none";
  WVJBIframe.src = "https://__bridge_loaded__";
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
}

/**
 *调起客户端交互方法
 * @param {String} method 方法名
 * @param {Object} param 传递给客户端的数据
 * @param {Function} cb 回调函数
 */
function callHandler(method, param, cb) {
  if (isIOS) {
    setupWebViewJavascriptBridge(function(bridge) {
      bridge.callHandler(method, param, cb);
    });
  } else {
    if (window.WebViewJavascriptBridge) {
      window.WebViewJavascriptBridge.callHandler(method, param, cb);
    } else {
      document.addEventListener("WebViewJavascriptBridgeReady", function() {
        window.WebViewJavascriptBridge.callHandler(method, param, cb);
      });
    }
  }
}

export default {
  methods: {
    //调起客户端事件
    call(phone) {
      return new Promise(resolve => {
        //打电话
        callHandler("dial", phone, function(res) {
          resolve(res);
        });
      });
    },

    /**
     * 注册前端交互事件
     * @param {String} handler 事件名
     * @param {Function} cb 回调
     */
    registerHandler(handler, cb) {
      if (isIOS) {
        setupWebViewJavascriptBridge(function(bridge) {
          bridge.registerHandler(handler, cb);
        });
      } else {
        if (window.WebViewJavascriptBridge) {
          window.WebViewJavascriptBridge.registerHandler(handler, cb);
        } else {
          document.addEventListener("WebViewJavascriptBridgeReady", function() {
            window.WebViewJavascriptBridge.registerHandler(handler, cb);
          });
        }
      }
    }
  }
};
