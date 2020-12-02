"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hijackClickGlobal;

var _const = require("../const");

var _createClickHandler = _interopRequireDefault(require("../util/create-click-handler"));

var _handleClickGlobal = _interopRequireDefault(require("../util/handle-click-global"));

// 全局劫持就靠这句代码，使用捕获阶段
window.addEventListener('click', (0, _createClickHandler.default)(_handleClickGlobal.default, document.body), true);
/**
 * 注册一个全局劫持点击的事件，返回的方法可用以解除劫持。
 */

function hijackClickGlobal(hijacker) {
  if (!_const.GLOBAL_CLICK_HIJACKERS.includes(hijacker)) {
    // 避免同一个对象多次注册
    _const.GLOBAL_CLICK_HIJACKERS.push(hijacker);
  }

  return function () {
    var index = _const.GLOBAL_CLICK_HIJACKERS.findIndex(function (v) {
      return v === hijacker;
    });

    if (index >= 0) {
      _const.GLOBAL_CLICK_HIJACKERS.splice(index, 1);
    }
  };
}