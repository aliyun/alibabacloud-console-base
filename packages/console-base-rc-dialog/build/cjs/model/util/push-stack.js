"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pushStackAll;
exports.focusDialog = focusDialog;

var _const = require("../const");

var _backdrop = require("../../rc/backdrop");

var _createStack = _interopRequireDefault(require("./create-stack"));

var _getNextElementToFocus = _interopRequireDefault(require("./get-next-element-to-focus"));

var STACK = (0, _createStack.default)();
/**
 * 找到「最顶」的 dialog，这里的最顶不一定是 id 最大的，它是指 z-index 最大的当中 id 最大的那个
 */

function findTopmost() {
  var topmostZIndex = -1;
  var topmostNumId = -1;
  STACK.each(function (v, k) {
    var zIndex = v.zIndex;
    var num = Number(k);

    if (zIndex > topmostZIndex) {
      topmostZIndex = zIndex;
      topmostNumId = num;
    } else if (zIndex === topmostZIndex && num > topmostNumId) {
      topmostNumId = num;
    }
  });
  return STACK.get(topmostNumId);
}
/**
 * 判断鼠标点击事件是否发生在 dialog 内部
 */


function inDialog(e, domDialog) {
  var el = e.target;

  while (el && el !== document.body) {
    if (el === domDialog) {
      return true;
    }

    el = el.parentElement; // eslint-disable-line no-param-reassign
  }

  return false;
}
/**
 * 将焦点局限在 dialog 中无法跳出
 */


function trapFocus(domDialog, domDialogContent, how) {
  var el = (0, _getNextElementToFocus.default)(domDialog, domDialogContent, how);

  try {
    el.focus();
    el.select();
  } catch (ex) {// ignore it
  }
}
/**
 * 全局点击事件 - 处理外部点击
 */


function handleClickExternalClick(e) {
  var topmost = findTopmost();

  if (!topmost) {
    return;
  }

  var domDialog = topmost.domDialog,
      dispatchCloseOnExternal = topmost.dispatchCloseOnExternal;

  if (inDialog(e, domDialog)) {
    return;
  }

  dispatchCloseOnExternal();
}
/*
 * 全局 ESC 管控
 */


function handleKeydownEsc(e) {
  if (e.key !== 'Escape') {
    return;
  }

  var topmost = findTopmost();

  if (!topmost) {
    return;
  }

  topmost.dispatchCloseOnEsc();
}
/**
 * 全局 tab 管控
 */


function handleMouseDownTrapTab(e) {
  if (e.key !== 'Tab') {
    return;
  }

  var topmost = findTopmost();

  if (!topmost) {
    return;
  }

  trapFocus(topmost.domDialog, topmost.domDialogContent, e.shiftKey ? _const.EDialogFocusHow.PREV : _const.EDialogFocusHow.NEXT);
  e.preventDefault();
}
/**
 * 处理背投和 z-index
 */


function doBackdropAndZIndex() {
  var topmost = findTopmost();

  if (!topmost) {
    (0, _backdrop.removeBackdrop)();
    return;
  }

  if (!topmost.backdrop) {
    return;
  }

  STACK.each(function (v) {
    if (v === topmost) {
      v.dispatchSetZIndex(-1); // 回到最顶
    } else {
      v.dispatchSetZIndex(topmost.zIndexBackdrop - 1); // 被最顶的 backdrop 压住
    }
  });
  (0, _backdrop.showBackdrop)(topmost.zIndexBackdrop);
}

function putToSack(dialogId, o) {
  var n = STACK.put(dialogId, o);
  doBackdropAndZIndex();

  if (n < 0) {
    return;
  }

  if (n === 1) {
    document.addEventListener('click', handleClickExternalClick, true);
    document.addEventListener('keydown', handleKeydownEsc, true);
    document.addEventListener('keydown', handleMouseDownTrapTab, true);
  }
}

function removeFromStack(dialogId) {
  var n = STACK.remove(dialogId);
  doBackdropAndZIndex();

  if (n < 0) {
    return;
  }

  if (n === 0) {
    document.removeEventListener('click', handleClickExternalClick, true);
    document.removeEventListener('keydown', handleKeydownEsc, true);
    document.removeEventListener('keydown', handleMouseDownTrapTab, true);
  }
}
/**
 * 压栈，每打开一个 Dialog 向各个堆栈中推入一个，并返回出栈方法（可用于 useEffect）
 */


function pushStackAll(dialogId, item) {
  putToSack(dialogId, item);
  return function () {
    return removeFromStack(dialogId);
  };
}
/**
 * 对顶层的 Dialog 进行聚焦，由 Dialog 自己手动调用（当它想在 did mount 之后重设焦点的时候）。
 */


function focusDialog(domDialog, domDialogContent) {
  var topmost = findTopmost(); // 保证只有顶层的 Dialog 可以获得焦点

  if (!topmost || domDialog !== topmost.domDialog || domDialogContent !== topmost.domDialogContent) {
    return;
  }

  trapFocus(domDialog, domDialogContent, _const.EDialogFocusHow.AUTO);
}