"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = proxy;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _consoleBaseErrorPrompt = _interopRequireWildcard(require("@alicloud/console-base-error-prompt"));

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

var _consoleBaseGlobal = require("@alicloud/console-base-global");

var _pruneForMessage = _interopRequireDefault(require("./prune-for-message"));

/**
 * 对 @alicloud/console-base-error-prompt 的调用转接为 @alicloud/console-base-messenger 的 forApp.promptError
 * forApp.promptError 的将由 forConsoleBase.onPromptError 最终进行处理
 */
function proxy(_x, _x2) {
  return _proxy.apply(this, arguments);
}

function _proxy() {
  _proxy = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(o, extra) {
    var errorInfo;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errorInfo = (0, _consoleBaseErrorPrompt.convertToErrorDetailedInfo)(o);

            if (errorInfo) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            if ((0, _consoleBaseGlobal.getProxyErrorPrompt)()) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", (0, _consoleBaseErrorPrompt.default)(errorInfo, extra));

          case 5:
            _context.prev = 5;
            return _context.abrupt("return", _consoleBaseMessenger.forApp.promptError({
              error: (0, _pruneForMessage.default)(errorInfo),
              extra: (0, _pruneForMessage.default)(extra)
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", (0, _consoleBaseErrorPrompt.default)(errorInfo, extra));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 9]]);
  }));
  return _proxy.apply(this, arguments);
}