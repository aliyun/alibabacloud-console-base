"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jsonp;

var _const = require("../const");

var _createError = _interopRequireDefault(require("./create-error"));

var _generateCallbackName = _interopRequireDefault(require("./generate-callback-name"));

var _clearCallbackFn = _interopRequireDefault(require("./clear-callback-fn"));

var head = document.head || document.getElementsByTagName('head')[0];
/**
 * 一个「纯」的 Promise 封装的 JSONP
 * 
 * 参考 https://github.com/camsong/fetch-jsonp
 */

function jsonp() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 5000 : _ref$timeout,
      charset = _ref.charset,
      _ref$jsonpCallback = _ref.jsonpCallback,
      jsonpCallback = _ref$jsonpCallback === void 0 ? 'callback' : _ref$jsonpCallback,
      _ref$jsonpCallbackFun = _ref.jsonpCallbackFunction,
      jsonpCallbackFunction = _ref$jsonpCallbackFun === void 0 ? (0, _generateCallbackName.default)() : _ref$jsonpCallbackFun;

  var scriptElement = document.createElement('script');
  var timeoutId;
  scriptElement.src = "".concat(url).concat(url.indexOf('?') < 0 ? '?' : '&').concat(jsonpCallback, "=").concat(jsonpCallbackFunction);

  if (charset) {
    scriptElement.setAttribute('charset', charset);
  }

  head.appendChild(scriptElement); // 清除全局污染

  function cleanup() {
    (0, _clearCallbackFn.default)(jsonpCallbackFunction); // 清除 script DOM

    if (scriptElement.parentNode) {
      scriptElement.parentNode.removeChild(scriptElement);
    } // 清除 timeout


    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  }

  return new Promise(function (resolve, reject) {
    // create a callback function
    window[jsonpCallbackFunction] = function (result) {
      resolve({
        ok: true,
        url: url,
        json: function json() {
          return Promise.resolve(result);
        }
      });
      cleanup();
    };

    if (timeout > 0) {
      timeoutId = window.setTimeout(function () {
        reject((0, _createError.default)(_const.EJsonpError.TIMEOUT, "JSONP timeout after ".concat(timeout, "ms")));
        cleanup(); // 虽然 DOM 被移除了，但 JS 的加载还在继续，超时后还有可能加载完毕，需要避免这种情况下抛错
        // 注意这行一定要放在 cleanup 之后

        window[jsonpCallbackFunction] = function () {
          return (0, _clearCallbackFn.default)(jsonpCallbackFunction);
        };
      }, timeout);
    } // Caught if got 404/500


    scriptElement.onerror = function () {
      reject((0, _createError.default)(_const.EJsonpError.NETWORK, "jsonp('".concat(url, "') failed")));
      cleanup();
    };
  });
}