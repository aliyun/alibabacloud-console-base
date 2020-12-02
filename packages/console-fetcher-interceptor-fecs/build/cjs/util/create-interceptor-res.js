"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptorRes;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _const = require("../const");

var _isFecs = _interopRequireDefault(require("./is-fecs"));

var _refreshToken = _interopRequireDefault(require("./refresh-token"));

function interceptResponse(_x, _x2, _x3, _x4) {
  return _interceptResponse.apply(this, arguments);
}
/**
 * 处理 FECS 的返回，如果抛错说 TOKEN 错误，则刷新 token 并重新再请求一次
 */


function _interceptResponse() {
  _interceptResponse = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(err, config, response, request) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!(0, _isFecs.default)(config) || (err === null || err === void 0 ? void 0 : err.code) !== _const.ERROR_CODE_TOKEN_INVALID)) {
              _context.next = 2;
              break;
            }

            throw err;

          case 2:
            if (!config.tokenRefreshed) {
              _context.next = 6;
              break;
            }

            err.code = _const.ERROR_CODE_TOKEN_AFTER_REFRESH;
            err.message = _const.ERROR_MESSAGE_TOKEN_AFTER_REFRESH;
            throw err;

          case 6:
            return _context.abrupt("return", (0, _refreshToken.default)().then(function () {
              config.tokenRefreshed = true; // 避免无限循环

              return request(config);
            }, function () {
              // 刷新 token 失败，源错误修改 code 和 message 再外抛
              err.code = _const.ERROR_CODE_TOKEN_REFRESH_FAILED;
              err.message = _const.ERROR_MESSAGE_TOKEN_REFRESH_FAILED;
              throw err;
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _interceptResponse.apply(this, arguments);
}

function createInterceptorRes() {
  return interceptResponse;
}