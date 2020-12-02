import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { AltWrap, openIndirect } from '@alicloud/console-base-rc-dialog';
import intl from '../intl';
import convertToErrorQueueItem from '../util/convert-to-error-queue-item';
import DialogContent from './dialog-content';
var SOLO = {
  dialogIndirect: null,
  queue: []
};
var defaultTitle = intl('alert_error:title');
var defaultButton = intl('alert_error:op:ok');
/**
 * 错误弹窗
 * 
 * `o` 可以是：
 *    1. 字符串、JSX 会被当作 message
 *    2. Error 实例，里边可以有 details 对象包含要展示的信息
 *    3. plain object
 * `extra` 用于自定义 title、button
 */

export default function errorPrompt(_x, _x2) {
  return _errorPrompt.apply(this, arguments);
}

function _errorPrompt() {
  _errorPrompt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(o, extra) {
    var queueItem, queue, errorPromise, dialogContent, dialogIndirect;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queueItem = convertToErrorQueueItem(o, extra);

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
            dialogContent = /*#__PURE__*/React.createElement(AltWrap, {
              content: /*#__PURE__*/React.createElement(DialogContent, {
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
            dialogIndirect = openIndirect({
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