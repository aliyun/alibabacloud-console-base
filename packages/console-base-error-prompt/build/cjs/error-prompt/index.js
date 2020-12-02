"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorPrompt;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _consoleBaseRcDialog = require("@alicloud/console-base-rc-dialog");

var _intl = _interopRequireDefault(require("../intl"));

var _convertToErrorQueueItem = _interopRequireDefault(require("../util/convert-to-error-queue-item"));

var _dialogContent = _interopRequireDefault(require("./dialog-content"));

var SOLO = {
  dialogIndirect: null,
  queue: []
};
var defaultTitle = (0, _intl.default)('alert_error:title');
var defaultButton = (0, _intl.default)('alert_error:op:ok');
/**
 * 错误弹窗
 * 
 * `o` 可以是：
 *    1. 字符串、JSX 会被当作 message
 *    2. Error 实例，里边可以有 details 对象包含要展示的信息
 *    3. plain object
 * `extra` 用于自定义 title、button
 */

function errorPrompt(_x, _x2) {
  return _errorPrompt.apply(this, arguments);
}

function _errorPrompt() {
  _errorPrompt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(o, extra) {
    var queueItem, queue, errorPromise, dialogContent, dialogIndirect;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queueItem = (0, _convertToErrorQueueItem.default)(o, extra);

            if (queueItem !== null && queueItem !== void 0 && queueItem.error) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            queue = SOLO.queue;
            errorPromise = new Promise(function (resolve) {
              queueItem.resolve = resolve;
            });
            queue.push(queueItem);
            dialogContent = /*#__PURE__*/_react.default.createElement(_consoleBaseRcDialog.AltWrap, {
              content: /*#__PURE__*/_react.default.createElement(_dialogContent.default, {
                queue: queue
              })
            });

            if (!SOLO.dialogIndirect) {
              _context.next = 10;
              break;
            }

            // dialog 已经打开
            SOLO.dialogIndirect.renderUpdate({
              content: dialogContent
            });
            return _context.abrupt("return", errorPromise);

          case 10:
            dialogIndirect = (0, _consoleBaseRcDialog.openIndirect)({
              content: dialogContent,
              title: function title(data) {
                return queue[data.page - 1].title || defaultTitle;
              },
              buttons: function buttons(data) {
                return [queue[data.page - 1].button || defaultButton];
              },
              undefinedAsReject: false,
              data: {
                page: 1
              }
            });
            SOLO.dialogIndirect = dialogIndirect;
            dialogIndirect.promise.then(function () {
              queue.forEach(function (v) {
                return v.resolve();
              });
              SOLO.dialogIndirect = null;
              SOLO.queue = [];
            });
            return _context.abrupt("return", errorPromise);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _errorPrompt.apply(this, arguments);
}