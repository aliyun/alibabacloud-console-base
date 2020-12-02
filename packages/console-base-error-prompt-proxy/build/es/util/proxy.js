import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import errorPrompt, { convertToErrorDetailedInfo } from '@alicloud/console-base-error-prompt';
import { forApp } from '@alicloud/console-base-messenger';
import { getProxyErrorPrompt } from '@alicloud/console-base-global';
import pruneForMessage from './prune-for-message';

/**
 * 对 @alicloud/console-base-error-prompt 的调用转接为 @alicloud/console-base-messenger 的 forApp.promptError
 * forApp.promptError 的将由 forConsoleBase.onPromptError 最终进行处理
 */
export default function proxy(_x, _x2) {
  return _proxy.apply(this, arguments);
}

function _proxy() {
  _proxy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(o, extra) {
    var errorInfo;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errorInfo = convertToErrorDetailedInfo(o);

            if (errorInfo) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            if (getProxyErrorPrompt()) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", errorPrompt(errorInfo, extra));

          case 5:
            _context.prev = 5;
            return _context.abrupt("return", forApp.promptError({
              error: pruneForMessage(errorInfo),
              extra: pruneForMessage(extra)
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", errorPrompt(errorInfo, extra));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 9]]);
  }));
  return _proxy.apply(this, arguments);
}