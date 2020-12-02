"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildUrl;

var _extractProtocolHost = _interopRequireDefault(require("./extract-protocol-host"));

var _mergeParams = _interopRequireDefault(require("./merge-params"));

var _serializeParams = _interopRequireDefault(require("./serialize-params"));

/**
 * GET / JSONP 的参数需要放到 URL 的 search 部分，这里参数 **可能** 由以下组成：
 *  - URL 中本身的 search，这部分是字符串
 *  - `params` 传入，一般是对象，但也有可能是字符串
 * 
 * 另外，原生 fetch 的 cache option 可以做到缓存控制，但是 whatwg-fetch 貌似没有对该选项进行任何处理，
 * 所以保险起见，GET 的时候加上参数，毕竟 IE11 都还没有支持 fetch
 * 
 * 这里，我们会将以上参数混合在一起，并生成一个新 URL
 */
function buildUrl(url, _ref) {
  var urlBase = _ref.urlBase,
      urlCacheBusting = _ref.urlCacheBusting,
      params = _ref.params,
      serializeOptions = _ref.serializeOptions;
  var searchIndex = url.indexOf('?');
  var urlWithoutQuery = url;
  var searchStr = '';

  if (searchIndex >= 0) {
    urlWithoutQuery = url.substring(0, searchIndex);
    searchStr = url.substring(searchIndex + 1);
  } // 传入了 urlBase 且 url 是相对路径，则需要将 urlBase 拼接在前部


  if (urlBase && !(0, _extractProtocolHost.default)(urlWithoutQuery)) {
    urlWithoutQuery = "".concat(urlBase).concat(urlWithoutQuery);
  }

  var finalParams = (0, _mergeParams.default)([searchStr, urlCacheBusting ? {
    _cache_busting_: Date.now()
  } : undefined, params], serializeOptions);
  var finalQueryStr = (0, _serializeParams.default)(finalParams, serializeOptions);
  return finalQueryStr ? "".concat(urlWithoutQuery, "?").concat(finalQueryStr) : urlWithoutQuery;
}