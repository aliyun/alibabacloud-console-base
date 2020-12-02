"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chooseStoreByEnv;

var _consoleBaseConfEnv = _interopRequireDefault(require("@alicloud/console-base-conf-env"));

function choosePossibleStore(_ref) {
  var dev = _ref.dev,
      daily = _ref.daily,
      pre = _ref.pre;

  if (_consoleBaseConfEnv.default.ENV_IS_DEV) {
    // 必须第一个判定
    return dev;
  }

  if (_consoleBaseConfEnv.default.ENV_IS_DAILY) {
    return daily;
  }

  if (_consoleBaseConfEnv.default.ENV_IS_PRE) {
    return pre;
  }
}
/**
 * 根据当前的判定环境选择不同的 store，提供给外部使用的工具方法
 */


function chooseStoreByEnv(logstore, otherStores) {
  return choosePossibleStore(otherStores) || logstore;
}