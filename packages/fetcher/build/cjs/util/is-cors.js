"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCors;

var _extractProtocolHost = _interopRequireDefault(require("./extract-protocol-host"));

/**
 * 测试最终的请求是否跨域
 */
function isCors(_ref) {
  var url = _ref.url,
      urlBase = _ref.urlBase;
  var _window = window,
      _window$location = _window.location,
      protocol = _window$location.protocol,
      host = _window$location.host;
  var protocolHost = (0, _extractProtocolHost.default)(url);

  if (protocolHost) {
    // url 是绝对路径，则不会用到 urlBase
    return protocolHost[0] && protocolHost[0] !== protocol || protocolHost[1] !== host;
  }

  protocolHost = (0, _extractProtocolHost.default)(urlBase);
  return protocolHost ? protocolHost[0] && protocolHost[0] !== protocol || protocolHost[1] !== host : false;
}