"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptor;

var _fetcher = require("@alicloud/fetcher");

var _getCollina = _interopRequireDefault(require("./get-collina"));

var _getUmid = _interopRequireDefault(require("./get-umid"));

var _getSecToken = _interopRequireDefault(require("./get-sec-token"));

/**
 * 对有 body 的请求，在 body 中添加阿里云安全必需的参数，这三个参数都可以可以在发送请求的时候覆盖的
 */
function createInterceptor() {
  return function (_ref) {
    var method = _ref.method,
        _ref$getCollina = _ref.getCollina,
        getCollina = _ref$getCollina === void 0 ? _getCollina.default : _ref$getCollina,
        _ref$getUmid = _ref.getUmid,
        getUmid = _ref$getUmid === void 0 ? _getUmid.default : _ref$getUmid,
        _ref$getSecToken = _ref.getSecToken,
        getSecToken = _ref$getSecToken === void 0 ? _getSecToken.default : _ref$getSecToken;

    if (!_fetcher.FetcherUtils.canHaveBody(method)) {
      return;
    }

    var body = {
      collina: getCollina(),
      umid: getUmid(),
      sec_token: getSecToken()
    };
    return {
      body: body // body 会被 mix

    };
  };
}