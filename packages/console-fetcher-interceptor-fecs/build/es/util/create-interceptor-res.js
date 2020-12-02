import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { ERROR_CODE_TOKEN_INVALID, ERROR_CODE_TOKEN_REFRESH_FAILED, ERROR_MESSAGE_TOKEN_REFRESH_FAILED, ERROR_CODE_TOKEN_AFTER_REFRESH, ERROR_MESSAGE_TOKEN_AFTER_REFRESH } from '../const';
import isFecs from './is-fecs';
import refreshToken from './refresh-token';

function interceptResponse(_x, _x2, _x3, _x4) {
  return _interceptResponse.apply(this, arguments);
}
/**
 * 处理 FECS 的返回，如果抛错说 TOKEN 错误，则刷新 token 并重新再请求一次
 */


function _interceptResponse() {
  _interceptResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(err, config, response, request) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isFecs(config) || (err === null || err === void 0 ? void 0 : err.code) !== ERROR_CODE_TOKEN_INVALID)) {
              _context.next = 2;
              break;
            }

            throw err;

          case 2:
            if (!config.tokenRefreshed) {
              _context.next = 6;
              break;
            }

            err.code = ERROR_CODE_TOKEN_AFTER_REFRESH;
            err.message = ERROR_MESSAGE_TOKEN_AFTER_REFRESH;
            throw err;

          case 6:
            return _context.abrupt("return", refreshToken().then(function () {
              config.tokenRefreshed = true; // 避免无限循环

              return request(config);
            }, function () {
              // 刷新 token 失败，源错误修改 code 和 message 再外抛
              err.code = ERROR_CODE_TOKEN_REFRESH_FAILED;
              err.message = ERROR_MESSAGE_TOKEN_REFRESH_FAILED;
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

export default function createInterceptorRes() {
  return interceptResponse;
}